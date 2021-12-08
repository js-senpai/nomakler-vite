exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 5725:
/***/ ((module) => {

// Exports
module.exports = {
	"copyright": "Copyright_copyright__2BspN",
	"copyright__img": "Copyright_copyright__img__3qp3P"
};


/***/ }),

/***/ 926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _Copyright_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var _Copyright_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Copyright_module_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);




const Image = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(27)]).then(__webpack_require__.bind(__webpack_require__, 8027))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8027)
            ]
        ,
        modules: [
            "../components/molecules/Footer/Copyright/index.tsx -> " + "next/image"
        ]
    }
});
const Copyright = ({ className ='' , ...props })=>{
    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "https://michaelstudioo.com/",
        target: "__blank",
        className: `${(_Copyright_module_sass__WEBPACK_IMPORTED_MODULE_3___default().copyright)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: t('common:COPYRIGHT')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Copyright_module_sass__WEBPACK_IMPORTED_MODULE_3___default().copyright__img),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                    width: 31,
                    height: 22,
                    src: "/images/molecules/Footer/Copyright/logo.png",
                    alt: "Michael studio",
                    quality: "60",
                    layout: "fixed"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Michaelstudioo"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copyright);


/***/ })

};
;