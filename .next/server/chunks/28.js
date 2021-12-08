exports.id = 28;
exports.ids = [28];
exports.modules = {

/***/ 7173:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "Menu_menu__3cCzp",
	"menu__item": "Menu_menu__item__tT6_Q"
};


/***/ }),

/***/ 6363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _Menu_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7173);
/* harmony import */ var _Menu_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_sass__WEBPACK_IMPORTED_MODULE_2__);



// Import components
const Link = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(543)]).then(__webpack_require__.bind(__webpack_require__, 543))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(543)
            ]
        ,
        modules: [
            "../components/molecules/Footer/Menu/index.tsx -> " + "next/link"
        ]
    }
});
const Menu = ({ menu =[] , className ='' , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        ...props,
        className: `${(_Menu_module_sass__WEBPACK_IMPORTED_MODULE_2___default().menu)} ${className}`,
        children: menu.length ? menu.map(({ id , url , text  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `${(_Menu_module_sass__WEBPACK_IMPORTED_MODULE_2___default().menu__item)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                    href: url,
                    children: text
                })
            }, id)
        ) : null
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ })

};
;