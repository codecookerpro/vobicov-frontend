import{r,h as o,H as a}from"./p-f64a55b6.js";const d=class{constructor(o){r(this,o),this.classes="",this.open=!1,this.onExpandButtonClick=()=>{this.open=!this.open}}componentDidLoad(){this.headerBackgroundColor&&this.accordionElement.style.setProperty("--c-header-background",this.headerBackgroundColor),this.headerTextColor&&this.accordionElement.style.setProperty("--c-header-text",this.headerTextColor)}render(){const{classes:r,open:d,onExpandButtonClick:c,buttonProps:e}=this;return o(a,{class:`accordion ${r}`,role:"region",open:d,ref:r=>this.accordionElement=r},o("div",{class:`accordion__header ${d&&"accordion__header--no-bottom-border-radius"}`},o("button",Object.assign({"aria-expanded":d.toString(),onClick:()=>c()},e),o("slot",{name:"accordion-header"}),o("d4l-icon-arrow",{classes:`icon--medium icon--circle-light icon--animated-transform ${d&&"icon--rotate-180"}`,focusable:"false"}))),o("div",{class:"accordion__panel",hidden:!d},o("slot",{name:"accordion-panel"})))}};d.style=".sc-d4l-accordion-h{display:block;--c-header-background:var(--c-primary);--c-header-text:#fff}.accordion__header.sc-d4l-accordion{background-color:var(--c-header-background);color:var(--c-header-text);border-radius:var(--border-radius-small, var(--border-radius-s))}.accordion__header--no-bottom-border-radius.sc-d4l-accordion{border-bottom-left-radius:0;border-bottom-right-radius:0}.accordion__header.sc-d4l-accordion button.sc-d4l-accordion{border:0;background:transparent;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;padding:1em 0.75em;color:inherit}.accordion__panel.sc-d4l-accordion{border:1px solid var(--c-header-background);border-radius:0 0 var(--border-radius-small, var(--border-radius-s))\n    var(--border-radius-small, var(--border-radius-s));padding:0 0.5em}.accordion__panel[hidden='true'].sc-d4l-accordion{display:none}.accordion--no-panel-border.sc-d4l-accordion-h .accordion__panel.sc-d4l-accordion{border:0}.accordion--no-panel-padding.sc-d4l-accordion-h .accordion__panel.sc-d4l-accordion{padding:0}";export{d as d4l_accordion}