exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 2650:
/***/ ((module) => {

// Exports
module.exports = {
	"advantages": "Advantages_advantages__2enEn",
	"advantages__container": "Advantages_advantages__container__TrMe_"
};


/***/ }),

/***/ 4363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _Advantages_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2650);
/* harmony import */ var _Advantages_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Advantages_module_sass__WEBPACK_IMPORTED_MODULE_2__);

// Import components


const DefaultContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 134).then(__webpack_require__.bind(__webpack_require__, 3134))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3134)
            ]
        ,
        modules: [
            "../components/organisms/Home/Advantages/index.tsx -> " + "../../../containers/DefaultContainer"
        ]
    }
});
const AdvantagesItem = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 98).then(__webpack_require__.bind(__webpack_require__, 7098))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(7098)
            ]
        ,
        modules: [
            "../components/organisms/Home/Advantages/index.tsx -> " + "../../../molecules/Home/AdvantagesItem"
        ]
    }
});
const Advantages = ({ advantages =[] , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_Advantages_module_sass__WEBPACK_IMPORTED_MODULE_2___default().advantages),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultContainer, {
            className: (_Advantages_module_sass__WEBPACK_IMPORTED_MODULE_2___default().advantages__container),
            children: advantages.length ? advantages.map(({ id , img , title , description  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdvantagesItem, {
                    img: img,
                    title: title,
                    description: description
                }, id)
            ) : null
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Advantages);


/***/ })

};
;