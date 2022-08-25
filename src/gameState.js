export default class GameState{
    static score = 0;
    static MAX_SCORE = 3
    static loseScreen = "https://www.bing.com/images/search?view=detailV2&ccid=NKcmxgrO&id=C16FA1809F75B4C672A46C7A4ECE53D6D445F247&thid=OIP.NKcmxgrO_-oVaSffDC9E7wHaHP&mediaurl=https%3a%2f%2fst2.depositphotos.com%2f1575949%2f8005%2fv%2f950%2fdepositphotos_80056196-stock-illustration-you-lose-red-stamp-text.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.34a726c60aceffea156927df0c2f44ef%3frik%3dR%252fJF1NZTzk56bA%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1023&q=you+lose&simid=608049665979865475&FORM=IRPRST&ck=309FDB08A8171DB1D6B9B2047E100845&selectedIndex=0"
    static gameOver = false;
    static setGameOver(){
        if(confirm("GAME OVER, u suck")){
            this.restartGame();
        }
    }
    static restartGame(){
        this.score = 0;
        this.gameOver = false;
    }
    /**
     * @param pen { canvas.context2d }
     */
    static displayScore(pen){
        pen.fillStyle = "white";
        pen.fillText("Score: " + this.score, 1000, 75)
    }
    static increaseScore(){
        this.score++
        if(this.score === this.MAX_SCORE){
            this.gameOver = true;
            this.setGameOver();
        }
    }
}