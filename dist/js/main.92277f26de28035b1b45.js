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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_aui_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_aui_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__framework_aui_index__);


window.aui = __WEBPACK_IMPORTED_MODULE_0__framework_aui_index__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:9)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m { \u001b[33mExtendableError\u001b[39m } from \u001b[32m\"./error\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33m*\u001b[39m as _utils from \u001b[32m\"./utils\"\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[33m*\u001b[39m as dom from \u001b[32m\"./dom\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m\n \u001b[90m 5 | \u001b[39m\u001b[36mexport\u001b[39m let utils \u001b[33m=\u001b[39m _utils\u001b[33m;\u001b[39m\n \u001b[90m 6 | \u001b[39m\u001b[0m\n");

/***/ })
/******/ ]);