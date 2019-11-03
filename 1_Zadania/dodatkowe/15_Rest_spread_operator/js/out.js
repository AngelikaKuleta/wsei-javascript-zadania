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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zadanie03_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zadanie03.js */ \"./js/zadanie03.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n//zadanie 0\nvar namesA = [\"Zosia\", \"Marcin\", \"Kamil\"];\nvar namesB = [\"Ala\", \"Puszek\"].concat(namesA, [\"Jan\", \"Karol\"]);\nconsole.log(namesB);\n\nvar getAverage = function getAverage() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (prev, curr) {\n    return prev + curr;\n  }) / args.length;\n};\n\nconsole.log(getAverage(2, 4, 5, 6, 7, 79)); //zadanie 1\n\nvar name = \"Angelika\";\n\nvar nameArray = _toConsumableArray(name);\n\nconsole.log(nameArray); //zadanie 2\n\nvar fruits = [\"apple\", \"orange\", \"strawbery\"];\nvar vegetables = [\"tomato\", \"cucumber\"];\nvar mix = [].concat(fruits, vegetables);\nconsole.log(mix); //zadanie 3\n\n\n\nvar setFunnyName = function setFunnyName() {\n  _zadanie03_js__WEBPACK_IMPORTED_MODULE_0__[\"people\"].push.apply(_zadanie03_js__WEBPACK_IMPORTED_MODULE_0__[\"people\"], arguments);\n};\n\nsetFunnyName({\n  person: \"Nao Buu\",\n  profession: \"tynkarz\"\n}, {\n  person: \"Jan Nowak\",\n  profession: \"bezrobotny\"\n});\nconsole.log(_zadanie03_js__WEBPACK_IMPORTED_MODULE_0__[\"people\"]);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/zadanie03.js":
/*!*************************!*\
  !*** ./js/zadanie03.js ***!
  \*************************/
/*! exports provided: people */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"people\", function() { return people; });\nvar people = [{\n  person: \"Kim Yoo Suk\",\n  profession: \"tyczkarz\"\n}, {\n  person: \"Sue Yoo\",\n  profession: \"prawnik\"\n}, {\n  person: \"Dr. Alden Cockburn\",\n  profession: \"urolog\"\n}, {\n  person: \"Rusty Kuntz\",\n  profession: \"trener\"\n}];\n\n\n//# sourceURL=webpack:///./js/zadanie03.js?");

/***/ })

/******/ });