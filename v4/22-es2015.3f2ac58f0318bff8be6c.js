(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"581b":function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i("iELJ");class s extends n.d{}},Jin3:function(e,t,i){"use strict";i.d(t,"b",function(){return c}),i.d(t,"a",function(){return o.a});var n=i("1z/I"),s=i("UhP/"),a=i("iELJ"),o=i("LIpw"),r=i("8Y7J");let c=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},providers:[o.a],imports:[[n.g,a.e,s.i]]}),e})();i("581b"),i("o62C"),i("k1Z1")},LIpw:function(e,t,i){"use strict";i.d(t,"a",function(){return O});var n=i("8Y7J"),s=i("1O3W"),a=i("1z/I"),o=i("iELJ"),r=i("UhP/"),c=i("SVse"),l=i("GS7A");const h={sideSheetContainer:Object(l.n)("sideSheetContainer",[Object(l.k)("void, exit",Object(l.l)({transform:"translateX(100%)"})),Object(l.k)("enter",Object(l.l)({transform:"translateX(0%)",opacity:1})),Object(l.m)("* => enter",Object(l.e)(`${r.b.ENTERING} ${r.a.ACCELERATION_CURVE}`,Object(l.l)({transform:"translateX(0)",opacity:1}))),Object(l.m)("* => void, * => exit",Object(l.e)(`${r.b.EXITING} ${r.a.ACCELERATION_CURVE}`,Object(l.l)({transform:"translateX(100%)"})))])};var d=i("581b"),u=i("YEUz");function p(e,t){}function f(){let e="undefined"!=typeof document&&document?document.activeElement:null;for(;e&&e.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}let _=(()=>{class e extends a.a{constructor(e,t,i,s,a,o){super(),this._elementRef=e,this._focusTrapFactory=t,this._changeDetectorRef=i,this._config=a,this._focusMonitor=o,this._animationStateChanged=new n.o,this._elementFocusedBeforeSideSheetWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=e=>this._portalOutlet.attachDomPortal(e),this._ariaLabelledBy=a.ariaLabelledBy||null,this._document=s}_initializeWithAttachedContent(){this._setupFocusTrap(),this._capturePreviouslyFocusedElement()}attachComponentPortal(e){return this._portalOutlet.attachComponentPortal(e)}attachTemplatePortal(e){return this._portalOutlet.attachTemplatePortal(e)}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_trapFocus(){const e=this._elementRef.nativeElement;this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusSideSheetContainer()}):this._containsFocus()||e.focus()}_restoreFocus(){const e=this._elementFocusedBeforeSideSheetWasOpened;if(this._config.restoreFocus&&e&&"function"==typeof e.focus){const t=f(),i=this._elementRef.nativeElement;t&&t!==this._document.body&&t!==i&&!i.contains(t)||(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_setupFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)}_capturePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeSideSheetWasOpened=f())}_focusSideSheetContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=f();return e===t||e.contains(t)}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.l),n.Nb(u.i),n.Nb(n.h),n.Nb(c.d,8),n.Nb(d.a),n.Nb(u.h))},e.\u0275dir=n.Ib({type:e,viewQuery:function(e,t){if(1&e&&n.Hc(a.c,!0),2&e){let e;n.yc(e=n.cc())&&(t._portalOutlet=e.first)}},features:[n.yb]}),e})(),m=(()=>{class e extends _{constructor(){super(...arguments),this._state="enter"}_onAnimationDone({toState:e,totalTime:t}){"enter"===e?(this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})):"exit"===e&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:t}))}_onAnimationStart({toState:e,totalTime:t}){"enter"===e?this._animationStateChanged.next({state:"opening",totalTime:t}):"exit"!==e&&"void"!==e||this._animationStateChanged.next({state:"closing",totalTime:t})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}}return e.\u0275fac=function(t){return b(t||e)},e.\u0275cmp=n.Hb({type:e,selectors:[["td-side-sheet-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"td-side-sheet-container"],hostVars:6,hostBindings:function(e,t){1&e&&n.Jc("@sideSheetContainer.start",function(e){return t._onAnimationStart(e)})("@sideSheetContainer.done",function(e){return t._onAnimationDone(e)}),2&e&&(n.Wb("id",t._id),n.Cb("role",t._config.role)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null),n.Kc("@sideSheetContainer",t._state))},features:[n.yb],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&n.Lc(0,p,0,0,"ng-template",0)},directives:[a.c],styles:[".td-side-sheet-container{background-color:#fff;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);display:block;padding:24px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.td-side-sheet-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.td-side-sheet-content{margin:0 -24px;padding:0 24px;overflow:auto;-ms-flex:1;flex:1;-webkit-overflow-scrolling:touch}.td-side-sheet-title{margin:-16px 0 20px}.td-side-sheet-actions,.td-side-sheet-title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.td-side-sheet-actions{padding:8px 0;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;box-sizing:content-box;margin:0 -16px -24px}.td-side-sheet-actions[align=end]{-ms-flex-pack:end;justify-content:flex-end}.td-side-sheet-actions[align=center]{-ms-flex-pack:center;justify-content:center}.td-side-sheet-actions .mat-button-base+.mat-button-base,.td-side-sheet-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .td-side-sheet-actions .mat-button-base+.mat-button-base,[dir=rtl] .td-side-sheet-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[h.sideSheetContainer]}}),e})();const b=n.Vb(m);var S=i("XNiG"),g=i("LRne"),v=i("pLZG"),C=i("IzEk"),y=i("9gLZ"),x=i("k1Z1");let w=(()=>{class e{constructor(e,t,i,n,s,a,o){this._overlay=e,this._injector=t,this._defaultOptions=i,this._parentSideSheet=n,this._sideSheetRefConstructor=s,this._sideSheetContainerType=a,this._sideSheetDataToken=o,this._openSideSheetsAtThisLevel=[],this._afterAllClosedAtThisLevel=new S.a,this._afterOpenedAtThisLevel=new S.a,this.defaultSidebarConfig={minWidth:"400px",maxWidth:"100vw"}}get openSideSheets(){return this._parentSideSheet?this._parentSideSheet.openSideSheets:this._openSideSheetsAtThisLevel}open(e,t){t=Object.assign(Object.assign(Object.assign({},this._defaultOptions||new d.a),this.defaultSidebarConfig),t);const i=this._createOverlay(t),n=this._attachSideSheetContainer(i,t),s=this._attachSideSheetContent(e,n,i,t),a=this.openSideSheets.slice(-1)[0],o=null==a?void 0:a.overlayRef;return(null==o?void 0:o.overlayElement)&&(o.overlayElement.style.transition=`${r.b.COMPLEX} ${r.a.DECELERATION_CURVE}`,o.overlayElement.style.minWidth=window.innerWidth+"px"),s._containerInstance._animationStateChanged.pipe(Object(v.a)(e=>"closing"===e.state&&!(!a||!o)),Object(C.a)(1)).subscribe(()=>{o.overlayElement.style.transition=`${r.b.EXITING} ${r.a.DECELERATION_CURVE}`,a.updateSize()}),this.openSideSheets.push(s),s.afterClosed().pipe(Object(C.a)(1)).subscribe(()=>this._removeOpenSideSheet(s)),n._initializeWithAttachedContent(),s}ngOnDestroy(){this._closeSideSheets(this._openSideSheetsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._animationStateSubscriptions&&this._animationStateSubscriptions.unsubscribe()}closeAll(){this._closeSideSheets(this.openSideSheets)}_createOverlay(e){const t=new s.d({positionStrategy:this._overlay.position().global(),scrollStrategy:this._overlay.scrollStrategies.block(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth}),i=this._overlay.create(t);return i.getConfig().positionStrategy.right("0px"),i}_attachSideSheetContainer(e,t){const i=n.t.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:d.a,useValue:t}]}),s=new a.d(this._sideSheetContainerType,t.viewContainerRef,i,t.componentFactoryResolver);return e.attach(s).instance}_attachSideSheetContent(e,t,i,s){const o=new this._sideSheetRefConstructor(i,t,s.id);if(e instanceof n.N)t.attachTemplatePortal(new a.h(e,null,{$implicit:s.data,sideSheetRef:o}));else{const i=this._createInjector(s,o,t),n=t.attach(new a.d(e,s.viewContainerRef,i));o.componentInstance=n.instance}return o.updateSize(s.width,s.height),o}_createInjector(e,t,i){const s=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=[{provide:this._sideSheetContainerType,useValue:i},{provide:this._sideSheetDataToken,useValue:e.data},{provide:this._sideSheetRefConstructor,useValue:t}];return!e.direction||s&&s.get(y.c,null,n.r.Optional)||a.push({provide:y.c,useValue:{value:e.direction,change:Object(g.a)()}}),n.t.create({parent:s||this._injector,providers:a})}_removeOpenSideSheet(e){const t=this.openSideSheets.indexOf(e);t>-1&&this.openSideSheets.splice(t,1)}_closeSideSheets(e){let t=e.length;for(;t--;)e[t].close()}}return e.\u0275fac=function(e){n.ac()},e.\u0275dir=n.Ib({type:e}),e})(),O=(()=>{class e extends w{constructor(e,t,i,n){super(e,t,i,n,x.a,m,o.a)}}return e.\u0275fac=function(t){return new(t||e)(n.Xb(s.c),n.Xb(n.t),n.Xb(o.b,8),n.Xb(e,12))},e.\u0275prov=n.Jb({token:e,factory:e.\u0275fac}),e})()},k1Z1:function(e,t,i){"use strict";i.d(t,"a",function(){return a}),i.d(t,"b",function(){return o});var n=i("iELJ");let s=0;class a extends n.f{constructor(e,t,i="td-side-sheet-"+s++){super(e,t,i),this.overlayRef=e,this._containerInstance=t,this.id=i}}function o(e,t,i){return void 0!==e._containerInstance&&(e._containerInstance._closeInteractionType=t),e.close(i)}},o62C:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("LIpw"),s=i("k1Z1"),a=i("8Y7J");let o=(()=>{class e{constructor(e,t,i){this.dialogRef=e,this._elementRef=t,this._dialog=i,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=function(e,t){let i=e.nativeElement.parentElement;for(;i&&!i.classList.contains("td-side-sheet-container");)i=i.parentElement;return i?t.find(e=>e.id===i.id):null}(this._elementRef,this._dialog.openSideSheets))}ngOnChanges(e){const t=e._CovalentSideSheetClose||e._CovalentSideSheetCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Object(s.b)(this.dialogRef,0===e.screenX&&0===e.screenY?"keyboard":"mouse",this.dialogResult)}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(s.a,8),a.Nb(a.l),a.Nb(n.a))},e.\u0275dir=a.Ib({type:e,selectors:[["","td-side-sheet-close",""],["","CovalentSideSheetClose",""]],hostVars:2,hostBindings:function(e,t){1&e&&a.bc("click",function(e){return t._onButtonClick(e)}),2&e&&a.Cb("aria-label",t.ariaLabel||null)("type",t.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["td-side-sheet-close","dialogResult"],_CovalentSideSheetClose:["CovalentSideSheetClose","_CovalentSideSheetClose"]},exportAs:["CovalentSideSheetClose"],features:[a.zb]}),e})()}}]);