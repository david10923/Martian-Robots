"use strict"

class Grid{
    constructor(xDimension,yDimension){
        this.xDimension = xDimension;
        this.yDimension = yDimension;
    }

    YDimension (y){
        this.yDimension = y;
    }

    XDimension(xdimension){
        this.xDimension = xdimension;
    }

    print(){
        console.log("Posicion x del grid:",this.xDimension);
        console.log("Posicion y del grid:",this.yDimension);
    }
};

module.exports = Grid;