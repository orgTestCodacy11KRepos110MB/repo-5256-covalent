!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"581b":function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){i(a,e);var t=o(a);function a(){return n(this,a),t.apply(this,arguments)}return a}(a("iELJ").d)},Jin3:function(e,t,i){"use strict";i.d(t,"b",function(){return u}),i.d(t,"a",function(){return c.a});var a,o=i("1z/I"),r=i("UhP/"),s=i("iELJ"),c=i("LIpw"),l=i("8Y7J"),u=((a=function e(){n(this,e)}).\u0275mod=l.Lb({type:a}),a.\u0275inj=l.Kb({factory:function(e){return new(e||a)},providers:[c.a],imports:[[o.g,s.e,r.i]]}),a);i("581b"),i("o62C"),i("k1Z1")},LIpw:function(e,a,r){"use strict";r.d(a,"a",function(){return A});var s=r("8Y7J"),c=r("1O3W"),l=r("1z/I"),u=r("iELJ"),h=r("UhP/"),d=r("SVse"),f=r("GS7A"),p={sideSheetContainer:Object(f.n)("sideSheetContainer",[Object(f.k)("void, exit",Object(f.l)({transform:"translateX(100%)"})),Object(f.k)("enter",Object(f.l)({transform:"translateX(0%)",opacity:1})),Object(f.m)("* => enter",Object(f.e)("".concat(h.b.ENTERING," ").concat(h.a.ACCELERATION_CURVE),Object(f.l)({transform:"translateX(0)",opacity:1}))),Object(f.m)("* => void, * => exit",Object(f.e)("".concat(h.b.EXITING," ").concat(h.a.ACCELERATION_CURVE),Object(f.l)({transform:"translateX(100%)"})))])},_=r("581b"),b=r("YEUz");function v(e,t){}function m(){for(var e="undefined"!=typeof document&&document?document.activeElement:null;e&&e.shadowRoot;){var t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}var y,S,g,C,x=((S=function(e){i(r,e);var a=o(r);function r(e,t,i,o,c,l){var u;return n(this,r),(u=a.call(this))._elementRef=e,u._focusTrapFactory=t,u._changeDetectorRef=i,u._config=c,u._focusMonitor=l,u._animationStateChanged=new s.o,u._elementFocusedBeforeSideSheetWasOpened=null,u._closeInteractionType=null,u.attachDomPortal=function(e){return u._portalOutlet.attachDomPortal(e)},u._ariaLabelledBy=c.ariaLabelledBy||null,u._document=o,u}return t(r,[{key:"_initializeWithAttachedContent",value:function(){this._setupFocusTrap(),this._capturePreviouslyFocusedElement()}},{key:"attachComponentPortal",value:function(e){return this._portalOutlet.attachComponentPortal(e)}},{key:"attachTemplatePortal",value:function(e){return this._portalOutlet.attachTemplatePortal(e)}},{key:"_recaptureFocus",value:function(){this._containsFocus()||this._trapFocus()}},{key:"_trapFocus",value:function(){var e=this,t=this._elementRef.nativeElement;this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady().then(function(t){t||e._focusSideSheetContainer()}):this._containsFocus()||t.focus()}},{key:"_restoreFocus",value:function(){var e=this._elementFocusedBeforeSideSheetWasOpened;if(this._config.restoreFocus&&e&&"function"==typeof e.focus){var t=m(),n=this._elementRef.nativeElement;t&&t!==this._document.body&&t!==n&&!n.contains(t)||(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}},{key:"_setupFocusTrap",value:function(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)}},{key:"_capturePreviouslyFocusedElement",value:function(){this._document&&(this._elementFocusedBeforeSideSheetWasOpened=m())}},{key:"_focusSideSheetContainer",value:function(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}},{key:"_containsFocus",value:function(){var e=this._elementRef.nativeElement,t=m();return e===t||e.contains(t)}}]),r}(l.a)).\u0275fac=function(e){return new(e||S)(s.Nb(s.l),s.Nb(b.i),s.Nb(s.h),s.Nb(d.d,8),s.Nb(_.a),s.Nb(b.h))},S.\u0275dir=s.Ib({type:S,viewQuery:function(e,t){var n;1&e&&s.Hc(l.c,!0),2&e&&s.yc(n=s.cc())&&(t._portalOutlet=n.first)},features:[s.yb]}),S),k=((y=function(e){i(r,e);var a=o(r);function r(){var e;return n(this,r),(e=a.apply(this,arguments))._state="enter",e}return t(r,[{key:"_onAnimationDone",value:function(e){var t=e.toState,n=e.totalTime;"enter"===t?(this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:n})):"exit"===t&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:n}))}},{key:"_onAnimationStart",value:function(e){var t=e.toState,n=e.totalTime;"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:n}):"exit"!==t&&"void"!==t||this._animationStateChanged.next({state:"closing",totalTime:n})}},{key:"_startExitAnimation",value:function(){this._state="exit",this._changeDetectorRef.markForCheck()}}]),r}(x)).\u0275fac=function(e){return O(e||y)},y.\u0275cmp=s.Hb({type:y,selectors:[["td-side-sheet-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"td-side-sheet-container"],hostVars:6,hostBindings:function(e,t){1&e&&s.Jc("@sideSheetContainer.start",function(e){return t._onAnimationStart(e)})("@sideSheetContainer.done",function(e){return t._onAnimationDone(e)}),2&e&&(s.Wb("id",t._id),s.Cb("role",t._config.role)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null),s.Kc("@sideSheetContainer",t._state))},features:[s.yb],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&s.Lc(0,v,0,0,"ng-template",0)},directives:[l.c],styles:[".td-side-sheet-container{background-color:#fff;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);display:block;padding:24px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.td-side-sheet-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.td-side-sheet-content{margin:0 -24px;padding:0 24px;overflow:auto;-ms-flex:1;flex:1;-webkit-overflow-scrolling:touch}.td-side-sheet-title{margin:-16px 0 20px}.td-side-sheet-actions,.td-side-sheet-title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.td-side-sheet-actions{padding:8px 0;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;box-sizing:content-box;margin:0 -16px -24px}.td-side-sheet-actions[align=end]{-ms-flex-pack:end;justify-content:flex-end}.td-side-sheet-actions[align=center]{-ms-flex-pack:center;justify-content:center}.td-side-sheet-actions .mat-button-base+.mat-button-base,.td-side-sheet-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .td-side-sheet-actions .mat-button-base+.mat-button-base,[dir=rtl] .td-side-sheet-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[p.sideSheetContainer]}}),y),O=s.Vb(k),w=r("XNiG"),R=r("LRne"),E=r("pLZG"),T=r("IzEk"),j=r("9gLZ"),L=r("k1Z1"),I=((C=function(){function e(t,i,a,o,r,s,c){n(this,e),this._overlay=t,this._injector=i,this._defaultOptions=a,this._parentSideSheet=o,this._sideSheetRefConstructor=r,this._sideSheetContainerType=s,this._sideSheetDataToken=c,this._openSideSheetsAtThisLevel=[],this._afterAllClosedAtThisLevel=new w.a,this._afterOpenedAtThisLevel=new w.a,this.defaultSidebarConfig={minWidth:"400px",maxWidth:"100vw"}}return t(e,[{key:"open",value:function(e,t){var n=this;t=Object.assign(Object.assign(Object.assign({},this._defaultOptions||new _.a),this.defaultSidebarConfig),t);var i=this._createOverlay(t),a=this._attachSideSheetContainer(i,t),o=this._attachSideSheetContent(e,a,i,t),r=this.openSideSheets.slice(-1)[0],s=null==r?void 0:r.overlayRef;return(null==s?void 0:s.overlayElement)&&(s.overlayElement.style.transition="".concat(h.b.COMPLEX," ").concat(h.a.DECELERATION_CURVE),s.overlayElement.style.minWidth=window.innerWidth+"px"),o._containerInstance._animationStateChanged.pipe(Object(E.a)(function(e){return"closing"===e.state&&!(!r||!s)}),Object(T.a)(1)).subscribe(function(){s.overlayElement.style.transition="".concat(h.b.EXITING," ").concat(h.a.DECELERATION_CURVE),r.updateSize()}),this.openSideSheets.push(o),o.afterClosed().pipe(Object(T.a)(1)).subscribe(function(){return n._removeOpenSideSheet(o)}),a._initializeWithAttachedContent(),o}},{key:"ngOnDestroy",value:function(){this._closeSideSheets(this._openSideSheetsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._animationStateSubscriptions&&this._animationStateSubscriptions.unsubscribe()}},{key:"closeAll",value:function(){this._closeSideSheets(this.openSideSheets)}},{key:"_createOverlay",value:function(e){var t=new c.d({positionStrategy:this._overlay.position().global(),scrollStrategy:this._overlay.scrollStrategies.block(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth}),n=this._overlay.create(t);return n.getConfig().positionStrategy.right("0px"),n}},{key:"_attachSideSheetContainer",value:function(e,t){var n=s.t.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:_.a,useValue:t}]}),i=new l.d(this._sideSheetContainerType,t.viewContainerRef,n,t.componentFactoryResolver);return e.attach(i).instance}},{key:"_attachSideSheetContent",value:function(e,t,n,i){var a=new this._sideSheetRefConstructor(n,t,i.id);if(e instanceof s.N)t.attachTemplatePortal(new l.h(e,null,{$implicit:i.data,sideSheetRef:a}));else{var o=this._createInjector(i,a,t),r=t.attach(new l.d(e,i.viewContainerRef,o));a.componentInstance=r.instance}return a.updateSize(i.width,i.height),a}},{key:"_createInjector",value:function(e,t,n){var i=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=[{provide:this._sideSheetContainerType,useValue:n},{provide:this._sideSheetDataToken,useValue:e.data},{provide:this._sideSheetRefConstructor,useValue:t}];return!e.direction||i&&i.get(j.c,null,s.r.Optional)||a.push({provide:j.c,useValue:{value:e.direction,change:Object(R.a)()}}),s.t.create({parent:i||this._injector,providers:a})}},{key:"_removeOpenSideSheet",value:function(e){var t=this.openSideSheets.indexOf(e);t>-1&&this.openSideSheets.splice(t,1)}},{key:"_closeSideSheets",value:function(e){for(var t=e.length;t--;)e[t].close()}},{key:"openSideSheets",get:function(){return this._parentSideSheet?this._parentSideSheet.openSideSheets:this._openSideSheetsAtThisLevel}}]),e}()).\u0275fac=function(e){s.ac()},C.\u0275dir=s.Ib({type:C}),C),A=((g=function(e){i(a,e);var t=o(a);function a(e,i,o,r){return n(this,a),t.call(this,e,i,o,r,L.a,k,u.a)}return a}(I)).\u0275fac=function(e){return new(e||g)(s.Xb(c.c),s.Xb(s.t),s.Xb(u.b,8),s.Xb(g,12))},g.\u0275prov=s.Jb({token:g,factory:g.\u0275fac}),g)},k1Z1:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var r=a("iELJ"),s=0,c=function(e){i(a,e);var t=o(a);function a(e,i){var o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"td-side-sheet-"+s++;return n(this,a),(o=t.call(this,e,i,r)).overlayRef=e,o._containerInstance=i,o.id=r,o}return a}(r.f);function l(e,t,n){return void 0!==e._containerInstance&&(e._containerInstance._closeInteractionType=t),e.close(n)}},o62C:function(e,i,a){"use strict";a.d(i,"a",function(){return c});var o=a("LIpw"),r=a("k1Z1"),s=a("8Y7J"),c=function(){var e=function(){function e(t,i,a){n(this,e),this.dialogRef=t,this._elementRef=i,this._dialog=a,this.type="button"}return t(e,[{key:"ngOnInit",value:function(){this.dialogRef||(this.dialogRef=function(e,t){for(var n=e.nativeElement.parentElement;n&&!n.classList.contains("td-side-sheet-container");)n=n.parentElement;return n?t.find(function(e){return e.id===n.id}):null}(this._elementRef,this._dialog.openSideSheets))}},{key:"ngOnChanges",value:function(e){var t=e._CovalentSideSheetClose||e._CovalentSideSheetCloseResult;t&&(this.dialogResult=t.currentValue)}},{key:"_onButtonClick",value:function(e){Object(r.b)(this.dialogRef,0===e.screenX&&0===e.screenY?"keyboard":"mouse",this.dialogResult)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Nb(r.a,8),s.Nb(s.l),s.Nb(o.a))},e.\u0275dir=s.Ib({type:e,selectors:[["","td-side-sheet-close",""],["","CovalentSideSheetClose",""]],hostVars:2,hostBindings:function(e,t){1&e&&s.bc("click",function(e){return t._onButtonClick(e)}),2&e&&s.Cb("aria-label",t.ariaLabel||null)("type",t.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["td-side-sheet-close","dialogResult"],_CovalentSideSheetClose:["CovalentSideSheetClose","_CovalentSideSheetClose"]},exportAs:["CovalentSideSheetClose"],features:[s.zb]}),e}()}}])}();