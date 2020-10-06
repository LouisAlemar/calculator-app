module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Add/index.js":
/*!*************************************!*\
  !*** ./src/components/Add/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/louisalemar/Desktop/calculator-app/src/components/Add/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Add = props => {\n  const {\n    click\n  } = props;\n  return __jsx(\"div\", {\n    className: \"Add\",\n    onClick: click,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"+\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Add);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGQvaW5kZXguanM/ZDExZSJdLCJuYW1lcyI6WyJBZGQiLCJwcm9wcyIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1BLEdBQUcsR0FBSUMsS0FBRCxJQUFXO0FBQ25CLFFBQU07QUFDRkM7QUFERSxNQUVGRCxLQUZKO0FBSUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFdBQU8sRUFBRUMsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixDQURKO0FBS0gsQ0FWRDs7QUFZZUYsa0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBZGQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsaWNrXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFkZFwiIG9uQ2xpY2s9e2NsaWNrfT5cbiAgICAgICAgICAgIDxoMz4rPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Add/index.js\n");

/***/ }),

/***/ "./src/components/Calculator/Calculator.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/Calculator/Calculator.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"divContainer\": \"Calculator_divContainer__rJac8\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IubW9kdWxlLnNjc3M/OWJkYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhbGN1bGF0b3IvQ2FsY3VsYXRvci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRpdkNvbnRhaW5lclwiOiBcIkNhbGN1bGF0b3JfZGl2Q29udGFpbmVyX19ySmFjOFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Calculator/Calculator.module.scss\n");

/***/ }),

/***/ "./src/components/Calculator/index.js":
/*!********************************************!*\
  !*** ./src/components/Calculator/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator.module.scss */ \"./src/components/Calculator/Calculator.module.scss\");\n/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NumberKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NumberKey */ \"./src/components/NumberKey/index.js\");\n/* harmony import */ var _Total__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Total */ \"./src/components/Total/index.js\");\n/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Add */ \"./src/components/Add/index.js\");\n/* harmony import */ var _Equals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Equals */ \"./src/components/Equals/index.js\");\nvar _jsxFileName = \"/Users/louisalemar/Desktop/calculator-app/src/components/Calculator/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass Calculator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      total: '',\n      runningNumber: [],\n      method: ''\n    });\n\n    _defineProperty(this, \"add\", number => {\n      this.setState({\n        total: this.state.runningNumber.join(''),\n        runningNumber: [],\n        method: '+'\n      });\n      console.log(this.state);\n    });\n\n    _defineProperty(this, \"equals\", () => {\n      switch (this.state.method) {\n        case '+':\n          this.setState({\n            total: this.state.total + this.state.runningNumber.join('')\n          });\n          break;\n\n        default:\n          break;\n      }\n    });\n\n    _defineProperty(this, \"updateRunningNumber\", number => {\n      const runningNumber = [...this.state.runningNumber];\n      runningNumber.push(number);\n      console.log(typeof this.state.total);\n\n      if (this.state.total !== '0') {\n        this.setState({\n          total: this.state.total.concat(number),\n          runningNumber: runningNumber\n        });\n      } else {\n        this.setState({\n          total: '0',\n          runningNumber: runningNumber\n        });\n      }\n    });\n  }\n\n  render() {\n    const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n    return __jsx(\"div\", {\n      className: _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.divContainer,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    }, __jsx(_Total__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      amount: this.state.total,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }), numberArray.map((element, index) => {\n      return __jsx(_NumberKey__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        number: element,\n        key: index,\n        click: () => {\n          this.updateRunningNumber(element);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 32\n        }\n      });\n    }), __jsx(_Add__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      click: this.add,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }\n    }), __jsx(_Equals__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      click: this.equals,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzPzI0OGYiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIlJlYWN0IiwiQ29tcG9uZW50IiwidG90YWwiLCJydW5uaW5nTnVtYmVyIiwibWV0aG9kIiwibnVtYmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNvbmNhdCIsInJlbmRlciIsIm51bWJlckFycmF5Iiwic3R5bGUiLCJkaXZDb250YWluZXIiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJ1cGRhdGVSdW5uaW5nTnVtYmVyIiwiYWRkIiwiZXF1YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQyw0Q0FBSyxDQUFDQyxTQUEvQixDQUF5QztBQUFBO0FBQUE7O0FBQUEsbUNBQzdCO0FBQ0pDLFdBQUssRUFBRSxFQURIO0FBRUpDLG1CQUFhLEVBQUUsRUFGWDtBQUdKQyxZQUFNLEVBQUU7QUFISixLQUQ2Qjs7QUFBQSxpQ0FPOUJDLE1BQUQsSUFBWTtBQUNkLFdBQUtDLFFBQUwsQ0FBYztBQUNWSixhQUFLLEVBQUUsS0FBS0ssS0FBTCxDQUFXSixhQUFYLENBQXlCSyxJQUF6QixDQUE4QixFQUE5QixDQURHO0FBRVZMLHFCQUFhLEVBQUUsRUFGTDtBQUdWQyxjQUFNLEVBQUU7QUFIRSxPQUFkO0FBTUFLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILEtBQWpCO0FBQ0gsS0Fmb0M7O0FBQUEsb0NBaUI1QixNQUFNO0FBQ1gsY0FBTyxLQUFLQSxLQUFMLENBQVdILE1BQWxCO0FBQ0ksYUFBSyxHQUFMO0FBQ0ksZUFBS0UsUUFBTCxDQUFjO0FBQ1ZKLGlCQUFLLEVBQUUsS0FBS0ssS0FBTCxDQUFXTCxLQUFYLEdBQW1CLEtBQUtLLEtBQUwsQ0FBV0osYUFBWCxDQUF5QkssSUFBekIsQ0FBOEIsRUFBOUI7QUFEaEIsV0FBZDtBQUdBOztBQUVKO0FBQ0k7QUFSUjtBQVVILEtBNUJvQzs7QUFBQSxpREE4QmRILE1BQUQsSUFBWTtBQUM5QixZQUFNRixhQUFhLEdBQUcsQ0FBQyxHQUFHLEtBQUtJLEtBQUwsQ0FBV0osYUFBZixDQUF0QjtBQUNBQSxtQkFBYSxDQUFDUSxJQUFkLENBQW1CTixNQUFuQjtBQUVBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFPLEtBQUtILEtBQUwsQ0FBV0wsS0FBOUI7O0FBRUEsVUFBRyxLQUFLSyxLQUFMLENBQVdMLEtBQVgsS0FBcUIsR0FBeEIsRUFBNEI7QUFDeEIsYUFBS0ksUUFBTCxDQUFjO0FBQ1ZKLGVBQUssRUFBRSxLQUFLSyxLQUFMLENBQVdMLEtBQVgsQ0FBaUJVLE1BQWpCLENBQXdCUCxNQUF4QixDQURHO0FBRVZGLHVCQUFhLEVBQUVBO0FBRkwsU0FBZDtBQUlILE9BTEQsTUFLTztBQUNILGFBQUtHLFFBQUwsQ0FBYztBQUNWSixlQUFLLEVBQUUsR0FERztBQUVWQyx1QkFBYSxFQUFFQTtBQUZMLFNBQWQ7QUFJSDtBQUNKLEtBL0NvQztBQUFBOztBQWlEckNVLFFBQU0sR0FBRztBQUNMLFVBQU1DLFdBQVcsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQXBCO0FBRUEsV0FDSTtBQUFLLGVBQVMsRUFBRUMsOERBQUssQ0FBQ0MsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsOENBQUQ7QUFBTyxZQUFNLEVBQUUsS0FBS1QsS0FBTCxDQUFXTCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFHUVksV0FBVyxDQUFDRyxHQUFaLENBQWdCLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUNoQyxhQUFPLE1BQUMsa0RBQUQ7QUFDSCxjQUFNLEVBQUVELE9BREw7QUFFSCxXQUFHLEVBQUVDLEtBRkY7QUFHSCxhQUFLLEVBQUUsTUFBTTtBQUFFLGVBQUtDLG1CQUFMLENBQXlCRixPQUF6QjtBQUFrQyxTQUg5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFLSCxLQU5ELENBSFIsRUFXSSxNQUFDLDRDQUFEO0FBQUssV0FBSyxFQUFFLEtBQUtHLEdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYSixFQVlJLE1BQUMsK0NBQUQ7QUFBUSxXQUFLLEVBQUUsS0FBS0MsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpKLENBREo7QUFnQkg7O0FBcEVvQzs7QUF1RTFCdkIseUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL0NhbGN1bGF0b3IubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgTnVtYmVyS2V5IGZyb20gJy4uL051bWJlcktleSc7XG5pbXBvcnQgVG90YWwgZnJvbSAnLi4vVG90YWwnO1xuaW1wb3J0IEFkZCBmcm9tICcuLi9BZGQnO1xuaW1wb3J0IEVxdWFscyBmcm9tICcuLi9FcXVhbHMnO1xuXG5jbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdG90YWw6ICcnLFxuICAgICAgICBydW5uaW5nTnVtYmVyOiBbXSxcbiAgICAgICAgbWV0aG9kOiAnJ1xuICAgIH1cblxuICAgIGFkZCA9IChudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgICAgICAgdG90YWw6IHRoaXMuc3RhdGUucnVubmluZ051bWJlci5qb2luKCcnKSxcbiAgICAgICAgICAgIHJ1bm5pbmdOdW1iZXI6IFtdLFxuICAgICAgICAgICAgbWV0aG9kOiAnKydcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH1cblxuICAgIGVxdWFscyA9ICgpID0+IHtcbiAgICAgICAgc3dpdGNoKHRoaXMuc3RhdGUubWV0aG9kKXtcbiAgICAgICAgICAgIGNhc2UgJysnOiBcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRoaXMuc3RhdGUudG90YWwgKyB0aGlzLnN0YXRlLnJ1bm5pbmdOdW1iZXIuam9pbignJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUnVubmluZ051bWJlciA9IChudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcnVubmluZ051bWJlciA9IFsuLi50aGlzLnN0YXRlLnJ1bm5pbmdOdW1iZXJdO1xuICAgICAgICBydW5uaW5nTnVtYmVyLnB1c2gobnVtYmVyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5zdGF0ZS50b3RhbCk7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS50b3RhbCAhPT0gJzAnKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgICAgICAgICB0b3RhbDogdGhpcy5zdGF0ZS50b3RhbC5jb25jYXQobnVtYmVyKSxcbiAgICAgICAgICAgICAgICBydW5uaW5nTnVtYmVyOiBydW5uaW5nTnVtYmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvdGFsOiAnMCcsXG4gICAgICAgICAgICAgICAgcnVubmluZ051bWJlcjogcnVubmluZ051bWJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG51bWJlckFycmF5ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kaXZDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxUb3RhbCBhbW91bnQ9e3RoaXMuc3RhdGUudG90YWx9Lz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlckFycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TnVtYmVyS2V5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcj17ZWxlbWVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17KCkgPT4geyB0aGlzLnVwZGF0ZVJ1bm5pbmdOdW1iZXIoZWxlbWVudCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPEFkZCBjbGljaz17dGhpcy5hZGR9Lz5cbiAgICAgICAgICAgICAgICA8RXF1YWxzIGNsaWNrPXt0aGlzLmVxdWFsc30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Calculator/index.js\n");

/***/ }),

/***/ "./src/components/Equals/index.js":
/*!****************************************!*\
  !*** ./src/components/Equals/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/louisalemar/Desktop/calculator-app/src/components/Equals/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Equals = props => {\n  const {\n    click\n  } = props;\n  return __jsx(\"div\", {\n    className: \"Equals\",\n    onClick: click,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"=\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Equals);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcXVhbHMvaW5kZXguanM/ZWU1MSJdLCJuYW1lcyI6WyJFcXVhbHMiLCJwcm9wcyIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFFBQU07QUFDRkM7QUFERSxNQUVGRCxLQUZKO0FBSUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQXdCLFdBQU8sRUFBRUMsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixDQURKO0FBS0gsQ0FWRDs7QUFZZUYscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FcXVhbHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFcXVhbHMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsaWNrXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVxdWFsc1wiIG9uQ2xpY2s9e2NsaWNrfT5cbiAgICAgICAgICAgIDxoMj49PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVhbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Equals/index.js\n");

/***/ }),

/***/ "./src/components/NumberKey/index.js":
/*!*******************************************!*\
  !*** ./src/components/NumberKey/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/louisalemar/Desktop/calculator-app/src/components/NumberKey/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst NumberKey = props => {\n  const {\n    number,\n    click\n  } = props;\n  return __jsx(\"div\", {\n    className: \"NumberKey\",\n    onClick: click,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, number));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NumberKey);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OdW1iZXJLZXkvaW5kZXguanM/MTZmNyJdLCJuYW1lcyI6WyJOdW1iZXJLZXkiLCJwcm9wcyIsIm51bWJlciIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQ3pCLFFBQU07QUFDRkMsVUFERTtBQUVGQztBQUZFLE1BR0ZGLEtBSEo7QUFLQSxTQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBTyxFQUFFRSxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxNQUFMLENBREosQ0FESjtBQUtILENBWEQ7O0FBYWVGLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTnVtYmVyS2V5L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTnVtYmVyS2V5ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBudW1iZXIsXG4gICAgICAgIGNsaWNrXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOdW1iZXJLZXlcIiBvbkNsaWNrPXtjbGlja30+XG4gICAgICAgICAgICA8aDM+e251bWJlcn08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlcktleTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NumberKey/index.js\n");

/***/ }),

/***/ "./src/components/Total/index.js":
/*!***************************************!*\
  !*** ./src/components/Total/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/louisalemar/Desktop/calculator-app/src/components/Total/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Total = props => {\n  return __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 12\n    }\n  }, \"Total: \", props.amount);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Total);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub3RhbC9pbmRleC5qcz9mNGJiIl0sIm5hbWVzIjpbIlRvdGFsIiwicHJvcHMiLCJhbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQVc7QUFDckIsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFZQSxLQUFLLENBQUNDLE1BQWxCLENBQVA7QUFDSCxDQUZEOztBQUllRixvRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RvdGFsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVG90YWwgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGgyPlRvdGFsOiB7cHJvcHMuYW1vdW50fTwvaDI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdGFsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Total/index.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Calculator */ \"./src/components/Calculator/index.js\");\nvar _jsxFileName = \"/Users/louisalemar/Desktop/calculator-app/src/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction App() {\n  return __jsx(\"div\", {\n    className: \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(components_Calculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQ1gsU0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0g7O0FBRWNBLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnY29tcG9uZW50cy9DYWxjdWxhdG9yJztcblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgICAgICA8Q2FsY3VsYXRvciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });