"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Stage = function Stage(elem) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Stage);
  (0, _defineProperty2["default"])(this, "getCollisions", function (actor) {
    var collisions = [];
    var obj = _this;
    var keys = Object.keys(_this.children); //call all children render cycles

    keys.forEach(function (layer) {
      obj.children[layer].forEach(function (child) {
        if (obj.checkCollision(child, actor) && child !== actor) {
          collisions.push(child);
        }
      });
    });
    return collisions;
  });
  (0, _defineProperty2["default"])(this, "checkCollision", function (actorA, actorB) {
    return actorA.bounds.x < actorB.bounds.x + actorB.bounds.width && actorA.bounds.x + actorA.bounds.width > actorB.bounds.x && actorA.bounds.y < actorB.bounds.y + actorB.bounds.height && actorA.bounds.y + actorA.bounds.height > actorB.bounds.y;
  });
  (0, _defineProperty2["default"])(this, "addActor", function (actor, zIndex) {
    if (!zIndex) zIndex = 0;
    actor.stage = _this;
    actor.ctx = _this.ctx;
    actor.zIndex = zIndex;
    actor.create();
    if (!_this.children[zIndex]) _this.children[zIndex] = [];

    _this.children[zIndex].push(actor);

    _this.exportList.push({
      name: actor.name,
      x: actor.bounds["x"],
      y: actor.bounds["y"]
    }); // console.log("EXPORT LIST - " + JSON.stringify(this.exportList))

  });
  (0, _defineProperty2["default"])(this, "changeIndex", function (actor, zIndex) {
    for (var i = 0; i < _this.children.length; i++) {
      if (_this.children[i]) for (var j = 0; j < _this.children[i].length; j++) {
        if (_this.children[i][j] && _this.children[i][j] === actor) {
          delete _this.children[i][j];
          if (!_this.children[zIndex]) _this.children[zIndex] = [];

          _this.children[zIndex].push(actor);

          return;
        }
      }
    }
  });
  (0, _defineProperty2["default"])(this, "removeActor", function (actor) {
    var index = _this.children[actor.zIndex].findIndex(function (a) {
      return a === actor;
    });

    _this.children[actor.zIndex].splice(index, 1);
  });
  (0, _defineProperty2["default"])(this, "callUpdateCycles", function () {
    var timeNow = Date.now();

    if (timeNow - _this.updateTimeStart > 1000 / _this.updateFPS) {
      _this.updateDeltaTime = timeNow - _this.updateTimeStart;

      _this.updateCycles(_this.updateDeltaTime);

      _this.updateTimeStart = Date.now();
    }

    window.requestAnimationFrame(_this.callUpdateCycles);
  });
  (0, _defineProperty2["default"])(this, "callRenderCycles", function () {
    var timeNow = Date.now();

    if (timeNow - _this.renderTimeStart > 1000 / _this.renderFPS) {
      _this.renderDeltaTime = timeNow - _this.renderTimeStart;

      _this.renderCycles(_this.renderDeltaTime);

      _this.renderTimeStart = Date.now();
    }

    window.requestAnimationFrame(_this.callRenderCycles);
  });
  (0, _defineProperty2["default"])(this, "create", function () {});
  (0, _defineProperty2["default"])(this, "start", function () {
    _this.create();

    window.requestAnimationFrame(_this.callUpdateCycles);
    window.requestAnimationFrame(_this.callRenderCycles);
  });
  (0, _defineProperty2["default"])(this, "stop", function () {
    _this.destroy();

    window.cancelAnimationFrame(_this.callUpdateCycles);
    window.cancelAnimationFrame(_this.callRenderCycles);
  });
  (0, _defineProperty2["default"])(this, "render", function () {});
  (0, _defineProperty2["default"])(this, "renderCycles", function (deltaTime) {
    _this.render();

    _this.ctx.clearRect(0, 0, _this.width, _this.height);

    var keys = Object.keys(_this.children);
    keys.sort(function (a, b) {
      return a - b;
    }); //call all children render cycles

    keys.forEach(function (layer) {
      this.children[layer].forEach(function (child) {
        child.render(deltaTime);
      }, this, deltaTime);
    }, _this, deltaTime);
  });
  (0, _defineProperty2["default"])(this, "update", function () {});
  (0, _defineProperty2["default"])(this, "updateCycles", function (deltaTime) {
    _this.update();

    var keys = Object.keys(_this.children);
    keys.sort(function (a, b) {
      return a - b;
    }); //call all children render cycles

    keys.forEach(function (layer) {
      this.children[layer].forEach(function (child) {
        //console.log(deltaTime);
        child.update(deltaTime);
      }, this, deltaTime);
    }, _this, deltaTime);
  });
  (0, _defineProperty2["default"])(this, "destroy", function () {});
  //set cycle ticks and times
  this.ticks = 0;
  this.updateFPS = 200;
  this.updateTimeStart = Date.now();
  this.updateDeltaTime = 0;
  this.renderFPS = 200;
  this.renderTimeStart = Date.now();
  this.renderDeltaTime = 0; //setup canvas

  this.elem = elem;

  if (!elem) {
    this.elem = document.createElement("canvas");
    document.querySelector("body").appendChild(this.elem);
  }

  this.ctx = this.elem.getContext("2d"); //setup children

  this.children = [];
  this.exportList = [];
};

exports["default"] = Stage;