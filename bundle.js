!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){"use strict";async function r(t){return console.log("Starting pomodoro!"),t.set("card","private",{POMOERLLO_ACTIVE:!0,POMORELLO_BREAK:!1,POMORELLO_START:Date.now()})}o.r(e);const n={refresh:10};function a(t){const e=15e5-t;return`${(Math.floor(e/6e4)%60).toFixed(0).padStart(2,"0")}:${(Math.floor(e/1e3)%60).toFixed(0).padStart(2,"0")}`}function c(t=!0){const e={text:"No Pomodoro Active",color:"yellow"};return t?{...n,...e}:e}function i(t,e=!0){const o={text:`Resting: ${a(t)}`,color:"blue"};return e?{...n,...o}:o}function O(t,e){t.popup({title:"Start a Pomodoro",items:[{text:"Plain 25/5",callback:r}]})}window.TrelloPowerUp.initialize({"card-buttons":async(t,e)=>[{text:"Pomorello",callback:O}],"card-badges":async(t,e)=>[{dynamic:async()=>{const e=await t.get("card","private","POMORELLO_ACTIVE",!1),o=await t.get("card","private","POMORELLO_BREAK",!1),r=await t.get("card","private","POMORELLO_START",0),O=Date.now()-r;return console.log(e,o,r,O),e?O>15e5?(await async function(t){console.log("Taking a break...");const e=t.get("card","private","POMORELLO_START"),o=t.get("card","private","POMORELLO_SECONDS",0),r=t.get("card","private","POMORELLO_SETS",0),[n,a,c]=await Promise.all([e,o,r]),i=Date.now(),O=Math.ceil((i-n)/1e3)+a;return t.set("card","private",{POMORELLO_ACTIVE:!1,POMORELLO_BREAK:!0,POMORELLO_SECONDS:O,POMORELLO_SETS:c+1,POMORELLO_START:i})}(t),i(O,!0)):function(t,e=!0){const o={text:`Pomodoro Active: ${a(t)}`,color:"green"};return e?{...n,...o}:o}(O,!0):o?O>3e5?(await async function(t){return console.log("Pomodoro finished!"),t.set("card","private",{POMORELLO_ACTIVE:!1,POMORELLO_BREAK:!1,POMORELLO_START:0})}(t),c(!0)):i(O,!0):c(!0)}}]})}]);