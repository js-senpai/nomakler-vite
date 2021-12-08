(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/apartment": [
		627,
		627
	],
	"./en/apartment.json": [
		627,
		627
	],
	"./en/button": [
		2040,
		40
	],
	"./en/button.json": [
		2040,
		40
	],
	"./en/common": [
		464,
		464
	],
	"./en/common.json": [
		464,
		464
	],
	"./en/home": [
		2482,
		482
	],
	"./en/home.json": [
		2482,
		482
	],
	"./ru/apartment": [
		7946,
		946
	],
	"./ru/apartment.json": [
		7946,
		946
	],
	"./ru/button": [
		4642,
		642
	],
	"./ru/button.json": [
		4642,
		642
	],
	"./ru/common": [
		7247,
		247
	],
	"./ru/common.json": [
		7247,
		247
	],
	"./ru/home": [
		2503,
		503
	],
	"./ru/home.json": [
		2503,
		503
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 7773:
/***/ ((module) => {

"use strict";

module.exports = {
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    defaultLocale: "ru",
    locales: [
        "en",
        "ru"
    ],
    pages: {
        '*': [
            'common',
            'button'
        ],
        '/': [
            'home',
            'apartment'
        ]
    }
};


/***/ }),

/***/ 9915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(7773);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: ./pages/_app.tsx

// @ts-ignore

// @ts-ignore

// @ts-ignore




 // import Font Awesome CSS



fontawesome_svg_core_namespaceObject.config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
fontawesome_svg_core_namespaceObject.library.add(free_solid_svg_icons_.fas, free_brands_svg_icons_namespaceObject.fab);
const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Title"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
const __Page_Next_Translate__ = MyApp;
// @ts-ignore
/* harmony default export */ const _app = (appWithI18n_default()(__Page_Next_Translate__, {
    // @ts-ignore
    ...(i18n_default()),
    // @ts-ignore
    isLoader: true,
    // @ts-ignore
    skipInitialProps: true,
    // @ts-ignore
    loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default
        )
})); // @ts-ignore


/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9915));
module.exports = __webpack_exports__;

})();