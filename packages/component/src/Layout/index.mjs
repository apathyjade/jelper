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
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if ("function" == typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function Layout_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = null != source ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else Layout_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
function _object_without_properties(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys, key, i;
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (!(excluded.indexOf(key) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
        }
    }
    return target;
}
const WrapStyled = external_styled_components_["default"].div`
  padding: ${(props)=>`0px ${(0, utils.toCssLengthValue)(props.$sideSpace || 0)}`};
  overflow: auto;
`;
const InnerStyled = external_styled_components_["default"].div`
  margin: 0 auto;
  width: ${(props)=>(0, utils.toCssLengthValue)(props.$width)};
  min-width: ${(props)=>(0, utils.toCssLengthValue)(props.$minWidth)};
  max-width:  ${(props)=>(0, utils.toCssLengthValue)(props.$maxWidth)};
`;
const Layout = (props)=>{
    const { $sideSpace, $width, $minWidth, $maxWidth, children } = props, others = _object_without_properties(props, [
        "$sideSpace",
        "$width",
        "$minWidth",
        "$maxWidth",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(WrapStyled, _object_spread_props(_object_spread({}, others), {
        $sideSpace: $sideSpace
    }), /*#__PURE__*/ React.createElement(InnerStyled, {
        $width: $width,
        $minWidth: $minWidth,
        $maxWidth: $maxWidth
    }, children));
};
const src_Layout = Layout;
export { src_Layout as default };
