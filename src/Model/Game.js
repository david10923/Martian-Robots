'use strict'

const ReadInput         = require('../ParseData/iodata')
const Robot     = require('./Robot')
const Grid          = require('./Grid'),
    first = 1,
    minimun = 0,
    second = 2;


class Game {

    constructor () {

        this.gridInfo = ReadInput.getGridInfo()
        this.robotsInfo = ReadInput.getRobotsInfo()
        this.robots = []
        this.robotsOutOfBounds = []
        this.finalInfo = []
        this.GridInitializer()
        this.RobotsInicializer()

    }

    //where the grid is built
    GridInitializer () {

        this.grid = new Grid(
            parseInt(
                this.gridInfo[minimun],
                10
            ),
            parseInt(
                this.gridInfo[first],
                10
            )
        )

    }

    RobotsInicializer () {

        //parse the movements and move the spaceship
        let arr = [],
            robot
        this.robotsInfo.forEach((row, index) => {

            //if is pair
            if (index % second === minimun) {

                robot = new Robot(
                    parseInt(
                        row[minimun],
                        10
                    ),
                    parseInt(
                        row[first],
                        10
                    ),
                    row[second]
                )
                arr.push(robot)

            } else {

                robot.setMovements(row[minimun].split(''))

            }

        })

        this.robots = arr

    }

    //this method is used to write the data in the correct format
    ParseFinalState () {

        let output = ''

        this.finalInfo.forEach((element) => {

            output += `${element.xCoordinate}
             ${element.yCoordinate} 
            ${element.orientation}`
            if (element.isLost) {

                output += ' LOST'

            }
            output += '\n'

        })

        return output

    }

    Play () {

        let finalPosition = []
        this.robots.forEach((robot) => {

            while (robot.movements.length !== minimun &&
                    robot.isLost === false) {

                let move = robot.movements.shift()
                if (move === 'F') {

                    let found = false,
                        robotAux = {
                            "isLost": false,
                            "orientation": robot.orientation,
                            "xCoordinate": robot.xCoordinate,
                            "yCoordinate": robot.yCoordinate
                        }

                    /*
                     * check if a robot has gone out
                     * the grid before in this position
                     * and with the same orientation
                     */

                    this.robotsOutOfBounds.forEach((element) => {

                        if (element.xCoordinate === robot.xCoordinate &&
                            element.yCoordinate === robot.yCoordinate &&
                            element.orientation === robot.orientation.toString()) {

                            found = true

                        }

                    })

                    if (!found) {

                        robot.move(move)
                        if (this.checkRobotPosition(robot) === true) {

                            this.robotsOutOfBounds.push(robotAux)
                            robotAux.isLost = true
                            robot.isLost = true
                            finalPosition.push(robotAux)

                        }

                    }

                } else {

                    robot.move(move)

                }

            }
            //if the robot is not lost, is pushed in the final arrayList
            if (robot.isLost === false) {

                finalPosition.push(robot)

            }

        })
        this.finalInfo = finalPosition

    }

    //the robot should be inside the grid
    checkRobotPosition (robot) {

        if (robot.xCoordinate > this.grid.xDimension ||
             robot.xCoordinate < minimun ||
             robot.yCoordinate > this.grid.yDimension ||
              robot.yCoordinate < minimun) {

            return true

        }

        return false

    }

}

module.exports = Game
