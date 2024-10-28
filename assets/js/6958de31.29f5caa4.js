"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2914],{3049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=n(74848),i=n(28453),a=n(11470),s=n(19365);function o(e){const t={admonition:"admonition",em:"em",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Multi-thread safety, which is easy to understand and needs no explanation."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"For collection containers that rely on hashCode, such as Set and Map, object immutability is desperately needed."}),"\n",(0,r.jsxs)(t.p,{children:["Once mutable objects are held by hashCode sensitive collection containers like Set or Map ",(0,r.jsx)(t.em,{children:"(as Key)"}),", developers must be very careful to ensure that the data shared by these containers is stable. If a mistake is accidentally made, it usually takes debug tracking to find the problem, which often wastes time and affects efficiency. ",(0,r.jsx)(t.em,{children:"(In fact, hashCode sensitive collection containers holding mutable objects is a common behavior, and it can also be said that most Java code is not strict, developers just avoid this problem.)"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In actual development, there are some other situations where objects are held for a long time. Although not dependent on hashCode, problems can also arise from holding objects for a long time, such as:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Using data persisted in WebSession for a long time"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Using first-level cache, that is, using process-local cache in JVM memory to persist some data for a long time"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Careful developers certainly do not want references in WebSession or Cache that persist data for a long time to share data structures with references leaked to user code, which would lead to uncontrollable mutual interference."}),"\n",(0,r.jsx)(t.p,{children:"Therefore, when performing read/write operations on data structures persisted in WebSession or JVM internal Cache, careful developers will copy mutable data structures once before saving or returning them. Among them, copying when writing is still acceptable, but copying every time when reading is expensive. It can be seen that"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Using mutable objects, whether it is necessary to copy objects to ensure necessary security depends on the developer's ability to foresee risks. This requires developers to have some experience and be cautious by nature. However, even if the risks are foreseen, there is no objective standard for the solution. Being too strict will lead to too many unnecessary copies and waste, and being too loose will lead to insufficient copying and bugs ",(0,r.jsx)(t.em,{children:"(the more team members, the easier to make mistakes)"}),". Moreover, for data of a certain volume, there are often disputes within the team about the strictness of this protection mechanism, which is highly subjective."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:['Using immutable objects, the data structure is only copied in part when it is "modified" ',(0,r.jsx)(t.em,{children:'(Here the "modified" is pseudo-modification, not real modification of the current data, which will be discussed in detail in subsequent documents. Jimmer/Immer internally optimizes this: the modified object will be copied, and from its parent object to the root node, all ancestor nodes will also be copied, while all other unchanged branches still share and reuse the original)'})," to get a new aggregate root reference, and simply share the original reference in all other cases. It has a very strict, indisputable objectivity."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Undoubtedly, development based on objective laws is bound to be superior to development based on subjective feelings, which is very important."})}),"\n"]}),"\n"]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const c={sidebar_position:1,title:"Reason"},d=void 0,u={id:"object/immutable/reason",title:"Reason",description:"Unlike other ORMs, Jimmer uses immutable objects as entity objects.",source:"@site/docs/object/immutable/reason.mdx",sourceDirName:"object/immutable",slug:"/object/immutable/reason",permalink:"/jimmer-doc/docs/object/immutable/reason",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/immutable/reason.mdx",tags:[],version:"current",lastUpdatedAt:1729456376e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Reason"},sidebar:"tutorialSidebar",previous:{title:"Immutability",permalink:"/jimmer-doc/docs/object/immutable/"},next:{title:"Current Situation",permalink:"/jimmer-doc/docs/object/immutable/current-situation"}},h={},m=[{value:"Motivation",id:"motivation",level:2},{value:"Forbid Circular References",id:"forbid-circular-references",level:3},{value:"Incorrect Demo",id:"incorrect-demo",level:3},{value:"Other benefits",id:"other-benefits",level:2}];function b(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Unlike other ORMs, Jimmer uses immutable objects as entity objects."}),"\n",(0,r.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(t.h3,{id:"forbid-circular-references",children:"Forbid Circular References"}),"\n",(0,r.jsx)(t.p,{children:"ORMs are often accompanied by a very headache problem: circular references."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Data structures containing circular references cannot be simply JSON serialized, which is a fatal flaw for HTTP API design."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In fact, this problem can be solved, for example, advanced features of JSON serialization libraries ",(0,r.jsxs)(t.em,{children:["(such as ",(0,r.jsx)(t.a,{href:"https://github.com/FasterXML/jackson",children:"Jackson"}),")"]})," can serialize data structures containing circular references. But this is meaningless, because the serialized result contains special extended content, which cannot be understood by client programming languages."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"As an ORM, Jimmer of course allows users to define bidirectional associations between entity types, which is a powerful capability of ORM."}),"\n",(0,r.jsx)(t.p,{children:"However, when instantiating objects, once the developer has determined the type of the aggregate root, the data structure created can only be a unidirectional tree with the aggregate root object as the starting point."}),"\n",(0,r.jsx)(t.p,{children:"That is, bidirectional associations can be defined between entity types, keeping the possibilities of both directions. When instantiating objects, choose to use one of the association directions according to business characteristics."}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"Jimmer entity-related data structures never contain circular references, so they can be directly involved in JSON serialization and then transmitted via HTTP protocols, while ensuring the simplicity of HTTP transmitted data to ensure that any programming language can understand."}),(0,r.jsx)(t.p,{children:"This brings great simplification to application development."})]}),"\n",(0,r.jsx)(t.h3,{id:"incorrect-demo",children:"Incorrect Demo"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'TreeNode aggregateRoot = Immutables.createTreeNode(aggregateRootDraft ->\n        aggregateRootDraft\n            .setName("Aggregate root") \n            .addIntoChildNodes(childDraft ->\n                childDraft\n                    .setName("Child")\n                    // Throw CircularReferenceException\n                    // highlight-next-line \n                    .setParent(aggregateRootDraft)\n            )\n    );\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val aggregateRoot = TreeNode {\n\n    val that = this\n\n    name = "Aggregate root"\n    childNodes().addBy {\n        name = "Child"\n        // Throw CircularReferenceException\n        // highlight-next-line\n        parent = that \n    }\n}\n'})})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["The above code uses an interface called ",(0,r.jsx)(t.code,{children:"TreeNode"}),", which is the interface type automatically generated by Jimmer based on the user-defined type ",(0,r.jsx)(t.code,{children:"TreeNode"}),"."]}),(0,r.jsxs)(t.p,{children:["Readers can ignore this auto-generated interface for now, later documentation ",(0,r.jsx)(t.a,{href:"../draft",children:"Draft"})," will introduce it."]})]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"This code will cause an exception: org.babyfish.jimmer.CircularReferenceException."}),(0,r.jsx)(t.p,{children:"Jimmer objects are immutable objects. Users can neither build circular references when creating objects, nor form circular references through subsequent modifications. This quality will be preserved forever."})]}),"\n",(0,r.jsx)(t.h2,{id:"other-benefits",children:"Other benefits"}),"\n",(0,r.jsx)(t.p,{children:"In addition to ensuring absolutely no circular references between objects, immutable objects have many other benefits, including:"}),"\n",(0,r.jsx)(l,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(18215),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=b({queryString:n,groupId:i}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),g=(()=>{const e=c??p;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(x,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);