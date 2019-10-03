let canvas = document.querySelector('canvas');
canvas.height= 477;
canvas.width = 960;
let c = canvas.getContext('2d');


class Game {
    constructor(){
        this.backgroundImg = new Image();
        this.backgroundImg.src = "images/back.png";
        this.objects = [];
        this.objectImg = new Image();
        this.objectImg.src = "images/obstacle.png"
        this.objectSpeed = 2;
        this.score = 0;
        this.Playerimg = new Image();
        this.Playerimg.src = "images/marioright.png";
    };

    createMario(){
        c.drawImage(this.Playerimg,283, 365,)
    }
    createScoreBoard(){
        c.fillStyle = "black";
        c.font = "20px arial"
        c.fillText("Score :" + this.score,10, 10)
    }
    createAnObject(){
        let width = 40;
        let height = 50;
        let x = 925;
        let y = 280;
        

        let object = {
            width : width,
            height : height,
            x : x,
            y : y,
        }
        // Store object in the object array
        this.objects.push(object);
    }
    // Draw the background image
    drawBackgroundImg(){
        c.clearRect(0,0,canvas.width,canvas.height);
        c.drawImage(this.backgroundImg,0,0,canvas.width,canvas.width);
    }
    // give created object a picture
    drawObjects(){
        for(let i=0; i<this.objects.length; i++){
        let o = this.objects[i];
        c.drawImage(this.objectImg, o.x, o.y, o.width,o.height)
        }; 
    }
    // After drawing an object, create a function to move the object across the screen.
    moveObjects(){
        for(let i = 0; i<this.objects.length; i++){
            this.objects[i].x -= this.objectSpeed;
        };
    }
    createNewObject(){
        if(this.objects[0].x === 350){
            this.createAnObject();
        };
        if(this.objects[0].x <=0){
            this.objects.shift();
            this.score += 1;
        };
    };
    startGame(){
        this.draw();
    }
    draw(){
        this.createAnObject();
        this.drawObjects();
        this.drawBackgroundImg();
        this.moveObjects();
        window.requestAnimationFrame(this.draw())
    }
}

const mario = new Game();
mario.startGame();

class Player {
    constructor(){
        this.playerScore = 0;
        this.Playerimg = new Image();
        this.Playerimg.src = "images/marioright.png";

    }
}