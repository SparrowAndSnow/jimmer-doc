"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[622],{54691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=t(74848),a=t(28453),r=t(11470),s=t(19365);const o={sidebar_position:5,title:"View Properties"},l=void 0,d={id:"query/object-fetcher/view",title:"View Properties",description:"IdView",source:"@site/docs/query/object-fetcher/view.mdx",sourceDirName:"query/object-fetcher",slug:"/query/object-fetcher/view",permalink:"/jimmer-doc/docs/query/object-fetcher/view",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/object-fetcher/view.mdx",tags:[],version:"current",lastUpdatedAt:1704100403e3,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"View Properties"},sidebar:"tutorialSidebar",previous:{title:"Recursive Query",permalink:"/jimmer-doc/docs/query/object-fetcher/recursive"},next:{title:"Querying DTOs",permalink:"/jimmer-doc/docs/query/object-fetcher/dto"}},c={},u=[{value:"IdView",id:"idview",level:2},{value:"Modify the Example Entity Interface",id:"modify-the-example-entity-interface",level:3},{value:"Fetch <code>@IdView</code> Properties",id:"fetch-idview-properties",level:3},{value:"ManyToManyView",id:"manytomanyview",level:2},{value:"Prepare Data",id:"prepare-data",level:3},{value:"Define Entities",id:"define-entities",level:3},{value:"Fetch <code>@ManyToManyView</code> Properties",id:"fetch-manytomanyview-properties",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"idview",children:"IdView"}),"\n",(0,i.jsx)(n.p,{children:"For data structures, frontends and backends have different preferences. Backends prefer structured data, while frontends prefer flattened data."}),"\n",(0,i.jsxs)(n.p,{children:["For IdOnly objects, Jimmer provides the ",(0,i.jsx)(n.a,{href:"../../mapping/advanced/view/id-view",children:"@IdView"})," annotation to easily flatten IdOnly objects into a field."]}),"\n",(0,i.jsx)(n.h3,{id:"modify-the-example-entity-interface",children:"Modify the Example Entity Interface"}),"\n",(0,i.jsxs)(n.p,{children:["In the example entity interface, two ",(0,i.jsx)(n.code,{children:"@IdView"})," properties are added, which are view properties. The value of these properties will be automatically synchronized with the value of the corresponding associated object."]}),"\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.code,{children:"IdView"})," of a collection property, the corresponding association property needs to be specified manually."]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    ...Other properties omitted...\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView\n    Long storeId();\n\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n}\n\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    ...Other properties omitted...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView\n    val storeId: Long?\n\n    // highlight-next-line\n    @IdView("authors")\n    val authorsIds: List<Long>\n}\n'})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"fetch-idview-properties",children:["Fetch ",(0,i.jsx)(n.code,{children:"@IdView"})," Properties"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["View properties need to be fetched manually. ",(0,i.jsx)(n.code,{children:"allScalarFields"})," and ",(0,i.jsx)(n.code,{children:"allTableFields"})," will not automatically fetch view properties."]})}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> bookWithIdViews = sqlClient\n    .createQuery(book)\n    .where(book.edition().eq(3))\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n                .allScalarFields()\n                // highlight-next-line\n                .storeId()\n                // highlight-next-line\n                .authorIds()\n        )\n    )\n    .execute();\nSystem.out.println(bookWithIdViews);\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"var bookWithIdViews = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition eq 3)\n        select(\n            table.fetchBy {\n                allScalarFields\n                // highlight-next-line\n                storeId\n                // highlight-next-line\n                authorIds\n            }\n        )\n    }\n    .execute()\nprintln(bookWithIdViews)\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"The output is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id": 3,\n        "name": "Learning GraphQL",\n        "edition": 3,\n        "price": 51.00,\n        // highlight-next-line\n        "storeId": 1,\n        // highlight-next-line\n        "authorIds": [1,2]\n    }\n    ...Other objects omitted\n]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"manytomanyview",children:"ManyToManyView"}),"\n",(0,i.jsx)(n.p,{children:"In some scenarios, the join table of a many-to-many association contains not only the IDs of both sides, but also some other fields."}),"\n",(0,i.jsxs)(n.p,{children:["A join table with additional fields besides the two IDs cannot be directly mapped to a ",(0,i.jsx)(n.code,{children:"ManyToMany"})," association. We have no choice but to create three entity types: the original two entities and an intermediate entity. Each side entity has a one-to-many association pointing to the intermediate entity, and the intermediate entity has two many-to-one associations pointing to the two side entities."]}),"\n",(0,i.jsxs)(n.p,{children:["Fortunately, Jimmer provides ",(0,i.jsx)(n.a,{href:"../../mapping/advanced/view/many-to-many-view",children:"@ManyToManyView"})," to abstract a many-to-many association between the two side entities on top of this three-entity structure."]}),"\n",(0,i.jsx)(n.p,{children:"To better demonstrate, instead of using books and authors, a more realistic example with students, courses, and learning_link tables is used."}),"\n",(0,i.jsx)(n.h3,{id:"prepare-data",children:"Prepare Data"}),"\n",(0,i.jsx)(n.p,{children:"For convenience, H2 database is used here. First create the table structure and initialize data with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"drop table course if exists;\ndrop table learning_link if exists;\ndrop table student if exists;\n\ncreate table course(\n    id identity(100, 1) not null,\n    name varchar(50) not null,\n    academic_credit integer not null\n);\n\ncreate table student(\n    id identity(100, 1) not null,\n    name varchar(50) not null\n);\n\ncreate table learning_link(\n    id identity(100, 1) not null,\n    student_id int not null,\n    course_id int not null,\n    score int null\n);\n\nalter table learning_link\n    add constraint fk_learning_link__student\n        foreign key(student_id)\n            references student(id)\n            on delete cascade;\n\nalter table learning_link\n    add constraint fk_learning_link__course\n        foreign key(course_id)\n            references course(id)\n            on delete cascade;\n\ninsert into student(id, name)\nvalues  (1, 'John'),\n        (2, 'Jane'),\n        (3, 'Jack'),\n        (4, 'Jill'),\n        (5, 'Joe');\n\ninsert into course(id, name, academic_credit)\nvalues  (1, 'Math', 100),\n        (2, 'English', 100),\n        (3, 'History', 100),\n        (4, 'Science', 100),\n        (5, 'Art', 100);\n\ninsert into learning_link(student_id, course_id, score)\nvalues  (1, 1, 100), (1, 2, 90), (1, 3, 80), (1, 4, 70), (1, 5, 60),\n        (2, 1, 90), (2, 2, 80), (2, 3, 70), (2, 4, 60), (2, 5, 100),\n        (3, 1, 80), (3, 2, 70), (3, 3, 60), (3, 4, 100), (3, 5, 90),\n        (4, 1, 70), (4, 2, 60), (4, 3, 100), (4, 4, 90), (4, 5, 80),\n        (5, 1, 60), (5, 2, 100), (5, 3, 90), (5, 4, 80), (5, 5, 70);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"define-entities",children:"Define Entities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Student"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Student {\n\n    @Id\n    long id();\n\n    String name();\n\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks`\n    // deeperProp: Many-to-one from intermediate to target entity `course` (optional)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "course") \n    List<Course> courses();\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@Entity  \ninterface Student {\n    @Id\n    val id: Long\n\n    val name: String\n\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks`\n    // deeperProp: Many-to-one from intermediate to target entity `course` (optional)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "course")\n    val courses: List<Course>\n}\n'})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Course"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Course {\n\n    @Id\n    long id();\n\n    String name();\n\n    int academicCredit();\n\n    @OneToMany(mappedBy = "course")\n    List<LearningLink> learningLinks();\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks`\n    // deeperProp: Many-to-one from intermediate to target entity `student` (optional)\n    // highlight-next-line  \n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    List<Student> students();\n}\n\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Course {\n    @Id\n    val id: Long\n\n    val name: String\n\n    val academicCredit: Int\n\n    @OneToMany(mappedBy = "course")\n    val learningLinks: List<LearningLink>\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks` \n    // deeperProp: Many-to-one from intermediate to target entity `student` (optional)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    val students: List<Student>\n}\n'})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Intermediate Entity LearningLink"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface LearningLink {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // Many-to-one, points to Student entity\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Student student();\n\n    // Many-to-one, points to Course entity\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Course course();\n\n    Integer score();\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface LearningLink {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // Many-to-one, points to Student entity\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val student: Student\n\n    // Many-to-one, points to Course entity  \n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val course: Course\n\n    val score: Int\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"fetch-manytomanyview-properties",children:["Fetch ",(0,i.jsx)(n.code,{children:"@ManyToManyView"})," Properties"]}),"\n",(0,i.jsxs)(n.p,{children:["With the introduction of the intermediate entity, Student and Course entities are no longer directly associated. Although they can be indirectly associated through a ",(0,i.jsx)(n.code,{children:"Student->LearningLink->Course"})," path, the path is too long."]}),"\n",(0,i.jsxs)(n.p,{children:["Besides, the intermediate ",(0,i.jsx)(n.code,{children:"LearningLink"})," entity should be hidden as much as possible, only used when reading/writing scores."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../../mapping/advanced/view/many-to-many-view",children:"@ManyToManyView"})," properties ",(0,i.jsxs)(n.em,{children:["(e.g. ",(0,i.jsx)(n.code,{children:"Student.courses"})," in this example)"]})," can be used in object fetchers to reduce the path length."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following query gets all course names for the student with id 1:"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Student student = sqlClient\n    .findNullable(\n        1L,\n        Fetchers.STUDENT_FETCHER\n            .name()\n            // highlight-next-line\n            .courses(\n                Fetchers.COURSE_FETCHER\n                    .name()\n            )\n    )\nSystem.out.println(student);\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val student = sqlClient\n    .findNullable(\n        1L,\n        newFetcher(Student::class).by {\n            name()\n            // highlight-next-line\n            courses {\n                name()\n            }\n        }\n    )\nprintln(student)\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Query ",(0,i.jsx)(n.code,{children:"Student"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, tb_1_.NAME  \nfrom STUDENT tb_1_\nwhere tb_1_.ID = ? /* 1 */\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Query ",(0,i.jsx)(n.code,{children:"LearningLink"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select  \n    tb_1_.STUDENT_ID,\n    tb_1_.ID, tb_1_.COURSE_ID\nfrom LEARNING_LINK tb_1_ \nwhere tb_1_.STUDENT_ID in (? /* 1 */)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Query ",(0,i.jsx)(n.code,{children:"Course"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID, tb_1_.NAME   \nfrom COURSE tb_1_\nwhere tb_1_.ID in (\n    ? /* 1 */, ? /* 2 */, ? /* 3 */,\n    ? /* 4 */, ? /* 5 */  \n)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The output is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id": 1,\n    "name": "John",\n    // highlight-next-line\n    "courses": [\n        {\n            "id": 1,\n            "name": "Math"\n        },\n        {\n            "id": 2, \n            "name": "English"\n        },\n        {\n            "id": 3,\n            "name": "History"\n        },\n        {\n            "id": 4,\n            "name": "Science" \n        },\n        {\n            "id": 5,\n            "name": "Art"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"With many-to-many view properties, associated objects can be operated as conveniently as if the intermediate entity did not exist at all."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(18215);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),a=t(18215),r=t(23104),s=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:a}),[y,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=d??y;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==i&&(d(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=y(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);