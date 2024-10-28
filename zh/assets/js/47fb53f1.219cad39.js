"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2011],{54466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const o={sidebar_position:11,title:"\u5168\u5c40\u8fc7\u6ee4\u5668"},s=void 0,a={id:"query/global-filter/index",title:"\u5168\u5c40\u8fc7\u6ee4\u5668",description:"\u5168\u5c40\u8fc7\u6ee4\u5668\u7528\u4e8e\u4e3a\u81ea\u52a8\u67d0\u4e9b\u5b9e\u4f53\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\uff0c\u7edd\u5927\u90e8\u5206\u9488\u5bf9\u8fd9\u4e9b\u5b9e\u4f53\u7c7b\u578b\u7684\u67e5\u8be2\u90fd\u4f1a\u88ab\u81ea\u52a8\u6dfb\u52a0\u76f8\u5173where\u6761\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/global-filter/index.md",sourceDirName:"query/global-filter",slug:"/query/global-filter/",permalink:"/jimmer-doc/zh/docs/query/global-filter/",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/global-filter/index.md",tags:[],version:"current",lastUpdatedAt:1704015848e3,sidebarPosition:11,frontMatter:{sidebar_position:11,title:"\u5168\u5c40\u8fc7\u6ee4\u5668"},sidebar:"tutorialSidebar",previous:{title:"Native\u8868\u8fbe\u5f0f",permalink:"/jimmer-doc/zh/docs/query/native-sql"},next:{title:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",permalink:"/jimmer-doc/zh/docs/query/global-filter/user-filter"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u8fc7\u6ee4\u5668\u7528\u4e8e\u4e3a\u81ea\u52a8\u67d0\u4e9b\u5b9e\u4f53\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\uff0c\u7edd\u5927\u90e8\u5206\u9488\u5bf9\u8fd9\u4e9b\u5b9e\u4f53\u7c7b\u578b\u7684\u67e5\u8be2\u90fd\u4f1a\u88ab\u81ea\u52a8\u6dfb\u52a0\u76f8\u5173",(0,r.jsx)(n.code,{children:"where"}),"\u6761\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u529f\u80fd\u6709\u5982\u4e0b\u5e94\u7528\u573a\u666f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u591a\u89c6\u89d2\u6570\u636e\uff0c\u6570\u636e\u67e5\u8be2\u9700\u8981\u643a\u5e26\u7528\u6237\u8eab\u4efd\u76f8\u5173\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u5373\u4f7f\u9664\u7528\u6237\u8eab\u4efd\u4ee5\u5916\u7684\u6240\u6709\u67e5\u8be2\u53c2\u6570\u90fd\u76f8\u540c\uff0c\u4e0d\u540c\u7684\u7528\u6237\u4e5f\u4f1a\u770b\u5230\u4e0d\u540c\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u591a\u89c6\u89d2\u6570\u636e\u6709\u4e00\u4e2a\u5178\u578b\u7684\u6848\u4f8b\uff1a\u591a\u79df\u6237\u3002\u672c\u6587\u6863\u7528\u591a\u79df\u6237\u4f5c\u4e3a\u4f8b\u5b50\uff0c\u8bb2\u89e3\u7528\u6237\u81ea\u5b9a\u4e49\u5168\u5c40\u8fc7\u6ee4\u5668\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u903b\u8f91\u5220\u9664"}),"\n",(0,r.jsx)(n.p,{children:"\u903b\u8f91\u5220\u9664\u662fJimmer\u5185\u7f6e\u7684\u5168\u5c40\u8fc7\u6ee4\u5668\uff0c\u65e0\u9700\u7528\u6237\u5b9a\u4e49\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u6709Hibernate\u80cc\u666f\u77e5\u8bc6\u7684\u7528\u6237\u800c\u8a00\uff0c\u5168\u5c40\u8fc7\u6ee4\u5668\u548c",(0,r.jsx)(n.a,{href:"https://javadoc.io/static/org.hibernate/hibernate-core/5.4.13.Final/org/hibernate/annotations/Where.html",children:"org.hibernate.annotations.Where"}),"\u3001",(0,r.jsx)(n.a,{href:"https://javadoc.io/static/org.hibernate/hibernate-core/5.4.13.Final/org/hibernate/annotations/Filter.html",children:"org.hibernate.annotations.Filter"}),"\u4ee5\u53ca",(0,r.jsx)(n.a,{href:"https://javadoc.io/static/org.hibernate/hibernate-core/5.4.13.Final/org/hibernate/annotations/FilterDef.html",children:"org.hibernate.annotations.FilterDef"}),"\u7c7b\u4f3c\u3002"]}),(0,r.jsxs)(n.p,{children:["\u4e0d\u540c\u70b9\u5728\u4e8e\uff0cJimmer\u7684\u5168\u5c40\u8fc7\u6ee4\u5668\u5177\u6709\u7075\u6d3b\u7684\u6ce8\u518c\u65b9\u5f0f\uff0c\u5f88\u5bb9\u6613\u88abIOC\u6846\u67b6 ",(0,r.jsx)(n.em,{children:"(\u6bd4\u5982Spring)"})," \u7ba1\u7406\u3002"]}),(0,r.jsx)(n.p,{children:"\u8fd9\u6837\uff0c\u5168\u5c40\u8fc7\u6ee4\u5668\u53ef\u4ee5\u76f4\u63a5\u4eceIOC\u6846\u67b6\u4e2d\u83b7\u53d6\u53c2\u6570\uff0c\u6bd4\u5982\u7528\u6237\u8eab\u4efd\u4fe1\u606f\uff0c\u6240\u4ee5\uff0c\u5f00\u53d1\u4eba\u5458\u65e0\u9700\u5728\u67e5\u8be2\u524d\u4e3a\u8fc7\u6ee4\u5668\u4f20\u53c2\u3002"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);