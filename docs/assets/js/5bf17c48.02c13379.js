"use strict";(self.webpackChunk_jelper_website=self.webpackChunk_jelper_website||[]).push([[5931],{5339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var s=n(678),o=n(6655);const u={title:"useValue",sort:2},a="useValue",l={id:"hooks/useValue/TEST",title:"useValue",description:"react\u53d7\u63a7\u7ec4\u4ef6hook, useValue\u53d7\u63a7\u4f20\u5165value",source:"@site/docs/hooks/useValue/TEST.mdx",sourceDirName:"hooks/useValue",slug:"/hooks/useValue/TEST",permalink:"/jelper/docs/hooks/useValue/TEST",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hooks/useValue/TEST.mdx",tags:[],version:"current",frontMatter:{title:"useValue",sort:2},sidebar:"tutorialSidebar",previous:{title:"hooks",permalink:"/jelper/docs/hooks/useAsync"},next:{title:"index",permalink:"/jelper/docs/promise/"}},r={},c=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"API",id:"api",level:3}];function i(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usevalue",children:"useValue"}),"\n",(0,s.jsx)(t.p,{children:"react\u53d7\u63a7\u7ec4\u4ef6hook, useValue\u53d7\u63a7\u4f20\u5165value"}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { useValue } from '@jelper/hooks'\n\nfunction Demo() {\n  const [outValue, setOutValue] = useState('')\n  const [value, setValue] = useValue(outValue)\n  return (\n    <>\n      <input value={value} onInput={(ev) => setValue(ev.target.value)} />\n      <button onClick={() => setOutValue('')} >\u6e05\u7a7a</button>\n    </>\n  )\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// \u914d\u7f6e\ninterface Options<T> {\n  // \u5224\u65ad \u4f20\u5165value\u662f\u5426\u53d8\u66f4\uff0c\u9ed8\u8ba4 ===\n  isEqual?: (a:T, b: T) => boolean\n}\ntype SetValue<T> = (v: T|((oldVal: T) => T)) => void\n\ntype UseValue<T = any> = (val: T, opts: Options<T>) => [T, SetValue<T>];\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},6655:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(6166);const o={},u=s.createContext(o);function a(e){const t=s.useContext(u);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(u.Provider,{value:t},e.children)}}}]);