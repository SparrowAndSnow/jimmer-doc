"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1095],{56778:(e,n,l)=>{l.d(n,{A:()=>a});l(96540);var t=l(18215);const r={tabItem:"tabItem_Ymn6"};var i=l(74848);function a(e){let{children:n,hidden:l,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:l,children:n})}},37244:(e,n,l)=>{l.d(n,{A:()=>S});var t=l(96540),r=l(18215),i=l(44319),a=l(56347),o=l(94280),s=l(73024),c=l(58417),d=l(44031);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:r}}=e;return{value:n,label:l,attributes:t,default:r}}))}(l);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:l}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,s.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,i=h(e),[a,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:l,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(l);return[r,(0,t.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:r}),j=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&s(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=l(46916);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(74848);function v(e){let{className:n,block:l,selectedValue:t,selectValue:a,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,l=s.indexOf(n),r=o[l].value;r!==t&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=s.indexOf(e.currentTarget)+1;n=s[l]??s[0];break}case"ArrowLeft":{const l=s.indexOf(e.currentTarget)-1;n=s[l]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:o.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:l??n},n)}))})}function k(e){let{lazy:n,children:l,selectedValue:i}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function f(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(k,{...n,...e})]})}function S(e){const n=(0,g.A)();return(0,b.jsx)(f,{...e,children:u(e.children)},String(n))}},58226:(e,n,l)=>{l.d(n,{a:()=>x});var t=l(96540),r=l(72774),i=l(63051),a=l(28968),o=l(48875),s=l(44676),c=l(47859),d=l(4671),u=l(99343),h=l(7324),p=l(39781),m=l(74848);const x=(0,t.memo)((e=>{let{open:n,fullScreen:l=!1,title:o,maxWidth:x="md",onClose:j,children:b}=e;const[v,k]=(0,t.useState)(l),f=(0,t.useCallback)((()=>{k((e=>!e))}),[]);return(0,m.jsxs)(i.A,{open:n,onClose:j,fullScreen:v,TransitionComponent:g,maxWidth:x,children:[(0,m.jsx)(r.A,{sx:{position:"relative"},children:(0,m.jsxs)(s.A,{children:[(0,m.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,m.jsx)(d.A,{onClick:f,style:{color:"white"},children:v?(0,m.jsx)(h.A,{}):(0,m.jsx)(u.A,{})}),(0,m.jsx)(d.A,{"aria-label":"close",onClick:j,style:{color:"white"},children:(0,m.jsx)(p.A,{})})]})}),(0,m.jsx)(a.A,{children:b})]})})),g=t.forwardRef((function(e,n){return(0,m.jsx)(o.A,{direction:"up",ref:n,...e})}))},47389:(e,n,l)=>{l.d(n,{l:()=>o});var t=l(96540),r=l(67512),i=l(58226),a=l(74848);const o=(0,t.memo)((e=>{let{buttonText:n,fullScreen:l=!1,title:o=n,variant:s="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[p,m]=(0,t.useState)(!1),x=(0,t.useCallback)((e=>{m(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),g=(0,t.useCallback)((()=>{m(!1)}),[]),j=u?{textTransform:"none"}:{};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{"data-is-view-more-button":"true",onClick:x,variant:s,size:c?"large":"small",style:j,children:n}),(0,a.jsx)(i.a,{open:p,onClose:g,title:o,maxWidth:d,fullScreen:l,children:h})]})}))},92430:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"quick-view/get-started/usage","title":"\u6700\u7ec8\u4f7f\u7528","description":"Jimmer\u7684\u4e24\u79cd\u7528\u6cd5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/get-started/usage.mdx","sourceDirName":"quick-view/get-started","slug":"/quick-view/get-started/usage","permalink":"/jimmer-doc/zh/docs/quick-view/get-started/usage","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/get-started/usage.mdx","tags":[],"version":"current","lastUpdatedAt":1731502434000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"\u6700\u7ec8\u4f7f\u7528"},"sidebar":"tutorialSidebar","previous":{"title":"\u751f\u6210\u4ee3\u7801","permalink":"/jimmer-doc/zh/docs/quick-view/get-started/generate-code"},"next":{"title":"\u6807\u51c6\u4f8b\u5b50","permalink":"/jimmer-doc/zh/docs/quick-view/standard-demo"}}');var r=l(74848),i=l(28453),a=l(37244),o=l(56778),s=l(47389);const c={sidebar_position:5,title:"\u6700\u7ec8\u4f7f\u7528"},d=void 0,u={},h=[{value:"SqlClient",id:"sqlclient",level:2},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"\u4fdd\u5b58",id:"\u4fdd\u5b58",level:2},{value:"\u4fdd\u5b58\u77ed\u5173\u8054",id:"\u4fdd\u5b58\u77ed\u5173\u8054",level:3},{value:"\u4fdd\u5b58\u957f\u5173\u8054",id:"\u4fdd\u5b58\u957f\u5173\u8054",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Jimmer\u7684\u4e24\u79cd\u7528\u6cd5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528Jimmer\u7684Spring Boot Starter"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684SqlClient"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Jimmer\u5177\u5907\u5b8c\u5584\u7684\u914d\u5957\u4f8b\u5b50\u9879\u76ee\uff0c\u5173\u4e8eJimmer\u4e4bSpring Boot Starter\u7684\u7528\u6cd5\uff0c\u8bf7\u53c2\u8003\u4f8b\u5b50\uff1b\u672c\u6587\u8ba8\u8bba\u5728\u4e0d\u4f7f\u7528Spring\u7684\u524d\u63d0\u4e0b\uff0c\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684sqlClient\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"sqlclient",children:"SqlClient"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SqlClient"}),"\u662fJimmer\u4e2d\u6700\u5e95\u5c42\u7684API"]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Java"}),(0,r.jsx)("td",{children:"org.babyfish.jimmer.sql.JSqlClient"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Kotlin"}),(0,r.jsx)("td",{children:"org.babyfish.jimmer.sql.kt.KSqlClient"})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8be5\u7c7b\u578b\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5168\u5c40\u53d8\u91cf\u662fJimmer\u6240\u6709ORM\u884c\u4e3a\u7684Api\u5165\u53e3\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../../configuration/multi-datasources",children:"\u591a\u6570\u636e\u6e90"}),"\u9700\u8981\u521b\u5efa\u591a\u4e2a\u5168\u5c40\u5bf9\u8c61\u3002\u7136\u800c\uff0c\u6211\u4eec\u8fd9\u91cc\u8ba8\u8bba\u7684\u662f\u5355\u6570\u636e\u6e90\u8fd9\u79cd\u6700\u5e38\u89c1\u7684\u60c5\u51b5\uff0c\u4e00\u4e2a\u5168\u5c40\u5bf9\u8c61\u8db3\u591f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u91c7\u7528\u4e86Jimmer\u7684Spring Boot Starter\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u5728",(0,r.jsx)(n.code,{children:"application.yml"})," ",(0,r.jsxs)(n.em,{children:["(\u6216",(0,r.jsx)(n.code,{children:"application.properties"}),")"]})," \u6307\u5b9a\u5982\u4e0b\u914d\u7f6e"]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    #highlight-next-line\n    language: kotlin // This is important for kotlin\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Jimmer\u7684Spring Boot Starter\u4f1a\u81ea\u52a8\u521b\u5efa\u8fd9\u4e2a\u5168\u5c40\u5bf9\u8c61"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u5bf9\u4e8ekotlin\u800c\u8a00\uff0c\u4e3a\u4e86\u521b\u5efa",(0,r.jsx)(n.code,{children:"KSqlClient"}),"\u800c\u975e",(0,r.jsx)(n.code,{children:"JSqlClient"}),"\uff0c\u9700\u8981\u4e3a",(0,r.jsx)(n.code,{children:"application.yml"}),"/",(0,r.jsx)(n.code,{children:"application.properties"}),"\u914d\u7f6e",(0,r.jsx)(n.code,{children:"jimmer.language = kotlin"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u76f4\u63a5\u6ce8\u5165",(0,r.jsx)(n.code,{children:"JSqlClient"}),"/",(0,r.jsx)(n.code,{children:"KSqlClient"}),"\u7c7b\u578b\u7684\u5bf9\u8c61\u3002"]}),(0,r.jsxs)(n.p,{children:["\u672c\u6587\u7684\u540e\u7eed\u4ee3\u7801\u4f1a\u5047\u8bbe\u6709\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"sqlClient"}),"\u53d8\u91cf\u5e76\u4f7f\u7528\u5b83\uff0c\u4f46\u4e0d\u4f1a\u7ed9\u4e88\u89e3\u91ca\uff0c\u56e0\u4e3a\u8fd9\u91cc\u5df2\u7ecf\u7ed9\u51fa\u4e86\u8be6\u7ec6\u7684\u89e3\u91ca\u3002"]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2",children:"\u67e5\u8be2"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package com.example.model.repository;\n\nimport org.babyfish.jimmer.sql.JSqlClient;\nimport org.babyfish.jimmer.sql.fetcher.Fetcher;\nimport org.babyfish.jimmer.Page;\n\nimport com.example.model.Book;\nimport com.example.model.BookTable;\n\npublic class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    public Page<Book> findBooks(\n\n            int pageIndex, // \u4ece0\u5f00\u59cb\n            int pageSize,\n            \n            @Nullable Fetcher<Book> fetcher,\n\n            // \u4f8b\u5982: "name asc, edition desc"\n            @Nullable String sortCode,\n            \n            @Nullable String name,\n            @Nullable BigDecimal minPrice,\n            @Nullable BigDecimal maxPrice,\n            @Nullable String storeName,\n            @Nullable String storeWebsite,\n            @Nullable String authorName,\n            @Nullable Gender authorGender\n    ) {\n        return sqlClient\n                .createQuery(T)\n                .where(T.name().ilikeIf(name))\n                .where(T.price().betweenIf(minPrice, maxPrice))\n                .where(T.store().name().ilikeIf(storeName))\n                .where(T.store().website().ilikeIf(storeWebsite))\n                .where(\n                        T.authors(author ->\n                                Predicate.or(\n                                        author.firstName().ilikeIf(authorName),\n                                        author.lastName().ilikeIf(authorName)\n                                )\n                        )\n                )\n                .where(T.authors(author -> author.gender().eqIf(authorGender)))\n                .orderBy(\n                        Order.makeOrders(\n                                T,\n                                sortCode != null ?\n                                        sortCode :\n                                        "name asc, edition desc"\n                        )\n                )\n                .select(\n                    T.fetch(fetcher)\n                )\n                .fetchPage(pageIndex, pageSize);\n    }\n}\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'package com.example.model.repository\n\nimport org.babyfish.jimmer.sql.kt.KSqlClient\nimport org.babyfish.jimmer.sql.fetcher.Fetcher\nimport org.babyfish.jimmer.Page\n\nimport com.example.model.*\n\nclass BookRepository {\n\n    fun findBooks(\n        \n        pageIndex: Int, // \u4ece0\u5f00\u59cb\n        pageSize: Int = 10,\n\n        fetcher: Fetcher<Book>? = null,\n\n        sortCode: String = "name asc, edition desc",\n\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,\n        storeName: String? = null,\n        storeWebsite: String? = null,\n        authorName: String? = null,\n        authorGender: Gender? = null\n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {\n                    or(\n                        firstName `ilike?` authorName,\n                        lastName `ilike?` authorName \n                    )\n                }\n                where += table.authors { gender `eq?` authorGender }\n                orderBy(table.makeOrders(sortCode))\n                select(\n                    table.fetch(fetcher)\n                )\n            }\n            .fetchPage(pageIndex, pageSize)\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u521b\u5efa",(0,r.jsx)(n.code,{children:"BookRepository"}),"\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5229\u7528\u5404\u79cd\u53c2\u6570\u7684\u6392\u5217\u7ec4\u5408\uff0c\u9a8c\u8bc1"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u52a8\u6001\u67e5\u8be2 ",(0,r.jsx)(n.em,{children:"(\u5305\u62ec\u52a8\u6001\u8868\u8fde\u63a5\uff0c\u9690\u5f0f\u5b50\u67e5\u8be2)"})]}),"\n",(0,r.jsx)(n.li,{children:"\u52a8\u6001\u6392\u5e8f"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u9875\u67e5\u8be2"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4fdd\u5b58",children:"\u4fdd\u5b58"}),"\n",(0,r.jsx)(n.h3,{id:"\u4fdd\u5b58\u77ed\u5173\u8054",children:"\u4fdd\u5b58\u77ed\u5173\u8054"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"src/main/dto"}),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4efb\u610f\u6269\u5c55\u540d\u4e3a",(0,r.jsx)(n.code,{children:"dto"}),"\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u5176\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"export com.example.model.Book\n    -> package com.example.model.dto\n\ninput BookInput {\n    #allScalars(this)\n    id(store) // as storeId\n    id(authors) as authorIds\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7f16\u8bd1\uff0c\u751f\u6210\u57fa\u4e8eJava/Kotlin\u5b9a\u4e49\u7684DTO\u7c7b\u578b",(0,r.jsx)(n.code,{children:"com.example.model.dto.BookInput"})]}),"\n",(0,r.jsxs)(s.l,{buttonText:"\u67e5\u770b\u751f\u6210\u7684\u4ee3\u7801",title:"\u7f16\u8bd1\u540e\u751f\u6210\u7684BookInput",children:[(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package package com.example.model.dto;\n\npublic class BookInput implements Input<Book> {\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class BookInput(\n    val id: Long? = null,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long? = null,\n    val authorIds: List<Long> = emptyList()\n) : Input<Book> {\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n"})})})]}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u5b9e\u4f53\u4e2d\u7684",(0,r.jsx)(n.code,{children:"Book.id"}),"\u4e0d\u5141\u8bb8\u4e3anull\uff0c\u4f46\u662f\uff0c\u8fd9\u91ccDTO\u7c7b\u578b\u4e2d\u7684",(0,r.jsx)(n.code,{children:"BookInput.id"}),"\u5374\u88ab\u5141\u8bb8\u4e3anull\uff0c\n\u8bf7\u53c2\u8003",(0,r.jsx)(n.a,{href:"../../object/view/dto-language#32-input%E7%89%B9%E6%9C%89%E5%8A%9F%E8%83%BD",children:"DTO\u8bed\u8a00/3.2. Input\u7279\u6709\u529f\u80fd"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["\uff0c\u7136\u540e\u4fee\u6539",(0,r.jsx)(n.code,{children:"BookRepository"})]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    public long saveBook(BookInput input) {\n        return sqlClient\n            .save(input)\n            .execute()\n            .getModifiedEntity()\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .getId();\n    }\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    fun saveBook(input: BookInput): Long =\n        sqlClient\n            .save(input)\n            .modifiedEntity\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .id\n}\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4fdd\u5b58\u957f\u5173\u8054",children:"\u4fdd\u5b58\u957f\u5173\u8054"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"src/main/dto"}),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4efb\u610f\u6269\u5c55\u540d\u4e3a",(0,r.jsx)(n.code,{children:"dto"}),"\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u5176\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"export com.example.model.BookStore\n    -> package com.example.model.dto\n\ninput CompositeBookStoreInput {\n    #allScalars(this)\n    books {\n        #allScalars(this)\n        -id\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7f16\u8bd1\uff0c\u751f\u6210\u57fa\u4e8eJava/Kotlin\u5b9a\u4e49\u7684DTO\u7c7b\u578b",(0,r.jsx)(n.code,{children:"com.example.model.dto.CompositeBookStoreInput"})]}),"\n",(0,r.jsxs)(s.l,{buttonText:"\u67e5\u770b\u751f\u6210\u7684\u4ee3\u7801",title:"\u7f16\u8bd1\u540e\u751f\u6210\u7684CompositeBookStoreInput",children:[(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package package com.example.model.dto;\n\npublic class CompositeBookStoreInput implements Input<BookStore> {\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    @Nullable\n    private String website;\n\n    private List<TargetOf_books> books;\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    public static class TargetOf_books implements Input<Book> {\n\n        private String name;\n\n        private int edition;\n\n        private BigPrice price;\n\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class CompositeBookStoreInput(\n    val id: Long? = null,\n    val name: String,\n    val website: String? = null,\n    val books: List<TargetOf_books> = emptyList()\n) : Input<BookStore> {\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    class TargetOf_books(\n        val name: String,\n        val edition: Int,\n        val price: BigDecimal\n    ) : Input<Book> {\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n}\n"})})})]}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u5b9e\u4f53\u4e2d\u7684",(0,r.jsx)(n.code,{children:"BookStore.id"}),"\u4e0d\u5141\u8bb8\u4e3anull\uff0c\u4f46\u662f\uff0c\u8fd9\u91ccDTO\u7c7b\u578b\u4e2d\u7684",(0,r.jsx)(n.code,{children:"CompositeBookStoreInput.id"}),"\u5374\u88ab\u5141\u8bb8\u4e3anull\uff0c\n\u8bf7\u53c2\u8003",(0,r.jsx)(n.a,{href:"../../object/view/dto-language#32-input%E7%89%B9%E6%9C%89%E5%8A%9F%E8%83%BD",children:"DTO\u8bed\u8a00/3.2. Input\u7279\u6709\u529f\u80fd"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["\uff0c\u7136\u540e\u521b\u5efa",(0,r.jsx)(n.code,{children:"BookStoreRepository"})]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class BookStoreRepository {\n\n    public long saveBookStore(CompositeBookStoreInput input) {\n        return sqlClient\n            .save(input)\n            .execute()\n            .getModifiedEntity()\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .getId();\n    }\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class BookStoreRepository {\n\n    fun saveBookStore(input: CompositeBookStoreInput): Long =\n        sqlClient\n            .save(input)\n            .modifiedEntity\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .id\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.code,{children:"BookRepository"})]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    public void deleteBook(long id) {\n        sqlClient.deleteById(Book.class, id);\n    }\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    fun deleteBook(id: Long) {\n        sqlClient.deleteById(Book::class, id)\n    }\n}\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>o});var t=l(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);