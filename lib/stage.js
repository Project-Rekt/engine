"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stage = function Stage(elem) {
  var _this = this;

  _classCallCheck(this, Stage);

  _defineProperty(this, "getCollisions", function (actor) {
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

  _defineProperty(this, "checkCollision", function (actorA, actorB) {
    return actorA.bounds.x < actorB.bounds.x + actorB.bounds.width && actorA.bounds.x + actorA.bounds.width > actorB.bounds.x && actorA.bounds.y < actorB.bounds.y + actorB.bounds.height && actorA.bounds.y + actorA.bounds.height > actorB.bounds.y;
  });

  _defineProperty(this, "addActor", function (actor, zIndex) {
    actor.create();
    if (!zIndex) zIndex = 0;
    actor.stage = _this;
    actor.ctx = _this.ctx;
    actor.zIndex = zIndex;
    if (!_this.children[zIndex]) _this.children[zIndex] = [];

    _this.children[zIndex].push(actor);
  });

  _defineProperty(this, "removeActor", function (actor) {
    var index = _this.children[actor.zIndex].findIndex(function (a) {
      return a === actor;
    });

    _this.children[actor.zIndex].splice(index, 1);
  });

  _defineProperty(this, "callUpdateCycles", function () {
    var timeNow = Date.now();

    if (timeNow - _this.updateTimeStart > 1000 / _this.updateFPS) {
      _this.updateDeltaTime = timeNow - _this.updateTimeStart;

      _this.updateCycles(_this.updateDeltaTime);

      _this.updateTimeStart = Date.now();
    }

    window.requestAnimationFrame(_this.callUpdateCycles);
  });

  _defineProperty(this, "callRenderCycles", function () {
    var timeNow = Date.now();

    if (timeNow - _this.renderTimeStart > 1000 / _this.renderFPS) {
      _this.renderDeltaTime = timeNow - _this.renderTimeStart;

      _this.renderCycles(_this.renderDeltaTime);

      _this.renderTimeStart = Date.now();
    }

    window.requestAnimationFrame(_this.callRenderCycles);
  });

  _defineProperty(this, "create", function () {});

  _defineProperty(this, "start", function () {
    _this.create();

    window.requestAnimationFrame(_this.callUpdateCycles);
    window.requestAnimationFrame(_this.callRenderCycles);
  });

  _defineProperty(this, "stop", function () {
    _this.destroy();

    window.cancelAnimationFrame(_this.callUpdateCycles);
    window.cancelAnimationFrame(_this.callRenderCycles);
  });

  _defineProperty(this, "render", function () {});

  _defineProperty(this, "renderCycles", function (deltaTime) {
    _this.render();

    _this.ctx.clearRect(0, 0, _this.width, _this.height);

    var keys = Object.keys(_this.children);
    keys.sort(function (a, b) {
      return a - b;
    }); //call all children render cycles

    keys.forEach(function (layer) {
      this.children[layer].forEach(function (child) {
        child.render(deltaTime * 0.05);
      }, this, deltaTime);
    }, _this, deltaTime);
  });

  _defineProperty(this, "update", function () {});

  _defineProperty(this, "updateCycles", function (deltaTime) {
    _this.update();

    var keys = Object.keys(_this.children);
    keys.sort(function (a, b) {
      return a - b;
    }); //call all children render cycles

    keys.forEach(function (layer) {
      this.children[layer].forEach(function (child) {
        //console.log(deltaTime);
        child.update(deltaTime * 0.05);
      }, this, deltaTime);
    }, _this, deltaTime);
  });

  _defineProperty(this, "destroy", function () {});

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
    this.elem = document.createElement('canvas');
    document.querySelector('body').appendChild(this.elem);
  }

  this.ctx = this.elem.getContext('2d'); //setup children

  this.children = {}; //run create

  this.create();
};

exports["default"] = Stage;