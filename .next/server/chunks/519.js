exports.id = 519;
exports.ids = [519];
exports.modules = {

/***/ 202:
/***/ ((module) => {

// Exports
module.exports = {
	"headerMenu": "Menu_headerMenu__15HrO",
	"headerMenu__item": "Menu_headerMenu__item__35IAf"
};


/***/ }),

/***/ 6519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _Menu_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);
/* harmony import */ var _Menu_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_sass__WEBPACK_IMPORTED_MODULE_2__);



const Link = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(543)]).then(__webpack_require__.bind(__webpack_require__, 543))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(543)
            ]
        ,
        modules: [
            "../components/molecules/Header/Menu/index.tsx -> " + "next/link"
        ]
    }
});
const Menu = ({ menu =[] , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: `${(_Menu_module_sass__WEBPACK_IMPORTED_MODULE_2___default().headerMenu)}`,
        children: menu.length ? menu.map(({ id , url , text  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `${(_Menu_module_sass__WEBPACK_IMPORTED_MODULE_2___default().headerMenu__item)}`,
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