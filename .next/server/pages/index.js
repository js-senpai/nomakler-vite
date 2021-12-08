(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 7232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(7773);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: external "next-translate/loadNamespaces"
const loadNamespaces_namespaceObject = require("next-translate/loadNamespaces");
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(3521);
;// CONCATENATED MODULE: ./layouts/DefaultLayout/index.tsx


const Header = (0,dynamic["default"])(__webpack_require__.e(/* import() */ 325).then(__webpack_require__.bind(__webpack_require__, 6325)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(6325)
            ]
        ,
        modules: [
            "../layouts/DefaultLayout/index.tsx -> " + "../../components/organisms/Header"
        ]
    }
});
const Footer = (0,dynamic["default"])(__webpack_require__.e(/* import() */ 769).then(__webpack_require__.bind(__webpack_require__, 1769)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1769)
            ]
        ,
        modules: [
            "../layouts/DefaultLayout/index.tsx -> " + "../../components/organisms/Footer"
        ]
    }
});
const DefaultLayout = (Component)=>{
    // @ts-ignore
    const wrapperComponent = ({ header , footer , ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                Object.keys(header).length ? /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                    header: header
                }) : null,
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...props
                }),
                Object.keys(footer).length ? /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                    footer: footer
                }) : null
            ]
        })
    ;
    return wrapperComponent;
};
/* harmony default export */ const layouts_DefaultLayout = (DefaultLayout);

;// CONCATENATED MODULE: ./pages/index.tsx

// @ts-ignore

// @ts-ignore




// Import components
const Home = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 850).then(__webpack_require__.bind(__webpack_require__, 9850))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(9850)
            ]
        ,
        modules: [
            "index.tsx -> " + "../components/templates/Home"
        ]
    }
});
// @ts-ignore
const HomePage = ({ header , homeBanner , advantages =[] , apartments =[] , ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Main page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Home, {
                ...props,
                homeBanner: homeBanner,
                advantages: advantages,
                apartments: apartments
            })
        ]
    }));
};
const _getStaticProps = async ()=>{
    try {
        return {
            props: {
                header: {
                    menu: [
                        {
                            id: 1,
                            url: '/',
                            text: 'Home'
                        },
                        {
                            id: 2,
                            url: '/catalog',
                            text: 'Catalog'
                        },
                        {
                            id: 3,
                            url: '/contact',
                            text: 'Contact'
                        }
                    ],
                    src: '/images/atoms/Logo/LogoLight.svg'
                },
                homeBanner: {
                    img: '/images/organisms/Home/Banner/banner.jpg',
                    title: 'Discover Your New Home',
                    description: 'Helping 100 million renters find their perfect fit.'
                },
                advantages: [
                    {
                        id: 1,
                        img: '/images/organisms/Home/Advantages/portfolio.svg',
                        title: 'Renting Made Simple',
                        description: 'Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.'
                    },
                    {
                        id: 2,
                        img: '/images/organisms/Home/Advantages/search.svg',
                        title: 'Find Your Next Renter',
                        description: 'Connect with millions of renters and lease your property 100% online'
                    },
                    {
                        id: 3,
                        img: '/images/organisms/Home/Advantages/hand.svg',
                        title: 'Tips for Renters',
                        description: 'Tips for Renters Find answers to all of your renting questions with the best renter’s guide in the galaxy.'
                    }
                ],
                apartments: Array(5).fill(0).map((e, i)=>({
                        id: i,
                        verified: true,
                        ready: true,
                        title: 'Confortable apartment',
                        sleepingPlaces: 56,
                        shower: 56,
                        dimensions: 56,
                        address: 'Metro Plaza Dr, Jersey City, NJ 07302, USA',
                        slug: `apartment-${i}`,
                        price: 500
                    })
                ),
                footer: {
                    logo: '/images/atoms/Logo/LogoDark.svg',
                    menu: [
                        {
                            id: 1,
                            url: '/about-us',
                            text: 'О нас'
                        },
                        {
                            id: 2,
                            url: '/contacts',
                            text: 'Контакты'
                        },
                        {
                            id: 3,
                            url: '/help',
                            text: 'Помощь'
                        },
                        {
                            id: 4,
                            url: '/blog',
                            text: '(FIQ) Блог'
                        }
                    ],
                    infoMenu: [
                        {
                            id: 1,
                            url: '/for-landlord',
                            text: 'Для арендодателей'
                        },
                        {
                            id: 2,
                            url: '/tenants',
                            text: 'Для съёмщиков'
                        },
                        {
                            id: 3,
                            url: '/protect-program',
                            text: 'Программа защиты'
                        },
                        {
                            id: 4,
                            url: '/oferta',
                            text: 'Публичная оферта'
                        },
                        {
                            id: 5,
                            url: '/support',
                            text: 'Служба поддержки'
                        }
                    ],
                    socials: [
                        {
                            id: 1,
                            url: 'http://test.com',
                            icon: 'fab instagram'
                        },
                        {
                            id: 2,
                            url: 'http://test.com',
                            icon: 'fab pinterest-p'
                        },
                        {
                            id: 3,
                            url: 'http://test.com',
                            icon: 'fab facebook-f'
                        },
                        {
                            id: 4,
                            url: 'http://test.com',
                            icon: 'fab twitter'
                        }
                    ]
                },
                error: ""
            }
        };
    } catch (error) {
        return {
            props: {
                header: {
                    menu: [],
                    src: '/images/atoms/Logo/LogoLight.svg'
                },
                footer: null,
                homeBanner: null,
                actualApartments: null,
                advantages: [],
                apartments: [],
                error: error.toString()
            }
        };
    }
};
/* harmony default export */ const pages = (layouts_DefaultLayout(HomePage));
// @ts-ignore
async function getStaticProps(ctx) {
    // @ts-ignore
    let res = _getStaticProps(ctx);
    // @ts-ignore
    if (typeof res.then === 'function') res = await res;
    // @ts-ignore
    return {
        // @ts-ignore
        ...res,
        // @ts-ignore
        props: {
            // @ts-ignore
            ...res.props || {
            },
            // @ts-ignore
            ...await loadNamespaces_default()({
                // @ts-ignore
                ...ctx,
                // @ts-ignore
                pathname: '/index',
                // @ts-ignore
                loaderName: 'getStaticProps',
                // @ts-ignore
                ...(i18n_default()),
                // @ts-ignore
                loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default
                    )
            })
        }
    };
// @ts-ignore
} // @ts-ignore


/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 866:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [521], () => (__webpack_exec__(7232)));
module.exports = __webpack_exports__;

})();