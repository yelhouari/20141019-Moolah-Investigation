!function(a){function b(b,c,d){d=f(c,d);var e=b.currentTarget;if("A"!==e.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(b.which>1||b.metaKey||location.protocol!==e.protocol||location.host!==e.host||e.hash&&e.href.replace(e.hash,"")===location.href.replace(location.hash,""))){var g={url:e.href,container:a(e).attr("data-pjax"),target:e,clickedElement:a(e),fragment:null};return a.pjax(a.extend({},g,d)),b.preventDefault(),!1}}function c(){return(new Date).getTime()}function d(a){return a.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function e(a){var b=document.createElement("a");return b.href=a,b}function f(b,c){return b&&c?c.container=b:c=a.isPlainObject(b)?b:{container:b},c.container&&(c.container=g(c.container)),c}function g(b){if(b=a(b),b.length){if(""!==b.selector&&b.context===document)return b;if(b.attr("id"))return a("#"+b.attr("id"));throw"cant get selector for pjax container!"}throw"no pjax container for "+b.selector}function h(b,c){var d=a();return b.each(function(){a(this).is(c)&&(d=d.add(this)),d=d.add(c,this)}),d}function i(b,c,e){var f={};f.url=d(c.getResponseHeader("X-PJAX-URL")||e.url);var g=a(b);if(0===g.length)return f;if(f.title=h(g,"title").last().text(),e.fragment){var i=h(g,e.fragment).first();i.length&&(f.contents=i.contents(),f.title||(f.title=i.attr("title")||i.data("title")))}else/<html/i.test(b)||(f.contents=g);return f.contents&&(f.contents=f.contents.not("title"),f.contents.find("title").remove()),f.title&&(f.title=a.trim(f.title)),f}a.fn.pjax=function(a,c){return this.live("click.pjax",function(d){return b(d,a,c)})};var j=a.pjax=function(b){function d(b,c){var d=a.Event(b,{relatedTarget:f});return o.trigger(d,c),!d.isDefaultPrevented()}b=a.extend(!0,{},a.ajaxSettings,j.defaults,b),a.isFunction(b.url)&&(b.url=b.url());var f=b.target;!f&&b.clickedElement&&(f=b.clickedElement[0]);var h=e(b.url).hash,k=b.beforeSend,l=b.complete,m=b.success,n=b.error,o=b.context=g(b.container);b.data||(b.data={}),b.data._pjax=o.selector;var p;b.beforeSend=function(a,c){c.timeout>0&&(p=setTimeout(function(){d("pjax:timeout",[a,b])&&a.abort("timeout")},c.timeout),c.timeout=0),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Container",o.selector);var e;return k&&(e=k.apply(this,arguments),e===!1)?!1:d("pjax:beforeSend",[a,c])?(d("pjax:start",[a,b]),void d("start.pjax",[a,b])):!1},b.complete=function(a,c){p&&clearTimeout(p),l&&l.apply(this,arguments),d("pjax:complete",[a,c,b]),d("pjax:end",[a,b]),d("end.pjax",[a,b])},b.error=function(a,c,e){var f=i("",a,b);n&&n.apply(this,arguments);var g=d("pjax:error",[a,c,e,b]);"abort"!==c&&g&&(window.location=f.url)},b.success=function(a,e,f){var g=i(a,f,b);return g.contents?(j.state={id:b.id||c(),url:g.url,container:o.selector,fragment:b.fragment,timeout:b.timeout},g.title&&(document.title=g.title),o.empty().html(g.contents),b.replace?window.history.replaceState(j.state,g.title,g.url):b.push&&window.history.pushState(j.state,g.title,g.url),(b.replace||b.push)&&window._gaq&&(_gaq.push(f.getResponseHeader("GA-timestamp")?["_setCustomVar",4,"time",f.getResponseHeader("GA-timestamp"),3]:["_deleteCustomVar",4]),_gaq.push(f.getResponseHeader("GA-ident")?["_setCustomVar",5,"ident",f.getResponseHeader("GA-ident"),3]:["_deleteCustomVar",5]),_gaq.push(f.getResponseHeader("GA-seo-meta")?["_setCustomVar",3,"meta desc",f.getResponseHeader("GA-meta-desc"),3]:["_deleteCustomVar",3]),_gaq.push(f.getResponseHeader("GA-company-name")?["_setCustomVar",1,"company name",f.getResponseHeader("GA-company-name"),3]:f.getResponseHeader("GA-director-name")?["_setCustomVar",1,"director name",f.getResponseHeader("GA-director-name"),3]:["_deleteCustomVar",1]),_gaq.push(f.getResponseHeader("GA-title")?["_trackPageview",f.getResponseHeader("GA-title")]:["_trackPageview"])),""!==h&&(window.location.href=h),m&&m.apply(this,arguments),void d("pjax:success",[a,e,f,b])):void(window.location=g.url)},j.state||(j.state={id:c(),url:window.location.href,container:o.selector,fragment:b.fragment,timeout:b.timeout},window.history.replaceState(j.state,document.title));var q=j.xhr;return q&&q.readyState<4&&(q.onreadystatechange=a.noop,q.abort()),j.options=b,j.xhr=a.ajax(b),a(document).trigger("pjax",[j.xhr,b]),j.xhr};j.defaults={timeout:650,push:!0,replace:!1,type:"GET",dataType:"html"},j.click=b;var k="state"in window.history,l=location.href;a(window).bind("popstate",function(b){var c=!k&&location.href==l;if(k=!0,!c){var d=b.state;if(d&&d.container){var e=a(d.container);e.length?a.pjax({id:d.id,url:d.url,container:e,push:!1,fragment:d.fragment,timeout:d.timeout}):window.location=location.href}}}),a.inArray("state",a.event.props)<0&&a.event.props.push("state"),a.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),a.support.pjax||(a.pjax=function(b){var c=a.isFunction(b.url)?b.url():b.url,d=b.type?b.type.toUpperCase():"GET",e=a("<form>",{method:"GET"===d?"GET":"POST",action:c,style:"display:none"});"GET"!==d&&"POST"!==d&&e.append(a("<input>",{type:"hidden",name:"_method",value:d.toLowerCase()}));var f=b.data;if("string"==typeof f)a.each(f.split("&"),function(b,c){var d=c.split("=");e.append(a("<input>",{type:"hidden",name:d[0],value:d[1]}))});else if("object"==typeof f)for(key in f)e.append(a("<input>",{type:"hidden",name:key,value:f[key]}));a(document.body).append(e),e.submit()},a.pjax.click=a.noop,a.fn.pjax=function(){return this})}(jQuery);