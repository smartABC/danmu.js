!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["danmu.js"]=e():t["danmu.js"]=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var util={createDom:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=document.createElement(t);return i.className=o,i.innerHTML=e,Object.keys(n).forEach(function(e){var o=e,r=n[e];"video"===t||"audio"===t?r&&i.setAttribute(o,r):i.setAttribute(o,r)}),i},hasClass:function(t,e){return t.classList?Array.prototype.some.call(t.classList,function(t){return t===e}):!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},addClass:function(t,e){t.classList?e.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(function(e){e&&t.classList.add(e)}):util.hasClass(t,e)||(t.className+=" "+e)},removeClass:function(t,e){t.classList?e.split(/\s+/g).forEach(function(e){t.classList.remove(e)}):util.hasClass(t,e)&&e.split(/\s+/g).forEach(function(e){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")})},toggleClass:function(t,e){e.split(/\s+/g).forEach(function(e){util.hasClass(t,e)?util.removeClass(t,e):util.addClass(t,e)})},findDom:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments[1],n=void 0;try{n=t.querySelector(e)}catch(o){e.startsWith("#")&&(n=t.getElementById(e.slice(1)))}return n},padStart:function(t,e,n){for(var o=String(n),i=e>>0,r=Math.ceil(i/o.length),a=[],s=String(t);r--;)a.push(o);return a.join("").substring(0,i-s.length)+s},format:function(t){if(window.isNaN(t))return"";var e=util.padStart(Math.floor(t/3600),2,0),n=util.padStart(Math.floor((t-3600*e)/60),2,0),o=util.padStart(Math.floor(t-3600*e-60*n),2,0);return("00"===e?[n,o]:[e,n,o]).join(":")},event:function(t){if(t.touches){var e=t.touches[0]||t.changedTouches[0];t.clientX=e.clientX||0,t.clientY=e.clientY||0,t.offsetX=e.pageX-e.target.offsetLeft,t.offsetY=e.pageY-e.target.offsetTop}t._target=t.target||t.srcElement},typeOf:function(t){return Object.prototype.toString.call(t).match(/([^\s.*]+)(?=]$)/g)[0]},deepCopy:function(t,e){if("Object"===util.typeOf(e)&&"Object"===util.typeOf(t))return Object.keys(e).forEach(function(n){"Object"!==util.typeOf(e[n])||e[n]instanceof Node?"Array"===util.typeOf(e[n])?t[n]="Array"===util.typeOf(t[n])?t[n].concat(e[n]):e[n]:t[n]=e[n]:t[n]?util.deepCopy(t[n],e[n]):t[n]=e[n]}),t},getBgImage:function(t){var e=(t.currentStyle||window.getComputedStyle(t,null)).backgroundImage;if(!e||"none"==e)return"";var n=document.createElement("a");return n.href=e.replace(/url\("|"\)/g,""),n.href},copyDom:function(t){if(t&&1===t.nodeType){var e=document.createElement(t.tagName);return Array.prototype.forEach.call(t.attributes,function(t){e.setAttribute(t.name,t.value)}),t.innerHTML&&(e.innerHTML=t.innerHTML),e}return""},setInterval:function(t,e,n,o){t._interval[e]||(t._interval[e]=setInterval(n.bind(t),o))},clearInterval:function(t,e){clearInterval(t._interval[e]),t._interval[e]=null},createImgBtn:function(t,e,n,o){var i=util.createDom("xg-"+t,"",{},"xgplayer-"+t+"-img");if(i.style.backgroundImage='url("'+e+'")',n&&o){var r=void 0,a=void 0,s=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every(function(t){return!(n.indexOf(t)>-1&&o.indexOf(t)>-1)||(r=parseFloat(n.slice(0,n.indexOf(t)).trim()),a=parseFloat(o.slice(0,o.indexOf(t)).trim()),s=t,!1)}),i.style.width=""+r+s,i.style.height=""+a+s,i.style.backgroundSize=""+r+s+" "+a+s,i.style.margin="start"===t?"-"+a/2+s+" auto auto -"+r/2+s:"auto 5px auto 5px"}return i},Hex2RGBA:function(hex,alpha){var rgb=[];if(/^\#[0-9A-F]{3}$/i.test(hex)){var sixHex="#";hex.replace(/[0-9A-F]/gi,function(t){sixHex+=t+t}),hex=sixHex}return/^#[0-9A-F]{6}$/i.test(hex)?(hex.replace(/[0-9A-F]{2}/gi,function(kw){rgb.push(eval("0x"+kw))}),"rgba("+rgb.join(",")+", "+alpha+")"):"rgba(255, 255, 255, 0.1)"},formatTime:function(t){var e=Math.floor(t);return 1e3*e+(t-e)}};exports.default=util,module.exports=exports.default},function(t,e,n){"use strict";var o=n(18)();t.exports=function(t){return t!==o&&null!==t}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,u=0,c=[],f=n(2);function h(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function m(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var a=u++;n=l||(l=m(e)),o=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),o=function(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=f(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){g(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return h(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&h(d(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".danmu{overflow:hidden}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#ffffff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}\n",""])},function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(0),a=(o=r)&&o.__esModule?o:{default:o};var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.danmu=e,this.duration=n.duration/1e3,this.id=n.id,this.container=e.container,this.start=n.start,this.prior=n.prior,this.bookChannelId=n.bookChannelId;var o=void 0;if(n.el&&1===n.el.nodeType)o=a.default.copyDom(n.el);else if((o=document.createElement("div")).textContent=n.txt,n.style){var i=n.style;Object.keys(i).forEach(function(t){o.style[t]=i[t]})}"top"===n.mode||"bottom"===n.mode?this.mode=n.mode:this.mode="scroll",this.el=o,this.status="waiting";var r=this.container.getBoundingClientRect();this.el.style.left=r.width+"px"}return i(t,[{key:"attach",value:function(){this.container.appendChild(this.el),this.elPos=this.el.getBoundingClientRect(),this.width=this.elPos.width,this.height=this.elPos.height}},{key:"detach",value:function(){this.container&&this.el&&this.container.removeChild(this.el),this.el=null}},{key:"topInit",value:function(){this.el.style.top=this.top+"px"}},{key:"pauseMove",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("paused"!==this.status&&(this.status="paused",clearTimeout(this.removeTimer),this.el&&"scroll"===this.mode)){if(e){var n=((new Date).getTime()-this.moveTime)/1e3*this.moveV,o=(this.moveMoreS-n)/(this.moveContainerWidth+this.width)*(t.width+this.width);this.el.style.left=o-this.width+"px"}else this.el.style.left=this.el.getBoundingClientRect().left-t.left+"px";this.el.style.transform="translateX(0px) translateY(0px) translateZ(0px)",this.el.style.transition="transform 0s linear 0s"}}},{key:"startMove",value:function(t){var e=this;if(this.el&&"start"!==this.status)if(this.status="start","scroll"===this.mode){this.moveV=(t.width+this.width)/this.duration;var n=(e.el.getBoundingClientRect().right-t.left)/this.moveV;this.leftDuration=n,this.el.style.transition="transform "+n+"s linear 0s",setTimeout(function(){e.el&&(e.el.style.transform="translateX(-"+(e.el.getBoundingClientRect().right-t.left)+"px) translateY(0px) translateZ(0px)",e.moveTime=(new Date).getTime(),e.moveMoreS=e.el.getBoundingClientRect().right-t.left,e.moveContainerWidth=t.width,e.removeTimer=setTimeout(o,1e3*n+1e3))},20)}else this.el.style.left="50%",this.el.style.margin="0 0 0 -"+this.width/2+"px",this.removeTimer=setTimeout(o,1e3*e.duration+1e3);function o(){if(e.el)if("scroll"===e.mode){var t=e.danmu.container.getBoundingClientRect(),n=e.el.getBoundingClientRect();n&&n.right<=t.left?(e.status="end",console.log("1"),e.remove()):(e.pauseMove(t),e.startMove(t))}else e.status="end",console.log("2"),e.remove()}}},{key:"remove",value:function(){console.log("remove");(this.removeTimer&&clearTimeout(this.removeTimer),this.el&&this.el.parentNode)&&(this.el.parentNode.removeChild(this.el),this.el=null,this.danmu.emit("bullet_remove",{bullet:this}))}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.danmu=e,this.reset();var n=this;this.danmu.on("bullet_remove",function(t){n.removeBullet(t.bullet)}),this.containerPos=this.danmu.container.getBoundingClientRect(),this.containerWidth=this.containerPos.width,this.containerHeight=this.containerPos.height,this.containerLeft=this.containerPos.left,this.containerRight=this.containerPos.right,this.danmu.bulletResizeTimer=setInterval(function(){n.containerPos=n.danmu.container.getBoundingClientRect(),(Math.abs(n.containerPos.width-n.containerWidth)>=2||Math.abs(n.containerPos.height-n.containerHeight)>=2||Math.abs(n.containerPos.left-n.containerLeft)>=2||Math.abs(n.containerPos.right-n.containerRight)>=2)&&(n.containerWidth=n.containerPos.width,n.containerHeight=n.containerPos.height,n.containerLeft=n.containerPos.left,n.containerRight=n.containerPos.right,n.resize())},50),["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach(function(t){document.addEventListener(t,function(){n.resize(!0)})})}return o(t,[{key:"resize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.danmu.container,n=this;setTimeout(function(){n.danmu.bulletBtn.main.data&&n.danmu.bulletBtn.main.data.forEach(function(t){t.bookChannelId&&delete t.bookChannelId});var o=e.getBoundingClientRect();n.width=o.width,n.height=o.height,n.danmu.config.area&&n.danmu.config.area.start>=0&&n.danmu.config.area.end>=n.danmu.config.area.start&&(n.height=n.height*(n.danmu.config.area.end-n.danmu.config.area.start)),n.container=e;for(var i=/mobile/gi.test(navigator.userAgent)?10:12,r=Math.floor(n.height/i),a=[],s=0;s<r;s++)a[s]={id:s,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}};if(n.channels&&n.channels.length<=a.length)for(var l=function(e){a[e]={id:e,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}},["scroll","top"].forEach(function(o){n.channels[e].queue[o].forEach(function(i){i.el&&(a[e].queue[o].push(i),i.pauseMove(n.containerPos,t),i.startMove(n.containerPos))})}),n.channels[e].queue.bottom.forEach(function(o){if(o.el){if(a[e+a.length-n.channels.length].queue.bottom.push(o),o.channel_id[0]+o.channel_id[1]-1===e){var r=[].concat(o.channel_id);o.channel_id=[r[0]-n.channels.length+a.length,r[1]],o.top=o.channel_id[0]*i,n.danmu.config.area&&n.danmu.config.area.start&&(o.top+=n.containerHeight*n.danmu.config.area.start),o.topInit()}o.pauseMove(n.containerPos,t),o.startMove(n.containerPos)}})},u=0;u<n.channels.length;u++)l(u);else if(n.channels&&n.channels.length>a.length){for(var c=function(e){a[e]={id:e,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}},["scroll","top","bottom"].forEach(function(o){if("top"===o&&e>Math.floor(a.length/2));else if("bottom"===o&&e<=Math.floor(a.length/2));else{var r="bottom"===o?e-a.length+n.channels.length:e;n.channels[r].queue[o].forEach(function(s,l){if(s.el){if(a[e].queue[o].push(s),"bottom"===o&&s.channel_id[0]+s.channel_id[1]-1===r){var u=[].concat(s.channel_id);s.channel_id=[u[0]-n.channels.length+a.length,u[1]],s.top=s.channel_id[0]*i,n.danmu.config.area&&n.danmu.config.area.start&&(s.top+=n.containerHeight*n.danmu.config.area.start),console.log("item.channel_id"),console.log(s.channel_id),console.log(s.top),console.log("item.channel_id"),s.topInit()}s.pauseMove(n.containerPos,t),s.startMove(n.containerPos)}n.channels[r].queue[o].splice(l,1)})}})},f=0;f<a.length;f++)c(f);for(var h=function(t){["scroll","top","bottom"].forEach(function(e){n.channels[t].queue[e].forEach(function(t){t.pauseMove(n.containerPos),t.remove()})})},d=a.length;d<n.channels.length;d++)h(d)}n.channels=a,n.channelHeight=i},10)}},{key:"addBullet",value:function(t){var e=this.danmu,n=this.channels,o=this.channelHeight,i=Math.ceil(t.height/o);if(i>n.length)return{result:!1,message:"exceed channels.length, occupy="+i+",channelsSize="+n.length};for(var r=!0,a=void 0,s=-1,l=0,u=n.length;l<u;l++)if(n[l].queue[t.mode].some(function(e){return e.id===t.id}))return{result:!1,message:"exsited, channelOrder="+l+",danmu_id="+t.id};if("scroll"===t.mode)for(var c=0,f=n.length-i;c<=f;c++){r=!0;for(var h=c;h<c+i;h++){if((a=n[h]).operating.scroll){r=!1;break}if((a.bookId.scroll||t.prior)&&a.bookId.scroll!==t.id){r=!1;break}a.operating.scroll=!0;var d=a.queue.scroll[0];if(d){var p=d.el.getBoundingClientRect();if(p.right>this.containerPos.right){r=!1,a.operating.scroll=!1;break}var g=p.left-this.containerPos.left+p.width,m=(this.containerPos.width+p.width)/d.duration,v=g/m,b=this.containerPos.width,y=(this.containerPos.width+t.width)/t.duration,w=b/y;if(e.config.bOffset||(e.config.bOffset=0),m<y&&v+e.config.bOffset>w){r=!1,a.operating.scroll=!1;break}}a.operating.scroll=!1}if(r){s=c;break}}else if("top"===t.mode)for(var x=0,k=n.length-i;x<=k;x++){r=!0;for(var _=x;_<x+i;_++){if(_>Math.floor(n.length/2)){r=!1;break}if((a=n[_]).operating[t.mode]){r=!1;break}if((a.bookId[t.mode]||t.prior)&&a.bookId[t.mode]!==t.id){r=!1;break}if(a.operating[t.mode]=!0,a.queue[t.mode].length>0){r=!1,a.operating[t.mode]=!1;break}a.operating[t.mode]=!1}if(r){s=x;break}}else if("bottom"===t.mode)for(var O=n.length-i;O>=0;O--){r=!0;for(var C=O;C<O+i;C++){if(C<=Math.floor(n.length/2)){r=!1;break}if((a=n[C]).operating[t.mode]){r=!1;break}if((a.bookId[t.mode]||t.prior)&&a.bookId[t.mode]!==t.id){r=!1;break}if(a.operating[t.mode]=!0,a.queue[t.mode].length>0){r=!1,a.operating[t.mode]=!1;break}a.operating[t.mode]=!1}if(r){s=O;break}}if(-1!==s){for(var M=s,E=s+i;M<E;M++)(a=n[M]).operating[t.mode]=!0,a.queue[t.mode].unshift(t),t.prior&&delete a.bookId[t.mode],a.operating[t.mode]=!1;if(t.prior)delete t.bookChannelId,e.bulletBtn.main.data.some(function(e){return e.id===t.id&&(delete e.bookChannelId,!0)});return t.channel_id=[s,i],t.top=s*o,this.danmu.config.area&&this.danmu.config.area.start&&(t.top+=this.containerHeight*this.danmu.config.area.start),{result:t,message:"success"}}if(t.prior)if(t.bookChannelId){e.bulletBtn.main.data.some(function(e){return e.id===t.id&&(e.start+=2e3,!0)})}else{s=-1;for(var j=0,T=n.length-i;j<=T;j++){r=!0;for(var P=j;P<j+i;P++)if(n[P].bookId[t.mode]){r=!1;break}if(r){s=j;break}}if(-1!==s){for(var I=s;I<s+i;I++)n[I].bookId[t.mode]=t.id;e.bulletBtn.main.data.some(function(e){return e.id===t.id&&(e.start+=2e3,e.bookChannelId=[s,i],!0)})}}return{result:!1,message:"no surplus will right"}}},{key:"removeBullet",value:function(t){for(var e=this.channels,n=t.channel_id,o=void 0,i=n[0],r=n[0]+n[1];i<r;i++)if(o=e[i]){o.operating[t.mode]=!0;var a=-1;o.queue[t.mode].some(function(e,n){if(e.id===t.id)return a=n,!0}),a>-1&&o.queue[t.mode].splice(a,1),o.operating[t.mode]=!1}}},{key:"reset",value:function(){var t=this.danmu.container,e=this;e.channels&&e.channels.length>0&&["scroll","top","bottom"].forEach(function(t){for(var n=0;n<e.channels.length;n++)e.channels[n].queue[t].forEach(function(t){t.pauseMove(e.containerPos),t.remove()})}),setTimeout(function(){var n=t.getBoundingClientRect();e.width=n.width,e.height=n.height,e.danmu.config.area&&e.danmu.config.area.start>=0&&e.danmu.config.area.end>=e.danmu.config.area.start&&(e.height=e.height*(e.danmu.config.area.end-e.danmu.config.area.start)),e.container=t;for(var o=/mobile/gi.test(navigator.userAgent)?10:12,i=Math.floor(e.height/o),r=[],a=0;a<i;a++)r[a]={id:a,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}};e.channels=r,e.channelHeight=o},200)}},{key:"resetWithCb",value:function(t,e){var n=this.danmu.container,o=this;o.channels&&o.channels.length>0&&["scroll","top","bottom"].forEach(function(t){for(var e=0;e<o.channels.length;e++)o.channels[e].queue[t].forEach(function(t){t.pauseMove(o.containerPos),t.remove()})});var i=n.getBoundingClientRect();o.width=i.width,o.height=i.height,o.danmu.config.area&&o.danmu.config.area.start>=0&&o.danmu.config.area.end>=o.danmu.config.area.start&&(o.height=o.height*(o.danmu.config.area.end-o.danmu.config.area.start)),o.container=n;for(var r=/mobile/gi.test(navigator.userAgent)?10:12,a=Math.floor(o.height/r),s=[],l=0;l<a;l++)s[l]={id:l,queue:{scroll:[],top:[],bottom:[]},operating:{scroll:!1,top:!1,bottom:!1},bookId:{}};o.channels=s,o.channelHeight=r,t&&t(!0,e)}}]),t}();e.default=i,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=s(n(8)),r=s(n(7)),a=s(n(0));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.danmu=e,this.container=e.container,this.channel=new i.default(e),this.data=[].concat(e.config.comments),this.queue=[],this.timer=null,this.retryTimer=null,this.interval=2e3,this.status="idle",e.on("bullet_remove",this.updateQueue.bind(this))}return o(t,[{key:"updateQueue",value:function(t){var e=this;e.queue.some(function(n,o){if(n.id===t.bullet.id)return e.queue.splice(o,1),!0})}},{key:"init",value:function(t,e){e||(e=this),e.data.sort(function(t,e){return t.start-e.start}),e.retryTimer||(e.retryTimer=setInterval(function(){e.readData(),e.dataHandle()},e.interval-1e3))}},{key:"start",value:function(){this.status="playing",this.queue.length=0,this.container.innerHTML="",this.channel.resetWithCb(this.init,this)}},{key:"stop",value:function(){this.status="closed",clearInterval(this.retryTimer),this.retryTimer=null,this.channel.reset(),this.queue.length=0,this.container.innerHTML=""}},{key:"play",value:function(){this.status="playing";var t=this.channel.channels,e=this.danmu.container.getBoundingClientRect();t&&t.length>0&&["scroll","top","bottom"].forEach(function(n){for(var o=0;o<t.length;o++)t[o].queue[n].forEach(function(t){t.startMove(e)})})}},{key:"pause",value:function(){this.status="paused";var t=this.channel.channels,e=this.danmu.container.getBoundingClientRect();t&&t.length>0&&["scroll","top","bottom"].forEach(function(n){for(var o=0;o<t.length;o++)t[o].queue[n].forEach(function(t){t.pauseMove(e)})})}},{key:"dataHandle",value:function(){var t=this;"paused"!==this.status&&"closed"!==this.status&&t.queue.length&&t.queue.forEach(function(e){"waiting"!==e.status&&"paused"!==e.status||e.startMove(t.channel.containerPos)})}},{key:"readData",value:function(){var t=this,e=this.danmu,n=a.default.formatTime(e.player.currentTime),o=void 0,i=t.interval,s=t.channel,l=t.data.filter(function(t){return t.start-i<=n&&n<=t.start+i});l.length>0&&l.forEach(function(n){(o=new r.default(e,n)).attach(),s.addBullet(o).result?(t.queue.push(o),o.topInit()):o.detach()})}}]),t}();e.default=l,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=a(n(0)),r=a(n(9));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.danmu=e,this.main=new r.default(e),e.config.defaultOff||this.main.start()}return o(t,[{key:"createSwitch",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.switchBtn=i.default.createDom("dk-switch",'<span class="txt">弹</span>',{},"danmu-switch "+(t?"danmu-switch-active":"")),this.switchBtn}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e,n){"use strict";var o=String.prototype.indexOf;t.exports=function(t){return o.call(this,t,arguments[1])>-1}},function(t,e,n){"use strict";var o="razdwatrzy";t.exports=function(){return"function"==typeof o.contains&&(!0===o.contains("dwa")&&!1===o.contains("foo"))}},function(t,e,n){"use strict";t.exports=n(13)()?String.prototype.contains:n(12)},function(t,e,n){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,n){"use strict";var o=n(1),i=Array.prototype.forEach,r=Object.create;t.exports=function(t){var e=r(null);return i.call(arguments,function(t){o(t)&&function(t,e){var n;for(n in t)e[n]=t[n]}(Object(t),e)}),e}},function(t,e,n){"use strict";var o=n(1);t.exports=function(t){if(!o(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";var o=n(1),i=Object.keys;t.exports=function(t){return i(o(t)?Object(t):t)}},function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,n){"use strict";t.exports=n(20)()?Object.keys:n(19)},function(t,e,n){"use strict";var o=n(21),i=n(17),r=Math.max;t.exports=function(t,e){var n,a,s,l=r(arguments.length,2);for(t=Object(i(t)),s=function(o){try{t[o]=e[o]}catch(t){n||(n=t)}},a=1;a<l;++a)e=arguments[a],o(e).forEach(s);if(void 0!==n)throw n;return t}},function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";t.exports=n(23)()?Object.assign:n(22)},function(t,e,n){"use strict";var o=n(24),i=n(16),r=n(15),a=n(14);(t.exports=function(t,e){var n,r,s,l,u;return arguments.length<2||"string"!=typeof t?(l=e,e=t,t=null):l=arguments[2],null==t?(n=s=!0,r=!1):(n=a.call(t,"c"),r=a.call(t,"e"),s=a.call(t,"w")),u={value:e,configurable:n,enumerable:r,writable:s},l?o(i(l),u):u}).gs=function(t,e,n){var s,l,u,c;return"string"!=typeof t?(u=n,n=e,e=t,t=null):u=arguments[3],null==e?e=void 0:r(e)?null==n?n=void 0:r(n)||(u=n,n=void 0):(u=e,e=n=void 0),null==t?(s=!0,l=!1):(s=a.call(t,"c"),l=a.call(t,"e")),c={get:e,set:n,configurable:s,enumerable:l},u?o(i(u),c):c}},function(t,e,n){"use strict";var o,i,r,a,s,l,u,c=n(25),f=n(11),h=Function.prototype.apply,d=Function.prototype.call,p=Object.create,g=Object.defineProperty,m=Object.defineProperties,v=Object.prototype.hasOwnProperty,b={configurable:!0,enumerable:!1,writable:!0};s={on:o=function(t,e){var n;return f(e),v.call(this,"__ee__")?n=this.__ee__:(n=b.value=p(null),g(this,"__ee__",b),b.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},once:i=function(t,e){var n,i;return f(e),i=this,o.call(this,t,n=function(){r.call(i,t,n),h.call(e,this,arguments)}),n.__eeOnceListener__=e,this},off:r=function(t,e){var n,o,i,r;if(f(e),!v.call(this,"__ee__"))return this;if(!(n=this.__ee__)[t])return this;if("object"==typeof(o=n[t]))for(r=0;i=o[r];++r)i!==e&&i.__eeOnceListener__!==e||(2===o.length?n[t]=o[r?0:1]:o.splice(r,1));else o!==e&&o.__eeOnceListener__!==e||delete n[t];return this},emit:a=function(t){var e,n,o,i,r;if(v.call(this,"__ee__")&&(i=this.__ee__[t]))if("object"==typeof i){for(n=arguments.length,r=new Array(n-1),e=1;e<n;++e)r[e-1]=arguments[e];for(i=i.slice(),e=0;o=i[e];++e)h.call(o,this,r)}else switch(arguments.length){case 1:d.call(i,this);break;case 2:d.call(i,this,arguments[1]);break;case 3:d.call(i,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,r=new Array(n-1),e=1;e<n;++e)r[e-1]=arguments[e];h.call(i,this,r)}}},l={on:c(o),once:c(i),off:c(r),emit:c(a)},u=m({},l),t.exports=e=function(t){return null==t?p(u):m(Object(t),l)},e.methods=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=s(n(26)),r=s(n(10)),a=s(n(0));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=a.default.deepCopy({overlap:!1,area:{start:0,end:1},comments:[]},e),(0,i.default)(this);var o=this;if(!this.config.container||1!==this.config.container.nodeType)return this.emit("error","container id can't be empty"),!1;if(this.container=this.config.container,this.config.containerStyle){var s=this.config.containerStyle;Object.keys(s).forEach(function(t){o.container.style[t]=s[t]})}if(!this.config.player)return this.emit("error","player can't be empty"),!1;this.player=this.config.player,a.default.addClass(this.container,"danmu"),this.bulletBtn=new r.default(this),["touchend","click","dblclick"].forEach(function(t){n.container.addEventListener(t,function(){if(o.player){o.player.focus();var e=void 0;document.createEvent?(e=document.createEvent("Event")).initEvent(t,!0,!0):e=new Event(t),o.player.dispatchEvent(e)}},!1)}),this.emit("ready")}return o(t,[{key:"start",value:function(){this.bulletBtn.main.start()}},{key:"pause",value:function(){this.bulletBtn.main.pause()}},{key:"play",value:function(){this.bulletBtn.main.play()}},{key:"stop",value:function(){this.bulletBtn.main.stop()}},{key:"sendComment",value:function(t){t&&t.id&&t.duration&&t.start&&(t.el||t.txt)&&this.bulletBtn.main.data.push(t)}}]),t}();e.default=l,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(27),r=(o=i)&&o.__esModule?o:{default:o};n(6),e.default=r.default,t.exports=e.default},function(t,e,n){t.exports=n(28)}])});
//# sourceMappingURL=index.js.map