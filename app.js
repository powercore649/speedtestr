!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){var n,a,r,s,l,i,c,u=Math.floor(1e3*Math.random());function d(){return u+=1}function f(e){var t,n="";for(t in e)n+=t+"="+encodeURIComponent(e[t])+"&";return n.substring(0,n.length-1)}function m(e){e.name,e.type;var t,n,o=e.component,r=e.props,s=e.childs||null;if(o)return o.componentDidMount&&setTimeout(o.componentDidMount,1),o.events&&a.listen(e),m(s[0]);for(n in t=e.node,r)l.indexOf(n)>-1?t[n]=r[n]:t.setAttribute(n,r[n]);return s.length&&s.forEach((function(e){e&&t.appendChild(m(e))})),t}function p(e){return e&&e.constructor&&"Array"==e.constructor.name}function v(e){var t;(function e(t){var n,o,r=t.length;if(0!==r)for(o=0;o<r;o++)(n=t[o]).component&&n.component.componentWillUnmount&&n.component.componentWillUnmount(),n.component&&n.component.events&&a.remove(n),e(n.childs)})(e="Array"==(t=e).constructor.name?t:[t])}function g(e,t){if(ComponentsModel.remove(e),t.length){var n=t[0].node;n&&n.parentNode.removeChild(n)}}return l=["className","id","textContent","value","onclick","onkeyup","onkeydown","onchange","onsubmit","action","ariaLabel"],a=function(){function e(e,t){var o=n.events[e];o&&o.length;o&&o[t]&&delete o[t]}return{listen:function(e){var t,o,a=e.component.events,r=e.id;for(o in a)t=a[o],void 0===n.events[o]&&(n.events[o]={}),n.events[o][r]={componentId:r,callback:t}},remove:function(t){var n,o=t.component.events,a=t.id;for(n in o)e(n,a)}}}(),(s=function(e){return this.components=e,this}).prototype={searchComponentById:function(e){var t=null;return function n(o){var a,r,s=o.length;for(r=0;r<s;r++){if(t)return;if((a=o[r]).id==e)return void(t=a);n(a.childs)}}(this.components.childs),t},remove:function(e){var t=0;!function n(o){var a,r,s=o.length;for(r=0;r<s;r++){if(t)return;if((a=o[r]).id==e)return t=1,v(a),void o.splice(r,1);n(a.childs)}}(this.components.childs)},addChild:function(e,t){var n=0;!function o(a){var r,s,l=a.length;for(s=0;s<l;s++){if(n)return;if((r=a[s]).id==e)return n=1,void r.childs.push(t);o(r.childs)}}(this.components.childs)},deleteChilds:function(e){var t=0;!function n(o){var a,r,s=o.length;for(r=0;r<s;r++){if(t)return;if((a=o[r]).id==e)return t=1,v(a.childs),void(a.childs=[]);n(a.childs)}}(this.components.childs)},setChilds:function(e,t){var n=0;!function o(a){var r,s,l=a.length;for(s=0;s<l;s++){if(n)return;if((r=a[s]).id==e)return n=1,v(r.childs),void(r.childs=[t]);o(r.childs)}}(this.components.childs)},unMountComponents:v,dispatchMethod:function(e,t,n){var o;!function e(a){var r,s,l=a.length;for(s=0;s<l;s++){if((r=a[s]).component&&r.component.methods)return void((o=r.component.methods)[t]&&o[t](n));e(r.childs)}}([this.searchComponentById(e)])}},(r=function(e){return this.type=e.type,this.name=e.name,this.node=e.node,this.component=e.component,this.props=e.props,this.id=e.id,this.childs=e.childs,this}).prototype={each:function(e,t){var n=e.length;if(1==n)return t(e[0]);for(var o=0;o<n;o++)t(e[o])},remove:function(){ComponentsModel.remove(this.id),this.node.parentNode.removeChild(this.node)},addClass:function(e){if(!this.node.classList.contains(e))return this.node.classList.add(e)},removeClass:function(e){if(this.node.classList.contains(e))return this.node.classList.remove(e)},toggleClass:function(e){return this.node.classList.toggle(e)},hasClass:function(e){return this.node.classList.contains(e)},replaceClass:function(e,t){return this.removeClass(e),this.addClass(t)},value:function(e){return void 0===e?this.node.value:this.node.value=e},last:function(e){var t=this.nodes.childNodes,n=t.length+(void 0===e||e>=0?0:e);return n>0?new r(t[n-1]):null},textContent:function(e){this.node.textContent=e},setAttr:function(e,t){this.node.setAttribute(e,t)},setAttrNS:function(e,t,n){this.node.setAttributeNS(e,t,n)},className:function(e){this.node.className=e},style:function(e){var t=this.node;for(var n in e)t.style[n]=e[n]},first:function(e){return this.node.firstChild},find:function(e){var t=this.node.getElementsByClassName(e)[0];return new r({node:t})},parent:function(){return new r(this.node.parentNode)},append:function(e){ComponentsModel.addChild(this.id,e);var t=m(e);return this.node.appendChild(t)},render:function(e){var t=this.node,n=m(e);for(ComponentsModel.setChilds(this.id,e);t.firstChild;)t.removeChild(t.firstChild);return e&&t.appendChild(n)},method:function(e,t){return ComponentsModel.dispatchMethod(this.id,e,t)},scrollTop:function(e){return void 0===e?this.node.scrollTop:this.node.scrollTop=e},scrollHeight:function(){return this.node.scrollHeight},offsetHeight:function(){return this.node.offsetHeight},focus:function(){return this.node.focus()},disabled:function(e){void 0===e||e?this.addClass("disabled-ufQt"):this.removeClass("disabled-ufQt")}},(n={fetch:function(e){var t=e.post&&"object"==o(e.post)&&"FormData"==e.post.constructor.name,n=e.post?t?e.post:f(e.post):null,a=e.post?"POST":"GET",r=e.url||"",s=e.xhr,l=e.contentType||null,i=e.headers?e.headers:{},c=new XMLHttpRequest,u=function(){console.log("Request Fail: "+r),e.fail&&e.fail()};for(var d in e.get&&(r+="?"+f(e.get)),c.open(a,r,!0),"function"==typeof s&&s(c),c.onreadystatechange=function(){if(4==c.readyState)if(200==c.status){var t=c.responseText,n=!1;if(c.getResponseHeader("Content-Type").search("application/json")>-1){try{t=JSON.parse(t),n=!0}catch(e){return void u()}n&&e.success&&e.success(t)}else e.success&&e.success(t)}else 404==c.status&&u()},c.ontimeout=u,c.onerror=u,!t&&!l&&c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),l&&c.setRequestHeader("Content-type",l),i)c.setRequestHeader(d,i[d]);return c.send(n),c},createElement:function(e,n,o){var a,r,s,l="function"==typeof e,i=!("string"==typeof e),c=n||{},u=p(o),f=u?o:[],m=arguments.length,v=null,h=null,C=d();if(!u)for(r=2;r<m;r++)(s=arguments[r])&&f.push(s);return l?(a=e.name,(v=new e(c)).removeComponent=function(){g(C,f)},v.render&&f.push(v.render())):(a=i?e.name:e,h=i?e.node:t.createElement(e)),{type:l?"component":"node",name:a,node:h,component:v,props:c,id:e.id?e.id:C,childs:f}},createRef:function(e){return new r(n.createElement(e))},event:function(e,t){var o,a,r=n.events[e];if(r)for(o in r)(a=r[o])&&a.callback&&a.callback(t)},listenEvent:function(e,t){var o=d();return void 0===n.events[e]&&(n.events[e]=[]),n.events[e].push({id:o,callback:t}),{name:e,id:o}},removeEvent:function(){var e=arguments.length;function t(e){for(var t=n.events[e.name],o=t?t.length:0,a=0;a<o;a++)if(t[a].id==e.id)return void t.splice(a,1)}for(var o=0;o<e;o++)t(arguments[o])},component:{},removeComponent:function(e){return ComponentsModel.remove(e.id)},events:{},guid:d,_guid:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},rootRender:function(n){var o=t.getElementById("app");e.ComponentsModel=new s(n),o.appendChild(m(n))},each:function(e,t){if(p(e));else for(var n in e)t(e[n],n)},trim:function(e,t){var n=(t=t?t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):t)?new RegExp("^"+t+"|"+t+"+$","gm"):/^\s+|\s+$/gm;return e.replace(n,"")},getTime:function(){return(new Date).getTime()},random:function(e){return Math.floor(Math.random()*(1e3*e))},ucWords:function(e){if(e){var t,n=e.split(" "),o="";t=n.length;for(var a=0;a<t;a++)o=a!=t-1?o+r(n[a])+" ":o+r(n[a]);return o}function r(e){return e.substr(0,1).toUpperCase()+e.substr(1,e.length).toLowerCase()}}}).n={addClass:function(e,t){return t.classList.add(e)}},n.isMobile=(i=e,c=e.navigator,/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(c.userAgent||c.vendor||i.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((c.userAgent||c.vendor||i.opera).substr(0,4))),e.App=n,n}(window,document);a.svgIcon=function(e,t,n){function o(e,o,a){for(var r=o||{},s=[],l=arguments.length,i=n.guid(),c=t.createElementNS("http://www.w3.org/2000/svg",e),u=2;u<l;u++)s.push(arguments[u]);return{type:"node",name:e,node:c,component:null,props:r,id:i,childs:s}}var a={close:function(){return o("svg",{viewBox:"0 0 213 213",class:"svgIcon closeIcon"},o("path",{d:"M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0l-75.937 75.937L30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936L5.242 182.427c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312L131.804 106.491z"}))},alert:function(){return o("svg",{viewBox:"0 0 512 512",class:"svgIcon alertIcon"},o("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2 c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8 c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"}))},testLogo:function(){return o("svg",{viewBox:"0 0 512 512",class:"svgIcon testLogoIcon"},o("path",{d:"M357.423,209.039c-9.093-9.093-23.832-9.093-32.925,0l-66.389,66.386c-3.286-0.779-6.708-1.203-10.23-1.203 c-24.435,0-44.316,19.897-44.316,44.358c0,24.457,19.88,44.357,44.316,44.357c24.46,0,44.357-19.9,44.357-44.357 c0-3.523-0.424-6.945-1.203-10.231l66.389-66.386C366.515,232.871,366.515,218.13,357.423,209.039z"}),o("path",{d:"M437.083,120.099c-99.837-99.837-262.318-99.837-362.206,0.003c-86.213,86.257-99.573,222.315-31.769,323.513    c7.156,10.683,21.618,13.535,32.3,6.38c10.681-7.156,13.538-21.617,6.38-32.3c-19.051-28.437-30.268-60.238-33.925-92.598h21.887    c12.857,0,23.281-10.422,23.281-23.281c0-12.856-10.424-23.281-23.281-23.281H47.789C52.008,239.863,66.9,202.32,92,170.742    l15.842,15.842c4.546,4.547,10.504,6.821,16.461,6.821c5.958,0,11.917-2.274,16.461-6.821c9.092-9.09,9.092-23.832,0-32.924    l-15.909-15.91c32.054-25.745,69.977-40.674,108.842-44.8v21.986c0,12.859,10.424,23.281,23.281,23.281    c12.857,0,23.281-10.422,23.281-23.281V93.163c38.183,4.411,75.369,19.28,106.875,44.596l-15.902,15.902    c-9.09,9.093-9.09,23.832,0.003,32.927c4.544,4.544,10.504,6.818,16.459,6.818c5.96,0,11.917-2.274,16.463-6.821l15.826-15.826    c25.109,31.572,40.004,69.111,44.224,107.779h-21.961c-12.856,0-23.281,10.425-23.281,23.281    c0,12.859,10.425,23.281,23.281,23.281h21.889c-3.658,32.36-14.878,64.159-33.935,92.595c-7.16,10.68-4.304,25.142,6.374,32.3    c3.981,2.668,8.485,3.947,12.941,3.947c7.503,0,14.869-3.622,19.362-10.321C536.709,342.411,523.338,206.353,437.083,120.099z"}))},user:function(){return o("svg",{viewBox:"0 0 512 512",class:"svgIcon userIcon"},o("path",{d:"M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z"}))},downlink:function(){return o("svg",{viewBox:"0 0 16 16",class:"svgIcon downlinkIcon"},o("path",{d:"M8 0a8 8 0 100 16A8 8 0 008 0zM1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm10-.667a.675.675 0 00-.473.194l-2.2 2.2v-5.06a.666.666 0 10-1.333 0v5.06L5.16 7.533a.668.668 0 00-1.12.3.67.67 0 00.173.647l3.334 3.333a.663.663 0 00.946.001l3.334-3.333a.667.667 0 00-.481-1.148h-.014z"}))},uplink:function(){return o("svg",{viewBox:"0 0 16 16",class:"svgIcon uplinkIcon"},o("path",{d:"M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.667a6.667 6.667 0 11.013 0H8zm.493-10.48a.663.663 0 00-.946-.001L4.213 7.52a.672.672 0 000 .947c.262.26.686.26.947 0l2.2-2.2v5.066a.666.666 0 101.333 0v-5.06l2.2 2.2a.668.668 0 00.935-.946l-3.335-3.34z"}))},gaugeNeedle:function(){return o("svg",{viewBox:"0 0 120 801",class:"svgIcon gaugeNeedleIcon"},o("defs",{},o("linearGradient",{id:"needleGradient",x1:"0",x2:"0",y1:"0",y2:"1"},o("stop",{class:"stop--1","stop-opacity":"0","stop-color":"transparent",offset:"40%"}),o("stop",{class:"stop--1","stop-opacity":"0.95","stop-color":"currentColor",offset:"100%"}))),o("path",{d:"M95 800.5l-34.25-.958H26.5L0 .5h120l-25 800z",fill:"url(#needleGradient)"}))},gaugeVector:function(){return o("svg",{viewBox:"0 0 100 100",class:"svgIcon gaugeVectorIcon"},o("circle",{class:"gaugeCircle gaugeCircleLoading gaugeCircleLoadingLeft strokeBackground",r:"46",cx:"50%",cy:"50%"}),o("circle",{class:"gaugeCircle gaugeCircleLoading gaugeCircleLoadingRight strokeBackground",r:"46",cx:"50%",cy:"50%"}),o("circle",{class:"gaugeCircle gaugeCircleBackground strokeBackground",r:"46",cx:"50%",cy:"50%"}),o("circle",{class:"gaugeCircle gaugeCircleCurrentSpeed strokePrimary",r:"46",cx:"50%",cy:"50%","stroke-dashoffset":"404"}))}};return function(e){return a[e]()}}(window,document,a);var r=a.components,s=a.createElement,l=a.svgIcon,i=a.createRef;t.default=a,t.components=r,t.createElement=s,t.svgIcon=l,t.createRef=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0);(o=a)&&o.__esModule;var r=window.test={started:!1,runType:!0,onprogress:!1,increments:[0,2,4,6,8,10,12,14,16],rateProgress:0,uploadFileDup:24,downloadRunTime:isLocal?4e3:16e3,uploadRunTime:isLocal?4e3:16e3,hearbeatTime:80,xhrConnections:3,xhrData:[],downloadURL:isLocal?URL_BASE+"/download/download.file":"https://fl-us-ping.vultr.com/vultr.com.100MB.bin",uploadURL:isLocal?URL_BASE+"/upload/upload.file":"https://fl-us-ping.vultr.com/ajax.php",gaugeCircleStrokeMin:404,gaugeCircleStrokeMax:194,gaugeNeedleRotateMin:49,gaugeNeedleRotateMax:310};r.increments=[0,1,5,10,20,30,50,75,100],r.gaugeCircleOffsetRef=r.gaugeCircleStrokeMax-r.gaugeCircleStrokeMin,r.gaugeNeedleRotateRef=r.gaugeNeedleRotateMax-r.gaugeNeedleRotateMin,r.tempFile=function(e){for(var t="11",n=0;n<e;n++)t+=t;return new Blob([t],{type:"plain/text"})}(r.uploadFileDup),r.runType={download:!1,upload:!1,current:null,set:function(e){r.runType.download="download"==e,r.runType.upload="upload"==e}},t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){var t=this,n=(0,a.createRef)("div"),o=(0,a.createRef)("div");this.handleClick=function(){n.addClass("anim"),r.default.event("initializeTest"),setTimeout((function(){t.removeComponent(),r.default.event("runTest",{runType:"download"})}),2600)},this.componentDidMount=function(){e.tryAgainAnim&&setTimeout((function(){n.removeClass("tryAgainAnim")}),1200)},this.render=function(){return(0,a.createElement)(n,{className:"startWrapper"+(1==e.action?"":" tryAgain")+(e.tryAgainAnim?" tryAgainAnim":"")},(0,a.createElement)("button",{className:"startButton",ariaLabel:e.textContent,onclick:this.handleClick},(0,a.createElement)(o,{className:"buttonText",textContent:e.textContent}),(0,a.createElement)("div",{className:"buttonBackgroundPrimary"}),(0,a.createElement)("div",{className:"buttonBackgroundSecondary"}),(0,a.createElement)("div",{className:"buttonBorder"}),1==e.action?(0,a.createElement)("div",{className:"buttonAnimatedBorder"}):null))}}},function(e,t,n){"use strict";var o=s(n(0)),a=s(n(4)),r=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}!function(e,t,n){n.n.addClass(n.isMobile?"mobile":"desktop",t.documentElement);var o=n.createElement("div",{},n.createElement(a.default),n.createElement(r.default));n.rootRender(o)}(window,document,o.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(){var e=(0,a.createRef)("button"),t=!0;function n(){t=!t,e.textContent(t?"Show console":"Hide console"),r.default.event("consoleToggle",{toggle:t})}this.render=function(){return(0,a.createElement)("header",{className:"mainHeader"},(0,a.createElement)("div",{className:"container"},(0,a.createElement)("div",{className:"headerContents"},(0,a.createElement)("div",{className:"logoWrapper"},(0,a.createElement)("span",{className:"logoIcon"},(0,a.svgIcon)("testLogo")),(0,a.createElement)("span",{className:"logoText",textContent:"SPEEDTEST"})),(0,a.createElement)(e,{className:"consoleToggleButton",textContent:"Show console",onclick:n}))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=l(o),r=l(n(1)),s=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=(0,o.createRef)("div"),t=(0,o.createRef)("span"),n=(0,o.createRef)("span");function l(t){r.default.started=void 0===t.started?r.default.started:t.started,r.default.runType.current=void 0===t.runType?r.default.runType.current:t.runType,r.default.onprogress=void 0===t.onprogress?r.default.onprogress:t.onprogress;var n="test--"+r.default.runType.current+(r.default.onprogress?" onprogress":"");e.className("testWrapper"+(void 0===t.clearClass?" testOpen ":"")+" "+(r.default.started?n:"test--finished"))}this.events={initializeTest:function(){e.addClass("testOpen")},renderStage:function(){e.render((0,o.createElement)(s.default))},runTest:function(e){l({started:!0,runType:e.runType})},testStatus:function(e){l(e)},closeTest:function(){l({started:!1,onprogress:!1})}},this.componentDidMount=function(){a.default.fetch({url:isLocal?"http://ip-api.com/json/":"https://ipapi.co/json/",success:function(e){t.textContent(a.default.ucWords(isLocal?e.isp:e.org)),n.textContent(isLocal?e.query:e.ip)}})},this.render=function(){return(0,o.createElement)("div",{className:"pageContent"},(0,o.createElement)("div",{className:"container"},(0,o.createElement)(e,{className:"testWrapper"},(0,o.createElement)(s.default)),(0,o.createElement)("div",{className:"log",textContent:"0.00"}),(0,o.createElement)("footer",{className:"footer"},(0,o.createElement)("div",{className:"hostIsp"},(0,o.createElement)("div",{className:"hostDetails"},(0,o.createElement)("div",{className:"icon"},(0,o.svgIcon)("user")),(0,o.createElement)("div",{className:"hostIp"},(0,o.createElement)("div",{className:"ispName"},(0,o.createElement)(t,{textContent:"- -"})),(0,o.createElement)("div",{className:"localIp textHolder"},(0,o.createElement)(n,{textContent:"- -"}))))))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=i(o),r=i(n(2)),s=i(n(7)),l=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e,t,n,i,c,u,d,f,m,p=this,v=(0,o.createRef)("div"),g=(0,o.createRef)("main"),h=(0,o.createRef)("div"),C=(0,o.createRef)("div"),y=(0,o.createRef)("div"),E=(0,o.createRef)("div"),b=(0,o.createRef)("div"),w=(0,o.createRef)("div"),N=(0,o.createRef)("textarea");function T(){var t=0;return e.forEach((function(e){t+=e.loaded})),t}function x(e){return e/1e6>1.024?(e/1e6).toFixed(2)+"MB":(e/1e3).toFixed(2)+"KB"}function M(){clearInterval(i),e&&e.forEach((function(e){e.abort&&e.abort()}))}function k(){g.append((0,o.createElement)(r.default,{textContent:"DE NUEVO",action:2,tryAgainAnim:!0})),a.default.event("closeGauge")}function R(){for(var e=setTimeout((function(){}),0);e--;)clearTimeout(e);M(),setTimeout((function(){a.default.event("testStatus",{onprogress:!1}),a.default.event("clearGauge"),setTimeout((function(){l.default.runType.download?a.default.event("runTest",{runType:"upload"}):(a.default.event("closeTest"),k())}),500)}),1300)}function S(){n=!0,c.log("["+(l.default.runType.download?"download":"upload")+"] interval started..."),a.default.event("testStatus",{onprogress:!0});var o,r,s,u,d,f,m,p=l.default.runType.download?y:b,v=(l.default.runType.download?C:E).find("progressBar"),g=l.default.runType.download?l.default.downloadRunTime:l.default.uploadRunTime,h=a.default.getTime(),w=[],N=a.default.getTime(),R=0;i=setInterval((function(){var n,i;r=a.default.getTime(),s=r-t,u=r-h,d=T(),6,.9*(r-N),d!=R&&(f=function(){var n=a.default.getTime(),o=0;return e.forEach((function(e){e.loaded&&(o+=e.prevLoaded/((n-t)/1e3),console.log("xhr "+e.id+" speedRate: "+(e.loaded/((n-t)/1e3)/125e3).toFixed(3)))})),o}()),w.push(f),w.length>(u>1e3?6:3)&&w.splice(0,1),n=0,w.forEach((function(e){n+=e})),o=n/w.length,i=o,m=(i/=125e3).toFixed(i>100?1:2),p.textContent(m),v.style({width:(r-h)/g*100+"%"}),a.default.event("updateGauge",{speedRate:m}),c.log("["+(l.default.runType.download?"download":"upload")+"] instant: "+(f/125e3).toFixed(2)+"mbps, average: "+m+"mbps, loaded: "+x(d)+", loadtime: "+s/1e3+"s"),R=d}),l.default.hearbeatTime),a.default.event("toggleGaugeDetails"),setTimeout((function(){M(),c.log("["+(l.default.runType.download?"download":"upload")+"]  loaded: "+(T()/1e6).toFixed(2)+"MB, finalSpeed: "+(T()/125e3/((a.default.getTime()-t)/1e3)).toFixed(2)+"mbps, loadtime: "+(a.default.getTime()-t)/1e3),setTimeout((function(){a.default.event("testStatus",{onprogress:!1}),a.default.event("clearGauge"),setTimeout((function(){l.default.runType.download?a.default.event("runTest",{runType:"upload"}):(a.default.event("closeTest"),k())}),500)}),1300)}),g+l.default.hearbeatTime)}function I(o){var r,s=l.default.runType.download?o:o.upload,i=0,u=(a.default.getTime(),e.length+1),d=0,f=1;o.loaded=0,o.prevLoaded=0,o.speedRate=0,o.id=u,s.addEventListener("progress",(function(e){r=a.default.getTime(),o.prevLoaded=d,o.loaded=e.loaded,t||(t=r),!n&&i&&S(),i||(i=e.loaded),c.log("["+(l.default.runType.download?"download":"upload")+"] xhr "+u+" progress: "+f+", transfer: "+x(e.loaded-d)+", speedRate: "+(d/((r-t)/1e3)/125e3).toFixed(3)+"mbps, loadtime: "+(r-t)/1e3),d=e.loaded,f++}))}m="",c={log:function(e){m+=(""!=m?"\n":"")+e,d=N.scrollHeight(),u=N.scrollTop(),f=N.offsetHeight(),N.value(m),u>d-f-20&&N.scrollTop(N.scrollHeight())},clear:function(){m="",N.value(m)}},this.events={initializeTest:function(){C.find("resultValue").textContent("- -"),C.find("progressBar").style({width:0}),E.find("resultValue").textContent("- -"),E.find("progressBar").style({width:0}),c.clear(),c.log("Starting test..."),setTimeout((function(){g.append((0,o.createElement)(s.default))}),450)},runTest:function(o){l.default.runType.set(o.runType);var r,s,i=l.default.runType.download?null:function(){var e=new FormData;return e.append("file-"+a.default.random(13),l.default.tempFile),e}();e=[],t=0,n=!1;for(var c=0;c<l.default.xhrConnections;c++)s=a.default.random(6)+""+a.default.getTime(),r=a.default.fetch({xhr:I,url:l.default.runType.download?l.default.downloadURL:l.default.uploadURL,get:{v:s},post:i,fail:R,success:R}),e.push(r)},consoleToggle:function(e){w.toggleClass("hidden"),N.scrollTop(N.scrollHeight())}},this.closeStage=function(e){e.preventDefault(),M();for(var t=setTimeout((function(){}),0);t--;)clearTimeout(t);v.style({opacity:0,pointerEvents:"none"}),setTimeout((function(){a.default.event("testStatus",{started:!1,runType:!0,onprogress:!1,clearClass:!0}),a.default.event("renderStage")}),300)},this.render=function(){return(0,o.createElement)(v,{className:"testStage"},(0,o.createElement)("section",{className:"resultsArea"},(0,o.createElement)(h,{className:"resultsContainer"},(0,o.createElement)("button",{className:"stageClose",title:"Cerrar Prueba","aria-label":"Cerrar Prueba",onclick:p.closeStage},(0,o.svgIcon)("close")),(0,o.createElement)(C,{className:"resultItem resultDownload"},(0,o.createElement)("div",{className:"resultContainer"},(0,o.createElement)("div",{className:"resultHeader"},(0,o.createElement)("div",{className:"resultHeaderWrapper"},(0,o.createElement)("div",{className:"resultIcon"},(0,o.svgIcon)("downlink")),(0,o.createElement)("div",{className:"resultTitle"},(0,o.createElement)("b",{textContent:"DESCARGAR"})),(0,o.createElement)("div",{className:"resultUnit textHolder"},(0,o.createElement)("span",{textContent:"Mbps"})))),(0,o.createElement)("div",{className:"resultBody"},(0,o.createElement)(y,{className:"resultValue speedDownloadNumber"},(0,o.createElement)("span",{textContent:"- -"}))),(0,o.createElement)("div",{className:"progressBarWrapper"},(0,o.createElement)("div",{className:"progressBar"})))),(0,o.createElement)(E,{className:"resultItem resultUpload"},(0,o.createElement)("div",{className:"resultContainer"},(0,o.createElement)("div",{className:"resultHeader"},(0,o.createElement)("div",{className:"resultHeaderWrapper"},(0,o.createElement)("div",{className:"resultIcon"},(0,o.svgIcon)("uplink")),(0,o.createElement)("div",{className:"resultTitle"},(0,o.createElement)("b",{textContent:"SUBIR"})),(0,o.createElement)("div",{className:"resultUnit textHolder"},(0,o.createElement)("span",{textContent:"Mbps"})))),(0,o.createElement)("div",{className:"resultBody"},(0,o.createElement)(b,{className:"resultValue speedUploadNumber"},(0,o.createElement)("span",{textContent:"- -"}))),(0,o.createElement)("div",{className:"progressBarWrapper"},(0,o.createElement)("div",{className:"progressBar"})))))),(0,o.createElement)(g,{className:"stageMain"},(0,o.createElement)(r.default,{textContent:"COMENZAR",action:1})),(0,o.createElement)(w,{className:"testConsoleWrapper hidden"},(0,o.createElement)(N,{readonly:"",spellcheck:"false",value:"waiting to start the test..."})))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=(r(o),r(n(1)));r(n(2));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e,t,n,r,s,l,i=this,c=a.default.increments,u=a.default.increments.length,d=a.default.increments[0],f=a.default.increments[a.default.increments.length-1],m=100/(a.default.increments.length-1),p=(0,o.createRef)("div"),v=(0,o.createRef)("div"),g=(0,o.createRef)("div"),h=(0,o.createRef)("div"),C=(0,o.createRef)("div"),y=(0,o.createRef)("div"),E=(0,o.createRef)("div"),b=(0,o.createRef)("div");function w(e){var t,n,o,a=0;if(e>=f)return 100;if(e<=0)return a;for(t=0;t<u;t++)if(e<(n=c[t]))return a=(e-(o=c[t-1]))/(n-o)*m+m*(t-1);return a}function N(o){e!=o&&(r="",c.forEach((function(e,t){o>=e&&o>d&&(r+=" incrementOn--"+t)})),t=w(o),s=a.default.gaugeCircleOffsetRef*t/100+a.default.gaugeCircleStrokeMin,l=a.default.gaugeNeedleRotateRef*t/100+a.default.gaugeNeedleRotateMin,g.textContent(o),h.className("incrementsContainer"+r),n.setAttr("stroke-dashoffset",s),C.style({transform:"rotateZ("+l+"deg)"}),e=o)}this.events={toggleGaugeDetails:function(){E.removeClass("unseen"),b.addClass("unseen")},updateGauge:function(e){N(e.speedRate)},clearGauge:function(){N("0.00")},closeGauge:function(){p.addClass("close"),setTimeout((function(){i.removeComponent()}),575)}},this.componentDidMount=function(){n=y.find("gaugeCircleCurrentSpeed")},this.render=function(){return(0,o.createElement)(p,{className:"gaugeContainer"},(0,o.createElement)("div",{className:"gaugeInner"},(0,o.createElement)(h,{className:"incrementsContainer"},c.map((function(e,t){return(0,o.createElement)("div",{className:"increment increment--"+t},(0,o.createElement)("b",{textContent:e}))}))),(0,o.createElement)(C,{className:"gaugeNeedle"},(0,o.svgIcon)("gaugeNeedle")),(0,o.createElement)(v,{className:"gaugeState"},(0,o.createElement)(E,{className:"speedDetailsContainer state unseen"},(0,o.createElement)(g,{className:"speedDetailsNumber"},(0,o.createElement)("span",{textContent:"0.00"})),(0,o.createElement)("div",{className:""},(0,o.createElement)("span",{className:"speedDetailsIcon"},(0,o.svgIcon)("uplink")),(0,o.createElement)("span",{className:"speedDetailsUnit textHolder",textContent:"Mbps"}))),(0,o.createElement)(b,{className:"connectingServer state textHolder"},(0,o.createElement)("b",{textContent:"Conectando..."})))),(0,o.createElement)(y,{className:"gaugeAnim gaugeIcon"},(0,o.svgIcon)("gaugeVector")))}}}]);