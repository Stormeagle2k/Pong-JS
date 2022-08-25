import megaObject from "./megaObject"
export default class Ball extends megaObject{
    constructor( width, height, color, pen, canvasDetails, vx = 15, vy = 10){
        let x = Math.floor(Math.random() * 1000);
        let y = Math.floor(Math.random() * 220)
        super(x, y, width, height, color, pen, canvasDetails, vx, vy)
        this.isCollision = false
        this.isOutOfBounds = false
        this.score = 0
        this.MAXSPEED = 25;
    }
    _bounce(isX){
        if(isX){
            this.vx *= -1
        }  
        else{
            this.vy *= -1
        }
    }
    _update(){
        if(this.y < 0){
            this._bounce(false)
        }
        if(this.x > this.canvasDetails.width - this.width || this.x < 0){
            this._bounce(true)
        }
        if(this.y >= this.canvasDetails.height + this.height){
            this.isOutOfBounds = true;
            this.x = this.canvasDetails.width/2;
            this.y = this.canvasDetails.height/2;
            

        }
        //const FPS = 1000/30
        this.x += this.vx
        this.y += this.vy
    }
}