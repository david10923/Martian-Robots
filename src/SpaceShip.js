"use strict"


class SpaceShip{
    constructor(xCoordinate,yCoordinate,orientation){
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.orientation = orientation;
    }

    // XPosition(){
    //     return this.xCoordinate;
    // }

    // YPosition(){
    //     return this.yCoordinate;
    // }

    // Orientation(){
    //     return this.orientation;
    // }    

    XPosition(xCoordinate){
        this.xCoordinate = xCoordinate;
    }

    YPosition(yCoordinate){
        this.yCoordinate = yCoordinate;
    }

    Orientation(orientation){
        this.orientation = orientation;
    }

    print(){
        console.log("Posicion x de la nave:",this.xCoordinate);
        console.log("Posicion y de la nave:",this.yCoordinate);
        console.log("Orientation de la nave:",this.orientation);
    }

}

module.exports =SpaceShip ;