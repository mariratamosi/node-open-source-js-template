"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hello = require("./services/hello.world");

Object.keys(_hello).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hello[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hello[key];
    }
  });
});

var _random = require("./services/random.generator");

Object.keys(_random).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _random[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _random[key];
    }
  });
});

var _dateTimeHelper = require("./services/dateTimeHelper");

Object.keys(_dateTimeHelper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dateTimeHelper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dateTimeHelper[key];
    }
  });
});
//# sourceMappingURL=app.js.map
