exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 6390:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonWithIcon": "ButtonWithIcon_buttonWithIcon__26mhK",
	"buttonWithIcon__text": "ButtonWithIcon_buttonWithIcon__text__tg54L",
	"buttonWithIcon__icon": "ButtonWithIcon_buttonWithIcon__icon__1d9Zc"
};


/***/ }),

/***/ 3614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Button_ButtonSign)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/atoms/Button/ButtonWithIcon/ButtonWithIcon.module.sass
var ButtonWithIcon_module = __webpack_require__(6390);
var ButtonWithIcon_module_default = /*#__PURE__*/__webpack_require__.n(ButtonWithIcon_module);
;// CONCATENATED MODULE: ./components/atoms/Button/ButtonWithIcon/index.tsx



const ButtonWithIcon = /*#__PURE__*/ (0,external_react_.forwardRef)(({ text ='' , className ='' , children , ...props }, ref)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        ref: ref,
        className: `${(ButtonWithIcon_module_default()).buttonWithIcon} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "buttonWithIcon__icon",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(ButtonWithIcon_module_default()).buttonWithIcon__text}`,
                children: text
            })
        ]
    }));
});
ButtonWithIcon.displayName = 'ButtonWithIcon';
/* harmony default export */ const Button_ButtonWithIcon = (ButtonWithIcon);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
;// CONCATENATED MODULE: ./components/molecules/Header/Button/ButtonSign/index.tsx





const ButtonSign = ({ ...props })=>{
    const { t  } = useTranslation_default()();
    return(/*#__PURE__*/ jsx_runtime_.jsx(Button_ButtonWithIcon, {
        ...props,
        text: t('button:SIGN'),
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: free_solid_svg_icons_.faUser
        })
    }));
};
/* harmony default export */ const Button_ButtonSign = (ButtonSign);


/***/ })

};
;