// událost
document.addEventListener("keydown", keyPush);
// canvas a score
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

var teloHada = [];
var delkaTela = 3;

var score = 0;

var hraJeSpustena = true;

// spuštění hry
function gameLoop() {
    if(hraJeSpustena) {
        drawStuff();
        moveStuff();
    
        setTimeout(gameLoop, 1000/fsp);
    }  
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
        delkaTela++;
        score++
        document.querySelector("h1").innerHTML = score;
    }

    teloHada.forEach(castiHada => {
        if(foodPosX === castiHada.x && foodPosY === castiHada.y) {
            resetFood();
        }
    })

    // tělo hada
    teloHada.forEach(castHada => {
        /*rectangel("#555", castHada.x, castHada.y, snakeSize, snakeSize);*/
        ring(castHada.x + snakeSize / 2, castHada.y + snakeSize /2, snakeSize / 2, "red");
    });

    // zapomenout na části těla hada
    teloHada = teloHada.slice(-1 * delkaTela);

    // had
    /*
    rectangel("black", snakePosX, snakePosY, snakeSize, snakeSize);
    */
   ring(snakePosX + snakeSize / 2, snakePosY + snakeSize /2, snakeSize / 2, "black");
}

// funkce náležící ke kreslení

function rectangel(color, positionX, positionY, width, height) {
    kontext.fillStyle = color;
    kontext.fillRect(positionX, positionY, width, height);
}

function ring(positionX, positionY, snakeSize, color) {
    kontext.beginPath();
    kontext.arc(positionX, positionY, snakeSize, 0, 2 * Math.PI, false);
    kontext.fillStyle = color;
    kontext.fill();
}
/*
<script>
      var canvas = document.getElementById('kruh');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'orange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = '#FF6600';
      context.stroke();
    </script>
*/


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

    // kolize hlavy hada s tělem hada => konec hry
    teloHada.forEach(castiHada => {
        if(snakePosX === castiHada.x && snakePosY === castiHada.y) {
            konecHry();
        }
    });

    // tělo hada
    teloHada.push({x: snakePosX, y: snakePosY});
};

function konecHry() {
    hraJeSpustena = false;
}

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
            default:
                // znovuspuštění hry
                if (! hraJeSpustena) location.reload();
                break;
    }
}