(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{j1ZV:function(t,e,n){"use strict";n.r(e),n.d(e,"ComponentsModule",function(){return Y});var o=n("ofXK"),c=n("tyNb"),i=n("L21D"),a=function(t){return t.Circular="Circular",t.Loading="Loading",t}({}),r=n("fXoL");function s(t,e){1&t&&r.Ib(0,"div",5)}function l(t,e){if(1&t&&(r.Mb(0,"span"),r.nc(1),r.Lb()),2&t){const t=e.$implicit;r.wb(1),r.oc(t)}}function d(t,e){if(1&t&&(r.Mb(0,"div",6),r.mc(1,l,2,1,"span",7),r.Lb()),2&t){const t=r.Vb(2);r.wb(1),r.bc("ngForOf",t.text.split(""))}}function p(t,e){if(1&t&&(r.Mb(0,"div",1),r.Kb(1,2),r.mc(2,s,1,0,"div",3),r.mc(3,d,2,1,"div",4),r.Jb(),r.Lb()),2&t){const t=r.Vb();r.wb(1),r.bc("ngSwitch",t.type),r.wb(1),r.bc("ngSwitchCase",t.loaderTypes.Circular)}}let b=(()=>{class t{constructor(){this.shown=!1,this.type=a.Circular,this.loaderTypes=a,this.text="Loading"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-loader"]],inputs:{shown:"shown",type:"type"},decls:1,vars:1,consts:[["class","loader",4,"ngIf"],[1,"loader"],[3,"ngSwitch"],["class","loader__circle",4,"ngSwitchCase"],["class","loader__text",4,"ngSwitchDefault"],[1,"loader__circle"],[1,"loader__text"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&r.mc(0,p,4,2,"div",0),2&t&&r.bc("ngIf",e.shown)},directives:[o.k,o.m,o.n,o.o,o.j],styles:[".loader[_ngcontent-%COMP%]{align-items:center;background-color:hsla(0,0%,100%,.6);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);display:flex;justify-content:center;height:100%;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}.loader__circle[_ngcontent-%COMP%]{animation:loader-spin 1.5s linear infinite;border-radius:50%;border:10px solid #eee;border-top-color:#007acc;height:80px;margin:auto;width:80px}.loader__text[_ngcontent-%COMP%]{font-size:2.8rem}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{animation:loader-scale .7s infinite alternate;display:inline-block;margin:0 -.05em}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){animation-delay:.1s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){animation-delay:.2s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){animation-delay:.3s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5){animation-delay:.4s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){animation-delay:.5s}.loader__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7){animation-delay:.6s}@keyframes loader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loader-scale{0%{transform:scale(1)}to{transform:scale(.8)}}"],changeDetection:0}),t})();n("S9hJ"),n("FUlN");var u=n("R0Ic");let g=(()=>{class t{constructor(){this.title="Default title",this.opened=!1}toggle(){this.opened=!this.opened}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-accordion-item"]],contentQueries:function(t,e,n){if(1&t&&r.Ab(n,r.K,!0),2&t){let t;r.fc(t=r.Ub())&&(e.template=t.first)}},inputs:{title:"title",opened:"opened"},decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),t})();function h(t,e){}function f(t,e){if(1&t&&(r.Mb(0,"div",9),r.mc(1,h,0,0,"ng-template",10),r.Lb()),2&t){const t=r.Vb().$implicit;r.bc("@toggle",void 0),r.wb(1),r.bc("ngTemplateOutlet",t.template)}}function _(t,e){if(1&t&&(r.Mb(0,"div",3),r.Mb(1,"div",4),r.Mb(2,"h4",5),r.nc(3),r.Lb(),r.Mb(4,"div",6),r.Tb("click",function(){return e.$implicit.toggle()}),r.Ib(5,"i",7),r.Lb(),r.Lb(),r.mc(6,f,2,2,"div",8),r.Lb()),2&t){const t=e.$implicit;r.wb(3),r.pc(" ",t.title," "),r.wb(1),r.zb("accordion__title-icon--opened",t.opened),r.wb(2),r.bc("ngIf",t.opened)}}function m(t,e){if(1&t&&(r.Mb(0,"div",1),r.mc(1,_,7,4,"div",2),r.Lb()),2&t){const t=r.Vb();r.wb(1),r.bc("ngForOf",t.items)}}const M={opacity:1,height:"*",marginTop:"15px"},v={opacity:0,height:0,marginTop:"0"};let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-accordion"]],contentQueries:function(t,e,n){if(1&t&&r.Ab(n,g,!1),2&t){let t;r.fc(t=r.Ub())&&(e.items=t)}},decls:1,vars:1,consts:[["class","accordion",4,"ngIf"],[1,"accordion"],["class","accordion__item",4,"ngFor","ngForOf"],[1,"accordion__item"],[1,"accordion__title"],[1,"accordion__title-text"],[1,"accordion__title-icon",3,"click"],[1,"fas","fa-chevron-down"],["class","accordion__content",4,"ngIf"],[1,"accordion__content"],[3,"ngTemplateOutlet"]],template:function(t,e){1&t&&r.mc(0,m,2,1,"div",0),2&t&&r.bc("ngIf",e.items.length)},directives:[o.k,o.j,o.p],styles:[".accordion[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}.accordion__item[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:10px 15px}.accordion__item[_ngcontent-%COMP%]:last-child{border:0}.accordion__title[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.accordion__title-icon[_ngcontent-%COMP%]{transition:.3s}.accordion__title-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007acc}.accordion__title-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#005c99}.accordion__title-icon--opened[_ngcontent-%COMP%]{transform:rotate(180deg)}.accordion__content[_ngcontent-%COMP%]{margin-top:15px;overflow:hidden}"],data:{animation:[Object(u.i)("toggle",[Object(u.h)(":leave",[Object(u.g)(M),Object(u.e)(250,Object(u.g)(v))]),Object(u.h)(":enter",[Object(u.g)(v),Object(u.e)(250,Object(u.g)(M))])])]},changeDetection:0}),t})();var x=n("3Pt+");let C=(()=>{class t{constructor(){this.value="",this._readonly=!1,this.cards=[{re:/^4[0-9]{12}(?:[0-9]{3})?$/,icon:"fab fa-cc-visa"},{re:/^5[1-5][0-9]{14}$/,icon:"fab fa-cc-mastercard"},{re:/^3[47][0-9]{13}$/,icon:"fab fa-cc-amex"},{re:/^6(?:011|5[0-9]{2})[0-9]{12}$/,icon:"fab fa-cc-discover"}]}set readonly(t){this._readonly=t,t&&this.formatCardNumber()}get readonly(){return this._readonly}get cardIcon(){let t="fas fa-credit-card";return this.cards.forEach(e=>{e.re.test(this.value)&&(t=e.icon)}),t}formatCardNumber(){const t=this.value.match(/[\s\S]{1,4}/g)||[];this.value=t.map((e,n)=>n===t.length-1?e:"xxxx").join("-")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-credit-card-input"]],inputs:{value:"value",readonly:"readonly"},decls:3,vars:4,consts:[[1,"credit-card"],[1,"credit-card__icon"],["maxlength","16","type","text",1,"credit-card__input",3,"readonly","ngModel","ngModelChange"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Ib(1,"i",1),r.Mb(2,"input",2),r.Tb("ngModelChange",function(t){return e.value=t}),r.Lb(),r.Lb()),2&t&&(r.wb(1),r.yb(e.cardIcon),r.wb(1),r.bc("readonly",e.readonly)("ngModel",e.value))},directives:[x.a,x.c,x.d,x.e],styles:[".credit-card[_ngcontent-%COMP%]{position:relative}.credit-card__icon[_ngcontent-%COMP%]{font-size:1.2rem;margin-left:5px;padding-left:5px;position:absolute;top:50%;transform:translateY(-50%)}.credit-card__input[_ngcontent-%COMP%]{font-size:1.05rem;padding:10px 0 10px 35px}"],changeDetection:0}),t})(),y=(()=>{class t{constructor(){this.url="https://github.com/TarasMoskovych/100-angular-challenges"}get href(){return"https://www.linkedin.com/sharing/share-offsite/?url="+this.url}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-linkedin-post"]],inputs:{url:"url"},decls:2,vars:1,consts:[["target","_blank",3,"href"],[1,"fab","fa-linkedin"]],template:function(t,e){1&t&&(r.Mb(0,"a",0),r.Ib(1,"i",1),r.Lb()),2&t&&r.bc("href",e.href,r.kc)},styles:["i[_ngcontent-%COMP%]{color:#0e76a8;font-size:1.8rem}i[_ngcontent-%COMP%]:hover{color:#0a5579}"],changeDetection:0}),t})();function O(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div",3),r.Tb("click",function(){return r.ic(t),r.Vb().closeModal()}),r.Lb()}2&t&&r.bc("@fade-overlay",void 0)}function L(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div",4),r.Mb(1,"div",5),r.Mb(2,"div",6),r.nc(3),r.Lb(),r.Mb(4,"div",7),r.Tb("click",function(){return r.ic(t),r.Vb().closeModal()}),r.Ib(5,"i",8),r.Lb(),r.Lb(),r.Mb(6,"div",9),r.Zb(7),r.Lb(),r.Ib(8,"hr",10),r.Mb(9,"div",11),r.Zb(10,1),r.Lb(),r.Lb()}if(2&t){const t=r.Vb();r.bc("@fade-modal",void 0),r.wb(3),r.pc(" ",t.title," ")}}const k=[[["","body",""]],[["","actions",""]]],P=["[body]","[actions]"],I=(t=200)=>[Object(u.h)(":leave",[Object(u.g)({opacity:1}),Object(u.e)(t,Object(u.g)({opacity:0}))]),Object(u.h)(":enter",[Object(u.g)({opacity:0}),Object(u.e)(t,Object(u.g)({opacity:1}))])];let T=(()=>{class t{constructor(t){this.cdr=t,this.title="Default modal title",this.opened=!1,this.open=new r.n,this.close=new r.n}closeModal(){this.toggle(!1)}openModal(){this.toggle(!0)}toggle(t){this.opened=t,this.cdr.markForCheck(),this[t?"open":"close"].emit()}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(r.h))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-modal"]],inputs:{title:"title",opened:"opened"},outputs:{open:"open",close:"close"},ngContentSelectors:P,decls:3,vars:2,consts:[[1,"modal"],["class","modal__overlay",3,"click",4,"ngIf"],["class","modal__wrapper",4,"ngIf"],[1,"modal__overlay",3,"click"],[1,"modal__wrapper"],[1,"modal__title"],[1,"modal__title-text"],[1,"modal__title-close-icon",3,"click"],[1,"fas","fa-times"],[1,"modal__content"],[1,"modal__divider"],[1,"modal__actions"]],template:function(t,e){1&t&&(r.ac(k),r.Mb(0,"div",0),r.mc(1,O,1,1,"div",1),r.mc(2,L,11,2,"div",2),r.Lb()),2&t&&(r.wb(1),r.bc("ngIf",e.opened),r.wb(1),r.bc("ngIf",e.opened))},directives:[o.k],styles:[".modal__overlay[_ngcontent-%COMP%]{background-color:hsla(0,0%,89.4%,.7);height:100%;top:0;z-index:1000}.modal__overlay[_ngcontent-%COMP%], .modal__wrapper[_ngcontent-%COMP%]{left:0;position:fixed;width:100%}.modal__wrapper[_ngcontent-%COMP%]{background:#fff;box-shadow:0 0 8px rgba(0,0,0,.3);display:block;margin:auto;max-width:428px;right:0;top:50%;transform:translateY(-50%);z-index:1001}.modal__title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal__title-text[_ngcontent-%COMP%]{color:#1e1e1e;font-size:1.6rem;font-weight:700;padding:20px 0 0 20px}.modal__title-close-icon[_ngcontent-%COMP%]{background-color:#1e1e1e;color:#fff;cursor:pointer;height:32px;position:relative;width:32px}.modal__title-close-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.modal__title-close-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#d9d9d9}.modal__content[_ngcontent-%COMP%]{padding:20px}.modal__divider[_ngcontent-%COMP%]{border:0;border-top:1px solid rgba(0,0,0,.1)}.modal__actions[_ngcontent-%COMP%]{padding:15px 20px}"],data:{animation:[Object(u.i)("fade-overlay",I()),Object(u.i)("fade-modal",I(250))]},changeDetection:0}),t})();const q=function(t){return{width:t}};let j=(()=>{class t{constructor(){this.value=0}ngOnChanges(){this.value=this.value+"%"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-progress-bar"]],inputs:{value:"value"},features:[r.ub],decls:4,vars:4,consts:[[1,"progress-bar"],[1,"progress-bar__value"],[1,"progress-bar__status",3,"ngStyle"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.nc(2),r.Lb(),r.Ib(3,"div",2),r.Lb()),2&t&&(r.wb(2),r.pc(" ",e.value," "),r.wb(1),r.bc("ngStyle",r.dc(2,q,e.value)))},directives:[o.l],styles:[".progress-bar[_ngcontent-%COMP%]{background-color:#ccc;border-radius:25px;color:#fff;height:20px;position:relative}.progress-bar__value[_ngcontent-%COMP%]{position:relative;text-align:center;z-index:1}.progress-bar__status[_ngcontent-%COMP%]{background-color:#007acc;border-radius:25px;height:20px;position:absolute;top:0;transition:.4s}"],changeDetection:0}),t})();function S(t,e){if(1&t&&(r.Mb(0,"div",7),r.nc(1),r.Lb()),2&t){const t=e.ngIf;r.wb(1),r.oc(t)}}const D=function(t,e){return{background:t,color:e}};function B(t,e){if(1&t&&(r.Mb(0,"blockquote",1),r.Mb(1,"div",2),r.Ib(2,"i",3),r.Mb(3,"span"),r.nc(4),r.Lb(),r.Lb(),r.Mb(5,"div",4),r.Mb(6,"div",5),r.nc(7),r.Lb(),r.mc(8,S,2,1,"div",6),r.Lb(),r.Lb()),2&t){const t=r.Vb();r.bc("ngStyle",r.ec(4,D,t.colors.background,t.colors.text)),r.wb(4),r.oc(t.quote.text),r.wb(3),r.oc(t.quote.author),r.wb(1),r.bc("ngIf",t.quote.occupation)}}let z=(()=>{class t{constructor(){this.colors={text:"#000",background:"#fff"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-quote"]],inputs:{colors:"colors",quote:"quote"},decls:1,vars:1,consts:[["class","quote",3,"ngStyle",4,"ngIf"],[1,"quote",3,"ngStyle"],[1,"quote__text"],[1,"fas","fa-quote-left"],[1,"quote__author"],[1,"quote__author-name"],["class","quote__author-occupation",4,"ngIf"],[1,"quote__author-occupation"]],template:function(t,e){1&t&&r.mc(0,B,9,7,"blockquote",0),2&t&&r.bc("ngIf",e.quote)},directives:[o.k,o.l],styles:[".quote[_ngcontent-%COMP%]{padding:15px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}.quote__text[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600}.quote__text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:8px}.quote__author[_ngcontent-%COMP%]{margin-top:15px;text-align:right}.quote__author-name[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.quote__author-occupation[_ngcontent-%COMP%]{font-size:.95rem;font-style:italic}"],changeDetection:0}),t})();var V=n("jhN1"),F=n("RuMB");let H=(()=>{class t extends F.a{onKeyUp(t){this.onEvent(t)}}return t.\u0275fac=function(e){return U(e||t)},t.\u0275dir=r.Cb({type:t,selectors:[["","appDebounceKeyup",""]],hostBindings:function(t,e){1&t&&r.Tb("keyup",function(t){return e.onKeyUp(t)})},features:[r.tb]}),t})();const U=r.Ob(H);function $(t,e){if(1&t&&r.Ib(0,"div",5),2&t){const t=r.Vb();r.bc("innerHtml",t.html,r.jc)}}let E=(()=>{class t{constructor(t){this.sanitizer=t,this.value=""}ngOnInit(){this.updateHtml(this.value)}onInput(t){this.updateHtml(t)}updateHtml(t){this.html=this.sanitizer.bypassSecurityTrustHtml(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(V.b))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-rich-text-viewer"]],inputs:{value:"value"},decls:5,vars:2,consts:[[1,"rich-text-viewer"],["appDebounceKeyup","","cols","30","rows","5",1,"rich-text-viewer__textarea",3,"value","debouncedEvent"],["textarea",""],[1,"rich-text-viewer__view"],[3,"innerHtml",4,"ngIf"],[3,"innerHtml"]],template:function(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div",0),r.Mb(1,"textarea",1,2),r.Tb("debouncedEvent",function(){r.ic(t);const n=r.gc(2);return e.onInput(n.value)}),r.Lb(),r.Mb(3,"div",3),r.mc(4,$,1,1,"div",4),r.Lb(),r.Lb()}2&t&&(r.wb(1),r.bc("value",e.value.trim()),r.wb(3),r.bc("ngIf",e.html))},directives:[H,o.k],styles:[".rich-text-viewer[_ngcontent-%COMP%]{display:flex;justify-content:center}.rich-text-viewer__textarea[_ngcontent-%COMP%], .rich-text-viewer__view[_ngcontent-%COMP%]{width:100%;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}.rich-text-viewer__textarea[_ngcontent-%COMP%]{border:0;height:auto;margin-right:5px;outline:none;padding:10px}.rich-text-viewer__view[_ngcontent-%COMP%]{margin-left:5px;max-height:500px;overflow:auto}"],changeDetection:0}),t})();function N(t,e){if(1&t&&(r.Kb(0),r.Ib(1,"i",1),r.Jb()),2&t){const t=e.$implicit,n=r.Vb();r.wb(1),r.bc("ngClass",n.getState(t))}}let A=(()=>{class t{constructor(){this.value=0,this.stars=5}get array(){return Array(Math.ceil(this.stars)).fill(void 0).map((t,e)=>e)}getState(t){const e=this.value/(t+1)>=1,n=this.value>t;return{fas:n,far:!n,"fa-star":e||!n,"fa-star-half-alt":!e&&n}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-star-ratings"]],inputs:{value:"value",stars:"stars"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(t,e){1&t&&r.mc(0,N,2,1,"ng-container",0),2&t&&r.bc("ngForOf",e.array)},directives:[o.j,o.i],styles:["i[_ngcontent-%COMP%]{color:#e5e510}"],changeDetection:0}),t})(),K=(()=>{class t{constructor(){this.checked=!1,this.check=new r.n,this.id="toggle-"+Date.now()}onChange(){this.checked=!this.checked,this.check.emit(this.checked)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-toggle"]],inputs:{checked:"checked"},outputs:{check:"check"},decls:4,vars:3,consts:[[1,"toggle"],["type","checkbox",3,"checked","id","change"],[3,"for"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Mb(1,"input",1),r.Tb("change",function(){return e.onChange()}),r.Lb(),r.Mb(2,"label",2),r.nc(3,"Toggle"),r.Lb(),r.Lb()),2&t&&(r.wb(1),r.bc("checked",e.checked)("id",e.id),r.wb(1),r.bc("for",e.id))},styles:['.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:0;position:absolute;visibility:hidden;width:0}.toggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background:#929293;border-radius:50px;cursor:pointer;display:block;height:25px;position:relative;text-indent:-9999px;width:50px}.toggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{background:#fff;border-radius:20px;content:"";height:15px;left:5px;position:absolute;top:5px;transition:.3s;width:15px}.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#007acc}.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{left:calc(100% - 5px);transform:translateX(-100%)}.toggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:active:after{width:20px}'],changeDetection:0}),t})(),R=(()=>{class t{constructor(t){this.titleService=t,this.href=window.location.href,this.hashTags=["JavaScript","TypeScript","Angular","100_angular_challenges"]}get twitterUrl(){return`${this.getBaseWithHashTagsAndRoute()}${encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`)}`}getBaseWithHashTagsAndRoute(){return`https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(this.hashTags.join(","))}&url=${this.href}&text=`}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(V.c))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-twitter-post"]],inputs:{href:"href",hashTags:"hashTags"},decls:2,vars:1,consts:[["target","_blank",3,"href"],[1,"fab","fa-twitter"]],template:function(t,e){1&t&&(r.Mb(0,"a",0),r.Ib(1,"i",1),r.Lb()),2&t&&r.bc("href",e.twitterUrl,r.kc)},styles:["i[_ngcontent-%COMP%]{color:#00acee;font-size:1.8rem}i[_ngcontent-%COMP%]:hover{color:#0087bb}"],changeDetection:0}),t})();const G=["exampleModal"];function J(t,e){if(1&t){const t=r.Nb();r.Mb(0,"p"),r.nc(1),r.Lb(),r.Mb(2,"button",15),r.Tb("click",function(){return r.ic(t),r.Vb(2).onUpdate()}),r.nc(3,"Click"),r.Lb()}if(2&t){const t=r.Vb(2);r.wb(1),r.pc("Counter ",t.value,"")}}function Q(t,e){1&t&&(r.Mb(0,"p"),r.nc(1,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem et officiis, exercitationem est vel? Iste expedita quas reiciendis doloribus. "),r.Lb())}function Z(t,e){1&t&&(r.Mb(0,"app-card",33),r.Mb(1,"app-accordion",4),r.Mb(2,"app-accordion-item",34),r.mc(3,J,4,1,"ng-template"),r.Lb(),r.Mb(4,"app-accordion-item",35),r.mc(5,Q,2,0,"ng-template"),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.wb(2),r.bc("opened",!0))}let W=(()=>{class t{constructor(){this.checked=!1,this.loader=!1,this.loaderType=a.Circular,this.value=0,this.quote={text:"Get Good. Get Great. Get Better.",author:"Dylan C. Israel",occupation:"Software Engineer, Mentor, Educator"},this.quoteColors={background:"#E4F4E8",text:"#628E6D"},this.richTextValue='\n    <div style="background: #E8ECF4; padding: 10px; color: #4060A0;">\n      <h2>Heading</h2>\n      <p style="margin-top: 10px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\n    </div>\n    <img style="max-width: 100%;" alt src="https://cdn-images-1.medium.com/max/1024/1*-zkpV1IfOv-1dux6ZqWBCQ.png">\n  '}onUpdate(){this.value=Math.ceil(100*Math.random())}onChangeLoader(){this.loaderType=a[this.loaderType===a.Circular?"Loading":"Circular"]}onToggleModal(t=!1){this.modal[t?"openModal":"closeModal"]()}onModalOpen(){console.log("opened")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-components"]],viewQuery:function(t,e){if(1&t&&r.qc(G,!0),2&t){let t;r.fc(t=r.Ub())&&(e.modal=t.first)}},decls:60,vars:11,consts:[[1,"wrapper"],["title","Accordion",3,"opened"],[1,"cards-wrapper"],["title","Card","subtitle","Components","icon","fas fa-info-circle"],["body",""],["footer",""],["title","Title","subtitle","Subtitle","color","#ff6058"],["title","Credit Card Input","subtitle","Components","color","#929293",1,"wrapper"],["value","4916338506082832"],["value","3529000000001234",3,"readonly"],["title","LinkedIn Post","subtitle","Components",1,"wrapper"],["title","Modal","subtitle","Components",1,"wrapper"],["body","","title","Modal Title",3,"open"],["exampleModal",""],["actions",""],[3,"click"],[1,"open-modal",3,"click"],[2,"position","relative"],["title","Loader","subtitle","Components","icon","fas fa-info-circle",1,"wrapper"],[3,"shown","type"],["footer","",1,"wrapper"],[2,"margin-right","5px",3,"click"],[1,"change-loader",3,"click"],["title","Progress Bar","subtitle","Components","color","#929293",1,"wrapper"],[3,"value"],["title","Quote","subtitle","Components",1,"wrapper"],["body","",3,"quote","colors"],["title","Rich Text Viewer","subtitle","Components",1,"wrapper"],["body","",3,"value"],["title","Star Ratings","subtitle","Components",1,"wrapper"],["title","Toggle","subtitle","Components",1,"wrapper"],["body","",3,"check"],["title","Twitter Post","subtitle","Components","color","#929293",1,"wrapper"],["title","Accordion","subtitle","Components","color","#929293"],["title","Title 1",3,"opened"],["title","Title 2"]],template:function(t,e){1&t&&(r.Mb(0,"app-accordion",0),r.Mb(1,"app-accordion-item",1),r.mc(2,Z,6,1,"ng-template"),r.Lb(),r.Lb(),r.Mb(3,"div",2),r.Mb(4,"app-card",3),r.Mb(5,"p",4),r.nc(6,"Body Content"),r.Lb(),r.Mb(7,"p",5),r.nc(8,"Footer Content"),r.Lb(),r.Lb(),r.Mb(9,"app-card",6),r.Mb(10,"p",4),r.nc(11,"Body Content"),r.Lb(),r.Mb(12,"p",5),r.nc(13,"Footer Content"),r.Lb(),r.Lb(),r.Lb(),r.Mb(14,"app-card",7),r.Mb(15,"div",4),r.Ib(16,"app-credit-card-input",8),r.Ib(17,"br"),r.Ib(18,"app-credit-card-input",9),r.Lb(),r.Lb(),r.Mb(19,"app-card",10),r.Ib(20,"app-linkedin-post",4),r.Lb(),r.Mb(21,"app-card",11),r.Mb(22,"div",4),r.Mb(23,"app-modal",12,13),r.Tb("open",function(){return e.onModalOpen()}),r.Mb(25,"p",4),r.nc(26,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati suscipit non dignissimos ratione ab voluptas et eum rem aliquid. "),r.Lb(),r.Mb(27,"div",14),r.Mb(28,"button",15),r.Tb("click",function(){return e.onToggleModal()}),r.nc(29,"OK"),r.Lb(),r.Lb(),r.Lb(),r.Mb(30,"button",16),r.Tb("click",function(){return e.onToggleModal(!0)}),r.nc(31,"Open Modal"),r.Lb(),r.Lb(),r.Lb(),r.Mb(32,"div",17),r.Mb(33,"app-card",18),r.Mb(34,"div",4),r.nc(35," Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum quibusdam iste tenetur, quos adipisci magnam, quaerat, aliquid eaque omnis maxime corporis sequi at eum consequatur. Blanditiis exercitationem magnam repellendus. "),r.Ib(36,"app-loader",19),r.Lb(),r.Lb(),r.Lb(),r.Mb(37,"div",20),r.Mb(38,"button",21),r.Tb("click",function(){return e.loader=!e.loader}),r.nc(39),r.Lb(),r.Mb(40,"button",22),r.Tb("click",function(){return e.onChangeLoader()}),r.nc(41,"Change loader"),r.Lb(),r.Lb(),r.Mb(42,"app-card",23),r.Kb(43,4),r.Ib(44,"app-progress-bar",24),r.Ib(45,"br"),r.Mb(46,"button",15),r.Tb("click",function(){return e.onUpdate()}),r.nc(47,"Update"),r.Lb(),r.Jb(),r.Lb(),r.Mb(48,"app-card",25),r.Ib(49,"app-quote",26),r.Lb(),r.Mb(50,"app-card",27),r.Ib(51,"app-rich-text-viewer",28),r.Lb(),r.Mb(52,"app-card",29),r.Ib(53,"app-star-ratings",28),r.Lb(),r.Mb(54,"app-card",30),r.Mb(55,"app-toggle",31),r.Tb("check",function(){return e.checked=!e.checked}),r.Lb(),r.Mb(56,"p",5),r.nc(57),r.Lb(),r.Lb(),r.Mb(58,"app-card",32),r.Ib(59,"app-twitter-post",4),r.Lb()),2&t&&(r.wb(1),r.bc("opened",!0),r.wb(17),r.bc("readonly",!0),r.wb(18),r.bc("shown",e.loader)("type",e.loaderType),r.wb(3),r.pc("",e.loader?"Hide":"Show"," loader"),r.wb(5),r.bc("value",e.value),r.wb(5),r.bc("quote",e.quote)("colors",e.quoteColors),r.wb(2),r.bc("value",e.richTextValue),r.wb(2),r.bc("value",3.5),r.wb(4),r.oc(e.checked?"Checked":"Not checked"))},directives:[w,g,i.a,C,y,T,b,j,z,E,A,K,R],styles:[".cards-wrapper[_ngcontent-%COMP%]{display:flex;padding:5px}.cards-wrapper[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}"],changeDetection:0}),t})();var X=n("PCNd");let Y=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[o.b,X.a,c.c.forChild([{path:"",component:W}])]]}),t})()}}]);