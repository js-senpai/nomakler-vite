exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 6230:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__1GWuF",
	"header__container": "Header_header__container__39hdf",
	"header__wrapper": "Header_header__wrapper__1GmvV",
	"active": "Header_active__2SG5w",
	"header__btnClose": "Header_header__btnClose__GxBHo",
	"header__btnAuth": "Header_header__btnAuth__1A058",
	"header__logo": "Header_header__logo__1kS2U"
};


/***/ }),

/***/ 6325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6230);
/* harmony import */ var _Header_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_sass__WEBPACK_IMPORTED_MODULE_3__);




// Import components
const DefaultContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 134).then(__webpack_require__.bind(__webpack_require__, 3134))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3134)
            ]
        ,
        modules: [
            "../components/organisms/Header/index.tsx -> " + "../../containers/DefaultContainer"
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
            "../components/organisms/Header/index.tsx -> " + "../../atoms/Logo"
        ]
    }
});
const ButtonBurger = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 143).then(__webpack_require__.bind(__webpack_require__, 7143))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(7143)
            ]
        ,
        modules: [
            "../components/organisms/Header/index.tsx -> " + "../../molecules/Header/Button/ButtonBurger"
        ]
    }
});
const Menu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 519).then(__webpack_require__.bind(__webpack_require__, 6519))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(6519)
            ]
        ,
        modules: [
            "../components/organisms/Header/index.tsx -> " + "../../molecules/Header/Menu"
        ]
    }
});
const LanguageList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 906).then(__webpack_require__.bind(__webpack_require__, 5906))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(5906)
            ]
        ,
        modules: [
            "../components/organisms/Header/index.tsx -> " + "../../molecules/Header/LanguageList"
        ]
    }
});
const ButtonSign = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 614).then(__webpack_require__.bind(__webpack_require__, 3614))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3614)
            ]
        ,
        modules: [
            "../components/organisms/Header/index.tsx -> " + "../../molecules/Header/Button/ButtonSign"
        ]
    }
});
const Header = ({ header: { menu =[] , src ='/images/atoms/Logo/LogoLight.svg'  } , ...props })=>{
    const { 0: showMenu , 1: toggleMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DefaultContainer, {
            className: (_Header_module_sass__WEBPACK_IMPORTED_MODULE_3___default().header__container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonBurger, {
                    active: showMenu,
                    onClick: ()=>toggleMenu(!showMenu)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_Header_module_sass__WEBPACK_IMPORTED_MODULE_3___default().header__logo)}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                        src: src,
                        priority: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_Header_module_sass__WEBPACK_IMPORTED_MODULE_3___default().header__wrapper)} ${showMenu ? (_Header_module_sass__WEBPACK_IMPORTED_MODULE_3___default().active) : ''}`,
                    children: menu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                        menu: menu
                    }) : null
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LanguageList, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonSign, {
                    className: `${(_Header_module_sass__WEBPACK_IMPORTED_MODULE_3___default().header__btnAuth)}`
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;