"use strict"

const path               = require('path');
const fs                 = require('fs');
let underscore           = require('underscore');
const textFile           = "./Files/file.txt";
const outputData             =  "./Files/OutPut.txt";

const maxGrid = 50;
const maxInstructions = 100;


function parseData(){
   let inputData  = fs.readFileSync(textFile, 'utf8');   
   return underscore.compact(inputData.split("\n"));
};



//Info about the grid
function getGridInfo (){
    let gridInfo = parseData()[0].replace(/(\r\n|\n|\r)/gm,"").split(" ");

    if(gridInfo.length > maxGrid){
        throw new Error("The maximum value for any coordinate is 50!");
    }else{
        return gridInfo;
    }  
};

//info about the robot
function getRobotsInfo(){
    // I remove the data of the grid
    let robotsInfo = parseData();
    robotsInfo.shift();
    
    let arr = [];
    robotsInfo.forEach( function (row,i){
        arr.push(row.replace(/(\r\n|\n|\r)/gm,"").split(" "));
    });
    
    return arr;
};

//the info about the steps the spaceship shuold follow
function getStepsInfo(){

    let stepsInfo = parseData()[2].replace(/(\r\n|\n|\r)/gm,"").split(" ");

    if(stepsInfo.length > maxInstructions){
        throw new Error("All instruction strings will be less than 100 characters in length!");
    }else
        return stepsInfo;
}

let write = function(output){
    fs.writeFile(outputData, output, (err) => {
        if (err) throw err;
    })
};



module.exports={
    getGridInfo         :getGridInfo,
    getRobotsInfo       :getRobotsInfo,
    getStepsInfo        :getStepsInfo,
    write               :write
}