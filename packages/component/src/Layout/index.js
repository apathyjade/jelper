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
        default: ()=>__rspack_default_export
    });
    var styled_components__rspack_import_0 = __webpack_require__("styled-components");
    var styled_components__rspack_import_0_default = /*#__PURE__*/ __webpack_require__.n(styled_components__rspack_import_0);
    var _utils__rspack_import_1 = __webpack_require__("./src/utils.ts");
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
    function ownKeys(object, enumerableOnly) {
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
        else ownKeys(Object(source)).forEach(function(key) {
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
    const WrapStyled = styled_components__rspack_import_0_default().div`
  padding: ${(props)=>`0px ${(0, _utils__rspack_import_1.toCssLengthValue)(props.$sideSpace || 0)}`};
  overflow: auto;
`;
    const InnerStyled = styled_components__rspack_import_0_default().div`
  margin: 0 auto;
  width: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$width)};
  min-width: ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$minWidth)};
  max-width:  ${(props)=>(0, _utils__rspack_import_1.toCssLengthValue)(props.$maxWidth)};
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
    const __rspack_default_export = Layout;
})();
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
