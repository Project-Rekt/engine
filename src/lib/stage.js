export default class Stage {
    constructor(elem) {
        //set cycle ticks and times
        this.ticks = 0;
        this.updateFPS = 200;
        this.updateTimeStart = Date.now();
        this.updateDeltaTime = 0;

        this.renderFPS = 200;
        this.renderTimeStart = Date.now();
        this.renderDeltaTime = 0;

        //setup canvas
        this.elem = elem;
        if (!elem) {
            this.elem = document.createElement('canvas');
            document.querySelector('body').appendChild(this.elem);
        }
        this.ctx = this.elem.getContext('2d');

        //setup children
        this.children = {};

        //run create
        this.create();
    }

    getCollisions = (actor) => {
        let collisions=[];
        let obj = this;

        let keys = Object.keys(this.children);
        //call all children render cycles
        keys.forEach(function (layer) {
            obj.children[layer].forEach(function (child) {
                if(obj.checkCollision(child, actor) && child !== actor) {
                    collisions.push(child);
                }
            });
        });
        return collisions;
    }

    //only works with physicsActors
    checkCollision = (actorA, actorB) => {
        return (actorA.bounds.x < actorB.bounds.x + actorB.bounds.width &&
            actorA.bounds.x + actorA.bounds.width > actorB.bounds.x &&
            actorA.bounds.y < actorB.bounds.y + actorB.bounds.height &&
            actorA.bounds.y + actorA.bounds.height > actorB.bounds.y)
    }

    addActor = (actor, zIndex) => {
        if (!zIndex)
            zIndex = 0;
        actor.stage = this;
        actor.ctx = this.ctx;
        actor.zIndex = zIndex;

        if (!this.children[zIndex])
            this.children[zIndex] = [];

        this.children[zIndex].push(actor);
    }

    removeActor = (actor) => {
        let index = this.children[actor.zIndex].findIndex((a) => a === actor);
        this.children[actor.zIndex].splice(index, 1);
    }

    callUpdateCycles = () => {
        let timeNow = Date.now();
        if ((timeNow - this.updateTimeStart) > 1000 / this.updateFPS) {
            this.updateDeltaTime = timeNow - this.updateTimeStart;
            this.updateCycles(this.updateDeltaTime);
            this.updateTimeStart = Date.now();
        }
        window.requestAnimationFrame(this.callUpdateCycles)
    }

    callRenderCycles = () => {
        let timeNow = Date.now();
        if ((timeNow - this.renderTimeStart) > 1000 / this.renderFPS) {
            this.renderDeltaTime = timeNow - this.renderTimeStart;
            this.renderCycles(this.renderDeltaTime);
            this.renderTimeStart = Date.now();
        }
        window.requestAnimationFrame(this.callRenderCycles)
    }

    create = () => {

    }

    start = () => {
        window.requestAnimationFrame(this.callUpdateCycles);
        window.requestAnimationFrame(this.callRenderCycles);
    }

    stop = () => {
        window.cancelAnimationFrame(this.callUpdateCycles);
        window.cancelAnimationFrame(this.callRenderCycles);
    }

    render = () => {

    }

    renderCycles = (deltaTime) => {
        this.render();
        this.ctx.clearRect(0, 0, this.width, this.height);
        let keys = Object.keys(this.children);
        keys.sort((a, b) => a - b);
        //call all children render cycles
        keys.forEach(function (layer) {
            this.children[layer].forEach(function (child) {
                child.render(deltaTime)
            }, this, deltaTime);
        }, this, deltaTime);
    }

    update = () => {

    }

    updateCycles = (deltaTime) => {
        this.update();

        let keys = Object.keys(this.children);
        keys.sort((a, b) => a - b);
        //call all children render cycles
        keys.forEach(function (layer) {
            this.children[layer].forEach(function (child) {
                //console.log(deltaTime);
                child.update(deltaTime*0.05);
            }, this, deltaTime);
        }, this, deltaTime);
    }
}