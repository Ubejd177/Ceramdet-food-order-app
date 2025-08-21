(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/Menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Menu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Menu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://scontent.fprn2-1.fna.fbcdn.net/v/t39.30808-6/464498159_8491158234252786_2133074293415216838_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=I7aDYggfNrgQ7kNvwFOwrVX&_nc_oc=AdmhBmoTfRoQKCkpuOVizP3uG8qdW72SnItjOZqHEHn7vIgHdivAfgc6wcM05jbb-eM&_nc_zt=23&_nc_ht=scontent.fprn2-1.fna&_nc_gid=q3M8DdIyJjhlaQJSPxsbGQ&oh=00_AfWC7rDavQbBIyLhwjYit0zpd_h8nRO4i9lS4mStQmqM4A&oe=68A92270",
        alt: "Menu Photo",
        style: {
            width: 80,
            height: 80,
            objectFit: 'cover',
            borderRadius: 12,
            boxShadow: '0 2px 8px #ccc',
            marginRight: 16
        }
    }, void 0, false, {
        fileName: "[project]/components/Menu.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/OrderForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>OrderForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function OrderForm(param) {
    let { order, onRemove, onSubmit } = param;
    _s();
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (order.length === 0 || !customer) return;
        onSubmit(order, customer);
        setCustomer('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        style: {
            marginTop: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Your Order"
            }, void 0, false, {
                fileName: "[project]/components/OrderForm.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: order.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            item.qty > 1 ? "".concat(item.qty, "x ") : '',
                            item.name,
                            " - $",
                            item.price.toFixed(2),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                style: {
                                    marginLeft: 8,
                                    background: '#e00'
                                },
                                onClick: ()=>onRemove(idx),
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/components/OrderForm.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/OrderForm.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/OrderForm.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Your name",
                value: customer,
                onChange: (e)=>setCustomer(e.target.value),
                required: true,
                style: {
                    marginRight: 8
                }
            }, void 0, false, {
                fileName: "[project]/components/OrderForm.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: order.length === 0 || !customer,
                children: "Place Order"
            }, void 0, false, {
                fileName: "[project]/components/OrderForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/OrderForm.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(OrderForm, "KEdOzXNVMivwrpYl6DFeviOEAJ0=");
_c = OrderForm;
var _c;
__turbopack_context__.k.register(_c, "OrderForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OrderForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OrderForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HomePage() {
    _s();
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [adminInput, setAdminInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Kuzina",
        "Extrem",
        "Bosna",
        "Chepizza",
        "Gjakova"
    ]);
    const [activeLocation, setActiveLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Kuzina");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            fetch('http://192.168.33.55:4000/location').then({
                "HomePage.useEffect": (res)=>res.json()
            }["HomePage.useEffect"]).then({
                "HomePage.useEffect": (data)=>{
                    if (data.location && locations.includes(data.location)) {
                        setActiveLocation(data.location);
                    }
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{}
            }["HomePage.useEffect"]);
        }
    }["HomePage.useEffect"], [
        locations
    ]);
    const [newLocation, setNewLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [menus, setMenus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        // Only Kuzina and Extrem remain
        "Kuzina": [
            {
                id: 1,
                name: 'File pule me sos curry',
                price: 3.50
            },
            {
                id: 2,
                name: 'File pule me sos te shpis',
                price: 3.50
            },
            {
                id: 3,
                name: 'File pule me sos meksikane',
                price: 3.50
            },
            {
                id: 4,
                name: 'Shnicell pule',
                price: 3.50
            },
            {
                id: 5,
                name: 'Pule amerikane',
                price: 3.50
            },
            {
                id: 6,
                name: 'Gjysme pule',
                price: 3.50
            },
            {
                id: 7,
                name: 'Gullash',
                price: 4.00
            },
            {
                id: 8,
                name: 'Pasul',
                price: 3.50
            },
            {
                id: 9,
                name: 'Paul pa mish',
                price: 3.00
            },
            {
                id: 10,
                name: 'Speca te mbushura',
                price: 3.50
            },
            {
                id: 11,
                name: 'Hamburger klasik',
                price: 2.50
            },
            {
                id: 12,
                name: 'Hamburger pule',
                price: 2.50
            },
            {
                id: 13,
                name: 'Cheeseburger',
                price: 2.50
            },
            {
                id: 14,
                name: 'Hamburger Kuzina',
                price: 3.50
            },
            {
                id: 15,
                name: 'Pide boloneze',
                price: 3.50
            },
            {
                id: 16,
                name: 'Pide me porshut',
                price: 3.00
            },
            {
                id: 17,
                name: 'Pide me mish pule',
                price: 3.00
            },
            {
                id: 18,
                name: 'Pide me suxhuk',
                price: 3.00
            },
            {
                id: 19,
                name: 'Pide me tune',
                price: 3.00
            },
            {
                id: 20,
                name: 'Samun Kuzina',
                price: 3.50
            },
            {
                id: 21,
                name: 'Samun me porshut',
                price: 2.50
            },
            {
                id: 22,
                name: 'Samun me mish pule',
                price: 3.00
            },
            {
                id: 23,
                name: 'Samun me suxhuk',
                price: 2.50
            },
            {
                id: 24,
                name: 'Makarona boloneze',
                price: 3.50
            },
            {
                id: 25,
                name: 'Makarona Arabiata',
                price: 3.50
            },
            {
                id: 26,
                name: 'Lazanja',
                price: 4.00
            }
        ],
        "Extrem": [
            {
                id: 1,
                name: 'Sandwich pule ',
                price: 3.50,
                image: 'https://cms.extremeks.com/uploads/30_fcf785d2b9.jpg'
            },
            {
                id: 2,
                name: 'Llokuma',
                price: 3.20,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F2_9e0c865ad3.jpg&w=256&q=75'
            },
            {
                id: 3,
                name: 'Sandwich Tuna',
                price: 3.50,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F17_a24cf97c2a.jpg&w=256&q=75'
            },
            {
                id: 4,
                name: 'Risotto Pule',
                price: 4.50,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FRISOTO_f7b7f8d9cc.jpg&w=256&q=75'
            },
            {
                id: 5,
                name: 'Chicken Fingers',
                price: 4.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F13_a30437f51d.jpg&w=256&q=75'
            },
            {
                id: 6,
                name: 'Chicken Nuggets',
                price: 4.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F14_8c7ec52237.jpg&w=256&q=75'
            },
            {
                id: 7,
                name: 'Cordon Bleu',
                price: 4.50,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F08_ca6ab9a15a.jpg&w=256&q=75'
            },
            {
                id: 8,
                name: 'Skenderbeg',
                price: 4.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F25_80af55ed74.jpg&w=256&q=75'
            },
            {
                id: 9,
                name: 'Extreme Chicken Burger',
                price: 3.50,
                image: 'https://cms.extremeks.com/uploads/00_8604734490.jpg'
            },
            {
                id: 10,
                name: 'Doner pule ne pete',
                price: 3.00,
                image: 'https://cms.extremeks.com/uploads/doner_ne_pete_5ae882e0a6.jpg'
            },
            {
                id: 11,
                name: 'Crunch Sandwich Chicken',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FCRUNCH_07c98d7391.jpg&w=256&q=75'
            },
            {
                id: 12,
                name: 'Sandwich Vegetarian ',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FVEGJETARIAN_a3fbf1c5f7.jpg&w=256&q=75'
            },
            {
                id: 13,
                name: 'Samun me suxhuk',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUNI_ME_SUXHUK_045ebaab7c.jpg&w=256&q=75'
            },
            {
                id: 14,
                name: 'Samun me doner ',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2Fxzvzz_dfa36c9f26.jpg&w=256&q=75'
            },
            {
                id: 15,
                name: 'Samun me proshute',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2Fasdsada_9024726e11.jpg&w=256&q=75'
            },
            {
                id: 16,
                name: 'Samun Mix',
                price: 3.50,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUN_MIX_37b0ebc078.jpg&w=256&q=75'
            },
            {
                id: 17,
                name: 'Samun Tune',
                price: 4.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUN_TUNA_d0283d035d.jpg&w=256&q=75'
            },
            {
                id: 18,
                name: 'Samun Vegjetarian',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUNG_VEGJETARINA_c26d5a40c1.jpg&w=256&q=75'
            },
            {
                id: 19,
                name: 'Samun Extreme',
                price: 3.50,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F1231_09de76a8fc.jpg&w=256&q=75'
            },
            {
                id: 20,
                name: 'Samun Chilli ',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUN_CHILLI_ba16954154_copy_c06a25e221.jpg&w=256&q=75'
            },
            {
                id: 21,
                name: 'Banjalluqki ',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FBANJALLUQKI_e1a398c5b8.jpg&w=256&q=75'
            },
            {
                id: 22,
                name: 'Burger n pitalkë ',
                price: 3.50,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F01_2e0a2e4e76_065016f4fe.jpg&w=256&q=75'
            },
            {
                id: 23,
                name: 'Pomfrit i shtëpisë ',
                price: 3.00,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2Fpomfrit_i_shtepsie_c67f269ea2.jpg&w=256&q=75'
            },
            {
                id: 24,
                name: 'File pule ',
                price: 4.50,
                image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FFILE_PULE_13257a93c0.jpg&w=256&q=75'
            }
        ],
        "Bosna": [
            {
                id: 1,
                name: 'Hamburger me promfrit mrena',
                price: 3.30
            },
            {
                id: 2,
                name: 'Hamburger me promfirta jasht',
                price: 3.30
            },
            {
                id: 3,
                name: 'gjysm banjalluke',
                price: 4.00
            },
            {
                id: 4,
                name: ' banjalluk',
                price: 6.00
            },
            {
                id: 5,
                name: 'Sanwich porshute',
                price: 3.00
            },
            {
                id: 6,
                name: 'Sanwich pule',
                price: 3.00
            },
            {
                id: 7,
                name: 'Burek me djath',
                price: 1.50
            },
            {
                id: 8,
                name: 'Burek me spanaq',
                price: 1.50
            },
            {
                id: 9,
                name: 'Burek mw mish',
                price: 1.50
            },
            {
                id: 10,
                name: 'Promfrit',
                price: 1.50
            },
            {
                id: 11,
                name: 'File pule',
                price: 3.00
            },
            {
                id: 12,
                name: 'Qebaba 5',
                price: 3.00
            },
            {
                id: 13,
                name: 'Qebaba 7',
                price: 4.00
            },
            {
                id: 14,
                name: 'Qebaba 8',
                price: 4.50
            },
            {
                id: 15,
                name: 'Sendwich pule',
                price: 3.50
            }
        ],
        "Chepizza": [
            {
                id: 1,
                name: 'Pizza Peperoni',
                price: 2.50,
                image: 'https://imageproxy.wolt.com/assets/68590298fde5cbbcef538e72?w=300'
            },
            {
                id: 2,
                name: 'Pizza Margarita',
                price: 2.50,
                image: 'https://imageproxy.wolt.com/assets/68590298fde5cbbcef538e71?w=300'
            },
            {
                id: 3,
                name: 'Pizza Maksikane',
                price: 2.50,
                image: 'https://imageproxy.wolt.com/assets/6859029afde5cbbcef538e76?w=300'
            },
            {
                id: 4,
                name: 'Pizza Fungi',
                price: 2.50,
                image: 'https://imageproxy.wolt.com/assets/68590298fde5cbbcef538e70?w=300'
            },
            {
                id: 5,
                name: 'Pizza Tuna',
                price: 2.50,
                image: 'https://imageproxy.wolt.com/assets/68590296fde5cbbcef538e6e?w=300'
            },
            {
                id: 6,
                name: 'Pizza Pule',
                price: 2.50,
                image: 'https://imageproxy.wolt.com/assets/68590296fde5cbbcef538e6c?w=300'
            }
        ],
        "Gjakova": [
            {
                id: 1,
                name: 'Qebaba 5',
                price: 2.80
            },
            {
                id: 2,
                name: 'qebaba 6',
                price: 3.30
            },
            {
                id: 3,
                name: 'Qbaba 7',
                price: 3.90
            },
            {
                id: 4,
                name: 'qebaba 8',
                price: 4.40
            },
            {
                id: 5,
                name: 'File kackavall',
                price: 2.80
            },
            {
                id: 6,
                name: 'File Kackavall e aljvar',
                price: 2.80
            },
            {
                id: 7,
                name: 'File Kajmak',
                price: 2.80
            },
            {
                id: 8,
                name: 'Mish ne tel',
                price: 2.50
            },
            {
                id: 9,
                name: 'Sallat shope',
                price: 2.00
            },
            {
                id: 10,
                name: 'sallat prizreni',
                price: 2.00
            }
        ]
    });
    const [newMenu, setNewMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAdd = (item)=>{
        setOrder((prev)=>{
            const idx = prev.findIndex((o)=>o.id === item.id && o.name === item.name && o.price === item.price);
            if (idx !== -1) {
                // Item exists, increase quantity
                const updated = [
                    ...prev
                ];
                updated[idx] = {
                    ...updated[idx],
                    qty: (updated[idx].qty || 1) + 1
                };
                return updated;
            } else {
                return [
                    ...prev,
                    {
                        ...item,
                        qty: 1
                    }
                ];
            }
        });
    };
    const handleRemove = (idx)=>{
        setOrder((order)=>{
            const updated = [
                ...order
            ];
            if (updated[idx].qty && updated[idx].qty > 1) {
                updated[idx] = {
                    ...updated[idx],
                    qty: updated[idx].qty - 1
                };
            } else {
                updated.splice(idx, 1);
            }
            return updated;
        });
    };
    const handleSubmit = async (order, name)=>{
        if (name === '54503512345') {
            setAdmin(true);
            setSubmitted(false);
            setOrder([]);
            setCustomerName('');
            return;
        }
        // Send order to backend
        await fetch('http://192.168.33.55:4000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order,
                customer: name,
                location: activeLocation
            })
        });
        setSubmitted(true);
        setOrder([]);
        setTimeout(()=>setSubmitted(false), 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 600,
            margin: '40px auto',
            padding: 24,
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 8px #eee'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: 0
                        },
                        children: "Ceramdent order app"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginBottom: 8
                        },
                        children: [
                            "Location: ",
                            admin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: activeLocation,
                                                onChange: (e)=>setActiveLocation(e.target.value),
                                                style: {
                                                    padding: 6,
                                                    borderRadius: 4,
                                                    border: '1px solid #ccc',
                                                    width: 180,
                                                    marginRight: 8
                                                },
                                                children: locations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: loc,
                                                        children: loc
                                                    }, loc, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                style: {
                                                    background: '#0070f3',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: 4,
                                                    padding: '6px 14px',
                                                    marginRight: 8
                                                },
                                                onClick: async ()=>{
                                                    await fetch('http://192.168.33.55:4000/location', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            location: activeLocation
                                                        })
                                                    });
                                                    // Fetch the latest location from backend and update state
                                                    const res = await fetch('http://192.168.33.55:4000/location');
                                                    const data = await res.json();
                                                    if (data.location && locations.includes(data.location)) {
                                                        setActiveLocation(data.location);
                                                    }
                                                    alert('Location saved for all users!');
                                                },
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            locations.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    if (window.confirm('Delete location "'.concat(activeLocation, '"?'))) {
                                                        const idx = locations.indexOf(activeLocation);
                                                        const newLocs = locations.filter((l)=>l !== activeLocation);
                                                        setLocations(newLocs);
                                                        setActiveLocation(newLocs[Math.max(0, idx - 1)] || newLocs[0]);
                                                    }
                                                },
                                                style: {
                                                    background: '#e00',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: 4,
                                                    padding: '6px 14px',
                                                    marginRight: 8
                                                },
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newLocation,
                                        onChange: (e)=>setNewLocation(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 16
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    style: {
                                                        background: '#222',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: 4,
                                                        padding: '6px 14px'
                                                    },
                                                    onClick: async ()=>{
                                                        const res = await fetch('http://192.168.33.55:4000/orders');
                                                        const data = await res.json();
                                                        if (!data.orders.length) {
                                                            alert('No orders yet.');
                                                        } else {
                                                            const orderStrings = data.orders.map((o)=>{
                                                                const date = o.time ? new Date(o.time).toLocaleString() : '';
                                                                const total = o.order.reduce((sum, i)=>sum + i.price * (i.qty || 1), 0).toFixed(2);
                                                                return "".concat(o.customer, " (").concat(o.location, ")\n").concat(date, "\n") + o.order.map((i)=>"".concat(i.qty || 1, "x ").concat(i.name)).join(', ') + "\nTotal: €".concat(total);
                                                            });
                                                            const combinedTotal = data.orders.reduce((sum, o)=>sum + o.order.reduce((s, i)=>s + i.price * (i.qty || 1), 0), 0).toFixed(2);
                                                            const itemMap = {};
                                                            data.orders.forEach((o)=>{
                                                                o.order.forEach((i)=>{
                                                                    itemMap[i.name] = (itemMap[i.name] || 0) + (i.qty || 1);
                                                                });
                                                            });
                                                            const combinedItems = Object.entries(itemMap).map((param)=>{
                                                                let [name, qty] = param;
                                                                return "Total: ".concat(qty, "x ").concat(name);
                                                            }).join('\n');
                                                            alert(orderStrings.join('\n\n') + "\n\nCombined Total: €".concat(combinedTotal) + (combinedItems ? "\n".concat(combinedItems) : ''));
                                                        }
                                                    },
                                                    children: "Show All Orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    style: {
                                                        background: '#0070f3',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: 4,
                                                        padding: '6px 14px'
                                                    },
                                                    onClick: async ()=>{
                                                        const res = await fetch('http://192.168.33.55:4000/orders');
                                                        const data = await res.json();
                                                        const printWindow = window.open('', '', 'width=800,height=600');
                                                        if (printWindow) {
                                                            printWindow.document.write('<html><head><title>All Orders</title></head><body>');
                                                            printWindow.document.write('<h2>All Orders</h2>');
                                                            let combinedTotal = 0;
                                                            const itemMap = {};
                                                            if (data.orders.length) {
                                                                data.orders.forEach((o)=>{
                                                                    const date = o.time ? new Date(o.time).toLocaleString() : '';
                                                                    printWindow.document.write('<div style="margin-bottom:16px;"><strong>'.concat(o.customer, " (").concat(o.location, ")</strong><br>").concat(date, "<br>").concat(o.order.map((i)=>"".concat(i.qty || 1, "x ").concat(i.name)).join(', '), "</div>"));
                                                                    o.order.forEach((i)=>{
                                                                        itemMap[i.name] = (itemMap[i.name] || 0) + (i.qty || 1);
                                                                        combinedTotal += i.price * (i.qty || 1);
                                                                    });
                                                                });
                                                                printWindow.document.write('<div style="margin-top:24px;font-weight:bold;">Combined Total: €'.concat(combinedTotal.toFixed(2), "</div>"));
                                                                Object.entries(itemMap).forEach((param)=>{
                                                                    let [name, qty] = param;
                                                                    printWindow.document.write("<div>Total: ".concat(qty, "x ").concat(name, "</div>"));
                                                                });
                                                            } else {
                                                                printWindow.document.write('<div>No orders yet.</div>');
                                                            }
                                                            printWindow.document.write('</body></html>');
                                                            printWindow.document.close();
                                                            printWindow.focus();
                                                            printWindow.print();
                                                        }
                                                    },
                                                    children: "Print"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Location: ",
                                    activeLocation
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "admin-code",
                                style: {
                                    fontWeight: 'bold',
                                    display: 'block',
                                    marginBottom: 4
                                },
                                children: "Admin Code"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "admin-code",
                                type: "password",
                                value: adminInput,
                                onChange: (e)=>setAdminInput(e.target.value),
                                style: {
                                    padding: 6,
                                    borderRadius: 4,
                                    border: '1px solid #ccc',
                                    width: 140,
                                    marginRight: 8
                                },
                                placeholder: "Enter code",
                                disabled: admin
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    if (adminInput === '54503512345') {
                                        setAdmin(true);
                                        setAdminInput('');
                                    } else {
                                        alert('Invalid code');
                                    }
                                },
                                disabled: admin || !adminInput,
                                style: {
                                    background: '#0070f3',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 4,
                                    padding: '6px 14px',
                                    cursor: admin ? 'not-allowed' : 'pointer'
                                },
                                children: admin ? 'Admin' : 'Enter'
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                style: {
                                    background: '#e00',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 4,
                                    padding: '6px 14px',
                                    marginTop: 12,
                                    display: 'block'
                                },
                                onClick: async ()=>{
                                    if (window.confirm('Are you sure you want to reset all orders?')) {
                                        const res = await fetch('http://192.168.33.55:4000/orders/reset', {
                                            method: 'POST'
                                        });
                                        if (res.ok) {
                                            alert('All orders have been reset!');
                                        } else {
                                            alert('Failed to reset orders.');
                                        }
                                    }
                                },
                                children: "Reset All Orders"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 24
                },
                children: menus[activeLocation] && menus[activeLocation].length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        display: 'flex',
                        flexWrap: 'wrap',
                        padding: 0,
                        listStyle: 'none'
                    },
                    children: menus[activeLocation].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                flex: '0 0 50%',
                                boxSizing: 'border-box',
                                padding: '0 8px 16px 0',
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.name,
                                    style: {
                                        width: 144,
                                        height: 144,
                                        objectFit: 'cover',
                                        marginRight: 8,
                                        borderRadius: 6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        item.name,
                                        " - €",
                                        item.price.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        marginLeft: 8
                                    },
                                    onClick: ()=>handleAdd(item),
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 361,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 359,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "No menu items for this location."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 382,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            menus[activeLocation] && menus[activeLocation].length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: 0,
                    listStyle: 'none'
                },
                children: menus[activeLocation].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            flex: '0 0 50%',
                            boxSizing: 'border-box',
                            padding: '0 8px 16px 0',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: item.name,
                                style: {
                                    width: 144,
                                    height: 144,
                                    objectFit: 'cover',
                                    marginRight: 8,
                                    borderRadius: 6
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 399,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    item.name,
                                    " - €",
                                    item.price.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 401,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    marginLeft: 8
                                },
                                onClick: ()=>handleAdd(item),
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 402,
                                columnNumber: 19
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 388,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 386,
                columnNumber: 13
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "No menu items for this location."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 409,
                columnNumber: 13
            }, this),
            admin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginBottom: 24
                },
                children: "Admin Mode Activated"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 413,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OrderForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                order: order,
                onRemove: handleRemove,
                onSubmit: (order, name)=>{
                    setCustomerName(name || '');
                    handleSubmit(order, name);
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'green',
                    marginTop: 16
                },
                children: "Order placed! Thank you!"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 416,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(HomePage, "TO9qg+Fs20FN2sONS4+wYC4YzFM=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_9324f4c4._.js.map