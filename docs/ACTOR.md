# Actor Class
## Brief Overview of Actors
Actors are entities that exist in the engine context. They are self-contained objects that have their own functionality and appearance, which is defined by you, the developer. 

Examples of actors: 
- In-Game NPC's
- Players
- Game Object entities

Actors "live" and "act" inside of a Stage. There actors can be managed(created, added, destroyed).

## API
By default this library provides a super class with basic functionality.

### new Actor(bounds)
### bounds = {x: 0, y: 0, width: 0, height: 0} //default values
Create a new actor with the given bounds(dimensions for this actor)

### create()
This function is called once, when the actor is added to the stage.

### render(deltaTime) 
This function gets called every render tick. The time passed from the last render call is passed through deltaTime.

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