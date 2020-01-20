export default class Actor{
    constructor(bounds){
        //Add actor to stage and stage context
        this.stage;
        this.ctx;

        //Dimensions of actor (has default bounds)
        this.bounds = bounds | {x: 0, y: 0, width: 0, height: 0};
    }

    render = (deltaTime) => {

    }

    update = (deltaTime) => {
        
    }

    destroy = () => {
        //Clear boundingbox
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        
        //Remove actor from stage
        this.stage.removeActor(this)
    }
}