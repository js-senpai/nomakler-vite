exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 8186:
/***/ ((module) => {

// Exports
module.exports = {
	"actualApartments": "ActualApartments_actualApartments__3IKdf",
	"actualApartments__container": "ActualApartments_actualApartments__container__2-U1P",
	"actualApartments__title": "ActualApartments_actualApartments__title__2DS-4",
	"actualApartments__description": "ActualApartments_actualApartments__description__1IY8f",
	"actualApartments__list": "ActualApartments_actualApartments__list__19CMz"
};


/***/ }),

/***/ 8622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3521);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8186);
/* harmony import */ var _ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3__);

// Import components



// Import components
const ApartmentItem = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 825).then(__webpack_require__.bind(__webpack_require__, 825))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(825)
            ]
        ,
        modules: [
            "../components/organisms/Home/ActualApartments/index.tsx -> " + "../../../molecules/Catalog/ApartmentItem"
        ]
    }
});
const DefaultContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 134).then(__webpack_require__.bind(__webpack_require__, 3134))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3134)
            ]
        ,
        modules: [
            "../components/organisms/Home/ActualApartments/index.tsx -> " + "../../../containers/DefaultContainer"
        ]
    }
});
const FullWidthContainer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 730).then(__webpack_require__.bind(__webpack_require__, 1730))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1730)
            ]
        ,
        modules: [
            "../components/organisms/Home/ActualApartments/index.tsx -> " + "../../../containers/FullWidthContainer"
        ]
    }
});
const ActualApartments = ({ apartments =[] , ...props })=>{
    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `${(_ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3___default().actualApartments)}`,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DefaultContainer, {
                className: `${(_ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3___default().actualApartments__container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3___default().actualApartments__title),
                        dangerouslySetInnerHTML: {
                            __html: t('home:APARTMENTS_TITLE')
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3___default().actualApartments__description),
                        children: t('home:APARTMENTS_DESCRIPTION')
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FullWidthContainer, {
                children: apartments.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_ActualApartments_module_sass__WEBPACK_IMPORTED_MODULE_3___default().actualApartments__list),
                    children: apartments.map(({ id , img ='/images/molecules/Catalog/Apartment/item-1.jpg' , verified =false , ready =false , title ='' , sleepingPlaces =0 , shower =0 , dimensions =0 , address ='' , slug ='' , price =0 ,  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ApartmentItem, {
                                img: img,
                                verified: verified,
                                ready: ready,
                                title: title,
                                sleepingPlaces: sleepingPlaces,
                                shower: shower,
                                dimensions: dimensions,
                                address: address,
                                slug: slug,
                                price: price
                            })
                        }, id)
                    )
                }) : null
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActualApartments);


/***/ })

};
;