!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){var n,r,a,s,c,l=Math.floor(1e3*Math.random());function i(){return l+=1}function u(e){var t,n="";for(t in e)n+=t+"="+encodeURIComponent(e[t])+"&";return n.substring(0,n.length-1)}function d(e){e.name,e.type;var t,n,o=e.component,a=e.props,s=e.childs||null;if(o)return o.componentDidMount&&setTimeout(o.componentDidMount,1),o.events&&r.listen(e),d(s[0]);for(n in t=e.node,a)c.indexOf(n)>-1?t[n]=a[n]:t.setAttribute(n,a[n]);return s.length&&s.forEach((function(e){e&&t.appendChild(d(e))})),t}function f(e){return e&&e.constructor&&"Array"==e.constructor.name}function m(e){var t;(function e(t){var n,o,a=t.length;if(0!==a)for(o=0;o<a;o++)(n=t[o]).component&&n.component.componentWillUnmount&&n.component.componentWillUnmount(),n.component&&n.component.events&&r.remove(n),e(n.childs)})(e="Array"==(t=e).constructor.name?t:[t])}function p(e,t){if(ComponentsModel.remove(e),t.length){var n=t[0].node;n&&n.parentNode.removeChild(n)}}return c=["className","id","textContent","onclick","onkeyup","onkeydown","onchange","onsubmit","action","ariaLabel"],r=function(){function e(e,t){var o=n.events[e];o&&o.length;o&&o[t]&&delete o[t]}return{listen:function(e){var t,o,r=e.component.events,a=e.id;for(o in r)t=r[o],void 0===n.events[o]&&(n.events[o]={}),n.events[o][a]={componentId:a,callback:t}},remove:function(t){var n,o=t.component.events,r=t.id;for(n in o)e(n,r)}}}(),(s=function(e){return this.components=e,this}).prototype={searchComponentById:function(e){var t=null;return function n(o){var r,a,s=o.length;for(a=0;a<s;a++){if(t)return;if((r=o[a]).id==e)return void(t=r);n(r.childs)}}(this.components.childs),t},remove:function(e){var t=0;!function n(o){var r,a,s=o.length;for(a=0;a<s;a++){if(t)return;if((r=o[a]).id==e)return t=1,m(r),void o.splice(a,1);n(r.childs)}}(this.components.childs)},addChild:function(e,t){var n=0;!function o(r){var a,s,c=r.length;for(s=0;s<c;s++){if(n)return;if((a=r[s]).id==e)return n=1,void a.childs.push(t);o(a.childs)}}(this.components.childs)},deleteChilds:function(e){var t=0;!function n(o){var r,a,s=o.length;for(a=0;a<s;a++){if(t)return;if((r=o[a]).id==e)return t=1,m(r.childs),void(r.childs=[]);n(r.childs)}}(this.components.childs)},setChilds:function(e,t){var n=0;!function o(r){var a,s,c=r.length;for(s=0;s<c;s++){if(n)return;if((a=r[s]).id==e)return n=1,m(a.childs),void(a.childs=[t]);o(a.childs)}}(this.components.childs)},unMountComponents:m,dispatchMethod:function(e,t,n){var o;!function e(r){var a,s,c=r.length;for(s=0;s<c;s++){if((a=r[s]).component&&a.component.methods)return void((o=a.component.methods)[t]&&o[t](n));e(a.childs)}}([this.searchComponentById(e)])}},(a=function(e){return this.type=e.type,this.name=e.name,this.node=e.node,this.component=e.component,this.props=e.props,this.id=e.id,this.childs=e.childs,this}).prototype={each:function(e,t){var n=e.length;if(1==n)return t(e[0]);for(var o=0;o<n;o++)t(e[o])},remove:function(){ComponentsModel.remove(this.id),this.node.parentNode.removeChild(this.node)},addClass:function(e){if(!this.node.classList.contains(e))return this.node.classList.add(e)},removeClass:function(e){if(this.node.classList.contains(e))return this.node.classList.remove(e)},toggleClass:function(e){return this.node.classList.toggle(e)},hasClass:function(e){return this.node.classList.contains(e)},replaceClass:function(e,t){return this.removeClass(e),this.addClass(t)},value:function(e){return void 0===e?this.node.value:this.node.value=e},last:function(e){var t=this.nodes.childNodes,n=t.length+(void 0===e||e>=0?0:e);return n>0?new a(t[n-1]):null},textContent:function(e){this.node.textContent=e},setAttrNS:function(e,t,n){this.node.setAttributeNS(e,t,n)},className:function(e){this.node.className=e},style:function(e){var t=this.node;for(var n in e)t.style[n]=e[n]},first:function(e){return this.node.firstChild},find:function(e){var t=this.node.getElementsByClassName(e)[0];return new a({node:t})},parent:function(){return new a(this.node.parentNode)},append:function(e){ComponentsModel.addChild(this.id,e);var t=d(e);return this.node.appendChild(t)},render:function(e){var t=this.node,n=d(e);for(ComponentsModel.setChilds(this.id,e);t.firstChild;)t.removeChild(t.firstChild);return e&&t.appendChild(n)},method:function(e,t){return ComponentsModel.dispatchMethod(this.id,e,t)},scrollTop:function(e){return void 0===e?this.node.scrollTop:this.node.scrollTop=e},scrollHeight:function(){return this.node.scrollHeight},offsetHeight:function(){return this.node.offsetHeight},focus:function(){return this.node.focus()},disabled:function(e){void 0===e||e?this.addClass("disabled-ufQt"):this.removeClass("disabled-ufQt")}},n={fetch:function(e){var t=e.post&&"object"==o(e.post)&&"FormData"==e.post.constructor.name,n=e.post?t?e.post:u(e.post):null,r=e.post?"POST":"GET",a=e.url||"",s=e.xhr,c=e.contentType||null,l=e.headers?e.headers:{},i=new XMLHttpRequest,d=function(){console.log("Request Fail: "+a),e.fail&&e.fail()};for(var f in e.get&&(a+="?"+u(e.get)),"function"==typeof s&&s(i),i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var t=i.responseText,n=!1;if(i.getResponseHeader("Content-Type").search("application/json")>-1){try{t=JSON.parse(t),n=!0}catch(e){return void d()}n&&e.success&&e.success(t)}else e.success&&e.success(t)}else 404==i.status&&d()},i.onerror=function(){d()},i.open(r,a,!0),!t&&!c&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c&&i.setRequestHeader("Content-type",c),l)i.setRequestHeader(f,l[f]);return i.send(n),i},createElement:function(e,n,o){var r,a,s,c="function"==typeof e,l=!("string"==typeof e),u=n||{},d=f(o),m=d?o:[],v=arguments.length,g=null,h=null,C=i();if(!d)for(a=2;a<v;a++)(s=arguments[a])&&m.push(s);return c?(r=e.name,(g=new e(u)).removeComponent=function(){p(C,m)},g.render&&m.push(g.render())):(r=l?e.name:e,h=l?e.node:t.createElement(e)),{type:c?"component":"node",name:r,node:h,component:g,props:u,id:e.id?e.id:C,childs:m}},createRef:function(e){return new a(n.createElement(e))},event:function(e,t){var o,r,a=n.events[e];if(a)for(o in a)(r=a[o])&&r.callback&&r.callback(t)},listenEvent:function(e,t){var o=i();return void 0===n.events[e]&&(n.events[e]=[]),n.events[e].push({id:o,callback:t}),{name:e,id:o}},removeEvent:function(){var e=arguments.length;function t(e){for(var t=n.events[e.name],o=t?t.length:0,r=0;r<o;r++)if(t[r].id==e.id)return void t.splice(r,1)}for(var o=0;o<e;o++)t(arguments[o])},component:{},removeComponent:function(e){return ComponentsModel.remove(e.id)},events:{},guid:i,_guid:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},rootRender:function(n){var o=t.getElementById("app");e.ComponentsModel=new s(n),o.appendChild(d(n))},each:function(e,t){if(f(e));else for(var n in e)t(e[n],n)},trim:function(e,t){var n=(t=t?t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):t)?new RegExp("^"+t+"|"+t+"+$","gm"):/^\s+|\s+$/gm;return e.replace(n,"")},getTime:function(){return(new Date).getTime()},random:function(e){return Math.floor(Math.random()*(1e3*e))},ucWords:function(e){if(e){var t,n=e.split(" "),o="";t=n.length;for(var r=0;r<t;r++)o=r!=t-1?o+a(n[r])+" ":o+a(n[r]);return o}function a(e){return e.substr(0,1).toUpperCase()+e.substr(1,e.length).toLowerCase()}}},e.App=n,n}(window,document);r.svgIcon=function(e,t,n){function o(e,o,r){for(var a=o||{},s=[],c=arguments.length,l=n.guid(),i=t.createElementNS("http://www.w3.org/2000/svg",e),u=2;u<c;u++)s.push(arguments[u]);return{type:"node",name:e,node:i,component:null,props:a,id:l,childs:s}}var r={close:function(){return o("svg",{viewBox:"0 0 213 213",class:"svgIcon closeIcon"},o("path",{d:"M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0l-75.937 75.937L30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936L5.242 182.427c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312L131.804 106.491z"}))},alert:function(){return o("svg",{viewBox:"0 0 512 512",class:"svgIcon alertIcon"},o("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2 c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8 c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"}))},testLogo:function(){return o("svg",{viewBox:"0 0 512 512",class:"svgIcon testLogoIcon"},o("path",{d:"M357.423,209.039c-9.093-9.093-23.832-9.093-32.925,0l-66.389,66.386c-3.286-0.779-6.708-1.203-10.23-1.203 c-24.435,0-44.316,19.897-44.316,44.358c0,24.457,19.88,44.357,44.316,44.357c24.46,0,44.357-19.9,44.357-44.357 c0-3.523-0.424-6.945-1.203-10.231l66.389-66.386C366.515,232.871,366.515,218.13,357.423,209.039z"}),o("path",{d:"M437.083,120.099c-99.837-99.837-262.318-99.837-362.206,0.003c-86.213,86.257-99.573,222.315-31.769,323.513    c7.156,10.683,21.618,13.535,32.3,6.38c10.681-7.156,13.538-21.617,6.38-32.3c-19.051-28.437-30.268-60.238-33.925-92.598h21.887    c12.857,0,23.281-10.422,23.281-23.281c0-12.856-10.424-23.281-23.281-23.281H47.789C52.008,239.863,66.9,202.32,92,170.742    l15.842,15.842c4.546,4.547,10.504,6.821,16.461,6.821c5.958,0,11.917-2.274,16.461-6.821c9.092-9.09,9.092-23.832,0-32.924    l-15.909-15.91c32.054-25.745,69.977-40.674,108.842-44.8v21.986c0,12.859,10.424,23.281,23.281,23.281    c12.857,0,23.281-10.422,23.281-23.281V93.163c38.183,4.411,75.369,19.28,106.875,44.596l-15.902,15.902    c-9.09,9.093-9.09,23.832,0.003,32.927c4.544,4.544,10.504,6.818,16.459,6.818c5.96,0,11.917-2.274,16.463-6.821l15.826-15.826    c25.109,31.572,40.004,69.111,44.224,107.779h-21.961c-12.856,0-23.281,10.425-23.281,23.281    c0,12.859,10.425,23.281,23.281,23.281h21.889c-3.658,32.36-14.878,64.159-33.935,92.595c-7.16,10.68-4.304,25.142,6.374,32.3    c3.981,2.668,8.485,3.947,12.941,3.947c7.503,0,14.869-3.622,19.362-10.321C536.709,342.411,523.338,206.353,437.083,120.099z"}))},user:function(){return o("svg",{viewBox:"0 0 512 512",class:"svgIcon userIcon"},o("path",{d:"M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z"}))},downlink:function(){return o("svg",{viewBox:"0 0 16 16",class:"svgIcon downlinkIcon"},o("path",{d:"M8 0a8 8 0 100 16A8 8 0 008 0zM1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm10-.667a.675.675 0 00-.473.194l-2.2 2.2v-5.06a.666.666 0 10-1.333 0v5.06L5.16 7.533a.668.668 0 00-1.12.3.67.67 0 00.173.647l3.334 3.333a.663.663 0 00.946.001l3.334-3.333a.667.667 0 00-.481-1.148h-.014z"}))},uplink:function(){return o("svg",{viewBox:"0 0 16 16",class:"svgIcon uplinkIcon"},o("path",{d:"M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.667a6.667 6.667 0 11.013 0H8zm.493-10.48a.663.663 0 00-.946-.001L4.213 7.52a.672.672 0 000 .947c.262.26.686.26.947 0l2.2-2.2v5.066a.666.666 0 101.333 0v-5.06l2.2 2.2a.668.668 0 00.935-.946l-3.335-3.34z"}))},gaugeNeedle:function(){return o("svg",{viewBox:"0 0 120 801",class:"svgIcon gaugeNeedleIcon"},o("defs",{},o("linearGradient",{id:"needleGradient",x1:"0",x2:"0",y1:"0",y2:"1"},o("stop",{class:"stop--1","stop-opacity":"0","stop-color":"transparent",offset:"40%"}),o("stop",{class:"stop--1","stop-opacity":"0.95","stop-color":"currentColor",offset:"100%"}))),o("path",{d:"M95 800.5l-34.25-.958H26.5L0 .5h120l-25 800z",fill:"url(#needleGradient)"}))},gaugeVector:function(){return o("svg",{viewBox:"0 0 100 100",class:"svgIcon gaugeVectorIcon"},o("circle",{class:"gaugeCircle gaugeCircleBackground strokeBackground",r:"46",cx:"50%",cy:"50%"}),o("circle",{class:"gaugeCircle gaugeCircleCurrentSpeed strokePrimary",r:"46",cx:"50%",cy:"50%","stroke-dasharray":"404"}),o("circle",{class:"gaugeCircle gaugeCircleLoading strokeBackground hidden",r:"46",cx:"50%",cy:"50%"}))}};return function(e){return r[e]()}}(window,document,r);var a=r.components,s=r.createElement,c=r.svgIcon,l=r.createRef;t.default=r,t.components=a,t.createElement=s,t.svgIcon=c,t.createRef=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(0);(o=r)&&o.__esModule;var a={started:!1,runType:!0,onprogress:!1,increments:[0,2,4,6,8,10,12,14,16],rateProgress:0,uploadFileDup:24,runningTime:isLocal?4e3:16e3,hearbeatTime:65,xhrConnections:3,xhrData:[],downloadURL:isLocal?URL_BASE+"/download/download.file":"https://fl-us-ping.vultr.com/vultr.com.100MB.bin",uploadURL:isLocal?URL_BASE+"/upload/upload.file":"https://fl-us-ping.vultr.com/ajax.php",gaugeCircleStrokeMin:404,gaugeCircleStrokeMax:617.5,gaugeNeedleRotateMin:46,gaugeNeedleRotateMax:315};a.increments=[0,1,5,10,20,30,50,75,100],a.gaugeCircleOffsetRef=a.gaugeCircleStrokeMax-a.gaugeCircleStrokeMin,a.gaugeNeedleRotateRef=a.gaugeNeedleRotateMax-a.gaugeNeedleRotateMin,a.tempFile=function(e){for(var t="1",n=0;n<e;n++)t+=t;return new Blob([t],{type:"plain/text"})}(a.uploadFileDup),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(0),a=(o=r)&&o.__esModule?o:{default:o};t.default=function(e){var t=this,n=(0,r.createRef)("div"),o=(0,r.createRef)("div");this.handleClick=function(){n.addClass("anim"),a.default.event("initializeTest"),setTimeout((function(){t.removeComponent(),a.default.event("runTest",{runType:"download"})}),2500)},this.componentDidMount=function(){e.tryAgainAnim&&setTimeout((function(){n.removeClass("tryAgainAnim")}),1200)},this.render=function(){return(0,r.createElement)(n,{className:"startWrapper"+(1==e.action?"":" tryAgain")+(e.tryAgainAnim?" tryAgainAnim":"")},(0,r.createElement)("button",{className:"startButton",ariaLabel:e.textContent,onclick:this.handleClick},(0,r.createElement)(o,{className:"buttonText",textContent:e.textContent}),(0,r.createElement)("div",{className:"buttonBackgroundPrimary"}),(0,r.createElement)("div",{className:"buttonBackgroundSecondary"}),(0,r.createElement)("div",{className:"buttonBorder"}),1==e.action?(0,r.createElement)("div",{className:"buttonAnimatedBorder"}):null))}}},function(e,t,n){"use strict";var o,r,a=l(n(0)),s=l(n(4)),c=l(n(5));function l(e){return e&&e.__esModule?e:{default:e}}window,document,o=a.default,r=o.createElement("div",{},o.createElement(s.default),o.createElement(c.default)),o.rootRender(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(0);(o=r)&&o.__esModule;t.default=function(){this.render=function(){return(0,r.createElement)("header",{className:"mainHeader"},(0,r.createElement)("div",{className:"container"},(0,r.createElement)("div",{className:"logoWrapper"},(0,r.createElement)("span",{className:"logoIcon"},(0,r.svgIcon)("testLogo")),(0,r.createElement)("span",{className:"logoText",textContent:"SPEEDTEST"}))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=c(o),a=c(n(1)),s=c(n(6));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=(0,o.createRef)("div"),t=(0,o.createRef)("span"),n=(0,o.createRef)("span");function c(t){a.default.started=void 0===t.started?a.default.started:t.started,a.default.runType=void 0===t.runType?a.default.runType:t.runType,a.default.onprogress=void 0===t.onprogress?a.default.onprogress:t.onprogress;var n="test--"+a.default.runType+(a.default.onprogress?" onprogress":"");e.className("testWrapper"+(void 0===t.clearClass?" testOpen ":"")+" "+(a.default.started?n:"test--finished"))}this.events={initializeTest:function(){e.addClass("testOpen")},renderStage:function(){e.render((0,o.createElement)(s.default))},runTest:function(e){c({started:!0,runType:e.runType})},testStatus:function(e){c(e)},closeTest:function(){c({started:!1,onprogress:!1})}},this.componentDidMount=function(){r.default.fetch({url:isLocal?"http://ip-api.com/json/":"https://ipapi.co/json/",success:function(e){t.textContent(r.default.ucWords(isLocal?e.isp:e.org)),n.textContent(isLocal?e.query:e.ip)}})},this.render=function(){return(0,o.createElement)("div",{className:"pageContent"},(0,o.createElement)("div",{className:"container"},(0,o.createElement)(e,{className:"testWrapper"},(0,o.createElement)(s.default)),(0,o.createElement)("div",{className:"log",textContent:"0.00"}),(0,o.createElement)("footer",{className:"footer"},(0,o.createElement)("div",{className:"hostIsp"},(0,o.createElement)("div",{className:"hostDetails"},(0,o.createElement)("div",{className:"icon"},(0,o.svgIcon)("user")),(0,o.createElement)("div",{className:"hostIp"},(0,o.createElement)("div",{className:"ispName"},(0,o.createElement)(t,{textContent:"- -"})),(0,o.createElement)("div",{className:"localIp textHolder"},(0,o.createElement)(n,{textContent:"- -"}))))))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=l(o),a=l(n(2)),s=l(n(7)),c=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e,t,n,l=this,i=c.default.increments,u=c.default.increments.length,d=100/(c.default.increments.length-1),f=c.default.increments[c.default.increments.length-1],m=(0,o.createRef)("div"),p=(0,o.createRef)("main"),v=(0,o.createRef)("div"),g=(0,o.createRef)("div"),h=(0,o.createRef)("div"),C=(0,o.createRef)("div"),E=(0,o.createRef)("div");function y(){var e=0;return t.forEach((function(t){e+=t.loadedBytes})),e}function N(){clearInterval(e),t&&t.forEach((function(e){e.abort&&e.abort()}))}function T(){p.append((0,o.createElement)(a.default,{textContent:"DE NUEVO",action:2,tryAgainAnim:!0})),r.default.event("closeGauge")}function b(o){var a="download"==c.default.runType?o:o.upload;o.loadedBytes=0,"download"==c.default.runType||(o.onloadstart=function(){n=n||r.default.getTime()}),console.log("====== TEST "+c.default.runType.toUpperCase()+" ======"),a.onprogress=function(){n=n||r.default.getTime(),r.default.event("testStatus",{onprogress:!0}),setTimeout((function(){console.log((y()/1/125e3).toFixed(2)+"mbps in 1 second")}),1e3),setTimeout((function(){console.log((y()/2/125e3).toFixed(2)+"mbps in 2 second")}),2e3),t&&t.forEach((function(e){e.onprogress=null,e.upload.onprogress=null})),setTimeout((function(){var t,o,a,s,l,m,p,v,b,x="download"==c.default.runType?h:E,M=("download"==c.default.runType?g:C).find("progressBar"),w=r.default.getTime(),R=0,S=[];e=setInterval((function(){var e,g;t=r.default.getTime(),o=(t-n)/1e3,a="",s=y(),l=s/o,o>1&&(S.push(l),S.length>20&&S.splice(0,1),e=0,S.forEach((function(t){e+=t})),R=e/S.length),g=o>1?R:l,m=(g/=125e3).toFixed(g>100?1:2),console.log("instant: "+(l/125e3).toFixed(2)+"mbps, average: "+m+"mbps, loaded: "+(s/1e6>1.024?(s/1e6).toFixed(2)+"MB":(s/1e3).toFixed(2)+"KB")+", loadstart: "+o+"s"),i.forEach((function(e,t){m>=e&&(a+=" incrementOn--"+t)})),v=function(e){var t,n,o,r=0;if(e>=f)return 100;if(e<=0)return r;for(t=0;t<u;t++)if(e<(n=i[t]))return r=(e-(o=i[t-1]))/(n-o)*d+d*(t-1);return r}(m),p=c.default.gaugeCircleOffsetRef*v/100+c.default.gaugeCircleStrokeMin,b=c.default.gaugeNeedleRotateRef*v/100+c.default.gaugeNeedleRotateMin,x.textContent(m),M.style({width:(t-w)/(c.default.runningTime+100)*100+"%"}),r.default.event("updateGauge",[m,p,b,a])}),c.default.hearbeatTime),r.default.event("toggleGaugeDetails"),setTimeout((function(){N(),console.log("transferred: "+(y()/1e6).toFixed(2)+"MB, finalSpeed: "+(y()/125e3/((r.default.getTime()-n)/1e3)).toFixed(2)+"mbps"),setTimeout((function(){r.default.event("testStatus",{onprogress:!1}),r.default.event("clearGauge"),setTimeout((function(){"download"==c.default.runType?r.default.event("runTest",{runType:"upload"}):(r.default.event("closeTest"),T())}),500)}),1300)}),c.default.runningTime+c.default.hearbeatTime+100)}),100)},a.addEventListener("progress",(function(e){o.loadedBytes=e.loaded}))}function x(){for(var e=setTimeout((function(){}),0);e--;)clearTimeout(e);N(),setTimeout((function(){r.default.event("testStatus",{onprogress:!1}),r.default.event("clearGauge"),setTimeout((function(){"download"==c.default.runType?r.default.event("runTest",{runType:"upload"}):(r.default.event("closeTest"),T())}),500)}),1300)}this.events={initializeTest:function(){g.find("resultValue").textContent("- -"),g.find("progressBar").style({width:0}),C.find("resultValue").textContent("- -"),C.find("progressBar").style({width:0}),setTimeout((function(){p.append((0,o.createElement)(s.default))}),450)},runTest:function(){var e,o,a="download"==c.default.runType?null:function(){var e=new FormData;return e.append("file-"+r.default.random(13),c.default.tempFile),e}();t=[],n=0;for(var s=0;s<c.default.xhrConnections;s++)o=r.default.random(6)+""+r.default.getTime(),e=r.default.fetch({xhr:b,url:"download"==c.default.runType?c.default.downloadURL:c.default.uploadURL,get:{v:o},post:a,fail:x,success:x}),t.push(e)}},this.closeStage=function(e){e.preventDefault(),N();for(var t=setTimeout((function(){}),0);t--;)clearTimeout(t);m.style({opacity:0,pointerEvents:"none"}),setTimeout((function(){r.default.event("testStatus",{started:!1,runType:!0,onprogress:!1,clearClass:!0}),r.default.event("renderStage")}),300)},this.render=function(){return(0,o.createElement)(m,{className:"testStage"},(0,o.createElement)("section",{className:"resultsArea"},(0,o.createElement)(v,{className:"resultsContainer"},(0,o.createElement)("button",{className:"stageClose",title:"Cerrar Prueba","aria-label":"Cerrar Prueba",onclick:l.closeStage},(0,o.svgIcon)("close")),(0,o.createElement)(g,{className:"resultItem resultDownload"},(0,o.createElement)("div",{className:"resultContainer"},(0,o.createElement)("div",{className:"resultHeader"},(0,o.createElement)("div",{className:"resultHeaderWrapper"},(0,o.createElement)("div",{className:"resultIcon"},(0,o.svgIcon)("downlink")),(0,o.createElement)("div",{className:"resultTitle"},(0,o.createElement)("b",{textContent:"DESCARGAR"})),(0,o.createElement)("div",{className:"resultUnit textHolder"},(0,o.createElement)("span",{textContent:"Mbps"})))),(0,o.createElement)("div",{className:"resultBody"},(0,o.createElement)(h,{className:"resultValue speedDownloadNumber"},(0,o.createElement)("span",{textContent:"- -"}))),(0,o.createElement)("div",{className:"progressBarWrapper"},(0,o.createElement)("div",{className:"progressBar"})))),(0,o.createElement)(C,{className:"resultItem resultUpload"},(0,o.createElement)("div",{className:"resultContainer"},(0,o.createElement)("div",{className:"resultHeader"},(0,o.createElement)("div",{className:"resultHeaderWrapper"},(0,o.createElement)("div",{className:"resultIcon"},(0,o.svgIcon)("uplink")),(0,o.createElement)("div",{className:"resultTitle"},(0,o.createElement)("b",{textContent:"SUBIR"})),(0,o.createElement)("div",{className:"resultUnit textHolder"},(0,o.createElement)("span",{textContent:"Mbps"})))),(0,o.createElement)("div",{className:"resultBody"},(0,o.createElement)(E,{className:"resultValue speedUploadNumber"},(0,o.createElement)("span",{textContent:"- -"}))),(0,o.createElement)("div",{className:"progressBarWrapper"},(0,o.createElement)("div",{className:"progressBar"})))))),(0,o.createElement)(p,{className:"stageMain"},(0,o.createElement)(a.default,{textContent:"COMENZAR",action:1})))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=(a(o),a(n(1)));a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=this,t=(0,o.createRef)("div"),n=(0,o.createRef)("div"),a=(0,o.createRef)("div"),s=(0,o.createRef)("div"),c=(0,o.createRef)("div"),l=(0,o.createRef)("div"),i=(0,o.createRef)("div"),u=(0,o.createRef)("div");function d(e,t,n,o){a.textContent(e),l.find("gaugeCircleCurrentSpeed").setAttrNS(null,"stroke-dasharray",t),c.style({transform:"rotateZ("+n+"deg)"}),s.className("incrementsContainer"+o)}this.events={toggleGaugeDetails:function(){i.removeClass("unseen"),u.addClass("unseen")},updateGauge:function(e){d.apply(null,e)},clearGauge:function(){d("0.00",r.default.gaugeCircleStrokeMin,r.default.gaugeNeedleRotateMin,"")},closeGauge:function(){t.addClass("close"),setTimeout((function(){e.removeComponent()}),475)}},this.render=function(){return(0,o.createElement)(t,{className:"gaugeContainer"},(0,o.createElement)("div",{className:"gaugeInner"},(0,o.createElement)(s,{className:"incrementsContainer"},(e=[],r.default.increments.forEach((function(t,n){e.push((0,o.createElement)("div",{className:"increment increment--"+n},(0,o.createElement)("b",{textContent:t})))})),e)),(0,o.createElement)(c,{className:"gaugeNeedle"},(0,o.svgIcon)("gaugeNeedle")),(0,o.createElement)(n,{className:"gaugeState"},(0,o.createElement)(i,{className:"speedDetailsContainer state unseen"},(0,o.createElement)(a,{className:"speedDetailsNumber"},(0,o.createElement)("span",{textContent:"0.00"})),(0,o.createElement)("div",{className:""},(0,o.createElement)("span",{className:"speedDetailsIcon"},(0,o.svgIcon)("uplink")),(0,o.createElement)("span",{className:"speedDetailsUnit textHolder",textContent:"Mbps"}))),(0,o.createElement)(u,{className:"connectingServer state textHolder"},(0,o.createElement)("b",{textContent:"Conectando..."})))),(0,o.createElement)(l,{className:"gaugeAnim gaugeIcon"},(0,o.svgIcon)("gaugeVector")));var e}}}]);
