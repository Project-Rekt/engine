import Stage from "../../src/lib/stage";
import Actor from "../../src/lib/actor";
import InputHandler from "../../src/lib/inputHandler";

async function loadImage(src) {
  let img = new Image();
  img.src = src;
  return new Promise((res, rej) => {
    img.onload = () => {
      res(img);
    };
  });
}

//load images

export class placeable extends Actor {
  constructor(bounds) {
    super(bounds);
    this.ay = 0;
    this.ax = 0;

    this.vx = 0;
    this.vy = 0;

    this.px = this.bounds.x;
    this.py = this.bounds.y;

    // this.facing = "right";

    // this.state = "idle";
    // this.frameCount = 0;
    // this.renderCount = 0;
    // this.scale = 2;

    // this.input = new InputHandler(document.querySelector("body"));

    // this.input.startHandler();

    //load sprites
    //this.sprites =
  }

  changeState = state => {
    this.state = state;
  };

  create = dt => {
    this.ctx.drawImage(monkey, gridX + rows[i][0] - 20, rows[i][3] - 16);
  };

  //   render = dt => {
  //     //clearframe
  //     this.ctx.fillStyle = "black";
  //     this.ctx.fillRect(
  //       this.px,
  //       this.py,
  //       this.bounds.width * this.scale,
  //       this.bounds.height * this.scale
  //     );

  //     this.px = Math.round(this.bounds.x);
  //     this.py = Math.round(this.bounds.y);

  //     let sstate = sprites.states[this.state];

  //     this.renderCount += dt;
  //     //drawframe
  //     if (this.renderCount > 1000 / sstate.rps) {
  //       this.renderCount = 0;
  //       if (this.frameCount >= sstate.frames.length) {
  //         this.frameCount = 0;

  //         //reset to idle if no-loop
  //         if (!sstate.loop) this.changeState("idle");
  //       }

  //       this.frame = sstate.frames[this.frameCount];
  //       this.bounds.width = this.frame.width * this.scale;
  //       this.bounds.height = this.frame.height * this.scale;
  //       if (sstate.image) this.current = sstate.image;
  //       this.frameCount++;
  //     }
  //     this.ctx.save();

  //     if (this.facing == "left") {
  //       this.ctx.translate(this.px + (this.frame.width * this.scale) / 2, 0);
  //       this.ctx.scale(-1, 1);
  //       this.ctx.translate(
  //         -1 * (this.px + (this.frame.width * this.scale) / 2),
  //         0
  //       );
  //     }

  //     if (this.frame && this.current)
  //       this.ctx.drawImage(
  //         this.current,
  //         this.frame.x,
  //         this.frame.y,
  //         this.frame.width,
  //         this.frame.height,
  //         this.px,
  //         this.py,
  //         this.frame.width * this.scale,
  //         this.frame.height * this.scale
  //       );
  //     //this.ctx.fillStyle = "#39ff14 ";
  //     //this.ctx.fillRect(this.px, this.py, this.bounds.width, this.bounds.height);
  //     this.ctx.scale(1, 1);
  //     this.ctx.restore();
  //   };

  //   update = dt => {
  //     if (this.input.keys()["KeyA"]) {
  //       this.changeState("fight");
  //     }

  //     if (this.input.keys()["ArrowLeft"]) {
  //       //if (this.vx > -1)
  //       this.facing = "left";
  //       this.bounds.x -= 5;
  //     } else if (this.input.keys()["ArrowRight"]) {
  //       //if (this.vx < 1)
  //       this.facing = "right";
  //       this.bounds.x += 5;
  //     }

  //     if (this.input.keys()["ArrowUp"]) {
  //       //if (this.vx > -1)
  //       this.bounds.y -= 5;
  //     } else if (this.input.keys()["ArrowDown"]) {
  //       //if (this.vx < 1)
  //       this.bounds.y += 5;
  //     }

  //     //update position
  //     this.vy += this.ay;
  //     this.bounds.y += this.vy;

  //     this.vx += this.ax;
  //     this.bounds.x += this.vx;
  //   };
}

// let stage = new Stage(document.querySelector("#main"));
// stage.ctx.imageSmoothingEnabled = false;
// stage.addActor(new Goku({ x: 100, y: 100 }));
// stage.addActor(new Goku({ x: 300, y: 300 }));

// stage.start();
