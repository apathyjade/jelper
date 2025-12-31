"use strict";
var __webpack_modules__ = {
    "./src/utils.ts" (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, {
            toCssLengthValue: ()=>toCssLengthValue
        });
        const toCssLengthValue = (num)=>{
            if ('string' == typeof num) return num;
            if ('number' == typeof num) return `${num}px`;
            return 'initial';
        };
    },
    "styled-components" (module) {
        module.exports = require("styled-components");
    }
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
(()=>{
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
        Column: ()=>Column,
        Row: ()=>Row
    });
    var styled_components__rspack_import_0 = __webpack_require__("styled-components");
    var styled_components__rspack_import_0_default = /*#__PURE__*/ __webpack_require__.n(styled_components__rspack_import_0);
    var _utils__rspack_import_1 = __webpack_require__("./src/utils.ts");
    const rowStyle = (0, styled_components__rspack_import_0.css)`
  display: flex;
  justify-content: ${(props)=>props.$justify || 'flex-start'};
  align-items: ${(props)=>props.$align || 'stretch'};
  flex-wrap: nowrap;
  width: 100%;
  gap: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$gap)};
  word-break: break-all;
`;
    const rowItemStyle = (0, styled_components__rspack_import_0.css)`
  flex: ${(props)=>{
        var _props_$scale, _props_$scale1;
        return props.$fixed ? '0 0 auto' : `${null != (_props_$scale = props.$scale) ? _props_$scale : 1} ${null != (_props_$scale1 = props.$scale) ? _props_$scale1 : 1} auto`;
    }};
  width: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$width)};
  min-width: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$minWidth)};
  max-width: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$maxWidth)};
  overflow: auto;
`;
    const columnStyle = (0, styled_components__rspack_import_0.css)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props)=>props.$justify || 'flex-start'};
  align-items: ${(props)=>props.$align || 'stretch'};
  flex-wrap: nowrap;
  height: 100%;
  gap: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$gap)};
  word-break: break-all;
`;
    const columnItemStyle = (0, styled_components__rspack_import_0.css)`
  flex: ${(props)=>{
        var _props_$scale, _props_$scale1;
        return props.$fixed ? '0 0 auto' : `${null != (_props_$scale = props.$scale) ? _props_$scale : 1} ${null != (_props_$scale1 = props.$scale) ? _props_$scale1 : 1} auto`;
    }};
  height: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$height)};
  min-height: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$minHeight)};
  max-height: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$maxHeight)};
  overflow: auto;
`;
    const Row = styled_components__rspack_import_0_default().div`
  ${rowStyle}
`;
    const Column = styled_components__rspack_import_0_default().div`
  ${columnStyle}
`;
    Row.Item = styled_components__rspack_import_0_default().div`
  ${rowItemStyle}
`;
    Row.RowItem = styled_components__rspack_import_0_default().div`
  ${rowStyle}
  ${rowItemStyle}
`;
    Row.ColItem = styled_components__rspack_import_0_default().div`
  ${columnStyle}
  ${rowItemStyle}
`;
    Column.Item = styled_components__rspack_import_0_default().div`
  ${columnItemStyle}
`;
    Column.RowItem = styled_components__rspack_import_0_default().div`
  ${rowStyle}
  ${columnItemStyle}
`;
    Column.ColItem = styled_components__rspack_import_0_default().div`
  ${columnStyle}
  ${columnItemStyle}
`;
})();
exports.Column = __webpack_exports__.Column;
exports.Row = __webpack_exports__.Row;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Column",
    "Row"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
