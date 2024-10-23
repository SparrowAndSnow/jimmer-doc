"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2508],{86153:(e,t,a)=>{a.d(t,{_:()=>j});var n=a(67294),i=a(87357),o=a(83321),r=a(61903),s=a(23599),l=a(86886),d=a(67720),c=a(90629),m=a(7906),p=a(295),u=a(53252),h=a(72882),k=a(53184),y=a(53816),b=a(24661),g=a(96540),N=a(93946),v=a(41733),f=a(50657),I=a(31425),C=a(6514),Z=a(58951),E=a(37645),T=a(52263),x=a(59457),w=a(53143);const j=(0,n.memo)((()=>{const{i18n:e}=(0,T.Z)(),t=(0,w.S)(),a=(0,n.useMemo)((()=>t?A:B),[t]),j=(0,n.useMemo)((()=>{const e=new Map;for(const t of a)e.set(t.id,t);return e}),[a]),_=(0,n.useMemo)((()=>t?S:L),[t]),q=(0,n.useMemo)((()=>{const e=new Map;for(const t of _)e.set(t.id,t);return e}),[_]),[M,U]=(0,x.x)((()=>({userId:1,province:j.get(1).province,city:j.get(1).city,address:j.get(1).address,items:[{__rowId:1,productId:1,name:q.get(1).name,quantity:2},{__rowId:2,productId:10,name:q.get(10).name,quantity:1}]}))),D=(0,n.useMemo)((()=>Math.max(...M.items.map((e=>e.__rowId)))+1),[M]),z=(0,n.useCallback)((e=>{const t=j.get(parseInt(e.target.value));void 0!==t&&U((e=>{e.userId=t.id,e.province=t.province,e.city=t.city,e.address=t.address}))}),[U,j]),F=(0,n.useCallback)((e=>{U((t=>{t.province=e.target.value}))}),[U]),O=(0,n.useCallback)((e=>{U((t=>{t.city=e.target.value}))}),[U]),G=(0,n.useCallback)((e=>{U((t=>{t.address=e.target.value}))}),[U]),K=(0,n.useCallback)(((e,t)=>{U((a=>{for(const n of a.items)if(n.__rowId===t){n.productId=parseInt(e.target.value),P(a);break}}))}),[U]),W=(0,n.useCallback)(((e,t)=>{U((a=>{for(const n of a.items)if(n.__rowId===t){n.quantity=parseInt(e.target.value),P(a);break}}))}),[U]),V=(0,n.useCallback)((e=>{U((t=>{for(let a=t.items.length-1;a>=0;--a)if(t.items[a].__rowId===e){t.items.splice(a,1);break}}))}),[U]),Q=(0,n.useCallback)((()=>{U((e=>{e.items.push({__rowId:D,quantity:1})}))}),[U,D]),[J,R]=(0,n.useState)(!1),X=(0,n.useCallback)((()=>{R(!0)}),[]),H=(0,n.useCallback)((()=>{R(!1)}),[]);return n.createElement(c.Z,{elevation:3,style:{padding:"1.5rem"}},n.createElement(i.Z,{component:"form",noValidate:!0,autoComplete:"off"},n.createElement(l.ZP,{container:!0,spacing:2},n.createElement(l.ZP,{item:!0,xs:4},n.createElement(r.Z,{fullWidth:!0,select:!0,label:t?"\u8d2d\u4e70\u4eba":"Purchaser",value:M.userId,onChange:z},a.map((e=>n.createElement(s.Z,{key:e.id,value:e.id},e.nickName))))),n.createElement(l.ZP,{item:!0,xs:4},n.createElement(r.Z,{fullWidth:!0,label:t?"\u7701\u4efd":"Province",value:M.province,onChange:F})),n.createElement(l.ZP,{item:!0,xs:4},n.createElement(r.Z,{fullWidth:!0,label:t?"\u57ce\u5e02":"City",value:M.city,onChange:O})),n.createElement(l.ZP,{item:!0,xs:12},n.createElement(r.Z,{fullWidth:!0,label:t?"\u5730\u5740":"Address",value:M.address,onChange:G})),n.createElement(l.ZP,{item:!0,xs:12},n.createElement(d.Z,{textAlign:"left"},t?"\u8ba2\u5355\u660e\u7ec6":"Order Items"),n.createElement(h.Z,{component:c.Z},n.createElement(m.Z,{size:"small"},n.createElement(k.Z,null,n.createElement(y.Z,null,n.createElement(u.Z,null,t?"\u5546\u54c1":"Commodity"),n.createElement(u.Z,null,t?"\u6570\u91cf":"Quantity"),n.createElement(u.Z,null,t?"\u5355\u4ef7":"Unit price"),n.createElement(u.Z,null,t?"\u660e\u7ec6\u4ef7":"Item price"),n.createElement(u.Z,null,t?"\u5220\u9664":"Delete"))),n.createElement(p.Z,null,M.items.map((e=>{const t=void 0!==e.productId?q.get(e.productId):void 0;return n.createElement(y.Z,{key:e.__rowId},n.createElement(u.Z,null,n.createElement(r.Z,{select:!0,value:null==t?void 0:t.id,variant:"standard",size:"small",onChange:t=>{K(t,e.__rowId)}},_.map((e=>n.createElement(s.Z,{key:e.id,value:e.id},e.name))))),n.createElement(u.Z,null,n.createElement(r.Z,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:t=>{W(t,e.__rowId)}})),n.createElement(u.Z,null,null==t?void 0:t.price),n.createElement(u.Z,null,void 0!==t&&t.price*e.quantity),n.createElement(u.Z,null,n.createElement(N.Z,{onClick:()=>V(e.__rowId)},n.createElement(v.Z,null))))}))),n.createElement(b.Z,null,n.createElement(y.Z,null,n.createElement(u.Z,{colSpan:5},n.createElement(o.Z,{onClick:Q},n.createElement(g.Z,null),t?"\u6dfb\u52a0":"Add"))))))),n.createElement(l.ZP,{item:!0,xs:12},t?"\u603b\u989d":"Total price",":",M.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>q.get(e.productId).price*e.quantity)).reduce(((e,t)=>e+t),0)),n.createElement(l.ZP,{item:!0,xs:12},n.createElement(o.Z,{variant:"contained",onClick:X},t?"\u63d0\u4ea4":"Submit")))),n.createElement(f.Z,{open:J,onClose:H},n.createElement(E.Z,null,t?"\u4fe1\u606f":"Info"),n.createElement(C.Z,null,n.createElement(Z.Z,null,t?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),n.createElement(I.Z,null,n.createElement(o.Z,{onClick:H},t?"\u5173\u95ed":"Close"))))})),A=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],B=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],S=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],L=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function P(e){const t=e.items,a=new Map;for(let n=0;n<t.length;n++){const e=t[n];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){t.splice(n--,1);continue}if(void 0===e.productId)continue;const i=a.get(e.productId);void 0===i?a.set(e.productId,e):(i.quantity+=e.quantity,t.splice(n--,1))}}},20036:(e,t,a)=>{a.d(t,{k:()=>g});var n=a(52263),i=a(94054),o=a(33841),r=a(23599),s=a(90629),l=a(43246),d=a(31536),c=a(61903),m=a(50657),p=a(37645),u=a(6514),h=a(31425),k=a(58951),y=a(83321),b=a(67294);const g=(0,b.memo)((()=>{const[e,t]=(0,b.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),a=(0,b.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),g=(0,b.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),N=(0,b.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),v=(0,b.useCallback)((e=>{let a;const n=e.target.value;a="string"==typeof n?parseInt(n):n,-1===a&&(a=void 0),t((e=>({...e,storeId:a})))}),[]),f=(0,b.useCallback)((e=>{let a=[];console.log(e.target.value);const n=e.target.value;a="string"==typeof n?n.split(",").map((e=>parseInt(e))):n,t((e=>({...e,authorIds:a})))}),[]),{i18n:I}=(0,n.Z)(),C=(0,b.useMemo)((()=>"zh"==I.currentLocale||"zh_cn"==I.currentLocale||"zh_CN"==I.currentLocale),[I.currentLocale]),[Z,E]=(0,b.useState)(!1),T=(0,b.useCallback)((()=>{E(!0)}),[]),x=(0,b.useCallback)((()=>{E(!1)}),[]);return b.createElement(s.Z,{elevation:3,style:{padding:"1.5rem",width:500}},b.createElement(d.Z,{spacing:2},b.createElement("h1",null,"Book Form"),b.createElement(c.Z,{label:"Name",value:e.name,onChange:a,error:""===e.name,helperText:""===e.name?"Name is required":""}),b.createElement(c.Z,{label:"Edition",type:"number",value:e.edition,onChange:g}),b.createElement(c.Z,{label:"Price",type:"number",value:e.price,onChange:N}),b.createElement(i.Z,{fullWidth:!0},b.createElement(o.Z,{id:"store-select-label"},"Store"),b.createElement(l.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:v},b.createElement(r.Z,{value:-1},"--NONE--"),b.createElement(r.Z,{value:1},"O'REILLY"),b.createElement(r.Z,{value:2},"MANNING"))),b.createElement(i.Z,{fullWidth:!0},b.createElement(o.Z,{id:"author-multi-select-label"},"Authors"),b.createElement(l.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:f},b.createElement(r.Z,{value:1},"Eve Procello"),b.createElement(r.Z,{value:2},"Alex Banks"),b.createElement(r.Z,{value:3},"Dan Vanderkam"),b.createElement(r.Z,{value:4},"Boris Cherny"),b.createElement(r.Z,{value:5},"Samer Buna"))),b.createElement(i.Z,null,b.createElement(y.Z,{onClick:T,variant:"contained"},C?"\u63d0\u4ea4":"Submit"))),b.createElement(m.Z,{open:Z,onClose:x},b.createElement(p.Z,null,C?"\u4fe1\u606f":"Info"),b.createElement(u.Z,null,b.createElement(k.Z,null,C?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),b.createElement(h.Z,null,b.createElement(y.Z,{onClick:x},"\u5173\u95ed"))))}))},53143:(e,t,a)=>{a.d(t,{S:()=>i});var n=a(52263);function i(){const{i18n:e}=(0,n.Z)(),t=e.currentLocale;return"zh"===t||"zh_cn"===t||"zh_CN"==t}},12872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var n=a(83117),i=(a(67294),a(3905)),o=a(65488),r=a(85162),s=a(20036),l=a(86153);const d={sidebar_position:6,title:"Save Associations"},c=void 0,m={unversionedId:"mutation/save-command/association",id:"mutation/save-command/association",title:"Save Associations",description:"Association Types",source:"@site/docs/mutation/save-command/association.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/association",permalink:"/jimmer-doc/docs/mutation/save-command/association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/association.mdx",tags:[],version:"current",lastUpdatedAt:1729456376,formattedLastUpdatedAt:"Oct 20, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Save Associations"},sidebar:"tutorialSidebar",previous:{title:"Incomplete Object",permalink:"/jimmer-doc/docs/mutation/save-command/incomplete"},next:{title:"Dissociation Operations",permalink:"/jimmer-doc/docs/mutation/save-command/dissociation"}},p={},u=[{value:"Association Types",id:"association-types",level:2},{value:"Short Association",id:"short-association",level:3},{value:"Long Association",id:"long-association",level:3},{value:"Speciality of One-To-Many Associations",id:"speciality-of-one-to-many-associations",level:2},{value:"Entity Definition",id:"entity-definition",level:3},{value:"Using Save Command",id:"using-save-command",level:3},{value:"Dissociate Operations",id:"dissociate-operations",level:2}],h={toc:u};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"association-types"},"Association Types"),(0,i.kt)("p",null,"From the user's perspective, there are two types of associations in the data structure to be saved:"),(0,i.kt)("h3",{id:"short-association"},"Short Association"),(0,i.kt)("p",null,"A so-called short association indicates that only the association itself between the current object and other objects is modified, with no interest in modifying the associated objects."),(0,i.kt)("p",null,"Usually, the UI design will use radio buttons ",(0,i.kt)("em",{parentName:"p"},"(associated reference)")," or checkboxes ",(0,i.kt)("em",{parentName:"p"},"(associated collection)"),". "),(0,i.kt)(s.k,{mdxType:"ShortAssociation"}),(0,i.kt)("div",null,"\xa0"),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Single-select dropdown corresponds to the many-to-one association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multiple-select dropdown corresponds to the many-to-many association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In actual projects, the available data may be too much to be designed as a dropdown UI. In this case, an modal selector with filtering and pagination can be used instead of a dropdown, which is a common workaround.")),(0,i.kt)("p",null,"Since the user only wants to modify the association itself between the current object and other objects, without further modifying the associated objects, the UI cannot have nested multi-level associations. This is why it is called a ",(0,i.kt)("strong",{parentName:"p"},"short association"),". "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When passing data structures of arbitrary shapes as parameters to the save command, short associations can be specified in two ways:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The associated object has only the id property")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The associated object has only the key properties")))),(0,i.kt)("p",null,"Two examples are shown below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The associated object has only the id property:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // Associated object has only id property  \n        // highlight-next-line\n        store.setId(2L);\n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only id property\n        // highlight-next-line \n        author.setId(4L); \n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only id property\n        // highlight-next-line\n        author.setId(5L);\n    });\n});\nsqlClient.save(book);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store {\n        // Associated object has only id property\n        // highlight-next-line\n        id = 2L\n    }\n    authors().addBy {\n        // Associated object has only id property\n        // highlight-next-line\n        id = 4L\n    }\n    authors().addBy {\n        // Associated object has only id property \n        // highlight-next-line\n        id = 5L\n    }\n}\nsqlClient.save(book)\n')))),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The data structure is hard-coded here only for demonstration. In actual projects the data structure to be saved is submitted by the front-end UI."),(0,i.kt)("p",{parentName:"admonition"},"Of course, if the user defines the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorIds")," property according to ",(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/id-view"},"Mapping/Advanced mapping/View Properties/IdView"),", the above code can be simplified, for example:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"draft.setAuthorIds(Arrays.asList(4L, 5L));\n")),(0,i.kt)("p",{parentName:"admonition"},"For greater applicability of the examples, it is not assumed here that the user has defined ",(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/id-view"},"IdView")," properties for the entity type. Subsequent documents will not be reminded again. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The associated object has only the key property:"),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the following code, it is assumed that:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The key property of ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore")," type is ",(0,i.kt)("inlineCode",{parentName:"p"},"name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The key properties of ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," type are ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lastName")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"In actual projects, this uniqueness constraint is not reasonable. It is assumed here to simplify the example. Please don't take this detail too seriously."))))),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // Associated object has only key property, \n        // i.e. `BookStore.name`\n        // highlight-next-line\n        store.setName("MANNING");\n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only key properties, \n        // i.e. `Author.firstName` and `Author.lastName` \n        // highlight-next-line\n        author.setFirstName("Boris").setLastName("Cherny");\n    });\n    draft.addIntoAuthors(author -> {\n        // Associated object has only key properties, \n        // i.e. `Author.firstName` and `Author.lastName`\n        // highlight-next-line\n        author.setFirstName("Samer").setLastName("Buna");\n    });\n});\nsqlClient.save(book);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store {\n        // Associated object has only key property, i.e. `BookStore.name`\n        // highlight-next-line\n        name = "MANNING"\n    }\n    authors().addBy {\n        // Associated object has only key properties, i.e. `Author.firstName` and `Author.lastName`\n        // highlight-next-line\n        firstName = "Boris"\n        // highlight-next-line  \n        lastName = "Cherny"\n    }\n    authors().addBy {\n        // Associated object has only key properties, i.e. `Author.firstName` and `Author.lastName`\n        // highlight-next-line\n        firstName = "Samer"\n        // highlight-next-line\n        lastName = "Buna"\n    }\n}\nsqlClient.save(book)\n')))))),(0,i.kt)("h3",{id:"long-association"},"Long Association"),(0,i.kt)("p",null,"A so-called long association indicates that in addition to modifying the association itself between the current object and other objects, the associated objects need to be further modified. "),(0,i.kt)("p",null,"Usually, the UI design will use nested tables, for example:"),(0,i.kt)(l._,{mdxType:"LongAssociation"}),(0,i.kt)("div",null,"\xa0"),(0,i.kt)("p",null,"Since the user wants not only to modify the association between the current object and other objects, but also to further modify the associated objects, and the associated objects can contain deeper associations, theoretically the UI can have nested multi-level associations. This is why it is called a ",(0,i.kt)("strong",{parentName:"p"},"long association"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Although designers deliberately avoid nesting deeper nested tables in nested tables to ensure UI simplicity, there are still scenarios in actual projects that require maintaining multi-level nested associations on the UI, such as:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The form itself is a tree structure that is edited and then saved as a whole.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Visual UI design, because the UI components themselves are tree structures. After a series of visual drag-and-drop designs by the user, the UI component tree is saved as a whole.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When passing data structures of arbitrary shapes as parameters to the save command, long associations can be specified in two ways:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the id property has already been specified for the associated object, continue to specify any non-id properties for the object ",(0,i.kt)("em",{parentName:"p"},"(including key properties)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Otherwise, all key properties and other properties must be been specified for the associated object."))),(0,i.kt)("p",{parentName:"admonition"},"Regardless of which approach above, specify at least one property for associated objects that is neither id nor key.")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Order order = Immutables.createOrder(draft -> {\n    draft.applyCustomer(customer -> customer.setId(1L));\n    draft.setProvince("Prenzlauer Berg");\n    draft.setCity("Berlin");\n    draft.setAddress("Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany");\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(1L));\n        // Property neither id nor key  \n        // highlight-next-line\n        item.setQuantity(2);\n    });\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(10L));\n        // Property neither id nor key\n        // highlight-next-line\n        item.setQuantity(1);\n    });\n});\nsqlClient.save(order);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val order = Order {\n    customer { id = 1L }\n    province = "Prenzlauer Berg"\n    city = "Berlin" \n    address = "Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"\n    items().addBy {\n        product { id = 1L }\n        // Property neither id nor key\n        // highlight-next-line\n        quantity = 2\n    }\n    items().addBy {\n        product { id = 10L }\n        // Property neither id nor key\n        // highlight-next-line\n        quantity = 1\n    }\n}\nsqlClient.save(order)\n')))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The data structure is hard-coded here only for demonstration. In actual projects the data structure to be saved is submitted by the front-end UI. ")),(0,i.kt)("h2",{id:"speciality-of-one-to-many-associations"},"Speciality of One-To-Many Associations"),(0,i.kt)("p",null,"It was mentioned before:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If the entity type declares the Key property ",(0,i.kt)("em",{parentName:"p"},"(which also means the id has no business meaning other than serving as a unique identifier)"),", then"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the aggregated root object to be saved, it is recommended to specify either the id property or the key properties, otherwise it will be understood as forced insertion.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the associated objects to be saved that this article is discussing, either the id property or all key properties must be specified, otherwise an exception will occur.")))),(0,i.kt)("p",null,"However, there is one exceptional case for one-to-many relationships."),(0,i.kt)("p",null,"Let's look at an example:"),(0,i.kt)("h3",{id:"entity-definition"},"Entity Definition"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key \n    String name();\n\n    // highlight-next-line\n    @Key\n    @Nullable\n    @ManyToOne\n    TreeNode parent();\n\n    ...other properties omitted... \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key \n    @ManyToOne\n    val parent: TreeNode?\n\n    ...other properties omitted...\n}\n")))),(0,i.kt)("h3",{id:"using-save-command"},"Using Save Command"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = Immutables.createTreeNode(food -> {\n    food\n        // highlight-next-line\n        .setParent(null)\n        .setName("Food")\n        .addIntoChildNodes(drink -> {\n            drink\n                .setName("Drink")\n                .addIntoChildNodes(cococola -> {\n                    cococola.setName("Cococola");\n                })\n                .addIntoChildNodes(fanta -> {\n                    fanta.setName("Fanta");\n                });\n            ;\n        })\n        .addIntoAuthors(bread -> {\n            bread\n                .setName("Bread")\n                .addIntoChildNodes(daguette -> {\n                    daguette.setName("Baguette");\n                })\n                .addIntoChildNodes(ciabatta -> {\n                    ciabatta.setName("Ciabatta");\n                })\n        });\n    ;\n});\nsqlClient.save(treeNode);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = TreeNode {\n    // highlight-next-line\n    parent = null\n    name = "Food"\n    childNodes().addBy {\n        name = "Drinks" \n        childNodes().addBy {\n            name = "Cococola"\n        }\n        childNodes().addBy {\n            name = "Fanta"\n        }\n    }\n    childNodes().addBy {\n        name = "Bread"\n        childNodes().addBy {\n            name = "Baguette"\n        }\n        childNodes().addBy {\n            name = "Ciabatta"\n        }\n    }\n}\nsqlClient.save(treeNode)\n')))),(0,i.kt)("p",null,"The key properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TreeNode")," type are ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the root node, if the id property is not specified, it is recommended to specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," properties, otherwise it will be understood as forced insertion.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the child nodes, if the id property is not specified, the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," properties must be specified, otherwise an exception will occur."))),(0,i.kt)("p",null,"However, in this example, except for the root node object, the ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," property of all other objects is not specified. This code does not seem to execute normally."),(0,i.kt)("p",null,"In fact, this code can run correctly, because the save command makes a special provision for one-to-many associations: "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the data structure to be saved contains some child objects held by the parent object through a one-to-many association ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"TreeNode.childNodes")," in this example)"),", then the reverse many-to-one association of these child objects ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"TreeNode.parent")," in this example)")," will be deemed by the save command to have been set.")),(0,i.kt)("p",null,"So in the above example, the save command will consider the ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," property of all child nodes to have already been set. That is, all child objects have both the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," properties at the same time, so the save command can run smoothly."),(0,i.kt)("h2",{id:"dissociate-operations"},"Dissociate Operations"),(0,i.kt)("p",null,"For associated objects, insert or update operations are not much different from saving the aggregated root object operations introduced earlier. The user just needs to remember that associated objects are not controlled by ",(0,i.kt)("a",{parentName:"p",href:"./save-mode"},"Save Mode")," ",(0,i.kt)("em",{parentName:"p"},"(or it can be considered that the save mode for associated objects is only ",(0,i.kt)("inlineCode",{parentName:"em"},"UPSERT"),")"),"."),(0,i.kt)("p",null,"However, associated objects have a very special operation: dissociation. "),(0,i.kt)("p",null,"Dissociation is a very important concept. Due to limited space, we will discuss it in detail in the ",(0,i.kt)("a",{parentName:"p",href:"./dissociation"},"next document"),"."))}k.isMDXComponent=!0}}]);