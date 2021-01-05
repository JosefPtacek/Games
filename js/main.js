var canvas = document.querySelector("canvas");
var kontext = canvas.getContext("2d");

var snakeSize = 50;
var snakePosX = 0;
var snakePosY = canvas.width / 2;

kontext.fillStyle = "black";
kontext.fillRect(snakePosX, snakePosY, snakeSize, snakeSize);
