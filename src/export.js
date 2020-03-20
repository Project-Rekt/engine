import actor from './lib/actor'
import spriteactor from './lib/spriteActor'
import stage from './lib/stage'
import inputHandler from './lib/inputHandler'

export default {
    Actor: actor,
    InputHandler: inputHandler,
    Stage: stage,
    SpriteActor: spriteactor
};

export let Actor = actor, Stage = stage, InputHandler = inputHandler, SpriteActor = spriteactor;
