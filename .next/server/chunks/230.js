exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 6170:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "Banner_banner__3HaE0",
	"banner__title": "Banner_banner__title__3DvIB",
	"banner__description": "Banner_banner__description__2ckyT"
};


/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _Banner_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var _Banner_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_sass__WEBPACK_IMPORTED_MODULE_2__);



const Image = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(27)]).then(__webpack_require__.bind(__webpack_require__, 8027))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8027)
            ]
        ,
        modules: [
            "../components/organisms/Home/Banner/index.tsx -> " + "next/image"
        ]
    }
});
// Import components
const DefaultContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 134).then(__webpack_require__.bind(__webpack_require__, 3134))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3134)
            ]
        ,
        modules: [
            "../components/organisms/Home/Banner/index.tsx -> " + "../../../containers/DefaultContainer"
        ]
    }
});
const Banner = ({ img ='/images/organisms/Home/Banner/banner.jpg' , title ='' , description ='' , ...props })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_Banner_module_sass__WEBPACK_IMPORTED_MODULE_2___default().banner),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                src: img,
                alt: title,
                quality: "40",
                layout: "fill",
                objectFit: "cover",
                objectPosition: "center",
                priority: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DefaultContainer, {
                className: "relative",
                children: [
                    title.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_Banner_module_sass__WEBPACK_IMPORTED_MODULE_2___default().banner__title),
                        children: title
                    }) : null,
                    description.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Banner_module_sass__WEBPACK_IMPORTED_MODULE_2___default().banner__description),
                        children: description
                    }) : null
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ })

};
;