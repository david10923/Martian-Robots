const ReadInput         = require('./ReadInput');
const Robot     = require('./Robot');
const Grid          = require('./Grid');
const underscore    = require('underscore');



class Game{
    
    constructor(){
        this.grid = new Grid();       
        this.gridInfo = ReadInput.getGridInfo();
        this.robotsInfo = ReadInput.getRobotsInfo();
        this.robots = [];
        this.robotsOutOfBounds = [];
        this.GridInitializer();   
        this.RobotsInicializer();
        this.Play();
    }


    // where the objets are build
    GridInitializer() {
        this.grid.YDimension(this.gridInfo[0]);
        this.grid.XDimension(this.gridInfo[1]);
    }


    RobotsInicializer(){
        // parse the movements and move the spaceship   
        let robot ;
        let arr =[];
        this.robotsInfo.forEach(function (row,i) {
            if(i % 2 === 0){ // if is pair            
                robot = new Robot(row[0],row[1],row[2]);
                arr.push(robot);
            }else{
                robot.setMovements(row);
            }
        });        

        this.robots = arr;
    }


    ParseFinalState(finalPosition){
        console.log("La posicion final es:");
        console.log(finalPosition);
    }


    Play(){        
        let finalPosition= [];        
        this.robots.forEach(robot => {
            while(robot.movements.length >0 || robot.isLost){    
                let move= robot.movements.shift(); 
                if(move === 'F'){ 
                    let robotAux = robot;
                    //check if a robot has gone out the grid before in this position and with the same orientation
                    let found = robotsOutOfBounds.find( element => {
                        if(element.xCoordinate == robotAux.xCoordinate 
                            && element.yCoordinate == robotAux.yCoordinate && element.orientation === robotAux.orientation){
                                return true;
                        }else return false;
                    });

                    if(!found){
                        robot.movements(move);
                        if(this.checkRobotPosition()){
                            robotsOutOfBounds.push(robotAux);
                            finalPosition.push(robotAux);
                        } 
                    }
                }else{
                    robot.movements(move);
                }   

            }

            // if the robot is not lost, is pushed in the final arrayList
            if(!robot.isLost){
                finalPosition.push(robot);
            }

        });
        
        FinalState(finalPosition);
    }


    // the robot should be inside the grid
    checkRobotPosition(){       
        let lost = false;

        if(this.robot.xCoordinate > this.grid.XDimension || this.robot.xCoordinate < this.grid.XDimension){ // ERROR
            this.robot.isLost = true;    
            lost = true;        
        }
        else if(this.robot.yCoordinate > this.grid.YDimension || this.robot.yCoordinate < this.grid.yDimension){ // ERORR
            this.robot.isLost = true;  
            lost = true;
        }

        return lost;
    }

}

module.exports = Game;
