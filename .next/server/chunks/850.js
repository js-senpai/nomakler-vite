"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);


const Banner = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 230).then(__webpack_require__.bind(__webpack_require__, 230))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(230)
            ]
        ,
        modules: [
            "../components/templates/Home/index.tsx -> " + "../../organisms/Home/Banner"
        ]
    }
});
const Advantages = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 363).then(__webpack_require__.bind(__webpack_require__, 4363))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4363)
            ]
        ,
        modules: [
            "../components/templates/Home/index.tsx -> " + "../../organisms/Home/Advantages"
        ]
    }
});
const ActualApartments = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 622).then(__webpack_require__.bind(__webpack_require__, 8622))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8622)
            ]
        ,
        modules: [
            "../components/templates/Home/index.tsx -> " + "../../organisms/Home/ActualApartments"
        ]
    }
});
const Home = ({ homeBanner , advantages =[] , apartments =[] , ...props })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Banner, {
                ...props,
                img: homeBanner.img,
                title: homeBanner.title,
                description: homeBanner.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Advantages, {
                ...props,
                advantages: advantages
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActualApartments, {
                apartments: apartments
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

};
;