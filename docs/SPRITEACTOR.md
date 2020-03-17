# SpriteActor Class
## Brief Overview of SpriteActors
The SpriteActor class is an extension of the Actor class, providing Sprite and Animation functionality. SpriteActors have all the features and functions of the Actor class.

## API
By default this library provides a super class with basic functionality.

### new SpriteActor(bounds, spriteObj)
### bounds = {x: 0, y: 0, width: 0, height: 0} //default values
### spriteObj = {properties: {}, states: { idle: { location: null, rps: 5, loop: true, frames: [{ x: 0, y: 0, width: 0, height: 0 }] } }
Create a new actor with the given bounds(dimensions for this actor) and the given spriteObj(metadata for sprite)

## SpriteObj
SpriteObj is a pre-defined format for setting properties and sprite maps. 

### Example SpriteObj
```
{
    properties: {},
    states: {
        idle: {
            location: '/' + require('./assets/goku_idle.png').default, //location of spritesheet
            rps: 5, //refresh per second
            loop: true, //will continue to loop after it runs through the frames
            frames: [{
                x: 3, 
                y: 3,
                width: 48,
                height: 85
            }, {
                x: 55, 
                y: 3,
                width: 46,
                height: 86
            }, {
                x: 103, 
                y: 0,
                width: 45,
                height: 91
            }]
        }
    }
}
```

## SpriteActor Functionality

### changeState(state) 
This function changes the current state of the SpriteActor. The rendered sprite frame is reflected by this change when called in the next render tick.

### loadSpriteObj(spriteObj)
This function lets you change the spriteObj of the spriteActor.

### create()
This function is called once, when the actor is added to the stage.

### render(deltaTime) 
This function gets called every render tick. The time passed from the last render call is passed through deltaTime. The SpriteActor render method automatically renders the corresponding sprites for the current state at the pre-defined refreshes per seconds.

### update(deltaTime) 
This function gets called every update tick. The time passed from the last update call is passed through deltaTime.

### destroy() 
This function is called once, on Actor removal. By default, it clears the SpriteActor's last drawn sprite and removes it from the Stage. Additionally it deletes all loaded sprite images.

## Example Class
```
import SpriteActor from '../../src/lib/spriteActor';
import SpriteObj from './goku';
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
        if(this.input.keys()['KeyD']) {
            this.destroy();
        }

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
```