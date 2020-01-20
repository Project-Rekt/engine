export default class InputHandler {
    constructor(elem, events) {
        this.elem = elem;

        this.elemBounds = elem.getBoundingClientRect();
        this.offsetX = this.elemBounds.left;
        this.offsetY = this.elemBounds.top;

        this.input = {
            keys: [],
            mouse: [],
            x: 0,
            y: 0
        }

        this.events = {
            "keydown": [this.keyDown],
            "keyup": [this.keyUp],
            "mousedown": [this.mouseDown],
            "mouseup": [this.mouseUp],
            "mousemove": [this.mouseMove]
        };

        if (events)
            Object.keys(events).forEach(function (eventName) {
                if (this.events[eventName]) {
                    this.events[eventName] = this.events[eventName].concat(events[eventName].length ? events[eventName].map(fn => fn.bind(this)) : [events[eventName]]);
                } else {
                    this.events[eventName] = events[eventName].length ? events[eventName].map(fn => fn.bind(this)) : [events[eventName]];
                }
            }.bind(this));

        this.dynamicEvents = {};
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
        this.input.x = event.clientX + this.offsetX;
        this.input.y = event.clientY - this.offsetY;
    }

    startHandler = () => {
        this.dynamicEvents = {}
        Object.keys(this.events).forEach(function (eventName) {
            let dynamicEvent = function (event) {
                this.events[eventName].forEach(function (fn) {
                    fn.call(this, event);
                }.bind(this))
            }.bind(this)

            this.dynamicEvents[eventName] = dynamicEvent;
            this.elem.addEventListener(eventName, dynamicEvent);
        }.bind(this));
    }

    stopHandler = () => {
        Object.keys(this.events).forEach((eventName) => {
            this.elem.removeEventListener(eventName, this.dynamicEvents[eventName]);
        });
        this.dynamicEvents = {}
    }

    setEvents(events) {
        Object.assign(this.events, events);
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
