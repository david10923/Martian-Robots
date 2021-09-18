const ReadInput         = require('./ReadInput');
const Robot     = require('./Robot');
const Grid          = require('./Grid');
const underscore    = require('underscore');



class Game{
    
    constructor(){
        this.grid = new Grid();       
        this.gridInfo = ReadInput.getGridInfo();
        this.robotsInfo = ReadInput.getRobotsInfo();
        let robots = [];
        let robotsOutOfBounds = [];
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
        this.robotsInfo.forEach(function (row,i) {
            if(i % 2 === 0){ // if is pair            
                robot = new Robot(row[0],row[1],row[2]);
                this.robots.push(robot);
            }else{
                robot.setMovements(row);
            }
        });        
    }


    Play(){        
        let finalPosition= [];        
        robots.forEach(robot => {
            while(robot.movements.length >0){    
                let move= robot.movements.shift(); 
                if(move === 'F'){ // check if other spaceship has gone out
                    let robotAux = robot;
                    //i check if a robot has gone out the grid before
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
                        } 
                    }
                }else{
                    robot.movements(move);
                }   

            }

            // FALTAAAAAAAAAAAAAAAAAAA
            if(robot.isLost){
                finalPosition.push();
            }else{

            }

        });
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
