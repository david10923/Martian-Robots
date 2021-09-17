"use strict"

const path               = require('path');
const fs                 = require('fs');
let underscore           = require('underscore');
const textFile           = "file.txt";


// function Info(){
//  let gridInfo = getGridInfo();
//  let robotsData = getRobotsInfo();

//  console.log("Datos del grid:",gridInfo);
//  console.log("Datos del robot:",robotsData);
// }


function parseData(){
   let inputData  = fs.readFileSync(textFile, 'utf8');   
   return underscore.compact(inputData.split("\n"));
};



//LA OPCION QUE SE ME OCURRE ES LLAMAR AL GAME CON EL ROBOT QUE ESTAS AHORA MISMO POR LO QUE LO VAS A REALIZAR TANTAS FILAS ENTRE 3 COMO TENGA EL TEXTO

//Info about the grid
function getGridInfo (){
    return parseData()[0].replace(/(\r\n|\n|\r)/gm,"").split(" ");
};

//info about the robot
function getRobotsInfo(){
    return parseData()[1].replace(/(\r\n|\n|\r)/gm,"").split(" ");
};

//the info about the steps the spaceship shuold follow
function getStepsInfo(){
    return parseData()[2].replace(/(\r\n|\n|\r)/gm,"").split(" ");
}


module.exports={
    getGridInfo         :getGridInfo,
    getRobotsInfo       :getRobotsInfo,
    getStepsInfo        :getStepsInfo
}