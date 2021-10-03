/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ScrollToHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ScrollToHash */ "./resources/js/utils/ScrollToHash.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./resources/js/project.js");


new _utils_ScrollToHash__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _project__WEBPACK_IMPORTED_MODULE_1__["default"]();

/***/ }),

/***/ "./resources/js/project.js":
/*!*********************************!*\
  !*** ./resources/js/project.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "observer", void 0);

    _defineProperty(this, "$elements", void 0);

    this.$next = document.querySelector(".js-project-next");
    this.init();
    this.next();
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      if (!IntersectionObserver) {// don't work
      } else {
        this.intersectionObserver();
      }
    }
  }, {
    key: "next",
    value: function next() {
      if (this.$next) {
        this.$next.addEventListener("click", function () {// next
        });
      }
    }
  }, {
    key: "intersectionObserver",
    value: function intersectionObserver() {
      var _this = this;

      this.$elements = document.querySelectorAll(".js-project-observer-item");
      var options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
      };
      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var data = JSON.parse(entry.target.getAttribute("data-project"));

            _this.updateDOM(data);
          }
        });
      }, options);
      this.$elements.forEach(function (target) {
        _this.observer.observe(target);
      });
    }
  }, {
    key: "updateDOM",
    value: function updateDOM(data) {
      var $title = document.querySelector(".js-project-title");
      var $url = document.querySelector(".js-project-url");
      $title.textContent = data.title;
      $url.href = "";
      this.$next = data.index;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/utils/ScrollToHash.js":
/*!********************************************!*\
  !*** ./resources/js/utils/ScrollToHash.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var elements = document.querySelectorAll("a");
  elements.forEach(function (element) {
    element.addEventListener("click", function (e) {
      var hash = element.getAttribute("href");
      var regex = new RegExp("#(.*)", "gi");

      if (hash.match("#(.+)")) {
        e.preventDefault();
        hash = hash.replace(regex, "$1");
        var targetElement = document.querySelector("#" + hash);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/maximefondu/Clients/m/matteo/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/maximefondu/Clients/m/matteo/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map