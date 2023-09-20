"use strict";(self.webpackChunk_jelper_website=self.webpackChunk_jelper_website||[]).push([[918],{2547:function(e,t,n){n.r(t),n.d(t,{default:function(){return ve}});var a=n(6393),l=n(6139),r=n(2779);const i=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(i.Provider,{value:l},t)}function o(){const e=(0,a.useContext)(i);if(null===e)throw new r.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:n}=o();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(5881),m=n(1425),u=n(5442),v=n(3249),f=n(2873);function h(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){const{metadata:e}=o();return a.createElement(h,{previous:e.previous,next:e.next})}var b=n(1901),E=n(5017),g=n(2670),L=n(8201),N=n(7857),_=n(1021);const Z={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=Z[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.Z,{to:n,onClick:l},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,b.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,N.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:o}=(0,g.Jo)(r),c=s??(m=o).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(k,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:o.label,to:c.path,onClick:()=>i(o.name)})))}function T(e){let{className:t}=e;const n=(0,_.E)();return n.banner?a.createElement(x,{className:t,versionMetadata:n}):null}function U(e){let{className:t}=e;const n=(0,_.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function H(e){let{lastUpdatedBy:t}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(H,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(7450),M=n(1677),B="lastUpdated_WnnU";function I(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",B)},(n||l)&&a.createElement(w,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function O(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:i}=e,s=i.length>0,c=!!(t||n||r);return s||c?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(I,{tags:i}),c&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=n(2154),S=n(9070),R="tocCollapsibleButton_lJFW",D="tocCollapsibleButtonExpanded_v0ZM";function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",R,!t&&D,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var F="tocCollapsible_X575",q="tocCollapsibleContent_LVO6",J="tocCollapsibleExpanded_y5Ah";function W(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:i,toggleCollapsed:s}=(0,P.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(F,!i&&J,n)},a.createElement(z,{collapsed:i,onClick:s}),a.createElement(P.z,{lazy:!0,className:q,collapsed:i},a.createElement(S.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}var j="tocMobile_RZJG";function $(){const{toc:e,frontMatter:t}=o();return a.createElement(W,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,j)})}var G=n(8661);function X(){const{toc:e,frontMatter:t}=o();return a.createElement(G.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var Y=n(5145),K=n(2816);function Q(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=o();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(Y.Z,{as:"h1"},n)),a.createElement(K.Z,null,t))}var ee=n(322),te=n(969),ne=n(8718);function ae(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var le="breadcrumbHomeIcon_wBy3";function re(){const e=(0,ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ae,{className:le})))}var ie="breadcrumbsContainer_hiYu";function se(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(E.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function oe(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,ie),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(re,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(oe,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(se,{href:t.href,isLast:l},t.label))})))):null}var de="docItemContainer_ZEEd",me="docItemCol_rz7Z";function ue(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=o(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement($,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(X,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&me)},a.createElement(T,null),a.createElement("div",{className:de},a.createElement("article",null,a.createElement(ce,null),a.createElement(U,null),n.mobile,a.createElement(Q,null,t),a.createElement(O,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ve(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(c,null),a.createElement(ue,null,a.createElement(n,null))))}},7450:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(6393),l=n(3249),r=n(8201),i=n(5442),s=n(5881),o="iconEdit_obW5";function c(e){let{className:t,...n}=e;return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(c,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2873:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(6393),l=n(5881),r=n(5017);function i(e){const{permalink:t,title:n,subLabel:i,isNext:s}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}},8661:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5442),l=n(6393),r=n(5881),i=n(9070),s="tableOfContents_jlzR";function o(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(i.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},9070:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(5442),l=n(6393),r=n(1830);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=c(s,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var v=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const h=(0,r.L)(),p=d??h.tableOfContents.minHeadingLevel,b=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:b});return m((0,l.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:b}}),[o,c,p,b])),l.createElement(v,(0,a.Z)({toc:E,className:n,linkClassName:o},f))}},966:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(6393),l=n(5881),r=n(5017),i="tag_A1Jp",s="tagRegular_TXWd",o="tagWithCount_uBhi";function c(e){let{permalink:t,label:n,count:c}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(i,c?o:s)},n,c&&a.createElement("span",null,c))}},1677:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(6393),l=n(5881),r=n(3249),i=n(966),s="tags_Tx9V",o="tag_fbl1";function c(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:o},a.createElement(i.Z,{label:t,permalink:n}))}))))}},1021:function(e,t,n){n.d(t,{E:function(){return s},q:function(){return i}});var a=n(6393),l=n(2779);const r=a.createContext(null);function i(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);