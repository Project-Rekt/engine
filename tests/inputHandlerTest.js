import InputHandler from '../src/lib/inputHandler';

//Input with custom callbacks

let events = {
      "keydown": (event) => {console.log("Key down!")},
      "keyup": (event) => {console.log("Key up!")},
      "mousedown": (event) => {console.log("Mouse button down!")},
      "mouseup": (event) => {console.log("Mouse button up!")},
      "mousemove": (event) => {console.log("Mouse moving!")}
}

let input2 = new InputHandler(document.querySelector('body'), events);

input2.startHandler();
//input2.stopHandler();