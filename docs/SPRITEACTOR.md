# SpriteActor Class
## Brief Overview of SpriteActors
The SpriteActor class is an extension of the Actor class, providing Sprite and Animation functionality. SpriteActors have all the features and functions of the Actor class.

## API
By default this library provides a super class with basic functionality.

### new SpriteActor(bounds, spriteObj)
### bounds = {x: 0, y: 0, width: 0, height: 0} //default values
### spriteObj = {properties: {}, states: { idle: { location: null, rps: 5, loop: true, frames: [{ x: 0, y: 0, width: 0, height: 0 }] } }
Create a new actor with the given bounds(dimensions for this actor) and the given spriteObj(metadata for sprite)

## SpriteActor Functionality
### create()
This function is called once, when the actor is added to the stage.

### render(deltaTime) 
This function gets called every render tick. The time passed from the last render call is passed through deltaTime. Automatically 

### update(deltaTime) 
This function gets called every update tick. The time passed from the last update call is passed through deltaTime.

### destroy() 
This function is called once, on Actor removal. By default, it clears the Actor's drawbox and removes it from the Stage.

## Example Class
```
import Engine from 'engine';

class CoolActor extends Engine.Actor {
    constructor(bounds) {
        super(bounds);
    }

    render = (dt) => {
        //draw a red box
        this.ctx.fillStyle="red";
        this.ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height)
    }
}
```