export default class InputHandler {
    constructor(elem, events){
        this.elem = elem;
        this.input = {
            keys: [],
            mouse: [],
            x: 0,
            y: 0
        }
        this.events = events;
    }

    keyDown = (event) => {
        this.input.keys[event.code] = true;
    }

    keyUp = (event) => {
        this.input.keys[event.code] = false;
    }

    mouseDown = (event) => {
        this.input.mouse[event.button] = true;
        
    }

    mouseUp = (event) => {
        this.input.mouse[event.button] = false;
    }

    mouseMove = (event) => {
        this.input.x = event.clientX;
        this.input.y = event.clientY;
    }

    startHandler() {
        this.elem.addEventListener("keydown", this.keyDown);
        this.elem.addEventListener("keyup", this.keyUp);
        this.elem.addEventListener("mousedown", this.mouseDown);
        this.elem.addEventListener("mouseup", this.mouseUp);
        this.elem.addEventListener("mousemove", this.mouseMove);
        
        if(this.events != null){
            Object.keys(this.events).forEach((eventName) => {
                this.elem.addEventListener(eventName, this.events[eventName]);
            })
        }
    }

    stopHandler() {
        this.elem.removeEventListener("keydown", this.keyDown);
        this.elem.removeEventListener("keyup", this.keyUp);
        this.elem.removeEventListener("mousedown", this.mouseDown);
        this.elem.removeEventListener("mouseup", this.mouseUp);
        this.elem.removeEventListener("mousemove", this.mouseMove);

        if(this.events != null){
            Object.keys(this.events).forEach((eventName) => {
                this.elem.removeEventListener(eventName, this.events[eventName]);
            })
        }
    }

    setEvents(events) {
        this.events = events;
    }

    keys() {
        return this.input.keys;
    }

    mouse() {
        return this.input.mouse;
    }

    mouseX() {
        return this.input.x;
    }

    mouseY() {
        return this.input.y;
    }
}
