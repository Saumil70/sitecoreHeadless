/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/Bootstrap.tsx":
/*!***************************!*\
  !*** ./src/Bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable  @typescript-eslint/no-unused-vars */ /**\r\n * The Bootstrap component is the entry point for performing any initialization logic\r\n * that needs to happen early in the application's lifecycle.\r\n */ const Bootstrap = (_props)=>{\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bootstrap);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQm9vdHN0cmFwLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQUEscURBQXFELEdBR3JEOzs7Q0FHQyxHQUNELE1BQU1BLFlBQVksQ0FBQ0M7SUFDakIsT0FBTztBQUNUO0FBRUEsaUVBQWVELFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlY29yZS1qc3MtYXBwLy4vc3JjL0Jvb3RzdHJhcC50c3g/ZTRkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCB7IFNpdGVjb3JlUGFnZVByb3BzIH0gZnJvbSAnbGliL3BhZ2UtcHJvcHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCb290c3RyYXAgY29tcG9uZW50IGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgcGVyZm9ybWluZyBhbnkgaW5pdGlhbGl6YXRpb24gbG9naWNcclxuICogdGhhdCBuZWVkcyB0byBoYXBwZW4gZWFybHkgaW4gdGhlIGFwcGxpY2F0aW9uJ3MgbGlmZWN5Y2xlLlxyXG4gKi9cclxuY29uc3QgQm9vdHN0cmFwID0gKF9wcm9wczogU2l0ZWNvcmVQYWdlUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vdHN0cmFwO1xyXG4iXSwibmFtZXMiOlsiQm9vdHN0cmFwIiwiX3Byb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Bootstrap.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-localization */ \"next-localization\");\n/* harmony import */ var next_localization__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_localization__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_Bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Bootstrap */ \"./src/Bootstrap.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/app.css */ \"./src/assets/app.css\");\n/* harmony import */ var assets_app_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_app_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n// Using bootstrap and nprogress are completely optional.\n//  bootstrap is used here to provide a clean layout for samples, without needing extra CSS in the sample app\n//  nprogress provides a loading indicator on page/route changes\n// Remove these in package.json as well if removed here.\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({\n    showSpinner: false,\n    trickleSpeed: 100\n});\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().start());\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());\nfunction App({ Component, pageProps }) {\n    const { dictionary, ...rest } = pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_Bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"F:\\\\Sourceved\\\\Sitecore Projects\\\\Headless\\\\nextjs\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_localization__WEBPACK_IMPORTED_MODULE_2__.I18nProvider, {\n                lngDict: dictionary,\n                locale: pageProps.locale,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...rest\n                }, void 0, false, {\n                    fileName: \"F:\\\\Sourceved\\\\Sitecore Projects\\\\Headless\\\\nextjs\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Sourceved\\\\Sitecore Projects\\\\Headless\\\\nextjs\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDZ0I7QUFDZjtBQUVJO0FBRXRDLHlEQUF5RDtBQUN6RCw2R0FBNkc7QUFDN0csZ0VBQWdFO0FBQ2hFLHdEQUF3RDtBQUNkO0FBQ1Q7QUFDVDtBQUV4QkUsMERBQW1CLENBQUM7SUFBRUcsYUFBYTtJQUFPQyxjQUFjO0FBQUk7QUFFNUROLHlEQUFhLENBQUNRLEVBQUUsQ0FBQyxvQkFBb0IsSUFBTU4sc0RBQWU7QUFDMURGLHlEQUFhLENBQUNRLEVBQUUsQ0FBQyx1QkFBdUIsSUFBTU4scURBQWM7QUFDNURGLHlEQUFhLENBQUNRLEVBQUUsQ0FBQyxvQkFBb0IsSUFBTU4scURBQWM7QUFFekQsU0FBU1MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBK0I7SUFDaEUsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0MsTUFBTSxHQUFHRjtJQUVoQyxxQkFDRTs7MEJBQ0UsOERBQUNWLHFEQUFTQTtnQkFBRSxHQUFHVSxTQUFTOzs7Ozs7MEJBTXhCLDhEQUFDWiwyREFBWUE7Z0JBQUNlLFNBQVNGO2dCQUFZRyxRQUFRSixVQUFVSSxNQUFNOzBCQUN6RCw0RUFBQ0w7b0JBQVcsR0FBR0csSUFBSTs7Ozs7Ozs7Ozs7OztBQUkzQjtBQUVBLGlFQUFlSixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZWNvcmUtanNzLWFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJMThuUHJvdmlkZXIgfSBmcm9tICduZXh0LWxvY2FsaXphdGlvbic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHsgU2l0ZWNvcmVQYWdlUHJvcHMgfSBmcm9tICdsaWIvcGFnZS1wcm9wcyc7XHJcbmltcG9ydCBCb290c3RyYXAgZnJvbSAnc3JjL0Jvb3RzdHJhcCc7XHJcblxyXG4vLyBVc2luZyBib290c3RyYXAgYW5kIG5wcm9ncmVzcyBhcmUgY29tcGxldGVseSBvcHRpb25hbC5cclxuLy8gIGJvb3RzdHJhcCBpcyB1c2VkIGhlcmUgdG8gcHJvdmlkZSBhIGNsZWFuIGxheW91dCBmb3Igc2FtcGxlcywgd2l0aG91dCBuZWVkaW5nIGV4dHJhIENTUyBpbiB0aGUgc2FtcGxlIGFwcFxyXG4vLyAgbnByb2dyZXNzIHByb3ZpZGVzIGEgbG9hZGluZyBpbmRpY2F0b3Igb24gcGFnZS9yb3V0ZSBjaGFuZ2VzXHJcbi8vIFJlbW92ZSB0aGVzZSBpbiBwYWNrYWdlLmpzb24gYXMgd2VsbCBpZiByZW1vdmVkIGhlcmUuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xyXG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0ICdhc3NldHMvYXBwLmNzcyc7XHJcblxyXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IGZhbHNlLCB0cmlja2xlU3BlZWQ6IDEwMCB9KTtcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHM8U2l0ZWNvcmVQYWdlUHJvcHM+KTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHsgZGljdGlvbmFyeSwgLi4ucmVzdCB9ID0gcGFnZVByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJvb3RzdHJhcCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICB7LypcclxuICAgICAgICAvLyBVc2UgdGhlIG5leHQtbG9jYWxpemF0aW9uICh3LyByb3NldHRhKSBsaWJyYXJ5IHRvIHByb3ZpZGUgb3VyIHRyYW5zbGF0aW9uIGRpY3Rpb25hcnkgdG8gdGhlIGFwcC5cclxuICAgICAgICAvLyBOb3RlIE5leHQuanMgZG9lcyBub3QgKGN1cnJlbnRseSkgcHJvdmlkZSBhbnl0aGluZyBmb3IgdHJhbnNsYXRpb24sIG9ubHkgaTE4biByb3V0aW5nLlxyXG4gICAgICAgIC8vIElmIHlvdXIgYXBwIGlzIG5vdCBtdWx0aWxpbmd1YWwsIG5leHQtbG9jYWxpemF0aW9uIGFuZCByZWZlcmVuY2VzIHRvIGl0IGNhbiBiZSByZW1vdmVkLlxyXG4gICAgICAqL31cclxuICAgICAgPEkxOG5Qcm92aWRlciBsbmdEaWN0PXtkaWN0aW9uYXJ5fSBsb2NhbGU9e3BhZ2VQcm9wcy5sb2NhbGV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnJlc3R9IC8+XHJcbiAgICAgIDwvSTE4blByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUm91dGVyIiwiSTE4blByb3ZpZGVyIiwiTlByb2dyZXNzIiwiQm9vdHN0cmFwIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJ0cmlja2xlU3BlZWQiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpY3Rpb25hcnkiLCJyZXN0IiwibG5nRGljdCIsImxvY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/assets/app.css":
/*!****************************!*\
  !*** ./src/assets/app.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-localization":
/*!************************************!*\
  !*** external "next-localization" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-localization");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap","vendor-chunks/nprogress"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();