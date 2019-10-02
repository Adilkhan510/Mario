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
var marioX = 285 ;
var marioY = 365 ;
var gravity = -4.5
var obstacles = [];

obstacles[0] = {
    x:canvas.width,
    y: 280
};


bg.src = "/images/background.png";
playerLeftImg.src = "images/marioleft.png";
playerRightImg.src = "images/marioright.png";
obstacle.src = "images/obstacle.png"

window.addEventListener("keydown", moveSquare, false);

function draw(){

    c.clearRect(0,0,canvas.width,canvas.height)
    // for(let i=0; i<obstacles.length; i++){
    //     c.drawImage(obstacle,obstacles[i].x,obstacles[i].y, 50, 50);
    //     console.log(obstacles[i].x -= 1);
    // }
    c.drawImage(bg,0,0,canvas.width, canvas.height);
    // c.drawImage(playerLeftImg, 20, 20 )
    c.drawImage(playerRightImg, marioX ,marioY);
    // c.drawImage(obstacle,280, 255, 50,50);
    requestAnimationFrame(draw);  
    marioY -= gravity;
};
draw();

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
            draw();
            break;
        case 32:
            // space key is pressed
            if(marioY > 0){
                (marioY-= 60) + gravity;
                marioX += 0;
            } else if(marioY <=0){
                marioY -= 0;
                marioX -= 0;
            }
            draw();
    
            break;
        case 39:
            // right key is pressed
            if(marioX < canvas.width){
                marioY+= 0;
                marioX += 10;
            } else if(marioX >= canvas.width){
                marioY -= 0;
                marioX -=0;
            }
            draw();
    
            break;
        case 40:
            if(marioY < 365){
                marioY += 10;
                marioX -=0;
                console.log(marioY)
            } else if(marioY >= canvas.height){
                marioY -= 0;
                marioY -=0;
            }
            draw();
            // down key is pressed
            break;
    };
}

draw();
