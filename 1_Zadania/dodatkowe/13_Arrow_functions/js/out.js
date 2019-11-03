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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n//zadanie 1\nvar hello = function hello() {\n  return console.log(\"Hello World\");\n};\n\nhello(); //zadanie 2\n\nvar product = function product() {\n  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  return number * 2;\n};\n\nconsole.log(product());\nconsole.log(product(2)); //zadanie 3\n\nvar giveLarger = function giveLarger(num1, num2) {\n  return num1 < num2 ? num2 : num1;\n};\n\nconsole.log(giveLarger(10, 20)); //zadanie 4\n\nvar arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];\n\nvar getSecondMaxNumber = function getSecondMaxNumber(array) {\n  return _toConsumableArray(array).sort(function (a, b) {\n    return b - a;\n  })[1];\n};\n\nconsole.log(getSecondMaxNumber(arr1)); //zadanie 5\n\nconsole.log(function (param) {\n  return param;\n}(\"hello\")); //zadanie 6\n\nvar count = function count() {\n  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  var i = 1;\n  var stop = num > 10 ? 10 : num;\n  var time = setInterval(function () {\n    console.log(\"Hello \".concat(i));\n    i++;\n    if (i > stop) clearInterval(time);\n  }, 1000);\n};\n\ncount();\n\n__webpack_require__(/*! ./zadanie00 */ \"./js/zadanie00.js\");\n\n__webpack_require__(/*! ./zadanie07 */ \"./js/zadanie07.js\");\n\n__webpack_require__(/*! ./zadanie08 */ \"./js/zadanie08.js\");\n\n__webpack_require__(/*! ./zadanie09 */ \"./js/zadanie09.js\");\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/zadanie00.js":
/*!*************************!*\
  !*** ./js/zadanie00.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var Students = function Students(names) {\n    this.names = names;\n    this.numberOfLetters = [];\n  };\n\n  Students.prototype.countLetters = function () {\n    var _this = this;\n\n    this.names.forEach(function (el) {\n      return _this.numberOfLetters.push(el.length);\n    });\n  }; //zadanie 0\n\n\n  var students = new Students([\"Ania\", \"Kamil\", \"Mariusz\"]);\n  students.countLetters();\n  console.log(students.numberOfLetters);\n});\n\n//# sourceURL=webpack:///./js/zadanie00.js?");

/***/ }),

/***/ "./js/zadanie07.js":
/*!*************************!*\
  !*** ./js/zadanie07.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var App = function App() {\n  this.websites = ['onet', 'wp', 'facebook'];\n  this.links = [];\n};\n\nApp.prototype.generateLinks = function () {\n  var _this = this;\n\n  this.websites.forEach(function (el) {\n    return _this.links.push(\"https://\".concat(el, \".com\"));\n  });\n};\n\nvar app = new App();\napp.generateLinks();\nconsole.log(app.links);\n$(\".menu a\").each(function (i, el) {\n  return el.href = app.links[i];\n});\n\n//# sourceURL=webpack:///./js/zadanie07.js?");

/***/ }),

/***/ "./js/zadanie08.js":
/*!*************************!*\
  !*** ./js/zadanie08.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var dog = {\n  type: \"Mammal\",\n  name: \"\",\n  setName: function setName(newName) {\n    this.name = newName;\n  }\n};\ndog.setName(\"Reksio\");\nconsole.log(dog.name);\n\n//# sourceURL=webpack:///./js/zadanie08.js?");

/***/ }),

/***/ "./js/zadanie09.js":
/*!*************************!*\
  !*** ./js/zadanie09.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\"div > span\").mouseover(function (e) {\n  return e.currentTarget.nextElementSibling.style.display = \"block\";\n});\n\n//# sourceURL=webpack:///./js/zadanie09.js?");

/***/ })

/******/ });