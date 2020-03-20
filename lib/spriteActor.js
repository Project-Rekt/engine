"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _actor = _interopRequireDefault(require("./actor"));

function loadImage(_x) {
  return _loadImage.apply(this, arguments);
}

function _loadImage() {
  _loadImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(src) {
    var img;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            img = new Image();
            img.src = src;
            return _context5.abrupt("return", new Promise(function (res, rej) {
              img.onload = function () {
                res(img);
              };
            }));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _loadImage.apply(this, arguments);
}

var SpriteActor = /*#__PURE__*/function (_Actor) {
  (0, _inherits2["default"])(SpriteActor, _Actor);

  function SpriteActor(bounds, _spriteObj) {
    var _this;

    (0, _classCallCheck2["default"])(this, SpriteActor);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SpriteActor).call(this, bounds, _spriteObj["name"]));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changeState", function (state) {
      _this.currentState = state;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadSpriteObj", function (spriteObj) {
      _this.properties = spriteObj.properties;
      _this.states = spriteObj.states;

      if (_this.states != {} && _this.properties != {}) {
        ;
        (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Promise.all(Object.keys(_this.states).map( /*#__PURE__*/function () {
                    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(s) {
                      var img;
                      return _regenerator["default"].wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return loadImage(_this.states[s].location);

                            case 2:
                              img = _context.sent;
                              Object.assign(_this.states[s], {
                                image: img
                              });

                            case 4:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));

                case 2:
                  console.log(_this.states);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "create", function () {
      if (_this.states != {} && _this.properties != {}) {
        ;
        (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return Promise.all(Object.keys(_this.states).map( /*#__PURE__*/function () {
                    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(s) {
                      var img;
                      return _regenerator["default"].wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return loadImage(_this.states[s].location);

                            case 2:
                              img = _context3.sent;
                              Object.assign(_this.states[s], {
                                image: img
                              });

                            case 4:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x3) {
                      return _ref4.apply(this, arguments);
                    };
                  }()));

                case 2:
                  console.log(_this.states);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }))();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "render", function (deltaTime) {
      _this.ctx.clearRect(_this.px, _this.py, _this.bounds.width * _this.scale, _this.bounds.height * _this.scale);

      var sstate = _this.states[_this.currentState];
      _this.renderCount += deltaTime;

      if (_this.renderCount > 1000 / sstate.rps) {
        _this.renderCount = 0;

        if (_this.frameCount >= sstate.frames.length) {
          _this.frameCount = 0;

          if (!sstate.loop) {
            _this.changeState("idle");
          }
        }

        _this.frame = sstate.frames[_this.frameCount];
        _this.bounds.width = _this.frame.width * _this.scale;
        _this.bounds.height = _this.frame.height * _this.scale;

        if (sstate.image) {
          _this.current = sstate.image;
        }

        _this.frameCount++;
      }

      _this.px = Math.round(_this.bounds.x);
      _this.py = Math.round(_this.bounds.y);
      if (_this.frame && _this.current) _this.ctx.drawImage(_this.current, _this.frame.x, _this.frame.y, _this.frame.width, _this.frame.height, _this.px, _this.py, _this.frame.width * _this.scale, _this.frame.height * _this.scale);
    });
    _this.properties = _spriteObj.properties || {};
    _this.states = _spriteObj.states || {
      idle: {
        location: null,
        rps: 5,
        loop: true,
        frames: [{
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }]
      }
    };
    _this.frames = _spriteObj.frames;
    _this.currentState = Object.keys(_this.states)[0] || "idle";
    _this.frameCount = 0;
    _this.renderCount = 0;
    _this.scale = 1;
    return _this;
  }

  (0, _createClass2["default"])(SpriteActor, [{
    key: "destroy",
    value: function destroy() {
      for (var i = 0; i < Object.keys(this.states).length; i++) {
        console.log(this.states[Object.keys(this.states)[i]]);
        this.states[Object.keys(this.states)[i]].image == null;
      }

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(SpriteActor.prototype), "destroy", this).call(this);
    }
  }]);
  return SpriteActor;
}(_actor["default"]);

exports["default"] = SpriteActor;