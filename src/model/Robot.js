
"use strict"


class Robot{
    constructor(xCoordinate,yCoordinate,orientation){
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.orientation = orientation;
        this.movements  = "";
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
    move(nextStep){ 
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
               this.yCoordinate++;
                break;
            case "S":
                this.yCoordinate--;
                break;
            case "E":
                this.xCoordinate ++;
                break;
            case "W":
                this.xCoordinate--;
                break;
        }
    }


    print(){
        console.log("Posicion x del robot:",this.xCoordinate);
        console.log("Posicion y del robot:",this.yCoordinate);
        console.log("Orientation del robot:",this.orientation);
        console.log("El robot se ha salido:",this.isLost.toString());
        console.log("Movimientos del robot:",this.movements);
       
    }

    printFinalPosition(){
        console.log(this.xCoordinate+ " ",this.yCoordinate+ " ",this.orientation);
    }


}

module.exports = Robot ;