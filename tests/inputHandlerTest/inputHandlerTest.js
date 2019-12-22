import InputHandler from '../../src/lib/inputHandler';

function addNotification(text) {
      let notifications = document.querySelector('.notifications');
      if(notifications.childNodes.length > 3) {
            notifications.innerHTML = "";
      }
      let child = document.createElement('div');
      child.innerHTML = text;
      child.classList = "notification is-info";
      Object.assign(child.style, {margin: 0})
      notifications.appendChild(child);

      setTimeout(() => {
            notifications.removeChild(child);
      }, 500)
}

//Input with custom callbacks
let events = {
      "keydown": [() => {addNotification("Key Down!")}],
      "keyup": () => {addNotification("Key up!")},
      "mousedown": [() => {addNotification("Mouse button down!")}],
      "mouseup": () => {addNotification("Mouse button up!")},
      "mousemove": () => {addNotification("Mouse moving!")}
}

let exampleInput = new InputHandler(document.querySelector('body'), events);

export function startHandler() {
      exampleInput.startHandler();
}

export function stopHandler() {
      exampleInput.stopHandler();
}

