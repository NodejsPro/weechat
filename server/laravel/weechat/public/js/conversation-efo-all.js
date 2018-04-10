/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
function fillBotChatEfo(message_data, appendHead) {
    if(message_data.message != void 0 && message_data.message != '' && message_data.message.constructor == Array){
        setPreviousMessageDefault();
        var message = message_data.message;
        var bot_chat = initChat(message_data, message_data.type),
            time_of_message = '',
            item = null,
            wrap_content = bot_chat.find('.ctext-wrap'),
            bot_message_type = common_data['bot_message_type'];
        if(message_data['created_at'] != void 0) {
            time_of_message = getDateByTimezone(message_data['created_at'], 'H:mm:ss');
        }
        bot_chat.find('.time_of_message').html(time_of_message);
        for(var i = 0 ; i < message.length; i++){
            item = $('.template-efo .item').clone();
            if(message[i].type != void 0 && message[i].type == bot_message_type.text){
                item.addClass('text-item').html(str_replace(message[i].content));
                wrap_content.addClass('left-text');
            } else {
                return;
            }
            bot_chat.find('.text_message').append(item);
        }
        if(appendHead != void 0 && appendHead){
            $('.conversation_index .chat_content .conversation-list').prepend(bot_chat);
        }else{
            $('.conversation_index .chat_content .conversation-list').append(bot_chat);
        }
    }
}

function viewEfoSelectBox(item_content, type, message) {
    if(message.list != void 0){
        var answer = [],
            tmp_index = 0,
            select_container = $('.template-efo .select_template .select_container').clone(),
            bot_content_type_flip = common_data['bot_content_type_flip'];
        viewText(select_container.find('.title'), message.title, 'title label-text');
        if(message.answer != void 0 && message.answer.constructor == Array){
            answer = message.answer;
        }
        $.each(message.list, function (ind, val) {
            var select_item = $('.template-efo .select_template .'+ bot_content_type_flip[type] +'_box_efo').clone();
            select_item.removeClass('select-group').iCheck();
            if(answer.indexOf(ind + '') > -1){
                tmp_index ++;
                select_item.addClass('checked input-checked');
                select_item.find('.i'+ bot_content_type_flip[type] +'_minimal').addClass('checked');
            } else{
                select_item.addClass('input-unchecked');
            }
            select_item.find('.label-title').addClass('label-text').html(val);
            select_container.append(select_item);
        });
        if(tmp_index > 0){
            item_content.attr('answer', '1');
        }
    }
    item_content.append(select_container);
    return item_content;
}

function viewEfoRadioImage(item_content, message, log_id) {
    if(message.list != void 0){
        var radio_image = $('.template-efo .radio-image-template .radio-image-container').clone(),
        date = new Date(),
        base_name = (!isEmpty(log_id)? log_id : date.getTime()),
        msg_answer = [];

        viewText(radio_image.find('.title'), message.title);
        if(!isEmpty(message.answer)){
            msg_answer = message.answer[0];
        }
        $.each(message.list, function (ind, item_box) {
            var item_box_element = $('.template-efo .radio-image-template .radio-image-box').clone();
            item_box_element.addClass('radio-box-' + item_box.length);
            var width_item = item_box.length ? 12 / (item_box.length) : 12,
                name_input = base_name + '-radio';
            $.each(item_box, function (ind, val) {
                var item = $('.template-efo .radio-image-template .radio-image-item').clone();
                item.addClass('col-xs-' + width_item + ' radio-item-' + ind);
                item.find('input').attr('name', name_input);
                viewText(item.find('.label-title'), val.comment);
                initIcheckType(item.find('.icheck'));
                if(!isEmpty(val.image_url)){
                    item.find('img').attr('src', val.image_url);
                }
                item_box_element.append(item);
            });
            radio_image.append(item_box_element);
        });
    }
    item_content.append(radio_image);
    fillRadioAnswer(item_content, msg_answer);
    return item_content;
}

function viewInput(item_content, message) {
    if(message.list != void 0){
        var answer = [],
            input_length = message.list.length,
            tmp_index = 0,
            input_wrap = $('.template-efo .item').clone(),
            answer_confirm = '',
            template_type_class,
            template_input = common_data['template_input'],
            template_input_flip = common_data['template_input_flip'],
            tel_input_type = common_data['tel_input_type'];
        if(message.answer != void 0 && message.answer.constructor == Array){
            answer = message.answer;
        }
        item_content = viewTitle(item_content, message.title, 'title label-text');
        if(message.template_type == template_input.email_confirm || message.template_type == template_input.password_confirm){
            if(answer.length > 0){
                answer_confirm = message.answer[0];
            }
            template_type_class = 'confirm';
        } else if(message.tel_input_type != void 0 && message.tel_input_type == tel_input_type.hyphen){
            template_type_class = 'tel_hyphen';
        } else if(message.template_type == template_input.text && message.list.length > 1){
            template_type_class = 'text';
        }
        input_wrap.addClass('col-xs-12 input-box ' + template_input_flip[message.template_type] + '_box').removeClass('item');
        $.each(message.list, function (ind, val) {
            var input_box = $('.template-efo .input-group .input-content').clone();
            if(template_type_class != void 0 && template_type_class == 'confirm'){
                input_box.addClass('col-xs-12 input-confirmation-' + ind);
            } else if(template_type_class != void 0 && template_type_class == 'tel_hyphen'){
                input_box.addClass('input_content_tel_' + ind + ' col-xs-' + (input_length ? (12/input_length) : 12));
            } else if(template_type_class != void 0 && template_type_class == 'text'){
                input_box.addClass('input_content_text_'+ ind+ ' col-xs-' + (input_length ? (12/input_length) : 12));
            }
            var input_item = input_box.find('.input').attr('disabled', 'disabled');
            if(answer_confirm != void 0 && answer_confirm != ''){
                tmp_index ++;
                input_item.val(answer_confirm);
            } else if(answer[ind] != void 0 && answer[ind] != ''){
                tmp_index ++;
                input_item.val(answer[ind]);
            }else{
                input_item.attr('placeholder', val.placeholder);
            }
            changeInputType(input_item, message.template_type);
            input_wrap.append(input_box);
        });
        item_content.append(input_wrap);
        if(tmp_index == message.list.length){
            item_content.attr('answer', '1');
        }
    }
    return item_content;
}

function changeInputType(item_content, type) {
    var template_input = common_data['template_input'];
    switch (type){
        case template_input.password:
        case template_input.password_confirm:
            item_content.attr('type', 'password');
            break;
    }
}

function viewTextarea(item_content, message) {
    item_content = viewTitle(item_content, message.title, 'title label-text');
    var text_area = $('.template-efo .text-area').clone(),
        tmp_index = 0;
    if(message.answer != void 0 && message.answer != ''){
        tmp_index ++;
        var number_line = message.answer.split(/\r\n|\r|\n/).length;
        if(number_line > 5){
            text_area.height('210px')
        }
        text_area.text(message.answer)
    } else{
        text_area.attr('placeholder', message.placeholder);
    }
    item_content.append(text_area);
    if(tmp_index > 0){
        item_content.attr('answer', '1');
    }
    return item_content;
}

function viewTitle(item, title_name, class_name) {
    if(title_name != void 0 && title_name != ''){
        var title = $('.template-efo .item').clone();
        title.removeClass('item').html(str_replace(title_name)).addClass(class_name);
        item.append(title);
    }
    return item;
}

function viewPostalCode(item_content, message) {
    if(message.list != void 0){
        var answer = [],
            tmp_index = 0;
        if(message.answer != void 0 && message.answer != '') {
            answer = message.answer;
        }
        $.each(message.list, function (ind, val) {
            var item = $('.template-efo .postal-code-group .postal-code-item').clone();
            item.removeClass('postal-code-item').addClass(val.type)
            if(answer[val.type] != void 0 && answer[val.type] != ''){
                tmp_index ++;
                item.find('.input-content').val(answer[val.type]);
            } else{
                item.find('.input-content').attr('placeholder', val.placeholder);
            }
            var title = $('.template-efo .postal-code-group .' + val.type).clone().addClass('title label-text');
            item.prepend(title);
            item_content.append(item);
        });
        if(tmp_index == message.list.length){
            item_content.attr('answer', '1');
        }
    }
    return item_content;
}

function viewPullDown(item_content, message) {
    var answer = [],
        pull_down = $('.template-efo .pull-down-group .pull-down-item').clone(),
        pull_down_commnent = $('.template-efo .pull-down-group .pull-down-label').clone(),
        template_pulldown = common_data['template_pulldown'];
    viewText(pull_down.find('.title'), message.title);
    viewText(pull_down_commnent, message.comment);
    if(message.template_type == template_pulldown.brithday){
        var brithday_box = $('.template-efo .pull-down-group .birthday-box').clone();
        pull_down.append(brithday_box);
    } else if(message.template_type == template_pulldown.time){
        checkPullDownTime(pull_down);
    } else if(message.template_type == template_pulldown.date){
        var date_box = $('.template-efo .pull-down-group .date-box').clone();
        pull_down.append(date_box);
    } else if(message.template_type == template_pulldown.month_date){
        var date_box = $('.template-efo .pull-down-group .date-box').clone();
        date_box.find('.select-year-box').remove();
        date_box.find('.select-month-box').attr('class', 'input-content select-month-box col-xs-6');
        date_box.find('.select-day-box').attr('class', 'input-content select-day-box col-xs-6');
        pull_down.append(date_box);
    } else if(message.template_type == template_pulldown.date_time){
        checkPullDownDateTime(pull_down);
    } else if(message.template_type == template_pulldown.period_of_time){
        checkPullDownPeriodTime(pull_down);
    } else if(message.template_type == template_pulldown.period_of_day){
        checkPullDownPeriodDay(pull_down);
    } else if(message.template_type == template_pulldown.customize || message.template_type == template_pulldown.the_provinces_of_japan){
        checkPullDownCustomize(pull_down, message);
    } else if(message.template_type == template_pulldown.towns_and_villages){
        checkPullDownTownsVillages(pull_down, message);
    }
    pull_down.append(pull_down_commnent);
    if(message.answer != void 0 && message.answer != '') {
        answer = message.answer;
    }
    fillOptionAnswer(pull_down, answer, message.template_type);
    if(pull_down.attr('answer') == '1'){
        pull_down.removeAttr('answer');
        item_content.attr('answer', 1)
    }
    item_content.append(pull_down);
    return item_content;
}

function checkPullDownDateTime(parent) {
    if(parent.length){
        var date_box = $('.template-efo .pull-down-group .date-box').clone();
        var time_box = $('.template-efo .pull-down-group .time-box').clone();
        time_box.find('.time-item').attr('class', 'time-item');
        time_box.find('.select-hour-box').attr('class', 'input-content select-hour-box col-xs-4')
        time_box.find('.select-minute-box').attr('class', 'input-content select-minute-box col-xs-4')
        time_box.find('.time-spacing').remove();
        parent.append(date_box);
        parent.append(time_box);
    }
}

function checkPullDownPeriodTime(parent) {
    if(parent.length){
        var period_time_box1 = $('.template-efo .pull-down-group .time-box .time-item').clone();
        var time_spacing = $('.template-efo .pull-down-group .time-box .time-spacing').clone();
        var period_time_box2 = $('.template-efo .pull-down-group .time-box .time-item').clone();
        period_time_box1.attr('class', 'period-time-item select-box col-xs-5');
        period_time_box2.attr('class', 'period-time-item select-box col-xs-5');
        time_spacing.addClass('time-spacing-to');
        parent.append(period_time_box1);
        parent.append(time_spacing);
        parent.append(period_time_box2);
    }
}

function viewCardPayment(item_content, message) {
    var tmp_index = 0,
        card = $('.template-efo .card-payment-group .card-payment-box ').clone();
    viewText(card.find('.card_title'), message.title);
    var answers = message.answer ? message.answer : [];
    if(message.answer != void 0 && message.answer != ''){
        Object.keys(answers).forEach(function (key) {
            card.find('.content[name="' + key + '"]').val(answers[key])
        })
    } else{
        $.each(message.list, function (ind, val) {
            card.find('.content[name="' + (val.type) + '"]').attr('placeholder', val.placeholder)
        })
    }
    item_content.append(card);
    return item_content;
}

function checkPullDownPeriodDay(parent) {
    if(parent.length){
        var date_box1 = $('.template-efo .pull-down-group .date-box').clone();
        var date_box2 = $('.template-efo .pull-down-group .date-box').clone();
        var time_spacing = $('.template-efo .pull-down-group .time-box .time-spacing').clone();
        time_spacing.attr('class', 'time-spacing col-xs-12');
        parent.append(date_box1);
        parent.append(time_spacing);
        parent.append(date_box2);
    }
}

function checkPullDownCustomize(parent, message) {
    var message_list = message.list,
        first_title_msg = message.first_title,
        last_title_msg = message.last_title;
    if(parent.length && message_list != void 0 && message_list.length) {
        var customize_one_box_item = $('.template-efo .pull-down-group .customize-one-box').clone(),
            customize_two_box_item = $('.template-efo .pull-down-group .customize-two-box').clone();
        if (message_list.length == 1) {
            // customize 1 select
            viewText(customize_one_box_item.find('.first_title'), first_title_msg);
            viewText(customize_one_box_item.find('.last_title'), last_title_msg);
            var customize_item = customize_one_box_item;
            var select_class = 'select';
        } else {
            // customize 2 select
            viewText(customize_two_box_item.find('.first_title'), first_title_msg);
            viewText(customize_two_box_item.find('.last_title'), last_title_msg);
            var customize_item = customize_two_box_item;
            var select_class = '.customize-item-box:eq(:ind) select';
        }
        $(message_list).each(function (ind, val) {
            var select_current_class = select_class.replace(':ind', ind);
            for (var i = 0; i < val.length; i++) {
                var customize_option = '<option value="' + i + '">' + val[i] + '</option>';
                if (customize_item.find(select_current_class)) {
                    customize_item.find(select_current_class).append(customize_option);
                }
            }
            parent.append(customize_item);
        });
    }
}

function checkPullDownTownsVillages(parent, message) {
    var item = $('.template-efo .towns_and_villages_box').clone(),
        first_title_item = item.find('.first_title'),
        last_title_item = item.find('.last_title'),
        message_answer = message.answer;
    viewText(first_title_item, message.first_title, 'first_title label-text');
    viewText(last_title_item, message.last_title, 'last_title label-text');
    $(message_answer).each(function (ind, val) {
        if(!isEmpty(val)){
            var select_current_class = 'select:eq(' + ind + ')';
            var customize_option = '<option selected="selected" value="0">' + val + '</option>';
            if (item.find(select_current_class)) {
                item.find(select_current_class).append(customize_option);
            }
        }
    });
    parent.append(item);
}

function checkPullDownTime(parent) {
    if(parent.length){
        var time_box = $('.template-efo .pull-down-group .time-box').clone();
        time_box.find('.time-item').attr('class', 'time-item');
        time_box.find('.time-spacing').remove();
        parent.append(time_box);
    }
}

function viewLabel(item_content, message) {
    item_content.addClass('item-text');
    item_content = viewTitle(item_content, message.content, 'title label-text');
    return item_content;
}

function fillOptionAnswer(item, answer, template_type) {
    var tmp_index = 0;
    $(answer).each(function (ind, data) {
        var select = item.find('select:eq(' + ind + ')');
        if(answer[ind] != void 0 && answer[ind] != ''){
            tmp_index ++;
            if(template_type == template_pulldown.towns_and_villages){
                select.val(0);
            } else{
                select.val(answer[ind]);
            }
        } else{
            select.val('');
        }
    });
    if(tmp_index == answer.length && tmp_index > 0){
        item.attr('answer', 1);
    }
}

function viewTermsUse(item_content, message) {
    var answer = [];
    if(message.answer != void 0 && message.answer.constructor == Array){
        answer = message.answer;
    }
    var terms_item = $('.template-efo .terms-use-group').clone(),
        terms_text_area = terms_item.find('.terms-text-area');
    terms_item.removeClass('terms-use-group');
    viewText(terms_item.find('.title'), message.title);
    terms_text_area.text(message.content);
    if(answer.length > 0){
        terms_item.find('.icheck').addClass('checked');
        item_content.attr('answer', '1');
    }
    terms_item.find('.label-title').html(message.text_confirm).addClass('title label-text');
    item_content.append(terms_item);
    return item_content;
}

function viewFile(item_content, message) {
    var answer = message.answer ? message.answer : [],
        base_url_upload = common_data['base_url_upload'];
    var file_item = $('.template-efo .file_user_select_container').clone();
    if(!isEmpty(answer) && !isEmpty(answer.file_path) && !isEmpty(answer.file_name_origin)){
        file_item.find('.file_user_answer .label-title').html(answer.file_name_origin).attr('href', base_url_upload + '/' + answer.file_path);
    } else{
        file_item.find('.file_user_answer').remove();
    }
    item_content.append(file_item);
    return item_content;
}

function viewButton(item, flg) {
    var button_wrap = $('.template-efo .btn-action').clone(),
        btn_item = button_wrap.find('.button');
    if(flg == true){
        btn_item.html(btn_item.attr('data-ok'));
        btn_item.addClass('disabled');
    } else{
        btn_item.html(btn_item.attr('data-next'));
    }
    button_wrap.append(btn_item);
    item.append(button_wrap);
    return item;
}

function viewCalendar(item, message) {
    var calendar = $('.template-efo .calendar_box .calendar_item').clone(),
        calendar_type,
        answer = null,
        efo_template_calendar = common_data['template_calendar'];
    viewText(calendar.find('.title'), message.title);
    if(message.answer != void 0 && message.answer != ''){
        answer = message.answer;
    }
    if(message.template_type == efo_template_calendar.select){
        calendar_type = $('.template-efo .calendar_box .calendar_select').clone();
        $(calendar_type).addClass('not_init');
        calendar.append(calendar_type);
    } else if(message.template_type == efo_template_calendar.embed){
        calendar_type = $('.template-efo .calendar_box .calendar_embed').clone();
        $(calendar_type).addClass('not_init');
        calendar.append(calendar_type);
    } else{
        var calendar_type1 = $('.template-efo .calendar_box .calendar_select').clone(),
            calendar_type2 = $('.template-efo .calendar_box .calendar_select').clone();
        calendar.append('<div class="col-xs-6 calendar_box_from"><div class="calendar input-group datetimepicker">' + calendar_type1.html() + '</div></div>');
        calendar.append('<div class="col-xs-6 calendar_box_to"><div class="calendar input-group datetimepicker">' + calendar_type2.html() + '</div></div>');
        calendar.find('.calendar').addClass('not_init');
    }
    initDatePicker(calendar, answer, message.template_type);
    item.append(calendar);
    return item;
}

function initChat(message_data, type) {
    var message_chat_type = common_data['message_type'];
    if(type == message_chat_type.user){
        var item = $('.template_message .bot_chat').clone();
        item.find('.ctext-wrap').addClass('bot-border content-right');
        item.find('.chat-avatar').hide();
    } else {
        var item = $('.template_message .user_chat').clone();
        item.find('.ctext-wrap').addClass('user-border content-left');
        item.find('.chat-avatar').show();
    }
    item.addClass('message-wrapper');
    item.find('.ctext-wrap').attr('data-message_id', message_data._id);
    return item;
}

function viewCaptcha(item, message) {
    var captcha_item = $('.template-efo .captcha_box .captcha_container').clone();
    item.append(captcha_item);
    return item;
}

function fillMessageEfo(message_data, appendHead) {
    var message_chat_type = common_data['message_type'];
    if(message_data.type == message_chat_type.user){
        fillUserChatEfo(message_data, appendHead);
        setBorderChatEfo();
        initSlick();
        resetSlickCarousel();
        initDatePicker();
    } else{
        fillBotChatEfo(message_data, appendHead);
    }
}

function viewCarousel(item, message) {
    var carousel_item =  $('.template-efo .carousel_box').clone();
    //carousel title
    if(message.title != void 0 && message.title != ''){
        carousel_item.find('.title').addClass('title label-text').html(message.title);
    }
    var answer_number = message.answer != void 0 && message.answer != '' ? message.answer[0] : null;
    if(message.list != void 0){
        $.each(message.list, function (ind, val) {
            var clone = $('.template-efo .carousel_item').clone();
            viewText(clone.find('.item_title'), val['title'], 'item_title');
            viewText(clone.find('.item_subtitle'), val['subtitle'], 'item_subtitle');
            if(!isEmpty(val.image_url) ) {
                clone.find('.image_box img').attr('src', val['image_url']);
            }
            if(!isEmpty(val.button)) {
                clone.find('.select_box button').html(val['button']['title']);
            }
            if(answer_number != void 0 && answer_number == ind){
                clone.addClass('active');
                carousel_item.attr('carousel_answer', answer_number);
            }
            carousel_item.find('.carousel_container').append(clone);
        });
    }
    item.append(carousel_item);
    return item;
}

function initSlick() {
    $('.chat-conversation  .carousel_box').show();
    if($('.chat-conversation .carousel_container').not('.slick-initialized').length) {
        var option = {
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            autoplay: false,
            cssEase: 'linear',
            slidesToShow: 1
        };

        $('.chat-conversation .carousel_container').not('.slick-initialized').each(function(i, e) {
            var carousel_box = $(e).parents('.carousel_box'),
                button_next = carousel_box.find('.right.carousel-slick-control'),
                button_prev = carousel_box.find('.left.carousel-slick-control'),
                answer_number = carousel_box.attr('carousel_answer');
            if(answer_number != void 0){
                option.initialSlide = parseInt(answer_number);
            }
            option.nextArrow = button_next;
            option.prevArrow = button_prev;
            $(e).slick(option);
            //active slide have .active class
            var carousel_item_active = $(e).find('.carousel_item.active');
            if(carousel_item_active.length) {
                $(e).slick('slickGoTo', carousel_item_active.index());
            }

            //check to show, hide button after init slide
            checkCarouselButton($(e));
            //check to show, hide button after click next, prev slide
            $(e).on('afterChange', function(event, slick, currentSlide, nextSlide) {
                checkCarouselButton(event);
            });
        });
    }
}

function checkCarouselButton(slick_elm) {
    if($(slick_elm).length) {
        var parent;
        if($(slick_elm.target).length) {
            parent = $(slick_elm.target).parents('.carousel_box');
        } else {
            parent = $(slick_elm).parents('.carousel_box');
        }

        if($(parent).length) {
            var button_next = $(parent).find('.right.carousel-slick-control'),
                button_prev = $(parent).find('.left.carousel-slick-control');
            if(button_prev.hasClass('slick-disabled') || button_prev.hasClass('slick-hidden')){
                button_prev.hide();
            } else {
                button_prev.show();
            }
            if(button_next.hasClass('slick-disabled') || button_next.hasClass('slick-hidden')){
                button_next.hide();
            } else {
                button_next.show();
            }
        }
    }
}

function resetSlickCarousel() {
    $('.chat-conversation .carousel_container.slick-initialized').slick("refresh");
}

function fillUserChatEfo(message_data, appendHead){
    if(message_data.message != void 0 && message_data.message != '' && message_data.message.constructor == Array){
        // update bot log
        var log_id = null;
        if(message_data._id != void 0 && message_data._id != ''){
            log_id = message_data._id;
            removeAfterMessage(message_data._id)
        }
        var message = message_data.message,
            user_content = common_data['bot_content_type'],
            user_chat = initChat(message_data, message_data.type),
            time_of_message = '',
            item = null,
            button_status_flg = true, // show or hide button action next, ok
            button_type_flg = true, // button next or ok
            wrap_content = user_chat.find('.ctext-wrap');
        if(message_data['created_at'] != void 0) {
            time_of_message = getDateByTimezone(message_data['created_at'], 'H:mm:ss');
        }
        user_chat.find('.time_of_message').html(time_of_message);
        setPreviousMessageDefault();
        for(var i = 0 ; i < message.length; i++){
            item = $('.template-efo .item').clone();
            item.addClass('col-xs-12');
            if(message[i].type != void 0 && (message[i].type == common_data['bot_content_type']['radio'])){
                if(message[i].template_type == template_radio[type_image_radio]){
                    viewEfoRadioImage(item, message[i], log_id);
                } else {
                    item = viewEfoSelectBox(item, message[i].type, message[i]);
                }
            } else if(message[i].type != void 0 && message[i].type == common_data['bot_content_type']['checkbox']){
                item = viewEfoSelectBox(item, message[i].type, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.input){
                viewInput(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.textarea){
                item = viewTextarea(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.postal_code){
                item = viewPostalCode(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.terms_of_use){
                item = viewTermsUse(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.pulldown){
                item = viewPullDown(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.text){
                item = viewLabel(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.card_payment){
                item = viewCardPayment(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.carousel){
                item = viewCarousel(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.file){
                item = viewFile(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.calendar){
                item = viewCalendar(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.captcha){
                item = viewCaptcha(item, message[i]);
            }
            user_chat.find('.text_message').append(item);
            button_status_flg = showHiddenButtonNext(message);
            if(button_status_flg){
                if(item.attr('answer') != void 0 && item.attr('answer') == '1') {
                    button_type_flg &= true;
                }else{
                    button_type_flg &= false;
                }
                item.removeAttr('answer');
            }
        }
        if(button_status_flg){
            var button_action = viewButton(user_chat.find('.text_message'), button_type_flg);
            wrap_content.append(button_action);
        }
        if(appendHead != void 0 && appendHead){
            $('.conversation_index .chat_content .conversation-list').prepend(user_chat);
        }else{
            $('.conversation_index .chat_content .conversation-list').append(user_chat);
        }
    }
}

/**
 * set default previous message user
 * **/
function setPreviousMessageDefault() {
    var button = $('.conversation-list .btn-action button'),
        text_input = $('.conversation-list input'),
    label_ok = $('.template-efo .button-group .button').clone().attr('data-ok');
    button.addClass('btn-ok disabled').html(label_ok);
    text_input.attr('placeholder', '');
}

//get message box element by log_message_id
function getMessageBox(log_message_id) {
    return $('.conversation_index .ctext-wrap[data-message_id=' + log_message_id + ']').parents('.message-wrapper');
}

//remove all message after message have log_message_id
//return true: if have remove after message
function removeAfterMessage(log_message_id) {
    var message_box = getMessageBox(log_message_id);
    var index = message_box.index() >= 0 ?  message_box.index() - 1 : message_box.index();
    if($('.conversation_index .message-wrapper:gt(' +index + ')').length) {
        $('.conversation_index .message-wrapper:gt(' + index + ')').remove();
        message_box.remove();
        return true;
    }
    return false;
}

function str_replace(str) {
    if(str){
        str = str.replace(/ /g, '&nbsp;');
        return str.replace(/\n/g, '<br/>');
    }
}

function showHiddenButtonNext(msg) {
    var user_content = common_data['bot_content_type'];
    var message_type_hidden_arr = [user_content.radio, user_content.carousel, user_content.text];
    if(msg && msg.length == 1 && message_type_hidden_arr.indexOf(msg[0].type) > -1 ){
        return false;
    }
    return true;
}

function initDatePicker(calendar, answer, template_type) {
    var option = {
        //sideBySide: true,
        format: 'Y/MM/DD',
        allowInputToggle : true,
        ignoreReadonly: true
    },
        efo_template_calendar = common_data['template_calendar'];
    if(calendar != void 0 && $(calendar).length > 0){
        var calendar_item = calendar.find('.calendar');
        if(calendar_item.hasClass('calendar_embed')){
            option.inline = true;
        }
        if(answer != void 0){
            calendar_item.datetimepicker(option);
            if(template_type == efo_template_calendar.select || template_type == efo_template_calendar.embed){
                fillAnswerCalendar(calendar_item, answer.year, answer.month, answer.day);
            } else{
                for(var i = 0; i< answer.length; i++){
                    if(calendar.find('.calendar:eq('+ i + ')').length){
                        fillAnswerCalendar(calendar.find('.calendar:eq('+ i + ')'), answer[i].year, answer[i].month, answer[i].day);
                    }
                }
            }
        }
    } else{
        $('.calendar.not_init:not(.calendar_embed)').datetimepicker(option);
        option.inline = true;
        $('.calendar.not_init.calendar_embed').datetimepicker(option);
        $('.calendar').removeClass('not_init');
    }
}

function fillAnswerCalendar(calender_item, answer_year, answer_month, answer_day) {
    if(answer_year != void 0 && answer_month != void 0 && answer_day != void 0 && calender_item.data("DateTimePicker") != void 0){
        calender_item.data("DateTimePicker").date(answer_year + '/' + answer_month + '/' + answer_day);
    }
}

function fillRadioAnswer(item, answer) {
    if(!isEmpty(answer)){
        var answer_split = answer.split(",");
        if(!isEmpty(answer_split) && answer_split.length == 2){
            var radio_item = item.find('.radio-image-box:eq(' + answer_split[0] + ') .radio-image-item:eq(' + answer_split[1] + ')');
            if(radio_item.length){
                radio_item.addClass('active');
                radio_item.find('.icheck').iCheck('check');
            }
        }
    }
}

function viewText(item, msg, class_name) {
    if(class_name == void 0){
        class_name = '';
    }
    if(msg != void 0 && msg != ''){
        item.addClass('label-text ' + class_name).html(msg);
    } else{
        item.remove();
    }
}

function isEmpty(msg) {
    if(msg != void 0 && msg != ''){
        return false;
    }
    return true;
}

function initIcheckType(element, type) {
    if(type == void 0){
        type = 'blue';
    }
    element.iCheck({
        checkboxClass: 'icheckbox_minimal-' + type,
        radioClass: 'iradio_minimal-' + type
    });
}
//# sourceMappingURL=conversation-efo-all.js.map
