exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 2850:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__3WFAa",
	"footer__container": "Footer_footer__container__2-WW-",
	"footer__item": "Footer_footer__item__-AtoM",
	"footer__logo": "Footer_footer__logo__3S9l8",
	"footer__copyright": "Footer_footer__copyright__DV34I",
	"footer__socials": "Footer_footer__socials__2LgUJ",
	"footer__itemLast": "Footer_footer__itemLast__3JAQx"
};


/***/ }),

/***/ 1769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _Footer_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2850);
/* harmony import */ var _Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2__);

// Import components


// Import components
const DefaultContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 134).then(__webpack_require__.bind(__webpack_require__, 3134))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3134)
            ]
        ,
        modules: [
            "../components/organisms/Footer/index.tsx -> " + "../../containers/DefaultContainer"
        ]
    }
});
const Logo = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(543), __webpack_require__.e(548)]).then(__webpack_require__.bind(__webpack_require__, 8548))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8548)
            ]
        ,
        modules: [
            "../components/organisms/Footer/index.tsx -> " + "../../atoms/Logo"
        ]
    }
});
const Socials = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 957).then(__webpack_require__.bind(__webpack_require__, 1957))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1957)
            ]
        ,
        modules: [
            "../components/organisms/Footer/index.tsx -> " + "../../molecules/Footer/Socials"
        ]
    }
});
const Menu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(__webpack_require__, 6363))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(6363)
            ]
        ,
        modules: [
            "../components/organisms/Footer/index.tsx -> " + "../../molecules/Footer/Menu"
        ]
    }
});
const Copyright = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 926).then(__webpack_require__.bind(__webpack_require__, 926))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(926)
            ]
        ,
        modules: [
            "../components/organisms/Footer/index.tsx -> " + "../../molecules/Footer/Copyright"
        ]
    }
});
const Footer = ({ footer: { logo ='/images/atoms/Logo/LogoDark.svg' , socials =[] , menu =[] , infoMenu =[] ,  } , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        ...props,
        className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DefaultContainer, {
            className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__container)}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__item)}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__logo)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                                src: logo
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__socials)}`,
                            children: socials.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Socials, {
                                socials: socials
                            }) : null
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__item)}`,
                    children: menu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                        menu: menu
                    }) : null
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__item)} ${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__itemLast)}`,
                    children: [
                        infoMenu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                            menu: infoMenu
                        }) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_Footer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().footer__copyright)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Copyright, {
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;