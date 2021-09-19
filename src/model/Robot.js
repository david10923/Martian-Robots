"use strict"


class Robot{
    constructor(xCoordinate,yCoordinate,orientation,movements){
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.orientation = orientation;
        this.movements = movements;
        this.isLost= false;
    }

    // getters and setter
    XPosition(){
        return this.xCoordinate;
    }

    YPosition(){
        return this.yCoordinate;
    }

    Orientation(){
        return this.orientation;
    }    

    XPosition(xCoordinate){
        this.xCoordinate = xCoordinate;
    }

    YPosition(yCoordinate){
        this.yCoordinate = yCoordinate;
    }

    Orientation(orientation){
        this.orientation = orientation;
    }

    setMovements(movements){
        this.movements= movements;
    }


    //those are the movements that the spaceShip should do
    movements(nextStep){ 
        switch(nextStep){
            case "L":
                this.moveLeft();
                break;
            case "R":
                this.moveRight()
                break;
            case "F":
                this.moveFordward();
                break;

        }
    }

    moveLeft(){
        switch(this.orientation){
            case "N":
                this.orientation = "W";
                break;
            case "S":
                this.orientation = "E";
                break;
            case "E":
                this.orientation = "N";
                break;
            case "W":
                this.orientation = "S";
                break;
        }
    }

    moveRight(){
        switch(this.orientation){
            case "N":
                this.orientation = "E";
                break;
            case "S":
                this.orientation = "W";
                break;
            case "E":
                this.orientation = "S";
                break;
            case "W":
                this.orientation = "N";
                break;
        }
    }

    moveFordward(){
        switch(this.orientation){
            case "N":
               this.yCoordinate +=1;
                break;
            case "S":
                this.yCoordinate -=1;
                break;
            case "E":
                this.xCoordinate +=1;
                break;
            case "W":
                this.xCoordinate -=1;
                break;
        }
    }


    print(){
        console.log("Posicion x de la nave:",this.xCoordinate);
        console.log("Posicion y de la nave:",this.yCoordinate);
        console.log("Orientation de la nave:",this.orientation);
    }

    printFinalPosition(){
        console.log(this.xCoordinate+ " ",this.yCoordinate+ " ",this.orientation);
    }


}

module.exports =Robot ;