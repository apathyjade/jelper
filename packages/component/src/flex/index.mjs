import * as __rspack_external_styled_components_326b429a from "styled-components";
var __webpack_modules__ = {
    "./src/utils.ts" () {},
    "styled-components" (module) {
        module.exports = __rspack_external_styled_components_326b429a;
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
var external_styled_components_ = __webpack_require__("styled-components");
var utils = __webpack_require__("./src/utils.ts");
const rowStyle = (0, external_styled_components_.css)`
  display: flex;
  justify-content: ${(props)=>props.$justify || 'flex-start'};
  align-items: ${(props)=>props.$align || 'stretch'};
  flex-wrap: nowrap;
  width: 100%;
  gap: ${(props)=>(0, utils.toCssLengthValue)(props.$gap)};
  word-break: break-all;
`;
const rowItemStyle = (0, external_styled_components_.css)`
  flex: ${(props)=>{
    var _props_$scale, _props_$scale1;
    return props.$fixed ? '0 0 auto' : `${null != (_props_$scale = props.$scale) ? _props_$scale : 1} ${null != (_props_$scale1 = props.$scale) ? _props_$scale1 : 1} auto`;
}};
  width: ${(props)=>(0, utils.toCssLengthValue)(props.$width)};
  min-width: ${(props)=>(0, utils.toCssLengthValue)(props.$minWidth)};
  max-width: ${(props)=>(0, utils.toCssLengthValue)(props.$maxWidth)};
  overflow: auto;
`;
const columnStyle = (0, external_styled_components_.css)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props)=>props.$justify || 'flex-start'};
  align-items: ${(props)=>props.$align || 'stretch'};
  flex-wrap: nowrap;
  height: 100%;
  gap: ${(props)=>(0, utils.toCssLengthValue)(props.$gap)};
  word-break: break-all;
`;
const columnItemStyle = (0, external_styled_components_.css)`
  flex: ${(props)=>{
    var _props_$scale, _props_$scale1;
    return props.$fixed ? '0 0 auto' : `${null != (_props_$scale = props.$scale) ? _props_$scale : 1} ${null != (_props_$scale1 = props.$scale) ? _props_$scale1 : 1} auto`;
}};
  height: ${(props)=>(0, utils.toCssLengthValue)(props.$height)};
  min-height: ${(props)=>(0, utils.toCssLengthValue)(props.$minHeight)};
  max-height: ${(props)=>(0, utils.toCssLengthValue)(props.$maxHeight)};
  overflow: auto;
`;
const Row = external_styled_components_["default"].div`
  ${rowStyle}
`;
const Column = external_styled_components_["default"].div`
  ${columnStyle}
`;
Row.Item = external_styled_components_["default"].div`
  ${rowItemStyle}
`;
Row.RowItem = external_styled_components_["default"].div`
  ${rowStyle}
  ${rowItemStyle}
`;
Row.ColItem = external_styled_components_["default"].div`
  ${columnStyle}
  ${rowItemStyle}
`;
Column.Item = external_styled_components_["default"].div`
  ${columnItemStyle}
`;
Column.RowItem = external_styled_components_["default"].div`
  ${rowStyle}
  ${columnItemStyle}
`;
Column.ColItem = external_styled_components_["default"].div`
  ${columnStyle}
  ${columnItemStyle}
`;
export { Column, Row };
