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

var foodPosX
var foodPosY

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
    rectangel("gold", 0, 0, canvas.width, canvas.height);

    // kachličky
    kachlicky();

    // jídlo 
    rectangel("blue", foodPosX, foodPosY, snakeSize, snakeSize);

    if(snakePosX === foodPosX && snakePosY === foodPosY) {
        resetFood();
    }

    // had
    rectangel("black", snakePosX, snakePosY, snakeSize, snakeSize);
}

// funkce náležící ke kreslení
function rectangel(color, positionX, positionY, width, height) {
    kontext.fillStyle = color;
    kontext.fillRect(positionX, positionY, width, height);
}

function resetFood() {
    var nahodneCisloX = Math.floor(Math.random() * canvas.width / snakeSize);
    var nahodneCisloY = Math.floor(Math.random() * canvas.width / snakeSize);
    foodPosX = snakeSize * nahodneCisloX;
    foodPosY = snakeSize * nahodneCisloY;
}

resetFood();

function kachlicky() {
    for(var i = 0; i < canvas.width / snakeSize; i++) 
        for(var j = 0; j < canvas.height / snakeSize; j++) {
        rectangel("white", snakeSize * i, snakeSize * j, snakeSize - 1, snakeSize - 1);
    } 
}

// pohyb
function moveStuff() {
    snakePosX += snakeSpeed * velocityPosX;
    snakePosY += snakeSpeed * velocityPosY;

    // kolize stěny s hadem
    if(snakePosY > canvas.height - snakeSize) {
        snakePosY = 0;
    }
    if(snakePosY < 0) {
        snakePosY = canvas.height;
    }
    if(snakePosX > canvas.width - snakeSize) {
        snakePosX = 0;
    }
    if(snakePosX < 0) {
        snakePosX = canvas.width;
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