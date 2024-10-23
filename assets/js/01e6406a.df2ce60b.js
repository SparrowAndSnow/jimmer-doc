"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(34334);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),i=n(67294),l=n(34334),r=n(72389),o=n(67392),s=n(7094),p=n(12466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:c,groupId:h,className:k}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[T,E]=(0,i.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==T&&(I(t),E(a),null!=h&&N(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:D,onFocus:O,onClick:O},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},51873:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(83117),i=(n(67294),n(3905)),l=n(65488),r=n(85162);const o={toc:[]};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Initially, people used business fields directly as the primary key of tables. This is the most straightforward and easy to use approach, but it has the following problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unstable primary key"),(0,i.kt)("p",{parentName:"li"},"Since the primary key itself is a business field, it can be modified, which leads to an unstable primary key."),(0,i.kt)("p",{parentName:"li"},"Although the foreign keys that reference it in the database can use ",(0,i.kt)("inlineCode",{parentName:"p"},"on update cascade")," to keep consistency,\nan unstable primary key will cause many problems for systems outside the database, such as caches."),(0,i.kt)("p",{parentName:"li"},"Even if a unified solution to the primary key instability problem can be abstracted at the technical level, it is not recommended, because it makes the system difficult to understand.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High cost of multi-table joins"),(0,i.kt)("p",{parentName:"li"},"Since the primary key itself is a business field, its type is likely to be a relatively long string type rather than a numeric type,\nand it may even be a composite primary key composed of multiple columns, which leads to high cost of multi-table joins."))),(0,i.kt)("p",null,"To solve the above problems, people learned to use data without business meaning as the primary key, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Auto numbering by database"),(0,i.kt)("li",{parentName:"ul"},"Sequence value by database"),(0,i.kt)("li",{parentName:"ul"},"UUID"),(0,i.kt)("li",{parentName:"ul"},"Snowflake ID")),(0,i.kt)("p",null,"To enable idempotent saves for save commands, Jimmer introduces two concepts: Id and Key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@Id: Primary key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@Key: Business primary key"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If Id itself is a business attribute (not recommended), no need to specify Key, because Id itself already represents the uniqueness constraint at the business level.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If Id has no business meaning (recommended), then Key represents what the uniqueness constraint is at the business level."))))),(0,i.kt)("p",null,"See the following example:"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity  \npublic interface TreeNode {\n\n    @Id  \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line \n    @Key  \n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n')))),(0,i.kt)("p",null,"Here, the Id of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TreeNode")," entity uses auto numbering and has no business meaning. Therefore, to better match save commands,\n",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is specified here, consisting of two properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"."),(0,i.kt)("p",null,"The corresponding DDL is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table TREE_NODE(\n    ID bigint not null,\n    NAME varchar(20) not null,\n    PARENT_ID bigint\n);\n\nalter table TREE_NODE\n    add constraint PK_TREE_NODE\n        primary key(ID);\n        \nalter table TREE_NODE\n    add constraint UQ_TREE_NODE\n        /* highlight-next-line */\n        unique(NAME, PARENT_ID); \n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," properties of the entity type decorated with @Key correspond to the UNIQUE constraint ",(0,i.kt)("em",{parentName:"p"},"(or UNIQUE INDEX)")," composed of the ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PARENT_ID")," columns in the database."),(0,i.kt)("p",null,"This uniqueness constraint can be analogized to file systems. File systems allow directories or files with the same name, but do not allow the same name if the parent directory is specified."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Through this example, we see:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Key can consist of multiple properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Foreign keys can be part of Key")))),(0,i.kt)("p",null,"Let's take another look at another example where the properties that make up Key are all properties based on foreign keys:"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  \n    long id();\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    Order order();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Product product();\n\n    int quantity();\n\n    // Snapshot of `product.price`\n    BigDecimal unitPrice(); \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val order: Order\n\n    // highlight-next-line\n    @Key \n    @ManyToOne\n    val product: Product\n\n    val quantity: Int\n\n    // Snapshot of `product.price`\n    val unitPrice: BigDecimal\n}\n")))))}s.isMDXComponent=!0},39186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),l=n(51873),r=n(65488),o=n(85162);const s={sidebar_position:10,title:"Key"},p=void 0,d={unversionedId:"mapping/advanced/key",id:"mapping/advanced/key",title:"Key",description:"Concept",source:"@site/docs/mapping/advanced/key.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/key",permalink:"/jimmer-doc/docs/mapping/advanced/key",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/key.mdx",tags:[],version:"current",lastUpdatedAt:1704015848,formattedLastUpdatedAt:"Dec 31, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Key"},sidebar:"tutorialSidebar",previous:{title:"Join Table Filter",permalink:"/jimmer-doc/docs/mapping/advanced/join-table-filter"},next:{title:"Remote Association",permalink:"/jimmer-doc/docs/mapping/advanced/remote"}},m={},u=[{value:"Concept",id:"concept",level:2},{value:"Multi-version support",id:"multi-version-support",level:2},{value:"Dynamic Overrides",id:"dynamic-overrides",level:2}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"concept"},"Concept"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"@",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.Key")," is used together with ",(0,i.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"Save Command")," in mutation section.")),(0,i.kt)(l.ZP,{mdxType:"Key"}),(0,i.kt)("p",null,"This article only introduces the configuration of Key. For how to use it further, please refer to ",(0,i.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"Save Command"),"."),(0,i.kt)("h2",{id:"multi-version-support"},"Multi-version support"),(0,i.kt)("p",null,"Jimmer supports ",(0,i.kt)("a",{parentName:"p",href:"./logical-deleted"},"logical deletion"),", which hides deleted data instead of actually deleting it."),(0,i.kt)("p",null,"The unique constraint defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," is only for non-hidden data, not all data in the table, so unique constraint cannot be simply defined by the columns of ",(0,i.kt)("inlineCode",{parentName:"p"},"@key"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the logical deletion flag is datetime"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line \n    @LogicalDeleted("now")\n    @Nullable\n    LocalDateTime deletedTime();\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @LogicalDeleted("now")\n    val deletedTime: LocalDateTime?\n\n    ...other code omitted...\n}\n')))),(0,i.kt)("p",{parentName:"li"},"In this case, combine the columns corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," ",(0,i.kt)("em",{parentName:"p"},"(for this example, ",(0,i.kt)("inlineCode",{parentName:"em"},"NAME"),")")," and the logical deletion flag column ",(0,i.kt)("em",{parentName:"p"},"(for this example, ",(0,i.kt)("inlineCode",{parentName:"em"},"DELETED_TIME"),")")," to define the uniqueness constraint, e.g.:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table BOOK\n    add constraint UQ_BOOK\n        unique(NAME, DELETED_TIME);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the logical deletion flag is other type"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    boolean deleted();\n\n    ...other code omitted...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val deleted: Boolean\n\n    ...other code omitted...\n}\n')))),(0,i.kt)("p",{parentName:"li"},"In this case, combining the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," columns and the logical deletion flag column is no longer a viable approach. Using a conditional unique index is the only option."),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Unfortunately, not all databases support conditional indexes, and the syntax for creating conditional index varies between databases. "),(0,i.kt)("p",{parentName:"admonition"},"Here, PostgreSQL is used as an example:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create unique index BOOK_KEY_INDEX \n    on BOOK(NAME)\n    // highlight-next-line\n    where DELETED = false;\n")))),(0,i.kt)("h2",{id:"dynamic-overrides"},"Dynamic Overrides"),(0,i.kt)("p",null,"Confiugration specified by the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," is called static configuration."),(0,i.kt)("p",null,"Sometimes, different businesses may have different requirements for ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key"),". Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," configurations can be dynamically overridden at runtime."),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setKeyProps(BookProps.NAME, BookProps.EDITION)\n    .execute();\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.save(book) {\n    // highlight-next-line\n    .setKeyProps(Book::name, Book::edition)\n}\n")))))}h.isMDXComponent=!0}}]);