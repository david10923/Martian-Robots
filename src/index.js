"use strict"
const Game               = require('../src/model/Game');
const write              = require('../src/ParseData/iodata');
const fs                 = require('fs');

//read the file and init the game

let game = new Game();
game.Play();
write.write(game.ParseFinalState());





