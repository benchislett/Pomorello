!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t){function o(e,t){console.log("Starting pomodoro!"),e.set("card","private",{POMORELLO_ACTIVE:!0,POMORELLO_START:Date.now()})}function r(e,t){e.popup({title:"Start a Pomodoro",items:[{text:"Plain 25/5",callback:o}]})}window.TrelloPowerUp.initialize({"card-buttons":async(e,t)=>[{text:"Click me!",callback:r}],"card-badges":async(e,t)=>[{dynamic:async()=>{if(!await e.card("POMORELLO_ACTIVE"))return{text:"No Pomodoro active",refresh:30};const t=await e.card("POMORELLO_START"),o=Date.now()-t;return{text:"Pomodoro: "+`${(Math.floor(o/6e4)%60).toFixed(0)}:${(Math.floor(o/1e3)%60).toFixed(0)}`,refresh:30}}},{dynamic:function(){return{text:"Dynamic "+(100*Math.random()).toFixed(0).toString(),color:"green",refresh:10}}}]})}]);