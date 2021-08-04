/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/contact-handle";
exports.ids = ["pages/api/contact-handle"];
exports.modules = {

/***/ "./pages/api/contact-handle.js":
/*!*************************************!*\
  !*** ./pages/api/contact-handle.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"./node_modules/webpack/lib/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  __webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n  let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n  const transporter = nodemailer.createTransport({\n    port: 587,\n    host: 'smtp.gmail.com',\n    auth: {\n      user: 'bscenclosurescontact@gmail.com',\n      pass: process.env.password\n    },\n    secure: false,\n    tls: {\n      rejectUnauthorized: false\n    }\n  });\n  const mailData = {\n    from: 'sender@bscenclosures.com',\n    to: 'ahmedalf75@gmail.com',\n    subject: `Message From ${req.body.name}`,\n    text: req.body.message + \" | Sent from: \" + req.body.email,\n    html: `<p>Message: ${req.body.message}</p> \n        <p>Phone Number: ${req.body.phone} </p>\n        <p>Email: ${req.body.email} </p>\n        <p>Sent from: ${req.body.email}</p>\n        <p>--------------------------------------</p>`\n  };\n  transporter.sendMail(mailData, function (err, info) {\n    if (err) console.log(`there is an error sending the form` + err);else console.log(info);\n  });\n  console.log(req.body);\n  res.status(200);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0ai8uL3BhZ2VzL2FwaS9jb250YWN0LWhhbmRsZS5qcz9mMWRiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInJlcXVpcmUiLCJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInByb2Nlc3MiLCJlbnYiLCJwYXNzd29yZCIsInNlY3VyZSIsInRscyIsInJlamVjdFVuYXV0aG9yaXplZCIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImJvZHkiLCJuYW1lIiwidGV4dCIsIm1lc3NhZ2UiLCJlbWFpbCIsImh0bWwiLCJwaG9uZSIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBR0EsNkJBQWUsb0NBQVVBLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNqQ0Msb0RBQUE7O0FBRUUsTUFBSUMsVUFBVSxHQUFHRCxtQkFBTyxDQUFDLDhCQUFELENBQXhCOztBQUNBLFFBQU1FLFdBQVcsR0FBR0QsVUFBVSxDQUFDRSxlQUFYLENBQTJCO0FBQzNDQyxRQUFJLEVBQUUsR0FEcUM7QUFFM0NDLFFBQUksRUFBRSxnQkFGcUM7QUFHM0NDLFFBQUksRUFBRTtBQUNGQyxVQUFJLEVBQUUsZ0NBREo7QUFFRkMsVUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFGaEIsS0FIcUM7QUFPM0NDLFVBQU0sRUFBRSxLQVBtQztBQVEzQ0MsT0FBRyxFQUFFO0FBQ0hDLHdCQUFrQixFQUFDO0FBRGhCO0FBUnNDLEdBQTNCLENBQXBCO0FBYUEsUUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSwwQkFETztBQUViQyxNQUFFLEVBQUUsc0JBRlM7QUFHYkMsV0FBTyxFQUFHLGdCQUFlcEIsR0FBRyxDQUFDcUIsSUFBSixDQUFTQyxJQUFLLEVBSDFCO0FBSWJDLFFBQUksRUFBRXZCLEdBQUcsQ0FBQ3FCLElBQUosQ0FBU0csT0FBVCxHQUFtQixnQkFBbkIsR0FBc0N4QixHQUFHLENBQUNxQixJQUFKLENBQVNJLEtBSnhDO0FBS2JDLFFBQUksRUFBRyxlQUFjMUIsR0FBRyxDQUFDcUIsSUFBSixDQUFTRyxPQUFRO0FBQzlDLDJCQUEyQnhCLEdBQUcsQ0FBQ3FCLElBQUosQ0FBU00sS0FBTTtBQUMxQyxvQkFBb0IzQixHQUFHLENBQUNxQixJQUFKLENBQVNJLEtBQU07QUFDbkMsd0JBQXdCekIsR0FBRyxDQUFDcUIsSUFBSixDQUFTSSxLQUFNO0FBQ3ZDO0FBVHFCLEdBQWpCO0FBWUVyQixhQUFXLENBQUN3QixRQUFaLENBQXFCWCxRQUFyQixFQUErQixVQUFVWSxHQUFWLEVBQWVDLElBQWYsRUFBcUI7QUFDbEQsUUFBR0QsR0FBSCxFQUNFRSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQ0FBRCxHQUF1Q0gsR0FBbkQsRUFERixLQUdFRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILEdBTEQ7QUFPQUMsU0FBTyxDQUFDQyxHQUFSLENBQVloQyxHQUFHLENBQUNxQixJQUFoQjtBQUNBcEIsS0FBRyxDQUFDZ0MsTUFBSixDQUFXLEdBQVg7QUFDTCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb250YWN0LWhhbmRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50UGx1Z2luIH0gZnJvbSAnd2VicGFjaydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcbiAgICBcbiAgICBsZXQgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKVxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgICBwb3J0OiA1ODcsXG4gICAgICAgIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgIHVzZXI6ICdic2NlbmNsb3N1cmVzY29udGFjdEBnbWFpbC5jb20nLFxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYucGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICAgIHRsczoge1xuICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDpmYWxzZVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG1haWxEYXRhID0ge1xuICAgICAgICBmcm9tOiAnc2VuZGVyQGJzY2VuY2xvc3VyZXMuY29tJyxcbiAgICAgICAgdG86ICdhaG1lZGFsZjc1QGdtYWlsLmNvbScsXG4gICAgICAgIHN1YmplY3Q6IGBNZXNzYWdlIEZyb20gJHtyZXEuYm9keS5uYW1lfWAsXG4gICAgICAgIHRleHQ6IHJlcS5ib2R5Lm1lc3NhZ2UgKyBcIiB8IFNlbnQgZnJvbTogXCIgKyByZXEuYm9keS5lbWFpbCxcbiAgICAgICAgaHRtbDogYDxwPk1lc3NhZ2U6ICR7cmVxLmJvZHkubWVzc2FnZX08L3A+IFxuICAgICAgICA8cD5QaG9uZSBOdW1iZXI6ICR7cmVxLmJvZHkucGhvbmV9IDwvcD5cbiAgICAgICAgPHA+RW1haWw6ICR7cmVxLmJvZHkuZW1haWx9IDwvcD5cbiAgICAgICAgPHA+U2VudCBmcm9tOiAke3JlcS5ib2R5LmVtYWlsfTwvcD5cbiAgICAgICAgPHA+LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS08L3A+YFxuICAgICAgfVxuXG4gICAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsRGF0YSwgZnVuY3Rpb24gKGVyciwgaW5mbykge1xuICAgICAgICBpZihlcnIpXG4gICAgICAgICAgY29uc29sZS5sb2coYHRoZXJlIGlzIGFuIGVycm9yIHNlbmRpbmcgdGhlIGZvcm1gICsgZXJyKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgICAgcmVzLnN0YXR1cygyMDApXG59ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact-handle.js\n");

/***/ }),

/***/ "./node_modules/webpack/hot sync recursive ^\\.\\/lazy\\-compilation\\-.*\\.js$":
/*!************************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync ^\.\/lazy\-compilation\-.*\.js$ ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./lazy-compilation-node.js": "./node_modules/webpack/hot/lazy-compilation-node.js",
	"./lazy-compilation-web.js": "./node_modules/webpack/hot/lazy-compilation-web.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync recursive ^\\.\\/lazy\\-compilation\\-.*\\.js$";

/***/ }),

/***/ "./node_modules/webpack/lib/serialization sync recursive":
/*!******************************************************!*\
  !*** ./node_modules/webpack/lib/serialization/ sync ***!
  \******************************************************/
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/webpack/lib/serialization sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "@webassemblyjs/ast":
/*!*************************************!*\
  !*** external "@webassemblyjs/ast" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@webassemblyjs/ast");;

/***/ }),

/***/ "@webassemblyjs/wasm-edit":
/*!*******************************************!*\
  !*** external "@webassemblyjs/wasm-edit" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@webassemblyjs/wasm-edit");;

/***/ }),

/***/ "@webassemblyjs/wasm-parser":
/*!*********************************************!*\
  !*** external "@webassemblyjs/wasm-parser" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@webassemblyjs/wasm-parser");;

/***/ }),

/***/ "acorn":
/*!************************!*\
  !*** external "acorn" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("acorn");;

/***/ }),

/***/ "acorn-import-assertions":
/*!******************************************!*\
  !*** external "acorn-import-assertions" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("acorn-import-assertions");;

/***/ }),

/***/ "browserslist":
/*!*******************************!*\
  !*** external "browserslist" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("browserslist");;

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ "chrome-trace-event":
/*!*************************************!*\
  !*** external "chrome-trace-event" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("chrome-trace-event");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "enhanced-resolve":
/*!***********************************!*\
  !*** external "enhanced-resolve" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("enhanced-resolve");;

/***/ }),

/***/ "enhanced-resolve/lib/CachedInputFileSystem":
/*!*************************************************************!*\
  !*** external "enhanced-resolve/lib/CachedInputFileSystem" ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("enhanced-resolve/lib/CachedInputFileSystem");;

/***/ }),

/***/ "es-module-lexer":
/*!**********************************!*\
  !*** external "es-module-lexer" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("es-module-lexer");;

/***/ }),

/***/ "eslint-scope":
/*!*******************************!*\
  !*** external "eslint-scope" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("eslint-scope");;

/***/ }),

/***/ "eslint-scope/lib/referencer":
/*!**********************************************!*\
  !*** external "eslint-scope/lib/referencer" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("eslint-scope/lib/referencer");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "glob-to-regexp":
/*!*********************************!*\
  !*** external "glob-to-regexp" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("glob-to-regexp");;

/***/ }),

/***/ "graceful-fs":
/*!******************************!*\
  !*** external "graceful-fs" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graceful-fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ "inspector":
/*!****************************!*\
  !*** external "inspector" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("inspector");;

/***/ }),

/***/ "json-parse-better-errors":
/*!*******************************************!*\
  !*** external "json-parse-better-errors" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("json-parse-better-errors");;

/***/ }),

/***/ "loader-runner":
/*!********************************!*\
  !*** external "loader-runner" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("loader-runner");;

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("mime-types");;

/***/ }),

/***/ "neo-async":
/*!****************************!*\
  !*** external "neo-async" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("neo-async");;

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nodemailer");;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ "schema-utils":
/*!*******************************!*\
  !*** external "schema-utils" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("schema-utils");;

/***/ }),

/***/ "schema-utils/dist/ValidationError":
/*!****************************************************!*\
  !*** external "schema-utils/dist/ValidationError" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("schema-utils/dist/ValidationError");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ "tapable":
/*!**************************!*\
  !*** external "tapable" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("tapable");;

/***/ }),

/***/ "terser-webpack-plugin":
/*!****************************************!*\
  !*** external "terser-webpack-plugin" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("terser-webpack-plugin");;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "vm":
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("vm");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("zlib");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_webpack_hot_lazy-compilation-node_js-node_modules_webpack_hot_lazy-compi-84fae2"], function() { return __webpack_exec__("./pages/api/contact-handle.js"); });
module.exports = __webpack_exports__;

})();