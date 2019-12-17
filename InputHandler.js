export default class InputHandler {
    constructor(elem, options){
        this.elem = elem;
        this.input = {
            keys: [],
            mouse: [],
            x: 0,
            y: 0
        }

        this.keyUp = this.keyUp.bind(this);
        this.keyDown = this.keyDown.bind(this);

        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);

        this.x = this.mouseMoveX.bind(this);
        this.y = this.mouseMoveY.bind(this);
        
        this.startHandler = this.startHandler.bind(this);
        this.stopHandler = this.stopHandler.bind(this);
    }

    keyDown(event) {
        this.input.keys[event.which] = true;
    }

    keyUp(event) {
        this.input.keys[event.which] = false;
    }

    mouseDown(event) {
        this.input.mouse[event.which] = true;
    }

    mouseUp(event) {
        this.input.mouse[event.which] = false;
    }

    mouseMoveX(event) {
        this.input.x = event.clientX;
    }

    mouseMoveY(event) {
        this.input.y = event.clientY;
    }

    startHandler() {
        this.elem.addEventListener("keydown", this.keyDown);
        this.elem.addEventListener("keyup", this.keyUp);
        this.elem.addEventListener("mousedown", this.mouseDown);
        this.elem.addEventListener("mouseup", this.mouseUp);
        this.elem.addEventListener("mousemove", this.mouseMoveX);
        this.elem.addEventListener("mousemove", this.mouseMoveY);
    }

    stopHandler() {
        this.elem.removeEventListener("keydown", this.keyDown);
        this.elem.removeEventListener("keyup", this.keyUp);
        this.elem.removeEventListener("mousedown", this.mouseDown);
        this.elem.removeEventListener("mouseup", this.mouseUp);
        this.elem.removeEventListener("mousemove", this.mouseMoveX);
        this.elem.removeEventListener("mousemove", this.mouseMoveY);
    }

    keys() {
        return this.input.keys;
    }

    mouse() {
        return this.input.mouse;
    }

    xpos() {
        return this.input.x;
    }

    ypos() {
        return this.input.y;
    }
}