let canvas = document.querySelector('canvas');
canvas.height= 477;
canvas.width = 960;
let c = canvas.getContext('2d');

// Create Variables
var bg = new Image();
var playerLeftImg = new Image();
var playerRightImg= new Image();
var obstacle = new Image();
var px = 0;
var py = 0;
var gameOver = new Image();
gameOver.src= "images/gameover.jpg"
timeLeft = 30;
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




bg.src = "/images/background.png";
playerLeftImg.src = "images/marioleft.png";
playerRightImg.src = "images/marioright.png";
obstacle.src = "images/obstacle.png"

window.addEventListener("keydown", moveSquare, false);

// function getDistance(x1,y1,x2,y2){
//     let xDifference  = x2-x1
//     let yDifference = y2-y1
//     return Math.sqrt(Math.pow(xDifference,2) + Math.pow(yDifference,2))
// };
var obstacles = [];

obstacles[0] = {
    x: 925,
    y: 280,
}
var obstacleX = 925;
var obstacleY = 365;
var speed = 4;

let alive = true;

const gameOverFunc = () => {
    // c.clearRect(0,0,canvas.width,canvas.height);
    // c.fillStyle = "yellow";
    // c.font = "50px Bungee Shade";
    // c.fillText("Game Over",canvas.width,canvas.height);
    // document.getElementsByClassName('game-over')[0].innerText = `GAME OVER`
    // document.getElementsByClassName('game-over')[0].id = 'show'
    document.getElementsByClassName('game-over')[0].innerText = `GAME OVER`
    document.getElementsByClassName('game-over')[0].id = 'show'
    
}

function collisionDetection(){
    for (let i = 0; i<obstacles.length; i++){
        if(marioX > obstacles[i].x && marioX < obstacles[i].x + obstacleWidth  && marioY > obstacles[i].y && marioY < obstacles[i].y + obstacleHeight + 50) {
        //     console.log(`${obstacles[i].x}`)
        // if(marioX == obstacles[i].x && marioY == obstacles[i].y){
            console.log("game Over");
            console.log(`obstacle : x = ${obstacles[i].x}`)
            console.log(`obstacle : y = ${obstacles[i].y}`)
            console.log(`MarioX : x = ${marioX}`)
            console.log(`Mario Y: ${marioY}`)
            console.log(`obstacle Width : ${obstacleWidth}`)
            console.log(`obstacle height : ${obstacleHeight}`)
            
            console.log('hit')
            // document.getElementById('marioCanvas').after('<p>HIT</p>');
            alive=false;
        } 
        
    }
};
var time = 0;
const timer = function(){
    setInterval(() => {time++; }, 1000)}


function draw(){
    c.clearRect(0,0,canvas.width,canvas.height);

    c.drawImage(bg,0,0,canvas.width, canvas.height);

    for(let i=0; i<obstacles.length; i++){

        c.drawImage(obstacle,obstacles[i].x,360, obstacleWidth, obstacleHeight);
        
        obstacles[i].x -= 1 * (time/3)

        // obstacles[i].x -= speed;
        if(obstacles[i].x < 0){
            obstacles.shift();
        }


        if(obstacles[obstacles.length-1].x < 355){
            obstacles.push(
                {
                x : 925,
                y : 280,
                })
                speed++
            }
            
    };

    c.drawImage(playerRightImg, marioX ,marioY);
    c.fillStyle = "black";
    c.font = "20px arial"
    c.fillText("Time :" +time,10, 30)

    
    gravityfunction();
    if(alive) collisionDetection();
    if(alive) requestAnimationFrame(draw); 
    if(!alive) requestAnimationFrame(gameOverFunc); 
};

// draw();


function moveSquare(e){
    e.preventDefault();
    switch(e.keyCode){
        case 37:
            // left key is pressed
            if(marioX -70 > 0) {
                marioX -= 70;
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
            if(marioY > 300){
                (marioY-= 130);
                marioX += 0;
            } else if(marioY <=0){
                marioY -= 0;
                marioX -= 0;
            }
            // draw();
    
            break;
        case 39:
            // right key is pressed
            if(marioX +70 < 925 ){
                marioY+= 0;
                marioX += 70;
                console.log(marioX)
            } else if(marioX >= 925){
                marioY -= 0;
                marioX += 0;
                console.log(marioX)
            }
            // draw();
    
            break;
        case 40:
            if(marioY +70 < 365){
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

function startGame(){
    draw();
    timer();
}
function resetGame(){
    startGame();
}

document.getElementById("Start").addEventListener("click", startGame, false)
// document.getElementsByClassName('game-over').addEventListener('click', resetGame, false)

