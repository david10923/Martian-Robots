# Martian-Robots
The surface of Mars can be modelled by a rectangular grid around which robots are
able to move according to instructions provided from Earth. You are to write a program
that determines each sequence of robot positions and reports the final position of the
robot.

# System Requirements
You must have NodeJS installed.

# Building
npm has been used to manage the dependencies of the application. To install dependecies and build run:

- npm install
- npm install --save node
- npm install --save underscore

# Running
1. Edit the inputfile located in "src/Files/file.txt" to write down your test cases.
2. Run the application with the command below:
    - node index.js
3. Check the outputFile located in "src/Files/OutPut.txt" to check out the outcome. 


# Desing 
Here you can check the file design:

- src 
    - Files
        - file.txt
        - OutPut.txt
    - Model
        - Game  : where the logic of the game is written.
        - Grid  : where the logic of the grid is written.
        - Robot : where the logic of the robot is written.
    - ParseData 
        - iodata : where the data is parsed from the input and also where the write logic is written.
    index.js 



# Extra info
To find out more info about the game you can check the MartianRobots pdf added in the root directory.

