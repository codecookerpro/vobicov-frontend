import{r as i,h as n}from"./p-f64a55b6.js";const t=class{constructor(t){i(this,t),this.classes="",this.text="",this.headline="",this.textLink="",this.link="",this.centered=!1,this.hasLink=!1,this.getIconInfo=()=>n("div",{class:"notification-bar__icon"},n("d4l-icon-info",{classes:"icon--small icon--current-color"}))}componentWillLoad(){this.hasLink=!!this.text.length&&!!this.textLink.length}render(){const{classes:i,text:t,headline:o,textLink:e,link:r,hasLink:a,centered:c}=this;return n("aside",{class:`notification-bar ${i}`},!c&&this.getIconInfo(),n("div",{class:"notification-bar__content"},!!o.length&&n("div",{class:"notification-bar__headline"},c&&this.getIconInfo(),o),n("div",{class:"notification-bar__text"},t," ",a&&n("a",{class:"notification-bar__link",href:r,rel:"noopener noreferrer"},e))))}};t.style=".notification-bar{display:-ms-flexbox;display:flex;border-radius:var(--border-radius-medium, var(--border-radius-m));background-color:var(--c-primary-extra-lightest);color:var(--c-primary);font-size:1rem;padding:1.25em 1.5em}.notification-bar--slim{padding:0.875em}.notification-bar__icon{-ms-flex:none;flex:none;margin-right:1em}.notification-bar__headline{font-size:1em;font-weight:500}.notification-bar__text{-ms-flex:0 1 auto;flex:0 1 auto;overflow:hidden;font-size:0.875em}.notification-bar__link{text-decoration:none;font-weight:500;color:inherit}.notification-bar__link:hover{text-decoration:underline}.notification-bar--no-background-color{background-color:initial}.notification-bar--bgcolor-red{background-color:var(--c-error)}.notification-bar--color-gray{color:var(--c-gray)}.notification-bar--color-white{color:#fff}.notification-bar--centered{-ms-flex-pack:center;justify-content:center}.notification-bar--centered .notification-bar__icon{margin-right:0.5em}.notification-bar--centered .notification-bar__headline{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media (min-width: 768px){.notification-bar{-ms-flex-align:center;align-items:center}}";export{t as d4l_notification_bar}