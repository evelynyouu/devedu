module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const VINE_VIDEOS = [
    "https://www.youtube.com/watch?v=2yJgwwDcgV8&list=RD2yJgwwDcgV8&start_radio=1",
    "https://www.youtube.com/watch?v=MtN1YnoL46Q&list=RD2yJgwwDcgV8&index=2",
    "https://www.youtube.com/watch?v=7jjcAuEYW9M&list=RD2yJgwwDcgV8&index=3",
    "https://www.youtube.com/watch?v=qRC4Vk6kisY&list=RD2yJgwwDcgV8&index=4",
    "https://www.youtube.com/watch?v=Ct6BUPvE2sM&list=RD2yJgwwDcgV8&index=5",
    "https://youtu.be/W-3DWBv0CvU?si=xF_c1O4bdAT8E7zO",
    "https://youtu.be/PKQPey6L42M?si=MMEWowXWY3g1WpIB",
    "https://youtu.be/QvsQ9hYKq7c?si=dXyrI3Z8pgu4IhAS",
    "https://youtu.be/cE0wfjsybIQ?si=ehGNakG2xfErtUx4",
    "https://youtu.be/jofNR_WkoCE?si=Fa9Ojep-tHQQY7cy",
    "https://youtu.be/mBw3qzf4s18?si=NIUDuwgyPMgoiiDR",
    "https://youtu.be/dQw4w9WgXcQ?si=kovgrdZ6UjFQIqII",
    "https://www.youtube.com/watch?v=-xqEABqaEuo",
    "https://www.youtube.com/watch?v=2XhVg38cDTU",
    "https://www.youtube.com/watch?v=m5vcmRh--e4",
    "https://www.youtube.com/watch?v=LDU_Txk06tM&list=RDLDU_Txk06tM&start_radio=1",
    "https://www.youtube.com/watch?v=SfT4FMkh1-w"
];
const CELL_COUNT = 200;
const MIDDLE_INDEX = Math.floor(CELL_COUNT / 2);
const RAINBOW = [
    "#ff0000",
    "#ff4400",
    "#ff8800",
    "#ffbb00",
    "#ffff00",
    "#88ff00",
    "#00ff00",
    "#00ff88",
    "#00ffff",
    "#0088ff",
    "#0000ff",
    "#4400ff",
    "#8800ff",
    "#ff00ff",
    "#ff0088"
];
function SmallSixtySevenGrid({ count, offset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2 sm:grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] items-center justify-items-center",
        children: Array.from({
            length: count
        }, (_, i)=>{
            const idx = offset + i;
            const color = RAINBOW[idx % RAINBOW.length];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: VINE_VIDEOS[idx % VINE_VIDEOS.length],
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center text-2xl font-black transition hover:scale-110 sm:text-3xl md:text-4xl",
                style: {
                    color
                },
                children: "67"
            }, idx, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function Home() {
    const topCount = MIDDLE_INDEX;
    const bottomCount = CELL_COUNT - MIDDLE_INDEX - 2;
    const lastIdx = CELL_COUNT - 1;
    const lastColor = RAINBOW[lastIdx % RAINBOW.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-50 p-4 font-sans dark:bg-black flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallSixtySevenGrid, {
                count: bottomCount,
                offset: MIDDLE_INDEX + 1
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white text-2xl sm:text-3xl md:text-4xl font-black text-center py-4",
                children: "hella touse meme page"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/pomodoro",
                className: "flex-1 min-h-[50vh] w-full flex items-center justify-center font-black transition hover:opacity-90 overflow-hidden",
                style: {
                    color: lastColor
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[14rem] sm:text-[18rem] md:text-[22rem] leading-none select-none",
                    style: {
                        transform: "scaleX(4) scaleY(1.8)",
                        display: "inline-block"
                    },
                    children: "67"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1222724e._.js.map