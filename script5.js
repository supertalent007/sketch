(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9456)}])},9456:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893);n(7475);var o=n(7294),i=(n(3454),()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})}),u=(e={debug:!0})=>{var t;if(!("undefined"!=typeof window))return;let n=function(e="auto"){return"auto"===e?"production":e}(e.mode);i(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let r="development"===n?"https://cdn.vercel-insights.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${r}"]`))return;let o=document.createElement("script");o.src=r,o.defer=!0,"development"===n&&!1===e.debug&&o.setAttribute("data-debug","false"),document.head.appendChild(o)};function c({beforeSend:e,debug:t=!0,mode:n="auto"}){return(0,o.useEffect)(()=>{u({beforeSend:e,debug:t,mode:n})},[e,t,n]),null}var s=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{...n}),(0,r.jsx)(c,{})]})}},7475:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var s=[],a=!1,f=-1;function l(){a&&r&&(a=!1,r.length?s=r.concat(s):f=-1,s.length&&d())}function d(){if(!a){var e=c(l);a=!0;for(var t=s.length;t;){for(r=s,s=[];++f<t;)r&&r[f].run();f=-1,t=s.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||a||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);