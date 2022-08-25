//make the page ✔
//make paddles ✔
//(allow for paddles to be moved by input) ✔
//make the ball ✔
//(allow it to move freely, allow it to bounce off of walls) ✔
//allow for the game to end ✔
//optional: make a scoreboard
import Paddle from "./paddle.js"
import Ball from "./ball.js"
import GameState from "./gameState.js";





const DEBUG = true;
const canvas = document.getElementById("canvas")
const pen = canvas.getContext('2d')
canvas.height = window.innerHeight - 50
canvas.width = window.innerWidth - 50
const height = canvas.height
const width = canvas.width
const canvasDetails = {height, width}
const football = new Ball(15, 15, "green", pen , canvasDetails)
const paddle1 = new Paddle(width/2, height-50, canvas.width/6, 15, "blue", pen, canvasDetails)
const runArray = []
paddle1.setMaxSpeed(15);
paddle1.acceleration = 3;
runArray.push(football, paddle1);
pen.font = "25px serif"
pen.fillStyle = "white"
debug = (...params)=>{
    if(!DEBUG){
        console.log(params)
        return;
    }
    let style = pen.fillStyle;
    pen.fillStyle = 'white';
    pen.fillText(params.join(','), 100, 100)
    pen.fillStyle = style;
}





setInterval(() => {
    pen.clearRect(0, 0, width, height)
    //debug("paddle stats: ", paddle1.vx, "is moving", paddle1._isMoving)
    GameState.displayScore(pen)
    runArray.forEach((item) => {
        item.run()
    })
    if(football.y > paddle1.y){
    if(football.x < paddle1.x + paddle1.width && football.x > paddle1.x){
        football._bounce(false)
    }}
    if(football.isOutOfBounds){
        GameState.increaseScore();
        football.isOutOfBounds = false;
    }
}, 1000/30);
