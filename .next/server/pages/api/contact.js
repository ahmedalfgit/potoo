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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    name,\n    phone,\n    email,\n    message\n  } = req.body;\n  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    host: 'smtp.gmail.com',\n    port: 465,\n    secure: true,\n    auth: {\n      user: process.env.user,\n      pass: process.env.pass\n    }\n  });\n\n  try {\n    const emailRes = await transporter.sendMail({\n      from: email,\n      to: 'ahmedalf75@gmail.com',\n      subject: `Message From ${req.body.name}`,\n      text: req.body.message + \" | Sent from: \" + req.body.email,\n      html: `<p>Message: ${req.body.message}</p> \n        <p>Phone Number: ${req.body.phone} </p>\n        <p>Email: ${req.body.email} </p>\n        <p>Sent from: ${req.body.email}</p>\n        <p>--------------------------------------</p>`\n    });\n    console.log('email sent', emailRes.messageId);\n  } catch (err) {\n    console.log(err);\n  }\n\n  res.status(200).json(req.body);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0ai8uL3BhZ2VzL2FwaS9jb250YWN0LmpzP2EwYjEiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJtZXNzYWdlIiwiYm9keSIsInRyYW5zcG9ydGVyIiwibm9kZW1haWxlciIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwicGFzcyIsImVtYWlsUmVzIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZUlkIiwiZXJyIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUFDQyxRQUFEO0FBQU9DLFNBQVA7QUFBY0MsU0FBZDtBQUFxQkM7QUFBckIsTUFBZ0NMLEdBQUcsQ0FBQ00sSUFBMUM7QUFFQSxRQUFNQyxXQUFXLEdBQUdDLGlFQUFBLENBQTJCO0FBQzdDQyxRQUFJLEVBQUUsZ0JBRHVDO0FBRTdDQyxRQUFJLEVBQUUsR0FGdUM7QUFHN0NDLFVBQU0sRUFBRSxJQUhxQztBQUk3Q0MsUUFBSSxFQUFFO0FBQ0pDLFVBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBRGQ7QUFFSkcsVUFBSSxFQUFFRixPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFGZDtBQUp1QyxHQUEzQixDQUFwQjs7QUFXQSxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1WLFdBQVcsQ0FBQ1csUUFBWixDQUFxQjtBQUN4Q0MsVUFBSSxFQUFFZixLQURrQztBQUV4Q2dCLFFBQUUsRUFBRSxzQkFGb0M7QUFHeENDLGFBQU8sRUFBRyxnQkFBZXJCLEdBQUcsQ0FBQ00sSUFBSixDQUFTSixJQUFLLEVBSEM7QUFJeENvQixVQUFJLEVBQUV0QixHQUFHLENBQUNNLElBQUosQ0FBU0QsT0FBVCxHQUFtQixnQkFBbkIsR0FBc0NMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRixLQUpiO0FBS3hDbUIsVUFBSSxFQUFHLGVBQWN2QixHQUFHLENBQUNNLElBQUosQ0FBU0QsT0FBUTtBQUM5QywyQkFBMkJMLEdBQUcsQ0FBQ00sSUFBSixDQUFTSCxLQUFNO0FBQzFDLG9CQUFvQkgsR0FBRyxDQUFDTSxJQUFKLENBQVNGLEtBQU07QUFDbkMsd0JBQXdCSixHQUFHLENBQUNNLElBQUosQ0FBU0YsS0FBTTtBQUN2QztBQVRnRCxLQUFyQixDQUF2QjtBQVdBb0IsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlIsUUFBUSxDQUFDUyxTQUFuQztBQUNELEdBYkQsQ0FhRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDRDs7QUFFRDFCLEtBQUcsQ0FBQzJCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjdCLEdBQUcsQ0FBQ00sSUFBekI7QUFFRCxDQWpDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHtuYW1lLCBwaG9uZSwgZW1haWwsIG1lc3NhZ2V9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgICBwb3J0OiA0NjUsXG4gICAgc2VjdXJlOiB0cnVlLFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LnVzZXIsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5wYXNzXG4gICAgfVxuXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZW1haWxSZXMgPSBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgIGZyb206IGVtYWlsLFxuICAgICAgICB0bzogJ2FobWVkYWxmNzVAZ21haWwuY29tJyxcbiAgICAgICAgc3ViamVjdDogYE1lc3NhZ2UgRnJvbSAke3JlcS5ib2R5Lm5hbWV9YCxcbiAgICAgICAgdGV4dDogcmVxLmJvZHkubWVzc2FnZSArIFwiIHwgU2VudCBmcm9tOiBcIiArIHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICBodG1sOiBgPHA+TWVzc2FnZTogJHtyZXEuYm9keS5tZXNzYWdlfTwvcD4gXG4gICAgICAgIDxwPlBob25lIE51bWJlcjogJHtyZXEuYm9keS5waG9uZX0gPC9wPlxuICAgICAgICA8cD5FbWFpbDogJHtyZXEuYm9keS5lbWFpbH0gPC9wPlxuICAgICAgICA8cD5TZW50IGZyb206ICR7cmVxLmJvZHkuZW1haWx9PC9wPlxuICAgICAgICA8cD4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTwvcD5gXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnZW1haWwgc2VudCcsIGVtYWlsUmVzLm1lc3NhZ2VJZClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVxLmJvZHkpO1xuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nodemailer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();