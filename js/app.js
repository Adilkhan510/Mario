let canvas = document.querySelector('canvas');
canvas.height= 477;
canvas.width = 960;
let c = canvas.getContext('2d');

// Load the images
var bg = new Image();
var playerLeftImg = new Image();
var playerRightImg= new Image();
var obstacle = new Image();
var px = 0;
var py = 0;
var marioX = 283 ;
var marioY = 365 ;
var gravityfunction = function (){
    if (marioY <365){
        marioY += 1.5 
    } else{
        marioY = marioY;
    }
}



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
    y: 280,
}
var obstacleX = 925;
var obstacleY = 365;

function gameOver(){
    if(marioX === obstacleX && marioY === 365){
        alert("game over")
    }
}

function draw(){

    c.clearRect(0,0,canvas.width,canvas.height);

    c.drawImage(bg,0,0,canvas.width, canvas.height);
    for(let i=0; i<obstacles.length; i++){

        c.drawImage(obstacle,obstacles[i].x,360, 50, 30);
        
        obstacles[i].x -= 1;

        if(obstacles[i].x==310){
            obstacles.push({
                x : 925,
                y : 280,
            })
        }
    }
  
    // c.drawImage(playerLeftImg, 20, 20 )
    c.drawImage(playerRightImg, marioX ,marioY);
    // c.drawImage(obstacle,280, 255, 50,50);
    // console.log(getDistance(,200,marioX,marioY))

    requestAnimationFrame(draw);  
    gravityfunction();
    gameOver();
};
draw();

function moveSquare(e){
    e.preventDefault();
    switch(e.keyCode){
        case 37:
            // left key is pressed
            if(marioX > 0) {
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
