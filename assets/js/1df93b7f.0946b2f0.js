"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3237],{85162:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(67294),r=l(34334);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:l,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:l},t)}},65488:(e,t,l)=>{l.d(t,{Z:()=>d});var n=l(83117),r=l(67294),a=l(34334),o=l(72389),c=l(67392),m=l(7094),u=l(12466);const i="tabList__CuJ",s="tabItem_LNqP";function E(e){var t;const{lazy:l,block:o,defaultValue:E,values:d,groupId:p,className:h}=e,Z=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??Z.map((e=>{let{props:{value:t,label:l,attributes:n}}=e;return{value:t,label:l,attributes:n}})),k=(0,c.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===E?E:E??(null==(t=Z.find((e=>e.props.default)))?void 0:t.props.value)??Z[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:B}=(0,m.U)(),[g,y]=(0,r.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=p){const e=b[p];null!=e&&e!==g&&f.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,l=N.indexOf(t),n=f[l].value;n!==g&&(I(t),y(n),null!=p&&B(p,String(n)))},A=e=>{var t;let l=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;l=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;l=N[t]??N[N.length-1];break}}null==(t=l)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:t,label:l,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>N.push(e),onKeyDown:A,onFocus:w,onClick:w},o,{className:(0,a.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":g===t})}),l??t)}))),l?(0,r.cloneElement)(Z.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},Z.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function d(e){const t=(0,o.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},32102:(e,t,l)=>{l.d(t,{s:()=>h});var n=l(83117),r=l(67294),a=l(42293),o=l(50657),c=l(6514),m=l(54776),u=l(10155),i=l(15861),s=l(93946),E=l(9137),d=l(61274),p=l(50594);const h=(0,r.memo)((e=>{let{open:t,fullScreen:l=!1,title:n,maxWidth:m="md",onClose:h,children:f}=e;const[k,v]=(0,r.useState)(l),b=(0,r.useCallback)((()=>{v((e=>!e))}),[]);return r.createElement(o.Z,{open:t,onClose:h,fullScreen:k,TransitionComponent:Z,maxWidth:m},r.createElement(a.Z,{sx:{position:"relative"}},r.createElement(u.Z,null,r.createElement(i.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},n),r.createElement(s.Z,{onClick:b,style:{color:"white"}},k?r.createElement(d.Z,null):r.createElement(E.Z,null)),r.createElement(s.Z,{"aria-label":"close",onClick:h,style:{color:"white"}},r.createElement(p.Z,null)))),r.createElement(c.Z,null,f))})),Z=r.forwardRef((function(e,t){return r.createElement(m.Z,(0,n.Z)({direction:"up",ref:t},e))}))},39511:(e,t,l)=>{l.d(t,{b:()=>o});var n=l(67294),r=l(83321),a=l(32102);const o=(0,n.memo)((e=>{let{buttonText:t,fullScreen:l=!1,title:o=t,variant:c="outlined",large:m=!1,maxWidth:u,useOriginalText:i=!0,children:s}=e;const[E,d]=(0,n.useState)(!1),p=(0,n.useCallback)((e=>{d(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),h=(0,n.useCallback)((()=>{d(!1)}),[]),Z=i?{textTransform:"none"}:{};return n.createElement(n.Fragment,null,n.createElement(r.Z,{"data-is-view-more-button":"true",onClick:p,variant:c,size:m?"large":"small",style:Z},t),n.createElement(a.s,{open:E,onClose:h,title:o,maxWidth:u,fullScreen:l},s))}))},97986:(e,t,l)=>{l.r(t),l.d(t,{default:()=>re});var n=l(67294),r=l.t(n,2),a=l(86010),o=l(1239),c=l(39960),m=l(52263);const u="heroBanner_qdFl",i="buttons_AeoN";var s=l(83117),E=l(53143),d=l(86886),p=l(34168),h=l(20539),Z=l(58974);function f(e,t,l,r,a){const[o,c]=n.useState((()=>a&&l?l(e).matches:r?r(e).matches:t));return(0,Z.Z)((()=>{let t=!0;if(!l)return;const n=l(e),r=()=>{t&&c(n.matches)};return r(),n.addListener(r),()=>{t=!1,n.removeListener(r)}}),[e,l]),o}const k=r.useSyncExternalStore;function v(e,t,l,r,a){const o=n.useCallback((()=>t),[t]),c=n.useMemo((()=>{if(a&&l)return()=>l(e).matches;if(null!==r){const{matches:t}=r(e);return()=>t}return o}),[o,e,r,a,l]),[m,u]=n.useMemo((()=>{if(null===l)return[o,()=>()=>{}];const t=l(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[o,l,e]);return k(u,m,c)}var b=l(66066),B=l(65488),g=l(85162),y=l(23612),N=l(39511);const I=(0,n.memo)((()=>{const e=(0,E.S)(),[t,l]=(0,n.useState)(),r=(0,n.useCallback)((e=>{l(e)}),[]),[a,o]=(0,n.useState)(),c={hoverId:t,onHoverIdChange:r,activeId:a,onActiveIdChange:(0,n.useCallback)((e=>{o(e)}),[])};(0,n.useEffect)((()=>{const e=()=>{o(void 0)};return document.body.addEventListener("click",e,!0),()=>{document.body.removeEventListener("click",e,!0)}}),[]);return function(e,t={}){const l=(0,p.Z)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:a=(n?window.matchMedia:null),ssrMatchMedia:o=null,noSsr:c=!1}=(0,h.Z)({name:"MuiUseMediaQuery",props:t,theme:l});let m="function"==typeof e?e(l):e;return m=m.replace(/^@media( ?)/m,""),(void 0!==k?v:f)(m,r,a,o,c)}("(min-width:1024px)")?n.createElement(d.ZP,{container:!0},n.createElement(d.ZP,{item:!0,xs:6,style:x},n.createElement("h2",null,e?"\u7528\u6cd51. \u67e5\u8be2\u5b9e\u4f53":"Usage1. Query Entities")),n.createElement(d.ZP,{item:!0,xs:6,style:{...x,borderLeft:"solid 1px white"}},n.createElement("h2",null,e?"\u7528\u6cd52. \u67e5\u8be2DTO":"Usage2. Query DTOs")),n.createElement(d.ZP,{item:!0,xs:6,style:{...S,borderBottom:"dotted 1px gray"}},n.createElement(w,c)),n.createElement(d.ZP,{item:!0,xs:6,style:{...S,borderLeft:"solid 1px black",borderBottom:"dotted 1px gray"}},n.createElement(A,c)),n.createElement(d.ZP,{item:!0,xs:6,style:S},n.createElement(O,c)),n.createElement(d.ZP,{item:!0,xs:6,style:{...S,borderLeft:"solid 1px black"}},n.createElement(T,c))):n.createElement(d.ZP,{container:!0},n.createElement(d.ZP,{item:!0,xs:12,style:x},n.createElement("h2",null,e?"\u7528\u6cd51. \u67e5\u8be2\u5b9e\u4f53":"Usage1. Query Entities")),n.createElement(d.ZP,{item:!0,xs:12,style:S},n.createElement(w,c)),n.createElement(d.ZP,{item:!0,xs:12,style:S},n.createElement(O,c)),n.createElement(d.ZP,{item:!0,xs:12,style:x},n.createElement("h2",null,e?"\u7528\u6cd52. \u67e5\u8be2DTO":"Usage2. Query DTOs")),n.createElement(d.ZP,{item:!0,xs:12,style:S},n.createElement(A,c)),n.createElement(d.ZP,{item:!0,xs:12,style:S},n.createElement(T,c)))})),w=e=>{const t=(0,E.S)(),l=(0,n.useMemo)((()=>t?"\u6309\u6307\u5b9a\u7684\u5f62\u72b6\u67e5\u8be2\u5b9e\u4f53":"Query entities by specified shape"),[t]),r=(0,n.useMemo)((()=>n.createElement("div",null,t?"`Book`\u7684\u6240\u6709\u6807\u91cf\u5c5e\u6027":"All scalar properties of `Book`",n.createElement("ul",null,n.createElement("li",null,"`Book.id`"),n.createElement("li",null,"`Book.name`"),n.createElement("li",null,"`Book.edition`"),n.createElement("li",null,"`Book.price`")))),[t]);return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("h3",null,t?"\u67e5\u8be2\u4ee3\u7801":"Query Code")),n.createElement(B.Z,{groupId:"quckdemo-language"},n.createElement(g.Z,{value:"java",label:"Java"},n.createElement("div",{style:L},n.createElement(D,null,n.createElement(_,null,"BookTable")," ",n.createElement(Q,null,"table"),n.createElement(V,null," = "),n.createElement(_,null,"BookTable"),n.createElement(P,null),"$;",n.createElement(q,null,"Or `Tables.BOOK_TABLE`")),n.createElement(D,null,"\xa0"),n.createElement(D,null,n.createElement(_,null,"List"),n.createElement(V,null,"<"),n.createElement(_,null,"Book"),n.createElement(V,null,">")," ",n.createElement(Q,null,"books"),n.createElement(V,null," = "),n.createElement(Q,null,"sqlClient")),n.createElement(D,(0,s.Z)({mouseId:"createQuery"},e,{indent:1}),n.createElement(P,null),"createQuery",n.createElement(V,null,"("),n.createElement(Q,null,"table"),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"where"},e,{indent:1}),n.createElement(P,null),"where",n.createElement(V,null,"("),n.createElement(Q,null,"table"),n.createElement(P,null),"name",n.createElement(V,null,"()."),"eq",n.createElement(V,null,"("),n.createElement(Y,null,'"Learning GraphQL"'),n.createElement(V,null,")"),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"select"},e,{indent:1}),n.createElement(P,null),"select",n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"fetcher"},e,{indent:2,tooltip:l}),n.createElement(Q,null,"table"),n.createElement(P,null),"fetch",n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(_,null,"BookFetcher"),n.createElement(P,null),"$",n.createElement(q,null,"Or `Fetchers.BOOK_FETCHER`")),n.createElement(D,(0,s.Z)({mouseId:"allScalars"},e,{indent:4,tooltip:r}),n.createElement(P,null),"allScalarFields",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({mouseId:"Book.store"},e,{indent:4,tooltip:z(t,"Book.store","MANY-TO-ONE",!0)}),n.createElement(P,null),"store",n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({},e,{indent:5}),n.createElement(_,null,"BookStoreFecher"),n.createElement(P,null),"$",n.createElement(q,null,"Or `Fetchers.BOOK_STORE_FETCHER`")),n.createElement(D,(0,s.Z)({mouseId:"BookStore.name"},e,{indent:6,tooltip:z(t,"BookStore.name")}),n.createElement(P,null),"name",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({},e,{indent:4}),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"Book.authors"},e,{indent:4,tooltip:z(t,"Book.authors","MANY-TO-MANY",!0)}),n.createElement(P,null),"authors",n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({},e,{indent:5}),n.createElement(_,null,"AuthorFetcher"),n.createElement(P,null),"$",n.createElement(q,null,"Or `Fetchers.AUTHOR_FETCHER`")),n.createElement(D,(0,s.Z)({mouseId:"Author.firstName"},e,{indent:6,tooltip:z(t,"Author.firstName")}),n.createElement(P,null),"firstName",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({mouseId:"Author.lastName"},e,{indent:6,tooltip:z(t,"Author.lastName")}),n.createElement(P,null),"lastName",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({},e,{indent:4}),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({},e,{indent:2}),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"execute"},e,{indent:1}),n.createElement(P,null),"execute",n.createElement(V,null,"()"),";"))),n.createElement(g.Z,{value:"kotlin",label:"Kotlin"},n.createElement("div",{style:L},n.createElement(D,null,n.createElement(F,null,"val "),n.createElement(Q,null,"books"),n.createElement(V,null," = "),n.createElement(Q,null,"sqlClient")),n.createElement(D,(0,s.Z)({mouseId:"createQuery"},e,{indent:1}),n.createElement(P,null),"createQuery",n.createElement(V,null,"("),n.createElement(_,null,"Book"),n.createElement(V,null,"::"),n.createElement(F,null,"class"),n.createElement(V,null,") {")),n.createElement(D,(0,s.Z)({mouseId:"where"},e,{indent:2}),"where",n.createElement(V,null,"("),n.createElement(Q,null,"table"),n.createElement(P,null),"name eq ",n.createElement(Y,null,'"Learning GraphQL"'),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"select"},e,{indent:2}),"select",n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"fetcher"},e,{indent:3,tooltip:l}),n.createElement(Q,null,"table"),n.createElement(P,null),"fetchBy",n.createElement(V,null,"{")),n.createElement(D,(0,s.Z)({mouseId:"allScalars"},e,{indent:4,tooltip:r}),"allScalarFields",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({mouseId:"Book.store"},e,{indent:4,tooltip:z(t,"Book.store","MANY-TO-ONE",!0)}),"store ",n.createElement(V,null,"{")),n.createElement(D,(0,s.Z)({mouseId:"BookStore.name"},e,{indent:5,tooltip:z(t,"BookStore.name")}),"name",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({},e,{indent:4}),n.createElement(V,null,"}")),n.createElement(D,(0,s.Z)({mouseId:"Book.authors"},e,{indent:4,tooltip:z(t,"Book.authors","MANY-TO-MANY",!0)}),"authors ",n.createElement(V,null,"{")),n.createElement(D,(0,s.Z)({mouseId:"Author.firstName"},e,{indent:5,tooltip:z(t,"Author.firstName")}),"firstName",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({mouseId:"Author.lastName"},e,{indent:5,tooltip:z(t,"Author.lastName")}),"lastName",n.createElement(V,null,"()")),n.createElement(D,(0,s.Z)({},e,{indent:4}),n.createElement(V,null,"}")),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(V,null,"}")),n.createElement(D,(0,s.Z)({},e,{indent:2}),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null,"}")),n.createElement(D,(0,s.Z)({mouseId:"execute"},e,{indent:1}),n.createElement(P,null),"execute",n.createElement(V,null,"()"))))))},A=e=>{const t=(0,E.S)(),l=(0,n.useMemo)((()=>t?"\u6309\u6307\u5b9a\u7684\u7c7b\u578b\u67e5\u8be2DTO":"Query DTOs by specified type"),[t]),r=(0,n.useMemo)((()=>n.createElement("div",null,t?"`Book`\u7684\u6240\u6709\u6807\u91cf\u5c5e\u6027":"All scalar properties of `Book`",n.createElement("ul",null,n.createElement("li",null,"`Book.id`"),n.createElement("li",null,"`Book.name`"),n.createElement("li",null,"`Book.edition`"),n.createElement("li",null,"`Book.price`")))),[t]);return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("h3",null,t?"DTO\u4ee3\u7801":"DTO Code")),n.createElement("div",{style:L},n.createElement(D,null,n.createElement(F,null,"export "),"com",n.createElement(P,null),"yourcompany",n.createElement(P,null),"yourpackage",n.createElement(P,null),"Book"),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null,"-> "),n.createElement(F,null,"package "),"com",n.createElement(P,null),"yourcompany",n.createElement(P,null),"yourpackage",n.createElement(P,null),"dto"),n.createElement(D,null,"\xa0"),n.createElement(D,(0,s.Z)({mouseId:"fetcher"},e,{tooltip:t?"DTO\u5b9a\u4e49\u5f62\u72b6":"DTO defines shape"}),n.createElement(_,null,"BookDetailView"),n.createElement(V,null," {")),n.createElement(D,(0,s.Z)({mouseId:"allScalars"},e,{indent:1,tooltip:r}),n.createElement(V,null,"#"),"allScalars"),n.createElement(D,(0,s.Z)({mouseId:"Book.store"},e,{indent:1,tooltip:z(t,"Book.store","MANY-TO-ONE")}),"store",n.createElement(V,null," {")),n.createElement(D,(0,s.Z)({mouseId:"BookStore.id"},e,{indent:2,tooltip:z(t,"BookStore.id")}),"id"),n.createElement(D,(0,s.Z)({mouseId:"BookStore.name"},e,{indent:2,tooltip:z(t,"BookStore.name")}),"name"),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null," }")),n.createElement(D,(0,s.Z)({mouseId:"Book.authors"},e,{indent:1,tooltip:z(t,"Book.authors","MANY-TO-MANY")}),"authors",n.createElement(V,null," {")),n.createElement(D,(0,s.Z)({mouseId:"Author.id"},e,{indent:2,tooltip:z(t,"Author.id")}),"id"),n.createElement(D,(0,s.Z)({mouseId:"Author.firstName"},e,{indent:2,tooltip:z(t,"Author.firstName")}),"firstName"),n.createElement(D,(0,s.Z)({mouseId:"Author.lastName"},e,{indent:2,tooltip:z(t,"Author.lastName")}),"lastName"),n.createElement(D,{indent:1},n.createElement(V,null," }")),n.createElement(D,null,"}")),t&&n.createElement(y.Z,{type:"info"},"\u7f16\u8bd1\u540e\uff0c\u81ea\u52a8\u751f\u6210Java/Kotlin\u7c7b\u578b ",n.createElement(N.b,{buttonText:"BookDetailView",title:"\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b`BookDetailView`"},n.createElement($,null))),!t&&n.createElement(y.Z,{type:"info"},"After compilation, A new java/kotlin type ",n.createElement(N.b,{buttonText:"BookDetailView",title:"Generated type `BookDetailView`"},n.createElement($,null))," will be automatically generated."),n.createElement("div",null,"\xa0"),n.createElement("div",null,n.createElement("h3",null,t?"\u67e5\u8be2\u4ee3\u7801":"Query Code")),n.createElement(B.Z,{groupId:"quckdemo-language"},n.createElement(g.Z,{value:"java",label:"Java"},n.createElement("div",{style:L},n.createElement(D,null,n.createElement(_,null,"BookTable")," ",n.createElement(Q,null,"table"),n.createElement(V,null," = "),n.createElement(_,null,"BookTable"),n.createElement(P,null),"$;",n.createElement(q,null,"Or `Tables.BOOK`")),n.createElement(D,null,"\xa0"),n.createElement(D,null,n.createElement(_,null,"List"),n.createElement(V,null,"<"),n.createElement(_,null,"BookDetailView"),n.createElement(V,null,">")," ",n.createElement(Q,null,"books"),n.createElement(V,null," = "),n.createElement(Q,null,"sqlClient")),n.createElement(D,(0,s.Z)({mouseId:"createQuery"},e,{indent:1}),n.createElement(P,null),"createQuery",n.createElement(V,null,"("),n.createElement(Q,null,"table"),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"where"},e,{indent:1}),n.createElement(P,null),"where",n.createElement(V,null,"("),n.createElement(Q,null,"table"),n.createElement(P,null),"name",n.createElement(V,null,"()."),"eq",n.createElement(V,null,"("),n.createElement(Y,null,'"Learning GraphQL"'),n.createElement(V,null,")"),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"select"},e,{indent:1}),n.createElement(P,null),"select",n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"fetcher"},e,{indent:2,tooltip:l}),n.createElement(Q,null,"table"),n.createElement(P,null),"fetch",n.createElement(V,null,"("),n.createElement(_,null,"BookDetailView"),n.createElement(P,null),n.createElement(F,null,"class"),n.createElement(V,null,")")),n.createElement(D,{indent:1},n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"execute"},e,{indent:1}),n.createElement(P,null),"execute",n.createElement(V,null,"()"),";"))),n.createElement(g.Z,{value:"kotlin",label:"Kotlin"},n.createElement("div",{style:L},n.createElement(D,null,n.createElement(F,null,"val "),n.createElement(Q,null,"books"),n.createElement(V,null," = "),n.createElement(Q,null,"sqlClient")),n.createElement(D,(0,s.Z)({mouseId:"createQuery"},e,{indent:1}),n.createElement(P,null),"createQuery",n.createElement(V,null,"("),n.createElement(_,null,"Book"),n.createElement(V,null,"::"),n.createElement(F,null,"class"),n.createElement(V,null,") {")),n.createElement(D,(0,s.Z)({mouseId:"where"},e,{indent:2}),"where",n.createElement(V,null,"("),n.createElement(Q,null,"table"),n.createElement(P,null),"name eq ",n.createElement(Y,null,'"Learning GraphQL"'),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({mouseId:"select"},e,{indent:2}),"select",n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"fetcher"},e,{indent:3,tooltip:l}),n.createElement(Q,null,"table"),n.createElement(P,null),"fetch",n.createElement(V,null,"("),n.createElement(_,null,"BookDetailView"),n.createElement(V,null,"::"),n.createElement(F,null,"class"),n.createElement(V,null,")")),n.createElement(D,{indent:2},n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null,"}")),n.createElement(D,(0,s.Z)({mouseId:"execute"},e,{indent:1}),n.createElement(P,null),"execute",n.createElement(V,null,"()"))))))},O=e=>{const t=(0,E.S)();return n.createElement(n.Fragment,null,n.createElement("h2",null,t?"\u67e5\u8be2\u5230\u7684\u5b9e\u4f53":"Entities that was queried"),n.createElement("div",{style:L},n.createElement(D,null,n.createElement(V,null,"[")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null,"{")),n.createElement(D,(0,s.Z)({mouseId:"Book.id"},e,{indent:2,tooltip:z(t,"Book.id")}),n.createElement(R,{prop:"id"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.name"},e,{indent:2,tooltip:z(t,"Book.name")}),n.createElement(R,{prop:"name"}),n.createElement(Y,null,'"Learning GraphQL"'),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.edition"},e,{indent:2,tooltip:z(t,"Book.edition")}),n.createElement(R,{prop:"edition"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.price"},e,{indent:2,tooltip:z(t,"Book.price")}),n.createElement(R,{prop:"price"}),n.createElement(Y,null,"50"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.store"},e,{indent:2,tooltip:z(t,"Book.store","MANY-TO-ONE")}),n.createElement(R,{prop:"store"}),n.createElement(V,null,"{")),n.createElement(D,(0,s.Z)({mouseId:"BookStore.id"},e,{indent:3,tooltip:z(t,"BookStore.id")}),n.createElement(R,{prop:"id"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"BookStore.name"},e,{indent:3,tooltip:z(t,"BookStore.name")}),n.createElement(R,{prop:"name"}),n.createElement(Y,null,'"O\'REILLY"')),n.createElement(D,(0,s.Z)({},e,{indent:2}),n.createElement(V,null,"}"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.authors"},e,{indent:2,tooltip:z(t,"Book.authors","MANY-TO-MANY")}),n.createElement(R,{prop:"authors"}),n.createElement(V,null,"[")),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(V,null,"{")),n.createElement(D,(0,s.Z)({mouseId:"Author.id#1"},e,{indent:4,tooltip:z(t,"Author.id")}),n.createElement(R,{prop:"id"}),n.createElement(Y,null,"2"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Author.firstName#1"},e,{indent:4,tooltip:z(t,"Author.firstName")}),n.createElement(R,{prop:"firstName"}),n.createElement(Y,null,'"Alex"')),n.createElement(D,(0,s.Z)({mouseId:"Author.lastName#1"},e,{indent:4,tooltip:z(t,"Author.lastName")}),n.createElement(R,{prop:"lastName"}),n.createElement(Y,null,'"Banks"')),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(V,null,"}"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(V,null,"{")),n.createElement(D,(0,s.Z)({mouseId:"Author.id#2"},e,{indent:4,tooltip:z(t,"Author.id")}),n.createElement(R,{prop:"id"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Author.firstName#2"},e,{indent:4,tooltip:z(t,"Author.firstName")}),n.createElement(R,{prop:"firstName"}),n.createElement(Y,null,'"Eve"')),n.createElement(D,(0,s.Z)({mouseId:"Author.lastName#2"},e,{indent:4,tooltip:z(t,"Author.lastName")}),n.createElement(R,{prop:"lastName"}),n.createElement(Y,null,'"Procello"')),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(V,null,"}")),n.createElement(D,(0,s.Z)({},e,{indent:2}),n.createElement(V,null,"]")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null,"},")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement("span",{style:M},t?"...\u7701\u7565\u66f4\u591a\u6570\u636e...":"...Omit more data...")),n.createElement(D,null,n.createElement(V,null,"]"))))},T=e=>{const t=(0,E.S)();return n.createElement(n.Fragment,null,n.createElement("h2",null,t?"\u67e5\u8be2\u5230\u7684DTO":"DTOs that was queried"),n.createElement("div",{style:L},n.createElement(D,null,n.createElement(V,null,"[")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(_,null,"BookDetailView"),n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"Book.id"},e,{indent:2,tooltip:z(t,"Book.id")}),n.createElement(j,{prop:"id"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.name"},e,{indent:2,tooltip:z(t,"Book.name")}),n.createElement(j,{prop:"name"}),n.createElement(Y,null,"Learning GraphQL"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.edition"},e,{indent:2,tooltip:z(t,"Book.edition")}),n.createElement(j,{prop:"edition"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.price"},e,{indent:2,tooltip:z(t,"Book.price")}),n.createElement(j,{prop:"price"}),n.createElement(Y,null,"50"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.store"},e,{indent:2,tooltip:z(t,"Book.store","MANY-TO-ONE")}),n.createElement(j,{prop:"store"}),n.createElement(_,null,"BookDetailView.TargetOf_store"),n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"BookStore.id"},e,{indent:3,tooltip:z(t,"BookStore.id")}),n.createElement(j,{prop:"id"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"BookStore.name"},e,{indent:3,tooltip:z(t,"BookStore.name")}),n.createElement(j,{prop:"name"}),n.createElement(Y,null,"O'REILLY")),n.createElement(D,(0,s.Z)({},e,{indent:2}),n.createElement(V,null,")"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Book.authors"},e,{indent:2,tooltip:z(t,"Book.authors","MANY-TO-MANY")}),n.createElement(j,{prop:"authors"}),n.createElement(V,null,"[")),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(_,null,"BookDetailView.TargetOf_authors"),n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"Author.id#1"},e,{indent:4,tooltip:z(t,"Author.id")}),n.createElement(j,{prop:"id"}),n.createElement(Y,null,"2"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Author.firstName#1"},e,{indent:4,tooltip:z(t,"Author.firstName")}),n.createElement(j,{prop:"firstName"}),n.createElement(Y,null,"Alex")),n.createElement(D,(0,s.Z)({mouseId:"Author.lastName#1"},e,{indent:4,tooltip:z(t,"Author.lastName")}),n.createElement(j,{prop:"lastName"}),n.createElement(Y,null,"Banks")),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(V,null,")"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(_,null,"BookDetailView.TargetOf_authors"),n.createElement(V,null,"(")),n.createElement(D,(0,s.Z)({mouseId:"Author.id#2"},e,{indent:4,tooltip:z(t,"Author.id")}),n.createElement(j,{prop:"id"}),n.createElement(Y,null,"1"),n.createElement(G,null)),n.createElement(D,(0,s.Z)({mouseId:"Author.firstName#2"},e,{indent:4,tooltip:z(t,"Author.firstName")}),n.createElement(j,{prop:"firstName"}),n.createElement(Y,null,"Eve")),n.createElement(D,(0,s.Z)({mouseId:"Author.lastName#2"},e,{indent:4,tooltip:z(t,"Author.lastName")}),n.createElement(j,{prop:"lastName"}),n.createElement(Y,null,"Procello")),n.createElement(D,(0,s.Z)({},e,{indent:3}),n.createElement(V,null,")")),n.createElement(D,(0,s.Z)({},e,{indent:2}),n.createElement(V,null,"]")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement(V,null,"),")),n.createElement(D,(0,s.Z)({},e,{indent:1}),n.createElement("span",{style:M},t?"...\u7701\u7565\u66f4\u591a\u6570\u636e...":"...Omit more data...")),n.createElement(D,null,n.createElement(V,null,"]"))))},S={padding:"1rem",whiteSpace:"nowrap"},x={...S,backgroundColor:"#1976d2",color:"white"},L={margin:"1rem 0 1rem 0",padding:"0.5rem",backgroundColor:"#212121",color:"white",overflow:"hidden"},C={position:"absolute",backgroundColor:"#212121",opacity:.8,transform:"translateY(-50%)",padding:"1rem",border:"solid 1px white",borderRadius:"0.5rem",pointerEvents:"none"},M={color:"#c62828",fontWeight:"bold"},D=e=>{let{indent:t=0,tooltip:l,children:r,mouseId:a,hoverId:o,onHoverIdChange:c,activeId:m,onActiveIdChange:u}=e;const i=(0,n.useMemo)((()=>K(a,m)?U:K(a,o)?J:void 0),[a,o,m]),s=(0,n.useMemo)((()=>null!=a&&(K(a,o)||void 0===o&&K(a,m))&&void 0!==l),[a,o,l]),E=(0,n.useRef)(null),[d,p]=(0,n.useState)({x:0,y:0});(0,n.useEffect)((()=>{const e=()=>{if(null!=E.current){let e=E.current;const t={x:e.offsetHeight,y:e.offsetHeight/2};for(;e&&(t.x+=e.offsetLeft,t.y+=e.offsetTop,!e.offsetParent||1==e.offsetParent.nodeType);)e=e.offsetParent;p(t)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[E.current]);const h=(0,n.useCallback)((()=>{void 0!==c&&c(a)}),[c]),Z=(0,n.useCallback)((()=>{void 0!==c&&c(void 0)}),[c]),f=(0,n.useCallback)((()=>{void 0!==u&&u(a)}),[u]);return n.createElement("div",{style:{paddingLeft:1.5*t+"rem",backgroundColor:i},onMouseEnter:h,onMouseLeave:Z,onClick:f},r,n.createElement("div",{style:{display:"inline-block"},ref:E},"\xa0",s&&n.createElement("div",{style:{...C,left:d.x,top:d.y}},l)))},_=e=>{let{children:t}=e;return n.createElement("span",{style:{color:"#4db6ac"}},t)},V=e=>{let{children:t}=e;return n.createElement("span",{style:{color:"#9575cd"}},t)},P=()=>n.createElement(V,null,"."),Q=e=>{let{children:t}=e;return n.createElement("span",{style:{color:"#dce775"}},t)},Y=e=>{let{children:t}=e;return n.createElement("span",{style:{color:"#81c784"}},t)},F=e=>{let{children:t}=e;return n.createElement("span",{style:{color:"#64b5f6",fontWeight:"bold"}},t)},q=e=>{let{children:t}=e;return n.createElement("span",{style:{color:"#757575",fontStyle:"italic"}}," // ",t)},R=e=>{let{prop:t}=e;return n.createElement(n.Fragment,null,n.createElement("span",null,'"',t,'"'),n.createElement(V,null,": "))},j=e=>{let{prop:t}=e;return n.createElement(n.Fragment,null,n.createElement("span",null,t),n.createElement(V,null,"="))},G=()=>n.createElement(V,null,",");function z(e,t,l,r){if(void 0===l&&(l="SCALAR"),void 0===r&&(r=!1),r)return n.createElement("div",null,z(e,t,l,!1),n.createElement("div",{style:{borderLeft:"solid 10px #81c784",color:"#81c784",paddingLeft:"0.5rem"}},e?"\u6ce8\u610f\uff0c\u5173\u8054id\u88ab\u81ea\u52a8\u6293\u53d6":"Notes: Associated id is fetched automatcially"));switch(l){case"MANY-TO-ONE":return(e?"\u591a\u5bf9\u4e00\u5173\u8054":"Many-to-one association")+" `"+t+"`";case"MANY-TO-MANY":return(e?"\u591a\u5bf9\u591a\u5173\u8054":"Many-to-many association")+" `"+t+"`";default:return(e?"\u6807\u91cf\u5c5e\u6027":"Scalar property")+" `"+t+"`"}}function K(e,t){if(void 0!==t){if(e===t)return!0;const l=t.lastIndexOf("#");if(-1!==l){if(t.substring(0,l)===e)return!0}if("allScalars"===e&&void 0!==t&&-1!==H.indexOf(t))return!0}return!1}const $=()=>{const e=(0,E.S)(),t=(0,n.useMemo)((()=>W.split("<omit>").join(e?"...\u7701\u7565\u66f4\u591a\u6210\u5458...":"...Omit other members...")),[e]),l=(0,n.useMemo)((()=>X.split("<omit>").join(e?"...\u7701\u7565\u66f4\u591a\u6210\u5458...":"...Omit other members...")),[e]);return n.createElement(B.Z,{groupId:"quckdemo-language"},n.createElement(g.Z,{value:"java",label:"Java"},n.createElement(b.Z,{language:"java",title:"BookDetailView.java"},t)),n.createElement(g.Z,{value:"kotlin",label:"Kotlin"},n.createElement(b.Z,{language:"kotlin",title:"BookDetailView.kt"},l)))},H=["Book.id","Book.name","Book.edition","Book.price"],U="#1a237e",J="#7986cb",W='@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\npublic class BookDetailView implements View<Book> {\n    \n    private long id;\n    \n    private String name;\n\n    private int edition;\n\n    private BigDecimal;\n\n    @Nullable\n    private TargetOf_store store;\n\n    private List<TargetOf_authors> authors;\n\n    <omit>\n\n    public static class TargetOf_store implements View<BookStore> {\n\n        private long id;\n\n        private String name;\n\n        <omit>\n    }\n\n    public static class TargetOf_authors implements View<Author> {\n\n        private long id;\n\n        private String firstName;\n\n        private String lastName;\n\n        <omit>\n    }\n}',X='@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\nopen class BookDetailView(\n    val id: Long,\n    val name: String,\n    val edition: Int,\n    val price: BigPrice,\n    val store: BookDetailView.TargetOf_store? = null,\n    val authors: List<BookDetailView.TargetOf_authors> = emptyList()\n): View<Book> {\n\n    <omit>\n\n    open class TargetOf_store(\n        val id: Long,\n        val name: String\n    ): View<BookStore> {\n\n        <omit>\n    }\n\n    open class TargetOf_authors(\n        val id: Long,\n        val firstName: String,\n        val lastName: String\n    ): View<Author> {\n\n        <omit>\n    }\n}';function ee(){const{i18n:e}=(0,m.Z)();return n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",null,"\xa0"),n.createElement(I,null)))}var te=l(72389);function le(e){let{children:t,fallback:l}=e;return(0,te.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):l??null}function ne(){const{siteConfig:e,i18n:t}=(0,m.Z)(),l=(0,n.useMemo)((()=>{const e=t.currentLocale;return"zh"===e||"zh_CN"==e||"zh_cn"==e}),[t.currentLocale]),r=(0,n.useMemo)((()=>l?"Jimmer, \u9488\u5bf9Java\u548cKotlin\u7684\u9769\u547d\u6027ORM":e.title),[l,e.title]),o=(0,n.useMemo)((()=>l?"\u4e0d\u53ea\u662fORM\uff0c\u8fd8\u662f\u4e00\u5957\u96c6\u6210\u5316\u65b9\u6848":e.tagline),[l,e.tagline]),s=(0,n.useMemo)((()=>l?"\u8fdb\u5165\u6559\u7a0b":"Goto Tutorial"),[l]);return n.createElement("header",{className:(0,a.Z)("hero hero--primary",u)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},r),n.createElement("p",{className:"hero__subtitle"},o),n.createElement("div",{className:i},n.createElement(c.Z,{className:"button button--secondary button--lg",to:"/docs/overview/welcome"},s))))}function re(){const{siteConfig:e}=(0,m.Z)();return n.createElement(le,null,(()=>n.createElement(o.Z,{title:`${e.title} documentation`,description:"Description will go into a meta tag in <head />"},n.createElement(ne,null),n.createElement("main",null,n.createElement(ee,null)))))}},53143:(e,t,l)=>{l.d(t,{S:()=>r});var n=l(52263);function r(){const{i18n:e}=(0,n.Z)(),t=e.currentLocale;return"zh"===t||"zh_cn"===t||"zh_CN"==t}}}]);