"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stars = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./stars.css");
const Stars = ({ count }) => {
    const array = [...Array(count).keys()].map(i => i + 1);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'container' }, { children: (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "card-body-stars u-clearfix container" }, { children: array.map((c, index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("svg", Object.assign({ fill: "#D3BCA2", height: "28", viewBox: "0 0 18 18", width: "28", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M0 0h18v18H0z", fill: "none" }, void 0)] }), void 0) }, c + index))) }), void 0) }), void 0));
};
exports.Stars = Stars;
