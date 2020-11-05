var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{s(n.next(e))}catch(t){i(t)}}function u(e){try{s(n["throw"](e))}catch(t){i(t)}}function s(e){e.done?r(e.value):a(e.value).then(o,u)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(t){return s([e,t])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(u){o=[6,u];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,u=i.length;o<u;o++,a++)n[a]=i[o];return n};System.register(["./p-7f8680f3.system.js","./p-cc411d04.system.js","./p-6e40ec41.system.js","./p-49989aaa.system.js"],(function(e){"use strict";var t,r,n,a,i;return{setters:[function(e){t=e.r;r=e.h;n=e.c;a=e.g},function(){},function(){},function(e){i=e.a}],execute:function(){var o=".fieldset.sc-d4l-date-input{min-width:0;margin:0;padding:0;border:0}.fieldset.sc-d4l-date-input>legend.sc-d4l-date-input{padding:0}.fieldset__row.sc-d4l-date-input::after,.fieldset__item.sc-d4l-date-input::after{content:'';display:block;clear:both}.fieldset__item.sc-d4l-date-input{display:inline-block;margin-right:20px;margin-bottom:0;position:relative}.fieldset__item.sc-d4l-date-input label.sc-d4l-date-input{display:block}";var u=e("d4l_date_input",function(){function e(e){var a=this;t(this,e);this.classes="";this.label="Default label";this.fields={day:{label:"Day"},month:{label:"Month"},year:{label:"Year"}};this.order=["day","month","year"];this.errorMessage="Please enter a valid date";this.futureAllowed=true;this.pastAllowed=true;this.onFocus=function(e){var t=e.target.value;if(t){a.showErrorMessage(e.target)}};this.handleInput=function(){var e=a,t=e.order,r=e.host;a.errorAt=-1;r.querySelectorAll("input").forEach((function(e){return a.setErrorMessage(e,true)}));var n=__spreadArrays(Array.prototype.slice.call(r.querySelectorAll("input"))).map((function(e){return e.value===""?null:parseInt(e.value,10)}));var i=t.findIndex((function(e){return e==="year"}));var o=t.findIndex((function(e){return e==="month"}));var u=t.findIndex((function(e){return e==="day"}));var s=n[i];var l=n[o]!==null?n[o]-1:null;var d=n[u];if(a.validDay(d,u)&&a.validMonth(l,o)&&a.validYear(s,i)&&a.validDate(d,l,s,n)){a.dateChangeHandler(s+"-"+a.zeroPadded(l+1)+"-"+a.zeroPadded(d))}a.showErrorMessage(document.activeElement)};this.zeroPadded=function(e){return""+("0"+e).slice(-2)};this.inFuture=function(e){return e.setHours(0,0,0,0)>(new Date).setHours(0,0,0,0)};this.inPast=function(e){return e.setHours(0,0,0,0)<(new Date).setHours(0,0,0,0)};this.getPattern=function(e){return e==="year"?"[0-9]{4}":"[0-9]{0,2}"};this.getInput=function(e,t,n){return r("div",{class:"fieldset__item"},r("d4l-input",{id:e+"__"+n,classes:"input--small input--center",label:t.label,type:"text",pattern:a.getPattern(e),inputmode:"numeric",required:true,onInput:a.handleInput,error:a.errorAt===n||a.errorAt===-2,placeholder:t.placeholder,hiddenlabel:true,handleFocus:a.onFocus}))};this.dateChange=n(this,"dateChange",7)}e.prototype.dateChangeHandler=function(e){this.dateChange.emit({value:e})};e.prototype.validDate=function(e,t,r,n){var a=new Date(r,t,e);if(n.every((function(e){return e!==null}))){if(!(a&&a.getMonth()===t&&r&&r.toString().length===4&&a.getFullYear()===r)||!this.futureAllowed&&this.inFuture(a)||!this.pastAllowed&&this.inPast(a)){this.setErrorMessage(0,false,true);return false}return true}return false};e.prototype.validDay=function(e,t){if(e!==null&&e!==NaN){if(e.toString().length>2||e<1||e>31){this.setErrorMessage(t);return false}return true}return false};e.prototype.validMonth=function(e,t){if(e!==null&&e!==NaN){if(e.toString().length>2||e<0||e>11){this.setErrorMessage(t);return false}return true}return false};e.prototype.validYear=function(e,t){if(e!==null&&e!==NaN){if(e.toString().length!==4){this.setErrorMessage(t);return false}return true}return false};e.prototype.setErrorMessage=function(e,t,r){if(t===void 0){t=false}if(r===void 0){r=false}try{var n=typeof e==="number"?this.host.querySelectorAll("input")[e]:e;n.setCustomValidity(t?"":this.errorMessage);if(!t&&typeof e==="number"){this.errorAt=r?-2:e}}catch(a){}};e.prototype.showErrorMessage=function(e){try{e.reportValidity()}catch(t){}};e.prototype.render=function(){var e=this;var t=this,n=t.classes,a=t.label,i=t.fields,o=t.order;return r("div",{class:"date-input "+n},r("fieldset",{class:"fieldset"},a&&r("legend",{class:"fieldset__label"},a),r("div",{class:"fieldset__row"},o.map((function(t,r){return e.getInput(t,i[t],r)})))))};Object.defineProperty(e.prototype,"host",{get:function(){return a(this)},enumerable:true,configurable:true});return e}());u.style=o;var s=":host{display:block}";var l=e("ia_input_multiple_choice",function(){function e(e){t(this,e);this.checkedAnswers=[];this.updateFormData=n(this,"updateFormData",7)}e.prototype.changedLanguageHandler=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(r){t=e.detail;this.language=t;return[2]}))}))};e.prototype.updateFormDataHandler=function(e,t){this.updateFormData.emit({key:e,value:t})};e.prototype.onQuestionChange=function(){this.checkedAnswers=[]};e.prototype.componentDidLoad=function(){this.updateFormDataHandler(this.question.id,this.checkedAnswers)};e.prototype.componentDidUpdate=function(){this.updateFormDataHandler(this.question.id,this.checkedAnswers)};e.prototype.updateCheckedAnswers=function(e,t){if(e){this.checkedAnswers=__spreadArrays(Array.from(new Set(__spreadArrays(this.checkedAnswers,[t]))))}else{this.checkedAnswers=this.checkedAnswers.filter((function(e){return e!==t}))}this.updateFormDataHandler(this.question.id,this.checkedAnswers)};e.prototype.render=function(){var e=this;var t=this.question;var n=function(t,r){var n=t.type;var a=t.target;if(n==="click"&&r!==null){var i=document.querySelector("#"+r);e.updateCheckedAnswers(i.checked,i.value)}else{e.updateCheckedAnswers(a.checked,a.value)}};return r("span",null,t.options.map((function(a,o){return a.label!==""&&a.id!==""&&r("p",null,r("d4l-checkbox",{key:t.id,"checkbox-id":t.id+"-option"+o,name:t.id,checked:e.checkedAnswers.indexOf(a.id)>-1,label:i.t(a.label),value:o.toString(),handleChange:function(e){return n(e,null)},onClick:function(e){return n(e,t.id+"-option"+o)}}))})))};Object.defineProperty(e,"watchers",{get:function(){return{question:["onQuestionChange"]}},enumerable:true,configurable:true});return e}());l.style=s;var d=e("ia_input_postal_code",function(){function e(e){t(this,e);this.updateFormData=n(this,"updateFormData",7)}e.prototype.changedLanguageHandler=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(r){t=e.detail;this.language=t;return[2]}))}))};e.prototype.updateFormDataHandler=function(e,t){this.updateFormData.emit({key:e,value:t})};e.prototype.render=function(){var e=this;var t=this.question;var n=function(t){var r=t.target;e.updateFormDataHandler(e.question.id,r.value)};return r("span",null,r("d4l-input",{name:t.id,pattern:"(?!01000|99999)(0[1-9]\\d{3}|[1-9]\\d{4})",inputmode:"numeric",required:true,label:i.t("input_postal_code_label"),onInput:function(e){return n(e)}}))};return e}());var c=":host{display:block}";var h=e("ia_input_radio",function(){function e(e){t(this,e);this.updateFormData=n(this,"updateFormData",7)}e.prototype.changedLanguageHandler=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(r){t=e.detail;this.language=t;return[2]}))}))};e.prototype.updateFormDataHandler=function(e,t){this.updateFormData.emit({key:e,value:t})};e.prototype.render=function(){var e=this;var t=this,n=t.question,a=t.currentSelection;var o=function(t,r){var n=t.type;var a=t.target;if(n==="click"&&r!==null){var i=document.querySelector("#"+r);e.updateFormDataHandler(i.name,i.value)}else{e.updateFormDataHandler(a.name,a.value)}};return r("span",null,n.options.map((function(e,t){return e!==""&&r("p",null,r("d4l-radio",{"radio-id":n.id+"-option"+t,name:n.id,value:t.toString(),checked:a===t.toString(),required:true,label:i.t(e),handleChange:function(e){return o(e,null)},onClick:function(e){return o(e,n.id+"-option"+t)}}))})))};return e}());h.style=c}}}));