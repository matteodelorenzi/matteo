!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){"use strict";n.r(t);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"observer",void 0),o(this,"$elements",void 0),this.$next=document.querySelector(".js-project-next"),this.$elements=document.querySelectorAll(".js-project-observer-item"),this.init(),this.next()}var t,n,i;return t=e,(n=[{key:"init",value:function(){IntersectionObserver&&this.intersectionObserver()}},{key:"next",value:function(){var e=this;this.$next&&this.$next.addEventListener("click",(function(t){var n=t.currentTarget,r=parseInt(n.getAttribute("data-index"));r>=e.$elements.length-1?e.$elements[0].scrollIntoView({behavior:"smooth",block:"center"}):(n.setAttribute("data-index",r+1),e.$elements[r+1].scrollIntoView({behavior:"smooth",block:"center"}))}))}},{key:"intersectionObserver",value:function(){var e=this;this.observer=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var n=JSON.parse(t.target.getAttribute("data-project"));e.updateDOM(n)}}))}),{root:null,rootMargin:"0px",threshold:1}),this.$elements.forEach((function(t){e.observer.observe(t)}))}},{key:"updateDOM",value:function(e){var t=document.querySelector(".js-project-title"),n=document.querySelector(".js-project-url"),r=document.querySelector(".js-project-category");t.textContent=e.title,r.textContent=e.category,n.href=e.url,this.$next.setAttribute("data-index",e.index)}}])&&r(t.prototype,n),i&&r(t,i),e}();new function(){document.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(t){var n=e.getAttribute("href"),r=new RegExp("#(.*)","gi");if(n.match("#(.+)")){t.preventDefault(),n=n.replace(r,"$1");var o=document.querySelector("#"+n);o&&o.scrollIntoView({behavior:"smooth"})}}))}))},new i},function(e,t){}]);