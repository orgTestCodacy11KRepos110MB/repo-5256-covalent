(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2uGb":function(e,t,o){var i=o("ProS");o("ko1b"),o("s2lz"),o("RBEP");var n=o("kMLO"),r=o("nKiI");i.registerVisual(n),i.registerLayout(r)},"5s0K":function(e,t,o){var i=o("bYtY");t.createWrap=function(){var e,t=[],o={};return{add:function(e,n,r,a,l){return i.isString(a)&&(l=a,a=0),!o[e.id]&&(o[e.id]=1,t.push({el:e,target:n,time:r,delay:a,easing:l}),!0)},done:function(t){return e=t,this},start:function(){for(var i=t.length,n=0,r=t.length;n<r;n++){var a=t[n];a.el.animateTo(a.target,a.time,a.delay,a.easing,l)}return this;function l(){--i||(t.length=0,o={},e&&e())}}}}},"9hCq":function(e,t,o){var i=o("IwbS"),n=o("+TT/"),r=o("bYtY"),a=o("VaxA").wrapTreePathInfo;function l(e){this.group=new i.Group,e.add(this.group)}function s(e,t,o,i,n,r){var a=[[n?e:e-5,t],[e+o,t],[e+o,t+i],[n?e:e-5,t+i]];return!r&&a.splice(2,0,[e+o+5,t+i/2]),!n&&a.push([e,t+i/2]),a}function u(e,t,o){e.eventData={componentType:"series",componentSubType:"treemap",componentIndex:t.componentIndex,seriesIndex:t.componentIndex,seriesName:t.name,seriesType:"treemap",selfType:"breadcrumb",nodeData:{dataIndex:o&&o.dataIndex,name:o&&o.name},treePathInfo:o&&a(o,t)}}l.prototype={constructor:l,render:function(e,t,o,i){var r=e.getModel("breadcrumb"),a=this.group;if(a.removeAll(),r.get("show")&&o){var l=r.getModel("itemStyle"),s=l.getModel("textStyle"),u={pos:{left:r.get("left"),right:r.get("right"),top:r.get("top"),bottom:r.get("bottom")},box:{width:t.getWidth(),height:t.getHeight()},emptyItemWidth:r.get("emptyItemWidth"),totalWidth:0,renderList:[]};this._prepare(o,u,s),this._renderContent(e,u,l,s,i),n.positionElement(a,u.pos,u.box)}},_prepare:function(e,t,o){for(var i=e;i;i=i.parentNode){var n=i.getModel().get("name"),r=o.getTextRect(n),a=Math.max(r.width+16,t.emptyItemWidth);t.totalWidth+=a+8,t.renderList.push({node:i,text:n,width:a})}},_renderContent:function(e,t,o,a,l){for(var d=0,h=t.emptyItemWidth,c=e.get("breadcrumb.height"),p=n.getAvailableSize(t.pos,t.box),f=t.totalWidth,g=t.renderList,v=g.length-1;v>=0;v--){var m=g[v],y=m.node,x=m.width,w=m.text;f>p.width&&(f-=x-h,x=h,w=null);var b=new i.Polygon({shape:{points:s(d,0,x,c,v===g.length-1,0===v)},style:r.defaults(o.getItemStyle(),{lineJoin:"bevel",text:w,textFill:a.getTextColor(),textFont:a.getFont()}),z:10,onclick:r.curry(l,y)});this.group.add(b),u(b,e,y),d+=x+8}},remove:function(){this.group.removeAll()}},e.exports=l},Bsck:function(e,t,o){var i=o("bYtY"),n=o("Qxkt"),r=o("Mdki"),a=o("YXkt"),l=o("sdST"),s=function(e,t){this.name=e||"",this.depth=0,this.height=0,this.parentNode=null,this.dataIndex=-1,this.children=[],this.viewChildren=[],this.hostTree=t};function u(e,t,o){this._nodes=[],this.hostModel=e,this.levelModels=i.map(t||[],function(t){return new n(t,e,e.ecModel)}),this.leavesModel=new n(o||{},e,e.ecModel)}s.prototype={constructor:s,isRemoved:function(){return this.dataIndex<0},eachNode:function(e,t,o){"function"==typeof e&&(o=t,t=e,e=null),i.isString(e=e||{})&&(e={order:e});var n,r=e.order||"preorder",a=this[e.attr||"children"];"preorder"===r&&(n=t.call(o,this));for(var l=0;!n&&l<a.length;l++)a[l].eachNode(e,t,o);"postorder"===r&&t.call(o,this)},updateDepthAndHeight:function(e){var t=0;this.depth=e;for(var o=0;o<this.children.length;o++){var i=this.children[o];i.updateDepthAndHeight(e+1),i.height>t&&(t=i.height)}this.height=t+1},getNodeById:function(e){if(this.getId()===e)return this;for(var t=0,o=this.children,i=o.length;t<i;t++){var n=o[t].getNodeById(e);if(n)return n}},contains:function(e){if(e===this)return!0;for(var t=0,o=this.children,i=o.length;t<i;t++){var n=o[t].contains(e);if(n)return n}},getAncestors:function(e){for(var t=[],o=e?this:this.parentNode;o;)t.push(o),o=o.parentNode;return t.reverse(),t},getValue:function(e){var t=this.hostTree.data;return t.get(t.getDimension(e||"value"),this.dataIndex)},setLayout:function(e,t){this.dataIndex>=0&&this.hostTree.data.setItemLayout(this.dataIndex,e,t)},getLayout:function(){return this.hostTree.data.getItemLayout(this.dataIndex)},getModel:function(e){if(!(this.dataIndex<0)){var t,o=this.hostTree,i=o.data.getItemModel(this.dataIndex),n=this.getLevelModel();return n||0!==this.children.length&&(0===this.children.length||!1!==this.isExpand)||(t=this.getLeavesModel()),i.getModel(e,(n||t||o.hostModel).getModel(e))}},getLevelModel:function(){return(this.hostTree.levelModels||[])[this.depth]},getLeavesModel:function(){return this.hostTree.leavesModel},setVisual:function(e,t){this.dataIndex>=0&&this.hostTree.data.setItemVisual(this.dataIndex,e,t)},getVisual:function(e,t){return this.hostTree.data.getItemVisual(this.dataIndex,e,t)},getRawIndex:function(){return this.hostTree.data.getRawIndex(this.dataIndex)},getId:function(){return this.hostTree.data.getId(this.dataIndex)},isAncestorOf:function(e){for(var t=e.parentNode;t;){if(t===this)return!0;t=t.parentNode}return!1},isDescendantOf:function(e){return e!==this&&e.isAncestorOf(this)}},u.prototype={constructor:u,type:"tree",eachNode:function(e,t,o){this.root.eachNode(e,t,o)},getNodeByDataIndex:function(e){var t=this.data.getRawIndex(e);return this._nodes[t]},getNodeByName:function(e){return this.root.getNodeByName(e)},update:function(){for(var e=this.data,t=this._nodes,o=0,i=t.length;o<i;o++)t[o].dataIndex=-1;for(o=0,i=e.count();o<i;o++)t[e.getRawIndex(o)].dataIndex=o},clearLayouts:function(){this.data.clearItemLayouts()}},u.createTree=function(e,t,o){var n=new u(t,o.levels,o.leaves),d=[],h=1;!function e(t,o){var r=t.value;h=Math.max(h,i.isArray(r)?r.length:1),d.push(t);var a=new s(t.name,n);o?function(e,t){e.parentNode!==t&&(t.children.push(e),e.parentNode=t)}(a,o):n.root=a,n._nodes.push(a);var l=t.children;if(l)for(var u=0;u<l.length;u++)e(l[u],a)}(e),n.root.updateDepthAndHeight(0);var c=l(d,{coordDimensions:["value"],dimensionsCount:h}),p=new a(c,t);return p.initData(d),r({mainData:p,struct:n,structAttr:"tree"}),n.update(),n},e.exports=u},RBEP:function(e,t,o){for(var i=o("ProS"),n=o("VaxA"),r=function(){},a=["treemapZoomToNode","treemapRender","treemapMove"],l=0;l<a.length;l++)i.registerAction({type:a[l],update:"updateView"},r);i.registerAction({type:"treemapRootToNode",update:"updateView"},function(e,t){t.eachComponent({mainType:"series",subType:"treemap",query:e},function(t,o){var i=n.retrieveTargetInfo(e,["treemapZoomToNode","treemapRootToNode"],t);if(i){var r=t.getViewRoot();r&&(e.direction=n.aboveViewRoot(r,i.node)?"rollUp":"drillDown"),t.resetViewRoot(i.node)}})})},VaxA:function(e,t,o){var i=o("bYtY");function n(e){for(var t=[];e;)(e=e.parentNode)&&t.push(e);return t.reverse()}t.retrieveTargetInfo=function(e,t,o){if(e&&i.indexOf(t,e.type)>=0){var n=o.getData().tree.root,r=e.targetNode;if("string"==typeof r&&(r=n.getNodeById(r)),r&&n.contains(r))return{node:r};var a=e.targetNodeId;if(null!=a&&(r=n.getNodeById(a)))return{node:r}}},t.getPathToRoot=n,t.aboveViewRoot=function(e,t){var o=n(e);return i.indexOf(o,t)>=0},t.wrapTreePathInfo=function(e,t){for(var o=[];e;){var i=e.dataIndex;o.push({name:e.name,dataIndex:i,value:t.getRawValue(i)}),e=e.parentNode}return o.reverse(),o}},XxSj:function(e,t,o){var i=o("bYtY"),n=o("Qe9p"),r=o("OELB").linearMap,a=i.each,l=i.isObject,s=function(e){var t=e.mappingMethod,o=e.type,n=this.option=i.clone(e);this.type=o,this.mappingMethod=t,this._normalizeData=x[t];var r=u[o];this.applyVisual=r.applyVisual,this.getColorMapper=r.getColorMapper,this._doMap=r._doMap[t],"piecewise"===t?(d(n),function(e){var t=e.pieceList;e.hasSpecialVisual=!1,i.each(t,function(t,o){t.originIndex=o,null!=t.visual&&(e.hasSpecialVisual=!0)})}(n)):"category"===t?n.categories?function(e){var t=e.categories,o=e.visual,n=e.categoryMap={};if(a(t,function(e,t){n[e]=t}),!i.isArray(o)){var r=[];i.isObject(o)?a(o,function(e,t){var o=n[t];r[null!=o?o:-1]=e}):r[-1]=o,o=y(e,r)}for(var l=t.length-1;l>=0;l--)null==o[l]&&(delete n[t[l]],t.pop())}(n):d(n,!0):(i.assert("linear"!==t||n.dataExtent),d(n))};s.prototype={constructor:s,mapValueToVisual:function(e){var t=this._normalizeData(e);return this._doMap(t,e)},getNormalizer:function(){return i.bind(this._normalizeData,this)}};var u=s.visualHandlers={color:{applyVisual:p("color"),getColorMapper:function(){var e=this.option;return i.bind("category"===e.mappingMethod?function(e,t){return!t&&(e=this._normalizeData(e)),f.call(this,e)}:function(t,o,i){var r=!!i;return!o&&(t=this._normalizeData(t)),i=n.fastLerp(t,e.parsedVisual,i),r?i:n.stringify(i,"rgba")},this)},_doMap:{linear:function(e){return n.stringify(n.fastLerp(e,this.option.parsedVisual),"rgba")},category:f,piecewise:function(e,t){var o=m.call(this,t);return null==o&&(o=n.stringify(n.fastLerp(e,this.option.parsedVisual),"rgba")),o},fixed:g}},colorHue:h(function(e,t){return n.modifyHSL(e,t)}),colorSaturation:h(function(e,t){return n.modifyHSL(e,null,t)}),colorLightness:h(function(e,t){return n.modifyHSL(e,null,null,t)}),colorAlpha:h(function(e,t){return n.modifyAlpha(e,t)}),opacity:{applyVisual:p("opacity"),_doMap:v([0,1])},liftZ:{applyVisual:p("liftZ"),_doMap:{linear:g,category:g,piecewise:g,fixed:g}},symbol:{applyVisual:function(e,t,o){var n=this.mapValueToVisual(e);if(i.isString(n))o("symbol",n);else if(l(n))for(var r in n)n.hasOwnProperty(r)&&o(r,n[r])},_doMap:{linear:c,category:f,piecewise:function(e,t){var o=m.call(this,t);return null==o&&(o=c.call(this,e)),o},fixed:g}},symbolSize:{applyVisual:p("symbolSize"),_doMap:v([0,1])}};function d(e,t){var o=e.visual,n=[];i.isObject(o)?a(o,function(e){n.push(e)}):null!=o&&n.push(o),t||1!==n.length||{color:1,symbol:1}.hasOwnProperty(e.type)||(n[1]=n[0]),y(e,n)}function h(e){return{applyVisual:function(t,o,i){t=this.mapValueToVisual(t),i("color",e(o("color"),t))},_doMap:v([0,1])}}function c(e){var t=this.option.visual;return t[Math.round(r(e,[0,1],[0,t.length-1],!0))]||{}}function p(e){return function(t,o,i){i(e,this.mapValueToVisual(t))}}function f(e){var t=this.option.visual;return t[this.option.loop&&-1!==e?e%t.length:e]}function g(){return this.option.visual[0]}function v(e){return{linear:function(t){return r(t,e,this.option.visual,!0)},category:f,piecewise:function(t,o){var i=m.call(this,o);return null==i&&(i=r(t,e,this.option.visual,!0)),i},fixed:g}}function m(e){var t=this.option,o=t.pieceList;if(t.hasSpecialVisual){var i=o[s.findPieceIndex(e,o)];if(i&&i.visual)return i.visual[this.type]}}function y(e,t){return e.visual=t,"color"===e.type&&(e.parsedVisual=i.map(t,function(e){return n.parse(e)})),t}var x={linear:function(e){return r(e,this.option.dataExtent,[0,1],!0)},piecewise:function(e){var t=this.option.pieceList,o=s.findPieceIndex(e,t,!0);if(null!=o)return r(o,[0,t.length-1],[0,1],!0)},category:function(e){var t=this.option.categories?this.option.categoryMap[e]:e;return null==t?-1:t},fixed:i.noop};function w(e,t,o){return e?t<=o:t<o}s.listVisualTypes=function(){var e=[];return i.each(u,function(t,o){e.push(o)}),e},s.addVisualHandler=function(e,t){u[e]=t},s.isValidType=function(e){return u.hasOwnProperty(e)},s.eachVisual=function(e,t,o){i.isObject(e)?i.each(e,t,o):t.call(o,e)},s.mapVisual=function(e,t,o){var n,r=i.isArray(e)?[]:i.isObject(e)?{}:(n=!0,null);return s.eachVisual(e,function(e,i){var a=t.call(o,e,i);n?r=a:r[i]=a}),r},s.retrieveVisuals=function(e){var t,o={};return e&&a(u,function(i,n){e.hasOwnProperty(n)&&(o[n]=e[n],t=!0)}),t?o:null},s.prepareVisualTypes=function(e){if(l(e)){var t=[];a(e,function(e,o){t.push(o)}),e=t}else{if(!i.isArray(e))return[];e=e.slice()}return e.sort(function(e,t){return"color"===t&&"color"!==e&&0===e.indexOf("color")?1:-1}),e},s.dependsOn=function(e,t){return"color"===t?!(!e||0!==e.indexOf(t)):e===t},s.findPieceIndex=function(e,t,o){for(var i,n=1/0,r=0,a=t.length;r<a;r++){var l=t[r].value;if(null!=l){if(l===e||"string"==typeof l&&l===e+"")return r;o&&h(l,r)}}for(r=0,a=t.length;r<a;r++){var s=t[r],u=s.interval,d=s.close;if(u){if(u[0]===-1/0){if(w(d[1],e,u[1]))return r}else if(u[1]===1/0){if(w(d[0],u[0],e))return r}else if(w(d[0],u[0],e)&&w(d[1],e,u[1]))return r;o&&h(u[0],r),o&&h(u[1],r)}}if(o)return e===1/0?t.length-1:e===-1/0?0:i;function h(t,o){var r=Math.abs(t-e);r<n&&(n=r,i=o)}},e.exports=s},kMLO:function(e,t,o){var i=o("XxSj"),n=o("Qe9p"),r=o("bYtY"),a=r.isArray;function l(e,t,o,a,u,h){var c=e.getModel(),p=e.getLayout();if(p&&!p.invisible&&p.isInView){var f,g=e.getModel("itemStyle"),v=function(e,t,o,i){var n=r.extend({},t);return r.each(["color","colorAlpha","colorSaturation"],function(r){var a=e.get(r,!0);null==a&&o&&(a=o[r]),null==a&&(a=t[r]),null==a&&(a=i.get(r)),null!=a&&(n[r]=a)}),n}(g,t,o[e.depth],a),m=g.get("borderColor"),y=g.get("borderColorSaturation");null!=y&&(m=function(e,t){return null!=t?n.modifyHSL(t,null,null,e):null}(y,f=s(v))),e.setVisual("borderColor",m);var x=e.viewChildren;if(x&&x.length){var w=function(e,t,o,n,r,a){if(a&&a.length){var l=d(t,"color")||null!=r.color&&"none"!==r.color&&(d(t,"colorAlpha")||d(t,"colorSaturation"));if(l){var s=t.get("visualMin"),u=t.get("visualMax"),h=o.dataExtent.slice();null!=s&&s<h[0]&&(h[0]=s),null!=u&&u>h[1]&&(h[1]=u);var c=t.get("colorMappingBy"),p={type:l.name,dataExtent:h,visual:l.range};"color"!==p.type||"index"!==c&&"id"!==c?p.mappingMethod="linear":(p.mappingMethod="category",p.loop=!0);var f=new i(p);return f.__drColorMappingBy=c,f}}}(0,c,p,0,v,x);r.each(x,function(e,t){if(e.depth>=u.length||e===u[e.depth]){var i=function(e,t,o,i,n,a){var l=r.extend({},t);if(n){var s=n.type,u="color"===s&&n.__drColorMappingBy,d="index"===u?i:"id"===u?a.mapIdToIndex(o.getId()):o.getValue(e.get("visualDimension"));l[s]=n.mapValueToVisual(d)}return l}(c,v,e,t,w,h);l(e,i,o,a,u,h)}})}else f=s(v),e.setVisual("color",f)}}function s(e){var t=u(e,"color");if(t){var o=u(e,"colorAlpha"),i=u(e,"colorSaturation");return i&&(t=n.modifyHSL(t,null,null,i)),o&&(t=n.modifyAlpha(t,o)),t}}function u(e,t){var o=e[t];if(null!=o&&"none"!==o)return o}function d(e,t){var o=e.get(t);return a(o)&&o.length?{name:t,range:o}:null}e.exports={seriesType:"treemap",reset:function(e,t,o,i){var n=e.getData().tree,a=n.root,s=e.getModel("itemStyle");a.isRemoved()||l(a,{},r.map(n.levelModels,function(e){return e?e.get("itemStyle"):null}),s,e.getViewRoot().getAncestors(),e)}}},ko1b:function(e,t,o){var i=o("bYtY"),n=o("T4UG"),r=o("Bsck"),a=o("Qxkt"),l=o("7aKB"),s=l.encodeHTML,u=l.addCommas,d=o("VaxA").wrapTreePathInfo,h=n.extend({type:"series.treemap",layoutMode:"box",dependencies:["grid","polar"],_viewRoot:null,defaultOption:{progressive:0,hoverLayerThreshold:1/0,left:"center",top:"middle",right:null,bottom:null,width:"80%",height:"80%",sort:!0,clipWindow:"origin",squareRatio:.5*(1+Math.sqrt(5)),leafDepth:null,drillDownIcon:"\u25b6",zoomToNodeRatio:.1024,roam:!0,nodeClick:"zoomToNode",animation:!0,animationDurationUpdate:900,animationEasing:"quinticInOut",breadcrumb:{show:!0,height:22,left:"center",top:"bottom",emptyItemWidth:25,itemStyle:{color:"rgba(0,0,0,0.7)",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#fff"}},emphasis:{textStyle:{}}},label:{show:!0,distance:0,padding:5,position:"inside",color:"#fff",ellipsis:!0},upperLabel:{show:!1,position:[0,"50%"],height:20,color:"#fff",ellipsis:!0,verticalAlign:"middle"},itemStyle:{color:null,colorAlpha:null,colorSaturation:null,borderWidth:0,gapWidth:0,borderColor:"#fff",borderColorSaturation:null},emphasis:{upperLabel:{show:!0,position:[0,"50%"],color:"#fff",ellipsis:!0,verticalAlign:"middle"}},visualDimension:0,visualMin:null,visualMax:null,color:[],colorAlpha:null,colorSaturation:null,colorMappingBy:"index",visibleMin:10,childrenVisibleMin:null,levels:[]},getInitialData:function(e,t){var o={name:e.name,children:e.data};c(o);var n=e.levels||[];n=e.levels=function(e,t){var o,n=t.get("color");if(n)return i.each(e=e||[],function(e){var t=new a(e),i=t.get("color");(t.get("itemStyle.color")||i&&"none"!==i)&&(o=!0)}),o||((e[0]||(e[0]={})).color=n.slice()),e}(n,t);var l={};return l.levels=n,r.createTree(o,this,l).data},optionUpdated:function(){this.resetViewRoot()},formatTooltip:function(e){var t=this.getData(),o=this.getRawValue(e),n=i.isArray(o)?u(o[0]):u(o),r=t.getName(e);return s(r+": "+n)},getDataParams:function(e){var t=n.prototype.getDataParams.apply(this,arguments),o=this.getData().tree.getNodeByDataIndex(e);return t.treePathInfo=d(o,this),t},setLayoutInfo:function(e){this.layoutInfo=this.layoutInfo||{},i.extend(this.layoutInfo,e)},mapIdToIndex:function(e){var t=this._idIndexMap;t||(t=this._idIndexMap=i.createHashMap(),this._idIndexMapCount=0);var o=t.get(e);return null==o&&t.set(e,o=this._idIndexMapCount++),o},getViewRoot:function(){return this._viewRoot},resetViewRoot:function(e){e?this._viewRoot=e:e=this._viewRoot;var t=this.getRawData().tree.root;e&&(e===t||t.contains(e))||(this._viewRoot=t)}});function c(e){var t=0;i.each(e.children,function(e){c(e);var o=e.value;i.isArray(o)&&(o=o[0]),t+=o});var o=e.value;i.isArray(o)&&(o=o[0]),(null==o||isNaN(o))&&(o=t),o<0&&(o=0),i.isArray(e.value)?e.value[0]=o:e.value=o}e.exports=h},nKiI:function(e,t,o){var i=o("bYtY"),n=o("mFDi"),r=o("OELB"),a=r.parsePercent,l=r.MAX_SAFE_INTEGER,s=o("+TT/"),u=o("VaxA"),d=Math.max,h=Math.min,c=i.retrieve,p=i.each,f=["itemStyle","borderWidth"],g=["itemStyle","gapWidth"],v=["upperLabel","show"],m=["upperLabel","height"];function y(e,t,o,n){var r,a;if(!e.isRemoved()){var l=e.getLayout();r=l.width,a=l.height;var s=(_=e.getModel()).get(f),u=_.get(g)/2,c=I(_),v=Math.max(s,c),m=s-u,b=v-u,_=e.getModel();e.setLayout({borderWidth:s,upperHeight:v,upperLabelHeight:c},!0);var M=(r=d(r-2*m,0))*(a=d(a-m-b,0)),T=function(e,t,o,n,r,a){var l=e.children||[],s=n.sort;"asc"!==s&&"desc"!==s&&(s=null);var u=null!=n.leafDepth&&n.leafDepth<=a;if(r&&!u)return e.viewChildren=[];!function(e,t){t&&e.sort(function(e,o){var i="asc"===t?e.getValue()-o.getValue():o.getValue()-e.getValue();return 0===i?"asc"===t?e.dataIndex-o.dataIndex:o.dataIndex-e.dataIndex:i})}(l=i.filter(l,function(e){return!e.isRemoved()}),s);var d=function(e,t,o){for(var i=0,n=0,r=t.length;n<r;n++)i+=t[n].getValue();var a=e.get("visualDimension");if(t&&t.length)if("value"===a&&o)l=[t[t.length-1].getValue(),t[0].getValue()],"asc"===o&&l.reverse();else{var l=[1/0,-1/0];p(t,function(e){var t=e.getValue(a);t<l[0]&&(l[0]=t),t>l[1]&&(l[1]=t)})}else l=[NaN,NaN];return{sum:i,dataExtent:l}}(t,l,s);if(0===d.sum)return e.viewChildren=[];if(d.sum=function(e,t,o,i,n){if(!i)return o;for(var r=e.get("visibleMin"),a=n.length,l=a,s=a-1;s>=0;s--){var u=n["asc"===i?a-s-1:s].getValue();u/o*t<r&&(l=s,o-=u)}return n.splice("asc"===i?0:l,a-l),o}(t,o,d.sum,s,l),0===d.sum)return e.viewChildren=[];for(var h=0,c=l.length;h<c;h++){var f=l[h].getValue()/d.sum*o;l[h].setLayout({area:f})}return u&&(l.length&&e.setLayout({isLeafRoot:!0},!0),l.length=0),e.viewChildren=l,e.setLayout({dataExtent:d.dataExtent},!0),l}(e,_,M,t,o,n);if(T.length){var V={x:m,y:b,width:r,height:a},N=h(r,a),L=1/0,R=[];R.area=0;for(var S=0,C=T.length;S<C;){var D=T[S];R.push(D),R.area+=D.getLayout().area;var A=x(R,N,t.squareRatio);A<=L?(S++,L=A):(R.area-=R.pop().getLayout().area,w(R,N,V,u,!1),N=h(V.width,V.height),R.length=R.area=0,L=1/0)}if(R.length&&w(R,N,V,u,!0),!o){var W=_.get("childrenVisibleMin");null!=W&&M<W&&(o=!0)}for(S=0,C=T.length;S<C;S++)y(T[S],t,o,n+1)}}}function x(e,t,o){for(var i,n=0,r=1/0,a=0,l=e.length;a<l;a++)(i=e[a].getLayout().area)&&(i<r&&(r=i),i>n&&(n=i));var s=e.area*e.area,u=t*t*o;return s?d(u*n/s,s/(u*r)):1/0}function w(e,t,o,i,n){var r=t===o.width?0:1,a=1-r,l=["x","y"],s=["width","height"],u=o[l[r]],c=t?e.area/t:0;(n||c>o[s[a]])&&(c=o[s[a]]);for(var p=0,f=e.length;p<f;p++){var g=e[p],v={},m=c?g.getLayout().area/c:0,y=v[s[a]]=d(c-2*i,0),x=o[l[r]]+o[s[r]]-u,w=p===f-1||x<m?x:m,b=v[s[r]]=d(w-2*i,0);v[l[a]]=o[l[a]]+h(i,y/2),v[l[r]]=u+h(i,b/2),u+=w,g.setLayout(v,!0)}o[l[a]]+=c,o[s[a]]-=c}function b(e,t,o,i,r){var a=e.getLayout(),l=o[r],s=l&&l===e;if(!(l&&!s||r===o.length&&e!==i)){e.setLayout({isInView:!0,invisible:!s&&!t.intersect(a),isAboveViewRoot:s},!0);var u=new n(t.x-a.x,t.y-a.y,t.width,t.height);p(e.viewChildren||[],function(e){b(e,u,o,i,r+1)})}}function I(e){return e.get(v)?e.get(m):0}e.exports={seriesType:"treemap",reset:function(e,t,o,r){var d=o.getWidth(),h=o.getHeight(),g=e.option,v=s.getLayoutRect(e.getBoxLayoutParams(),{width:o.getWidth(),height:o.getHeight()}),m=g.size||[],x=a(c(v.width,m[0]),d),w=a(c(v.height,m[1]),h),_=r&&r.type,M=u.retrieveTargetInfo(r,["treemapZoomToNode","treemapRootToNode"],e),T="treemapRender"===_||"treemapMove"===_?r.rootRect:null,V=e.getViewRoot(),N=u.getPathToRoot(V);if("treemapMove"!==_){var L="treemapZoomToNode"===_?function(e,t,o,i,n){var r,a=(t||{}).node,s=[i,n];if(!a||a===o)return s;for(var u=i*n,d=u*e.option.zoomToNodeRatio;r=a.parentNode;){for(var h=0,c=r.children,p=0,g=c.length;p<g;p++)h+=c[p].getValue();var v=a.getValue();if(0===v)return s;d*=h/v;var m=r.getModel(),y=m.get(f);(d+=4*y*y+(3*y+Math.max(y,I(m)))*Math.pow(d,.5))>l&&(d=l),a=r}d<u&&(d=u);var x=Math.pow(d/u,.5);return[i*x,n*x]}(e,M,V,x,w):T?[T.width,T.height]:[x,w],R=g.sort;R&&"asc"!==R&&"desc"!==R&&(R="desc");var S={squareRatio:g.squareRatio,sort:R,leafDepth:g.leafDepth};V.hostTree.clearLayouts(),V.setLayout({x:0,y:0,width:L[0],height:L[1],area:L[0]*L[1]}),y(V,S,!1,0);var C=V.getLayout();p(N,function(e,t){var o=(N[t+1]||V).getValue();e.setLayout(i.extend({dataExtent:[o,o],borderWidth:0,upperHeight:0},C))})}var D=e.getData().tree.root;D.setLayout(function(e,t,o){if(t)return{x:t.x,y:t.y};var i={x:0,y:0};if(!o)return i;var n=o.node,r=n.getLayout();if(!r)return i;for(var a=[r.width/2,r.height/2],l=n;l;){var s=l.getLayout();a[0]+=s.x,a[1]+=s.y,l=l.parentNode}return{x:e.width/2-a[0],y:e.height/2-a[1]}}(v,T,M),!0),e.setLayoutInfo(v),b(D,new n(-v.x,-v.y,d,h),N,V,0)}}},s2lz:function(e,t,o){var i=o("ProS"),n=o("bYtY"),r=o("IwbS"),a=o("gPAo"),l=o("VaxA"),s=o("9hCq"),u=o("SgGq"),d=o("mFDi"),h=o("Fofx"),c=o("5s0K"),p=o("KCsZ"),f=n.bind,g=r.Group,v=r.Rect,m=n.each,y=["label"],x=["emphasis","label"],w=["upperLabel"],b=["emphasis","upperLabel"],I=p([["fill","color"],["stroke","strokeColor"],["lineWidth","strokeWidth"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),_=function(e){var t=I(e);return t.stroke=t.fill=t.lineWidth=null,t},M=i.extendChartView({type:"treemap",init:function(e,t){this._storage={nodeGroup:[],background:[],content:[]},this._state="ready"},render:function(e,t,o,i){var r=t.findComponents({mainType:"series",subType:"treemap",query:i});if(!(n.indexOf(r,e)<0)){this.seriesModel=e,this.api=o,this.ecModel=t;var a=l.retrieveTargetInfo(i,["treemapZoomToNode","treemapRootToNode"],e),s=i&&i.type,u=e.layoutInfo,d=!this._oldTree,h=this._storage,c="treemapRootToNode"===s&&a&&h?{rootNodeGroup:h.nodeGroup[a.node.getRawIndex()],direction:i.direction}:null,p=this._giveContainerGroup(u),f=this._doRender(p,e,c);d||s&&"treemapZoomToNode"!==s&&"treemapRootToNode"!==s?f.renderFinally():this._doAnimation(p,f,e,c),this._resetController(o),this._renderBreadcrumb(e,o,a)}},_giveContainerGroup:function(e){var t=this._containerGroup;return t||(t=this._containerGroup=new g,this._initEvents(t),this.group.add(t)),t.attr("position",[e.x,e.y]),t},_doRender:function(e,t,o){var i=t.getData().tree,r=this._oldTree,l={nodeGroup:[],background:[],content:[]},s={nodeGroup:[],background:[],content:[]},u=this._storage,d=[],h=n.curry(T,t,s,u,o,l,d);!function e(t,o,i,r,l){function s(e){return e.getId()}function u(n,a){var s=null!=n?t[n]:null,u=null!=a?o[a]:null,d=h(s,u,i,l);d&&e(s&&s.viewChildren||[],u&&u.viewChildren||[],d,r,l+1)}r?(o=t,m(t,function(e,t){!e.isRemoved()&&u(t,t)})):new a(o,t,s,s).add(u).update(u).remove(n.curry(u,null)).execute()}(i.root?[i.root]:[],r&&r.root?[r.root]:[],e,i===r||!r,0);var c=function(e){var t={nodeGroup:[],background:[],content:[]};return e&&m(e,function(e,o){var i=t[o];m(e,function(e){e&&(i.push(e),e.__tmWillDelete=1)})}),t}(u);return this._oldTree=i,this._storage=s,{lastsForAnimation:l,willDeleteEls:c,renderFinally:function(){m(c,function(e){m(e,function(e){e.parent&&e.parent.remove(e)})}),m(d,function(e){e.invisible=!0,e.dirty()})}}},_doAnimation:function(e,t,o,i){if(o.get("animation")){var r=o.get("animationDurationUpdate"),a=o.get("animationEasing"),l=c.createWrap();m(t.willDeleteEls,function(e,t){m(e,function(e,o){if(!e.invisible){var n,s=e.parent;if(i&&"drillDown"===i.direction)n=s===i.rootNodeGroup?{shape:{x:0,y:0,width:s.__tmNodeWidth,height:s.__tmNodeHeight},style:{opacity:0}}:{style:{opacity:0}};else{var u=0,d=0;s.__tmWillDelete||(u=s.__tmNodeWidth/2,d=s.__tmNodeHeight/2),n="nodeGroup"===t?{position:[u,d],style:{opacity:0}}:{shape:{x:u,y:d,width:0,height:0},style:{opacity:0}}}n&&l.add(e,n,r,a)}})}),m(this._storage,function(e,o){m(e,function(e,i){var s=t.lastsForAnimation[o][i],u={};s&&("nodeGroup"===o?s.old&&(u.position=e.position.slice(),e.attr("position",s.old)):(s.old&&(u.shape=n.extend({},e.shape),e.setShape(s.old)),s.fadein?(e.setStyle("opacity",0),u.style={opacity:1}):1!==e.style.opacity&&(u.style={opacity:1})),l.add(e,u,r,a))})},this),this._state="animating",l.done(f(function(){this._state="ready",t.renderFinally()},this)).start()}},_resetController:function(e){var t=this._controller;t||((t=this._controller=new u(e.getZr())).enable(this.seriesModel.get("roam")),t.on("pan",f(this._onPan,this)),t.on("zoom",f(this._onZoom,this)));var o=new d(0,0,e.getWidth(),e.getHeight());t.setPointerChecker(function(e,t,i){return o.contain(t,i)})},_clearController:function(){var e=this._controller;e&&(e.dispose(),e=null)},_onPan:function(e){if("animating"!==this._state&&(Math.abs(e.dx)>3||Math.abs(e.dy)>3)){var t=this.seriesModel.getData().tree.root;if(!t)return;var o=t.getLayout();if(!o)return;this.api.dispatchAction({type:"treemapMove",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:o.x+e.dx,y:o.y+e.dy,width:o.width,height:o.height}})}},_onZoom:function(e){var t=e.originX,o=e.originY;if("animating"!==this._state){var i=this.seriesModel.getData().tree.root;if(!i)return;var n=i.getLayout();if(!n)return;var r=new d(n.x,n.y,n.width,n.height),a=this.seriesModel.layoutInfo;t-=a.x,o-=a.y;var l=h.create();h.translate(l,l,[-t,-o]),h.scale(l,l,[e.scale,e.scale]),h.translate(l,l,[t,o]),r.applyTransform(l),this.api.dispatchAction({type:"treemapRender",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:r.x,y:r.y,width:r.width,height:r.height}})}},_initEvents:function(e){e.on("click",function(e){if("ready"===this._state){var t=this.seriesModel.get("nodeClick",!0);if(t){var o=this.findTarget(e.offsetX,e.offsetY);if(o){var i=o.node;if(i.getLayout().isLeafRoot)this._rootToNode(o);else if("zoomToNode"===t)this._zoomToNode(o);else if("link"===t){var n=i.hostTree.data.getItemModel(i.dataIndex),r=n.get("link",!0),a=n.get("target",!0)||"blank";r&&window.open(r,a)}}}}},this)},_renderBreadcrumb:function(e,t,o){o||(o=null!=e.get("leafDepth",!0)?{node:e.getViewRoot()}:this.findTarget(t.getWidth()/2,t.getHeight()/2))||(o={node:e.getData().tree.root}),(this._breadcrumb||(this._breadcrumb=new s(this.group))).render(e,t,o.node,f(function(t){"animating"!==this._state&&(l.aboveViewRoot(e.getViewRoot(),t)?this._rootToNode({node:t}):this._zoomToNode({node:t}))},this))},remove:function(){this._clearController(),this._containerGroup&&this._containerGroup.removeAll(),this._storage={nodeGroup:[],background:[],content:[]},this._state="ready",this._breadcrumb&&this._breadcrumb.remove()},dispose:function(){this._clearController()},_zoomToNode:function(e){this.api.dispatchAction({type:"treemapZoomToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:e.node})},_rootToNode:function(e){this.api.dispatchAction({type:"treemapRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:e.node})},findTarget:function(e,t){var o;return this.seriesModel.getViewRoot().eachNode({attr:"viewChildren",order:"preorder"},function(i){var n=this._storage.background[i.getRawIndex()];if(n){var r=n.transformCoordToLocal(e,t),a=n.shape;if(!(a.x<=r[0]&&r[0]<=a.x+a.width&&a.y<=r[1]&&r[1]<=a.y+a.height))return!1;o={node:i,offsetX:r[0],offsetY:r[1]}}},this),o}});function T(e,t,o,i,a,l,s,u,d,h){if(s){var c=s.getLayout();if(c&&c.isInView){var p=c.width,f=c.height,m=c.borderWidth,M=c.invisible,T=s.getRawIndex(),N=u&&u.getRawIndex(),L=s.viewChildren,R=c.upperHeight,S=L&&L.length,C=s.getModel("itemStyle"),D=s.getModel("emphasis.itemStyle"),A=P("nodeGroup",g);if(A){if(d.add(A),A.attr("position",[c.x||0,c.y||0]),A.__tmNodeWidth=p,A.__tmNodeHeight=f,c.isAboveViewRoot)return A;var W=P("background",v,h,1);if(W&&function(t,o,i){o.dataIndex=s.dataIndex,o.seriesIndex=e.seriesIndex,o.setShape({x:0,y:0,width:p,height:f});var n=s.getVisual("borderColor",!0),a=D.get("borderColor");H(o,function(){var e=_(C);e.fill=n;var t=I(D);if(t.fill=a,i){var l=p-2*m;O(e,t,n,l,R,{x:m,y:0,width:l,height:R})}else e.text=t.text=null;o.setStyle(e),r.setHoverStyle(o,t)}),t.add(o)}(A,W,S&&c.upperHeight),!S){var k=P("content",v,h,2);k&&function(t,o){o.dataIndex=s.dataIndex,o.seriesIndex=e.seriesIndex;var i=Math.max(p-2*m,0),n=Math.max(f-2*m,0);o.culling=!0,o.setShape({x:m,y:m,width:i,height:n});var a=s.getVisual("color",!0);H(o,function(){var e=_(C);e.fill=a;var t=I(D);O(e,t,a,i,n),o.setStyle(e),r.setHoverStyle(o,t)}),t.add(o)}(A,k)}return A}}}function H(e,t){M?!e.invisible&&l.push(e):(t(),e.__tmWillVisible||(e.invisible=!1))}function O(t,o,i,a,l,u){var d=s.getModel(),h=n.retrieve(e.getFormattedLabel(s.dataIndex,"normal",null,null,u?"upperLabel":"label"),d.get("name"));if(!u&&c.isLeafRoot){var p=e.get("drillDownIcon",!0);h=p?p+" "+h:h}var f=d.getModel(u?w:y),g=d.getModel(u?b:x),v=f.getShallow("show");r.setLabelStyle(t,o,f,g,{defaultText:v?h:null,autoColor:i,isRectText:!0}),u&&(t.textRect=n.clone(u)),t.truncate=v&&f.get("ellipsis")?{outerWidth:a,outerHeight:l,minChar:2}:null}function P(e,r,l,u){var d=null!=N&&o[e][N],h=a[e];return d?(o[e][N]=null,function(e,t,o){(e[T]={}).old="nodeGroup"===o?t.position.slice():n.extend({},t.shape)}(h,d,e)):M||((d=new r({z:V(l,u)})).__tmDepth=l,d.__tmStorageName=e,function(e,t,o){var n=e[T]={},r=s.parentNode;if(r&&(!i||"drillDown"===i.direction)){var l=0,u=0,d=a.background[r.getRawIndex()];!i&&d&&d.old&&(l=d.old.width,u=d.old.height),n.old="nodeGroup"===o?[0,u]:{x:l,y:u,width:0,height:0}}n.fadein="nodeGroup"!==o}(h,0,e)),t[e][T]=d}}function V(e,t){var o=10*e+t;return(o-1)/o}e.exports=M}}]);