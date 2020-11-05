System.register(["./p-cc411d04.system.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.P}],execute:function(){var n=function(){function t(t,e,n){if(e===void 0){e=null}if(n===void 0){n=null}this.category=t;this.min=e;this.max=n}t.prototype.evaluate=function(t,e){var n=!!t[this.category];if(this.min!==null){if(!n){return false}if(t[this.category]<this.min){return false}}if(this.max!==null){if(n&&t[this.category]>this.max){return false}}return true};return t}();var o=function(){function t(t,e){this.questionID=t;this.acceptedAnswers=e}t.prototype.evaluate=function(t,e){var n=e[this.questionID];if(n){if(Array.isArray(n)){return false}if(n.split(".").length>1){return false}return this.acceptedAnswers.indexOf(n)>=0}return false};return t}();var i=function(){function t(t){this.condition=t}t.prototype.evaluate=function(t,e){return this.condition};return t}();var _=function(){function t(t){this.conditions=t}t.prototype.evaluate=function(t,e){for(var n=0,o=this.conditions;n<o.length;n++){var i=o[n];if(!i.evaluate(t,e)){return false}}return true};return t}();var r=function(){function t(t){this.conditions=t}t.prototype.evaluate=function(t,e){for(var n=0,o=this.conditions;n<o.length;n++){var i=o[n];if(i.evaluate(t,e)){return true}}return false};return t}();var a=t("C",{PERSONAL:"personalInfo",CONTACT:"contact",SYMPTOMS:"symptoms",SYMPTOMS_HIGH:"symptomsHigh",ILLNESS:"illnesses",MEDICATION:"medication"});var s=t("N","X");var p=t("a",{POSTAL_CODE:"V1",AGE:"P0",ABOVE_65:"P1",HOUSING:"P2",CARING:"P3",WORKSPACE:"P4",CONTACT_DATE:"CZ",OUT_OF_BREATH:"SB",SYMPTOM_DATE:"SZ",DATA_DONATION:"X1"});var c=t("X",["V","P","C","S","D","M"]);var u=t("Q",[{id:p.AGE,category:a.PERSONAL,text:"q_P0_text",inputType:"radio",options:["q_P0_option0","q_P0_option1","q_P0_option2","q_P0_option3","q_P0_option4","q_P0_option5"],nextQuestionMap:["P2","P2","P2","P1","P2","P2"]},{id:p.ABOVE_65,category:a.PERSONAL,text:"q_P1_text",inputType:"radio",options:["answer_yes","answer_no"]},{id:p.HOUSING,category:a.PERSONAL,text:"q_P2_text",inputType:"radio",options:["q_P2_option0","q_P2_option1"]},{id:p.CARING,category:a.PERSONAL,comment:"q_P3_comment",text:"q_P3_text",inputType:"radio",options:["answer_yes","answer_no"]},{id:p.WORKSPACE,category:a.PERSONAL,text:"q_P4_text",inputType:"radio",options:["q_P4_option0","q_P4_option1","q_P4_option2"]},{id:"P5",category:a.PERSONAL,text:"q_P5_text",inputType:"radio",options:["answer_yes","answer_no"]},{id:"P6",category:a.PERSONAL,text:"q_P6_text",inputType:"radio",options:["answer_yes","answer_no","answer_unknown"]},{id:"C0",category:a.CONTACT,comment:"q_C0_comment",text:"q_C0_text",inputType:"radio",options:["answer_yes","answer_no"],nextQuestionMap:["CZ","S0"],scoreMap:[1,0]},{id:p.CONTACT_DATE,category:a.CONTACT,text:"q_CZ_text",inputType:"date"},{id:"S0",category:a.SYMPTOMS_HIGH,comment:null,text:"q_S0_text",inputType:"radio",options:["answer_yes","answer_no"],nextQuestionMap:["S2","S1"],scoreMap:[1,0]},{id:"S1",category:a.SYMPTOMS_HIGH,comment:null,text:"q_S1_text",inputType:"radio",options:["answer_yes","answer_no"],nextQuestionMap:["S2","X0"],scoreMap:[1,0]},{id:"S2",category:a.SYMPTOMS_HIGH,comment:null,text:"q_S2_text",inputType:"radio",options:["","q_S2_option1","q_S2_option2","q_S2_option3","q_S2_option4","q_S2_option5","q_S2_option6","q_S2_option7"]},{id:"X0",category:a.SYMPTOMS_HIGH,text:"q_X0_text",comment:"q_X0_comment",inputType:"checkbox",options:[{label:"q_X0_option_S3",id:"S3"},{label:"q_X0_option_S5",id:"S5"},{label:"q_X0_option_SC",id:"SC"}],scoreMap:[1,1,1]},{id:"X2",category:a.SYMPTOMS,text:"q_X2_text",comment:"q_X2_comment",inputType:"checkbox",options:[{label:"q_X2_option_S4",id:"S4"},{label:"q_X2_option_S6",id:"S6"},{label:"q_X2_option_S7",id:"S7"},{label:"q_X2_option_S8",id:"S8"},{label:"q_X2_option_S9",id:"S9"},{label:"q_X2_option_SA",id:"SA"}],scoreMap:[1,1,1,1,1,1]},{id:p.OUT_OF_BREATH,category:a.SYMPTOMS,comment:"q_SB_comment",text:"q_SB_text",inputType:"radio",options:["answer_yes","answer_no"],scoreMap:[1,0]},{id:p.SYMPTOM_DATE,category:a.SYMPTOMS,text:"q_SZ_text",inputType:"date",guard:new r([new n(a.SYMPTOMS,1,null),new n(a.SYMPTOMS_HIGH,1,null)])},{id:"D0",category:a.ILLNESS,text:"q_D0_text",inputType:"radio",options:["answer_yes","answer_no","answer_unknown"],scoreMap:[1,0,0]},{id:"D1",category:a.ILLNESS,text:"q_D1_text",inputType:"radio",options:["answer_yes","answer_no","answer_unknown"],scoreMap:[1,0,0]},{id:"D2",category:a.ILLNESS,text:"q_D2_text",inputType:"radio",options:["answer_yes","answer_no","answer_unknown"],scoreMap:[1,0,0]},{id:"D3",category:a.ILLNESS,text:"q_D3_text",inputType:"radio",options:["answer_yes","answer_no","answer_unknown"],scoreMap:[1,0,0]},{id:"M0",category:a.MEDICATION,text:"q_M0_text",inputType:"radio",options:["answer_yes","answer_no","answer_unknown"],scoreMap:[1,0,0]},{id:"M1",category:a.MEDICATION,comment:"q_M1_comment",text:"q_M1_text",inputType:"radio",options:["answer_yes","answer_no","answer_unknown"],scoreMap:[1,0,0]},{id:"M2",category:a.MEDICATION,text:"q_M2_text",inputType:"radio",options:["answer_yes","answer_no"]},{id:p.DATA_DONATION,category:a.PERSONAL,comment:"q_X1_comment",text:"q_X1_text",options:["q_X1_option0","q_X1_option1"],inputType:"radio",guard:new i(e)},{id:p.POSTAL_CODE,category:a.PERSONAL,comment:"q_V1_comment",text:"q_V1_text",inputType:"postal",guard:new _([new i(e),new o("X1",["0"])])}])}}}));