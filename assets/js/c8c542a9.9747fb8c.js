"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return t?a.createElement(g,r(r({ref:n},m),{},{components:t})):a.createElement(g,r({ref:n},m))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),i=t(34334);const o="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),i=t(67294),o=t(34334),r=t(72389),l=t(67392),s=t(7094),d=t(12466);const m="tabList__CuJ",p="tabItem_LNqP";function u(e){var n;const{lazy:t,block:r,defaultValue:u,values:c,groupId:g,className:b}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),I=(0,l.l)(h,((e,n)=>e.value===n.value));if(I.length>0)throw new Error(`Docusaurus error: Duplicate values "${I.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:v}=(0,s.U)(),[N,D]=(0,i.useState)(y),f=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=g){const e=T[g];null!=e&&e!==N&&h.some((n=>n.value===e))&&D(e)}const C=e=>{const n=e.currentTarget,t=f.indexOf(n),a=h[t].value;a!==N&&(S(n),D(a),null!=g&&v(g,String(a)))},M=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=f.indexOf(e.currentTarget)+1;t=f[n]??f[0];break}case"ArrowLeft":{const n=f.indexOf(e.currentTarget)-1;t=f[n]??f[f.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},b)},h.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>f.push(e),onKeyDown:M,onFocus:C,onClick:C},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,i.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function c(e){const n=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},42407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(83117),i=(t(67294),t(3905)),o=t(65488),r=t(85162);const l={sidebar_position:1,title:"One To One"},s=void 0,d={unversionedId:"mapping/base/association/one-to-one",id:"mapping/base/association/one-to-one",title:"One To One",description:"This chapter introduces how to use the @org.babyfish.jimmer.sql.OneToOne annotation to declare one-to-one association properties.",source:"@site/docs/mapping/base/association/one-to-one.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/one-to-one",permalink:"/jimmer-doc/docs/mapping/base/association/one-to-one",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/association/one-to-one.mdx",tags:[],version:"current",lastUpdatedAt:1704015848,formattedLastUpdatedAt:"Dec 31, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"One To One"},sidebar:"tutorialSidebar",previous:{title:"Association Mapping",permalink:"/jimmer-doc/docs/mapping/base/association/"},next:{title:"Many To One",permalink:"/jimmer-doc/docs/mapping/base/association/many-to-one"}},m={},p=[{value:"Owning Side",id:"owning-side",level:2},{value:"1. Based on Foreign Key",id:"1-based-on-foreign-key",level:3},{value:"2. Based on Join Table",id:"2-based-on-join-table",level:3},{value:"Inverse Side",id:"inverse-side",level:2}],u={toc:p};function c(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter introduces how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.OneToOne")," annotation to declare one-to-one association properties."),(0,i.kt)("p",null,"One-to-one supports bidirectional association. For bidirectional associations, one side must be the owning side and the other side must be the inverse side:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Owning side (required): The actual mapping between the database and association properties to implement unidirectional one-to-one association.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inverse side (optional): If a unidirectional association already exists, the inverse side can be configured as a mirror of the owning side to form a bidirectional association."))),(0,i.kt)("p",null,"Let's assume there are two entity types Customer and Address, and establish a bidirectional one-to-one association between them."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Unlike JPA/Hibernate, the owning side and inverse side can be chosen arbitrarily. Both can be used to persist associations. "),(0,i.kt)("p",{parentName:"admonition"},"The example in this article chooses:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Owning side (required): ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer.address"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inverse side (optional): ",(0,i.kt)("inlineCode",{parentName:"p"},"Address.customer"))))),(0,i.kt)("h2",{id:"owning-side"},"Owning Side"),(0,i.kt)("p",null,"There are two ways to implement a one-to-one association: based on foreign key and based on join table."),(0,i.kt)("h3",{id:"1-based-on-foreign-key"},"1. Based on Foreign Key"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},"@Entity\npublic interface Customer {\n\n    // highlight-next-line\n    @OneToOne\n    Address address();\n\n    ...Omit other code...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},"@Entity\ninterface Customer {\n\n    // highlight-next-line \n    @OneToOne\n    val address: Address\n\n    ...Omit other code...\n}\n")))),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn")," is not used together to explicitly specify the foreign key column name. Jimmer will deduce the column name corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," property based on the ",(0,i.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy"),"."),(0,i.kt)("p",null,"If the default ",(0,i.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy")," is not overridden by the user, the foreign key column name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," property is ",(0,i.kt)("inlineCode",{parentName:"p"},"ADDRESS_ID"),". So the previous code is equivalent to: "),(0,i.kt)("p",null,"Therefore, the above code is equivalent to the following:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},'@Entity\npublic interface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinColumn(name = "ADDRESS_ID")\n    Address address();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},'@Entity\ninterface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinColumn(name = "ADDRESS_ID")\n    val address: Address\n\n    ...Omit other code... \n}\n')))),(0,i.kt)("p",null,"The foreign key can be real or fake. Fake foreign keys are discussed in subsequent documents. Here we assume the foreign key is real, so the corresponding constraint in the database is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"// If foreign key pointing to associated entity is real, create foreign key constraint\nalter table CUSTOMER\n    add constraint FK_CUSTOMER__ADDRESS\n        /* highlight-next-line */\n        foreign key(ADDRESS_ID)\n            references ADDRESS(ID);\n")),(0,i.kt)("h3",{id:"2-based-on-join-table"},"2. Based on Join Table"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},"@Entity\npublic interface Customer {\n\n    @Nullable\n    @OneToOne\n    // highlight-next-line  \n    @JoinTable\n    Address address();\n\n    ...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},"@Entity\ninterface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinTable\n    val address: Address?\n\n    ...\n}\n")))),(0,i.kt)("p",null,"Here, no properties are specified for ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable"),". Jimmer will deduce the column names corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," property based on the ",(0,i.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy"),". "),(0,i.kt)("p",null,"If the default ",(0,i.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy")," is not overridden by the user, the deduced join table information is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join table name: CUSTOMER_ADDRESS_MAPPING"),(0,i.kt)("li",{parentName:"ul"},"Join table foreign key column pointing to current entity: CUSTOMER_ID"),(0,i.kt)("li",{parentName:"ul"},"Join table foreign key column pointing to associated entity: ADDRESS_ID")),(0,i.kt)("p",null,"So the previous code is equivalent to:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},'@Entity\npublic interface Customer {\n\n    @Nullable\n    @OneToOne\n    @JoinTable(\n        /* highlight-start */\n        name = "CUSTOMER_ADDRESS_MAPPING",\n        joinColumnName = "CUSTOMER_ID",\n        inverseJoinColumnName = "ADDRESS_ID"\n        /* highlight-end */  \n    )\n    Address address();\n\n    ...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},'@Entity\ninterface Customer {\n\n    @OneToOne\n    @JoinTable(\n        /* highlight-start */\n        name = "CUSTOMER_ADDRESS_MAPPING",\n        joinColumnName = "CUSTOMER_ID",\n        inverseJoinColumnName = "ADDRESS_ID"\n        /* highlight-end */\n    )\n    val address: Address?\n\n    ...\n}\n')))),(0,i.kt)("p",null,"The join table ",(0,i.kt)("inlineCode",{parentName:"p"},"CUSTOMER_ADDRESS_MAPPING")," is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table CUSTOMER_ADDRESS_MAPPING(\n    CUSTOMER_ID bigint not null,\n    ADDRESS_ID bigint not null\n);\n\nalter table ADDRESS_MAPPING\n    add constraint PK_ADDRESS_MAPPING\n        primary(CUSTOMER_ID, ADDRESS_ID);\n\n// If foreign key pointing to current entity is real, \n// create foreign key constraint\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint FK_CUSTOMER_ADDRESS_MAPPING__CUSTOMER\n        foreign key(CUSTOMER_ID)\n            references CUSTOMER(ID); \n\n// If foreign key pointing to associated entity is real, \n// create foreign key constraint  \nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint FK_CUSTOMER_ADDRESS_MAPPING__ADDRESS\n        foreign key(ADDRESS_ID)\n            references ADDRESS(ID);\n\n// These two constraints are very important.\n// Otherwise this join table expresses a many-to-many association \n// rather than a one-to-one association\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint UQ_CUSTOMER_ADDRESS_MAPPING__CUSTOMER_ID\n        unique(CUSTOMER_ID);\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint UQ_CUSTOMER_ADDRESS_MAPPING__ADDRESS_ID\n        unique(ADDRESS_ID);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The join table has only two foreign keys, both non-null. The join table maintains the association by inserting and deleting data, never storing null data itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The join table has no corresponding ORM entity and does not need an independent primary key. The two foreign keys combined can serve as the primary key. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"By default, the join table represents a many-to-many association. To degrade it to a one-to-one association, a unique constraint must be specified for each foreign key of the join table."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unless for compatibility with existing database design, one-to-one associations are recommended to directly use foreign keys instead of join tables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once a one-to-one association is mapped using a join table, the Jimmer association property must be nullable, because the database cannot guarantee that any entity must have corresponding data in the join table.")))),(0,i.kt)("h2",{id:"inverse-side"},"Inverse Side"),(0,i.kt)("p",null,"The configuration of the inverse side is very simple: just specify that ",(0,i.kt)("inlineCode",{parentName:"p"},"Address.customer")," is the mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer.address"),"."),(0,i.kt)("p",null,"In the following code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Left: The owning side discussed in the previous section  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Right: The inverse side association ",(0,i.kt)("inlineCode",{parentName:"p"},"Address.customer")," introduced in this section, which is the mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer.address")))),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},'@OneToOne(mappedBy = "address")')," indicates that the current property ",(0,i.kt)("inlineCode",{parentName:"p"},"Address.customer")," is the mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer.address"),"."),(0,i.kt)("div",{style:{display:"flex",alignItems:"start"}},(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},'@Entity\npublic interface Customer {\n\n    @OneToOne\n    @JoinColumn(name = "ADDRESS_ID") \n    Address address();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},'@Entity\ninterface Customer {\n\n    @OneToOne\n    @JoinColumn(name = "ADDRESS_ID")\n    val address: Address\n\n    ...Omit other code...\n}\n'))))),(0,i.kt)("div",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mirror",src:t(31024).Z,width:"130",height:"239"}))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Address.java"',title:'"Address.java"'},'@Entity\npublic interface Address {\n\n    // `mappedBy` indicates `Address.customer` \n    // is the mirror of `Customer.address`\n    // highlight-next-line\n    @OneToOne(mappedBy = "address")\n    @Nullable\n    Customer customer();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Address.kt"',title:'"Address.kt"'},'@Entity\ninterface Address {\n\n    // `mappedBy` indicates `Address.customer`\n    // is the mirror of `Customer.address` \n    // highlight-next-line\n    @OneToOne(mappedBy = "address")\n    val customer: Customer?\n\n    ...Omit other code...\n} \n')))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"mappedBy")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"@OneToOne")," is specified, annotations like ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinColumn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable")," must not be used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The one-to-one association property as the inverse side must be nullable. ")))))}c.isMDXComponent=!0},31024:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="}}]);