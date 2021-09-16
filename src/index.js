"use strict"

const path          = require('path');
const fs            = require('fs');
const SpaceShip     = require('./SpaceShip');
const Grid          = require('./Grid');
const readline      = require('readline');
const textFile      = "file.txt";
let text = "";


//Inicializate the Objects 
let grid = new Grid();
let spaceShip = new SpaceShip();


// This variables are used to char by char and line by line
let i =1;
let j = 0;


// A method to read line by line
const readInterface = readline.createInterface({
    input: fs.createReadStream(textFile),
    output: process.stdout,
    console: false
});





// I read the text line by line and i process each line
readInterface.on('line', function(line) {    

        
    // I trim and split the line to remove the spaces

    let separator =line.trim().split(" ");  
    

    // I go over the separator object and I fill
    for (let lineAux in separator){        
        switch(i){
            case 1: // this is the line where you know the grid dimensions                  
                if(j == 0 ){
                    grid.XDimension(parseInt(separator[lineAux]));
                }else{
                    grid.YDimension(parseInt(separator[lineAux]));
                }    
                j++;           
    
                break;
            case 2: // this is the line where you know where is the spaceShip located and which is the orientation

                if(j == 0 ){
                    spaceShip.XPosition(separator[lineAux]);
                }else if(j==1){
                    spaceShip.YPosition(separator[lineAux]);
                }else{
                    spaceShip.Orientation(separator[lineAux]);
                }    
                j++; 
                
                break;
            case 3:
    
                break;
        }
        
    }

    i++;
    j=0;    
  
});


console.log(spaceShip.print());
console.log(grid.print());



