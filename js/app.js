let canvas = document.querySelector('canvas');
canvas.height= 477;
canvas.width = 960;
let c = canvas.getContext('2d');

// Load the images
var bg = new Image();
var playerLeftImg = new Image();
var playerRightImg= new Image();
var obstacle = new Image();
var marioX = 283 ;
var marioY = 365 ;
var obstacleWidth = 30;
var obstacleHeight = 50
var score = 0;
var gravityfunction = function (){
    if (marioY <365){
        marioY += 1.5 
    } else{
        marioY = marioY;
    }
};
// Timer Countdown Functions
// Every second, reduce countdown by 1. When no time is left, stop the countdown, display score, offer "try again" button. On button click, restart countdown



bg.src = "/images/background.png";
playerLeftImg.src = "images/marioleft.png";
playerRightImg.src = "images/marioright.png";
obstacle.src = "images/obstacle.png"

window.addEventListener("keydown", moveSquare, false);

function getDistance(x1,y1,x2,y2){
    let xDifference  = x2-x1
    let yDifference = y2-y1
    return Math.sqrt(Math.pow(xDifference,2) + Math.pow(yDifference,2))
};
var obstacles = [];

obstacles[0] = {
    x: 925,
    y: 365,
}

function collisionDetection(){
    for (let i = 0; i<obstacles.length; i++){
        if(marioX > obstacles[i].x && (marioX < obstacles[i].x + obstacleWidth -20) && marioY> obstacles[i].y && marioY < obstacles[i].y + obstacleHeight) {
            console.log("game Over");
            console.log(`obstacle : x = ${obstacles[i].x}`)
            console.log(`obstacle : y = ${obstacles[i].y}`)
            console.log(`MarioX : x = ${marioX}`)
            console.log(`Mario Y: ${marioY}`)
            console.log(`obstacle Width : ${obstacleWidth}`)
            console.log(`obstacle height : ${obstacleHeight}`)

            debugger
        } 
    }
}

function draw(){

    c.clearRect(0,0,canvas.width,canvas.height);

    c.drawImage(bg,0,0,canvas.width, canvas.height);
    for(let i=0; i<obstacles.length; i++){

        c.drawImage(obstacle,obstacles[i].x,365, obstacleWidth, obstacleHeight);
        
        obstacles[i].x -= 5;

        if(obstacles[i].x==350){
            obstacles.push({
                x : 925,
                y : 365,
            })
        } if(obstacles[i] == ){
            score++
        }
    };

    c.drawImage(playerRightImg, marioX ,marioY);
    c.fillStyle = "black";
    c.font = "20px arial"
    c.fillText("Score :" + score,10, 10)

    requestAnimationFrame(draw);  
    gravityfunction();
    collisionDetection();
};

function moveSquare(e){
    e.preventDefault();
    switch(e.keyCode){
        case 37:
            // left key is pressed
            if(marioX > 0) {
                marioX -= 10;
                marioY-=0;
                console.log(marioX)
            } else if (marioX<= 0){
                marioX-= 0
                marioY -= 0
            }
            // draw();
            break;
        case 32:
            // space key is pressed
            if(marioY > 0){
                (marioY-= 160);
                marioX += 0;
            } else if(marioY <=0){
                marioY -= 0;
                marioX -= 0;
            }
            // draw();
    
            break;
        case 39:
            // right key is pressed
            if(marioX < 925 ){
                marioY+= 0;
                marioX += 10;
                console.log(marioX)
            } else if(marioX >= 925){
                marioY -= 0;
                marioX += 0;
                console.log(marioX)
            }
            // draw();
    
            break;
        case 40:
            if(marioY < 365){
                marioY += 70;
                marioX -=0;
                console.log(marioY)
            } else if(marioY >= canvas.height){
                marioY -= 0;
                marioY -=0;
            }
            // draw();
            // down key is pressed
            break;
    };
}

draw();
