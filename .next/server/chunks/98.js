exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 9808:
/***/ ((module) => {

// Exports
module.exports = {
	"advantagesItem": "AdvantagesItem_advantagesItem__13y7z",
	"advantagesItem__img": "AdvantagesItem_advantagesItem__img__FXbG4",
	"advantagesItem__title": "AdvantagesItem_advantagesItem__title__OA2Lr",
	"advantagesItem__description": "AdvantagesItem_advantagesItem__description__29b2g"
};


/***/ }),

/***/ 7098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _AdvantagesItem_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9808);
/* harmony import */ var _AdvantagesItem_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AdvantagesItem_module_sass__WEBPACK_IMPORTED_MODULE_2__);

// Import components


const Image = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(27)]).then(__webpack_require__.bind(__webpack_require__, 8027))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8027)
            ]
        ,
        modules: [
            "../components/molecules/Home/AdvantagesItem/index.tsx -> " + "next/image"
        ]
    }
});
const BlockContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 726).then(__webpack_require__.bind(__webpack_require__, 4726))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4726)
            ]
        ,
        modules: [
            "../components/molecules/Home/AdvantagesItem/index.tsx -> " + "../../../containers/BlockContainer"
        ]
    }
});
const AdvantagesItem = ({ img ='/images/organisms/Home/Advantages/search.svg' , title ='' , description ='' , ...props })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BlockContainer, {
        ...props,
        className: (_AdvantagesItem_module_sass__WEBPACK_IMPORTED_MODULE_2___default().advantagesItem),
        children: [
            img.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_AdvantagesItem_module_sass__WEBPACK_IMPORTED_MODULE_2___default().advantagesItem__img),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                    width: 69,
                    height: 68,
                    src: img,
                    alt: "icon",
                    quality: "60"
                })
            }) : null,
            title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_AdvantagesItem_module_sass__WEBPACK_IMPORTED_MODULE_2___default().advantagesItem__title),
                children: title
            }) : null,
            description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_AdvantagesItem_module_sass__WEBPACK_IMPORTED_MODULE_2___default().advantagesItem__description),
                children: description
            }) : null
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvantagesItem);


/***/ })

};
;