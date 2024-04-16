"use strict";(self.webpackChunk_jelper_website=self.webpackChunk_jelper_website||[]).push([[1986],{1596:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=s(678),r=s(6655),l=s(5807),i=s(4609);const d={title:"hooks",sort:1},a=void 0,c={id:"hooks/index",title:"hooks",description:"React Hooks \u5e93\uff0c\u5305\u542breact\u57fa\u7840hooks\u7684\u62d3\u5c55\uff0c\u751f\u547d\u5468\u671f\u7684\u6a21\u62df\uff0c\u6d4f\u89c8\u5668api\u7684\u5c01\u88c5\u7b49\u80fd\u529b\uff1b",source:"@site/docs/hooks/index.mdx",sourceDirName:"hooks",slug:"/hooks/",permalink:"/jelper/docs/hooks/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hooks/index.mdx",tags:[],version:"current",frontMatter:{title:"hooks",sort:1},sidebar:"tutorialSidebar",previous:{title:"handler",permalink:"/jelper/docs/handler/"},next:{title:"promise",permalink:"/jelper/docs/promise/"}},u={},h=[{value:"Api",id:"api",level:2},{value:"useSafeState",id:"usesafestate",level:3},{value:"useSafeCb",id:"usesafecb",level:3},{value:"useRtRef",id:"usertref",level:3},{value:"useRtState",id:"usertstate",level:3},{value:"useRtCb",id:"usertcb",level:3},{value:"useBoolState",id:"useboolstate",level:3},{value:"useParamsState",id:"useparamsstate",level:3},{value:"useUpdateEffect",id:"useupdateeffect",level:3},{value:"useIsUnmount",id:"useisunmount",level:3},{value:"useCreate",id:"usecreate",level:3},{value:"useMount",id:"usemount",level:3},{value:"useUnmount",id:"useunmount",level:3},{value:"useThrottle",id:"usethrottle",level:3},{value:"useDebounce",id:"usedebounce",level:3},{value:"useAsync",id:"useasync",level:3},{value:"useTimeout",id:"usetimeout",level:3},{value:"useInterval",id:"useinterval",level:3},{value:"useListener",id:"uselistener",level:3},{value:"useResizeObserver",id:"useresizeobserver",level:3}];function o(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"React Hooks \u5e93\uff0c\u5305\u542breact\u57fa\u7840hooks\u7684\u62d3\u5c55\uff0c\u751f\u547d\u5468\u671f\u7684\u6a21\u62df\uff0c\u6d4f\u89c8\u5668api\u7684\u5c01\u88c5\u7b49\u80fd\u529b\uff1b"}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"npm",label:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm istall @jelper/hooks\n"})})}),(0,n.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"pnpm istall @jelper/hooks\n"})})}),(0,n.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn istall @jelper/hooks\n"})})})]}),"\n","\n",(0,n.jsx)(t.h2,{id:"api",children:"Api"}),"\n",(0,n.jsx)(t.h3,{id:"usesafestate",children:"useSafeState"}),"\n",(0,n.jsx)(t.p,{children:"\u7528\u6cd5\u540c React.useState\uff0c\u4f46\u5728\u7ec4\u4ef6\u5378\u8f7d\u540e\u4e0d\u4f1a\u4fee\u6539\u6570\u636e"}),"\n",(0,n.jsx)(t.h3,{id:"usesafecb",children:"useSafeCb"}),"\n",(0,n.jsx)(t.p,{children:"\u7528\u6cd5\u540c React.useCallback\uff0c\u4f46\u5728\u7ec4\u4ef6\u5378\u8f7d\u540e\u4e0d\u4f1a\u6267\u884c\u56de\u8c03\u51fd\u6570"}),"\n",(0,n.jsx)(t.h3,{id:"usertref",children:"useRtRef"}),"\n",(0,n.jsx)(t.p,{children:"\u7528\u6cd5\u540c React.useRef\uff0c\u4f46\u6bcf\u6b21\u51fd\u6570\u7ec4\u4ef6\u6267\u884c\u65f6 useRtRef\u4f20\u5165\u53c2\u6570\u90fd\u4f1a\u540c\u6b65\u8d4b\u503c ref.current"}),"\n",(0,n.jsx)(t.h3,{id:"usertstate",children:"useRtState"}),"\n",(0,n.jsx)(t.h3,{id:"usertcb",children:"useRtCb"}),"\n",(0,n.jsx)(t.p,{children:"\u7528\u6cd5\u540c React.useCallback\uff0c\u6bcf\u6b21\u51fd\u6570\u7ec4\u4ef6\u6267\u884c\u65f6 useRtCb\u4f20\u5165\u53c2\u6570\u90fd\u4f1a\u540c\u6b65\u7f13\u5b58\u56de\u8c03\u7f13\u5b58\uff0c\u4f46\u4e0d\u4f1a\u66f4\u65b0useRtCb\u8fd4\u56de\u51fd\u6570\uff0c\u4fdd\u8bc1\u56de\u8c03\u51fd\u6570\u4f7f\u7528\u6700\u65b0\u5feb\u7167\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u89e6\u53d1dom diff\u4e0d\u4e00\u81f4"}),"\n",(0,n.jsx)(t.h3,{id:"useboolstate",children:"useBoolState"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useBoolState"}),(0,n.jsx)(t.td,{children:"(bool: boolean ) => [Boolean, (bool?: boolean) => void]"}),(0,n.jsx)(t.td,{children:"\u66f4\u65b0\u65f6\u4e0d\u4f20\u503c\uff0c\u53d6\u53cd"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"useparamsstate",children:"useParamsState"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useParamsState"}),(0,n.jsx)(t.td,{children:"<T>(data: T) => [T, (data: Partial<T>) => void), (data: T) => void]"}),(0,n.jsx)(t.td,{children:"-"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"useupdateeffect",children:"useUpdateEffect"}),"\n",(0,n.jsx)(t.p,{children:"\u7528\u6cd5\u540c React.useEffect\uff0c\u4f46\u9996\u6b21\u4e0d\u4f1a\u6267\u884c\uff0c\u53ea\u6709\u4f9d\u8d56\u66f4\u65b0\u624d\u4f1a\u6267\u884c"}),"\n",(0,n.jsx)(t.h3,{id:"useisunmount",children:"useIsUnmount"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useIsUnmount"}),(0,n.jsx)(t.td,{children:"() => () => boolean"}),(0,n.jsx)(t.td,{children:"\u83b7\u53d6\u7ec4\u4ef6\u662f\u5426\u5378\u8f7d\u72b6\u6001"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"usecreate",children:"useCreate"}),"\n",(0,n.jsx)(t.p,{children:"\u751f\u547d\u5468\u671f\u94a9\u5b50"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useCreate"}),(0,n.jsx)(t.td,{children:"(fn: () => void) => void"}),(0,n.jsx)(t.td,{children:"\u53ea\u540c\u6b65\u6267\u884c\u4e00\u6b21"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"usemount",children:"useMount"}),"\n",(0,n.jsx)(t.p,{children:"\u751f\u547d\u5468\u671f\u94a9\u5b50"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useMount"}),(0,n.jsx)(t.td,{children:"(fn: () => void) => void"}),(0,n.jsx)(t.td,{children:"\u51fd\u6570\u4f7f\u7528\u6700\u65b0\u5feb\u7167\u6570\u636e"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"useunmount",children:"useUnmount"}),"\n",(0,n.jsx)(t.p,{children:"\u751f\u547d\u5468\u671f\u94a9\u5b50"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useUnmount"}),(0,n.jsx)(t.td,{children:"(fn: () => void) => void"}),(0,n.jsx)(t.td,{children:"\u51fd\u6570\u4f7f\u7528\u6700\u65b0\u5feb\u7167\u6570\u636e"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"usethrottle",children:"useThrottle"}),"\n",(0,n.jsx)(t.p,{children:"lodash throttle"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useThrottle"}),(0,n.jsx)(t.td,{children:"<T>(cb: T, wait?: number, opts?: ThrottleSettings) => T"}),(0,n.jsx)(t.td,{children:"-"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"usedebounce",children:"useDebounce"}),"\n",(0,n.jsx)(t.p,{children:"lodash debounce\u5c01\u88c5hooks"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useDebounce"}),(0,n.jsx)(t.td,{children:"<T>(cb: T, wait?: number, opts?: DebounceSettings) => T"}),(0,n.jsx)(t.td,{children:"-"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"useasync",children:"useAsync"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useAsync"}),(0,n.jsx)(t.td,{children:"(cb: Function, opts: { immediate: Boolean; catchParam: Boolean }) => { loading: Boolean, error: Error, data: any, run: Function }"}),(0,n.jsx)(t.td,{children:"-"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"usetimeout",children:"useTimeout"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useTimeout"}),(0,n.jsx)(t.td,{children:"(cb: Function, delay: number) => Function"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6e05\u9664\u51fd\u6570\uff0c\u7ec4\u4ef6\u9500\u6bc1\u81ea\u52a8\u6e05\u9664"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"useinterval",children:"useInterval"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useInterval"}),(0,n.jsx)(t.td,{children:"(cb: Function, delay: number) => Function"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6e05\u9664\u51fd\u6570\uff0c\u7ec4\u4ef6\u9500\u6bc1\u81ea\u52a8\u6e05\u9664"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"uselistener",children:"useListener"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useInterval"}),(0,n.jsx)(t.td,{children:"\u540c addEventListener"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6e05\u9664\u51fd\u6570\uff0c\u7ec4\u4ef6\u9500\u6bc1\u81ea\u52a8\u6e05\u9664"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"useresizeobserver",children:"useResizeObserver"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"useResizeObserver"}),(0,n.jsx)(t.td,{children:"(dom: HTMLElement, cb: (dom: ResizeObserverEntry) => void) => [ob: () => void, unOb: () => void]"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u76d1\u542c\u548c\u6e05\u9664\u51fd\u6570\uff0c\u7ec4\u4ef6\u9500\u6bc1\u81ea\u52a8\u6e05\u9664"})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},4609:(e,t,s)=>{s.d(t,{A:()=>i});s(6166);var n=s(27);const r={tabItem:"tabItem_bifL"};var l=s(678);function i(e){let{children:t,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:s,children:t})}},5807:(e,t,s)=>{s.d(t,{A:()=>k});var n=s(6166),r=s(27),l=s(430),i=s(5261),d=s(8093),a=s(387),c=s(112),u=s(4228);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function x(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,a.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,l=o(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,h]=j({queryString:s,groupId:r}),[b,p]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),v=(()=>{const e=c??b;return x({value:e,tabValues:l})?e:null})();(0,d.A)((()=>{v&&a(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,l]),tabValues:l}}var p=s(7007);const v={tabList:"tabList_R1Bj",tabItem:"tabItem_Lr5a"};var m=s(678);function f(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,s=a.indexOf(t),r=d[s].value;r!==n&&(c(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;t=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;t=a[s]??a[a.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:d.map((e=>{let{value:t,label:s,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:h,onClick:u,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,m.jsx)(f,{...e,...t}),(0,m.jsx)(y,{...e,...t})]})}function k(e){const t=(0,p.A)();return(0,m.jsx)(g,{...e,children:h(e.children)},String(t))}},6655:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var n=s(6166);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);