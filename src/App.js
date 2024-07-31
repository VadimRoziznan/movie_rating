"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const Stars_1 = require("./components/stars/Stars");
function App() {
    let validCount = 4;
    validCount = typeof validCount === 'number' && validCount > 0 && validCount < 6 ? validCount : 1;
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsx)(Stars_1.Stars, { count: validCount }, void 0) }), void 0));
}
exports.default = App;
