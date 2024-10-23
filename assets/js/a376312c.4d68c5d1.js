"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34334);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(83117),r=a(67294),i=a(34334),l=a(72389),o=a(67392),p=a(7094),s=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:d,groupId:k,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:T}=(0,p.U)(),[N,x]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=k){const e=f[k];null!=e&&e!==N&&h.some((t=>t.value===e))&&x(e)}const B=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==N&&(E(t),x(n),null!=k&&T(k,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:B,onClick:B},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},45387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(83117),r=(a(67294),a(3905)),i=a(65488),l=a(85162);const o={sidebar_position:2,title:"MappedSuperclass"},p=void 0,s={unversionedId:"mapping/advanced/mapped-super-class",id:"mapping/advanced/mapped-super-class",title:"MappedSuperclass",description:"Basic Usage",source:"@site/docs/mapping/advanced/mapped-super-class.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/mapped-super-class",permalink:"/jimmer-doc/docs/mapping/advanced/mapped-super-class",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/mapped-super-class.mdx",tags:[],version:"current",lastUpdatedAt:1704015848,formattedLastUpdatedAt:"Dec 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"MappedSuperclass"},sidebar:"tutorialSidebar",previous:{title:"Embedded Properties",permalink:"/jimmer-doc/docs/mapping/advanced/embedded"},next:{title:"Logical Deletion",permalink:"/jimmer-doc/docs/mapping/advanced/logical-deleted/"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Multiple Inheritance",id:"multiple-inheritance",level:2}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.MappedSuperclass")," is used to provide abstract super types that can be inherited by entities."),(0,r.kt)("p",null,"The super type itself is not an entity, but can be inherited by multiple entity types to avoid duplicate declaration of the same properties in multiple entities."),(0,r.kt)("p",null,"Let's look at an example. First define the super type:"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BaseEntity.java"',title:'"BaseEntity.java"'},"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    @ManyToOne\n    User createdBy();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    User modifiedBy();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BaseEntity.kt"',title:'"BaseEntity.kt"'},"// highlight-next-line  \n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    @ManyToOne\n    val createdBy: User\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    val modifiedBy: User\n}\n")))),(0,r.kt)("p",null,"Other entities can inherit it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BookStore")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},"@Entity\n// highlight-next-line\npublic interface BookStore extends BaseEntity {\n\n    ...Omit other code...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},"@Entity\n// highlight-next-line\ninterface BookStore : BaseEntity {\n\n    ...Omit other code...\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Book")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\n// highlight-next-line \npublic interface Book extends BaseEntity {\n\n    ...Omit other code...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\n// highlight-next-line\ninterface Book : BaseEntity {\n\n    ...Omit other code...\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Author")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},"@Entity\n// highlight-next-line\npublic interface Author extends BaseEntity {\n\n    ...Omit other code...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},"@Entity\n// highlight-next-line\ninterface Author : BaseEntity {\n\n    ...Omit other code...\n}\n")))))),(0,r.kt)("h2",{id:"multiple-inheritance"},"Multiple Inheritance"),(0,r.kt)("p",null,"Types decorated with ",(0,r.kt)("inlineCode",{parentName:"p"},"MappedSuperclass")," support multiple inheritance. Other types can inherit from multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"MappedSuperclass")," super types."),(0,r.kt)("p",null,"Add a new abstract interface ",(0,r.kt)("inlineCode",{parentName:"p"},"TenantAware")," to be inherited by all multi-tenant entities:"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TenantAware.java"',title:'"TenantAware.java"'},"// highlight-next-line\n@MappedSuperclass  \npublic interface TenantAware {\n\n    String tenant();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TenantAware.kt"',title:'"TenantAware.kt"'},"// highlight-next-line\ninterface TenantAware {\n\n    val tenant: String\n}\n")))),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\n// highlight-next-line\npublic interface Book extends BaseEntity, TenantAware {\n\n    ...Omit other code...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\n// highlight-next-line\ninterface Book : BaseEntity, TenantAware {\n\n    ...Omit other code...\n}\n")))),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," to inherit not only ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntty")," but also ",(0,r.kt)("inlineCode",{parentName:"p"},"TenantAware"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The role of ",(0,r.kt)("inlineCode",{parentName:"p"},"@MapperSuperclass")," is not just to reduce duplicate code, it can also cooperate with two other functions:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../query/global-filter"},"Global Filters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../mutation/draft-interceptor"},"Interceptors"))),(0,r.kt)("p",{parentName:"admonition"},"When used in cooperation with them, multiple inheritance can provide good flexibility.")))}d.isMDXComponent=!0}}]);