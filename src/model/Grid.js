"use strict"

class Grid{
    constructor(xDimension,yDimension){
        this.xDimension = xDimension;
        this.yDimension = yDimension;
    }

    // getters and setter
    YDimension (y){
        this.yDimension = y;
    }

    XDimension(xdimension){
        this.xDimension = xdimension;
    }


    YDimension (){
       return this.yDimension;
    }

    XDimension(){
       return this.xDimension;
    }

    print(){
        console.log("Tamaño x del grid:",this.xDimension);
        console.log("Tamaño y del grid:",this.yDimension);
    }
};

module.exports = Grid;