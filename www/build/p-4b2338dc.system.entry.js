System.register(["./p-7f8680f3.system.js","./p-cc411d04.system.js","./p-6e40ec41.system.js","./p-49989aaa.system.js","./p-6c45f801.system.js","./p-d722e1ca.system.js","./p-358c43b4.system.js","./p-7601a917.system.js","./p-2dd1f1c5.system.js"],(function(e){"use strict";var t,r,s,a,n,i,o,l,u,c,p,g,m,d;return{setters:[function(e){t=e.h;r=e.r;s=e.c},function(e){a=e.W;n=e.e},function(){},function(e){i=e.a},function(e){o=e.R;l=e.L;u=e.T;c=e.M},function(e){p=e.d},function(){},function(e){g=e.C;m=e.a},function(e){d=e.v}],execute:function(){var v=function(){var e=(new Date).getFullYear();var t=(new Date).getMonth()+1;var r=(new Date).getDate();var s=e+"-"+f(t)+"-"+f(r);var a=new Date(s);return a.getTime()};var f=function(e){return("0"+e).slice(-2)};var _=function(e){var r=e.livingSituation,s=e.workspace,a=e.caringForRelatives;return t("div",{class:"summary__risk-spreading"},t("h3",null,i.t("risk_spreading_headline")),!r&&t("div",{"data-test":"riskLivingAlone"},t("h4",null,i.t("risk_spreading_living_alone_headline")),t("div",{innerHTML:i.t("risk_spreading_living_alone")})),r===1&&t("div",{"data-test":"riskLivingTogether"},t("h4",null,i.t("risk_spreading_living_together_headline")),t("div",{innerHTML:i.t("risk_spreading_living_together")})),!s&&t("div",{"data-test":"riskMedicalWorkspace"},t("h4",null,i.t("risk_spreading_workspace_medical_headline")),t("div",{innerHTML:i.t("risk_spreading_workspace_medical")})),a&&t("div",{"data-test":"riskCaringForRelatives"},t("h4",null,i.t("risk_spreading_caring_for_relatives_headline")),t("div",{innerHTML:i.t("risk_spreading_caring_for_relatives")})),t("div",{"data-test":"riskGeneralNotes"},t("h4",null,i.t("risk_spreading_paragraphs_headline")),t("div",{innerHTML:i.t("risk_spreading_paragraphs")})))};var h=function(e){var r=e.ageAboveSixtyFive;return t("div",{class:"summary__risk-very-ill"},t("d4l-alert",{type:"error"},!r&&t("div",{innerHTML:i.t("risk_very_ill_below_sixty_five"),"data-test":"riskBelow65"}),r&&t("div",{innerHTML:i.t("risk_very_ill_above_sixty_five"),"data-test":"riskAbove65"})))};var y=".summary>*>*{margin:1em 0}.summary h2{font-size:1.625rem;text-align:center;font-weight:500;margin-top:2rem;margin-bottom:1.5rem;color:var(--c-primary)}.summary h3{font-size:1.25rem;font-weight:500;margin-top:2.5rem;margin-bottom:1.5rem;color:var(--c-primary)}.summary h4{font-weight:500;margin-bottom:0.5rem;color:var(--c-gray)}.summary__risk-very-ill{margin-bottom:2.5rem}.summary__footer{margin-bottom:2rem}";var w=e("ia_summary",function(){function e(e){var t=this;r(this,e);this.answers={};this.scores={};this.resultCase=5;this.snippetsAnswers={outOfBreath:false,ageAboveSixtyFive:false,livingSituation:0,workspace:0,caringForRelatives:false};this.resetFormAndStartAgain=function(){d.reset();t.history.push(o.QUESTIONNAIRE,{})};this.setResultCase=function(){var e=t.scores;var r=e[g.SYMPTOMS]>0||e[g.SYMPTOMS_HIGH]>0;var s=e[g.SYMPTOMS_HIGH]>0;if(e[g.CONTACT]>0){if(r){if(t.symptomsWithinTwoWeeksOfContact){t.resultCase=1}else if(s){t.resultCase=2}else{t.resultCase=4}}else{if(t.contactWithinTwoWeeks){t.resultCase=3}else{t.resultCase=5}}}else{if(r){if(s){t.resultCase=2}else{t.resultCase=4}}else{t.resultCase=5}}};this.setSnippetState=function(){if(t.answers){t.snippetsAnswers.outOfBreath=parseInt(t.answers[m.OUT_OF_BREATH],10)===0;t.snippetsAnswers.ageAboveSixtyFive=parseInt(t.answers[m.AGE],10)>3||parseInt(t.answers[m.ABOVE_65],10)===0;t.snippetsAnswers.livingSituation=parseInt(t.answers[m.HOUSING],10);t.snippetsAnswers.workspace=parseInt(t.answers[m.WORKSPACE],10);t.snippetsAnswers.caringForRelatives=parseInt(t.answers[m.CARING],10)===0}};this.componentWillLoad=function(){t.showLogoHeader.emit({show:false});if(!d.match()){t.resetFormAndStartAgain();return}var e=JSON.parse(localStorage.getItem(l.ANSWERS));t.answers=e?e:{};var r=JSON.parse(localStorage.getItem(l.SCORES));t.scores=r?r:{};t.setResultCase();t.setSnippetState();localStorage.setItem(l.COMPLETED,"true")};this.showLogoHeader=s(this,"showLogoHeader",7)}e.prototype.changedLanguageHandler=function(e){this.language=e.detail.code};e.prototype.handlePopStateChange=function(){var e=Object.keys(this.answers);delete this.answers[e[e.length-1]];localStorage.setItem(l.ANSWERS,JSON.stringify(this.answers));localStorage.setItem(l.COMPLETED,"false")};Object.defineProperty(e.prototype,"currentLanguage",{get:function(){return this.language||"en"},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"symptomsWithinTwoWeeksOfContact",{get:function(){var e=this.answers[m.CONTACT_DATE];var t=this.answers[m.SYMPTOM_DATE];if(e&&t){var r=new Date(e.split(".").join("-")).getTime();var s=new Date(t.split(".").join("-")).getTime();return s-r<=u}return false},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"contactWithinTwoWeeks",{get:function(){var e=this.answers[m.CONTACT_DATE];if(e){var t=new Date(e.split(".").join("-")).getTime();var r=v();return r>=t?r-t<=u:false}return false},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"isFromData4Life",{get:function(){var e=localStorage.getItem(l.SOURCE);return e?a.includes(e)||!!c[e]:false},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"completedExport",{get:function(){return localStorage.getItem(l.EXPORTED)==="true"},enumerable:true,configurable:true});e.prototype.render=function(){var e=this,r=e.resetFormAndStartAgain,s=e.answers,a=e.resultCase,o=e.snippetsAnswers,l=e.isFromData4Life,u=e.completedExport;return t("div",{class:"c-card-wrapper summary"},t("d4l-card",{classes:"card--desktop"},t("div",{class:"summary__content",slot:"card-content"},t("h2",null,i.t("summary_headline")),[1,2,4].indexOf(a)>-1&&t("span",null,o.outOfBreath&&t(h,{ageAboveSixtyFive:o.ageAboveSixtyFive})),t("ia-recommendation",{resultCase:a}),a!==5&&t(_,{livingSituation:o.livingSituation,workspace:o.workspace,caringForRelatives:o.caringForRelatives}))),!u&&p&&n&&t("ia-data4life",{long:!l}),t("d4l-card",{classes:"card--desktop summary__content"},t("div",{slot:"card-content"},t("ia-qr-code",{answers:s,resultCase:a})),t("div",{class:"summary__footer",slot:"card-footer"},t("h3",null,i.t("summary_reset_headline")),t("d4l-button",{type:"button",classes:"button--block button--secondary ","data-test":"continueButton",text:i.t("summary_reset_button"),handleClick:function(){r()}}))))};return e}());w.style=y}}}));