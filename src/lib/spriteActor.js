import Actor from './actor';

async function loadImage(src) {
    let img = new Image();
    img.src = src;
    return new Promise((res, rej) => {
        img.onload = () => {
            res(img);
        }
    });
}

export default class SpriteActor extends Actor{
    constructor(bounds, spriteObj){
        super(bounds);
        this.properties = spriteObj.properties || {};
        this.states = spriteObj.states || {idle: {location: null, rps: 5, loop: true, frames: [{x: 0, y: 0, width: 0, height: 0}]}};
        
        this.currentState = this.states[0]
        this.frameCount = 0;
        this.renderCount = 0;
        this.scale = 2;
    }

    changeState = (state) => {
        this.currentState = state;
    }

    loadSpriteObj = (spriteObj) => {
        this.properties = spriteObj.properties;
        this.states = spriteObj.states;
    }

    create = () => {
        if(this.states != {} && this.properties != {}){
            (async () => {
                await Promise.all(Object.keys(sprites.states).map(async (s) => {
                    let img = await loadImage(sprites.states[s].location);
                    Object.assign(sprites.states[s], { image: img });
                }));
                console.log(sprites);
            })()
        }
    }

    render = (deltaTime) => {

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.px, this.py, this.bounds.width * this.scale, this.bounds.height * this.scale);

        this.px = Math.round(this.bounds.x);
        this.py = Math.round(this.bounds.y);

        let sstate = sprites.states[this.state]

        this.renderCount += deltaTime
        if(this.renderCount > (1000 / sstate.rps)){
            this.renderCount = 0;
            if(this.frameCount >= sstate.frames.length){
                this.frameCount = 0;

                if(!sstate.loop){
                    this.changeState("idle");
                }
            }
            this.frame = sstate.frames[this.frameCount];
            this.bounds.width = this.frame.width * this.scale;
            this.bounds.height = this.frame.height * this.scale;
            if(sstate.image){
                this.current = sstate.image;
            }
            this.frameCount++;
        }
        this.ctx.save();
    }

    destroy = () => {
        super.destroy();
        for(let i = 0; i < Object.keys(this.states).length; i++){
            this.states[i].image == null;
        }
    }


}