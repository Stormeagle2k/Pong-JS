import Ball from "./ball";
import megaObject from "./megaObject";



//create a method to control the paddle
class Paddle extends megaObject{
    constructor(x, y, width, height, color, pen, canvasDetails, vx, vy){
        super(x, y, width, height, color, pen, canvasDetails, vx, vy)
        this._isMoving = false;
        window.addEventListener('keyup', (e)=>{
            if(e.key === 'd' || e.key === 'a'){
                this._isMoving = false;
            }
        });
        window.addEventListener("keydown", (e)=>{
        if(e.key === "d"){
            if(this.x + this.width > this.canvasDetails.width){
                this.vx = 0;
                this._isMoving = false;
                return
            }
            this.vx += this.acceleration;
            this._isMoving = true;
            if(this.vx > this.MAXSPEED){
                this.vx = this.MAXSPEED
            }
        } else if(e.key === "a"){
            if(this.x <= 0){
                this.vx = 0
                this._isMoving = false;
                return
            }
            this.vx -= this.acceleration
            this._isMoving =true;
            if(Math.abs(this.vx) > this.MAXSPEED){
                this.vx = this.MAXSPEED * -1
            }
        } 
        })
        window.addEventListener("keydown", (e)=>{
            if(e.key === "e"){
                window.location.reload()
                //console.log("pizza")
            }
        })
    }
    _update(){
        if(!this._isMoving){
            this.vx -= this.friction * this.vx
            if(Math.abs(this.vx) < 2){
                     this.vx = 0
                }
        } 
        this.x += this.vx
    }
}
export default Paddle