var DecorationsT,JobT,SourceSpansT,IN_GLOBAL_SCOPE=!1,PR;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;!function(){function a(a){function b(a){var b=a.charCodeAt(0);if(92!==b)return b;var c=a.charAt(1);return b=l[c],b?b:c>="0"&&"7">=c?parseInt(a.substring(1),8):"u"===c||"x"===c?parseInt(a.substring(2),16):a.charCodeAt(1)}function c(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);var b=String.fromCharCode(a);return"\\"===b||"-"===b||"]"===b||"^"===b?"\\"+b:b}function d(a){var d=a.substring(1,a.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),e=[],f="^"===d[0],g=["["];f&&g.push("^");for(var h=f?1:0,i=d.length;i>h;++h){var j=d[h];if(/\\[bdsw]/i.test(j))g.push(j);else{var k,l=b(j);i>h+2&&"-"===d[h+1]?(k=b(d[h+2]),h+=2):k=l,e.push([l,k]),65>k||l>122||(65>k||l>90||e.push([32|Math.max(65,l),32|Math.min(k,90)]),97>k||l>122||e.push([-33&Math.max(97,l),-33&Math.min(k,122)]))}}e.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]});for(var m=[],n=[],h=0;h<e.length;++h){var o=e[h];o[0]<=n[1]+1?n[1]=Math.max(n[1],o[1]):m.push(n=o)}for(var h=0;h<m.length;++h){var o=m[h];g.push(c(o[0])),o[1]>o[0]&&(o[1]+1>o[0]&&g.push("-"),g.push(c(o[1])))}return g.push("]"),g.join("")}function e(a){for(var b=a.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),e=b.length,h=[],i=0,j=0;e>i;++i){var k=b[i];if("("===k)++j;else if("\\"===k.charAt(0)){var l=+k.substring(1);l&&(j>=l?h[l]=-1:b[i]=c(l))}}for(var i=1;i<h.length;++i)-1===h[i]&&(h[i]=++f);for(var i=0,j=0;e>i;++i){var k=b[i];if("("===k)++j,h[j]||(b[i]="(?:");else if("\\"===k.charAt(0)){var l=+k.substring(1);l&&j>=l&&(b[i]="\\"+h[l])}}for(var i=0;e>i;++i)"^"===b[i]&&"^"!==b[i+1]&&(b[i]="");if(a.ignoreCase&&g)for(var i=0;e>i;++i){var k=b[i],m=k.charAt(0);k.length>=2&&"["===m?b[i]=d(k):"\\"!==m&&(b[i]=k.replace(/[a-zA-Z]/g,function(a){var b=a.charCodeAt(0);return"["+String.fromCharCode(-33&b,32|b)+"]"}))}return b.join("")}for(var f=0,g=!1,h=!1,i=0,j=a.length;j>i;++i){var k=a[i];if(k.ignoreCase)h=!0;else if(/[a-z]/i.test(k.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){g=!0,h=!1;break}}for(var l={b:8,t:9,n:10,v:11,f:12,r:13},m=[],i=0,j=a.length;j>i;++i){var k=a[i];if(k.global||k.multiline)throw new Error(""+k);m.push("(?:"+e(k)+")")}return new RegExp(m.join("|"),h?"gi":"g")}function b(a,b){function c(a){var i=a.nodeType;if(1==i){if(d.test(a.className))return;for(var j=a.firstChild;j;j=j.nextSibling)c(j);var k=a.nodeName.toLowerCase();("br"===k||"li"===k)&&(e[h]="\n",g[h<<1]=f++,g[1|h++<<1]=a)}else if(3==i||4==i){var l=a.nodeValue;l.length&&(l=b?l.replace(/\r\n?/g,"\n"):l.replace(/[ \t\r\n]+/g," "),e[h]=l,g[h<<1]=f,f+=l.length,g[1|h++<<1]=a)}}var d=/(?:^|\s)nocode(?:\s|$)/,e=[],f=0,g=[],h=0;return c(a),{sourceCode:e.join("").replace(/\n$/,""),spans:g}}function c(a,b,c,d,e){if(c){var f={sourceNode:a,pre:1,langExtension:null,numberLines:null,sourceCode:c,spans:null,basePos:b,decorations:null};d(f),e.push.apply(e,f.decorations)}}function d(a){for(var b=void 0,c=a.firstChild;c;c=c.nextSibling){var d=c.nodeType;b=1===d?b?a:c:3===d?Q.test(c.nodeValue)?a:b:b}return b===a?void 0:b}function e(b,d){var e,f={};!function(){for(var c=b.concat(d),g=[],h={},i=0,j=c.length;j>i;++i){var k=c[i],l=k[3];if(l)for(var m=l.length;--m>=0;)f[l.charAt(m)]=k;var n=k[1],o=""+n;h.hasOwnProperty(o)||(g.push(n),h[o]=null)}g.push(/[\0-\uffff]/),e=a(g)}();var g=d.length,h=function(a){for(var b=a.sourceCode,i=a.basePos,k=a.sourceNode,l=[i,I],m=0,n=b.match(e)||[],o={},p=0,q=n.length;q>p;++p){var r,s=n[p],t=o[s],u=void 0;if("string"==typeof t)r=!1;else{var v=f[s.charAt(0)];if(v)u=s.match(v[1]),t=v[0];else{for(var w=0;g>w;++w)if(v=d[w],u=s.match(v[1])){t=v[0];break}u||(t=I)}r=t.length>=5&&"lang-"===t.substring(0,5),!r||u&&"string"==typeof u[1]||(r=!1,t=L),r||(o[s]=t)}var x=m;if(m+=s.length,r){var y=u[1],z=s.indexOf(y),A=z+y.length;u[2]&&(A=s.length-u[2].length,z=A-y.length);var B=t.substring(5);c(k,i+x,s.substring(0,z),h,l),c(k,i+x+z,y,j(B,y),l),c(k,i+x+A,s.substring(A),h,l)}else l.push(i+x,t)}a.decorations=l};return h}function f(a){var b=[],c=[];a.tripleQuotedStrings?b.push([C,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):a.multiLineStrings?b.push([C,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):b.push([C,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),a.verbatimStrings&&c.push([C,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var d=a.hashComments;d&&(a.cStyleComments?(d>1?b.push([E,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):b.push([E,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),c.push([C,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):b.push([E,/^#[^\r\n]*/,null,"#"])),a.cStyleComments&&(c.push([E,/^\/\/[^\r\n]*/,null]),c.push([E,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var f=a.regexLiterals;if(f){var g=f>1?"":"\n\r",h=g?".":"[\\S\\s]",i="/(?=[^/*"+g+"])"+"(?:[^/\\x5B\\x5C"+g+"]"+"|\\x5C"+h+"|\\x5B(?:[^\\x5C\\x5D"+g+"]"+"|\\x5C"+h+")*(?:\\x5D|$))+"+"/";c.push(["lang-regex",RegExp("^"+P+"("+i+")")])}var j=a.types;j&&c.push([F,j]);var k=(""+a.keywords).replace(/^ | $/g,"");k.length&&c.push([D,new RegExp("^(?:"+k.replace(/[\s,]+/g,"|")+")\\b"),null]),b.push([I,/^\s+/,null," \r\n	 "]);var l="^.[^\\s\\w.$@'\"`/\\\\]*";return a.regexLiterals&&(l+="(?!s*/)"),c.push([G,/^@[a-z_$][a-z_$@0-9]*/i,null],[F,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[I,/^[a-z_$][a-z_$@0-9]*/i,null],[G,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[I,/^\\[\s\S]?/,null],[H,new RegExp(l),null]),e(b,c)}function g(a,b,c){function d(a){var b=a.nodeType;if(1!=b||f.test(a.className)){if((3==b||4==b)&&c){var i=a.nodeValue,j=i.match(g);if(j){var k=i.substring(0,j.index);a.nodeValue=k;var l=i.substring(j.index+j[0].length);if(l){var m=a.parentNode;m.insertBefore(h.createTextNode(l),a.nextSibling)}e(a),k||a.parentNode.removeChild(a)}}}else if("br"===a.nodeName)e(a),a.parentNode&&a.parentNode.removeChild(a);else for(var n=a.firstChild;n;n=n.nextSibling)d(n)}function e(a){function b(a,c){var d=c?a.cloneNode(!1):a,e=a.parentNode;if(e){var f=b(e,1),g=a.nextSibling;f.appendChild(d);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var c,d=b(a.nextSibling,0);(c=d.parentNode)&&1===c.nodeType;)d=c;j.push(d)}for(var f=/(?:^|\s)nocode(?:\s|$)/,g=/\r\n?|\n/,h=a.ownerDocument,i=h.createElement("li");a.firstChild;)i.appendChild(a.firstChild);for(var j=[i],k=0;k<j.length;++k)d(j[k]);b===(0|b)&&j[0].setAttribute("value",b);var l=h.createElement("ol");l.className="linenums";for(var m=Math.max(0,0|b-1)||0,k=0,n=j.length;n>k;++k)i=j[k],i.className="L"+(k+m)%10,i.firstChild||i.appendChild(h.createTextNode(" ")),l.appendChild(i);a.appendChild(l)}function h(a){var b=/\bMSIE\s(\d+)/.exec(navigator.userAgent);b=b&&+b[1]<=8;var c=/\n/g,d=a.sourceCode,e=d.length,f=0,g=a.spans,h=g.length,i=0,j=a.decorations,k=j.length,l=0;j[k]=e;var m,n;for(n=m=0;k>n;)j[n]!==j[n+2]?(j[m++]=j[n++],j[m++]=j[n++]):n+=2;for(k=m,n=m=0;k>n;){for(var o=j[n],p=j[n+1],q=n+2;k>=q+2&&j[q+1]===p;)q+=2;j[m++]=o,j[m++]=p,n=q}k=j.length=m;var r=a.sourceNode,s="";r&&(s=r.style.display,r.style.display="none");try{for(;h>i;){g[i];var t,u=g[i+2]||e,v=j[l+2]||e,q=Math.min(u,v),w=g[i+1];if(1!==w.nodeType&&(t=d.substring(f,q))){b&&(t=t.replace(c,"\r")),w.nodeValue=t;var x=w.ownerDocument,y=x.createElement("span");y.className=j[l+1];var z=w.parentNode;z.replaceChild(y,w),y.appendChild(w),u>f&&(g[i+1]=w=x.createTextNode(d.substring(q,u)),z.insertBefore(w,y.nextSibling))}f=q,f>=u&&(i+=2),f>=v&&(l+=2)}}finally{r&&(r.style.display=s)}}function i(a,b){for(var c=b.length;--c>=0;){var d=b[c];S.hasOwnProperty(d)?n.console&&console.warn("cannot override language handler %s",d):S[d]=a}}function j(a,b){return a&&S.hasOwnProperty(a)||(a=/^\s*</.test(b)?"default-markup":"default-code"),S[a]}function k(a){var c=a.langExtension;try{var d=b(a.sourceNode,a.pre),e=d.sourceCode;a.sourceCode=e,a.spans=d.spans,a.basePos=0,j(c,e)(a),h(a)}catch(f){n.console&&console.log(f&&f.stack||f)}}function l(a,b,c){var d=c||!1,e=b||null,f=document.createElement("div");f.innerHTML="<pre>"+a+"</pre>",f=f.firstChild,d&&g(f,d,!0);var h={langExtension:e,numberLines:d,sourceNode:f,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null};return k(h),f.innerHTML}function m(a,b){function c(a){return f.getElementsByTagName(a)}function e(){for(var b=n.PR_SHOULD_USE_CONTINUATION?p.now()+250:1/0;q<j.length&&p.now()<b;q++){for(var c=j[q],f=x,i=c;i=i.previousSibling;){var l=i.nodeType,m=(7===l||8===l)&&i.nodeValue;if(m?!/^\??prettify\b/.test(m):3!==l||/\S/.test(i.nodeValue))break;if(m){f={},m.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){f[b]=c});break}}var o=c.className;if((f!==x||s.test(o))&&!t.test(o)){for(var y=!1,z=c.parentNode;z;z=z.parentNode){var A=z.tagName;if(w.test(A)&&z.className&&s.test(z.className)){y=!0;break}}if(!y){c.className+=" prettyprinted";var B=f.lang;if(!B){B=o.match(r);var C;!B&&(C=d(c))&&v.test(C.tagName)&&(B=C.className.match(r)),B&&(B=B[1])}var D;if(u.test(c.tagName))D=1;else{var E=c.currentStyle,F=h.defaultView,G=E?E.whiteSpace:F&&F.getComputedStyle?F.getComputedStyle(c,null).getPropertyValue("white-space"):0;D=G&&"pre"===G.substring(0,3)}var H=f.linenums;(H="true"===H||+H)||(H=o.match(/\blinenums\b(?::(\d+))?/),H=H?H[1]&&H[1].length?+H[1]:!0:!1),H&&g(c,H,D);var I={langExtension:B,sourceNode:c,numberLines:H,pre:D,sourceCode:null,basePos:null,spans:null,decorations:null};k(I)}}}q<j.length?n.setTimeout(e,250):"function"==typeof a&&a()}for(var f=b||document.body,h=f.ownerDocument||document,i=[c("pre"),c("code"),c("xmp")],j=[],l=0;l<i.length;++l)for(var m=0,o=i[l].length;o>m;++m)j.push(i[l][m]);i=null;var p=Date;p.now||(p={now:function(){return+new Date}});var q=0,r=/\blang(?:uage)?-([\w.]+)(?!\S)/,s=/\bprettyprint\b/,t=/\bprettyprinted\b/,u=/pre|xmp/i,v=/^code$/i,w=/^(?:pre|code|xmp)$/i,x={};e()}var n=window,o=["break,continue,do,else,for,if,return,while"],p=[o,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],q=[p,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],r=[q,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],s=[q,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],t=[q,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],u="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",v=[q,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],w="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",x=[o,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],y=[o,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],z=[o,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],A=[r,t,s,v,w,x,y,z],B=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,C="str",D="kwd",E="com",F="typ",G="lit",H="pun",I="pln",J="tag",K="dec",L="src",M="atn",N="atv",O="nocode",P="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",Q=/\S/,R=f({keywords:A,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),S={};i(R,["default-code"]),i(e([],[[I,/^[^<?]+/],[K,/^<!\w[^>]*(?:>|$)/],[E,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[H,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),i(e([[I,/^[\s]+/,null," 	\r\n"],[N,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[J,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[M,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[H,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),i(e([],[[N,/^[\s\S]+/]]),["uq.val"]),i(f({keywords:r,hashComments:!0,cStyleComments:!0,types:B}),["c","cc","cpp","cxx","cyc","m"]),i(f({keywords:"null,true,false"}),["json"]),i(f({keywords:t,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:B}),["cs"]),i(f({keywords:s,cStyleComments:!0}),["java"]),i(f({keywords:z,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),i(f({keywords:x,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),i(f({keywords:w,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),i(f({keywords:y,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),i(f({keywords:v,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),i(f({keywords:u,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),i(e([],[[C,/^[\s\S]+/]]),["regex"]);var T=n.PR={createSimpleLexer:e,registerLangHandler:i,sourceDecorator:f,PR_ATTRIB_NAME:M,PR_ATTRIB_VALUE:N,PR_COMMENT:E,PR_DECLARATION:K,PR_KEYWORD:D,PR_LITERAL:G,PR_NOCODE:O,PR_PLAIN:I,PR_PUNCTUATION:H,PR_SOURCE:L,PR_STRING:C,PR_TAG:J,PR_TYPE:F,prettyPrintOne:IN_GLOBAL_SCOPE?n.prettyPrintOne=l:prettyPrintOne=l,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?n.prettyPrint=m:prettyPrint=m},U=n.define;"function"==typeof U&&U.amd&&U("google-code-prettify",[],function(){return T})}(),$(document).ready(function(){$("[data-prettify]").each(function(){var a=$(this),b=$(a.attr("data-prettify"));a.removeAttr("data-prettify");var c=a[0].outerHTML,d='<pre class="prettyprint '+b.attr("class")+'">'+String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")+"</pre>";b.replaceWith(d)}),prettyPrint(),$(".menu-toggle").on("click",function(){return $(this).toggleClass("on"),$(".menu").toggleClass("show"),!1}),$(".site-secondary-header a").on("click",function(){if($(window).outerWidth()<700){var a=$(this);return a.hasClass("selected")?a.toggleClass("show").siblings().toggleClass("show"):(a.addClass("selected").siblings().removeClass("selected").toggleClass("show"),window.location.href(a.attr("href"))),!1}}),$("#signUpForm").on("submit",function(){var a=$(this),b=a.find('[type="submit"]'),c=a.find("[required]"),d=0;return b.is(":disabled, .disabled")?!1:(c.each(function(a){c.eq(a).val()?c.eq(a).removeClass("invalid"):(c.eq(a).addClass("invalid"),d++)}),d?!1:(b.prop("disabled",!0),!0))})});