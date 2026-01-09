"use strict";(globalThis.webpackChunk_jelper_website=globalThis.webpackChunk_jelper_website||[]).push([[3587],{47347(e,t,n){n.d(t,{fv:()=>c,PE:()=>u,fI:()=>s});var i=n(17685);const a=(e,t="initial")=>"string"==typeof e?e:"number"==typeof e?`${e}px`:t,o=i.AH`
  display: flex;
  justify-content: ${e=>e.$justify||"flex-start"};
  align-items: ${e=>e.$align||"stretch"};
  flex-wrap: nowrap;
  width: 100%;
  gap: ${e=>a(e.$gap)};
  word-break: break-all;
`,r=i.AH`
  flex: ${e=>{var t,n;return e.$fixed?`0 0 ${a(e.$width,"auto")}`:`${null!==(t=e.$scale)&&void 0!==t?t:1} ${null!==(n=e.$scale)&&void 0!==n?n:1} ${a(e.$width,"0px")}`}};
  min-width: ${e=>a(e.$minWidth,"0px")};
  max-width: ${e=>a(e.$maxWidth,"100%")};
  overflow: auto;
`,d=i.AH`
  display: flex;
  flex-direction: column;
  justify-content: ${e=>e.$justify||"flex-start"};
  align-items: ${e=>e.$align||"stretch"};
  flex-wrap: nowrap;
  height: 100%;
  gap: ${e=>a(e.$gap)};
  word-break: break-all;
`,l=i.AH`
  flex: ${e=>{var t,n;return e.$fixed?`0 0 ${a(e.$height,"auto")}`:`${null!==(t=e.$scale)&&void 0!==t?t:1} ${null!==(n=e.$scale)&&void 0!==n?n:1} ${a(e.$height,"0px")}`}};
  min-height: ${e=>a(e.$minHeight,"0px")};
  max-height: ${e=>a(e.$maxHeight,"100%")};
  overflow: auto;
`,s=i.Ay.div`
  ${o}
`,c=i.Ay.div`
  ${d}
`;s.Item=i.Ay.div`
  ${r}
`,s.RowItem=i.Ay.div`
  ${o}
  ${r}
`,s.ColItem=i.Ay.div`
  ${d}
  ${r}
`,c.Item=i.Ay.div`
  ${l}
`,c.RowItem=i.Ay.div`
  ${o}
  ${l}
`,c.ColItem=i.Ay.div`
  ${d}
  ${l}
`;var p=n(71137),h=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};const $=i.Ay.div`
  padding: ${e=>`0px ${a(e.$sideSpace||0)}`};
  overflow: auto;
`,x=i.Ay.div`
  margin: 0 auto;
  width: ${e=>a(e.$width)};
  min-width: ${e=>a(e.$minWidth)};
  max-width:  ${e=>a(e.$maxWidth)};
`,u=e=>{const{$sideSpace:t,$width:n,$minWidth:i,$maxWidth:a,children:o}=e,r=h(e,["$sideSpace","$width","$minWidth","$maxWidth","children"]);return(0,p.jsx)($,Object.assign({},r,{$sideSpace:t,children:(0,p.jsx)(x,{$width:n,$minWidth:i,$maxWidth:a,children:o})}))}},56419(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>x,metadata:()=>i,toc:()=>y});const i=JSON.parse('{"id":"component/layout/index","title":"Layout\u7ec4\u4ef6","description":"\u57fa\u7840\u533a\u5757\u5e03\u5c40\u7ec4\u4ef6\uff0c\u89e3\u51b3\u5c4f\u5e55\u5bbd\u5ea6\u81ea\u9002\u5e94","source":"@site/docs/component/layout/index.mdx","sourceDirName":"component/layout","slug":"/component/layout/","permalink":"/jelper/docs/component/layout/","draft":false,"unlisted":false,"editUrl":"https://github.com/apathyjade/jelper/tree/master/packages/docs/component/layout/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Layout\u7ec4\u4ef6","order":10},"sidebar":"tutorialSidebar","previous":{"title":"Col\u7ec4\u4ef6","permalink":"/jelper/docs/component/column/"},"next":{"title":"Row \u7ec4\u4ef6","permalink":"/jelper/docs/component/row/"}}');var a=n(71137),o=n(99868),r=n(60799),d=n(56374),l=n(47347);const s="\u57fa\u7840\u7528\u6cd5",c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.PE,{style:{background:"#e9e1e3"},$maxWidth:"1920px",$sideSpace:"64px",children:(0,a.jsx)("div",{style:{background:"#a1a1fb",height:"64px"}})})}),p="\u6700\u5c0f\u5bbd\u5ea6",h=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.PE,{style:{background:"#e9e1e3"},$minWidth:"1024px",$sideSpace:"64px",children:(0,a.jsx)("div",{style:{background:"#a1a1fb",height:"64px"}})})});var $=n(44310);const x={title:"Layout\u7ec4\u4ef6",order:10},u=void 0,m={},y=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:3},{value:"title",id:"title",level:4},{value:"minTitle",id:"mintitle",level:4},{value:"API",id:"api",level:3}];function f(e){const t={h3:"h3",h4:"h4",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"\u57fa\u7840\u533a\u5757\u5e03\u5c40\u7ec4\u4ef6\uff0c\u89e3\u51b3\u5c4f\u5e55\u5bbd\u5ea6\u81ea\u9002\u5e94"}),"\n","\n","\n",(0,a.jsx)(t.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,a.jsx)($.A,{name:"@jelper/component"}),"\n",(0,a.jsx)(t.h3,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,a.jsx)(t.h4,{id:"title",children:s}),"\n",(0,a.jsx)(d.A,{title:s,desc:"\u4e3b\u4f53\u81ea\u9002\u5e94\uff0c\u4e24\u4fa7\u56fa\u5b9a\u6700\u5c0f\u95f4\u8ddd",text:"import { Layout } from '@jelper/component';\n\nexport const title = '\u57fa\u7840\u7528\u6cd5';\nexport const desc = '\u4e3b\u4f53\u81ea\u9002\u5e94\uff0c\u4e24\u4fa7\u56fa\u5b9a\u6700\u5c0f\u95f4\u8ddd';\n\nexport default () => (\n  <>\n    <Layout\n      style={{ background: '#e9e1e3' }}\n      $maxWidth=\"1920px\"\n      $sideSpace=\"64px\"\n    >\n      <div style={{ background: '#a1a1fb', height: '64px' }} />\n    </Layout>\n  </>\n);\n",children:(0,a.jsx)(c,{})}),"\n",(0,a.jsx)(t.h4,{id:"mintitle",children:p}),"\n",(0,a.jsx)(d.A,{title:p,desc:"\u4e3b\u4f53\u8bbe\u7f6e\u6700\u5c0f\u5bbd\u5ea6\uff0c\u8d85\u51fa\u6eda\u52a8",text:"import { Layout } from '@jelper/component';\n\nexport const title = '\u6700\u5c0f\u5bbd\u5ea6';\nexport const desc = '\u4e3b\u4f53\u8bbe\u7f6e\u6700\u5c0f\u5bbd\u5ea6\uff0c\u8d85\u51fa\u6eda\u52a8';\n\nexport default () => (\n  <>\n    <Layout\n      style={{ background: '#e9e1e3' }}\n      $minWidth=\"1024px\"\n      $sideSpace=\"64px\"\n    >\n      <div style={{ background: '#a1a1fb', height: '64px' }} />\n    </Layout>\n  </>\n);\n",children:(0,a.jsx)(h,{})}),"\n",(0,a.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,a.jsx)(r.A,{dataSource:[{param:"$sideSpace",desc:"\u4e24\u4fa7\u56fa\u5b9a\u5bb9\u5668\u6700\u5c0f\u95f4\u8ddd",type:"string",defValue:"--",version:""},{param:"$width",desc:"\u4e3b\u4f53\u56fa\u5b9a\u5bbd\u5ea6",type:"string",defValue:"--",version:""},{param:"$minWidth",desc:"\u4e3b\u4f53\u6700\u5c0f\u5bbd\u5ea6",type:"string",defValue:"--",version:""},{param:"$maxWidth",desc:"\u4e3b\u4f53\u6700\u5927\u5bbd\u5ea6",type:"string",defValue:"--",version:""}]})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);