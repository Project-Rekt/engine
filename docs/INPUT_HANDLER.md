# Input Handler Class
## Overview
The input handler class provides functionality for various input properties that show the current input state as well as provide the ability to define custom callbacks for events.

## Supported Events
* keyUp
* keyDown
* mouseMove
* mouseDown
* mouseUp

# API

### new InputHandler(elem, events)
Create a new input handler object attached to an HTML element, with custom input events created from a JSON object with functions assigned to supportedevents.

### keyDown(event), keyUp(event), mouseDown(event), mouseUp(event), mouseMove(event)

### startHandler()
Starts the input handler by binding all event listeners.

### stopHandler()
Stops the input handler by unbinding all event listeners.

### setEvents(events)
Sets and updates custom events.

### keys()
Returns key state.

### mouse()
Returns mouse state.

### mouseX()
Returns mouse's X position.

### mouseY()
Returns mouse's Y position.

## Example

From [engine/tests/inputHandlerTest/inputHandlerTest.js](https://github.com/Project-Rekt/engine/blob/develop/tests/inputHandlerTest/inputHandlerTest.js)

```js
//Input with custom callbacks
let events = {
    keydown: [
        () => {
            addNotification("Key Down!")
        },
    ],
    keyup: () => {
        addNotification("Key up!")
    },
    mousedown: [
        () => {
            addNotification("Mouse button down!")
        },
    ],
    mouseup: () => {
        addNotification("Mouse button up!")
    },
    mousemove: () => {
        addNotification("Mouse moving!")
    },
}

let exampleInput = new InputHandler(document.querySelector("body"), events)

global.startHandler = () => {
    exampleInput.startHandler()
}

global.stopHandler = () => {
    exampleInput.stopHandler()
```