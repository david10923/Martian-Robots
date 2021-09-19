const ReadInput         = require('../ParseData/iodata');
const Robot     = require('./Robot');
const Grid          = require('./Grid');
const underscore    = require('underscore');



class Game{
    
    constructor(){      
        this.gridInfo = ReadInput.getGridInfo();
        this.robotsInfo = ReadInput.getRobotsInfo();
        this.robots = [];
        this.robotsOutOfBounds = [];
        this.finalInfo = [];
        let robot;
        this.GridInitializer();   
        this.RobotsInicializer();
        //this.Play();
    }


    // where the objets are build
    GridInitializer() {
        this.grid = new Grid(parseInt(this.gridInfo[0]),parseInt(this.gridInfo[1]));
    }


    RobotsInicializer(){
        // parse the movements and move the spaceship  
        let arr =[];
        let robot ;
        this.robotsInfo.forEach(function (row,i) {
            if(i % 2 === 0){ // if is pair            
                robot = new Robot(parseInt(row[0]),parseInt(row[1]),row[2]);
                arr.push(robot);
            }else{
                robot.setMovements(row[0].split(''));
            }
        });        

        this.robots = arr;
    }


    ParseFinalState(){
        let output="";

        this.finalInfo.forEach( element=>{
            output += element.xCoordinate + " "+ element.yCoordinate + " "+ element.orientation;
            if(element.isLost){
                output += " "+ "LOST";
            }
            output += "\n";
        });

       return output;
    }


    Play(){        
        let finalPosition= [];        
        this.robots.forEach((robot,i) => {
            
            while(robot.movements.length != 0 && robot.isLost == false){           
                let move = robot.movements.shift();         
                if(move == 'F'){ 
                    let robotAux = {
                        xCoordinate : robot.xCoordinate,
                        yCoordinate : robot.yCoordinate,
                        orientation : robot.orientation,
                        isLost : false
                    };
                    //check if a robot has gone out the grid before in this position and with the same orientation
                    let found = false;
                    this.robotsOutOfBounds.forEach(function(element){
                        if(element.xCoordinate == robot.xCoordinate 
                            && element.yCoordinate == robot.yCoordinate && element.orientation == robot.orientation.toString()){
                                found= true;
                        }
                    });
                   
                    if(!found){
                        robot.move(move);                         
                        if(this.checkRobotPosition(robot) == true){                            
                            this.robotsOutOfBounds.push(robotAux);
                            robotAux.isLost = true;
                            robot.isLost = true;
                            finalPosition.push(robotAux);                            
                        } 
                    }
                }else{        
                    robot.move(move);                  
                }
                              

            }
            // if the robot is not lost, is pushed in the final arrayList
            if(robot.isLost == false){
                finalPosition.push(robot);
            }

        });
        this.finalInfo = finalPosition;
       // this.ParseFinalState(finalPosition);
    }


    // the robot should be inside the grid
    checkRobotPosition(robot){ 
        if(robot.xCoordinate > this.grid.xDimension ||  robot.xCoordinate < 0 || robot.yCoordinate > this.grid.yDimension || robot.yCoordinate < 0){             
            return true;        
        }

        return false
    }

}

module.exports = Game;
