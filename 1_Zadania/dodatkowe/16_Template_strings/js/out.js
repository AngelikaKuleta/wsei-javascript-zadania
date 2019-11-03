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
/***/ (function(module, exports) {

eval("//zadanie 0\nvar person = {\n  name: \"Vlad\",\n  lastName: \"Drăculea\",\n  yearOfBirth: 1431,\n  proffesion: \"Lord of Wallachia\"\n};\n\nvar whoAreYou = function whoAreYou(person) {\n  console.log(\"My name is \".concat(person.name, \" \").concat(person.lastName, \".\\n    I am \").concat(new Date().getFullYear() - person.yearOfBirth, \" years old.\\n    My proffesion is \").concat(person.proffesion));\n};\n\nwhoAreYou(person); //zadanie 1\n\nvar num1 = 56;\nvar num2 = 128;\nconsole.log(\"Suma dw\\xF3ch liczb \".concat(num1, \" i \").concat(num2, \" to: \").concat(num1 + num2)); //zadanie 2\n\nvar name = \"Angelika\";\nconsole.log(\"Moje im\\u0119 i nazwisko to: \".concat(name, \" Kuleta\")); //zadanie 3\n\nvar write = function write() {\n  console.log(\"\\\"My\\u015Bl\\u0119, \\u017Ce jest wiele pi\\u0119kna\\nw posiadaniu problem\\xF3w.\\nTo jeden ze sposob\\xF3w w jaki si\\u0119 uczymy\\\"\\nHerbie Hancock\");\n};\n\nwrite(); //zadanie 4\n\nvar button = {\n  value: \"Send message\",\n  idName: \"sendMsg\",\n  width: \"100px\",\n  padding: \"20px\"\n};\nconsole.log(\"To jest button.\\nJego szeroko\\u015B\\u0107 to \".concat(button.width + button.padding * 2, \".\\nNapis, kt\\xF3ry na nim widnieje to \\\"\").concat(button.velue, \"\\\"\"));\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });