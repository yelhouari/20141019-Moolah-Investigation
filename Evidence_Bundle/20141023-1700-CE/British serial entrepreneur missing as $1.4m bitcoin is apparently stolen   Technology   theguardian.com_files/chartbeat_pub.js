(function(){var f=void 0,h=true,i=null,k=false,l,m=this;function aa(a){var b=n;function c(){}c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ba(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function ca(a,b){var c="",d=da(encodeURIComponent(a));d.splice(b||5,d.length);p(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function da(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,g=271733878,j=3285377520,r=[],o,y,w,I,x,H=Math.ceil((a.length/4+2)/16),O=[H],A=0,v;A<H;A++){O[A]=[];for(o=0;o<16;o++)O[A][o]=a.charCodeAt(A*64+o*4)<<24|a.charCodeAt(A*64+o*4+1)<<16|a.charCodeAt(A*64+o*4+2)<<8|a.charCodeAt(A*64+o*4+3)}A=(a.length-1)*8;a=H-1;O[a][14]=Math.floor(A/Math.pow(2,32));O[a][15]=A&4294967295;for(A=0;A<H;A++){for(v=0;v<16;v++)r[v]=O[A][v];
for(v=16;v<80;v++)r[v]=(r[v-3]^r[v-8]^r[v-14]^r[v-16])<<1|(r[v-3]^r[v-8]^r[v-14]^r[v-16])>>>31;a=c;o=d;y=e;w=g;I=j;for(v=0;v<80;v++)x=Math.floor(v/20),x=(a<<5|a>>>27)+(x==0?o&y^~o&w:x==1?o^y^w:x==2?o&y^o&w^y&w:o^y^w)+I+b[x]+r[v]&4294967295,I=w,w=y,y=o<<30|o>>>2,o=a,a=x;c=c+a&4294967295;d=d+o&4294967295;e=e+y&4294967295;g=g+w&4294967295;j=j+I&4294967295}return[c,d,e,g,j]}
function ea(a){var b=i;if(a&&(b=fa()))return b;var c=m.location,b=c.pathname+(c.search||""),b=b.replace(/PHPSESSID=[^&]+/,""),a=/&utm_[^=]+=[^&]+/ig;(c=a.exec(c.search))&&(b=b.replace(a,""));a=/\?utm_[^=]+=[^&]+(.*)/i;(c=a.exec(b))&&(b=b.replace(a,c[1]!=""?"?"+c[1]:""));return b}function fa(){var a=i;p(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return a=b.href,a=a.substring(a.indexOf("/",9)),k});return a}function q(a,b){return function(){a.apply(b,arguments)}}
function s(a){return a.replace(/^www\./,"")}function t(a,b,c){a.addEventListener?a.addEventListener(b,c,k):a.attachEvent&&a.attachEvent("on"+b,c)}function ga(a,b){var c=m;c.removeEventListener?c.removeEventListener(a,b,k):c.detachEvent&&c.detachEvent("on"+a,b)}function u(a){return typeof a==="number"}function z(a){return typeof a==="string"}function ha(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function B(){return(new Date).getTime()}
function ia(a){return encodeURIComponent(a)}function ja(a,b){if(!(a&&a.constructor===Object)||!(b&&b.constructor===Object))return a===b;var c=0,d=h;p(a,function(a,e){c++;return d=a===b[e]});if(!d)return k;var e=0;p(b,function(){e++});return c===e}function p(a,b){if((!!a&&a.constructor===Object)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===k)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===k)break}}function ka(a,b){var c=[];p(a,function(a){b(a)&&c.push(a)});return c}
function la(a){(!!a&&a.constructor===Object)===h&&(a="");var b={};p(a.split("&"),function(a){a=a.split("::");a.length===2&&(b[decodeURIComponent(a[0])]=decodeURIComponent(a[1]))});return b}
function ma(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var g=0,j=a.length;g<=j;g++)c[0][g]=g;for(var r,o,y,d=1;d<=e;d++)for(g=1;g<=j;g++)r=d-1,o=g-1,y=c[r][o],b.charAt(r)==a.charAt(o)?c[d][g]=y:(o=c[d][o]+1,r=c[r][g]+1,y+=2,c[d][g]=Math.min(o,r,y));return c[b.length][a.length]};var C={},na=1;function D(a,b,c){na++;C[a]=C[a]||{};C[a][na]=[b,c];return na}function E(a){if(z(a))C[a]=f,delete C[a];else if(u(a)){var b=h;p(C,function(c){p(c,function(d,e){if(parseInt(e,10)===a)return c[e]=f,delete c[e],b=k});return b})}}function F(a,b){if(C[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];p(C[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};var G={};
G.d=function(){G.D?G.Q("pageload"):(G.Na=[{target:m,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:m,event:"resize"},{target:document.body,event:"mousedown"}],G.W=i,G.ma=k,G.C=i,G.Da={},p(G.Na,function(a){var b=a.event;t(a.target,b,function(a){G.Q.call(G,b,a)})}),D("focus",function(){G.Q("focus")}),G.Q("pageload"),t(document.body,"click",function(a){a:if(a=a||window.event){if(a=a.target||a.srcElement,a.tagName!=="A")if(a.parentNode)if(a.parentNode.tagName==="A")a=
a.parentNode;else if(a.parentNode.parentNode&&a.parentNode.parentNode.tagName==="A")a=a.parentNode.parentNode;else{a=f;break a}else{a=f;break a}}else a=f;a&&F("anchor",a)}),G.D=h)};G.Qa=function(){var a,b=G.Da.keydown;if(b===f)return k;b=B()-b;return b<=(a||15E3)&&b>=0};G.ra=100;G.Q=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}G.ob(a);G.W===i?G.Ka():G.ma=h};G.ob=function(a){G.Da[a]=B()};
G.Ka=function(){G.W=m.setTimeout(G.Sa,G.ra);F("activity");G.C!==i&&m.clearTimeout(G.C);G.C=m.setTimeout(function(){F("inactive");m.clearTimeout(G.C);G.C=i},5E3+G.ra)};G.Sa=function(){m.clearTimeout(G.W);G.W=i;if(G.ma)G.ma=k,G.Ka()};var oa=/[?&]__cb_debug=/i;function pa(a,b,c){b=b||"*";c=c||document;if("querySelectorAll"in c)return c.querySelectorAll(b+"["+a+"]");for(var d=[],b=c.getElementsByTagName(b),c=b.length;c--;)b[c].getAttribute(a)&&d.push(b[c]);return d}function J(a,b){var c=i;b&&(c=b.getAttribute(a));if(c===i){var d=pa(a,"*",b);d.length!==0&&(c=d[0].getAttribute(a))}return c}function qa(a,b,c){return a===f?k:c===f&&a.getAttribute(b)||a.getAttribute(b)===c?a:a===document.body?k:qa(a.parentNode,b,c)}
function K(a,b,c){a="page"+a+"Offset";b="scroll"+b;if(c&&(c=pa("data-cb-scroll-element"))&&c.length)return c[0][b];if(u(m[a]))return m[a];else if(document.body&&document.body[b])return document.body[b];else if(document.documentElement[b])return document.documentElement[b];return 0}function ra(a){var b=document,b=b[b.compatMode==="CSS1Compat"?"documentElement":"body"]["client"+a]||0;window["inner"+a]&&(b=Math.min(window["inner"+a],b));return b}function L(){return ra("Height")}
function sa(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function M(){return sa("Height")};function N(a){var b=a.offsetHeight,c=a.offsetWidth;(b<=1||c<=1)&&p(a.getElementsByTagName("iframe"),function(a){var e=a.offsetHeight,a=a.offsetWidth;if(e>1&&a>1)return b=e,c=a,k});return{height:b,width:c}}
function ta(a){if(!ua(a))return k;if(P(a,"visibility")==="hidden")return k;if(P(a,"overflow")==="hidden"&&(a.offsetHeight===0||a.offsetWidth===0))return k;for(var b=h,c=a.parentElement;c&&b;){var d;var e=c;if(e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth)d=k;else{d=P(e,"overflow");var g=P(e,"overflow-x"),e=P(e,"overflow-y");d=d==="auto"||d==="scroll"||g==="auto"||g==="scroll"||e==="auto"||e==="scroll"}d&&(b=va(a,c));c=c.parentElement}return b&&va(a,i)}
function va(a,b){var c,d;if(b){var e=N(b);c=e.width;d=e.height}else c=ra("Width"),d=L();var g=N(a),e=g.height,g=g.width,j=wa(a,b),r=j.y,j=j.x;c=Math.min(j+g,g,c,c-j);d=Math.min(r+e,e,d,d-r);if(c<0||d<0)return k;e*=g;return c*d>=(e>=242500?0.3:0.5)*e}
function wa(a,b,c){for(var d=a.offsetLeft,e=a.offsetTop,g=k,j=c?0:K("X","Left",f),r=c?0:K("Y","Top",f),o=a.offsetParent;a&&a!==b&&a!==document.body;){if(a===o)d+=a.offsetLeft,e+=a.offsetTop,o=a.offsetParent;c||(d-=a.scrollLeft,e-=a.scrollTop);if(P(a,"position")==="fixed"){g=h;break}a=a.parentElement}c||(d-=b?b.scrollLeft:j,e-=b?b.scrollTop:r);g&&(d+=j,e+=r);return{x:d,y:e}}
function P(a,b){var c;c=m.getComputedStyle?(c=m.getComputedStyle(a,i))&&(c[b]||c.getPropertyValue(b)):a.currentStyle?a.currentStyle[b]:a.style&&a.style[b];return c||""}function ua(a){if("contains"in document.documentElement&&!document.documentElement.contains(a))return k;a=N(a);return a.height>1&&a.width>1};var Q={ta:{IDLE:0,sb:1,rb:2,sa:3},j:0};Q.d=function(){if(!Q.D)D("activity",Q.Za,Q),D("inactive",Q.bb,Q),D("focus",Q.ab,Q),D("blur",Q.$a,Q),Q.D=h};Q.ya=function(){return Q.j};Q.Za=function(){Q.j===1?Q.n(3):Q.j===0&&Q.n(2)};Q.bb=function(){Q.j===3?Q.n(1):Q.j===2&&Q.n(0)};Q.ab=function(){(Q.j===0||Q.j===2)&&Q.n(3)};Q.$a=function(){Q.j===3?Q.n(2):Q.j===1&&Q.n(0)};Q.n=function(a){Q.j=a;F("state",a)};function xa(a,b){this.ca=a||f;this.F=b||f;this.t=this.na=0}l=xa.prototype;l.d=function(){this.t=this.na=0;this.J=i;this.nb=D("state",this.B,this);this.B(Q.ya())};l.total=function(){this.na+=this.t;this.t=0;return this.na};l.B=function(a){m.clearInterval(this.J);this.J=i;if(a===Q.ta.sa)this.J=m.setInterval(q(this.fb,this),1E3)};l.fb=function(){if(this.ca===f||this.ca())this.t++,this.F&&this.F()};l.terminate=function(){m.clearInterval(this.J);this.J=i;E(this.nb)};
l.p=function(){this.terminate();this.F=this.ca=f};function ya(a,b){this.g=a;this.O=b;this.A=a.getAttribute("data-cb-ad-id")||a.id||"";this.o=i;this.ua=0;this.z=new xa(function(){return ta(a)},q(this.F,this));za(this);if(this.O)this.Ua=D("activity",this.oa,this)}function za(a){a.ua++;a.b={};a.b.campaignId="";a.b.creativeId="";a.b.placementId="";a.b.siteId="";a.b.server_height="";a.b.server_width="";a.ba=k;a.Aa=k;a.z.d();a.Ma=k;a.K=0;a.w=i;a.qb=D("state",a.B,a);a.B(Q.ya())}l=ya.prototype;
l.B=function(a){if(this.w!==i)clearInterval(this.w),this.w=i;this.K=0;if(a===Q.ta.sa)this.w=m.setInterval(q(this.pb,this),100);this.O&&this.oa()};l.pb=function(){if(ta(this.g)){if(this.K++,this.K>=10)this.Ma=h,Aa(this),F("forcePing")}else this.K=0};function Aa(a){E(a.qb);m.clearInterval(a.w);a.w=i}l.F=function(){F("adEngaged",this.s(h),this.g);this.O&&this.oa()};function Ba(a,b,c){a.b=b;a.Aa=!!c;F("forcePing")}
l.s=function(a){var b={id:this.A,engagedSeconds:this.z.total()};b.campaignId=this.b?this.b.campaignId:"";b.creativeId=this.b?this.b.creativeId:"";if(a)return b;var a=N(this.g),c=wa(this.g,f,h);b.positionLeft=c.x;b.positionTop=c.y;b.width=a.width;b.height=a.height;b.viewable=this.Ma;b.order=this.ua;b.placementId=this.b?this.b.placementId:"";b.siteId=this.b?this.b.siteId:"";b.server_height=this.b?this.b.server_height:"";b.server_width=this.b?this.b.server_width:"";b.lineId=this.b?this.b.lineId:"";b.exclude=
this.ba;return b};l.X=function(){if(!this.Aa){var a=this.g,b={};b.campaignId=J("data-cb-campaign-id",a)||"";b.creativeId=J("data-cb-creative-id",a)||"";b.placementId=J("data-cb-placement-id",a)||"";b.siteId=J("data-cb-site-id",a)||"";b.server_height=J("data-cb-creative-height",a)||"";b.server_width=J("data-cb-creative-width",a)||"";b.lineId=J("data-cb-line-id",a)||"";if(J("data-cb-exclude",a))this.ba=h;ja(b,this.b)||Ba(this,b)}};
l.oa=function(){function a(a,b,c){var d=document.createElement("div"),e=document.createElement("span");e.setAttribute("style","font-weight: bold;");e.textContent=a;d.textContent=b;d.insertBefore(e,d.firstChild);c.appendChild(d)}var b=this.g;if(b){var c;if(this.o)c=document.getElementById(this.o);else{this.o="engagementLog-"+this.A+"-"+ba();c=document.createElement("div");c.setAttribute("id",this.o);document.body.appendChild(c);var d=b.getAttribute("style")||"",e=P(b,"position"),e=e==="fixed"||e===
"absolute"||e==="relative"?"":"position: relative;";d+="box-shadow: 0px 0px 0px 3px #49A2DC; z-index: 2000;"+e;b.setAttribute("style",d);var g="box-shadow: 0px 0px 0px 3px #5BC3BD, 10px 5px 5px #C8DAE8; z-index: 2000;"+e;c.onmouseover=function(){b.setAttribute("style",g)};c.onmouseout=function(){d?b.setAttribute("style",d):b.removeAttribute("style")}}c.innerHTML="";var j=wa(b),e=j.y,j=j.x;e+=K("Y","Top",f);j+=K("X","Left",f);c.setAttribute("style","background-color: #F1F7FB; z-index: 9000000; position: absolute; padding: 10px; border-radius: 5px; font-size: 12px; color: #658BA1; border: 1px solid #C8DAE8; margin: 3px; font-family: 'Proxima-Nova','Helvetica Neue',Helvetica,Arial,sans-serif; top: "+
e+"px; left: "+j+"px;");e=this.s();a("Ad Name: ",e.id+" ["+e.width+"x"+e.height+"]",c);(j=e.campaignId)&&a("Campaign: ",j,c);(j=e.creativeId)&&a("Creative: ",j,c);a("Viewable: ",e.viewable+"",c);c.appendChild(document.createElement("br"));j=ta(this.g);a((j?"In ":"Out Of ")+" View","",c);j&&a("in view intervals: ",this.K+"",c);a("Engaged Time: ",e.engagedSeconds+" seconds",c)}};l.reset=function(){Aa(this);this.z.terminate();za(this)};
l.p=function(){Aa(this);this.z.p();this.b=this.g=this.z=i;if(this.o){var a=document.getElementById(this.o);(a.parentElement?a.parentElement:a.parentNode).removeChild(a)}this.O&&E(this.Ua)};function Ca(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace("+"," "),p(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function Da(a,b,c){var d="",e=m.location.href.split("?");e.length&&(e=Ca(e[1]),b=c||b,e[b]&&(d="&"+a+"="+e[b]));return d};function R(a,b,c){a[b]=a[b]||c}function Ea(a){p(document.getElementsByTagName("script"),function(b){if(b.src.match(/chartbeat.js/))return b=Ca(b.src.split("?")[1]),R(a,"uid",b.uid),R(a,"domain",b.domain),k})}function S(a,b,c){return a[c]?"&g"+b+"="+encodeURIComponent(a[c]):""}function Fa(a){var b=[];p(a,function(a,d){d.charAt(0)=="_"&&b.push(d+"="+a)});return b.length?"&"+b.join("&"):""};var T={};T.Ra=function(){try{T.create("_cb_test","1",1);var a=T.c("_cb_test");T.remove("_cb_test");return a==="1"}catch(b){return k}};T.c=function(a){a+="=";var b="";p(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),k});return b};T.create=function(a,b,c){var d=m._sf_async_config;if(!d||!d.noCookies)d=new Date,d.setTime(B()+c*1E3),document.cookie=a+"="+b+("; expires="+d.toGMTString())+"; path=/"};
T.remove=function(a){T.c(a)&&T.create(a,"",-86400)};var U={};U.f=function(a){var b=m._sf_async_config;if(!a&&b&&b.noCookies)return i;if(U.f.aa!==f)return U.f.aa;var a=B()+"",c,d;try{if((d=m.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return U.f.aa=d}catch(e){}return U.f.aa=i};U.c=function(a){var b=U.f();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&B()>c)?(U.remove(a),""):b.getItem(a)||""};
U.create=function(a,b,c){var d=U.f();if(d){var e=new Date;e.setTime(B()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(g){}}};U.remove=function(a){var b=U.f();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function Ga(a){this.T=a||"";this.Ta=U.f()!==i||T.Ra();this.la=k;Ha(this)}l=Ga.prototype;l.isSupported=function(){return this.Ta};
function Ha(a){if(!T.c("_cb_ls")){var b=U.f()!==i,c=T.c("_SUPERFLY_nosample");c&&p(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_nosample",c,600,h)});var d=T.c("_chartbeat3");d&&(a.create("_v__chartbeat3",d,2592E3,h),T.remove("_chartbeat3"));b&&((b=T.c("_chartbeat2"))&&a.create("_chartbeat2",b,94608E3,h),(b=T.c("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,94608E3,h),(b=T.c("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));T.create("_cb_ls","1",2592E3)}}
function Ia(a){var b=a.la;a.la=k;return b}l.create=function(a,b,c,d){a=d?a:this.T+a;(U.f()?U:T).create(a,b,c);U.f()&&T.create(a,b,c)};l.update=function(a,b,c,d,e,g){a=d?a:this.T+a;e=z(e)?e:"::";d=(d=this.c(a,h))?d.split(e):[];u(g)&&d.length>=g&&d.splice(0,d.length-g+1);d.push(b);this.create(a,d.join(e),c,h)};
l.c=function(a,b){var a=b?a:this.T+a,c=(U.f()?U:T).c(a);if(!c&&U.f()&&(c=T.c(a))&&T.c("_cb_ls")){this.la=h;var d;switch(a){case "_SUPERFLY_nosample":d=600;break;case "_chartbeat4":d=3600;break;case "_cb_cp":d=3600;break;case "_chartbeat3":d=2592E3;break;default:d=94608E3}U.create(a,c,d)}return c};l.remove=function(a,b){a=b?a:this.T+a;(U.f()?U:T).remove(a);U.f()&&T.remove(a)};var V=function(){var a,b;p(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof document[a]==="boolean")return b=c,k});var c={};if(b!==f)c.za=a,c.qa=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),c.Z=b+"visibilitychange";return c}();
V.d=function(){if(!V.D)V.P=V.Ia(),V.Z&&document.addEventListener&&document.addEventListener(V.Z,V.lb,k),V.wa("focus","onfocusin",V.ha),V.wa("blur","onfocusout",V.Ha),V.P&&V.ha(),V.D=h};V.tb=function(){return V.P};V.ha=function(){V.P=h;F("focus")};V.Ha=function(){V.P=k;F("blur")};V.wa=function(a,b,c){m.addEventListener?m.addEventListener(a,c,k):document.attachEvent&&document.attachEvent(b,c)};
V.Ia=function(){var a=h;document.hasFocus&&(a=document.hasFocus());var b=k;V.za&&(b=document[V.za]);return a&&!b};V.lb=function(){V.Ia()?V.ha():V.Ha()};function n(){this.a=m._sf_async_config||{};this.va=q(this.kb,this);this.q=[];this.e=new Ga(this.La);this.u=k;this.h=new xa;this.ia=q(this.G,this);t(m,"unload",this.ia);Ja(this)||this.d()}function Ja(a){if(V.qa&&document[V.qa]==="prerender"){a.u=h;var b=q(function(){if(this.u&&document[V.qa]!=="prerender")this.u=k,this.d(),W(this),window.setTimeout(function(){document.removeEventListener(V.Z,b,k)},100)},a);document.addEventListener(V.Z,b,k);return h}return k}l=n.prototype;
l.d=function(){this.ea=this.m=0;this.I=B();this.U=ca(Ka(this));this.v=h;this.Ea=72E5;var a=+this.a.sessionLength;if(!isNaN(a)&&this.La!=="_p_")this.Ea=a*6E4;this.h.d();Q.d();G.d();V.d();this.l=0;this.Pa=D("activity",this.ga,this)};function W(a){if(!a.e.c("_SUPERFLY_nosample")&&!a.u)a.hb?a.ka():(a.hb=h,!m._sf_async_config&&!m._cbq?(a.R=q(a.ka,a),t(m,"load",a.R)):a.ka())}l.ka=function(){var a=m._sf_startpt,b=m._sf_endpt;if(u(a))this.S=u(b)?b-a:B()-a;G.d();this.gb=setInterval(q(this.Fa,this),15E3);this.Fa()};
l.Fa=function(){var a=this.h.t,a=this.a.reading&&+this.a.reading||a>0;this.ea<this.m&&!a?this.ea++:(a?this.m=0:La(this),this.ea=0,this.q.push(0),this.q.length>18&&this.q.shift(),B()-this.I>=this.Ea?this.terminate():this.H())};function Ma(a,b){if(!a.u){var c;c=new Image(1,1);c.onerror=a.va;c.src=b}}l.kb=function(){this.q.push(1);var a=0;p(this.q,function(b){a+=b});a<3?(this.v=h,La(this)):(this.terminate(),this.e.create("_SUPERFLY_nosample","1",600))};l.G=function(){};
l.ga=function(){var a=X(this);this.l=Math.max(this.l,a)};function X(a){return K("Y","Top",!!a.a.scrollElement)}function La(a){var b=a.m,b=b?Math.min(b*2,16):1;a.m=b}l.Y=function(a,b){if(!this.u)this.G(),this.terminate(),this.L=m.location.protocol+"//"+this.a.domain+this.a.path,this.a.path=a,b&&(this.a.title=b),this.d(),W(this)};function Na(a){if(a.L)return h;a=(document.referrer||"").indexOf("://"+m.location.host+"/");return a!=-1&&a<9}
function Oa(a){return encodeURIComponent(a.L||document.referrer||"")}function Pa(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}function Ka(a){var b=m.navigator,c=m.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];p(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=m.performance;d=d.concat([b&&b.now?b.now():"",Oa(a),document.title,m.location.href,B(),sa("Width"),M(),ba()]);return d.join()}
function Qa(a){var b="",c=a.e.c("_chartbeat4");c&&(p(c.split("::"),function(a){b+="&z="+encodeURIComponent(a)}),a.e.remove("_chartbeat4"));return b}function Ra(a){var a=(a.e.c("_chartbeat2",h)||"").split("."),b=B(),c=b-+(a[1]||0);b-=+(a[2]||0);return a[0]&&c>18E5&&b<2592E6?0:1}l.terminate=function(){this.h.terminate();E(this.Pa);this.R!==f&&ga("load",this.R);clearInterval(this.gb)};
l.p=function(){this.terminate();ga("unload",this.ia);this.ia=this.R=this.e=this.q=this.va=this.a=i;this.h.p();this.h=i};function Y(){this.i=[];this.ja=[];"postMessage"in window&&t(window,"message",q(this.eb,this));this.La="_p_";this.ub=i;t(m,"beforeunload",q(this.jb,this));n.call(this)}aa(Y);var Sa=0;l=Y.prototype;
l.d=function(){Y.V.d.call(this);var a=m.location;R(this.a,"pingServer","ping.chartbeat.net");R(this.a,"endServer","edge01.chartbeat.net");R(this.a,"title",document.title);R(this.a,"domain",a.host);R(this.a,"path",ea(!!this.a.useCanonical));R(this.a,"engaged",k);a=m.location.search||"";if(a.match(oa))a=Ca(a).__cb_debug,Sa=parseInt(a,10);this.N=this.a.adIdentifier||"data-cb-ad-id";this.a.domain=s(this.a.domain);this.fa=Ra(this);this.k=this.e.c("_chartbeat2",h);this.r=this.Ba=0;this.Ya=function(){var a=
B()-this.Ba;a<250?(this.r&&m.clearTimeout(this.r),this.r=m.setTimeout(q(this.H,this),a)):this.v||this.H()};this.Xa=D("forcePing",this.Ya,this);if(!this.k)this.a.utoken?this.k=this.a.utoken:(this.k=ca(Ka(this),3),this.a.utoken=this.k);this.k=this.k.split(".")[0];Ta(this);Ua(this);if((a=this.a.engagedAdFilters)&&a.length){this.a.engagedAdFilters=[];var b=this;p(a,function(a){b.M(a)})}this.Wa=D("adEngaged",this.Va,this);this.ja=[]};l.jb=function(){this.H(h)};
l.G=function(){this.e.update("_chartbeat4",["t="+this.U,"E="+this.h.total(),"ad="+ia(Va(this)),"x="+X(this),"c="+Math.round((B()-this.I)/600)/100,"y="+M(),"w="+L()].join("&"),3600)};
function Va(a){var b=[];p(a.i.concat(a.ja),function(a){var a=a.s?a.s():a,d=encodeURIComponent(a.id),e=a.engagedSeconds,g=a.positionLeft,j=a.positionTop,r=a.width,o=a.height,y=encodeURIComponent(a.creativeId||""),w=encodeURIComponent(a.campaignId||""),I=encodeURIComponent(a.placementId||""),x=encodeURIComponent(a.siteId||""),H=encodeURIComponent(a.server_height||""),O=encodeURIComponent(a.server_width||""),A=encodeURIComponent(a.lineId||""),v=a.order,bb=a.refreshed||"0",cb=a.viewable?"1":"0";a.exclude&&
(w="");b.push(d+"="+[e,g,j,r,o,w,y,v+"."+bb,cb,I,x,H,O,A].join("::"))});return b.join("&")}
l.H=function(a){this.Ba=B();var b=this.a,c=X(this);this.l=Math.max(this.l,c);this.r&&m.clearTimeout(this.r);var d="",e="";if(this.v)this.v=k,d=(Na(this)?"&v=":"&r=")+Oa(this),this.L&&(d+="&vp=1"),e="&i="+Pa(this);var g=this.S?"&b="+this.S:"";ea(!!b.useCanonical);var j=!b.noCookies&&this.e.isSupported();Ma(this,"https://"+(a?b.endServer:b.pingServer)+"/ping/ad?h="+encodeURIComponent("ads."+b.domain)+"&p="+encodeURIComponent(b.path)+"&u="+this.k+"&d="+ia(s(m.location.host))+"&g="+b.uid+S(b,0,"sections")+
S(b,1,"authors")+S(b,2,"zone")+S(b,3,"sponsorName")+S(b,4,"type")+(j?"&n="+this.fa:"&nc=1")+"&c="+Math.round((B()-this.I)/600)/100+"&x="+c+"&m="+this.l+"&y="+M()+"&o="+sa("Width")+"&w="+L()+"&j="+(a?0:Math.round((this.m+2)*15E3/1E3))+"&E="+this.h.total()+d+g+"&t="+this.U+"&V=36"+e+"&tz="+(new Date).getTimezoneOffset()+(Ia(this.e)?"&l=1":"")+Fa(b)+"&ad="+ia(Va(this))+(a?"":Qa(this))+(a?"&zz=1":"")+"&_")};function Wa(a){a=pa(a.N,"div");return ka(a,function(a){a=N(a);return a.height>1&&a.width>1})}
function Ta(a){var b=Wa(a);p(b,function(b){if(!Xa(a,b)){var d=new ya(b,Sa);a.i.push(d);d.X();if(b=J("data-cb-engaged-seconds",b))d=d.s(h),d.engagedSeconds=parseInt(b,10),a.M(d)}});Ya(a)}function Ya(a){var b=[];p(a.i,function(a){ua(a.g)?b.push(a):a.p()});a.i=b}function Xa(a,b){var c=k;p(a.i,function(a){if(a.g===b)return c=h,k});return c}l.X=function(){p(this.i,function(a){a.X()})};l.ga=function(){Y.V.ga.call(this);Ta(this)};l.eb=function(a){this.Ca(la(a.data),a.source)};
l.Ca=function(a,b){if(a.cbType!=="campaignMessage")return k;var c=b;if(c.parent!=window){for(var d=0;c.parent!=window&&d<10;)c=c.parent,d++;if(d>=10)return k}Ta(this);var d=document.getElementsByTagName("iframe"),e=f;p(d,function(a){if(a.contentWindow===c)return e=a,k});if(!e)return k;var g=e.getAttribute(this.N);if(g===i){d=qa(e,this.N);if(d===k)return k;g=d.getAttribute(this.N)}var j=f;p(this.i,function(a){if(g===a.A)return j=a,k});if(j===f)return k;Ba(j,a,h);if(a.exclude)j.ba=h;if(a.engagedSeconds)d=
{id:j.A},d.campaignId=a.campaignId,d.creativeId=a.creativeId,d.engagedSeconds=parseInt(a.engagedSeconds,10),this.M(d);"postMessage"in b&&b.postMessage("cbdata::ack","*");return h};l.Y=function(){this.G();this.terminate();this.L=m.location.protocol+"//"+this.a.domain+this.a.path};
l.M=function(a){if(a&&u(a.engagedSeconds)&&!isNaN(a.engagedSeconds)){var b=this.a.engagedAdFilters;if(!b||b.length===f)this.a.engagedAdFilters=[],b=this.a.engagedAdFilters;var c={};c.engagedSeconds=a.engagedSeconds;p(["id","campaignId","creativeId"],function(b){z(a[b])&&(c[b]=a[b])});var d=k;p(b,function(a){d=ja(a,c);return!d});d||b.push(c)}};
l.Va=function(a,b){var c=this.a.engagedAdCallback;if(c){var d=this.a.engagedAdFilters;if(d&&d.length&&a){var e=a.engagedSeconds;p(d,function(d){if(d.engagedSeconds===e){var j=h;p(d,function(b,c){return j=b===a[c]});if(j)return a.element=b,c(a,e),k}})}}};l.mb=function(a){if(a){var b;p(this.i,function(c){if(c.A===a||c.g===a)return b=c,k});if(b){var c=b.s();c.refreshed="1";this.ja.push(c);b.reset()}}};
function Ua(a){if(Sa===1){var b=document.createElement("div");b.setAttribute("style","position:fixed; left:0; right:0 ;top:0 ;bottom:0; background-color: rgba(0, 0, 0, 0.3); z-index:1000;");document.body.appendChild(b);var c=document.createElement("div");document.body.appendChild(c);var d=a.a;p(["sections","zone","sponsorName","type"],function(a){if(d[a]!==f){var b=document.createElement("div");b.textContent=a+": "+d[a];c.appendChild(b)}});c.children.length&&(a="background-color: #F1F7FB; z-index: 9000000; position: fixed;padding: 10px; border-radius: 5px; font-size: 12px;color: #658BA1; border: 1px solid #C8DAE8;font-family: 'Proxima-Nova','Helvetica Neue',Helvetica,Arial,sans-serif;top: "+
Math.round(L()*0.9)+"px;left: "+Math.round(ra("Width")*0.45)+"px;",c.setAttribute("style",a))}}l.terminate=function(){E(this.Xa);E(this.Wa);p(this.i,function(a){a.p()});this.i=[];m.clearTimeout(this.r);Y.V.terminate.call(this)};if(!m.pSUPERFLY_pub){var Za=new Y;m.pSUPERFLY_pub=Za;Y.prototype.virtualPage=Y.prototype.Y;Y.prototype.addEngagedAdFilter=Y.prototype.M;Y.prototype.refreshAd=Y.prototype.mb;Y.prototype.updateCampaignData=Y.prototype.X;if("postMessage"in window!==h)Y.prototype.loadCampaign=Y.prototype.Ca;W(Za)};function $a(){var a=document.createElement("script");a.async=h;a.src=(m.location.protocol||"http:")+"//static.chartbeat.com/js/inpage.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}function ab(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=U.f(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),$a())}};function Z(){n.call(this);for(var a=q(this.Ja,this),b=m._cbq||[];b.length;)a(b.shift());m._cbq={push:a};D("anchor",this.ib,this);"postMessage"in window&&t(m,"message",q(this.cb,this))}aa(Z);l=Z.prototype;
l.d=function(){Z.V.d.call(this);this.$=i;Ea(this.a);var a=m.location;R(this.a,"pingServer","ping.chartbeat.net");R(this.a,"title",document.title);R(this.a,"domain",a.host);R(this.a,"path",ea(!!this.a.useCanonical));this.da=s(a.host);this.a.domain=s(this.a.domain);a=(this.e.c("_chartbeat2",h)||"").split(".");a.length>4&&(a=[]);var b=B(),c,d="1",e=a&&+a[2];c=a&&a[3];if(a&&e&&c)if(d=Math.abs((ha(b)-ha(e))/864E5)){d=Math.min(d,16)-1;for(e="";d--;)e+=0;d=(c+e+"1").slice(-16)}else d=c;c=d;this.fa=Ra(this);
a[0]||(a[0]=this.a.utoken||ca(Ka(this),3),a[1]=b);a[2]=b;a[3]=c;this.pa=a[0];this.k=a.join(".");this.e.create("_chartbeat2",this.k,94608E3,h);this.a.utoken=this.pa;var g;b=+a[1];c=+a[2];if((a=a[3])&&b&&c)g=(Math.min((Math.abs((ha(c)-ha(b))/864E5)||0)+1,16,a.length)-1).toString(16),g+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.xa=g};l.Oa=function(a){this.$=a};
l.G=function(){this.e.update("_chartbeat4",["t="+this.U,"E="+this.h.total(),"x="+X(this),"c="+Math.round((B()-this.I)/600)/100,"y="+M(),"w="+L()].join("&"),3600)};
l.H=function(){var a=this.a,b=X(this);this.l=Math.max(this.l,b);var c=Math.round((B()-this.I)/600)/100,d=0,e=0,g=0,j=this.h.t;G.Qa()?e=1:this.a.reading&&+this.a.reading||j>0||c<0.09?d=1:g=1;var r="",o="",y="",w="",I="",x=Na(this);if(this.v){this.v=k;var r=(x?"&v=":"&r=")+Oa(this),o="&i="+Pa(this),H=this.a.hudTrackable;H!==f&&(y="&L="+(H?"1":"0"));if(x&&(x=db(this)))r="&v="+encodeURIComponent(x.path),w="&K="+x.left+"::"+x.top,x.Ga>1&&(w+="&l1="+x.Ga);a.alias&&(I="&PA="+encodeURIComponent(a.alias));
this.L&&(r+="&vp=1")}x=this.S?"&b="+this.S:"";H=this.$?"&A="+this.$:"";Ma(this,(m.location.protocol||"http:")+"//"+a.pingServer+"/ping?h="+encodeURIComponent(a.domain)+"&p="+encodeURIComponent(a.path)+"&u="+this.pa+"&d="+encodeURIComponent(this.da)+"&g="+a.uid+S(a,0,"sections")+S(a,1,"authors")+S(a,3,"sponsorName")+S(a,4,"type")+(!a.noCookies&&this.e.isSupported()?"&n="+this.fa:"&nc=1")+(this.xa?"&f="+this.xa:"")+"&c="+c+"&x="+b+"&m="+this.l+"&y="+M()+"&o="+sa("Width")+"&w="+L()+"&j="+Math.round((this.m+
2)*15E3/1E3)+"&R="+d+"&W="+e+"&I="+g+"&E="+this.h.total()+"&e="+j+r+w+I+x+H+Da("C","utm_campaign",a.campaignTag)+Da("M","utm_medium",a.mediumTag)+"&t="+this.U+"&V=36"+Qa(this)+o+y+"&tz="+(new Date).getTimezoneOffset()+(Ia(this.e)?"&l=1":"")+Fa(a)+"&_")};
l.cb=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.da)){var c=a.data;z(c)&&c.indexOf("cbqpush::")===0?(a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.Ja(a))):c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&path="+encodeURIComponent(b.path)+"&title="+Pa(this)+"&referrer="+Oa(this)+"&internal="+(Na(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.da)+"&utoken="+this.pa,a.source.postMessage(b,"*"))}};
l.Ja=function(a){this.a[a[0]]=a[1];this.m=0};
l.ib=function(a){var b=a.href||"",b=b.replace(/-{2,}/g,"-");var c=b,d="",e="";if(c){var e=document.createElement("a"),g=m.location;c.indexOf("http")!==0&&c.indexOf("javascript")!==0&&(c=g.protocol+c);e.href=c;d=e.hostname;e=e.protocol;if(d==="")d=g.hostname;if(e==="")e=g.protocol;e==="javascript:"&&(d="")}d!==m.location.hostname||e==="javascript:"||(a=wa(a,f,h),this.e.update("_chartbeat5",[a.x,a.y,encodeURIComponent(this.a.path),encodeURIComponent(b)].join(","),60,k,f,5))};
function db(a){var b=a.e.c("_chartbeat5");if(!b)return i;var b=b.split("::"),c=b.length,d,e;if(c===1)d=b[0].split(","),e=0;else{var g,j=m.location.href;p(b,function(a,b){var c=a.split(","),w=ma(j,decodeURIComponent(c[3]));if(w===0)return d=c,e=b,k;if(g===f||w<g)g=w,d=c,e=b})}b.splice(e,1);a.e.create("_chartbeat5",b.join("::"),60);return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),Ga:c}};if(!m.pSUPERFLY){var eb=new Z;m.pSUPERFLY=eb;Z.prototype.virtualPage=Z.prototype.Y;Z.prototype.activity=Z.prototype.Oa;var $=m.pSUPERFLY_pub;$&&$.virtualPage&&(Z.prototype.virtualPage=function(){var a=arguments.length?Array.prototype.slice.call(arguments,0):[];$.virtualPage();Z.prototype.Y.apply(eb,a);$.d();W($)});$&&$.addEngagedAdFilter&&(Z.prototype.addEngagedAdFilter=q($.addEngagedAdFilter,$));$&&$.refreshAd&&(Z.prototype.refreshAd=q($.refreshAd,$));W(eb);var fb=U.f(h);if(fb){t(m,"message",ab);
var gb;if(gb=fb.getItem("_cb_ip")){var hb=m.location;gb=!(!/^([^.]+[.])?chartbeat\.com$/.test(hb.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(hb.pathname))}gb&&$a()}};})();