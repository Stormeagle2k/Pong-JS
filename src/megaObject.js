export default class megaObject{
    constructor(x, y, width, height, color, pen, canvasDetails, vx = 0, vy = 0,){
        this.canvasDetails = canvasDetails
        this.color = color
        this.x = x
        this.y = y
        this.pen = pen
        this.IsOutOfBounds = false
        this.width = width
        this.height = height
        this.vx = vx
        this.vy = vy
        this.MAXSPEED = 25
        this.friction = 0.05
        this.acceleration = 1
    }
    _draw(){
        this.pen.fillStyle = this.color;
        this.pen.fillRect(this.x, this.y, this.width, this.height);
    }
    _update(){}
    run(){
        this._draw()
        this._update()
    }
    setMaxSpeed(speed){
        this.MAXSPEED = speed
    }
}