(()=>{var r={883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",INCREMENTOIMPAR:"INCREMENTOIMPAR"}},518:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTOIMPAR:i}=e(883);r.exports={incremento:()=>({type:n,payload:1}),decremento:()=>({type:o,payload:1}),incrementoImpar:()=>({type:i,payload:2})}},616:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTOIMPAR:i}=e(883),c={contador:0,array:[{}]};r.exports=function(r=c,t){switch(t.type){case n:return{...r,contador:r.contador+t.payload,array:[...r.array,{}]};case o:return{...r,contador:r.contador-t.payload};case i:return{...r,contador:r.contador+t.payload};default:return r}}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}(()=>{"use strict";function r(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var t="function"==typeof Symbol&&Symbol.observable||"@@observable",n=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};function i(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}const c=e(616),{incremento:u,decremento:f,incrementoImpar:a,incrementoAsync:d}=e(518);var E=function e(n,c,u){var f;if("function"==typeof c&&"function"==typeof u||"function"==typeof u&&"function"==typeof arguments[3])throw new Error(r(0));if("function"==typeof c&&void 0===u&&(u=c,c=void 0),void 0!==u){if("function"!=typeof u)throw new Error(r(1));return u(e)(n,c)}if("function"!=typeof n)throw new Error(r(2));var a=n,d=c,E=[],s=E,p=!1;function y(){s===E&&(s=E.slice())}function l(){if(p)throw new Error(r(3));return d}function N(t){if("function"!=typeof t)throw new Error(r(4));if(p)throw new Error(r(5));var e=!0;return y(),s.push(t),function(){if(e){if(p)throw new Error(r(6));e=!1,y();var n=s.indexOf(t);s.splice(n,1),E=null}}}function m(t){if(!i(t))throw new Error(r(7));if(void 0===t.type)throw new Error(r(8));if(p)throw new Error(r(9));try{p=!0,d=a(d,t)}finally{p=!1}for(var e=E=s,n=0;n<e.length;n++)(0,e[n])();return t}function v(t){if("function"!=typeof t)throw new Error(r(10));a=t,m({type:o.REPLACE})}function I(){var e,n=N;return(e={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(r(11));function e(){t.next&&t.next(l())}return e(),{unsubscribe:n(e)}}})[t]=function(){return this},e}return m({type:o.INIT}),(f={dispatch:m,subscribe:N,getState:l,replaceReducer:v})[t]=I,f}(c),s=document.querySelector("#valor");function p(){let r=E.getState();s.innerHTML=r.contador}p(),E.subscribe(p),document.getElementById("incremento").addEventListener("click",(()=>{E.dispatch(u())})),document.getElementById("decremento").addEventListener("click",(()=>{E.dispatch(f())})),document.getElementById("incrementoImpar").addEventListener("click",(()=>{s.innerHTML%2==0?E.dispatch(u()):E.dispatch(a())})),document.getElementById("incrementoAsync").addEventListener("click",(()=>{setTimeout((()=>{E.dispatch(u())}),1e3)}))})()})();