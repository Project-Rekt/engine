import Stage from "../../src/lib/stage"
import Actor from "../../src/lib/actor"
import InputHandler from "../../src/lib/inputHandler"

import SpriteActor from "../../src/lib/spriteActor"
import SpriteObj from "./spriteObjects/monkeySprite"
import weeb from "./spriteObjects/weebSprite"
import grill from "../tileditor/grillSprite"
import rye from "./spriteObjects/ryeSprite"
import exchange from "./spriteObjects/exchangeSprite"
import tileSprite from "./spriteObjects/monkeySprite"
import pylon from "../tileditor/spriteObjects/pylonSprite"
import car from "../tileditor/spriteObjects/carSprite"
import protester from "../tileditor/spriteObjects/protesterSprite"
import umbrella from "../tileditor/spriteObjects/umbrellaSprite"
import fence from "../tileditor/spriteObjects/fenceSprite"
import monkey from "../tileditor/spriteObjects/monkeySprite"
import mason from "../tileditor/spriteObjects/masonSprite"
import ali from "./spriteObjects/aliSprite"
import harley from "../tileditor/spriteObjects/harleySprite"
import lan from "../tileditor/spriteObjects/lanSprite"
import ta from "../tileditor/spriteObjects/taSprite"

// import Engine from "engine";

class Grid extends Actor {
    constructor(bx, by, tx, ty, color) {
        super()
        this.bx = bx
        this.by = by
        this.tx = tx
        this.ty = ty
        this.color = color
    }

    render = () => {
        this.ctx.beginPath()
        this.ctx.moveTo(this.bx, this.by)
        this.ctx.lineTo(this.tx, this.ty)
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
    }
}

class TileSprite extends SpriteActor {
    constructor(bounds) {
        super(bounds, SpriteObj)
        this.ay = this.ax = 0

        this.vx = 0
        this.vy = 0
    }
    render(dt) {
        super.render(dt)
        console.log(this.bounds)
    }
}
let toggle = tileSprite
let stage = new Stage(document.querySelector("#main"))
let inp = new InputHandler(document.querySelector("#main"), {
    mousedown: async function() {
        console.log(rows)
        let x = this.input.x - 12
        let y = this.input.y
        console.log(x, y)
        for (var i = 0; i < rows.length; i++) {
            if (
                x <= rows[i][0] &&
                x >= rows[i][1] &&
                y <= rows[i][2] &&
                y >= rows[i][3]
            ) {
                console.log(true)
                console.log(rows[i])
                let gridX = Math.floor((x - rows[i][0]) / 32) * 32
                let gridY = Math.floor((y - rows[i][3]) / 32) * 32

                // sprite.bounds = {
                //     x: gridX + rows[i][0] - 20,
                //     y: rows[i][3] - 16,
                //     height: 32,
                //     width: 32,
                // }
                let sprite = new SpriteActor(
                    {
                        x: gridX + rows[i][0] - 20,
                        y: rows[i][3] - 16,
                        height: 32,
                        width: 32,
                    },
                    toggle
                )
                stage.addActor(sprite)
                break
            }
        }
    },
})
document.querySelector("#weebSprite").addEventListener("click", function() {
    toggle = weeb
})
document.querySelector("#monkeySprite").addEventListener("click", function() {
    toggle = monkey
})
document.querySelector("#grillSprite").addEventListener("click", function() {
    toggle = grill
})
document.querySelector("#exchangeSprite").addEventListener("click", function() {
    toggle = exchange
})
document.querySelector("#ryeSprite").addEventListener("click", function() {
    toggle = rye
})
document.querySelector("#pylon").addEventListener("click", function() {
    toggle = pylon
})
document.querySelector("#umbrella").addEventListener("click", function() {
    toggle = umbrella
})
document.querySelector("#protester").addEventListener("click", function() {
    toggle = protester
})
document.querySelector("#car").addEventListener("click", function() {
    toggle = car
})
document.querySelector("#fence").addEventListener("click", function() {
    toggle = fence
})

document.querySelector("#mason").addEventListener("click", function() {
    toggle = mason
})
document.querySelector("#lan").addEventListener("click", function() {
    toggle = lan
})
document.querySelector("#ta").addEventListener("click", function() {
    toggle = ta
})
document.querySelector("#ali").addEventListener("click", function() {
    toggle = ali
})
document.querySelector("#harley").addEventListener("click", function() {
    toggle = harley
})
async function loadImage(src) {
    let img = new Image()
    img.src = src
    return new Promise((res, rej) => {
        img.onload = () => {
            res(img)
        }
    })
}

for (let i = 0; i <= 15; i++) {
    //drawing vertical lines
    stage.addActor(
        new Grid(600.032 + 32 * i, 100, 20 + 32 * i, 370.476, "black")
    )
}

let rows = new Array(20)
rows[0] = [1080, 600, 113.52, 98]

for (var i = 1; i < rows.length; i++) {
    rows[i] = new Array(4)
}
for (var i = 1; i < rows.length; i++) {
    rows[i][0] = rows[i - 1][0] - 29.002
    rows[i][1] = rows[i - 1][1] - 29.002
    rows[i][2] = rows[i - 1][2] + 13.524
    rows[i][3] = rows[i - 1][3] + 13.524
}
for (let i = 0; i <= 20; i++) {
    stage.addActor(
        new Grid(
            20 + 29.002 * i,
            370.476 - 13.524 * i,
            500 + 29.002 * i,
            370.476 - 13.524 * i,
            "black"
        )
    )
    //console.log(20 + 29.002*i, 370.476 -13.524*i)
}

stage.start()
inp.startHandler()