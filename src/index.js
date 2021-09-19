"use strict"
const Game               = require('./Game');
const fs                 = require('fs');

//read the file and init the game

let game = new Game();



let write = function(output){
    fs.writeFile('Output.txt', data, (err) => {
        if (err) throw err;
    })
};



