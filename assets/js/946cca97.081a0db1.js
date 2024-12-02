"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[909,5969],{88835:(e,n,t)=>{t.d(n,{A:()=>S});var i=t(96540),r=t(74848);function a(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=n.filter((e=>e!==t)),o=t?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,r.jsx)(r.Fragment,{children:a}):null}}(e.children),a=e.title??n;return{...e,...a&&{title:a},children:t}}var o=t(18215),s=t(45122),l=t(79872);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,r.jsx)("div",{className:(0,o.A)(l.G.common.admonition,l.G.common.admonitionType(n),c.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,r.jsxs)("div",{className:c.admonitionHeading,children:[(0,r.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function h(e){let{children:n}=e;return n?(0,r.jsx)("div",{className:c.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:i,children:a,className:o}=e;return(0,r.jsxs)(d,{type:n,className:o,children:[i||t?(0,r.jsx)(u,{title:i,icon:t}):null,(0,r.jsx)(h,{children:a})]})}function p(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,r.jsx)(p,{}),title:(0,r.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,r.jsx)(m,{...f,...e,className:(0,o.A)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const b={icon:(0,r.jsx)(v,{}),title:(0,r.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,r.jsx)(m,{...b,...e,className:(0,o.A)("alert alert--success",e.className),children:e.children})}function g(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,r.jsx)(g,{}),title:(0,r.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,r.jsx)(m,{...y,...e,className:(0,o.A)("alert alert--info",e.className),children:e.children})}function w(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const T={icon:(0,r.jsx)(w,{}),title:(0,r.jsx)(s.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,r.jsx)(k,{}),title:(0,r.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const N={icon:(0,r.jsx)(w,{}),title:(0,r.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const I={...{note:x,tip:j,info:A,warning:function(e){return(0,r.jsx)(m,{...T,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(m,{...C,...e,className:(0,o.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(x,{title:"secondary",...e}),important:e=>(0,r.jsx)(A,{title:"important",...e}),success:e=>(0,r.jsx)(j,{title:"success",...e}),caution:function(e){return(0,r.jsx)(m,{...N,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})}}};function S(e){const n=a(e),t=(i=n.type,I[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),I.info));var i;return(0,r.jsx)(t,{...n})}},56778:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>A});var i=t(96540),r=t(18215),a=t(44319),o=t(56347),s=t(94280),l=t(73024),c=t(58417),d=t(44031);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),v=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(46916);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==i&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function A(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},38143:(e,n,t)=>{t.d(n,{$z:()=>c});var i=t(96540),r=t(37244),a=t(56778),o=(t(47389),t(37091)),s=(t(58226),t(88835)),l=t(74848);const c=(0,i.memo)((()=>(0,o.o)()?h:m)),d=t(94692).A,u=t(57095).A,h=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsx)("div",{style:{position:"relative",width:"100%",paddingTop:"56.25%"},children:(0,l.jsx)("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1W14y167x7&page=1&high_quality=1&danmaku=0",scrolling:"no",frameBorder:"no",allowFullScreen:!0,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}})})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)("div",{style:{position:"relative",width:"100%",paddingTop:"56.25%"},children:(0,l.jsx)("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1ic411F7hz&page=1&high_quality=1&danmaku=0",scrolling:"no",frameBorder:"no",allowFullScreen:!0,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}})})})]}),(0,l.jsxs)(s.A,{type:"info",children:["\u548cGraphQL\u6bd4\u8f83",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"GraphQL\u57fa\u4e8eHTTP\u670d\u52a1\uff0c\u8be5\u529f\u80fd\u53ea\u6709\u5728\u8de8\u8d8aHTTP\u670d\u52a1\u7684\u8fb9\u754c\u624d\u80fd\u5448\u73b0\uff1b\u800c\u5728Jimmer\u4e2d\uff0c\u8fd9\u662fORM\u7684\u57fa\u7840API\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u4ee3\u7801\u903b\u8f91\u4e2d\u4f7f\u7528\u6b64\u80fd\u529b\u3002"}),(0,l.jsx)("li",{children:"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u4e0d\u652f\u6301\u5bf9\u6df1\u5ea6\u65e0\u9650\u7684\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\uff1b\u800cJimmer\u652f\u6301\u3002"})]})]})]}),m=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsxs)("video",{width:"100%",controls:!0,children:[(0,l.jsx)("source",{src:d,type:"video/mp4"}),(0,l.jsx)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"},children:"Your browser does not support the video tag."})]})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsxs)("video",{width:"100%",controls:!0,children:[(0,l.jsx)("source",{src:u,type:"video/mp4"}),(0,l.jsx)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"},children:"Your browser does not support the video tag."})]})})]}),(0,l.jsxs)(s.A,{type:"info",children:["Compare to GraphQL",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"GraphQL is based on HTTP services, which can only be experienced if it crosses the boundaries of HTTP services. In Jimmer, this is the underlying API for ORM, and you can use this capability in any code logic."}),(0,l.jsx)("li",{children:"Until now, the GraphQL protocol does not support recursive queries on self-associated properties with infinite depth; And Jimmer supports"})]})]})]})},58226:(e,n,t)=>{t.d(n,{a:()=>f});var i=t(96540),r=t(72774),a=t(63051),o=t(28968),s=t(48875),l=t(44676),c=t(47859),d=t(4671),u=t(99343),h=t(7324),m=t(39781),p=t(74848);const f=(0,i.memo)((e=>{let{open:n,fullScreen:t=!1,title:s,maxWidth:f="md",onClose:v,children:b}=e;const[j,g]=(0,i.useState)(t),y=(0,i.useCallback)((()=>{g((e=>!e))}),[]);return(0,p.jsxs)(a.A,{open:n,onClose:v,fullScreen:j,TransitionComponent:x,maxWidth:f,children:[(0,p.jsx)(r.A,{sx:{position:"relative"},children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:s}),(0,p.jsx)(d.A,{onClick:y,style:{color:"white"},children:j?(0,p.jsx)(h.A,{}):(0,p.jsx)(u.A,{})}),(0,p.jsx)(d.A,{"aria-label":"close",onClick:v,style:{color:"white"},children:(0,p.jsx)(m.A,{})})]})}),(0,p.jsx)(o.A,{children:b})]})})),x=i.forwardRef((function(e,n){return(0,p.jsx)(s.A,{direction:"up",ref:n,...e})}))},47389:(e,n,t)=>{t.d(n,{l:()=>s});var i=t(96540),r=t(67512),a=t(58226),o=t(74848);const s=(0,i.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:s=n,variant:l="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[m,p]=(0,i.useState)(!1),f=(0,i.useCallback)((e=>{p(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),x=(0,i.useCallback)((()=>{p(!1)}),[]),v=u?{textTransform:"none"}:{};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{"data-is-view-more-button":"true",onClick:f,variant:l,size:c?"large":"small",style:v,children:n}),(0,o.jsx)(a.a,{open:m,onClose:x,title:s,maxWidth:d,fullScreen:t,children:h})]})}))},37091:(e,n,t)=>{t.d(n,{o:()=>r});var i=t(22777);function r(){const{i18n:e}=(0,i.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}},7798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"quick-view/fetch/index","title":"1. Query Arbitrary Shape","description":"Basic Concepts","source":"@site/docs/quick-view/fetch/index.mdx","sourceDirName":"quick-view/fetch","slug":"/quick-view/fetch/","permalink":"/jimmer-doc/docs/quick-view/fetch/","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/fetch/index.mdx","tags":[],"version":"current","lastUpdatedAt":1712763207000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"1. Query Arbitrary Shape"},"sidebar":"tutorialSidebar","previous":{"title":"Precondition","permalink":"/jimmer-doc/docs/quick-view/precondition"},"next":{"title":"Feature Introduction","permalink":"/jimmer-doc/docs/quick-view/fetch/feature"}}');var r=t(74848),a=t(28453),o=t(38143);const s={sidebar_position:2,title:"1. Query Arbitrary Shape"},l=void 0,c={},d=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Demo",id:"demo",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,r.jsx)(n.p,{children:"Although Jimmer entities are strongly typed, they are also dynamic and can express the ever-changing shape of data structures."}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, Jimmer supports ",(0,r.jsx)(n.code,{children:"ObjectFetcher"}),", which can control the shape of the queried data structure and then uniformly return Jimmer entities."]}),"\n",(0,r.jsx)(n.admonition,{title:"This is an extremely similar concept to GraphQL, but there are huge differences:",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"GraphQL is an application layer protocol based on HTTP that can only expose this capability by building HTTP services, and only HTTP clients can enjoy this capability."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For Jimmer, the ability to query arbitrary shapes is an inherent behavior of ORM that can be used programmed anywhere."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You can use it to expose ",(0,r.jsx)(n.a,{href:"../../graphql",children:"GraphQL services"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"As shown in the content of this section, you can also expose REST services."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It can even be used within applications without crossing any remote boundaries."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,r.jsx)(o.$z,{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94692:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/medias/java-fetcher-a47c6f710d4cc259e540c4a5909ae021.mp4"},57095:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/medias/kotlin-fetcher-b8ddc7a4ad25644d36d580ac726ec13f.mp4"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);