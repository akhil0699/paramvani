(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}})();function zd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Md={exports:{}},Xr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=Symbol.for("react.transitional.element"),gp=Symbol.for("react.fragment");function Rd(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var l in e)l!=="key"&&(a[l]=e[l])}else a=e;return e=a.ref,{$$typeof:pp,type:t,key:n,ref:e!==void 0?e:null,props:a}}Xr.Fragment=gp;Xr.jsx=Rd;Xr.jsxs=Rd;Md.exports=Xr;var s=Md.exports,jd={exports:{}},G={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=Symbol.for("react.transitional.element"),yp=Symbol.for("react.portal"),vp=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),Sp=Symbol.for("react.consumer"),wp=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),Tp=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),_s=Symbol.iterator;function zp(t){return t===null||typeof t!="object"?null:(t=_s&&t[_s]||t["@@iterator"],typeof t=="function"?t:null)}var _d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,Cd={};function tl(t,e,a){this.props=t,this.context=e,this.refs=Cd,this.updater=a||_d}tl.prototype.isReactComponent={};tl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};tl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nd(){}Nd.prototype=tl.prototype;function hc(t,e,a){this.props=t,this.context=e,this.refs=Cd,this.updater=a||_d}var mc=hc.prototype=new Nd;mc.constructor=hc;Dd(mc,tl.prototype);mc.isPureReactComponent=!0;var Ds=Array.isArray,rt={H:null,A:null,T:null,S:null,V:null},Ud=Object.prototype.hasOwnProperty;function pc(t,e,a,n,l,i){return a=i.ref,{$$typeof:dc,type:t,key:e,ref:a!==void 0?a:null,props:i}}function Mp(t,e){return pc(t.type,e,void 0,void 0,void 0,t.props)}function gc(t){return typeof t=="object"&&t!==null&&t.$$typeof===dc}function Rp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Cs=/\/+/g;function gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rp(""+t.key):e.toString(36)}function Ns(){}function jp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Ns,Ns):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function dn(t,e,a,n,l){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(i){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case dc:case yp:r=!0;break;case Od:return r=t._init,dn(r(t._payload),e,a,n,l)}}if(r)return l=l(t),r=n===""?"."+gu(t,0):n,Ds(l)?(a="",r!=null&&(a=r.replace(Cs,"$&/")+"/"),dn(l,e,a,"",function(c){return c})):l!=null&&(gc(l)&&(l=Mp(l,a+(l.key==null||t&&t.key===l.key?"":(""+l.key).replace(Cs,"$&/")+"/")+r)),e.push(l)),1;r=0;var u=n===""?".":n+":";if(Ds(t))for(var o=0;o<t.length;o++)n=t[o],i=u+gu(n,o),r+=dn(n,e,a,i,l);else if(o=zp(t),typeof o=="function")for(t=o.call(t),o=0;!(n=t.next()).done;)n=n.value,i=u+gu(n,o++),r+=dn(n,e,a,i,l);else if(i==="object"){if(typeof t.then=="function")return dn(jp(t),e,a,n,l);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Ti(t,e,a){if(t==null)return t;var n=[],l=0;return dn(t,n,"","",function(i){return e.call(a,i,l++)}),n}function Op(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Us=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _p(){}G.Children={map:Ti,forEach:function(t,e,a){Ti(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Ti(t,function(){e++}),e},toArray:function(t){return Ti(t,function(e){return e})||[]},only:function(t){if(!gc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=tl;G.Fragment=vp;G.Profiler=xp;G.PureComponent=hc;G.StrictMode=bp;G.Suspense=Ap;G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rt;G.__COMPILER_RUNTIME={__proto__:null,c:function(t){return rt.H.useMemoCache(t)}};G.cache=function(t){return function(){return t.apply(null,arguments)}};G.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=Dd({},t.props),l=t.key,i=void 0;if(e!=null)for(r in e.ref!==void 0&&(i=void 0),e.key!==void 0&&(l=""+e.key),e)!Ud.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(n[r]=e[r]);var r=arguments.length-2;if(r===1)n.children=a;else if(1<r){for(var u=Array(r),o=0;o<r;o++)u[o]=arguments[o+2];n.children=u}return pc(t.type,l,void 0,void 0,i,n)};G.createContext=function(t){return t={$$typeof:wp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Sp,_context:t},t};G.createElement=function(t,e,a){var n,l={},i=null;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)Ud.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(l[n]=e[n]);var r=arguments.length-2;if(r===1)l.children=a;else if(1<r){for(var u=Array(r),o=0;o<r;o++)u[o]=arguments[o+2];l.children=u}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)l[n]===void 0&&(l[n]=r[n]);return pc(t,i,void 0,void 0,null,l)};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:Ep,render:t}};G.isValidElement=gc;G.lazy=function(t){return{$$typeof:Od,_payload:{_status:-1,_result:t},_init:Op}};G.memo=function(t,e){return{$$typeof:Tp,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=rt.T,a={};rt.T=a;try{var n=t(),l=rt.S;l!==null&&l(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(_p,Us)}catch(i){Us(i)}finally{rt.T=e}};G.unstable_useCacheRefresh=function(){return rt.H.useCacheRefresh()};G.use=function(t){return rt.H.use(t)};G.useActionState=function(t,e,a){return rt.H.useActionState(t,e,a)};G.useCallback=function(t,e){return rt.H.useCallback(t,e)};G.useContext=function(t){return rt.H.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t,e){return rt.H.useDeferredValue(t,e)};G.useEffect=function(t,e,a){var n=rt.H;if(typeof a=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(t,e)};G.useId=function(){return rt.H.useId()};G.useImperativeHandle=function(t,e,a){return rt.H.useImperativeHandle(t,e,a)};G.useInsertionEffect=function(t,e){return rt.H.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return rt.H.useLayoutEffect(t,e)};G.useMemo=function(t,e){return rt.H.useMemo(t,e)};G.useOptimistic=function(t,e){return rt.H.useOptimistic(t,e)};G.useReducer=function(t,e,a){return rt.H.useReducer(t,e,a)};G.useRef=function(t){return rt.H.useRef(t)};G.useState=function(t){return rt.H.useState(t)};G.useSyncExternalStore=function(t,e,a){return rt.H.useSyncExternalStore(t,e,a)};G.useTransition=function(){return rt.H.useTransition()};G.version="19.1.1";jd.exports=G;var v=jd.exports;const Fe=zd(v);var Hd={exports:{}},Qr={},Bd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,U){var L=z.length;z.push(U);t:for(;0<L;){var B=L-1>>>1,at=z[B];if(0<l(at,U))z[B]=U,z[L]=at,L=B;else break t}}function a(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var U=z[0],L=z.pop();if(L!==U){z[0]=L;t:for(var B=0,at=z.length,Lt=at>>>1;B<Lt;){var bt=2*(B+1)-1,Ae=z[bt],$t=bt+1,Yt=z[$t];if(0>l(Ae,L))$t<at&&0>l(Yt,Ae)?(z[B]=Yt,z[$t]=L,B=$t):(z[B]=Ae,z[bt]=L,B=bt);else if($t<at&&0>l(Yt,L))z[B]=Yt,z[$t]=L,B=$t;else break t}}return U}function l(z,U){var L=z.sortIndex-U.sortIndex;return L!==0?L:z.id-U.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var r=Date,u=r.now();t.unstable_now=function(){return r.now()-u}}var o=[],c=[],d=1,y=null,h=3,g=!1,x=!1,S=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;function b(z){for(var U=a(c);U!==null;){if(U.callback===null)n(c);else if(U.startTime<=z)n(c),U.sortIndex=U.expirationTime,e(o,U);else break;U=a(c)}}function T(z){if(S=!1,b(z),!x)if(a(o)!==null)x=!0,R||(R=!0,le());else{var U=a(c);U!==null&&_t(T,U.startTime-z)}}var R=!1,A=-1,j=5,C=-1;function N(){return M?!0:!(t.unstable_now()-C<j)}function vt(){if(M=!1,R){var z=t.unstable_now();C=z;var U=!0;try{t:{x=!1,S&&(S=!1,f(A),A=-1),g=!0;var L=h;try{e:{for(b(z),y=a(o);y!==null&&!(y.expirationTime>z&&N());){var B=y.callback;if(typeof B=="function"){y.callback=null,h=y.priorityLevel;var at=B(y.expirationTime<=z);if(z=t.unstable_now(),typeof at=="function"){y.callback=at,b(z),U=!0;break e}y===a(o)&&n(o),b(z)}else n(o);y=a(o)}if(y!==null)U=!0;else{var Lt=a(c);Lt!==null&&_t(T,Lt.startTime-z),U=!1}}break t}finally{y=null,h=L,g=!1}U=void 0}}finally{U?le():R=!1}}}var le;if(typeof p=="function")le=function(){p(vt)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,Na=Ca.port2;Ca.port1.onmessage=vt,le=function(){Na.postMessage(null)}}else le=function(){m(vt,0)};function _t(z,U){A=m(function(){z(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var L=h;h=U;try{return z()}finally{h=L}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=h;h=z;try{return U()}finally{h=L}},t.unstable_scheduleCallback=function(z,U,L){var B=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,z){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=L+at,z={id:d++,callback:U,priorityLevel:z,startTime:L,expirationTime:at,sortIndex:-1},L>B?(z.sortIndex=L,e(c,z),a(o)===null&&z===a(c)&&(S?(f(A),A=-1):S=!0,_t(T,L-B))):(z.sortIndex=at,e(o,z),x||g||(x=!0,R||(R=!0,le()))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var U=h;return function(){var L=h;h=U;try{return z.apply(this,arguments)}finally{h=L}}}})(Ld);Bd.exports=Ld;var Dp=Bd.exports,Yd={exports:{}},Ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=v;function Gd(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function la(){}var Ut={d:{f:la,r:function(){throw Error(Gd(522))},D:la,C:la,L:la,m:la,X:la,S:la,M:la},p:0,findDOMNode:null},Np=Symbol.for("react.portal");function Up(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Np,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var zl=Cp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Vr(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ut;Ht.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Gd(299));return Up(t,e,null,a)};Ht.flushSync=function(t){var e=zl.T,a=Ut.p;try{if(zl.T=null,Ut.p=2,t)return t()}finally{zl.T=e,Ut.p=a,Ut.d.f()}};Ht.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ut.d.C(t,e))};Ht.prefetchDNS=function(t){typeof t=="string"&&Ut.d.D(t)};Ht.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=Vr(a,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Ut.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:l,fetchPriority:i}):a==="script"&&Ut.d.X(t,{crossOrigin:n,integrity:l,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ht.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Vr(e.as,e.crossOrigin);Ut.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ut.d.M(t)};Ht.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=Vr(a,e.crossOrigin);Ut.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ht.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Vr(e.as,e.crossOrigin);Ut.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ut.d.m(t)};Ht.requestFormReset=function(t){Ut.d.r(t)};Ht.unstable_batchedUpdates=function(t,e){return t(e)};Ht.useFormState=function(t,e,a){return zl.H.useFormState(t,e,a)};Ht.useFormStatus=function(){return zl.H.useHostTransitionStatus()};Ht.version="19.1.1";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(t){console.error(t)}}qd(),Yd.exports=Ht;var Hp=Yd.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=Dp,kd=v,Bp=Hp;function E(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ii(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Qd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hs(t){if(ii(t)!==t)throw Error(E(188))}function Lp(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(E(188));return e!==t?null:t}for(var a=t,n=e;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return Hs(l),t;if(i===n)return Hs(l),e;i=i.sibling}throw Error(E(188))}if(a.return!==n.return)a=l,n=i;else{for(var r=!1,u=l.child;u;){if(u===a){r=!0,a=l,n=i;break}if(u===n){r=!0,n=l,a=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===a){r=!0,a=i,n=l;break}if(u===n){r=!0,n=i,a=l;break}u=u.sibling}if(!r)throw Error(E(189))}}if(a.alternate!==n)throw Error(E(190))}if(a.tag!==3)throw Error(E(188));return a.stateNode.current===a?t:e}function Vd(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Vd(t),e!==null)return e;t=t.sibling}return null}var lt=Object.assign,Yp=Symbol.for("react.element"),zi=Symbol.for("react.transitional.element"),Sl=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),ro=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),$d=Symbol.for("react.consumer"),Xe=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),ca=Symbol.for("react.lazy"),co=Symbol.for("react.activity"),qp=Symbol.for("react.memo_cache_sentinel"),Bs=Symbol.iterator;function fl(t){return t===null||typeof t!="object"?null:(t=Bs&&t[Bs]||t["@@iterator"],typeof t=="function"?t:null)}var kp=Symbol.for("react.client.reference");function so(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===kp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gn:return"Fragment";case ro:return"Profiler";case Zd:return"StrictMode";case uo:return"Suspense";case oo:return"SuspenseList";case co:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Sl:return"Portal";case Xe:return(t.displayName||"Context")+".Provider";case $d:return(t._context.displayName||"Context")+".Consumer";case yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vc:return e=t.displayName||null,e!==null?e:so(t.type)||"Memo";case ca:e=t._payload,t=t._init;try{return so(t(e))}catch{}}return null}var wl=Array.isArray,D=kd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Bp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xa={pending:!1,data:null,method:null,action:null},fo=[],yn=-1;function Ce(t){return{current:t}}function Mt(t){0>yn||(t.current=fo[yn],fo[yn]=null,yn--)}function ut(t,e){yn++,fo[yn]=t.current,t.current=e}var Oe=Ce(null),kl=Ce(null),ba=Ce(null),cr=Ce(null);function sr(t,e){switch(ut(ba,e),ut(kl,t),ut(Oe,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Xf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Xf(e),t=sm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Mt(Oe),ut(Oe,t)}function Ln(){Mt(Oe),Mt(kl),Mt(ba)}function ho(t){t.memoizedState!==null&&ut(cr,t);var e=Oe.current,a=sm(e,t.type);e!==a&&(ut(kl,t),ut(Oe,a))}function fr(t){kl.current===t&&(Mt(Oe),Mt(kl)),cr.current===t&&(Mt(cr),Pl._currentValue=Xa)}var mo=Object.prototype.hasOwnProperty,bc=wt.unstable_scheduleCallback,yu=wt.unstable_cancelCallback,Xp=wt.unstable_shouldYield,Qp=wt.unstable_requestPaint,_e=wt.unstable_now,Vp=wt.unstable_getCurrentPriorityLevel,Kd=wt.unstable_ImmediatePriority,Jd=wt.unstable_UserBlockingPriority,dr=wt.unstable_NormalPriority,Zp=wt.unstable_LowPriority,Wd=wt.unstable_IdlePriority,$p=wt.log,Kp=wt.unstable_setDisableYieldValue,ri=null,It=null;function pa(t){if(typeof $p=="function"&&Kp(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(ri,t)}catch{}}var te=Math.clz32?Math.clz32:Fp,Jp=Math.log,Wp=Math.LN2;function Fp(t){return t>>>=0,t===0?32:31-(Jp(t)/Wp|0)|0}var Mi=256,Ri=4194304;function La(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zr(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var l=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var u=n&134217727;return u!==0?(n=u&~i,n!==0?l=La(n):(r&=u,r!==0?l=La(r):a||(a=u&~t,a!==0&&(l=La(a))))):(u=n&~i,u!==0?l=La(u):r!==0?l=La(r):a||(a=n&~t,a!==0&&(l=La(a)))),l===0?0:e!==0&&e!==l&&!(e&i)&&(i=l&-l,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:l}function ui(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Pp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fd(){var t=Mi;return Mi<<=1,!(Mi&4194048)&&(Mi=256),t}function Pd(){var t=Ri;return Ri<<=1,!(Ri&62914560)&&(Ri=4194304),t}function vu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function oi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ip(t,e,a,n,l,i){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var u=t.entanglements,o=t.expirationTimes,c=t.hiddenUpdates;for(a=r&~a;0<a;){var d=31-te(a),y=1<<d;u[d]=0,o[d]=-1;var h=c[d];if(h!==null)for(c[d]=null,d=0;d<h.length;d++){var g=h[d];g!==null&&(g.lane&=-536870913)}a&=~y}n!==0&&Id(t,n,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function Id(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-te(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function t0(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-te(a),l=1<<n;l&e|t[n]&e&&(t[n]|=e),a&=~l}}function xc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Sc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function e0(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:xm(t.type))}function tg(t,e){var a=Z.p;try{return Z.p=t,e()}finally{Z.p=a}}var Oa=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Oa,Vt="__reactProps$"+Oa,el="__reactContainer$"+Oa,po="__reactEvents$"+Oa,eg="__reactListeners$"+Oa,ag="__reactHandles$"+Oa,Ls="__reactResources$"+Oa,ci="__reactMarker$"+Oa;function wc(t){delete t[Dt],delete t[Vt],delete t[po],delete t[eg],delete t[ag]}function vn(t){var e=t[Dt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[el]||a[Dt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Zf(t);t!==null;){if(a=t[Dt])return a;t=Zf(t)}return e}t=a,a=t.parentNode}return null}function al(t){if(t=t[Dt]||t[el]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function El(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(E(33))}function On(t){var e=t[Ls];return e||(e=t[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Tt(t){t[ci]=!0}var a0=new Set,n0={};function an(t,e){Yn(t,e),Yn(t+"Capture",e)}function Yn(t,e){for(n0[t]=e,t=0;t<e.length;t++)a0.add(e[t])}var ng=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ys={},Gs={};function lg(t){return mo.call(Gs,t)?!0:mo.call(Ys,t)?!1:ng.test(t)?Gs[t]=!0:(Ys[t]=!0,!1)}function Xi(t,e,a){if(lg(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function ji(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Le(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var bu,qs;function hn(t){if(bu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||"",qs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bu+t+qs}var xu=!1;function Su(t,e){if(!t||xu)return"";xu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(g){var h=g}Reflect.construct(t,[],y)}else{try{y.call()}catch(g){h=g}t.call(y.prototype)}}else{try{throw Error()}catch(g){h=g}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var o=r.split(`
`),c=u.split(`
`);for(l=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;if(n===o.length||l===c.length)for(n=o.length-1,l=c.length-1;1<=n&&0<=l&&o[n]!==c[l];)l--;for(;1<=n&&0<=l;n--,l--)if(o[n]!==c[l]){if(n!==1||l!==1)do if(n--,l--,0>l||o[n]!==c[l]){var d=`
`+o[n].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=n&&0<=l);break}}}finally{xu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?hn(a):""}function ig(t){switch(t.tag){case 26:case 27:case 5:return hn(t.type);case 16:return hn("Lazy");case 13:return hn("Suspense");case 19:return hn("SuspenseList");case 0:case 15:return Su(t.type,!1);case 11:return Su(t.type.render,!1);case 1:return Su(t.type,!0);case 31:return hn("Activity");default:return""}}function ks(t){try{var e="";do e+=ig(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rg(t){var e=l0(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hr(t){t._valueTracker||(t._valueTracker=rg(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=l0(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function mr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ug=/[\n"\\]/g;function se(t){return t.replace(ug,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function go(t,e,a,n,l,i,r,u){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ue(e)):t.value!==""+ue(e)&&(t.value=""+ue(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?yo(t,r,ue(e)):a!=null?yo(t,r,ue(a)):n!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+ue(u):t.removeAttribute("name")}function r0(t,e,a,n,l,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;a=a!=null?""+ue(a):"",e=e!=null?""+ue(e):a,u||e===t.value||(t.value=e),t.defaultValue=e}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=u?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function yo(t,e,a){e==="number"&&mr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,e,a,n){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&n&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,n&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function u0(t,e,a){if(e!=null&&(e=""+ue(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ue(a):""}function o0(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(E(92));if(wl(n)){if(1<n.length)throw Error(E(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=ue(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Gn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xs(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||og.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function c0(t,e,a){if(e!=null&&typeof e!="object")throw Error(E(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var l in e)n=e[l],e.hasOwnProperty(l)&&a[l]!==n&&Xs(t,l,n)}else for(var i in e)e.hasOwnProperty(i)&&Xs(t,i,e[i])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(t){return sg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var vo=null;function Ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bn=null,Dn=null;function Qs(t){var e=al(t);if(e&&(t=e.stateNode)){var a=t[Vt]||null;t:switch(t=e.stateNode,e.type){case"input":if(go(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var l=n[Vt]||null;if(!l)throw Error(E(90));go(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&i0(n)}break t;case"textarea":u0(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&_n(t,!!a.multiple,e,!1)}}}var wu=!1;function s0(t,e,a){if(wu)return t(e,a);wu=!0;try{var n=t(e);return n}finally{if(wu=!1,(bn!==null||Dn!==null)&&(au(),bn&&(e=bn,t=Dn,Dn=bn=null,Qs(e),t)))for(e=0;e<t.length;e++)Qs(t[e])}}function Xl(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Vt]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(E(231,e,typeof a));return a}var Pe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(Pe)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){bo=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{bo=!1}var ga=null,Tc=null,Vi=null;function f0(){if(Vi)return Vi;var t,e=Tc,a=e.length,n,l="value"in ga?ga.value:ga.textContent,i=l.length;for(t=0;t<a&&e[t]===l[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===l[i-n];n++);return Vi=l.slice(t,1<n?1-n:void 0)}function Zi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oi(){return!0}function Vs(){return!1}function Zt(t){function e(a,n,l,i,r){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(a=t[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oi:Vs,this.isPropagationStopped=Vs,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),e}var nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$r=Zt(nn),si=lt({},nn,{view:0,detail:0}),fg=Zt(si),Eu,Au,hl,Kr=lt({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hl&&(hl&&t.type==="mousemove"?(Eu=t.screenX-hl.screenX,Au=t.screenY-hl.screenY):Au=Eu=0,hl=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),Zs=Zt(Kr),dg=lt({},Kr,{dataTransfer:0}),hg=Zt(dg),mg=lt({},si,{relatedTarget:0}),Tu=Zt(mg),pg=lt({},nn,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=Zt(pg),yg=lt({},nn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vg=Zt(yg),bg=lt({},nn,{data:0}),$s=Zt(bg),xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wg[t])?!!e[t]:!1}function zc(){return Eg}var Ag=lt({},si,{key:function(t){if(t.key){var e=xg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(t){return t.type==="keypress"?Zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tg=Zt(Ag),zg=lt({},Kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=Zt(zg),Mg=lt({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),Rg=Zt(Mg),jg=lt({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=Zt(jg),_g=lt({},Kr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=Zt(_g),Cg=lt({},nn,{newState:0,oldState:0}),Ng=Zt(Cg),Ug=[9,13,27,32],Mc=Pe&&"CompositionEvent"in window,Ml=null;Pe&&"documentMode"in document&&(Ml=document.documentMode);var Hg=Pe&&"TextEvent"in window&&!Ml,d0=Pe&&(!Mc||Ml&&8<Ml&&11>=Ml),Js=" ",Ws=!1;function h0(t,e){switch(t){case"keyup":return Ug.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xn=!1;function Bg(t,e){switch(t){case"compositionend":return m0(e);case"keypress":return e.which!==32?null:(Ws=!0,Js);case"textInput":return t=e.data,t===Js&&Ws?null:t;default:return null}}function Lg(t,e){if(xn)return t==="compositionend"||!Mc&&h0(t,e)?(t=f0(),Vi=Tc=ga=null,xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d0&&e.locale!=="ko"?null:e.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yg[t.type]:e==="textarea"}function p0(t,e,a,n){bn?Dn?Dn.push(n):Dn=[n]:bn=n,e=Dr(e,"onChange"),0<e.length&&(a=new $r("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Rl=null,Ql=null;function Gg(t){um(t,0)}function Jr(t){var e=El(t);if(i0(e))return t}function Ps(t,e){if(t==="change")return e}var g0=!1;if(Pe){var zu;if(Pe){var Mu="oninput"in document;if(!Mu){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),Mu=typeof Is.oninput=="function"}zu=Mu}else zu=!1;g0=zu&&(!document.documentMode||9<document.documentMode)}function tf(){Rl&&(Rl.detachEvent("onpropertychange",y0),Ql=Rl=null)}function y0(t){if(t.propertyName==="value"&&Jr(Ql)){var e=[];p0(e,Ql,t,Ac(t)),s0(Gg,e)}}function qg(t,e,a){t==="focusin"?(tf(),Rl=e,Ql=a,Rl.attachEvent("onpropertychange",y0)):t==="focusout"&&tf()}function kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jr(Ql)}function Xg(t,e){if(t==="click")return Jr(e)}function Qg(t,e){if(t==="input"||t==="change")return Jr(e)}function Vg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ne=typeof Object.is=="function"?Object.is:Vg;function Vl(t,e){if(ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!mo.call(e,l)||!ne(t[l],e[l]))return!1}return!0}function ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function af(t,e){var a=ef(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ef(a)}}function v0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=mr(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=mr(t.document)}return e}function Rc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Zg=Pe&&"documentMode"in document&&11>=document.documentMode,Sn=null,xo=null,jl=null,So=!1;function nf(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;So||Sn==null||Sn!==mr(n)||(n=Sn,"selectionStart"in n&&Rc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),jl&&Vl(jl,n)||(jl=n,n=Dr(xo,"onSelect"),0<n.length&&(e=new $r("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Sn)))}function Ha(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var wn={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Ru={},x0={};Pe&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function ln(t){if(Ru[t])return Ru[t];if(!wn[t])return t;var e=wn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in x0)return Ru[t]=e[a];return t}var S0=ln("animationend"),w0=ln("animationiteration"),E0=ln("animationstart"),$g=ln("transitionrun"),Kg=ln("transitionstart"),Jg=ln("transitioncancel"),A0=ln("transitionend"),T0=new Map,wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wo.push("scrollEnd");function Se(t,e){T0.set(t,e),an(e,[t])}var lf=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var a=lf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:ks(e)},lf.set(t,e),e)}return{value:t,source:e,stack:ks(e)}}var re=[],En=0,jc=0;function Wr(){for(var t=En,e=jc=En=0;e<t;){var a=re[e];re[e++]=null;var n=re[e];re[e++]=null;var l=re[e];re[e++]=null;var i=re[e];if(re[e++]=null,n!==null&&l!==null){var r=n.pending;r===null?l.next=l:(l.next=r.next,r.next=l),n.pending=l}i!==0&&z0(a,l,i)}}function Fr(t,e,a,n){re[En++]=t,re[En++]=e,re[En++]=a,re[En++]=n,jc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Oc(t,e,a,n){return Fr(t,e,a,n),pr(t)}function nl(t,e){return Fr(t,null,null,e),pr(t)}function z0(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=t.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-te(a),t=i.hiddenUpdates,n=t[l],n===null?t[l]=[e]:n.push(e),e.lane=a|536870912),i):null}function pr(t){if(50<Yl)throw Yl=0,Xo=null,Error(E(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var An={};function Wg(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,a,n){return new Wg(t,e,a,n)}function _c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ke(t,e){var a=t.alternate;return a===null?(a=Pt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function M0(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function $i(t,e,a,n,l,i){var r=0;if(n=t,typeof t=="function")_c(t)&&(r=1);else if(typeof t=="string")r=P1(t,a,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case co:return t=Pt(31,a,e,l),t.elementType=co,t.lanes=i,t;case gn:return Qa(a.children,l,i,e);case Zd:r=8,l|=24;break;case ro:return t=Pt(12,a,e,l|2),t.elementType=ro,t.lanes=i,t;case uo:return t=Pt(13,a,e,l),t.elementType=uo,t.lanes=i,t;case oo:return t=Pt(19,a,e,l),t.elementType=oo,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gp:case Xe:r=10;break t;case $d:r=9;break t;case yc:r=11;break t;case vc:r=14;break t;case ca:r=16,n=null;break t}r=29,a=Error(E(130,t===null?"null":typeof t,"")),n=null}return e=Pt(r,a,e,l),e.elementType=t,e.type=n,e.lanes=i,e}function Qa(t,e,a,n){return t=Pt(7,t,n,e),t.lanes=a,t}function ju(t,e,a){return t=Pt(6,t,null,e),t.lanes=a,t}function Ou(t,e,a){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Tn=[],zn=0,gr=null,yr=0,oe=[],ce=0,Va=null,Qe=1,Ve="";function Ya(t,e){Tn[zn++]=yr,Tn[zn++]=gr,gr=t,yr=e}function R0(t,e,a){oe[ce++]=Qe,oe[ce++]=Ve,oe[ce++]=Va,Va=t;var n=Qe;t=Ve;var l=32-te(n)-1;n&=~(1<<l),a+=1;var i=32-te(e)+l;if(30<i){var r=l-l%5;i=(n&(1<<r)-1).toString(32),n>>=r,l-=r,Qe=1<<32-te(e)+l|a<<l|n,Ve=i+t}else Qe=1<<i|a<<l|n,Ve=t}function Dc(t){t.return!==null&&(Ya(t,1),R0(t,1,0))}function Cc(t){for(;t===gr;)gr=Tn[--zn],Tn[zn]=null,yr=Tn[--zn],Tn[zn]=null;for(;t===Va;)Va=oe[--ce],oe[ce]=null,Ve=oe[--ce],oe[ce]=null,Qe=oe[--ce],oe[ce]=null}var Nt=null,st=null,V=!1,Za=null,Re=!1,Eo=Error(E(519));function Pa(t){var e=Error(E(418,""));throw Zl(fe(e,t)),Eo}function rf(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Dt]=t,e[Vt]=n,a){case"dialog":k("cancel",e),k("close",e);break;case"iframe":case"object":case"embed":k("load",e);break;case"video":case"audio":for(a=0;a<Jl.length;a++)k(Jl[a],e);break;case"source":k("error",e);break;case"img":case"image":case"link":k("error",e),k("load",e);break;case"details":k("toggle",e);break;case"input":k("invalid",e),r0(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),hr(e);break;case"select":k("invalid",e);break;case"textarea":k("invalid",e),o0(e,n.value,n.defaultValue,n.children),hr(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||cm(e.textContent,a)?(n.popover!=null&&(k("beforetoggle",e),k("toggle",e)),n.onScroll!=null&&k("scroll",e),n.onScrollEnd!=null&&k("scrollend",e),n.onClick!=null&&(e.onclick=iu),e=!0):e=!1,e||Pa(t)}function uf(t){for(Nt=t.return;Nt;)switch(Nt.tag){case 5:case 13:Re=!1;return;case 27:case 3:Re=!0;return;default:Nt=Nt.return}}function ml(t){if(t!==Nt)return!1;if(!V)return uf(t),V=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jo(t.type,t.memoizedProps)),a=!a),a&&st&&Pa(t),uf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){st=ve(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}st=null}}else e===27?(e=st,_a(t.type)?(t=Po,Po=null,st=t):st=e):st=Nt?ve(t.stateNode.nextSibling):null;return!0}function fi(){st=Nt=null,V=!1}function of(){var t=Za;return t!==null&&(Xt===null?Xt=t:Xt.push.apply(Xt,t),Za=null),t}function Zl(t){Za===null?Za=[t]:Za.push(t)}var Ao=Ce(null),rn=null,Ze=null;function fa(t,e,a){ut(Ao,e._currentValue),e._currentValue=a}function Je(t){t._currentValue=Ao.current,Mt(Ao)}function To(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function zo(t,e,a,n){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;t:for(;i!==null;){var u=i;i=l;for(var o=0;o<e.length;o++)if(u.context===e[o]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),To(i.return,a,t),n||(r=null);break t}i=u.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(E(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),To(r,a,t),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===t){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function di(t,e,a,n){t=null;for(var l=e,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(E(387));if(r=r.memoizedProps,r!==null){var u=l.type;ne(l.pendingProps.value,r.value)||(t!==null?t.push(u):t=[u])}}else if(l===cr.current){if(r=l.alternate,r===null)throw Error(E(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Pl):t=[Pl])}l=l.return}t!==null&&zo(e,t,a,n),e.flags|=262144}function vr(t){for(t=t.firstContext;t!==null;){if(!ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ia(t){rn=t,Ze=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ct(t){return j0(rn,t)}function _i(t,e){return rn===null&&Ia(t),j0(t,e)}function j0(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ze===null){if(t===null)throw Error(E(308));Ze=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ze=Ze.next=e;return a}var Fg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Pg=wt.unstable_scheduleCallback,Ig=wt.unstable_NormalPriority,xt={$$typeof:Xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nc(){return{controller:new Fg,data:new Map,refCount:0}}function hi(t){t.refCount--,t.refCount===0&&Pg(Ig,function(){t.controller.abort()})}var Ol=null,Mo=0,qn=0,Cn=null;function t1(t,e){if(Ol===null){var a=Ol=[];Mo=0,qn=ns(),Cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Mo++,e.then(cf,cf),e}function cf(){if(--Mo===0&&Ol!==null){Cn!==null&&(Cn.status="fulfilled");var t=Ol;Ol=null,qn=0,Cn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function e1(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var sf=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&t1(t,e),sf!==null&&sf(t,e)};var $a=Ce(null);function Uc(){var t=$a.current;return t!==null?t:et.pooledCache}function Ki(t,e){e===null?ut($a,$a.current):ut($a,e.pool)}function O0(){var t=Uc();return t===null?null:{parent:xt._currentValue,pool:t}}var mi=Error(E(460)),_0=Error(E(474)),Pr=Error(E(542)),Ro={then:function(){}};function ff(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Di(){}function D0(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Di,Di),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hf(t),t;default:if(typeof e.status=="string")e.then(Di,Di);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(E(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=n}},function(n){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hf(t),t}throw _l=e,mi}}var _l=null;function df(){if(_l===null)throw Error(E(459));var t=_l;return _l=null,t}function hf(t){if(t===mi||t===Pr)throw Error(E(483))}var sa=!1;function Hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sa(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,W&2){var l=n.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),n.pending=e,e=pr(t),z0(t,null,a),e}return Fr(t,n,e,a),pr(t)}function Dl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,t0(t,a)}}function _u(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?l=i=e:i=i.next=e}else l=i=e;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Oo=!1;function Cl(){if(Oo){var t=Cn;if(t!==null)throw t}}function Nl(t,e,a,n){Oo=!1;var l=t.updateQueue;sa=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var o=u,c=o.next;o.next=null,r===null?i=c:r.next=c,r=o;var d=t.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==r&&(u===null?d.firstBaseUpdate=c:u.next=c,d.lastBaseUpdate=o))}if(i!==null){var y=l.baseState;r=0,d=c=o=null,u=i;do{var h=u.lane&-536870913,g=h!==u.lane;if(g?(Q&h)===h:(n&h)===h){h!==0&&h===qn&&(Oo=!0),d!==null&&(d=d.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var x=t,S=u;h=e;var M=a;switch(S.tag){case 1:if(x=S.payload,typeof x=="function"){y=x.call(M,y,h);break t}y=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(M,y,h):x,h==null)break t;y=lt({},y,h);break t;case 2:sa=!0}}h=u.callback,h!==null&&(t.flags|=64,g&&(t.flags|=8192),g=l.callbacks,g===null?l.callbacks=[h]:g.push(h))}else g={lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(c=d=g,o=y):d=d.next=g,r|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;g=u,u=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);d===null&&(o=y),l.baseState=o,l.firstBaseUpdate=c,l.lastBaseUpdate=d,i===null&&(l.shared.lanes=0),ja|=r,t.lanes=r,t.memoizedState=y}}function C0(t,e){if(typeof t!="function")throw Error(E(191,t));t.call(e)}function N0(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)C0(a[t],e)}var kn=Ce(null),br=Ce(0);function mf(t,e){t=ea,ut(br,t),ut(kn,e),ea=t|e.baseLanes}function _o(){ut(br,ea),ut(kn,kn.current)}function Bc(){ea=br.current,Mt(kn),Mt(br)}var Ma=0,q=null,P=null,pt=null,xr=!1,Nn=!1,tn=!1,Sr=0,$l=0,Un=null,a1=0;function ht(){throw Error(E(321))}function Lc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ne(t[a],e[a]))return!1;return!0}function Yc(t,e,a,n,l,i){return Ma=i,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?fh:dh,tn=!1,i=a(n,l),tn=!1,Nn&&(i=H0(e,a,n,l)),U0(t),i}function U0(t){D.H=wr;var e=P!==null&&P.next!==null;if(Ma=0,pt=P=q=null,xr=!1,$l=0,Un=null,e)throw Error(E(300));t===null||zt||(t=t.dependencies,t!==null&&vr(t)&&(zt=!0))}function H0(t,e,a,n){q=t;var l=0;do{if(Nn&&(Un=null),$l=0,Nn=!1,25<=l)throw Error(E(301));if(l+=1,pt=P=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=c1,i=e(a,n)}while(Nn);return i}function n1(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?pi(e):e,t=t.useState()[0],(P!==null?P.memoizedState:null)!==t&&(q.flags|=1024),e}function Gc(){var t=Sr!==0;return Sr=0,t}function qc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function kc(t){if(xr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xr=!1}Ma=0,pt=P=q=null,Nn=!1,$l=Sr=0,Un=null}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?q.memoizedState=pt=t:pt=pt.next=t,pt}function yt(){if(P===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=P.next;var e=pt===null?q.memoizedState:pt.next;if(e!==null)pt=e,P=t;else{if(t===null)throw q.alternate===null?Error(E(467)):Error(E(310));P=t,t={memoizedState:P.memoizedState,baseState:P.baseState,baseQueue:P.baseQueue,queue:P.queue,next:null},pt===null?q.memoizedState=pt=t:pt=pt.next=t}return pt}function Xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pi(t){var e=$l;return $l+=1,Un===null&&(Un=[]),t=D0(Un,t,e),e=q,(pt===null?e.memoizedState:pt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?fh:dh),t}function Ir(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pi(t);if(t.$$typeof===Xe)return Ct(t)}throw Error(E(438,String(t)))}function Qc(t){var e=null,a=q.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=q.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Xc(),q.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=qp;return e.index++,a}function Ie(t,e){return typeof e=="function"?e(t):e}function Ji(t){var e=yt();return Vc(e,P,t)}function Vc(t,e,a){var n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=a;var l=t.baseQueue,i=n.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}e.baseQueue=l=i,n.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var u=r=null,o=null,c=e,d=!1;do{var y=c.lane&-536870913;if(y!==c.lane?(Q&y)===y:(Ma&y)===y){var h=c.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),y===qn&&(d=!0);else if((Ma&h)===h){c=c.next,h===qn&&(d=!0);continue}else y={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(u=o=y,r=i):o=o.next=y,q.lanes|=h,ja|=h;y=c.action,tn&&a(i,y),i=c.hasEagerState?c.eagerState:a(i,y)}else h={lane:y,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(u=o=h,r=i):o=o.next=h,q.lanes|=y,ja|=y;c=c.next}while(c!==null&&c!==e);if(o===null?r=i:o.next=u,!ne(i,t.memoizedState)&&(zt=!0,d&&(a=Cn,a!==null)))throw a;t.memoizedState=i,t.baseState=r,t.baseQueue=o,n.lastRenderedState=i}return l===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Du(t){var e=yt(),a=e.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=t;var n=a.dispatch,l=a.pending,i=e.memoizedState;if(l!==null){a.pending=null;var r=l=l.next;do i=t(i,r.action),r=r.next;while(r!==l);ne(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,n]}function B0(t,e,a){var n=q,l=yt(),i=V;if(i){if(a===void 0)throw Error(E(407));a=a()}else a=e();var r=!ne((P||l).memoizedState,a);r&&(l.memoizedState=a,zt=!0),l=l.queue;var u=G0.bind(null,n,l,t);if(gi(2048,8,u,[t]),l.getSnapshot!==e||r||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,Xn(9,tu(),Y0.bind(null,n,l,a,e),null),et===null)throw Error(E(349));i||Ma&124||L0(n,e,a)}return a}function L0(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=q.updateQueue,e===null?(e=Xc(),q.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Y0(t,e,a,n){e.value=a,e.getSnapshot=n,q0(e)&&k0(t)}function G0(t,e,a){return a(function(){q0(e)&&k0(t)})}function q0(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ne(t,a)}catch{return!0}}function k0(t){var e=nl(t,2);e!==null&&ae(e,t,2)}function Do(t){var e=qt();if(typeof t=="function"){var a=t;if(t=a(),tn){pa(!0);try{a()}finally{pa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:t},e}function X0(t,e,a,n){return t.baseState=a,Vc(t,P,typeof n=="function"?n:Ie)}function l1(t,e,a,n,l){if(eu(t))throw Error(E(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};D.T!==null?a(!0):i.isTransition=!1,n(i),a=e.pending,a===null?(i.next=e.pending=i,Q0(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Q0(t,e){var a=e.action,n=e.payload,l=t.state;if(e.isTransition){var i=D.T,r={};D.T=r;try{var u=a(l,n),o=D.S;o!==null&&o(r,u),pf(t,e,u)}catch(c){Co(t,e,c)}finally{D.T=i}}else try{i=a(l,n),pf(t,e,i)}catch(c){Co(t,e,c)}}function pf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){gf(t,e,n)},function(n){return Co(t,e,n)}):gf(t,e,a)}function gf(t,e,a){e.status="fulfilled",e.value=a,V0(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Q0(t,a)))}function Co(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,V0(e),e=e.next;while(e!==n)}t.action=null}function V0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Z0(t,e){return e}function yf(t,e){if(V){var a=et.formState;if(a!==null){t:{var n=q;if(V){if(st){e:{for(var l=st,i=Re;l.nodeType!==8;){if(!i){l=null;break e}if(l=ve(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){st=ve(l.nextSibling),n=l.data==="F!";break t}}Pa(n)}n=!1}n&&(e=a[0])}}return a=qt(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z0,lastRenderedState:e},a.queue=n,a=oh.bind(null,q,n),n.dispatch=a,n=Do(!1),i=Jc.bind(null,q,!1,n.queue),n=qt(),l={state:e,dispatch:null,action:t,pending:null},n.queue=l,a=l1.bind(null,q,l,i,a),l.dispatch=a,n.memoizedState=t,[e,a,!1]}function vf(t){var e=yt();return $0(e,P,t)}function $0(t,e,a){if(e=Vc(t,e,Z0)[0],t=Ji(Ie)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=pi(e)}catch(r){throw r===mi?Pr:r}else n=e;e=yt();var l=e.queue,i=l.dispatch;return a!==e.memoizedState&&(q.flags|=2048,Xn(9,tu(),i1.bind(null,l,a),null)),[n,i,t]}function i1(t,e){t.action=e}function bf(t){var e=yt(),a=P;if(a!==null)return $0(e,a,t);yt(),e=e.memoizedState,a=yt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Xn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=q.updateQueue,e===null&&(e=Xc(),q.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function tu(){return{destroy:void 0,resource:void 0}}function K0(){return yt().memoizedState}function Wi(t,e,a,n){var l=qt();n=n===void 0?null:n,q.flags|=t,l.memoizedState=Xn(1|e,tu(),a,n)}function gi(t,e,a,n){var l=yt();n=n===void 0?null:n;var i=l.memoizedState.inst;P!==null&&n!==null&&Lc(n,P.memoizedState.deps)?l.memoizedState=Xn(e,i,a,n):(q.flags|=t,l.memoizedState=Xn(1|e,i,a,n))}function xf(t,e){Wi(8390656,8,t,e)}function J0(t,e){gi(2048,8,t,e)}function W0(t,e){return gi(4,2,t,e)}function F0(t,e){return gi(4,4,t,e)}function P0(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I0(t,e,a){a=a!=null?a.concat([t]):null,gi(4,4,P0.bind(null,e,t),a)}function Zc(){}function th(t,e){var a=yt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Lc(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function eh(t,e){var a=yt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Lc(e,n[1]))return n[0];if(n=t(),tn){pa(!0);try{t()}finally{pa(!1)}}return a.memoizedState=[n,e],n}function $c(t,e,a){return a===void 0||Ma&1073741824?t.memoizedState=e:(t.memoizedState=a,t=Vh(),q.lanes|=t,ja|=t,a)}function ah(t,e,a,n){return ne(a,e)?a:kn.current!==null?(t=$c(t,a,n),ne(t,e)||(zt=!0),t):Ma&42?(t=Vh(),q.lanes|=t,ja|=t,e):(zt=!0,t.memoizedState=a)}function nh(t,e,a,n,l){var i=Z.p;Z.p=i!==0&&8>i?i:8;var r=D.T,u={};D.T=u,Jc(t,!1,e,a);try{var o=l(),c=D.S;if(c!==null&&c(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=e1(o,n);Ul(t,e,d,ee(t))}else Ul(t,e,n,ee(t))}catch(y){Ul(t,e,{then:function(){},status:"rejected",reason:y},ee())}finally{Z.p=i,D.T=r}}function r1(){}function No(t,e,a,n){if(t.tag!==5)throw Error(E(476));var l=lh(t).queue;nh(t,l,e,Xa,a===null?r1:function(){return ih(t),a(n)})}function lh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Xa,baseState:Xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:Xa},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ih(t){var e=lh(t).next.queue;Ul(t,e,{},ee())}function Kc(){return Ct(Pl)}function rh(){return yt().memoizedState}function uh(){return yt().memoizedState}function u1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ee();t=xa(a);var n=Sa(e,t,a);n!==null&&(ae(n,e,a),Dl(n,e,a)),e={cache:Nc()},t.payload=e;return}e=e.return}}function o1(t,e,a){var n=ee();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},eu(t)?ch(e,a):(a=Oc(t,e,a,n),a!==null&&(ae(a,t,n),sh(a,e,n)))}function oh(t,e,a){var n=ee();Ul(t,e,a,n)}function Ul(t,e,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(eu(t))ch(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,u=i(r,a);if(l.hasEagerState=!0,l.eagerState=u,ne(u,r))return Fr(t,e,l,0),et===null&&Wr(),!1}catch{}finally{}if(a=Oc(t,e,l,n),a!==null)return ae(a,t,n),sh(a,e,n),!0}return!1}function Jc(t,e,a,n){if(n={lane:2,revertLane:ns(),action:n,hasEagerState:!1,eagerState:null,next:null},eu(t)){if(e)throw Error(E(479))}else e=Oc(t,a,n,2),e!==null&&ae(e,t,2)}function eu(t){var e=t.alternate;return t===q||e!==null&&e===q}function ch(t,e){Nn=xr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function sh(t,e,a){if(a&4194048){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,t0(t,a)}}var wr={readContext:Ct,use:Ir,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht},fh={readContext:Ct,use:Ir,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:xf,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Wi(4194308,4,P0.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Wi(4194308,4,t,e)},useInsertionEffect:function(t,e){Wi(4,2,t,e)},useMemo:function(t,e){var a=qt();e=e===void 0?null:e;var n=t();if(tn){pa(!0);try{t()}finally{pa(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=qt();if(a!==void 0){var l=a(e);if(tn){pa(!0);try{a(e)}finally{pa(!1)}}}else l=e;return n.memoizedState=n.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},n.queue=t,t=t.dispatch=o1.bind(null,q,t),[n.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:function(t){t=Do(t);var e=t.queue,a=oh.bind(null,q,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Zc,useDeferredValue:function(t,e){var a=qt();return $c(a,t,e)},useTransition:function(){var t=Do(!1);return t=nh.bind(null,q,t.queue,!0,!1),qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=q,l=qt();if(V){if(a===void 0)throw Error(E(407));a=a()}else{if(a=e(),et===null)throw Error(E(349));Q&124||L0(n,e,a)}l.memoizedState=a;var i={value:a,getSnapshot:e};return l.queue=i,xf(G0.bind(null,n,i,t),[t]),n.flags|=2048,Xn(9,tu(),Y0.bind(null,n,i,a,e),null),a},useId:function(){var t=qt(),e=et.identifierPrefix;if(V){var a=Ve,n=Qe;a=(n&~(1<<32-te(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Sr++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=a1++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Kc,useFormState:yf,useActionState:yf,useOptimistic:function(t){var e=qt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Jc.bind(null,q,!0,a),a.dispatch=e,[t,e]},useMemoCache:Qc,useCacheRefresh:function(){return qt().memoizedState=u1.bind(null,q)}},dh={readContext:Ct,use:Ir,useCallback:th,useContext:Ct,useEffect:J0,useImperativeHandle:I0,useInsertionEffect:W0,useLayoutEffect:F0,useMemo:eh,useReducer:Ji,useRef:K0,useState:function(){return Ji(Ie)},useDebugValue:Zc,useDeferredValue:function(t,e){var a=yt();return ah(a,P.memoizedState,t,e)},useTransition:function(){var t=Ji(Ie)[0],e=yt().memoizedState;return[typeof t=="boolean"?t:pi(t),e]},useSyncExternalStore:B0,useId:rh,useHostTransitionStatus:Kc,useFormState:vf,useActionState:vf,useOptimistic:function(t,e){var a=yt();return X0(a,P,t,e)},useMemoCache:Qc,useCacheRefresh:uh},c1={readContext:Ct,use:Ir,useCallback:th,useContext:Ct,useEffect:J0,useImperativeHandle:I0,useInsertionEffect:W0,useLayoutEffect:F0,useMemo:eh,useReducer:Du,useRef:K0,useState:function(){return Du(Ie)},useDebugValue:Zc,useDeferredValue:function(t,e){var a=yt();return P===null?$c(a,t,e):ah(a,P.memoizedState,t,e)},useTransition:function(){var t=Du(Ie)[0],e=yt().memoizedState;return[typeof t=="boolean"?t:pi(t),e]},useSyncExternalStore:B0,useId:rh,useHostTransitionStatus:Kc,useFormState:bf,useActionState:bf,useOptimistic:function(t,e){var a=yt();return P!==null?X0(a,P,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:uh},Hn=null,Kl=0;function Ci(t){var e=Kl;return Kl+=1,Hn===null&&(Hn=[]),D0(Hn,t,e)}function pl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ni(t,e){throw e.$$typeof===Yp?Error(E(525)):(t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Sf(t){var e=t._init;return e(t._payload)}function hh(t){function e(m,f){if(t){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function a(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function n(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function l(m,f){return m=Ke(m,f),m.index=0,m.sibling=null,m}function i(m,f,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=67108866,f):p):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function r(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function u(m,f,p,b){return f===null||f.tag!==6?(f=ju(p,m.mode,b),f.return=m,f):(f=l(f,p),f.return=m,f)}function o(m,f,p,b){var T=p.type;return T===gn?d(m,f,p.props.children,b,p.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ca&&Sf(T)===f.type)?(f=l(f,p.props),pl(f,p),f.return=m,f):(f=$i(p.type,p.key,p.props,null,m.mode,b),pl(f,p),f.return=m,f)}function c(m,f,p,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Ou(p,m.mode,b),f.return=m,f):(f=l(f,p.children||[]),f.return=m,f)}function d(m,f,p,b,T){return f===null||f.tag!==7?(f=Qa(p,m.mode,b,T),f.return=m,f):(f=l(f,p),f.return=m,f)}function y(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=ju(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zi:return p=$i(f.type,f.key,f.props,null,m.mode,p),pl(p,f),p.return=m,p;case Sl:return f=Ou(f,m.mode,p),f.return=m,f;case ca:var b=f._init;return f=b(f._payload),y(m,f,p)}if(wl(f)||fl(f))return f=Qa(f,m.mode,p,null),f.return=m,f;if(typeof f.then=="function")return y(m,Ci(f),p);if(f.$$typeof===Xe)return y(m,_i(m,f),p);Ni(m,f)}return null}function h(m,f,p,b){var T=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return T!==null?null:u(m,f,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:return p.key===T?o(m,f,p,b):null;case Sl:return p.key===T?c(m,f,p,b):null;case ca:return T=p._init,p=T(p._payload),h(m,f,p,b)}if(wl(p)||fl(p))return T!==null?null:d(m,f,p,b,null);if(typeof p.then=="function")return h(m,f,Ci(p),b);if(p.$$typeof===Xe)return h(m,f,_i(m,p),b);Ni(m,p)}return null}function g(m,f,p,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return m=m.get(p)||null,u(f,m,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case zi:return m=m.get(b.key===null?p:b.key)||null,o(f,m,b,T);case Sl:return m=m.get(b.key===null?p:b.key)||null,c(f,m,b,T);case ca:var R=b._init;return b=R(b._payload),g(m,f,p,b,T)}if(wl(b)||fl(b))return m=m.get(p)||null,d(f,m,b,T,null);if(typeof b.then=="function")return g(m,f,p,Ci(b),T);if(b.$$typeof===Xe)return g(m,f,p,_i(f,b),T);Ni(f,b)}return null}function x(m,f,p,b){for(var T=null,R=null,A=f,j=f=0,C=null;A!==null&&j<p.length;j++){A.index>j?(C=A,A=null):C=A.sibling;var N=h(m,A,p[j],b);if(N===null){A===null&&(A=C);break}t&&A&&N.alternate===null&&e(m,A),f=i(N,f,j),R===null?T=N:R.sibling=N,R=N,A=C}if(j===p.length)return a(m,A),V&&Ya(m,j),T;if(A===null){for(;j<p.length;j++)A=y(m,p[j],b),A!==null&&(f=i(A,f,j),R===null?T=A:R.sibling=A,R=A);return V&&Ya(m,j),T}for(A=n(A);j<p.length;j++)C=g(A,m,j,p[j],b),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?j:C.key),f=i(C,f,j),R===null?T=C:R.sibling=C,R=C);return t&&A.forEach(function(vt){return e(m,vt)}),V&&Ya(m,j),T}function S(m,f,p,b){if(p==null)throw Error(E(151));for(var T=null,R=null,A=f,j=f=0,C=null,N=p.next();A!==null&&!N.done;j++,N=p.next()){A.index>j?(C=A,A=null):C=A.sibling;var vt=h(m,A,N.value,b);if(vt===null){A===null&&(A=C);break}t&&A&&vt.alternate===null&&e(m,A),f=i(vt,f,j),R===null?T=vt:R.sibling=vt,R=vt,A=C}if(N.done)return a(m,A),V&&Ya(m,j),T;if(A===null){for(;!N.done;j++,N=p.next())N=y(m,N.value,b),N!==null&&(f=i(N,f,j),R===null?T=N:R.sibling=N,R=N);return V&&Ya(m,j),T}for(A=n(A);!N.done;j++,N=p.next())N=g(A,m,j,N.value,b),N!==null&&(t&&N.alternate!==null&&A.delete(N.key===null?j:N.key),f=i(N,f,j),R===null?T=N:R.sibling=N,R=N);return t&&A.forEach(function(le){return e(m,le)}),V&&Ya(m,j),T}function M(m,f,p,b){if(typeof p=="object"&&p!==null&&p.type===gn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:t:{for(var T=p.key;f!==null;){if(f.key===T){if(T=p.type,T===gn){if(f.tag===7){a(m,f.sibling),b=l(f,p.props.children),b.return=m,m=b;break t}}else if(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ca&&Sf(T)===f.type){a(m,f.sibling),b=l(f,p.props),pl(b,p),b.return=m,m=b;break t}a(m,f);break}else e(m,f);f=f.sibling}p.type===gn?(b=Qa(p.props.children,m.mode,b,p.key),b.return=m,m=b):(b=$i(p.type,p.key,p.props,null,m.mode,b),pl(b,p),b.return=m,m=b)}return r(m);case Sl:t:{for(T=p.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){a(m,f.sibling),b=l(f,p.children||[]),b.return=m,m=b;break t}else{a(m,f);break}else e(m,f);f=f.sibling}b=Ou(p,m.mode,b),b.return=m,m=b}return r(m);case ca:return T=p._init,p=T(p._payload),M(m,f,p,b)}if(wl(p))return x(m,f,p,b);if(fl(p)){if(T=fl(p),typeof T!="function")throw Error(E(150));return p=T.call(p),S(m,f,p,b)}if(typeof p.then=="function")return M(m,f,Ci(p),b);if(p.$$typeof===Xe)return M(m,f,_i(m,p),b);Ni(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,f!==null&&f.tag===6?(a(m,f.sibling),b=l(f,p),b.return=m,m=b):(a(m,f),b=ju(p,m.mode,b),b.return=m,m=b),r(m)):a(m,f)}return function(m,f,p,b){try{Kl=0;var T=M(m,f,p,b);return Hn=null,T}catch(A){if(A===mi||A===Pr)throw A;var R=Pt(29,A,null,m.mode);return R.lanes=b,R.return=m,R}finally{}}}var Qn=hh(!0),mh=hh(!1),he=Ce(null),De=null;function da(t){var e=t.alternate;ut(St,St.current&1),ut(he,t),De===null&&(e===null||kn.current!==null||e.memoizedState!==null)&&(De=t)}function ph(t){if(t.tag===22){if(ut(St,St.current),ut(he,t),De===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(De=t)}}else ha()}function ha(){ut(St,St.current),ut(he,he.current)}function $e(t){Mt(he),De===t&&(De=null),Mt(St)}var St=Ce(0);function Er(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Fo(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Cu(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:lt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uo={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=ee(),l=xa(n);l.payload=e,a!=null&&(l.callback=a),e=Sa(t,l,n),e!==null&&(ae(e,t,n),Dl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=ee(),l=xa(n);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=Sa(t,l,n),e!==null&&(ae(e,t,n),Dl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ee(),n=xa(a);n.tag=2,e!=null&&(n.callback=e),e=Sa(t,n,a),e!==null&&(ae(e,t,a),Dl(e,t,a))}};function wf(t,e,a,n,l,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,r):e.prototype&&e.prototype.isPureReactComponent?!Vl(a,n)||!Vl(l,i):!0}function Ef(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Uo.enqueueReplaceState(e,e.state,null)}function en(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=lt({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}var Ar=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gh(t){Ar(t)}function yh(t){console.error(t)}function vh(t){Ar(t)}function Tr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Af(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ho(t,e,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Tr(t,e)},a}function bh(t){return t=xa(t),t.tag=3,t}function xh(t,e,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){Af(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Af(e,a,n),typeof l!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function s1(t,e,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&di(e,a,l,!0),a=he.current,a!==null){switch(a.tag){case 13:return De===null?Qo():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Ro?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Qu(t,n,l)),!1;case 22:return a.flags|=65536,n===Ro?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Qu(t,n,l)),!1}throw Error(E(435,a.tag))}return Qu(t,n,l),Qo(),!1}if(V)return e=he.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,n!==Eo&&(t=Error(E(422),{cause:n}),Zl(fe(t,a)))):(n!==Eo&&(e=Error(E(423),{cause:n}),Zl(fe(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,n=fe(n,a),l=Ho(t.stateNode,n,l),_u(t,l),ft!==4&&(ft=2)),!1;var i=Error(E(520),{cause:n});if(i=fe(i,a),Ll===null?Ll=[i]:Ll.push(i),ft!==4&&(ft=2),e===null)return!0;n=fe(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Ho(a.stateNode,n,t),_u(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=bh(l),xh(l,t,a,n),_u(a,l),!1}a=a.return}while(a!==null);return!1}var Sh=Error(E(461)),zt=!1;function Rt(t,e,a,n){e.child=t===null?mh(e,null,a,n):Qn(e,t.child,a,n)}function Tf(t,e,a,n,l){a=a.render;var i=e.ref;if("ref"in n){var r={};for(var u in n)u!=="ref"&&(r[u]=n[u])}else r=n;return Ia(e),n=Yc(t,e,a,r,i,l),u=Gc(),t!==null&&!zt?(qc(t,e,l),ta(t,e,l)):(V&&u&&Dc(e),e.flags|=1,Rt(t,e,n,l),e.child)}function zf(t,e,a,n,l){if(t===null){var i=a.type;return typeof i=="function"&&!_c(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,wh(t,e,i,n,l)):(t=$i(a.type,null,n,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Wc(t,l)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:Vl,a(r,n)&&t.ref===e.ref)return ta(t,e,l)}return e.flags|=1,t=Ke(i,n),t.ref=e.ref,t.return=e,e.child=t}function wh(t,e,a,n,l){if(t!==null){var i=t.memoizedProps;if(Vl(i,n)&&t.ref===e.ref)if(zt=!1,e.pendingProps=n=i,Wc(t,l))t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,ta(t,e,l)}return Bo(t,e,a,n,l)}function Eh(t,e,a){var n=e.pendingProps,l=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if(e.flags&128){if(n=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;e.childLanes=i&~n}else e.childLanes=0,e.child=null;return Mf(t,e,n,a)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ki(e,i!==null?i.cachePool:null),i!==null?mf(e,i):_o(),ph(e);else return e.lanes=e.childLanes=536870912,Mf(t,e,i!==null?i.baseLanes|a:a,a)}else i!==null?(Ki(e,i.cachePool),mf(e,i),ha(),e.memoizedState=null):(t!==null&&Ki(e,null),_o(),ha());return Rt(t,e,l,a),e.child}function Mf(t,e,a,n){var l=Uc();return l=l===null?null:{parent:xt._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&Ki(e,null),_o(),ph(e),t!==null&&di(t,e,n,!0),null}function Fi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(E(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Bo(t,e,a,n,l){return Ia(e),a=Yc(t,e,a,n,void 0,l),n=Gc(),t!==null&&!zt?(qc(t,e,l),ta(t,e,l)):(V&&n&&Dc(e),e.flags|=1,Rt(t,e,a,l),e.child)}function Rf(t,e,a,n,l,i){return Ia(e),e.updateQueue=null,a=H0(e,n,a,l),U0(t),n=Gc(),t!==null&&!zt?(qc(t,e,i),ta(t,e,i)):(V&&n&&Dc(e),e.flags|=1,Rt(t,e,a,i),e.child)}function jf(t,e,a,n,l){if(Ia(e),e.stateNode===null){var i=An,r=a.contextType;typeof r=="object"&&r!==null&&(i=Ct(r)),i=new a(n,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Uo,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=n,i.state=e.memoizedState,i.refs={},Hc(e),r=a.contextType,i.context=typeof r=="object"&&r!==null?Ct(r):An,i.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Cu(e,a,r,n),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Uo.enqueueReplaceState(i,i.state,null),Nl(e,n,i,l),Cl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){i=e.stateNode;var u=e.memoizedProps,o=en(a,u);i.props=o;var c=i.context,d=a.contextType;r=An,typeof d=="object"&&d!==null&&(r=Ct(d));var y=a.getDerivedStateFromProps;d=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||c!==r)&&Ef(e,i,n,r),sa=!1;var h=e.memoizedState;i.state=h,Nl(e,n,i,l),Cl(),c=e.memoizedState,u||h!==c||sa?(typeof y=="function"&&(Cu(e,a,y,n),c=e.memoizedState),(o=sa||wf(e,a,o,n,h,c,r))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),i.props=n,i.state=c,i.context=r,n=o):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{i=e.stateNode,jo(t,e),r=e.memoizedProps,d=en(a,r),i.props=d,y=e.pendingProps,h=i.context,c=a.contextType,o=An,typeof c=="object"&&c!==null&&(o=Ct(c)),u=a.getDerivedStateFromProps,(c=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==y||h!==o)&&Ef(e,i,n,o),sa=!1,h=e.memoizedState,i.state=h,Nl(e,n,i,l),Cl();var g=e.memoizedState;r!==y||h!==g||sa||t!==null&&t.dependencies!==null&&vr(t.dependencies)?(typeof u=="function"&&(Cu(e,a,u,n),g=e.memoizedState),(d=sa||wf(e,a,d,n,h,g,o)||t!==null&&t.dependencies!==null&&vr(t.dependencies))?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=g),i.props=n,i.state=g,i.context=o,n=d):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),n=!1)}return i=n,Fi(t,e),n=(e.flags&128)!==0,i||n?(i=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&n?(e.child=Qn(e,t.child,null,l),e.child=Qn(e,null,a,l)):Rt(t,e,a,l),e.memoizedState=i.state,t=e.child):t=ta(t,e,l),t}function Of(t,e,a,n){return fi(),e.flags|=256,Rt(t,e,a,n),e.child}var Nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(t){return{baseLanes:t,cachePool:O0()}}function Hu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=de),t}function Ah(t,e,a){var n=e.pendingProps,l=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),r&&(l=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(V){if(l?da(e):ha(),V){var u=st,o;if(o=u){t:{for(o=u,u=Re;o.nodeType!==8;){if(!u){u=null;break t}if(o=ve(o.nextSibling),o===null){u=null;break t}}u=o}u!==null?(e.memoizedState={dehydrated:u,treeContext:Va!==null?{id:Qe,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},o=Pt(18,null,null,0),o.stateNode=u,o.return=e,e.child=o,Nt=e,st=null,o=!0):o=!1}o||Pa(e)}if(u=e.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return Fo(u)?e.lanes=32:e.lanes=536870912,null;$e(e)}return u=n.children,n=n.fallback,l?(ha(),l=e.mode,u=zr({mode:"hidden",children:u},l),n=Qa(n,l,a,null),u.return=e,n.return=e,u.sibling=n,e.child=u,l=e.child,l.memoizedState=Uu(a),l.childLanes=Hu(t,r,a),e.memoizedState=Nu,n):(da(e),Lo(e,u))}if(o=t.memoizedState,o!==null&&(u=o.dehydrated,u!==null)){if(i)e.flags&256?(da(e),e.flags&=-257,e=Bu(t,e,a)):e.memoizedState!==null?(ha(),e.child=t.child,e.flags|=128,e=null):(ha(),l=n.fallback,u=e.mode,n=zr({mode:"visible",children:n.children},u),l=Qa(l,u,a,null),l.flags|=2,n.return=e,l.return=e,n.sibling=l,e.child=n,Qn(e,t.child,null,a),n=e.child,n.memoizedState=Uu(a),n.childLanes=Hu(t,r,a),e.memoizedState=Nu,e=l);else if(da(e),Fo(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var c=r.dgst;r=c,n=Error(E(419)),n.stack="",n.digest=r,Zl({value:n,source:null,stack:null}),e=Bu(t,e,a)}else if(zt||di(t,e,a,!1),r=(a&t.childLanes)!==0,zt||r){if(r=et,r!==null&&(n=a&-a,n=n&42?1:xc(n),n=n&(r.suspendedLanes|a)?0:n,n!==0&&n!==o.retryLane))throw o.retryLane=n,nl(t,n),ae(r,t,n),Sh;u.data==="$?"||Qo(),e=Bu(t,e,a)}else u.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,st=ve(u.nextSibling),Nt=e,V=!0,Za=null,Re=!1,t!==null&&(oe[ce++]=Qe,oe[ce++]=Ve,oe[ce++]=Va,Qe=t.id,Ve=t.overflow,Va=e),e=Lo(e,n.children),e.flags|=4096);return e}return l?(ha(),l=n.fallback,u=e.mode,o=t.child,c=o.sibling,n=Ke(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,c!==null?l=Ke(c,l):(l=Qa(l,u,a,null),l.flags|=2),l.return=e,n.return=e,n.sibling=l,e.child=n,n=l,l=e.child,u=t.child.memoizedState,u===null?u=Uu(a):(o=u.cachePool,o!==null?(c=xt._currentValue,o=o.parent!==c?{parent:c,pool:c}:o):o=O0(),u={baseLanes:u.baseLanes|a,cachePool:o}),l.memoizedState=u,l.childLanes=Hu(t,r,a),e.memoizedState=Nu,n):(da(e),a=t.child,t=a.sibling,a=Ke(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function Lo(t,e){return e=zr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function zr(t,e){return t=Pt(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Bu(t,e,a){return Qn(e,t.child,null,a),t=Lo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _f(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),To(t.return,e,a)}function Lu(t,e,a,n,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l)}function Th(t,e,a){var n=e.pendingProps,l=n.revealOrder,i=n.tail;if(Rt(t,e,n.children,a),n=St.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_f(t,a,e);else if(t.tag===19)_f(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(ut(St,n),l){case"forwards":for(a=e.child,l=null;a!==null;)t=a.alternate,t!==null&&Er(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Lu(e,!1,l,a,i);break;case"backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Er(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Lu(e,!0,a,null,i);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ta(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ja|=e.lanes,!(a&e.childLanes))if(t!==null){if(di(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,a=Ke(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ke(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Wc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&vr(t)))}function f1(t,e,a){switch(e.tag){case 3:sr(e,e.stateNode.containerInfo),fa(e,xt,t.memoizedState.cache),fi();break;case 27:case 5:ho(e);break;case 4:sr(e,e.stateNode.containerInfo);break;case 10:fa(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(da(e),e.flags|=128,null):a&e.child.childLanes?Ah(t,e,a):(da(e),t=ta(t,e,a),t!==null?t.sibling:null);da(e);break;case 19:var l=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(di(t,e,a,!1),n=(a&e.childLanes)!==0),l){if(n)return Th(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ut(St,St.current),n)break;return null;case 22:case 23:return e.lanes=0,Eh(t,e,a);case 24:fa(e,xt,t.memoizedState.cache)}return ta(t,e,a)}function zh(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)zt=!0;else{if(!Wc(t,a)&&!(e.flags&128))return zt=!1,f1(t,e,a);zt=!!(t.flags&131072)}else zt=!1,V&&e.flags&1048576&&R0(e,yr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,l=n._init;if(n=l(n._payload),e.type=n,typeof n=="function")_c(n)?(t=en(n,t),e.tag=1,e=jf(null,e,n,t,a)):(e.tag=0,e=Bo(null,e,n,t,a));else{if(n!=null){if(l=n.$$typeof,l===yc){e.tag=11,e=Tf(null,e,n,t,a);break t}else if(l===vc){e.tag=14,e=zf(null,e,n,t,a);break t}}throw e=so(n)||n,Error(E(306,e,""))}}return e;case 0:return Bo(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,l=en(n,e.pendingProps),jf(t,e,n,l,a);case 3:t:{if(sr(e,e.stateNode.containerInfo),t===null)throw Error(E(387));n=e.pendingProps;var i=e.memoizedState;l=i.element,jo(t,e),Nl(e,n,null,a);var r=e.memoizedState;if(n=r.cache,fa(e,xt,n),n!==i.cache&&zo(e,[xt],a,!0),Cl(),n=r.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Of(t,e,n,a);break t}else if(n!==l){l=fe(Error(E(424)),e),Zl(l),e=Of(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(st=ve(t.firstChild),Nt=e,V=!0,Za=null,Re=!0,a=mh(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fi(),n===l){e=ta(t,e,a);break t}Rt(t,e,n,a)}e=e.child}return e;case 26:return Fi(t,e),t===null?(a=Kf(e.type,null,e.pendingProps,null))?e.memoizedState=a:V||(a=e.type,t=e.pendingProps,n=Cr(ba.current).createElement(a),n[Dt]=e,n[Vt]=t,Ot(n,a,t),Tt(n),e.stateNode=n):e.memoizedState=Kf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ho(e),t===null&&V&&(n=e.stateNode=dm(e.type,e.pendingProps,ba.current),Nt=e,Re=!0,l=st,_a(e.type)?(Po=l,st=ve(n.firstChild)):st=l),Rt(t,e,e.pendingProps.children,a),Fi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&V&&((l=n=st)&&(n=Y1(n,e.type,e.pendingProps,Re),n!==null?(e.stateNode=n,Nt=e,st=ve(n.firstChild),Re=!1,l=!0):l=!1),l||Pa(e)),ho(e),l=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,n=i.children,Jo(l,i)?n=null:r!==null&&Jo(l,r)&&(e.flags|=32),e.memoizedState!==null&&(l=Yc(t,e,n1,null,null,a),Pl._currentValue=l),Fi(t,e),Rt(t,e,n,a),e.child;case 6:return t===null&&V&&((t=a=st)&&(a=G1(a,e.pendingProps,Re),a!==null?(e.stateNode=a,Nt=e,st=null,t=!0):t=!1),t||Pa(e)),null;case 13:return Ah(t,e,a);case 4:return sr(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Qn(e,null,n,a):Rt(t,e,n,a),e.child;case 11:return Tf(t,e,e.type,e.pendingProps,a);case 7:return Rt(t,e,e.pendingProps,a),e.child;case 8:return Rt(t,e,e.pendingProps.children,a),e.child;case 12:return Rt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,fa(e,e.type,n.value),Rt(t,e,n.children,a),e.child;case 9:return l=e.type._context,n=e.pendingProps.children,Ia(e),l=Ct(l),n=n(l),e.flags|=1,Rt(t,e,n,a),e.child;case 14:return zf(t,e,e.type,e.pendingProps,a);case 15:return wh(t,e,e.type,e.pendingProps,a);case 19:return Th(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=zr(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Ke(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Eh(t,e,a);case 24:return Ia(e),n=Ct(xt),t===null?(l=Uc(),l===null&&(l=et,i=Nc(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),e.memoizedState={parent:n,cache:l},Hc(e),fa(e,xt,l)):(t.lanes&a&&(jo(t,e),Nl(e,null,null,a),Cl()),l=t.memoizedState,i=e.memoizedState,l.parent!==n?(l={parent:n,cache:n},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),fa(e,xt,n)):(n=i.cache,fa(e,xt,n),n!==l.cache&&zo(e,[xt],a,!0))),Rt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(E(156,e.tag))}function Ye(t){t.flags|=4}function Df(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!pm(e)){if(e=he.current,e!==null&&((Q&4194048)===Q?De!==null:(Q&62914560)!==Q&&!(Q&536870912)||e!==De))throw _l=Ro,_0;t.flags|=8192}}function Ui(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Pd():536870912,t.lanes|=e,Vn|=e)}function gl(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function d1(t,e,a){var n=e.pendingProps;switch(Cc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return ct(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Je(xt),Ln(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ml(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,of())),ct(e),null;case 26:return a=e.memoizedState,t===null?(Ye(e),a!==null?(ct(e),Df(e,a)):(ct(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Ye(e),ct(e),Df(e,a)):(ct(e),e.flags&=-16777217):(t.memoizedProps!==n&&Ye(e),ct(e),e.flags&=-16777217),null;case 27:fr(e),a=ba.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ye(e);else{if(!n){if(e.stateNode===null)throw Error(E(166));return ct(e),null}t=Oe.current,ml(e)?rf(e):(t=dm(l,n,a),e.stateNode=t,Ye(e))}return ct(e),null;case 5:if(fr(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ye(e);else{if(!n){if(e.stateNode===null)throw Error(E(166));return ct(e),null}if(t=Oe.current,ml(e))rf(e);else{switch(l=Cr(ba.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}t[Dt]=e,t[Vt]=n;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Ot(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ye(e)}}return ct(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Ye(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(E(166));if(t=ba.current,ml(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,l=Nt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}t[Dt]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||cm(t.nodeValue,a)),t||Pa(e)}else t=Cr(t).createTextNode(n),t[Dt]=e,e.stateNode=t}return ct(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ml(e),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(E(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[Dt]=e}else fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),l=!1}else l=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?($e(e),e):($e(e),null)}if($e(e),e.flags&128)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Ui(e,e.updateQueue),ct(e),null;case 4:return Ln(),t===null&&ls(e.stateNode.containerInfo),ct(e),null;case 10:return Je(e.type),ct(e),null;case 19:if(Mt(St),l=e.memoizedState,l===null)return ct(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)gl(l,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=Er(t),i!==null){for(e.flags|=128,gl(l,!1),t=i.updateQueue,e.updateQueue=t,Ui(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)M0(a,t),a=a.sibling;return ut(St,St.current&1|2),e.child}t=t.sibling}l.tail!==null&&_e()>Rr&&(e.flags|=128,n=!0,gl(l,!1),e.lanes=4194304)}else{if(!n)if(t=Er(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Ui(e,t),gl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!V)return ct(e),null}else 2*_e()-l.renderingStartTime>Rr&&a!==536870912&&(e.flags|=128,n=!0,gl(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=_e(),e.sibling=null,t=St.current,ut(St,n?t&1|2:t&1),e):(ct(e),null);case 22:case 23:return $e(e),Bc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?a&536870912&&!(e.flags&128)&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),a=e.updateQueue,a!==null&&Ui(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&Mt($a),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Je(xt),ct(e),null;case 25:return null;case 30:return null}throw Error(E(156,e.tag))}function h1(t,e){switch(Cc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Je(xt),Ln(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return fr(e),null;case 13:if($e(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(St),null;case 4:return Ln(),null;case 10:return Je(e.type),null;case 22:case 23:return $e(e),Bc(),t!==null&&Mt($a),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Je(xt),null;case 25:return null;default:return null}}function Mh(t,e){switch(Cc(e),e.tag){case 3:Je(xt),Ln();break;case 26:case 27:case 5:fr(e);break;case 4:Ln();break;case 13:$e(e);break;case 19:Mt(St);break;case 10:Je(e.type);break;case 22:case 23:$e(e),Bc(),t!==null&&Mt($a);break;case 24:Je(xt)}}function yi(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&t)===t){n=void 0;var i=a.create,r=a.inst;n=i(),r.destroy=n}a=a.next}while(a!==l)}}catch(u){tt(e,e.return,u)}}function Ra(t,e,a){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&t)===t){var r=n.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,l=e;var o=a,c=u;try{c()}catch(d){tt(l,o,d)}}}n=n.next}while(n!==i)}}catch(d){tt(e,e.return,d)}}function Rh(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{N0(e,a)}catch(n){tt(t,t.return,n)}}}function jh(t,e,a){a.props=en(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){tt(t,e,n)}}function Hl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(l){tt(t,e,l)}}function je(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){tt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){tt(t,e,l)}else a.current=null}function Oh(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){tt(t,t.return,l)}}function Yu(t,e,a){try{var n=t.stateNode;N1(n,t.type,a,e),n[Vt]=e}catch(l){tt(t,t.return,l)}}function _h(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&_a(t.type)||t.tag===4}function Gu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||_h(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&_a(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yo(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=iu));else if(n!==4&&(n===27&&_a(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Yo(t,e,a),t=t.sibling;t!==null;)Yo(t,e,a),t=t.sibling}function Mr(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&_a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Mr(t,e,a),t=t.sibling;t!==null;)Mr(t,e,a),t=t.sibling}function Dh(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Ot(e,n,a),e[Dt]=t,e[Vt]=a}catch(i){tt(t,t.return,i)}}var ke=!1,mt=!1,qu=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,Et=null;function m1(t,e){if(t=t.containerInfo,$o=Br,t=b0(t),Rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var r=0,u=-1,o=-1,c=0,d=0,y=t,h=null;e:for(;;){for(var g;y!==a||l!==0&&y.nodeType!==3||(u=r+l),y!==i||n!==0&&y.nodeType!==3||(o=r+n),y.nodeType===3&&(r+=y.nodeValue.length),(g=y.firstChild)!==null;)h=y,y=g;for(;;){if(y===t)break e;if(h===a&&++c===l&&(u=r),h===i&&++d===n&&(o=r),(g=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=g}a=u===-1||o===-1?null:{start:u,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ko={focusedElem:t,selectionRange:a},Br=!1,Et=e;Et!==null;)if(e=Et,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Et=t;else for(;Et!==null;){switch(e=Et,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,a=e,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var x=en(a.type,l,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(x,i),n.__reactInternalSnapshotBeforeUpdate=t}catch(S){tt(a,a.return,S)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Wo(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(E(163))}if(t=e.sibling,t!==null){t.return=e.return,Et=t;break}Et=e.return}}function Ch(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),n&4&&yi(5,a);break;case 1:if(ia(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){tt(a,a.return,r)}else{var l=en(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){tt(a,a.return,r)}}n&64&&Rh(a),n&512&&Hl(a,a.return);break;case 3:if(ia(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{N0(t,e)}catch(r){tt(a,a.return,r)}}break;case 27:e===null&&n&4&&Dh(a);case 26:case 5:ia(t,a),e===null&&n&4&&Oh(a),n&512&&Hl(a,a.return);break;case 12:ia(t,a);break;case 13:ia(t,a),n&4&&Hh(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=E1.bind(null,a),q1(t,a))));break;case 22:if(n=a.memoizedState!==null||ke,!n){e=e!==null&&e.memoizedState!==null||mt,l=ke;var i=mt;ke=n,(mt=e)&&!i?ua(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ke=l,mt=i}break;case 30:break;default:ia(t,a)}}function Nh(t){var e=t.alternate;e!==null&&(t.alternate=null,Nh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&wc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var it=null,kt=!1;function Ge(t,e,a){for(a=a.child;a!==null;)Uh(t,e,a),a=a.sibling}function Uh(t,e,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ri,a)}catch{}switch(a.tag){case 26:mt||je(a,e),Ge(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mt||je(a,e);var n=it,l=kt;_a(a.type)&&(it=a.stateNode,kt=!1),Ge(t,e,a),Gl(a.stateNode),it=n,kt=l;break;case 5:mt||je(a,e);case 6:if(n=it,l=kt,it=null,Ge(t,e,a),it=n,kt=l,it!==null)if(kt)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(a.stateNode)}catch(i){tt(a,e,i)}else try{it.removeChild(a.stateNode)}catch(i){tt(a,e,i)}break;case 18:it!==null&&(kt?(t=it,Vf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ei(t)):Vf(it,a.stateNode));break;case 4:n=it,l=kt,it=a.stateNode.containerInfo,kt=!0,Ge(t,e,a),it=n,kt=l;break;case 0:case 11:case 14:case 15:mt||Ra(2,a,e),mt||Ra(4,a,e),Ge(t,e,a);break;case 1:mt||(je(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&jh(a,e,n)),Ge(t,e,a);break;case 21:Ge(t,e,a);break;case 22:mt=(n=mt)||a.memoizedState!==null,Ge(t,e,a),mt=n;break;default:Ge(t,e,a)}}function Hh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ei(t)}catch(a){tt(e,e.return,a)}}function p1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Cf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Cf),e;default:throw Error(E(435,t.tag))}}function ku(t,e){var a=p1(t);e.forEach(function(n){var l=A1.bind(null,t,n);a.has(n)||(a.add(n),n.then(l,l))})}function Kt(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=t,r=e,u=r;t:for(;u!==null;){switch(u.tag){case 27:if(_a(u.type)){it=u.stateNode,kt=!1;break t}break;case 5:it=u.stateNode,kt=!1;break t;case 3:case 4:it=u.stateNode.containerInfo,kt=!0;break t}u=u.return}if(it===null)throw Error(E(160));Uh(i,r,l),it=null,kt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Bh(e,t),e=e.sibling}var ye=null;function Bh(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(e,t),Jt(t),n&4&&(Ra(3,t,t.return),yi(3,t),Ra(5,t,t.return));break;case 1:Kt(e,t),Jt(t),n&512&&(mt||a===null||je(a,a.return)),n&64&&ke&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=ye;if(Kt(e,t),Jt(t),n&512&&(mt||a===null||je(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,l=l.ownerDocument||l;e:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ci]||i[Dt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Ot(i,n,a),i[Dt]=t,Tt(i),n=i;break t;case"link":var r=Wf("link","href",l).get(n+(a.href||""));if(r){for(var u=0;u<r.length;u++)if(i=r[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(u,1);break e}}i=l.createElement(n),Ot(i,n,a),l.head.appendChild(i);break;case"meta":if(r=Wf("meta","content",l).get(n+(a.content||""))){for(u=0;u<r.length;u++)if(i=r[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(u,1);break e}}i=l.createElement(n),Ot(i,n,a),l.head.appendChild(i);break;default:throw Error(E(468,n))}i[Dt]=t,Tt(i),n=i}t.stateNode=n}else Ff(l,t.type,t.stateNode);else t.stateNode=Jf(l,n,t.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Ff(l,t.type,t.stateNode):Jf(l,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Yu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kt(e,t),Jt(t),n&512&&(mt||a===null||je(a,a.return)),a!==null&&n&4&&Yu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kt(e,t),Jt(t),n&512&&(mt||a===null||je(a,a.return)),t.flags&32){l=t.stateNode;try{Gn(l,"")}catch(g){tt(t,t.return,g)}}n&4&&t.stateNode!=null&&(l=t.memoizedProps,Yu(t,l,a!==null?a.memoizedProps:l)),n&1024&&(qu=!0);break;case 6:if(Kt(e,t),Jt(t),n&4){if(t.stateNode===null)throw Error(E(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(g){tt(t,t.return,g)}}break;case 3:if(tr=null,l=ye,ye=Nr(e.containerInfo),Kt(e,t),ye=l,Jt(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ei(e.containerInfo)}catch(g){tt(t,t.return,g)}qu&&(qu=!1,Lh(t));break;case 4:n=ye,ye=Nr(t.stateNode.containerInfo),Kt(e,t),Jt(t),ye=n;break;case 12:Kt(e,t),Jt(t);break;case 13:Kt(e,t),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(es=_e()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 22:l=t.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,c=ke,d=mt;if(ke=c||l,mt=d||o,Kt(e,t),mt=d,ke=c,Jt(t),n&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(a===null||o||ke||mt||Ga(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){o=a=e;try{if(i=o.stateNode,l)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=o.stateNode;var y=o.memoizedProps.style,h=y!=null&&y.hasOwnProperty("display")?y.display:null;u.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(g){tt(o,o.return,g)}}}else if(e.tag===6){if(a===null){o=e;try{o.stateNode.nodeValue=l?"":o.memoizedProps}catch(g){tt(o,o.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ku(t,a))));break;case 19:Kt(e,t),Jt(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 30:break;case 21:break;default:Kt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(_h(n)){a=n;break}n=n.return}if(a==null)throw Error(E(160));switch(a.tag){case 27:var l=a.stateNode,i=Gu(t);Mr(t,i,l);break;case 5:var r=a.stateNode;a.flags&32&&(Gn(r,""),a.flags&=-33);var u=Gu(t);Mr(t,u,r);break;case 3:case 4:var o=a.stateNode.containerInfo,c=Gu(t);Yo(t,c,o);break;default:throw Error(E(161))}}catch(d){tt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Lh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ia(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ch(t,e.alternate,e),e=e.sibling}function Ga(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ra(4,e,e.return),Ga(e);break;case 1:je(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&jh(e,e.return,a),Ga(e);break;case 27:Gl(e.stateNode);case 26:case 5:je(e,e.return),Ga(e);break;case 22:e.memoizedState===null&&Ga(e);break;case 30:Ga(e);break;default:Ga(e)}t=t.sibling}}function ua(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,l=t,i=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:ua(l,i,a),yi(4,i);break;case 1:if(ua(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(c){tt(n,n.return,c)}if(n=i,l=n.updateQueue,l!==null){var u=n.stateNode;try{var o=l.shared.hiddenCallbacks;if(o!==null)for(l.shared.hiddenCallbacks=null,l=0;l<o.length;l++)C0(o[l],u)}catch(c){tt(n,n.return,c)}}a&&r&64&&Rh(i),Hl(i,i.return);break;case 27:Dh(i);case 26:case 5:ua(l,i,a),a&&n===null&&r&4&&Oh(i),Hl(i,i.return);break;case 12:ua(l,i,a);break;case 13:ua(l,i,a),a&&r&4&&Hh(l,i);break;case 22:i.memoizedState===null&&ua(l,i,a),Hl(i,i.return);break;case 30:break;default:ua(l,i,a)}e=e.sibling}}function Fc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&hi(a))}function Pc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hi(t))}function ze(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yh(t,e,a,n),e=e.sibling}function Yh(t,e,a,n){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,a,n),l&2048&&yi(9,e);break;case 1:ze(t,e,a,n);break;case 3:ze(t,e,a,n),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hi(t)));break;case 12:if(l&2048){ze(t,e,a,n),t=e.stateNode;try{var i=e.memoizedProps,r=i.id,u=i.onPostCommit;typeof u=="function"&&u(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){tt(e,e.return,o)}}else ze(t,e,a,n);break;case 13:ze(t,e,a,n);break;case 23:break;case 22:i=e.stateNode,r=e.alternate,e.memoizedState!==null?i._visibility&2?ze(t,e,a,n):Bl(t,e):i._visibility&2?ze(t,e,a,n):(i._visibility|=2,mn(t,e,a,n,(e.subtreeFlags&10256)!==0)),l&2048&&Fc(r,e);break;case 24:ze(t,e,a,n),l&2048&&Pc(e.alternate,e);break;default:ze(t,e,a,n)}}function mn(t,e,a,n,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,r=e,u=a,o=n,c=r.flags;switch(r.tag){case 0:case 11:case 15:mn(i,r,u,o,l),yi(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?mn(i,r,u,o,l):Bl(i,r):(d._visibility|=2,mn(i,r,u,o,l)),l&&c&2048&&Fc(r.alternate,r);break;case 24:mn(i,r,u,o,l),l&&c&2048&&Pc(r.alternate,r);break;default:mn(i,r,u,o,l)}e=e.sibling}}function Bl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,l=n.flags;switch(n.tag){case 22:Bl(a,n),l&2048&&Fc(n.alternate,n);break;case 24:Bl(a,n),l&2048&&Pc(n.alternate,n);break;default:Bl(a,n)}e=e.sibling}}var Al=8192;function cn(t){if(t.subtreeFlags&Al)for(t=t.child;t!==null;)Gh(t),t=t.sibling}function Gh(t){switch(t.tag){case 26:cn(t),t.flags&Al&&t.memoizedState!==null&&ty(ye,t.memoizedState,t.memoizedProps);break;case 5:cn(t);break;case 3:case 4:var e=ye;ye=Nr(t.stateNode.containerInfo),cn(t),ye=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Al,Al=16777216,cn(t),Al=e):cn(t));break;default:cn(t)}}function qh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function yl(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Et=n,Xh(n,t)}qh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kh(t),t=t.sibling}function kh(t){switch(t.tag){case 0:case 11:case 15:yl(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:yl(t);break;case 12:yl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Pi(t)):yl(t);break;default:yl(t)}}function Pi(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Et=n,Xh(n,t)}qh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ra(8,e,e.return),Pi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Pi(e));break;default:Pi(e)}t=t.sibling}}function Xh(t,e){for(;Et!==null;){var a=Et;switch(a.tag){case 0:case 11:case 15:Ra(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:hi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Et=n;else t:for(a=t;Et!==null;){n=Et;var l=n.sibling,i=n.return;if(Nh(n),n===a){Et=null;break t}if(l!==null){l.return=i,Et=l;break t}Et=i}}}var g1={getCacheForType:function(t){var e=Ct(xt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},y1=typeof WeakMap=="function"?WeakMap:Map,W=0,et=null,X=null,Q=0,J=0,Ft=null,ya=!1,ll=!1,Ic=!1,ea=0,ft=0,ja=0,Ka=0,ts=0,de=0,Vn=0,Ll=null,Xt=null,Go=!1,es=0,Rr=1/0,jr=null,wa=null,jt=0,Ea=null,Zn=null,Bn=0,qo=0,ko=null,Qh=null,Yl=0,Xo=null;function ee(){if(W&2&&Q!==0)return Q&-Q;if(D.T!==null){var t=qn;return t!==0?t:ns()}return e0()}function Vh(){de===0&&(de=!(Q&536870912)||V?Fd():536870912);var t=he.current;return t!==null&&(t.flags|=32),de}function ae(t,e,a){(t===et&&(J===2||J===9)||t.cancelPendingCommit!==null)&&($n(t,0),va(t,Q,de,!1)),oi(t,a),(!(W&2)||t!==et)&&(t===et&&(!(W&2)&&(Ka|=a),ft===4&&va(t,Q,de,!1)),Ne(t))}function Zh(t,e,a){if(W&6)throw Error(E(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||ui(t,e),l=n?x1(t,e):Xu(t,e,!0),i=n;do{if(l===0){ll&&!n&&va(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!v1(a)){l=Xu(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var u=t;l=Ll;var o=u.current.memoizedState.isDehydrated;if(o&&($n(u,r).flags|=256),r=Xu(u,r,!1),r!==2){if(Ic&&!o){u.errorRecoveryDisabledLanes|=i,Ka|=i,l=4;break t}i=Xt,Xt=l,i!==null&&(Xt===null?Xt=i:Xt.push.apply(Xt,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){$n(t,0),va(t,e,0,!0);break}t:{switch(n=t,i=l,i){case 0:case 1:throw Error(E(345));case 4:if((e&4194048)!==e)break;case 6:va(n,e,de,!ya);break t;case 2:Xt=null;break;case 3:case 5:break;default:throw Error(E(329))}if((e&62914560)===e&&(l=es+300-_e(),10<l)){if(va(n,e,de,!ya),Zr(n,0,!0)!==0)break t;n.timeoutHandle=fm(Nf.bind(null,n,a,Xt,jr,Go,e,de,Ka,Vn,ya,i,2,-0,0),l);break t}Nf(n,a,Xt,jr,Go,e,de,Ka,Vn,ya,i,0,-0,0)}}break}while(!0);Ne(t)}function Nf(t,e,a,n,l,i,r,u,o,c,d,y,h,g){if(t.timeoutHandle=-1,y=e.subtreeFlags,(y&8192||(y&16785408)===16785408)&&(Fl={stylesheets:null,count:0,unsuspend:I1},Gh(e),y=ey(),y!==null)){t.cancelPendingCommit=y(Hf.bind(null,t,e,i,a,n,l,r,u,o,d,1,h,g)),va(t,i,r,!c);return}Hf(t,e,i,a,n,l,r,u,o)}function v1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!ne(i(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function va(t,e,a,n){e&=~ts,e&=~Ka,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var l=e;0<l;){var i=31-te(l),r=1<<i;n[i]=-1,l&=~r}a!==0&&Id(t,a,e)}function au(){return W&6?!0:(vi(0),!1)}function as(){if(X!==null){if(J===0)var t=X.return;else t=X,Ze=rn=null,kc(t),Hn=null,Kl=0,t=X;for(;t!==null;)Mh(t.alternate,t),t=t.return;X=null}}function $n(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,H1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),as(),et=t,X=a=Ke(t.current,null),Q=e,J=0,Ft=null,ya=!1,ll=ui(t,e),Ic=!1,Vn=de=ts=Ka=ja=ft=0,Xt=Ll=null,Go=!1,e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var l=31-te(n),i=1<<l;e|=t[l],n&=~i}return ea=e,Wr(),a}function $h(t,e){q=null,D.H=wr,e===mi||e===Pr?(e=df(),J=3):e===_0?(e=df(),J=4):J=e===Sh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ft=e,X===null&&(ft=1,Tr(t,fe(e,t.current)))}function Kh(){var t=D.H;return D.H=wr,t===null?wr:t}function Jh(){var t=D.A;return D.A=g1,t}function Qo(){ft=4,ya||(Q&4194048)!==Q&&he.current!==null||(ll=!0),!(ja&134217727)&&!(Ka&134217727)||et===null||va(et,Q,de,!1)}function Xu(t,e,a){var n=W;W|=2;var l=Kh(),i=Jh();(et!==t||Q!==e)&&(jr=null,$n(t,e)),e=!1;var r=ft;t:do try{if(J!==0&&X!==null){var u=X,o=Ft;switch(J){case 8:as(),r=6;break t;case 3:case 2:case 9:case 6:he.current===null&&(e=!0);var c=J;if(J=0,Ft=null,Mn(t,u,o,c),a&&ll){r=0;break t}break;default:c=J,J=0,Ft=null,Mn(t,u,o,c)}}b1(),r=ft;break}catch(d){$h(t,d)}while(!0);return e&&t.shellSuspendCounter++,Ze=rn=null,W=n,D.H=l,D.A=i,X===null&&(et=null,Q=0,Wr()),r}function b1(){for(;X!==null;)Wh(X)}function x1(t,e){var a=W;W|=2;var n=Kh(),l=Jh();et!==t||Q!==e?(jr=null,Rr=_e()+500,$n(t,e)):ll=ui(t,e);t:do try{if(J!==0&&X!==null){e=X;var i=Ft;e:switch(J){case 1:J=0,Ft=null,Mn(t,e,i,1);break;case 2:case 9:if(ff(i)){J=0,Ft=null,Uf(e);break}e=function(){J!==2&&J!==9||et!==t||(J=7),Ne(t)},i.then(e,e);break t;case 3:J=7;break t;case 4:J=5;break t;case 7:ff(i)?(J=0,Ft=null,Uf(e)):(J=0,Ft=null,Mn(t,e,i,7));break;case 5:var r=null;switch(X.tag){case 26:r=X.memoizedState;case 5:case 27:var u=X;if(!r||pm(r)){J=0,Ft=null;var o=u.sibling;if(o!==null)X=o;else{var c=u.return;c!==null?(X=c,nu(c)):X=null}break e}}J=0,Ft=null,Mn(t,e,i,5);break;case 6:J=0,Ft=null,Mn(t,e,i,6);break;case 8:as(),ft=6;break t;default:throw Error(E(462))}}S1();break}catch(d){$h(t,d)}while(!0);return Ze=rn=null,D.H=n,D.A=l,W=a,X!==null?0:(et=null,Q=0,Wr(),ft)}function S1(){for(;X!==null&&!Xp();)Wh(X)}function Wh(t){var e=zh(t.alternate,t,ea);t.memoizedProps=t.pendingProps,e===null?nu(t):X=e}function Uf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Rf(a,e,e.pendingProps,e.type,void 0,Q);break;case 11:e=Rf(a,e,e.pendingProps,e.type.render,e.ref,Q);break;case 5:kc(e);default:Mh(a,e),e=X=M0(e,ea),e=zh(a,e,ea)}t.memoizedProps=t.pendingProps,e===null?nu(t):X=e}function Mn(t,e,a,n){Ze=rn=null,kc(e),Hn=null,Kl=0;var l=e.return;try{if(s1(t,l,e,a,Q)){ft=1,Tr(t,fe(a,t.current)),X=null;return}}catch(i){if(l!==null)throw X=l,i;ft=1,Tr(t,fe(a,t.current)),X=null;return}e.flags&32768?(V||n===1?t=!0:ll||Q&536870912?t=!1:(ya=t=!0,(n===2||n===9||n===3||n===6)&&(n=he.current,n!==null&&n.tag===13&&(n.flags|=16384))),Fh(e,t)):nu(e)}function nu(t){var e=t;do{if(e.flags&32768){Fh(e,ya);return}t=e.return;var a=d1(e.alternate,e,ea);if(a!==null){X=a;return}if(e=e.sibling,e!==null){X=e;return}X=e=t}while(e!==null);ft===0&&(ft=5)}function Fh(t,e){do{var a=h1(t.alternate,t);if(a!==null){a.flags&=32767,X=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){X=t;return}X=t=a}while(t!==null);ft=6,X=null}function Hf(t,e,a,n,l,i,r,u,o){t.cancelPendingCommit=null;do lu();while(jt!==0);if(W&6)throw Error(E(327));if(e!==null){if(e===t.current)throw Error(E(177));if(i=e.lanes|e.childLanes,i|=jc,Ip(t,a,i,r,u,o),t===et&&(X=et=null,Q=0),Zn=e,Ea=t,Bn=a,qo=i,ko=l,Qh=n,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,T1(dr,function(){return am(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,e.subtreeFlags&13878||n){n=D.T,D.T=null,l=Z.p,Z.p=2,r=W,W|=4;try{m1(t,e,a)}finally{W=r,Z.p=l,D.T=n}}jt=1,Ph(),Ih(),tm()}}function Ph(){if(jt===1){jt=0;var t=Ea,e=Zn,a=(e.flags&13878)!==0;if(e.subtreeFlags&13878||a){a=D.T,D.T=null;var n=Z.p;Z.p=2;var l=W;W|=4;try{Bh(e,t);var i=Ko,r=b0(t.containerInfo),u=i.focusedElem,o=i.selectionRange;if(r!==u&&u&&u.ownerDocument&&v0(u.ownerDocument.documentElement,u)){if(o!==null&&Rc(u)){var c=o.start,d=o.end;if(d===void 0&&(d=c),"selectionStart"in u)u.selectionStart=c,u.selectionEnd=Math.min(d,u.value.length);else{var y=u.ownerDocument||document,h=y&&y.defaultView||window;if(h.getSelection){var g=h.getSelection(),x=u.textContent.length,S=Math.min(o.start,x),M=o.end===void 0?S:Math.min(o.end,x);!g.extend&&S>M&&(r=M,M=S,S=r);var m=af(u,S),f=af(u,M);if(m&&f&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var p=y.createRange();p.setStart(m.node,m.offset),g.removeAllRanges(),S>M?(g.addRange(p),g.extend(f.node,f.offset)):(p.setEnd(f.node,f.offset),g.addRange(p))}}}}for(y=[],g=u;g=g.parentNode;)g.nodeType===1&&y.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<y.length;u++){var b=y[u];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Br=!!$o,Ko=$o=null}finally{W=l,Z.p=n,D.T=a}}t.current=e,jt=2}}function Ih(){if(jt===2){jt=0;var t=Ea,e=Zn,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=D.T,D.T=null;var n=Z.p;Z.p=2;var l=W;W|=4;try{Ch(t,e.alternate,e)}finally{W=l,Z.p=n,D.T=a}}jt=3}}function tm(){if(jt===4||jt===3){jt=0,Qp();var t=Ea,e=Zn,a=Bn,n=Qh;e.subtreeFlags&10256||e.flags&10256?jt=5:(jt=0,Zn=Ea=null,em(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(wa=null),Sc(a),e=e.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=D.T,l=Z.p,Z.p=2,D.T=null;try{for(var i=t.onRecoverableError,r=0;r<n.length;r++){var u=n[r];i(u.value,{componentStack:u.stack})}}finally{D.T=e,Z.p=l}}Bn&3&&lu(),Ne(t),l=t.pendingLanes,a&4194090&&l&42?t===Xo?Yl++:(Yl=0,Xo=t):Yl=0,vi(0)}}function em(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,hi(e)))}function lu(t){return Ph(),Ih(),tm(),am()}function am(){if(jt!==5)return!1;var t=Ea,e=qo;qo=0;var a=Sc(Bn),n=D.T,l=Z.p;try{Z.p=32>a?32:a,D.T=null,a=ko,ko=null;var i=Ea,r=Bn;if(jt=0,Zn=Ea=null,Bn=0,W&6)throw Error(E(331));var u=W;if(W|=4,kh(i.current),Yh(i,i.current,r,a),W=u,vi(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ri,i)}catch{}return!0}finally{Z.p=l,D.T=n,em(t,e)}}function Bf(t,e,a){e=fe(a,e),e=Ho(t.stateNode,e,2),t=Sa(t,e,2),t!==null&&(oi(t,2),Ne(t))}function tt(t,e,a){if(t.tag===3)Bf(t,t,a);else for(;e!==null;){if(e.tag===3){Bf(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(wa===null||!wa.has(n))){t=fe(a,t),a=bh(2),n=Sa(e,a,2),n!==null&&(xh(a,n,e,t),oi(n,2),Ne(n));break}}e=e.return}}function Qu(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new y1;var l=new Set;n.set(e,l)}else l=n.get(e),l===void 0&&(l=new Set,n.set(e,l));l.has(a)||(Ic=!0,l.add(a),t=w1.bind(null,t,e,a),e.then(t,t))}function w1(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,et===t&&(Q&a)===a&&(ft===4||ft===3&&(Q&62914560)===Q&&300>_e()-es?!(W&2)&&$n(t,0):ts|=a,Vn===Q&&(Vn=0)),Ne(t)}function nm(t,e){e===0&&(e=Pd()),t=nl(t,e),t!==null&&(oi(t,e),Ne(t))}function E1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),nm(t,a)}function A1(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(E(314))}n!==null&&n.delete(e),nm(t,a)}function T1(t,e){return bc(t,e)}var Or=null,pn=null,Vo=!1,_r=!1,Vu=!1,Ja=0;function Ne(t){t!==pn&&t.next===null&&(pn===null?Or=pn=t:pn=pn.next=t),_r=!0,Vo||(Vo=!0,M1())}function vi(t,e){if(!Vu&&_r){Vu=!0;do for(var a=!1,n=Or;n!==null;){if(t!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var r=n.suspendedLanes,u=n.pingedLanes;i=(1<<31-te(42|t)+1)-1,i&=l&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Lf(n,i))}else i=Q,i=Zr(n,n===et?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(i&3)||ui(n,i)||(a=!0,Lf(n,i));n=n.next}while(a);Vu=!1}}function z1(){lm()}function lm(){_r=Vo=!1;var t=0;Ja!==0&&(U1()&&(t=Ja),Ja=0);for(var e=_e(),a=null,n=Or;n!==null;){var l=n.next,i=im(n,e);i===0?(n.next=null,a===null?Or=l:a.next=l,l===null&&(pn=a)):(a=n,(t!==0||i&3)&&(_r=!0)),n=l}vi(t)}function im(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-te(i),u=1<<r,o=l[r];o===-1?(!(u&a)||u&n)&&(l[r]=Pp(u,e)):o<=e&&(t.expiredLanes|=u),i&=~u}if(e=et,a=Q,a=Zr(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(J===2||J===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&yu(n),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||ui(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&yu(n),Sc(a)){case 2:case 8:a=Jd;break;case 32:a=dr;break;case 268435456:a=Wd;break;default:a=dr}return n=rm.bind(null,t),a=bc(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&yu(n),t.callbackPriority=2,t.callbackNode=null,2}function rm(t,e){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lu()&&t.callbackNode!==a)return null;var n=Q;return n=Zr(t,t===et?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Zh(t,n,e),im(t,_e()),t.callbackNode!=null&&t.callbackNode===a?rm.bind(null,t):null)}function Lf(t,e){if(lu())return null;Zh(t,e,!0)}function M1(){B1(function(){W&6?bc(Kd,z1):lm()})}function ns(){return Ja===0&&(Ja=Fd()),Ja}function Yf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qi(""+t)}function Gf(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function R1(t,e,a,n,l){if(e==="submit"&&a&&a.stateNode===l){var i=Yf((l[Vt]||null).action),r=n.submitter;r&&(e=(e=r[Vt]||null)?Yf(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var u=new $r("action","action",null,n,l);t.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ja!==0){var o=r?Gf(l,r):new FormData(l);No(a,{pending:!0,data:o,method:l.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=r?Gf(l,r):new FormData(l),No(a,{pending:!0,data:o,method:l.method,action:i},i,o))},currentTarget:l}]})}}for(var Zu=0;Zu<wo.length;Zu++){var $u=wo[Zu],j1=$u.toLowerCase(),O1=$u[0].toUpperCase()+$u.slice(1);Se(j1,"on"+O1)}Se(S0,"onAnimationEnd");Se(w0,"onAnimationIteration");Se(E0,"onAnimationStart");Se("dblclick","onDoubleClick");Se("focusin","onFocus");Se("focusout","onBlur");Se($g,"onTransitionRun");Se(Kg,"onTransitionStart");Se(Jg,"onTransitionCancel");Se(A0,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function um(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],l=n.event;n=n.listeners;t:{var i=void 0;if(e)for(var r=n.length-1;0<=r;r--){var u=n[r],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==i&&l.isPropagationStopped())break t;i=u,l.currentTarget=c;try{i(l)}catch(d){Ar(d)}l.currentTarget=null,i=o}else for(r=0;r<n.length;r++){if(u=n[r],o=u.instance,c=u.currentTarget,u=u.listener,o!==i&&l.isPropagationStopped())break t;i=u,l.currentTarget=c;try{i(l)}catch(d){Ar(d)}l.currentTarget=null,i=o}}}}function k(t,e){var a=e[po];a===void 0&&(a=e[po]=new Set);var n=t+"__bubble";a.has(n)||(om(e,t,2,!1),a.add(n))}function Ku(t,e,a){var n=0;e&&(n|=4),om(a,t,n,e)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function ls(t){if(!t[Hi]){t[Hi]=!0,a0.forEach(function(a){a!=="selectionchange"&&(_1.has(a)||Ku(a,!1,t),Ku(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hi]||(e[Hi]=!0,Ku("selectionchange",!1,e))}}function om(t,e,a,n){switch(xm(e)){case 2:var l=ly;break;case 8:l=iy;break;default:l=os}a=l.bind(null,e,a,t),l=void 0,!bo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),n?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function Ju(t,e,a,n,l){var i=n;if(!(e&1)&&!(e&2)&&n!==null)t:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var u=n.stateNode.containerInfo;if(u===l)break;if(r===4)for(r=n.return;r!==null;){var o=r.tag;if((o===3||o===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;u!==null;){if(r=vn(u),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){n=i=r;continue t}u=u.parentNode}}n=n.return}s0(function(){var c=i,d=Ac(a),y=[];t:{var h=T0.get(t);if(h!==void 0){var g=$r,x=t;switch(t){case"keypress":if(Zi(a)===0)break t;case"keydown":case"keyup":g=Tg;break;case"focusin":x="focus",g=Tu;break;case"focusout":x="blur",g=Tu;break;case"beforeblur":case"afterblur":g=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rg;break;case S0:case w0:case E0:g=gg;break;case A0:g=Og;break;case"scroll":case"scrollend":g=fg;break;case"wheel":g=Dg;break;case"copy":case"cut":case"paste":g=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ks;break;case"toggle":case"beforetoggle":g=Ng}var S=(e&4)!==0,M=!S&&(t==="scroll"||t==="scrollend"),m=S?h!==null?h+"Capture":null:h;S=[];for(var f=c,p;f!==null;){var b=f;if(p=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||p===null||m===null||(b=Xl(f,m),b!=null&&S.push(Wl(f,b,p))),M)break;f=f.return}0<S.length&&(h=new g(h,x,null,a,d),y.push({event:h,listeners:S}))}}if(!(e&7)){t:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&a!==vo&&(x=a.relatedTarget||a.fromElement)&&(vn(x)||x[el]))break t;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=a.relatedTarget||a.toElement,g=c,x=x?vn(x):null,x!==null&&(M=ii(x),S=x.tag,x!==M||S!==5&&S!==27&&S!==6)&&(x=null)):(g=null,x=c),g!==x)){if(S=Zs,b="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(S=Ks,b="onPointerLeave",m="onPointerEnter",f="pointer"),M=g==null?h:El(g),p=x==null?h:El(x),h=new S(b,f+"leave",g,a,d),h.target=M,h.relatedTarget=p,b=null,vn(d)===c&&(S=new S(m,f+"enter",x,a,d),S.target=p,S.relatedTarget=M,b=S),M=b,g&&x)e:{for(S=g,m=x,f=0,p=S;p;p=sn(p))f++;for(p=0,b=m;b;b=sn(b))p++;for(;0<f-p;)S=sn(S),f--;for(;0<p-f;)m=sn(m),p--;for(;f--;){if(S===m||m!==null&&S===m.alternate)break e;S=sn(S),m=sn(m)}S=null}else S=null;g!==null&&qf(y,h,g,S,!1),x!==null&&M!==null&&qf(y,M,x,S,!0)}}t:{if(h=c?El(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=Ps;else if(Fs(h))if(g0)T=Qg;else{T=kg;var R=qg}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Ec(c.elementType)&&(T=Ps):T=Xg;if(T&&(T=T(t,c))){p0(y,T,a,d);break t}R&&R(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&yo(h,"number",h.value)}switch(R=c?El(c):window,t){case"focusin":(Fs(R)||R.contentEditable==="true")&&(Sn=R,xo=c,jl=null);break;case"focusout":jl=xo=Sn=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,nf(y,a,d);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":nf(y,a,d)}var A;if(Mc)t:{switch(t){case"compositionstart":var j="onCompositionStart";break t;case"compositionend":j="onCompositionEnd";break t;case"compositionupdate":j="onCompositionUpdate";break t}j=void 0}else xn?h0(t,a)&&(j="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(j="onCompositionStart");j&&(d0&&a.locale!=="ko"&&(xn||j!=="onCompositionStart"?j==="onCompositionEnd"&&xn&&(A=f0()):(ga=d,Tc="value"in ga?ga.value:ga.textContent,xn=!0)),R=Dr(c,j),0<R.length&&(j=new $s(j,t,null,a,d),y.push({event:j,listeners:R}),A?j.data=A:(A=m0(a),A!==null&&(j.data=A)))),(A=Hg?Bg(t,a):Lg(t,a))&&(j=Dr(c,"onBeforeInput"),0<j.length&&(R=new $s("onBeforeInput","beforeinput",null,a,d),y.push({event:R,listeners:j}),R.data=A)),R1(y,t,c,a,d)}um(y,e)})}function Wl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Dr(t,e){for(var a=e+"Capture",n=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Xl(t,a),l!=null&&n.unshift(Wl(t,l,i)),l=Xl(t,e),l!=null&&n.push(Wl(t,l,i))),t.tag===3)return n;t=t.return}return[]}function sn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qf(t,e,a,n,l){for(var i=e._reactName,r=[];a!==null&&a!==n;){var u=a,o=u.alternate,c=u.stateNode;if(u=u.tag,o!==null&&o===n)break;u!==5&&u!==26&&u!==27||c===null||(o=c,l?(c=Xl(a,i),c!=null&&r.unshift(Wl(a,c,o))):l||(c=Xl(a,i),c!=null&&r.push(Wl(a,c,o)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var D1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function kf(t){return(typeof t=="string"?t:""+t).replace(D1,`
`).replace(C1,"")}function cm(t,e){return e=kf(e),kf(t)===e}function iu(){}function F(t,e,a,n,l,i){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Gn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Gn(t,""+n);break;case"className":ji(t,"class",n);break;case"tabIndex":ji(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ji(t,a,n);break;case"style":c0(t,n,i);break;case"data":if(e!=="object"){ji(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Qi(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&F(t,e,"name",l.name,l,null),F(t,e,"formEncType",l.formEncType,l,null),F(t,e,"formMethod",l.formMethod,l,null),F(t,e,"formTarget",l.formTarget,l,null)):(F(t,e,"encType",l.encType,l,null),F(t,e,"method",l.method,l,null),F(t,e,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Qi(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=iu);break;case"onScroll":n!=null&&k("scroll",t);break;case"onScrollEnd":n!=null&&k("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(E(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Qi(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":k("beforetoggle",t),k("toggle",t),Xi(t,"popover",n);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cg.get(a)||a,Xi(t,a,n))}}function Zo(t,e,a,n,l,i){switch(a){case"style":c0(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(E(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Gn(t,n):(typeof n=="number"||typeof n=="bigint")&&Gn(t,""+n);break;case"onScroll":n!=null&&k("scroll",t);break;case"onScrollEnd":n!=null&&k("scrollend",t);break;case"onClick":n!=null&&(t.onclick=iu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!n0.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),i=t[Vt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,l);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Xi(t,a,n)}}}function Ot(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",t),k("load",t);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:F(t,e,i,r,a,null)}}l&&F(t,e,"srcSet",a.srcSet,a,null),n&&F(t,e,"src",a.src,a,null);return;case"input":k("invalid",t);var u=i=r=l=null,o=null,c=null;for(n in a)if(a.hasOwnProperty(n)){var d=a[n];if(d!=null)switch(n){case"name":l=d;break;case"type":r=d;break;case"checked":o=d;break;case"defaultChecked":c=d;break;case"value":i=d;break;case"defaultValue":u=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(E(137,e));break;default:F(t,e,n,d,a,null)}}r0(t,i,u,o,c,r,l,!1),hr(t);return;case"select":k("invalid",t),n=r=i=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":n=u;default:F(t,e,l,u,a,null)}e=i,a=r,t.multiple=!!n,e!=null?_n(t,!!n,e,!1):a!=null&&_n(t,!!n,a,!0);return;case"textarea":k("invalid",t),i=l=n=null;for(r in a)if(a.hasOwnProperty(r)&&(u=a[r],u!=null))switch(r){case"value":n=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(E(91));break;default:F(t,e,r,u,a,null)}o0(t,n,l,i),hr(t);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(n=a[o],n!=null))switch(o){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:F(t,e,o,n,a,null)}return;case"dialog":k("beforetoggle",t),k("toggle",t),k("cancel",t),k("close",t);break;case"iframe":case"object":k("load",t);break;case"video":case"audio":for(n=0;n<Jl.length;n++)k(Jl[n],t);break;case"image":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"embed":case"source":case"link":k("error",t),k("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(n=a[c],n!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:F(t,e,c,n,a,null)}return;default:if(Ec(e)){for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!==void 0&&Zo(t,e,d,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&F(t,e,u,n,a,null))}function N1(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,u=null,o=null,c=null,d=null;for(g in a){var y=a[g];if(a.hasOwnProperty(g)&&y!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=y;default:n.hasOwnProperty(g)||F(t,e,g,null,n,y)}}for(var h in n){var g=n[h];if(y=a[h],n.hasOwnProperty(h)&&(g!=null||y!=null))switch(h){case"type":i=g;break;case"name":l=g;break;case"checked":c=g;break;case"defaultChecked":d=g;break;case"value":r=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(E(137,e));break;default:g!==y&&F(t,e,h,g,n,y)}}go(t,r,u,o,c,d,i,l);return;case"select":g=r=u=h=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":g=o;default:n.hasOwnProperty(i)||F(t,e,i,null,n,o)}for(l in n)if(i=n[l],o=a[l],n.hasOwnProperty(l)&&(i!=null||o!=null))switch(l){case"value":h=i;break;case"defaultValue":u=i;break;case"multiple":r=i;default:i!==o&&F(t,e,l,i,n,o)}e=u,a=r,n=g,h!=null?_n(t,!!a,h,!1):!!n!=!!a&&(e!=null?_n(t,!!a,e,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":g=h=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:F(t,e,u,null,n,l)}for(r in n)if(l=n[r],i=a[r],n.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":h=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(E(91));break;default:l!==i&&F(t,e,r,l,n,i)}u0(t,h,g);return;case"option":for(var x in a)if(h=a[x],a.hasOwnProperty(x)&&h!=null&&!n.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:F(t,e,x,null,n,h)}for(o in n)if(h=n[o],g=a[o],n.hasOwnProperty(o)&&h!==g&&(h!=null||g!=null))switch(o){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:F(t,e,o,h,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in a)h=a[S],a.hasOwnProperty(S)&&h!=null&&!n.hasOwnProperty(S)&&F(t,e,S,null,n,h);for(c in n)if(h=n[c],g=a[c],n.hasOwnProperty(c)&&h!==g&&(h!=null||g!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,e));break;default:F(t,e,c,h,n,g)}return;default:if(Ec(e)){for(var M in a)h=a[M],a.hasOwnProperty(M)&&h!==void 0&&!n.hasOwnProperty(M)&&Zo(t,e,M,void 0,n,h);for(d in n)h=n[d],g=a[d],!n.hasOwnProperty(d)||h===g||h===void 0&&g===void 0||Zo(t,e,d,h,n,g);return}}for(var m in a)h=a[m],a.hasOwnProperty(m)&&h!=null&&!n.hasOwnProperty(m)&&F(t,e,m,null,n,h);for(y in n)h=n[y],g=a[y],!n.hasOwnProperty(y)||h===g||h==null&&g==null||F(t,e,y,h,n,g)}var $o=null,Ko=null;function Cr(t){return t.nodeType===9?t:t.ownerDocument}function Xf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Jo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=null;function U1(){var t=window.event;return t&&t.type==="popstate"?t===Wu?!1:(Wu=t,!0):(Wu=null,!1)}var fm=typeof setTimeout=="function"?setTimeout:void 0,H1=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,B1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(t){return Qf.resolve(null).then(t).catch(L1)}:fm;function L1(t){setTimeout(function(){throw t})}function _a(t){return t==="head"}function Vf(t,e){var a=e,n=0,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<n&&8>n){a=n;var r=t.ownerDocument;if(a&1&&Gl(r.documentElement),a&2&&Gl(r.body),a&4)for(a=r.head,Gl(a),r=a.firstChild;r;){var u=r.nextSibling,o=r.nodeName;r[ci]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=u}}if(l===0){t.removeChild(i),ei(e);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=i}while(a);ei(e)}function Wo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wo(a),wc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Y1(t,e,a,n){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ci])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ve(t.nextSibling),t===null)break}return null}function G1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ve(t.nextSibling),t===null))return null;return t}function Fo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function q1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Po=null;function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function dm(t,e,a){switch(e=Cr(a),t){case"html":if(t=e.documentElement,!t)throw Error(E(452));return t;case"head":if(t=e.head,!t)throw Error(E(453));return t;case"body":if(t=e.body,!t)throw Error(E(454));return t;default:throw Error(E(451))}}function Gl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);wc(t)}var me=new Map,$f=new Set;function Nr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=Z.d;Z.d={f:k1,r:X1,D:Q1,C:V1,L:Z1,m:$1,X:J1,S:K1,M:W1};function k1(){var t=na.f(),e=au();return t||e}function X1(t){var e=al(t);e!==null&&e.tag===5&&e.type==="form"?ih(e):na.r(t)}var il=typeof document>"u"?null:document;function hm(t,e,a){var n=il;if(n&&typeof e=="string"&&e){var l=se(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),$f.has(l)||($f.add(l),t={rel:t,crossOrigin:a,href:e},n.querySelector(l)===null&&(e=n.createElement("link"),Ot(e,"link",t),Tt(e),n.head.appendChild(e)))}}function Q1(t){na.D(t),hm("dns-prefetch",t,null)}function V1(t,e){na.C(t,e),hm("preconnect",t,e)}function Z1(t,e,a){na.L(t,e,a);var n=il;if(n&&t&&e){var l='link[rel="preload"][as="'+se(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+se(a.imageSizes)+'"]')):l+='[href="'+se(t)+'"]';var i=l;switch(e){case"style":i=Kn(t);break;case"script":i=rl(t)}me.has(i)||(t=lt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),me.set(i,t),n.querySelector(l)!==null||e==="style"&&n.querySelector(bi(i))||e==="script"&&n.querySelector(xi(i))||(e=n.createElement("link"),Ot(e,"link",t),Tt(e),n.head.appendChild(e)))}}function $1(t,e){na.m(t,e);var a=il;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+se(n)+'"][href="'+se(t)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=rl(t)}if(!me.has(i)&&(t=lt({rel:"modulepreload",href:t},e),me.set(i,t),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xi(i)))return}n=a.createElement("link"),Ot(n,"link",t),Tt(n),a.head.appendChild(n)}}}function K1(t,e,a){na.S(t,e,a);var n=il;if(n&&t){var l=On(n).hoistableStyles,i=Kn(t);e=e||"default";var r=l.get(i);if(!r){var u={loading:0,preload:null};if(r=n.querySelector(bi(i)))u.loading=5;else{t=lt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=me.get(i))&&is(t,a);var o=r=n.createElement("link");Tt(o),Ot(o,"link",t),o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ii(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:u},l.set(i,r)}}}function J1(t,e){na.X(t,e);var a=il;if(a&&t){var n=On(a).hoistableScripts,l=rl(t),i=n.get(l);i||(i=a.querySelector(xi(l)),i||(t=lt({src:t,async:!0},e),(e=me.get(l))&&rs(t,e),i=a.createElement("script"),Tt(i),Ot(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function W1(t,e){na.M(t,e);var a=il;if(a&&t){var n=On(a).hoistableScripts,l=rl(t),i=n.get(l);i||(i=a.querySelector(xi(l)),i||(t=lt({src:t,async:!0,type:"module"},e),(e=me.get(l))&&rs(t,e),i=a.createElement("script"),Tt(i),Ot(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Kf(t,e,a,n){var l=(l=ba.current)?Nr(l):null;if(!l)throw Error(E(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Kn(a.href),a=On(l).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Kn(a.href);var i=On(l).hoistableStyles,r=i.get(t);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=l.querySelector(bi(t)))&&!i._p&&(r.instance=i,r.state.loading=5),me.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},me.set(t,a),i||F1(l,t,a,r.state))),e&&n===null)throw Error(E(528,""));return r}if(e&&n!==null)throw Error(E(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=rl(a),a=On(l).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,t))}}function Kn(t){return'href="'+se(t)+'"'}function bi(t){return'link[rel="stylesheet"]['+t+"]"}function mm(t){return lt({},t,{"data-precedence":t.precedence,precedence:null})}function F1(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Ot(e,"link",a),Tt(e),t.head.appendChild(e))}function rl(t){return'[src="'+se(t)+'"]'}function xi(t){return"script[async]"+t}function Jf(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(n)return e.instance=n,Tt(n),n;var l=lt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Tt(n),Ot(n,"style",l),Ii(n,a.precedence,t),e.instance=n;case"stylesheet":l=Kn(a.href);var i=t.querySelector(bi(l));if(i)return e.state.loading|=4,e.instance=i,Tt(i),i;n=mm(a),(l=me.get(l))&&is(n,l),i=(t.ownerDocument||t).createElement("link"),Tt(i);var r=i;return r._p=new Promise(function(u,o){r.onload=u,r.onerror=o}),Ot(i,"link",n),e.state.loading|=4,Ii(i,a.precedence,t),e.instance=i;case"script":return i=rl(a.src),(l=t.querySelector(xi(i)))?(e.instance=l,Tt(l),l):(n=a,(l=me.get(i))&&(n=lt({},a),rs(n,l)),t=t.ownerDocument||t,l=t.createElement("script"),Tt(l),Ot(l,"link",n),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(E(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(n=e.instance,e.state.loading|=4,Ii(n,a.precedence,t));return e.instance}function Ii(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,r=0;r<n.length;r++){var u=n[r];if(u.dataset.precedence===e)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function is(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function rs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var tr=null;function Wf(t,e,a){if(tr===null){var n=new Map,l=tr=new Map;l.set(a,n)}else l=tr,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var i=a[l];if(!(i[ci]||i[Dt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var u=n.get(r);u?u.push(i):n.set(r,[i])}}return n}function Ff(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function P1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function pm(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Fl=null;function I1(){}function ty(t,e,a){if(Fl===null)throw Error(E(475));var n=Fl;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=Kn(a.href),i=t.querySelector(bi(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Ur.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=i,Tt(i);return}i=t.ownerDocument||t,a=mm(a),(l=me.get(l))&&is(a,l),i=i.createElement("link"),Tt(i);var r=i;r._p=new Promise(function(u,o){r.onload=u,r.onerror=o}),Ot(i,"link",a),e.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(n.count++,e=Ur.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function ey(){if(Fl===null)throw Error(E(475));var t=Fl;return t.stylesheets&&t.count===0&&Io(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Io(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ur(){if(this.count--,this.count===0){if(this.stylesheets)Io(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hr=null;function Io(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hr=new Map,e.forEach(ay,t),Hr=null,Ur.call(t))}function ay(t,e){if(!(e.state.loading&4)){var a=Hr.get(t);if(a)var n=a.get(null);else{a=new Map,Hr.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}l=e.instance,r=l.getAttribute("data-precedence"),i=a.get(r)||n,i===n&&a.set(null,l),a.set(r,l),this.count++,n=Ur.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Pl={$$typeof:Xe,Provider:null,Consumer:null,_currentValue:Xa,_currentValue2:Xa,_threadCount:0};function ny(t,e,a,n,l,i,r,u){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function gm(t,e,a,n,l,i,r,u,o,c,d,y){return t=new ny(t,e,a,r,u,o,c,y),e=1,i===!0&&(e|=24),i=Pt(3,null,null,e),t.current=i,i.stateNode=t,e=Nc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:e},Hc(i),t}function ym(t){return t?(t=An,t):An}function vm(t,e,a,n,l,i){l=ym(l),n.context===null?n.context=l:n.pendingContext=l,n=xa(e),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=Sa(t,n,e),a!==null&&(ae(a,t,e),Dl(a,t,e))}function Pf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function us(t,e){Pf(t,e),(t=t.alternate)&&Pf(t,e)}function bm(t){if(t.tag===13){var e=nl(t,67108864);e!==null&&ae(e,t,67108864),us(t,67108864)}}var Br=!0;function ly(t,e,a,n){var l=D.T;D.T=null;var i=Z.p;try{Z.p=2,os(t,e,a,n)}finally{Z.p=i,D.T=l}}function iy(t,e,a,n){var l=D.T;D.T=null;var i=Z.p;try{Z.p=8,os(t,e,a,n)}finally{Z.p=i,D.T=l}}function os(t,e,a,n){if(Br){var l=tc(n);if(l===null)Ju(t,e,n,Lr,a),If(t,n);else if(uy(l,t,e,a,n))n.stopPropagation();else if(If(t,n),e&4&&-1<ry.indexOf(t)){for(;l!==null;){var i=al(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=La(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var o=1<<31-te(r);u.entanglements[1]|=o,r&=~o}Ne(i),!(W&6)&&(Rr=_e()+500,vi(0))}}break;case 13:u=nl(i,2),u!==null&&ae(u,i,2),au(),us(i,2)}if(i=tc(n),i===null&&Ju(t,e,n,Lr,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Ju(t,e,n,null,a)}}function tc(t){return t=Ac(t),cs(t)}var Lr=null;function cs(t){if(Lr=null,t=vn(t),t!==null){var e=ii(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Qd(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Lr=t,null}function xm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vp()){case Kd:return 2;case Jd:return 8;case dr:case Zp:return 32;case Wd:return 268435456;default:return 32}default:return 32}}var ec=!1,Aa=null,Ta=null,za=null,Il=new Map,ti=new Map,ma=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function If(t,e){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function vl(t,e,a,n,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},e!==null&&(e=al(e),e!==null&&bm(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function uy(t,e,a,n,l){switch(e){case"focusin":return Aa=vl(Aa,t,e,a,n,l),!0;case"dragenter":return Ta=vl(Ta,t,e,a,n,l),!0;case"mouseover":return za=vl(za,t,e,a,n,l),!0;case"pointerover":var i=l.pointerId;return Il.set(i,vl(Il.get(i)||null,t,e,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,ti.set(i,vl(ti.get(i)||null,t,e,a,n,l)),!0}return!1}function Sm(t){var e=vn(t.target);if(e!==null){var a=ii(e);if(a!==null){if(e=a.tag,e===13){if(e=Qd(a),e!==null){t.blockedOn=e,tg(t.priority,function(){if(a.tag===13){var n=ee();n=xc(n);var l=nl(a,n);l!==null&&ae(l,a,n),us(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function er(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=tc(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);vo=n,a.target.dispatchEvent(n),vo=null}else return e=al(a),e!==null&&bm(e),t.blockedOn=a,!1;e.shift()}return!0}function td(t,e,a){er(t)&&a.delete(e)}function oy(){ec=!1,Aa!==null&&er(Aa)&&(Aa=null),Ta!==null&&er(Ta)&&(Ta=null),za!==null&&er(za)&&(za=null),Il.forEach(td),ti.forEach(td)}function Bi(t,e){t.blockedOn===e&&(t.blockedOn=null,ec||(ec=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,oy)))}var Li=null;function ed(t){Li!==t&&(Li=t,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,function(){Li===t&&(Li=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],l=t[e+2];if(typeof n!="function"){if(cs(n||a)===null)continue;break}var i=al(a);i!==null&&(t.splice(e,3),e-=3,No(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function ei(t){function e(o){return Bi(o,t)}Aa!==null&&Bi(Aa,t),Ta!==null&&Bi(Ta,t),za!==null&&Bi(za,t),Il.forEach(e),ti.forEach(e);for(var a=0;a<ma.length;a++){var n=ma[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<ma.length&&(a=ma[0],a.blockedOn===null);)Sm(a),a.blockedOn===null&&ma.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],r=l[Vt]||null;if(typeof i=="function")r||ed(a);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[Vt]||null)u=r.formAction;else if(cs(l)!==null)continue}else u=r.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),ed(a)}}}function ss(t){this._internalRoot=t}ru.prototype.render=ss.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));var a=e.current,n=ee();vm(a,n,t,e,null,null)};ru.prototype.unmount=ss.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vm(t.current,2,null,t,null,null),au(),e[el]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=e0();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ma.length&&e!==0&&e<ma[a].priority;a++);ma.splice(a,0,t),a===0&&Sm(t)}};var ad=kd.version;if(ad!=="19.1.1")throw Error(E(527,ad,"19.1.1"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Lp(e),t=t!==null?Vd(t):null,t=t===null?null:t.stateNode,t};var cy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{ri=Yi.inject(cy),It=Yi}catch{}}Qr.createRoot=function(t,e){if(!Xd(t))throw Error(E(299));var a=!1,n="",l=gh,i=yh,r=vh,u=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(u=e.unstable_transitionCallbacks)),e=gm(t,1,!1,null,null,a,n,l,i,r,u,null),t[el]=e.current,ls(t),new ss(e)};Qr.hydrateRoot=function(t,e,a){if(!Xd(t))throw Error(E(299));var n=!1,l="",i=gh,r=yh,u=vh,o=null,c=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(o=a.unstable_transitionCallbacks),a.formState!==void 0&&(c=a.formState)),e=gm(t,1,!0,e,a??null,n,l,i,r,u,o,c),e.context=ym(null),a=e.current,n=ee(),n=xc(n),l=xa(n),l.callback=null,Sa(a,l,n),a=n,e.current.lanes=a,oi(e,a),Ne(e),t[el]=e.current,ls(t),new ru(e)};Qr.version="19.1.1";function wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wm)}catch(t){console.error(t)}}wm(),Hd.exports=Qr;var sy=Hd.exports;const fy=zd(sy);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nd="popstate";function dy(t={}){function e(n,l){let{pathname:i,search:r,hash:u}=n.location;return ac("",{pathname:i,search:r,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function a(n,l){return typeof l=="string"?l:ai(l)}return my(e,a,null,t)}function ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xe(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hy(){return Math.random().toString(36).substring(2,10)}function ld(t,e){return{usr:t.state,key:t.key,idx:e}}function ac(t,e,a=null,n){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ul(e):e,state:a,key:e&&e.key||n||hy()}}function ai({pathname:t="/",search:e="",hash:a=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function ul(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substring(a),t=t.substring(0,a));let n=t.indexOf("?");n>=0&&(e.search=t.substring(n),t=t.substring(0,n)),t&&(e.pathname=t)}return e}function my(t,e,a,n={}){let{window:l=document.defaultView,v5Compat:i=!1}=n,r=l.history,u="POP",o=null,c=d();c==null&&(c=0,r.replaceState({...r.state,idx:c},""));function d(){return(r.state||{idx:null}).idx}function y(){u="POP";let M=d(),m=M==null?null:M-c;c=M,o&&o({action:u,location:S.location,delta:m})}function h(M,m){u="PUSH";let f=ac(S.location,M,m);c=d()+1;let p=ld(f,c),b=S.createHref(f);try{r.pushState(p,"",b)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;l.location.assign(b)}i&&o&&o({action:u,location:S.location,delta:1})}function g(M,m){u="REPLACE";let f=ac(S.location,M,m);c=d();let p=ld(f,c),b=S.createHref(f);r.replaceState(p,"",b),i&&o&&o({action:u,location:S.location,delta:0})}function x(M){return py(M)}let S={get action(){return u},get location(){return t(l,r)},listen(M){if(o)throw new Error("A history only accepts one active listener");return l.addEventListener(nd,y),o=M,()=>{l.removeEventListener(nd,y),o=null}},createHref(M){return e(l,M)},createURL:x,encodeLocation(M){let m=x(M);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(M){return r.go(M)}};return S}function py(t,e=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),ot(a,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:ai(t);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=a+n),new URL(n,a)}function Em(t,e,a="/"){return gy(t,e,a,!1)}function gy(t,e,a,n){let l=typeof e=="string"?ul(e):e,i=aa(l.pathname||"/",a);if(i==null)return null;let r=Am(t);yy(r);let u=null;for(let o=0;u==null&&o<r.length;++o){let c=Ry(i);u=zy(r[o],c,n)}return u}function Am(t,e=[],a=[],n="",l=!1){let i=(r,u,o=l,c)=>{let d={relativePath:c===void 0?r.path||"":c,caseSensitive:r.caseSensitive===!0,childrenIndex:u,route:r};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&o)return;ot(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let y=We([n,d.relativePath]),h=a.concat(d);r.children&&r.children.length>0&&(ot(r.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Am(r.children,e,h,y,o)),!(r.path==null&&!r.index)&&e.push({path:y,score:Ay(y,r.index),routesMeta:h})};return t.forEach((r,u)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))i(r,u);else for(let c of Tm(r.path))i(r,u,!0,c)}),e}function Tm(t){let e=t.split("/");if(e.length===0)return[];let[a,...n]=e,l=a.endsWith("?"),i=a.replace(/\?$/,"");if(n.length===0)return l?[i,""]:[i];let r=Tm(n.join("/")),u=[];return u.push(...r.map(o=>o===""?i:[i,o].join("/"))),l&&u.push(...r),u.map(o=>t.startsWith("/")&&o===""?"/":o)}function yy(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:Ty(e.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}var vy=/^:[\w-]+$/,by=3,xy=2,Sy=1,wy=10,Ey=-2,id=t=>t==="*";function Ay(t,e){let a=t.split("/"),n=a.length;return a.some(id)&&(n+=Ey),e&&(n+=xy),a.filter(l=>!id(l)).reduce((l,i)=>l+(vy.test(i)?by:i===""?Sy:wy),n)}function Ty(t,e){return t.length===e.length&&t.slice(0,-1).every((n,l)=>n===e[l])?t[t.length-1]-e[e.length-1]:0}function zy(t,e,a=!1){let{routesMeta:n}=t,l={},i="/",r=[];for(let u=0;u<n.length;++u){let o=n[u],c=u===n.length-1,d=i==="/"?e:e.slice(i.length)||"/",y=Yr({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},d),h=o.route;if(!y&&c&&a&&!n[n.length-1].route.index&&(y=Yr({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},d)),!y)return null;Object.assign(l,y.params),r.push({params:l,pathname:We([i,y.pathname]),pathnameBase:Dy(We([i,y.pathnameBase])),route:h}),y.pathnameBase!=="/"&&(i=We([i,y.pathnameBase]))}return r}function Yr(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,n]=My(t.path,t.caseSensitive,t.end),l=e.match(a);if(!l)return null;let i=l[0],r=i.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:n.reduce((c,{paramName:d,isOptional:y},h)=>{if(d==="*"){let x=u[h]||"";r=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const g=u[h];return y&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:r,pattern:t}}function My(t,e=!1,a=!0){xe(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let n=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,u,o)=>(n.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(n.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),n]}function Ry(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xe(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function aa(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,n=t.charAt(a);return n&&n!=="/"?null:t.slice(a)||"/"}function jy(t,e="/"){let{pathname:a,search:n="",hash:l=""}=typeof t=="string"?ul(t):t;return{pathname:a?a.startsWith("/")?a:Oy(a,e):e,search:Cy(n),hash:Ny(l)}}function Oy(t,e){let a=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?a.length>1&&a.pop():l!=="."&&a.push(l)}),a.length>1?a.join("/"):"/"}function Fu(t,e,a,n){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _y(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function fs(t){let e=_y(t);return e.map((a,n)=>n===e.length-1?a.pathname:a.pathnameBase)}function ds(t,e,a,n=!1){let l;typeof t=="string"?l=ul(t):(l={...t},ot(!l.pathname||!l.pathname.includes("?"),Fu("?","pathname","search",l)),ot(!l.pathname||!l.pathname.includes("#"),Fu("#","pathname","hash",l)),ot(!l.search||!l.search.includes("#"),Fu("#","search","hash",l)));let i=t===""||l.pathname==="",r=i?"/":l.pathname,u;if(r==null)u=a;else{let y=e.length-1;if(!n&&r.startsWith("..")){let h=r.split("/");for(;h[0]==="..";)h.shift(),y-=1;l.pathname=h.join("/")}u=y>=0?e[y]:"/"}let o=jy(l,u),c=r&&r!=="/"&&r.endsWith("/"),d=(i||r===".")&&a.endsWith("/");return!o.pathname.endsWith("/")&&(c||d)&&(o.pathname+="/"),o}var We=t=>t.join("/").replace(/\/\/+/g,"/"),Dy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Cy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ny=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Uy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var zm=["POST","PUT","PATCH","DELETE"];new Set(zm);var Hy=["GET",...zm];new Set(Hy);var ol=v.createContext(null);ol.displayName="DataRouter";var uu=v.createContext(null);uu.displayName="DataRouterState";v.createContext(!1);var Mm=v.createContext({isTransitioning:!1});Mm.displayName="ViewTransition";var By=v.createContext(new Map);By.displayName="Fetchers";var Ly=v.createContext(null);Ly.displayName="Await";var we=v.createContext(null);we.displayName="Navigation";var Si=v.createContext(null);Si.displayName="Location";var Ee=v.createContext({outlet:null,matches:[],isDataRoute:!1});Ee.displayName="Route";var hs=v.createContext(null);hs.displayName="RouteError";function Yy(t,{relative:e}={}){ot(cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:n}=v.useContext(we),{hash:l,pathname:i,search:r}=Ei(t,{relative:e}),u=i;return a!=="/"&&(u=i==="/"?a:We([a,i])),n.createHref({pathname:u,search:r,hash:l})}function cl(){return v.useContext(Si)!=null}function Da(){return ot(cl(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Si).location}var Rm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jm(t){v.useContext(we).static||v.useLayoutEffect(t)}function wi(){let{isDataRoute:t}=v.useContext(Ee);return t?Iy():Gy()}function Gy(){ot(cl(),"useNavigate() may be used only in the context of a <Router> component.");let t=v.useContext(ol),{basename:e,navigator:a}=v.useContext(we),{matches:n}=v.useContext(Ee),{pathname:l}=Da(),i=JSON.stringify(fs(n)),r=v.useRef(!1);return jm(()=>{r.current=!0}),v.useCallback((o,c={})=>{if(xe(r.current,Rm),!r.current)return;if(typeof o=="number"){a.go(o);return}let d=ds(o,JSON.parse(i),l,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:We([e,d.pathname])),(c.replace?a.replace:a.push)(d,c.state,c)},[e,a,i,l,t])}v.createContext(null);function qy(){let{matches:t}=v.useContext(Ee),e=t[t.length-1];return e?e.params:{}}function Ei(t,{relative:e}={}){let{matches:a}=v.useContext(Ee),{pathname:n}=Da(),l=JSON.stringify(fs(a));return v.useMemo(()=>ds(t,JSON.parse(l),n,e==="path"),[t,l,n,e])}function ky(t,e){return Om(t,e)}function Om(t,e,a,n,l){var f;ot(cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=v.useContext(we),{matches:r}=v.useContext(Ee),u=r[r.length-1],o=u?u.params:{},c=u?u.pathname:"/",d=u?u.pathnameBase:"/",y=u&&u.route;{let p=y&&y.path||"";_m(c,!y||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let h=Da(),g;if(e){let p=typeof e=="string"?ul(e):e;ot(d==="/"||((f=p.pathname)==null?void 0:f.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${p.pathname}" was given in the \`location\` prop.`),g=p}else g=h;let x=g.pathname||"/",S=x;if(d!=="/"){let p=d.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(p.length).join("/")}let M=Em(t,{pathname:S});xe(y||M!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),xe(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=$y(M&&M.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:We([d,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?d:We([d,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),r,a,n,l);return e&&m?v.createElement(Si.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},m):m}function Xy(){let t=Py(),e=Uy(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},r=null;return console.error("Error handled by React Router default ErrorBoundary:",t),r=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:i},"ErrorBoundary")," or"," ",v.createElement("code",{style:i},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},e),a?v.createElement("pre",{style:l},a):null,r)}var Qy=v.createElement(Xy,null),Vy=class extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?v.createElement(Ee.Provider,{value:this.props.routeContext},v.createElement(hs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zy({routeContext:t,match:e,children:a}){let n=v.useContext(ol);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),v.createElement(Ee.Provider,{value:t},a)}function $y(t,e=[],a=null,n=null,l=null){if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let i=t,r=a==null?void 0:a.errors;if(r!=null){let c=i.findIndex(d=>d.route.id&&(r==null?void 0:r[d.route.id])!==void 0);ot(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let u=!1,o=-1;if(a)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=c),d.route.id){let{loaderData:y,errors:h}=a,g=d.route.loader&&!y.hasOwnProperty(d.route.id)&&(!h||h[d.route.id]===void 0);if(d.route.lazy||g){u=!0,o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}return i.reduceRight((c,d,y)=>{let h,g=!1,x=null,S=null;a&&(h=r&&d.route.id?r[d.route.id]:void 0,x=d.route.errorElement||Qy,u&&(o<0&&y===0?(_m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,S=null):o===y&&(g=!0,S=d.route.hydrateFallbackElement||null)));let M=e.concat(i.slice(0,y+1)),m=()=>{let f;return h?f=x:g?f=S:d.route.Component?f=v.createElement(d.route.Component,null):d.route.element?f=d.route.element:f=c,v.createElement(Zy,{match:d,routeContext:{outlet:c,matches:M,isDataRoute:a!=null},children:f})};return a&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?v.createElement(Vy,{location:a.location,revalidation:a.revalidation,component:x,error:h,children:m(),routeContext:{outlet:null,matches:M,isDataRoute:!0},unstable_onError:n}):m()},null)}function ms(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ky(t){let e=v.useContext(ol);return ot(e,ms(t)),e}function Jy(t){let e=v.useContext(uu);return ot(e,ms(t)),e}function Wy(t){let e=v.useContext(Ee);return ot(e,ms(t)),e}function ps(t){let e=Wy(t),a=e.matches[e.matches.length-1];return ot(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function Fy(){return ps("useRouteId")}function Py(){var n;let t=v.useContext(hs),e=Jy("useRouteError"),a=ps("useRouteError");return t!==void 0?t:(n=e.errors)==null?void 0:n[a]}function Iy(){let{router:t}=Ky("useNavigate"),e=ps("useNavigate"),a=v.useRef(!1);return jm(()=>{a.current=!0}),v.useCallback(async(l,i={})=>{xe(a.current,Rm),a.current&&(typeof l=="number"?t.navigate(l):await t.navigate(l,{fromRouteId:e,...i}))},[t,e])}var rd={};function _m(t,e,a){!e&&!rd[t]&&(rd[t]=!0,xe(!1,a))}v.memo(tv);function tv({routes:t,future:e,state:a,unstable_onError:n}){return Om(t,void 0,a,n,e)}function Dm({to:t,replace:e,state:a,relative:n}){ot(cl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=v.useContext(we);xe(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=v.useContext(Ee),{pathname:r}=Da(),u=wi(),o=ds(t,fs(i),r,n==="path"),c=JSON.stringify(o);return v.useEffect(()=>{u(JSON.parse(c),{replace:e,state:a,relative:n})},[u,c,n,e,a]),null}function qa(t){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ev({basename:t="/",children:e=null,location:a,navigationType:n="POP",navigator:l,static:i=!1}){ot(!cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let r=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:r,navigator:l,static:i,future:{}}),[r,l,i]);typeof a=="string"&&(a=ul(a));let{pathname:o="/",search:c="",hash:d="",state:y=null,key:h="default"}=a,g=v.useMemo(()=>{let x=aa(o,r);return x==null?null:{location:{pathname:x,search:c,hash:d,state:y,key:h},navigationType:n}},[r,o,c,d,y,h,n]);return xe(g!=null,`<Router basename="${r}"> is not able to match the URL "${o}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:v.createElement(we.Provider,{value:u},v.createElement(Si.Provider,{children:e,value:g}))}function av({children:t,location:e}){return ky(nc(t),e)}function nc(t,e=[]){let a=[];return v.Children.forEach(t,(n,l)=>{if(!v.isValidElement(n))return;let i=[...e,l];if(n.type===v.Fragment){a.push.apply(a,nc(n.props.children,i));return}ot(n.type===qa,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!n.props.index||!n.props.children,"An index route cannot have child routes.");let r={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(r.children=nc(n.props.children,i)),a.push(r)}),a}var ar="get",nr="application/x-www-form-urlencoded";function ou(t){return t!=null&&typeof t.tagName=="string"}function nv(t){return ou(t)&&t.tagName.toLowerCase()==="button"}function lv(t){return ou(t)&&t.tagName.toLowerCase()==="form"}function iv(t){return ou(t)&&t.tagName.toLowerCase()==="input"}function rv(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uv(t,e){return t.button===0&&(!e||e==="_self")&&!rv(t)}var Gi=null;function ov(){if(Gi===null)try{new FormData(document.createElement("form"),0),Gi=!1}catch{Gi=!0}return Gi}var cv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pu(t){return t!=null&&!cv.has(t)?(xe(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`),null):t}function sv(t,e){let a,n,l,i,r;if(lv(t)){let u=t.getAttribute("action");n=u?aa(u,e):null,a=t.getAttribute("method")||ar,l=Pu(t.getAttribute("enctype"))||nr,i=new FormData(t)}else if(nv(t)||iv(t)&&(t.type==="submit"||t.type==="image")){let u=t.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=t.getAttribute("formaction")||u.getAttribute("action");if(n=o?aa(o,e):null,a=t.getAttribute("formmethod")||u.getAttribute("method")||ar,l=Pu(t.getAttribute("formenctype"))||Pu(u.getAttribute("enctype"))||nr,i=new FormData(u,t),!ov()){let{name:c,type:d,value:y}=t;if(d==="image"){let h=c?`${c}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else c&&i.append(c,y)}}else{if(ou(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ar,n=null,l=nr,r=t}return i&&l==="text/plain"&&(r=i,i=void 0),{action:n,method:a.toLowerCase(),encType:l,formData:i,body:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gs(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fv(t,e,a){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname=`_root.${a}`:e&&aa(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${a}`,n}async function dv(t,e){if(t.id in e)return e[t.id];try{let a=await import(t.module);return e[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hv(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function mv(t,e,a){let n=await Promise.all(t.map(async l=>{let i=e.routes[l.route.id];if(i){let r=await dv(i,a);return r.links?r.links():[]}return[]}));return vv(n.flat(1).filter(hv).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function ud(t,e,a,n,l,i){let r=(o,c)=>a[c]?o.route.id!==a[c].route.id:!0,u=(o,c)=>{var d;return a[c].pathname!==o.pathname||((d=a[c].route.path)==null?void 0:d.endsWith("*"))&&a[c].params["*"]!==o.params["*"]};return i==="assets"?e.filter((o,c)=>r(o,c)||u(o,c)):i==="data"?e.filter((o,c)=>{var y;let d=n.routes[o.route.id];if(!d||!d.hasLoader)return!1;if(r(o,c)||u(o,c))return!0;if(o.route.shouldRevalidate){let h=o.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=a[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function pv(t,e,{includeHydrateFallback:a}={}){return gv(t.map(n=>{let l=e.routes[n.route.id];if(!l)return[];let i=[l.module];return l.clientActionModule&&(i=i.concat(l.clientActionModule)),l.clientLoaderModule&&(i=i.concat(l.clientLoaderModule)),a&&l.hydrateFallbackModule&&(i=i.concat(l.hydrateFallbackModule)),l.imports&&(i=i.concat(l.imports)),i}).flat(1))}function gv(t){return[...new Set(t)]}function yv(t){let e={},a=Object.keys(t).sort();for(let n of a)e[n]=t[n];return e}function vv(t,e){let a=new Set;return new Set(e),t.reduce((n,l)=>{let i=JSON.stringify(yv(l));return a.has(i)||(a.add(i),n.push({key:i,link:l})),n},[])}function Cm(){let t=v.useContext(ol);return gs(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function bv(){let t=v.useContext(uu);return gs(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var ys=v.createContext(void 0);ys.displayName="FrameworkContext";function Nm(){let t=v.useContext(ys);return gs(t,"You must render this element inside a <HydratedRouter> element"),t}function xv(t,e){let a=v.useContext(ys),[n,l]=v.useState(!1),[i,r]=v.useState(!1),{onFocus:u,onBlur:o,onMouseEnter:c,onMouseLeave:d,onTouchStart:y}=e,h=v.useRef(null);v.useEffect(()=>{if(t==="render"&&r(!0),t==="viewport"){let S=m=>{m.forEach(f=>{r(f.isIntersecting)})},M=new IntersectionObserver(S,{threshold:.5});return h.current&&M.observe(h.current),()=>{M.disconnect()}}},[t]),v.useEffect(()=>{if(n){let S=setTimeout(()=>{r(!0)},100);return()=>{clearTimeout(S)}}},[n]);let g=()=>{l(!0)},x=()=>{l(!1),r(!1)};return a?t!=="intent"?[i,h,{}]:[i,h,{onFocus:bl(u,g),onBlur:bl(o,x),onMouseEnter:bl(c,g),onMouseLeave:bl(d,x),onTouchStart:bl(y,g)}]:[!1,h,{}]}function bl(t,e){return a=>{t&&t(a),a.defaultPrevented||e(a)}}function Sv({page:t,...e}){let{router:a}=Cm(),n=v.useMemo(()=>Em(a.routes,t,a.basename),[a.routes,t,a.basename]);return n?v.createElement(Ev,{page:t,matches:n,...e}):null}function wv(t){let{manifest:e,routeModules:a}=Nm(),[n,l]=v.useState([]);return v.useEffect(()=>{let i=!1;return mv(t,e,a).then(r=>{i||l(r)}),()=>{i=!0}},[t,e,a]),n}function Ev({page:t,matches:e,...a}){let n=Da(),{manifest:l,routeModules:i}=Nm(),{basename:r}=Cm(),{loaderData:u,matches:o}=bv(),c=v.useMemo(()=>ud(t,e,o,l,n,"data"),[t,e,o,l,n]),d=v.useMemo(()=>ud(t,e,o,l,n,"assets"),[t,e,o,l,n]),y=v.useMemo(()=>{if(t===n.pathname+n.search+n.hash)return[];let x=new Set,S=!1;if(e.forEach(m=>{var p;let f=l.routes[m.route.id];!f||!f.hasLoader||(!c.some(b=>b.route.id===m.route.id)&&m.route.id in u&&((p=i[m.route.id])!=null&&p.shouldRevalidate)||f.hasClientLoader?S=!0:x.add(m.route.id))}),x.size===0)return[];let M=fv(t,r,"data");return S&&x.size>0&&M.searchParams.set("_routes",e.filter(m=>x.has(m.route.id)).map(m=>m.route.id).join(",")),[M.pathname+M.search]},[r,u,n,l,c,e,t,i]),h=v.useMemo(()=>pv(d,l),[d,l]),g=wv(d);return v.createElement(v.Fragment,null,y.map(x=>v.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...a})),h.map(x=>v.createElement("link",{key:x,rel:"modulepreload",href:x,...a})),g.map(({key:x,link:S})=>v.createElement("link",{key:x,nonce:a.nonce,...S})))}function Av(...t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var Um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Um&&(window.__reactRouterVersion="7.9.1")}catch{}function Tv({basename:t,children:e,window:a}){let n=v.useRef();n.current==null&&(n.current=dy({window:a,v5Compat:!0}));let l=n.current,[i,r]=v.useState({action:l.action,location:l.location}),u=v.useCallback(o=>{v.startTransition(()=>r(o))},[r]);return v.useLayoutEffect(()=>l.listen(u),[l,u]),v.createElement(ev,{basename:t,children:e,location:i.location,navigationType:i.action,navigator:l})}var Hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vs=v.forwardRef(function({onClick:e,discover:a="render",prefetch:n="none",relative:l,reloadDocument:i,replace:r,state:u,target:o,to:c,preventScrollReset:d,viewTransition:y,...h},g){let{basename:x}=v.useContext(we),S=typeof c=="string"&&Hm.test(c),M,m=!1;if(typeof c=="string"&&S&&(M=c,Um))try{let C=new URL(window.location.href),N=c.startsWith("//")?new URL(C.protocol+c):new URL(c),vt=aa(N.pathname,x);N.origin===C.origin&&vt!=null?c=vt+N.search+N.hash:m=!0}catch{xe(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let f=Yy(c,{relative:l}),[p,b,T]=xv(n,h),R=jv(c,{replace:r,state:u,target:o,preventScrollReset:d,relative:l,viewTransition:y});function A(C){e&&e(C),C.defaultPrevented||R(C)}let j=v.createElement("a",{...h,...T,href:M||f,onClick:m||i?e:A,ref:Av(g,b),target:o,"data-discover":!S&&a==="render"?"true":void 0});return p&&!S?v.createElement(v.Fragment,null,j,v.createElement(Sv,{page:f})):j});vs.displayName="Link";var zv=v.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:n="",end:l=!1,style:i,to:r,viewTransition:u,children:o,...c},d){let y=Ei(r,{relative:c.relative}),h=Da(),g=v.useContext(uu),{navigator:x,basename:S}=v.useContext(we),M=g!=null&&Nv(y)&&u===!0,m=x.encodeLocation?x.encodeLocation(y).pathname:y.pathname,f=h.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(f=f.toLowerCase(),p=p?p.toLowerCase():null,m=m.toLowerCase()),p&&S&&(p=aa(p,S)||p);const b=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let T=f===m||!l&&f.startsWith(m)&&f.charAt(b)==="/",R=p!=null&&(p===m||!l&&p.startsWith(m)&&p.charAt(m.length)==="/"),A={isActive:T,isPending:R,isTransitioning:M},j=T?e:void 0,C;typeof n=="function"?C=n(A):C=[n,T?"active":null,R?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let N=typeof i=="function"?i(A):i;return v.createElement(vs,{...c,"aria-current":j,className:C,ref:d,style:N,to:r,viewTransition:u},typeof o=="function"?o(A):o)});zv.displayName="NavLink";var Mv=v.forwardRef(({discover:t="render",fetcherKey:e,navigate:a,reloadDocument:n,replace:l,state:i,method:r=ar,action:u,onSubmit:o,relative:c,preventScrollReset:d,viewTransition:y,...h},g)=>{let x=Dv(),S=Cv(u,{relative:c}),M=r.toLowerCase()==="get"?"get":"post",m=typeof u=="string"&&Hm.test(u),f=p=>{if(o&&o(p),p.defaultPrevented)return;p.preventDefault();let b=p.nativeEvent.submitter,T=(b==null?void 0:b.getAttribute("formmethod"))||r;x(b||p.currentTarget,{fetcherKey:e,method:T,navigate:a,replace:l,state:i,relative:c,preventScrollReset:d,viewTransition:y})};return v.createElement("form",{ref:g,method:M,action:S,onSubmit:n?o:f,...h,"data-discover":!m&&t==="render"?"true":void 0})});Mv.displayName="Form";function Rv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bm(t){let e=v.useContext(ol);return ot(e,Rv(t)),e}function jv(t,{target:e,replace:a,state:n,preventScrollReset:l,relative:i,viewTransition:r}={}){let u=wi(),o=Da(),c=Ei(t,{relative:i});return v.useCallback(d=>{if(uv(d,e)){d.preventDefault();let y=a!==void 0?a:ai(o)===ai(c);u(t,{replace:y,state:n,preventScrollReset:l,relative:i,viewTransition:r})}},[o,u,c,a,n,e,t,l,i,r])}var Ov=0,_v=()=>`__${String(++Ov)}__`;function Dv(){let{router:t}=Bm("useSubmit"),{basename:e}=v.useContext(we),a=Fy();return v.useCallback(async(n,l={})=>{let{action:i,method:r,encType:u,formData:o,body:c}=sv(n,e);if(l.navigate===!1){let d=l.fetcherKey||_v();await t.fetch(d,a,l.action||i,{preventScrollReset:l.preventScrollReset,formData:o,body:c,formMethod:l.method||r,formEncType:l.encType||u,flushSync:l.flushSync})}else await t.navigate(l.action||i,{preventScrollReset:l.preventScrollReset,formData:o,body:c,formMethod:l.method||r,formEncType:l.encType||u,replace:l.replace,state:l.state,fromRouteId:a,flushSync:l.flushSync,viewTransition:l.viewTransition})},[t,e,a])}function Cv(t,{relative:e}={}){let{basename:a}=v.useContext(we),n=v.useContext(Ee);ot(n,"useFormAction must be used inside a RouteContext");let[l]=n.matches.slice(-1),i={...Ei(t||".",{relative:e})},r=Da();if(t==null){i.search=r.search;let u=new URLSearchParams(i.search),o=u.getAll("index");if(o.some(d=>d==="")){u.delete("index"),o.filter(y=>y).forEach(y=>u.append("index",y));let d=u.toString();i.search=d?`?${d}`:""}}return(!t||t===".")&&l.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:We([a,i.pathname])),ai(i)}function Nv(t,{relative:e}={}){let a=v.useContext(Mm);ot(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Bm("useViewTransitionState"),l=Ei(t,{relative:e});if(!a.isTransitioning)return!1;let i=aa(a.currentLocation.pathname,n)||a.currentLocation.pathname,r=aa(a.nextLocation.pathname,n)||a.nextLocation.pathname;return Yr(l.pathname,r)!=null||Yr(l.pathname,i)!=null}var Qt=function(){return Qt=Object.assign||function(e){for(var a,n=1,l=arguments.length;n<l;n++){a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Qt.apply(this,arguments)};function ni(t,e,a){if(a||arguments.length===2)for(var n=0,l=e.length,i;n<l;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}var nt="-ms-",ql="-moz-",$="-webkit-",Lm="comm",cu="rule",bs="decl",Uv="@import",Ym="@keyframes",Hv="@layer",Gm=Math.abs,xs=String.fromCharCode,lc=Object.assign;function Bv(t,e){return At(t,0)^45?(((e<<2^At(t,0))<<2^At(t,1))<<2^At(t,2))<<2^At(t,3):0}function qm(t){return t.trim()}function qe(t,e){return(t=e.exec(t))?t[0]:t}function Y(t,e,a){return t.replace(e,a)}function lr(t,e,a){return t.indexOf(e,a)}function At(t,e){return t.charCodeAt(e)|0}function Jn(t,e,a){return t.slice(e,a)}function Me(t){return t.length}function km(t){return t.length}function Tl(t,e){return e.push(t),t}function Lv(t,e){return t.map(e).join("")}function od(t,e){return t.filter(function(a){return!qe(a,e)})}var su=1,Wn=1,Xm=0,pe=0,gt=0,sl="";function fu(t,e,a,n,l,i,r,u){return{value:t,root:e,parent:a,type:n,props:l,children:i,line:su,column:Wn,length:r,return:"",siblings:u}}function oa(t,e){return lc(fu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function fn(t){for(;t.root;)t=oa(t.root,{children:[t]});Tl(t,t.siblings)}function Yv(){return gt}function Gv(){return gt=pe>0?At(sl,--pe):0,Wn--,gt===10&&(Wn=1,su--),gt}function be(){return gt=pe<Xm?At(sl,pe++):0,Wn++,gt===10&&(Wn=1,su++),gt}function Wa(){return At(sl,pe)}function ir(){return pe}function du(t,e){return Jn(sl,t,e)}function ic(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qv(t){return su=Wn=1,Xm=Me(sl=t),pe=0,[]}function kv(t){return sl="",t}function Iu(t){return qm(du(pe-1,rc(t===91?t+2:t===40?t+1:t)))}function Xv(t){for(;(gt=Wa())&&gt<33;)be();return ic(t)>2||ic(gt)>3?"":" "}function Qv(t,e){for(;--e&&be()&&!(gt<48||gt>102||gt>57&&gt<65||gt>70&&gt<97););return du(t,ir()+(e<6&&Wa()==32&&be()==32))}function rc(t){for(;be();)switch(gt){case t:return pe;case 34:case 39:t!==34&&t!==39&&rc(gt);break;case 40:t===41&&rc(t);break;case 92:be();break}return pe}function Vv(t,e){for(;be()&&t+gt!==57;)if(t+gt===84&&Wa()===47)break;return"/*"+du(e,pe-1)+"*"+xs(t===47?t:be())}function Zv(t){for(;!ic(Wa());)be();return du(t,pe)}function $v(t){return kv(rr("",null,null,null,[""],t=qv(t),0,[0],t))}function rr(t,e,a,n,l,i,r,u,o){for(var c=0,d=0,y=r,h=0,g=0,x=0,S=1,M=1,m=1,f=0,p="",b=l,T=i,R=n,A=p;M;)switch(x=f,f=be()){case 40:if(x!=108&&At(A,y-1)==58){lr(A+=Y(Iu(f),"&","&\f"),"&\f",Gm(c?u[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:A+=Iu(f);break;case 9:case 10:case 13:case 32:A+=Xv(x);break;case 92:A+=Qv(ir()-1,7);continue;case 47:switch(Wa()){case 42:case 47:Tl(Kv(Vv(be(),ir()),e,a,o),o);break;default:A+="/"}break;case 123*S:u[c++]=Me(A)*m;case 125*S:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+d:m==-1&&(A=Y(A,/\f/g,"")),g>0&&Me(A)-y&&Tl(g>32?sd(A+";",n,a,y-1,o):sd(Y(A," ","")+";",n,a,y-2,o),o);break;case 59:A+=";";default:if(Tl(R=cd(A,e,a,c,d,l,u,p,b=[],T=[],y,i),i),f===123)if(d===0)rr(A,e,R,R,b,i,y,u,T);else switch(h===99&&At(A,3)===110?100:h){case 100:case 108:case 109:case 115:rr(t,R,R,n&&Tl(cd(t,R,R,0,0,l,u,p,l,b=[],y,T),T),l,T,y,u,n?b:T);break;default:rr(A,R,R,R,[""],T,0,u,T)}}c=d=g=0,S=m=1,p=A="",y=r;break;case 58:y=1+Me(A),g=x;default:if(S<1){if(f==123)--S;else if(f==125&&S++==0&&Gv()==125)continue}switch(A+=xs(f),f*S){case 38:m=d>0?1:(A+="\f",-1);break;case 44:u[c++]=(Me(A)-1)*m,m=1;break;case 64:Wa()===45&&(A+=Iu(be())),h=Wa(),d=y=Me(p=A+=Zv(ir())),f++;break;case 45:x===45&&Me(A)==2&&(S=0)}}return i}function cd(t,e,a,n,l,i,r,u,o,c,d,y){for(var h=l-1,g=l===0?i:[""],x=km(g),S=0,M=0,m=0;S<n;++S)for(var f=0,p=Jn(t,h+1,h=Gm(M=r[S])),b=t;f<x;++f)(b=qm(M>0?g[f]+" "+p:Y(p,/&\f/g,g[f])))&&(o[m++]=b);return fu(t,e,a,l===0?cu:u,o,c,d,y)}function Kv(t,e,a,n){return fu(t,e,a,Lm,xs(Yv()),Jn(t,2,-2),0,n)}function sd(t,e,a,n,l){return fu(t,e,a,bs,Jn(t,0,n),Jn(t,n+1,-1),n,l)}function Qm(t,e,a){switch(Bv(t,e)){case 5103:return $+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+t+t;case 4789:return ql+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return $+t+ql+t+nt+t+t;case 5936:switch(At(t,e+11)){case 114:return $+t+nt+Y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return $+t+nt+Y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return $+t+nt+Y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return $+t+nt+t+t;case 6165:return $+t+nt+"flex-"+t+t;case 5187:return $+t+Y(t,/(\w+).+(:[^]+)/,$+"box-$1$2"+nt+"flex-$1$2")+t;case 5443:return $+t+nt+"flex-item-"+Y(t,/flex-|-self/g,"")+(qe(t,/flex-|baseline/)?"":nt+"grid-row-"+Y(t,/flex-|-self/g,""))+t;case 4675:return $+t+nt+"flex-line-pack"+Y(t,/align-content|flex-|-self/g,"")+t;case 5548:return $+t+nt+Y(t,"shrink","negative")+t;case 5292:return $+t+nt+Y(t,"basis","preferred-size")+t;case 6060:return $+"box-"+Y(t,"-grow","")+$+t+nt+Y(t,"grow","positive")+t;case 4554:return $+Y(t,/([^-])(transform)/g,"$1"+$+"$2")+t;case 6187:return Y(Y(Y(t,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),t,"")+t;case 5495:case 3959:return Y(t,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return Y(Y(t,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+t+t;case 4200:if(!qe(t,/flex-|baseline/))return nt+"grid-column-align"+Jn(t,e)+t;break;case 2592:case 3360:return nt+Y(t,"template-","")+t;case 4384:case 3616:return a&&a.some(function(n,l){return e=l,qe(n.props,/grid-\w+-end/)})?~lr(t+(a=a[e].value),"span",0)?t:nt+Y(t,"-start","")+t+nt+"grid-row-span:"+(~lr(a,"span",0)?qe(a,/\d+/):+qe(a,/\d+/)-+qe(t,/\d+/))+";":nt+Y(t,"-start","")+t;case 4896:case 4128:return a&&a.some(function(n){return qe(n.props,/grid-\w+-start/)})?t:nt+Y(Y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Y(t,/(.+)-inline(.+)/,$+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(t)-1-e>6)switch(At(t,e+1)){case 109:if(At(t,e+4)!==45)break;case 102:return Y(t,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+ql+(At(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~lr(t,"stretch",0)?Qm(Y(t,"stretch","fill-available"),e,a)+t:t}break;case 5152:case 5920:return Y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,l,i,r,u,o,c){return nt+l+":"+i+c+(r?nt+l+"-span:"+(u?o:+o-+i)+c:"")+t});case 4949:if(At(t,e+6)===121)return Y(t,":",":"+$)+t;break;case 6444:switch(At(t,At(t,14)===45?18:11)){case 120:return Y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(At(t,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+nt+"$2box$3")+t;case 100:return Y(t,":",":"+nt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(t,"scroll-","scroll-snap-")+t}return t}function Gr(t,e){for(var a="",n=0;n<t.length;n++)a+=e(t[n],n,t,e)||"";return a}function Jv(t,e,a,n){switch(t.type){case Hv:if(t.children.length)break;case Uv:case bs:return t.return=t.return||t.value;case Lm:return"";case Ym:return t.return=t.value+"{"+Gr(t.children,n)+"}";case cu:if(!Me(t.value=t.props.join(",")))return""}return Me(a=Gr(t.children,n))?t.return=t.value+"{"+a+"}":""}function Wv(t){var e=km(t);return function(a,n,l,i){for(var r="",u=0;u<e;u++)r+=t[u](a,n,l,i)||"";return r}}function Fv(t){return function(e){e.root||(e=e.return)&&t(e)}}function Pv(t,e,a,n){if(t.length>-1&&!t.return)switch(t.type){case bs:t.return=Qm(t.value,t.length,a);return;case Ym:return Gr([oa(t,{value:Y(t.value,"@","@"+$)})],n);case cu:if(t.length)return Lv(a=t.props,function(l){switch(qe(l,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fn(oa(t,{props:[Y(l,/:(read-\w+)/,":"+ql+"$1")]})),fn(oa(t,{props:[l]})),lc(t,{props:od(a,n)});break;case"::placeholder":fn(oa(t,{props:[Y(l,/:(plac\w+)/,":"+$+"input-$1")]})),fn(oa(t,{props:[Y(l,/:(plac\w+)/,":"+ql+"$1")]})),fn(oa(t,{props:[Y(l,/:(plac\w+)/,nt+"input-$1")]})),fn(oa(t,{props:[l]})),lc(t,{props:od(a,n)});break}return""})}}var Iv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},Fn=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",Vm="active",Zm="data-styled-version",hu="6.1.19",Ss=`/*!sc*/
`,qr=typeof window<"u"&&typeof document<"u",tb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),mu=Object.freeze([]),Pn=Object.freeze({});function eb(t,e,a){return a===void 0&&(a=Pn),t.theme!==a.theme&&t.theme||e||a.theme}var $m=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ab=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nb=/(^-|-$)/g;function fd(t){return t.replace(ab,"-").replace(nb,"")}var lb=/(a)(d)/gi,qi=52,dd=function(t){return String.fromCharCode(t+(t>25?39:97))};function uc(t){var e,a="";for(e=Math.abs(t);e>qi;e=e/qi|0)a=dd(e%qi)+a;return(dd(e%qi)+a).replace(lb,"$1-$2")}var to,Km=5381,Rn=function(t,e){for(var a=e.length;a;)t=33*t^e.charCodeAt(--a);return t},Jm=function(t){return Rn(Km,t)};function Wm(t){return uc(Jm(t)>>>0)}function ib(t){return t.displayName||t.name||"Component"}function eo(t){return typeof t=="string"&&!0}var Fm=typeof Symbol=="function"&&Symbol.for,Pm=Fm?Symbol.for("react.memo"):60115,rb=Fm?Symbol.for("react.forward_ref"):60112,ub={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ob={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Im={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cb=((to={})[rb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},to[Pm]=Im,to);function hd(t){return("type"in(e=t)&&e.type.$$typeof)===Pm?Im:"$$typeof"in t?cb[t.$$typeof]:ub;var e}var sb=Object.defineProperty,fb=Object.getOwnPropertyNames,md=Object.getOwnPropertySymbols,db=Object.getOwnPropertyDescriptor,hb=Object.getPrototypeOf,pd=Object.prototype;function tp(t,e,a){if(typeof e!="string"){if(pd){var n=hb(e);n&&n!==pd&&tp(t,n,a)}var l=fb(e);md&&(l=l.concat(md(e)));for(var i=hd(t),r=hd(e),u=0;u<l.length;++u){var o=l[u];if(!(o in ob||a&&a[o]||r&&o in r||i&&o in i)){var c=db(e,o);try{sb(t,o,c)}catch{}}}}return t}function In(t){return typeof t=="function"}function ws(t){return typeof t=="object"&&"styledComponentId"in t}function ka(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function oc(t,e){if(t.length===0)return"";for(var a=t[0],n=1;n<t.length;n++)a+=t[n];return a}function li(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function cc(t,e,a){if(a===void 0&&(a=!1),!a&&!li(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=cc(t[n],e[n]);else if(li(e))for(var n in e)t[n]=cc(t[n],e[n]);return t}function Es(t,e){Object.defineProperty(t,"toString",{value:e})}function Ai(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var mb=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var a=0,n=0;n<e;n++)a+=this.groupSizes[n];return a},t.prototype.insertRules=function(e,a){if(e>=this.groupSizes.length){for(var n=this.groupSizes,l=n.length,i=l;e>=i;)if((i<<=1)<0)throw Ai(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var r=l;r<i;r++)this.groupSizes[r]=0}for(var u=this.indexOfGroup(e+1),o=(r=0,a.length);r<o;r++)this.tag.insertRule(u,a[r])&&(this.groupSizes[e]++,u++)},t.prototype.clearGroup=function(e){if(e<this.length){var a=this.groupSizes[e],n=this.indexOfGroup(e),l=n+a;this.groupSizes[e]=0;for(var i=n;i<l;i++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var a="";if(e>=this.length||this.groupSizes[e]===0)return a;for(var n=this.groupSizes[e],l=this.indexOfGroup(e),i=l+n,r=l;r<i;r++)a+="".concat(this.tag.getRule(r)).concat(Ss);return a},t}(),ur=new Map,kr=new Map,or=1,ki=function(t){if(ur.has(t))return ur.get(t);for(;kr.has(or);)or++;var e=or++;return ur.set(t,e),kr.set(e,t),e},pb=function(t,e){or=e+1,ur.set(t,e),kr.set(e,t)},gb="style[".concat(Fn,"][").concat(Zm,'="').concat(hu,'"]'),yb=new RegExp("^".concat(Fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vb=function(t,e,a){for(var n,l=a.split(","),i=0,r=l.length;i<r;i++)(n=l[i])&&t.registerName(e,n)},bb=function(t,e){for(var a,n=((a=e.textContent)!==null&&a!==void 0?a:"").split(Ss),l=[],i=0,r=n.length;i<r;i++){var u=n[i].trim();if(u){var o=u.match(yb);if(o){var c=0|parseInt(o[1],10),d=o[2];c!==0&&(pb(d,c),vb(t,d,o[3]),t.getTag().insertRules(c,l)),l.length=0}else l.push(u)}}},gd=function(t){for(var e=document.querySelectorAll(gb),a=0,n=e.length;a<n;a++){var l=e[a];l&&l.getAttribute(Fn)!==Vm&&(bb(t,l),l.parentNode&&l.parentNode.removeChild(l))}};function xb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ep=function(t){var e=document.head,a=t||e,n=document.createElement("style"),l=function(u){var o=Array.from(u.querySelectorAll("style[".concat(Fn,"]")));return o[o.length-1]}(a),i=l!==void 0?l.nextSibling:null;n.setAttribute(Fn,Vm),n.setAttribute(Zm,hu);var r=xb();return r&&n.setAttribute("nonce",r),a.insertBefore(n,i),n},Sb=function(){function t(e){this.element=ep(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var n=document.styleSheets,l=0,i=n.length;l<i;l++){var r=n[l];if(r.ownerNode===a)return r}throw Ai(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,a){try{return this.sheet.insertRule(a,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var a=this.sheet.cssRules[e];return a&&a.cssText?a.cssText:""},t}(),wb=function(){function t(e){this.element=ep(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,a){if(e<=this.length&&e>=0){var n=document.createTextNode(a);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Eb=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,a){return e<=this.length&&(this.rules.splice(e,0,a),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),yd=qr,Ab={isServer:!qr,useCSSOMInjection:!tb},ap=function(){function t(e,a,n){e===void 0&&(e=Pn),a===void 0&&(a={});var l=this;this.options=Qt(Qt({},Ab),e),this.gs=a,this.names=new Map(n),this.server=!!e.isServer,!this.server&&qr&&yd&&(yd=!1,gd(this)),Es(this,function(){return function(i){for(var r=i.getTag(),u=r.length,o="",c=function(y){var h=function(m){return kr.get(m)}(y);if(h===void 0)return"continue";var g=i.names.get(h),x=r.getGroup(y);if(g===void 0||!g.size||x.length===0)return"continue";var S="".concat(Fn,".g").concat(y,'[id="').concat(h,'"]'),M="";g!==void 0&&g.forEach(function(m){m.length>0&&(M+="".concat(m,","))}),o+="".concat(x).concat(S,'{content:"').concat(M,'"}').concat(Ss)},d=0;d<u;d++)c(d);return o}(l)})}return t.registerId=function(e){return ki(e)},t.prototype.rehydrate=function(){!this.server&&qr&&gd(this)},t.prototype.reconstructWithOptions=function(e,a){return a===void 0&&(a=!0),new t(Qt(Qt({},this.options),e),this.gs,a&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(a){var n=a.useCSSOMInjection,l=a.target;return a.isServer?new Eb(l):n?new Sb(l):new wb(l)}(this.options),new mb(e)));var e},t.prototype.hasNameForId=function(e,a){return this.names.has(e)&&this.names.get(e).has(a)},t.prototype.registerName=function(e,a){if(ki(e),this.names.has(e))this.names.get(e).add(a);else{var n=new Set;n.add(a),this.names.set(e,n)}},t.prototype.insertRules=function(e,a,n){this.registerName(e,a),this.getTag().insertRules(ki(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ki(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Tb=/&/g,zb=/^\s*\/\/.*$/gm;function np(t,e){return t.map(function(a){return a.type==="rule"&&(a.value="".concat(e," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(e," ")),a.props=a.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=np(a.children,e)),a})}function Mb(t){var e,a,n,l=Pn,i=l.options,r=i===void 0?Pn:i,u=l.plugins,o=u===void 0?mu:u,c=function(h,g,x){return x.startsWith(a)&&x.endsWith(a)&&x.replaceAll(a,"").length>0?".".concat(e):h},d=o.slice();d.push(function(h){h.type===cu&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Tb,a).replace(n,c))}),r.prefix&&d.push(Pv),d.push(Jv);var y=function(h,g,x,S){g===void 0&&(g=""),x===void 0&&(x=""),S===void 0&&(S="&"),e=S,a=g,n=new RegExp("\\".concat(a,"\\b"),"g");var M=h.replace(zb,""),m=$v(x||g?"".concat(x," ").concat(g," { ").concat(M," }"):M);r.namespace&&(m=np(m,r.namespace));var f=[];return Gr(m,Wv(d.concat(Fv(function(p){return f.push(p)})))),f};return y.hash=o.length?o.reduce(function(h,g){return g.name||Ai(15),Rn(h,g.name)},Km).toString():"",y}var Rb=new ap,sc=Mb(),lp=Fe.createContext({shouldForwardProp:void 0,styleSheet:Rb,stylis:sc});lp.Consumer;Fe.createContext(void 0);function vd(){return v.useContext(lp)}var ip=function(){function t(e,a){var n=this;this.inject=function(l,i){i===void 0&&(i=sc);var r=n.name+i.hash;l.hasNameForId(n.id,r)||l.insertRules(n.id,r,i(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=a,Es(this,function(){throw Ai(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=sc),this.name+e.hash},t}(),jb=function(t){return t>="A"&&t<="Z"};function bd(t){for(var e="",a=0;a<t.length;a++){var n=t[a];if(a===1&&n==="-"&&t[0]==="-")return t;jb(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var rp=function(t){return t==null||t===!1||t===""},up=function(t){var e,a,n=[];for(var l in t){var i=t[l];t.hasOwnProperty(l)&&!rp(i)&&(Array.isArray(i)&&i.isCss||In(i)?n.push("".concat(bd(l),":"),i,";"):li(i)?n.push.apply(n,ni(ni(["".concat(l," {")],up(i),!1),["}"],!1)):n.push("".concat(bd(l),": ").concat((e=l,(a=i)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in Iv||e.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return n};function Fa(t,e,a,n){if(rp(t))return[];if(ws(t))return[".".concat(t.styledComponentId)];if(In(t)){if(!In(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var l=t(e);return Fa(l,e,a,n)}var i;return t instanceof ip?a?(t.inject(a,n),[t.getName(n)]):[t]:li(t)?up(t):Array.isArray(t)?Array.prototype.concat.apply(mu,t.map(function(r){return Fa(r,e,a,n)})):[t.toString()]}function Ob(t){for(var e=0;e<t.length;e+=1){var a=t[e];if(In(a)&&!ws(a))return!1}return!0}var _b=Jm(hu),Db=function(){function t(e,a,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Ob(e),this.componentId=a,this.baseHash=Rn(_b,a),this.baseStyle=n,ap.registerId(a)}return t.prototype.generateAndInjectStyles=function(e,a,n){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,a,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))l=ka(l,this.staticRulesId);else{var i=oc(Fa(this.rules,e,a,n)),r=uc(Rn(this.baseHash,i)>>>0);if(!a.hasNameForId(this.componentId,r)){var u=n(i,".".concat(r),void 0,this.componentId);a.insertRules(this.componentId,r,u)}l=ka(l,r),this.staticRulesId=r}else{for(var o=Rn(this.baseHash,n.hash),c="",d=0;d<this.rules.length;d++){var y=this.rules[d];if(typeof y=="string")c+=y;else if(y){var h=oc(Fa(y,e,a,n));o=Rn(o,h+d),c+=h}}if(c){var g=uc(o>>>0);a.hasNameForId(this.componentId,g)||a.insertRules(this.componentId,g,n(c,".".concat(g),void 0,this.componentId)),l=ka(l,g)}}return l},t}(),op=Fe.createContext(void 0);op.Consumer;var ao={};function Cb(t,e,a){var n=ws(t),l=t,i=!eo(t),r=e.attrs,u=r===void 0?mu:r,o=e.componentId,c=o===void 0?function(b,T){var R=typeof b!="string"?"sc":fd(b);ao[R]=(ao[R]||0)+1;var A="".concat(R,"-").concat(Wm(hu+R+ao[R]));return T?"".concat(T,"-").concat(A):A}(e.displayName,e.parentComponentId):o,d=e.displayName,y=d===void 0?function(b){return eo(b)?"styled.".concat(b):"Styled(".concat(ib(b),")")}(t):d,h=e.displayName&&e.componentId?"".concat(fd(e.displayName),"-").concat(e.componentId):e.componentId||c,g=n&&l.attrs?l.attrs.concat(u).filter(Boolean):u,x=e.shouldForwardProp;if(n&&l.shouldForwardProp){var S=l.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;x=function(b,T){return S(b,T)&&M(b,T)}}else x=S}var m=new Db(a,h,n?l.componentStyle:void 0);function f(b,T){return function(R,A,j){var C=R.attrs,N=R.componentStyle,vt=R.defaultProps,le=R.foldedComponentIds,Ca=R.styledComponentId,Na=R.target,_t=Fe.useContext(op),z=vd(),U=R.shouldForwardProp||z.shouldForwardProp,L=eb(A,_t,vt)||Pn,B=function(Yt,Ue,Ua){for(var He,ge=Qt(Qt({},Ue),{className:void 0,theme:Ua}),un=0;un<Yt.length;un+=1){var on=In(He=Yt[un])?He(ge):He;for(var Te in on)ge[Te]=Te==="className"?ka(ge[Te],on[Te]):Te==="style"?Qt(Qt({},ge[Te]),on[Te]):on[Te]}return Ue.className&&(ge.className=ka(ge.className,Ue.className)),ge}(C,A,L),at=B.as||Na,Lt={};for(var bt in B)B[bt]===void 0||bt[0]==="$"||bt==="as"||bt==="theme"&&B.theme===L||(bt==="forwardedAs"?Lt.as=B.forwardedAs:U&&!U(bt,at)||(Lt[bt]=B[bt]));var Ae=function(Yt,Ue){var Ua=vd(),He=Yt.generateAndInjectStyles(Ue,Ua.styleSheet,Ua.stylis);return He}(N,B),$t=ka(le,Ca);return Ae&&($t+=" "+Ae),B.className&&($t+=" "+B.className),Lt[eo(at)&&!$m.has(at)?"class":"className"]=$t,j&&(Lt.ref=j),v.createElement(at,Lt)}(p,b,T)}f.displayName=y;var p=Fe.forwardRef(f);return p.attrs=g,p.componentStyle=m,p.displayName=y,p.shouldForwardProp=x,p.foldedComponentIds=n?ka(l.foldedComponentIds,l.styledComponentId):"",p.styledComponentId=h,p.target=n?l.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=n?function(T){for(var R=[],A=1;A<arguments.length;A++)R[A-1]=arguments[A];for(var j=0,C=R;j<C.length;j++)cc(T,C[j],!0);return T}({},l.defaultProps,b):b}}),Es(p,function(){return".".concat(p.styledComponentId)}),i&&tp(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function xd(t,e){for(var a=[t[0]],n=0,l=e.length;n<l;n+=1)a.push(e[n],t[n+1]);return a}var Sd=function(t){return Object.assign(t,{isCss:!0})};function jn(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];if(In(t)||li(t))return Sd(Fa(xd(mu,ni([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Fa(n):Sd(Fa(xd(n,e)))}function fc(t,e,a){if(a===void 0&&(a=Pn),!e)throw Ai(1,e);var n=function(l){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return t(e,a,jn.apply(void 0,ni([l],i,!1)))};return n.attrs=function(l){return fc(t,e,Qt(Qt({},a),{attrs:Array.prototype.concat(a.attrs,l).filter(Boolean)}))},n.withConfig=function(l){return fc(t,e,Qt(Qt({},a),l))},n}var cp=function(t){return fc(Cb,t)},w=cp;$m.forEach(function(t){w[t]=cp(t)});function Bt(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];var n=oc(jn.apply(void 0,ni([t],e,!1))),l=Wm(n);return new ip(l,n)}const Nb=w.header`
  z-index: 100;
  width: 100%;
  height: 8rem;
  position: absolute;
  top: 4rem;
  left: 0;
`,Ub=w.div`
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
`,Hb=w.div`
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
`,As=()=>s.jsxs(Nb,{children:[s.jsx(Ub,{children:s.jsx(vs,{to:"/",className:"site-logo",children:s.jsx("img",{src:"/logo-1.png",alt:"Homepage"})})}),s.jsxs(Hb,{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"})}),s.jsx("a",{href:"mailto:hello@paramvani.com",children:"hello@paramvani.com"})]})]}),Bb=Bt`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0.2;
  }
  80% {
    opacity: 1;
  }
`,Lb=w.div`
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
`,Yb=w.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  padding: 0;
  display: inline-block;
  transform: translate3d(-50%, -50%, 0);
`,no=w.div`
  content: "";
  background: #ffffff;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  animation: ${Bb} 1.6s infinite ease;
  animation-delay: 0.4s;

  &:nth-of-type(1) {
    left: 15px;
    animation-delay: 0.8s;
  }

  &:nth-of-type(3) {
    left: -15px;
    animation-delay: 0s;
  }
`,Ts=({isLoading:t})=>t?s.jsx(Lb,{children:s.jsxs(Yb,{children:[s.jsx(no,{}),s.jsx(no,{}),s.jsx(no,{})]})}):null,Gb=w.div`
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
`,qb=w.div`
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
`,kb=w.span`
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
`,Xb=w.form`
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
`,zs=({isOpen:t,onClose:e})=>{const[a,n]=v.useState(""),[l,i]=v.useState("");v.useEffect(()=>{const o=c=>{c.key==="Escape"&&e()};return t?(document.addEventListener("keydown",o),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",o),document.body.style.overflow="unset"}},[t,e]);const r=o=>{o.preventDefault(),i("Thank you for subscribing!"),setTimeout(()=>{e(),i(""),n("")},2e3)},u=o=>{o.target===o.currentTarget&&e()};return s.jsx(Gb,{isOpen:t,onClick:u,children:s.jsxs(qb,{children:[s.jsx(kb,{onClick:e}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})}),s.jsx("h3",{children:"Sign Up"}),s.jsx("p",{children:"Be the first to know about the latest updates and get exclusive offer on our grand opening."}),s.jsxs(Xb,{onSubmit:r,children:[s.jsx("input",{type:"email",value:a,onChange:o=>n(o.target.value),placeholder:"Email Address",required:!0}),s.jsx("input",{type:"submit",value:"Subscribe"}),l&&s.jsx("label",{children:l})]})]})})},Qb=w.ul`
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
`,xl=w.li`
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
`,Ms=()=>s.jsxs(Qb,{children:[s.jsx(xl,{children:s.jsx("a",{href:"#0","aria-label":"Facebook",children:s.jsx("i",{className:"fab fa-facebook","aria-hidden":"true"})})}),s.jsx(xl,{children:s.jsx("a",{href:"#0","aria-label":"Twitter",children:s.jsx("i",{className:"fab fa-twitter","aria-hidden":"true"})})}),s.jsx(xl,{children:s.jsx("a",{href:"#0","aria-label":"Instagram",children:s.jsx("i",{className:"fab fa-instagram","aria-hidden":"true"})})}),s.jsx(xl,{children:s.jsx("a",{href:"#0","aria-label":"Dribbble",children:s.jsx("i",{className:"fab fa-dribbble","aria-hidden":"true"})})}),s.jsx(xl,{children:s.jsx("a",{href:"#0","aria-label":"Behance",children:s.jsx("i",{className:"fab fa-behance","aria-hidden":"true"})})})]}),Vb=w.div`
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
`,Zb=w.a`
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
`,Rs=({target:t,children:e})=>{const a=n=>{n.preventDefault();const l=document.querySelector(t);l&&l.scrollIntoView({behavior:"smooth"})};return s.jsx(Vb,{children:s.jsx(Zb,{href:t,onClick:a,className:"smoothscroll",children:e})})},$b=w.section`
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
`,Kb=w.div`
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
`,Ba=w.div`
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
`,ra=w.div`
  flex: 1 1 0%;
  padding: 0 20px;

  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
`,Jb=w.nav`
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
`,Wb=w.ul`
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
`,Fb=w.div`
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
`,lo=w.div`
  display: ${t=>t.isActive?"block":"none"};
`,io=w.p`
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
`,Pb=w.div`
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
`,Ib=w.ul`
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
`,tx=w.a`
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
`,ex=w.div`
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
`;w.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3.6rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;const ax=w.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`,nx=w.div`
  flex: 0 0 70%;
  max-width: 70%;

  @media screen and (max-width: 800px) {
    flex: 1;
    max-width: 100%;
  }
`,lx=w.div`
  flex: 0 0 30%;
  max-width: 30%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    flex: 1;
    max-width: 100%;
    justify-content: center;
  }
`,ix=w.img`
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
`,rx=w.div`
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
`,js=()=>{const[t,e]=v.useState("tab-about");return s.jsxs($b,{id:"info",children:[s.jsx(Kb,{}),s.jsx(Ba,{children:s.jsxs(ra,{children:[s.jsx(Jb,{children:s.jsxs(Wb,{children:[s.jsx("li",{className:t==="tab-about"?"active":"",children:s.jsx("a",{href:"#0",onClick:a=>{a.preventDefault(),e("tab-about")},children:s.jsx("span",{children:"About"})})}),s.jsx("li",{className:t==="tab-services"?"active":"",children:s.jsx("a",{href:"#0",onClick:a=>{a.preventDefault(),e("tab-services")},children:s.jsx("span",{children:"Services"})})}),s.jsx("li",{className:t==="tab-contact"?"active":"",children:s.jsx("a",{href:"#0",onClick:a=>{a.preventDefault(),e("tab-contact")},children:s.jsx("span",{children:"Contact"})})})]})}),s.jsxs(Fb,{children:[s.jsxs(lo,{isActive:t==="tab-about",children:[s.jsx(Ba,{children:s.jsx(ra,{children:s.jsx("h1",{children:"Hello. We are Paramvani."})})}),s.jsxs(ax,{children:[s.jsx(nx,{children:s.jsx(io,{children:"At Paramvani, we offer a divine experience where those struggling with sadness, depression, or deep devotees of Lord Vishnu can directly connect and converse with the Supreme. This is not just a feature, but a spiritual support that brings peace, guidance, and hope in life’s toughest moments. When the heart feels heavy and no path seems clear, Paramvani gives you the strength to share your deepest feelings with Lord Vishnu and receive his blessings to restore balance and positivity in life. Our purpose is to assure every devotee that God is always with you, listening to you, and inspiring you to move forward with courage and faith."})}),s.jsx(lx,{children:s.jsx(ix,{src:"/shiva.png",alt:"Shiva"})})]})]}),s.jsxs(lo,{isActive:t==="tab-services",children:[s.jsx(Ba,{children:s.jsx(ra,{children:s.jsx("h1",{children:"What we do."})})}),s.jsx(Ba,{children:s.jsx(ra,{children:s.jsx(io,{children:"At Paramvani, we are dedicated to bringing devotees and seekers closer to Lord Vishnu through a unique spiritual experience. Our services are designed to offer comfort, guidance, and divine connection for those in need of peace, healing, and inspiration. Here’s how we serve you."})})}),s.jsxs(Pb,{children:[s.jsx("div",{className:"services-list__item",children:s.jsxs("div",{className:"services-list__item-content",children:[s.jsx("h4",{className:"item-title",children:"Connecting Devotees with the Divine"}),s.jsx("p",{children:"We provide a sacred space where devotees of Lord Vishnu and people seeking peace can feel a direct connection with the Almighty. Through Paramvani, you can express your prayers, thoughts, and emotions as if speaking to God Himself."})]})}),s.jsx("div",{className:"services-list__item",children:s.jsxs("div",{className:"services-list__item-content",children:[s.jsx("h4",{className:"item-title",children:"Healing for the Troubled Mind"}),s.jsx("p",{children:"For those going through sadness, stress, or depression, Paramvani acts as a spiritual companion. It helps you release your inner burdens and experience the soothing comfort of divine presence."})]})}),s.jsx("div",{className:"services-list__item",children:s.jsxs("div",{className:"services-list__item-content",children:[s.jsx("h4",{className:"item-title",children:"Guidance Through Faith"}),s.jsx("p",{children:"We believe Lord Vishnu listens to every voice. Our platform allows you to seek divine inspiration and strength, giving you clarity, positivity, and hope in life’s difficult moments."})]})}),s.jsx("div",{className:"services-list__item",children:s.jsxs("div",{className:"services-list__item-content",children:[s.jsx("h4",{className:"item-title",children:"Spiritual Support Anytime"}),s.jsx("p",{children:"Whenever you feel lonely or lost, Paramvani is here to remind you that God is always with you. We ensure you always have a source of faith, support, and inner strength to walk your life’s path."})]})})]})]}),s.jsxs(lo,{isActive:t==="tab-contact",children:[s.jsx(Ba,{children:s.jsx(ra,{children:s.jsx("h1",{children:"Get In Touch With Us."})})}),s.jsx(Ba,{children:s.jsxs(ra,{children:[s.jsx(io,{children:"Voluptates laborum eum quas. Pariatur impedit sit veniam est et quasi voluptas voluptatem. Cumque hic enim perferendis amet odit in molestias debitis. Facere nulla qui pariatur quasi mollitia et. Et dolorem dolorum quo in sit architecto."}),s.jsxs(Ba,{children:[s.jsxs(ra,{style:{flex:"0 0 50%",maxWidth:"50%"},children:[s.jsx("h4",{children:"Where to Find Us"}),s.jsxs("p",{children:["1600 Amphitheatre Parkway",s.jsx("br",{}),"Mountain View, CA",s.jsx("br",{}),"94043 US"]})]}),s.jsxs(ra,{style:{flex:"0 0 50%",maxWidth:"50%"},children:[s.jsx("h4",{children:"Follow Us"}),s.jsxs(Ib,{children:[s.jsx("li",{children:s.jsx("a",{href:"#0",children:"Facebook"})}),s.jsx("li",{children:s.jsx("a",{href:"#0",children:"Twitter"})}),s.jsx("li",{children:s.jsx("a",{href:"#0",children:"Instagram"})})]})]})]}),s.jsxs("p",{children:[s.jsx(tx,{href:"mailto:hello@paramvani.com",children:"hello@paramvani.com"}),s.jsxs(ex,{children:[s.jsx("a",{href:"tel:197-543-2345",children:"+197 543 2345"}),s.jsx("a",{href:"tel:123-456-9000",children:"+123 456 9000"})]})]})]})})]})]}),s.jsx("footer",{children:s.jsxs(rx,{children:[s.jsx("span",{children:"© Copyright Paramvani 2024"}),s.jsxs("span",{children:["Design by ",s.jsx("a",{href:"",children:"Bravon"})," Distributed By ",s.jsx("a",{href:"",children:"ParamVani"})]})]})})]})})]})},ux=w.section`
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
`,ox=w.div`
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
`,cx=w.div`
  z-index: 2;
  height: 100%;
  padding-top: 20vh;
  padding-bottom: 24rem;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,sx=w.div`
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
`,fx=w.div`
  flex: 1 1 0%;
  padding: 0 20px;
`,dx=w.div`
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
`,hx=w.div`
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
`,mx=w.button`
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
`,px=()=>{const[t,e]=v.useState(!0),[a,n]=v.useState(!1);return Fe.useEffect(()=>{const l=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(l)},[]),s.jsxs(s.Fragment,{children:[s.jsx(Ts,{isLoading:t}),s.jsxs(ux,{id:"intro",children:[s.jsx(As,{}),s.jsx(ox,{children:s.jsx("div",{})}),s.jsx(cx,{children:s.jsx(sx,{children:s.jsxs(fx,{children:[s.jsxs(dx,{children:[s.jsx("h3",{children:"Coming Soon"}),s.jsxs("h1",{children:["Get ready everyone. ",s.jsx("br",{}),"We are currently ",s.jsx("br",{}),"working on a super ",s.jsx("br",{}),"awesome website."]})]}),s.jsx(hx,{children:s.jsxs(mx,{onClick:()=>n(!0),children:["Notify Me",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M24 12l-9-9v7h-15v4h15v7z"})})]})})]})})}),s.jsx(zs,{isOpen:a,onClose:()=>n(!1)}),s.jsx(Ms,{}),s.jsx(Rs,{target:"#info",children:"Scroll For More"})]}),s.jsx(js,{})]})},gx=w.section`
  width: 100%;
  height: 100vh;
  min-height: 82rem;
  background-color: #000000;
  overflow: hidden;
  position: relative;
`,yx=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,vx=w.div`
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
`,bx=w.div`
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
`,xx=w.div`
  z-index: 2;
  height: 100%;
  padding-top: 20vh;
  padding-bottom: 24rem;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Sx=w.div`
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
`,wx=w.div`
  flex: 1 1 0%;
  padding: 0 20px;
`,Ex=w.div`
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
`,Ax=w.div`
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
`,Tx=w.button`
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
`,wd=[{image:"/images/slides/slide-01.jpg",opacity:.4},{image:"/images/slides/slide-02.jpg",opacity:.5},{image:"/images/slides/slide-03.jpg",opacity:.5}],zx=()=>{const[t,e]=v.useState(!0),[a,n]=v.useState(!1),[l,i]=v.useState(0);return Fe.useEffect(()=>{const r=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(r)},[]),v.useEffect(()=>{const r=setInterval(()=>{i(u=>(u+1)%wd.length)},3e3);return()=>clearInterval(r)},[]),s.jsxs(s.Fragment,{children:[s.jsx(Ts,{isLoading:t}),s.jsxs(gx,{id:"intro",children:[s.jsx(As,{}),s.jsx(yx,{children:wd.map((r,u)=>s.jsx(vx,{isActive:u===l,opacity:r.opacity,style:{backgroundImage:`url(${r.image})`}},u))}),s.jsx(bx,{children:s.jsx("div",{})}),s.jsx(xx,{children:s.jsx(Sx,{children:s.jsxs(wx,{children:[s.jsxs(Ex,{children:[s.jsx("h3",{children:"Coming Soon"}),s.jsxs("h1",{children:["Get ready everyone. ",s.jsx("br",{}),"We are currently ",s.jsx("br",{}),"working on a super ",s.jsx("br",{}),"awesome website."]})]}),s.jsx(Ax,{children:s.jsxs(Tx,{onClick:()=>n(!0),children:["Notify Me",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M24 12l-9-9v7h-15v4h15v7z"})})]})})]})})}),s.jsx(zs,{isOpen:a,onClose:()=>n(!1)}),s.jsx(Ms,{}),s.jsx(Rs,{target:"#info",children:"Scroll For More"})]}),s.jsx(js,{})]})},Mx=w.section`
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
`,Rx=w.div`
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
`,jx=w.div`
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
`,Ox=w.div`
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
`,_x=w.div`
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
`,Dx=w.div`
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
`,Cx=w.div`
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
`,Nx=w.div`
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
`,Ux=w.div`
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
`,Hx=w.button`
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
`,Bx=()=>{const[t,e]=v.useState(!0),[a,n]=v.useState(!1),l=v.useRef(null),i=wi();return Fe.useEffect(()=>{const r=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(r)},[]),v.useEffect(()=>{if(!t&&l.current){const r=document.createElement("canvas"),u=r.getContext("2d");if(!u)return;r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.width=window.innerWidth,r.height=window.innerHeight,l.current.appendChild(r);class o{constructor(){this.x=Math.random()*r.width,this.y=Math.random()*r.height,this.vx=(Math.random()-.5)*.3,this.vy=(Math.random()-.5)*.3,this.size=Math.random()*1.5+.5,this.opacity=Math.random()*.6+.2,this.life=0,this.maxLife=Math.random()*400+300}update(){this.x+=this.vx,this.y+=this.vy,this.life++,this.vx+=(Math.random()-.5)*.005,this.vy+=(Math.random()-.5)*.005,this.vx=Math.max(-.8,Math.min(.8,this.vx)),this.vy=Math.max(-.8,Math.min(.8,this.vy)),this.opacity=Math.max(.1,Math.min(.7,this.opacity+(Math.random()-.5)*.003)),(this.life>this.maxLife||this.x<-50||this.x>r.width+50||this.y<-50||this.y>r.height+50)&&(this.x=Math.random()*r.width,this.y=Math.random()*r.height,this.vx=(Math.random()-.5)*.3,this.vy=(Math.random()-.5)*.3,this.opacity=Math.random()*.6+.2,this.life=0,this.maxLife=Math.random()*400+300)}draw(){if(!u)return;u.save(),u.globalAlpha=this.opacity;const g=u.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size*2);g.addColorStop(0,"rgba(255, 255, 255, 0.6)"),g.addColorStop(.5,"rgba(255, 255, 255, 0.2)"),g.addColorStop(1,"rgba(255, 255, 255, 0)"),u.fillStyle=g,u.beginPath(),u.arc(this.x,this.y,this.size*2,0,Math.PI*2),u.fill(),u.fillStyle="#ffffff",u.beginPath(),u.arc(this.x,this.y,this.size,0,Math.PI*2),u.fill(),u.restore()}}const c=[];for(let h=0;h<120;h++)c.push(new o);const d=()=>{u&&(u.clearRect(0,0,r.width,r.height),c.forEach(h=>{h.update(),h.draw()}),requestAnimationFrame(d))};d();const y=()=>{r.width=window.innerWidth,r.height=window.innerHeight};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),r.parentNode&&r.parentNode.removeChild(r)}}},[t]),s.jsxs(s.Fragment,{children:[s.jsx(Ts,{isLoading:t}),s.jsxs(Mx,{id:"intro",children:[s.jsx(As,{}),s.jsx(jx,{ref:l,id:"particles-js"}),s.jsx(Ox,{children:s.jsx("div",{})}),s.jsx(_x,{children:s.jsxs(Dx,{children:[s.jsxs(Cx,{children:[s.jsxs(Nx,{children:[s.jsx("h3",{children:"Dev Vani"}),s.jsxs("h1",{children:["मन की बात प्रभु संग।",s.jsx("br",{}),"यहाँ प्रार्थना बनाती है शांति—",s.jsx("br",{}),"तनाव से मुक्ति की राह।"]})]}),s.jsx(Ux,{children:s.jsxs(Hx,{onClick:()=>i("/choose"),children:["Connect Now",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M24 12l-9-9v7h-15v4h15v7z"})})]})})]}),s.jsx(Rx,{})]})}),s.jsx(zs,{isOpen:a,onClose:()=>n(!1)}),s.jsx(Ms,{}),s.jsx(Rs,{target:"#info",children:"Scroll For More"})]}),s.jsx(js,{})]})};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yx=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,n)=>n?n.toUpperCase():a.toLowerCase()),Ed=t=>{const e=Yx(t);return e.charAt(0).toUpperCase()+e.slice(1)},sp=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim(),Gx=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:l="",children:i,iconNode:r,...u},o)=>v.createElement("svg",{ref:o,...qx,width:e,height:e,stroke:t,strokeWidth:n?Number(a)*24/Number(e):a,className:sp("lucide",l),...!i&&!Gx(u)&&{"aria-hidden":"true"},...u},[...r.map(([c,d])=>v.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=(t,e)=>{const a=v.forwardRef(({className:n,...l},i)=>v.createElement(kx,{ref:i,iconNode:e,className:sp(`lucide-${Lx(Ed(t))}`,`lucide-${t}`,n),...l}));return a.displayName=Ed(t),a};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],fp=pu("arrow-left",Xx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],Vx=pu("mic-off",Qx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],$x=pu("mic",Zx);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Jx=pu("send",Kx),dp={vishnu:{id:"vishnu",name:"भगवान विष्णु",nameEn:"Lord Vishnu",tagline:"शांति, धर्म और दिव्य मार्गदर्शन",video:"/ai-video.mp4",image:"/images/lord-vishnu.jpg",brandLabel:"देव वाणी"},hanuman:{id:"hanuman",name:"हनुमान जी",nameEn:"Lord Hanuman",tagline:"शक्ति, भक्ति और साहस",video:"/hanuman.mp4",image:"/images/lord-hanuman.jpg",brandLabel:"हनुमान वाणी"}},Wx=Object.values(dp);function Fx(t){return t==="vishnu"||t==="hanuman"}function Px(t){return Fx(t)?dp[t]:null}const hp=Bt`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ix=Bt`
  0%, 100% {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(141, 198, 63, 0.15);
  }
  50% {
    box-shadow: 0 12px 40px rgba(141, 198, 63, 0.12), 0 0 0 1px rgba(141, 198, 63, 0.35);
  }
`,t2=w.div`
  min-height: 100vh;
  min-height: 100dvh;
  background: radial-gradient(ellipse at center, #0a1a0a 0%, #000000 70%);
  color: #fff;
  position: relative;
  overflow: hidden;
`,e2=w.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  canvas {
    width: 100%;
    height: 100%;
  }
`,a2=w.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 3rem;
  padding-top: max(1.5rem, env(safe-area-inset-top));
`,n2=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`,l2=w.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(141, 198, 63, 0.25);
  border-radius: 999px;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: "Gothic A1", sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  backdrop-filter: blur(12px);

  &:hover {
    background: rgba(141, 198, 63, 0.12);
    border-color: rgba(141, 198, 63, 0.5);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,i2=w.div`
  text-align: center;
  margin-bottom: 2.5rem;
  animation: ${hp} 0.6s ease forwards;
`,r2=w.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8dc63f;
  margin: 0 0 0.75rem;
`,u2=w.h1`
  font-family: "DM Serif Display", serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  margin: 0 0 0.75rem;
  line-height: 1.2;
`,o2=w.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  max-width: 520px;
  margin-inline: auto;
  line-height: 1.6;
`,c2=w.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 380px;
    margin: 0 auto;
  }
`,s2=w.button`
  position: relative;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
  border-radius: 18px;
  overflow: hidden;
  animation: ${hp} 0.7s ease forwards;
  animation-delay: ${t=>t.$delay}ms;
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover .card-image img {
    transform: scale(1.04);
  }

  &:hover .card-overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.45) 45%,
      rgba(10, 26, 10, 0.15) 100%
    );
  }

  &:hover .card-frame {
    border-color: rgba(141, 198, 63, 0.55);
    animation: ${Ix} 2s ease-in-out infinite;
  }
`,f2=w.div.attrs({className:"card-frame"})`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(141, 198, 63, 0.2);
  background: #0a1a0a;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`,d2=w.div.attrs({className:"card-image"})`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #0a1a0a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.5s ease;
  }
`,h2=w.div.attrs({className:"card-overlay"})`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.35) 42%,
    rgba(10, 26, 10, 0.1) 100%
  );
  transition: background 0.3s ease;
`,m2=w.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.25rem 1.2rem 1.35rem;
  z-index: 1;
`,p2=w.h2`
  font-family: "DM Serif Display", serif;
  font-size: 1.65rem;
  margin: 0 0 0.25rem;
  color: #fff;
`,g2=w.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8dc63f;
  margin: 0 0 0.5rem;
`,y2=w.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
  line-height: 1.5;
`,v2=w.span`
  display: inline-block;
  margin-top: 0.85rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(141, 198, 63, 0.85);
`,b2=()=>{const t=wi(),e=v.useRef(null);return v.useEffect(()=>{if(!e.current)return;const a=document.createElement("canvas"),n=a.getContext("2d");if(!n)return;e.current.appendChild(a);const l=()=>{a.width=window.innerWidth,a.height=window.innerHeight};l();class i{constructor(){this.x=Math.random()*a.width,this.y=Math.random()*a.height,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.size=Math.random()*1.5+.5,this.opacity=Math.random()*.5+.2,this.color=["#ffffff","#8dc63f","#a0d448"][Math.floor(Math.random()*3)]}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>a.width)&&(this.vx*=-1),(this.y<0||this.y>a.height)&&(this.vy*=-1)}draw(){n&&(n.globalAlpha=this.opacity,n.fillStyle=this.color,n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2),n.fill())}}const r=Array.from({length:window.innerWidth<768?50:80},()=>new i);let u=0;const o=()=>{n.clearRect(0,0,a.width,a.height),r.forEach(c=>{c.update(),c.draw()}),u=requestAnimationFrame(o)};return o(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),cancelAnimationFrame(u),a.remove()}},[]),s.jsxs(t2,{children:[s.jsx(e2,{ref:e}),s.jsxs(a2,{children:[s.jsx(n2,{children:s.jsxs(l2,{type:"button",onClick:()=>t("/"),children:[s.jsx(fp,{}),"Back"]})}),s.jsxs(i2,{children:[s.jsx(r2,{children:"Dev Vani"}),s.jsx(u2,{children:"अपने प्रभु को चुनें"}),s.jsx(o2,{children:"Choose the divine presence you wish to connect with. Your conversation will begin in their sacred space."})]}),s.jsx(c2,{children:Wx.map((a,n)=>s.jsx(s2,{type:"button",$delay:120+n*120,onClick:()=>t(`/talk/${a.id}`),children:s.jsx(f2,{children:s.jsxs(d2,{children:[s.jsx("img",{src:a.image,alt:a.nameEn,loading:"eager"}),s.jsx(h2,{}),s.jsxs(m2,{children:[s.jsx(p2,{children:a.name}),s.jsx(g2,{children:a.nameEn}),s.jsx(y2,{children:a.tagline}),s.jsx(v2,{children:"Connect →"})]})]})})},a.id))})]})]})},x2=Bt`
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
`;Bt`
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
`;const S2=Bt`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(141, 198, 63, 0.8), 0 0 60px rgba(141, 198, 63, 0.4);
  }
`;Bt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(141, 198, 63, 0.6), 0 0 60px rgba(141, 198, 63, 0.3);
  }
`;const w2=Bt`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ad=Bt`
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.7;
  }
`,E2=Bt`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.12);
    opacity: 0.9;
  }
`;Bt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const A2=Bt`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,mp=Bt`
  0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
`,Td=w.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${t=>t.$color||"white"};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${w2} 0.8s linear infinite;
`,T2=w.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  min-height: 100vh;
  min-height: 100dvh;
  max-width: 100%;
  max-height: 100%;
  background: radial-gradient(ellipse at center, #0a1a0a 0%, #000000 70%);
  --page-bg: #0a1a0a;
  --mobile-input-offset: 7.5rem;
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
    --mobile-input-offset: 7rem;
  }

  @media screen and (max-width: 600px) {
    --mobile-input-offset: 6.5rem;
  }
`,z2=w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  padding-top: max(1.2rem, env(safe-area-inset-top));
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`,M2=w.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(141, 198, 63, 0.25);
  border-radius: 999px;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: "Gothic A1", sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(141, 198, 63, 0.12);
    border-color: rgba(141, 198, 63, 0.5);
    color: #fff;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,R2=w.span`
  font-family: "DM Serif Display", serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05em;
`,j2=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;

  ${t=>t.$state==="idle"&&jn`
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.45);
  `}

  ${t=>t.$state==="connecting"&&jn`
    background: rgba(141, 198, 63, 0.1);
    border: 1px solid rgba(141, 198, 63, 0.35);
    color: #a0d448;
  `}

  ${t=>t.$state==="speaking"&&jn`
    background: rgba(141, 198, 63, 0.15);
    border: 1px solid rgba(141, 198, 63, 0.5);
    color: #8dc63f;
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.2);
  `}

  ${t=>t.$state==="listening"&&jn`
    background: rgba(255, 100, 100, 0.1);
    border: 1px solid rgba(255, 100, 100, 0.35);
    color: #ff8a8a;
  `}
`,O2=w.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: ${t=>t.$state==="connecting"||t.$state==="speaking"||t.$state==="listening"?mp:"none"} 1.4s ease-in-out infinite;
`,_2=w.div`
  position: fixed;
  bottom: 9rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  padding: 0.75rem 1.4rem;
  background: rgba(20, 20, 20, 0.92);
  border: 1px solid rgba(255, 100, 100, 0.4);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Gothic A1", sans-serif;
  font-size: 0.9rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  opacity: ${t=>t.$visible?1:0};
  pointer-events: ${t=>t.$visible?"auto":"none"};
  animation: ${t=>t.$visible?A2:"none"} 0.35s ease forwards;
  max-width: 90vw;
  text-align: center;
`,D2=w.div.withConfig({shouldForwardProp:t=>!["$active","$connecting"].includes(t)})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(70vw, 500px);
  height: min(70vw, 500px);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(
    circle,
    rgba(141, 198, 63, 0.25) 0%,
    rgba(141, 198, 63, 0.08) 40%,
    transparent 70%
  );
  animation: ${t=>t.$active?E2:(t.$connecting,Ad)} ${t=>t.$active?"1.2s":"4s"} ease-in-out infinite;
  opacity: ${t=>t.$active?1:t.$connecting?.6:.35};
  transition: opacity 0.6s ease;
`,C2=w.div`
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
`,N2=w.div.withConfig({shouldForwardProp:t=>t!=="show"})`
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
  animation: ${t=>t.show?x2:"none"} 3s ease-out forwards;
  pointer-events: none;
  will-change: transform, opacity, filter;
`,U2=w.div.withConfig({shouldForwardProp:t=>!["$show","$speaking"].includes(t)})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--page-bg, #0a1a0a);
  opacity: ${t=>t.$show?1:0};
  transform: ${t=>t.$show?"scale(1)":"scale(0.97)"};
  transition: opacity 1.2s ease, transform 1.2s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--page-bg, #0a1a0a);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 10%, transparent 28%, transparent 72%, rgba(0, 0, 0, 0.15) 90%, rgba(0, 0, 0, 0.5) 100%),
      linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 18%, transparent 42%),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.25) 12%, transparent 22%),
      radial-gradient(ellipse at bottom left, rgba(0, 0, 0, 0.8) 0%, transparent 70%),
      radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.8) 0%, transparent 70%),
      radial-gradient(ellipse at center, transparent 15%, rgba(141, 198, 63, ${t=>t.$speaking?"0.06":"0.02"}) 50%, transparent 75%);
    pointer-events: none;
    z-index: 2;
    transition: background 0.6s ease;

    @media screen and (max-width: 800px) {
      background:
        linear-gradient(to bottom, var(--page-bg, #0a1a0a) 0%, rgba(10, 26, 10, 0.85) 8%, transparent 22%),
        linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 18%),
        linear-gradient(to right, var(--page-bg, #0a1a0a) 0%, transparent 5%),
        linear-gradient(to left, var(--page-bg, #0a1a0a) 0%, transparent 5%);
    }
  }

  @media screen and (max-width: 800px) {
    height: calc(100dvh - var(--mobile-input-offset, 7rem));
    align-items: flex-end;
    justify-content: center;
  }
`,H2=w.video`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  max-height: 100dvh;
  object-fit: contain;
  background-color: var(--page-bg, #0a1a0a);
  border: none;
  outline: none;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: none;
    object-fit: cover;
    object-position: 43% 18%;
  }
`,B2=w.audio`
  display: none;
`,L2=w.div`
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: min(480px, 92vw);

  @media screen and (max-width: 800px) {
    bottom: 1.25rem;
    width: min(400px, 94vw);
  }

  @media screen and (max-width: 600px) {
    bottom: 1rem;
    width: min(400px, 94vw);
  }
`,Y2=w.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  opacity: ${t=>t.$visible?1:0};
  transform: translateY(${t=>t.$visible?"0":"8px"});
  transition: all 0.35s ease;
  pointer-events: none;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  color: rgba(141, 198, 63, 0.8);
  letter-spacing: 0.03em;
`,G2=w.span`
  display: inline-flex;
  gap: 3px;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #8dc63f;
    animation: ${mp} 1.4s ease-in-out infinite;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`,q2=w.div.withConfig({shouldForwardProp:t=>!["$disabled"].includes(t)})`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(10, 15, 10, 0.88) !important;
  border: 1px solid rgba(141, 198, 63, 0.25);
  border-radius: 14px;
  padding: 0.35rem 0.9rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  opacity: ${t=>t.$disabled?.7:1};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 14px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(141, 198, 63, 0.3), transparent 50%, rgba(141, 198, 63, 0.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(141, 198, 63, 0.4);
    box-shadow: 0 6px 28px rgba(141, 198, 63, 0.08);
  }

  &:focus-within {
    border-color: rgba(141, 198, 63, 0.55);
    box-shadow: 0 0 24px rgba(141, 198, 63, 0.12);

    &::before {
      opacity: 1;
    }
  }
`,k2=w.input`
  && {
    display: block;
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    outline: none;
    color: rgba(255, 255, 255, 0.92) !important;
    font-size: 1rem !important;
    font-family: "Gothic A1", sans-serif;
    flex: 1;
    padding: 0.6rem 0.5rem !important;
    caret-color: #8dc63f;
    height: 3.2rem !important;
    line-height: 1.4 !important;
    border-radius: 0;
    box-shadow: none !important;
    max-width: none;
    width: 100%;
  }

  &&::placeholder {
    color: rgba(255, 255, 255, 0.35) !important;
  }

  &&:focus {
    color: rgba(255, 255, 255, 0.92) !important;
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media screen and (max-width: 600px) {
    && {
      font-size: 0.9rem !important;
      height: 3rem !important;
    }
  }
`,X2=w.button`
  background: ${t=>t.isListening?"linear-gradient(135deg, #8dc63f, #a0d448)":"rgba(141, 198, 63, 0.2)"};
  border: 2px solid ${t=>t.isListening?"rgba(141, 198, 63, 0.8)":"rgba(141, 198, 63, 0.3)"};
  opacity: ${t=>t.disabled?.6:1};
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${t=>t.isListening?"#000":"#8dc63f"};
  animation: ${t=>t.isListening?S2:"none"} 2s infinite;
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
`,Q2=w.button`
  background: linear-gradient(135deg, #8dc63f, #6fa82e);
  border: 1px solid rgba(141, 198, 63, 0.6);
  opacity: ${t=>t.disabled?.5:1};
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #0a1a0a;
  flex-shrink: 0;
  margin-left: 4px;
  position: relative;
  z-index: 10;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${t=>t.disabled?"linear-gradient(135deg, #8dc63f, #6fa82e)":"linear-gradient(135deg, #a0d448, #8dc63f)"};
    transform: ${t=>t.disabled?"none":"scale(1.06)"};
    box-shadow: ${t=>t.disabled?"none":"0 0 16px rgba(141, 198, 63, 0.4)"};
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
    width: 32px;
    height: 32px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`,V2=w.div`
  position: absolute;
  z-index: 4;
  opacity: ${t=>t.$show?1:0};
  transform: ${t=>t.$show?"translateY(0)":"translateY(8px)"};
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;

  @media screen and (max-width: 800px) {
    bottom: calc(var(--mobile-input-offset, 7rem) + 0.5rem);
    left: 50%;
    transform: ${t=>t.$show?"translateX(-50%) translateY(0)":"translateX(-50%) translateY(8px)"};
    max-width: 92%;
    text-align: center;
  }

  @media screen and (min-width: 801px) {
    top: 50%;
    transform: ${t=>t.$show?"translateY(-50%)":"translateY(calc(-50% + 8px))"};
    max-width: 380px;

    &.left {
      left: 2.5rem;
    }
  }
`,Z2=w.div`
  background: rgba(8, 12, 8, 0.72);
  border: 1px solid rgba(141, 198, 63, 0.2);
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 800px) {
    padding: 1rem 1.2rem;
  }
`,$2=w.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(141, 198, 63, 0.6);
  margin-bottom: 0.6rem;
`,K2=w.div`
  color: rgba(255, 255, 255, 0.92);
  font-family: "Gothic A1", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  transition: all 0.3s ease;

  @media screen and (max-width: 800px) {
    font-size: 1.15rem;
    line-height: 1.65;
  }

  @media screen and (min-width: 801px) {
    font-size: 1.25rem;
    line-height: 1.7;
  }
`,J2=w.span`
  color: #c8e87a;
  font-weight: 700;
  text-shadow: 0 0 12px rgba(141, 198, 63, 0.5);
  animation: wordHighlight 0.25s ease;
`,W2=w.span`
  opacity: 0.45;
`,F2=w.span`
  opacity: 0.25;
`;Bt`
  0% {
    opacity: 0.6;
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;const P2=w.div`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;Bt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const I2=()=>{const{lordId:t}=qy(),e=Px(t);return e?s.jsx(t5,{lord:e}):s.jsx(Dm,{to:"/choose",replace:!0})},t5=({lord:t})=>{const e=wi(),[a,n]=v.useState(!1),[l,i]=v.useState(!1),[r,u]=v.useState(!1),[o,c]=v.useState(!1),[d,y]=v.useState(!1),[h,g]=v.useState(""),[x,S]=v.useState(!1),[M,m]=v.useState("/audio.mp3"),[f,p]=v.useState(""),[b,T]=v.useState(!1),[R,A]=v.useState([]),[j,C]=v.useState(0),[N,vt]=v.useState(""),[le,Ca]=v.useState(!1),Na=v.useRef(null),_t=v.useRef(null),z=v.useRef(null),U=v.useRef(null),L=v.useRef(null),B=v.useRef(null),at=v.useRef(null),Lt=v.useRef([]),bt=v.useRef(null),Ae=r?"listening":x?"connecting":d?"speaking":"idle",$t={idle:"Present",connecting:"Receiving",speaking:"Speaking",listening:"Listening"},Yt=O=>{bt.current&&clearTimeout(bt.current),vt(O),Ca(!0),bt.current=setTimeout(()=>{Ca(!1)},4e3)};v.useEffect(()=>{document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.height="100%",document.body.style.margin="0",document.body.style.padding="0",document.documentElement.style.margin="0",document.documentElement.style.padding="0";let O=document.querySelector("meta[name=viewport]");O||(O=document.createElement("meta"),O.setAttribute("name","viewport"),document.head.appendChild(O)),O.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"),n(!0);const _=setTimeout(()=>{i(!0)},3200);return()=>{clearTimeout(_),B.current&&clearInterval(B.current),bt.current&&clearTimeout(bt.current),document.body.style.overflow="",document.documentElement.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.height="",document.body.style.margin="",document.body.style.padding="",document.documentElement.style.margin="",document.documentElement.style.padding=""}},[]),v.useEffect(()=>{if(l&&Na.current){const O=document.createElement("canvas"),_=O.getContext("2d");if(!_)return;O.style.position="absolute",O.style.top="0",O.style.left="0",O.style.width="100%",O.style.height="100%",O.width=window.innerWidth,O.height=window.innerHeight,Na.current.appendChild(O);class I{constructor(){this.x=Math.random()*O.width,this.y=Math.random()*O.height,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.opacity=Math.random()*.8+.2,this.life=0,this.maxLife=Math.random()*600+400;const ie=["#ffffff","#8dc63f","#a0d448","#ffffff","#ffffff"];this.color=ie[Math.floor(Math.random()*ie.length)]}update(){this.x+=this.vx,this.y+=this.vy,this.life++,this.vx+=(Math.random()-.5)*.008,this.vy+=(Math.random()-.5)*.008,this.vx=Math.max(-1,Math.min(1,this.vx)),this.vy=Math.max(-1,Math.min(1,this.vy)),this.opacity=Math.max(.1,Math.min(.9,this.opacity+(Math.random()-.5)*.005)),(this.life>this.maxLife||this.x<-50||this.x>O.width+50||this.y<-50||this.y>O.height+50)&&(this.x=Math.random()*O.width,this.y=Math.random()*O.height,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.opacity=Math.random()*.8+.2,this.life=0,this.maxLife=Math.random()*600+400)}draw(){if(!_)return;_.save(),_.globalAlpha=this.opacity;const ie=_.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size*3);ie.addColorStop(0,this.color),ie.addColorStop(.5,this.color+"66"),ie.addColorStop(1,"transparent"),_.fillStyle=ie,_.beginPath(),_.arc(this.x,this.y,this.size*3,0,Math.PI*2),_.fill(),_.fillStyle=this.color,_.beginPath(),_.arc(this.x,this.y,this.size,0,Math.PI*2),_.fill(),_.restore()}}const dt=[],H=window.innerWidth<768?60:100;for(let Be=0;Be<H;Be++)dt.push(new I);const K=()=>{_&&(_.clearRect(0,0,O.width,O.height),dt.forEach(Be=>{Be.update(),Be.draw()}),requestAnimationFrame(K))};K();const Gt=()=>{O.width=window.innerWidth,O.height=window.innerHeight};return window.addEventListener("resize",Gt),()=>{window.removeEventListener("resize",Gt),O.parentNode&&O.parentNode.removeChild(O)}}},[l]),v.useEffect(()=>{const O=z.current,_=_t.current;if(O&&_){const I=()=>{console.log("Audio ended, stopping video"),_.pause(),_.currentTime=0,c(!1),y(!1),B.current&&(clearInterval(B.current),B.current=null),T(!1),C(0),p("")};return O.addEventListener("ended",I),()=>{O.removeEventListener("ended",I)}}},[l,M]),v.useEffect(()=>{z.current&&M&&(console.log("Audio URL changed, reloading audio element"),z.current.pause(),z.current.currentTime=0,z.current.src=M,z.current.load())},[M]),v.useEffect(()=>{const O=_t.current;if(O&&o){const _=()=>{if(d&&z.current&&!z.current.ended){const I=O.duration,dt=O.currentTime;I-dt<.1&&(O.currentTime=0)}};return O.addEventListener("timeupdate",_),()=>{O.removeEventListener("timeupdate",_)}}},[o,d]);const Ue=()=>{if(console.log("startVideoAndAudio called"),console.log("Video ref:",_t.current),console.log("Audio ref:",z.current),console.log("Current audio URL:",M),_t.current&&z.current){console.log("Starting video and audio..."),_t.current.currentTime=0,_t.current.play().then(()=>{console.log("Video started successfully"),c(!0)}).catch(_=>{console.error("Error starting video:",_)}),z.current.onloadstart=()=>{console.log("Audio loading started")},z.current.oncanplay=()=>{console.log("Audio can play")},z.current.oncanplaythrough=()=>{console.log("Audio can play through")},z.current.onerror=_=>{var I,dt,H,K;console.error("Audio error:",_),console.error("Audio error details:",{error:(I=z.current)==null?void 0:I.error,src:(dt=z.current)==null?void 0:dt.src,networkState:(H=z.current)==null?void 0:H.networkState,readyState:(K=z.current)==null?void 0:K.readyState})},z.current.onloadeddata=()=>{console.log("Audio data loaded")},z.current.crossOrigin="anonymous",z.current.onplay=()=>{y(!0),setTimeout(()=>{Ua()},200)},z.current.onpause=()=>{y(!1)};const O=()=>{z.current&&z.current.readyState>=2?(z.current.currentTime=0,z.current.play().then(()=>{y(!0),setTimeout(()=>{R.length>0&&!B.current&&Ua()},200)}).catch(_=>{console.error("Error starting audio:",_)})):setTimeout(O,100)};O()}else console.log("Video or audio ref is null")},Ua=()=>{Lt.current,B.current&&clearInterval(B.current),C(0),T(!0),B.current=setInterval(()=>{var _;const O=Lt.current;if(O.length>0&&z.current){const I=z.current.currentTime*1e3;if(!z.current.paused&&I>0){let H=0;for(let Gt=0;Gt<O.length&&I>=O[Gt].startMs;Gt++)if(I<=O[Gt].endMs){H=Gt;break}else H=Gt;H>=O.length&&(H=O.length-1),H!==j&&C(H);const K=((_=O[O.length-1])==null?void 0:_.endMs)||0;I>K&&(T(!1),C(0),p(""))}else j!==0&&C(0)}},100)},He=()=>{_t.current&&z.current&&(_t.current.pause(),_t.current.currentTime=0,c(!1),z.current.pause(),z.current.currentTime=0,y(!1),B.current&&(clearInterval(B.current),B.current=null),at.current=null,T(!1),p(""),C(0))},ge=async(O,_)=>{try{S(!0),console.log("Calling audio assistant API...");const I=new FormData;if(!_)if(O.trim())I.append("text",O.trim()),console.log("Sending text to API:",O);else throw new Error("No input provided");const dt=await fetch("https://vishnubhagwan.app.n8n.cloud/webhook/audio-assistant",{method:"POST",body:I});if(!dt.ok)throw new Error(`API call failed: ${dt.status}`);const H=await dt.json();if(console.log("Audio assistant response:",H),H.audioFile){if(console.log("Audio URL received:",H.audioFile),m(H.audioFile),H.wordDurations&&H.wordDurations.length>0&&(A(H.wordDurations),Lt.current=H.wordDurations,C(0),T(!0),console.log("Word durations set:",H.wordDurations.length,"words"),console.log("First few words:",H.wordDurations.slice(0,5))),H.transcript||H.text||H.caption||H.response){const K=H.transcript||H.text||H.caption||H.response||"";p(K),T(!0),console.log("AI Response Caption set:",K)}try{const K=new Audio;K.crossOrigin="anonymous",K.oncanplaythrough=()=>{console.log("Audio can play through - URL is accessible")},K.onerror=Gt=>{console.error("Audio loading error:",Gt),console.error("Failed to load audio from:",H.audioFile)},K.src=H.audioFile,K.load()}catch(K){console.error("Error testing audio URL:",K)}return H}else throw new Error("No audio file in response")}catch(I){return console.error("Error calling audio assistant:",I),m("/audio.mp3"),Yt("Could not connect. Please try again."),null}finally{S(!1)}},un=async()=>{if(h.trim()){console.log("Text input:",h);const O=h.trim();g(""),He(),await ge(O),setTimeout(()=>{Ue()},500)}},on=O=>{O.key==="Enter"&&un()},Te=()=>{if(console.log("Mic button clicked, current isListening:",r),r){U.current&&U.current.stop(),u(!1),console.log("Stopping voice recognition");return}if("webkitSpeechRecognition"in window||"SpeechRecognition"in window){console.log("Starting voice recognition..."),u(!0);const O=window.webkitSpeechRecognition||window.SpeechRecognition,_=new O;U.current=_,_.continuous=!0,_.interimResults=!0,_.lang="hi-IN";let I,dt=!1,H="";_.onstart=()=>{console.log("Voice recognition started successfully"),u(!0),dt=!1,H=""},_.onresult=async K=>{let Gt="",Be="";for(let ie=K.resultIndex;ie<K.results.length;ie++){const Os=K.results[ie][0].transcript;K.results[ie].isFinal?Gt+=Os:Be+=Os}H=Gt||Be,H.trim()&&(dt=!0,console.log("Voice input:",H),I&&clearTimeout(I),I=setTimeout(async()=>{dt&&H.trim()&&(console.log("User stopped speaking, processing audio..."),_.stop(),u(!1),He(),await ge(H),setTimeout(()=>{Ue()},500))},2e3))},_.onspeechend=async()=>{console.log("Speech ended"),dt&&H.trim()&&setTimeout(async()=>{dt&&r&&H.trim()&&(console.log("No more speech detected, processing audio..."),_.stop(),u(!1),He(),await ge(H),setTimeout(()=>{Ue()},500))},1e3)},_.onerror=K=>{console.error("Voice recognition error:",K.error),u(!1),(K.error==="not-allowed"||K.error==="service-not-allowed")&&Yt("Microphone access is required for voice input.")},_.onend=()=>{console.log("Voice recognition ended"),r&&(u(!1),dt&&console.log("Recognition ended after speech, processing audio..."))};try{_.start()}catch(K){console.error("Error starting recognition:",K),u(!1),Yt("Voice input is not available right now.")}}else Yt("Voice input is not supported in this browser.")};return s.jsxs(T2,{children:[s.jsx(C2,{ref:Na}),s.jsxs(z2,{children:[s.jsxs(M2,{type:"button",onClick:()=>e("/choose"),children:[s.jsx(fp,{}),"Back"]}),s.jsx(R2,{children:t.brandLabel}),s.jsxs(j2,{$state:Ae,children:[s.jsx(O2,{$state:Ae}),$t[Ae]]})]}),s.jsx(N2,{show:a}),s.jsx(D2,{$active:d,$connecting:x}),s.jsx(U2,{$show:l,$speaking:d,children:s.jsx(H2,{ref:_t,src:t.video,loop:!0,muted:!0,playsInline:!0})}),s.jsx(B2,{ref:z,src:M,crossOrigin:"anonymous",preload:"auto"}),s.jsx(V2,{$show:b,className:"left",children:s.jsxs(Z2,{children:[s.jsx($2,{children:"वाणी"}),s.jsx(K2,{children:R.length>0?R.slice(Math.max(0,j-1),Math.min(j+6,R.length)).map((O,_)=>{const I=Math.max(0,j-1)+_,dt=I===j,H=I<j;return s.jsxs("span",{children:[dt?s.jsx(J2,{children:O.word}):H?s.jsx(F2,{children:O.word}):s.jsx(W2,{children:O.word}),_<Math.min(j+6,R.length)-Math.max(0,j-1)-1?" ":""]},I)}):f?f.split(`
`).map((O,_)=>s.jsx(P2,{children:O},_)):null})]})}),s.jsx(_2,{$visible:le,children:N}),s.jsxs(L2,{children:[s.jsxs(Y2,{$visible:x,children:["Receiving divine guidance",s.jsxs(G2,{children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]}),s.jsxs(q2,{$disabled:x,children:[s.jsx(k2,{ref:L,type:"text",placeholder:x?"Receiving guidance...":r?"Listening...":"Share your heart...",value:h,onChange:O=>g(O.target.value),onKeyPress:on,disabled:x}),h.trim()?s.jsx(Q2,{onClick:un,type:"button",disabled:x,children:x?s.jsx(Td,{$color:"#0a1a0a"}):s.jsx(Jx,{})}):s.jsx(X2,{isListening:r||x,onClick:Te,type:"button",disabled:x,children:x?s.jsx(Td,{$color:"#8dc63f"}):r?s.jsx(Vx,{}):s.jsx($x,{})})]})]})]})};function e5(){return s.jsx(Tv,{children:s.jsx("div",{className:"App",children:s.jsxs(av,{children:[s.jsx(qa,{path:"/",element:s.jsx(Bx,{})}),s.jsx(qa,{path:"/static",element:s.jsx(px,{})}),s.jsx(qa,{path:"/slides",element:s.jsx(zx,{})}),s.jsx(qa,{path:"/choose",element:s.jsx(b2,{})}),s.jsx(qa,{path:"/talk/:lordId",element:s.jsx(I2,{})}),s.jsx(qa,{path:"/talk",element:s.jsx(Dm,{to:"/choose",replace:!0})})]})})})}const a5=fy.createRoot(document.getElementById("root"));a5.render(s.jsx(Fe.StrictMode,{children:s.jsx(e5,{})}));
