import SpriteActor from '../../src/lib/spriteActor';
import SpriteObj from './goku';
import Stage from '../../src/lib/stage';

class Goku extends SpriteActor {
    constructor(bounds) {
        super(bounds, SpriteObj);
    }
}

let stage = new Stage(document.querySelector('#main'));
stage.start();
stage.addActor(new Goku({x: 100, y: 100}))