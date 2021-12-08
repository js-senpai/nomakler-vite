exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 2920:
/***/ ((module) => {

// Exports
module.exports = {
	"linkPrimary": "LinkPrimary_linkPrimary__2FgPh"
};


/***/ }),

/***/ 6492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(543);
/* harmony import */ var _LinkPrimary_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2920);
/* harmony import */ var _LinkPrimary_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LinkPrimary_module_sass__WEBPACK_IMPORTED_MODULE_2__);



const LinkPrimary = ({ url ='/' , className ='' , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props,
        href: url,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: `${(_LinkPrimary_module_sass__WEBPACK_IMPORTED_MODULE_2___default().linkPrimary)} ${className}`,
            children: props.children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkPrimary);


/***/ })

};
;