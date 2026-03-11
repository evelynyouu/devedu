(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/nunito_48fbdb.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "nunito_48fbdb-module__xPerQW__className",
  "variable": "nunito_48fbdb-module__xPerQW__variable",
});
}),
"[next]/internal/font/google/nunito_48fbdb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_48fbdb$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/nunito_48fbdb.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_48fbdb$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Nunito', 'Nunito Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_48fbdb$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_48fbdb$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/pomodoro/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PomodoroPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_48fbdb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/nunito_48fbdb.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
const STUDY_MIN_OPTIONS = [
    1,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90
];
const BREAK_OPTIONS = [
    1,
    5,
    10,
    15,
    20,
    25,
    30
];
const ALARM_VIDEO_ID = "AxxCT6D9bEg";
function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
function DurationPickerModal({ isStudy, value, onSelect, onDone }) {
    const options = isStudy ? [
        "stopwatch",
        ...STUDY_MIN_OPTIONS
    ] : [
        "stopwatch",
        ...BREAK_OPTIONS
    ];
    const selectedIndex = Math.max(0, options.indexOf(value));
    const maxIndex = options.length - 1;
    const displayLabel = value === "stopwatch" ? "∞ Stopwatch" : `${value} min`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1a1b1e] py-8 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md flex flex-col items-center gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-black uppercase tracking-wider text-white/80",
                    children: isStudy ? "Study duration" : "Break duration"
                }, void 0, false, {
                    fileName: "[project]/app/pomodoro/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-black text-white tabular-nums",
                    children: displayLabel
                }, void 0, false, {
                    fileName: "[project]/app/pomodoro/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 0,
                        max: maxIndex,
                        step: 1,
                        value: selectedIndex,
                        onChange: (e)=>onSelect(options[Number(e.target.value)]),
                        className: "w-full h-3 rounded-full appearance-none cursor-pointer bg-transparent [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:-mt-1.5 [&::-moz-range-track]:h-3 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/app/pomodoro/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pomodoro/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onDone(value),
                    className: "rounded-full bg-white text-[#1a1b1e] px-12 py-4 text-lg font-black shadow-lg hover:bg-gray-100 active:scale-95 transition",
                    children: "Done"
                }, void 0, false, {
                    fileName: "[project]/app/pomodoro/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pomodoro/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/pomodoro/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = DurationPickerModal;
function useMousePosition() {
    _s();
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMousePosition.useEffect": ()=>{
            const handler = {
                "useMousePosition.useEffect.handler": (e)=>{
                    pos.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["useMousePosition.useEffect.handler"];
            window.addEventListener("mousemove", handler);
            return ({
                "useMousePosition.useEffect": ()=>window.removeEventListener("mousemove", handler)
            })["useMousePosition.useEffect"];
        }
    }["useMousePosition.useEffect"], []);
    return pos;
}
_s(useMousePosition, "FJbXduOwloJDWo3DJRAdbU0MXdM=");
function useTongueTimer() {
    _s1();
    const [tongueOut, setTongueOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTongueTimer.useEffect": ()=>{
            const id = setInterval({
                "useTongueTimer.useEffect.id": ()=>{
                    setTongueOut(true);
                    setTimeout({
                        "useTongueTimer.useEffect.id": ()=>setTongueOut(false)
                    }["useTongueTimer.useEffect.id"], 600);
                }
            }["useTongueTimer.useEffect.id"], 3000);
            return ({
                "useTongueTimer.useEffect": ()=>clearInterval(id)
            })["useTongueTimer.useEffect"];
        }
    }["useTongueTimer.useEffect"], []);
    return tongueOut;
}
_s1(useTongueTimer, "IVVk/wg7+05bg7h6zwERK3KBah8=");
function CartoonyOrange({ success, eyeOffsetX, eyeOffsetY, tongueOut }) {
    const bodyFill = success ? "#f97316" : "#22c55e";
    const stemFill = "#4ade80";
    const faceFill = "#1c1917";
    const ex = eyeOffsetX ?? 0;
    const ey = eyeOffsetY ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        className: "flex-shrink-0 drop-shadow-md pointer-events-none",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "24",
                cy: "26",
                rx: "17",
                ry: "18",
                fill: bodyFill
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 11 L24 6 L25 11 Z",
                fill: stemFill
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "20",
                cy: "9",
                rx: "3.5",
                ry: "2",
                fill: stemFill,
                transform: "rotate(-20 20 9)"
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "28",
                cy: "9",
                rx: "3.5",
                ry: "2",
                fill: stemFill,
                transform: "rotate(20 28 9)"
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "24",
                r: "3",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "30",
                cy: "24",
                r: "3",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 18 + ex,
                cy: 24 + ey,
                r: "1.6",
                fill: faceFill
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: 30 + ex,
                cy: 24 + ey,
                r: "1.6",
                fill: faceFill
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 30 Q24 35 30 30",
                stroke: faceFill,
                strokeWidth: "1.8",
                strokeLinecap: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            tongueOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "24",
                cy: "34",
                rx: "3",
                ry: "4",
                fill: "#ff6b8a"
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pomodoro/page.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c1 = CartoonyOrange;
const ORANGE_RADIUS = 24;
const GRAVITY = 0.22;
const RESTITUTION = 0.62;
const ORANGE_ZONE_HEIGHT = 120;
function BouncingOranges({ sessions }) {
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orangeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const physicsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mousePos = useMousePosition();
    const tongueOut = useTongueTimer();
    const [eyeOffsets, setEyeOffsets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // When new oranges are added, initialize their physics
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BouncingOranges.useEffect": ()=>{
            const container = containerRef.current;
            const rect = container?.getBoundingClientRect();
            const w = Math.max(rect?.width ?? (("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable"), 100);
            const h = ORANGE_ZONE_HEIGHT;
            const prevLen = physicsRef.current.length;
            const nextLen = sessions.length;
            if (nextLen <= prevLen) return;
            for(let i = prevLen; i < nextLen; i++){
                const x = ORANGE_RADIUS + Math.random() * (w - 2 * ORANGE_RADIUS);
                const y = h - ORANGE_RADIUS - 16 - Math.random() * 20;
                physicsRef.current.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 5,
                    vy: -Math.random() * 8 - 4
                });
            }
            orangeRefs.current = orangeRefs.current.slice(0, nextLen);
        }
    }["BouncingOranges.useEffect"], [
        sessions.length
    ]);
    // Physics loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BouncingOranges.useEffect": ()=>{
            if (sessions.length === 0) return;
            const container = containerRef.current;
            if (!container) return;
            const run = {
                "BouncingOranges.useEffect.run": ()=>{
                    const rect = container.getBoundingClientRect();
                    const w = rect.width;
                    const h = rect.height;
                    const physics = physicsRef.current;
                    for(let i = 0; i < physics.length; i++){
                        const p = physics[i];
                        p.vy += GRAVITY;
                        p.x += p.vx;
                        p.y += p.vy;
                        // Floor
                        if (p.y + ORANGE_RADIUS > h) {
                            p.y = h - ORANGE_RADIUS;
                            p.vy *= -RESTITUTION;
                            p.vx *= 0.98;
                        }
                        // Ceiling
                        if (p.y - ORANGE_RADIUS < 0) {
                            p.y = ORANGE_RADIUS;
                            p.vy *= -RESTITUTION;
                        }
                        // Walls
                        if (p.x - ORANGE_RADIUS < 0) {
                            p.x = ORANGE_RADIUS;
                            p.vx *= -RESTITUTION;
                        }
                        if (p.x + ORANGE_RADIUS > w) {
                            p.x = w - ORANGE_RADIUS;
                            p.vx *= -RESTITUTION;
                        }
                    }
                    orangeRefs.current.forEach({
                        "BouncingOranges.useEffect.run": (el, i)=>{
                            if (el && physics[i]) {
                                el.style.transform = `translate(${physics[i].x - ORANGE_RADIUS}px, ${physics[i].y - ORANGE_RADIUS}px)`;
                            }
                        }
                    }["BouncingOranges.useEffect.run"]);
                    rafRef.current = requestAnimationFrame(run);
                }
            }["BouncingOranges.useEffect.run"];
            rafRef.current = requestAnimationFrame(run);
            return ({
                "BouncingOranges.useEffect": ()=>cancelAnimationFrame(rafRef.current)
            })["BouncingOranges.useEffect"];
        }
    }["BouncingOranges.useEffect"], [
        sessions.length
    ]);
    // Compute eye offsets toward mouse every 60ms
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BouncingOranges.useEffect": ()=>{
            if (sessions.length === 0) return;
            const container = containerRef.current;
            if (!container) return;
            const id = setInterval({
                "BouncingOranges.useEffect.id": ()=>{
                    const rect = container.getBoundingClientRect();
                    const physics = physicsRef.current;
                    const offsets = physics.map({
                        "BouncingOranges.useEffect.id.offsets": (p)=>{
                            const orangeCenterX = rect.left + p.x;
                            const orangeCenterY = rect.top + p.y;
                            const dx = mousePos.current.x - orangeCenterX;
                            const dy = mousePos.current.y - orangeCenterY;
                            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                            const maxOffset = 1.4;
                            return {
                                x: dx / dist * maxOffset,
                                y: dy / dist * maxOffset
                            };
                        }
                    }["BouncingOranges.useEffect.id.offsets"]);
                    setEyeOffsets(offsets);
                }
            }["BouncingOranges.useEffect.id"], 60);
            return ({
                "BouncingOranges.useEffect": ()=>clearInterval(id)
            })["BouncingOranges.useEffect"];
        }
    }["BouncingOranges.useEffect"], [
        sessions.length,
        mousePos
    ]);
    if (sessions.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed bottom-0 left-0 right-0 overflow-hidden",
        style: {
            height: ORANGE_ZONE_HEIGHT
        },
        children: sessions.map((result, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: (el)=>{
                    orangeRefs.current[i] = el;
                },
                className: "absolute left-0 top-0 w-12 h-12 flex items-center justify-center",
                style: {
                    transform: `translate(0, 0)`
                },
                title: result === "success" ? "Completed session" : "Paused early",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartoonyOrange, {
                    success: result === "success",
                    eyeOffsetX: eyeOffsets[i]?.x ?? 0,
                    eyeOffsetY: eyeOffsets[i]?.y ?? 0,
                    tongueOut: tongueOut
                }, void 0, false, {
                    fileName: "[project]/app/pomodoro/page.tsx",
                    lineNumber: 292,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/pomodoro/page.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_s2(BouncingOranges, "3+/A5eO4o/G7TyncYioKHMibNYw=", false, function() {
    return [
        useMousePosition,
        useTongueTimer
    ];
});
_c2 = BouncingOranges;
function PomodoroPage() {
    _s3();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("study");
    const [studyDuration, setStudyDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("stopwatch");
    const [breakDuration, setBreakDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [breakElapsed, setBreakElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completedSessions, setCompletedSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasStartedCurrentStudy, setHasStartedCurrentStudy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pickerOpen, setPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [alarmPlaying, setAlarmPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isStopwatch = studyDuration === "stopwatch";
    const isBreakStopwatch = breakDuration === "stopwatch";
    const startStudy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PomodoroPage.useCallback[startStudy]": ()=>{
            setMode("study");
            if (studyDuration === "stopwatch") {
                setElapsed(0);
            } else {
                setTimeLeft(studyDuration * 60);
            }
            setHasStartedCurrentStudy(true);
            setIsRunning(true);
        }
    }["PomodoroPage.useCallback[startStudy]"], [
        studyDuration
    ]);
    const startBreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PomodoroPage.useCallback[startBreak]": ()=>{
            setMode("break");
            if (breakDuration === "stopwatch") {
                setBreakElapsed(0);
            } else {
                setTimeLeft(breakDuration * 60);
            }
            setHasStartedCurrentStudy(false);
            setIsRunning(true);
        }
    }["PomodoroPage.useCallback[startBreak]"], [
        breakDuration
    ]);
    const currentModeIsStopwatch = mode === "study" ? isStopwatch : isBreakStopwatch;
    // When countdown hits 0: stop at 0:00, give 1 orange, and start alarm
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroPage.useEffect": ()=>{
            if (!isRunning || currentModeIsStopwatch) return;
            if (timeLeft > 0) return;
            setCompletedSessions({
                "PomodoroPage.useEffect": (prev)=>[
                        ...prev,
                        "success"
                    ]
            }["PomodoroPage.useEffect"]);
            setIsRunning(false);
            setAlarmPlaying(true);
        }
    }["PomodoroPage.useEffect"], [
        isRunning,
        timeLeft,
        currentModeIsStopwatch
    ]);
    // Countdown tick
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroPage.useEffect": ()=>{
            if (!isRunning || currentModeIsStopwatch || timeLeft <= 0) return;
            const id = setInterval({
                "PomodoroPage.useEffect.id": ()=>setTimeLeft({
                        "PomodoroPage.useEffect.id": (t)=>t - 1
                    }["PomodoroPage.useEffect.id"])
            }["PomodoroPage.useEffect.id"], 1000);
            return ({
                "PomodoroPage.useEffect": ()=>clearInterval(id)
            })["PomodoroPage.useEffect"];
        }
    }["PomodoroPage.useEffect"], [
        isRunning,
        timeLeft,
        currentModeIsStopwatch
    ]);
    // Study stopwatch tick
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroPage.useEffect": ()=>{
            if (!isRunning || mode !== "study" || !isStopwatch) return;
            const id = setInterval({
                "PomodoroPage.useEffect.id": ()=>setElapsed({
                        "PomodoroPage.useEffect.id": (e)=>e + 1
                    }["PomodoroPage.useEffect.id"])
            }["PomodoroPage.useEffect.id"], 1000);
            return ({
                "PomodoroPage.useEffect": ()=>clearInterval(id)
            })["PomodoroPage.useEffect"];
        }
    }["PomodoroPage.useEffect"], [
        isRunning,
        mode,
        isStopwatch
    ]);
    // Break stopwatch tick
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroPage.useEffect": ()=>{
            if (!isRunning || mode !== "break" || !isBreakStopwatch) return;
            const id = setInterval({
                "PomodoroPage.useEffect.id": ()=>setBreakElapsed({
                        "PomodoroPage.useEffect.id": (e)=>e + 1
                    }["PomodoroPage.useEffect.id"])
            }["PomodoroPage.useEffect.id"], 1000);
            return ({
                "PomodoroPage.useEffect": ()=>clearInterval(id)
            })["PomodoroPage.useEffect"];
        }
    }["PomodoroPage.useEffect"], [
        isRunning,
        mode,
        isBreakStopwatch
    ]);
    const handlePause = ()=>{
        if (mode === "study" && hasStartedCurrentStudy) {
            if (isStopwatch) {
                setCompletedSessions((prev)=>[
                        ...prev,
                        "success"
                    ]);
                setAlarmPlaying(true);
            } else if (timeLeft > 0) {
                setCompletedSessions((prev)=>[
                        ...prev,
                        "failed"
                    ]);
            }
        }
        if (mode === "break" && isBreakStopwatch) {
            setAlarmPlaying(true);
        }
        setIsRunning(false);
    };
    const handleReset = ()=>{
        setIsRunning(false);
        setHasStartedCurrentStudy(false);
        if (mode === "study") {
            if (isStopwatch) setElapsed(0);
            else if (typeof studyDuration === "number") setTimeLeft(studyDuration * 60);
        } else {
            if (isBreakStopwatch) setBreakElapsed(0);
            else setTimeLeft(breakDuration * 60);
        }
    };
    const handleStudyDurationChange = (value)=>{
        setStudyDuration(value);
        if (mode === "study" && !isRunning) {
            if (value === "stopwatch") setElapsed(0);
            else setTimeLeft(value * 60);
        }
    };
    const handleBreakDurationChange = (value)=>{
        setBreakDuration(value);
        if (mode === "break" && !isRunning) {
            if (value === "stopwatch") setBreakElapsed(0);
            else setTimeLeft(value * 60);
        }
    };
    const toggleMode = ()=>{
        if (isRunning) return;
        const nextMode = mode === "study" ? "break" : "study";
        setMode(nextMode);
        if (nextMode === "study") {
            setStudyDuration(30);
            setTimeLeft(30 * 60);
            setElapsed(0);
        } else {
            setBreakDuration(5);
            setTimeLeft(5 * 60);
            setBreakElapsed(0);
        }
    };
    const displayTime = mode === "study" && isStopwatch ? elapsed : mode === "break" && isBreakStopwatch ? breakElapsed : timeLeft;
    const openPicker = ()=>{
        if (!isRunning) setPickerOpen(true);
    };
    const handlePickerSelect = (v)=>{
        if (mode === "study") {
            handleStudyDurationChange(v);
        } else {
            handleBreakDurationChange(v);
        }
    };
    // When Done is pressed, save the selected duration to the main timer display (uses value from modal so it always applies)
    const handlePickerDone = (selectedValue)=>{
        if (mode === "study") {
            setStudyDuration(selectedValue);
            if (selectedValue === "stopwatch") setElapsed(0);
            else setTimeLeft(selectedValue * 60);
        } else {
            setBreakDuration(selectedValue);
            if (selectedValue === "stopwatch") setBreakElapsed(0);
            else setTimeLeft(selectedValue * 60);
        }
        setPickerOpen(false);
    };
    const pickerValue = mode === "study" ? studyDuration : breakDuration;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_48fbdb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} min-h-screen bg-[#1a1b1e] flex flex-col items-center justify-center p-6 font-sans`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full flex flex-col items-center gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-black text-white tracking-tight",
                        children: "Pomodoro Timer"
                    }, void 0, false, {
                        fileName: "[project]/app/pomodoro/page.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full rounded-[2.5rem] bg-[#25262b] shadow-2xl border-2 border-orange-500/30 px-8 py-8 flex flex-col items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleMode,
                                disabled: isRunning,
                                className: "text-xl font-black uppercase tracking-wider text-white hover:opacity-90 disabled:opacity-100 disabled:cursor-default transition rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#25262b]",
                                "aria-label": mode === "study" ? "Switch to Break" : "Switch to Study",
                                children: mode === "study" ? "Study" : "Break"
                            }, void 0, false, {
                                fileName: "[project]/app/pomodoro/page.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openPicker,
                                disabled: isRunning,
                                className: "text-6xl font-black text-white tabular-nums drop-shadow-md hover:opacity-90 disabled:opacity-100 disabled:cursor-default transition rounded-2xl px-4 py-2 -mx-4 -my-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#25262b]",
                                "aria-label": "Adjust duration",
                                children: formatTime(displayTime)
                            }, void 0, false, {
                                fileName: "[project]/app/pomodoro/page.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    !isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: mode === "study" ? startStudy : startBreak,
                                        className: "rounded-full bg-white text-orange-600 px-8 py-4 text-lg font-black shadow-lg hover:bg-orange-100 active:scale-95 transition",
                                        children: "Start"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pomodoro/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePause,
                                        className: "rounded-full bg-amber-400 text-orange-900 px-8 py-4 text-lg font-black shadow-lg hover:bg-amber-300 active:scale-95 transition",
                                        children: "Pause"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pomodoro/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "rounded-full bg-[#25262b] border-2 border-white/30 px-6 py-4 text-lg font-black text-white hover:bg-[#2c2d33] transition",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pomodoro/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pomodoro/page.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pomodoro/page.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            pickerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DurationPickerModal, {
                isStudy: mode === "study",
                value: pickerValue,
                onSelect: handlePickerSelect,
                onDone: handlePickerDone
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 523,
                columnNumber: 9
            }, this),
            alarmPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-lg font-black mb-4",
                        children: "Time's up!"
                    }, void 0, false, {
                        fileName: "[project]/app/pomodoro/page.tsx",
                        lineNumber: 534,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-md aspect-video rounded-xl overflow-hidden bg-black mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            title: "Alarm",
                            src: `https://www.youtube.com/embed/${ALARM_VIDEO_ID}?autoplay=1`,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/app/pomodoro/page.tsx",
                            lineNumber: 536,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/pomodoro/page.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setAlarmPlaying(false),
                        className: "rounded-full bg-white text-[#1a1b1e] px-10 py-4 text-lg font-black shadow-lg hover:bg-gray-100 active:scale-95 transition",
                        children: "Stop alarm"
                    }, void 0, false, {
                        fileName: "[project]/app/pomodoro/page.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 533,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BouncingOranges, {
                sessions: completedSessions
            }, void 0, false, {
                fileName: "[project]/app/pomodoro/page.tsx",
                lineNumber: 555,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pomodoro/page.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_s3(PomodoroPage, "fmceYw/B58nn7ooYuz5EizMRV+E=");
_c3 = PomodoroPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DurationPickerModal");
__turbopack_context__.k.register(_c1, "CartoonyOrange");
__turbopack_context__.k.register(_c2, "BouncingOranges");
__turbopack_context__.k.register(_c3, "PomodoroPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
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
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
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
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
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
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
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
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
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
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__a429bf8f._.js.map