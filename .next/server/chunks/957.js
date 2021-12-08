exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 2608:
/***/ ((module) => {

// Exports
module.exports = {
	"socials": "Socials_socials__3zwuA",
	"socials__item": "Socials_socials__item__2ZzVL"
};


/***/ }),

/***/ 1957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Socials_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2608);
/* harmony import */ var _Socials_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Socials_module_sass__WEBPACK_IMPORTED_MODULE_2__);



const Socials = ({ socials =[] , className ='' , ...props })=>{
    const GetIcon = ({ icon =''  })=>{
        const faIcon = icon.split(' ') || [
            'fab',
            'instagram'
        ];
        // @ts-ignore
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: faIcon
        }));
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        ...props,
        className: `${(_Socials_module_sass__WEBPACK_IMPORTED_MODULE_2___default().socials)}`,
        children: socials.map(({ id , icon , url  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `${(_Socials_module_sass__WEBPACK_IMPORTED_MODULE_2___default().socials__item)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: url,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GetIcon, {
                        icon: icon
                    })
                })
            }, id)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Socials);


/***/ })

};
;