"use strict";
exports.__esModule = true;
exports.useDummy = void 0;
var react_1 = require("react");
var useDummy = function (_a) {
    var foo = _a.foo;
    var _b = (0, react_1.useState)(10), bar = _b[0], setBar = _b[1];
    (0, react_1.useEffect)(function () {
        setBar(function (bar) { return foo + bar; });
    }, [foo]);
    return bar;
};
exports.useDummy = useDummy;
