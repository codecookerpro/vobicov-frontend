System.register(["./p-cc411d04.system.js","./p-49989aaa.system.js"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.M;n=e.c},function(e){r=e.s;i=e.A}],execute:function(){var s=[];r.onChange((function(e){if(e===i&&r[i]){s=s.reduce((function(e,t){return e}),[])}}));var u=function(e){var t=e.url,n=e.siteId,r=e.window;r._paq=r._paq||[];var i=r._paq;i.push(["requireConsent"]);i.push(["trackPageView"]);i.push(["enableLinkTracking"]);i.push(["setTrackerUrl",t+"matomo.php"]);i.push(["setSiteId",n])};var a=e("t",(function(e,t){if(t===void 0){t="trackEvent"}{return}}));u({url:t,siteId:n,window:window})}}}));