System.register(["./p-7f8680f3.system.js"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.r;i=t.h}],execute:function(){var n="@-webkit-keyframes slider_knob_pristine{0%{opacity:0;left:10%}25%{opacity:1}50%{opacity:0;left:90%}75%{opacity:1}100%{opacity:0;left:10%}}@keyframes slider_knob_pristine{0%{opacity:0;left:10%}25%{opacity:1}50%{opacity:0;left:90%}75%{opacity:1}100%{opacity:0;left:10%}}.slider-input.sc-d4l-slider-input{display:block;height:20px;padding:0 10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.slider-input--scale.sc-d4l-slider-input{margin-bottom:32px}.slider-input__inner.sc-d4l-slider-input{position:relative;height:100%}.slider-input__inner.sc-d4l-slider-input::before{content:'';display:block;position:absolute;height:2px;left:0;width:100%;top:50%;margin-top:-1px;background:var(--c-navy-blue--darken);z-index:0}.slider-input__knob.sc-d4l-slider-input{position:relative;display:block;width:20px;height:20px;border-radius:50%;margin-left:-10px;cursor:pointer;background:var(--c-navy-blue);-webkit-transition:left 0.15s ease-out;transition:left 0.15s ease-out;will-change:left, opacity;z-index:2}.slider-input__knob.sc-d4l-slider-input::before,.slider-input__knob.sc-d4l-slider-input::after{content:'';position:absolute;display:block;border:1px solid transparent;border-radius:50%;pointer-events:none;background-color:transparent;-webkit-transition:border-color 0.1s linear, background-color 0.1s linear;transition:border-color 0.1s linear, background-color 0.1s linear}.slider-input__knob.sc-d4l-slider-input::before{width:16px;height:16px;left:2px;top:2px}.slider-input__knob.sc-d4l-slider-input::after{width:6px;height:6px;left:7px;top:7px}.slider-input__knob.sc-d4l-slider-input:hover::before,.slider-input--focused.sc-d4l-slider-input .slider-input__knob.sc-d4l-slider-input::before,.slider-input__knob--dragging.sc-d4l-slider-input::before{border-color:#fff}.slider-input__knob--dragging.sc-d4l-slider-input::after{background-color:#fff}.slider-input__knob--pristine.sc-d4l-slider-input{-webkit-animation:slider_knob_pristine 8s ease-in-out infinite;animation:slider_knob_pristine 8s ease-in-out infinite}.slider-input__input.sc-d4l-slider-input{top:0;position:absolute;opacity:0;pointer-events:none}.slider-input__scale.sc-d4l-slider-input{position:absolute;height:10px;left:0;width:100%;top:50%;padding:0;margin:-5px 0 0;overflow:visible;z-index:1}.slider-input__scale-marker.sc-d4l-slider-input{position:absolute;display:block;width:2px;height:100%;margin-left:-1px;background:var(--c-navy-blue--darken)}.slider-input__scale-value.sc-d4l-slider-input{position:absolute;display:block;font-size:10px;margin-top:1rem;top:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:var(--c-scorpion)}";var r=1;var s=t("d4l_slider_input",function(){function t(t){e(this,t);this.step=1;this.scale=false;this.focused=false;this.dragging=false;this.startDrag=this.startDrag.bind(this);this.drag=this.drag.bind(this);this.endDrag=this.endDrag.bind(this);this.point=this.point.bind(this);this.onInputChange=this.onInputChange.bind(this)}Object.defineProperty(t.prototype,"steps",{get:function(){var t=this,e=t.min,i=t.max,n=t.step;return parseInt(((i-e)/n).toFixed(0))+1},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"values",{get:function(){var t=this,e=t.min,i=t.step,n=t.steps;return new Array(n).fill(null).map((function(t,n){return parseFloat((n*i+e).toFixed(r))}))},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"scaleEl",{get:function(){var t=this,e=t.scale,n=t.values;if(!e){return null}var r=n.length;return i("legend",{class:"slider-input__scale"},n.map((function(t,e){return i("div",null,i("span",{class:"slider-input__scale-marker",key:e,style:{left:e/(r-1)*100+"%"}}),i("span",{class:"slider-input__scale-value",style:{left:e/(r-1)*100+"%"}},t))})))},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"knobPosition",{get:function(){var t=this.values.indexOf(this.inputValue);if(t===-1){return null}return t/(this.steps-1)*100+"%"},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"inputStartingValue",{get:function(){return String(this.values.slice(0,2).slice(-1).pop())},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"isPristine",{get:function(){return!this.values.includes(this.inputValue)},enumerable:true,configurable:true});t.prototype.getX=function(t){var e="changedTouches"in t?t.changedTouches[0]:t;var i=(e||{}).clientX;return i};t.prototype.startDrag=function(t){t.stopPropagation();t.preventDefault();var e=this.sliderInnerEl.getBoundingClientRect(),i=e.left,n=e.right;this.xStepWidth=(n-i)/(this.steps-1);this.xStart=i;document.addEventListener("mouseup",this.endDrag);document.addEventListener("touchend",this.endDrag);document.addEventListener("mousemove",this.drag);document.addEventListener("touchmove",this.drag);this.dragging=true};t.prototype.drag=function(t){t.preventDefault();var e=this,i=e.xStart,n=e.xStepWidth,r=e.steps;var s=this.getX(t);var o=Math.min(Math.max(Math.round((s-i)/n),0),r-1);var a=this.values[o];if(a===this.inputValue){return}this.inputValue=this.values[o];this.sliderInputEl.value=String(this.inputValue);this.sliderInputEl.dispatchEvent(new Event("change"))};t.prototype.endDrag=function(t){var e=this;t.preventDefault();document.removeEventListener("mouseup",this.endDrag);document.removeEventListener("touchend",this.endDrag);document.removeEventListener("mousemove",this.drag);document.removeEventListener("touchmove",this.drag);this.dragging=false;setTimeout((function(){return e.sliderInputEl.blur()}),0)};t.prototype.point=function(t){this.startDrag(t);this.drag(t)};t.prototype.onInputChange=function(t){var e=t.target;var i=parseFloat(e.value);this.inputValue!==i&&(this.inputValue=i);this.handleChange&&this.handleChange(Object.assign(Object.assign({},t),{target:Object.assign(Object.assign({},e),{value:i})}))};t.prototype.componentWillLoad=function(){this.min=parseFloat(this.min.toFixed(r));this.max=parseFloat(this.max.toFixed(r));this.step=parseFloat(this.step.toFixed(r));var t=this,e=t.min,i=t.max,n=t.step,s=t.value;if(!!(parseFloat(((i-e)*10).toFixed(r))%(n*10))){throw new Error("slider-input error: range of min "+e+" and max "+i+" is not divisible by step "+n)}this.inputValue=s};t.prototype.render=function(){var t=this;var e=this,n=e.min,r=e.max,s=e.step,o=e.steps,a=e.scale,l=e.scaleEl,u=e.dragging,p=e.isPristine,d=e.knobPosition,c=e.inputStartingValue,h=e.inputValue,g=e.focused;return i("label",{class:{"slider-input":true,"slider-input--focused":g,"slider-input--scale":a},style:{minWidth:o*20+"px"}},i("div",{class:"slider-input__inner",ref:function(e){return t.sliderInnerEl=e},onMouseDown:this.point,onTouchStart:this.point},l,i("span",{class:{"slider-input__knob":true,"slider-input__knob--dragging":u,"slider-input__knob--pristine":p},onMouseDown:this.startDrag,onTouchStart:this.startDrag,style:{left:d}}),i("input",{ref:function(e){return t.sliderInputEl=e},class:"slider-input__input",type:"range",min:n,max:r,step:s,value:p?c:h,onChange:this.onInputChange,onFocus:function(){return t.focused=true},onBlur:function(){return t.focused=false}})))};return t}());s.style=n}}}));