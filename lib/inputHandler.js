"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var InputHandler = /*#__PURE__*/function () {
  function InputHandler(elem, events) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, InputHandler);
    (0, _defineProperty2["default"])(this, "keyDown", function (event) {
      _this.input.keys[event.code] = true;
    });
    (0, _defineProperty2["default"])(this, "keyUp", function (event) {
      _this.input.keys[event.code] = false;
    });
    (0, _defineProperty2["default"])(this, "mouseDown", function (event) {
      _this.input.mouse[event.button] = true;
    });
    (0, _defineProperty2["default"])(this, "mouseUp", function (event) {
      _this.input.mouse[event.button] = false;
    });
    (0, _defineProperty2["default"])(this, "mouseMove", function (event) {
      _this.input.x = event.clientX + _this.offsetX;
      _this.input.y = event.clientY - _this.offsetY;
    });
    (0, _defineProperty2["default"])(this, "startHandler", function () {
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
    (0, _defineProperty2["default"])(this, "stopHandler", function () {
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
      keydown: [this.keyDown],
      keyup: [this.keyUp],
      mousedown: [this.mouseDown],
      mouseup: [this.mouseUp],
      mousemove: [this.mouseMove]
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

  (0, _createClass2["default"])(InputHandler, [{
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