const ReadInput         = require('./ReadInput');
const SpaceShip     = require('./SpaceShip');
const Grid          = require('./Grid');



class Game{
    
    constructor(index){
        this.spaceShip = new SpaceShip();
        this.grid = new Grid();
        this.movements= ReadInput.getStepsInfo();
        this.gridInfo = ReadInput.getGridInfo();
        this.spaceShipInfo = ReadInput.getRobotsInfo();
        this.Initializer();
        this.Play();     
        this.isLost = false;   
    }


    // where the objets are build
    Initializer() {        
        
        // let gridInfo = ReadInput.getGridInfo();        
        // let spaceShipInfo = ReadInput.getRobotsInfo();

        this.spaceShip.XPosition(spaceShipInfo[0]);
        this.spaceShip.YPosition(spaceShipInfo[1]);
        this.spaceShip.Orientation(spaceShipInfo[2]);

        this.grid.YDimension(gridInfo[0]);
        this.grid.XDimension(gridInfo[1]);
    }


    Play(){

        
    }


    // the spaceShip should be inside the grid
    checkSpaceShipPosition(){     
        if(this.spaceShip.xCoordinate() > this.grid.XDimension() || this.spaceShip.xCoordinate() < this.grid.XDimension()){ // ERROR
            this.isLost = true;
        }
        else if(this.spaceShip.yCoordinate() > this.grid.YDimension() || this.spaceShip.yCoordinate() < this.grid.yDimension()){ // ERORR
            this.isLost = true;
        }
    }

    

}


let game = new Game();
