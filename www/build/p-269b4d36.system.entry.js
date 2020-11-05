System.register(["./p-7f8680f3.system.js"],(function(e){"use strict";var t,l;return{setters:[function(e){t=e.r;l=e.h}],execute:function(){var s=".select.sc-d4l-select{display:block;position:relative;margin:15px 0 0 0;width:100%;color:var(--c-primary);font-size:16px}.select__element.sc-d4l-select{font-family:inherit;font-size:inherit;cursor:pointer;width:100%;outline:none;border-radius:0;border:0;border-bottom:2px solid var(--c-gray-lighter);color:currentColor;padding:6px 24px 8px 0;background:none;-moz-appearance:none;-webkit-appearance:none}.select__element.sc-d4l-select:focus{border-bottom-color:var(--c-primary)}.select__element.sc-d4l-select:disabled{cursor:not-allowed;color:var(--c-gray-light);border-bottom-style:dotted}.select__label.sc-d4l-select{position:absolute;top:-15px;left:0;font-size:85%;color:var(--c-gray)}.select__icon.sc-d4l-select{position:absolute;right:0;top:-2px;padding:10px;pointer-events:none}";var o=e("d4l_select",function(){function e(e){t(this,e);this.selectId=null;this.classes="";this.label=null;this.options=[];this.selectedValue="";this.disabled=false;this.required=false}e.prototype.render=function(){var e=this,t=e.selectId,s=e.classes,o=e.label,r=e.options,n=e.selectedValue,c=e.disabled,i=e.required,a=e.handleChange;return l("div",{class:"select "+s},l("select",{id:t,class:"select__element",disabled:c,required:i,onChange:a},l("slot",{name:"select-option-default"}),!!r.length&&r.map((function(e){return l("option",{value:e.value,selected:n==e.value},e.text)})),l("slot",{name:"select-option"})),l("span",{class:"select__icon"},l("d4l-icon-arrow",{classes:"icon--extra-small"})),l("label",{class:"select__label",htmlFor:t},o,l("slot",{name:"select-required"})))};return e}());o.style=s}}}));