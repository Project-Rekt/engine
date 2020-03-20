# Stage Class
## Brief overview of Stages
Stages are entities or meta-environments that house or contain various actors. All actors are created as a child of a particular stage. They represent the space that actors exist and act in, and therefore are responsible for tracking collisions and rendering.

Stage responsibilities:
-Create/destroy/update actors
-Track collisions
-Render the game state

## API

### new Stage(elem)
### elem in our implementation of Stage refers to a canvas object created in a browser
create a new stage with a given canvas to act as the space for creating/destroying actors

### getCollisions = actor =>
return a list of actors that are occupying the same coordinates and z-index at a given moment

### checkCollision(actorA, actorB)
return a boolean if two actors are occupying the same space on the stage

### addActor(actor, zIndex)
adds an actor to the stage's list of children at a particular z index, also adds the actors coordinates to an export list to be used in tile editor.

### removeActor = actor =>
removes an actor from the stage's list of children

### callUpdateCycles=()=>
### callRenderCycles = () =>

### create = () =>
### start = () =>
### stop = () =>
### render =()=>
### renderCycles = deltaTime=>
renders all children on the stage again based off deltaTime
### updateCycles = deltaTime=>
updates all children on the stage again based off deltaTime
