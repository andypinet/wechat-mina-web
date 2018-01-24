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


window.aui = __WEBPACK_IMPORTED_MODULE_0__framework_aui_index__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony export (immutable) */ __webpack_exports__["setClipboardData"] = setClipboardData;
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// export * as dom from "./dom";

var utils = __WEBPACK_IMPORTED_MODULE_1__utils__;

function copyTextToClipboard(text) {
    var ret = false;
    var textArea = document.createElement("textarea");

    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';

    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    try {
        ret = document.execCommand('copy');
        // var msg = successful ? 'successful' : 'unsuccessful';
        // console.log('Copying text command was ' + msg);
    } catch (err) {
        // console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
    return ret;
}

var ClipboardDataError = function (_ExtendableError) {
    _inherits(ClipboardDataError, _ExtendableError);

    function ClipboardDataError() {
        _classCallCheck(this, ClipboardDataError);

        return _possibleConstructorReturn(this, (ClipboardDataError.__proto__ || Object.getPrototypeOf(ClipboardDataError)).call(this, "set ClipboardData error"));
    }

    return ClipboardDataError;
}(__WEBPACK_IMPORTED_MODULE_0__error__["a" /* ExtendableError */]);

/**
 * wx
 * Google Chrome 44, Firefox 42.0a1 and IE 11.0.8600.17814.
 * ali (*)
 *
 * @throws ClipboardDataError
 * @param data
 * @return {Promise<any>}
 */


function setClipboardData(data) {
    var error = new ClipboardDataError();
    return new Promise(function (resolve, reject) {
        if (wx && wx.setClipboardData) {
            wx.setClipboardData({
                data: data,
                success: function success(res) {
                    resolve();
                },
                fail: function fail() {
                    reject(error);
                }
            });
        } else {
            var isSuccess = copyTextToClipboard();
            if (isSuccess) {
                resolve();
            } else {
                reject(error);
            }
        }
    });
}

function init() {
    if (aui.ready) {
        aui.ready();
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendableError; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtendableError = function (_Error) {
    _inherits(ExtendableError, _Error);

    function ExtendableError(message) {
        _classCallCheck(this, ExtendableError);

        var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

        _this.name = _this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, _this.constructor);
        } else {
            _this.stack = new Error(message).stack;
        }
        return _this;
    }

    return ExtendableError;
}(Error);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["run"] = run;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return deepMerge; });
/* harmony export (immutable) */ __webpack_exports__["parseObjToOptions"] = parseObjToOptions;
/* harmony export (immutable) */ __webpack_exports__["parseOptionsToObj"] = parseOptionsToObj;
/* harmony export (immutable) */ __webpack_exports__["getRandomString"] = getRandomString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsep__ = __webpack_require__(4);
throw new Error("Cannot find module \"static-eval\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deepmerge__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/**
 * run a expression
 *
 * @param expression
 * @param args
 */
function run(expression, args) {
    var parse_tree = Object(__WEBPACK_IMPORTED_MODULE_0__jsep__["a" /* default */])(expression);
    return __WEBPACK_IMPORTED_MODULE_1_static_eval___default()(parse_tree, args);
}



var deepMerge = __WEBPACK_IMPORTED_MODULE_2_deepmerge__["a" /* default */];

function toString(type) {
    return toStr.call(type);
}

function isObject(obj) {
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === 'object' && toString(obj) === "[object Object]";
}

var isArray = Array.isArray || function (obj) {
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
};

function isBoolean(obj) {
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
}

/**
 * parse obj to a option
 *
 * { a: 1 }
 *
 * [
 *     {
 *          name: "a",
 *          value: 1
 *     }
 * ]
 *
 * @param obj
 * @returns {Array}
 */
function parseObjToOptions(obj) {
    if (isObject(obj)) {
        return Object.entries(obj).map(function (v) {
            return {
                name: v[0],
                value: v[1]
            };
        });
    }
    return [];
}

/**
 * parse options to obj
 *
 * @param options
 * @returns {{}}
 */
function parseOptionsToObj(options) {
    var ret = {};
    options.forEach(function (v) {
        ret[v.name] = v.value;
    });
    return ret;
}

/**
 * 获取随机字符串
 *
 * @param {number} [length = 7]
 * @returns {string}
 */
function getRandomString() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;

    return Math.random().toString(36).substring(length);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//     JavaScript Expression Parser (JSEP) <%= version %>
//     JSEP may be freely distributed under the MIT License
//     http://jsep.from.so/


// Node Types
// ----------

// This is the full set of types that any JSEP node can be.
// Store them here to save space when minified

var COMPOUND = 'Compound',
    IDENTIFIER = 'Identifier',
    MEMBER_EXP = 'MemberExpression',
    LITERAL = 'Literal',
    THIS_EXP = 'ThisExpression',
    CALL_EXP = 'CallExpression',
    UNARY_EXP = 'UnaryExpression',
    BINARY_EXP = 'BinaryExpression',
    LOGICAL_EXP = 'LogicalExpression',
    CONDITIONAL_EXP = 'ConditionalExpression',
    ARRAY_EXP = 'ArrayExpression',
    PERIOD_CODE = 46,
    // '.'
COMMA_CODE = 44,
    // ','
SQUOTE_CODE = 39,
    // single quote
DQUOTE_CODE = 34,
    // double quotes
OPAREN_CODE = 40,
    // (
CPAREN_CODE = 41,
    // )
OBRACK_CODE = 91,
    // [
CBRACK_CODE = 93,
    // ]
QUMARK_CODE = 63,
    // ?
SEMCOL_CODE = 59,
    // ;
COLON_CODE = 58,
    // :

throwError = function throwError(message, index) {
  var error = new Error(message + ' at character ' + index);
  error.index = index;
  error.description = message;
  throw error;
},


// Operations
// ----------

// Set `t` to `true` to save space (when minified, not gzipped)
t = true,

// Use a quickly-accessible map to store all of the unary operators
// Values are set to `true` (it really doesn't matter)
unary_ops = { '-': t, '!': t, '~': t, '+': t },

// Also use a map for the binary operations but set their values to their
// binary precedence for quick reference:
// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
binary_ops = {
  '||': 1, '&&': 2, '|': 3, '^': 4, '&': 5,
  '==': 6, '!=': 6, '===': 6, '!==': 6,
  '<': 7, '>': 7, '<=': 7, '>=': 7,
  '<<': 8, '>>': 8, '>>>': 8,
  '+': 9, '-': 9,
  '*': 10, '/': 10, '%': 10
},

// Get return the longest key length of any object
getMaxKeyLen = function getMaxKeyLen(obj) {
  var max_len = 0,
      len;
  for (var key in obj) {
    if ((len = key.length) > max_len && obj.hasOwnProperty(key)) {
      max_len = len;
    }
  }
  return max_len;
},
    max_unop_len = getMaxKeyLen(unary_ops),
    max_binop_len = getMaxKeyLen(binary_ops),

// Literals
// ----------
// Store the values to return for the various literals we may encounter
literals = {
  'true': true,
  'false': false,
  'null': null
},

// Except for `this`, which is special. This could be changed to something like `'self'` as well
this_str = 'this',

// Returns the precedence of a binary operator or `0` if it isn't a binary operator
binaryPrecedence = function binaryPrecedence(op_val) {
  return binary_ops[op_val] || 0;
},

// Utility function (gets called from multiple places)
// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
createBinaryExpression = function createBinaryExpression(operator, left, right) {
  var type = operator === '||' || operator === '&&' ? LOGICAL_EXP : BINARY_EXP;
  return {
    type: type,
    operator: operator,
    left: left,
    right: right
  };
},

// `ch` is a character code in the next three functions
isDecimalDigit = function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57; // 0...9
},
    isIdentifierStart = function isIdentifierStart(ch) {
  return ch === 36 || ch === 95 || // `$` and `_`
  ch >= 65 && ch <= 90 || // A...Z
  ch >= 97 && ch <= 122 || // a...z
  ch >= 128 && !binary_ops[String.fromCharCode(ch)]; // any non-ASCII that is not an operator
},
    isIdentifierPart = function isIdentifierPart(ch) {
  return ch === 36 || ch === 95 || // `$` and `_`
  ch >= 65 && ch <= 90 || // A...Z
  ch >= 97 && ch <= 122 || // a...z
  ch >= 48 && ch <= 57 || // 0...9
  ch >= 128 && !binary_ops[String.fromCharCode(ch)]; // any non-ASCII that is not an operator
},


// Parsing
// -------
// `expr` is a string with the passed in expression
jsep = function jsep(expr) {
  // `index` stores the character number we are currently at while `length` is a constant
  // All of the gobbles below will modify `index` as we move along
  var index = 0,
      charAtFunc = expr.charAt,
      charCodeAtFunc = expr.charCodeAt,
      exprI = function exprI(i) {
    return charAtFunc.call(expr, i);
  },
      exprICode = function exprICode(i) {
    return charCodeAtFunc.call(expr, i);
  },
      length = expr.length,


  // Push `index` up to the next non-space character
  gobbleSpaces = function gobbleSpaces() {
    var ch = exprICode(index);
    // space or tab
    while (ch === 32 || ch === 9 || ch === 10 || ch === 13) {
      ch = exprICode(++index);
    }
  },


  // The main parsing function. Much of this code is dedicated to ternary expressions
  gobbleExpression = function gobbleExpression() {
    var test = gobbleBinaryExpression(),
        consequent,
        alternate;
    gobbleSpaces();
    if (exprICode(index) === QUMARK_CODE) {
      // Ternary expression: test ? consequent : alternate
      index++;
      consequent = gobbleExpression();
      if (!consequent) {
        throwError('Expected expression', index);
      }
      gobbleSpaces();
      if (exprICode(index) === COLON_CODE) {
        index++;
        alternate = gobbleExpression();
        if (!alternate) {
          throwError('Expected expression', index);
        }
        return {
          type: CONDITIONAL_EXP,
          test: test,
          consequent: consequent,
          alternate: alternate
        };
      } else {
        throwError('Expected :', index);
      }
    } else {
      return test;
    }
  },


  // Search for the operation portion of the string (e.g. `+`, `===`)
  // Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
  // and move down from 3 to 2 to 1 character until a matching binary operation is found
  // then, return that binary operation
  gobbleBinaryOp = function gobbleBinaryOp() {
    gobbleSpaces();
    var biop,
        to_check = expr.substr(index, max_binop_len),
        tc_len = to_check.length;
    while (tc_len > 0) {
      if (binary_ops.hasOwnProperty(to_check)) {
        index += tc_len;
        return to_check;
      }
      to_check = to_check.substr(0, --tc_len);
    }
    return false;
  },


  // This function is responsible for gobbling an individual expression,
  // e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
  gobbleBinaryExpression = function gobbleBinaryExpression() {
    var ch_i, node, biop, prec, stack, biop_info, left, right, i;

    // First, try to get the leftmost thing
    // Then, check to see if there's a binary operator operating on that leftmost thing
    left = gobbleToken();
    biop = gobbleBinaryOp();

    // If there wasn't a binary operator, just return the leftmost node
    if (!biop) {
      return left;
    }

    // Otherwise, we need to start a stack to properly place the binary operations in their
    // precedence structure
    biop_info = { value: biop, prec: binaryPrecedence(biop) };

    right = gobbleToken();
    if (!right) {
      throwError("Expected expression after " + biop, index);
    }
    stack = [left, biop_info, right];

    // Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
    while (biop = gobbleBinaryOp()) {
      prec = binaryPrecedence(biop);

      if (prec === 0) {
        break;
      }
      biop_info = { value: biop, prec: prec };

      // Reduce: make a binary expression from the three topmost entries.
      while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
        right = stack.pop();
        biop = stack.pop().value;
        left = stack.pop();
        node = createBinaryExpression(biop, left, right);
        stack.push(node);
      }

      node = gobbleToken();
      if (!node) {
        throwError("Expected expression after " + biop, index);
      }
      stack.push(biop_info, node);
    }

    i = stack.length - 1;
    node = stack[i];
    while (i > 1) {
      node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
      i -= 2;
    }
    return node;
  },


  // An individual part of a binary expression:
  // e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
  gobbleToken = function gobbleToken() {
    var ch, to_check, tc_len;

    gobbleSpaces();
    ch = exprICode(index);

    if (isDecimalDigit(ch) || ch === PERIOD_CODE) {
      // Char code 46 is a dot `.` which can start off a numeric literal
      return gobbleNumericLiteral();
    } else if (ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
      // Single or double quotes
      return gobbleStringLiteral();
    } else if (ch === OBRACK_CODE) {
      return gobbleArray();
    } else {
      to_check = expr.substr(index, max_unop_len);
      tc_len = to_check.length;
      while (tc_len > 0) {
        if (unary_ops.hasOwnProperty(to_check)) {
          index += tc_len;
          return {
            type: UNARY_EXP,
            operator: to_check,
            argument: gobbleToken(),
            prefix: true
          };
        }
        to_check = to_check.substr(0, --tc_len);
      }

      if (isIdentifierStart(ch) || ch === OPAREN_CODE) {
        // open parenthesis
        // `foo`, `bar.baz`
        return gobbleVariable();
      }
    }

    return false;
  },

  // Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
  // keep track of everything in the numeric literal and then calling `parseFloat` on that string
  gobbleNumericLiteral = function gobbleNumericLiteral() {
    var number = '',
        ch,
        chCode;
    while (isDecimalDigit(exprICode(index))) {
      number += exprI(index++);
    }

    if (exprICode(index) === PERIOD_CODE) {
      // can start with a decimal marker
      number += exprI(index++);

      while (isDecimalDigit(exprICode(index))) {
        number += exprI(index++);
      }
    }

    ch = exprI(index);
    if (ch === 'e' || ch === 'E') {
      // exponent marker
      number += exprI(index++);
      ch = exprI(index);
      if (ch === '+' || ch === '-') {
        // exponent sign
        number += exprI(index++);
      }
      while (isDecimalDigit(exprICode(index))) {
        //exponent itself
        number += exprI(index++);
      }
      if (!isDecimalDigit(exprICode(index - 1))) {
        throwError('Expected exponent (' + number + exprI(index) + ')', index);
      }
    }

    chCode = exprICode(index);
    // Check to make sure this isn't a variable name that start with a number (123abc)
    if (isIdentifierStart(chCode)) {
      throwError('Variable names cannot start with a number (' + number + exprI(index) + ')', index);
    } else if (chCode === PERIOD_CODE) {
      throwError('Unexpected period', index);
    }

    return {
      type: LITERAL,
      value: parseFloat(number),
      raw: number
    };
  },


  // Parses a string literal, staring with single or double quotes with basic support for escape codes
  // e.g. `"hello world"`, `'this is\nJSEP'`
  gobbleStringLiteral = function gobbleStringLiteral() {
    var str = '',
        quote = exprI(index++),
        closed = false,
        ch;

    while (index < length) {
      ch = exprI(index++);
      if (ch === quote) {
        closed = true;
        break;
      } else if (ch === '\\') {
        // Check for all of the common escape codes
        ch = exprI(index++);
        switch (ch) {
          case 'n':
            str += '\n';break;
          case 'r':
            str += '\r';break;
          case 't':
            str += '\t';break;
          case 'b':
            str += '\b';break;
          case 'f':
            str += '\f';break;
          case 'v':
            str += '\x0B';break;
          default:
            str += ch;
        }
      } else {
        str += ch;
      }
    }

    if (!closed) {
      throwError('Unclosed quote after "' + str + '"', index);
    }

    return {
      type: LITERAL,
      value: str,
      raw: quote + str + quote
    };
  },


  // Gobbles only identifiers
  // e.g.: `foo`, `_value`, `$x1`
  // Also, this function checks if that identifier is a literal:
  // (e.g. `true`, `false`, `null`) or `this`
  gobbleIdentifier = function gobbleIdentifier() {
    var ch = exprICode(index),
        start = index,
        identifier;

    if (isIdentifierStart(ch)) {
      index++;
    } else {
      throwError('Unexpected ' + exprI(index), index);
    }

    while (index < length) {
      ch = exprICode(index);
      if (isIdentifierPart(ch)) {
        index++;
      } else {
        break;
      }
    }
    identifier = expr.slice(start, index);

    if (literals.hasOwnProperty(identifier)) {
      return {
        type: LITERAL,
        value: literals[identifier],
        raw: identifier
      };
    } else if (identifier === this_str) {
      return { type: THIS_EXP };
    } else {
      return {
        type: IDENTIFIER,
        name: identifier
      };
    }
  },


  // Gobbles a list of arguments within the context of a function call
  // or array literal. This function also assumes that the opening character
  // `(` or `[` has already been gobbled, and gobbles expressions and commas
  // until the terminator character `)` or `]` is encountered.
  // e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
  gobbleArguments = function gobbleArguments(termination) {
    var ch_i,
        args = [],
        node,
        closed = false;
    while (index < length) {
      gobbleSpaces();
      ch_i = exprICode(index);
      if (ch_i === termination) {
        // done parsing
        closed = true;
        index++;
        break;
      } else if (ch_i === COMMA_CODE) {
        // between expressions
        index++;
      } else {
        node = gobbleExpression();
        if (!node || node.type === COMPOUND) {
          throwError('Expected comma', index);
        }
        args.push(node);
      }
    }
    if (!closed) {
      throwError('Expected ' + String.fromCharCode(termination), index);
    }
    return args;
  },


  // Gobble a non-literal variable name. This variable name may include properties
  // e.g. `foo`, `bar.baz`, `foo['bar'].baz`
  // It also gobbles function calls:
  // e.g. `Math.acos(obj.angle)`
  gobbleVariable = function gobbleVariable() {
    var ch_i, node;
    ch_i = exprICode(index);

    if (ch_i === OPAREN_CODE) {
      node = gobbleGroup();
    } else {
      node = gobbleIdentifier();
    }
    gobbleSpaces();
    ch_i = exprICode(index);
    while (ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
      index++;
      if (ch_i === PERIOD_CODE) {
        gobbleSpaces();
        node = {
          type: MEMBER_EXP,
          computed: false,
          object: node,
          property: gobbleIdentifier()
        };
      } else if (ch_i === OBRACK_CODE) {
        node = {
          type: MEMBER_EXP,
          computed: true,
          object: node,
          property: gobbleExpression()
        };
        gobbleSpaces();
        ch_i = exprICode(index);
        if (ch_i !== CBRACK_CODE) {
          throwError('Unclosed [', index);
        }
        index++;
      } else if (ch_i === OPAREN_CODE) {
        // A function call is being made; gobble all the arguments
        node = {
          type: CALL_EXP,
          'arguments': gobbleArguments(CPAREN_CODE),
          callee: node
        };
      }
      gobbleSpaces();
      ch_i = exprICode(index);
    }
    return node;
  },


  // Responsible for parsing a group of things within parentheses `()`
  // This function assumes that it needs to gobble the opening parenthesis
  // and then tries to gobble everything within that parenthesis, assuming
  // that the next thing it should see is the close parenthesis. If not,
  // then the expression probably doesn't have a `)`
  gobbleGroup = function gobbleGroup() {
    index++;
    var node = gobbleExpression();
    gobbleSpaces();
    if (exprICode(index) === CPAREN_CODE) {
      index++;
      return node;
    } else {
      throwError('Unclosed (', index);
    }
  },


  // Responsible for parsing Array literals `[1, 2, 3]`
  // This function assumes that it needs to gobble the opening bracket
  // and then tries to gobble the expressions as arguments.
  gobbleArray = function gobbleArray() {
    index++;
    return {
      type: ARRAY_EXP,
      elements: gobbleArguments(CBRACK_CODE)
    };
  },
      nodes = [],
      ch_i,
      node;

  while (index < length) {
    ch_i = exprICode(index);

    // Expressions can be separated by semicolons, commas, or just inferred without any
    // separators
    if (ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
      index++; // ignore separators
    } else {
      // Try to gobble each expression individually
      if (node = gobbleExpression()) {
        nodes.push(node);
        // If we weren't able to find a binary expression and are out of room, then
        // the expression passed in probably has too much
      } else if (index < length) {
        throwError('Unexpected "' + exprI(index) + '"', index);
      }
    }
  }

  // If there's only one expression just try returning the expression
  if (nodes.length === 1) {
    return nodes[0];
  } else {
    return {
      type: COMPOUND,
      body: nodes
    };
  }
};

// To be filled in by the template
jsep.version = '<%= version %>';
jsep.toString = function () {
  return 'JavaScript Expression Parser (JSEP) v' + jsep.version;
};

/**
 * @method jsep.addUnaryOp
 * @param {string} op_name The name of the unary op to add
 * @return jsep
 */
jsep.addUnaryOp = function (op_name) {
  max_unop_len = Math.max(op_name.length, max_unop_len);
  unary_ops[op_name] = t;return this;
};

/**
 * @method jsep.addBinaryOp
 * @param {string} op_name The name of the binary op to add
 * @param {number} precedence The precedence of the binary op (can be a float)
 * @return jsep
 */
jsep.addBinaryOp = function (op_name, precedence) {
  max_binop_len = Math.max(op_name.length, max_binop_len);
  binary_ops[op_name] = precedence;
  return this;
};

/**
 * @method jsep.addLiteral
 * @param {string} literal_name The name of the literal to add
 * @param {*} literal_value The value of the literal
 * @return jsep
 */
jsep.addLiteral = function (literal_name, literal_value) {
  literals[literal_name] = literal_value;
  return this;
};

/**
 * @method jsep.removeUnaryOp
 * @param {string} op_name The name of the unary op to remove
 * @return jsep
 */
jsep.removeUnaryOp = function (op_name) {
  delete unary_ops[op_name];
  if (op_name.length === max_unop_len) {
    max_unop_len = getMaxKeyLen(unary_ops);
  }
  return this;
};

/**
 * @method jsep.removeAllUnaryOps
 * @return jsep
 */
jsep.removeAllUnaryOps = function () {
  unary_ops = {};
  max_unop_len = 0;

  return this;
};

/**
 * @method jsep.removeBinaryOp
 * @param {string} op_name The name of the binary op to remove
 * @return jsep
 */
jsep.removeBinaryOp = function (op_name) {
  delete binary_ops[op_name];
  if (op_name.length === max_binop_len) {
    max_binop_len = getMaxKeyLen(binary_ops);
  }
  return this;
};

/**
 * @method jsep.removeAllBinaryOps
 * @return jsep
 */
jsep.removeAllBinaryOps = function () {
  binary_ops = {};
  max_binop_len = 0;

  return this;
};

/**
 * @method jsep.removeLiteral
 * @param {string} literal_name The name of the literal to remove
 * @return jsep
 */
jsep.removeLiteral = function (literal_name) {
  delete literals[literal_name];
  return this;
};

/**
 * @method jsep.removeAllLiterals
 * @return jsep
 */
jsep.removeAllLiterals = function () {
  literals = {};

  return this;
};

/* harmony default export */ __webpack_exports__["a"] = (jsep);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return (clone && isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, optionsArgument)
		: value
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument)
	})
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument)
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument)
	} else {
		return mergeObject(target, source, optionsArgument)
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, optionsArgument)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["a"] = (deepmerge_1);


/***/ })
/******/ ]);