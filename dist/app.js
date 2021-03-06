(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Dispatch = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./services/dateTimeHelper":2,"./services/hello.world":3,"./services/random.generator":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTimeHelper = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateTimeHelperObj = function DateTimeHelperObj() {
  var _this = this;

  _classCallCheck(this, DateTimeHelperObj);

  _defineProperty(this, "getTodayYearMonthData", function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    mm = mm < 10 ? "0" + mm : mm;
    dd = dd < 10 ? "0" + dd : dd;
    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  });

  _defineProperty(this, "getThisWeekRange", function () {
    var date = new Date();
    var returnDate = [];
    var dayNo = date.getDay();
    var init = dayNo; //alert("dasdd");

    var offsetDate = new Date();
    offsetDate.setDate(date.getDate() - init);
    returnDate[0] = _this.getDateForTableFilterMonthDateYear(offsetDate);
    offsetDate = new Date();
    offsetDate.setDate(date.getDate() - init + 6);
    returnDate[1] = _this.getDateForTableFilterMonthDateYear(offsetDate);
    return returnDate;
  });

  _defineProperty(this, "getDateForTableFilterMonthDateYear", function (date) {
    var yyyy = date.getFullYear();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    dd = dd < 10 ? "0" + dd : dd;
    var monthName = this.getMonthFromNumber(mm);
    return monthName + " " + dd + ", " + yyyy;
  });

  _defineProperty(this, "getMonthFromNumber", function (month) {
    switch (month) {
      case 1:
        return "Jan";

      case 2:
        return "Feb";

      case 3:
        return "Mar";

      case 4:
        return "Apr";

      case 5:
        return "May";

      case 6:
        return "Jun";

      case 7:
        return "Jul";

      case 8:
        return "Aug";

      case 9:
        return "Sep";

      case 10:
        return "Oct";

      case 11:
        return "Nov";

      case 12:
        return "Dec";
    }
  });

  _defineProperty(this, "getBrowserTimeZoneOffset", function () {
    var timeZoneOffsetInMinute = new Date().getTimezoneOffset();

    if (timeZoneOffsetInMinute < 0) {
      var timezoneOffsetInHMS = this.getHourMinuteSecondFromSeconds(timeZoneOffsetInMinute * -1 * 60);
      return "+" + timezoneOffsetInHMS;
    } else {
      var timezoneOffsetInHMS = this.getHourMinuteSecondFromSeconds(timeZoneOffsetInMinute * 60);
      return "-" + timezoneOffsetInHMS;
    }
  });

  _defineProperty(this, "getHourMinuteSecondFromSeconds", function (totalSeconds) {
    var hours = Math.floor(totalSeconds / (60 * 60));
    var divisorForMinutes = totalSeconds % (60 * 60);
    var minutes = Math.floor(divisorForMinutes / 60);
    var divisorForSeconds = divisorForMinutes % 60;
    var seconds = Math.ceil(divisorForSeconds);

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  });

  _defineProperty(this, "getHourMinuteFromMin", function (totalMin) {
    var hour = Math.floor(totalMin / 60);
    var min = Math.floor(totalMin % 60);
    var hourString = "";
    var minString = "";
    if (hour <= 1) hourString = "Hour";else hourString = "Hours";
    if (min <= 1) minString = "Min";else minString = "Mins";
    return hour + " " + hourString + " " + min + " " + minString;
  });
};

var dateTimeHelper = function () {
  return new DateTimeHelperObj();
}();

exports.dateTimeHelper = dateTimeHelper;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = sayHello;

function sayHello() {
  return "Shipday Dispatch Application";
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlphaNumericValue = getAlphaNumericValue;
var ALPHA_NUMERIC_SEED = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getAlphaNumericValue(length) {
  var chars = [];

  for (var i = 0; i < length; i++) {
    chars.push(ALPHA_NUMERIC_SEED[Math.floor(Math.random() * ALPHA_NUMERIC_SEED.length)]);
  }

  return chars.join('');
}

},{}]},{},[1])(1)
});
