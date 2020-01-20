"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputHandler =
/*#__PURE__*/
function () {
  function InputHandler(elem, events) {
    var _this = this;

    _classCallCheck(this, InputHandler);

    _defineProperty(this, "keyDown", function (event) {
      _this.input.keys[event.code] = true;
    });

    _defineProperty(this, "keyUp", function (event) {
      _this.input.keys[event.code] = false;
    });

    _defineProperty(this, "mouseDown", function (event) {
      _this.input.mouse[event.button] = true;
    });

    _defineProperty(this, "mouseUp", function (event) {
      _this.input.mouse[event.button] = false;
    });

    _defineProperty(this, "mouseMove", function (event) {
      _this.input.x = event.clientX + _this.offsetX;
      _this.input.y = event.clientY - _this.offsetY;
    });

    _defineProperty(this, "startHandler", function () {
      _this.dynamicEvents = {};
      Object.keys(_this.events).forEach(function (eventName) {
        var dynamicEvent = function (event) {
          this.events[eventName].forEach(function (fn) {
            fn.call(this, event);
          }.bind(this));
        }.bind(this);

        this.dynamicEvents[eventName] = dynamicEvent;
        this.elem.addEventListener(eventName, dynamicEvent);
      }.bind(_this));
    });

    _defineProperty(this, "stopHandler", function () {
      Object.keys(_this.events).forEach(function (eventName) {
        _this.elem.removeEventListener(eventName, _this.dynamicEvents[eventName]);
      });
      _this.dynamicEvents = {};
    });

    this.elem = elem;
    this.elemBounds = elem.getBoundingClientRect();
    this.offsetX = this.elemBounds.left;
    this.offsetY = this.elemBounds.top;
    this.input = {
      keys: [],
      mouse: [],
      x: 0,
      y: 0
    };
    this.events = {
      "keydown": [this.keyDown],
      "keyup": [this.keyUp],
      "mousedown": [this.mouseDown],
      "mouseup": [this.mouseUp],
      "mousemove": [this.mouseMove]
    };
    if (events) Object.keys(events).forEach(function (eventName) {
      var _this2 = this;

      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].concat(events[eventName].length ? events[eventName].map(function (fn) {
          return fn.bind(_this2);
        }) : [events[eventName]]);
      } else {
        this.events[eventName] = events[eventName].length ? events[eventName].map(function (fn) {
          return fn.bind(_this2);
        }) : [events[eventName]];
      }
    }.bind(this));
    this.dynamicEvents = {};
  }

  _createClass(InputHandler, [{
    key: "setEvents",
    value: function setEvents(events) {
      Object.assign(this.events, events);
    }
  }, {
    key: "keys",
    value: function keys() {
      return this.input.keys;
    }
  }, {
    key: "mouse",
    value: function mouse() {
      return this.input.mouse;
    }
  }, {
    key: "mouseX",
    value: function mouseX() {
      return this.input.x;
    }
  }, {
    key: "mouseY",
    value: function mouseY() {
      return this.input.y;
    }
  }]);

  return InputHandler;
}();

exports["default"] = InputHandler;