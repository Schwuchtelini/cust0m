/* Ich mach jetzt auch mal ein paar Kommentare */
/* Achja, diesen Code als Text zu programmieren macht alles einfacher, viel Übersichtlicher und richtig viel spaß*/

/* Für die Scrollbar*/

/* == malihu jquery custom scrollbar plugin == Version: 3.0.7, License: MIT License (MIT) */
!function(e,t,a){!function(t){var o="function"==typeof define&&define.amd,n="https:"==a.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";o||e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E")),t()}(function(){var o,n="mCustomScrollbar",i="mCS",r=".mCustomScrollbar",l={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},s=0,c={},d=t.attachEvent&&!t.addEventListener?1:0,u=!1,f=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],h={init:function(t){var t=e.extend(!0,{},l,t),a=m.call(this);if(t.live){var o=t.liveSelector||this.selector||r,n=e(o);if("off"===t.live)return void g(o);c[o]=setTimeout(function(){n.mCustomScrollbar(t),"once"===t.live&&n.length&&g(o)},500)}else g(o);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":v(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=x(t.scrollButtons.scrollType),p(t),e(a).each(function(){var a=e(this);if(!a.data(i)){a.data(i,{idx:++s,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:a.css("direction"),cbOffsets:null,trigger:null});var o=a.data(i),n=o.opt,r=a.data("mcs-axis"),l=a.data("mcs-scrollbar-position"),c=a.data("mcs-theme");r&&(n.axis=r),l&&(n.scrollbarPosition=l),c&&(n.theme=c,p(n)),_.call(this),e("#mCSB_"+o.idx+"_container img:not(."+f[2]+")").addClass(f[2]),h.update.call(null,a)}})},update:function(t,a){var o=t||m.call(this);return e(o).each(function(){var t=e(this);if(t.data(i)){var o=t.data(i),n=o.opt,r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(!r.length)return;o.tweenRunning&&Q(t),t.hasClass(f[3])&&t.removeClass(f[3]),t.hasClass(f[4])&&t.removeClass(f[4]),C.call(this),w.call(this),"y"===n.axis||n.advanced.autoExpandHorizontalScroll||r.css("width",S(r.children())),o.overflowed=k.call(this),R.call(this),n.autoDraggerLength&&y.call(this),B.call(this),O.call(this);var s=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==n.axis&&(o.overflowed[0]?l[0].height()>l[0].parent().height()?M.call(this):(G(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}),o.contentReset.y=null):(M.call(this),"y"===n.axis?I.call(this):"yx"===n.axis&&o.overflowed[1]&&G(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==n.axis&&(o.overflowed[1]?l[1].width()>l[1].parent().width()?M.call(this):(G(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}),o.contentReset.x=null):(M.call(this),"x"===n.axis?I.call(this):"yx"===n.axis&&o.overflowed[0]&&G(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),a&&o&&(2===a&&n.callbacks.onImageLoad&&"function"==typeof n.callbacks.onImageLoad?n.callbacks.onImageLoad.call(this):3===a&&n.callbacks.onSelectorChange&&"function"==typeof n.callbacks.onSelectorChange?n.callbacks.onSelectorChange.call(this):n.callbacks.onUpdate&&"function"==typeof n.callbacks.onUpdate&&n.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,a){if("undefined"!=typeof t&&null!=t){var o=m.call(this);return e(o).each(function(){var o=e(this);if(o.data(i)){var n=o.data(i),r=n.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,a),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=n.scrollRatio.y,c[1]*=n.scrollRatio.x),s.dur=d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&n.overflowed[0]&&(s.dir="y",s.overwrite="all",G(o,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&n.overflowed[1]&&(s.dir="x",s.overwrite="none",G(o,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=m.call(this);return e(t).each(function(){var t=e(this);t.data(i)&&Q(t)})},disable:function(t){var a=m.call(this);return e(a).each(function(){var a=e(this);if(a.data(i)){{a.data(i)}N.call(this,"remove"),I.call(this),t&&M.call(this),R.call(this,!0),a.addClass(f[3])}})},destroy:function(){var t=m.call(this);return e(t).each(function(){var a=e(this);if(a.data(i)){var o=a.data(i),r=o.opt,l=e("#mCSB_"+o.idx),s=e("#mCSB_"+o.idx+"_container"),c=e(".mCSB_"+o.idx+"_scrollbar");r.live&&g(r.liveSelector||e(t).selector),N.call(this,"remove"),I.call(this),M.call(this),a.removeData(i),$(this,"mcs"),c.remove(),s.find("img."+f[2]).removeClass(f[2]),l.replaceWith(s.contents()),a.removeClass(n+" _"+i+"_"+o.idx+" "+f[6]+" "+f[7]+" "+f[5]+" "+f[3]).addClass(f[4])}})}},m=function(){return"object"!=typeof e(this)||e(this).length<1?r:this},p=function(t){var a=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],o=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,a)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,o)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},g=function(e){c[e]&&(clearTimeout(c[e]),$(c,e))},v=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},x=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},_=function(){var t=e(this),a=t.data(i),o=a.opt,r=o.autoExpandScrollbar?" "+f[1]+"_expand":"",l=["<div id='mCSB_"+a.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+f[12]+"'><div id='mCSB_"+a.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+a.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+f[12]+"'><div id='mCSB_"+a.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===o.axis?"mCSB_vertical_horizontal":"x"===o.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===o.axis?l[0]+l[1]:"x"===o.axis?l[1]:l[0],d="yx"===o.axis?"<div id='mCSB_"+a.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",u=o.autoHideScrollbar?" "+f[6]:"",h="x"!==o.axis&&"rtl"===a.langDir?" "+f[7]:"";o.setWidth&&t.css("width",o.setWidth),o.setHeight&&t.css("height",o.setHeight),o.setLeft="y"!==o.axis&&"rtl"===a.langDir?"989999px":o.setLeft,t.addClass(n+" _"+i+"_"+a.idx+u+h).wrapInner("<div id='mCSB_"+a.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+s+"'><div id='mCSB_"+a.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir="+a.langDir+" /></div>");var m=e("#mCSB_"+a.idx),p=e("#mCSB_"+a.idx+"_container");"y"===o.axis||o.advanced.autoExpandHorizontalScroll||p.css("width",S(p.children())),"outside"===o.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(d)),b.call(this);var g=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},S=function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},w=function(){var t=e(this),a=t.data(i),o=a.opt,n=e("#mCSB_"+a.idx+"_container");o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis&&n.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(n[0].getBoundingClientRect().right+.4)-Math.floor(n[0].getBoundingClientRect().left),position:"relative"}).unwrap()},b=function(){var t=e(this),a=t.data(i),o=a.opt,n=e(".mCSB_"+a.idx+"_scrollbar:first"),r=at(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+f[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+f[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+f[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+f[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===o.axis?l[2]:l[0],"x"===o.axis?l[3]:l[1],l[2],l[3]];o.scrollButtons.enable&&n.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},C=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=t.css("max-height")||"none",r=-1!==n.indexOf("%"),l=t.css("box-sizing");if("none"!==n){var s=r?t.parent().height()*parseInt(n)/100:parseInt(n);"border-box"===l&&(s-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),o.css("max-height",Math.round(s))}},y=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=e("#mCSB_"+a.idx+"_container"),r=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],l=[o.height()/n.outerHeight(!1),o.width()/n.outerWidth(!1)],s=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],c=d&&s[1]<s[0]?s[0]:s[1],u=d&&s[3]<s[2]?s[2]:s[3];r[0].css({height:c,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":s[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},B=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=e("#mCSB_"+a.idx+"_container"),r=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],l=[n.outerHeight(!1)-o.height(),n.outerWidth(!1)-o.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];a.scrollRatio={y:s[0],x:s[1]}},T=function(e,t,a){var o=a?f[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(f[0]+" "+o),n.toggleClass(f[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(f[0]),n.removeClass(f[1])):(e.addClass(f[0]),n.addClass(f[1])))},k=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=e("#mCSB_"+a.idx+"_container"),r=null==a.overflowed?n.height():n.outerHeight(!1),l=null==a.overflowed?n.width():n.outerWidth(!1);return[r>o.height(),l>o.width()]},M=function(){var t=e(this),a=t.data(i),o=a.opt,n=e("#mCSB_"+a.idx),r=e("#mCSB_"+a.idx+"_container"),l=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];if(Q(t),("x"!==o.axis&&!a.overflowed[0]||"y"===o.axis&&a.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==o.axis&&!a.overflowed[1]||"x"===o.axis&&a.overflowed[1]){var s=dx=0;"rtl"===a.langDir&&(s=n.width()-r.outerWidth(!1),dx=Math.abs(s/a.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},O=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),A.call(a[0])):t()},100)}var a=e(this),o=a.data(i),n=o.opt;if(!o.bindEvents){if(D.call(this),n.contentTouchScroll&&L.call(this),W.call(this),n.mouseWheel.enable){var r;t()}z.call(this),U.call(this),n.advanced.autoScrollOnFocus&&H.call(this),n.scrollButtons.enable&&F.call(this),n.keyboard.enable&&q.call(this),o.bindEvents=!0}},I=function(){var t=e(this),o=t.data(i),n=o.opt,r=i+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+l+" ."+f[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+l+">a"),c=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&s.add(e(n.advanced.releaseDraggableSelectors)),o.bindEvents&&(e(a).unbind("."+r),s.each(function(){e(this).unbind("."+r)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(c[0].onCompleteTimeout),$(c[0],"onCompleteTimeout"),o.bindEvents=!1)},R=function(t){var a=e(this),o=a.data(i),n=o.opt,r=e("#mCSB_"+o.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+o.idx+"_container"),s=[e("#mCSB_"+o.idx+"_scrollbar_vertical"),e("#mCSB_"+o.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==n.axis&&(o.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(f[8]+" "+f[10])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(f[10])):(s[0].css("display","none"),l.addClass(f[10])),l.addClass(f[8]))),"y"!==n.axis&&(o.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(f[9]+" "+f[11])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(f[11])):(s[1].css("display","none"),l.addClass(f[11])),l.addClass(f[9]))),o.overflowed[0]||o.overflowed[1]?a.removeClass(f[5]):a.addClass(f[5])},E=function(e){var t=e.type;switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var a=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],o=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return[a.pageY,a.pageX,o>1];default:return[e.pageY,e.pageX,!1]}},D=function(){function t(e){var t=p.find("iframe");if(t.length){var a=e?"auto":"none";t.css("pointer-events",a)}}function o(e,t,a,o){if(p[0].idleTimer=f.scrollInertia<233?250:0,n.attr("id")===m[1])var i="x",r=(n[0].offsetLeft-t+o)*c.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+a)*c.scrollRatio.y;G(s,r.toString(),{dir:i,drag:!0})}var n,r,l,s=e(this),c=s.data(i),f=c.opt,h=i+"_"+c.idx,m=["mCSB_"+c.idx+"_dragger_vertical","mCSB_"+c.idx+"_dragger_horizontal"],p=e("#mCSB_"+c.idx+"_container"),g=e("#"+m[0]+",#"+m[1]),v=f.advanced.releaseDraggableSelectors?g.add(e(f.advanced.releaseDraggableSelectors)):g;g.bind("mousedown."+h+" touchstart."+h+" pointerdown."+h+" MSPointerDown."+h,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),et(o)){u=!0,d&&(a.onselectstart=function(){return!1}),t(!1),Q(s),n=e(this);var i=n.offset(),c=E(o)[0]-i.top,h=E(o)[1]-i.left,m=n.height()+i.top,p=n.width()+i.left;m>c&&c>0&&p>h&&h>0&&(r=c,l=h),T(n,"active",f.autoExpandScrollbar)}}).bind("touchmove."+h,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=E(e)[0]-t.top,i=E(e)[1]-t.left;o(r,l,a,i)}),e(a).bind("mousemove."+h+" pointermove."+h+" MSPointerMove."+h,function(e){if(n){var t=n.offset(),a=E(e)[0]-t.top,i=E(e)[1]-t.left;if(r===a)return;o(r,l,a,i)}}).add(v).bind("mouseup."+h+" touchend."+h+" pointerup."+h+" MSPointerUp."+h,function(){n&&(T(n,"active",f.autoExpandScrollbar),n=null),u=!1,d&&(a.onselectstart=null),t(!0)})},L=function(){function t(e,t){var a=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?a[0]:a[3]:e>60?t>3?a[3]:a[2]:e>30?t>8?a[1]:t>6?a[0]:t>4?t:a[2]:t>8?t:a[3]}function a(e,t,a,o,n,i){e&&G(_,e.toString(),{dur:t,scrollEasing:a,dir:o,overwrite:n,drag:i})}var n,r,l,s,c,d,f,h,m,p,g,v,x,_=e(this),S=_.data(i),w=S.opt,b=i+"_"+S.idx,C=e("#mCSB_"+S.idx),y=e("#mCSB_"+S.idx+"_container"),B=[e("#mCSB_"+S.idx+"_dragger_vertical"),e("#mCSB_"+S.idx+"_dragger_horizontal")],T=[],k=[],M=0,O="yx"===w.axis?"none":"all",I=[];y.bind("touchstart."+b+" pointerdown."+b+" MSPointerDown."+b,function(e){if(!tt(e)||u||E(e)[2])return void(o=0);o=1,v=0,x=0;var t=y.offset();n=E(e)[0]-t.top,r=E(e)[1]-t.left,I=[E(e)[0],E(e)[1]]}).bind("touchmove."+b+" pointermove."+b+" MSPointerMove."+b,function(e){if(tt(e)&&!u&&!E(e)[2]&&(e.stopImmediatePropagation(),!x||v)){d=K();var t=C.offset(),o=E(e)[0]-t.top,i=E(e)[1]-t.left,l="mcsLinearOut";if(T.push(o),k.push(i),I[2]=Math.abs(E(e)[0]-I[0]),I[3]=Math.abs(E(e)[1]-I[1]),S.overflowed[0])var s=B[0].parent().height()-B[0].height(),c=n-o>0&&o-n>-(s*S.scrollRatio.y)&&(2*I[3]<I[2]||"yx"===w.axis);if(S.overflowed[1])var f=B[1].parent().width()-B[1].width(),h=r-i>0&&i-r>-(f*S.scrollRatio.x)&&(2*I[2]<I[3]||"yx"===w.axis);c||h?(e.preventDefault(),v=1):x=1,p="yx"===w.axis?[n-o,r-i]:"x"===w.axis?[null,r-i]:[n-o,null],y[0].idleTimer=250,S.overflowed[0]&&a(p[0],M,l,"y","all",!0),S.overflowed[1]&&a(p[1],M,l,"x",O,!0)}}),C.bind("touchstart."+b+" pointerdown."+b+" MSPointerDown."+b,function(e){if(!tt(e)||u||E(e)[2])return void(o=0);o=1,e.stopImmediatePropagation(),Q(_),c=K();var t=C.offset();l=E(e)[0]-t.top,s=E(e)[1]-t.left,T=[],k=[]}).bind("touchend."+b+" pointerup."+b+" MSPointerUp."+b,function(e){if(tt(e)&&!u&&!E(e)[2]){e.stopImmediatePropagation(),v=0,x=0,f=K();var o=C.offset(),n=E(e)[0]-o.top,i=E(e)[1]-o.left;if(!(f-d>30)){m=1e3/(f-c);var r="mcsEaseOut",_=2.5>m,b=_?[T[T.length-2],k[k.length-2]]:[0,0];h=_?[n-b[0],i-b[1]]:[n-l,i-s];var B=[Math.abs(h[0]),Math.abs(h[1])];m=_?[Math.abs(h[0]/4),Math.abs(h[1]/4)]:[m,m];var M=[Math.abs(y[0].offsetTop)-h[0]*t(B[0]/m[0],m[0]),Math.abs(y[0].offsetLeft)-h[1]*t(B[1]/m[1],m[1])];p="yx"===w.axis?[M[0],M[1]]:"x"===w.axis?[null,M[1]]:[M[0],null],g=[4*B[0]+w.scrollInertia,4*B[1]+w.scrollInertia];var I=parseInt(w.contentTouchScroll)||0;p[0]=B[0]>I?p[0]:0,p[1]=B[1]>I?p[1]:0,S.overflowed[0]&&a(p[0],g[0],r,"y",O,!1),S.overflowed[1]&&a(p[1],g[1],r,"x",O,!1)}}})},W=function(){function n(){return t.getSelection?t.getSelection().toString():a.selection&&"Control"!=a.selection.type?a.selection.createRange().text:0}function r(e,t,a){f.type=a&&l?"stepped":"stepless",f.scrollAmount=10,j(s,e,t,"mcsLinearOut",a?60:null)}var l,s=e(this),c=s.data(i),d=c.opt,f=c.sequential,h=i+"_"+c.idx,m=e("#mCSB_"+c.idx+"_container"),p=m.parent();m.bind("mousedown."+h,function(){o||l||(l=1,u=!0)}).add(a).bind("mousemove."+h,function(e){if(!o&&l&&n()){var t=m.offset(),a=E(e)[0]-t.top+m[0].offsetTop,i=E(e)[1]-t.left+m[0].offsetLeft;a>0&&a<p.height()&&i>0&&i<p.width()?f.step&&r("off",null,"stepped"):("x"!==d.axis&&c.overflowed[0]&&(0>a?r("on",38):a>p.height()&&r("on",40)),"y"!==d.axis&&c.overflowed[1]&&(0>i?r("on",37):i>p.width()&&r("on",39)))}}).bind("mouseup."+h,function(){o||(l&&(l=0,r("off",null)),u=!1)})},A=function(){function t(e){var t=null;try{var a=e.contentDocument||e.contentWindow.document;t=a.body.innerHTML}catch(o){}return null!==t}var a=e(this),o=a.data(i);if(o){var n=o.opt,r=i+"_"+o.idx,l=e("#mCSB_"+o.idx),s=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],c=e("#mCSB_"+o.idx+"_container").find("iframe"),u=l;c.length&&c.each(function(){var a=this;t(a)&&(u=u.add(e(a).contents().find("body")))}),u.bind("mousewheel."+r,function(t,i){if(Q(a),!P(a,t.target)){var r="auto"!==n.mouseWheel.deltaFactor?parseInt(n.mouseWheel.deltaFactor):d&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===n.axis||"x"===n.mouseWheel.axis)var c="x",u=[Math.round(r*o.scrollRatio.x),parseInt(n.mouseWheel.scrollAmount)],f="auto"!==n.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetLeft),m=s[1][0].offsetLeft,p=s[1].parent().width()-s[1].width(),g=t.deltaX||t.deltaY||i;else var c="y",u=[Math.round(r*o.scrollRatio.y),parseInt(n.mouseWheel.scrollAmount)],f="auto"!==n.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetTop),m=s[0][0].offsetTop,p=s[0].parent().height()-s[0].height(),g=t.deltaY||i;"y"===c&&!o.overflowed[0]||"x"===c&&!o.overflowed[1]||(n.mouseWheel.invert&&(g=-g),n.mouseWheel.normalizeDelta&&(g=0>g?-1:1),(g>0&&0!==m||0>g&&m!==p||n.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),G(a,(h-g*f).toString(),{dir:c}))}})}},P=function(t,a){var o=a.nodeName.toLowerCase(),n=t.data(i).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(o,n)>-1&&!(e.inArray(o,r)>-1&&!e(a).is(":focus"))},z=function(){var t=e(this),a=t.data(i),o=i+"_"+a.idx,n=e("#mCSB_"+a.idx+"_container"),r=n.parent(),l=e(".mCSB_"+a.idx+"_scrollbar ."+f[12]);l.bind("touchstart."+o+" pointerdown."+o+" MSPointerDown."+o,function(){u=!0}).bind("touchend."+o+" pointerup."+o+" MSPointerUp."+o,function(){u=!1}).bind("click."+o,function(o){if(e(o.target).hasClass(f[12])||e(o.target).hasClass("mCSB_draggerRail")){Q(t);var i=e(this),l=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!a.overflowed[1])return;var s="x",c=o.pageX>l.offset().left?-1:1,d=Math.abs(n[0].offsetLeft)-.9*c*r.width()}else{if(!a.overflowed[0])return;var s="y",c=o.pageY>l.offset().top?-1:1,d=Math.abs(n[0].offsetTop)-.9*c*r.height()}G(t,d.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(i),n=o.opt,r=i+"_"+o.idx,l=e("#mCSB_"+o.idx+"_container"),s=l.parent();l.bind("focusin."+r,function(){var o=e(a.activeElement),i=l.find(".mCustomScrollBox").length,r=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(r+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[ot(o)[0],ot(o)[1]],a=[l[0].offsetTop,l[0].offsetLeft],i=[a[0]+e[0]>=0&&a[0]+e[0]<s.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<s.width()-o.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:r}),"y"===n.axis||i[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:r})},t[0]._focusTimer))})},U=function(){var t=e(this),a=t.data(i),o=i+"_"+a.idx,n=e("#mCSB_"+a.idx+"_container").parent();n.bind("scroll."+o,function(){(0!==n.scrollTop()||0!==n.scrollLeft())&&e(".mCSB_"+a.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),a=t.data(i),o=a.opt,n=a.sequential,r=i+"_"+a.idx,l=".mCSB_"+a.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(i){function r(e,a){n.scrollAmount=o.snapAmount||o.scrollButtons.scrollAmount,j(t,e,a)}if(i.preventDefault(),et(i)){var l=e(this).attr("class");switch(n.type=o.scrollButtons.scrollType,i.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===n.type)return;u=!0,a.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===n.type)return;u=!1,n.dir&&r("off",l);break;case"click":if("stepped"!==n.type||a.tweenRunning)return;r("on",l)}}})},q=function(){var t=e(this),o=t.data(i),n=o.opt,r=o.sequential,l=i+"_"+o.idx,s=e("#mCSB_"+o.idx),c=e("#mCSB_"+o.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']";s.attr("tabindex","0").bind("blur."+l+" keydown."+l+" keyup."+l,function(i){function l(e,a){r.type=n.keyboard.scrollType,r.scrollAmount=n.snapAmount||n.keyboard.scrollAmount,"stepped"===r.type&&o.tweenRunning||j(t,e,a)}switch(i.type){case"blur":o.tweenRunning&&r.dir&&l("off",null);break;case"keydown":case"keyup":var s=i.keyCode?i.keyCode:i.which,f="on";if("x"!==n.axis&&(38===s||40===s)||"y"!==n.axis&&(37===s||39===s)){if((38===s||40===s)&&!o.overflowed[0]||(37===s||39===s)&&!o.overflowed[1])return;"keyup"===i.type&&(f="off"),e(a.activeElement).is(u)||(i.preventDefault(),i.stopImmediatePropagation(),l(f,s))}else if(33===s||34===s){if((o.overflowed[0]||o.overflowed[1])&&(i.preventDefault(),i.stopImmediatePropagation()),"keyup"===i.type){Q(t);var h=34===s?-1:1;if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var m="x",p=Math.abs(c[0].offsetLeft)-.9*h*d.width();else var m="y",p=Math.abs(c[0].offsetTop)-.9*h*d.height();G(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}else if((35===s||36===s)&&!e(a.activeElement).is(u)&&((o.overflowed[0]||o.overflowed[1])&&(i.preventDefault(),i.stopImmediatePropagation()),"keyup"===i.type)){if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var m="x",p=35===s?Math.abs(d.width()-c.outerWidth(!1)):0;else var m="y",p=35===s?Math.abs(d.height()-c.outerHeight(!1)):0;G(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}})},j=function(t,a,o,n,r){function l(e){var a="stepped"!==u.type,o=r?r:e?a?p/1.5:g:1e3/60,i=e?a?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],f="x"===u.dir[0]?s[1]+u.dir[1]*d[1]*i:s[0]+u.dir[1]*d[0]*i,m="x"===u.dir[0]?s[1]+u.dir[1]*parseInt(u.scrollAmount):s[0]+u.dir[1]*parseInt(u.scrollAmount),v="auto"!==u.scrollAmount?m:f,x=n?n:e?a?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",_=e?!0:!1;return e&&17>o&&(v="x"===u.dir[0]?s[1]:s[0]),G(t,v.toString(),{dir:u.dir[0],scrollEasing:x,dur:o,onComplete:_}),e?void(u.dir=!1):(clearTimeout(u.step),void(u.step=setTimeout(function(){l()},o)))}function s(){clearTimeout(u.step),$(u,"step"),Q(t)}var c=t.data(i),d=c.opt,u=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===u.type?!0:!1,p=d.scrollInertia<26?26:d.scrollInertia,g=d.scrollInertia<1?17:d.scrollInertia;switch(a){case"on":if(u.dir=[o===f[16]||o===f[15]||39===o||37===o?"x":"y",o===f[13]||o===f[15]||38===o||37===o?-1:1],Q(t),at(o)&&"stepped"===u.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&u.dir)&&l(!0)}},Y=function(t){var a=e(this).data(i).opt,o=[];return"function"==typeof t&&(t=t()),t instanceof Array?o=t.length>1?[t[0],t[1]]:"x"===a.axis?[null,t[0]]:[t[0],null]:(o[0]=t.y?t.y:t.x||"x"===a.axis?null:t,o[1]=t.x?t.x:t.y||"y"===a.axis?null:t),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},X=function(t,a){if(null!=t&&"undefined"!=typeof t){var o=e(this),n=o.data(i),r=n.opt,l=e("#mCSB_"+n.idx+"_container"),s=l.parent(),c=typeof t;a||(a="x"===r.axis?"x":"y");var d="x"===a?l.outerWidth(!1):l.outerHeight(!1),u="x"===a?l[0].offsetLeft:l[0].offsetTop,f="x"===a?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===a?ot(m)[1]:ot(m)[0];case"string":case"number":if(at(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(u-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=u+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&at(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===a?ot(m)[1]:ot(m)[0]}return e(t).length?"x"===a?ot(e(t))[1]:ot(e(t))[0]:(l.css(f,t),void h.update.call(null,o[0]))}}},N=function(t){function a(){clearTimeout(u[0].autoUpdate),u[0].autoUpdate=setTimeout(function(){return d.advanced.updateOnSelectorChange&&(m=r(),m!==S)?(l(3),void(S=m)):(d.advanced.updateOnContentResize&&(p=[u.outerHeight(!1),u.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],(p[0]!==w[0]||p[1]!==w[1]||p[2]!==w[2]||p[3]!==w[3]||p[4]!==w[4]||p[5]!==w[5])&&(l(p[0]!==w[0]||p[1]!==w[1]),w=p)),d.advanced.updateOnImageLoad&&(g=o(),g!==b&&(u.find("img").each(function(){n(this)}),b=g)),void((d.advanced.updateOnSelectorChange||d.advanced.updateOnContentResize||d.advanced.updateOnImageLoad)&&a()))},60)}function o(){var e=0;return d.advanced.updateOnImageLoad&&(e=u.find("img").length),e}function n(t){function a(e,t){return function(){return t.apply(e,arguments)}}function o(){this.onload=null,e(t).addClass(f[2]),l(2)}if(e(t).hasClass(f[2]))return void l();var n=new Image;n.onload=a(n,o),n.src=t.src}function r(){d.advanced.updateOnSelectorChange===!0&&(d.advanced.updateOnSelectorChange="*");var t=0,a=u.find(d.advanced.updateOnSelectorChange);return d.advanced.updateOnSelectorChange&&a.length>0&&a.each(function(){t+=e(this).height()+e(this).width()}),t}function l(e){clearTimeout(u[0].autoUpdate),h.update.call(null,s[0],e)}var s=e(this),c=s.data(i),d=c.opt,u=e("#mCSB_"+c.idx+"_container");if(t)return clearTimeout(u[0].autoUpdate),void $(u[0],"autoUpdate");var m,p,g,v=u.parent(),x=[e("#mCSB_"+c.idx+"_scrollbar_vertical"),e("#mCSB_"+c.idx+"_scrollbar_horizontal")],_=function(){return[x[0].is(":visible")?x[0].outerHeight(!0):0,x[1].is(":visible")?x[1].outerWidth(!0):0]},S=r(),w=[u.outerHeight(!1),u.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],b=o();a()},V=function(e,t,a){return Math.round(e/t)*t-a},Q=function(t){var a=t.data(i),o=e("#mCSB_"+a.idx+"_container,#mCSB_"+a.idx+"_container_wrapper,#mCSB_"+a.idx+"_dragger_vertical,#mCSB_"+a.idx+"_dragger_horizontal");o.each(function(){Z.call(this)})},G=function(t,a,o){function n(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||_>=S[0]+b,c.callbacks.alwaysTriggerOffsets||-C>=_]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],a=[v[0].offsetTop,v[0].offsetLeft],n=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:a[0],draggerLeft:a[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(n[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(n[1])-i[1])),direction:o.dir}}var s=t.data(i),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},o=e.extend(d,o),u=[o.dur,o.drag?0:o.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=o.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==a||s.contentReset.y||(n("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==a||s.contentReset.x||(n("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==a&&"_resetX"!==a){switch(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(n("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(n("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount&&(a=V(a,c.snapAmount,c.snapOffset)),o.dir){case"x":var v=e("#mCSB_"+s.idx+"_dragger_horizontal"),x="left",_=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),v.parent().width()-v.width()],w=[a,0===a?0:a/s.scrollRatio.x],b=p[1],C=g[1],y=b>0?b/s.scrollRatio.x:0,B=C>0?C/s.scrollRatio.x:0;
break;case"y":var v=e("#mCSB_"+s.idx+"_dragger_vertical"),x="top",_=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),v.parent().height()-v.height()],w=[a,0===a?0:a/s.scrollRatio.y],b=p[0],C=g[0],y=b>0?b/s.scrollRatio.y:0,B=C>0?C/s.scrollRatio.y:0}w[1]<0||0===w[0]&&0===w[1]?w=[0,0]:w[1]>=S[1]?w=[S[0],S[1]]:w[0]=-w[0],t[0].mcs||(l(),n("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),(s.tweenRunning||!(0===_&&w[0]>=0||_===S[0]&&w[0]<=S[0]))&&(J(v[0],x,Math.round(w[1]),u[1],o.scrollEasing),J(h[0],x,Math.round(w[0]),u[0],o.scrollEasing,o.overwrite,{onStart:function(){o.callbacks&&o.onStart&&!s.tweenRunning&&(n("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,T(v),s.cbOffsets=r())},onUpdate:function(){o.callbacks&&o.onUpdate&&n("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(o.callbacks&&o.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){n("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),n("onTotalScroll")&&w[1]>=S[1]-y&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),n("onTotalScrollBack")&&w[1]<=B&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,T(v,"hide")},e)}}}))}},J=function(e,a,o,n,i,r,l){function s(){b.stop||(_||p.call(),_=K()-x,c(),_>=b.time&&(b.time=_>b.time?_+h-(_-b.time):_+h-1,b.time<_+1&&(b.time=_+1)),b.time<n?b.id=m(s):v.call())}function c(){n>0?(b.currVal=f(b.time,S,C,n,i),w[a]=Math.round(b.currVal)+"px"):w[a]=o+"px",g.call()}function d(){h=1e3/60,b.time=_+h,m=t.requestAnimationFrame?t.requestAnimationFrame:function(e){return c(),setTimeout(e,.01)},b.id=m(s)}function u(){null!=b.id&&(t.requestAnimationFrame?t.cancelAnimationFrame(b.id):clearTimeout(b.id),b.id=null)}function f(e,t,a,o,n){switch(n){case"linear":case"mcsLinear":return a*e/o+t;case"mcsLinearOut":return e/=o,e--,a*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=o/2,1>e?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=o/2,1>e?a/2*Math.pow(2,10*(e-1))+t:(e--,a/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=o/2,1>e?a/2*e*e*e+t:(e-=2,a/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=o,e--,-a*(e*e*e*e-1)+t;case"easeOutStrong":return a*(-Math.pow(2,-10*e/o)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=o)*e,r=i*e;return t+a*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var h,m,l=l||{},p=l.onStart||function(){},g=l.onUpdate||function(){},v=l.onComplete||function(){},x=K(),_=0,S=e.offsetTop,w=e.style,b=e._mTween[a];"left"===a&&(S=e.offsetLeft);var C=o-S;b.stop=0,"none"!==r&&u(),d()},K=function(){return t.performance&&t.performance.now?t.performance.now():t.performance&&t.performance.webkitNow?t.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var a=["top","left"],o=0;o<a.length;o++){var n=a[o];e._mTween[n].id&&(t.requestAnimationFrame?t.cancelAnimationFrame(e._mTween[n].id):clearTimeout(e._mTween[n].id),e._mTween[n].id=null,e._mTween[n].stop=1)}},$=function(e,t){try{delete e[t]}catch(a){e[t]=null}},et=function(e){return!(e.which&&1!==e.which)},tt=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},at=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ot=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]};e.fn[n]=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):h.init.apply(this,arguments)},e[n]=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):h.init.apply(this,arguments)},e[n].defaults=l,t[n]=!0,e(t).load(function(){e(r)[n](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var a,o,n=e(t),i=n.parents(".mCSB_container");if(i.length)return a=i.parent(),o=[i[0].offsetTop,i[0].offsetLeft],o[0]+ot(n)[0]>=0&&o[0]+ot(n)[0]<a.height()-n.outerHeight(!1)&&o[1]+ot(n)[1]>=0&&o[1]+ot(n)[1]<a.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var a=e(t).data(i);if(a)return a.overflowed[0]||a.overflowed[1]}})})})}(jQuery,window,document);

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh) Licensed under the MIT License (LICENSE.txt). Version: 3.1.12 Requires: jQuery 1.2.2 +*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/* Also hier sieht man das Menu das oben links raus poppt.*/
$(".user-info.user-only").prepend('<div class="cust0m_settings"><div class="cust0m_version">V2.0</div> \r\n' +
'    <div class="cust0m_menu_middle"> \r\n' +
'        <div class="cust0m_menu active" onclick="$(\'.cust0m_menu\').removeClass(\'active\'); $(this).addClass(\'active\'); $(\'.cust0m_posts\').css(\'display\',\'none\'); $(\'.cust0m_general\').css(\'display\',\'block\');">Allgemein</div> \r\n' +
'        <div class="cust0m_menu" onclick="$(\'.cust0m_menu\').removeClass(\'active\'); $(this).removeClass(\'active\'); $(this).addClass(\'active\'); $(\'.cust0m_posts\').css(\'display\',\'block\'); $(\'.cust0m_general\').css(\'display\',\'none\');">Posts</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_line"></div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Wie viele Vorschaubilder möchtest du pro Reihe maximal haben?<br>Normalerweise sind 8 eingetragen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Pro Reihe maximal:</div> \r\n' +
'        <div id="cust0m_input_anzahl" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Vorschaubilder</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Wie groß sollen die Vorschaubilder sein?<br>Normalerweise ist 100% eingetragen.<br>Limit: 30%</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Vorschaubilder Größe:</div> \r\n' +
'        <div id="cust0m_input_thumbs" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">%</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help ">Markiert die Bilder, die du schon gesehen hast.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Gesehene Bilder markieren:</div> \r\n' +
'        <div id="cust0m_input_save_views" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small active cust0m_trigger_m1" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">M 1</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small cust0m_trigger_m2" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">M 2</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small cust0m_trigger_m3" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">M 3</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_save_views_middle"> \r\n' +
'        <div class="cust0m_help">Wie Transparent soll die Markierung sein?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Transparenz der Markierung</div> \r\n' +
'        <input id="cust0m_input_save_views_opacity" class="cust0m_slider" type="range" min="0" max="100" value="25" step="1" /> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Wie groß soll das Bild eines Betrags minimal sein?<br>Normalerweise ist 0 eingetragen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Bilder Mindesthöhe:</div> \r\n' +
'        <div id="cust0m_input_width" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">px</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Soll für ein Beitrag das größere Bild geladen werden, wenn genügend Platz ist?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Großes Bild laden</div> \r\n' +
'        <div id="cust0m_input_fullsize" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Willst du Pr0gramm aus der Sicht eines Admins sehen?<br>Natürlich hast du damit keine Admin Rechte.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Admin Sicht:</div> \r\n' +
'        <div id="cust0m_input_admin" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Möchtest du oben im Header deinen Benis bestaunen können?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Benis anzeigen:</div> \r\n' +
'        <div id="cust0m_input_benis" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +

'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_benis_middle"> \r\n' +
'        <div class="cust0m_help">Soll dein Benis oben im Header relativ zu heute sein?<br>Wenn du diese Einstellung aktivierst wird angezeigt,<br> wie stark dein Benis seit jetzt gewachsen ist.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Relativer Benis:</div> \r\n' +
'        <div id="cust0m_input_benis_since" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +

'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Willst du die alten Pfeile wieder haben?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Die alten Pfeile anzeigen:</div> \r\n' +
'        <div id="cust0m_input_pfeil" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Möchtest du die Ups und Downs eines Posts direkt sehen können?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ups und Downs bei Posts:</div> \r\n' +
'        <div id="cust0m_input_ups_downs" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Möchtest du die Ups und Downs eines Kommentars direkt sehen können?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ups und Downs bei Kommentare:</div> \r\n' +
'        <div id="cust0m_input_ups_downs_comment" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">So kannst du den OP besser erkennen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">OP markieren:</div> \r\n' +
'        <div id="cust0m_input_op" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Dadurch werden die Kommentare des OPs ganz oben angezeigt.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">OP nach oben:</div> \r\n' +
'        <div id="cust0m_input_op_top" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Sollen die Kommentare in die Mitte statt Links?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentare in die Mitte:</div> \r\n' +
'        <div id="cust0m_input_pos" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Kommentarlinien helfen dir, bei vielen Kommentaren den Überblick zu behalten.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentarlinien anzeigen:</div> \r\n' +
'        <div id="cust0m_input_kommentarlinien" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_posts"> \r\n' +
'    <div class="cust0m_middle cust0m_kommentarlinien_middle"> \r\n' +
'        <div class="cust0m_help">Wie breit sollen die Kommentarlinien sein?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentarelinienbreite:</div> \r\n' +
'        <div id="cust0m_input_kommentarlinienbreite" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">px</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Gibt dir die Möglichkeit Kommentare ein- und auszuklappen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ein- und ausklappbare Kommentare:</div> \r\n' +
'        <div id="cust0m_input_kommentarklappen" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_posts"> \r\n' +
'    <div class="cust0m_middle cust0m_kommentarklappen_middle"> \r\n' +
'        <div class="cust0m_help">Ab welcher Kommentartiefe willst du die Kommentare eingeklappt haben?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentare ab einer Tiefe von</div> \r\n' +
'        <div id="cust0m_input_kommentarklappen_default" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Kommentaren einklappen</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Wie viele Tags möchtest du am Anfang sehen?<br>Normalerweise werden 4 angezeigt.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Sichtbare Tags:</div> \r\n' +
'        <div id="cust0m_input_start_tags" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Tags</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Oben links erscheint eine Krone mit der du die Beiträge mit dem längsten Benis sehen kannst.<br>Leider braucht das je nach Einstellung ein bisschen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Best of:</div> \r\n' +
'        <div id="cust0m_input_best_of" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_best_of_middle"> \r\n' +
'        <div class="cust0m_help">Limit: 1500 Benis.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Für Best of mindest Benis:</div> \r\n' +
'        <div id="cust0m_input_best_of_benis" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Benis</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Oben links erscheint eine scheißender Bulle, mit dem du die Beiträge mit dem kürzesten Benis sehen kannst.<br>Leider braucht das je nach Einstellung ein bisschen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Bullshit:</div> \r\n' +
'        <div id="cust0m_input_bullshit" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_bullshit_middle"> \r\n' +
'        <div class="cust0m_help">Limit: -150 Benis.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Für Bullshit höchst Benis:</div> \r\n' +
'        <div id="cust0m_input_bullshit_benis" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Benis</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Wie stell ich den Ton in Pr0gramm ein?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ton:</div> \r\n' +
'        <div id="cust0m_input_ton" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Willst du zukünftige Updates für cust0m pr0gramm erhalten?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Updates:</div> \r\n' +
'        <div id="cust0m_input_no_updates" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_line"></div> \r\n' +
'    <div id="cust0m_save" class="cust0m_button">speichern</div> \r\n' +
'    <div id="cust0m_info" class="cust0m_button" style="display: none">gespeichert</div> \r\n' +
'</div>');

/* Weiter geht es mit dem Benis im Header*/
$(".user-name.head-link").after('<div class="cust0m_benis_head">mm</div><div class="cust0m_benis_num"></div>');

/* und dann Kommen auch schon die "Best of" und "Bullshit" Buttons*/
$("#tab-top").after('<a id="tab-best_of" class="head-tab cust0m_best_of" onclick="cust0m.load_best_of();">mm </a><a id="tab-bullshit" class="head-tab cust0m_bullshit" onclick="cust0m.load_bullshit();">mm </a>');

/* Aktualisiert den Benis*/
if($(".user-name.head-link").text() != "") setInterval(loadBenis, 30000);
function loadBenis()
{
    $.ajax(
    {
        url: "http://pr0gramm.com/api/user/info?name=" + $(".user-name.head-link").text() + "&flags=1&self=true",
        success: function(data)
        {
            $(".cust0m_benis_num").text(JSON.parse(data).user.score);
        }
    });
}
loadBenis();

/* Hier wird das script dass das Pr0gramm script ändert erstellt*/
var g = document.createElement('script');
var s = document.getElementsByTagName('script')[0];
/* Zuerst definier ich ein paar Konstantenn die später noch mit den richtigen Werten gefüllt werden. Aber zuerst kommen default Werte rein.*/
g.text = 'cust0m = {};\r\n' +
'cust0m.fullsize = true;\r\n' +
'cust0m.best_of_benis = 500;\r\n' +
'cust0m.bullshit_benis = -200;\r\n' +
'cust0m.bullshit = false;\r\n' +
'cust0m.best_of = false;\r\n' +
'cust0m.disableLoad = true;\r\n' +
'cust0m.kommentarklappen_default = 3;\r\n' +
'cust0m.kommentarklappen = false;\r\n' +
'cust0m.op_top = false;\r\n' +
'cust0m.pfeile_weiter = true;\r\n' +
/* Das brauche ich um die Gesehenen Posts zu speichern. Die werden in dieses Div eingefügt und dann von dem anderen script ausgelesen. Ich kann nämlich nicht direkt methoden aus dem Pr0gramm script aufrufen*/
'$("body").append("<div style=\'display: none\' id=\'cust0m_viewed\'><div>");\r\n' +
/* Diese script sorgt dafür das die Einstellungen geladen werden*/
"cust0m.refresh = function() { if($('.main-message').text().indexOf('Das Bild wurde als') == -1 && $('.thumb').length > 0) $(window).resize(); else setTimeout(cust0m.refresh, 50)}\r\n" +
/* Sorgt für das ein und ausklappen von Kommentaren.*/
'cust0m.LoadEinklappen = function() ' +
'{\r\n' +
'    if($(".comment-foot").length >= 3) {\r\n' +
'    $("#item-comments").mCustomScrollbar();\r\n' +
/* Zuerst wird die Tiefe für jedes Kommentar eingetragen und vorhandene Ein-ausklapptexte entfernt*/
'        $(".comment-foot").attr("tiefe", "0"); $(".comment-foot").each(function(index, elem) { if($(elem).parent().next().hasClass("comment-box")) { $(elem).parent().next().css("display","block"); $(elem).parent().next().find(".comment-foot").each(function(index, elem) { $(elem).attr("tiefe", (parseInt($(elem).attr("tiefe")) + 1) + ""); }); $(elem).find(".cust0m_comment").remove();}});\r\n' +
/* Dann werden die ein- und ausklapp mechanismen eingefügt und gegebenfalls einmal ausgeführt um die Kommentare einzuklappen*/
'        if(cust0m.kommentarklappen) $(".comment-foot").each(function(index, elem) { if($(elem).parent().next().hasClass("comment-box")) { if(parseInt($(elem).attr("tiefe")) == cust0m.kommentarklappen_default - 1) {$(elem).append("<a class=\'action cust0m_comment\' onclick=\'cust0m.commentClick($(this));\'><span class=\'pict\'>c</span> " + $(elem).parent().next().find(".comment").length + " rein</a>"); if(parseInt($(elem).attr("tiefe")) == cust0m.kommentarklappen_default - 1) cust0m.commentClick($(elem).find(".cust0m_comment"));}}});\r\n' +
/* Hier wird der OP markiert und nach oben verschoben*/
'        var op = $(".item-details .user").text();\r\n' +
'        $(".comment-foot").each(function(index, elem) { if($(elem).find(".user").text() == op) { $(elem).addClass("custom_op"); if(cust0m.op_top && (parseInt($(elem).attr("tiefe")) == 0)) { if($(elem).parent().next().hasClass("comment-box")) $(elem).parent().next().prependTo(".comments>.comment-box"); $(elem).parent().prependTo(".comments>.comment-box"); }} });\r\n' +
'   } else setTimeout(cust0m.LoadEinklappen, 50);\r\n' +
'};\r\n' +
/* Blendet die Kommentare eines Kommentars ein bzw. aus*/
'cust0m.commentClick = function (comment)\r\n' +
'{\r\n' +
'   box = comment.parent().parent().next();\r\n' +
'   if(box.hasClass("comment-box")) if(box.css("display") == "block") {box.css("display", "none"); comment.html("<span class=pict>c</span> " + box.find(".comment").length + " raus");} else {box.css("display", "block"); comment.html("<span class=pict>c</span> " + box.find(".comment").length + " rein");}\r\n' +
'};\r\n' +
/* Fügt die Src info beim pr0gramm TV hinzu*/
'setTimeout(function() {$(".tv-remote").append("<div class=\'cust0m_tv_info\'></div>");},2000);\r\n' +
/* Überschreibung einer orginal "Zeige den Folgenden Post" Methode*/
'p.View.Stream.Main.prototype.showItem = function ($item, scrollTo) {' +
"   if ($item.is(this.$currentItem)) {     var itemData;       this.hideItem();            this._wasHidden = true;            this.currentItemId = null;            return;        }        var $previousItem = this.$currentItem;        this.$currentItem = $item;        var $row = $item.parent();        var scrollTarget = 0;        if (scrollTo == this.SCROLL.FULL) {            scrollTarget = $row.offset().top - CONFIG.HEADER_HEIGHT + $item.height();        } else if (scrollTo == this.SCROLL.THUMB) {            scrollTarget = $row.offset().top - CONFIG.HEADER_HEIGHT - this.rowMargin;        } else {            scrollTarget = $(document).scrollTop();        }        var animate = !(scrollTo == this.SCROLL.FULL && this._scrolledToFullView);        this._scrolledToFullView = (scrollTo == this.SCROLL.FULL);        if (this.$itemContainer) {            var previousItemHeight = this.$itemContainer.find('.item-image').height() || 0;        }        if (!$row.next().hasClass('item-container')) {            if (this.$itemContainer) {                if (this.$itemContainer.offset().top < $item.offset().top) {                    scrollTarget -= this.$itemContainer.innerHeight() + this.rowMargin * 2;                }                if (animate) {                    this.$itemContainer.find('.gpt').remove();                    this.$itemContainer.slideUp('fast', function () {                        $(this).remove();                    });                } else {                    this.$itemContainer.remove();                }            }            this.$itemContainer = this.$itemContainerTemplate.clone(true);            this.$itemContainer.insertAfter($row);            if (animate && !this.jumpToItem) {                this.$itemContainer.slideDown('fast');            } else {                this.$itemContainer.show();            }        }        var id = $item[0].id.replace('item-', '');        itemData = this.stream.items[id];        var rowIndex = $item.prevAll().length;       if (this.currentItemSubview) {            this.currentItemSubview.remove();        }        this.currentItemSubview = new p.View.Stream.Item(this.$itemContainer, this);        this.currentItemSubview.show(rowIndex, itemData, previousItemHeight, this.jumpToComment);        this.jumpToComment = null;        this.prefetch($item);        if (!this.jumpToItem) {            if (animate) {                $('body, html').stop(true, true).animate({                    scrollTop: scrollTarget                }, 'fast');            } else {                $('body, html').stop(true, true).scrollTop(scrollTarget); } }this.currentItemId = id;" +
/* Nimmt die ups und downs eines Posts und fügt sie in eine extra Anzeige ein*/
'   text = $(".score").attr("title");\r\n' +
'   $(".item-info").append("<div class=\'cust0m_item_info\'>" + text + "</div>");\r\n' +
/* Nimmt die Flag (NSFL etc.) eines Posts und fügt sie in eine extra Anzeige ein*/
'   text = p.Stream.FLAG_NAME[itemData.flags];\r\n' +
'   if(!p.user.admin) $(".item-details").append("<span class=\'flags flags-" + itemData.flags + "\'>" + text + "</span>");\r\n' +
/* Fügt bei Jedem Post die Pfeile hinzu*/
'   $(".stream-next").append("<span class=\'cust0m_stream-next-icon\'>&gt;</span>");\r\n' +
'   $(".stream-prev").append("<span class=\'cust0m_stream-prev-icon\'>&lt;</span>");\r\n' +
/* Ruft cust0m.LoadEinklappen auf, um die Kommentare einzuklappen*/
'   cust0m.LoadEinklappen();\r\n' +
'};\r\n' +
/* Überschreibung einer orginal "nächstes Video im Pr0gramm-TV" Methode. Ich hab hierbei an 2 Stellen das einfügen der Aktuellen post-ID in meine Anzeige programmiert.*/
'p.View.TV.Channel.prototype.nextVideo = function () {        this.currentIndex = this.currentIndex % this.items.length;  cust0m_index = this.currentIndex;  if (this.currentIndex >= this.items.length) {            return;        }        if (!this.$currentVideo) {            var src = CONFIG.PATH.IMAGES + this.items[this.currentIndex].image;            this.currentIndex++;            this.$currentVideo = this.createVideoElement(src, this.videoCanPlay.bind(this));  $(".cust0m_tv_info").html("<a target=\'_blank\' href=\'http://pr0gramm.com/new/" + this.items[cust0m_index].id + "\'>Src: " + this.items[this.currentIndex].id + "</a>");      } else {            this.$currentVideo.remove();            this.$currentVideo = this.$nextVideo;            this.resize();            this.$videoContainer.append(this.$currentVideo);            this.playVideo();   $(".cust0m_tv_info").html("<a target=\'_blank\' href=\'http://pr0gramm.com/new/" + this.items[cust0m_index - 1].id + "\'>Src: " + this.items[this.currentIndex].id + "</a>");     }        if (p.Video.canPlayWebM) {            this.$currentVideo[0].onended = this.nextVideo.bind(this);        } else {           this.$currentVideo.data(\'jsmpeg\').externalFinishedCallback = this.nextVideo.bind(this);        }        var src = CONFIG.PATH.IMAGES + this.items[this.currentIndex].image;        this.currentIndex++;        this.$nextVideo = this.createVideoElement(src); ' +
'}; \r\n' +
/* Aktiviert best of*/
'cust0m.load_best_of = function ()\r\n' +
'{\r\n' +
'   cust0m.disable_bullshit();\r\n' +
'   $(".cust0m_best_of").addClass("cust0m_active");\r\n' +
'   $("#tab-top").addClass("cust0m_unactive");\r\n' +
'   cust0m.best_of = true;\r\n' +
'   cust0m.disableLoad = false;\r\n' +
'   p.navigateTo("top",0);\r\n' +
'};\r\n' +
/* Aktiviert Bullshit*/
'cust0m.load_bullshit = function ()\r\n' +
'{\r\n' +
'   cust0m.bullshit = true;\r\n' +
'   cust0m.disable_best_of();\r\n' +
'   $(".cust0m_bullshit").addClass("cust0m_active");\r\n' +
'   $("#tab-new").addClass("cust0m_unactive");\r\n' +
'   cust0m.disableLoad = false;\r\n' +
'   p.navigateTo("new",0);\r\n' +
'};\r\n' +
/* Deaktiviert best of*/
'cust0m.disable_best_of = function ()\r\n' +
'{\r\n' +
'   cust0m.best_of = false;\r\n' +
'   $(".cust0m_best_of").removeClass("cust0m_active");\r\n' +
'   $("#tab-top").removeClass("cust0m_unactive");\r\n' +
'};\r\n' +
/* Deaktiviert Bullshit*/
'cust0m.disable_bullshit = function ()\r\n' +
'{\r\n' +
'   cust0m.bullshit = false;\r\n' +
'   $(".cust0m_bullshit").removeClass("cust0m_active");\r\n' +
'   $("#tab-new").removeClass("cust0m_unactive");\r\n' +
'};\r\n' +
/* Diese script sorgt dafür das Genügend Bilder geladen werden, in dem es ein event aufruft*/
"setTimeout(function() { setInterval(function() {if($(window).height() > $('body').height() - 400 && document.location.href != 'http://pr0gramm.com/tv' && $('.main-message').text().indexOf('Das Bild wurde als') == -1 && $('.main-message').text().indexOf('Nichts gefunden') == -1) {$(window).scroll(); console.log('cust0m Pr0gramm: scroll event');}}, 1500);}, 500);\r\n" +
/* Das Herz von "Best of" und "bullshit". Lädt solange Posts bis es 120 oder mehr hat.*/
'p.Stream.prototype._loadCust0m = function (options, callback, data, round) {\r\n' +
'        round++;\r\n' +
'        var stream = this;\r\n' +
'        options.flags = p.user.flags;\r\n' +
'        if(!(round > 20 && data.items.length <= 5)) p.api.get("items.get", p.merge(options, this.options), function (data2) {\r\n' +
'           stream.reached.start = data2.atStart || stream.reached.start;\r\n' +
'           stream.reached.end = data2.atEnd || stream.reached.end;\r\n' +
'           var oldestId = stream._oldestId; var newestId = stream._newestId;\r\n' +
'           if (stream.options.promoted && data2.items.length > 0) {\r\n' +
'               data2.items.sort(p.Stream.sortByPromoted);\r\n' +
'               oldestId = data2.items[data2.items.length - 1].promoted;\r\n' +
'               newestId = data2.items[0].promoted;\r\n' +
'           } else if(data2.items.length > 0) {\r\n' +
'               data2.items.sort(p.Stream.sortById);\r\n' +
'               oldestId = data2.items[data2.items.length - 1].id;\r\n' +
'               newestId = data2.items[0].id;\r\n' +
'           }\r\n' +
'           var position = (oldestId < stream._oldestId) ? p.Stream.POSITION.APPEND : p.Stream.POSITION.PREPEND;\r\n' +
'           _oldestId = stream._oldestId;\r\n' +
'           _newestId = stream._newestId;\r\n' +
'           stream._oldestId = Math.min(stream._oldestId, oldestId);\r\n' +
'           stream._newestId = Math.max(stream._newestId, newestId);\r\n' +
'           for (var i = 0; i < data2.items.length; i++) if ((!cust0m.best_of && !cust0m.bullshit) || (cust0m.best_of && data2.items[i].up - data2.items[i].down > cust0m.best_of_benis) || (cust0m.bullshit && data2.items[i].up - data2.items[i].down < cust0m.bullshit_benis)) data.items.push(data2.items[i]);\r\n' +
'           data2.items = data.items;\r\n' +
'           data = data2;\r\n' +
'           console.log("cust0m Pr0gramm: Lade Items. Bis jetzt: " + data.items.length + " in " + round +  " mit " + stream._oldestId);\r\n' +
'           //if((cust0m.bullshit || cust0m.best_of) && round > 50) $(".spinner").text((((data.items.length/120) * 100 + "").substr(0, 3) + "%"));\r\n' +
'           if((cust0m.bullshit || cust0m.best_of) && data.items.length < 120 && position == p.Stream.POSITION.PREPEND && !stream.reached.start) { console.log("cust0m Pr0gramm: Lade anfang"); stream._loadCust0m({newer: stream._newestId}, callback, data, round); }\r\n' +
'           else if((cust0m.bullshit || cust0m.best_of) && data.items.length < 120 && !stream.reached.end) { console.log("cust0m Pr0gramm: Lade end"); stream._loadCust0m({older: stream._oldestId}, callback, data, round); }\r\n' +
'           else \r\n' +
'           {\r\n' +
'               //if((cust0m.bullshit || cust0m.best_of) && round > 50) $(".spinner").html("<div class=\'bounce1\'></div><div class=\'bounce2\'></div><div class=\'bounce3\'></div>");\r\n' +
'               stream._oldestId = _oldestId;\r\n' +
'               stream._newestId = _newestId;\r\n' +
'               position = stream._processResponse(data);\r\n' +
'               if(position == p.Stream.POSITION.APPEND) console.log("cust0m Pr0gramm: Add to front");\r\n' +
'               if(position == p.Stream.POSITION.PREPEND) console.log("cust0m Pr0gramm: Add to Back");\r\n' +
'               callback(data.items, position, data.error);\r\n' +
'           }\r\n' +
'        });\r\n' +
'    };\r\n' +
/* hier überschreibe ich die load Matheode um "Best of" und "bullshit" möglich zu machen*/
'p.Stream.prototype._loadOrg = p.Stream.prototype._load; \r\n' +
'p.Stream.prototype._load = function (options, callback) {\r\n' +
'        if(cust0m.bullshit || cust0m.best_of) this._loadCust0m(options, callback, {items: []}, -1);\r\n' +
'        else this._loadOrg(options, callback);\r\n' +
'    };\r\n' +
/* Überschreibung der Vorschaubilder verarbeitungs methode*/
'p.Stream.prototype._processResponse = function (data) { \r\n' +
'        if (!data.items || !data.items.length) {\r\n' +
'            return null;\r\n' +
'        } \r\n' +
'        this.reached.start = data.atStart || this.reached.start;\r\n' +
'        this.reached.end = data.atEnd || this.reached.end;\r\n' +
'        var oldestId, newestId;\r\n' +
'        if (this.options.promoted) {\r\n' +
'            data.items.sort(p.Stream.sortByPromoted);\r\n' +
'            oldestId = data.items[data.items.length - 1].promoted;\r\n' +
'            newestId = data.items[0].promoted;\r\n' +
'        } else {\r\n' +
'            data.items.sort(p.Stream.sortById);\r\n' +
'            oldestId = data.items[data.items.length - 1].id;\r\n' +
'            newestId = data.items[0].id;\r\n' +
'        }\r\n' +
'        var position = (oldestId < this._oldestId) ? p.Stream.POSITION.APPEND : p.Stream.POSITION.PREPEND;\r\n' +
'        this._oldestId = Math.min(this._oldestId, oldestId);\r\n' +
'        this._newestId = Math.max(this._newestId, newestId);\r\n' +
'        var prev = null;\r\n' +
'        var itemVotes = p.user.voteCache.votes.items;\r\n' +
'        for (var i = 0; i < data.items.length; i++) {\r\n' +
'            var item = data.items[i];\r\n' +
'            item.thumb = CONFIG.PATH.THUMBS + item.thumb;\r\n' +
/* Und das alles nur um hier das Fullscreenbild einzufügen*/
'            item.image = (cust0m.fullsize && item.fullsize) ? (CONFIG.PATH.FULLSIZE + item.fullsize) : (CONFIG.PATH.IMAGES + item.image);\r\n' +
'            item.fullsize = item.fullsize ? CONFIG.PATH.FULLSIZE + item.fullsize : null;\r\n' +
'            item.vote = itemVotes[item.id] || 0;\r\n' +
'            this.items[item.id] = item;\r\n' +
'        }\r\n' +
'        return position;\r\n' +
'    }; \r\n' +
'\r\n' +
/*
'p.View.Stream.Main.prototype.loadedOFF = function (items, position, error) {\r\n' +
'        this.loadedBound = this.loaded.bind(this);\r\n' +
'        this.itemsPerRow = p.mainView.thumbsPerRow;\r\n' +
'        this.$container.find(".spinner").remove();\r\n' +
'        if (!items) {\r\n' +
'            var msg = null;\r\n' +
'            var fm = null;\r\n' +
'            if (error && (fm = error.match(/^(nsfw|nsfl|sfw)Required$/))) {\r\n' +
'               msg = "Das Bild wurde als <em>" + fm[1].toUpperCase() + "</em> markiert.<br/>" +\r\n' +
'                    (p.user.id ? "Ändere deine Filter-Einstellung," : "Melde dich an,") + " wenn du es sehen willst."\r\n' +
'            } else if (!this.hasItems) {\r\n' +
'                msg = "Nichts gefunden &#175;\\_(&#12484;)_/&#175;";\r\n' +
'            }\r\n' +
'            if (msg) {\r\n' +
'                this.$container.html("<h2 class=\'main-message\'>" + msg + "</h2>");\r\n' +
'            }\r\n' +
'            return;\r\n' +
'        }\r\n' +
'        if (position == p.Stream.POSITION.PREPEND && items.length > 0) {\r\n' +
'            var prevHeight = $("#main-view").height();\r\n' +
'            var firstRow = this.$streamContainer.find(".stream-row:first");\r\n' +
'            var placeholders = firstRow.find(".thumb-placeholder");\r\n' +
'            var numPlaceholders = placeholders.length\r\n' +
'            if (numPlaceholders) {\r\n' +
'                var html = "";\r\n' +
'               for (var i = 0; i < numPlaceholders; i++) {\r\n' +
'                   html += this.buildItem(items[items.length - numPlaceholders - 1 + i]);\r\n' +
'               }\r\n' +
'               placeholders.remove();\r\n' +
'               firstRow.prepend(this.prepareThumbsForInsertion(html));\r\n' +
'           }\r\n' +
'          var html = this.buildItemRows(items, 0, items.length - numPlaceholders, position);\r\n' +
'          this.$streamContainer.prepend(this.prepareThumbsForInsertion(html));\r\n' +
'          var newHeight = $("#main-view").height() - (117 - 52);\r\n' +
'          $(document).scrollTop($(document).scrollTop() + (newHeight - prevHeight));\r\n' +
'      } else if (position == p.Stream.POSITION.APPEND && items.length > 0) {\r\n' +
'          var lastRow = this.$streamContainer.find(".stream-row:last");\r\n' +
'          var itemCount = lastRow.find(".thumb").length;\r\n' +
'          var fill = 0;\r\n' +
'          if (itemCount % this.itemsPerRow != 0) {\r\n' +
'              var html = "";\r\n' +
'              fill = this.itemsPerRow - itemCount;\r\n' +
'              for (var i = 0; i < fill; i++) {\r\n' +
'                   html += this.buildItem(items[i]);\r\n' +
'              }\r\n' +
'              lastRow.append(this.prepareThumbsForInsertion(html));\r\n' +
'          }\r\n' +
'          if(items.length - fill > 0) { var html = this.buildItemRows(items, fill, items.length, position);\r\n' +
'          this.$streamContainer.append(this.prepareThumbsForInsertion(html));}\r\n' +
'      }\r\n' +
'      if (this.jumpToItem) {\r\n' +
'          var target = $("#item-" + this.jumpToItem);\r\n' +
'          if (target.length) {\r\n' +
'              $(document).scrollTop(target.offset().top - CONFIG.HEADER_HEIGHT);\r\n' +
'              this.showItem(target, this.SCROLL.THUMB);\r\n' +
'          }\r\n' +
'          this.jumpToItem = null;\r\n' +
'      }\r\n' +
'      this.loadInProgress = false;\r\n' +
'      this.hasItems = true;\r\n' +
'      if(items.length <= this.itemsPerRow * 3) $(window).resize();\r\n' +
'   };' +
*/
/* Überschreibung einer orginal "Gehe zu den Folgenden Post" Methode. Die regelt jetzt "Best of" und "bullshit" mit.*/
'p.navigateToOrginal = p.navigateTo;\r\n' +
'p.navigateTo = function (location, mode) {\r\n' +
'        var disable = false;\r\n' +
'        if(cust0m.bullshit && (location.indexOf("new") != 0 || (cust0m.disableLoad && location == "new" && mode == 0))) { cust0m.disable_bullshit(); disable = true;} \r\n' +
'        if(cust0m.best_of && (location.indexOf("top") != 0 || (cust0m.disableLoad && location == "top" && mode == 0))) { cust0m.disable_best_of(); disable = true;} \r\n' +
'        if((disable || cust0m.bullshit || cust0m.best_of) && (location == "top" || location == "new") && "http://pr0gramm.com/" + location == document.location.href)\r\n' +
'        {\r\n' +
'            p.navigateToOrginal(location == "top" ? "new" : "top", mode);\r\n' +
'            setTimeout(function() {p.navigateToOrginal(location, mode);}, 500);\r\n' +
'        }\r\n' +
'        else p.navigateToOrginal(location, mode);\r\n' +
'   cust0m.disableLoad = true;\r\n' +
/* Liest die ID des Aktuellen Post aus und gibt die Id den Angeschauten zähler (Wie gesagt ich kann nicht direkt methoden aufrufen)*/
'    if(location != "new" && location != "top"){ $("#cust0m_viewed").append("<div view=\'" + location.slice(-6) + "\'></div>"); $("#item-" + location.slice(-6)).addClass("custom_seen");}\r\n' +
'    },\r\n' +
/*"p.View.Stream.Main.prototype.buildItemOFF = function (item) { return (item != undefined) ? ('<a class=\"silent thumb\" id=\"item-' + item.id + '\" href=\"' + this.baseURL + item.id + '\">' + '<img src=\"' + item.thumb + '\"/>' + '</a>') : '';}" ;*/
/* Überschreibung der Pfeilbewegung um die Pfeile über das Bild hinaus zu bewegen*/
'p.View.Stream.Item.prototype.onScroll = function () {\r\n' +
'        if (!this.heightKnown) {\r\n' +
'            return;\r\n' +
'        }\r\n' +
'        var ih = cust0m.pfeile_weiter ? this.$container.height() - 96: this.$image.height();\r\n' +
'        var h = ih / 2 - 32;\r\n' +
'        var p = ($(window).scrollTop() - this.$container.offset().top).limit(32, ih - 32 - 96) + 96;\r\n' +
'        if (p == this.navTop) return;\r\n' +
'        this.navTop = p;\r\n' +
'        this.$streamPrev.css("padding-top", p);\r\n' +
'        this.$streamNext.css("padding-top", p);\r\n' +
'    };';
/* Fügt das Script letzten Endes ein*/
s.parentNode.insertBefore(g, s);

/* Hier definiere ich die Standards für die Einstellungen sowie max bzw. min*/
standard =
{
    anzahl: 20,
    anzahl_min: 3,
    anzahl_max: 9000,
    width: 0,
    width_min: 0,
    width_max: 2000,
    pos: "ON",
    thumbs: 100,
    thumbs_min: 30,
    thumbs_max: 500,
    admin: "OFF",
    benis: "ON",
    ups_downs: "ON",
    fullsize: "OFF",
    pfeil: "OFF",
    best_of: "ON",
    bullshit: "ON",
    best_of_benis: 500,
    best_of_benis_max: 1500,
    best_of_benis_min: -9000,
    bullshit_benis: -100,
    bullshit_benis_max: 9000,
    bullshit_benis_min: -150,
    ton: "OFF",
    kommentarlinien: "OFF",
    kommentarklappen: "OFF",
    kommentarklappen_default: 3,
    kommentarklappen_default_min: 1,
    kommentarklappen_default_max: 20,
    start_tags: 4,
    start_tags_min: 1,
    start_tags_max: 100,
    save_views: "OFF",
    no_updates: "ON",
    op: "ON",
    op_top: "ON",
    time: new Date().getTime(),
    viewed: {},
    kommentarlinienbreite: 1,
    kommentarlinienbreite_min: 1,
    save_views_opacity: 50,
    save_views_opacity_min: 1,
    save_views_opacity_max: 100
};

/* Speichert die angeschauten Posts*/
views = {};
/* Speichert die Einstellungen*/
function save_options()
{
    set = {
        anzahl: $('#cust0m_input_anzahl').text(),
        width: $('#cust0m_input_width').text(),
        start_tags: $('#cust0m_input_start_tags').text(),
        pos: $('#cust0m_input_pos .active').text(),
        admin: $('#cust0m_input_admin .active').text(),
        thumbs: $('#cust0m_input_thumbs').text(),
        benis: $('#cust0m_input_benis .active').text(),
        ups_downs: $('#cust0m_input_ups_downs .active').text(),
        kommentarlinien: $('#cust0m_input_kommentarlinien .active').text(),
        kommentarklappen: $('#cust0m_input_kommentarklappen .active').text(),
        kommentarklappen_default: $('#cust0m_input_kommentarklappen_default').text(),
        kommentarlinienbreite: $('#cust0m_input_kommentarlinienbreite').text(),
        fullsize: $('#cust0m_input_fullsize .active').text(),
        pfeil: $('#cust0m_input_pfeil .active').text(),
        best_of: $('#cust0m_input_best_of .active').text(),
        bullshit: $('#cust0m_input_bullshit .active').text(),
        no_updates: $('#cust0m_input_no_updates .active').text(),
        save_views: $('#cust0m_input_save_views .active').text(),
        op: $('#cust0m_input_op .active').text(),
        op_top: $('#cust0m_input_op_top .active').text(),
        ton: $('#cust0m_input_ton .active').text(),
        best_of_benis: $('#cust0m_input_best_of_benis').text(),
        bullshit_benis: $('#cust0m_input_bullshit_benis').text(),
        save_views_opacity: $('#cust0m_input_save_views_opacity').val()
    };
    for (var k in set)
    {
        if (standard[k + "_min"] != undefined)
        {
            if(parseInt(set[k]) == set[k]) set[k] = parseInt(set[k]);
            else set[k] = standard[k];
            set[k] = Math.max(standard[k + "_min"], Math.min(standard[k + "_max"], parseInt(set[k])));
        }
    }
    chrome.storage.local.set(set,
    function ()
    {
        var status = $('#cust0m_info');
        $('#cust0m_info').fadeIn();
        setTimeout(function ()
        {
            $('#cust0m_info').fadeOut();
        }, 500);
        restore_options();
        update_settings();
    });
}

/* Lädt die Einstellungen und stellt das Menu ein*/
function restore_options()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        $('#cust0m_input_anzahl').html(items.anzahl);

        $('#cust0m_input_width').html(items.width);

        $('#cust0m_input_start_tags').html(items.start_tags);

        var options = ["pos", "admin", "benis", "ups_downs", "fullsize", "kommentarlinien", "kommentarklappen", "pfeil", "ton", "bullshit", "best_of", "no_updates", "save_views", "op", "op_top"];

        for(i = 0; i < options.length; i++)
        {
            option = options[i];
            $('#cust0m_input_' + option + ' .cust0m_trigger').removeClass("active");
            if(items[option] == "ON") $('#cust0m_input_' + option + ' .cust0m_trigger_on').addClass("active");
            else if(items[option] == "M 1") $('#cust0m_input_' + option + ' .cust0m_trigger_m1').addClass("active");
            else if(items[option] == "M 2") $('#cust0m_input_' + option + ' .cust0m_trigger_m2').addClass("active");
            else if(items[option] == "M 3") $('#cust0m_input_' + option + ' .cust0m_trigger_m3').addClass("active");
            else $('#cust0m_input_' + option + ' .cust0m_trigger_off').addClass("active");
        }
        $('#cust0m_input_kommentarklappen_default').html(items.kommentarklappen_default);

        $('#cust0m_input_kommentarlinienbreite').html(items.kommentarlinienbreite);

        $('#cust0m_input_thumbs').html(items.thumbs);

        $('#cust0m_input_bullshit_benis').text(items.bullshit_benis);

        $('#cust0m_input_best_of_benis').text(items.best_of_benis);

        $('#save_views_opacity').val(items.save_views_opacity);
    });
}
restore_options();

/* Events zum speichern der Einstellungen*/
$('#cust0m_save').click(save_options);
$('.cust0m_trigger').click(save_options);
$('#cust0m_input_save_views_opacity').change(save_options);

$('#settings-link').mouseout(function () {$('.cust0m_settings').css('display', 'none');});
$('#settings-link').mouseover(function () {$('.cust0m_settings').css('display', 'block');});

$('.cust0m_input').keypress(function (event)
{
      if (event.keyCode == 10 || event.keyCode == 13) {
        save_options();
        event.preventDefault();
      }
});

/* Lädt die Einstellungen und stellt das Pr0gramm individuell ein*/
function update_settings()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        views = items;

        anzahl = items.anzahl;

        width = items.width;

        thumbs = items.thumbs / 100;

        best_of_benis = items.best_of_benis;

        bullshit_benis = items.bullshit_benis;

        /* fügt in das Pr0gramm script Atribute ein*/
        var g = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];
        g.text = "p.user.admin = " + (items.admin == "ON") + ";" +
            "cust0m.fullsize = " + (items.fullsize == "ON") + ";" +
            "cust0m.kommentarklappen = " + (items.kommentarklappen == "ON") + ";" +
            "cust0m.kommentarklappen_default = " + items.kommentarklappen_default + ";" +
            "cust0m.op_top = " + (items.op_top == "ON") + ";" +
            "cust0m.best_of_benis = " + best_of_benis + ";" +
            "cust0m.bullshit_benis = " + bullshit_benis + ";" +
            "CONFIG.TAGS_MAX_DISPLAY = " + items.start_tags + ";" +
            "CONFIG.LAYOUT.THUMBS_PER_ROW.MAX = " + anzahl + "; CONFIG.LAYOUT.THUMB.WIDTH = " + (128 * thumbs) + "; CONFIG.LAYOUT.THUMB.HEIGHT = " + (128 * thumbs) + "; cust0m.refresh(); cust0m.LoadEinklappen();";
        s.parentNode.insertBefore(g, s);

       /* Ich setzte jetzt die ganzen Eigenschaften*/

       changeCss('.item-image', 'min-height: ' + width + 'px;');

       changeCss('a.thumb, a.thumb img', 'height: ' + (128 * thumbs) + 'px; width: ' + (128 * thumbs) + 'px;');

        if(items.pos == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.item-comments, div.item-info', 'margin: auto; max-width: 1052px;');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.item-comments, div.item-info', 'margin: 0; max-width: 9999px');
            });
        }

        if(items.op == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_op', 'border-color: #ee4d2e !important');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_op', '');
            });
        }

        if(items.benis == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_benis_head, .cust0m_benis_num', 'display: inline');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_benis_head, .cust0m_benis_num', 'display: none');
            });
        }

        if(items.ups_downs == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_item_info', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_item_info', 'display: none');
            });
        }

        if(items.pfeil == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.stream-prev-icon, .stream-next-icon', 'display: none !important');
                changeCss('.cust0m_stream-prev-icon, .cust0m_stream-next-icon', 'display: inline block !important');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.stream-prev-icon, .stream-next-icon', 'display: inline block !important');
                changeCss('.cust0m_stream-prev-icon, .cust0m_stream-next-icon', 'display: none !important');
            });
        }

        if(items.kommentarlinien == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.comment-box', 'border-left: ' + items.kommentarlinienbreite + 'px solid #222; margin-left: 5px;');
                changeCss('div.comment-box div.comment', 'margin-left: ' + (items.kommentarlinienbreite * 0.4 - 5) + 'px');
                changeCss('.comments>.comment-box', 'border-left: none; margin-left: 0px;');
                changeCss('.cust0m_kommentarlinien_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.comment-box', 'border-left: none; margin-left: 0px;');
                changeCss('div.comment-box div.comment', 'margin-left: 0px');
                changeCss('.comments>.comment-box', 'border-left: none; margin-left: 0px;');
                changeCss('.cust0m_kommentarlinien_middle', 'display: none');
            });
        }

        if(items.kommentarklappen == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_kommentarklappen_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                 changeCss('.cust0m_kommentarklappen_middle', 'display: none');
            });
        }

        if(items.bullshit == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_bullshit', 'display: inline');
                changeCss('.cust0m_bullshit_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_bullshit', 'display: none');
                 changeCss('.cust0m_bullshit_middle', 'display: none');
            });
        }

        if(items.best_of == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_best_of', 'display: inline');
                changeCss('.cust0m_best_of_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_best_of', 'display: none');
                 changeCss('.cust0m_best_of_middle', 'display: none');
            });
        }
        if(items.save_views == "OFF")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', '');
                changeCss('.custom_seen::after', '');
            });
        }
        else if(items.save_views == "M 1")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', 'opacity: ' + (items.save_views_opacity / 100));
                changeCss('.custom_seen::after', '');
            });
        }
        else if(items.save_views == "M 2")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', '');
                changeCss('.custom_seen::after', 'background: rgba(137, 43, 43, ' + (items.save_views_opacity / 100) + ');    content: "";    width: 100%;    height: 100%;    margin: -150% 0 0 90%;    display: block;  transform: rotate(45deg);');
            });
        }
        else if(items.save_views == "M 3")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', '');
                changeCss('.custom_seen::after', 'content: "v";height: 20px;margin: -18px 0 0 -5px;padding-right: 3px;display: block;transform: rotate(0deg);color: #FFF;font-family: \'pict0gramm\';text-shadow: 0 0 1px #000, 0 0 2px #000;text-align: right;opacity: ' + (items.save_views_opacity / 100) + ';');
            });
        }

        var future = 1000 * 60 * 60 * 24 * 365 * 100;
        if(items.no_updates == "OFF")
        {
            chrome.storage.local.set(
            {
                time: future
            });
        }
        else
        {
            if(items.time == future) chrome.storage.local.set(
            {
                time: new Date().getTime() - 1000 * 60 * 61
            }, update);
        }

        $(window).resize();
    });
}

/* Fügt custom CSS ein*/
function changeCss(className, classValue)
{
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('body'));
    }

    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }

    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}

/* Lädt die Einstellungen ins Pr0gramm*/
update_settings();

/* Setzt die schon gesehenen Posts*/
function setViews()
{
    if(views.save_views != "OFF" && (lastViewed == 0 || lastViewed != $(".custom_seen").length || lastThumbs != $(".thumb").length))
    {
        $("#cust0m_viewed div").each(function (id, elem) {if($(elem).attr("view") != undefined) {saveView("item-" + $(elem).attr("view"));}});
        $("#cust0m_viewed div").remove();
        lastViewed = $(".custom_seen").length;
        lastThumbs = $(".thumb").length;
        $(".thumb").not(".custom_checked").each(function (id, elem) {if(isView($(elem).attr("id"))) $(elem).addClass("custom_seen"); $(elem).addClass("custom_checked");});
        chrome.storage.local.set({viewed: views.viewed});
    }
}

lastThumbs = 0;
lastViewed = 0;
/* updatet die gesehenen Posts*/
setInterval(setViews, 1000);

function saveView(id)
{
    views.viewed[id] = true;
}

function isView(id)
{
   return views.viewed[id] === true;
}
