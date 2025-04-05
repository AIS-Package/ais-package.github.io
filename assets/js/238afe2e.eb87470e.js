"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"Negative Selection Base",sidebar_label:"Negative Selection",lastUpdatedAt:"2025/04/04",author:"Jo\xe3o Paulo"},s="NSA._base Class",l={unversionedId:"advanced-guides/Base Classes Reference/nsa",id:"advanced-guides/Base Classes Reference/nsa",title:"Negative Selection Base",description:"The `_Base class contains utility functions with the protected` modifier that can be inherited by various classes for ease of use. It includes functions for distance calculation, data separation to improve training and prediction efficiency, accuracy measurement and other functions.",source:"@site/docs/advanced-guides/Base Classes Reference/nsa.md",sourceDirName:"advanced-guides/Base Classes Reference",slug:"/advanced-guides/Base Classes Reference/nsa",permalink:"/docs/advanced-guides/Base Classes Reference/nsa",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jo\xe3o Paulo",lastUpdatedAt:1743829618,formattedLastUpdatedAt:"Apr 5, 2025",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Negative Selection Base",sidebar_label:"Negative Selection",lastUpdatedAt:"2025/04/04",author:"Jo\xe3o Paulo"},sidebar:"tutorialSidebar",previous:{title:"Advanced Guides",permalink:"/docs/category/advanced-guides"},next:{title:"Metrics",permalink:"/docs/advanced-guides/Utils/Metrics"}},o={},c=[{value:"Protected Functions:",id:"protected-functions",level:2},{value:"def _distance(...):",id:"def-_distance",level:3},{value:"def _check_and_raise_exceptions_fit(...):",id:"def-_check_and_raise_exceptions_fit",level:3},{value:"def _score(...)",id:"def-_score",level:3},{value:"Abstract methods",id:"abstract-methods",level:2},{value:"def fit(...)",id:"def-fit",level:3},{value:"def predict(...)",id:"def-predict",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nsa_base-class"},"NSA._base Class"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_Base")," class contains utility functions with the ",(0,r.kt)("inlineCode",{parentName:"p"},"protected")," modifier that can be inherited by various classes for ease of use. It includes functions for distance calculation, data separation to improve training and prediction efficiency, accuracy measurement and other functions."),(0,r.kt)("h2",{id:"protected-functions"},"Protected Functions:"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"def-_distance"},"def _distance(...):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _distance(self, u: npt.NDArray, v: npt.NDArray)\n")),(0,r.kt)("p",null,"Function to calculate the distance between two points by the chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"metric"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"u"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"npt.NDArray"),"): Coordinates of the first point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"v"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"npt.NDArray"),"): Coordinates of the second point.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Distance (",(0,r.kt)("inlineCode",{parentName:"li"},"double"),") between the two points.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"def-_check_and_raise_exceptions_fit"},"def _check_and_raise_exceptions_fit(...):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _check_and_raise_exceptions_fit(self, X: npt.NDArray = None, y: npt.NDArray = None, _class_: Literal['RNSA', 'BNSA'] = 'RNSA')\n")),(0,r.kt)("p",null,"Function responsible for verifying fit function parameters and throwing exceptions if the verification is not successful."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"X"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"npt.NDArray"),"): Training array, containing the samples and their characteristics, ","[",(0,r.kt)("inlineCode",{parentName:"li"},"N samples")," (rows)][``N features`` (columns)]","."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"y"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"npt.NDArray"),"): Array of target classes of ",(0,r.kt)("inlineCode",{parentName:"li"},"X")," with ","[",(0,r.kt)("inlineCode",{parentName:"li"},"N samples")," (lines)]","."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("em",{parentName:"em"},"class")))," (Literal","[RNSA, BNSA]",", optional): Current class. Defaults to 'RNSA'.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"def-_score"},"def _score(...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def _score(self, X: npt.NDArray, y: list) -> float\n")),(0,r.kt)("p",null,"Score function calculates forecast accuracy."),(0,r.kt)("p",null,"This function performs the prediction of X and checks how many elements are equal between vector y and y_predicted.\nThis function was added for compatibility with some scikit-learn functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"X")),": np.ndarray\nFeature set with shape (n_samples, n_features)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"y")),": np.ndarray\nTrue values with shape (n_samples,).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"accuracy: float\nThe accuracy of the model.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"abstract-methods"},"Abstract methods"),(0,r.kt)("h3",{id:"def-fit"},"def fit(...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)\n")),(0,r.kt)("p",null,"Fit the model to the training data."),(0,r.kt)("p",null,"Implementation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/aisp-techniques/Negative%20Selection/rnsa#function-fit"},"RNSA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/aisp-techniques/Negative%20Selection/bnsa#function-fit"},"BNSA"))),(0,r.kt)("h3",{id:"def-predict"},"def predict(...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def predict(self, X) -> Optional[npt.NDArray]:\n")),(0,r.kt)("p",null,"Performs label prediction for the given data."),(0,r.kt)("p",null,"Implementation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/aisp-techniques/Negative%20Selection/rnsa#function-predict"},"RNSA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/aisp-techniques/Negative%20Selection/bnsa#function-predict"},"BNSA"))))}u.isMDXComponent=!0}}]);