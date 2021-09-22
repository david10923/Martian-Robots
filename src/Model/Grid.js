'use strict'

class Grid {

    constructor (xDimension, yDimension) {

        this.xDimension = xDimension
        this.yDimension = yDimension

    }

    //getters and setter
    YDimension (identifier) {

        this.yDimension = identifier

    }

    XDimension (xdimension) {

        this.xDimension = xdimension

    }


    //print () {

    /*
     * console.log(
     * 'Tamaño x del grid:',
     * this.xDimension
     * )
     * console.log(
     * 'Tamaño y del grid:',
     * this.yDimension
     * )
     */

    //}

}

module.exports = Grid
