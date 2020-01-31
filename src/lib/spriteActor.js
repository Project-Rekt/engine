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
    constructor(bounds, properties, states){
        super(bounds);
        this.properties = properties || {};
        this.states = states || {idle: {location: null, rps: 5, loop: true, frames: [{x: 0, y: 0, width: 0, height: 0}]}};

    }

    loadImage = () => {
    (async () => {
        await Promise.all(Object.keys(sprites.states).map(async (s) => {
            let img = await loadImage(sprites.states[s].location);
            Object.assign(sprites.states[s], { image: img });
        }));
        console.log(sprites);
    })()};
    
}