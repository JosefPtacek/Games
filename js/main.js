var canvas = document.querySelector("canvas");
var kontext = canvas.getContext("2d");

var snakeSize = 50;
var snakePosX = 0;
var snakePosY = canvas.width / 2;

var snakeSpeed = 50;
var fsp = 8;

function gameLoop() {
    drawStuff();
    moveStuff();
    
    setTimeout(gameLoop, 1000/fsp);
}

gameLoop();
 
// kreslení
function drawStuff() {
    kontext.fillStyle = "white"
    kontext.fillRect(0, 0, canvas.width, canvas.height);

    kontext.fillStyle = "black";
    kontext.fillRect(snakePosX, snakePosY, snakeSize, snakeSize);
};

// pohyb
function moveStuff() {
    snakePosX += snakeSpeed;

    if(snakePosX > canvas.width) {
        snakePosX = 0;
    }
};