"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1437],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(t),k=l,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return t?a.createElement(c,o(o({ref:n},d),{},{components:t})):a.createElement(c,o({ref:n},d))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=u;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31536:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(80102),l=t(83117),i=t(67294),o=t(10209),r=t(59766),p=t(94780),s=t(34867);const d=(0,t(70182).ZP)();var m=t(29628),u=t(39707),k=t(66500),c=t(95408),h=t(98700),g=t(85893);const N=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,k.Z)(),v=d("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function y(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:b})}function I(e,n){const t=i.Children.toArray(e).filter(Boolean);return t.reduce(((e,a,l)=>(e.push(a),l<t.length-1&&e.push(i.cloneElement(n,{key:`separator-${l}`})),e)),[])}const f=({ownerState:e,theme:n})=>{let t=(0,l.Z)({display:"flex",flexDirection:"column"},(0,c.k9)({theme:n},(0,c.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,h.hB)(n),l=Object.keys(n.breakpoints.values).reduce(((n,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(n[t]=!0),n)),{}),i=(0,c.P$)({values:e.direction,base:l}),o=(0,c.P$)({values:e.spacing,base:l});"object"==typeof i&&Object.keys(i).forEach(((e,n,t)=>{if(!i[e]){const a=n>0?i[t[n-1]]:"column";i[e]=a}}));const p=(n,t)=>{return e.useFlexGap?{gap:(0,h.NA)(a,n)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${l=t?i[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[l]}`]:(0,h.NA)(a,n)}};var l};t=(0,r.Z)(t,(0,c.k9)({theme:n},o,p))}return t=(0,c.dt)(n.breakpoints,t),t};var C=t(90948),T=t(71657);const w=function(e={}){const{createStyledComponent:n=v,useThemeProps:t=y,componentName:r="MuiStack"}=e,d=n(f),m=i.forwardRef((function(e,n){const i=t(e),m=(0,u.Z)(i),{component:k="div",direction:c="column",spacing:h=0,divider:b,children:v,className:y,useFlexGap:f=!1}=m,C=(0,a.Z)(m,N),T={direction:c,spacing:h,useFlexGap:f},w=(0,p.Z)({root:["root"]},(e=>(0,s.Z)(r,e)),{});return(0,g.jsx)(d,(0,l.Z)({as:k,ownerState:T,ref:n,className:(0,o.Z)(w.root,y)},C,{children:b?I(v,b):v}))}));return m}({createStyledComponent:(0,C.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>(0,T.Z)({props:e,name:"MuiStack"})}),x=w},20036:(e,n,t)=>{t.d(n,{k:()=>b});var a=t(52263),l=t(94054),i=t(33841),o=t(23599),r=t(90629),p=t(43246),s=t(31536),d=t(61903),m=t(50657),u=t(37645),k=t(6514),c=t(31425),h=t(58951),g=t(83321),N=t(67294);const b=(0,N.memo)((()=>{const[e,n]=(0,N.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),t=(0,N.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),b=(0,N.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),v=(0,N.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),y=(0,N.useCallback)((e=>{let t;const a=e.target.value;t="string"==typeof a?parseInt(a):a,-1===t&&(t=void 0),n((e=>({...e,storeId:t})))}),[]),I=(0,N.useCallback)((e=>{let t=[];console.log(e.target.value);const a=e.target.value;t="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,n((e=>({...e,authorIds:t})))}),[]),{i18n:f}=(0,a.Z)(),C=(0,N.useMemo)((()=>"zh"==f.currentLocale||"zh_cn"==f.currentLocale||"zh_CN"==f.currentLocale),[f.currentLocale]),[T,w]=(0,N.useState)(!1),x=(0,N.useCallback)((()=>{w(!0)}),[]),O=(0,N.useCallback)((()=>{w(!1)}),[]);return N.createElement(r.Z,{elevation:3,style:{padding:"1.5rem",width:500}},N.createElement(s.Z,{spacing:2},N.createElement("h1",null,"Book Form"),N.createElement(d.Z,{label:"Name",value:e.name,onChange:t,error:""===e.name,helperText:""===e.name?"Name is required":""}),N.createElement(d.Z,{label:"Edition",type:"number",value:e.edition,onChange:b}),N.createElement(d.Z,{label:"Price",type:"number",value:e.price,onChange:v}),N.createElement(l.Z,{fullWidth:!0},N.createElement(i.Z,{id:"store-select-label"},"Store"),N.createElement(p.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:y},N.createElement(o.Z,{value:-1},"--NONE--"),N.createElement(o.Z,{value:1},"O'REILLY"),N.createElement(o.Z,{value:2},"MANNING"))),N.createElement(l.Z,{fullWidth:!0},N.createElement(i.Z,{id:"author-multi-select-label"},"Authors"),N.createElement(p.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:I},N.createElement(o.Z,{value:1},"Eve Procello"),N.createElement(o.Z,{value:2},"Alex Banks"),N.createElement(o.Z,{value:3},"Dan Vanderkam"),N.createElement(o.Z,{value:4},"Boris Cherny"),N.createElement(o.Z,{value:5},"Samer Buna"))),N.createElement(l.Z,null,N.createElement(g.Z,{onClick:x,variant:"contained"},C?"\u63d0\u4ea4":"Submit"))),N.createElement(m.Z,{open:T,onClose:O},N.createElement(u.Z,null,C?"\u4fe1\u606f":"Info"),N.createElement(k.Z,null,N.createElement(h.Z,null,C?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),N.createElement(c.Z,null,N.createElement(g.Z,{onClick:O},"\u5173\u95ed"))))}))},38088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=t(83117),l=(t(67294),t(3905)),i=t(65488),o=t(85162),r=t(20036);const p={sidebar_position:1,title:"IdView"},s=void 0,d={unversionedId:"mapping/advanced/view/id-view",id:"mapping/advanced/view/id-view",title:"IdView",description:"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/view/id-view.mdx",sourceDirName:"mapping/advanced/view",slug:"/mapping/advanced/view/id-view",permalink:"/jimmer-doc/zh/docs/mapping/advanced/view/id-view",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/view/id-view.mdx",tags:[],version:"current",lastUpdatedAt:1729445762,formattedLastUpdatedAt:"2024\u5e7410\u670820\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"IdView"},sidebar:"tutorialSidebar",previous:{title:"\u89c6\u56fe\u5c5e\u6027",permalink:"/jimmer-doc/zh/docs/mapping/advanced/view/"},next:{title:"ManyToManyView",permalink:"/jimmer-doc/zh/docs/mapping/advanced/view/many-to-many-view"}},m={},u=[{value:"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054",id:"\u57fa\u672c\u6982\u5ff5\u77ed\u5173\u8054",level:2},{value:"Microsoft\u7684\u89e3\u51b3\u65b9\u6848",id:"microsoft\u7684\u89e3\u51b3\u65b9\u6848",level:2},{value:"IdView\u5c5e\u6027",id:"idview\u5c5e\u6027",level:2},{value:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027",id:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027",level:3},{value:"\u89c6\u56fe\u7684\u672c\u8d28",id:"\u89c6\u56fe\u7684\u672c\u8d28",level:3},{value:"\u6293\u53d6IdView\u5c5e\u6027",id:"\u6293\u53d6idview\u5c5e\u6027",level:2},{value:"\u8bf7\u52ff\u6ee5\u7528",id:"\u8bf7\u52ff\u6ee5\u7528",level:2}],k={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5\u77ed\u5173\u8054"},"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054"),(0,l.kt)("p",null,"\u5728\u4ecb\u7ecdId\u89c6\u56fe\u4e4b\u524d\uff0c\u6211\u4eec\u8981\u5148\u4ecb\u7ecd\u4e00\u4e2a\u6982\u5ff5\uff1a\u77ed\u5173\u8054\u3002"),(0,l.kt)("p",null,"\u5728\u4ecb\u7ecd\u77ed\u5173\u8054\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u770b\u4e00\u770b\u666e\u901a\u5173\u8054"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .store(\n            Fetchers.BOOK_STORE_FETCHER\n                .allScalarFields()\n        )\n        // highlight-next-line\n        .authors(\n            Fetchers.AUTHOR_FETCHER\n                .firstName()\n                .lastName()\n        )\n);\nSystem.out.println(book);\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store {\n            allScalarFields()\n        }\n        // highlight-next-line\n        authors {\n            firstName()\n            lastName()\n        }\n    }\n);\nSystem.out.println(book);\n")))),(0,l.kt)("p",null,"\u4ee3\u7801\u4e2d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5173\u8054\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u5173\u8054\u6293\u53d6\u5173\u8054\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"li"},"BookStore"),"\uff0c\u5e76\u671f\u671b\u83b7\u5f97\u5173\u8054\u5bf9\u8c61\u7684\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5173\u8054\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"li"},"Book.authors"),"\u5173\u8054\u6293\u53d6\u5173\u8054\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"li"},"Author"),"\uff0c\u5e76\u671f\u671b\u83b7\u5f97\u5173\u8054\u5bf9\u8c61\u7684\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"id"),"(\u9690\u542b+\u5f3a\u5236)\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"lastName"))),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "store":{\n        "id":1,\n        "name":"O\'REILLY",\n        "website":null\n    },\n    // highlight-next-line\n    "authors":[\n        {\n            "id":2,\n            "firstName":"Alex",\n            "lastName":"Banks"\n        },\n        {\n            "id":1,\n            "firstName":"Eve",\n            "lastName":"Procello"\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u805a\u5408\u6839\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u4e0a\u7684\u5173\u8054\u5bf9\u8c61\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\uff0c\u5177\u5907\u9664\u4e86id\u4ee5\u5916\u7684\u5176\u4ed6\u5c5e\u6027\uff0c\u5177\u6709\u76f8\u5bf9\u5b8c\u5584\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u66f4\u91cd\u8981\u7684\u662f\uff0c\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u5f53\u7136\u4e5f\u5305\u62ec\u5173\u8054\u5c5e\u6027\uff0c\u6240\u4ee5\u6b64\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u591a\u5c42\u5d4c\u5957\u751a\u81f3\u9012\u5f52\uff0c\u8fd9\u79cd\u5173\u8054\u4e5f\u53ef\u4ee5\u53eb\u505a\u201c\u957f\u5173\u8054\u201d\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u5e76\u975e\u6240\u6709\u65f6\u5019\u90fd\u9700\u8981\u5c42\u6b21\u5f88\u6df1\u7684\u6570\u636e\u7ed3\u6784\u3002\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6709\u65f6\u9700\u8981\u7684\u53ea\u662f\u4e00\u79cd\u975e\u5e38\u7b80\u5355\u7684\u754c\u9762\uff0c\u5982\u4e0b")),(0,l.kt)(r.k,{mdxType:"ShortAssociation"}),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u754c\u9762\u4e2d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u662f\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u5728\u754c\u9762\u4e0a\u4f53\u73b0\u4e3a\u5355\u9009\u4e0b\u62c9\u6846"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Book.authors"),"\u662f\u591a\u5bf9\u591a\u5173\u8054\uff0c\u5728\u754c\u9762\u4e0a\u4f53\u73b0\u4e3a\u591a\u9009\u4e0b\u62c9\u6846")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\u5f53\u7136\uff0c\u5982\u679c\u5019\u9009\u6570\u636e\u5f88\u591a\uff0c\u4e0b\u62c9\u5217\u8868\u4e0d\u518d\u662f\u5408\u7406\u7684\u8bbe\u8ba1\uff0c\u8fd9\u65f6\uff0c\u6539\u8fdb\u4e3a\u5f39\u51fa\u5bf9\u8bdd\u6846\u5e76\u5728\u5bf9\u8bdd\u6846\u4e2d\u4f7f\u7528\u5206\u9875\u3002\u4f46\uff0c\u8fd9\u4e9bUI\u7ec6\u8282\u4e0d\u91cd\u8981\uff0c\u548c\u73b0\u6709\u8bdd\u9898\u65e0\u5173\u3002"))),(0,l.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u8fd9\u65f6\uff0c\u7528\u6237\u53ea\u5173\u6ce8\u5173\u8054\u5bf9\u8c61\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u5bf9\u5173\u8054\u5bf9\u8c61\u7684\u5176\u4ed6\u5c5e\u6027\u6ca1\u6709\u5174\u8da3\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5373, \u5e0c\u671b\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027")),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u805a\u5408\u6839\u6302\u4e0a\u4e00\u4e9b\u53ea\u6709id\u7684\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u6539\u8fdb\u4ee3\u7801\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .store() //\u65e0\u53c2\u6570\u8868\u793aid only\n        // highlight-next-line\n        .authors() //\u65e0\u53c2\u6570\u8868\u793aid only\n);\nSystem.out.println(book);\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store() //\u65e0\u53c2\u6570\u8868\u793aid only\n        // highlight-next-line\n        authors() //\u65e0\u53c2\u6570\u8868\u793aid only\n    }\n);\nSystem.out.println(book);\n")))),(0,l.kt)("p",null,"\u8fd9\u6b21\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u8fd9\u6837\u7684\u6570\u636e\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    "store":{\n        // \u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        "id":1\n    },\n    "authors":[\n        {\n            // \u53ea\u6709id\u5c5e\u6027\n            // highlight-next-line\n            "id":1\n        },\n        {\n            // \u53ea\u6709id\u5c5e\u6027\n            // highlight-next-line\n            "id":2\n        }\n    ]\n}\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5728Hibernate\u4e2d\uff0c\u8fd9\u79cd\u53ea\u6709id\u5c5e\u6027\u7684\u5bf9\u8c61\u88ab\u79f0\u4e3a\u4ee3\u7406\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u5e76\u6ca1\u6709\u5173\u8054id\u90a3\u4e48\u7b80\u5355\u3002\u8ba9\u540c\u6837\u7684\u7684\u6570\u636e\u7528\u5173\u8054id\u800c\u975e\u5173\u8054\u5bf9\u8c61\u6765\u8868\u8fbe\u7684\u6837\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n')),(0,l.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u5bf9\u4e8e\u77ed\u5173\u8054\u4e1a\u52a1\u800c\u8a00\uff0c\u5173\u8054id\u6216\u5176\u96c6\u5408\u6bd4\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\u6216\u5176\u96c6\u5408\u7b80\u5355\u3002"),(0,l.kt)("h2",{id:"microsoft\u7684\u89e3\u51b3\u65b9\u6848"},"Microsoft\u7684\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core"),"\u662fMicrosoft\u7684ORM\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u770b\u5176\u8bbe\u8ba1: ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key"},"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="\u8fd9\u6bb5C#\u4ee3\u7801\u4ece\u4e0a\u9762\u7684\u94fe\u63a5\u7684\u9875\u9762\u590d\u5236"',title:'"\u8fd9\u6bb5C#\u4ee3\u7801\u4ece\u4e0a\u9762\u7684\u94fe\u63a5\u7684\u9875\u9762\u590d\u5236"'},"public class Post\n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    // highlight-start\n    public int BlogId { get; set; }\n    public Blog Blog { get; set; }\n    // highlight-end\n}\n")),(0,l.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054\u5bf9\u8c61: ",(0,l.kt)("inlineCode",{parentName:"li"},"public Blog Blog { get; set; }")),(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054id: ",(0,l.kt)("inlineCode",{parentName:"li"},"public int BlogId { get; set; }"))),(0,l.kt)("p",null,"\u4e8c\u8005\u5e76\u5b58\u3002"),(0,l.kt)("p",null,"Jimmer\u501f\u9274",(0,l.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core"),"\u8fd9\u79cd\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\u3002"),(0,l.kt)("h2",{id:"idview\u5c5e\u6027"},"IdView\u5c5e\u6027"),(0,l.kt)("h3",{id:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027"},"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027"),(0,l.kt)("p",null,"IdView\u5c5e\u6027\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.IdView"),"\u58f0\u660e"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    Long storeId();\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    List<Long> authorIds();\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Auhtor>\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    val storeId: Long?\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    val authorIds: List<Long>\n}\n')))),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Book.storeId"),": \u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"storeId"),"\u672c\u8eab\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"Id"),"\u7ed3\u5c3e\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u6ce8\u89e3\u7684\u53c2\u6570\uff0cJimmer\u8ba4\u4e3a\u8be5\u89c6\u56fe\u5c5e\u6027\u7684\u539f\u59cb\u5173\u8054\u5c5e\u6027\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548cIdView\u5c5e\u6027\u7684\u53ef\u7a7a\u6027\u5fc5\u987b\u4e00\u81f4\u3002"),(0,l.kt)("p",{parentName:"li"},"  \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5c5e\u6027\u53ef\u4ee5\u4e3anull\uff0c\u5373\uff0cJava\u7248\u672c\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"@Nullable\u4fee\u9970"),"\uff0cKotlin\u7248\u672c\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore?"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"  \u56e0\u6b64\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Book.storeId"),"\u4e5f\u5fc5\u987b\u53ef\u4ee5\u4e3anull\uff0c\u5373\uff0cJava\u7248\u672c\u8fd4\u56de\u5fc5\u987b\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"Long"),"\u800c\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"long"),"\uff0cKotlin\u7248\u672c\u5fc5\u987b\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"Long?"),"\u800c\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"Long"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"  \u5426\u5219\uff0c\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),": \u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u5bf9\u8c61\u96c6\u5408\u4e2d\uff0c\u6240\u6709Auhtor\u5bf9\u8c61\u7684id\u5f62\u6210\u7684\u89c6\u56fe\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"authorIds"),"\u672c\u8eab\u4e0d\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"Id"),"\u7ed3\u5c3e\uff0c\u5fc5\u987b\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u6ce8\u89e3\u7684\u53c2\u6570\uff0c\u660e\u786e\u8868\u793a\u5176\u539f\u59cb\u5173\u8054\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u3002"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\u82f1\u6587\u5b58\u5728\u4e0d\u89c4\u5219\u540d\u8bcd\u590d\u6570\u53d8\u5f62\u7684\u95ee\u9898\u3002")))),(0,l.kt)("h3",{id:"\u89c6\u56fe\u7684\u672c\u8d28"},"\u89c6\u56fe\u7684\u672c\u8d28"),(0,l.kt)("p",null,"\u4e0a\u6587\u53cd\u590d\u5f3a\u8c03",(0,l.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe"),"\u4e8c\u5b57\u662f\u6709\u539f\u56e0\u7684\u3002IdView\u5c5e\u6027\u5e76\u6ca1\u6709\u81ea\u5df1\u7684\u6570\u636e\uff0c\u5b83\u53ea\u662f\u539f\u59cb\u5173\u8054\u5c5e\u6027\u7684\u89c6\u56fe\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"IdView\u5c5e\u6027\u548c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u662f\u8054\u52a8\u7684\uff0c\u8bbe\u7f6e\u4e00\u4e2a\uff0c\u5fc5\u7136\u5f71\u54cd\u53e6\u5916\u4e00\u4e2a\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\uff0c\u5f71\u54cd\u539f\u59cb\u5c5e\u6027:"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// \u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\nBook book = Immutables.createBook(draft -> {\n    draft.setStoreId(10L);\n    draft.setAuthorIds(Arrays.asList(100L, 101L));\n});\n\n// \u6253\u5370\u539f\u59cb\u5c5e\u6027\nSystem.out.println("Store: " + book.store());\nSystem.out.println("Authors:" + book.authors());\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\nval book = new(Book::class).by {\n    storeId = 10L\n    authorIds = listOf(100L, 101L)\n}\n\n// \u6253\u5370\u539f\u59cb\u5c5e\u6027\nprintln("Store: $book.store}")\nprintln("Authors: ${book.authors}")\n')))),(0,l.kt)("p",{parentName:"li"},"\u6253\u5370\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'Store: {"id":10}\nAuthors: [{"id":100},{"id":101}]\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\uff0c\u5f71\u54cd\u89c6\u56fe\u5c5e\u6027:"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// \u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\nBook book = Immutables.createBook(draft -> {\n    draft.applyStore(store -> {\n        store.setId(10L).storeName("TURING")\n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Fabrice");\n        author.setLastName("Marguerie");\n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Steve");\n        author.setLastName("Eichert"); \n    });\n});\n\n// \u6253\u5370\u89c6\u56fe\u5c5e\u6027\nSystem.out.println("StoreId: " + book.storeId());\nSystem.out.println("AuthorIds:" + book.authorIds());\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\nval book = new(Book::class).by {\n    store {\n        id = 10L\n        name = "TURING"\n    }\n    authors().addBy {\n        id = 101L;\n        firstName = "Fabrice"\n        lastName = "Marguerie"\n    }\n    authors().addBy {\n        id = 101L\n        firstName = "Steve"\n        lastName = "Eichert" \n    }\n}\n\n// \u6253\u5370\u89c6\u56fe\u5c5e\u6027\nprintln("Store: $book.storeId}")\nprintln("Authors: ${book.authorIds}")\n')))),(0,l.kt)("p",{parentName:"li"},"\u6253\u5370\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"StoreId: 10\nAuthorIds: [100, 101]\n")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u8bf4\u660e\u89c6\u56fe\u5c5e\u6027\u548c\u539f\u59cb\u5c5e\u6027\u662f\u9ad8\u5ea6\u7edf\u4e00\u7684\uff0cJimmer\u4ecd\u7136\u662f\u4ee5\u5173\u8054\u5bf9\u8c61\u4e3a\u6838\u5fc3\u7684ORM\u6846\u67b6\uff0c\u89c6\u56fe\u5c5e\u6027\u4ec5\u4ec5\u662f\u4e00\u79cd\u8bed\u6cd5\u7cd6\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u63a5\u4e0b\u6765\u8981\u8bb2\u89e3\u7684\u89c6\u56fe\u5c5e\u6027\u5bf9",(0,l.kt)("a",{parentName:"p",href:"../../../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u7684\u5f71\u54cd\u5916\uff0c\u89c6\u56fe\u5c5e\u6027\u5bf9ORM\u548c\u6838\u5fc3\u903b\u8f91\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u5f71\u54cd\u3002")),(0,l.kt)("h2",{id:"\u6293\u53d6idview\u5c5e\u6027"},"\u6293\u53d6IdView\u5c5e\u6027"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .storeId()\n        // highlight-next-line\n        .authorIds()\n);\nSystem.out.println(book);\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        storeId()\n        // highlight-next-line\n        authorIds()\n    }\n);\nSystem.out.println(book);\n")))),(0,l.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5bf9Jimmer\u52a8\u6001\u5b9e\u4f53\u800c\u8a00\uff0c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7edd\u5bf9\u4e00\u81f4\uff0c\u8981\u4e48\u90fd\u53ef\u4ee5\u8bbf\u95ee\uff0c\u8981\u4e48\u90fd\u7f3a\u5931\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u9009\u62e9\u6293\u53d6\u539f\u59cb\u5173\u8054\u5c5e\u6027\uff0c\u8fd8\u662f\u9009\u62e9\u6293\u53d6IdView\u89c6\u56fe\u5c5e\u6027\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cdJimmer\u5e95\u5c42\u6267\u884c\u903b\u8f91\uff0c\u5f53\u7136\u5305\u62ec\u6700\u7ec8\u751f\u6210\u7684SQL\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u9009\u62e9\u5e26\u6765\u5dee\u5f02\u53ea\u6709\u4e00\u4e2a\uff0c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7684Jackson",(0,l.kt)("a",{parentName:"p",href:"../../../object/visibility"},"\u53ef\u89c1\u6027\u6807\u5fd7"),"\u4e0d\u540c\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5373\uff0c\u4f7f\u7528Jackson\u5e8f\u5217\u5316\u65f6\uff0c\u88ab\u76f4\u63a5\u6293\u53d6\u7684\u5c5e\u6027\u4f1a\u88ab\u5e8f\u5217\u5316\uff0c\u672a\u88ab\u76f4\u63a5\u6293\u53d6\u7684\u5c5e\u6027\u4f1a\u88ab\u5ffd\u7565\u3002")),(0,l.kt)("h2",{id:"\u8bf7\u52ff\u6ee5\u7528"},"\u8bf7\u52ff\u6ee5\u7528"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0d\u501f\u52a9DTO\uff0c\u5e0c\u671b\u5b9e\u4f53\u672c\u8eab\u80fd\u8868\u8fbe\u5173\u8054id\uff0c\u662f\u552f\u4e00\u9002\u5408\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u7684\u573a\u666f\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5176\u4ed6\u529f\u80fd\u5e76\u4e0d\u5bf9\u5173\u8054\u5c5e\u6027\u662f\u5426\u6709\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\u505a\u4efb\u4f55\u5047\u8bbe\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728SQL DSL\u4e2d\u4f7f\u7528\u5173\u8054id"),(0,l.kt)("p",{parentName:"li"},"\u5373\u4f7f\u5b9e\u4f53\u7684\u67d0\u4e2a\u4e00\u5bf9\u4e00\u6216\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027\u6ca1\u6709\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\uff0c\u4e5f\u53ef\u4ee5\u5728SQL DSL\u4e2d\u4f7f\u7528\u5173\u8054id\u8868\u8fbe\u5f0f\uff0c\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"where(table.storeId().eq(2L));\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"where(table.storeId eq 2L)\n")))),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5f53\u7136\uff0c\u5982\u679c\u4f60\u5bf9SQL DSL\u81ea\u52a8\u751f\u6210\u7684\u5173\u8054id\u540d\u79f0 ",(0,l.kt)("em",{parentName:"p"},"(\u6bd4\u5982\uff0c\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"storeId"),")")," \u5e76\u4e0d\u6ee1\u610f\uff0c\u5c31\u53ef\u4ee5\u63d0\u4f9b",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\u6539\u53d8\u5176\u540d\u79f0\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728DTO\u8bed\u8a00\u4e2d\u4f7f\u7528\u5173\u8054id"),(0,l.kt)("p",{parentName:"li"},"DTO\u8bed\u8a00\u6839\u672c\u4e0d\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\u3002\u5373\u4f7f\u5b9e\u4f53\u7684\u67d0\u4e2a\u5173\u8054\u5c5e\u6027\u5df2\u7ecf\u5177\u5907\u4e86\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\uff0c\u4e5f\u4e0d\u5efa\u8bae\u5728DTO\u8bed\u8a00\u4e2d\u4f7f\u7528\u5b83\uff0c\u56e0\u4e3a\u8fd9\u662f\u4e00\u4e2a\u8106\u5f31\u7684\u5047\u8bbe\uff0c\u4e00\u65e6\u90a3\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\u88ab\u5220\u9664\uff0cDTO\u4ee3\u7801\u5728\u540c\u6b65\u4fee\u6539\u524d\u65e0\u6cd5\u88ab\u6b63\u786e\u7f16\u8bd1\u3002"),(0,l.kt)("p",{parentName:"li"},"DTO\u8bed\u8a00\u5e94\u8be5\u76f4\u63a5\u4f7f\u7528\u5173\u8054\u5c5e\u6027\uff0c\u4f8b\u5982"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export yourpackage.Book\n    -> package yourpackage.dto\n\ninput BookInput {\n    allScalarFields()\n    #highlight-next-line\n    id(store) // as storeId\n    #highlight-next-line\n    id(authors) as authorIds\n}\n\nspecification BookSpecication {\n    like/i(name)\n    #highlight-next-line\n    associatedIdIn(store) as storeIds\n    #highlight-next-line\n    associatedIdNotIn(store) as excludedStoreIds\n}\n")))))}c.isMDXComponent=!0}}]);