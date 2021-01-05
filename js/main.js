// událost
document.addEventListener("keydown", keyPush);
// canvas
var canvas = document.querySelector("canvas");
var kontext = canvas.getContext("2d");

// player
var snakeSize = 50;
var snakePosX = 0;
var snakePosY = canvas.width / 2;

var snakeSpeed = 50;
var fsp = 8;

var velocityPosX = 1; 
var velocityPosY = 0;

// spuštění hry
function gameLoop() {
    drawStuff();
    moveStuff();
    
    setTimeout(gameLoop, 1000/fsp);
}

gameLoop();
 
// kreslení
function drawStuff() {
    // pozadí
    rectangel("white", 0, 0, canvas.width, canvas.height);

    // jídlo 
    rectangel("blue", 250, 250, snakeSize, snakeSize);

    // had
    rectangel("black", snakePosX, snakePosY, snakeSize, snakeSize);
};

function rectangel(color, positionX, positionY, width, height) {
    kontext.fillStyle = color;
    kontext.fillRect(positionX, positionY, width, height);
}

// pohyb
function moveStuff() {
    snakePosX += snakeSpeed * velocityPosX;
    snakePosY += snakeSpeed * velocityPosY;

    // kolize stěny s hadem
    if(snakePosY < 0) {
        snakePosY = canvas.height;
    }
    if(snakePosY > canvas.height) {
        snakePosY = 0;
    }
    if(snakePosX < 0) {
        snakePosX = canvas.width;
    }
    if(snakePosX > canvas.width) {
        snakePosX = 0;
    }
    
};

// pohyb klávesnicí
function keyPush(event) {
    switch(event.key) {
        case "ArrowUp":
            if(velocityPosY !== 1) {
                velocityPosX = 0;
                velocityPosY = -1;
            }
            break;
        case "ArrowDown":
            if(velocityPosY !== -1) {
                velocityPosX = 0;
                velocityPosY = 1;
            }
            break;
        case "ArrowLeft":
            if(velocityPosX !== 1) {
                velocityPosX = -1;
                velocityPosY = 0;
            }
            break;
        case "ArrowRight":
            if(velocityPosX !== -1) {
                velocityPosX = 1;
                velocityPosY = 0;
            }
            break;
    }
}