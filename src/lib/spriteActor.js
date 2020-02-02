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

    }

    loadSpriteObj = (spriteObj) => {
        this.properties = spriteObj.properties;
        this.states = spriteObj.states;

        //what is diffing images?
    }

    create = () => {
        (async () => {
            await Promise.all(Object.keys(sprites.states).map(async (s) => {
                let img = await loadImage(sprites.states[s].location);
                Object.assign(sprites.states[s], { image: img });
            }));
            console.log(sprites);
        })()
    }

    render = (deltaTime) => {
        if(this.states[0].loop == true){
            let numFrames = this.states[0].frames.length;
            for(let i = 0; i<numFrames; i++){
                this.bounds = this.states[0].frames[i];
            }
        }
    }

    destroy = () => {
        super.destroy();
    }


}