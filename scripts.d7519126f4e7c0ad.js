(function(){var c,E,p,v,y,f=function(r,t){return function(){return r.apply(t,arguments)}},C=[].indexOf||function(r){for(var t=0,e=this.length;t<e;t++)if(t in this&&this[t]===r)return t;return-1};E=function(){function r(){}return r.prototype.extend=function(t,e){var n;for(n in e)null==t[n]&&(t[n]=e[n]);return t},r.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},r.prototype.createEvent=function(t,e,n,o){var i;return null==e&&(e=!1),null==n&&(n=!1),null==o&&(o=null),null!=document.createEvent?(i=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,o):null!=document.createEventObject?(i=document.createEventObject()).eventType=t:i.eventName=t,i},r.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},r.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},r.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},r.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},r}(),p=this.WeakMap||this.MozWeakMap||(p=function(){function r(){this.keys=[],this.values=[]}return r.prototype.get=function(t){var e,o,i,s;for(e=o=0,i=(s=this.keys).length;o<i;e=++o)if(s[e]===t)return this.values[e]},r.prototype.set=function(t,e){var n,i,s,l;for(n=i=0,s=(l=this.keys).length;i<s;n=++i)if(l[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},r}()),c=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(c=function(){function r(){typeof console<"u"&&null!==console&&console.warn("MutationObserver is not supported by your browser."),typeof console<"u"&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return r.notSupported=!0,r.prototype.observe=function(){},r}()),v=this.getComputedStyle||function(r,t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),y.test(e)&&e.replace(y,function(o,i){return i.toUpperCase()}),(null!=(n=r.currentStyle)?n[e]:void 0)||null},this},y=/(\-([a-z]){1})/g,this.WOW=function(){function r(t){null==t&&(t={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new p,this.wowEvent=this.util().createEvent(this.config.boxClass)}return r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},r.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,n,o,i;if(this.stopped=!1,this.boxes=function(){var i,s,l,a;for(a=[],i=0,s=(l=this.element.querySelectorAll("."+this.config.boxClass)).length;i<s;i++)a.push(l[i]);return a}.call(this),this.all=function(){var i,s,l,a;for(a=[],i=0,s=(l=this.boxes).length;i<s;i++)a.push(l[i]);return a}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=0,n=(o=this.boxes).length;e<n;e++)this.applyStyle(o[e],!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new c((i=this,function(s){var l,a,h,m;for(m=[],l=0,a=s.length;l<a;l++)h=s[l],m.push(function(){var d,S,g,w;for(w=[],d=0,S=(g=h.addedNodes||[]).length;d<S;d++)w.push(this.doSync(g[d]));return w}.call(i));return m})).observe(document.body,{childList:!0,subtree:!0})},r.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},r.prototype.sync=function(t){if(c.notSupported)return this.doSync(this.element)},r.prototype.doSync=function(t){var e,n,o,i,s;if(null==t&&(t=this.element),1===t.nodeType){for(s=[],n=0,o=(i=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<o;n++)C.call(this.all,e=i[n])<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),s.push(this.scrolled=!0)):s.push(void 0);return s}},r.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},r.prototype.applyStyle=function(t,e){var n,o,i,s;return o=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),i=t.getAttribute("data-wow-iteration"),this.animate((s=this,function(){return s.customStyle(t,e,o,n,i)}))},r.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},r.prototype.resetStyle=function(){var e,n,o,i;for(i=[],e=0,n=(o=this.boxes).length;e<n;e++)i.push(o[e].style.visibility="visible");return i},r.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},r.prototype.customStyle=function(t,e,n,o,i){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),o&&this.vendorSet(t.style,{animationDelay:o}),i&&this.vendorSet(t.style,{animationIterationCount:i}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var n,o,i;for(n in o=[],e)t[""+n]=i=e[n],o.push(function(){var l,a,u,h;for(h=[],l=0,a=(u=this.vendors).length;l<a;l++)h.push(t[""+u[l]+n.charAt(0).toUpperCase()+n.substr(1)]=i);return h}.call(this));return o},r.prototype.vendorCSS=function(t,e){var n,o,i,s,l;for(s=(l=v(t)).getPropertyCSSValue(e),n=0,o=(i=this.vendors).length;n<o;n++)s=s||l.getPropertyCSSValue("-"+i[n]+"-"+e);return s},r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch{e=v(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,o,i;for(i=[],e=0,n=(o=this.boxes).length;e<n;e++)if(t=o[e]){if(this.isVisible(t)){this.show(t);continue}i.push(t)}return i}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},r.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},r.prototype.isVisible=function(t){var n,o,i,s;return n=t.getAttribute("data-wow-offset")||this.config.offset,i=(s=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,(o=this.offsetTop(t))<=i&&o+t.clientHeight>=s},r.prototype.util=function(){return null!=this._util?this._util:this._util=new E},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}).call(this);