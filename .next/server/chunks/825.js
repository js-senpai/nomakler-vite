exports.id = 825;
exports.ids = [825];
exports.modules = {

/***/ 3628:
/***/ ((module) => {

// Exports
module.exports = {
	"apartmentItem": "ApartmentItem_apartmentItem__3P3hO",
	"apartmentItem__img": "ApartmentItem_apartmentItem__img__2KLbr",
	"apartmentItem__badge": "ApartmentItem_apartmentItem__badge__3LN03",
	"apartmentItem__badgeVerified": "ApartmentItem_apartmentItem__badgeVerified__1EIer",
	"apartmentItem__badgeReadyRent": "ApartmentItem_apartmentItem__badgeReadyRent__1qBEu",
	"apartmentItem__content": "ApartmentItem_apartmentItem__content__rIuwD",
	"apartmentItem__title": "ApartmentItem_apartmentItem__title__29seE",
	"apartmentItem__infoList": "ApartmentItem_apartmentItem__infoList__3NzVz",
	"apartmentItem__infoList__item": "ApartmentItem_apartmentItem__infoList__item__21EXA",
	"apartmentItem__address": "ApartmentItem_apartmentItem__address__1RmmB",
	"apartmentItem__footer": "ApartmentItem_apartmentItem__footer__3Xt2t",
	"apartmentItem__price": "ApartmentItem_apartmentItem__price__18Jyx",
	"apartmentItem__price__number": "ApartmentItem_apartmentItem__price__number__a-qmb",
	"apartmentItem__price__text": "ApartmentItem_apartmentItem__price__text__17On1"
};


/***/ }),

/***/ 825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3628);
/* harmony import */ var _ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5__);






const Image = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(27)]).then(__webpack_require__.bind(__webpack_require__, 8027))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8027)
            ]
        ,
        modules: [
            "../components/molecules/Catalog/ApartmentItem/index.tsx -> " + "next/image"
        ]
    }
});
// Import components
const BlockContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 726).then(__webpack_require__.bind(__webpack_require__, 4726))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4726)
            ]
        ,
        modules: [
            "../components/molecules/Catalog/ApartmentItem/index.tsx -> " + "../../../containers/BlockContainer"
        ]
    }
});
const LinkPrimary = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(770), __webpack_require__.e(543), __webpack_require__.e(492)]).then(__webpack_require__.bind(__webpack_require__, 6492))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(6492)
            ]
        ,
        modules: [
            "../components/molecules/Catalog/ApartmentItem/index.tsx -> " + "../../../atoms/Link/LinkPrimary"
        ]
    }
});
const Badge = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 261).then(__webpack_require__.bind(__webpack_require__, 7261))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(7261)
            ]
        ,
        modules: [
            "../components/molecules/Catalog/ApartmentItem/index.tsx -> " + "../../../atoms/Badge"
        ]
    }
});
const ApartmentItem = ({ img ='/images/molecules/Catalog/Apartment/item-1.jpg' , verified =true , ready =true , title ='' , sleepingPlaces =0 , shower =0 , dimensions =0 , address ='' , slug ='' , price =0 , ...props })=>{
    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BlockContainer, {
        ...props,
        className: `${(_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem)}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__img),
                children: [
                    img ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                        src: img,
                        alt: title,
                        quality: "50",
                        layout: "fill"
                    }) : null,
                    ready ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Badge, {
                        className: `${(_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__badge)} ${(_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__badgeReadyRent)}`,
                        children: t('apartment:READY_RENT')
                    }) : null,
                    verified ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Badge, {
                        className: `${(_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__badge)} ${(_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__badgeVerified)}`,
                        children: t('apartment:VERIFIED')
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__title),
                        children: title ? title : 'title'
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__infoList),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__infoList__item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBed
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: sleepingPlaces || 0
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__infoList__item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faShower
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: shower || 0
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__infoList__item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faRulerCombined
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: dimensions || 0
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__address),
                        children: address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: address
                        }) : null
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                        className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__footer),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__price),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__price__number),
                                        children: price || 0
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_ApartmentItem_module_sass__WEBPACK_IMPORTED_MODULE_5___default().apartmentItem__price__text),
                                        children: t('apartment:PRICE_CURRENCY')
                                    })
                                ]
                            }),
                            slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkPrimary, {
                                url: `/apartment/${slug}`,
                                children: t('button:MORE_INFO')
                            }) : null
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApartmentItem);


/***/ })

};
;