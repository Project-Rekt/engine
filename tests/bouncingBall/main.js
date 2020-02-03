import Stage from '../../src/lib/stage';
import Actor from '../../src/lib/actor';
import InputHandler from '../../src/lib/inputHandler';

class Platform extends Actor {
    constructor(bounds) {
        super(bounds);
    }

    render = () => {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
    }
}

class Ball extends Actor {
    constructor(bounds) {
        super(bounds);
        this.bounds.width = 10;
        this.bounds.height = 10;
        this.ay = 0.05;
        this.ax = 0.001;

        this.vx = 0;
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
        // if (this.bounds.y >= 590) {
        let collisions = this.stage.getCollisions(this);
        let p = collisions.find(c => c instanceof Platform);
        if (p) {
            console.log("BOOM")
            if (this.vy > 0)
                this.bounds.y = p.bounds.y - this.bounds.height;
            else
                this.bounds.y = p.bounds.y + this.bounds.height;
            this.vy *= -0.75;
        }

        //update position
        this.vy += this.ay;
        this.bounds.y += this.vy;

        this.vx += this.ax;
        this.bounds.x += this.vx;
    }
}

let stage = new Stage(document.querySelector('#main'));
let inp = new InputHandler(document.querySelector('#main'), {
    mousedown: function () {
        stage.addActor(new Ball({ x: this.input.x, y: this.input.y }), 1);
    }
});
stage.addActor(new Platform({ x: 150, y: 300, width: 300, height: 10 }))
stage.addActor(new Platform({ x: 50, y: 400, width: 300, height: 10 }))
stage.addActor(new Platform({ x: 100, y: 500, width: 300, height: 10 }))

/*
for(let i = 0; i < 400; i += 15) {
    for(let j = 0; j < 50; j +=5) {
        stage.addActor(new Ball({ x: i, y: i + j}), j);
    }
}*/
stage.start();
inp.startHandler();