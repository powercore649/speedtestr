(function(w,a,d,test){test.increments=[0,2,4,6,8,10,12,14,16];test.rateProgress=0;test.runningTime=a.localHost?4000:15000;test.hearbeatTime=1000;test.bytesCount=0;test.incrementsLast=test.increments[test.increments.length-1];test.xhrConnections=3;test.gaugeCircleOffset=0;test.gaugeCircleStrokeMin=404;test.gaugeCircleStrokeMax=609;test.gaugeCircleOffsetRef=test.gaugeCircleStrokeMax-test.gaugeCircleStrokeMin;test.gaugeNeedleRotateMin=44;test.gaugeNeedleRotateMax=320;test.gaugeNeedleRotateRef=test.gaugeNeedleRotateMax-test.gaugeNeedleRotateMin;function getTime(){return new w.Date().getTime()}
function roundSpeedRate(num){return num.toFixed(2)}
test.detailsToggle=function(){var nodes=a.query(".testDetailsToggle");a.toggleClass("unseen",nodes[0]);a.toggleClass("unseen",nodes[1])}
test.speedRateMbps=function(rate){return roundSpeedRate(((rate*10)/125000))}
test.maxIncrementRate=function(rate){return rate>=test.incrementsLast?test.incrementsLast:rate}
test.abortXhr=function(){test.xhrData.forEach(function(item){item.abort()})}
test.getBytesLoaded=function(){var count=0;test.xhrData.forEach(function(item){count+=item.response.length});return count}
test.cleanGauge=function(){a.addClass("result",test.wrapNode);a.removeClass("initTest",test.wrapNode);w.setTimeout(function(){test.gaugeSpeedNumberNode.textContent="0.00";test.incrementsContainerNode.className="incrementsContainer";test.gaugeCircleCurrentSpeedNode.setAttributeNS(null,"stroke-dasharray",test.gaugeCircleStrokeMin);test.gaugeNeedleNode.style.transform="rotate("+test.gaugeNeedleRotateMin+"deg)";w.setTimeout(function(){a.addClass("unseen",test.gaugeWrapNode)},1000);w.setTimeout(function(){a.removeChild(test.gaugeWrapNode)},1400);w.setTimeout(function(){test.butonTextNode.textContent="DE NUEVO",a.removeClass("hideBtnAnim",test.wrapNode)},1300)},1500)}
test.intervalHearbeat=function(xhr__0){xhr__0.onprogress=function(){if(!test.rateProgress){test.rateProgress=1;test.bytesRate=0;test.interval=w.setInterval(function(){var bytesCount=test.getBytesLoaded();test.bytesRate=bytesCount-test.bytesCount;test.activeIncrementsClasses="";test.bytesCount=bytesCount;if(test.bytesRate>0){test.currentSpeedRate=test.speedRateMbps(test.bytesRate);test.increments.forEach(function(item,index){if(test.currentSpeedRate>=item){test.activeIncrementsClasses+=" incrementOn--"+index}});test.gaugePercent=(test.maxIncrementRate(test.currentSpeedRate)/test.incrementsLast)*100;test.gaugeCircleOffset=((test.gaugeCircleOffsetRef*test.gaugePercent)/100)+test.gaugeCircleStrokeMin;test.gaugeCircleRotate=((test.gaugeNeedleRotateRef*test.gaugePercent)/100)+test.gaugeNeedleRotateMin;test.speedNumberNodes[0].textContent=test.currentSpeedRate;test.speedNumberNodes[1].textContent=test.currentSpeedRate;test.gaugeCircleCurrentSpeedNode.setAttributeNS(null,"stroke-dasharray",test.gaugeCircleOffset);test.gaugeNeedleNode.style.transform="rotate("+test.gaugeCircleRotate+"deg)";test.incrementsContainerNode.className="incrementsContainer"+test.activeIncrementsClasses}},test.hearbeatTime);test.detailsToggle();w.setTimeout(function(){w.clearInterval(test.interval);test.abortXhr();test.cleanGauge();test.rateProgress=0},test.runningTime)}}}
test.xhr=function(){var xhr=a.ajax({url:a.URL_BASE+"/download/download.mp4?v="+a.random(6)+""+getTime(),type:"GET",dataType:"json"});return xhr}
test.initialize=function(){test.incrementsContainerNode=a.queryOne("#incrementsContainer");test.gaugeWrapNode=a.queryOne(".gaugeWrapper");test.gaugeCircleCurrentSpeedNode=a.queryOne(".gaugeCircleCurrentSpeed");test.gaugeNeedleNode=a.queryOne(".gaugeNeedle");test.gaugeSpeedNumberNode=a.queryOne(".speedDetailsNumber").firstChild;test.speedNumberNodes=[a.query(".speedDownloadNumber")[0].firstChild,a.query(".speedDownloadNumber")[1].firstChild];test.wrapNode=a.queryOne(".testWrap");test.butonTextNode=a.queryOne(".testButton .buttonText");test.xhrData=[];for(var i=0;i<test.xhrConnections;i++){test.xhrData.push(test.xhr(i));test.intervalHearbeat(test.xhrData[i])}}
function incrementNodes(){this.incrementsLength=9,this.incrementNodes=[];test.increments.forEach(function(num,i){this.incrementNodes.push(a.createElement("div",{className:"increment increment--"+i},a.createElement("b",{textContent:num})));w.setTimeout(function(){a.addClass("anim",this.incrementNodes[i])},(750+(50*i)))});return this.incrementNodes}
function gaugeWrapperRender(){return(a.createElement("div",{className:"gaugeWrapper"},[a.createElement("div",{className:"incrementsContainer",id:"incrementsContainer"},incrementNodes()),a.createElement("div",{className:"gaugeAnim"},[a.createElement("div",{className:"gaugeNeedle"},a.createSvg("$3")),a.createElement("div",{className:"gauge"},a.createElement("div",{className:"gaugeIcon"},a.createSvg("$4")))]),a.createElement("div",{className:"speedDetails"},[a.createElement("div",{className:"speedDetailsContainer testDetailsToggle unseen"},[a.createElement("div",{className:"speedDetailsNumber speedDownloadNumber"},a.createElement("span",{textContent:"0.00"})),a.createElement("div",{className:"speedDetailsUnit textHolder"},a.createElement("span",{textContent:"Mbps"}))]),a.createElement("div",{className:"connectingServer testDetailsToggle textHolder"},a.createElement("b",{textContent:"Conectando..."}))])]))}
function gaugeContainerRender(){return(a.createElement("div",{className:"gaugeContainer"},[a.createElement("div",{className:"testResultsWrap"},a.createElement("div",{className:"container"},[a.createElement("div",{className:"resultItem resultItemDownload"},[a.createElement("div",{className:"resultItemHeader"},a.createElement("div",{className:"resultHeaderContainer"},[a.createElement("div",{className:"resultIcon"},a.createSvg("$5")),a.createElement("div",{className:"resultItemTitle"},a.createElement("b",{textContent:"DESCARGAR"}))])),a.createElement("div",{className:"resultBody"},[a.createElement("div",{className:"resultValue speedDownloadNumber"},a.createElement("span",{textContent:"- -"})),a.createElement("div",{className:"resultFooter"},a.createElement("div",{className:"resultUnit textHolder"},a.createElement("span",{textContent:"Mbps"})))]),]),a.createElement("div",{className:"resultItem resultItemUpload"},[a.createElement("div",{className:"resultItemHeader"},a.createElement("div",{className:"resultHeaderContainer"},[a.createElement("div",{className:"resultIcon"},a.createSvg("$6")),a.createElement("div",{className:"resultItemTitle"},a.createElement("b",{textContent:"SUBIR"}))])),a.createElement("div",{className:"resultBody"},[a.createElement("div",{className:"resultValue"},a.createElement("span",{textContent:"- -"})),a.createElement("div",{className:"resultFooter"},a.createElement("div",{className:"resultUnit textHolder"},a.createElement("span",{textContent:"Mbps"})))])])])),gaugeWrapperRender()]))}
var initTest=function(){var wrap=a.queryOne(".testWrap");var gaugeNode=a.queryOne(".gaugeContainer");if(!a.hasClass("initTest",this)){a.addClass("initTest hideBtnAnim",wrap);w.setTimeout(function(){if(gaugeNode){a.queryOne(".gaugeContainer").appendChild(gaugeWrapperRender())}else{wrap.appendChild(gaugeContainerRender())}},560);w.setTimeout(function(){test.initialize()},1800)}}
var headerNode=(a.createElement("div",{className:"mainHeader"},a.createElement("div",{className:"container"},a.createElement("div",{className:"logoWrapper"},[a.createElement("span",{className:"logoIcon"},a.createSvg("$1")),a.createElement("span",{className:"logoText",textContent:"SPEEDTEST"})]))));var wrapperNode=(a.createElement("div",{className:"mainWrapper"},a.createElement("div",{className:"container"},[a.createElement("div",{className:"testWrap"},a.createElement("div",{className:"testButton"},a.createElement("div",{className:"button",role:"button",onclick:initTest},[a.createElement("div",{className:"buttonText",textContent:"COMENZAR"}),a.createElement("div",{className:"buttonBorder"}),a.createElement("div",{className:"buttonAnimatedBorder"})]))),a.createElement("div",{className:"footer"},a.createElement("div",{className:"hostIsp"},a.createElement("div",{className:"hostDetails"},[a.createElement("div",{className:"icon"},a.createSvg("$2")),a.createElement("div",{className:"hostIp"},[a.createElement("div",{className:"ispName",id:"ispName"},a.createElement("span",{textContent:"- -"})),a.createElement("div",{className:"localIp textHolder",id:"localIp"},a.createElement("span",{textContent:"- -"}))])])))])));var content=a.createElement("div",{},[headerNode,wrapperNode]);a.rootNode=a.queryOne("#app-root");a.DOMRender(content,a.rootNode,"main");a.ajax({url:a.localHost?"http://ip-api.com/json/":"https://ipapi.co/json/",type:"GET",dataType:"json",success:function(data){a.queryOne("#ispName").firstChild.textContent=a.localHost?data.isp:a.ucWords(data.org),a.queryOne("#localIp").firstChild.textContent=a.localHost?data.query:data.ip}})}(this.window,this.App,this.document,this.App.test))
