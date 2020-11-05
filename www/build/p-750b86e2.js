function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function e(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),r.forEach((function(e){n(t,e,i[e])}))}return t}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?o(n):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function l(t,n){if(t){if("string"==typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(t,n):void 0}}function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(e.push(o.value),!n||e.length!==n);i=!0);}catch(u){r=!0,s=u}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return e}}(t,n)||l(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){var e,i;console&&console[t]&&(e=console)[t].apply(e,function(t){if(Array.isArray(t))return h(t)}(i=n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(i)||l(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},y=new(function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.init(n,e)}return s(t,[{key:"init",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||d,this.options=n,this.debug=n.debug}},{key:"setDebug",value:function(t){this.debug=t}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"log","",!0)}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"warn","",!0)}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"error","")}},{key:"deprecate",value:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(t,n,e,i){return i&&!this.debug?null:("string"==typeof t[0]&&(t[0]="".concat(e).concat(this.prefix," ").concat(t[0])),this.logger[n](t))}},{key:"create",value:function(n){return new t(this.logger,e({},{prefix:"".concat(this.prefix,":").concat(n,":")},this.options))}}]),t}()),g=function(){function t(){i(this,t),this.observers={}}return s(t,[{key:"on",value:function(t,n){var e=this;return t.split(" ").forEach((function(t){e.observers[t]=e.observers[t]||[],e.observers[t].push(n)})),this}},{key:"off",value:function(t,n){this.observers[t]&&(n?this.observers[t]=this.observers[t].filter((function(t){return t!==n})):delete this.observers[t])}},{key:"emit",value:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];if(this.observers[t]){var r=[].concat(this.observers[t]);r.forEach((function(t){t.apply(void 0,e)}))}if(this.observers["*"]){var s=[].concat(this.observers["*"]);s.forEach((function(n){n.apply(n,[t].concat(e))}))}}}]),t}();function p(){var t,n,e=new Promise((function(e,i){t=e,n=i}));return e.resolve=t,e.reject=n,e}function b(t){return null==t?"":""+t}function m(t,n,e){t.forEach((function(t){n[t]&&(e[t]=n[t])}))}function k(t,n,e){function i(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function r(){return!t||"string"==typeof t}for(var s="string"!=typeof n?[].concat(n):n.split(".");s.length>1;){if(r())return{};var o=i(s.shift());!t[o]&&e&&(t[o]=new e),t=t[o]}return r()?{}:{obj:t,k:i(s.shift())}}function w(t,n,e){var i=k(t,n,Object);i.obj[i.k]=e}function j(t,n){var e=k(t,n),i=e.obj;if(i)return i[e.k]}function N(t,n,e){var i=j(t,e);return void 0!==i?i:j(n,e)}function O(t,n,e){for(var i in n)i in t?"string"==typeof t[i]||t[i]instanceof String||"string"==typeof n[i]||n[i]instanceof String?e&&(t[i]=n[i]):O(t[i],n[i],e):t[i]=n[i];return t}function x(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function R(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,(function(t){return S[t]})):t}var A=function(){function t(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return i(this,t),e=a(this,u(t).call(this)),g.call(o(e)),e.data=n||{},e.options=r,void 0===e.options.keySeparator&&(e.options.keySeparator="."),e}return c(t,g),s(t,[{key:"addNamespaces",value:function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}},{key:"removeNamespaces",value:function(t){var n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}},{key:"getResource",value:function(t,n,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,s=[t,n];return e&&"string"!=typeof e&&(s=s.concat(e)),e&&"string"==typeof e&&(s=s.concat(r?e.split(r):e)),t.indexOf(".")>-1&&(s=t.split(".")),j(this.data,s)}},{key:"addResource",value:function(t,n,e,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},s=this.options.keySeparator;void 0===s&&(s=".");var o=[t,n];e&&(o=o.concat(s?e.split(s):e)),t.indexOf(".")>-1&&(i=n,n=(o=t.split("."))[1]),this.addNamespaces(n),w(this.data,o,i),r.silent||this.emit("added",t,n,e,i)}},{key:"addResources",value:function(t,n,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in e)"string"!=typeof e[r]&&"[object Array]"!==Object.prototype.toString.apply(e[r])||this.addResource(t,n,r,e[r],{silent:!0});i.silent||this.emit("added",t,n,e)}},{key:"addResourceBundle",value:function(t,n,i,r,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},a=[t,n];t.indexOf(".")>-1&&(r=i,i=n,n=(a=t.split("."))[1]),this.addNamespaces(n);var u=j(this.data,a)||{};r?O(u,i,s):u=e({},u,i),w(this.data,a,u),o.silent||this.emit("added",t,n,i)}},{key:"removeResourceBundle",value:function(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}},{key:"hasResourceBundle",value:function(t,n){return void 0!==this.getResource(t,n)}},{key:"getResourceBundle",value:function(t,n){return n||(n=this.options.defaultNS),"v1"===this.options.compatibilityAPI?e({},{},this.getResource(t,n)):this.getResource(t,n)}},{key:"getDataByLanguage",value:function(t){return this.data[t]}},{key:"toJSON",value:function(){return this.data}}]),t}(),L={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,e,i,r){var s=this;return t.forEach((function(t){s.processors[t]&&(n=s.processors[t].process(n,e,i,r))})),n}},P={},T=function(){function n(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(this,n),e=a(this,u(n).call(this)),g.call(o(e)),m(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,o(e)),e.options=r,void 0===e.options.keySeparator&&(e.options.keySeparator="."),e.logger=y.create("translator"),e}return c(n,g),s(n,[{key:"changeLanguage",value:function(t){t&&(this.language=t)}},{key:"exists",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},e=this.resolve(t,n);return e&&void 0!==e.res}},{key:"extractFromKey",value:function(t,n){var e=n.nsSeparator||this.options.nsSeparator;void 0===e&&(e=":");var i=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,r=n.ns||this.options.defaultNS;if(e&&t.indexOf(e)>-1){var s=t.split(e);(e!==i||e===i&&this.options.ns.indexOf(s[0])>-1)&&(r=s.shift()),t=s.join(i)}return"string"==typeof r&&(r=[r]),{key:t,namespaces:r}}},{key:"translate",value:function(n,i){var r=this;if("object"!==t(i)&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),i||(i={}),null==n)return"";Array.isArray(n)||(n=[String(n)]);var s=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,o=this.extractFromKey(n[n.length-1],i),a=o.key,u=o.namespaces,f=u[u.length-1],c=i.lng||this.language,h=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(h){var l=i.nsSeparator||this.options.nsSeparator;return f+l+a}return a}var v=this.resolve(n,i),d=v&&v.res,y=v&&v.usedKey||a,g=v&&v.exactUsedKey||a,p=Object.prototype.toString.apply(d),b=["[object Number]","[object Function]","[object RegExp]"],m=void 0!==i.joinArrays?i.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,w="string"!=typeof d&&"boolean"!=typeof d&&"number"!=typeof d;if(k&&d&&w&&b.indexOf(p)<0&&("string"!=typeof m||"[object Array]"!==p)){if(!i.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,d,i):"key '".concat(a," (").concat(this.language,")' returned an object instead of string.");if(s){var j="[object Array]"===p,N=j?[]:{},O=j?g:y;for(var x in d)if(Object.prototype.hasOwnProperty.call(d,x)){var S="".concat(O).concat(s).concat(x);N[x]=this.translate(S,e({},i,{joinArrays:!1,ns:u})),N[x]===S&&(N[x]=d[x])}d=N}}else if(k&&"string"==typeof m&&"[object Array]"===p)(d=d.join(m))&&(d=this.extendTranslation(d,n,i));else{var R=!1,A=!1;if(!this.isValidLookup(d)&&void 0!==i.defaultValue){if(R=!0,void 0!==i.count){var L=this.pluralResolver.getSuffix(c,i.count);d=i["defaultValue".concat(L)]}d||(d=i.defaultValue)}this.isValidLookup(d)||(A=!0,d=a);var P=i.defaultValue&&i.defaultValue!==d&&this.options.updateMissing;if(A||R||P){this.logger.log(P?"updateKey":"missingKey",c,f,a,P?i.defaultValue:d);var T=[],E=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if("fallback"===this.options.saveMissingTo&&E&&E[0])for(var C=0;C<E.length;C++)T.push(E[C]);else"all"===this.options.saveMissingTo?T=this.languageUtils.toResolveHierarchy(i.lng||this.language):T.push(i.lng||this.language);var I=function(t,n){r.options.missingKeyHandler?r.options.missingKeyHandler(t,f,n,P?i.defaultValue:d,P,i):r.backendConnector&&r.backendConnector.saveMissing&&r.backendConnector.saveMissing(t,f,n,P?i.defaultValue:d,P,i),r.emit("missingKey",t,f,n,d)};if(this.options.saveMissing){var B=void 0!==i.count&&"string"!=typeof i.count;this.options.saveMissingPlurals&&B?T.forEach((function(t){r.pluralResolver.getPluralFormsOfKey(t,a).forEach((function(n){return I([t],n)}))})):I(T,a)}}d=this.extendTranslation(d,n,i,v),A&&d===a&&this.options.appendNamespaceToMissingKey&&(d="".concat(f,":").concat(a)),A&&this.options.parseMissingKeyHandler&&(d=this.options.parseMissingKeyHandler(d))}return d}},{key:"extendTranslation",value:function(t,n,i,r){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,i,r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init(e({},i,{interpolation:e({},this.options.interpolation,i.interpolation)}));var o=i.replace&&"string"!=typeof i.replace?i.replace:i;this.options.interpolation.defaultVariables&&(o=e({},this.options.interpolation.defaultVariables,o)),t=this.interpolator.interpolate(t,o,i.lng||this.language,i),!1!==i.nest&&(t=this.interpolator.nest(t,(function(){return s.translate.apply(s,arguments)}),i)),i.interpolation&&this.interpolator.reset()}var a=i.postProcess||this.options.postProcess,u="string"==typeof a?[a]:a;return null!=t&&u&&u.length&&!1!==i.applyPostProcessor&&(t=L.handle(u,t,n,this.options&&this.options.postProcessPassResolved?e({i18nResolved:r},i):i,this)),t}},{key:"resolve",value:function(t){var n,e,i,r,s,o=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t=[t]),t.forEach((function(t){if(!o.isValidLookup(n)){var u=o.extractFromKey(t,a),f=u.key;e=f;var c=u.namespaces;o.options.fallbackNS&&(c=c.concat(o.options.fallbackNS));var h=void 0!==a.count&&"string"!=typeof a.count,l=void 0!==a.context&&"string"==typeof a.context&&""!==a.context,v=a.lngs?a.lngs:o.languageUtils.toResolveHierarchy(a.lng||o.language,a.fallbackLng);c.forEach((function(t){o.isValidLookup(n)||(s=t,!P["".concat(v[0],"-").concat(t)]&&o.utils&&o.utils.hasLoadedNamespace&&!o.utils.hasLoadedNamespace(s)&&(P["".concat(v[0],"-").concat(t)]=!0,o.logger.warn('key "'.concat(e,'" for namespace "').concat(s,'" for languages "').concat(v.join(", "),"\" won't get resolved as namespace was not yet loaded"),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),v.forEach((function(e){if(!o.isValidLookup(n)){r=e;var s,u,c=f,v=[c];for(o.i18nFormat&&o.i18nFormat.addLookupKeys?o.i18nFormat.addLookupKeys(v,f,e,t,a):(h&&(s=o.pluralResolver.getSuffix(e,a.count)),h&&l&&v.push(c+s),l&&v.push(c+="".concat(o.options.contextSeparator).concat(a.context)),h&&v.push(c+=s));u=v.pop();)o.isValidLookup(n)||(i=u,n=o.getResource(e,t,u,a))}})))}))}})),{res:n,usedKey:e,exactUsedKey:i,usedLng:r,usedNS:s}}},{key:"isValidLookup",value:function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}},{key:"getResource",value:function(t,n,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,e,i):this.resourceStore.getResource(t,n,e,i)}}]),n}();function E(t){return t.charAt(0).toUpperCase()+t.slice(1)}var C=function(){function t(n){i(this,t),this.options=n,this.whitelist=this.options.whitelist||!1,this.logger=y.create("languageUtils")}return s(t,[{key:"getScriptPartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return null;var n=t.split("-");return 2===n.length?null:(n.pop(),this.formatLanguageCode(n.join("-")))}},{key:"getLanguagePartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return t;var n=t.split("-");return this.formatLanguageCode(n[0])}},{key:"formatLanguageCode",value:function(t){if("string"==typeof t&&t.indexOf("-")>-1){var n=["hans","hant","latn","cyrl","cans","mong","arab"],e=t.split("-");return this.options.lowerCaseLng?e=e.map((function(t){return t.toLowerCase()})):2===e.length?(e[0]=e[0].toLowerCase(),e[1]=e[1].toUpperCase(),n.indexOf(e[1].toLowerCase())>-1&&(e[1]=E(e[1].toLowerCase()))):3===e.length&&(e[0]=e[0].toLowerCase(),2===e[1].length&&(e[1]=e[1].toUpperCase()),"sgn"!==e[0]&&2===e[2].length&&(e[2]=e[2].toUpperCase()),n.indexOf(e[1].toLowerCase())>-1&&(e[1]=E(e[1].toLowerCase())),n.indexOf(e[2].toLowerCase())>-1&&(e[2]=E(e[2].toLowerCase()))),e.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}},{key:"isWhitelisted",value:function(t){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(t=this.getLanguagePartFromCode(t)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(t)>-1}},{key:"getFallbackCodes",value:function(t,n){if(!t)return[];if("string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!n)return t.default||[];var e=t[n];return e||(e=t[this.getScriptPartFromCode(n)]),e||(e=t[this.formatLanguageCode(n)]),e||(e=t.default),e||[]}},{key:"toResolveHierarchy",value:function(t,n){var e=this,i=this.getFallbackCodes(n||this.options.fallbackLng||[],t),r=[],s=function(t){t&&(e.isWhitelisted(t)?r.push(t):e.logger.warn("rejecting non-whitelisted language code: ".concat(t)))};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&s(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&s(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&s(this.getLanguagePartFromCode(t))):"string"==typeof t&&s(this.formatLanguageCode(t)),i.forEach((function(t){r.indexOf(t)<0&&s(e.formatLanguageCode(t))})),r}}]),t}(),I=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],B={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0===t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0===t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(1===t?0:2===t?1:(t<0||t>10)&&t%10==0?2:3)}};function z(){var t={};return I.forEach((function(n){n.lngs.forEach((function(e){t[e]={numbers:n.nr,plurals:B[n.fc]}}))})),t}var F=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.languageUtils=n,this.options=e,this.logger=y.create("pluralResolver"),this.rules=z()}return s(t,[{key:"addRule",value:function(t,n){this.rules[t]=n}},{key:"getRule",value:function(t){return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}},{key:"needsPlural",value:function(t){var n=this.getRule(t);return n&&n.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(t,n){var e=this,i=[],r=this.getRule(t);return r?(r.numbers.forEach((function(r){var s=e.getSuffix(t,r);i.push("".concat(n).concat(s))})),i):i}},{key:"getSuffix",value:function(t,n){var e=this,i=this.getRule(t);if(i){var r=i.plurals(i.noAbs?n:Math.abs(n)),s=i.numbers[r];this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]&&(2===s?s="plural":1===s&&(s=""));var o=function(){return e.options.prepend&&s.toString()?e.options.prepend+s.toString():s.toString()};return"v1"===this.options.compatibilityJSON?1===s?"":"number"==typeof s?"_plural_".concat(s.toString()):o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}return this.logger.warn("no plural rule found for: ".concat(t)),""}}]),t}(),K=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.logger=y.create("interpolator"),this.options=n,this.format=n.interpolation&&n.interpolation.format||function(t){return t},this.init(n)}return s(t,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});var n=t.interpolation;this.escape=void 0!==n.escape?n.escape:R,this.escapeValue=void 0===n.escapeValue||n.escapeValue,this.useRawValueToEscape=void 0!==n.useRawValueToEscape&&n.useRawValueToEscape,this.prefix=n.prefix?x(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?x(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?x(n.nestingPrefix):n.nestingPrefixEscaped||x("$t("),this.nestingSuffix=n.nestingSuffix?x(n.nestingSuffix):n.nestingSuffixEscaped||x(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=void 0!==n.alwaysFormat&&n.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var t="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(t,"g");var n="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(n,"g");var e="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(e,"g")}},{key:"interpolate",value:function(t,n,e,i){var r,s,o,a=this,u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function f(t){return t.replace(/\$/g,"$$$$")}var c=function(t){if(t.indexOf(a.formatSeparator)<0){var r=N(n,u,t);return a.alwaysFormat?a.format(r,void 0,e):r}var s=t.split(a.formatSeparator),o=s.shift().trim(),f=s.join(a.formatSeparator).trim();return a.format(N(n,u,o),f,e,i)};this.resetRegExp();var h=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler;for(o=0;r=this.regexpUnescape.exec(t);){if(void 0===(s=c(r[1].trim())))if("function"==typeof h){var l=h(t,r,i);s="string"==typeof l?l:""}else this.logger.warn("missed to pass in variable ".concat(r[1]," for interpolating ").concat(t)),s="";else"string"==typeof s||this.useRawValueToEscape||(s=b(s));if(t=t.replace(r[0],f(s)),this.regexpUnescape.lastIndex=0,++o>=this.maxReplaces)break}for(o=0;r=this.regexp.exec(t);){if(void 0===(s=c(r[1].trim())))if("function"==typeof h){var v=h(t,r,i);s="string"==typeof v?v:""}else this.logger.warn("missed to pass in variable ".concat(r[1]," for interpolating ").concat(t)),s="";else"string"==typeof s||this.useRawValueToEscape||(s=b(s));if(s=f(this.escapeValue?this.escape(s):s),t=t.replace(r[0],s),this.regexp.lastIndex=0,++o>=this.maxReplaces)break}return t}},{key:"nest",value:function(t,n){var i,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=e({},s);function a(t,n){var i=this.nestingOptionsSeparator;if(t.indexOf(i)<0)return t;var r=t.split(new RegExp("".concat(i,"[ ]*{"))),s="{".concat(r[1]);t=r[0],s=(s=this.interpolate(s,o)).replace(/'/g,'"');try{o=JSON.parse(s),n&&(o=e({},n,o))}catch(a){return this.logger.warn("failed parsing options string in nesting for key ".concat(t),a),"".concat(t).concat(i).concat(s)}return delete o.defaultValue,t}for(o.applyPostProcessor=!1,delete o.defaultValue;i=this.nestingRegexp.exec(t);){if((r=n(a.call(this,i[1].trim(),o),o))&&i[0]===t&&"string"!=typeof r)return r;"string"!=typeof r&&(r=b(r)),r||(this.logger.warn("missed to resolve ".concat(i[1]," for nesting ").concat(t)),r=""),t=t.replace(i[0],r),this.regexp.lastIndex=0}return t}}]),t}(),M=function(){function t(n,e,r){var s,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i(this,t),s=a(this,u(t).call(this)),g.call(o(s)),s.backend=n,s.store=e,s.services=r,s.languageUtils=r.languageUtils,s.options=f,s.logger=y.create("backendConnector"),s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(r,f.backend,f),s}return c(t,g),s(t,[{key:"queueLoad",value:function(t,n,e,i){var r=this,s=[],o=[],a=[],u=[];return t.forEach((function(t){var i=!0;n.forEach((function(n){var a="".concat(t,"|").concat(n);!e.reload&&r.store.hasResourceBundle(t,n)?r.state[a]=2:r.state[a]<0||(1===r.state[a]?o.indexOf(a)<0&&o.push(a):(r.state[a]=1,i=!1,o.indexOf(a)<0&&o.push(a),s.indexOf(a)<0&&s.push(a),u.indexOf(n)<0&&u.push(n)))})),i||a.push(t)})),(s.length||o.length)&&this.queue.push({pending:o,loaded:{},errors:[],callback:i}),{toLoad:s,pending:o,toLoadLanguages:a,toLoadNamespaces:u}}},{key:"loaded",value:function(t,n,e){var i=v(t.split("|"),2),r=i[0],s=i[1];n&&this.emit("failedLoading",r,s,n),e&&this.store.addResourceBundle(r,s,e),this.state[t]=n?-1:2;var o={};this.queue.forEach((function(e){var i,a,u,f;i=s,(u=(a=k(e.loaded,[r],Object)).obj)[f=a.k]=u[f]||[],u[f].push(i),function(t,n){for(var e=t.indexOf(n);-1!==e;)t.splice(e,1),e=t.indexOf(n)}(e.pending,t),n&&e.errors.push(n),0!==e.pending.length||e.done||(Object.keys(e.loaded).forEach((function(t){o[t]||(o[t]=[]),e.loaded[t].length&&e.loaded[t].forEach((function(n){o[t].indexOf(n)<0&&o[t].push(n)}))})),e.done=!0,e.errors.length?e.callback(e.errors):e.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((function(t){return!t.done}))}},{key:"read",value:function(t,n,e){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,o=arguments.length>5?arguments[5]:void 0;return t.length?this.backend[e](t,n,(function(a,u){a&&u&&r<5?setTimeout((function(){i.read.call(i,t,n,e,r+1,2*s,o)}),s):o(a,u)})):o(null,{})}},{key:"prepareLoading",value:function(t,n){var e=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof n&&(n=[n]);var s=this.queueLoad(t,n,i,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach((function(t){e.loadOne(t)}))}},{key:"load",value:function(t,n,e){this.prepareLoading(t,n,{},e)}},{key:"reload",value:function(t,n,e){this.prepareLoading(t,n,{reload:!0},e)}},{key:"loadOne",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=t.split("|"),r=v(i,2),s=r[0],o=r[1];this.read(s,o,"read",void 0,void 0,(function(i,r){i&&n.logger.warn("".concat(e,"loading namespace ").concat(o," for language ").concat(s," failed"),i),!i&&r&&n.logger.log("".concat(e,"loaded namespace ").concat(o," for language ").concat(s),r),n.loaded(t,i,r)}))}},{key:"saveMissing",value:function(t,n,i,r,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)?this.logger.warn('did not save key "'.concat(i,'" for namespace "').concat(n,'" as the namespace was not yet loaded'),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=i&&""!==i&&(this.backend&&this.backend.create&&this.backend.create(t,n,i,r,null,e({},o,{isUpdate:s})),t&&t[0]&&this.store.addResource(t[0],n,i,r))}}]),t}();function $(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(n){var e={};if("object"===t(n[1])&&(e=n[1]),"string"==typeof n[1]&&(e.defaultValue=n[1]),"string"==typeof n[2]&&(e.tDescription=n[2]),"object"===t(n[2])||"object"===t(n[3])){var i=n[3]||n[2];Object.keys(i).forEach((function(t){e[t]=i[t]}))}return e},interpolation:{escapeValue:!0,format:function(t){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3}}}function D(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.whitelist&&t.whitelist.indexOf("cimode")<0&&(t.whitelist=t.whitelist.concat(["cimode"])),t}function W(){}var q=new(function(){function n(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(i(this,n),t=a(this,u(n).call(this)),g.call(o(t)),t.options=D(e),t.services={},t.logger=y,t.modules={external:[]},r&&!t.isInitialized&&!e.isClone){if(!t.options.initImmediate)return t.init(e,r),a(t,o(t));setTimeout((function(){t.init(e,r)}),0)}return t}return c(n,g),s(n,[{key:"init",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;function r(t){return t?"function"==typeof t?new t:t:null}if("function"==typeof n&&(i=n,n={}),this.options=e({},$(),this.options,D(n)),this.format=this.options.interpolation.format,i||(i=W),!this.options.isClone){y.init(this.modules.logger?r(this.modules.logger):null,this.options);var s=new C(this.options);this.store=new A(this.options.resources,this.options);var o=this.services;o.logger=y,o.resourceStore=this.store,o.languageUtils=s,o.pluralResolver=new F(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),o.interpolator=new K(this.options),o.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},o.backendConnector=new M(r(this.modules.backend),o.resourceStore,o,this.options),o.backendConnector.on("*",(function(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];t.emit.apply(t,[n].concat(i))})),this.modules.languageDetector&&(o.languageDetector=r(this.modules.languageDetector),o.languageDetector.init(o,this.options.detection,this.options)),this.modules.i18nFormat&&(o.i18nFormat=r(this.modules.i18nFormat),o.i18nFormat.init&&o.i18nFormat.init(this)),this.translator=new T(this.services,this.options),this.translator.on("*",(function(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];t.emit.apply(t,[n].concat(i))})),this.modules.external.forEach((function(n){n.init&&n.init(t)}))}this.modules.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");var a=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"];a.forEach((function(n){t[n]=function(){var e;return(e=t.store)[n].apply(e,arguments)}}));var u=p(),f=function(){t.changeLanguage(t.options.lng,(function(n,e){t.isInitialized=!0,t.logger.log("initialized",t.options),t.emit("initialized",t.options),u.resolve(e),i(n,e)}))};return this.options.resources||!this.options.initImmediate?f():setTimeout(f,0),u}},{key:"loadResources",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,i=e,r="string"==typeof t?t:this.language;if("function"==typeof t&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if(r&&"cimode"===r.toLowerCase())return i();var s=[],o=function(t){t&&n.services.languageUtils.toResolveHierarchy(t).forEach((function(t){s.indexOf(t)<0&&s.push(t)}))};if(r)o(r);else{var a=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);a.forEach((function(t){return o(t)}))}this.options.preload&&this.options.preload.forEach((function(t){return o(t)})),this.services.backendConnector.load(s,this.options.ns,i)}else i(null)}},{key:"reloadResources",value:function(t,n,e){var i=p();return t||(t=this.languages),n||(n=this.options.ns),e||(e=W),this.services.backendConnector.reload(t,n,(function(t){i.resolve(),e(t)})),i}},{key:"use",value:function(t){return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&L.addPostProcessor(t),"3rdParty"===t.type&&this.modules.external.push(t),this}},{key:"changeLanguage",value:function(t,n){var e=this;this.isLanguageChangingTo=t;var i=p();this.emit("languageChanging",t);var r=function(t){t&&(e.language||(e.language=t,e.languages=e.services.languageUtils.toResolveHierarchy(t)),e.translator.language||e.translator.changeLanguage(t),e.services.languageDetector&&e.services.languageDetector.cacheUserLanguage(t)),e.loadResources(t,(function(r){!function(t,r){r?(e.language=r,e.languages=e.services.languageUtils.toResolveHierarchy(r),e.translator.changeLanguage(r),e.isLanguageChangingTo=void 0,e.emit("languageChanged",r),e.logger.log("languageChanged",r)):e.isLanguageChangingTo=void 0,i.resolve((function(){return e.t.apply(e,arguments)})),n&&n(t,(function(){return e.t.apply(e,arguments)}))}(r,t)}))};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(r):r(t):r(this.services.languageDetector.detect()),i}},{key:"getFixedT",value:function(n,i){var r=this,s=function n(i,s){var o;if("object"!==t(s)){for(var a=arguments.length,u=new Array(a>2?a-2:0),f=2;f<a;f++)u[f-2]=arguments[f];o=r.options.overloadTranslationOptionHandler([i,s].concat(u))}else o=e({},s);return o.lng=o.lng||n.lng,o.lngs=o.lngs||n.lngs,o.ns=o.ns||n.ns,r.t(i,o)};return"string"==typeof n?s.lng=n:s.lngs=n,s.ns=i,s}},{key:"t",value:function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)}},{key:"exists",value:function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)}},{key:"setDefaultNamespace",value:function(t){this.options.defaultNS=t}},{key:"hasLoadedNamespace",value:function(t){var n=this;if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var e=this.languages[0],i=!!this.options&&this.options.fallbackLng,r=this.languages[this.languages.length-1];if("cimode"===e.toLowerCase())return!0;var s=function(t,e){var i=n.services.backendConnector.state["".concat(t,"|").concat(e)];return-1===i||2===i};return!!this.hasResourceBundle(e,t)||!this.services.backendConnector.backend||!(!s(e,t)||i&&!s(r,t))}},{key:"loadNamespaces",value:function(t,n){var e=this,i=p();return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach((function(t){e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),this.loadResources((function(t){i.resolve(),n&&n(t)})),i):(n&&n(),Promise.resolve())}},{key:"loadLanguages",value:function(t,n){var e=p();"string"==typeof t&&(t=[t]);var i=this.options.preload||[],r=t.filter((function(t){return i.indexOf(t)<0}));return r.length?(this.options.preload=i.concat(r),this.loadResources((function(t){e.resolve(),n&&n(t)})),e):(n&&n(),Promise.resolve())}},{key:"dir",value:function(t){return t||(t=this.languages&&this.languages.length>0?this.languages[0]:this.language),t?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t))>=0?"rtl":"ltr":"rtl"}},{key:"createInstance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return new n(t,e)}},{key:"cloneInstance",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,s=e({},this.options,i,{isClone:!0}),o=new n(s),a=["store","services","language"];return a.forEach((function(n){o[n]=t[n]})),o.services=e({},this.services),o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o.translator=new T(o.services,o.options),o.translator.on("*",(function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];o.emit.apply(o,[t].concat(e))})),o.init(s,r),o.translator.options=o.options,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}}]),n}());export{s as _,i as a,q as i}