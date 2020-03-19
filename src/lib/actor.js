export default class Actor {
    constructor(bounds, name) {
        //Add actor to stage and stage context
        this.stage
        this.ctx
        this.name = name
        //Dimensions of actor (has default bounds)
        this.bounds = bounds || { x: 0, y: 0, width: 0, height: 0 }
    }

    create = () => {}

    render = deltaTime => {}

    update = deltaTime => {}

    destroy = () => {
        //Clear boundingbox
        this.ctx.clearRect(
            this.bounds.x,
            this.bounds.y,
            this.bounds.width,
            this.bounds.height
        )

        //Remove actor from stage
        this.stage.removeActor(this)
    }
}
