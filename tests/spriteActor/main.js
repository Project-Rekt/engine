import SpriteActor from '../../src/lib/spriteActor';
import SpriteObj from './goku';
import Stage from '../../src/lib/stage';
import InputHandler from '../../src/lib/inputHandler';

class Goku extends SpriteActor {
    constructor(bounds) {
        super(bounds, SpriteObj);
        this.ay = 0;
        this.ax = 0;

        this.vx = 0;
        this.vy = 0;

        this.facing = "right";

        this.input = new InputHandler(document.querySelector('body'));
        this.input.startHandler();
    }

    update = (dt) => {
        if (this.input.keys()['KeyA']) {
            this.changeState("fight");
        }

        if (this.input.keys()['ArrowLeft']) {
            //if (this.vx > -1)
            this.facing = "left";
            this.bounds.x -= 5;
        } else if (this.input.keys()['ArrowRight']) {
            //if (this.vx < 1)
            this.facing = "right";
            this.bounds.x += 5;
        }

        if (this.input.keys()['ArrowUp']) {
            //if (this.vx > -1)
            this.bounds.y -= 5;
        } else if (this.input.keys()['ArrowDown']) {
            //if (this.vx < 1)
            this.bounds.y += 5;
        }

        //update position
        this.vy += this.ay;
        this.bounds.y += this.vy;

        this.vx += this.ax;
        this.bounds.x += this.vx;
    }
}

let stage = new Stage(document.querySelector('#main'));
stage.ctx.imageSmoothingEnabled = false;
stage.addActor(new Goku({x: 100, y: 100}));
stage.start();