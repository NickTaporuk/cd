/**
 * Description: JS for PaperWritingHelp.net
 * Version: 1.0.0
 * Last update: 2015/08/20
 * Author: UVOCorp
 *
 * Summary:
 *
 *	0. matchMedia() polyfill
 *		- Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license
 *	1. Respond.js
 *		- min/max-width media query polyfill. v1.1.0
 *	2. BxSlider v4.1.1
 *		- Fully loaded, responsive content slider. Authors: Steven Wanderski, Version: v4.1.1, Updated: 2013,  MIT license, http://bxslider.com
 *	3. Custom JS for PaperWritingHelp.net
 *		- 3.1. Column height
 *		- 3.2. Add class "selected" for item select
 *		- 3.3. Count pages
 *		- 3.4. To-top link click
 *		- 3.5. Toggle Topmenu
 *		- 3.6. Fixed menu + Show To-top link
 *		- 3.7. Preorder
 *		- 3.8. For Inquiry page
 *		- 3.9. Footer Site Links
 *		- 3.10. Calculate title
 *		- 3.11. Price table cell hover td
 *		- 3.12. Grade tooltip
 *
 */

/* ==========================================================================
   0. matchMedia() polyfill
   ========================================================================== */

window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/* ==========================================================================
   1. Respond.js
   ========================================================================== */

(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);

/* ==========================================================================
   2. BxSlider v4.1.1
   ========================================================================== */

!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

/* ==========================================================================
   3. Custom JS for PaperWritingHelp.net
   ========================================================================== */

/*
   3.1. Column height
   ========================================================================== */

	function equalHeight(group) {
		tallest = 0;
		group.each(function() {
			thisHeight = $(this).height();
			if (thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
$(function(){

	equalHeight($('.stat-blocks .sec4'));
	equalHeight($('.testim-item'));
/*
   3.2. Add class "selected" for item select
   ========================================================================== */

    $('.place-your-order select').uvoAutocomplete({
    	sortBy: 'none',
    	onOpen: function(e) {
    		var lebelEl = this.label;
    		$(this._listElement.children()).each(function() {
    			if ($(this).text() == lebelEl) {
    				$(this).addClass('selected')
    			}
    		});
    	}
    });

/*
   3.3. Count pages
   ========================================================================== */

$.fn.counts = function(options) {
		options = $.extend({
			minusClass: 'pageskol-left',
			minimum: 1
		}, options);
		var inputCol = $(this);
		if ($(inputCol).val() <= options.minimum) {
			$('span[class=' + options.minusClass + ']').css({
				'opacity': '0.5',
				'cursor': 'default'
			});
		} else {
			$('span[class=' + options.minusClass + ']').css({
				'opacity': '1',
				'cursor': 'pointer'
			});
		}
		$(inputCol).parent().find('span').click(function() {
			if ($(this).hasClass(options.minusClass)) {
				if ($(inputCol).val() >= options.minimum) {
					var count = parseInt($(inputCol).val()) - 1;
					count = count < options.minimum ? options.minimum : count;
				} else {
					$(inputCol).val(options.minimum - 1);
					var count = parseInt($(inputCol).val()) - 1;
					count = count < options.minimum ? options.minimum : count;
				}
				if ($(inputCol).val() <= (options.minimum + 1)) {
					$('span[class=' + options.minusClass + ']').css({
						'opacity': '0.5',
						'cursor': 'default'
					});
				}
			} else {
				if ($(inputCol).val() >= options.minimum) {
					var count = parseInt($(inputCol).val()) + 1;
				} else {
					$(inputCol).val(options.minimum - 1);
					var count = parseInt($(inputCol).val()) + 1;
				}
				if ($(inputCol).val() > (options.minimum - 1)) {
					$('span[class=' + options.minusClass + ']').css({
						'opacity': '1',
						'cursor': 'pointer'
					})
				}
			}
			$(inputCol).val(count);
			$(inputCol).change();
			$('.pageskol-title').find('span').html(275 * count);
			return false;
		});
		$(this).change(function(e) {
			var count = parseInt($(this).val())
			if (isNaN(count)) {
				count = 1;
				$(this).val(1);
			}
			$('.pageskol-title').find('span').html(275 * count);
		});
		$(this).focusout(function(e) {
			var count = parseInt($(this).val())
			if (isNaN(count)) {
				count = 1;
				$(this).val(1);
			}
			$('.pageskol-title').find('span').html(275 * count);
		});
		$(this).keydown(function(e) {
			if (e.which != 8 && e.which != 0 && (e.which < 37 || e.which > 57) && e.which !=
				96 && e.which != 97 && e.which != 98 && e.which != 99 && e.which != 100 &&
				e.which != 101 && e.which != 102 && e.which != 103 && e.which != 104 &&
				e.which != 105) {
				return false;
			}
			var key, keyChar;
			if (!e) var e = window.e;
			if (e.keyCode) key = e.keyCode;
			else if (e.which) key = e.which;
			if (key == 8) {
				return true;
			}
			if (key == 38 || key == 39 || (e.which < 48 || e.which > 57) && e.which !=
				96 && e.which != 97 && e.which != 98 && e.which != 99 && e.which != 100 &&
				e.which != 101 && e.which != 102 && e.which != 103 && e.which != 104 &&
				e.which != 105) {
				if (key == 40 || key == 37) {
					if ($(this).val() >= options.minimum) {
						var count = parseInt($(this).val()) - 1;
						count = count < options.minimum ? options.minimum : count;
					} else {
						$(this).val(options.minimum - 1);
						keyChar = String.fromCharCode(key);
						var count = parseInt($(this).val()) + 1;
					}
				} else {
					if ($(this).val() >= options.minimum) {
						var count = parseInt($(this).val()) + 1;
					} else {
						$(this).val(options.minimum - 1);
						var count = parseInt($(this).val()) + 1;
					}
				}
				$(this).val(count);
				$('.pageskol-title').find('span').html(275 * count);
				if ($(inputCol).val() <= (options.minimum)) {
					$('span[class=' + options.minusClass + ']').css({
						'opacity': '0.5',
						'cursor': 'default'
					});
				} else {
					$('span[class=' + options.minusClass + ']').css({
						'opacity': '1',
						'cursor': 'pointer'
					})
				}
			}
		});
	}

	$('#input-kol').counts();

/*
   3.4. To-top link click
   ========================================================================== */

	$('.totop-link').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

/*
   3.5. Toggle Topmenu
   ========================================================================== */

	$('.toggle-menu').click(function() {
		$(this).toggleClass('active');
		if ($(this).next().css('display') == 'none') {
			$(this).next().show();
		} else {
			$(this).next().hide();
		}
		return false;
	});
	if ($('.topmenu-line').length > 0) {
		var tmenu = $('.topmenu-line'),
			tmenuTop = $('.topmenu-line').offset().top;
	}

	(function() {
  	"use strict";
		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		}
})();

/*
   3.6. Fixed menu + Show To-top link
   ========================================================================== */

	$(window).scroll(function() {
		var scrlTopPos = $(window).scrollTop(),
			windowWidth = parseInt($(window).width()) + 17;
		if (windowWidth >= 968) {
			if (scrlTopPos <= tmenuTop) {
				$(tmenu).removeClass('fixed');
			} else if (scrlTopPos > tmenuTop) {
				$(tmenu).addClass('fixed');
			}
		}

		if ($(window).scrollTop() >= 200) {
			$('.totop-link').fadeIn();
		} else {
			$('.totop-link').fadeOut();
		}
	});

/*
   3.7. Preorder
   ========================================================================== */

	var form = $('.place-your-order');
	var deadlines = null;
	$.get('/uvoform/get_deadlines_js', function(response) {
		if (response.deadlines && response.servicetype2dids) {
			init(response);
		}
	}, 'JSON');

	var rebuildDeadlines = function() {
		var deadline_field = form.find('[name="deadline"]:first'),
			course_lvl_id = form.find('[name="academic_level"]:first').val(),
			service_type_id = 0;

		deadline_field.empty();
		course_lvl_id = parseInt(course_lvl_id);
		if (deadlines && deadlines.deadlines) {
			for (var prop in deadlines.deadlines) {
				var deadline = deadlines.deadlines[prop];
				if (deadline.course_lvl_id === course_lvl_id && deadline.servicetype_id ==
					service_type_id) {
					var option = $('<option />')
						.attr('value', deadline.deadline_id)
						.html(deadline.deadline_name);
					deadline_field.append(option);
				}
			}
		}
		deadline_field.trigger('rebuild.uvoAutocomplete');
	};
	var init = function(response) {
		deadlines = response;
		var pages = $('#input-kol');
		var academiclvl = form.find('[name="academic_level"]');
		var deadlines_field = form.find('[name="paper_type_id"]');
		deadlines_field.uvoAutocomplete();
		var papertype = form.find(
			'[name="paper_type_id"], [name="academic_level"]').uvoAutocomplete({
			onSelect: rebuildDeadlines
		});
		rebuildDeadlines(response);
		form.submit(function() {
			$.post('/uvo/calculator/submit/', form.serialize(), function(response) {
				if (response && response.success) {
					window.location.href = response['data']['url'];
				}
			}, 'JSON');
			return false;
		});
	};

/*
   3.8. For Inquiry page
   ========================================================================== */

	$('.show-hide').find('.hidden').hide();
	$('#inq-done-more').click(function() {
		if (!$(this).hasClass('less')) {
			$(this).parents('.show-hide').find('.hidden').slideDown(500);
			$(this).text('Read less').addClass('less');
		} else {
			$(this).parents('.show-hide').find('.hidden').slideUp(500);
			$(this).text('Read more').removeClass('less');
		}
	});

/*
   3.9. Footer Site Links
   ========================================================================== */

	$('.footer-datalink').each(function(index) {
		var linkcurrent = $(this).attr('data-href');
		$(this).removeAttr('data-href');
		$(this).wrapInner("<a href='" + linkcurrent + "' rel='nofollow'></a>")
	});

/*
   3.10. Calculate title
   ========================================================================== */

	$(window).load(function() {
		$('.calculateBlock > h2.title').html(function() {
			var htmlString = $(this).html();
			$(this).text('Prices for Essays');
		});
	});

/*
   3.11. Price table cell hover td
   ========================================================================== */

	$('.writing-table tbody td:not(:first-child)').mouseenter(function() {
		var tr = $(this).parent('.writing-table tbody tr');
		var Col = tr.find('td').index(this);
		var Span = $('.writing-table tbody tr').index(tr.get(0));
		tr.find('td:lt(' + Col + ')').addClass('hover');
		$('.writing-table tbody tr:lt(' + Span + ')').find('td:eq(' + Col + ')').addClass(
			'hover');
		$(this).addClass('hover-cell');

	}).mouseleave(function() {
		$('.writing-table tbody td').removeClass('hover-cell hover');
	});

	$('.price_table_default tbody td:not(:first-child)').mouseenter(function() {
		var tr = $(this).parent('.price_table_default tbody tr');
		var Col = tr.find('td').index(this);
		var Span = $('.price_table_default tbody tr').index(tr.get(0));
		tr.find('td:lt(' + Col + ')').addClass('hover');
		$('.price_table_default tbody tr:lt(' + Span + ')').find('td:eq(' + Col +
			')').addClass('hover');
		$(this).addClass('hover-cell');

	}).mouseleave(function() {
		$('.price_table_default tbody td').removeClass('hover-cell hover');
	});
	$('.price_table_default tbody th').mouseenter(function() {
		var tr = $(this).parent('.price_table_default tbody tr');
		var Col = tr.find('th').index(this);
		var Span = $('.price_table_default tbody tr').index(tr.get(0));
		tr.find('th:lt(' + Col + ')').addClass('hover');
		$('.price_table_default tbody tr:lt(' + Span + ')').find('th:eq(' + Col +
			')').addClass('hover');
		$(this).addClass('hover-cell');

	}).mouseleave(function() {
		$('.price_table_default tbody th').removeClass('hover-cell hover');
	});

/*
   3.12. Grade tooltip
   ========================================================================== */

   var gradecode = "<ul class='grade-tooltip-body'><li><i>G</i>rowth</li><li><i>R</i>eliability</li><li><i>A</i>uthenticity</li><li><i>D</i>iversity</li><li><i>E</i>xcellence</li></ul>";

   $('.grade-tooltip').mouseenter(function(){
   		$(this).append(gradecode);
   }).mouseleave(function(){
   		$('.grade-tooltip-body').remove();
   });

});
