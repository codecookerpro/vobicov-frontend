System.register(["./p-7f8680f3.system.js"],(function(n){"use strict";var e,r;return{setters:[function(n){e=n.r;r=n.h}],execute:function(){var t="@-webkit-keyframes bannerShrink{100%{height:0}}@keyframes bannerShrink{100%{height:0}}.banner.sc-d4l-banner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;background-color:var(--c-tertiary-light);color:var(--c-primary);font-size:16px;line-height:1.5;padding:0;margin:0;will-change:height}.banner--closing.sc-d4l-banner{overflow:hidden;pointer-events:none;-webkit-animation:0.3s bannerShrink ease-in-out;animation:0.3s bannerShrink ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.banner__content.sc-d4l-banner,.banner__close.sc-d4l-banner{padding:1rem;margin:0;cursor:pointer;background:transparent;color:currentColor;font:inherit;font-weight:400;text-align:center;border:none;text-decoration:none}.banner__content.sc-d4l-banner{-ms-flex:1 1 auto;flex:1 1 auto}.banner__content--static.sc-d4l-banner{cursor:default}.banner__close.sc-d4l-banner{margin:0 0.5rem}.banner--slim.sc-d4l-banner .banner__content.sc-d4l-banner,.banner--slim.sc-d4l-banner .banner__close.sc-d4l-banner{padding:8px}.banner--slim.sc-d4l-banner .banner__close.sc-d4l-banner{margin:0 8px}.banner__invisible-slot.sc-d4l-banner{display:none}";var i=n("d4l_banner",function(){function n(n){e(this,n);this.classes="";this.noreferrer=false;this.show=true}Object.defineProperty(n.prototype,"isExternalLink",{get:function(){var n;return((n=this.link)===null||n===void 0?void 0:n.includes("://"))&&this.link.indexOf(document.location.origin)!==0},enumerable:true,configurable:true});n.prototype.close=function(n){var e=this;var r=this.el.getBoundingClientRect().height;this.closingHeight=r;window.setTimeout((function(){e.handleClose&&e.handleClose(n);e.show=false}),350)};n.prototype.render=function(){var n=this;var e=this,t=e.show,i=e.closingHeight,o=e.classes,a=e.text,l=e.link,s=e.isExternalLink,c=e.noreferrer,b=e.handleClick;return t&&r("aside",{class:"banner "+o+" "+(i?"banner--closing":""),role:"complementary",ref:function(e){return n.el=e},style:{height:i?i+"px":"auto"}},l?r("a",{href:l,target:s?"_blank":"_self",rel:"noopener"+(c?" noreferrer":""),onClick:b,class:"banner__content"},r("slot",null,a)):b?r("button",{type:"button",onClick:b,class:"banner__content"},r("slot",null,a)):r("div",{class:"banner__content banner__content--static"},r("slot",null,a)),r("button",{type:"button",onClick:function(e){return n.close(e)},class:"banner__close"},r("d4l-icon-close",{classes:"icon--small"})))||r("div",{class:"banner__invisible-slot"},r("slot",null))};return n}());i.style=t}}}));