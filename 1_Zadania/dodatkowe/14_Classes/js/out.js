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

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//zadanie 0\nvar Vehicle =\n/*#__PURE__*/\nfunction () {\n  function Vehicle(type) {\n    _classCallCheck(this, Vehicle);\n\n    this.type = type;\n  }\n\n  _createClass(Vehicle, [{\n    key: \"getType\",\n    value: function getType() {\n      return this.type;\n    }\n  }]);\n\n  return Vehicle;\n}();\n\nvar Boat =\n/*#__PURE__*/\nfunction (_Vehicle) {\n  _inherits(Boat, _Vehicle);\n\n  function Boat() {\n    _classCallCheck(this, Boat);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Boat).apply(this, arguments));\n  }\n\n  _createClass(Boat, [{\n    key: \"sail\",\n    value: function sail() {\n      console.log(\"I'm sailing.\");\n    }\n  }]);\n\n  return Boat;\n}(Vehicle);\n\nvar Car =\n/*#__PURE__*/\nfunction (_Vehicle2) {\n  _inherits(Car, _Vehicle2);\n\n  function Car(type, engine) {\n    var _this;\n\n    _classCallCheck(this, Car);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Car).call(this, type));\n    _this.engine = engine;\n    return _this;\n  }\n\n  _createClass(Car, [{\n    key: \"drive\",\n    value: function drive() {\n      console.log(\"I'm driving.\");\n    }\n  }]);\n\n  return Car;\n}(Vehicle);\n\nvar Plane =\n/*#__PURE__*/\nfunction (_Vehicle3) {\n  _inherits(Plane, _Vehicle3);\n\n  function Plane(type, engine) {\n    var _this2;\n\n    _classCallCheck(this, Plane);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Plane).call(this, type));\n    _this2.engine = engine;\n    return _this2;\n  }\n\n  _createClass(Plane, [{\n    key: \"fly\",\n    value: function fly() {\n      console.log(\"I'm flying.\");\n    }\n  }]);\n\n  return Plane;\n}(Vehicle); //zadanie 1\n\n\nvar Kaczka =\n/*#__PURE__*/\nfunction () {\n  function Kaczka(type) {\n    _classCallCheck(this, Kaczka);\n\n    this.type = type || \"zwykła kaczka\";\n  }\n\n  _createClass(Kaczka, [{\n    key: \"kwacz\",\n    value: function kwacz() {\n      console.log(\"kwa kwa\");\n    }\n  }, {\n    key: \"plywaj\",\n    value: function plywaj() {\n      console.log(\"płynę...\");\n    }\n  }, {\n    key: \"wyswietl\",\n    value: function wyswietl() {\n      console.log(\"Wygl\\u0105da jak \".concat(this.type));\n    }\n  }, {\n    key: \"lec\",\n    value: function lec() {\n      console.log(\"Lecę\");\n    }\n  }]);\n\n  return Kaczka;\n}();\n\nvar kaczucha = new Kaczka();\nkaczucha.kwacz();\nkaczucha.plywaj();\nkaczucha.wyswietl(); //zadanie 2\n\nvar DzikaKaczka =\n/*#__PURE__*/\nfunction (_Kaczka) {\n  _inherits(DzikaKaczka, _Kaczka);\n\n  function DzikaKaczka() {\n    _classCallCheck(this, DzikaKaczka);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DzikaKaczka).call(this));\n  }\n\n  return DzikaKaczka;\n}(Kaczka);\n\nvar dzikaKaczucha = new DzikaKaczka();\ndzikaKaczucha.kwacz();\ndzikaKaczucha.plywaj();\ndzikaKaczucha.wyswietl(); //zadanie 3\n\nvar KrzyzowkaKaczka =\n/*#__PURE__*/\nfunction (_Kaczka2) {\n  _inherits(KrzyzowkaKaczka, _Kaczka2);\n\n  function KrzyzowkaKaczka() {\n    _classCallCheck(this, KrzyzowkaKaczka);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(KrzyzowkaKaczka).call(this, \"krzyżówka\"));\n  }\n\n  return KrzyzowkaKaczka;\n}(Kaczka);\n\nvar krzyzoKaczucha = new KrzyzowkaKaczka();\nkrzyzoKaczucha.kwacz();\nkrzyzoKaczucha.plywaj();\nkrzyzoKaczucha.wyswietl(); //zadanie 4\n\nkaczucha.lec();\ndzikaKaczucha.lec();\nkrzyzoKaczucha.lec(); //zadanie 5\n\nvar GumowaKaczka =\n/*#__PURE__*/\nfunction (_Kaczka3) {\n  _inherits(GumowaKaczka, _Kaczka3);\n\n  function GumowaKaczka() {\n    _classCallCheck(this, GumowaKaczka);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(GumowaKaczka).call(this, \"gumowa\"));\n  }\n\n  _createClass(GumowaKaczka, [{\n    key: \"lec\",\n    value: function lec() {\n      console.log(\"gumowe kaczki nie potrafią latać :(\");\n    }\n  }]);\n\n  return GumowaKaczka;\n}(Kaczka);\n\nvar gumowaKaczucha = new GumowaKaczka();\ngumowaKaczucha.kwacz();\ngumowaKaczucha.plywaj();\ngumowaKaczucha.wyswietl();\ngumowaKaczucha.lec();\n\n__webpack_require__(/*! ./zadanie06.js */ \"./js/zadanie06.js\");\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/zadanie06.js":
/*!*************************!*\
  !*** ./js/zadanie06.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar foods = [];\n\nvar Food =\n/*#__PURE__*/\nfunction () {\n  function Food(name, protein, carbs, fat) {\n    _classCallCheck(this, Food);\n\n    this.name = name;\n    this.protein = protein;\n    this.carbs = carbs;\n    this.fat = fat;\n  }\n\n  _createClass(Food, [{\n    key: \"print\",\n    value: function print() {\n      console.log(\"\".concat(this.name, \" (p: \").concat(this.protein, \", c: \").concat(this.carbs, \", f: \").concat(this.fat, \")\"));\n    }\n  }]);\n\n  return Food;\n}();\n\nvar FastFood =\n/*#__PURE__*/\nfunction (_Food) {\n  _inherits(FastFood, _Food);\n\n  function FastFood() {\n    _classCallCheck(this, FastFood);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(FastFood).apply(this, arguments));\n  }\n\n  return FastFood;\n}(Food);\n\nvar FatFreeFood =\n/*#__PURE__*/\nfunction (_Food2) {\n  _inherits(FatFreeFood, _Food2);\n\n  function FatFreeFood() {\n    _classCallCheck(this, FatFreeFood);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(FatFreeFood).apply(this, arguments));\n  }\n\n  return FatFreeFood;\n}(Food);\n\nvar add = document.querySelector(\"input[type=submit]\");\nvar products = document.getElementById(\"products\");\nvar name = document.getElementById(\"name\");\nvar protein = document.getElementById(\"proteins\");\nvar carbs = document.getElementById(\"carbs\");\nvar fat = document.getElementById(\"fat\");\n\nvar addToList = function addToList(product) {\n  var li = document.createElement(\"li\");\n  li.textContent = \"\".concat(product.name, \" (p: \").concat(product.protein, \", c: \").concat(product.carbs, \", f: \").concat(product.fat, \")\");\n  products.appendChild(li);\n};\n\nfoods.push(new FastFood('Fries', 3.4, 41, 15));\nfoods.push(new FastFood('Donut', 4.9, 51, 25));\nfoods.push(new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4));\nfoods.forEach(function (el) {\n  addToList(el);\n});\nadd.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n\n  if (name.value && parseFloat(protein.value) && parseFloat(carbs.value) && parseFloat(fat.value)) {\n    var calories = protein.value * 4 + carbs.value * 4 + fat.value * 9;\n    var product;\n    if (calories > 250) product = new FastFood(name.value, protein.value, carbs.value, fat.value);else product = new FatFreeFood(name.value, protein.value, carbs.value, fat.value);\n    foods.push(product);\n    addToList(product);\n    console.log(foods);\n    name.value = \"\";\n    protein.value = \"\";\n    carbs.value = \"\";\n    fat.value = \"\";\n  }\n});\n\n//# sourceURL=webpack:///./js/zadanie06.js?");

/***/ })

/******/ });