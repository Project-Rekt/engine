export default class Actor{
    constructor(ctx, stage){
        this.ctx = ctx;
        this.stage = stage;
    }

    render = (deltaTime) => {

    }

    update = (deltaTime) => {
        
    }

    destroy = () => {
        delete Actor.ctx;
        delete Actor.stage;
    }
}