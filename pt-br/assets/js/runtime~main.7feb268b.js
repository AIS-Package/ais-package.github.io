(()=>{"use strict";var e,t,r,a,o,f={},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=f,i.c=n,e=[],i.O=(t,r,a,o)=>{if(!r){var f=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var n=!0,c=0;c<r.length;c++)(!1&o||f>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(n=!1,o<f&&(f=o));if(n){e.splice(d--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,i.d(o,f),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",108:"f5e8677b",132:"31ed8894",147:"12939761",197:"4c604a0f",237:"1df93b7f",341:"151a2728",381:"e96f3686",414:"393be207",464:"e0a05e87",514:"1be78505",639:"e58665a5",679:"8fa77b96",683:"caa72864",725:"0a8816ba",772:"c13274c6",817:"14eb3368",918:"17896441",920:"1a4e3797",975:"cbd7c1fb"}[e]||e)+"."+{53:"7bc15e55",85:"b63981d6",108:"43b0be63",132:"e2d9ff67",147:"3ed90e7a",197:"b5ee6336",237:"78ec6798",341:"dedb4f59",381:"4ac9fe67",414:"8ad341fd",443:"afd725ee",464:"c9aed734",514:"0926f48d",525:"31b7d483",639:"f00a0174",679:"4afd50cf",683:"23973ab7",690:"3a507840",725:"dfcbf6c7",772:"0a68e4a6",817:"05e3feaa",918:"5490e1ad",920:"856296b4",972:"b5930c90",975:"321b04e0"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="ais-project.github.io:",i.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var b=document.getElementsByTagName("script"),d=0;d<b.length;d++){var u=b[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/pt-br/",i.gca=function(e){return e={12939761:"147",17896441:"918","935f2afb":"53","1f391b9e":"85",f5e8677b:"108","31ed8894":"132","4c604a0f":"197","1df93b7f":"237","151a2728":"341",e96f3686:"381","393be207":"414",e0a05e87:"464","1be78505":"514",e58665a5:"639","8fa77b96":"679",caa72864:"683","0a8816ba":"725",c13274c6:"772","14eb3368":"817","1a4e3797":"920",cbd7c1fb:"975"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=i.p+i.u(t),n=new Error;i.l(f,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],c=r[2],b=0;if(f.some((t=>0!==e[t]))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(c)var d=c(i)}for(t&&t(r);b<f.length;b++)o=f[b],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},r=self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();