!function(){function t(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{GLwO:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o("l09l"),r=o("8Y7J"),i=function(){var t=function t(){a(this,t)};return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[n.a]]}),t}()},Iwkt:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("8Y7J"),r=o("KxEj"),c=o("qDEf"),s=function(){var t=function(){function t(){a(this,t),this.toolbarColor="primary",this.docked=!1,this.copyCodeToClipboard=!1,this.copyCodeTooltips={},this.closed=new n.o,this.dockToggled=new n.o,this.buttonClicked=new n.o}return i(t,[{key:"toggleDockedState",value:function(){this.dockToggled.emit(this.docked)}},{key:"markdownNavigatorLabels",get:function(){if(this.labels){var t=this.labels;return{goHome:t.goHome,goBack:t.goBack,emptyState:t.emptyState}}}},{key:"titleLabel",get:function(){return this.labels&&this.labels.title||"Help"}},{key:"closeLabel",get:function(){return this.labels&&this.labels.close||"Close"}},{key:"toggleDockedStateLabel",get:function(){return this.docked?this.labels&&this.labels.unDock||"Undock":this.labels&&this.labels.dock||"Dock"}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["td-markdown-navigator-window"]],inputs:{items:"items",labels:"labels",toolbarColor:"toolbarColor",startAt:"startAt",compareWith:"compareWith",docked:"docked",copyCodeToClipboard:"copyCodeToClipboard",copyCodeTooltips:"copyCodeTooltips",footer:"footer"},outputs:{closed:"closed",dockToggled:"dockToggled",buttonClicked:"buttonClicked"},decls:2,vars:14,consts:[[3,"toolbarColor","docked","title","toggleDockedStateLabel","closeLabel","dockToggled","closed"],[3,"items","labels","startAt","compareWith","footer","copyCodeToClipboard","copyCodeTooltips","buttonClicked"]],template:function(t,e){1&t&&(n.Tb(0,"td-window-dialog",0),n.bc("dockToggled",function(){return e.toggleDockedState()})("closed",function(){return e.closed.emit()}),n.Tb(1,"td-markdown-navigator",1),n.bc("buttonClicked",function(t){return e.buttonClicked.emit(t)}),n.Sb(),n.Sb()),2&t&&(n.lc("toolbarColor",e.toolbarColor)("docked",e.docked)("title",e.titleLabel)("toggleDockedStateLabel",e.toggleDockedStateLabel)("closeLabel",e.closeLabel),n.Bb(1),n.Ic("display",e.docked?"none":"inherit"),n.lc("items",e.items)("labels",e.markdownNavigatorLabels)("startAt",e.startAt)("compareWith",e.compareWith)("footer",e.footer)("copyCodeToClipboard",e.copyCodeToClipboard)("copyCodeTooltips",e.copyCodeTooltips))},directives:[r.a,c.a],styles:["[_nghost-%COMP%]{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}td-markdown-navigator[_ngcontent-%COMP%]{height:calc(100% - 56px)}"],changeDetection:0}),t}()},NYqv:function(t,o,n){"use strict";n.d(o,"a",function(){return h});var r=n("Iwkt"),c=n("PWEM"),s=n("SVse"),l=n("8Y7J"),d={bottom:"0px",right:"0px"},u={hasBackdrop:!1,closeOnNavigation:!0,panelClass:["td-window-dialog"],position:d,height:"75vh",width:"360px",maxWidth:"100vw"},h=function(){var t=function(){function t(e,o,n){a(this,t),this._tdDialogService=e,this._document=o,this.rendererFactory=n,this.markdownNavigatorWindowDialog=void 0,this.markdownNavigatorWindowDialogsOpen=0,this._renderer2=n.createRenderer(void 0,void 0)}return i(t,[{key:"open",value:function(t){var o=this;this.close();var n=e(u.panelClass);t.dialogConfig&&t.dialogConfig.panelClass&&(n=Array.isArray(t.dialogConfig.panelClass)?e(t.dialogConfig.panelClass):[t.dialogConfig.panelClass]);var i=Object.assign(Object.assign(Object.assign({},u),t.dialogConfig),{panelClass:n}),a=this._tdDialogService.openDraggable({component:r.a,config:i,dragHandleSelectors:[".td-window-dialog-toolbar"],draggableClass:"td-draggable-markdown-navigator-window"}),s=a.matDialogRef,l=a.dragRefSubject;return this.markdownNavigatorWindowDialog=s,this.markdownNavigatorWindowDialog.componentInstance.items=t.items,this.markdownNavigatorWindowDialog.componentInstance.labels=t.labels,this.markdownNavigatorWindowDialog.componentInstance.startAt=t.startAt,this.markdownNavigatorWindowDialog.componentInstance.copyCodeToClipboard=t.copyCodeToClipboard,this.markdownNavigatorWindowDialog.componentInstance.copyCodeTooltips=t.copyCodeTooltips,this.markdownNavigatorWindowDialog.componentInstance.compareWith=t.compareWith,this.markdownNavigatorWindowDialog.componentInstance.toolbarColor="toolbarColor"in t?t.toolbarColor:"primary",this.markdownNavigatorWindowDialogsOpen++,this.markdownNavigatorWindowDialog.componentInstance.footer=t.footer,l.subscribe(function(t){o.dragRef=t,o.resizableDraggableDialog=new c.b(o._document,o._renderer2,o.markdownNavigatorWindowDialog,o.dragRef)}),this._handleEvents(),this.markdownNavigatorWindowDialog}},{key:"close",value:function(){this.markdownNavigatorWindowDialog&&(this.resizableDraggableDialog&&this.resizableDraggableDialog.detach(),this.markdownNavigatorWindowDialog.close())}},{key:"_handleEvents",value:function(){var t,e,o=this;this.markdownNavigatorWindowDialog.componentInstance.closed.subscribe(function(){return o.close()}),this.markdownNavigatorWindowDialog.componentInstance.dockToggled.subscribe(function(n){n?(o.markdownNavigatorWindowDialog.componentInstance.docked=!1,o.markdownNavigatorWindowDialog.updateSize(e.width,e.height),o.markdownNavigatorWindowDialog.updatePosition({top:"0px",right:"0px",bottom:"0px",left:"0px"}),o.dragRef.setFreeDragPosition(t),o.dragRef.disabled=!1,o.resizableDraggableDialog.attach()):(e=o._getDialogSize(o.markdownNavigatorWindowDialog),t=o.dragRef.getFreeDragPosition(),o.markdownNavigatorWindowDialog.componentInstance.docked=!0,o.markdownNavigatorWindowDialog.updateSize("360px","56px"),o.markdownNavigatorWindowDialog.updatePosition(d),o.dragRef.reset(),o.dragRef.disabled=!0,o.resizableDraggableDialog.detach())}),this.markdownNavigatorWindowDialog.afterClosed().toPromise().then(function(){o.markdownNavigatorWindowDialogsOpen--})}},{key:"_getDialogSize",value:function(t){var e=getComputedStyle(this._document.getElementById(t.id).parentElement);return{width:e.width,height:e.height}}},{key:"isOpen",get:function(){return this.markdownNavigatorWindowDialogsOpen>0}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Xb(c.c),l.Xb(s.d),l.Xb(l.H))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac}),t}()},XesW:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o("8Y7J"),r=o("qDEf"),i=function(){var t=function t(){a(this,t),this.items=[{title:"RxJS",description:"Reactive programming",icon:"speed",url:"https://github.com/ReactiveX/rxjs/blob/master/README.md",children:[{title:"Intro pt 1",markdownString:"\ud83d\udd25"},{title:"Intro pt 2",markdownString:"\u26a1"}]},{title:"Covalent",description:"Terdata UI Platform",icon:"whatshot",url:"https://github.com/Teradata/covalent/blob/develop/README.md"}]};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["markdown-navigator-demo-basic"]],decls:1,vars:4,consts:[[3,"items","copyCodeToClipboard"]],template:function(t,e){1&t&&n.Ob(0,"td-markdown-navigator",0),2&t&&(n.Ic("height",300,"px"),n.lc("items",e.items)("copyCodeToClipboard",!0))},directives:[r.a],styles:["[_nghost-%COMP%]{width:100%;background-color:#fff}"]}),t}()},e4Sf:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n,r=o("SVse"),i=o("Tj54"),c=(o("GvbB"),o("8Y7J")),s=((n=function t(){a(this,t)}).\u0275mod=c.Lb({type:n}),n.\u0275inj=c.Kb({factory:function(t){return new(t||n)},imports:[[r.c,i.b]]}),n)},l09l:function(t,e,o){"use strict";o.d(e,"a",function(){return b}),o.d(e,"b",function(){return g.a});var n,r=o("SVse"),i=o("Dxy4"),c=o("ZFy/"),s=o("SqCe"),l=o("Tj54"),d=o("BTe0"),u=o("PdbM"),h=o("PWEM"),f=o("e4Sf"),g=o("NYqv"),m=o("8Y7J"),b=((n=function t(){a(this,t)}).\u0275mod=m.Lb({type:n}),n.\u0275inj=m.Kb({factory:function(t){return new(t||n)},providers:[g.a],imports:[[r.c,i.c,c.b,s.e,l.b,d.b,f.a,u.a,h.a]]}),n);o("qDEf"),o("Iwkt")},qDEf:function(o,n,r){"use strict";r.d(n,"a",function(){return U});var c=r("mrSG"),s=r("8Y7J"),l=r("UBqq"),d=r("cUpR"),u=r("IheW"),h=r("SVse"),f=r("BTe0"),g=r("BSbQ"),m=r("Dxy4"),b=r("ZFy/"),p=r("Tj54"),k=r("GvbB"),w=r("Xva0"),v=r("v+MA"),y=r("SqCe"),C=r("UhP/"),T=["markdownWrapper"];function S(t,e){1&t&&s.Ob(0,"mat-progress-bar",8)}function I(t,e){if(1&t){var o=s.Ub();s.Tb(0,"button",12),s.bc("click",function(){return s.Cc(o),s.fc(3).reset()}),s.Tb(1,"mat-icon"),s.Nc(2,"home"),s.Sb(),s.Sb()}if(2&t){var n=s.fc(3);s.lc("matTooltip",n.goHomeLabel),s.Cb("data-test","home-button"),s.Bb(1),s.Cb("aria-label",n.goHomeLabel)}}function D(t,e){if(1&t){var o=s.Ub();s.Tb(0,"button",13),s.bc("click",function(){return s.Cc(o),s.fc(3).goBack()}),s.Tb(1,"mat-icon"),s.Nc(2,"arrow_back"),s.Sb(),s.Sb()}if(2&t){var n=s.fc(3);s.lc("matTooltip",n.goBackLabel),s.Cb("data-test","back-button"),s.Bb(1),s.Cb("aria-label",n.goBackLabel)}}function x(t,e){if(1&t&&(s.Tb(0,"span",14),s.Nc(1),s.Sb()),2&t){var o=s.fc(3);s.Cb("data-test","title"),s.Bb(1),s.Pc(" ",o.currentItemTitle," ")}}function M(t,e){if(1&t&&(s.Rb(0),s.Tb(1,"div"),s.Lc(2,I,3,3,"button",9),s.Lc(3,D,3,3,"button",10),s.Lc(4,x,2,2,"span",11),s.Sb(),s.Ob(5,"mat-divider"),s.Qb()),2&t){var o=s.fc(2);s.Bb(1),s.Ic("display","flex"),s.Bb(1),s.lc("ngIf",o.showHomeButton),s.Bb(1),s.lc("ngIf",o.showGoBackButton),s.Bb(1),s.lc("ngIf",o.currentItemTitle),s.Bb(1),s.Ic("position","relative")}}function O(t,e){if(1&t&&s.Ob(0,"td-message",19),2&t){var o=s.fc(3);s.lc("sublabel",o.markdownLoaderError),s.Cb("data-test","markdown-loader-error")}}function L(t,e){if(1&t){var o=s.Ub();s.Tb(0,"td-flavored-markdown-loader",20),s.bc("loadFailed",function(t){return s.Cc(o),s.fc(3).handleMarkdownLoaderError(t)}),s.Sb()}if(2&t){var n=s.fc(3);s.lc("url",n.url)("httpOptions",n.httpOptions)("anchor",n.anchor)("copyCodeToClipboard",n.copyCodeToClipboard)("copyCodeTooltips",n.copyCodeTooltips)}}function _(t,e){if(1&t){var o=s.Ub();s.Tb(0,"td-flavored-markdown",21),s.bc("buttonClicked",function(t){return s.Cc(o),s.fc(3).buttonClicked.emit(t)}),s.Sb()}if(2&t){var n=s.fc(3);s.lc("content",n.markdownString)("hostedUrl",n.url)("anchor",n.anchor)("copyCodeToClipboard",n.copyCodeToClipboard)("copyCodeTooltips",n.copyCodeTooltips)}}function B(t,e){if(1&t&&(s.Tb(0,"div",15,16),s.Lc(2,O,1,2,"td-message",5),s.Lc(3,L,1,5,"td-flavored-markdown-loader",17),s.Lc(4,_,1,5,"td-flavored-markdown",18),s.Sb()),2&t){var o=s.fc(2);s.Bb(2),s.lc("ngIf",o.markdownLoaderError),s.Bb(1),s.lc("ngIf",o.showTdMarkdownLoader),s.Bb(1),s.lc("ngIf",o.showTdMarkdown)}}function W(t,e){if(1&t&&s.Ob(0,"td-message",19),2&t){var o=s.fc(2);s.lc("sublabel",o.childrenUrlError),s.Cb("data-test","children-url-error")}}function R(t,e){if(1&t){var o=s.Ub();s.Tb(0,"button",24),s.bc("click",function(){s.Cc(o);var t=e.$implicit;return s.fc(3).handleItemSelected(t)}),s.Tb(1,"mat-icon",25),s.Nc(2),s.Sb(),s.Tb(3,"span",26),s.Nc(4),s.Sb(),s.Tb(5,"span",26),s.Nc(6),s.Sb(),s.Ob(7,"mat-divider"),s.Sb()}if(2&t){var n=e.$implicit,r=e.index,i=s.fc(3);s.lc("id","td-markdown-navigator-list-item-"+(n.id?n.id:r))("matTooltip",i.getTitle(n)),s.Bb(2),s.Pc(" ",i.getIcon(n)," "),s.Bb(2),s.Pc(" ",i.getTitle(n)," "),s.Bb(2),s.Oc(n.description)}}function N(t,e){if(1&t&&(s.Tb(0,"div",22),s.Tb(1,"mat-action-list"),s.Lc(2,R,8,5,"button",23),s.Sb(),s.Sb()),2&t){var o=s.fc(2);s.Bb(2),s.lc("ngForOf",o.currentMenuItems)}}function P(t,e){1&t&&s.Pb(0)}function E(t,e){if(1&t&&(s.Rb(0),s.Lc(1,S,1,0,"mat-progress-bar",2),s.Lc(2,M,6,7,"ng-container",0),s.Tb(3,"div",3),s.Lc(4,B,5,3,"div",4),s.Lc(5,W,1,2,"td-message",5),s.Lc(6,N,3,1,"div",6),s.Lc(7,P,1,0,"ng-container",7),s.Sb(),s.Qb()),2&t){var o=s.fc();s.Bb(1),s.lc("ngIf",o.loading),s.Bb(1),s.lc("ngIf",o.showHeader),s.Bb(2),s.lc("ngIf",o.showTdMarkdownLoader||o.showTdMarkdown),s.Bb(1),s.lc("ngIf",o.childrenUrlError),s.Bb(1),s.lc("ngIf",o.showMenu),s.Bb(1),s.lc("ngComponentOutlet",o.footerComponent)}}function j(t,e){if(1&t&&(s.Tb(0,"div",27),s.Tb(1,"mat-icon",28),s.Nc(2,"subject"),s.Sb(),s.Tb(3,"h2"),s.Nc(4),s.Sb(),s.Sb()),2&t){var o=s.fc();s.Bb(4),s.Oc(o.emptyStateLabel)}}function A(t,e){return t.id&&e.id?t.id===e.id:t===e}var U=function(){var o=function(){function o(t,e,n,r){a(this,o),this._markdownUrlLoaderService=t,this._changeDetectorRef=e,this._sanitizer=n,this._http=r,this.copyCodeToClipboard=!1,this.copyCodeTooltips={},this.buttonClicked=new s.o,this.historyStack=[],this.currentMenuItems=[],this.loading=!1}return i(o,[{key:"clickListener",value:function(t){var e,o=t.srcElement;o.matches("a[href]")&&(e=o,!Object(l.d)(e)&&e.pathname.endsWith(".md"))&&this.handleLinkClick(t)}},{key:"ngOnChanges",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.items&&this.reset(),t.startAt&&this.items&&this.startAt&&this._jumpTo(this.startAt,void 0);case 1:case"end":return e.stop()}},e,this)}))}},{key:"hasChildrenOrChildrenUrl",value:function(t){return t.children&&t.children.length>0||!!t.childrenUrl}},{key:"clearErrors",value:function(){this.markdownLoaderError=void 0,this.childrenUrlError=void 0}},{key:"reset",value:function(){this.loading=!1,this.clearErrors(),this.items&&1===this.items.length&&!this.hasChildrenOrChildrenUrl(this.items[0])?(this.currentMenuItems=[],this.currentMarkdownItem=this.items[0]):(this.currentMenuItems=this.items,this.currentMarkdownItem=void 0),this.historyStack=[],this._changeDetectorRef.markForCheck()}},{key:"goBack",value:function(){if(this.loading=!1,this.clearErrors(),this.historyStack.length>1){var t=this.historyStack[this.historyStack.length-2];t.startAtLink&&(t=this.historyStack[this.historyStack.length-3]?this.historyStack[this.historyStack.length-3]:void 0,this.historyStack=this.historyStack.slice(0,-1)),t?(this.currentMarkdownItem=t,this.historyStack=this.historyStack.slice(0,-1),this.setChildrenAsCurrentMenuItems(t)):this.reset()}else this.reset();this._changeDetectorRef.markForCheck()}},{key:"handleItemSelected",value:function(t){this.clearErrors(),this.currentMarkdownItem=t,this.historyStack=[].concat(e(this.historyStack),[t]),this.setChildrenAsCurrentMenuItems(t),this._changeDetectorRef.markForCheck()}},{key:"setChildrenAsCurrentMenuItems",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var o,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.currentMenuItems=[],this.loading=!0,this._changeDetectorRef.markForCheck(),o=this.historyStack,n=[],!t.children){e.next=7;break}n=t.children,e.next=12;break;case 7:if(e.t0=t.childrenUrl,!e.t0){e.next=12;break}return e.next=11,this.loadChildrenUrl(t);case 11:n=e.sent;case 12:n&&n.length&&t.startAtLink&&this._jumpTo(t.startAtLink,n),r=this.historyStack,o.length===r.length&&o.every(function(t,e){return t===r[e]})&&(this.currentMenuItems=n),this.loading=!1,this._changeDetectorRef.markForCheck();case 15:case"end":return e.stop()}},e,this)}))}},{key:"loadChildrenUrl",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=this._sanitizer.sanitize(s.K.URL,t.childrenUrl),e.prev=1,e.next=4,this._http.get(o,Object.assign({},t.httpOptions)).toPromise();case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",(this.handleChildrenUrlError(e.t0),[]));case 10:case"end":return e.stop()}},e,this,[[1,7]])}))}},{key:"getTitle",value:function(t){if(t)return(Object(l.e)(t.anchor)||t.title||function(t){if(t){var e=new URL(t);if(e.hash)return Object(l.e)(e.hash);var o=e.pathname.split("/");return o[o.length-1].replace(/\.[^/.]+$/,"")}}(t.url)||function(t){if(t){var e=t.split(/[\r\n]+/).find(function(t){return!!t});return Object(l.e)(e).trim()}}(t.markdownString)||"").trim()}},{key:"getIcon",value:function(t){if(t)return t.icon||"subject"}},{key:"handleChildrenUrlError",value:function(t){this.childrenUrlError=t.message,this._changeDetectorRef.markForCheck()}},{key:"handleMarkdownLoaderError",value:function(t){this.markdownLoaderError=t.message,this._changeDetectorRef.markForCheck()}},{key:"_jumpTo",value:function(t,e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function o(){var n,r,i=this;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n=this.historyStack,this.reset(),!(this.items&&this.items.length>0)){o.next=11;break}if(r=[],!Array.isArray(t)){o.next=9;break}return o.next=6,this.followPath(this.items,t);case 6:r=o.sent,o.next=10;break;case 9:e&&e.length>0?(this.historyStack=n,r=this.findPath(e,t)):r=this.findPath(this.items,t);case 10:(r||[]).forEach(function(t){return i.handleItemSelected(t)});case 11:this._changeDetectorRef.markForCheck();case 12:case"end":return o.stop()}},o,this)}))}},{key:"followPath",value:function(o,n){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var i,a,c,s,l,d,u=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:i=[],a=o,c=this.compareWith||A,s=t(n),r.prev=3,d=regeneratorRuntime.mark(function t(){var o,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=l.value,n=a.find(function(t){return c(o,t)})){t.next=4;break}return t.abrupt("return","break");case 4:if(i=[].concat(e(i),[n]),!n.children){t.next=9;break}a=n.children,t.next=14;break;case 9:if(t.t0=n.childrenUrl,!t.t0){t.next=14;break}return t.next=13,u.loadChildrenUrl(n);case 13:a=t.sent;case 14:case"end":return t.stop()}},t)}),s.s();case 6:if((l=s.n()).done){r.next=13;break}return r.delegateYield(d(),"t0",8);case 8:if("break"!==r.t0){r.next=11;break}return r.abrupt("break",13);case 11:r.next=6;break;case 13:r.next=18;break;case 15:r.prev=15,r.t1=r.catch(3),s.e(r.t1);case 18:return r.prev=18,s.f(),r.finish(18);case 21:return r.abrupt("return",(i.length!==n.length&&(i=[]),i));case 22:case"end":return r.stop()}},r,this,[[3,15,18,21]])}))}},{key:"findPath",value:function(o,n){var r=this.compareWith||A;if(o){var i,a=t(o);try{for(a.s();!(i=a.n()).done;){var c=i.value;if(r(c,n))return[c];var s=this.findPath(c.children,n);if(s)return[c].concat(e(s))}}catch(l){a.e(l)}finally{a.f()}}}},{key:"handleLinkClick",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var o,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o=new URL(t.target.href),this.loading=!0,this._changeDetectorRef.markForCheck(),e.prev=3,e.next=6,this._markdownUrlLoaderService.load(o.href);case 6:n=e.sent,this.handleItemSelected({markdownString:n,url:o.href}),this.markdownWrapper.nativeElement.scrollTop=0,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),window.open(o.href,"_blank").focus();case 13:return e.prev=13,this.loading=!1,e.finish(13);case 16:this._changeDetectorRef.markForCheck();case 17:case"end":return e.stop()}},e,this,[[3,10,13,16]])}))}},{key:"showGoBackButton",get:function(){return this.historyStack.length>0}},{key:"showHomeButton",get:function(){return this.historyStack.length>1}},{key:"showHeader",get:function(){return this.showHomeButton||this.showGoBackButton||!!this.currentItemTitle}},{key:"showMenu",get:function(){return this.currentMenuItems&&this.currentMenuItems.length>0}},{key:"showTdMarkdownLoader",get:function(){return!!this.currentMarkdownItem&&!!this.currentMarkdownItem.url&&!this.showTdMarkdown}},{key:"showTdMarkdown",get:function(){return!!this.currentMarkdownItem&&!!this.currentMarkdownItem.markdownString}},{key:"url",get:function(){if(this.currentMarkdownItem)return this.currentMarkdownItem.url}},{key:"footerComponent",get:function(){return this.currentMarkdownItem&&this.currentMarkdownItem.footer?this.currentMarkdownItem.footer:this.footer}},{key:"httpOptions",get:function(){if(this.currentMarkdownItem)return this.currentMarkdownItem.httpOptions}},{key:"markdownString",get:function(){if(this.currentMarkdownItem)return this.currentMarkdownItem.markdownString}},{key:"anchor",get:function(){if(this.currentMarkdownItem)return this.currentMarkdownItem.anchor}},{key:"showEmptyState",get:function(){return!this.items||this.items.length<1}},{key:"goHomeLabel",get:function(){return this.labels&&this.labels.goHome||"Go home"}},{key:"goBackLabel",get:function(){return this.labels&&this.labels.goBack||"Go back"}},{key:"emptyStateLabel",get:function(){return this.labels&&this.labels.emptyState||"No item(s) to display"}},{key:"currentItemTitle",get:function(){return this.historyStack.length<1?"":this.currentMarkdownItem?this.getTitle(this.currentMarkdownItem):this.historyStack.length>0?this.getTitle(this.historyStack[this.historyStack.length-1]):""}}]),o}();return o.\u0275fac=function(t){return new(t||o)(s.Nb(l.c),s.Nb(s.h),s.Nb(d.b),s.Nb(u.a))},o.\u0275cmp=s.Hb({type:o,selectors:[["td-markdown-navigator"]],viewQuery:function(t,e){var o;(1&t&&s.Rc(T,!0),2&t)&&(s.yc(o=s.cc())&&(e.markdownWrapper=o.first))},hostBindings:function(t,e){1&t&&s.bc("click",function(t){return e.clickListener(t)})},inputs:{items:"items",labels:"labels",startAt:"startAt",copyCodeToClipboard:"copyCodeToClipboard",copyCodeTooltips:"copyCodeTooltips",footer:"footer",compareWith:"compareWith"},outputs:{buttonClicked:"buttonClicked"},features:[s.zb],decls:2,vars:2,consts:[[4,"ngIf"],["layout","column","layout-align","center center","class","empty-state",4,"ngIf"],["mode","indeterminate","color","accent",4,"ngIf"],["id","td-markdown-navigator-content",1,"scroll-area"],["class","markdown-wrapper",4,"ngIf"],["color","warn","icon","error",3,"sublabel",4,"ngIf"],["class","td-markdown-list",4,"ngIf"],[4,"ngComponentOutlet"],["mode","indeterminate","color","accent"],["id","td-markdown-navigator-home-button","mat-icon-button","",3,"matTooltip","click",4,"ngIf"],["id","td-markdown-navigator-back-button","mat-icon-button","",3,"matTooltip","click",4,"ngIf"],["flex","","class","mat-body-2 title truncate",4,"ngIf"],["id","td-markdown-navigator-home-button","mat-icon-button","",3,"matTooltip","click"],["id","td-markdown-navigator-back-button","mat-icon-button","",3,"matTooltip","click"],["flex","",1,"mat-body-2","title","truncate"],[1,"markdown-wrapper"],["markdownWrapper",""],[3,"url","httpOptions","anchor","copyCodeToClipboard","copyCodeTooltips","loadFailed",4,"ngIf"],[3,"content","hostedUrl","anchor","copyCodeToClipboard","copyCodeTooltips","buttonClicked",4,"ngIf"],["color","warn","icon","error",3,"sublabel"],[3,"url","httpOptions","anchor","copyCodeToClipboard","copyCodeTooltips","loadFailed"],[3,"content","hostedUrl","anchor","copyCodeToClipboard","copyCodeTooltips","buttonClicked"],[1,"td-markdown-list"],["mat-list-item","","matTooltipPosition","before","matTooltipShowDelay","500",3,"id","matTooltip","click",4,"ngFor","ngForOf"],["mat-list-item","","matTooltipPosition","before","matTooltipShowDelay","500",3,"id","matTooltip","click"],["matListIcon",""],["matLine","",1,"truncate"],["layout","column","layout-align","center center",1,"empty-state"],["matListAvatar",""]],template:function(t,e){1&t&&(s.Lc(0,E,8,6,"ng-container",0),s.Lc(1,j,5,1,"div",1)),2&t&&(s.lc("ngIf",!e.showEmptyState),s.Bb(1),s.lc("ngIf",e.showEmptyState))},directives:[h.n,h.l,f.a,g.a,m.b,b.a,p.a,k.a,w.a,v.a,y.a,h.m,y.d,y.c,C.j,y.b],styles:["[_nghost-%COMP%]{position:relative;height:inherit;height:100%;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}[_nghost-%COMP%]   .scroll-area[_ngcontent-%COMP%]{min-height:1px;overflow-y:auto;-ms-flex:1;flex:1;box-sizing:border-box}[_nghost-%COMP%]   .markdown-wrapper[_ngcontent-%COMP%]{padding:16px 16px 0}[_nghost-%COMP%]   .td-markdown-list[_ngcontent-%COMP%] > .mat-list[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   td-flavored-markdown-loader[_ngcontent-%COMP%]     .mat-progress-bar{top:0;left:0;right:0;position:absolute}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin:8px 0;padding-left:16px}.truncate[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.empty-state[_ngcontent-%COMP%]{padding:32px}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:4em}"],changeDetection:0}),o}()}}])}();