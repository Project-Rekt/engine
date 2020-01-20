import Stage from '../../src/lib/stage';
import Actor from '../../src/lib/actor';

class Ball extends Actor {
    constructor(bounds) {
        super(bounds);
        this.bounds.width = 10;
        this.bounds.height = 10;
        this.ay = 0.05;
        this.vy = 0;

        this.px = this.bounds.x;
        this.py = this.bounds.y;
    }

    render = (dt) => {
        //clearframe
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.px, this.py, this.bounds.width, this.bounds.height);
        
        this.px = Math.round(this.bounds.x);
        this.py = Math.round(this.bounds.y);

        //drawframe
        this.ctx.fillStyle = "#39ff14 ";
        this.ctx.fillRect(this.px, this.py, this.bounds.width, this.bounds.height);
    }

    update = (dt) => {
        //check bounce 
        if (this.bounds.y >= 390) {
            this.bounds.y = 390;
            this.vy *= -0.75;
        }

        //update position
        this.vy += this.ay;
        this.bounds.y += this.vy;
    }
}

let stage = new Stage(document.querySelector('#main'));
for(let i = 0; i < 400; i += 15) {
    for(let j = 0; j < 50; j +=5) {
        stage.addActor(new Ball({ x: i, y: i + j}), j);
    }
}
stage.start();