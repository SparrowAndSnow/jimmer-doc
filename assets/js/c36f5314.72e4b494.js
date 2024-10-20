"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(r,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(34334);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),o=n(67294),l=n(34334),s=n(72389),i=n(67392),r=n(7094),u=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:s,defaultValue:c,values:m,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==T&&!b.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:A,setTabGroupChoices:y}=(0,r.U)(),[f,I]=(0,o.useState)(T),L=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=h){const e=A[h];null!=e&&e!==f&&b.some((t=>t.value===e))&&I(e)}const x=e=>{const t=e.currentTarget,n=L.indexOf(t),a=b[n].value;a!==f&&(N(t),I(a),null!=h&&y(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=L.indexOf(e.currentTarget)+1;n=L[t]??L[0];break}case"ArrowLeft":{const t=L.indexOf(e.currentTarget)-1;n=L[t]??L[L.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},k)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>L.push(e),onKeyDown:O,onFocus:x,onClick:x},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":f===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function m(e){const t=(0,s.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},64124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(83117),o=(n(67294),n(3905)),l=n(65488),s=n(85162);const i={sidebar_position:5,title:"Mutable Association Table"},r=void 0,u={unversionedId:"mutation/associations",id:"mutation/associations",title:"Mutable Association Table",description:"Overview",source:"@site/docs/mutation/associations.mdx",sourceDirName:"mutation",slug:"/mutation/associations",permalink:"/jimmer-doc/docs/mutation/associations",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/associations.mdx",tags:[],version:"current",lastUpdatedAt:1729445762,formattedLastUpdatedAt:"Oct 20, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Mutable Association Table"},sidebar:"tutorialSidebar",previous:{title:"Delete Command",permalink:"/jimmer-doc/docs/mutation/delete-command"},next:{title:"Interceptor before save",permalink:"/jimmer-doc/docs/mutation/draft-interceptor"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Insert Association",id:"insert-association",level:2},{value:"Reverse Conversion",id:"reverse-conversion",level:2},{value:"Bulk Insert",id:"bulk-insert",level:2},{value:"Check Existence",id:"check-existence",level:2},{value:"Delete Association",id:"delete-association",level:2},{value:"Bulk Delete",id:"bulk-delete",level:2},{value:"Notes",id:"notes",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"First, the association table is hidden by the object model, with no direct corresponding entity type. This problem has been explained in ",(0,o.kt)("a",{parentName:"p",href:"../query/associations"},"Query Association Table"),", so I won't repeat it here."),(0,o.kt)("p",null,"In addition, in the ",(0,o.kt)("a",{parentName:"p",href:"./save-command"},"Save Command")," section, we introduced the save command. It can compare the existing data structure in the database with the new data structure the user wants to save. If a relation property based on the association table has changed, the association table will be modified."),(0,o.kt)("p",null,"Admittedly, the Save Command feature is very powerful, and modifying the association table is just a very small part of its capabilities. However, sometimes we just need a simple way to insert or delete data directly from the association table, we don't need the full capabilities of the Save Command.  "),(0,o.kt)("p",null,"Jimmer allows developers to directly insert and delete data from the association table in a simpler way."),(0,o.kt)("h2",{id:"insert-association"},"Insert Association"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .save(12L, 3L); \n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(Book::authors)\n    // highlight-next-line\n    .save(12L, 3L)\n")))),(0,o.kt)("p",null,"The generated SQL is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into\n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        BOOK_ID, AUTHOR_ID  \n    )\n    values (?, ?)\n")),(0,o.kt)("p",null,"This example shows how to use the association property ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors")," to operate the association table."),(0,o.kt)("p",null,"Similarly, we can achieve the same goal through the association property ",(0,o.kt)("inlineCode",{parentName:"p"},"Authors.books"),":"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(AuthorProps.BOOKS) \n    // highlight-next-line\n    .save(3L, 12L);\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(Author::books)\n    // highlight-next-line \n    .save(3L, 12L) \n")))),(0,o.kt)("p",null,"Note that compared to the previous example, the parameter order of the ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," method is different due to the different association direction."),(0,o.kt)("p",null,"The generated SQL is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into\n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        AUTHOR_ID, BOOK_ID\n    ) \n    values (?, ?)\n")),(0,o.kt)("p",null,"It's easy to see that the order of the insert statement columns is also different."),(0,o.kt)("h2",{id:"reverse-conversion"},"Reverse Conversion"),(0,o.kt)("p",null,"For bidirectional associations, ",(0,o.kt)("inlineCode",{parentName:"p"},"reverse")," can be used to switch between forward and reverse associations:"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Associations bookToAuthor = sqlClient\n    .getAssociations(BookProps.AUTHORS);\nAssociations authorToBook = sqlClient\n    .getAssociations(AuthorProps.BOOKS);\nAssociations authorToBook2 =\n    // highlight-next-line\n    bookToAuthor.reverse(); \nAssociations bookToAuthor2 =\n    // highlight-next-line\n    authorToBook.reverse();\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookToAuthor = \n    sqlClient.getAssociations(\n        Book::authors\n    )\nval authorToBook = \n    sqlClient.getAssociations(\n        Author::books  \n    )\nval authorToBook2 =\n    // highlight-next-line\n    bookToAuthor.reverse()\nval bookToAuthor2 =\n    // highlight-next-line \n    authorToBook.reverse()\n")))),(0,o.kt)("p",null,"In this code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookToAuthor")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"bookToAuthor2")," are completely equivalent. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authorToBook")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"authorToBook2")," are completely equivalent.")),(0,o.kt)("h2",{id:"bulk-insert"},"Bulk Insert"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .saveAll(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L), \n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L)  \n        )\n    );\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors  \n    )\n    // highlight-next-line \n    .saveAll(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    ) \n")))),(0,o.kt)("p",null,"Here there are 3 books, two authors, and 6 total combination ways. The ",(0,o.kt)("inlineCode",{parentName:"p"},"saveAll")," method inserts all 6 combinations into the association table, generating the following SQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values\n    /* highlight-start */\n    (?, ?),\n    (?, ?), \n    (?, ?),\n    (?, ?),\n    (?, ?),\n    (?, ?) \n    /* highlight-end */\n")),(0,o.kt)("p",null,"The above approach is very cumbersome. For ",(0,o.kt)("inlineCode",{parentName:"p"},"3 * 2 = 6")," it is still acceptable, but what about ",(0,o.kt)("inlineCode",{parentName:"p"},"7 * 9 = 63"),"? Should we really construct 63 tuples? "),(0,o.kt)("p",null,"Jimmer-sql provides a shorthand syntax:"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // Save cartesian product of two id sets  \n    // highlight-next-line\n    .saveAll(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    );\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // Save cartesian product of two id sets\n    // highlight-next-line \n    .saveAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n")))),(0,o.kt)("p",null,"The above ",(0,o.kt)("inlineCode",{parentName:"p"},"saveAll")," method takes two collection parameters and inserts the cartesian product of the two collections into the association table, so its functionality is the same as the previous example."),(0,o.kt)("h2",{id:"check-existence"},"Check Existence"),(0,o.kt)("p",null,"Inserting id tuples that already exist into the association table will cause errors, as it violates uniqueness constraints."),(0,o.kt)("p",null,"To solve this problem, existence checks can be performed."),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    .saveAllCommand(\n        Arrays.asList(\n            10L, 11L, 12L\n        ), \n        Arrays.asList(\n            1L, 3L\n        )\n    )\n    // highlight-next-line\n    .checkExistence()\n    .execute();\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .saveAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L),\n        // highlight-next-line\n        checkExistence = true\n    )\n")))),(0,o.kt)("p",null,"Here ",(0,o.kt)("inlineCode",{parentName:"p"},"checkExistence()")," indicates that it will first check which data to be inserted already exists, and then only insert data that does not exist."),(0,o.kt)("p",null,"The generated SQL statements are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check which data to be inserted already exists:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    BOOK_ID, AUTHOR_ID\nfrom BOOK_AUTHOR_MAPPING\nwhere\n    (BOOK_ID, AUTHOR_ID) in(\n        (?, ?),\n        (?, ?), \n        (?, ?)\n    )\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using the results of the previous query, the data that really needs to be inserted can be calculated. Skip this step if no data needs to be inserted; otherwise, execute this step."),(0,o.kt)("p",{parentName:"li"},"Here, assuming it is determined that only two rows of data really need to be inserted, the generated SQL is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID  \n) values\n    (?, ?),\n    (?, ?)\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some databases support ",(0,o.kt)("inlineCode",{parentName:"p"},"UPSERT")," ",(0,o.kt)("em",{parentName:"p"},"(such as Postgres' ",(0,o.kt)("inlineCode",{parentName:"em"},"insert into ... on conflict ..."),")"),", which will be supported before Jimmer-1.0.0")),(0,o.kt)("h2",{id:"delete-association"},"Delete Association"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .delete(12L, 3L);\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .delete(12L, 3L)\n")))),(0,o.kt)("p",null,"The generated SQL is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING\nwhere\n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?) \n    )\n")),(0,o.kt)("h2",{id:"bulk-delete"},"Bulk Delete"),(0,o.kt)("p",null,"Similar to bulk insert, there are two ways to bulk delete:"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(\n        BookTableEx.claBookProps.AUTHORS)\n    // highlight-next-line \n    .deleteAll(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L), \n        )\n    );\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .deleteAll(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n")))),(0,o.kt)("p",null,"Or:"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .deleteAll(\n        Arrays.asList(10L, 11L, 12L),\n        Arrays.asList(1L, 3L)\n    ); \n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .deleteAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L) \n    )\n")))),(0,o.kt)("p",null,"The generated SQL is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING  \nwhere\n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?),\n        (?, ?)\n    )\n")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please do not abuse this feature. This feature is only suitable for simple insertion and deletion of association tables. It is recommended to only use it when facing the simplest incremental operations.  ")),(0,o.kt)("p",null,"Let's look at an example. If comparison with existing data in the database is needed, this feature is obviously not the optimal choice, and the code will be very cumbersome, as follows:"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Inappropriate Usage Example"',title:'"Inappropriate',Usage:!0,'Example"':!0},"public void setAuthors(long bookId, Collection<Long> authorIds) {\n\n    // Get old author ids\n    AssociationTable<Book, BookTableEx, Author, AuthorTableEx> table =\n                AssociationTable.of(BookTableEx.class, BookTableEx::authors);    \n    List<Long> oldAuthorIds = sqlClient\n            .createAssociationQuery(table)\n            .where(table.source().id().eq(bookId))\n            .select(table.target().id())\n            .execute();\n\n    // Delete `oldAuthorIds - authorIds`\n    List<Long> detachedAuthorIds = new ArrayList<>(oldAuthorIds);\n    detachedAuthorIds.removeAll(authorIds);\n    sqlClient.getAssociations(BookProps.AUTHORS).deleteAll(\n            Collections.singleton(bookId),\n            detachedAuthorIds\n    );\n\n    // Insert `authorIds - oldAuthorIds`\n    List<Long> attachedAuthorIds = new ArrayList<>(authorIds);\n    attachedAuthorIds.removeAll(oldAuthorIds);\n    sqlClient.getAssociations(BookProps.AUTHORS).saveAll(\n            Collections.singleton(bookId),\n            attachedAuthorIds\n    );\n}\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Inappropriate Usage Example"',title:'"Inappropriate',Usage:!0,'Example"':!0},"fun setAuthors(bookId: Long, authorIds: Collection<Long>) {\n    // Get old author ids\n    val oldAuthorIds = sqlClient.queries.forList(Book::authors) {\n        where(table.source.id eq bookId)\n        select(table.target.id)\n    }.execute().toSet()\n\n    // Delete `oldAuthorIds - authorIds`\n    sqlClient\n        .getAssociations(Book::authors)\n        .deleteAll(listOf(bookId), oldAuthorIds - authorIds)\n\n    // Insert `authorIds - oldAuthorIds` \n    sqlClient\n        .getAssociations(Book::authors)\n        .saveAll(listOf(bookId), authorIds - oldAuthorIds)\n}\n")))),(0,o.kt)("p",null,"It is obvious that dealing with it this way is very cumbersome.  "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When the business scenario is no longer simple addition or deletion, ",(0,o.kt)("a",{parentName:"p",href:"./save-command"},"Save Command")," is a better choice, as follows:")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Better Usage Example"',title:'"Better',Usage:!0,'Example"':!0},"public void setAuthors(long bookId, Collection<Long> authorIds) {\n    sqlClient.save(\n        Immutables.createBook(book -> {\n            book.setId(bookId);\n            book.setAuthorIds(authorIds);\n        })\n    );\n}\n"))),(0,o.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Better Usage Example"',title:'"Better',Usage:!0,'Example"':!0},"fun setAuthors(bookId: Long, authorIds: Collection<Long>) {\n    sqlClient.save(\n        new(Book::class).by {\n            id = bookId\n            authorIds = authorIds\n        }\n    )\n}\n")))))}m.isMDXComponent=!0}}]);