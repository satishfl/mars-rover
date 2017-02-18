var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover) {
  switch(rover.direction) {
  case 'N':
    rover.direction = "E";
    break;
  case 'E':
    rover.direction = "S";
    break;
  case 'S':
    rover.direction = "W";
    break;
  case 'W':
    rover.direction = "N";
    break;
  }

  console.log("New Rover Direction: " + rover.direction);
}

function turnLeft(rover) {
  switch(rover.direction) {
  case 'N':
    rover.direction = "W";
    break;
  case 'E':
    rover.direction = "N";
    break;
  case 'S':
    rover.direction = "E";
    break;
  case 'W':
    rover.direction = "S";
    break;
  }

  console.log("New Rover Direction: " + rover.direction);
}

var commands = "bbxxffrxxffllfllbbb";
var commandArray = commands.split("");

console.log(commandArray);

for (var i = 0; i < commandArray.length; i++) {
  switch (commandArray[i]) {
    case 'f':
      goForward(myRover);
      break;
    case 'b':
      goBackward(myRover);
      break;
    case 'r':
      turnRight(myRover);
      break;
    case 'l':
      turnLeft(myRover);
      break;
    default:

  }

}
