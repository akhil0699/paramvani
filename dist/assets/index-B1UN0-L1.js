(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}})();function dd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hd={exports:{}},Cu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=Symbol.for("react.transitional.element"),ep=Symbol.for("react.fragment");function md(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var l in e)l!=="key"&&(a[l]=e[l])}else a=e;return e=a.ref,{$$typeof:tp,type:t,key:n,ref:e!==void 0?e:null,props:a}}Cu.Fragment=ep;Cu.jsx=md;Cu.jsxs=md;hd.exports=Cu;var p=hd.exports,pd={exports:{}},G={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.transitional.element"),ap=Symbol.for("react.portal"),np=Symbol.for("react.fragment"),lp=Symbol.for("react.strict_mode"),ip=Symbol.for("react.profiler"),up=Symbol.for("react.consumer"),rp=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),sp=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),xs=Symbol.iterator;function fp(t){return t===null||typeof t!="object"?null:(t=xs&&t[xs]||t["@@iterator"],typeof t=="function"?t:null)}var yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,xd={};function Qn(t,e,a){this.props=t,this.context=e,this.refs=xd,this.updater=a||yd}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bd(){}bd.prototype=Qn.prototype;function eo(t,e,a){this.props=t,this.context=e,this.refs=xd,this.updater=a||yd}var ao=eo.prototype=new bd;ao.constructor=eo;vd(ao,Qn.prototype);ao.isPureReactComponent=!0;var bs=Array.isArray,ot={H:null,A:null,T:null,S:null,V:null},Sd=Object.prototype.hasOwnProperty;function no(t,e,a,n,l,i){return a=i.ref,{$$typeof:to,type:t,key:e,ref:a!==void 0?a:null,props:i}}function dp(t,e){return no(t.type,e,void 0,void 0,void 0,t.props)}function lo(t){return typeof t=="object"&&t!==null&&t.$$typeof===to}function hp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Ss=/\/+/g;function ir(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hp(""+t.key):e.toString(36)}function ws(){}function mp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(ws,ws):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function en(t,e,a,n,l){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case to:case ap:u=!0;break;case gd:return u=t._init,en(u(t._payload),e,a,n,l)}}if(u)return l=l(t),u=n===""?"."+ir(t,0):n,bs(l)?(a="",u!=null&&(a=u.replace(Ss,"$&/")+"/"),en(l,e,a,"",function(o){return o})):l!=null&&(lo(l)&&(l=dp(l,a+(l.key==null||t&&t.key===l.key?"":(""+l.key).replace(Ss,"$&/")+"/")+u)),e.push(l)),1;u=0;var r=n===""?".":n+":";if(bs(t))for(var c=0;c<t.length;c++)n=t[c],i=r+ir(n,c),u+=en(n,e,a,i,l);else if(c=fp(t),typeof c=="function")for(t=c.call(t),c=0;!(n=t.next()).done;)n=n.value,i=r+ir(n,c++),u+=en(n,e,a,i,l);else if(i==="object"){if(typeof t.then=="function")return en(mp(t),e,a,n,l);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function pi(t,e,a){if(t==null)return t;var n=[],l=0;return en(t,n,"","",function(i){return e.call(a,i,l++)}),n}function pp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Es=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gp(){}G.Children={map:pi,forEach:function(t,e,a){pi(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return pi(t,function(){e++}),e},toArray:function(t){return pi(t,function(e){return e})||[]},only:function(t){if(!lo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=Qn;G.Fragment=np;G.Profiler=ip;G.PureComponent=eo;G.StrictMode=lp;G.Suspense=op;G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ot;G.__COMPILER_RUNTIME={__proto__:null,c:function(t){return ot.H.useMemoCache(t)}};G.cache=function(t){return function(){return t.apply(null,arguments)}};G.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=vd({},t.props),l=t.key,i=void 0;if(e!=null)for(u in e.ref!==void 0&&(i=void 0),e.key!==void 0&&(l=""+e.key),e)!Sd.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(n[u]=e[u]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var r=Array(u),c=0;c<u;c++)r[c]=arguments[c+2];n.children=r}return no(t.type,l,void 0,void 0,i,n)};G.createContext=function(t){return t={$$typeof:rp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:up,_context:t},t};G.createElement=function(t,e,a){var n,l={},i=null;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)Sd.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(l[n]=e[n]);var u=arguments.length-2;if(u===1)l.children=a;else if(1<u){for(var r=Array(u),c=0;c<u;c++)r[c]=arguments[c+2];l.children=r}if(t&&t.defaultProps)for(n in u=t.defaultProps,u)l[n]===void 0&&(l[n]=u[n]);return no(t,i,void 0,void 0,null,l)};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:cp,render:t}};G.isValidElement=lo;G.lazy=function(t){return{$$typeof:gd,_payload:{_status:-1,_result:t},_init:pp}};G.memo=function(t,e){return{$$typeof:sp,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=ot.T,a={};ot.T=a;try{var n=t(),l=ot.S;l!==null&&l(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(gp,Es)}catch(i){Es(i)}finally{ot.T=e}};G.unstable_useCacheRefresh=function(){return ot.H.useCacheRefresh()};G.use=function(t){return ot.H.use(t)};G.useActionState=function(t,e,a){return ot.H.useActionState(t,e,a)};G.useCallback=function(t,e){return ot.H.useCallback(t,e)};G.useContext=function(t){return ot.H.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t,e){return ot.H.useDeferredValue(t,e)};G.useEffect=function(t,e,a){var n=ot.H;if(typeof a=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(t,e)};G.useId=function(){return ot.H.useId()};G.useImperativeHandle=function(t,e,a){return ot.H.useImperativeHandle(t,e,a)};G.useInsertionEffect=function(t,e){return ot.H.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return ot.H.useLayoutEffect(t,e)};G.useMemo=function(t,e){return ot.H.useMemo(t,e)};G.useOptimistic=function(t,e){return ot.H.useOptimistic(t,e)};G.useReducer=function(t,e,a){return ot.H.useReducer(t,e,a)};G.useRef=function(t){return ot.H.useRef(t)};G.useState=function(t){return ot.H.useState(t)};G.useSyncExternalStore=function(t,e,a){return ot.H.useSyncExternalStore(t,e,a)};G.useTransition=function(){return ot.H.useTransition()};G.version="19.1.1";pd.exports=G;var x=pd.exports;const Qe=dd(x);var wd={exports:{}},Nu={},Ed={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(_,H){var B=_.length;_.push(H);t:for(;0<B;){var V=B-1>>>1,nt=_[V];if(0<l(nt,H))_[V]=H,_[B]=nt,B=V;else break t}}function a(_){return _.length===0?null:_[0]}function n(_){if(_.length===0)return null;var H=_[0],B=_.pop();if(B!==H){_[0]=B;t:for(var V=0,nt=_.length,Gt=nt>>>1;V<Gt;){var Nt=2*(V+1)-1,Pe=_[Nt],Kt=Nt+1,R=_[Kt];if(0>l(Pe,B))Kt<nt&&0>l(R,Pe)?(_[V]=R,_[Kt]=B,V=Kt):(_[V]=Pe,_[Nt]=B,V=Nt);else if(Kt<nt&&0>l(R,B))_[V]=R,_[Kt]=B,V=Kt;else break t}}return H}function l(_,H){var B=_.sortIndex-H.sortIndex;return B!==0?B:_.id-H.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,r=u.now();t.unstable_now=function(){return u.now()-r}}var c=[],o=[],d=1,y=null,f=3,g=!1,b=!1,S=!1,T=!1,h=typeof setTimeout=="function"?setTimeout:null,s=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;function v(_){for(var H=a(o);H!==null;){if(H.callback===null)n(o);else if(H.startTime<=_)n(o),H.sortIndex=H.expirationTime,e(c,H);else break;H=a(o)}}function A(_){if(S=!1,v(_),!b)if(a(c)!==null)b=!0,z||(z=!0,L());else{var H=a(o);H!==null&&At(A,H.startTime-_)}}var z=!1,E=-1,O=5,U=-1;function C(){return T?!0:!(t.unstable_now()-U<O)}function I(){if(T=!1,z){var _=t.unstable_now();U=_;var H=!0;try{t:{b=!1,S&&(S=!1,s(E),E=-1),g=!0;var B=f;try{e:{for(v(_),y=a(c);y!==null&&!(y.expirationTime>_&&C());){var V=y.callback;if(typeof V=="function"){y.callback=null,f=y.priorityLevel;var nt=V(y.expirationTime<=_);if(_=t.unstable_now(),typeof nt=="function"){y.callback=nt,v(_),H=!0;break e}y===a(c)&&n(c),v(_)}else n(c);y=a(c)}if(y!==null)H=!0;else{var Gt=a(o);Gt!==null&&At(A,Gt.startTime-_),H=!1}}break t}finally{y=null,f=B,g=!1}H=void 0}}finally{H?L():z=!1}}}var L;if(typeof m=="function")L=function(){m(I)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,In=Fe.port2;Fe.port1.onmessage=I,L=function(){In.postMessage(null)}}else L=function(){h(I,0)};function At(_,H){E=h(function(){_(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(_){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var B=f;f=H;try{return _()}finally{f=B}},t.unstable_requestPaint=function(){T=!0},t.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var B=f;f=_;try{return H()}finally{f=B}},t.unstable_scheduleCallback=function(_,H,B){var V=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?V+B:V):B=V,_){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=B+nt,_={id:d++,callback:H,priorityLevel:_,startTime:B,expirationTime:nt,sortIndex:-1},B>V?(_.sortIndex=B,e(o,_),a(c)===null&&_===a(o)&&(S?(s(E),E=-1):S=!0,At(A,B-V))):(_.sortIndex=nt,e(c,_),b||g||(b=!0,z||(z=!0,L()))),_},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(_){var H=f;return function(){var B=f;f=H;try{return _.apply(this,arguments)}finally{f=B}}}})(Ad);Ed.exports=Ad;var yp=Ed.exports,Td={exports:{}},Yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=x;function zd(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ie(){}var Lt={d:{f:Ie,r:function(){throw Error(zd(522))},D:Ie,C:Ie,L:Ie,m:Ie,X:Ie,S:Ie,M:Ie},p:0,findDOMNode:null},xp=Symbol.for("react.portal");function bp(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xp,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var gl=vp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Uu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Lt;Yt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(zd(299));return bp(t,e,null,a)};Yt.flushSync=function(t){var e=gl.T,a=Lt.p;try{if(gl.T=null,Lt.p=2,t)return t()}finally{gl.T=e,Lt.p=a,Lt.d.f()}};Yt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Lt.d.C(t,e))};Yt.prefetchDNS=function(t){typeof t=="string"&&Lt.d.D(t)};Yt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=Uu(a,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Lt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:l,fetchPriority:i}):a==="script"&&Lt.d.X(t,{crossOrigin:n,integrity:l,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Yt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Uu(e.as,e.crossOrigin);Lt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Lt.d.M(t)};Yt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=Uu(a,e.crossOrigin);Lt.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Yt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Uu(e.as,e.crossOrigin);Lt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Lt.d.m(t)};Yt.requestFormReset=function(t){Lt.d.r(t)};Yt.unstable_batchedUpdates=function(t,e){return t(e)};Yt.useFormState=function(t,e,a){return gl.H.useFormState(t,e,a)};Yt.useFormStatus=function(){return gl.H.useHostTransitionStatus()};Yt.version="19.1.1";function Rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd)}catch(t){console.error(t)}}Rd(),Td.exports=Yt;var Sp=Td.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=yp,Md=x,wp=Sp;function w(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function _d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function As(t){if(Jl(t)!==t)throw Error(w(188))}function Ep(t){var e=t.alternate;if(!e){if(e=Jl(t),e===null)throw Error(w(188));return e!==t?null:t}for(var a=t,n=e;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return As(l),t;if(i===n)return As(l),e;i=i.sibling}throw Error(w(188))}if(a.return!==n.return)a=l,n=i;else{for(var u=!1,r=l.child;r;){if(r===a){u=!0,a=l,n=i;break}if(r===n){u=!0,n=l,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,n=l;break}if(r===n){u=!0,n=i,a=l;break}r=r.sibling}if(!u)throw Error(w(189))}}if(a.alternate!==n)throw Error(w(190))}if(a.tag!==3)throw Error(w(188));return a.stateNode.current===a?t:e}function jd(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=jd(t),e!==null)return e;t=t.sibling}return null}var rt=Object.assign,Ap=Symbol.for("react.element"),gi=Symbol.for("react.transitional.element"),sl=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Jr=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),Cd=Symbol.for("react.consumer"),Ue=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),Wr=Symbol.for("react.suspense"),Fr=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),la=Symbol.for("react.lazy"),Pr=Symbol.for("react.activity"),zp=Symbol.for("react.memo_cache_sentinel"),Ts=Symbol.iterator;function tl(t){return t===null||typeof t!="object"?null:(t=Ts&&t[Ts]||t["@@iterator"],typeof t=="function"?t:null)}var Rp=Symbol.for("react.client.reference");function Ir(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Rp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case un:return"Fragment";case Jr:return"Profiler";case Dd:return"StrictMode";case Wr:return"Suspense";case Fr:return"SuspenseList";case Pr:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case sl:return"Portal";case Ue:return(t.displayName||"Context")+".Provider";case Cd:return(t._context.displayName||"Context")+".Consumer";case io:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uo:return e=t.displayName||null,e!==null?e:Ir(t.type)||"Memo";case la:e=t._payload,t=t._init;try{return Ir(t(e))}catch{}}return null}var fl=Array.isArray,N=Md.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=wp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Na={pending:!1,data:null,method:null,action:null},tc=[],rn=-1;function Re(t){return{current:t}}function _t(t){0>rn||(t.current=tc[rn],tc[rn]=null,rn--)}function st(t,e){rn++,tc[rn]=t.current,t.current=e}var Ee=Re(null),Dl=Re(null),ma=Re(null),Ii=Re(null);function tu(t,e){switch(st(ma,e),st(Dl,t),st(Ee,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?jf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=jf(e),t=W0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_t(Ee),st(Ee,t)}function Rn(){_t(Ee),_t(Dl),_t(ma)}function ec(t){t.memoizedState!==null&&st(Ii,t);var e=Ee.current,a=W0(e,t.type);e!==a&&(st(Dl,t),st(Ee,a))}function eu(t){Dl.current===t&&(_t(Ee),_t(Dl)),Ii.current===t&&(_t(Ii),Xl._currentValue=Na)}var ac=Object.prototype.hasOwnProperty,ro=Et.unstable_scheduleCallback,ur=Et.unstable_cancelCallback,Mp=Et.unstable_shouldYield,Op=Et.unstable_requestPaint,Ae=Et.unstable_now,_p=Et.unstable_getCurrentPriorityLevel,Nd=Et.unstable_ImmediatePriority,Ud=Et.unstable_UserBlockingPriority,au=Et.unstable_NormalPriority,jp=Et.unstable_LowPriority,Hd=Et.unstable_IdlePriority,Dp=Et.log,Cp=Et.unstable_setDisableYieldValue,Wl=null,It=null;function sa(t){if(typeof Dp=="function"&&Cp(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Wl,t)}catch{}}var te=Math.clz32?Math.clz32:Hp,Np=Math.log,Up=Math.LN2;function Hp(t){return t>>>=0,t===0?32:31-(Np(t)/Up|0)|0}var yi=256,vi=4194304;function _a(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Hu(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var l=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var r=n&134217727;return r!==0?(n=r&~i,n!==0?l=_a(n):(u&=r,u!==0?l=_a(u):a||(a=r&~t,a!==0&&(l=_a(a))))):(r=n&~i,r!==0?l=_a(r):u!==0?l=_a(u):a||(a=n&~t,a!==0&&(l=_a(a)))),l===0?0:e!==0&&e!==l&&!(e&i)&&(i=l&-l,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:l}function Fl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(){var t=yi;return yi<<=1,!(yi&4194048)&&(yi=256),t}function Ld(){var t=vi;return vi<<=1,!(vi&62914560)&&(vi=4194304),t}function rr(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Pl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Lp(t,e,a,n,l,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var r=t.entanglements,c=t.expirationTimes,o=t.hiddenUpdates;for(a=u&~a;0<a;){var d=31-te(a),y=1<<d;r[d]=0,c[d]=-1;var f=o[d];if(f!==null)for(o[d]=null,d=0;d<f.length;d++){var g=f[d];g!==null&&(g.lane&=-536870913)}a&=~y}n!==0&&Yd(t,n,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Yd(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-te(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Gd(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-te(a),l=1<<n;l&e|t[n]&e&&(t[n]|=e),a&=~l}}function co(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function oo(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function qd(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:um(t.type))}function Yp(t,e){var a=$.p;try{return $.p=t,e()}finally{$.p=a}}var Ta=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Ta,Zt="__reactProps$"+Ta,Vn="__reactContainer$"+Ta,nc="__reactEvents$"+Ta,Gp="__reactListeners$"+Ta,qp="__reactHandles$"+Ta,zs="__reactResources$"+Ta,Il="__reactMarker$"+Ta;function so(t){delete t[Ut],delete t[Zt],delete t[nc],delete t[Gp],delete t[qp]}function cn(t){var e=t[Ut];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Vn]||a[Ut]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Nf(t);t!==null;){if(a=t[Ut])return a;t=Nf(t)}return e}t=a,a=t.parentNode}return null}function Zn(t){if(t=t[Ut]||t[Vn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function dl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(w(33))}function xn(t){var e=t[zs];return e||(e=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Mt(t){t[Il]=!0}var Xd=new Set,Qd={};function Ka(t,e){Mn(t,e),Mn(t+"Capture",e)}function Mn(t,e){for(Qd[t]=e,t=0;t<e.length;t++)Xd.add(e[t])}var Xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},Ms={};function Qp(t){return ac.call(Ms,t)?!0:ac.call(Rs,t)?!1:Xp.test(t)?Ms[t]=!0:(Rs[t]=!0,!1)}function Ci(t,e,a){if(Qp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function xi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function _e(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var cr,Os;function an(t){if(cr===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);cr=e&&e[1]||"",Os=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cr+t+Os}var or=!1;function sr(t,e){if(!t||or)return"";or=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(g){var f=g}Reflect.construct(t,[],y)}else{try{y.call()}catch(g){f=g}t.call(y.prototype)}}else{try{throw Error()}catch(g){f=g}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(g){if(g&&f&&typeof g.stack=="string")return[g.stack,f.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var c=u.split(`
`),o=r.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===o.length)for(n=c.length-1,l=o.length-1;1<=n&&0<=l&&c[n]!==o[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==o[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==o[l]){var d=`
`+c[n].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=n&&0<=l);break}}}finally{or=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?an(a):""}function Vp(t){switch(t.tag){case 26:case 27:case 5:return an(t.type);case 16:return an("Lazy");case 13:return an("Suspense");case 19:return an("SuspenseList");case 0:case 15:return sr(t.type,!1);case 11:return sr(t.type.render,!1);case 1:return sr(t.type,!0);case 31:return an("Activity");default:return""}}function _s(t){try{var e="";do e+=Vp(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zp(t){var e=Vd(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nu(t){t._valueTracker||(t._valueTracker=Zp(t))}function Zd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Vd(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kp=/[\n"\\]/g;function oe(t){return t.replace(kp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lc(t,e,a,n,l,i,u,r){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ue(e)):t.value!==""+ue(e)&&(t.value=""+ue(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?ic(t,u,ue(e)):a!=null?ic(t,u,ue(a)):n!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+ue(r):t.removeAttribute("name")}function kd(t,e,a,n,l,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;a=a!=null?""+ue(a):"",e=e!=null?""+ue(e):a,r||e===t.value||(t.value=e),t.defaultValue=e}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=r?t.checked:!!n,t.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function ic(t,e,a){e==="number"&&lu(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,e,a,n){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&n&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,n&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Kd(t,e,a){if(e!=null&&(e=""+ue(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ue(a):""}function $d(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(w(92));if(fl(n)){if(1<n.length)throw Error(w(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=ue(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function On(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Kp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function js(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||Kp.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Jd(t,e,a){if(e!=null&&typeof e!="object")throw Error(w(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var l in e)n=e[l],e.hasOwnProperty(l)&&a[l]!==n&&js(t,l,n)}else for(var i in e)e.hasOwnProperty(i)&&js(t,i,e[i])}function fo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $p=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(t){return Jp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var uc=null;function ho(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var on=null,Sn=null;function Ds(t){var e=Zn(t);if(e&&(t=e.stateNode)){var a=t[Zt]||null;t:switch(t=e.stateNode,e.type){case"input":if(lc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oe(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var l=n[Zt]||null;if(!l)throw Error(w(90));lc(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Zd(n)}break t;case"textarea":Kd(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&bn(t,!!a.multiple,e,!1)}}}var fr=!1;function Wd(t,e,a){if(fr)return t(e,a);fr=!0;try{var n=t(e);return n}finally{if(fr=!1,(on!==null||Sn!==null)&&(ku(),on&&(e=on,t=Sn,Sn=on=null,Ds(e),t)))for(e=0;e<t.length;e++)Ds(t[e])}}function Cl(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Zt]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(w(231,e,typeof a));return a}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=!1;if(Ve)try{var el={};Object.defineProperty(el,"passive",{get:function(){rc=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{rc=!1}var fa=null,mo=null,Ui=null;function Fd(){if(Ui)return Ui;var t,e=mo,a=e.length,n,l="value"in fa?fa.value:fa.textContent,i=l.length;for(t=0;t<a&&e[t]===l[t];t++);var u=a-t;for(n=1;n<=u&&e[a-n]===l[i-n];n++);return Ui=l.slice(t,1<n?1-n:void 0)}function Hi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bi(){return!0}function Cs(){return!1}function kt(t){function e(a,n,l,i,u){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(a=t[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:Cs,this.isPropagationStopped=Cs,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),e}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=kt($a),ti=rt({},$a,{view:0,detail:0}),Wp=kt(ti),dr,hr,al,Lu=rt({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==al&&(al&&t.type==="mousemove"?(dr=t.screenX-al.screenX,hr=t.screenY-al.screenY):hr=dr=0,al=t),dr)},movementY:function(t){return"movementY"in t?t.movementY:hr}}),Ns=kt(Lu),Fp=rt({},Lu,{dataTransfer:0}),Pp=kt(Fp),Ip=rt({},ti,{relatedTarget:0}),mr=kt(Ip),tg=rt({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),eg=kt(tg),ag=rt({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ng=kt(ag),lg=rt({},$a,{data:0}),Us=kt(lg),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rg[t])?!!e[t]:!1}function po(){return cg}var og=rt({},ti,{key:function(t){if(t.key){var e=ig[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(t){return t.type==="keypress"?Hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sg=kt(og),fg=rt({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hs=kt(fg),dg=rt({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),hg=kt(dg),mg=rt({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),pg=kt(mg),gg=rt({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=kt(gg),vg=rt({},$a,{newState:0,oldState:0}),xg=kt(vg),bg=[9,13,27,32],go=Ve&&"CompositionEvent"in window,yl=null;Ve&&"documentMode"in document&&(yl=document.documentMode);var Sg=Ve&&"TextEvent"in window&&!yl,Pd=Ve&&(!go||yl&&8<yl&&11>=yl),Bs=" ",Ls=!1;function Id(t,e){switch(t){case"keyup":return bg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sn=!1;function wg(t,e){switch(t){case"compositionend":return th(e);case"keypress":return e.which!==32?null:(Ls=!0,Bs);case"textInput":return t=e.data,t===Bs&&Ls?null:t;default:return null}}function Eg(t,e){if(sn)return t==="compositionend"||!go&&Id(t,e)?(t=Fd(),Ui=mo=fa=null,sn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pd&&e.locale!=="ko"?null:e.data;default:return null}}var Ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ag[t.type]:e==="textarea"}function eh(t,e,a,n){on?Sn?Sn.push(n):Sn=[n]:on=n,e=wu(e,"onChange"),0<e.length&&(a=new Bu("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var vl=null,Nl=null;function Tg(t){K0(t,0)}function Yu(t){var e=dl(t);if(Zd(e))return t}function Gs(t,e){if(t==="change")return e}var ah=!1;if(Ve){var pr;if(Ve){var gr="oninput"in document;if(!gr){var qs=document.createElement("div");qs.setAttribute("oninput","return;"),gr=typeof qs.oninput=="function"}pr=gr}else pr=!1;ah=pr&&(!document.documentMode||9<document.documentMode)}function Xs(){vl&&(vl.detachEvent("onpropertychange",nh),Nl=vl=null)}function nh(t){if(t.propertyName==="value"&&Yu(Nl)){var e=[];eh(e,Nl,t,ho(t)),Wd(Tg,e)}}function zg(t,e,a){t==="focusin"?(Xs(),vl=e,Nl=a,vl.attachEvent("onpropertychange",nh)):t==="focusout"&&Xs()}function Rg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(Nl)}function Mg(t,e){if(t==="click")return Yu(e)}function Og(t,e){if(t==="input"||t==="change")return Yu(e)}function _g(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ne=typeof Object.is=="function"?Object.is:_g;function Ul(t,e){if(ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ac.call(e,l)||!ne(t[l],e[l]))return!1}return!0}function Qs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vs(t,e){var a=Qs(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qs(a)}}function lh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ih(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=lu(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=lu(t.document)}return e}function yo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var jg=Ve&&"documentMode"in document&&11>=document.documentMode,fn=null,cc=null,xl=null,oc=!1;function Zs(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oc||fn==null||fn!==lu(n)||(n=fn,"selectionStart"in n&&yo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),xl&&Ul(xl,n)||(xl=n,n=wu(cc,"onSelect"),0<n.length&&(e=new Bu("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=fn)))}function Ma(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var dn={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},yr={},uh={};Ve&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Ja(t){if(yr[t])return yr[t];if(!dn[t])return t;var e=dn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in uh)return yr[t]=e[a];return t}var rh=Ja("animationend"),ch=Ja("animationiteration"),oh=Ja("animationstart"),Dg=Ja("transitionrun"),Cg=Ja("transitionstart"),Ng=Ja("transitioncancel"),sh=Ja("transitionend"),fh=new Map,sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sc.push("scrollEnd");function ve(t,e){fh.set(t,e),Ka(e,[t])}var ks=new WeakMap;function se(t,e){if(typeof t=="object"&&t!==null){var a=ks.get(t);return a!==void 0?a:(e={value:t,source:e,stack:_s(e)},ks.set(t,e),e)}return{value:t,source:e,stack:_s(e)}}var ie=[],hn=0,vo=0;function Gu(){for(var t=hn,e=vo=hn=0;e<t;){var a=ie[e];ie[e++]=null;var n=ie[e];ie[e++]=null;var l=ie[e];ie[e++]=null;var i=ie[e];if(ie[e++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}i!==0&&dh(a,l,i)}}function qu(t,e,a,n){ie[hn++]=t,ie[hn++]=e,ie[hn++]=a,ie[hn++]=n,vo|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function xo(t,e,a,n){return qu(t,e,a,n),iu(t)}function kn(t,e){return qu(t,null,null,e),iu(t)}function dh(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=t.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-te(a),t=i.hiddenUpdates,n=t[l],n===null?t[l]=[e]:n.push(e),e.lane=a|536870912),i):null}function iu(t){if(50<Ol)throw Ol=0,jc=null,Error(w(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var mn={};function Ug(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,a,n){return new Ug(t,e,a,n)}function bo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ge(t,e){var a=t.alternate;return a===null?(a=Pt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hh(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Bi(t,e,a,n,l,i){var u=0;if(n=t,typeof t=="function")bo(t)&&(u=1);else if(typeof t=="string")u=B1(t,a,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Pr:return t=Pt(31,a,e,l),t.elementType=Pr,t.lanes=i,t;case un:return Ua(a.children,l,i,e);case Dd:u=8,l|=24;break;case Jr:return t=Pt(12,a,e,l|2),t.elementType=Jr,t.lanes=i,t;case Wr:return t=Pt(13,a,e,l),t.elementType=Wr,t.lanes=i,t;case Fr:return t=Pt(19,a,e,l),t.elementType=Fr,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tp:case Ue:u=10;break t;case Cd:u=9;break t;case io:u=11;break t;case uo:u=14;break t;case la:u=16,n=null;break t}u=29,a=Error(w(130,t===null?"null":typeof t,"")),n=null}return e=Pt(u,a,e,l),e.elementType=t,e.type=n,e.lanes=i,e}function Ua(t,e,a,n){return t=Pt(7,t,n,e),t.lanes=a,t}function vr(t,e,a){return t=Pt(6,t,null,e),t.lanes=a,t}function xr(t,e,a){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var pn=[],gn=0,uu=null,ru=0,re=[],ce=0,Ha=null,He=1,Be="";function ja(t,e){pn[gn++]=ru,pn[gn++]=uu,uu=t,ru=e}function mh(t,e,a){re[ce++]=He,re[ce++]=Be,re[ce++]=Ha,Ha=t;var n=He;t=Be;var l=32-te(n)-1;n&=~(1<<l),a+=1;var i=32-te(e)+l;if(30<i){var u=l-l%5;i=(n&(1<<u)-1).toString(32),n>>=u,l-=u,He=1<<32-te(e)+l|a<<l|n,Be=i+t}else He=1<<i|a<<l|n,Be=t}function So(t){t.return!==null&&(ja(t,1),mh(t,1,0))}function wo(t){for(;t===uu;)uu=pn[--gn],pn[gn]=null,ru=pn[--gn],pn[gn]=null;for(;t===Ha;)Ha=re[--ce],re[ce]=null,Be=re[--ce],re[ce]=null,He=re[--ce],re[ce]=null}var Bt=null,ht=null,K=!1,Ba=null,Se=!1,fc=Error(w(519));function Qa(t){var e=Error(w(418,""));throw Hl(se(e,t)),fc}function Ks(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Ut]=t,e[Zt]=n,a){case"dialog":X("cancel",e),X("close",e);break;case"iframe":case"object":case"embed":X("load",e);break;case"video":case"audio":for(a=0;a<Yl.length;a++)X(Yl[a],e);break;case"source":X("error",e);break;case"img":case"image":case"link":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"input":X("invalid",e),kd(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),nu(e);break;case"select":X("invalid",e);break;case"textarea":X("invalid",e),$d(e,n.value,n.defaultValue,n.children),nu(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||J0(e.textContent,a)?(n.popover!=null&&(X("beforetoggle",e),X("toggle",e)),n.onScroll!=null&&X("scroll",e),n.onScrollEnd!=null&&X("scrollend",e),n.onClick!=null&&(e.onclick=Ju),e=!0):e=!1,e||Qa(t)}function $s(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:Bt=Bt.return}}function nl(t){if(t!==Bt)return!1;if(!K)return $s(t),K=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Bc(t.type,t.memoizedProps)),a=!a),a&&ht&&Qa(t),$s(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){ht=ge(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}ht=null}}else e===27?(e=ht,za(t.type)?(t=Gc,Gc=null,ht=t):ht=e):ht=Bt?ge(t.stateNode.nextSibling):null;return!0}function ei(){ht=Bt=null,K=!1}function Js(){var t=Ba;return t!==null&&(Qt===null?Qt=t:Qt.push.apply(Qt,t),Ba=null),t}function Hl(t){Ba===null?Ba=[t]:Ba.push(t)}var dc=Re(null),Wa=null,Le=null;function ua(t,e,a){st(dc,e._currentValue),e._currentValue=a}function qe(t){t._currentValue=dc.current,_t(dc)}function hc(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function mc(t,e,a,n){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;t:for(;i!==null;){var r=i;i=l;for(var c=0;c<e.length;c++)if(r.context===e[c]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),hc(i.return,a,t),n||(u=null);break t}i=r.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(w(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),hc(u,a,t),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ai(t,e,a,n){t=null;for(var l=e,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(w(387));if(u=u.memoizedProps,u!==null){var r=l.type;ne(l.pendingProps.value,u.value)||(t!==null?t.push(r):t=[r])}}else if(l===Ii.current){if(u=l.alternate,u===null)throw Error(w(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Xl):t=[Xl])}l=l.return}t!==null&&mc(e,t,a,n),e.flags|=262144}function cu(t){for(t=t.firstContext;t!==null;){if(!ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Va(t){Wa=t,Le=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return ph(Wa,t)}function Si(t,e){return Wa===null&&Va(t),ph(t,e)}function ph(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Le===null){if(t===null)throw Error(w(308));Le=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Le=Le.next=e;return a}var Hg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Bg=Et.unstable_scheduleCallback,Lg=Et.unstable_NormalPriority,St={$$typeof:Ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eo(){return{controller:new Hg,data:new Map,refCount:0}}function ni(t){t.refCount--,t.refCount===0&&Bg(Lg,function(){t.controller.abort()})}var bl=null,pc=0,_n=0,wn=null;function Yg(t,e){if(bl===null){var a=bl=[];pc=0,_n=ko(),wn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return pc++,e.then(Ws,Ws),e}function Ws(){if(--pc===0&&bl!==null){wn!==null&&(wn.status="fulfilled");var t=bl;bl=null,_n=0,wn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gg(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Fs=N.S;N.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Yg(t,e),Fs!==null&&Fs(t,e)};var La=Re(null);function Ao(){var t=La.current;return t!==null?t:it.pooledCache}function Li(t,e){e===null?st(La,La.current):st(La,e.pool)}function gh(){var t=Ao();return t===null?null:{parent:St._currentValue,pool:t}}var li=Error(w(460)),yh=Error(w(474)),Xu=Error(w(542)),gc={then:function(){}};function Ps(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wi(){}function vh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(wi,wi),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,tf(t),t;default:if(typeof e.status=="string")e.then(wi,wi);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(w(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=n}},function(n){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,tf(t),t}throw Sl=e,li}}var Sl=null;function Is(){if(Sl===null)throw Error(w(459));var t=Sl;return Sl=null,t}function tf(t){if(t===li||t===Xu)throw Error(w(483))}var ia=!1;function To(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,P&2){var l=n.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),n.pending=e,e=iu(t),dh(t,null,a),e}return qu(t,n,e,a),iu(t)}function wl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Gd(t,a)}}function br(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?l=i=e:i=i.next=e}else l=i=e;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var vc=!1;function El(){if(vc){var t=wn;if(t!==null)throw t}}function Al(t,e,a,n){vc=!1;var l=t.updateQueue;ia=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var c=r,o=c.next;c.next=null,u===null?i=o:u.next=o,u=c;var d=t.alternate;d!==null&&(d=d.updateQueue,r=d.lastBaseUpdate,r!==u&&(r===null?d.firstBaseUpdate=o:r.next=o,d.lastBaseUpdate=c))}if(i!==null){var y=l.baseState;u=0,d=o=c=null,r=i;do{var f=r.lane&-536870913,g=f!==r.lane;if(g?(Z&f)===f:(n&f)===f){f!==0&&f===_n&&(vc=!0),d!==null&&(d=d.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var b=t,S=r;f=e;var T=a;switch(S.tag){case 1:if(b=S.payload,typeof b=="function"){y=b.call(T,y,f);break t}y=b;break t;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,f=typeof b=="function"?b.call(T,y,f):b,f==null)break t;y=rt({},y,f);break t;case 2:ia=!0}}f=r.callback,f!==null&&(t.flags|=64,g&&(t.flags|=8192),g=l.callbacks,g===null?l.callbacks=[f]:g.push(f))}else g={lane:f,tag:r.tag,payload:r.payload,callback:r.callback,next:null},d===null?(o=d=g,c=y):d=d.next=g,u|=f;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;g=r,r=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);d===null&&(c=y),l.baseState=c,l.firstBaseUpdate=o,l.lastBaseUpdate=d,i===null&&(l.shared.lanes=0),Aa|=u,t.lanes=u,t.memoizedState=y}}function xh(t,e){if(typeof t!="function")throw Error(w(191,t));t.call(e)}function bh(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xh(a[t],e)}var jn=Re(null),ou=Re(0);function ef(t,e){t=Ke,st(ou,t),st(jn,e),Ke=t|e.baseLanes}function xc(){st(ou,Ke),st(jn,jn.current)}function zo(){Ke=ou.current,_t(jn),_t(ou)}var wa=0,q=null,at=null,yt=null,su=!1,En=!1,Za=!1,fu=0,Bl=0,An=null,qg=0;function pt(){throw Error(w(321))}function Ro(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ne(t[a],e[a]))return!1;return!0}function Mo(t,e,a,n,l,i){return wa=i,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Fh:Ph,Za=!1,i=a(n,l),Za=!1,En&&(i=wh(e,a,n,l)),Sh(t),i}function Sh(t){N.H=du;var e=at!==null&&at.next!==null;if(wa=0,yt=at=q=null,su=!1,Bl=0,An=null,e)throw Error(w(300));t===null||Ot||(t=t.dependencies,t!==null&&cu(t)&&(Ot=!0))}function wh(t,e,a,n){q=t;var l=0;do{if(En&&(An=null),Bl=0,En=!1,25<=l)throw Error(w(301));if(l+=1,yt=at=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=$g,i=e(a,n)}while(En);return i}function Xg(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?ii(e):e,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(q.flags|=1024),e}function Oo(){var t=fu!==0;return fu=0,t}function _o(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function jo(t){if(su){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}su=!1}wa=0,yt=at=q=null,En=!1,Bl=fu=0,An=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?q.memoizedState=yt=t:yt=yt.next=t,yt}function xt(){if(at===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=yt===null?q.memoizedState:yt.next;if(e!==null)yt=e,at=t;else{if(t===null)throw q.alternate===null?Error(w(467)):Error(w(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},yt===null?q.memoizedState=yt=t:yt=yt.next=t}return yt}function Do(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ii(t){var e=Bl;return Bl+=1,An===null&&(An=[]),t=vh(An,t,e),e=q,(yt===null?e.memoizedState:yt.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Fh:Ph),t}function Qu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ii(t);if(t.$$typeof===Ue)return Ht(t)}throw Error(w(438,String(t)))}function Co(t){var e=null,a=q.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=q.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Do(),q.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=zp;return e.index++,a}function Ze(t,e){return typeof e=="function"?e(t):e}function Yi(t){var e=xt();return No(e,at,t)}function No(t,e,a){var n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=a;var l=t.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}e.baseQueue=l=i,n.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var r=u=null,c=null,o=e,d=!1;do{var y=o.lane&-536870913;if(y!==o.lane?(Z&y)===y:(wa&y)===y){var f=o.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),y===_n&&(d=!0);else if((wa&f)===f){o=o.next,f===_n&&(d=!0);continue}else y={lane:0,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(r=c=y,u=i):c=c.next=y,q.lanes|=f,Aa|=f;y=o.action,Za&&a(i,y),i=o.hasEagerState?o.eagerState:a(i,y)}else f={lane:y,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(r=c=f,u=i):c=c.next=f,q.lanes|=y,Aa|=y;o=o.next}while(o!==null&&o!==e);if(c===null?u=i:c.next=r,!ne(i,t.memoizedState)&&(Ot=!0,d&&(a=wn,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=c,n.lastRenderedState=i}return l===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Sr(t){var e=xt(),a=e.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=t;var n=a.dispatch,l=a.pending,i=e.memoizedState;if(l!==null){a.pending=null;var u=l=l.next;do i=t(i,u.action),u=u.next;while(u!==l);ne(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,n]}function Eh(t,e,a){var n=q,l=xt(),i=K;if(i){if(a===void 0)throw Error(w(407));a=a()}else a=e();var u=!ne((at||l).memoizedState,a);u&&(l.memoizedState=a,Ot=!0),l=l.queue;var r=zh.bind(null,n,l,t);if(ui(2048,8,r,[t]),l.getSnapshot!==e||u||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Dn(9,Vu(),Th.bind(null,n,l,a,e),null),it===null)throw Error(w(349));i||wa&124||Ah(n,e,a)}return a}function Ah(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=q.updateQueue,e===null?(e=Do(),q.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Th(t,e,a,n){e.value=a,e.getSnapshot=n,Rh(e)&&Mh(t)}function zh(t,e,a){return a(function(){Rh(e)&&Mh(t)})}function Rh(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ne(t,a)}catch{return!0}}function Mh(t){var e=kn(t,2);e!==null&&ae(e,t,2)}function bc(t){var e=qt();if(typeof t=="function"){var a=t;if(t=a(),Za){sa(!0);try{a()}finally{sa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:t},e}function Oh(t,e,a,n){return t.baseState=a,No(t,at,typeof n=="function"?n:Ze)}function Qg(t,e,a,n,l){if(Zu(t))throw Error(w(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};N.T!==null?a(!0):i.isTransition=!1,n(i),a=e.pending,a===null?(i.next=e.pending=i,_h(e,i)):(i.next=a.next,e.pending=a.next=i)}}function _h(t,e){var a=e.action,n=e.payload,l=t.state;if(e.isTransition){var i=N.T,u={};N.T=u;try{var r=a(l,n),c=N.S;c!==null&&c(u,r),af(t,e,r)}catch(o){Sc(t,e,o)}finally{N.T=i}}else try{i=a(l,n),af(t,e,i)}catch(o){Sc(t,e,o)}}function af(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){nf(t,e,n)},function(n){return Sc(t,e,n)}):nf(t,e,a)}function nf(t,e,a){e.status="fulfilled",e.value=a,jh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,_h(t,a)))}function Sc(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,jh(e),e=e.next;while(e!==n)}t.action=null}function jh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Dh(t,e){return e}function lf(t,e){if(K){var a=it.formState;if(a!==null){t:{var n=q;if(K){if(ht){e:{for(var l=ht,i=Se;l.nodeType!==8;){if(!i){l=null;break e}if(l=ge(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ht=ge(l.nextSibling),n=l.data==="F!";break t}}Qa(n)}n=!1}n&&(e=a[0])}}return a=qt(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dh,lastRenderedState:e},a.queue=n,a=$h.bind(null,q,n),n.dispatch=a,n=bc(!1),i=Lo.bind(null,q,!1,n.queue),n=qt(),l={state:e,dispatch:null,action:t,pending:null},n.queue=l,a=Qg.bind(null,q,l,i,a),l.dispatch=a,n.memoizedState=t,[e,a,!1]}function uf(t){var e=xt();return Ch(e,at,t)}function Ch(t,e,a){if(e=No(t,e,Dh)[0],t=Yi(Ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=ii(e)}catch(u){throw u===li?Xu:u}else n=e;e=xt();var l=e.queue,i=l.dispatch;return a!==e.memoizedState&&(q.flags|=2048,Dn(9,Vu(),Vg.bind(null,l,a),null)),[n,i,t]}function Vg(t,e){t.action=e}function rf(t){var e=xt(),a=at;if(a!==null)return Ch(e,a,t);xt(),e=e.memoizedState,a=xt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Dn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=q.updateQueue,e===null&&(e=Do(),q.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Vu(){return{destroy:void 0,resource:void 0}}function Nh(){return xt().memoizedState}function Gi(t,e,a,n){var l=qt();n=n===void 0?null:n,q.flags|=t,l.memoizedState=Dn(1|e,Vu(),a,n)}function ui(t,e,a,n){var l=xt();n=n===void 0?null:n;var i=l.memoizedState.inst;at!==null&&n!==null&&Ro(n,at.memoizedState.deps)?l.memoizedState=Dn(e,i,a,n):(q.flags|=t,l.memoizedState=Dn(1|e,i,a,n))}function cf(t,e){Gi(8390656,8,t,e)}function Uh(t,e){ui(2048,8,t,e)}function Hh(t,e){return ui(4,2,t,e)}function Bh(t,e){return ui(4,4,t,e)}function Lh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yh(t,e,a){a=a!=null?a.concat([t]):null,ui(4,4,Lh.bind(null,e,t),a)}function Uo(){}function Gh(t,e){var a=xt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Ro(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function qh(t,e){var a=xt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Ro(e,n[1]))return n[0];if(n=t(),Za){sa(!0);try{t()}finally{sa(!1)}}return a.memoizedState=[n,e],n}function Ho(t,e,a){return a===void 0||wa&1073741824?t.memoizedState=e:(t.memoizedState=a,t=j0(),q.lanes|=t,Aa|=t,a)}function Xh(t,e,a,n){return ne(a,e)?a:jn.current!==null?(t=Ho(t,a,n),ne(t,e)||(Ot=!0),t):wa&42?(t=j0(),q.lanes|=t,Aa|=t,e):(Ot=!0,t.memoizedState=a)}function Qh(t,e,a,n,l){var i=$.p;$.p=i!==0&&8>i?i:8;var u=N.T,r={};N.T=r,Lo(t,!1,e,a);try{var c=l(),o=N.S;if(o!==null&&o(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=Gg(c,n);Tl(t,e,d,ee(t))}else Tl(t,e,n,ee(t))}catch(y){Tl(t,e,{then:function(){},status:"rejected",reason:y},ee())}finally{$.p=i,N.T=u}}function Zg(){}function wc(t,e,a,n){if(t.tag!==5)throw Error(w(476));var l=Vh(t).queue;Qh(t,l,e,Na,a===null?Zg:function(){return Zh(t),a(n)})}function Vh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Na,baseState:Na,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:Na},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Zh(t){var e=Vh(t).next.queue;Tl(t,e,{},ee())}function Bo(){return Ht(Xl)}function kh(){return xt().memoizedState}function Kh(){return xt().memoizedState}function kg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ee();t=pa(a);var n=ga(e,t,a);n!==null&&(ae(n,e,a),wl(n,e,a)),e={cache:Eo()},t.payload=e;return}e=e.return}}function Kg(t,e,a){var n=ee();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Zu(t)?Jh(e,a):(a=xo(t,e,a,n),a!==null&&(ae(a,t,n),Wh(a,e,n)))}function $h(t,e,a){var n=ee();Tl(t,e,a,n)}function Tl(t,e,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zu(t))Jh(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,r=i(u,a);if(l.hasEagerState=!0,l.eagerState=r,ne(r,u))return qu(t,e,l,0),it===null&&Gu(),!1}catch{}finally{}if(a=xo(t,e,l,n),a!==null)return ae(a,t,n),Wh(a,e,n),!0}return!1}function Lo(t,e,a,n){if(n={lane:2,revertLane:ko(),action:n,hasEagerState:!1,eagerState:null,next:null},Zu(t)){if(e)throw Error(w(479))}else e=xo(t,a,n,2),e!==null&&ae(e,t,2)}function Zu(t){var e=t.alternate;return t===q||e!==null&&e===q}function Jh(t,e){En=su=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Wh(t,e,a){if(a&4194048){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Gd(t,a)}}var du={readContext:Ht,use:Qu,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},Fh={readContext:Ht,use:Qu,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:cf,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Gi(4194308,4,Lh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Gi(4194308,4,t,e)},useInsertionEffect:function(t,e){Gi(4,2,t,e)},useMemo:function(t,e){var a=qt();e=e===void 0?null:e;var n=t();if(Za){sa(!0);try{t()}finally{sa(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=qt();if(a!==void 0){var l=a(e);if(Za){sa(!0);try{a(e)}finally{sa(!1)}}}else l=e;return n.memoizedState=n.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},n.queue=t,t=t.dispatch=Kg.bind(null,q,t),[n.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:function(t){t=bc(t);var e=t.queue,a=$h.bind(null,q,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Uo,useDeferredValue:function(t,e){var a=qt();return Ho(a,t,e)},useTransition:function(){var t=bc(!1);return t=Qh.bind(null,q,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=q,l=qt();if(K){if(a===void 0)throw Error(w(407));a=a()}else{if(a=e(),it===null)throw Error(w(349));Z&124||Ah(n,e,a)}l.memoizedState=a;var i={value:a,getSnapshot:e};return l.queue=i,cf(zh.bind(null,n,i,t),[t]),n.flags|=2048,Dn(9,Vu(),Th.bind(null,n,i,a,e),null),a},useId:function(){var t=qt(),e=it.identifierPrefix;if(K){var a=Be,n=He;a=(n&~(1<<32-te(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=fu++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=qg++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Bo,useFormState:lf,useActionState:lf,useOptimistic:function(t){var e=qt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Lo.bind(null,q,!0,a),a.dispatch=e,[t,e]},useMemoCache:Co,useCacheRefresh:function(){return qt().memoizedState=kg.bind(null,q)}},Ph={readContext:Ht,use:Qu,useCallback:Gh,useContext:Ht,useEffect:Uh,useImperativeHandle:Yh,useInsertionEffect:Hh,useLayoutEffect:Bh,useMemo:qh,useReducer:Yi,useRef:Nh,useState:function(){return Yi(Ze)},useDebugValue:Uo,useDeferredValue:function(t,e){var a=xt();return Xh(a,at.memoizedState,t,e)},useTransition:function(){var t=Yi(Ze)[0],e=xt().memoizedState;return[typeof t=="boolean"?t:ii(t),e]},useSyncExternalStore:Eh,useId:kh,useHostTransitionStatus:Bo,useFormState:uf,useActionState:uf,useOptimistic:function(t,e){var a=xt();return Oh(a,at,t,e)},useMemoCache:Co,useCacheRefresh:Kh},$g={readContext:Ht,use:Qu,useCallback:Gh,useContext:Ht,useEffect:Uh,useImperativeHandle:Yh,useInsertionEffect:Hh,useLayoutEffect:Bh,useMemo:qh,useReducer:Sr,useRef:Nh,useState:function(){return Sr(Ze)},useDebugValue:Uo,useDeferredValue:function(t,e){var a=xt();return at===null?Ho(a,t,e):Xh(a,at.memoizedState,t,e)},useTransition:function(){var t=Sr(Ze)[0],e=xt().memoizedState;return[typeof t=="boolean"?t:ii(t),e]},useSyncExternalStore:Eh,useId:kh,useHostTransitionStatus:Bo,useFormState:rf,useActionState:rf,useOptimistic:function(t,e){var a=xt();return at!==null?Oh(a,at,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Co,useCacheRefresh:Kh},Tn=null,Ll=0;function Ei(t){var e=Ll;return Ll+=1,Tn===null&&(Tn=[]),vh(Tn,t,e)}function ll(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ai(t,e){throw e.$$typeof===Ap?Error(w(525)):(t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function of(t){var e=t._init;return e(t._payload)}function Ih(t){function e(h,s){if(t){var m=h.deletions;m===null?(h.deletions=[s],h.flags|=16):m.push(s)}}function a(h,s){if(!t)return null;for(;s!==null;)e(h,s),s=s.sibling;return null}function n(h){for(var s=new Map;h!==null;)h.key!==null?s.set(h.key,h):s.set(h.index,h),h=h.sibling;return s}function l(h,s){return h=Ge(h,s),h.index=0,h.sibling=null,h}function i(h,s,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<s?(h.flags|=67108866,s):m):(h.flags|=67108866,s)):(h.flags|=1048576,s)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function r(h,s,m,v){return s===null||s.tag!==6?(s=vr(m,h.mode,v),s.return=h,s):(s=l(s,m),s.return=h,s)}function c(h,s,m,v){var A=m.type;return A===un?d(h,s,m.props.children,v,m.key):s!==null&&(s.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===la&&of(A)===s.type)?(s=l(s,m.props),ll(s,m),s.return=h,s):(s=Bi(m.type,m.key,m.props,null,h.mode,v),ll(s,m),s.return=h,s)}function o(h,s,m,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=xr(m,h.mode,v),s.return=h,s):(s=l(s,m.children||[]),s.return=h,s)}function d(h,s,m,v,A){return s===null||s.tag!==7?(s=Ua(m,h.mode,v,A),s.return=h,s):(s=l(s,m),s.return=h,s)}function y(h,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=vr(""+s,h.mode,m),s.return=h,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case gi:return m=Bi(s.type,s.key,s.props,null,h.mode,m),ll(m,s),m.return=h,m;case sl:return s=xr(s,h.mode,m),s.return=h,s;case la:var v=s._init;return s=v(s._payload),y(h,s,m)}if(fl(s)||tl(s))return s=Ua(s,h.mode,m,null),s.return=h,s;if(typeof s.then=="function")return y(h,Ei(s),m);if(s.$$typeof===Ue)return y(h,Si(h,s),m);Ai(h,s)}return null}function f(h,s,m,v){var A=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return A!==null?null:r(h,s,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gi:return m.key===A?c(h,s,m,v):null;case sl:return m.key===A?o(h,s,m,v):null;case la:return A=m._init,m=A(m._payload),f(h,s,m,v)}if(fl(m)||tl(m))return A!==null?null:d(h,s,m,v,null);if(typeof m.then=="function")return f(h,s,Ei(m),v);if(m.$$typeof===Ue)return f(h,s,Si(h,m),v);Ai(h,m)}return null}function g(h,s,m,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return h=h.get(m)||null,r(s,h,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gi:return h=h.get(v.key===null?m:v.key)||null,c(s,h,v,A);case sl:return h=h.get(v.key===null?m:v.key)||null,o(s,h,v,A);case la:var z=v._init;return v=z(v._payload),g(h,s,m,v,A)}if(fl(v)||tl(v))return h=h.get(m)||null,d(s,h,v,A,null);if(typeof v.then=="function")return g(h,s,m,Ei(v),A);if(v.$$typeof===Ue)return g(h,s,m,Si(s,v),A);Ai(s,v)}return null}function b(h,s,m,v){for(var A=null,z=null,E=s,O=s=0,U=null;E!==null&&O<m.length;O++){E.index>O?(U=E,E=null):U=E.sibling;var C=f(h,E,m[O],v);if(C===null){E===null&&(E=U);break}t&&E&&C.alternate===null&&e(h,E),s=i(C,s,O),z===null?A=C:z.sibling=C,z=C,E=U}if(O===m.length)return a(h,E),K&&ja(h,O),A;if(E===null){for(;O<m.length;O++)E=y(h,m[O],v),E!==null&&(s=i(E,s,O),z===null?A=E:z.sibling=E,z=E);return K&&ja(h,O),A}for(E=n(E);O<m.length;O++)U=g(E,h,O,m[O],v),U!==null&&(t&&U.alternate!==null&&E.delete(U.key===null?O:U.key),s=i(U,s,O),z===null?A=U:z.sibling=U,z=U);return t&&E.forEach(function(I){return e(h,I)}),K&&ja(h,O),A}function S(h,s,m,v){if(m==null)throw Error(w(151));for(var A=null,z=null,E=s,O=s=0,U=null,C=m.next();E!==null&&!C.done;O++,C=m.next()){E.index>O?(U=E,E=null):U=E.sibling;var I=f(h,E,C.value,v);if(I===null){E===null&&(E=U);break}t&&E&&I.alternate===null&&e(h,E),s=i(I,s,O),z===null?A=I:z.sibling=I,z=I,E=U}if(C.done)return a(h,E),K&&ja(h,O),A;if(E===null){for(;!C.done;O++,C=m.next())C=y(h,C.value,v),C!==null&&(s=i(C,s,O),z===null?A=C:z.sibling=C,z=C);return K&&ja(h,O),A}for(E=n(E);!C.done;O++,C=m.next())C=g(E,h,O,C.value,v),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?O:C.key),s=i(C,s,O),z===null?A=C:z.sibling=C,z=C);return t&&E.forEach(function(L){return e(h,L)}),K&&ja(h,O),A}function T(h,s,m,v){if(typeof m=="object"&&m!==null&&m.type===un&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gi:t:{for(var A=m.key;s!==null;){if(s.key===A){if(A=m.type,A===un){if(s.tag===7){a(h,s.sibling),v=l(s,m.props.children),v.return=h,h=v;break t}}else if(s.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===la&&of(A)===s.type){a(h,s.sibling),v=l(s,m.props),ll(v,m),v.return=h,h=v;break t}a(h,s);break}else e(h,s);s=s.sibling}m.type===un?(v=Ua(m.props.children,h.mode,v,m.key),v.return=h,h=v):(v=Bi(m.type,m.key,m.props,null,h.mode,v),ll(v,m),v.return=h,h=v)}return u(h);case sl:t:{for(A=m.key;s!==null;){if(s.key===A)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){a(h,s.sibling),v=l(s,m.children||[]),v.return=h,h=v;break t}else{a(h,s);break}else e(h,s);s=s.sibling}v=xr(m,h.mode,v),v.return=h,h=v}return u(h);case la:return A=m._init,m=A(m._payload),T(h,s,m,v)}if(fl(m))return b(h,s,m,v);if(tl(m)){if(A=tl(m),typeof A!="function")throw Error(w(150));return m=A.call(m),S(h,s,m,v)}if(typeof m.then=="function")return T(h,s,Ei(m),v);if(m.$$typeof===Ue)return T(h,s,Si(h,m),v);Ai(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(a(h,s.sibling),v=l(s,m),v.return=h,h=v):(a(h,s),v=vr(m,h.mode,v),v.return=h,h=v),u(h)):a(h,s)}return function(h,s,m,v){try{Ll=0;var A=T(h,s,m,v);return Tn=null,A}catch(E){if(E===li||E===Xu)throw E;var z=Pt(29,E,null,h.mode);return z.lanes=v,z.return=h,z}finally{}}}var Cn=Ih(!0),t0=Ih(!1),de=Re(null),Te=null;function ra(t){var e=t.alternate;st(wt,wt.current&1),st(de,t),Te===null&&(e===null||jn.current!==null||e.memoizedState!==null)&&(Te=t)}function e0(t){if(t.tag===22){if(st(wt,wt.current),st(de,t),Te===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Te=t)}}else ca()}function ca(){st(wt,wt.current),st(de,de.current)}function Ye(t){_t(de),Te===t&&(Te=null),_t(wt)}var wt=Re(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yc(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function wr(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:rt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ec={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=ee(),l=pa(n);l.payload=e,a!=null&&(l.callback=a),e=ga(t,l,n),e!==null&&(ae(e,t,n),wl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=ee(),l=pa(n);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=ga(t,l,n),e!==null&&(ae(e,t,n),wl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ee(),n=pa(a);n.tag=2,e!=null&&(n.callback=e),e=ga(t,n,a),e!==null&&(ae(e,t,a),wl(e,t,a))}};function sf(t,e,a,n,l,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,u):e.prototype&&e.prototype.isPureReactComponent?!Ul(a,n)||!Ul(l,i):!0}function ff(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function ka(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=rt({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}var mu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function a0(t){mu(t)}function n0(t){console.error(t)}function l0(t){mu(t)}function pu(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function df(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ac(t,e,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){pu(t,e)},a}function i0(t){return t=pa(t),t.tag=3,t}function u0(t,e,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){df(e,a,n)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){df(e,a,n),typeof l!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Jg(t,e,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&ai(e,a,l,!0),a=de.current,a!==null){switch(a.tag){case 13:return Te===null?Dc():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===gc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Cr(t,n,l)),!1;case 22:return a.flags|=65536,n===gc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Cr(t,n,l)),!1}throw Error(w(435,a.tag))}return Cr(t,n,l),Dc(),!1}if(K)return e=de.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,n!==fc&&(t=Error(w(422),{cause:n}),Hl(se(t,a)))):(n!==fc&&(e=Error(w(423),{cause:n}),Hl(se(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,n=se(n,a),l=Ac(t.stateNode,n,l),br(t,l),mt!==4&&(mt=2)),!1;var i=Error(w(520),{cause:n});if(i=se(i,a),Ml===null?Ml=[i]:Ml.push(i),mt!==4&&(mt=2),e===null)return!0;n=se(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Ac(a.stateNode,n,t),br(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ya===null||!ya.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=i0(l),u0(l,t,a,n),br(a,l),!1}a=a.return}while(a!==null);return!1}var r0=Error(w(461)),Ot=!1;function jt(t,e,a,n){e.child=t===null?t0(e,null,a,n):Cn(e,t.child,a,n)}function hf(t,e,a,n,l){a=a.render;var i=e.ref;if("ref"in n){var u={};for(var r in n)r!=="ref"&&(u[r]=n[r])}else u=n;return Va(e),n=Mo(t,e,a,u,i,l),r=Oo(),t!==null&&!Ot?(_o(t,e,l),ke(t,e,l)):(K&&r&&So(e),e.flags|=1,jt(t,e,n,l),e.child)}function mf(t,e,a,n,l){if(t===null){var i=a.type;return typeof i=="function"&&!bo(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,c0(t,e,i,n,l)):(t=Bi(a.type,null,n,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Yo(t,l)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ul,a(u,n)&&t.ref===e.ref)return ke(t,e,l)}return e.flags|=1,t=Ge(i,n),t.ref=e.ref,t.return=e,e.child=t}function c0(t,e,a,n,l){if(t!==null){var i=t.memoizedProps;if(Ul(i,n)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=n=i,Yo(t,l))t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,ke(t,e,l)}return Tc(t,e,a,n,l)}function o0(t,e,a){var n=e.pendingProps,l=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if(e.flags&128){if(n=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;e.childLanes=i&~n}else e.childLanes=0,e.child=null;return pf(t,e,n,a)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Li(e,i!==null?i.cachePool:null),i!==null?ef(e,i):xc(),e0(e);else return e.lanes=e.childLanes=536870912,pf(t,e,i!==null?i.baseLanes|a:a,a)}else i!==null?(Li(e,i.cachePool),ef(e,i),ca(),e.memoizedState=null):(t!==null&&Li(e,null),xc(),ca());return jt(t,e,l,a),e.child}function pf(t,e,a,n){var l=Ao();return l=l===null?null:{parent:St._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&Li(e,null),xc(),e0(e),t!==null&&ai(t,e,n,!0),null}function qi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(w(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Tc(t,e,a,n,l){return Va(e),a=Mo(t,e,a,n,void 0,l),n=Oo(),t!==null&&!Ot?(_o(t,e,l),ke(t,e,l)):(K&&n&&So(e),e.flags|=1,jt(t,e,a,l),e.child)}function gf(t,e,a,n,l,i){return Va(e),e.updateQueue=null,a=wh(e,n,a,l),Sh(t),n=Oo(),t!==null&&!Ot?(_o(t,e,i),ke(t,e,i)):(K&&n&&So(e),e.flags|=1,jt(t,e,a,i),e.child)}function yf(t,e,a,n,l){if(Va(e),e.stateNode===null){var i=mn,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ht(u)),i=new a(n,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ec,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=n,i.state=e.memoizedState,i.refs={},To(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ht(u):mn,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(wr(e,a,u,n),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Al(e,n,i,l),El(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){i=e.stateNode;var r=e.memoizedProps,c=ka(a,r);i.props=c;var o=i.context,d=a.contextType;u=mn,typeof d=="object"&&d!==null&&(u=Ht(d));var y=a.getDerivedStateFromProps;d=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||o!==u)&&ff(e,i,n,u),ia=!1;var f=e.memoizedState;i.state=f,Al(e,n,i,l),El(),o=e.memoizedState,r||f!==o||ia?(typeof y=="function"&&(wr(e,a,y,n),o=e.memoizedState),(c=ia||sf(e,a,c,n,f,o,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),i.props=n,i.state=o,i.context=u,n=c):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{i=e.stateNode,yc(t,e),u=e.memoizedProps,d=ka(a,u),i.props=d,y=e.pendingProps,f=i.context,o=a.contextType,c=mn,typeof o=="object"&&o!==null&&(c=Ht(o)),r=a.getDerivedStateFromProps,(o=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==y||f!==c)&&ff(e,i,n,c),ia=!1,f=e.memoizedState,i.state=f,Al(e,n,i,l),El();var g=e.memoizedState;u!==y||f!==g||ia||t!==null&&t.dependencies!==null&&cu(t.dependencies)?(typeof r=="function"&&(wr(e,a,r,n),g=e.memoizedState),(d=ia||sf(e,a,d,n,f,g,c)||t!==null&&t.dependencies!==null&&cu(t.dependencies))?(o||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,c)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=g),i.props=n,i.state=g,i.context=c,n=d):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return i=n,qi(t,e),n=(e.flags&128)!==0,i||n?(i=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&n?(e.child=Cn(e,t.child,null,l),e.child=Cn(e,null,a,l)):jt(t,e,a,l),e.memoizedState=i.state,t=e.child):t=ke(t,e,l),t}function vf(t,e,a,n){return ei(),e.flags|=256,jt(t,e,a,n),e.child}var Er={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ar(t){return{baseLanes:t,cachePool:gh()}}function Tr(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=fe),t}function s0(t,e,a){var n=e.pendingProps,l=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(wt.current&2)!==0),u&&(l=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(K){if(l?ra(e):ca(),K){var r=ht,c;if(c=r){t:{for(c=r,r=Se;c.nodeType!==8;){if(!r){r=null;break t}if(c=ge(c.nextSibling),c===null){r=null;break t}}r=c}r!==null?(e.memoizedState={dehydrated:r,treeContext:Ha!==null?{id:He,overflow:Be}:null,retryLane:536870912,hydrationErrors:null},c=Pt(18,null,null,0),c.stateNode=r,c.return=e,e.child=c,Bt=e,ht=null,c=!0):c=!1}c||Qa(e)}if(r=e.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return Yc(r)?e.lanes=32:e.lanes=536870912,null;Ye(e)}return r=n.children,n=n.fallback,l?(ca(),l=e.mode,r=gu({mode:"hidden",children:r},l),n=Ua(n,l,a,null),r.return=e,n.return=e,r.sibling=n,e.child=r,l=e.child,l.memoizedState=Ar(a),l.childLanes=Tr(t,u,a),e.memoizedState=Er,n):(ra(e),zc(e,r))}if(c=t.memoizedState,c!==null&&(r=c.dehydrated,r!==null)){if(i)e.flags&256?(ra(e),e.flags&=-257,e=zr(t,e,a)):e.memoizedState!==null?(ca(),e.child=t.child,e.flags|=128,e=null):(ca(),l=n.fallback,r=e.mode,n=gu({mode:"visible",children:n.children},r),l=Ua(l,r,a,null),l.flags|=2,n.return=e,l.return=e,n.sibling=l,e.child=n,Cn(e,t.child,null,a),n=e.child,n.memoizedState=Ar(a),n.childLanes=Tr(t,u,a),e.memoizedState=Er,e=l);else if(ra(e),Yc(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var o=u.dgst;u=o,n=Error(w(419)),n.stack="",n.digest=u,Hl({value:n,source:null,stack:null}),e=zr(t,e,a)}else if(Ot||ai(t,e,a,!1),u=(a&t.childLanes)!==0,Ot||u){if(u=it,u!==null&&(n=a&-a,n=n&42?1:co(n),n=n&(u.suspendedLanes|a)?0:n,n!==0&&n!==c.retryLane))throw c.retryLane=n,kn(t,n),ae(u,t,n),r0;r.data==="$?"||Dc(),e=zr(t,e,a)}else r.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,ht=ge(r.nextSibling),Bt=e,K=!0,Ba=null,Se=!1,t!==null&&(re[ce++]=He,re[ce++]=Be,re[ce++]=Ha,He=t.id,Be=t.overflow,Ha=e),e=zc(e,n.children),e.flags|=4096);return e}return l?(ca(),l=n.fallback,r=e.mode,c=t.child,o=c.sibling,n=Ge(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,o!==null?l=Ge(o,l):(l=Ua(l,r,a,null),l.flags|=2),l.return=e,n.return=e,n.sibling=l,e.child=n,n=l,l=e.child,r=t.child.memoizedState,r===null?r=Ar(a):(c=r.cachePool,c!==null?(o=St._currentValue,c=c.parent!==o?{parent:o,pool:o}:c):c=gh(),r={baseLanes:r.baseLanes|a,cachePool:c}),l.memoizedState=r,l.childLanes=Tr(t,u,a),e.memoizedState=Er,n):(ra(e),a=t.child,t=a.sibling,a=Ge(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function zc(t,e){return e=gu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function gu(t,e){return t=Pt(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function zr(t,e,a){return Cn(e,t.child,null,a),t=zc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xf(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),hc(t.return,e,a)}function Rr(t,e,a,n,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l)}function f0(t,e,a){var n=e.pendingProps,l=n.revealOrder,i=n.tail;if(jt(t,e,n.children,a),n=wt.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xf(t,a,e);else if(t.tag===19)xf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(st(wt,n),l){case"forwards":for(a=e.child,l=null;a!==null;)t=a.alternate,t!==null&&hu(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Rr(e,!1,l,a,i);break;case"backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&hu(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Rr(e,!0,a,null,i);break;case"together":Rr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ke(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Aa|=e.lanes,!(a&e.childLanes))if(t!==null){if(ai(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,a=Ge(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ge(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Yo(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&cu(t)))}function Wg(t,e,a){switch(e.tag){case 3:tu(e,e.stateNode.containerInfo),ua(e,St,t.memoizedState.cache),ei();break;case 27:case 5:ec(e);break;case 4:tu(e,e.stateNode.containerInfo);break;case 10:ua(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(ra(e),e.flags|=128,null):a&e.child.childLanes?s0(t,e,a):(ra(e),t=ke(t,e,a),t!==null?t.sibling:null);ra(e);break;case 19:var l=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(ai(t,e,a,!1),n=(a&e.childLanes)!==0),l){if(n)return f0(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),st(wt,wt.current),n)break;return null;case 22:case 23:return e.lanes=0,o0(t,e,a);case 24:ua(e,St,t.memoizedState.cache)}return ke(t,e,a)}function d0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ot=!0;else{if(!Yo(t,a)&&!(e.flags&128))return Ot=!1,Wg(t,e,a);Ot=!!(t.flags&131072)}else Ot=!1,K&&e.flags&1048576&&mh(e,ru,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,l=n._init;if(n=l(n._payload),e.type=n,typeof n=="function")bo(n)?(t=ka(n,t),e.tag=1,e=yf(null,e,n,t,a)):(e.tag=0,e=Tc(null,e,n,t,a));else{if(n!=null){if(l=n.$$typeof,l===io){e.tag=11,e=hf(null,e,n,t,a);break t}else if(l===uo){e.tag=14,e=mf(null,e,n,t,a);break t}}throw e=Ir(n)||n,Error(w(306,e,""))}}return e;case 0:return Tc(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,l=ka(n,e.pendingProps),yf(t,e,n,l,a);case 3:t:{if(tu(e,e.stateNode.containerInfo),t===null)throw Error(w(387));n=e.pendingProps;var i=e.memoizedState;l=i.element,yc(t,e),Al(e,n,null,a);var u=e.memoizedState;if(n=u.cache,ua(e,St,n),n!==i.cache&&mc(e,[St],a,!0),El(),n=u.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=vf(t,e,n,a);break t}else if(n!==l){l=se(Error(w(424)),e),Hl(l),e=vf(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=ge(t.firstChild),Bt=e,K=!0,Ba=null,Se=!0,a=t0(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ei(),n===l){e=ke(t,e,a);break t}jt(t,e,n,a)}e=e.child}return e;case 26:return qi(t,e),t===null?(a=Hf(e.type,null,e.pendingProps,null))?e.memoizedState=a:K||(a=e.type,t=e.pendingProps,n=Eu(ma.current).createElement(a),n[Ut]=e,n[Zt]=t,Ct(n,a,t),Mt(n),e.stateNode=n):e.memoizedState=Hf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ec(e),t===null&&K&&(n=e.stateNode=P0(e.type,e.pendingProps,ma.current),Bt=e,Se=!0,l=ht,za(e.type)?(Gc=l,ht=ge(n.firstChild)):ht=l),jt(t,e,e.pendingProps.children,a),qi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&K&&((l=n=ht)&&(n=A1(n,e.type,e.pendingProps,Se),n!==null?(e.stateNode=n,Bt=e,ht=ge(n.firstChild),Se=!1,l=!0):l=!1),l||Qa(e)),ec(e),l=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,n=i.children,Bc(l,i)?n=null:u!==null&&Bc(l,u)&&(e.flags|=32),e.memoizedState!==null&&(l=Mo(t,e,Xg,null,null,a),Xl._currentValue=l),qi(t,e),jt(t,e,n,a),e.child;case 6:return t===null&&K&&((t=a=ht)&&(a=T1(a,e.pendingProps,Se),a!==null?(e.stateNode=a,Bt=e,ht=null,t=!0):t=!1),t||Qa(e)),null;case 13:return s0(t,e,a);case 4:return tu(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Cn(e,null,n,a):jt(t,e,n,a),e.child;case 11:return hf(t,e,e.type,e.pendingProps,a);case 7:return jt(t,e,e.pendingProps,a),e.child;case 8:return jt(t,e,e.pendingProps.children,a),e.child;case 12:return jt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,ua(e,e.type,n.value),jt(t,e,n.children,a),e.child;case 9:return l=e.type._context,n=e.pendingProps.children,Va(e),l=Ht(l),n=n(l),e.flags|=1,jt(t,e,n,a),e.child;case 14:return mf(t,e,e.type,e.pendingProps,a);case 15:return c0(t,e,e.type,e.pendingProps,a);case 19:return f0(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=gu(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Ge(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return o0(t,e,a);case 24:return Va(e),n=Ht(St),t===null?(l=Ao(),l===null&&(l=it,i=Eo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),e.memoizedState={parent:n,cache:l},To(e),ua(e,St,l)):(t.lanes&a&&(yc(t,e),Al(e,null,null,a),El()),l=t.memoizedState,i=e.memoizedState,l.parent!==n?(l={parent:n,cache:n},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),ua(e,St,n)):(n=i.cache,ua(e,St,n),n!==l.cache&&mc(e,[St],a,!0))),jt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(w(156,e.tag))}function je(t){t.flags|=4}function bf(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!em(e)){if(e=de.current,e!==null&&((Z&4194048)===Z?Te!==null:(Z&62914560)!==Z&&!(Z&536870912)||e!==Te))throw Sl=gc,yh;t.flags|=8192}}function Ti(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ld():536870912,t.lanes|=e,Nn|=e)}function il(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function Fg(t,e,a){var n=e.pendingProps;switch(wo(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return ft(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),qe(St),Rn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(nl(e)?je(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Js())),ft(e),null;case 26:return a=e.memoizedState,t===null?(je(e),a!==null?(ft(e),bf(e,a)):(ft(e),e.flags&=-16777217)):a?a!==t.memoizedState?(je(e),ft(e),bf(e,a)):(ft(e),e.flags&=-16777217):(t.memoizedProps!==n&&je(e),ft(e),e.flags&=-16777217),null;case 27:eu(e),a=ma.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&je(e);else{if(!n){if(e.stateNode===null)throw Error(w(166));return ft(e),null}t=Ee.current,nl(e)?Ks(e):(t=P0(l,n,a),e.stateNode=t,je(e))}return ft(e),null;case 5:if(eu(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&je(e);else{if(!n){if(e.stateNode===null)throw Error(w(166));return ft(e),null}if(t=Ee.current,nl(e))Ks(e);else{switch(l=Eu(ma.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}t[Ut]=e,t[Zt]=n;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Ct(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&je(e)}}return ft(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&je(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(w(166));if(t=ma.current,nl(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,l=Bt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}t[Ut]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||J0(t.nodeValue,a)),t||Qa(e)}else t=Eu(t).createTextNode(n),t[Ut]=e,e.stateNode=t}return ft(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=nl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(w(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ut]=e}else ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),l=!1}else l=Js(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Ye(e),e):(Ye(e),null)}if(Ye(e),e.flags&128)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Ti(e,e.updateQueue),ft(e),null;case 4:return Rn(),t===null&&Ko(e.stateNode.containerInfo),ft(e),null;case 10:return qe(e.type),ft(e),null;case 19:if(_t(wt),l=e.memoizedState,l===null)return ft(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)il(l,!1);else{if(mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=hu(t),i!==null){for(e.flags|=128,il(l,!1),t=i.updateQueue,e.updateQueue=t,Ti(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)hh(a,t),a=a.sibling;return st(wt,wt.current&1|2),e.child}t=t.sibling}l.tail!==null&&Ae()>vu&&(e.flags|=128,n=!0,il(l,!1),e.lanes=4194304)}else{if(!n)if(t=hu(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Ti(e,t),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return ft(e),null}else 2*Ae()-l.renderingStartTime>vu&&a!==536870912&&(e.flags|=128,n=!0,il(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ae(),e.sibling=null,t=wt.current,st(wt,n?t&1|2:t&1),e):(ft(e),null);case 22:case 23:return Ye(e),zo(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?a&536870912&&!(e.flags&128)&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),a=e.updateQueue,a!==null&&Ti(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&_t(La),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),qe(St),ft(e),null;case 25:return null;case 30:return null}throw Error(w(156,e.tag))}function Pg(t,e){switch(wo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qe(St),Rn(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return eu(e),null;case 13:if(Ye(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(wt),null;case 4:return Rn(),null;case 10:return qe(e.type),null;case 22:case 23:return Ye(e),zo(),t!==null&&_t(La),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return qe(St),null;case 25:return null;default:return null}}function h0(t,e){switch(wo(e),e.tag){case 3:qe(St),Rn();break;case 26:case 27:case 5:eu(e);break;case 4:Rn();break;case 13:Ye(e);break;case 19:_t(wt);break;case 10:qe(e.type);break;case 22:case 23:Ye(e),zo(),t!==null&&_t(La);break;case 24:qe(St)}}function ri(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&t)===t){n=void 0;var i=a.create,u=a.inst;n=i(),u.destroy=n}a=a.next}while(a!==l)}}catch(r){lt(e,e.return,r)}}function Ea(t,e,a){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&t)===t){var u=n.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,l=e;var c=a,o=r;try{o()}catch(d){lt(l,c,d)}}}n=n.next}while(n!==i)}}catch(d){lt(e,e.return,d)}}function m0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{bh(e,a)}catch(n){lt(t,t.return,n)}}}function p0(t,e,a){a.props=ka(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){lt(t,e,n)}}function zl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(l){lt(t,e,l)}}function we(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){lt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){lt(t,e,l)}else a.current=null}function g0(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){lt(t,t.return,l)}}function Mr(t,e,a){try{var n=t.stateNode;x1(n,t.type,a,e),n[Zt]=e}catch(l){lt(t,t.return,l)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&za(t.type)||t.tag===4}function Or(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Ju));else if(n!==4&&(n===27&&za(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Rc(t,e,a),t=t.sibling;t!==null;)Rc(t,e,a),t=t.sibling}function yu(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yu(t,e,a),t=t.sibling;t!==null;)yu(t,e,a),t=t.sibling}function v0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Ct(e,n,a),e[Ut]=t,e[Zt]=a}catch(i){lt(t,t.return,i)}}var Ne=!1,gt=!1,_r=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,zt=null;function Ig(t,e){if(t=t.containerInfo,Uc=Ru,t=ih(t),yo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,r=-1,c=-1,o=0,d=0,y=t,f=null;e:for(;;){for(var g;y!==a||l!==0&&y.nodeType!==3||(r=u+l),y!==i||n!==0&&y.nodeType!==3||(c=u+n),y.nodeType===3&&(u+=y.nodeValue.length),(g=y.firstChild)!==null;)f=y,y=g;for(;;){if(y===t)break e;if(f===a&&++o===l&&(r=u),f===i&&++d===n&&(c=u),(g=y.nextSibling)!==null)break;y=f,f=y.parentNode}y=g}a=r===-1||c===-1?null:{start:r,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:t,selectionRange:a},Ru=!1,zt=e;zt!==null;)if(e=zt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,zt=t;else for(;zt!==null;){switch(e=zt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,a=e,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var b=ka(a.type,l,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(b,i),n.__reactInternalSnapshotBeforeUpdate=t}catch(S){lt(a,a.return,S)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Lc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(w(163))}if(t=e.sibling,t!==null){t.return=e.return,zt=t;break}zt=e.return}}function x0(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),n&4&&ri(5,a);break;case 1:if(ta(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){lt(a,a.return,u)}else{var l=ka(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){lt(a,a.return,u)}}n&64&&m0(a),n&512&&zl(a,a.return);break;case 3:if(ta(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{bh(t,e)}catch(u){lt(a,a.return,u)}}break;case 27:e===null&&n&4&&v0(a);case 26:case 5:ta(t,a),e===null&&n&4&&g0(a),n&512&&zl(a,a.return);break;case 12:ta(t,a);break;case 13:ta(t,a),n&4&&w0(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=c1.bind(null,a),z1(t,a))));break;case 22:if(n=a.memoizedState!==null||Ne,!n){e=e!==null&&e.memoizedState!==null||gt,l=Ne;var i=gt;Ne=n,(gt=e)&&!i?aa(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),Ne=l,gt=i}break;case 30:break;default:ta(t,a)}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&so(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,Xt=!1;function De(t,e,a){for(a=a.child;a!==null;)S0(t,e,a),a=a.sibling}function S0(t,e,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Wl,a)}catch{}switch(a.tag){case 26:gt||we(a,e),De(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||we(a,e);var n=ct,l=Xt;za(a.type)&&(ct=a.stateNode,Xt=!1),De(t,e,a),_l(a.stateNode),ct=n,Xt=l;break;case 5:gt||we(a,e);case 6:if(n=ct,l=Xt,ct=null,De(t,e,a),ct=n,Xt=l,ct!==null)if(Xt)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(a.stateNode)}catch(i){lt(a,e,i)}else try{ct.removeChild(a.stateNode)}catch(i){lt(a,e,i)}break;case 18:ct!==null&&(Xt?(t=ct,Cf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Zl(t)):Cf(ct,a.stateNode));break;case 4:n=ct,l=Xt,ct=a.stateNode.containerInfo,Xt=!0,De(t,e,a),ct=n,Xt=l;break;case 0:case 11:case 14:case 15:gt||Ea(2,a,e),gt||Ea(4,a,e),De(t,e,a);break;case 1:gt||(we(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&p0(a,e,n)),De(t,e,a);break;case 21:De(t,e,a);break;case 22:gt=(n=gt)||a.memoizedState!==null,De(t,e,a),gt=n;break;default:De(t,e,a)}}function w0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zl(t)}catch(a){lt(e,e.return,a)}}function t1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Sf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Sf),e;default:throw Error(w(435,t.tag))}}function jr(t,e){var a=t1(t);e.forEach(function(n){var l=o1.bind(null,t,n);a.has(n)||(a.add(n),n.then(l,l))})}function $t(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=t,u=e,r=u;t:for(;r!==null;){switch(r.tag){case 27:if(za(r.type)){ct=r.stateNode,Xt=!1;break t}break;case 5:ct=r.stateNode,Xt=!1;break t;case 3:case 4:ct=r.stateNode.containerInfo,Xt=!0;break t}r=r.return}if(ct===null)throw Error(w(160));S0(i,u,l),ct=null,Xt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)E0(e,t),e=e.sibling}var pe=null;function E0(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$t(e,t),Jt(t),n&4&&(Ea(3,t,t.return),ri(3,t),Ea(5,t,t.return));break;case 1:$t(e,t),Jt(t),n&512&&(gt||a===null||we(a,a.return)),n&64&&Ne&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=pe;if($t(e,t),Jt(t),n&512&&(gt||a===null||we(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,l=l.ownerDocument||l;e:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Il]||i[Ut]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Ct(i,n,a),i[Ut]=t,Mt(i),n=i;break t;case"link":var u=Lf("link","href",l).get(n+(a.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(r,1);break e}}i=l.createElement(n),Ct(i,n,a),l.head.appendChild(i);break;case"meta":if(u=Lf("meta","content",l).get(n+(a.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(r,1);break e}}i=l.createElement(n),Ct(i,n,a),l.head.appendChild(i);break;default:throw Error(w(468,n))}i[Ut]=t,Mt(i),n=i}t.stateNode=n}else Yf(l,t.type,t.stateNode);else t.stateNode=Bf(l,n,t.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Yf(l,t.type,t.stateNode):Bf(l,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Mr(t,t.memoizedProps,a.memoizedProps)}break;case 27:$t(e,t),Jt(t),n&512&&(gt||a===null||we(a,a.return)),a!==null&&n&4&&Mr(t,t.memoizedProps,a.memoizedProps);break;case 5:if($t(e,t),Jt(t),n&512&&(gt||a===null||we(a,a.return)),t.flags&32){l=t.stateNode;try{On(l,"")}catch(g){lt(t,t.return,g)}}n&4&&t.stateNode!=null&&(l=t.memoizedProps,Mr(t,l,a!==null?a.memoizedProps:l)),n&1024&&(_r=!0);break;case 6:if($t(e,t),Jt(t),n&4){if(t.stateNode===null)throw Error(w(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(g){lt(t,t.return,g)}}break;case 3:if(Vi=null,l=pe,pe=Au(e.containerInfo),$t(e,t),pe=l,Jt(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Zl(e.containerInfo)}catch(g){lt(t,t.return,g)}_r&&(_r=!1,A0(t));break;case 4:n=pe,pe=Au(t.stateNode.containerInfo),$t(e,t),Jt(t),pe=n;break;case 12:$t(e,t),Jt(t);break;case 13:$t(e,t),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vo=Ae()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,jr(t,n)));break;case 22:l=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,o=Ne,d=gt;if(Ne=o||l,gt=d||c,$t(e,t),gt=d,Ne=o,Jt(t),n&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(a===null||c||Ne||gt||Da(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(i=c.stateNode,l)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=c.stateNode;var y=c.memoizedProps.style,f=y!=null&&y.hasOwnProperty("display")?y.display:null;r.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(g){lt(c,c.return,g)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(g){lt(c,c.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,jr(t,a))));break;case 19:$t(e,t),Jt(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,jr(t,n)));break;case 30:break;case 21:break;default:$t(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(y0(n)){a=n;break}n=n.return}if(a==null)throw Error(w(160));switch(a.tag){case 27:var l=a.stateNode,i=Or(t);yu(t,i,l);break;case 5:var u=a.stateNode;a.flags&32&&(On(u,""),a.flags&=-33);var r=Or(t);yu(t,r,u);break;case 3:case 4:var c=a.stateNode.containerInfo,o=Or(t);Rc(t,o,c);break;default:throw Error(w(161))}}catch(d){lt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function A0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;A0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ta(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)x0(t,e.alternate,e),e=e.sibling}function Da(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ea(4,e,e.return),Da(e);break;case 1:we(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&p0(e,e.return,a),Da(e);break;case 27:_l(e.stateNode);case 26:case 5:we(e,e.return),Da(e);break;case 22:e.memoizedState===null&&Da(e);break;case 30:Da(e);break;default:Da(e)}t=t.sibling}}function aa(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,l=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:aa(l,i,a),ri(4,i);break;case 1:if(aa(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(o){lt(n,n.return,o)}if(n=i,l=n.updateQueue,l!==null){var r=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)xh(c[l],r)}catch(o){lt(n,n.return,o)}}a&&u&64&&m0(i),zl(i,i.return);break;case 27:v0(i);case 26:case 5:aa(l,i,a),a&&n===null&&u&4&&g0(i),zl(i,i.return);break;case 12:aa(l,i,a);break;case 13:aa(l,i,a),a&&u&4&&w0(l,i);break;case 22:i.memoizedState===null&&aa(l,i,a),zl(i,i.return);break;case 30:break;default:aa(l,i,a)}e=e.sibling}}function Go(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ni(a))}function qo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ni(t))}function xe(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T0(t,e,a,n),e=e.sibling}function T0(t,e,a,n){var l=e.flags;switch(e.tag){case 0:case 11:case 15:xe(t,e,a,n),l&2048&&ri(9,e);break;case 1:xe(t,e,a,n);break;case 3:xe(t,e,a,n),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ni(t)));break;case 12:if(l&2048){xe(t,e,a,n),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){lt(e,e.return,c)}}else xe(t,e,a,n);break;case 13:xe(t,e,a,n);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?xe(t,e,a,n):Rl(t,e):i._visibility&2?xe(t,e,a,n):(i._visibility|=2,nn(t,e,a,n,(e.subtreeFlags&10256)!==0)),l&2048&&Go(u,e);break;case 24:xe(t,e,a,n),l&2048&&qo(e.alternate,e);break;default:xe(t,e,a,n)}}function nn(t,e,a,n,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,u=e,r=a,c=n,o=u.flags;switch(u.tag){case 0:case 11:case 15:nn(i,u,r,c,l),ri(8,u);break;case 23:break;case 22:var d=u.stateNode;u.memoizedState!==null?d._visibility&2?nn(i,u,r,c,l):Rl(i,u):(d._visibility|=2,nn(i,u,r,c,l)),l&&o&2048&&Go(u.alternate,u);break;case 24:nn(i,u,r,c,l),l&&o&2048&&qo(u.alternate,u);break;default:nn(i,u,r,c,l)}e=e.sibling}}function Rl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,l=n.flags;switch(n.tag){case 22:Rl(a,n),l&2048&&Go(n.alternate,n);break;case 24:Rl(a,n),l&2048&&qo(n.alternate,n);break;default:Rl(a,n)}e=e.sibling}}var hl=8192;function Pa(t){if(t.subtreeFlags&hl)for(t=t.child;t!==null;)z0(t),t=t.sibling}function z0(t){switch(t.tag){case 26:Pa(t),t.flags&hl&&t.memoizedState!==null&&Y1(pe,t.memoizedState,t.memoizedProps);break;case 5:Pa(t);break;case 3:case 4:var e=pe;pe=Au(t.stateNode.containerInfo),Pa(t),pe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=hl,hl=16777216,Pa(t),hl=e):Pa(t));break;default:Pa(t)}}function R0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ul(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];zt=n,O0(n,t)}R0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M0(t),t=t.sibling}function M0(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Xi(t)):ul(t);break;default:ul(t)}}function Xi(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];zt=n,O0(n,t)}R0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ea(8,e,e.return),Xi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Xi(e));break;default:Xi(e)}t=t.sibling}}function O0(t,e){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:Ea(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ni(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,zt=n;else t:for(a=t;zt!==null;){n=zt;var l=n.sibling,i=n.return;if(b0(n),n===a){zt=null;break t}if(l!==null){l.return=i,zt=l;break t}zt=i}}}var e1={getCacheForType:function(t){var e=Ht(St),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},a1=typeof WeakMap=="function"?WeakMap:Map,P=0,it=null,Q=null,Z=0,F=0,Ft=null,da=!1,Kn=!1,Xo=!1,Ke=0,mt=0,Aa=0,Ya=0,Qo=0,fe=0,Nn=0,Ml=null,Qt=null,Mc=!1,Vo=0,vu=1/0,xu=null,ya=null,Dt=0,va=null,Un=null,zn=0,Oc=0,_c=null,_0=null,Ol=0,jc=null;function ee(){if(P&2&&Z!==0)return Z&-Z;if(N.T!==null){var t=_n;return t!==0?t:ko()}return qd()}function j0(){fe===0&&(fe=!(Z&536870912)||K?Bd():536870912);var t=de.current;return t!==null&&(t.flags|=32),fe}function ae(t,e,a){(t===it&&(F===2||F===9)||t.cancelPendingCommit!==null)&&(Hn(t,0),ha(t,Z,fe,!1)),Pl(t,a),(!(P&2)||t!==it)&&(t===it&&(!(P&2)&&(Ya|=a),mt===4&&ha(t,Z,fe,!1)),Me(t))}function D0(t,e,a){if(P&6)throw Error(w(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Fl(t,e),l=n?i1(t,e):Dr(t,e,!0),i=n;do{if(l===0){Kn&&!n&&ha(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!n1(a)){l=Dr(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var r=t;l=Ml;var c=r.current.memoizedState.isDehydrated;if(c&&(Hn(r,u).flags|=256),u=Dr(r,u,!1),u!==2){if(Xo&&!c){r.errorRecoveryDisabledLanes|=i,Ya|=i,l=4;break t}i=Qt,Qt=l,i!==null&&(Qt===null?Qt=i:Qt.push.apply(Qt,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){Hn(t,0),ha(t,e,0,!0);break}t:{switch(n=t,i=l,i){case 0:case 1:throw Error(w(345));case 4:if((e&4194048)!==e)break;case 6:ha(n,e,fe,!da);break t;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(w(329))}if((e&62914560)===e&&(l=Vo+300-Ae(),10<l)){if(ha(n,e,fe,!da),Hu(n,0,!0)!==0)break t;n.timeoutHandle=F0(wf.bind(null,n,a,Qt,xu,Mc,e,fe,Ya,Nn,da,i,2,-0,0),l);break t}wf(n,a,Qt,xu,Mc,e,fe,Ya,Nn,da,i,0,-0,0)}}break}while(!0);Me(t)}function wf(t,e,a,n,l,i,u,r,c,o,d,y,f,g){if(t.timeoutHandle=-1,y=e.subtreeFlags,(y&8192||(y&16785408)===16785408)&&(ql={stylesheets:null,count:0,unsuspend:L1},z0(e),y=G1(),y!==null)){t.cancelPendingCommit=y(Af.bind(null,t,e,i,a,n,l,u,r,c,d,1,f,g)),ha(t,i,u,!o);return}Af(t,e,i,a,n,l,u,r,c)}function n1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!ne(i(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ha(t,e,a,n){e&=~Qo,e&=~Ya,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var l=e;0<l;){var i=31-te(l),u=1<<i;n[i]=-1,l&=~u}a!==0&&Yd(t,a,e)}function ku(){return P&6?!0:(ci(0),!1)}function Zo(){if(Q!==null){if(F===0)var t=Q.return;else t=Q,Le=Wa=null,jo(t),Tn=null,Ll=0,t=Q;for(;t!==null;)h0(t.alternate,t),t=t.return;Q=null}}function Hn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,S1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zo(),it=t,Q=a=Ge(t.current,null),Z=e,F=0,Ft=null,da=!1,Kn=Fl(t,e),Xo=!1,Nn=fe=Qo=Ya=Aa=mt=0,Qt=Ml=null,Mc=!1,e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var l=31-te(n),i=1<<l;e|=t[l],n&=~i}return Ke=e,Gu(),a}function C0(t,e){q=null,N.H=du,e===li||e===Xu?(e=Is(),F=3):e===yh?(e=Is(),F=4):F=e===r0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ft=e,Q===null&&(mt=1,pu(t,se(e,t.current)))}function N0(){var t=N.H;return N.H=du,t===null?du:t}function U0(){var t=N.A;return N.A=e1,t}function Dc(){mt=4,da||(Z&4194048)!==Z&&de.current!==null||(Kn=!0),!(Aa&134217727)&&!(Ya&134217727)||it===null||ha(it,Z,fe,!1)}function Dr(t,e,a){var n=P;P|=2;var l=N0(),i=U0();(it!==t||Z!==e)&&(xu=null,Hn(t,e)),e=!1;var u=mt;t:do try{if(F!==0&&Q!==null){var r=Q,c=Ft;switch(F){case 8:Zo(),u=6;break t;case 3:case 2:case 9:case 6:de.current===null&&(e=!0);var o=F;if(F=0,Ft=null,yn(t,r,c,o),a&&Kn){u=0;break t}break;default:o=F,F=0,Ft=null,yn(t,r,c,o)}}l1(),u=mt;break}catch(d){C0(t,d)}while(!0);return e&&t.shellSuspendCounter++,Le=Wa=null,P=n,N.H=l,N.A=i,Q===null&&(it=null,Z=0,Gu()),u}function l1(){for(;Q!==null;)H0(Q)}function i1(t,e){var a=P;P|=2;var n=N0(),l=U0();it!==t||Z!==e?(xu=null,vu=Ae()+500,Hn(t,e)):Kn=Fl(t,e);t:do try{if(F!==0&&Q!==null){e=Q;var i=Ft;e:switch(F){case 1:F=0,Ft=null,yn(t,e,i,1);break;case 2:case 9:if(Ps(i)){F=0,Ft=null,Ef(e);break}e=function(){F!==2&&F!==9||it!==t||(F=7),Me(t)},i.then(e,e);break t;case 3:F=7;break t;case 4:F=5;break t;case 7:Ps(i)?(F=0,Ft=null,Ef(e)):(F=0,Ft=null,yn(t,e,i,7));break;case 5:var u=null;switch(Q.tag){case 26:u=Q.memoizedState;case 5:case 27:var r=Q;if(!u||em(u)){F=0,Ft=null;var c=r.sibling;if(c!==null)Q=c;else{var o=r.return;o!==null?(Q=o,Ku(o)):Q=null}break e}}F=0,Ft=null,yn(t,e,i,5);break;case 6:F=0,Ft=null,yn(t,e,i,6);break;case 8:Zo(),mt=6;break t;default:throw Error(w(462))}}u1();break}catch(d){C0(t,d)}while(!0);return Le=Wa=null,N.H=n,N.A=l,P=a,Q!==null?0:(it=null,Z=0,Gu(),mt)}function u1(){for(;Q!==null&&!Mp();)H0(Q)}function H0(t){var e=d0(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?Ku(t):Q=e}function Ef(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=gf(a,e,e.pendingProps,e.type,void 0,Z);break;case 11:e=gf(a,e,e.pendingProps,e.type.render,e.ref,Z);break;case 5:jo(e);default:h0(a,e),e=Q=hh(e,Ke),e=d0(a,e,Ke)}t.memoizedProps=t.pendingProps,e===null?Ku(t):Q=e}function yn(t,e,a,n){Le=Wa=null,jo(e),Tn=null,Ll=0;var l=e.return;try{if(Jg(t,l,e,a,Z)){mt=1,pu(t,se(a,t.current)),Q=null;return}}catch(i){if(l!==null)throw Q=l,i;mt=1,pu(t,se(a,t.current)),Q=null;return}e.flags&32768?(K||n===1?t=!0:Kn||Z&536870912?t=!1:(da=t=!0,(n===2||n===9||n===3||n===6)&&(n=de.current,n!==null&&n.tag===13&&(n.flags|=16384))),B0(e,t)):Ku(e)}function Ku(t){var e=t;do{if(e.flags&32768){B0(e,da);return}t=e.return;var a=Fg(e.alternate,e,Ke);if(a!==null){Q=a;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=t}while(e!==null);mt===0&&(mt=5)}function B0(t,e){do{var a=Pg(t.alternate,t);if(a!==null){a.flags&=32767,Q=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Q=t;return}Q=t=a}while(t!==null);mt=6,Q=null}function Af(t,e,a,n,l,i,u,r,c){t.cancelPendingCommit=null;do $u();while(Dt!==0);if(P&6)throw Error(w(327));if(e!==null){if(e===t.current)throw Error(w(177));if(i=e.lanes|e.childLanes,i|=vo,Lp(t,a,i,u,r,c),t===it&&(Q=it=null,Z=0),Un=e,va=t,zn=a,Oc=i,_c=l,_0=n,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,s1(au,function(){return X0(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,e.subtreeFlags&13878||n){n=N.T,N.T=null,l=$.p,$.p=2,u=P,P|=4;try{Ig(t,e,a)}finally{P=u,$.p=l,N.T=n}}Dt=1,L0(),Y0(),G0()}}function L0(){if(Dt===1){Dt=0;var t=va,e=Un,a=(e.flags&13878)!==0;if(e.subtreeFlags&13878||a){a=N.T,N.T=null;var n=$.p;$.p=2;var l=P;P|=4;try{E0(e,t);var i=Hc,u=ih(t.containerInfo),r=i.focusedElem,c=i.selectionRange;if(u!==r&&r&&r.ownerDocument&&lh(r.ownerDocument.documentElement,r)){if(c!==null&&yo(r)){var o=c.start,d=c.end;if(d===void 0&&(d=o),"selectionStart"in r)r.selectionStart=o,r.selectionEnd=Math.min(d,r.value.length);else{var y=r.ownerDocument||document,f=y&&y.defaultView||window;if(f.getSelection){var g=f.getSelection(),b=r.textContent.length,S=Math.min(c.start,b),T=c.end===void 0?S:Math.min(c.end,b);!g.extend&&S>T&&(u=T,T=S,S=u);var h=Vs(r,S),s=Vs(r,T);if(h&&s&&(g.rangeCount!==1||g.anchorNode!==h.node||g.anchorOffset!==h.offset||g.focusNode!==s.node||g.focusOffset!==s.offset)){var m=y.createRange();m.setStart(h.node,h.offset),g.removeAllRanges(),S>T?(g.addRange(m),g.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),g.addRange(m))}}}}for(y=[],g=r;g=g.parentNode;)g.nodeType===1&&y.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<y.length;r++){var v=y[r];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ru=!!Uc,Hc=Uc=null}finally{P=l,$.p=n,N.T=a}}t.current=e,Dt=2}}function Y0(){if(Dt===2){Dt=0;var t=va,e=Un,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=N.T,N.T=null;var n=$.p;$.p=2;var l=P;P|=4;try{x0(t,e.alternate,e)}finally{P=l,$.p=n,N.T=a}}Dt=3}}function G0(){if(Dt===4||Dt===3){Dt=0,Op();var t=va,e=Un,a=zn,n=_0;e.subtreeFlags&10256||e.flags&10256?Dt=5:(Dt=0,Un=va=null,q0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(ya=null),oo(a),e=e.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=N.T,l=$.p,$.p=2,N.T=null;try{for(var i=t.onRecoverableError,u=0;u<n.length;u++){var r=n[u];i(r.value,{componentStack:r.stack})}}finally{N.T=e,$.p=l}}zn&3&&$u(),Me(t),l=t.pendingLanes,a&4194090&&l&42?t===jc?Ol++:(Ol=0,jc=t):Ol=0,ci(0)}}function q0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ni(e)))}function $u(t){return L0(),Y0(),G0(),X0()}function X0(){if(Dt!==5)return!1;var t=va,e=Oc;Oc=0;var a=oo(zn),n=N.T,l=$.p;try{$.p=32>a?32:a,N.T=null,a=_c,_c=null;var i=va,u=zn;if(Dt=0,Un=va=null,zn=0,P&6)throw Error(w(331));var r=P;if(P|=4,M0(i.current),T0(i,i.current,u,a),P=r,ci(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Wl,i)}catch{}return!0}finally{$.p=l,N.T=n,q0(t,e)}}function Tf(t,e,a){e=se(a,e),e=Ac(t.stateNode,e,2),t=ga(t,e,2),t!==null&&(Pl(t,2),Me(t))}function lt(t,e,a){if(t.tag===3)Tf(t,t,a);else for(;e!==null;){if(e.tag===3){Tf(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ya===null||!ya.has(n))){t=se(a,t),a=i0(2),n=ga(e,a,2),n!==null&&(u0(a,n,e,t),Pl(n,2),Me(n));break}}e=e.return}}function Cr(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new a1;var l=new Set;n.set(e,l)}else l=n.get(e),l===void 0&&(l=new Set,n.set(e,l));l.has(a)||(Xo=!0,l.add(a),t=r1.bind(null,t,e,a),e.then(t,t))}function r1(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,it===t&&(Z&a)===a&&(mt===4||mt===3&&(Z&62914560)===Z&&300>Ae()-Vo?!(P&2)&&Hn(t,0):Qo|=a,Nn===Z&&(Nn=0)),Me(t)}function Q0(t,e){e===0&&(e=Ld()),t=kn(t,e),t!==null&&(Pl(t,e),Me(t))}function c1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Q0(t,a)}function o1(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(w(314))}n!==null&&n.delete(e),Q0(t,a)}function s1(t,e){return ro(t,e)}var bu=null,ln=null,Cc=!1,Su=!1,Nr=!1,Ga=0;function Me(t){t!==ln&&t.next===null&&(ln===null?bu=ln=t:ln=ln.next=t),Su=!0,Cc||(Cc=!0,d1())}function ci(t,e){if(!Nr&&Su){Nr=!0;do for(var a=!1,n=bu;n!==null;){if(t!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var u=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-te(42|t)+1)-1,i&=l&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,zf(n,i))}else i=Z,i=Hu(n,n===it?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(i&3)||Fl(n,i)||(a=!0,zf(n,i));n=n.next}while(a);Nr=!1}}function f1(){V0()}function V0(){Su=Cc=!1;var t=0;Ga!==0&&(b1()&&(t=Ga),Ga=0);for(var e=Ae(),a=null,n=bu;n!==null;){var l=n.next,i=Z0(n,e);i===0?(n.next=null,a===null?bu=l:a.next=l,l===null&&(ln=a)):(a=n,(t!==0||i&3)&&(Su=!0)),n=l}ci(t)}function Z0(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-te(i),r=1<<u,c=l[u];c===-1?(!(r&a)||r&n)&&(l[u]=Bp(r,e)):c<=e&&(t.expiredLanes|=r),i&=~r}if(e=it,a=Z,a=Hu(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(F===2||F===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&ur(n),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||Fl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&ur(n),oo(a)){case 2:case 8:a=Ud;break;case 32:a=au;break;case 268435456:a=Hd;break;default:a=au}return n=k0.bind(null,t),a=ro(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&ur(n),t.callbackPriority=2,t.callbackNode=null,2}function k0(t,e){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($u()&&t.callbackNode!==a)return null;var n=Z;return n=Hu(t,t===it?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(D0(t,n,e),Z0(t,Ae()),t.callbackNode!=null&&t.callbackNode===a?k0.bind(null,t):null)}function zf(t,e){if($u())return null;D0(t,e,!0)}function d1(){w1(function(){P&6?ro(Nd,f1):V0()})}function ko(){return Ga===0&&(Ga=Bd()),Ga}function Rf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ni(""+t)}function Mf(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function h1(t,e,a,n,l){if(e==="submit"&&a&&a.stateNode===l){var i=Rf((l[Zt]||null).action),u=n.submitter;u&&(e=(e=u[Zt]||null)?Rf(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var r=new Bu("action","action",null,n,l);t.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ga!==0){var c=u?Mf(l,u):new FormData(l);wc(a,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=u?Mf(l,u):new FormData(l),wc(a,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var Ur=0;Ur<sc.length;Ur++){var Hr=sc[Ur],m1=Hr.toLowerCase(),p1=Hr[0].toUpperCase()+Hr.slice(1);ve(m1,"on"+p1)}ve(rh,"onAnimationEnd");ve(ch,"onAnimationIteration");ve(oh,"onAnimationStart");ve("dblclick","onDoubleClick");ve("focusin","onFocus");ve("focusout","onBlur");ve(Dg,"onTransitionRun");ve(Cg,"onTransitionStart");ve(Ng,"onTransitionCancel");ve(sh,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function K0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],l=n.event;n=n.listeners;t:{var i=void 0;if(e)for(var u=n.length-1;0<=u;u--){var r=n[u],c=r.instance,o=r.currentTarget;if(r=r.listener,c!==i&&l.isPropagationStopped())break t;i=r,l.currentTarget=o;try{i(l)}catch(d){mu(d)}l.currentTarget=null,i=c}else for(u=0;u<n.length;u++){if(r=n[u],c=r.instance,o=r.currentTarget,r=r.listener,c!==i&&l.isPropagationStopped())break t;i=r,l.currentTarget=o;try{i(l)}catch(d){mu(d)}l.currentTarget=null,i=c}}}}function X(t,e){var a=e[nc];a===void 0&&(a=e[nc]=new Set);var n=t+"__bubble";a.has(n)||($0(e,t,2,!1),a.add(n))}function Br(t,e,a){var n=0;e&&(n|=4),$0(a,t,n,e)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[zi]){t[zi]=!0,Xd.forEach(function(a){a!=="selectionchange"&&(g1.has(a)||Br(a,!1,t),Br(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zi]||(e[zi]=!0,Br("selectionchange",!1,e))}}function $0(t,e,a,n){switch(um(e)){case 2:var l=Q1;break;case 8:l=V1;break;default:l=Fo}a=l.bind(null,e,a,t),l=void 0,!rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),n?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function Lr(t,e,a,n,l){var i=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var r=n.stateNode.containerInfo;if(r===l)break;if(u===4)for(u=n.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;r!==null;){if(u=cn(r),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){n=i=u;continue t}r=r.parentNode}}n=n.return}Wd(function(){var o=i,d=ho(a),y=[];t:{var f=fh.get(t);if(f!==void 0){var g=Bu,b=t;switch(t){case"keypress":if(Hi(a)===0)break t;case"keydown":case"keyup":g=sg;break;case"focusin":b="focus",g=mr;break;case"focusout":b="blur",g=mr;break;case"beforeblur":case"afterblur":g=mr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=hg;break;case rh:case ch:case oh:g=eg;break;case sh:g=pg;break;case"scroll":case"scrollend":g=Wp;break;case"wheel":g=yg;break;case"copy":case"cut":case"paste":g=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hs;break;case"toggle":case"beforetoggle":g=xg}var S=(e&4)!==0,T=!S&&(t==="scroll"||t==="scrollend"),h=S?f!==null?f+"Capture":null:f;S=[];for(var s=o,m;s!==null;){var v=s;if(m=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||m===null||h===null||(v=Cl(s,h),v!=null&&S.push(Gl(s,v,m))),T)break;s=s.return}0<S.length&&(f=new g(f,b,null,a,d),y.push({event:f,listeners:S}))}}if(!(e&7)){t:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&a!==uc&&(b=a.relatedTarget||a.fromElement)&&(cn(b)||b[Vn]))break t;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(b=a.relatedTarget||a.toElement,g=o,b=b?cn(b):null,b!==null&&(T=Jl(b),S=b.tag,b!==T||S!==5&&S!==27&&S!==6)&&(b=null)):(g=null,b=o),g!==b)){if(S=Ns,v="onMouseLeave",h="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(S=Hs,v="onPointerLeave",h="onPointerEnter",s="pointer"),T=g==null?f:dl(g),m=b==null?f:dl(b),f=new S(v,s+"leave",g,a,d),f.target=T,f.relatedTarget=m,v=null,cn(d)===o&&(S=new S(h,s+"enter",b,a,d),S.target=m,S.relatedTarget=T,v=S),T=v,g&&b)e:{for(S=g,h=b,s=0,m=S;m;m=Ia(m))s++;for(m=0,v=h;v;v=Ia(v))m++;for(;0<s-m;)S=Ia(S),s--;for(;0<m-s;)h=Ia(h),m--;for(;s--;){if(S===h||h!==null&&S===h.alternate)break e;S=Ia(S),h=Ia(h)}S=null}else S=null;g!==null&&Of(y,f,g,S,!1),b!==null&&T!==null&&Of(y,T,b,S,!0)}}t:{if(f=o?dl(o):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var A=Gs;else if(Ys(f))if(ah)A=Og;else{A=Rg;var z=zg}else g=f.nodeName,!g||g.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?o&&fo(o.elementType)&&(A=Gs):A=Mg;if(A&&(A=A(t,o))){eh(y,A,a,d);break t}z&&z(t,f,o),t==="focusout"&&o&&f.type==="number"&&o.memoizedProps.value!=null&&ic(f,"number",f.value)}switch(z=o?dl(o):window,t){case"focusin":(Ys(z)||z.contentEditable==="true")&&(fn=z,cc=o,xl=null);break;case"focusout":xl=cc=fn=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Zs(y,a,d);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":Zs(y,a,d)}var E;if(go)t:{switch(t){case"compositionstart":var O="onCompositionStart";break t;case"compositionend":O="onCompositionEnd";break t;case"compositionupdate":O="onCompositionUpdate";break t}O=void 0}else sn?Id(t,a)&&(O="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(O="onCompositionStart");O&&(Pd&&a.locale!=="ko"&&(sn||O!=="onCompositionStart"?O==="onCompositionEnd"&&sn&&(E=Fd()):(fa=d,mo="value"in fa?fa.value:fa.textContent,sn=!0)),z=wu(o,O),0<z.length&&(O=new Us(O,t,null,a,d),y.push({event:O,listeners:z}),E?O.data=E:(E=th(a),E!==null&&(O.data=E)))),(E=Sg?wg(t,a):Eg(t,a))&&(O=wu(o,"onBeforeInput"),0<O.length&&(z=new Us("onBeforeInput","beforeinput",null,a,d),y.push({event:z,listeners:O}),z.data=E)),h1(y,t,o,a,d)}K0(y,e)})}function Gl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function wu(t,e){for(var a=e+"Capture",n=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Cl(t,a),l!=null&&n.unshift(Gl(t,l,i)),l=Cl(t,e),l!=null&&n.push(Gl(t,l,i))),t.tag===3)return n;t=t.return}return[]}function Ia(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Of(t,e,a,n,l){for(var i=e._reactName,u=[];a!==null&&a!==n;){var r=a,c=r.alternate,o=r.stateNode;if(r=r.tag,c!==null&&c===n)break;r!==5&&r!==26&&r!==27||o===null||(c=o,l?(o=Cl(a,i),o!=null&&u.unshift(Gl(a,o,c))):l||(o=Cl(a,i),o!=null&&u.push(Gl(a,o,c)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var y1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(y1,`
`).replace(v1,"")}function J0(t,e){return e=_f(e),_f(t)===e}function Ju(){}function et(t,e,a,n,l,i){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||On(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&On(t,""+n);break;case"className":xi(t,"class",n);break;case"tabIndex":xi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":xi(t,a,n);break;case"style":Jd(t,n,i);break;case"data":if(e!=="object"){xi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ni(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&et(t,e,"name",l.name,l,null),et(t,e,"formEncType",l.formEncType,l,null),et(t,e,"formMethod",l.formMethod,l,null),et(t,e,"formTarget",l.formTarget,l,null)):(et(t,e,"encType",l.encType,l,null),et(t,e,"method",l.method,l,null),et(t,e,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ni(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Ju);break;case"onScroll":n!=null&&X("scroll",t);break;case"onScrollEnd":n!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(w(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(w(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Ni(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":X("beforetoggle",t),X("toggle",t),Ci(t,"popover",n);break;case"xlinkActuate":_e(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_e(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_e(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_e(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_e(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_e(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_e(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ci(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$p.get(a)||a,Ci(t,a,n))}}function Nc(t,e,a,n,l,i){switch(a){case"style":Jd(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(w(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(w(60));t.innerHTML=a}}break;case"children":typeof n=="string"?On(t,n):(typeof n=="number"||typeof n=="bigint")&&On(t,""+n);break;case"onScroll":n!=null&&X("scroll",t);break;case"onScrollEnd":n!=null&&X("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qd.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),i=t[Zt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,l);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Ci(t,a,n)}}}function Ct(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:et(t,e,i,u,a,null)}}l&&et(t,e,"srcSet",a.srcSet,a,null),n&&et(t,e,"src",a.src,a,null);return;case"input":X("invalid",t);var r=i=u=l=null,c=null,o=null;for(n in a)if(a.hasOwnProperty(n)){var d=a[n];if(d!=null)switch(n){case"name":l=d;break;case"type":u=d;break;case"checked":c=d;break;case"defaultChecked":o=d;break;case"value":i=d;break;case"defaultValue":r=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(w(137,e));break;default:et(t,e,n,d,a,null)}}kd(t,i,r,c,o,u,l,!1),nu(t);return;case"select":X("invalid",t),n=u=i=null;for(l in a)if(a.hasOwnProperty(l)&&(r=a[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":n=r;default:et(t,e,l,r,a,null)}e=i,a=u,t.multiple=!!n,e!=null?bn(t,!!n,e,!1):a!=null&&bn(t,!!n,a,!0);return;case"textarea":X("invalid",t),i=l=n=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":n=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(w(91));break;default:et(t,e,u,r,a,null)}$d(t,n,l,i),nu(t);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(n=a[c],n!=null))switch(c){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:et(t,e,c,n,a,null)}return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(n=0;n<Yl.length;n++)X(Yl[n],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in a)if(a.hasOwnProperty(o)&&(n=a[o],n!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:et(t,e,o,n,a,null)}return;default:if(fo(e)){for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!==void 0&&Nc(t,e,d,n,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null&&et(t,e,r,n,a,null))}function x1(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,r=null,c=null,o=null,d=null;for(g in a){var y=a[g];if(a.hasOwnProperty(g)&&y!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=y;default:n.hasOwnProperty(g)||et(t,e,g,null,n,y)}}for(var f in n){var g=n[f];if(y=a[f],n.hasOwnProperty(f)&&(g!=null||y!=null))switch(f){case"type":i=g;break;case"name":l=g;break;case"checked":o=g;break;case"defaultChecked":d=g;break;case"value":u=g;break;case"defaultValue":r=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(w(137,e));break;default:g!==y&&et(t,e,f,g,n,y)}}lc(t,u,r,c,o,d,i,l);return;case"select":g=u=r=f=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":g=c;default:n.hasOwnProperty(i)||et(t,e,i,null,n,c)}for(l in n)if(i=n[l],c=a[l],n.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":f=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==c&&et(t,e,l,i,n,c)}e=r,a=u,n=g,f!=null?bn(t,!!a,f,!1):!!n!=!!a&&(e!=null?bn(t,!!a,e,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":g=f=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:et(t,e,r,null,n,l)}for(u in n)if(l=n[u],i=a[u],n.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":f=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(w(91));break;default:l!==i&&et(t,e,u,l,n,i)}Kd(t,f,g);return;case"option":for(var b in a)if(f=a[b],a.hasOwnProperty(b)&&f!=null&&!n.hasOwnProperty(b))switch(b){case"selected":t.selected=!1;break;default:et(t,e,b,null,n,f)}for(c in n)if(f=n[c],g=a[c],n.hasOwnProperty(c)&&f!==g&&(f!=null||g!=null))switch(c){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:et(t,e,c,f,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in a)f=a[S],a.hasOwnProperty(S)&&f!=null&&!n.hasOwnProperty(S)&&et(t,e,S,null,n,f);for(o in n)if(f=n[o],g=a[o],n.hasOwnProperty(o)&&f!==g&&(f!=null||g!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(w(137,e));break;default:et(t,e,o,f,n,g)}return;default:if(fo(e)){for(var T in a)f=a[T],a.hasOwnProperty(T)&&f!==void 0&&!n.hasOwnProperty(T)&&Nc(t,e,T,void 0,n,f);for(d in n)f=n[d],g=a[d],!n.hasOwnProperty(d)||f===g||f===void 0&&g===void 0||Nc(t,e,d,f,n,g);return}}for(var h in a)f=a[h],a.hasOwnProperty(h)&&f!=null&&!n.hasOwnProperty(h)&&et(t,e,h,null,n,f);for(y in n)f=n[y],g=a[y],!n.hasOwnProperty(y)||f===g||f==null&&g==null||et(t,e,y,f,n,g)}var Uc=null,Hc=null;function Eu(t){return t.nodeType===9?t:t.ownerDocument}function jf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function W0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yr=null;function b1(){var t=window.event;return t&&t.type==="popstate"?t===Yr?!1:(Yr=t,!0):(Yr=null,!1)}var F0=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(t){return Df.resolve(null).then(t).catch(E1)}:F0;function E1(t){setTimeout(function(){throw t})}function za(t){return t==="head"}function Cf(t,e){var a=e,n=0,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<n&&8>n){a=n;var u=t.ownerDocument;if(a&1&&_l(u.documentElement),a&2&&_l(u.body),a&4)for(a=u.head,_l(a),u=a.firstChild;u;){var r=u.nextSibling,c=u.nodeName;u[Il]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=r}}if(l===0){t.removeChild(i),Zl(e);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=i}while(a);Zl(e)}function Lc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lc(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function A1(t,e,a,n){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Il])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ge(t.nextSibling),t===null)break}return null}function T1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ge(t.nextSibling),t===null))return null;return t}function Yc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function z1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function ge(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Gc=null;function Nf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function P0(t,e,a){switch(e=Eu(a),t){case"html":if(t=e.documentElement,!t)throw Error(w(452));return t;case"head":if(t=e.head,!t)throw Error(w(453));return t;case"body":if(t=e.body,!t)throw Error(w(454));return t;default:throw Error(w(451))}}function _l(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);so(t)}var he=new Map,Uf=new Set;function Au(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Je=$.d;$.d={f:R1,r:M1,D:O1,C:_1,L:j1,m:D1,X:N1,S:C1,M:U1};function R1(){var t=Je.f(),e=ku();return t||e}function M1(t){var e=Zn(t);e!==null&&e.tag===5&&e.type==="form"?Zh(e):Je.r(t)}var $n=typeof document>"u"?null:document;function I0(t,e,a){var n=$n;if(n&&typeof e=="string"&&e){var l=oe(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Uf.has(l)||(Uf.add(l),t={rel:t,crossOrigin:a,href:e},n.querySelector(l)===null&&(e=n.createElement("link"),Ct(e,"link",t),Mt(e),n.head.appendChild(e)))}}function O1(t){Je.D(t),I0("dns-prefetch",t,null)}function _1(t,e){Je.C(t,e),I0("preconnect",t,e)}function j1(t,e,a){Je.L(t,e,a);var n=$n;if(n&&t&&e){var l='link[rel="preload"][as="'+oe(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+oe(a.imageSizes)+'"]')):l+='[href="'+oe(t)+'"]';var i=l;switch(e){case"style":i=Bn(t);break;case"script":i=Jn(t)}he.has(i)||(t=rt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),he.set(i,t),n.querySelector(l)!==null||e==="style"&&n.querySelector(oi(i))||e==="script"&&n.querySelector(si(i))||(e=n.createElement("link"),Ct(e,"link",t),Mt(e),n.head.appendChild(e)))}}function D1(t,e){Je.m(t,e);var a=$n;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+oe(n)+'"][href="'+oe(t)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Jn(t)}if(!he.has(i)&&(t=rt({rel:"modulepreload",href:t},e),he.set(i,t),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(i)))return}n=a.createElement("link"),Ct(n,"link",t),Mt(n),a.head.appendChild(n)}}}function C1(t,e,a){Je.S(t,e,a);var n=$n;if(n&&t){var l=xn(n).hoistableStyles,i=Bn(t);e=e||"default";var u=l.get(i);if(!u){var r={loading:0,preload:null};if(u=n.querySelector(oi(i)))r.loading=5;else{t=rt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=he.get(i))&&$o(t,a);var c=u=n.createElement("link");Mt(c),Ct(c,"link",t),c._p=new Promise(function(o,d){c.onload=o,c.onerror=d}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Qi(u,e,n)}u={type:"stylesheet",instance:u,count:1,state:r},l.set(i,u)}}}function N1(t,e){Je.X(t,e);var a=$n;if(a&&t){var n=xn(a).hoistableScripts,l=Jn(t),i=n.get(l);i||(i=a.querySelector(si(l)),i||(t=rt({src:t,async:!0},e),(e=he.get(l))&&Jo(t,e),i=a.createElement("script"),Mt(i),Ct(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function U1(t,e){Je.M(t,e);var a=$n;if(a&&t){var n=xn(a).hoistableScripts,l=Jn(t),i=n.get(l);i||(i=a.querySelector(si(l)),i||(t=rt({src:t,async:!0,type:"module"},e),(e=he.get(l))&&Jo(t,e),i=a.createElement("script"),Mt(i),Ct(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Hf(t,e,a,n){var l=(l=ma.current)?Au(l):null;if(!l)throw Error(w(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Bn(a.href),a=xn(l).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Bn(a.href);var i=xn(l).hoistableStyles,u=i.get(t);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=l.querySelector(oi(t)))&&!i._p&&(u.instance=i,u.state.loading=5),he.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},he.set(t,a),i||H1(l,t,a,u.state))),e&&n===null)throw Error(w(528,""));return u}if(e&&n!==null)throw Error(w(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Jn(a),a=xn(l).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,t))}}function Bn(t){return'href="'+oe(t)+'"'}function oi(t){return'link[rel="stylesheet"]['+t+"]"}function tm(t){return rt({},t,{"data-precedence":t.precedence,precedence:null})}function H1(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Ct(e,"link",a),Mt(e),t.head.appendChild(e))}function Jn(t){return'[src="'+oe(t)+'"]'}function si(t){return"script[async]"+t}function Bf(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+oe(a.href)+'"]');if(n)return e.instance=n,Mt(n),n;var l=rt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Mt(n),Ct(n,"style",l),Qi(n,a.precedence,t),e.instance=n;case"stylesheet":l=Bn(a.href);var i=t.querySelector(oi(l));if(i)return e.state.loading|=4,e.instance=i,Mt(i),i;n=tm(a),(l=he.get(l))&&$o(n,l),i=(t.ownerDocument||t).createElement("link"),Mt(i);var u=i;return u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),Ct(i,"link",n),e.state.loading|=4,Qi(i,a.precedence,t),e.instance=i;case"script":return i=Jn(a.src),(l=t.querySelector(si(i)))?(e.instance=l,Mt(l),l):(n=a,(l=he.get(i))&&(n=rt({},a),Jo(n,l)),t=t.ownerDocument||t,l=t.createElement("script"),Mt(l),Ct(l,"link",n),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(w(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(n=e.instance,e.state.loading|=4,Qi(n,a.precedence,t));return e.instance}function Qi(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,u=0;u<n.length;u++){var r=n[u];if(r.dataset.precedence===e)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function $o(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Jo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Vi=null;function Lf(t,e,a){if(Vi===null){var n=new Map,l=Vi=new Map;l.set(a,n)}else l=Vi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var i=a[l];if(!(i[Il]||i[Ut]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var r=n.get(u);r?r.push(i):n.set(u,[i])}}return n}function Yf(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function B1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function em(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var ql=null;function L1(){}function Y1(t,e,a){if(ql===null)throw Error(w(475));var n=ql;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=Bn(a.href),i=t.querySelector(oi(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Tu.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=i,Mt(i);return}i=t.ownerDocument||t,a=tm(a),(l=he.get(l))&&$o(a,l),i=i.createElement("link"),Mt(i);var u=i;u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),Ct(i,"link",a),e.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(n.count++,e=Tu.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function G1(){if(ql===null)throw Error(w(475));var t=ql;return t.stylesheets&&t.count===0&&qc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Tu(){if(this.count--,this.count===0){if(this.stylesheets)qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zu=null;function qc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zu=new Map,e.forEach(q1,t),zu=null,Tu.call(t))}function q1(t,e){if(!(e.state.loading&4)){var a=zu.get(t);if(a)var n=a.get(null);else{a=new Map,zu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),n=u)}n&&a.set(null,n)}l=e.instance,u=l.getAttribute("data-precedence"),i=a.get(u)||n,i===n&&a.set(null,l),a.set(u,l),this.count++,n=Tu.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Xl={$$typeof:Ue,Provider:null,Consumer:null,_currentValue:Na,_currentValue2:Na,_threadCount:0};function X1(t,e,a,n,l,i,u,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function am(t,e,a,n,l,i,u,r,c,o,d,y){return t=new X1(t,e,a,u,r,c,o,y),e=1,i===!0&&(e|=24),i=Pt(3,null,null,e),t.current=i,i.stateNode=t,e=Eo(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:e},To(i),t}function nm(t){return t?(t=mn,t):mn}function lm(t,e,a,n,l,i){l=nm(l),n.context===null?n.context=l:n.pendingContext=l,n=pa(e),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=ga(t,n,e),a!==null&&(ae(a,t,e),wl(a,t,e))}function Gf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Wo(t,e){Gf(t,e),(t=t.alternate)&&Gf(t,e)}function im(t){if(t.tag===13){var e=kn(t,67108864);e!==null&&ae(e,t,67108864),Wo(t,67108864)}}var Ru=!0;function Q1(t,e,a,n){var l=N.T;N.T=null;var i=$.p;try{$.p=2,Fo(t,e,a,n)}finally{$.p=i,N.T=l}}function V1(t,e,a,n){var l=N.T;N.T=null;var i=$.p;try{$.p=8,Fo(t,e,a,n)}finally{$.p=i,N.T=l}}function Fo(t,e,a,n){if(Ru){var l=Xc(n);if(l===null)Lr(t,e,n,Mu,a),qf(t,n);else if(k1(l,t,e,a,n))n.stopPropagation();else if(qf(t,n),e&4&&-1<Z1.indexOf(t)){for(;l!==null;){var i=Zn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=_a(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var c=1<<31-te(u);r.entanglements[1]|=c,u&=~c}Me(i),!(P&6)&&(vu=Ae()+500,ci(0))}}break;case 13:r=kn(i,2),r!==null&&ae(r,i,2),ku(),Wo(i,2)}if(i=Xc(n),i===null&&Lr(t,e,n,Mu,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Lr(t,e,n,null,a)}}function Xc(t){return t=ho(t),Po(t)}var Mu=null;function Po(t){if(Mu=null,t=cn(t),t!==null){var e=Jl(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=_d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Mu=t,null}function um(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_p()){case Nd:return 2;case Ud:return 8;case au:case jp:return 32;case Hd:return 268435456;default:return 32}default:return 32}}var Qc=!1,xa=null,ba=null,Sa=null,Ql=new Map,Vl=new Map,oa=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qf(t,e){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Ql.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(e.pointerId)}}function rl(t,e,a,n,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},e!==null&&(e=Zn(e),e!==null&&im(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function k1(t,e,a,n,l){switch(e){case"focusin":return xa=rl(xa,t,e,a,n,l),!0;case"dragenter":return ba=rl(ba,t,e,a,n,l),!0;case"mouseover":return Sa=rl(Sa,t,e,a,n,l),!0;case"pointerover":var i=l.pointerId;return Ql.set(i,rl(Ql.get(i)||null,t,e,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,Vl.set(i,rl(Vl.get(i)||null,t,e,a,n,l)),!0}return!1}function rm(t){var e=cn(t.target);if(e!==null){var a=Jl(e);if(a!==null){if(e=a.tag,e===13){if(e=_d(a),e!==null){t.blockedOn=e,Yp(t.priority,function(){if(a.tag===13){var n=ee();n=co(n);var l=kn(a,n);l!==null&&ae(l,a,n),Wo(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Xc(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);uc=n,a.target.dispatchEvent(n),uc=null}else return e=Zn(a),e!==null&&im(e),t.blockedOn=a,!1;e.shift()}return!0}function Xf(t,e,a){Zi(t)&&a.delete(e)}function K1(){Qc=!1,xa!==null&&Zi(xa)&&(xa=null),ba!==null&&Zi(ba)&&(ba=null),Sa!==null&&Zi(Sa)&&(Sa=null),Ql.forEach(Xf),Vl.forEach(Xf)}function Ri(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,K1)))}var Mi=null;function Qf(t){Mi!==t&&(Mi=t,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,function(){Mi===t&&(Mi=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],l=t[e+2];if(typeof n!="function"){if(Po(n||a)===null)continue;break}var i=Zn(a);i!==null&&(t.splice(e,3),e-=3,wc(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Zl(t){function e(c){return Ri(c,t)}xa!==null&&Ri(xa,t),ba!==null&&Ri(ba,t),Sa!==null&&Ri(Sa,t),Ql.forEach(e),Vl.forEach(e);for(var a=0;a<oa.length;a++){var n=oa[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<oa.length&&(a=oa[0],a.blockedOn===null);)rm(a),a.blockedOn===null&&oa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],u=l[Zt]||null;if(typeof i=="function")u||Qf(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[Zt]||null)r=u.formAction;else if(Po(l)!==null)continue}else r=u.action;typeof r=="function"?a[n+1]=r:(a.splice(n,3),n-=3),Qf(a)}}}function Io(t){this._internalRoot=t}Wu.prototype.render=Io.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));var a=e.current,n=ee();lm(a,n,t,e,null,null)};Wu.prototype.unmount=Io.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lm(t.current,2,null,t,null,null),ku(),e[Vn]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=qd();t={blockedOn:null,target:t,priority:e};for(var a=0;a<oa.length&&e!==0&&e<oa[a].priority;a++);oa.splice(a,0,t),a===0&&rm(t)}};var Vf=Md.version;if(Vf!=="19.1.1")throw Error(w(527,Vf,"19.1.1"));$.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Ep(e),t=t!==null?jd(t):null,t=t===null?null:t.stateNode,t};var $1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Wl=Oi.inject($1),It=Oi}catch{}}Nu.createRoot=function(t,e){if(!Od(t))throw Error(w(299));var a=!1,n="",l=a0,i=n0,u=l0,r=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(r=e.unstable_transitionCallbacks)),e=am(t,1,!1,null,null,a,n,l,i,u,r,null),t[Vn]=e.current,Ko(t),new Io(e)};Nu.hydrateRoot=function(t,e,a){if(!Od(t))throw Error(w(299));var n=!1,l="",i=a0,u=n0,r=l0,c=null,o=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(c=a.unstable_transitionCallbacks),a.formState!==void 0&&(o=a.formState)),e=am(t,1,!0,e,a??null,n,l,i,u,r,c,o),e.context=nm(null),a=e.current,n=ee(),n=co(n),l=pa(n),l.callback=null,ga(a,l,n),a=n,e.current.lanes=a,Pl(e,a),Me(e),t[Vn]=e.current,Ko(t),new Wu(e)};Nu.version="19.1.1";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(t){console.error(t)}}cm(),wd.exports=Nu;var J1=wd.exports;const W1=dd(J1);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zf="popstate";function F1(t={}){function e(n,l){let{pathname:i,search:u,hash:r}=n.location;return Vc("",{pathname:i,search:u,hash:r},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function a(n,l){return typeof l=="string"?l:kl(l)}return I1(e,a,null,t)}function dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ze(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function P1(){return Math.random().toString(36).substring(2,10)}function kf(t,e){return{usr:t.state,key:t.key,idx:e}}function Vc(t,e,a=null,n){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Wn(e):e,state:a,key:e&&e.key||n||P1()}}function kl({pathname:t="/",search:e="",hash:a=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Wn(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substring(a),t=t.substring(0,a));let n=t.indexOf("?");n>=0&&(e.search=t.substring(n),t=t.substring(0,n)),t&&(e.pathname=t)}return e}function I1(t,e,a,n={}){let{window:l=document.defaultView,v5Compat:i=!1}=n,u=l.history,r="POP",c=null,o=d();o==null&&(o=0,u.replaceState({...u.state,idx:o},""));function d(){return(u.state||{idx:null}).idx}function y(){r="POP";let T=d(),h=T==null?null:T-o;o=T,c&&c({action:r,location:S.location,delta:h})}function f(T,h){r="PUSH";let s=Vc(S.location,T,h);o=d()+1;let m=kf(s,o),v=S.createHref(s);try{u.pushState(m,"",v)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;l.location.assign(v)}i&&c&&c({action:r,location:S.location,delta:1})}function g(T,h){r="REPLACE";let s=Vc(S.location,T,h);o=d();let m=kf(s,o),v=S.createHref(s);u.replaceState(m,"",v),i&&c&&c({action:r,location:S.location,delta:0})}function b(T){return ty(T)}let S={get action(){return r},get location(){return t(l,u)},listen(T){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Zf,y),c=T,()=>{l.removeEventListener(Zf,y),c=null}},createHref(T){return e(l,T)},createURL:b,encodeLocation(T){let h=b(T);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:g,go(T){return u.go(T)}};return S}function ty(t,e=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),dt(a,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:kl(t);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=a+n),new URL(n,a)}function om(t,e,a="/"){return ey(t,e,a,!1)}function ey(t,e,a,n){let l=typeof e=="string"?Wn(e):e,i=$e(l.pathname||"/",a);if(i==null)return null;let u=sm(t);ay(u);let r=null;for(let c=0;r==null&&c<u.length;++c){let o=hy(i);r=fy(u[c],o,n)}return r}function sm(t,e=[],a=[],n="",l=!1){let i=(u,r,c=l,o)=>{let d={relativePath:o===void 0?u.path||"":o,caseSensitive:u.caseSensitive===!0,childrenIndex:r,route:u};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&c)return;dt(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let y=Xe([n,d.relativePath]),f=a.concat(d);u.children&&u.children.length>0&&(dt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),sm(u.children,e,f,y,c)),!(u.path==null&&!u.index)&&e.push({path:y,score:oy(y,u.index),routesMeta:f})};return t.forEach((u,r)=>{var c;if(u.path===""||!((c=u.path)!=null&&c.includes("?")))i(u,r);else for(let o of fm(u.path))i(u,r,!0,o)}),e}function fm(t){let e=t.split("/");if(e.length===0)return[];let[a,...n]=e,l=a.endsWith("?"),i=a.replace(/\?$/,"");if(n.length===0)return l?[i,""]:[i];let u=fm(n.join("/")),r=[];return r.push(...u.map(c=>c===""?i:[i,c].join("/"))),l&&r.push(...u),r.map(c=>t.startsWith("/")&&c===""?"/":c)}function ay(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:sy(e.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}var ny=/^:[\w-]+$/,ly=3,iy=2,uy=1,ry=10,cy=-2,Kf=t=>t==="*";function oy(t,e){let a=t.split("/"),n=a.length;return a.some(Kf)&&(n+=cy),e&&(n+=iy),a.filter(l=>!Kf(l)).reduce((l,i)=>l+(ny.test(i)?ly:i===""?uy:ry),n)}function sy(t,e){return t.length===e.length&&t.slice(0,-1).every((n,l)=>n===e[l])?t[t.length-1]-e[e.length-1]:0}function fy(t,e,a=!1){let{routesMeta:n}=t,l={},i="/",u=[];for(let r=0;r<n.length;++r){let c=n[r],o=r===n.length-1,d=i==="/"?e:e.slice(i.length)||"/",y=Ou({path:c.relativePath,caseSensitive:c.caseSensitive,end:o},d),f=c.route;if(!y&&o&&a&&!n[n.length-1].route.index&&(y=Ou({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!y)return null;Object.assign(l,y.params),u.push({params:l,pathname:Xe([i,y.pathname]),pathnameBase:yy(Xe([i,y.pathnameBase])),route:f}),y.pathnameBase!=="/"&&(i=Xe([i,y.pathnameBase]))}return u}function Ou(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,n]=dy(t.path,t.caseSensitive,t.end),l=e.match(a);if(!l)return null;let i=l[0],u=i.replace(/(.)\/+$/,"$1"),r=l.slice(1);return{params:n.reduce((o,{paramName:d,isOptional:y},f)=>{if(d==="*"){let b=r[f]||"";u=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const g=r[f];return y&&!g?o[d]=void 0:o[d]=(g||"").replace(/%2F/g,"/"),o},{}),pathname:i,pathnameBase:u,pattern:t}}function dy(t,e=!1,a=!0){ze(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,r,c)=>(n.push({paramName:r,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(n.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),n]}function hy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ze(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function $e(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,n=t.charAt(a);return n&&n!=="/"?null:t.slice(a)||"/"}function my(t,e="/"){let{pathname:a,search:n="",hash:l=""}=typeof t=="string"?Wn(t):t;return{pathname:a?a.startsWith("/")?a:py(a,e):e,search:vy(n),hash:xy(l)}}function py(t,e){let a=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?a.length>1&&a.pop():l!=="."&&a.push(l)}),a.length>1?a.join("/"):"/"}function Gr(t,e,a,n){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gy(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function dm(t){let e=gy(t);return e.map((a,n)=>n===e.length-1?a.pathname:a.pathnameBase)}function hm(t,e,a,n=!1){let l;typeof t=="string"?l=Wn(t):(l={...t},dt(!l.pathname||!l.pathname.includes("?"),Gr("?","pathname","search",l)),dt(!l.pathname||!l.pathname.includes("#"),Gr("#","pathname","hash",l)),dt(!l.search||!l.search.includes("#"),Gr("#","search","hash",l)));let i=t===""||l.pathname==="",u=i?"/":l.pathname,r;if(u==null)r=a;else{let y=e.length-1;if(!n&&u.startsWith("..")){let f=u.split("/");for(;f[0]==="..";)f.shift(),y-=1;l.pathname=f.join("/")}r=y>=0?e[y]:"/"}let c=my(l,r),o=u&&u!=="/"&&u.endsWith("/"),d=(i||u===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(o||d)&&(c.pathname+="/"),c}var Xe=t=>t.join("/").replace(/\/\/+/g,"/"),yy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function by(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var mm=["POST","PUT","PATCH","DELETE"];new Set(mm);var Sy=["GET",...mm];new Set(Sy);var Fn=x.createContext(null);Fn.displayName="DataRouter";var Fu=x.createContext(null);Fu.displayName="DataRouterState";x.createContext(!1);var pm=x.createContext({isTransitioning:!1});pm.displayName="ViewTransition";var wy=x.createContext(new Map);wy.displayName="Fetchers";var Ey=x.createContext(null);Ey.displayName="Await";var Oe=x.createContext(null);Oe.displayName="Navigation";var fi=x.createContext(null);fi.displayName="Location";var We=x.createContext({outlet:null,matches:[],isDataRoute:!1});We.displayName="Route";var ts=x.createContext(null);ts.displayName="RouteError";function Ay(t,{relative:e}={}){dt(di(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:n}=x.useContext(Oe),{hash:l,pathname:i,search:u}=hi(t,{relative:e}),r=i;return a!=="/"&&(r=i==="/"?a:Xe([a,i])),n.createHref({pathname:r,search:u,hash:l})}function di(){return x.useContext(fi)!=null}function Fa(){return dt(di(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(fi).location}var gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ym(t){x.useContext(Oe).static||x.useLayoutEffect(t)}function vm(){let{isDataRoute:t}=x.useContext(We);return t?By():Ty()}function Ty(){dt(di(),"useNavigate() may be used only in the context of a <Router> component.");let t=x.useContext(Fn),{basename:e,navigator:a}=x.useContext(Oe),{matches:n}=x.useContext(We),{pathname:l}=Fa(),i=JSON.stringify(dm(n)),u=x.useRef(!1);return ym(()=>{u.current=!0}),x.useCallback((c,o={})=>{if(ze(u.current,gm),!u.current)return;if(typeof c=="number"){a.go(c);return}let d=hm(c,JSON.parse(i),l,o.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Xe([e,d.pathname])),(o.replace?a.replace:a.push)(d,o.state,o)},[e,a,i,l,t])}x.createContext(null);function hi(t,{relative:e}={}){let{matches:a}=x.useContext(We),{pathname:n}=Fa(),l=JSON.stringify(dm(a));return x.useMemo(()=>hm(t,JSON.parse(l),n,e==="path"),[t,l,n,e])}function zy(t,e){return xm(t,e)}function xm(t,e,a,n,l){var s;dt(di(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=x.useContext(Oe),{matches:u}=x.useContext(We),r=u[u.length-1],c=r?r.params:{},o=r?r.pathname:"/",d=r?r.pathnameBase:"/",y=r&&r.route;{let m=y&&y.path||"";bm(o,!y||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=Fa(),g;if(e){let m=typeof e=="string"?Wn(e):e;dt(d==="/"||((s=m.pathname)==null?void 0:s.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${m.pathname}" was given in the \`location\` prop.`),g=m}else g=f;let b=g.pathname||"/",S=b;if(d!=="/"){let m=d.replace(/^\//,"").split("/");S="/"+b.replace(/^\//,"").split("/").slice(m.length).join("/")}let T=om(t,{pathname:S});ze(y||T!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),ze(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=jy(T&&T.map(m=>Object.assign({},m,{params:Object.assign({},c,m.params),pathname:Xe([d,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?d:Xe([d,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),u,a,n,l);return e&&h?x.createElement(fi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},h):h}function Ry(){let t=Hy(),e=by(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:i},"ErrorBoundary")," or"," ",x.createElement("code",{style:i},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),a?x.createElement("pre",{style:l},a):null,u)}var My=x.createElement(Ry,null),Oy=class extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?x.createElement(We.Provider,{value:this.props.routeContext},x.createElement(ts.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _y({routeContext:t,match:e,children:a}){let n=x.useContext(Fn);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),x.createElement(We.Provider,{value:t},a)}function jy(t,e=[],a=null,n=null,l=null){if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let i=t,u=a==null?void 0:a.errors;if(u!=null){let o=i.findIndex(d=>d.route.id&&(u==null?void 0:u[d.route.id])!==void 0);dt(o>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),i=i.slice(0,Math.min(i.length,o+1))}let r=!1,c=-1;if(a)for(let o=0;o<i.length;o++){let d=i[o];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=o),d.route.id){let{loaderData:y,errors:f}=a,g=d.route.loader&&!y.hasOwnProperty(d.route.id)&&(!f||f[d.route.id]===void 0);if(d.route.lazy||g){r=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((o,d,y)=>{let f,g=!1,b=null,S=null;a&&(f=u&&d.route.id?u[d.route.id]:void 0,b=d.route.errorElement||My,r&&(c<0&&y===0?(bm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,S=null):c===y&&(g=!0,S=d.route.hydrateFallbackElement||null)));let T=e.concat(i.slice(0,y+1)),h=()=>{let s;return f?s=b:g?s=S:d.route.Component?s=x.createElement(d.route.Component,null):d.route.element?s=d.route.element:s=o,x.createElement(_y,{match:d,routeContext:{outlet:o,matches:T,isDataRoute:a!=null},children:s})};return a&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?x.createElement(Oy,{location:a.location,revalidation:a.revalidation,component:b,error:f,children:h(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:n}):h()},null)}function es(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dy(t){let e=x.useContext(Fn);return dt(e,es(t)),e}function Cy(t){let e=x.useContext(Fu);return dt(e,es(t)),e}function Ny(t){let e=x.useContext(We);return dt(e,es(t)),e}function as(t){let e=Ny(t),a=e.matches[e.matches.length-1];return dt(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function Uy(){return as("useRouteId")}function Hy(){var n;let t=x.useContext(ts),e=Cy("useRouteError"),a=as("useRouteError");return t!==void 0?t:(n=e.errors)==null?void 0:n[a]}function By(){let{router:t}=Dy("useNavigate"),e=as("useNavigate"),a=x.useRef(!1);return ym(()=>{a.current=!0}),x.useCallback(async(l,i={})=>{ze(a.current,gm),a.current&&(typeof l=="number"?t.navigate(l):await t.navigate(l,{fromRouteId:e,...i}))},[t,e])}var $f={};function bm(t,e,a){!e&&!$f[t]&&($f[t]=!0,ze(!1,a))}x.memo(Ly);function Ly({routes:t,future:e,state:a,unstable_onError:n}){return xm(t,void 0,a,n,e)}function ml(t){dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yy({basename:t="/",children:e=null,location:a,navigationType:n="POP",navigator:l,static:i=!1}){dt(!di(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),r=x.useMemo(()=>({basename:u,navigator:l,static:i,future:{}}),[u,l,i]);typeof a=="string"&&(a=Wn(a));let{pathname:c="/",search:o="",hash:d="",state:y=null,key:f="default"}=a,g=x.useMemo(()=>{let b=$e(c,u);return b==null?null:{location:{pathname:b,search:o,hash:d,state:y,key:f},navigationType:n}},[u,c,o,d,y,f,n]);return ze(g!=null,`<Router basename="${u}"> is not able to match the URL "${c}${o}${d}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:x.createElement(Oe.Provider,{value:r},x.createElement(fi.Provider,{children:e,value:g}))}function Gy({children:t,location:e}){return zy(Zc(t),e)}function Zc(t,e=[]){let a=[];return x.Children.forEach(t,(n,l)=>{if(!x.isValidElement(n))return;let i=[...e,l];if(n.type===x.Fragment){a.push.apply(a,Zc(n.props.children,i));return}dt(n.type===ml,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),dt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let u={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=Zc(n.props.children,i)),a.push(u)}),a}var ki="get",Ki="application/x-www-form-urlencoded";function Pu(t){return t!=null&&typeof t.tagName=="string"}function qy(t){return Pu(t)&&t.tagName.toLowerCase()==="button"}function Xy(t){return Pu(t)&&t.tagName.toLowerCase()==="form"}function Qy(t){return Pu(t)&&t.tagName.toLowerCase()==="input"}function Vy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Zy(t,e){return t.button===0&&(!e||e==="_self")&&!Vy(t)}var _i=null;function ky(){if(_i===null)try{new FormData(document.createElement("form"),0),_i=!1}catch{_i=!0}return _i}var Ky=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qr(t){return t!=null&&!Ky.has(t)?(ze(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ki}"`),null):t}function $y(t,e){let a,n,l,i,u;if(Xy(t)){let r=t.getAttribute("action");n=r?$e(r,e):null,a=t.getAttribute("method")||ki,l=qr(t.getAttribute("enctype"))||Ki,i=new FormData(t)}else if(qy(t)||Qy(t)&&(t.type==="submit"||t.type==="image")){let r=t.form;if(r==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||r.getAttribute("action");if(n=c?$e(c,e):null,a=t.getAttribute("formmethod")||r.getAttribute("method")||ki,l=qr(t.getAttribute("formenctype"))||qr(r.getAttribute("enctype"))||Ki,i=new FormData(r,t),!ky()){let{name:o,type:d,value:y}=t;if(d==="image"){let f=o?`${o}.`:"";i.append(`${f}x`,"0"),i.append(`${f}y`,"0")}else o&&i.append(o,y)}}else{if(Pu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ki,n=null,l=Ki,u=t}return i&&l==="text/plain"&&(u=i,i=void 0),{action:n,method:a.toLowerCase(),encType:l,formData:i,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ns(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jy(t,e,a){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname=`_root.${a}`:e&&$e(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${a}`,n}async function Wy(t,e){if(t.id in e)return e[t.id];try{let a=await import(t.module);return e[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fy(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Py(t,e,a){let n=await Promise.all(t.map(async l=>{let i=e.routes[l.route.id];if(i){let u=await Wy(i,a);return u.links?u.links():[]}return[]}));return av(n.flat(1).filter(Fy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Jf(t,e,a,n,l,i){let u=(c,o)=>a[o]?c.route.id!==a[o].route.id:!0,r=(c,o)=>{var d;return a[o].pathname!==c.pathname||((d=a[o].route.path)==null?void 0:d.endsWith("*"))&&a[o].params["*"]!==c.params["*"]};return i==="assets"?e.filter((c,o)=>u(c,o)||r(c,o)):i==="data"?e.filter((c,o)=>{var y;let d=n.routes[c.route.id];if(!d||!d.hasLoader)return!1;if(u(c,o)||r(c,o))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=a[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Iy(t,e,{includeHydrateFallback:a}={}){return tv(t.map(n=>{let l=e.routes[n.route.id];if(!l)return[];let i=[l.module];return l.clientActionModule&&(i=i.concat(l.clientActionModule)),l.clientLoaderModule&&(i=i.concat(l.clientLoaderModule)),a&&l.hydrateFallbackModule&&(i=i.concat(l.hydrateFallbackModule)),l.imports&&(i=i.concat(l.imports)),i}).flat(1))}function tv(t){return[...new Set(t)]}function ev(t){let e={},a=Object.keys(t).sort();for(let n of a)e[n]=t[n];return e}function av(t,e){let a=new Set;return new Set(e),t.reduce((n,l)=>{let i=JSON.stringify(ev(l));return a.has(i)||(a.add(i),n.push({key:i,link:l})),n},[])}function Sm(){let t=x.useContext(Fn);return ns(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function nv(){let t=x.useContext(Fu);return ns(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var ls=x.createContext(void 0);ls.displayName="FrameworkContext";function wm(){let t=x.useContext(ls);return ns(t,"You must render this element inside a <HydratedRouter> element"),t}function lv(t,e){let a=x.useContext(ls),[n,l]=x.useState(!1),[i,u]=x.useState(!1),{onFocus:r,onBlur:c,onMouseEnter:o,onMouseLeave:d,onTouchStart:y}=e,f=x.useRef(null);x.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let S=h=>{h.forEach(s=>{u(s.isIntersecting)})},T=new IntersectionObserver(S,{threshold:.5});return f.current&&T.observe(f.current),()=>{T.disconnect()}}},[t]),x.useEffect(()=>{if(n){let S=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(S)}}},[n]);let g=()=>{l(!0)},b=()=>{l(!1),u(!1)};return a?t!=="intent"?[i,f,{}]:[i,f,{onFocus:cl(r,g),onBlur:cl(c,b),onMouseEnter:cl(o,g),onMouseLeave:cl(d,b),onTouchStart:cl(y,g)}]:[!1,f,{}]}function cl(t,e){return a=>{t&&t(a),a.defaultPrevented||e(a)}}function iv({page:t,...e}){let{router:a}=Sm(),n=x.useMemo(()=>om(a.routes,t,a.basename),[a.routes,t,a.basename]);return n?x.createElement(rv,{page:t,matches:n,...e}):null}function uv(t){let{manifest:e,routeModules:a}=wm(),[n,l]=x.useState([]);return x.useEffect(()=>{let i=!1;return Py(t,e,a).then(u=>{i||l(u)}),()=>{i=!0}},[t,e,a]),n}function rv({page:t,matches:e,...a}){let n=Fa(),{manifest:l,routeModules:i}=wm(),{basename:u}=Sm(),{loaderData:r,matches:c}=nv(),o=x.useMemo(()=>Jf(t,e,c,l,n,"data"),[t,e,c,l,n]),d=x.useMemo(()=>Jf(t,e,c,l,n,"assets"),[t,e,c,l,n]),y=x.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let b=new Set,S=!1;if(e.forEach(h=>{var m;let s=l.routes[h.route.id];!s||!s.hasLoader||(!o.some(v=>v.route.id===h.route.id)&&h.route.id in r&&((m=i[h.route.id])!=null&&m.shouldRevalidate)||s.hasClientLoader?S=!0:b.add(h.route.id))}),b.size===0)return[];let T=Jy(t,u,"data");return S&&b.size>0&&T.searchParams.set("_routes",e.filter(h=>b.has(h.route.id)).map(h=>h.route.id).join(",")),[T.pathname+T.search]},[u,r,n,l,o,e,t,i]),f=x.useMemo(()=>Iy(d,l),[d,l]),g=uv(d);return x.createElement(x.Fragment,null,y.map(b=>x.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...a})),f.map(b=>x.createElement("link",{key:b,rel:"modulepreload",href:b,...a})),g.map(({key:b,link:S})=>x.createElement("link",{key:b,nonce:a.nonce,...S})))}function cv(...t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var Em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Em&&(window.__reactRouterVersion="7.9.1")}catch{}function ov({basename:t,children:e,window:a}){let n=x.useRef();n.current==null&&(n.current=F1({window:a,v5Compat:!0}));let l=n.current,[i,u]=x.useState({action:l.action,location:l.location}),r=x.useCallback(c=>{x.startTransition(()=>u(c))},[u]);return x.useLayoutEffect(()=>l.listen(r),[l,r]),x.createElement(Yy,{basename:t,children:e,location:i.location,navigationType:i.action,navigator:l})}var Am=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,is=x.forwardRef(function({onClick:e,discover:a="render",prefetch:n="none",relative:l,reloadDocument:i,replace:u,state:r,target:c,to:o,preventScrollReset:d,viewTransition:y,...f},g){let{basename:b}=x.useContext(Oe),S=typeof o=="string"&&Am.test(o),T,h=!1;if(typeof o=="string"&&S&&(T=o,Em))try{let U=new URL(window.location.href),C=o.startsWith("//")?new URL(U.protocol+o):new URL(o),I=$e(C.pathname,b);C.origin===U.origin&&I!=null?o=I+C.search+C.hash:h=!0}catch{ze(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let s=Ay(o,{relative:l}),[m,v,A]=lv(n,f),z=hv(o,{replace:u,state:r,target:c,preventScrollReset:d,relative:l,viewTransition:y});function E(U){e&&e(U),U.defaultPrevented||z(U)}let O=x.createElement("a",{...f,...A,href:T||s,onClick:h||i?e:E,ref:cv(g,v),target:c,"data-discover":!S&&a==="render"?"true":void 0});return m&&!S?x.createElement(x.Fragment,null,O,x.createElement(iv,{page:s})):O});is.displayName="Link";var sv=x.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:n="",end:l=!1,style:i,to:u,viewTransition:r,children:c,...o},d){let y=hi(u,{relative:o.relative}),f=Fa(),g=x.useContext(Fu),{navigator:b,basename:S}=x.useContext(Oe),T=g!=null&&vv(y)&&r===!0,h=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,s=f.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(s=s.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase()),m&&S&&(m=$e(m,S)||m);const v=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let A=s===h||!l&&s.startsWith(h)&&s.charAt(v)==="/",z=m!=null&&(m===h||!l&&m.startsWith(h)&&m.charAt(h.length)==="/"),E={isActive:A,isPending:z,isTransitioning:T},O=A?e:void 0,U;typeof n=="function"?U=n(E):U=[n,A?"active":null,z?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let C=typeof i=="function"?i(E):i;return x.createElement(is,{...o,"aria-current":O,className:U,ref:d,style:C,to:u,viewTransition:r},typeof c=="function"?c(E):c)});sv.displayName="NavLink";var fv=x.forwardRef(({discover:t="render",fetcherKey:e,navigate:a,reloadDocument:n,replace:l,state:i,method:u=ki,action:r,onSubmit:c,relative:o,preventScrollReset:d,viewTransition:y,...f},g)=>{let b=gv(),S=yv(r,{relative:o}),T=u.toLowerCase()==="get"?"get":"post",h=typeof r=="string"&&Am.test(r),s=m=>{if(c&&c(m),m.defaultPrevented)return;m.preventDefault();let v=m.nativeEvent.submitter,A=(v==null?void 0:v.getAttribute("formmethod"))||u;b(v||m.currentTarget,{fetcherKey:e,method:A,navigate:a,replace:l,state:i,relative:o,preventScrollReset:d,viewTransition:y})};return x.createElement("form",{ref:g,method:T,action:S,onSubmit:n?c:s,...f,"data-discover":!h&&t==="render"?"true":void 0})});fv.displayName="Form";function dv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tm(t){let e=x.useContext(Fn);return dt(e,dv(t)),e}function hv(t,{target:e,replace:a,state:n,preventScrollReset:l,relative:i,viewTransition:u}={}){let r=vm(),c=Fa(),o=hi(t,{relative:i});return x.useCallback(d=>{if(Zy(d,e)){d.preventDefault();let y=a!==void 0?a:kl(c)===kl(o);r(t,{replace:y,state:n,preventScrollReset:l,relative:i,viewTransition:u})}},[c,r,o,a,n,e,t,l,i,u])}var mv=0,pv=()=>`__${String(++mv)}__`;function gv(){let{router:t}=Tm("useSubmit"),{basename:e}=x.useContext(Oe),a=Uy();return x.useCallback(async(n,l={})=>{let{action:i,method:u,encType:r,formData:c,body:o}=$y(n,e);if(l.navigate===!1){let d=l.fetcherKey||pv();await t.fetch(d,a,l.action||i,{preventScrollReset:l.preventScrollReset,formData:c,body:o,formMethod:l.method||u,formEncType:l.encType||r,flushSync:l.flushSync})}else await t.navigate(l.action||i,{preventScrollReset:l.preventScrollReset,formData:c,body:o,formMethod:l.method||u,formEncType:l.encType||r,replace:l.replace,state:l.state,fromRouteId:a,flushSync:l.flushSync,viewTransition:l.viewTransition})},[t,e,a])}function yv(t,{relative:e}={}){let{basename:a}=x.useContext(Oe),n=x.useContext(We);dt(n,"useFormAction must be used inside a RouteContext");let[l]=n.matches.slice(-1),i={...hi(t||".",{relative:e})},u=Fa();if(t==null){i.search=u.search;let r=new URLSearchParams(i.search),c=r.getAll("index");if(c.some(d=>d==="")){r.delete("index"),c.filter(y=>y).forEach(y=>r.append("index",y));let d=r.toString();i.search=d?`?${d}`:""}}return(!t||t===".")&&l.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:Xe([a,i.pathname])),kl(i)}function vv(t,{relative:e}={}){let a=x.useContext(pm);dt(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Tm("useViewTransitionState"),l=hi(t,{relative:e});if(!a.isTransitioning)return!1;let i=$e(a.currentLocation.pathname,n)||a.currentLocation.pathname,u=$e(a.nextLocation.pathname,n)||a.nextLocation.pathname;return Ou(l.pathname,u)!=null||Ou(l.pathname,i)!=null}var Vt=function(){return Vt=Object.assign||function(e){for(var a,n=1,l=arguments.length;n<l;n++){a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Vt.apply(this,arguments)};function Kl(t,e,a){if(a||arguments.length===2)for(var n=0,l=e.length,i;n<l;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}var ut="-ms-",jl="-moz-",W="-webkit-",zm="comm",Iu="rule",us="decl",xv="@import",Rm="@keyframes",bv="@layer",Mm=Math.abs,rs=String.fromCharCode,kc=Object.assign;function Sv(t,e){return Rt(t,0)^45?(((e<<2^Rt(t,0))<<2^Rt(t,1))<<2^Rt(t,2))<<2^Rt(t,3):0}function Om(t){return t.trim()}function Ce(t,e){return(t=e.exec(t))?t[0]:t}function Y(t,e,a){return t.replace(e,a)}function $i(t,e,a){return t.indexOf(e,a)}function Rt(t,e){return t.charCodeAt(e)|0}function Ln(t,e,a){return t.slice(e,a)}function be(t){return t.length}function _m(t){return t.length}function pl(t,e){return e.push(t),t}function wv(t,e){return t.map(e).join("")}function Wf(t,e){return t.filter(function(a){return!Ce(a,e)})}var tr=1,Yn=1,jm=0,me=0,vt=0,Pn="";function er(t,e,a,n,l,i,u,r){return{value:t,root:e,parent:a,type:n,props:l,children:i,line:tr,column:Yn,length:u,return:"",siblings:r}}function na(t,e){return kc(er("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function tn(t){for(;t.root;)t=na(t.root,{children:[t]});pl(t,t.siblings)}function Ev(){return vt}function Av(){return vt=me>0?Rt(Pn,--me):0,Yn--,vt===10&&(Yn=1,tr--),vt}function ye(){return vt=me<jm?Rt(Pn,me++):0,Yn++,vt===10&&(Yn=1,tr++),vt}function qa(){return Rt(Pn,me)}function Ji(){return me}function ar(t,e){return Ln(Pn,t,e)}function Kc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tv(t){return tr=Yn=1,jm=be(Pn=t),me=0,[]}function zv(t){return Pn="",t}function Xr(t){return Om(ar(me-1,$c(t===91?t+2:t===40?t+1:t)))}function Rv(t){for(;(vt=qa())&&vt<33;)ye();return Kc(t)>2||Kc(vt)>3?"":" "}function Mv(t,e){for(;--e&&ye()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return ar(t,Ji()+(e<6&&qa()==32&&ye()==32))}function $c(t){for(;ye();)switch(vt){case t:return me;case 34:case 39:t!==34&&t!==39&&$c(vt);break;case 40:t===41&&$c(t);break;case 92:ye();break}return me}function Ov(t,e){for(;ye()&&t+vt!==57;)if(t+vt===84&&qa()===47)break;return"/*"+ar(e,me-1)+"*"+rs(t===47?t:ye())}function _v(t){for(;!Kc(qa());)ye();return ar(t,me)}function jv(t){return zv(Wi("",null,null,null,[""],t=Tv(t),0,[0],t))}function Wi(t,e,a,n,l,i,u,r,c){for(var o=0,d=0,y=u,f=0,g=0,b=0,S=1,T=1,h=1,s=0,m="",v=l,A=i,z=n,E=m;T;)switch(b=s,s=ye()){case 40:if(b!=108&&Rt(E,y-1)==58){$i(E+=Y(Xr(s),"&","&\f"),"&\f",Mm(o?r[o-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Xr(s);break;case 9:case 10:case 13:case 32:E+=Rv(b);break;case 92:E+=Mv(Ji()-1,7);continue;case 47:switch(qa()){case 42:case 47:pl(Dv(Ov(ye(),Ji()),e,a,c),c);break;default:E+="/"}break;case 123*S:r[o++]=be(E)*h;case 125*S:case 59:case 0:switch(s){case 0:case 125:T=0;case 59+d:h==-1&&(E=Y(E,/\f/g,"")),g>0&&be(E)-y&&pl(g>32?Pf(E+";",n,a,y-1,c):Pf(Y(E," ","")+";",n,a,y-2,c),c);break;case 59:E+=";";default:if(pl(z=Ff(E,e,a,o,d,l,r,m,v=[],A=[],y,i),i),s===123)if(d===0)Wi(E,e,z,z,v,i,y,r,A);else switch(f===99&&Rt(E,3)===110?100:f){case 100:case 108:case 109:case 115:Wi(t,z,z,n&&pl(Ff(t,z,z,0,0,l,r,m,l,v=[],y,A),A),l,A,y,r,n?v:A);break;default:Wi(E,z,z,z,[""],A,0,r,A)}}o=d=g=0,S=h=1,m=E="",y=u;break;case 58:y=1+be(E),g=b;default:if(S<1){if(s==123)--S;else if(s==125&&S++==0&&Av()==125)continue}switch(E+=rs(s),s*S){case 38:h=d>0?1:(E+="\f",-1);break;case 44:r[o++]=(be(E)-1)*h,h=1;break;case 64:qa()===45&&(E+=Xr(ye())),f=qa(),d=y=be(m=E+=_v(Ji())),s++;break;case 45:b===45&&be(E)==2&&(S=0)}}return i}function Ff(t,e,a,n,l,i,u,r,c,o,d,y){for(var f=l-1,g=l===0?i:[""],b=_m(g),S=0,T=0,h=0;S<n;++S)for(var s=0,m=Ln(t,f+1,f=Mm(T=u[S])),v=t;s<b;++s)(v=Om(T>0?g[s]+" "+m:Y(m,/&\f/g,g[s])))&&(c[h++]=v);return er(t,e,a,l===0?Iu:r,c,o,d,y)}function Dv(t,e,a,n){return er(t,e,a,zm,rs(Ev()),Ln(t,2,-2),0,n)}function Pf(t,e,a,n,l){return er(t,e,a,us,Ln(t,0,n),Ln(t,n+1,-1),n,l)}function Dm(t,e,a){switch(Sv(t,e)){case 5103:return W+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+t+t;case 4789:return jl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return W+t+jl+t+ut+t+t;case 5936:switch(Rt(t,e+11)){case 114:return W+t+ut+Y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return W+t+ut+Y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return W+t+ut+Y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return W+t+ut+t+t;case 6165:return W+t+ut+"flex-"+t+t;case 5187:return W+t+Y(t,/(\w+).+(:[^]+)/,W+"box-$1$2"+ut+"flex-$1$2")+t;case 5443:return W+t+ut+"flex-item-"+Y(t,/flex-|-self/g,"")+(Ce(t,/flex-|baseline/)?"":ut+"grid-row-"+Y(t,/flex-|-self/g,""))+t;case 4675:return W+t+ut+"flex-line-pack"+Y(t,/align-content|flex-|-self/g,"")+t;case 5548:return W+t+ut+Y(t,"shrink","negative")+t;case 5292:return W+t+ut+Y(t,"basis","preferred-size")+t;case 6060:return W+"box-"+Y(t,"-grow","")+W+t+ut+Y(t,"grow","positive")+t;case 4554:return W+Y(t,/([^-])(transform)/g,"$1"+W+"$2")+t;case 6187:return Y(Y(Y(t,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),t,"")+t;case 5495:case 3959:return Y(t,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return Y(Y(t,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+t+t;case 4200:if(!Ce(t,/flex-|baseline/))return ut+"grid-column-align"+Ln(t,e)+t;break;case 2592:case 3360:return ut+Y(t,"template-","")+t;case 4384:case 3616:return a&&a.some(function(n,l){return e=l,Ce(n.props,/grid-\w+-end/)})?~$i(t+(a=a[e].value),"span",0)?t:ut+Y(t,"-start","")+t+ut+"grid-row-span:"+(~$i(a,"span",0)?Ce(a,/\d+/):+Ce(a,/\d+/)-+Ce(t,/\d+/))+";":ut+Y(t,"-start","")+t;case 4896:case 4128:return a&&a.some(function(n){return Ce(n.props,/grid-\w+-start/)})?t:ut+Y(Y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Y(t,/(.+)-inline(.+)/,W+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(be(t)-1-e>6)switch(Rt(t,e+1)){case 109:if(Rt(t,e+4)!==45)break;case 102:return Y(t,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+jl+(Rt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~$i(t,"stretch",0)?Dm(Y(t,"stretch","fill-available"),e,a)+t:t}break;case 5152:case 5920:return Y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,l,i,u,r,c,o){return ut+l+":"+i+o+(u?ut+l+"-span:"+(r?c:+c-+i)+o:"")+t});case 4949:if(Rt(t,e+6)===121)return Y(t,":",":"+W)+t;break;case 6444:switch(Rt(t,Rt(t,14)===45?18:11)){case 120:return Y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(Rt(t,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+ut+"$2box$3")+t;case 100:return Y(t,":",":"+ut)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(t,"scroll-","scroll-snap-")+t}return t}function _u(t,e){for(var a="",n=0;n<t.length;n++)a+=e(t[n],n,t,e)||"";return a}function Cv(t,e,a,n){switch(t.type){case bv:if(t.children.length)break;case xv:case us:return t.return=t.return||t.value;case zm:return"";case Rm:return t.return=t.value+"{"+_u(t.children,n)+"}";case Iu:if(!be(t.value=t.props.join(",")))return""}return be(a=_u(t.children,n))?t.return=t.value+"{"+a+"}":""}function Nv(t){var e=_m(t);return function(a,n,l,i){for(var u="",r=0;r<e;r++)u+=t[r](a,n,l,i)||"";return u}}function Uv(t){return function(e){e.root||(e=e.return)&&t(e)}}function Hv(t,e,a,n){if(t.length>-1&&!t.return)switch(t.type){case us:t.return=Dm(t.value,t.length,a);return;case Rm:return _u([na(t,{value:Y(t.value,"@","@"+W)})],n);case Iu:if(t.length)return wv(a=t.props,function(l){switch(Ce(l,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tn(na(t,{props:[Y(l,/:(read-\w+)/,":"+jl+"$1")]})),tn(na(t,{props:[l]})),kc(t,{props:Wf(a,n)});break;case"::placeholder":tn(na(t,{props:[Y(l,/:(plac\w+)/,":"+W+"input-$1")]})),tn(na(t,{props:[Y(l,/:(plac\w+)/,":"+jl+"$1")]})),tn(na(t,{props:[Y(l,/:(plac\w+)/,ut+"input-$1")]})),tn(na(t,{props:[l]})),kc(t,{props:Wf(a,n)});break}return""})}}var Bv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},Gn=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",Cm="active",Nm="data-styled-version",nr="6.1.19",cs=`/*!sc*/
`,ju=typeof window<"u"&&typeof document<"u",Lv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),lr=Object.freeze([]),qn=Object.freeze({});function Yv(t,e,a){return a===void 0&&(a=qn),t.theme!==a.theme&&t.theme||e||a.theme}var Um=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qv=/(^-|-$)/g;function If(t){return t.replace(Gv,"-").replace(qv,"")}var Xv=/(a)(d)/gi,ji=52,td=function(t){return String.fromCharCode(t+(t>25?39:97))};function Jc(t){var e,a="";for(e=Math.abs(t);e>ji;e=e/ji|0)a=td(e%ji)+a;return(td(e%ji)+a).replace(Xv,"$1-$2")}var Qr,Hm=5381,vn=function(t,e){for(var a=e.length;a;)t=33*t^e.charCodeAt(--a);return t},Bm=function(t){return vn(Hm,t)};function Lm(t){return Jc(Bm(t)>>>0)}function Qv(t){return t.displayName||t.name||"Component"}function Vr(t){return typeof t=="string"&&!0}var Ym=typeof Symbol=="function"&&Symbol.for,Gm=Ym?Symbol.for("react.memo"):60115,Vv=Ym?Symbol.for("react.forward_ref"):60112,Zv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kv=((Qr={})[Vv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qr[Gm]=qm,Qr);function ed(t){return("type"in(e=t)&&e.type.$$typeof)===Gm?qm:"$$typeof"in t?Kv[t.$$typeof]:Zv;var e}var $v=Object.defineProperty,Jv=Object.getOwnPropertyNames,ad=Object.getOwnPropertySymbols,Wv=Object.getOwnPropertyDescriptor,Fv=Object.getPrototypeOf,nd=Object.prototype;function Xm(t,e,a){if(typeof e!="string"){if(nd){var n=Fv(e);n&&n!==nd&&Xm(t,n,a)}var l=Jv(e);ad&&(l=l.concat(ad(e)));for(var i=ed(t),u=ed(e),r=0;r<l.length;++r){var c=l[r];if(!(c in kv||a&&a[c]||u&&c in u||i&&c in i)){var o=Wv(e,c);try{$v(t,c,o)}catch{}}}}return t}function Xn(t){return typeof t=="function"}function os(t){return typeof t=="object"&&"styledComponentId"in t}function Ca(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Wc(t,e){if(t.length===0)return"";for(var a=t[0],n=1;n<t.length;n++)a+=t[n];return a}function $l(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Fc(t,e,a){if(a===void 0&&(a=!1),!a&&!$l(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Fc(t[n],e[n]);else if($l(e))for(var n in e)t[n]=Fc(t[n],e[n]);return t}function ss(t,e){Object.defineProperty(t,"toString",{value:e})}function mi(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Pv=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var a=0,n=0;n<e;n++)a+=this.groupSizes[n];return a},t.prototype.insertRules=function(e,a){if(e>=this.groupSizes.length){for(var n=this.groupSizes,l=n.length,i=l;e>=i;)if((i<<=1)<0)throw mi(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var u=l;u<i;u++)this.groupSizes[u]=0}for(var r=this.indexOfGroup(e+1),c=(u=0,a.length);u<c;u++)this.tag.insertRule(r,a[u])&&(this.groupSizes[e]++,r++)},t.prototype.clearGroup=function(e){if(e<this.length){var a=this.groupSizes[e],n=this.indexOfGroup(e),l=n+a;this.groupSizes[e]=0;for(var i=n;i<l;i++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var a="";if(e>=this.length||this.groupSizes[e]===0)return a;for(var n=this.groupSizes[e],l=this.indexOfGroup(e),i=l+n,u=l;u<i;u++)a+="".concat(this.tag.getRule(u)).concat(cs);return a},t}(),Fi=new Map,Du=new Map,Pi=1,Di=function(t){if(Fi.has(t))return Fi.get(t);for(;Du.has(Pi);)Pi++;var e=Pi++;return Fi.set(t,e),Du.set(e,t),e},Iv=function(t,e){Pi=e+1,Fi.set(t,e),Du.set(e,t)},tx="style[".concat(Gn,"][").concat(Nm,'="').concat(nr,'"]'),ex=new RegExp("^".concat(Gn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ax=function(t,e,a){for(var n,l=a.split(","),i=0,u=l.length;i<u;i++)(n=l[i])&&t.registerName(e,n)},nx=function(t,e){for(var a,n=((a=e.textContent)!==null&&a!==void 0?a:"").split(cs),l=[],i=0,u=n.length;i<u;i++){var r=n[i].trim();if(r){var c=r.match(ex);if(c){var o=0|parseInt(c[1],10),d=c[2];o!==0&&(Iv(d,o),ax(t,d,c[3]),t.getTag().insertRules(o,l)),l.length=0}else l.push(r)}}},ld=function(t){for(var e=document.querySelectorAll(tx),a=0,n=e.length;a<n;a++){var l=e[a];l&&l.getAttribute(Gn)!==Cm&&(nx(t,l),l.parentNode&&l.parentNode.removeChild(l))}};function lx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qm=function(t){var e=document.head,a=t||e,n=document.createElement("style"),l=function(r){var c=Array.from(r.querySelectorAll("style[".concat(Gn,"]")));return c[c.length-1]}(a),i=l!==void 0?l.nextSibling:null;n.setAttribute(Gn,Cm),n.setAttribute(Nm,nr);var u=lx();return u&&n.setAttribute("nonce",u),a.insertBefore(n,i),n},ix=function(){function t(e){this.element=Qm(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var n=document.styleSheets,l=0,i=n.length;l<i;l++){var u=n[l];if(u.ownerNode===a)return u}throw mi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,a){try{return this.sheet.insertRule(a,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var a=this.sheet.cssRules[e];return a&&a.cssText?a.cssText:""},t}(),ux=function(){function t(e){this.element=Qm(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,a){if(e<=this.length&&e>=0){var n=document.createTextNode(a);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),rx=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,a){return e<=this.length&&(this.rules.splice(e,0,a),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),id=ju,cx={isServer:!ju,useCSSOMInjection:!Lv},Vm=function(){function t(e,a,n){e===void 0&&(e=qn),a===void 0&&(a={});var l=this;this.options=Vt(Vt({},cx),e),this.gs=a,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ju&&id&&(id=!1,ld(this)),ss(this,function(){return function(i){for(var u=i.getTag(),r=u.length,c="",o=function(y){var f=function(h){return Du.get(h)}(y);if(f===void 0)return"continue";var g=i.names.get(f),b=u.getGroup(y);if(g===void 0||!g.size||b.length===0)return"continue";var S="".concat(Gn,".g").concat(y,'[id="').concat(f,'"]'),T="";g!==void 0&&g.forEach(function(h){h.length>0&&(T+="".concat(h,","))}),c+="".concat(b).concat(S,'{content:"').concat(T,'"}').concat(cs)},d=0;d<r;d++)o(d);return c}(l)})}return t.registerId=function(e){return Di(e)},t.prototype.rehydrate=function(){!this.server&&ju&&ld(this)},t.prototype.reconstructWithOptions=function(e,a){return a===void 0&&(a=!0),new t(Vt(Vt({},this.options),e),this.gs,a&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(a){var n=a.useCSSOMInjection,l=a.target;return a.isServer?new rx(l):n?new ix(l):new ux(l)}(this.options),new Pv(e)));var e},t.prototype.hasNameForId=function(e,a){return this.names.has(e)&&this.names.get(e).has(a)},t.prototype.registerName=function(e,a){if(Di(e),this.names.has(e))this.names.get(e).add(a);else{var n=new Set;n.add(a),this.names.set(e,n)}},t.prototype.insertRules=function(e,a,n){this.registerName(e,a),this.getTag().insertRules(Di(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Di(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ox=/&/g,sx=/^\s*\/\/.*$/gm;function Zm(t,e){return t.map(function(a){return a.type==="rule"&&(a.value="".concat(e," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(e," ")),a.props=a.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Zm(a.children,e)),a})}function fx(t){var e,a,n,l=qn,i=l.options,u=i===void 0?qn:i,r=l.plugins,c=r===void 0?lr:r,o=function(f,g,b){return b.startsWith(a)&&b.endsWith(a)&&b.replaceAll(a,"").length>0?".".concat(e):f},d=c.slice();d.push(function(f){f.type===Iu&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(ox,a).replace(n,o))}),u.prefix&&d.push(Hv),d.push(Cv);var y=function(f,g,b,S){g===void 0&&(g=""),b===void 0&&(b=""),S===void 0&&(S="&"),e=S,a=g,n=new RegExp("\\".concat(a,"\\b"),"g");var T=f.replace(sx,""),h=jv(b||g?"".concat(b," ").concat(g," { ").concat(T," }"):T);u.namespace&&(h=Zm(h,u.namespace));var s=[];return _u(h,Nv(d.concat(Uv(function(m){return s.push(m)})))),s};return y.hash=c.length?c.reduce(function(f,g){return g.name||mi(15),vn(f,g.name)},Hm).toString():"",y}var dx=new Vm,Pc=fx(),km=Qe.createContext({shouldForwardProp:void 0,styleSheet:dx,stylis:Pc});km.Consumer;Qe.createContext(void 0);function ud(){return x.useContext(km)}var Km=function(){function t(e,a){var n=this;this.inject=function(l,i){i===void 0&&(i=Pc);var u=n.name+i.hash;l.hasNameForId(n.id,u)||l.insertRules(n.id,u,i(n.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=a,ss(this,function(){throw mi(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Pc),this.name+e.hash},t}(),hx=function(t){return t>="A"&&t<="Z"};function rd(t){for(var e="",a=0;a<t.length;a++){var n=t[a];if(a===1&&n==="-"&&t[0]==="-")return t;hx(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var $m=function(t){return t==null||t===!1||t===""},Jm=function(t){var e,a,n=[];for(var l in t){var i=t[l];t.hasOwnProperty(l)&&!$m(i)&&(Array.isArray(i)&&i.isCss||Xn(i)?n.push("".concat(rd(l),":"),i,";"):$l(i)?n.push.apply(n,Kl(Kl(["".concat(l," {")],Jm(i),!1),["}"],!1)):n.push("".concat(rd(l),": ").concat((e=l,(a=i)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in Bv||e.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return n};function Xa(t,e,a,n){if($m(t))return[];if(os(t))return[".".concat(t.styledComponentId)];if(Xn(t)){if(!Xn(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var l=t(e);return Xa(l,e,a,n)}var i;return t instanceof Km?a?(t.inject(a,n),[t.getName(n)]):[t]:$l(t)?Jm(t):Array.isArray(t)?Array.prototype.concat.apply(lr,t.map(function(u){return Xa(u,e,a,n)})):[t.toString()]}function mx(t){for(var e=0;e<t.length;e+=1){var a=t[e];if(Xn(a)&&!os(a))return!1}return!0}var px=Bm(nr),gx=function(){function t(e,a,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&mx(e),this.componentId=a,this.baseHash=vn(px,a),this.baseStyle=n,Vm.registerId(a)}return t.prototype.generateAndInjectStyles=function(e,a,n){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,a,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))l=Ca(l,this.staticRulesId);else{var i=Wc(Xa(this.rules,e,a,n)),u=Jc(vn(this.baseHash,i)>>>0);if(!a.hasNameForId(this.componentId,u)){var r=n(i,".".concat(u),void 0,this.componentId);a.insertRules(this.componentId,u,r)}l=Ca(l,u),this.staticRulesId=u}else{for(var c=vn(this.baseHash,n.hash),o="",d=0;d<this.rules.length;d++){var y=this.rules[d];if(typeof y=="string")o+=y;else if(y){var f=Wc(Xa(y,e,a,n));c=vn(c,f+d),o+=f}}if(o){var g=Jc(c>>>0);a.hasNameForId(this.componentId,g)||a.insertRules(this.componentId,g,n(o,".".concat(g),void 0,this.componentId)),l=Ca(l,g)}}return l},t}(),Wm=Qe.createContext(void 0);Wm.Consumer;var Zr={};function yx(t,e,a){var n=os(t),l=t,i=!Vr(t),u=e.attrs,r=u===void 0?lr:u,c=e.componentId,o=c===void 0?function(v,A){var z=typeof v!="string"?"sc":If(v);Zr[z]=(Zr[z]||0)+1;var E="".concat(z,"-").concat(Lm(nr+z+Zr[z]));return A?"".concat(A,"-").concat(E):E}(e.displayName,e.parentComponentId):c,d=e.displayName,y=d===void 0?function(v){return Vr(v)?"styled.".concat(v):"Styled(".concat(Qv(v),")")}(t):d,f=e.displayName&&e.componentId?"".concat(If(e.displayName),"-").concat(e.componentId):e.componentId||o,g=n&&l.attrs?l.attrs.concat(r).filter(Boolean):r,b=e.shouldForwardProp;if(n&&l.shouldForwardProp){var S=l.shouldForwardProp;if(e.shouldForwardProp){var T=e.shouldForwardProp;b=function(v,A){return S(v,A)&&T(v,A)}}else b=S}var h=new gx(a,f,n?l.componentStyle:void 0);function s(v,A){return function(z,E,O){var U=z.attrs,C=z.componentStyle,I=z.defaultProps,L=z.foldedComponentIds,Fe=z.styledComponentId,In=z.target,At=Qe.useContext(Wm),_=ud(),H=z.shouldForwardProp||_.shouldForwardProp,B=Yv(E,At,I)||qn,V=function(R,j,J){for(var tt,D=Vt(Vt({},j),{className:void 0,theme:J}),k=0;k<R.length;k+=1){var bt=Xn(tt=R[k])?tt(D):tt;for(var Tt in bt)D[Tt]=Tt==="className"?Ca(D[Tt],bt[Tt]):Tt==="style"?Vt(Vt({},D[Tt]),bt[Tt]):bt[Tt]}return j.className&&(D.className=Ca(D.className,j.className)),D}(U,E,B),nt=V.as||In,Gt={};for(var Nt in V)V[Nt]===void 0||Nt[0]==="$"||Nt==="as"||Nt==="theme"&&V.theme===B||(Nt==="forwardedAs"?Gt.as=V.forwardedAs:H&&!H(Nt,nt)||(Gt[Nt]=V[Nt]));var Pe=function(R,j){var J=ud(),tt=R.generateAndInjectStyles(j,J.styleSheet,J.stylis);return tt}(C,V),Kt=Ca(L,Fe);return Pe&&(Kt+=" "+Pe),V.className&&(Kt+=" "+V.className),Gt[Vr(nt)&&!Um.has(nt)?"class":"className"]=Kt,O&&(Gt.ref=O),x.createElement(nt,Gt)}(m,v,A)}s.displayName=y;var m=Qe.forwardRef(s);return m.attrs=g,m.componentStyle=h,m.displayName=y,m.shouldForwardProp=b,m.foldedComponentIds=n?Ca(l.foldedComponentIds,l.styledComponentId):"",m.styledComponentId=f,m.target=n?l.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=n?function(A){for(var z=[],E=1;E<arguments.length;E++)z[E-1]=arguments[E];for(var O=0,U=z;O<U.length;O++)Fc(A,U[O],!0);return A}({},l.defaultProps,v):v}}),ss(m,function(){return".".concat(m.styledComponentId)}),i&&Xm(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function cd(t,e){for(var a=[t[0]],n=0,l=e.length;n<l;n+=1)a.push(e[n],t[n+1]);return a}var od=function(t){return Object.assign(t,{isCss:!0})};function Fm(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];if(Xn(t)||$l(t))return od(Xa(cd(lr,Kl([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Xa(n):od(Xa(cd(n,e)))}function Ic(t,e,a){if(a===void 0&&(a=qn),!e)throw mi(1,e);var n=function(l){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return t(e,a,Fm.apply(void 0,Kl([l],i,!1)))};return n.attrs=function(l){return Ic(t,e,Vt(Vt({},a),{attrs:Array.prototype.concat(a.attrs,l).filter(Boolean)}))},n.withConfig=function(l){return Ic(t,e,Vt(Vt({},a),l))},n}var Pm=function(t){return Ic(yx,t)},M=Pm;Um.forEach(function(t){M[t]=Pm(t)});function Ra(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];var n=Wc(Fm.apply(void 0,Kl([t],e,!1))),l=Lm(n);return new Km(l,n)}const vx=M.header`
  z-index: 100;
  width: 100%;
  height: 8rem;
  position: absolute;
  top: 4rem;
  left: 0;
`,xx=M.div`
  z-index: 101;
  display: inline-block;
  margin: 0;
  padding: 0;
  transition: all .3s;
  transform: translate3d(0, -50%, 0);
  position: absolute;
  right: 8rem;
  top: 50%;

  a {
    display: block;
    padding: 0;
    outline: 0;
    border: none;
  }

  img {
    width: auto;
    height: 40px;
  }

  @media screen and (max-width: 1100px) {
    right: 4rem;
  }

  @media screen and (max-width: 800px) {
    img {
      width: auto;
      height: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      width: auto;
      height: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    right: 3.2rem;
  }

  @media screen and (max-width: 400px) {
    right: auto;
    left: 4.2rem;
  }
`,bx=M.div`
  font-size: 1.5rem;
  line-height: 3.2rem;
  transform: translate3d(0, -50%, 0);
  position: absolute;
  top: 50%;
  left: 8rem;

  svg {
    fill: #72a130;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .4rem;
    transform: translate3d(0, 3px, 0);
  }

  a {
    color: rgba(255, 255, 255, 0.4);
    display: inline-block;
    position: relative;
    text-decoration: none;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background-color: #72a130;
      transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      position: absolute;
      left: 0;
      bottom: 0;
    }

    &:hover {
      color: #ffffff;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 1100px) {
    left: 4rem;
  }

  @media screen and (max-width: 500px) {
    left: 3.2rem;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`,fs=()=>p.jsxs(vx,{children:[p.jsx(xx,{children:p.jsx(is,{to:"/",className:"site-logo",children:p.jsx("img",{src:"/logo-1.png",alt:"Homepage"})})}),p.jsxs(bx,{children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:p.jsx("path",{d:"M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"})}),p.jsx("a",{href:"mailto:hello@paramvani.com",children:"hello@paramvani.com"})]})]}),Sx=Ra`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0.2;
  }
  80% {
    opacity: 1;
  }
`,wx=M.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1d1d1d;
  z-index: 500;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`,Ex=M.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  padding: 0;
  display: inline-block;
  transform: translate3d(-50%, -50%, 0);
`,kr=M.div`
  content: "";
  background: #ffffff;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  animation: ${Sx} 1.6s infinite ease;
  animation-delay: 0.4s;

  &:nth-of-type(1) {
    left: 15px;
    animation-delay: 0.8s;
  }

  &:nth-of-type(3) {
    left: -15px;
    animation-delay: 0s;
  }
`,ds=({isLoading:t})=>t?p.jsx(wx,{children:p.jsxs(Ex,{children:[p.jsx(kr,{}),p.jsx(kr,{}),p.jsx(kr,{})]})}):null,Ax=M.div`
  z-index: 400;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${t=>t.isOpen?1:0};
  visibility: ${t=>t.isOpen?"visible":"hidden"};
  transform: ${t=>t.isOpen?"scale(1)":"scale(1.1)"};
  transition: visibility 0s linear ${t=>t.isOpen?"0s":"0.3s"}, 
              opacity 0.3s ${t=>(t.isOpen,"0s")}, 
              transform 0.3s;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
`,Tx=M.div`
  transform: translate3d(-50%, -50%, 0);
  padding: 5.6rem 3.2rem 2rem;
  width: 90vw;
  max-width: 34rem;
  border-radius: 0.4rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;

  h3 {
    margin-top: 0;
  }

  svg {
    fill: #8dc63f;
    width: 4.8rem;
    height: 4.8rem;
  }
`,zx=M.span`
  display: block;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  width: 12px;
  height: 12px;
  position: absolute;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 2px;
    height: 12px;
    top: 0;
    left: 5px;
    background-color: #000000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`,Rx=M.form`
  input[type="email"] {
    height: 5.6rem;
    padding: 1.2rem 24px 1.2rem;
    width: 100%;
    margin-bottom: 1.6rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 1.5rem;
    outline: none;

    &:focus {
      border-color: #8dc63f;
      box-shadow: 0 0 5px rgba(141, 198, 63, 0.8);
    }
  }

  input[type="submit"] {
    width: 100%;
    height: 5.6rem;
    background: #8dc63f;
    border: none;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .6rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all .3s ease;

    &:hover {
      background: #000000;
    }
  }

  label {
    color: #000000;
    font-family: "Gothic A1", sans-serif;
    font-size: 1.3rem;
    line-height: 1.846;
    padding: 0 2rem;
    display: block;
    margin-top: 1rem;
  }
`,hs=({isOpen:t,onClose:e})=>{const[a,n]=x.useState(""),[l,i]=x.useState("");x.useEffect(()=>{const c=o=>{o.key==="Escape"&&e()};return t?(document.addEventListener("keydown",c),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[t,e]);const u=c=>{c.preventDefault(),i("Thank you for subscribing!"),setTimeout(()=>{e(),i(""),n("")},2e3)},r=c=>{c.target===c.currentTarget&&e()};return p.jsx(Ax,{isOpen:t,onClick:r,children:p.jsxs(Tx,{children:[p.jsx(zx,{onClick:e}),p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:p.jsx("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})}),p.jsx("h3",{children:"Sign Up"}),p.jsx("p",{children:"Be the first to know about the latest updates and get exclusive offer on our grand opening."}),p.jsxs(Rx,{onSubmit:u,children:[p.jsx("input",{type:"email",value:a,onChange:c=>n(c.target.value),placeholder:"Email Address",required:!0}),p.jsx("input",{type:"submit",value:"Subscribe"}),l&&p.jsx("label",{children:l})]})]})})},Mx=M.ul`
  z-index: 2;
  list-style: none;
  font-size: 13px;
  line-height: 1.6rem;
  margin: 0;
  padding-bottom: 9.6rem;
  width: 1.5rem;
  text-align: center;
  position: absolute;
  right: 8rem;
  bottom: 0;

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 7.8rem;
    background-color: rgba(255, 255, 255, 0.4);
    position: absolute;
    left: 50%;
    bottom: 0;
  }

  @media screen and (max-width: 1100px) {
    right: 4rem;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`,ol=M.li`
  padding-left: 0;
  margin-bottom: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus,
    &:active {
      color: #ffffff;
    }
  }
`,ms=()=>p.jsxs(Mx,{children:[p.jsx(ol,{children:p.jsx("a",{href:"#0","aria-label":"Facebook",children:p.jsx("i",{className:"fab fa-facebook","aria-hidden":"true"})})}),p.jsx(ol,{children:p.jsx("a",{href:"#0","aria-label":"Twitter",children:p.jsx("i",{className:"fab fa-twitter","aria-hidden":"true"})})}),p.jsx(ol,{children:p.jsx("a",{href:"#0","aria-label":"Instagram",children:p.jsx("i",{className:"fab fa-instagram","aria-hidden":"true"})})}),p.jsx(ol,{children:p.jsx("a",{href:"#0","aria-label":"Dribbble",children:p.jsx("i",{className:"fab fa-dribbble","aria-hidden":"true"})})}),p.jsx(ol,{children:p.jsx("a",{href:"#0","aria-label":"Behance",children:p.jsx("i",{className:"fab fa-behance","aria-hidden":"true"})})})]}),Ox=M.div`
  z-index: 2;
  line-height: 12px;
  position: absolute;
  left: 8rem;
  bottom: 0;
  transform: rotate(-90deg) translate3d(0, 100%, 0);
  transform-origin: left bottom;

  &::before {
    display: block;
    content: "";
    background-color: rgba(255, 255, 255, 0.1);
    width: 7.8rem;
    height: 1px;
    position: absolute;
    left: 0;
    top: 50%;
  }

  @media screen and (max-width: 1100px) {
    left: 4rem;
  }

  @media screen and (max-width: 500px) {
    transform: translate3d(100%, 0, 0) rotate(-90deg);
    right: 3.2rem;
    left: auto;
  }
`,_x=M.a`
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: left;
  color: rgba(255, 255, 255, 0.4);
  padding-left: 9.6rem;
  margin: 0;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #ffffff;
  }
`,ps=({target:t,children:e})=>{const a=n=>{n.preventDefault();const l=document.querySelector(t);l&&l.scrollIntoView({behavior:"smooth"})};return p.jsx(Ox,{children:p.jsx(_x,{href:t,onClick:a,className:"smoothscroll",children:e})})},jx=M.section`
  padding-top: 6rem;
  padding-bottom: 8rem;
  background-color: #ffffff;
  position: relative;

  @media screen and (max-width: 800px) {
    padding-top: 4rem;
  }

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
  }

  &::before {
    display: block;
    content: "";
    width: 55%;
    height: 65%;
    background-color: #ffffff;
    opacity: .5;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-image: url(/images/bg-info.jpg);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  h1, h4 {
    margin-top: 0;
  }

  h1 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    padding-bottom: 3.6rem;
    margin-bottom: 3.6rem;
    position: relative;

    &::after {
      display: block;
      content: "";
      width: 8rem;
      height: 1px;
      background-color: #8dc63f;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  footer {
    margin-top: 9.6rem;
  }
`,Dx=M.div`
  width: 1.5rem;
  height: 20rem;
  position: absolute;
  top: 12rem;
  right: 9.2rem;

  &::before {
    content: "";
    display: block;
    height: inherit;
    width: 1px;
    background-color: #8dc63f;
    position: absolute;
    left: 50%;
    top: 0;
  }

  @media screen and (max-width: 1100px) {
    right: 5.2rem;
    top: 10rem;
  }

  @media screen and (max-width: 800px) {
    top: 8rem;
    right: 3rem;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`,Oa=M.div`
  width: 89%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 800px) {
    width: 95%;
    padding: 0 1rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 2rem;
  }
`,ea=M.div`
  flex: 1 1 0%;
  padding: 0 20px;

  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
`,Cx=M.nav`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
  }
  
  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`,Nx=M.ul`
  display: flex;
  list-style: none;
  margin: 0;
  font-size: 1.6rem;
  line-height: 6.8rem;
  position: relative;

  @media screen and (max-width: 800px) {
    justify-content: center;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }

  li {
    flex-shrink: 0;
    padding: 0;
    border-bottom: 1px solid #efefef;

    @media screen and (max-width: 800px) {
      border-bottom: none;
    }
  }

  a {
    display: block;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 3.2rem;
    position: relative;
    text-decoration: none;
    transition: all 0.3s ease;

    @media screen and (max-width: 800px) {
      padding: 0.8rem 1.5rem;
      border: 1px solid #efefef;
      border-radius: 4px;
      margin: 0.25rem;
      white-space: nowrap;
    }

    &:hover,
    &:focus,
    &:active {
      color: #000000;
    }
  }

  .active a {
    color: #000000;
    background-color: #efefef;
    border-radius: 4px 4px 0 0;
    position: relative;

    @media screen and (max-width: 800px) {
      background-color: #8dc63f;
      color: #ffffff;
      border-color: #8dc63f;
      border-radius: 4px;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 1.4;

    a {
      padding: 0.6rem 1.2rem;
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 400px) {
    justify-content: center;
    
    a {
      padding: 0.8rem 1rem;
      font-size: 1.2rem;
    }
  }
`,Ux=M.div`
  margin-top: 6.4rem;
  position: relative;
  width: 100%;

  @media screen and (max-width: 800px) {
    margin-top: 4rem;
    padding-right: 0;
  }

  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`,Kr=M.div`
  display: ${t=>t.isActive?"block":"none"};
`,$r=M.p`
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-size: 2.6rem;
  line-height: 1.846;
  margin-bottom: 3.6rem;
  color: #000000;

  @media screen and (max-width: 1200px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.2rem;
  }
`,Hx=M.div`
  margin-top: 4rem;
  counter-reset: ctr;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  @media screen and (max-width: 800px) {
    margin-top: 3rem;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    gap: 1.5rem;
  }

  .services-list__item {
    flex: 0 0 calc(50% - 1.2rem);
    margin-bottom: 2.4rem;

    @media screen and (max-width: 800px) {
      flex: 0 0 100%;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 600px) {
      margin-bottom: 1.5rem;
    }
  }

  .services-list__item-content {
    position: relative;
    padding-right: 60px;

    &::before {
      display: block;
      content: counter(ctr, decimal-leading-zero) ".";
      counter-increment: ctr;
      margin-bottom: 2rem;
      font-family: "Gothic A1", sans-serif;
      font-weight: 700;
      font-size: 3.6rem;
      line-height: 1;
      color: #8dc63f;
    }

    @media screen and (max-width: 800px) {
      padding-right: 0;
      
      &::before {
        font-size: 3.2rem;
        margin-bottom: 1.5rem;
      }
    }

    @media screen and (max-width: 600px) {
      &::before {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }
    }

    @media screen and (max-width: 400px) {
      &::before {
        font-size: 2.5rem;
      }
    }
  }

  .item-title {
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.333;
    margin: 0 0 1.6rem 0;
    color: #000000;

    @media screen and (max-width: 800px) {
      font-size: 1.9rem;
      margin-bottom: 1.2rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }
  }
`,Bx=M.ul`
  list-style: none;
  margin-left: 0;

  li {
    padding-left: 0;
  }

  a {
    color: #000000;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #8dc63f;
    }
  }
`,Lx=M.a`
  display: inline-block;
  font-family: "Gothic A1", sans-serif;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  margin: 5.6rem 0 .8rem;
  color: #8dc63f;
  border-bottom: 1px solid #efefef;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #8dc63f;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 800px) {
    font-size: 5.8vw;
  }
`,Yx=M.div`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.8;

  a {
    color: #000000;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #8dc63f;
    }

    &::after {
      content: "/";
      font-weight: 400;
      margin: 0 .6rem 0 1rem;
      color: #646464;
    }

    &:last-child::after {
      display: none;
    }
  }
`;M.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3.6rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;const Gx=M.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`,qx=M.div`
  flex: 0 0 70%;
  max-width: 70%;

  @media screen and (max-width: 800px) {
    flex: 1;
    max-width: 100%;
  }
`,Xx=M.div`
  flex: 0 0 30%;
  max-width: 30%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    flex: 1;
    max-width: 100%;
    justify-content: center;
  }
`,Qx=M.img`
  width: 100%;
  max-width: 280px;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  margin-left: auto;

  @media screen and (max-width: 1200px) {
    max-width: 250px;
    height: 320px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 220px;
    height: 280px;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    height: 300px;
    margin-left: 0;
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`,Vx=M.div`
  z-index: 2;
  position: relative;

  span {
    font-size: 1.5rem;
    display: inline-block;

    &::after {
      content: "|";
      display: inline-block;
      padding: 0 .8rem 0 1rem;
      color: rgba(0, 0, 0, 0.3);
    }

    &:last-child::after {
      display: none;
    }

    @media screen and (max-width: 800px) {
      display: block;

      &::after {
        display: none;
      }
    }
  }
`,gs=()=>{const[t,e]=x.useState("tab-about");return p.jsxs(jx,{id:"info",children:[p.jsx(Dx,{}),p.jsx(Oa,{children:p.jsxs(ea,{children:[p.jsx(Cx,{children:p.jsxs(Nx,{children:[p.jsx("li",{className:t==="tab-about"?"active":"",children:p.jsx("a",{href:"#0",onClick:a=>{a.preventDefault(),e("tab-about")},children:p.jsx("span",{children:"About"})})}),p.jsx("li",{className:t==="tab-services"?"active":"",children:p.jsx("a",{href:"#0",onClick:a=>{a.preventDefault(),e("tab-services")},children:p.jsx("span",{children:"Services"})})}),p.jsx("li",{className:t==="tab-contact"?"active":"",children:p.jsx("a",{href:"#0",onClick:a=>{a.preventDefault(),e("tab-contact")},children:p.jsx("span",{children:"Contact"})})})]})}),p.jsxs(Ux,{children:[p.jsxs(Kr,{isActive:t==="tab-about",children:[p.jsx(Oa,{children:p.jsx(ea,{children:p.jsx("h1",{children:"Hello. We are Paramvani."})})}),p.jsxs(Gx,{children:[p.jsx(qx,{children:p.jsx($r,{children:"At Paramvani, we offer a divine experience where those struggling with sadness, depression, or deep devotees of Lord Vishnu can directly connect and converse with the Supreme. This is not just a feature, but a spiritual support that brings peace, guidance, and hope in life’s toughest moments. When the heart feels heavy and no path seems clear, Paramvani gives you the strength to share your deepest feelings with Lord Vishnu and receive his blessings to restore balance and positivity in life. Our purpose is to assure every devotee that God is always with you, listening to you, and inspiring you to move forward with courage and faith."})}),p.jsx(Xx,{children:p.jsx(Qx,{src:"/shiva.png",alt:"Shiva"})})]})]}),p.jsxs(Kr,{isActive:t==="tab-services",children:[p.jsx(Oa,{children:p.jsx(ea,{children:p.jsx("h1",{children:"What we do."})})}),p.jsx(Oa,{children:p.jsx(ea,{children:p.jsx($r,{children:"At Paramvani, we are dedicated to bringing devotees and seekers closer to Lord Vishnu through a unique spiritual experience. Our services are designed to offer comfort, guidance, and divine connection for those in need of peace, healing, and inspiration. Here’s how we serve you."})})}),p.jsxs(Hx,{children:[p.jsx("div",{className:"services-list__item",children:p.jsxs("div",{className:"services-list__item-content",children:[p.jsx("h4",{className:"item-title",children:"Connecting Devotees with the Divine"}),p.jsx("p",{children:"We provide a sacred space where devotees of Lord Vishnu and people seeking peace can feel a direct connection with the Almighty. Through Paramvani, you can express your prayers, thoughts, and emotions as if speaking to God Himself."})]})}),p.jsx("div",{className:"services-list__item",children:p.jsxs("div",{className:"services-list__item-content",children:[p.jsx("h4",{className:"item-title",children:"Healing for the Troubled Mind"}),p.jsx("p",{children:"For those going through sadness, stress, or depression, Paramvani acts as a spiritual companion. It helps you release your inner burdens and experience the soothing comfort of divine presence."})]})}),p.jsx("div",{className:"services-list__item",children:p.jsxs("div",{className:"services-list__item-content",children:[p.jsx("h4",{className:"item-title",children:"Guidance Through Faith"}),p.jsx("p",{children:"We believe Lord Vishnu listens to every voice. Our platform allows you to seek divine inspiration and strength, giving you clarity, positivity, and hope in life’s difficult moments."})]})}),p.jsx("div",{className:"services-list__item",children:p.jsxs("div",{className:"services-list__item-content",children:[p.jsx("h4",{className:"item-title",children:"Spiritual Support Anytime"}),p.jsx("p",{children:"Whenever you feel lonely or lost, Paramvani is here to remind you that God is always with you. We ensure you always have a source of faith, support, and inner strength to walk your life’s path."})]})})]})]}),p.jsxs(Kr,{isActive:t==="tab-contact",children:[p.jsx(Oa,{children:p.jsx(ea,{children:p.jsx("h1",{children:"Get In Touch With Us."})})}),p.jsx(Oa,{children:p.jsxs(ea,{children:[p.jsx($r,{children:"Voluptates laborum eum quas. Pariatur impedit sit veniam est et quasi voluptas voluptatem. Cumque hic enim perferendis amet odit in molestias debitis. Facere nulla qui pariatur quasi mollitia et. Et dolorem dolorum quo in sit architecto."}),p.jsxs(Oa,{children:[p.jsxs(ea,{style:{flex:"0 0 50%",maxWidth:"50%"},children:[p.jsx("h4",{children:"Where to Find Us"}),p.jsxs("p",{children:["1600 Amphitheatre Parkway",p.jsx("br",{}),"Mountain View, CA",p.jsx("br",{}),"94043 US"]})]}),p.jsxs(ea,{style:{flex:"0 0 50%",maxWidth:"50%"},children:[p.jsx("h4",{children:"Follow Us"}),p.jsxs(Bx,{children:[p.jsx("li",{children:p.jsx("a",{href:"#0",children:"Facebook"})}),p.jsx("li",{children:p.jsx("a",{href:"#0",children:"Twitter"})}),p.jsx("li",{children:p.jsx("a",{href:"#0",children:"Instagram"})})]})]})]}),p.jsxs("p",{children:[p.jsx(Lx,{href:"mailto:hello@paramvani.com",children:"hello@paramvani.com"}),p.jsxs(Yx,{children:[p.jsx("a",{href:"tel:197-543-2345",children:"+197 543 2345"}),p.jsx("a",{href:"tel:123-456-9000",children:"+123 456 9000"})]})]})]})})]})]}),p.jsx("footer",{children:p.jsxs(Vx,{children:[p.jsx("span",{children:"© Copyright Paramvani 2024"}),p.jsxs("span",{children:["Design by ",p.jsx("a",{href:"",children:"Bravon"})," Distributed By ",p.jsx("a",{href:"",children:"ParamVani"})]})]})})]})})]})},Zx=M.section`
  width: 100%;
  height: 100vh;
  min-height: 82rem;
  background-color: #000000;
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(/images/bg-static.jpg);

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: .4;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, black 100%);
    opacity: .6;
  }
`,kx=M.div`
  z-index: 1;
  display: block;
  width: 89%;
  height: 100%;
  max-width: 1200px;
  opacity: .65;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;

  > div,
  &::before,
  &::after {
    background-color: rgba(255, 255, 255, 0.1);
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    content: "";
    left: 25%;
  }

  &::after {
    content: "";
    right: 25%;
  }

  > div {
    left: 50%;
  }

  @media screen and (max-width: 1600px) {
    border-right: none !important;
    border-left: none !important;

    &::before {
      left: 22.5%;
    }

    &::after {
      right: 22.5%;
    }
  }

  @media screen and (max-width: 400px) {
    > div,
    &::before,
    &::after {
      display: none;
    }
  }
`,Kx=M.div`
  z-index: 2;
  height: 100%;
  padding-top: 20vh;
  padding-bottom: 24rem;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,$x=M.div`
  width: 89%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 1700px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1600px) {
    max-width: 1080px;
  }

  @media screen and (max-width: 1400px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 600px;
  }

  @media screen and (max-width: 800px) {
    max-width: 70vw;
    padding-top: 16rem;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;
    padding-bottom: 12rem;
  }

  @media screen and (max-width: 500px) {
    max-width: 90vw;
  }
`,Jx=M.div`
  flex: 1 1 0%;
  padding: 0 20px;
`,Wx=M.div`
  h3 {
    display: inline-block;
    font-family: "Gothic A1", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
    letter-spacing: .3em;
    color: #8dc63f;
    padding-left: .6rem;
    margin-top: 0;
    margin-bottom: .8rem;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 7.2rem;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.15);
      position: absolute;
      top: 1rem;
      right: calc(100% + 2.8rem);
    }

    @media screen and (max-width: 1100px) {
      &::before {
        width: 4rem;
      }
    }

    @media screen and (max-width: 800px) {
      &::before {
        display: none;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h1 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 8rem;
    line-height: 1.2;
    color: #ffffff;
    letter-spacing: normal;
    margin-top: 0;
    margin-bottom: .8rem;

    @media screen and (max-width: 1800px) {
      font-size: 7.3rem;
    }

    @media screen and (max-width: 1600px) {
      font-size: 7rem;
    }

    @media screen and (max-width: 1400px) {
      font-size: 6.6rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 6.3rem;
    }

    @media screen and (max-width: 1024px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 4.8rem;

      br {
        display: none;
      }
    }

    @media screen and (max-width: 700px) {
      font-size: 4.2rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 3.8rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 3.4rem;
    }
  }
`,Fx=M.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  position: static;
  margin-top: 3rem;
  left: 0;
  bottom: auto;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`,Px=M.button`
  z-index: 2;
  font-size: 1rem;
  margin: 0;
  height: 5.6rem !important;
  line-height: 5.4rem !important;
  border: 1px solid #ffffff !important;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background: transparent;
  padding: 0 2rem;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .6rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    fill: #ffffff;
    height: 1rem;
    width: 1rem;
    margin-left: .4rem;
  }

  &::before {
    z-index: -1;
    content: "";
    height: 100%;
    width: 0;
    background-color: #ffffff;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    color: #000000;

    svg {
      fill: #000000;
    }

    &::before {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 3.6rem;
  }
`,Ix=()=>{const[t,e]=x.useState(!0),[a,n]=x.useState(!1);return Qe.useEffect(()=>{const l=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(l)},[]),p.jsxs(p.Fragment,{children:[p.jsx(ds,{isLoading:t}),p.jsxs(Zx,{id:"intro",children:[p.jsx(fs,{}),p.jsx(kx,{children:p.jsx("div",{})}),p.jsx(Kx,{children:p.jsx($x,{children:p.jsxs(Jx,{children:[p.jsxs(Wx,{children:[p.jsx("h3",{children:"Coming Soon"}),p.jsxs("h1",{children:["Get ready everyone. ",p.jsx("br",{}),"We are currently ",p.jsx("br",{}),"working on a super ",p.jsx("br",{}),"awesome website."]})]}),p.jsx(Fx,{children:p.jsxs(Px,{onClick:()=>n(!0),children:["Notify Me",p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:p.jsx("path",{d:"M24 12l-9-9v7h-15v4h15v7z"})})]})})]})})}),p.jsx(hs,{isOpen:a,onClose:()=>n(!1)}),p.jsx(ms,{}),p.jsx(ps,{target:"#info",children:"Scroll For More"})]}),p.jsx(gs,{})]})},tb=M.section`
  width: 100%;
  height: 100vh;
  min-height: 82rem;
  background-color: #000000;
  overflow: hidden;
  position: relative;
`,eb=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,ab=M.div`
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 100vh;
  min-height: 82rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${t=>t.isActive?1:0};
  transition: opacity 3s ease-in-out;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: ${t=>t.opacity};
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, black 100%);
    opacity: .8;
  }
`,nb=M.div`
  z-index: 1;
  display: block;
  width: 89%;
  height: 100%;
  max-width: 1200px;
  opacity: .65;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;

  > div,
  &::before,
  &::after {
    background-color: rgba(255, 255, 255, 0.1);
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    content: "";
    left: 25%;
  }

  &::after {
    content: "";
    right: 25%;
  }

  > div {
    left: 50%;
  }

  @media screen and (max-width: 1600px) {
    border-right: none !important;
    border-left: none !important;

    &::before {
      left: 22.5%;
    }

    &::after {
      right: 22.5%;
    }
  }

  @media screen and (max-width: 400px) {
    > div,
    &::before,
    &::after {
      display: none;
    }
  }
`,lb=M.div`
  z-index: 2;
  height: 100%;
  padding-top: 20vh;
  padding-bottom: 24rem;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ib=M.div`
  width: 89%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 1700px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1600px) {
    max-width: 1080px;
  }

  @media screen and (max-width: 1400px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 600px;
  }

  @media screen and (max-width: 800px) {
    max-width: 70vw;
    padding-top: 16rem;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;
    padding-bottom: 12rem;
  }

  @media screen and (max-width: 500px) {
    max-width: 90vw;
  }
`,ub=M.div`
  flex: 1 1 0%;
  padding: 0 20px;
`,rb=M.div`
  h3 {
    display: inline-block;
    font-family: "Gothic A1", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
    letter-spacing: .3em;
    color: #8dc63f;
    padding-left: .6rem;
    margin-top: 0;
    margin-bottom: .8rem;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 7.2rem;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.15);
      position: absolute;
      top: 1rem;
      right: calc(100% + 2.8rem);
    }

    @media screen and (max-width: 1100px) {
      &::before {
        width: 4rem;
      }
    }

    @media screen and (max-width: 800px) {
      &::before {
        display: none;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h1 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 8rem;
    line-height: 1.2;
    color: #ffffff;
    letter-spacing: normal;
    margin-top: 0;
    margin-bottom: .8rem;

    @media screen and (max-width: 1800px) {
      font-size: 7.3rem;
    }

    @media screen and (max-width: 1600px) {
      font-size: 7rem;
    }

    @media screen and (max-width: 1400px) {
      font-size: 6.6rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 6.3rem;
    }

    @media screen and (max-width: 1024px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 4.8rem;

      br {
        display: none;
      }
    }

    @media screen and (max-width: 700px) {
      font-size: 4.2rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 3.8rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 3.4rem;
    }
  }
`,cb=M.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  position: static;
  margin-top: 3rem;
  left: 0;
  bottom: auto;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`,ob=M.button`
  z-index: 2;
  font-size: 1rem;
  margin: 0;
  height: 5.6rem !important;
  line-height: 5.4rem !important;
  border: 1px solid #ffffff !important;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background: transparent;
  padding: 0 2rem;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .6rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    fill: #ffffff;
    height: 1rem;
    width: 1rem;
    margin-left: .4rem;
  }

  &::before {
    z-index: -1;
    content: "";
    height: 100%;
    width: 0;
    background-color: #ffffff;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    color: #000000;

    svg {
      fill: #000000;
    }

    &::before {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 3.6rem;
  }
`,sd=[{image:"/images/slides/slide-01.jpg",opacity:.4},{image:"/images/slides/slide-02.jpg",opacity:.5},{image:"/images/slides/slide-03.jpg",opacity:.5}],sb=()=>{const[t,e]=x.useState(!0),[a,n]=x.useState(!1),[l,i]=x.useState(0);return Qe.useEffect(()=>{const u=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(u)},[]),x.useEffect(()=>{const u=setInterval(()=>{i(r=>(r+1)%sd.length)},3e3);return()=>clearInterval(u)},[]),p.jsxs(p.Fragment,{children:[p.jsx(ds,{isLoading:t}),p.jsxs(tb,{id:"intro",children:[p.jsx(fs,{}),p.jsx(eb,{children:sd.map((u,r)=>p.jsx(ab,{isActive:r===l,opacity:u.opacity,style:{backgroundImage:`url(${u.image})`}},r))}),p.jsx(nb,{children:p.jsx("div",{})}),p.jsx(lb,{children:p.jsx(ib,{children:p.jsxs(ub,{children:[p.jsxs(rb,{children:[p.jsx("h3",{children:"Coming Soon"}),p.jsxs("h1",{children:["Get ready everyone. ",p.jsx("br",{}),"We are currently ",p.jsx("br",{}),"working on a super ",p.jsx("br",{}),"awesome website."]})]}),p.jsx(cb,{children:p.jsxs(ob,{onClick:()=>n(!0),children:["Notify Me",p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:p.jsx("path",{d:"M24 12l-9-9v7h-15v4h15v7z"})})]})})]})})}),p.jsx(hs,{isOpen:a,onClose:()=>n(!1)}),p.jsx(ms,{}),p.jsx(ps,{target:"#info",children:"Scroll For More"})]}),p.jsx(gs,{})]})},fb=M.section`
  width: 100%;
  height: 100vh;
  min-height: 82rem;
  background-color: #010e0f;
  overflow: hidden;
  position: relative;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`,db=M.div`
  flex: 1;
  max-width: 45%;
  height: 400px;
  background-image: url('/hero-image.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-left: 3rem;
 
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1, 14, 15, 0.3);
    border-radius: 4px;
    z-index: 1;
  }

  @media screen and (max-width: 1200px) {
    height: 450px;
    margin-left: 2rem;
  }

  @media screen and (max-width: 1024px) {
    height: 400px;
    margin-left: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    flex: none;
    width: 100%;
    max-width: 100%;
    height: 250px;
    margin-left: 0;
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    height: 390px;
  }

  @media screen and (max-width: 400px) {
    height: 350px;
  }
`,hb=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 0;
  margin: 0;
  opacity: .35;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`,mb=M.div`
  z-index: 2;
  display: block;
  width: 89%;
  height: 100%;
  max-width: 1200px;
  opacity: .65;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;

  > div,
  &::before,
  &::after {
    background-color: rgba(255, 255, 255, 0.1);
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    content: "";
    left: 25%;
  }

  &::after {
    content: "";
    right: 25%;
  }

  > div {
    left: 50%;
  }

  @media screen and (max-width: 1600px) {
    border-right: none !important;
    border-left: none !important;

    &::before {
      left: 22.5%;
    }

    &::after {
      right: 22.5%;
    }
  }

  @media screen and (max-width: 400px) {
    > div,
    &::before,
    &::after {
      display: none;
    }
  }
`,pb=M.div`
  z-index: 3;
  height: 100%;
  padding-top: 15vh;
  padding-bottom: 20rem;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    padding-top: 12rem;
    padding-bottom: 16rem;
  }

  @media screen and (max-width: 600px) {
    padding-top: 10rem;
    padding-bottom: 12rem;
  }
`,gb=M.div`
  width: 89%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  z-index: 2;
  align-items: center;

  @media screen and (max-width: 1700px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1600px) {
    max-width: 1080px;
  }

  @media screen and (max-width: 1400px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 600px;
  }

  @media screen and (max-width: 800px) {
    max-width: 90vw;
    flex-direction: column;
    padding-top: 0;
  }

  @media screen and (max-width: 600px) {
    max-width: 95vw;
    padding-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    max-width: 95vw;
  }
`,yb=M.div`
  flex: 1;
  max-width: 55%;
  padding: 0 20px;

  @media screen and (max-width: 800px) {
    max-width: 100%;
    padding: 0 10px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
`,vb=M.div`
  h3 {
    display: inline-block;
    font-family: "Gothic A1", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-transform: uppercase;
    letter-spacing: .3em;
    color: #8dc63f;
    padding-left: .6rem;
    margin-top: 0;
    margin-bottom: .8rem;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 7.2rem;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.15);
      position: absolute;
      top: 1rem;
      right: calc(100% + 2.8rem);
    }

    @media screen and (max-width: 1100px) {
      &::before {
        width: 4rem;
      }
    }

    @media screen and (max-width: 800px) {
      &::before {
        display: none;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 0.9rem;
    }
  }

  h1 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 6.5rem;
    line-height: 1.2;
    color: #ffffff;
    letter-spacing: normal;
    margin-top: 0;
    margin-bottom: .8rem;

    @media screen and (max-width: 1800px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 1600px) {
      font-size: 5.5rem;
    }

    @media screen and (max-width: 1400px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 4.5rem;
    }

    @media screen and (max-width: 1024px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 3.5rem;

      br {
        display: none;
      }
    }

    @media screen and (max-width: 700px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 2rem;
    }
  }
`,xb=M.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  position: static;
  margin-top: 2.5rem;
  left: 0;
  bottom: auto;
  gap: 2rem;

  @media screen and (max-width: 800px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.5rem;
    gap: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0;
    margin-top: 1rem;
    gap: 1rem;
  }
`,bb=M.button`
  z-index: 2;
  font-size: 1rem;
  margin: 0;
  height: 5.6rem !important;
  line-height: 5.4rem !important;
  border: 1px solid #ffffff !important;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background: transparent;
  padding: 0 2rem;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .6rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    fill: #ffffff;
    height: 1rem;
    width: 1rem;
    margin-left: .4rem;
  }

  &::before {
    z-index: -1;
    content: "";
    height: 100%;
    width: 0;
    background-color: #ffffff;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    color: #000000;

    svg {
      fill: #000000;
    }

    &::before {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 2.5rem;
    height: 5rem !important;
    line-height: 4.8rem !important;
    font-size: 0.9rem;
    padding: 0 1.5rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    height: 4.5rem !important;
    line-height: 4.3rem !important;
    font-size: 0.8rem;
    padding: 0 1.2rem;
    letter-spacing: .4rem;
  }

  @media screen and (max-width: 400px) {
    height: 4rem !important;
    line-height: 3.8rem !important;
    font-size: 0.75rem;
    padding: 0 1rem;
    letter-spacing: .3rem;
  }
`,Sb=()=>{const[t,e]=x.useState(!0),[a,n]=x.useState(!1),l=x.useRef(null),i=vm();return Qe.useEffect(()=>{const u=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(u)},[]),x.useEffect(()=>{if(!t&&l.current){const u=document.createElement("canvas"),r=u.getContext("2d");if(!r)return;u.style.position="absolute",u.style.top="0",u.style.left="0",u.style.width="100%",u.style.height="100%",u.width=window.innerWidth,u.height=window.innerHeight,l.current.appendChild(u);class c{constructor(){this.x=Math.random()*u.width,this.y=Math.random()*u.height,this.vx=(Math.random()-.5)*.3,this.vy=(Math.random()-.5)*.3,this.size=Math.random()*1.5+.5,this.opacity=Math.random()*.6+.2,this.life=0,this.maxLife=Math.random()*400+300}update(){this.x+=this.vx,this.y+=this.vy,this.life++,this.vx+=(Math.random()-.5)*.005,this.vy+=(Math.random()-.5)*.005,this.vx=Math.max(-.8,Math.min(.8,this.vx)),this.vy=Math.max(-.8,Math.min(.8,this.vy)),this.opacity=Math.max(.1,Math.min(.7,this.opacity+(Math.random()-.5)*.003)),(this.life>this.maxLife||this.x<-50||this.x>u.width+50||this.y<-50||this.y>u.height+50)&&(this.x=Math.random()*u.width,this.y=Math.random()*u.height,this.vx=(Math.random()-.5)*.3,this.vy=(Math.random()-.5)*.3,this.opacity=Math.random()*.6+.2,this.life=0,this.maxLife=Math.random()*400+300)}draw(){if(!r)return;r.save(),r.globalAlpha=this.opacity;const g=r.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size*2);g.addColorStop(0,"rgba(255, 255, 255, 0.6)"),g.addColorStop(.5,"rgba(255, 255, 255, 0.2)"),g.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=g,r.beginPath(),r.arc(this.x,this.y,this.size*2,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff",r.beginPath(),r.arc(this.x,this.y,this.size,0,Math.PI*2),r.fill(),r.restore()}}const o=[];for(let f=0;f<120;f++)o.push(new c);const d=()=>{r&&(r.clearRect(0,0,u.width,u.height),o.forEach(f=>{f.update(),f.draw()}),requestAnimationFrame(d))};d();const y=()=>{u.width=window.innerWidth,u.height=window.innerHeight};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),u.parentNode&&u.parentNode.removeChild(u)}}},[t]),p.jsxs(p.Fragment,{children:[p.jsx(ds,{isLoading:t}),p.jsxs(fb,{id:"intro",children:[p.jsx(fs,{}),p.jsx(hb,{ref:l,id:"particles-js"}),p.jsx(mb,{children:p.jsx("div",{})}),p.jsx(pb,{children:p.jsxs(gb,{children:[p.jsxs(yb,{children:[p.jsxs(vb,{children:[p.jsx("h3",{children:"Dev Vani"}),p.jsxs("h1",{children:["मन की बात प्रभु संग।",p.jsx("br",{}),"यहाँ प्रार्थना बनाती है शांति—",p.jsx("br",{}),"तनाव से मुक्ति की राह।"]})]}),p.jsx(xb,{children:p.jsxs(bb,{onClick:()=>i("/talk"),children:["Connect Now",p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:p.jsx("path",{d:"M24 12l-9-9v7h-15v4h15v7z"})})]})})]}),p.jsx(db,{})]})}),p.jsx(hs,{isOpen:a,onClose:()=>n(!1)}),p.jsx(ms,{}),p.jsx(ps,{target:"#info",children:"Scroll For More"})]}),p.jsx(gs,{})]})};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Eb=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,n)=>n?n.toUpperCase():a.toLowerCase()),fd=t=>{const e=Eb(t);return e.charAt(0).toUpperCase()+e.slice(1)},Im=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim(),Ab=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=x.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:l="",children:i,iconNode:u,...r},c)=>x.createElement("svg",{ref:c,...Tb,width:e,height:e,stroke:t,strokeWidth:n?Number(a)*24/Number(e):a,className:Im("lucide",l),...!i&&!Ab(r)&&{"aria-hidden":"true"},...r},[...u.map(([o,d])=>x.createElement(o,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=(t,e)=>{const a=x.forwardRef(({className:n,...l},i)=>x.createElement(zb,{ref:i,iconNode:e,className:Im(`lucide-${wb(fd(t))}`,`lucide-${t}`,n),...l}));return a.displayName=fd(t),a};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],Mb=ys("mic-off",Rb);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],_b=ys("mic",Ob);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Db=ys("send",jb),Cb=Ra`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
    filter: blur(5px);
  }
  30% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
    filter: blur(2px);
  }
  70% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
    filter: blur(3px);
  }
`;Ra`
  0% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-30px) translateX(15px) rotate(90deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-15px) translateX(-10px) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-40px) translateX(20px) rotate(270deg);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0px) translateX(0px) rotate(360deg);
    opacity: 0.3;
  }
`;const Nb=Ra`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(141, 198, 63, 0.8), 0 0 60px rgba(141, 198, 63, 0.4);
  }
`;Ra`
  0%, 100% {
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(141, 198, 63, 0.6), 0 0 60px rgba(141, 198, 63, 0.3);
  }
`;Ra`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;const Ub=M.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile */
  min-height: 100vh;
  min-height: 100dvh;
  max-width: 100%;
  max-height: 100%;
  background-color: #000000;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    min-height: 100vh;
    min-height: 100dvh;
  }
`,Hb=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`,Bb=M.div.withConfig({shouldForwardProp:t=>t!=="show"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.6) 20%,
    rgba(141, 198, 63, 0.4) 40%,
    rgba(141, 198, 63, 0.2) 60%,
    transparent 80%
  );
  border-radius: 50%;
  z-index: 4;
  animation: ${t=>t.show?Cb:"none"} 3s ease-out forwards;
  pointer-events: none;
  will-change: transform, opacity, filter;
`,Lb=M.div.withConfig({shouldForwardProp:t=>t!=="show"})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: ${t=>t.show?1:0};
  transition: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 8%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.1) 92%, rgba(0, 0, 0, 0.3) 100%),
      linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0.2) 30%, transparent 40%),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 10%, transparent 20%),
      radial-gradient(ellipse at bottom left, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 80%),
      radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 80%),
      radial-gradient(ellipse at center, transparent 20%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.05) 60%, transparent 80%);
    pointer-events: none;
    z-index: 1;

    @media screen and (max-width: 800px) {
      background: 
        linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0.2) 30%, transparent 40%),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.6) 30%, transparent 40%),
        radial-gradient(ellipse at center, transparent 20%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.05) 60%, transparent 80%);
    }
  }
`,Yb=M.video`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  object-fit: contain;
  border: none;
  outline: none;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`,Gb=M.audio`
  display: none;
`,qb=M.div`
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    bottom: 3rem;
  }

  @media screen and (max-width: 600px) {
    bottom: 2rem;
  }
`,Xb=M.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(141, 198, 63, 0.3);
  border-radius: 9px;
  padding: 0.4rem 1rem;
  min-width: 400px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: rgba(141, 198, 63, 0.5);
    box-shadow: 0 6px 25px rgba(141, 198, 63, 0.15);
  }

  &:focus-within {
    border-color: rgba(141, 198, 63, 0.8);
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.2);
  }

  @media screen and (max-width: 600px) {
    min-width: 300px;
    padding: 0.3rem 0.8rem;
  }

  @media screen and (max-width: 400px) {
    min-width: 280px;
    padding: 0.3rem 0.7rem;
  }
`,Qb=M.input`
  background: transparent;
  border: none;
  outline: none;
  color: #333;
  font-size: 1.2rem !important;
  font-family: "Gothic A1", sans-serif;
  flex: 1;
  padding: 0.5rem 24px 0.5rem !important;
  caret-color: #8dc63f;
  height: 3.8rem !important;

  &::placeholder {
    color: rgba(51, 51, 51, 0.6);
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
    height: 4rem !important;
  }

  @media screen and (max-width: 400px) {
    height: 3.8rem !important;
  }
`,Vb=M.button`
  background: ${t=>t.isListening?"linear-gradient(135deg, #8dc63f, #a0d448)":"rgba(141, 198, 63, 0.2)"};
  border: 2px solid ${t=>t.isListening?"rgba(141, 198, 63, 0.8)":"rgba(141, 198, 63, 0.3)"};
  opacity: ${t=>t.disabled?.6:1};
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${t=>t.isListening?"#000":"#8dc63f"};
  animation: ${t=>t.isListening?Nb:"none"} 2s infinite;
  flex-shrink: 0;
  margin-left: 5px;
  position: relative;
  z-index: 10;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${t=>t.disabled?t.isListening?"linear-gradient(135deg, #8dc63f, #a0d448)":"rgba(141, 198, 63, 0.2)":t.isListening?"linear-gradient(135deg, #8dc63f, #a0d448)":"rgba(141, 198, 63, 0.3)"};
    border-color: ${t=>t.disabled?t.isListening?"rgba(141, 198, 63, 0.8)":"rgba(141, 198, 63, 0.3)":"rgba(141, 198, 63, 0.8)"};
    transform: ${t=>t.disabled?"none":"scale(1.05)"};
  }

  &:active {
    transform: ${t=>t.disabled?"none":"scale(0.95)"};
  }

  svg {
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 600px) {
    width: 28px;
    height: 28px;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`,Zb=M.button`
  background: linear-gradient(135deg, #4CAF50, #45a049);
  border: 2px solid rgba(76, 175, 80, 0.8);
  opacity: ${t=>t.disabled?.6:1};
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
  flex-shrink: 0;
  margin-left: 5px;
  position: relative;
  z-index: 10;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${t=>t.disabled?"linear-gradient(135deg, #4CAF50, #45a049)":"linear-gradient(135deg, #5CBF60, #4CAF50)"};
    border-color: ${t=>t.disabled?"rgba(76, 175, 80, 0.8)":"rgba(76, 175, 80, 1)"};
    transform: ${t=>t.disabled?"none":"scale(1.05)"};
  }

  &:active {
    transform: ${t=>t.disabled?"none":"scale(0.95)"};
  }

  svg {
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 600px) {
    width: 28px;
    height: 28px;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;M.div`
  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-family: "Gothic A1", sans-serif;
  font-size: 1.4rem;
  text-align: center;
  z-index: 5;

  @media screen and (max-width: 600px) {
    bottom: 10rem;
    font-size: 1.2rem;
  }
`;const kb=M.div`
  position: absolute;
  z-index: 4;
  opacity: ${t=>t.show?1:0};
  transition: opacity 0.3s ease;

  @media screen and (max-width: 800px) {
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 95%;
    text-align: center;
  }

  @media screen and (min-width: 801px) {
    top: 50%;
    transform: translateY(-50%);
    max-width: 400px;
    text-align: left;
    
    &.left {
      left: 2rem;
    }
    
    &.right {
      right: 2rem;
    }
  }
`,Kb=M.div`
  color: white;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  word-wrap: break-word;
  transition: all 0.3s ease;

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
    line-height: 1.5;
  }

  @media screen and (min-width: 801px) {
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 800;
  }
`,$b=M.span`
  background: rgba(141, 198, 63, 0.3);
  padding: 2px 4px;
  border-radius: 4px;
  animation: wordHighlight 0.3s ease;
`;Ra`
  0% {
    background: rgba(141, 198, 63, 0.6);
    transform: scale(1.05);
  }
  100% {
    background: rgba(141, 198, 63, 0.3);
    transform: scale(1);
  }
`;const Jb=M.div`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;Ra`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const Wb=()=>{const[t,e]=x.useState(!1),[a,n]=x.useState(!1),[l,i]=x.useState(!1),[u,r]=x.useState(!0),[c,o]=x.useState(!1),[d,y]=x.useState(!1),[f,g]=x.useState(""),[b,S]=x.useState(!1),[T,h]=x.useState("/audio.mp3"),[s,m]=x.useState(""),[v,A]=x.useState(!1),[z,E]=x.useState([]),[O,U]=x.useState(0),C=x.useRef(null),I=x.useRef(null),L=x.useRef(null),Fe=x.useRef(null),In=x.useRef(null),At=x.useRef(null),_=x.useRef(null),H=x.useRef([]);x.useEffect(()=>{document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.height="100%",document.body.style.margin="0",document.body.style.padding="0",document.documentElement.style.margin="0",document.documentElement.style.padding="0";let R=document.querySelector("meta[name=viewport]");R||(R=document.createElement("meta"),R.setAttribute("name","viewport"),document.head.appendChild(R)),R.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"),e(!0),r(!1);const j=setTimeout(()=>{n(!0)},3200);return()=>{clearTimeout(j),At.current&&clearInterval(At.current),document.body.style.overflow="",document.documentElement.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.height="",document.body.style.margin="",document.body.style.padding="",document.documentElement.style.margin="",document.documentElement.style.padding=""}},[]),x.useEffect(()=>{if(a&&C.current){const R=document.createElement("canvas"),j=R.getContext("2d");if(!j)return;R.style.position="absolute",R.style.top="0",R.style.left="0",R.style.width="100%",R.style.height="100%",R.width=window.innerWidth,R.height=window.innerHeight,C.current.appendChild(R);class J{constructor(){this.x=Math.random()*R.width,this.y=Math.random()*R.height,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.opacity=Math.random()*.8+.2,this.life=0,this.maxLife=Math.random()*600+400;const le=["#ffffff","#8dc63f","#a0d448","#ffffff","#ffffff"];this.color=le[Math.floor(Math.random()*le.length)]}update(){this.x+=this.vx,this.y+=this.vy,this.life++,this.vx+=(Math.random()-.5)*.008,this.vy+=(Math.random()-.5)*.008,this.vx=Math.max(-1,Math.min(1,this.vx)),this.vy=Math.max(-1,Math.min(1,this.vy)),this.opacity=Math.max(.1,Math.min(.9,this.opacity+(Math.random()-.5)*.005)),(this.life>this.maxLife||this.x<-50||this.x>R.width+50||this.y<-50||this.y>R.height+50)&&(this.x=Math.random()*R.width,this.y=Math.random()*R.height,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.opacity=Math.random()*.8+.2,this.life=0,this.maxLife=Math.random()*600+400)}draw(){if(!j)return;j.save(),j.globalAlpha=this.opacity;const le=j.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size*3);le.addColorStop(0,this.color),le.addColorStop(.5,this.color+"66"),le.addColorStop(1,"transparent"),j.fillStyle=le,j.beginPath(),j.arc(this.x,this.y,this.size*3,0,Math.PI*2),j.fill(),j.fillStyle=this.color,j.beginPath(),j.arc(this.x,this.y,this.size,0,Math.PI*2),j.fill(),j.restore()}}const tt=[],D=window.innerWidth<768?60:100;for(let Tt=0;Tt<D;Tt++)tt.push(new J);const k=()=>{j&&(j.clearRect(0,0,R.width,R.height),tt.forEach(Tt=>{Tt.update(),Tt.draw()}),requestAnimationFrame(k))};k();const bt=()=>{R.width=window.innerWidth,R.height=window.innerHeight};return window.addEventListener("resize",bt),()=>{window.removeEventListener("resize",bt),R.parentNode&&R.parentNode.removeChild(R)}}},[a]),x.useEffect(()=>{const R=L.current,j=I.current;if(R&&j){const J=()=>{console.log("Audio ended, stopping video"),j.pause(),j.currentTime=0,o(!1),y(!1),At.current&&(clearInterval(At.current),At.current=null),A(!1),U(0),m("")};return R.addEventListener("ended",J),()=>{R.removeEventListener("ended",J)}}},[a,T]),x.useEffect(()=>{L.current&&T&&(console.log("Audio URL changed, reloading audio element"),L.current.pause(),L.current.currentTime=0,L.current.src=T,L.current.load())},[T]),x.useEffect(()=>{const R=I.current;if(R&&c){const j=()=>{if(d&&L.current&&!L.current.ended){const J=R.duration,tt=R.currentTime;J-tt<.1&&(R.currentTime=0)}};return R.addEventListener("timeupdate",j),()=>{R.removeEventListener("timeupdate",j)}}},[c,d]);const B=()=>{if(console.log("startVideoAndAudio called"),console.log("Video ref:",I.current),console.log("Audio ref:",L.current),console.log("Current audio URL:",T),I.current&&L.current){console.log("Starting video and audio..."),I.current.currentTime=0,I.current.play().then(()=>{console.log("Video started successfully"),o(!0)}).catch(j=>{console.error("Error starting video:",j)}),L.current.onloadstart=()=>{console.log("Audio loading started")},L.current.oncanplay=()=>{console.log("Audio can play")},L.current.oncanplaythrough=()=>{console.log("Audio can play through")},L.current.onerror=j=>{var J,tt,D,k;console.error("Audio error:",j),console.error("Audio error details:",{error:(J=L.current)==null?void 0:J.error,src:(tt=L.current)==null?void 0:tt.src,networkState:(D=L.current)==null?void 0:D.networkState,readyState:(k=L.current)==null?void 0:k.readyState})},L.current.onloadeddata=()=>{console.log("Audio data loaded")},L.current.crossOrigin="anonymous",L.current.onplay=()=>{y(!0),setTimeout(()=>{V()},200)},L.current.onpause=()=>{y(!1)};const R=()=>{L.current&&L.current.readyState>=2?(L.current.currentTime=0,L.current.play().then(()=>{y(!0),setTimeout(()=>{z.length>0&&!At.current&&V()},200)}).catch(j=>{console.error("Error starting audio:",j)})):setTimeout(R,100)};R()}else console.log("Video or audio ref is null")},V=()=>{H.current,At.current&&clearInterval(At.current),U(0),A(!0),At.current=setInterval(()=>{var j;const R=H.current;if(R.length>0&&L.current){const J=L.current.currentTime*1e3;if(!L.current.paused&&J>0){let D=0;for(let bt=0;bt<R.length&&J>=R[bt].startMs;bt++)if(J<=R[bt].endMs){D=bt;break}else D=bt;D>=R.length&&(D=R.length-1),D!==O&&U(D);const k=((j=R[R.length-1])==null?void 0:j.endMs)||0;J>k&&(A(!1),U(0),m(""))}else O!==0&&U(0)}},100)},nt=()=>{I.current&&L.current&&(I.current.pause(),I.current.currentTime=0,o(!1),L.current.pause(),L.current.currentTime=0,y(!1),At.current&&(clearInterval(At.current),At.current=null),_.current=null,A(!1),m(""),U(0))},Gt=async(R,j)=>{try{S(!0),console.log("Calling audio assistant API...");const J=new FormData;if(!j)if(R.trim())J.append("text",R.trim()),console.log("Sending text to API:",R);else throw new Error("No input provided");const tt=await fetch("https://vishnubhagwan.app.n8n.cloud/webhook/audio-assistant",{method:"POST",body:J});if(!tt.ok)throw new Error(`API call failed: ${tt.status}`);const D=await tt.json();if(console.log("Audio assistant response:",D),D.audioFile){if(console.log("Audio URL received:",D.audioFile),h(D.audioFile),D.wordDurations&&D.wordDurations.length>0&&(E(D.wordDurations),H.current=D.wordDurations,U(0),A(!0),console.log("Word durations set:",D.wordDurations.length,"words"),console.log("First few words:",D.wordDurations.slice(0,5))),D.transcript||D.text||D.caption||D.response){const k=D.transcript||D.text||D.caption||D.response||"";m(k),A(!0),console.log("AI Response Caption set:",k)}try{const k=new Audio;k.crossOrigin="anonymous",k.oncanplaythrough=()=>{console.log("Audio can play through - URL is accessible")},k.onerror=bt=>{console.error("Audio loading error:",bt),console.error("Failed to load audio from:",D.audioFile)},k.src=D.audioFile,k.load()}catch(k){console.error("Error testing audio URL:",k)}return D}else throw new Error("No audio file in response")}catch(J){return console.error("Error calling audio assistant:",J),h("/audio.mp3"),alert("Failed to generate AI audio. Using default audio."),null}finally{S(!1)}},Nt=async()=>{if(f.trim()){console.log("Text input:",f);const R=f.trim();g(""),nt(),await Gt(R),setTimeout(()=>{B()},500)}},Pe=R=>{R.key==="Enter"&&Nt()},Kt=()=>{if(console.log("Mic button clicked, current isListening:",l),l){Fe.current&&Fe.current.stop(),i(!1),console.log("Stopping voice recognition");return}if("webkitSpeechRecognition"in window||"SpeechRecognition"in window){console.log("Starting voice recognition..."),i(!0);const R=window.webkitSpeechRecognition||window.SpeechRecognition,j=new R;Fe.current=j,j.continuous=!0,j.interimResults=!0,j.lang="hi-IN";let J,tt=!1,D="";j.onstart=()=>{console.log("Voice recognition started successfully"),i(!0),tt=!1,D=""},j.onresult=async k=>{let bt="",Tt="";for(let le=k.resultIndex;le<k.results.length;le++){const vs=k.results[le][0].transcript;k.results[le].isFinal?bt+=vs:Tt+=vs}D=bt||Tt,D.trim()&&(tt=!0,console.log("Voice input:",D),J&&clearTimeout(J),J=setTimeout(async()=>{tt&&D.trim()&&(console.log("User stopped speaking, processing audio..."),j.stop(),i(!1),nt(),await Gt(D),setTimeout(()=>{B()},500))},2e3))},j.onspeechend=async()=>{console.log("Speech ended"),tt&&D.trim()&&setTimeout(async()=>{tt&&l&&D.trim()&&(console.log("No more speech detected, processing audio..."),j.stop(),i(!1),nt(),await Gt(D),setTimeout(()=>{B()},500))},1e3)},j.onerror=k=>{console.error("Voice recognition error:",k.error),i(!1),(k.error==="not-allowed"||k.error==="service-not-allowed")&&alert("Microphone permission denied or speech recognition not available")},j.onend=()=>{console.log("Voice recognition ended"),l&&(i(!1),tt&&console.log("Recognition ended after speech, processing audio..."))};try{j.start()}catch(k){console.error("Error starting recognition:",k),i(!1),alert("Speech recognition failed to start")}}else console.log("Speech recognition not supported"),alert("Voice recognition not supported in this browser")};return p.jsxs(Ub,{children:[p.jsx(Hb,{ref:C}),p.jsx(Bb,{show:t}),p.jsx(Lb,{show:a,children:p.jsx(Yb,{ref:I,src:"/ai-video.mp4",loop:!0,muted:!0,playsInline:!0})}),p.jsx(Gb,{ref:L,src:T,crossOrigin:"anonymous",preload:"auto"}),p.jsx(kb,{show:v,className:"left",children:p.jsx(Kb,{children:p.jsx(p.Fragment,{children:z.length>0?p.jsx(p.Fragment,{children:z.slice(O,Math.min(O+5,z.length)).map((R,j)=>{const J=j===0,tt=O+j;return p.jsxs("span",{children:[J?p.jsx($b,{children:R.word}):p.jsx("span",{style:{opacity:.7},children:R.word}),j<4&&tt+1<z.length?" ":""]},tt)})}):s?p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{fontSize:"0.8rem",color:"yellow",marginBottom:"5px"},children:"DEBUG: Regular caption"}),s.split(`
`).map((R,j)=>p.jsx(Jb,{children:R},j))]}):p.jsx("div",{style:{color:"red"},children:"No caption data available"})})})}),p.jsx(qb,{children:p.jsxs(Xb,{children:[p.jsx(Qb,{ref:In,type:"text",placeholder:b?"Connecting to god...":"Type your message or use voice...",value:f,onChange:R=>g(R.target.value),onKeyPress:Pe,disabled:b}),f.trim()?p.jsx(Zb,{onClick:Nt,type:"button",disabled:b,children:b?p.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid white",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}):p.jsx(Db,{})}):p.jsx(Vb,{isListening:l||b,onClick:Kt,type:"button",disabled:b,children:b?p.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid #8dc63f",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}):l?p.jsx(Mb,{}):p.jsx(_b,{})})]})})]})};function Fb(){return p.jsx(ov,{children:p.jsx("div",{className:"App",children:p.jsxs(Gy,{children:[p.jsx(ml,{path:"/",element:p.jsx(Sb,{})}),p.jsx(ml,{path:"/static",element:p.jsx(Ix,{})}),p.jsx(ml,{path:"/slides",element:p.jsx(sb,{})}),p.jsx(ml,{path:"/talk",element:p.jsx(Wb,{})})]})})})}const Pb=W1.createRoot(document.getElementById("root"));Pb.render(p.jsx(Qe.StrictMode,{children:p.jsx(Fb,{})}));
