(()=>{"use strict";var e,t,r,a,o,c={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=c,n.c=f,e=[],n.O=(t,r,a,o)=>{if(!r){var c=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var f=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(f=!1,o<c&&(c=o));if(f){e.splice(b--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,n.d(o,c),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",132:"31ed8894",237:"1df93b7f",322:"10f42f41",357:"4a070847",390:"cbc5cf71",413:"21dec587",414:"393be207",433:"ae960304",464:"e0a05e87",514:"1be78505",545:"46fa4190",579:"139c2d14",620:"b249ed83",623:"dc3cc5e1",671:"0e384e19",675:"9fb901ec",745:"ea045227",817:"14eb3368",918:"17896441",920:"1a4e3797",975:"cbd7c1fb"}[e]||e)+"."+{53:"ae155cf5",85:"b63981d6",132:"e2d9ff67",237:"2c92b7a4",322:"b39ec330",357:"525d6799",390:"31b08210",413:"fc09048e",414:"ad55a0fa",433:"0515ca77",443:"afd725ee",464:"c9aed734",514:"0926f48d",525:"31b7d483",545:"961dfb26",579:"08c5cef7",620:"f11d111e",623:"b4bf990c",671:"a44c1c9b",675:"d29d5de8",690:"3a507840",745:"f266f397",817:"05e3feaa",918:"5490e1ad",920:"7f531557",972:"b5930c90",975:"321b04e0"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="ais-project.github.io:",n.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var f,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var u=d[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){f=u;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+r),f.src=e),a[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","31ed8894":"132","1df93b7f":"237","10f42f41":"322","4a070847":"357",cbc5cf71:"390","21dec587":"413","393be207":"414",ae960304:"433",e0a05e87:"464","1be78505":"514","46fa4190":"545","139c2d14":"579",b249ed83:"620",dc3cc5e1:"623","0e384e19":"671","9fb901ec":"675",ea045227:"745","14eb3368":"817","1a4e3797":"920",cbd7c1fb:"975"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=n.p+n.u(t),f=new Error;n.l(c,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,a[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],f=r[1],i=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in f)n.o(f,a)&&(n.m[a]=f[a]);if(i)var b=i(n)}for(t&&t(r);d<c.length;d++)o=c[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(b)},r=self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();