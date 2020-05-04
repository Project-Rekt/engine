import Actor from "./actor"

async function loadImage(src) {
    let img = new Image()
    img.src = src
    return new Promise((res, rej) => {
        img.onload = () => {
            res(img)
        }
    })
}

export default class SpriteActor extends Actor {
    constructor(bounds, spriteObj) {
        super(bounds, spriteObj["name"])

        this.properties = spriteObj.properties || {}
        this.states = spriteObj.states || {
            idle: {
                location: null,
                rps: 5,
                loop: true,
                frames: [{ x: 0, y: 0, width: 0, height: 0 }],
            },
        }
        this.frames = spriteObj.frames

        this.currentState = Object.keys(this.states)[0] || "idle"
        this.frameCount = 0
        this.renderCount = 0
        this.scale = 1
    }

    changeState = state => {
        this.currentState = state
    }

    loadSpriteObj = spriteObj => {
        this.properties = spriteObj.properties
        this.states = spriteObj.states
        if (this.states != {} && this.properties != {}) {
            (async () => {
                await Promise.all(
                    Object.keys(this.states).map(async s => {
                        let img = await loadImage(this.states[s].location)
                        Object.assign(this.states[s], { image: img })
                    })
                )
                console.log(this.states)
            })()
        }
    }

    create = () => {
        if (this.states != {} && this.properties != {}) {
            (async () => {
                await Promise.all(
                    Object.keys(this.states).map(async s => {
                        let img = await loadImage(this.states[s].location)
                        Object.assign(this.states[s], { image: img })
                    })
                )
                console.log(this.states)
            })()
        }
    }

    render = deltaTime => {
        this.ctx.clearRect(
            this.px,
            this.py,
            this.bounds.width * this.scale,
            this.bounds.height * this.scale
        )

        let sstate = this.states[this.currentState]

        this.renderCount += deltaTime
        if (this.renderCount > 1000 / sstate.rps) {
            this.renderCount = 0
            if (this.frameCount >= sstate.frames.length) {
                this.frameCount = 0

                if (!sstate.loop) {
                    this.changeState("idle")
                }
            }
            this.frame = sstate.frames[this.frameCount]
            this.bounds.width = this.frame.width * this.scale
            this.bounds.height = this.frame.height * this.scale
            if (sstate.image) {
                this.current = sstate.image
            }
            this.frameCount++
        }
        this.px = Math.round(this.bounds.x)
        this.py = Math.round(this.bounds.y)
        if (this.frame && this.current)
            this.ctx.drawImage(
                this.current,
                this.frame.x,
                this.frame.y,
                this.frame.width,
                this.frame.height,
                this.px,
                this.py,
                this.frame.width * this.scale,
                this.frame.height * this.scale
            )
    }

    destroy() {
        for (let i = 0; i < Object.keys(this.states).length; i++) {
            console.log(this.states[Object.keys(this.states)[i]])
            this.states[Object.keys(this.states)[i]].image == null
        }
        super.destroy()
    }
}
