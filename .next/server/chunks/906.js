exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 8479:
/***/ ((module) => {

// Exports
module.exports = {
	"languageList": "LanguageList_languageList__2_bbP"
};


/***/ }),

/***/ 5906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3521);
/* harmony import */ var _LanguageList_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8479);
/* harmony import */ var _LanguageList_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LanguageList_module_sass__WEBPACK_IMPORTED_MODULE_3__);




const Link = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(543)]).then(__webpack_require__.bind(__webpack_require__, 543))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(543)
            ]
        ,
        modules: [
            "../components/molecules/Header/LanguageList/index.tsx -> " + "next/link"
        ]
    }
});
const ButtonWithList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 961).then(__webpack_require__.bind(__webpack_require__, 4961))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4961)
            ]
        ,
        modules: [
            "../components/molecules/Header/LanguageList/index.tsx -> " + "../Button/ButtonWithList"
        ]
    }
});
const LanguageList = ()=>{
    // Toggle language container
    const { locales =[] , locale ='ru'  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonWithList, {
        className: (_LanguageList_module_sass__WEBPACK_IMPORTED_MODULE_3___default().languageList),
        text: locale,
        children: locales.length ? locales.map((lang, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "langSwitcher__item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
                    href: "/",
                    locale: lang,
                    children: lang
                })
            }, index)
        ) : null
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageList);


/***/ })

};
;