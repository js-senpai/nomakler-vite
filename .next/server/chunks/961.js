exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 5205:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonWithList": "ButtonWithList_buttonWithList__3ThLh",
	"buttonWithList__icon": "ButtonWithList_buttonWithList__icon__1cWTx",
	"active": "ButtonWithList_active__1DwRr",
	"buttonWithList__text": "ButtonWithList_buttonWithList__text__3iFgI",
	"buttonWithList__container": "ButtonWithList_buttonWithList__container__1JVpw",
	"show": "ButtonWithList_show__3JFmY"
};


/***/ }),

/***/ 4961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5205);
/* harmony import */ var _ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4__);





const ButtonWithList = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ text ='' , className ='' , children , ...props }, ref)=>{
    const { 0: showContainer , 1: toggleContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        ref: ref,
        className: `${(_ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().buttonWithList)} ${showContainer ? (_ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().active) : ''} ${className}`,
        onClick: ()=>toggleContainer(!showContainer)
        ,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().buttonWithList__text)}`,
                children: text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                className: (_ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().buttonWithList__icon),
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSortDown
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().buttonWithList__container)} ${showContainer ? (_ButtonWithList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().show) : ''}`,
                children: children
            })
        ]
    }));
});
ButtonWithList.displayName = 'ButtonWithList';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonWithList);


/***/ })

};
;