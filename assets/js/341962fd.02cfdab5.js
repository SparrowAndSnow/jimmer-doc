"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1222],{44370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453),l=n(11470),s=n(19365);const o={sidebar_position:2,title:"Delete Statement"},i=void 0,c={id:"mutation/delete-statement",title:"Delete Statement",description:"Basic Usage",source:"@site/docs/mutation/delete-statement.mdx",sourceDirName:"mutation",slug:"/mutation/delete-statement",permalink:"/jimmer-doc/docs/mutation/delete-statement",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/delete-statement.mdx",tags:[],version:"current",lastUpdatedAt:1704100403e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Delete Statement"},sidebar:"tutorialSidebar",previous:{title:"Update Statement",permalink:"/jimmer-doc/docs/mutation/update-statement"},next:{title:"Save Command",permalink:"/jimmer-doc/docs/mutation/save-command/"}},u={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Using JOIN",id:"using-join",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsx)(t.p,{children:"The usage of the delete statement is:"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\n\nint affectedRowCount = sqlClient\n    .createDelete(book) \n    .where(book.name().eq("Learning GraphQL"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'val affectedRowCount = sqlClient\n    .createDelete(Book::class) {\n        where(table.name eq "Learning GraphQL")\n    }\n    .execute() \nprintln("Affected row count: $affectedRowCount")\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"The generated SQL is:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"delete  \nfrom BOOK as tb_1_\nwhere tb_1_.NAME = ?\n"})}),"\n",(0,a.jsx)(t.h2,{id:"using-join",children:"Using JOIN"}),"\n",(0,a.jsx)(t.p,{children:"The delete statement usage below supports JOIN clauses, as follows:"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\n\nint affectedRowCount = sqlClient\n    .createDelete(book)\n    .where(book.store().name().eq("MANNING")) \n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'val affectedRowCount = sqlClient\n    .createDelete(Book::class) {\n        where(table.store.name eq "MANNING")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount") \n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"The finally generated SQL is:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"select\n    distinct tb_1_.ID\nfrom BOOK as tb_1_\ninner join BOOK_STORE as tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\nwhere\n    tb_2_.NAME = ? \n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"delete from BOOK_AUTHOR_MAPPING\nwhere BOOK_ID in(?, ?, ?) \n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"delete from BOOK\nwhere ID in(?, ?, ?)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsxs)(t.p,{children:["If JOIN is used in a delete statement, Jimmer will translate it into ",(0,a.jsx)(t.code,{children:"select"})," + ",(0,a.jsx)(t.code,{children:"delete"}),". First use the ",(0,a.jsx)(t.code,{children:"select"})," statement with ",(0,a.jsx)(t.code,{children:"join"})," clause to query the ids of the data to be deleted, then use ",(0,a.jsx)(t.a,{href:"./delete-command",children:"Delete Command"})," to delete the data."]}),(0,a.jsx)(t.p,{children:"This scheme is valid for any database."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(96540),r=n(18215),l=n(23104),s=n(56347),o=n(205),i=n(57485),c=n(31682),u=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),x=(()=>{const e=c??p;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function w(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function A(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);