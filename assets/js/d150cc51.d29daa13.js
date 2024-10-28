"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9141],{6952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=t(74848),o=t(28453),r=t(11470),l=t(19365);const a={sidebar_position:1,title:"Save Aggregate Root"},s=void 0,c={id:"quick-view/save/export/root",title:"Save Aggregate Root",description:"Overview",source:"@site/docs/quick-view/save/export/root.mdx",sourceDirName:"quick-view/save/export",slug:"/quick-view/save/export/root",permalink:"/jimmer-doc/docs/quick-view/save/export/root",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/save/export/root.mdx",tags:[],version:"current",lastUpdatedAt:1708668447e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Save Aggregate Root"},sidebar:"tutorialSidebar",previous:{title:"Exposing Features",permalink:"/jimmer-doc/docs/quick-view/save/export/"},next:{title:"Save Short Associations",permalink:"/jimmer-doc/docs/quick-view/save/export/short"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Homogeneous Change Scenario",id:"homogeneous-change-scenario",level:2},{value:"Define Input DTO",id:"define-input-dto",level:3},{value:"Generated Code",id:"generated-code",level:3},{value:"Write HTTP Service",id:"write-http-service",level:3},{value:"Heterogeneous Change Scenario",id:"heterogeneous-change-scenario",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Write DTO",id:"write-dto",level:3},{value:"Generated Code",id:"generated-code-1",level:3},{value:"Write HTTP Service",id:"write-http-service-1",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Although Jimmer's data saving capability is designed for arbitrary complex data structures, in order to show how to safely expose the data saving capability step by step, this article only discusses saving a single object, and saving complex data structures will be described in subsequent articles."}),"\n",(0,i.jsx)(n.p,{children:"For more practical guidance, this article discusses two situations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Homogeneous change scenario:"}),"\n",(0,i.jsxs)(n.p,{children:["This is a relatively simple business scenario where the form structure of the ",(0,i.jsx)(n.code,{children:"INSERT"})," operation and the ",(0,i.jsx)(n.code,{children:"UPDATE"})," operation is consistent."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Heterogeneous change scenario:"}),"\n",(0,i.jsxs)(n.p,{children:["This is a relatively complex business scenario where the form structures of the ",(0,i.jsx)(n.code,{children:"INSERT"})," operation and the ",(0,i.jsx)(n.code,{children:"UPDATE"})," operation are inconsistent."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, since the save directive only requires one function call, encapsulating it with ",(0,i.jsx)(n.code,{children:"Repository"})," does not make much sense. In order to simplify unnecessary complexity, this article no longer defines ",(0,i.jsx)(n.code,{children:"Repository"}),", but lets ",(0,i.jsx)(n.code,{children:"Controller"})," use ",(0,i.jsx)(n.code,{children:"sqlClient"})," directly."]}),"\n",(0,i.jsx)(n.h2,{id:"homogeneous-change-scenario",children:"Homogeneous Change Scenario"}),"\n",(0,i.jsx)(n.h3,{id:"define-input-dto",children:"Define Input DTO"}),"\n",(0,i.jsxs)(n.p,{children:["Since we have some understanding of the DTO language in ",(0,i.jsx)(n.a,{href:"../../fetch/export/dto",children:"Query Arbitrary Shape/Exposing Features/Return Output DTO"}),", this article will not repeat the discussion."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install DTO language Intellij plugin: ",(0,i.jsx)(n.a,{href:"https://github.com/ClearPlume/jimmer-dto",children:"https://github.com/ClearPlume/jimmer-dto"})," ",(0,i.jsx)(n.em,{children:"(This process is not required but highly recommended)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new directory ",(0,i.jsx)(n.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.code,{children:"src/main/dto"}),", create a file ",(0,i.jsx)(n.code,{children:"Book.dto"})," and write the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto"',children:"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto  \n\n#highlight-next-line\ninput BookInput {\n    #allScalars(this) \n}  \n...Omit other DTO definitions...\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Unlike the Output DTO in ",(0,i.jsx)(n.a,{href:"../../fetch/export/dto",children:"Query Arbitrary Shape/Exposing Features"}),", the input DTO here uses the ",(0,i.jsx)(n.code,{children:"input"})," modifier"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"generated-code",children:"Generated Code"}),"\n",(0,i.jsx)(n.p,{children:"After compilation, Jimmer will automatically generate the following types:"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"  ',children:'@GeneratedBy( \u2776\n    file = "<yourproject>/src/main/dto/Book.dto"  \n)\npublic class BookInput implements Input<Book> { \u2777\n\n    // highlight-next-line\n    @Nullable \u2778 \n    private Long id;\n\n    @NotNull\n    private String name;\n\n    private int edition;\n\n    @NotNull\n    private BigDecimal price;\n\n    public BookInput(@NotNull Book base) { \u2779\n        ...omitted... \n    }\n\n    @Override  \n    public Book toEntity() { \u277a\n        ...omitted...\n    }\n\n    ...Omit other members...\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.kt"',children:'@GeneratedBy( \u2776\n    file = "<yourproject>/src/main/dto/Book.dto"  \n)\ndata class BookInput(\n    // highlight-next-line \n    id: Long?, \u2778\n    name: String,\n    edition: Int, \n    price: BigDecimal  \n) : Input<Book> { \u2777\n\n    constructor(base: Book): \u2779\n        this(...)  \n\n    override fun toEntity(): Book = \u277a\n        ...  \n}\n'})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2776 Remind developers that this class is automatically generated by Jimmer"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2777 Unlike the Output DTO in ",(0,i.jsx)(n.a,{href:"../../fetch/export/dto",children:"Query Arbitrary Shape/Exposing Features/Return Output DTO"}),", after using the ",(0,i.jsx)(n.code,{children:"input"})," modifier in the DTO language, the generated class will implement the ",(0,i.jsx)(n.code,{children:"Input<Book>"})," interface instead of the ",(0,i.jsx)(n.code,{children:"View<Book>"})," interface."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2778 If an auto increment strategy (such as automatic change, sequence, UUID, snowflake ID) is configured for the ",(0,i.jsx)(n.code,{children:"id"})," attribute of the original entity, using the ",(0,i.jsx)(n.code,{children:"input"})," modifier in the DTO language will cause the id attribute of the DTO to be null."]}),"\n",(0,i.jsx)(n.p,{children:"The final DTO object will be converted to an entity object through \u277a and then saved by Jimmer. If the id attribute of the DTO is null, then after conversion to the entity, the id attribute of the entity will be in an unspecified state."}),"\n",(0,i.jsxs)(n.p,{children:["For save operations that do not explicitly specify ",(0,i.jsx)(n.code,{children:"INSERT"})," mode or ",(0,i.jsx)(n.code,{children:"UPDATE"})," mode:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"id"})," attribute of the entity object is specified, judge whether it should be ",(0,i.jsx)(n.code,{children:"INSERT"})," or ",(0,i.jsx)(n.code,{children:"UPDATE"})," according to ",(0,i.jsx)(n.code,{children:"id"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"id"})," attribute of the entity object is not specified, judge whether it should be ",(0,i.jsx)(n.code,{children:"INSERT"})," or ",(0,i.jsx)(n.code,{children:"UPDATE"})," according to ",(0,i.jsx)(n.code,{children:"key"})," ",(0,i.jsxs)(n.em,{children:["(in this case ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"edition"}),")"]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2779 Convert entity to DTO"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u277a Convert DTO to entity"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"write-http-service",children:"Write HTTP Service"}),"\n",(0,i.jsx)(n.p,{children:"Since DTO can be converted to entities, you can program like this:"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BookInput input = ...omitted...; \nsqlClient.save(input.toEntity());\n"})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val input: BookInput = ...omitted...\nsqlClient.save(input.toEntity())  \n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["In fact, Jimmer provides a more convenient way, so that even calling the ",(0,i.jsx)(n.code,{children:"toEntity"})," method to convert the DTO to an entity is not necessary, so the code can be simplified to:"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BookInput input = ...omitted...;\nsqlClient.save(input);\n"})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val input: BookInput = ...omitted...  \nsqlClient.save(input) \n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Next, you can implement the ",(0,i.jsx)(n.code,{children:"Controller"}),":"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookController.java"',children:'@RestController \npublic class BookController {\n\n    private final JSqlClient sqlClient;  \n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @PutMapping("/book")  \n    public int saveBook(\n        // highlight-next-line\n        @RequestBody BookInput input  \n    ) {\n        return sqlClient  \n            .save(input)\n            .getTotalAffectedRowCount();\n    }\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookController.java" ',children:'class BookController(  \n    private val sqlClient: KSqlClient   \n) {  \n\n    @PutMapping("/book")\n    fun saveBook(\n        // highlight-next-line\n        @RequestBody input: BookInput\n    ): Int =  \n        sqlClient\n            .save(input)\n            .totoalAffectedRowCount  \n}\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"heterogeneous-change-scenario",children:"Heterogeneous Change Scenario"}),"\n",(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Here we assume that there are two types of book management roles:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Provide two roles that can save books:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Operator: Can only modify the price of existing books"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Administrator: Can create and edit all information of books"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For the Administrator role, the Web API for creating new books and the Web API for editing books need to be separated"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"write-dto",children:"Write DTO"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto"',children:"export com.yourcompany.yourproject.model.Book\n        -> package com.yourcompany.yourproject.model.dto  \n\n/**  \n * Input for the `Operator` role to modify books, can only modify the `price` attribute  \n */\ninput BookOperatorUpdateInput {  \n    id! // Override default behavior, id cannot be null  \n    price  \n}  \n\n/**   \n * Input for the `Administrator` role to create new books, no id attribute  \n */\ninput BookAdministratorCreateInput {   \n    #allScalars(this)\n    -id // Creating new books does not need id  \n}   \n\n/** \n * Input for the `Administrator` role to modify books, id attribute cannot be null \n */\ninput BookAdministratorUpdateInput {   \n    #allScalars(this)\n    id! // Override default behavior, id cannot be null   \n}\n...Omit other DTO definitions...  \n"})}),"\n",(0,i.jsx)(n.h3,{id:"generated-code-1",children:"Generated Code"}),"\n",(0,i.jsx)(n.p,{children:"After compilation, the following three types are automatically generated:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BookOperatorUpdateInput"})}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookOperatorUpdateInput"',children:'/**\n * Input for the `Operator` role to modify books, can only modify the `price` attribute\n */\n@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\npublic class BookOperatorUpdateInput implements Input<Book> {  \n\n    private long id;  \n\n    @NotNull\n    private BigDecimal price;  \n\n    ...Omit other methods...\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookOperatorUpdateInput" ',children:'/**\n * Input for the `Operator` role to modify books, can only modify the `price` attribute  \n */\n@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\ndata class BookOperatorUpdateInput(  \n    val id: Long,\n    val price: BigDecimal\n) : Input<Book> {\n    ...Omit other methods...  \n}\n'})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BookAdministratorCreateInput"})}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookAdministratorCreateInput" ',children:'/**   \n * Input for the `Administrator` role to create new books, no id attribute  \n */\n@GeneratedBy(  \n        file = "<yourproject>/src/main/dto/Book.dto"\n)\npublic class BookAdministratorCreateInput implements Input<Book> {   \n\n    @NotNull\n    private String name;  \n\n    private int edition;  \n\n    @NotNull\n    private BigDecimal price;  \n\n    ...Omit other methods...\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookAdministratorCreateInput"',children:'/**   \n * Input for the `Administrator` role to create new books, no id attribute\n */\n@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\ndata class BookAdministratorCreateInput(\n    val name: String,  \n    val edition: Int,\n    val price: BigDecimal\n) : Input<Book> {\n    ...Omit other methods...  \n}\n'})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BookAdministratorUpdateInput"})}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookAdministratorUpdateInput"',children:'/**\n * Input for the `Administrator` role to modify books, id attribute cannot be null  \n */\n@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\npublic class BookAdministratorUpdateInput implements Input<Book> {  \n\n    @NotNull\n    private String name;  \n\n    private int edition;\n\n    @NotNull  \n    private BigDecimal price;\n\n    private long id;\n\n    ...Omit other methods...\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookAdministratorUpdateInput"',children:'/**\n * Input for the `Administrator` role to modify books, id attribute cannot be null\n */\n@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\ndata class BookAdministratorUpdateInput(\n    val name: String,\n    val edition: Int,  \n    val price: BigDecimal,\n    val id: Long\n) : Input<Book> {\n    ...Omit other methods...\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"write-http-service-1",children:"Write HTTP Service"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookController.java"  ',children:'@RestController\npublic class BookController {\n\n    private final JSqlClient sqlClient;  \n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }  \n\n    // highlight-next-line\n    @Secured("ADMINISTRATOR")\n    @PostMapping("/book")\n    public int createBookByAdministrator(\n        // highlight-next-line\n        @RequestBody BookAdministratorCreateInput input\n    ) {\n        return sqlClient\n            .insert(input) \n            .getTotalAffectedRowCount();\n    }\n\n    // highlight-next-line  \n    @Secured("OPERATOR")\n    @PutMapping("/book/byOperator")\n    public int updateBookByOperator(\n        // highlight-next-line\n        @RequestBody BookOperatorUpdateInput input\n    ) {\n        return sqlClient\n            .update(input)\n            .getTotalAffectedRowCount();\n    }\n\n    // highlight-next-line\n    @Secured("ADMINISTRATOR") \n    @PutMapping("/book")\n    public int updateBookByAdministrator(\n        // highlight-next-line\n        @RequestBody BookAdministratorUpdateInput input\n    ) {\n        return sqlClient\n            .update(input)\n            .getTotalAffectedRowCount();\n    }\n}\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookController.java"',children:'class BookController(  \n    private val sqlClient: KSqlClient  \n) {  \n\n    // highlight-next-line\n    @Secured("ADMINISTRATOR")\n    @PutMapping("/book")\n    fun createBookByAdministrator(\n        // highlight-next-line\n        @RequestBody input: BookAdministratorCreateInput\n    ): Int =\n        sqlClient\n            .insert(input)\n            .totalAffectedRowCount\n\n    // highlight-next-line\n    @Secured("OPERATOR")\n    @PutMapping("/book/byOperator") \n    fun createBookByAdministrator(\n        // highlight-next-line\n        @RequestBody input: BookOperatorUpdateInput\n    ): Int =  \n        sqlClient\n            .update(input)\n            .totalAffectedRowCount\n\n    // highlight-next-line \n    @Secured("ADMINISTRATOR")  \n    @PutMapping("/book/byOperator")\n    fun updateBookByAdministrator(\n        // highlight-next-line\n        @RequestBody input: BookAdministratorUpdateInput\n    ): Int =\n        sqlClient\n            .update(input)\n            .totalAffectedRowCount\n}\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"It is not difficult to find that no matter how diversified the Input DTO parameters are, Jimmer completes the data saving with one method call."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(18215);const o={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(96540),o=t(18215),r=t(23104),l=t(56347),a=t(205),s=t(57485),c=t(31682),d=t(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:o}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),j=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&s(j)}),[j]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function f(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),o=a[t].value;o!==i&&(c(n),l(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);