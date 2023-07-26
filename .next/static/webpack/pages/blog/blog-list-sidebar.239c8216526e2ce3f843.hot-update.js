webpackHotUpdate_N_E("pages/blog/blog-list-sidebar",{

/***/ "./src/components/header/elements/Navigator.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/Navigator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ \"./src/data/navigator.json\");\nvar _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ \"./src/data/navigator.json\", 1);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/bala/Projects/shop.theuniquecreations.com/src/components/header/elements/Navigator.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Navigator() {\n  _s();\n\n  var _this = this;\n\n  var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].SubMenu;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"mail\"),\n      current = _useState[0],\n      setCurrent = _useState[1];\n\n  var handleClick = function handleClick(e) {\n    console.log(\"click \", e);\n    setCurrent(e.key);\n  };\n\n  return __jsx(\"ul\", {\n    className: \"navigation\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"li\", {\n    className: \"navigation-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.href,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"navigation-item__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title))), __jsx(\"li\", {\n    className: \"navigation-item -toggleable\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"\" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.href,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"navigation-item__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title)), __jsx(\"ul\", {\n    className: \"navigation-item__submenu -wide\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"navigation-item__submenu-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Books\"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"\" + item.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 19\n      }\n    }, item.title)));\n  })), __jsx(\"div\", {\n    className: \"navigation-item__submenu-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"Detail shop\"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"\" + item.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 19\n      }\n    }, item.title)));\n  })), __jsx(\"div\", {\n    className: \"navigation-item__submenu-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"Pages shop\"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"\" + item.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 19\n      }\n    }, item.title)));\n  })))), __jsx(\"li\", {\n    className: \"navigation-item -toggleable\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"\" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.href,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"navigation-item__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.title)), __jsx(\"ul\", {\n    className: \"navigation-item__submenu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.subMenu.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"\" + item.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }\n    }, item.title)));\n  }))), __jsx(\"li\", {\n    className: \"navigation-item -toggleable\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"\" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.href,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"navigation-item__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title)), __jsx(\"ul\", {\n    className: \"navigation-item__submenu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 13\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"\" + item.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 17\n      }\n    }, item.title)));\n  }))), __jsx(\"li\", {\n    className: \"navigation-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"\" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"navigation-item__title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))));\n}\n\n_s(Navigator, \"ZWqTbgp2XvJ+vkPcRX/iShVbotc=\");\n\n_c = Navigator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Navigator));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navigator\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL05hdmlnYXRvci5qcz8wNDJkIl0sIm5hbWVzIjpbIk5hdmlnYXRvciIsIlN1Yk1lbnUiLCJNZW51IiwidXNlU3RhdGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJuYXZpZ2F0b3JEYXRhIiwiSE9NRSIsImhyZWYiLCJ0aXRsZSIsInByb2Nlc3MiLCJTSE9QIiwic3ViTWVudSIsImxheW91dCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRldGFpbCIsInBhZ2VzIiwiQkxPRyIsIlBBR0VTIiwiQUJPVVQiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxNQUNYQyxPQURXLEdBQ0NDLHlDQURELENBQ1hELE9BRFc7O0FBQUEsa0JBRVdFLHNEQUFRLENBQUMsTUFBRCxDQUZuQjtBQUFBLE1BRVpDLE9BRlk7QUFBQSxNQUVIQyxVQUZHOztBQUduQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLENBQXRCO0FBQ0FGLGNBQVUsQ0FBQ0UsQ0FBQyxDQUFDRyxHQUFILENBQVY7QUFDRCxHQUhEOztBQUlBLFNBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUU7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVDLGlEQUFhLENBQUNDLElBQWQsQ0FBbUJDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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b21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9OYXZpZ2F0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgbmF2aWdhdG9yRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9uYXZpZ2F0b3IuanNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0b3IoKSB7XG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e25hdmlnYXRvckRhdGEuSE9NRS5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5IT01FLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+IFxuICAgICAgPC9saT4gKi99XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e25hdmlnYXRvckRhdGEuSE9NRS5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5QQUdFUy5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5QQUdFUy5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT4gKi99XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLlNIT1AuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLlNIT1AudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUgLXdpZGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudS1ncm91cFwiPlxuICAgICAgICAgICAgPGg1PkJvb2tzPC9oNT5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5sYXlvdXQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxoNT5EZXRhaWwgc2hvcDwvaDU+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUuZGV0YWlsLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX19zdWJtZW51LWdyb3VwXCI+XG4gICAgICAgICAgICA8aDU+UGFnZXMgc2hvcDwvaDU+XG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUucGFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkJMT0cuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkJMT0cudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5CTE9HLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbSAtdG9nZ2xlYWJsZVwiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5QQUdFUy5ocmVmfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cbiAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5QQUdFUy5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQUJPVVQuaHJlZn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE5hdmlnYXRvcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/elements/Navigator.js\n");

/***/ })

})