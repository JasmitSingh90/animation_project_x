(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function lv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function XS(){if(Vg)return vo;Vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return vo.Fragment=t,vo.jsx=i,vo.jsxs=i,vo}var kg;function WS(){return kg||(kg=1,Bf.exports=XS()),Bf.exports}var Ro=WS(),zf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function qS(){if(Xg)return se;Xg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function M(R,X,ot){this.props=R,this.context=X,this.refs=C,this.updater=ot||y}M.prototype.isReactComponent={},M.prototype.setState=function(R,X){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,X,"setState")},M.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function _(){}_.prototype=M.prototype;function H(R,X,ot){this.props=R,this.context=X,this.refs=C,this.updater=ot||y}var N=H.prototype=new _;N.constructor=H,b(N,M.prototype),N.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function I(R,X,ot,_t,Mt,q){return ot=q.ref,{$$typeof:o,type:R,key:X,ref:ot!==void 0?ot:null,props:q}}function Q(R,X){return I(R.type,X,void 0,void 0,void 0,R.props)}function D(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function w(R){var X={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ot){return X[ot]})}var B=/\/+/g;function ct(R,X){return typeof R=="object"&&R!==null&&R.key!=null?w(""+R.key):X.toString(36)}function ft(){}function pt(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(ft,ft):(R.status="pending",R.then(function(X){R.status==="pending"&&(R.status="fulfilled",R.value=X)},function(X){R.status==="pending"&&(R.status="rejected",R.reason=X)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function mt(R,X,ot,_t,Mt){var q=typeof R;(q==="undefined"||q==="boolean")&&(R=null);var st=!1;if(R===null)st=!0;else switch(q){case"bigint":case"string":case"number":st=!0;break;case"object":switch(R.$$typeof){case o:case t:st=!0;break;case g:return st=R._init,mt(st(R._payload),X,ot,_t,Mt)}}if(st)return Mt=Mt(R),st=_t===""?"."+ct(R,0):_t,U(Mt)?(ot="",st!=null&&(ot=st.replace(B,"$&/")+"/"),mt(Mt,X,ot,"",function(Ot){return Ot})):Mt!=null&&(D(Mt)&&(Mt=Q(Mt,ot+(Mt.key==null||R&&R.key===Mt.key?"":(""+Mt.key).replace(B,"$&/")+"/")+st)),X.push(Mt)),1;st=0;var yt=_t===""?".":_t+":";if(U(R))for(var wt=0;wt<R.length;wt++)_t=R[wt],q=yt+ct(_t,wt),st+=mt(_t,X,ot,q,Mt);else if(wt=S(R),typeof wt=="function")for(R=wt.call(R),wt=0;!(_t=R.next()).done;)_t=_t.value,q=yt+ct(_t,wt++),st+=mt(_t,X,ot,q,Mt);else if(q==="object"){if(typeof R.then=="function")return mt(pt(R),X,ot,_t,Mt);throw X=String(R),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return st}function P(R,X,ot){if(R==null)return R;var _t=[],Mt=0;return mt(R,_t,"","",function(q){return X.call(ot,q,Mt++)}),_t}function j(R){if(R._status===-1){var X=R._result;X=X(),X.then(function(ot){(R._status===0||R._status===-1)&&(R._status=1,R._result=ot)},function(ot){(R._status===0||R._status===-1)&&(R._status=2,R._result=ot)}),R._status===-1&&(R._status=0,R._result=X)}if(R._status===1)return R._result.default;throw R._result}var Y=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function lt(){}return se.Children={map:P,forEach:function(R,X,ot){P(R,function(){X.apply(this,arguments)},ot)},count:function(R){var X=0;return P(R,function(){X++}),X},toArray:function(R){return P(R,function(X){return X})||[]},only:function(R){if(!D(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=H,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(R){return z.H.useMemoCache(R)}},se.cache=function(R){return function(){return R.apply(null,arguments)}},se.cloneElement=function(R,X,ot){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var _t=b({},R.props),Mt=R.key,q=void 0;if(X!=null)for(st in X.ref!==void 0&&(q=void 0),X.key!==void 0&&(Mt=""+X.key),X)!k.call(X,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&X.ref===void 0||(_t[st]=X[st]);var st=arguments.length-2;if(st===1)_t.children=ot;else if(1<st){for(var yt=Array(st),wt=0;wt<st;wt++)yt[wt]=arguments[wt+2];_t.children=yt}return I(R.type,Mt,void 0,void 0,q,_t)},se.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},se.createElement=function(R,X,ot){var _t,Mt={},q=null;if(X!=null)for(_t in X.key!==void 0&&(q=""+X.key),X)k.call(X,_t)&&_t!=="key"&&_t!=="__self"&&_t!=="__source"&&(Mt[_t]=X[_t]);var st=arguments.length-2;if(st===1)Mt.children=ot;else if(1<st){for(var yt=Array(st),wt=0;wt<st;wt++)yt[wt]=arguments[wt+2];Mt.children=yt}if(R&&R.defaultProps)for(_t in st=R.defaultProps,st)Mt[_t]===void 0&&(Mt[_t]=st[_t]);return I(R,q,void 0,void 0,null,Mt)},se.createRef=function(){return{current:null}},se.forwardRef=function(R){return{$$typeof:d,render:R}},se.isValidElement=D,se.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:j}},se.memo=function(R,X){return{$$typeof:p,type:R,compare:X===void 0?null:X}},se.startTransition=function(R){var X=z.T,ot={};z.T=ot;try{var _t=R(),Mt=z.S;Mt!==null&&Mt(ot,_t),typeof _t=="object"&&_t!==null&&typeof _t.then=="function"&&_t.then(lt,Y)}catch(q){Y(q)}finally{z.T=X}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(R){return z.H.use(R)},se.useActionState=function(R,X,ot){return z.H.useActionState(R,X,ot)},se.useCallback=function(R,X){return z.H.useCallback(R,X)},se.useContext=function(R){return z.H.useContext(R)},se.useDebugValue=function(){},se.useDeferredValue=function(R,X){return z.H.useDeferredValue(R,X)},se.useEffect=function(R,X,ot){var _t=z.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _t.useEffect(R,X)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(R,X,ot){return z.H.useImperativeHandle(R,X,ot)},se.useInsertionEffect=function(R,X){return z.H.useInsertionEffect(R,X)},se.useLayoutEffect=function(R,X){return z.H.useLayoutEffect(R,X)},se.useMemo=function(R,X){return z.H.useMemo(R,X)},se.useOptimistic=function(R,X){return z.H.useOptimistic(R,X)},se.useReducer=function(R,X,ot){return z.H.useReducer(R,X,ot)},se.useRef=function(R){return z.H.useRef(R)},se.useState=function(R){return z.H.useState(R)},se.useSyncExternalStore=function(R,X,ot){return z.H.useSyncExternalStore(R,X,ot)},se.useTransition=function(){return z.H.useTransition()},se.version="19.1.1",se}var Wg;function ad(){return Wg||(Wg=1,zf.exports=qS()),zf.exports}var _u=ad();const YS=lv(_u);var Ff={exports:{}},So={},If={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function ZS(){return qg||(qg=1,(function(o){function t(P,j){var Y=P.length;P.push(j);t:for(;0<Y;){var lt=Y-1>>>1,R=P[lt];if(0<l(R,j))P[lt]=j,P[Y]=R,Y=lt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],Y=P.pop();if(Y!==j){P[0]=Y;t:for(var lt=0,R=P.length,X=R>>>1;lt<X;){var ot=2*(lt+1)-1,_t=P[ot],Mt=ot+1,q=P[Mt];if(0>l(_t,Y))Mt<R&&0>l(q,_t)?(P[lt]=q,P[Mt]=Y,lt=Mt):(P[lt]=_t,P[ot]=Y,lt=ot);else if(Mt<R&&0>l(q,Y))P[lt]=q,P[Mt]=Y,lt=Mt;else break t}}return j}function l(P,j){var Y=P.sortIndex-j.sortIndex;return Y!==0?Y:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,S=3,y=!1,b=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function z(P){if(C=!1,U(P),!b)if(i(m)!==null)b=!0,k||(k=!0,ct());else{var j=i(p);j!==null&&mt(z,j.startTime-P)}}var k=!1,I=-1,Q=5,D=-1;function w(){return M?!0:!(o.unstable_now()-D<Q)}function B(){if(M=!1,k){var P=o.unstable_now();D=P;var j=!0;try{t:{b=!1,C&&(C=!1,H(I),I=-1),y=!0;var Y=S;try{e:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&w());){var lt=v.callback;if(typeof lt=="function"){v.callback=null,S=v.priorityLevel;var R=lt(v.expirationTime<=P);if(P=o.unstable_now(),typeof R=="function"){v.callback=R,U(P),j=!0;break e}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)j=!0;else{var X=i(p);X!==null&&mt(z,X.startTime-P),j=!1}}break t}finally{v=null,S=Y,y=!1}j=void 0}}finally{j?ct():k=!1}}}var ct;if(typeof N=="function")ct=function(){N(B)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,pt=ft.port2;ft.port1.onmessage=B,ct=function(){pt.postMessage(null)}}else ct=function(){_(B,0)};function mt(P,j){I=_(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return P()}finally{S=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return j()}finally{S=Y}},o.unstable_scheduleCallback=function(P,j,Y){var lt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?lt+Y:lt):Y=lt,P){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=Y+R,P={id:g++,callback:j,priorityLevel:P,startTime:Y,expirationTime:R,sortIndex:-1},Y>lt?(P.sortIndex=Y,t(p,P),i(m)===null&&P===i(p)&&(C?(H(I),I=-1):C=!0,mt(z,Y-lt))):(P.sortIndex=R,t(m,P),b||y||(b=!0,k||(k=!0,ct()))),P},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(P){var j=S;return function(){var Y=S;S=j;try{return P.apply(this,arguments)}finally{S=Y}}}})(Hf)),Hf}var Yg;function KS(){return Yg||(Yg=1,If.exports=ZS()),If.exports}var Gf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function jS(){if(Zg)return Tn;Zg=1;var o=ad();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Tn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.1.1",Tn}var Kg;function QS(){if(Kg)return Gf.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Gf.exports=jS(),Gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function JS(){if(jg)return So;jg=1;var o=KS(),t=ad(),i=QS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,s=f;break}if(T===s){x=!0,s=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=u;break}if(T===s){x=!0,s=f,a=u;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case z:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var mt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},lt=[],R=-1;function X(e){return{current:e}}function ot(e){0>R||(e.current=lt[R],lt[R]=null,R--)}function _t(e,n){R++,lt[R]=e.current,e.current=n}var Mt=X(null),q=X(null),st=X(null),yt=X(null);function wt(e,n){switch(_t(st,n),_t(q,e),_t(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=gg(n),e=_g(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ot(Mt),_t(Mt,e)}function Ot(){ot(Mt),ot(q),ot(st)}function Kt(e){e.memoizedState!==null&&_t(yt,e);var n=Mt.current,a=_g(n,e.type);n!==a&&(_t(q,e),_t(Mt,a))}function Ee(e){q.current===e&&(ot(Mt),ot(q)),yt.current===e&&(ot(yt),ho._currentValue=Y)}var fe=Object.prototype.hasOwnProperty,F=o.unstable_scheduleCallback,Ce=o.unstable_cancelCallback,Qt=o.unstable_shouldYield,Me=o.unstable_requestPaint,It=o.unstable_now,Ie=o.unstable_getCurrentPriorityLevel,Ht=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,Xe=o.unstable_NormalPriority,We=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,tt=o.unstable_setDisableYieldValue,ht=null,xt=null;function ut(e){if(typeof E=="function"&&tt(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(ht,e)}catch{}}var Bt=Math.clz32?Math.clz32:qt,Rt=Math.log,Xt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var Et=256,Lt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Zt(s):(x&=T,x!==0?u=Zt(x):a||(a=T&~e,a!==0&&(u=Zt(a))))):(T=s&~f,T!==0?u=Zt(T):x!==0?u=Zt(x):a||(a=s&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,n,a,s,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Bt(a),vt=1<<dt;T[dt]=0,O[dt]=-1;var et=$[dt];if(et!==null)for($[dt]=null,dt=0;dt<et.length;dt++){var nt=et[dt];nt!==null&&(nt.lane&=-536870913)}a&=~vt}s!==0&&St(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function St(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Bt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Bt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Bg(e.type))}function ui(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var sn=Math.random().toString(36).slice(2),on="__reactFiber$"+sn,Ye="__reactProps$"+sn,Si="__reactContainer$"+sn,mr="__reactEvents$"+sn,Fo="__reactListeners$"+sn,gr="__reactHandles$"+sn,Ts="__reactResources$"+sn,xi="__reactMarker$"+sn;function _r(e){delete e[on],delete e[Ye],delete e[mr],delete e[Fo],delete e[gr]}function Li(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Si]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Mg(e);e!==null;){if(a=e[on])return a;e=Mg(e)}return n}e=a,a=e.parentNode}return null}function oa(e){if(e=e[on]||e[Si]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ha(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function la(e){var n=e[Ts];return n||(n=e[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[xi]=!0}var Io=new Set,Ho={};function A(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(Ho[e]=n,e=0;e<n.length;e++)Io.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},K={};function bt(e){return fe.call(K,e)?!0:fe.call(rt,e)?!1:at.test(e)?K[e]=!0:(rt[e]=!0,!1)}function Ut(e,n,a){if(bt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ft(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Jt,te;function Wt(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+te}var le=!1;function Te(e,n){if(!e||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(nt){var et=nt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(nt){et=nt}e.call(vt.prototype)}}else{try{throw Error()}catch(nt){et=nt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var O=x.split(`
`),$=T.split(`
`);for(u=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===O.length||u===$.length)for(s=O.length-1,u=$.length-1;1<=s&&0<=u&&O[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(O[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||O[s]!==$[u]){var dt=`
`+O[s].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=s&&0<=u);break}}}finally{le=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function Ve(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Wt("Activity");default:return""}}function Le(e){try{var n="";do n+=Ve(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(e){var n=jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function me(e){e._valueTracker||(e._valueTracker=Ge(e))}function Mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=jt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rn=/[\n"\\]/g;function hn(e){return e.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(e,n,a,s,u,f,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ue(n)):e.value!==""+ue(n)&&(e.value=""+ue(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?yn(e,x,ue(n)):a!=null?yn(e,x,ue(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ue(T):e.removeAttribute("name")}function Cn(e,n,a,s,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function yn(e,n,a){n==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ze(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function _n(e,n,a){if(n!=null&&(n=""+ue(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ue(a):""}function vr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(mt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function On(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Gv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _d(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&gd(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&gd(e,f,n[f])}function Pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return kv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ou=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,xr=null;function vd(e){var n=oa(e);if(n&&(e=n.stateNode)){var a=e[Ye]||null;t:switch(e=n.stateNode,n.type){case"input":if(ze(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[Ye]||null;if(!u)throw Error(r(90));ze(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Mn(s)}break t;case"textarea":_n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(e,!!a.multiple,n,!1)}}}var zu=!1;function Sd(e,n,a){if(zu)return e(n,a);zu=!0;try{var s=e(n);return s}finally{if(zu=!1,(Sr!==null||xr!==null)&&(Al(),Sr&&(n=Sr,e=xr,xr=Sr=null,vd(n),e)))for(n=0;n<e.length;n++)vd(e[n])}}function bs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Ye]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(Ni)try{var As={};Object.defineProperty(As,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Fu=!1}var ua=null,Iu=null,Vo=null;function xd(){if(Vo)return Vo;var e,n=Iu,a=n.length,s,u="value"in ua?ua.value:ua.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===u[f-s];s++);return Vo=u.slice(e,1<s?1-s:void 0)}function ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Md(){return!1}function Bn(e){function n(a,s,u,f,x){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Md,this.isPropagationStopped=Md,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Bn(Ga),Rs=g({},Ga,{view:0,detail:0}),Xv=Bn(Rs),Hu,Gu,Cs,qo=g({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cs&&(Cs&&e.type==="mousemove"?(Hu=e.screenX-Cs.screenX,Gu=e.screenY-Cs.screenY):Gu=Hu=0,Cs=e),Hu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),yd=Bn(qo),Wv=g({},qo,{dataTransfer:0}),qv=Bn(Wv),Yv=g({},Rs,{relatedTarget:0}),Vu=Bn(Yv),Zv=g({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Bn(Zv),jv=g({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qv=Bn(jv),Jv=g({},Ga,{data:0}),Ed=Bn(Jv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=e0[e])?!!n[e]:!1}function ku(){return n0}var i0=g({},Rs,{key:function(e){if(e.key){var n=$v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a0=Bn(i0),r0=g({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Bn(r0),s0=g({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),o0=Bn(s0),l0=g({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Bn(l0),c0=g({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=Bn(c0),h0=g({},Ga,{newState:0,oldState:0}),d0=Bn(h0),p0=[9,13,27,32],Xu=Ni&&"CompositionEvent"in window,ws=null;Ni&&"documentMode"in document&&(ws=document.documentMode);var m0=Ni&&"TextEvent"in window&&!ws,bd=Ni&&(!Xu||ws&&8<ws&&11>=ws),Ad=" ",Rd=!1;function Cd(e,n){switch(e){case"keyup":return p0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function g0(e,n){switch(e){case"compositionend":return wd(n);case"keypress":return n.which!==32?null:(Rd=!0,Ad);case"textInput":return e=n.data,e===Ad&&Rd?null:e;default:return null}}function _0(e,n){if(Mr)return e==="compositionend"||!Xu&&Cd(e,n)?(e=xd(),Vo=Iu=ua=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bd&&n.locale!=="ko"?null:n.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!v0[e.type]:n==="textarea"}function Ud(e,n,a,s){Sr?xr?xr.push(s):xr=[s]:Sr=s,n=Ll(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ds=null,Us=null;function S0(e){fg(e,0)}function Yo(e){var n=Ha(e);if(Mn(n))return e}function Ld(e,n){if(e==="change")return n}var Nd=!1;if(Ni){var Wu;if(Ni){var qu="oninput"in document;if(!qu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),qu=typeof Pd.oninput=="function"}Wu=qu}else Wu=!1;Nd=Wu&&(!document.documentMode||9<document.documentMode)}function Od(){Ds&&(Ds.detachEvent("onpropertychange",Bd),Us=Ds=null)}function Bd(e){if(e.propertyName==="value"&&Yo(Us)){var n=[];Ud(n,Us,e,Bu(e)),Sd(S0,n)}}function x0(e,n,a){e==="focusin"?(Od(),Ds=n,Us=a,Ds.attachEvent("onpropertychange",Bd)):e==="focusout"&&Od()}function M0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Us)}function y0(e,n){if(e==="click")return Yo(n)}function E0(e,n){if(e==="input"||e==="change")return Yo(n)}function T0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:T0;function Ls(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!fe.call(n,u)||!kn(e[u],n[u]))return!1}return!0}function zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var a=zd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zd(a)}}function Id(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Id(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ci(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ci(e.document)}return n}function Yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var b0=Ni&&"documentMode"in document&&11>=document.documentMode,yr=null,Zu=null,Ns=null,Ku=!1;function Gd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||yr==null||yr!==ci(s)||(s=yr,"selectionStart"in s&&Yu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Ls(Ns,s)||(Ns=s,s=Ll(Zu,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=yr)))}function Va(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Er={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},ju={},Vd={};Ni&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function ka(e){if(ju[e])return ju[e];if(!Er[e])return e;var n=Er[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return ju[e]=n[a];return e}var kd=ka("animationend"),Xd=ka("animationiteration"),Wd=ka("animationstart"),A0=ka("transitionrun"),R0=ka("transitionstart"),C0=ka("transitioncancel"),qd=ka("transitionend"),Yd=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function fi(e,n){Yd.set(e,n),A(n,[e])}var Zd=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=Zd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Le(n)},Zd.set(e,n),n)}return{value:e,source:n,stack:Le(n)}}var $n=[],Tr=0,Ju=0;function Zo(){for(var e=Tr,n=Ju=Tr=0;n<e;){var a=$n[n];$n[n++]=null;var s=$n[n];$n[n++]=null;var u=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,s!==null&&u!==null){var x=s.pending;x===null?u.next=u:(u.next=x.next,x.next=u),s.pending=u}f!==0&&Kd(a,u,f)}}function Ko(e,n,a,s){$n[Tr++]=e,$n[Tr++]=n,$n[Tr++]=a,$n[Tr++]=s,Ju|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function $u(e,n,a,s){return Ko(e,n,a,s),jo(e)}function br(e,n){return Ko(e,null,null,n),jo(e)}function Kd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(e){if(50<ao)throw ao=0,sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ar={};function w0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,s){return new w0(e,n,a,s)}function tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Qo(e,n,a,s,u,f){var x=0;if(s=e,typeof e=="function")tc(e)&&(x=1);else if(typeof e=="string")x=US(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Xn(31,a,n,u),e.elementType=D,e.lanes=f,e;case b:return Xa(a.children,u,f,n);case C:x=8,u|=24;break;case M:return e=Xn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case z:return e=Xn(13,a,n,u),e.elementType=z,e.lanes=f,e;case k:return e=Xn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:x=10;break t;case H:x=9;break t;case U:x=11;break t;case I:x=14;break t;case Q:x=16,s=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Xn(x,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function Xa(e,n,a,s){return e=Xn(7,e,s,n),e.lanes=a,e}function ec(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function nc(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rr=[],Cr=0,Jo=null,$o=0,ti=[],ei=0,Wa=null,Oi=1,Bi="";function qa(e,n){Rr[Cr++]=$o,Rr[Cr++]=Jo,Jo=e,$o=n}function Qd(e,n,a){ti[ei++]=Oi,ti[ei++]=Bi,ti[ei++]=Wa,Wa=e;var s=Oi;e=Bi;var u=32-Bt(s)-1;s&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var x=u-u%5;f=(s&(1<<x)-1).toString(32),s>>=x,u-=x,Oi=1<<32-Bt(n)+u|a<<u|s,Bi=f+e}else Oi=1<<f|a<<u|s,Bi=e}function ic(e){e.return!==null&&(qa(e,1),Qd(e,1,0))}function ac(e){for(;e===Jo;)Jo=Rr[--Cr],Rr[Cr]=null,$o=Rr[--Cr],Rr[Cr]=null;for(;e===Wa;)Wa=ti[--ei],ti[ei]=null,Bi=ti[--ei],ti[ei]=null,Oi=ti[--ei],ti[ei]=null}var wn=null,Ke=null,Re=!1,Ya=null,Mi=!1,rc=Error(r(519));function Za(e){var n=Error(r(418,""));throw Bs(Jn(n,e)),rc}function Jd(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[on]=e,n[Ye]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<so.length;a++)_e(so[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),me(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),vr(n,s.value,s.defaultValue,s.children),me(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||mg(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Nl),n=!0):n=!1,n||Za(e)}function $d(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:wn=wn.return}}function Ps(e){if(e!==wn)return!1;if(!Re)return $d(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yf(e.type,e.memoizedProps)),a=!a),a&&Ke&&Za(e),$d(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ke=di(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ke=null}}else n===27?(n=Ke,ba(e.type)?(e=Af,Af=null,Ke=e):Ke=n):Ke=wn?di(e.stateNode.nextSibling):null;return!0}function Os(){Ke=wn=null,Re=!1}function tp(){var e=Ya;return e!==null&&(In===null?In=e:In.push.apply(In,e),Ya=null),e}function Bs(e){Ya===null?Ya=[e]:Ya.push(e)}var sc=X(null),Ka=null,zi=null;function ca(e,n,a){_t(sc,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=sc.current,ot(sc)}function oc(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function lc(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),oc(f.return,a,e),s||(x=null);break t}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),oc(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function zs(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=u.type;kn(u.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(u===yt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ho):e=[ho])}u=u.return}e!==null&&lc(n,e,a,s),n.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Ka=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return ep(Ka,e)}function el(e,n){return Ka===null&&ja(e),ep(e,n)}function ep(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(e===null)throw Error(r(308));zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else zi=zi.next=n;return a}var D0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},U0=o.unstable_scheduleCallback,L0=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new D0,data:new Map,refCount:0}}function Fs(e){e.refCount--,e.refCount===0&&U0(L0,function(){e.controller.abort()})}var Is=null,cc=0,wr=0,Dr=null;function N0(e,n){if(Is===null){var a=Is=[];cc=0,wr=df(),Dr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return cc++,n.then(np,np),n}function np(){if(--cc===0&&Is!==null){Dr!==null&&(Dr.status="fulfilled");var e=Is;Is=null,wr=0,Dr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function P0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var ip=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&N0(e,n),ip!==null&&ip(e,n)};var Qa=X(null);function fc(){var e=Qa.current;return e!==null?e:He.pooledCache}function nl(e,n){n===null?_t(Qa,Qa.current):_t(Qa,n.pool)}function ap(){var e=fc();return e===null?null:{parent:ln._currentValue,pool:e}}var Hs=Error(r(460)),rp=Error(r(474)),il=Error(r(542)),hc={then:function(){}};function sp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function al(){}function op(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(al,al),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e;default:if(typeof n.status=="string")n.then(al,al);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e}throw Gs=n,Hs}}var Gs=null;function lp(){if(Gs===null)throw Error(r(459));var e=Gs;return Gs=null,e}function up(e){if(e===Hs||e===il)throw Error(r(483))}var fa=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=jo(e),Kd(e,null,a),n}return Ko(e,s,n,a),jo(e)}function Vs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Vt(e,a)}}function mc(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var gc=!1;function ks(){if(gc){var e=Dr;if(e!==null)throw e}}function Xs(e,n,a,s){gc=!1;var u=e.updateQueue;fa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var O=T,$=O.next;O.next=null,x===null?f=$:x.next=$,x=O;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==x&&(T===null?dt.firstBaseUpdate=$:T.next=$,dt.lastBaseUpdate=O))}if(f!==null){var vt=u.baseState;x=0,dt=$=O=null,T=f;do{var et=T.lane&-536870913,nt=et!==T.lane;if(nt?(xe&et)===et:(s&et)===et){et!==0&&et===wr&&(gc=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,$t=T;et=n;var Oe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){vt=ne.call(Oe,vt,et);break t}vt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,et=typeof ne=="function"?ne.call(Oe,vt,et):ne,et==null)break t;vt=g({},vt,et);break t;case 2:fa=!0}}et=T.callback,et!==null&&(e.flags|=64,nt&&(e.flags|=8192),nt=u.callbacks,nt===null?u.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?($=dt=nt,O=vt):dt=dt.next=nt,x|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,u.lastBaseUpdate=nt,u.shared.pending=null}}while(!0);dt===null&&(O=vt),u.baseState=O,u.firstBaseUpdate=$,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ma|=x,e.lanes=x,e.memoizedState=vt}}function cp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function fp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cp(a[e],n)}var Ur=X(null),rl=X(0);function hp(e,n){e=Wi,_t(rl,e),_t(Ur,n),Wi=e|n.baseLanes}function _c(){_t(rl,Wi),_t(Ur,Ur.current)}function vc(){Wi=rl.current,ot(Ur),ot(rl)}var pa=0,he=null,Ne=null,en=null,sl=!1,Lr=!1,Ja=!1,ol=0,Ws=0,Nr=null,O0=0;function Qe(){throw Error(r(321))}function Sc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function xc(e,n,a,s,u,f){return pa=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Kp:jp,Ja=!1,f=a(s,u),Ja=!1,Lr&&(f=pp(n,a,s,u)),dp(e),f}function dp(e){P.H=dl;var n=Ne!==null&&Ne.next!==null;if(pa=0,en=Ne=he=null,sl=!1,Ws=0,Nr=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&tl(e)&&(dn=!0))}function pp(e,n,a,s){he=e;var u=0;do{if(Lr&&(Nr=null),Ws=0,Lr=!1,25<=u)throw Error(r(301));if(u+=1,en=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=V0,f=n(a,s)}while(Lr);return f}function B0(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?qs(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(he.flags|=1024),n}function Mc(){var e=ol!==0;return ol=0,e}function yc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ec(e){if(sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}sl=!1}pa=0,en=Ne=he=null,Lr=!1,Ws=ol=0,Nr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?he.memoizedState=en=e:en=en.next=e,en}function nn(){if(Ne===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=en===null?he.memoizedState:en.next;if(n!==null)en=n,Ne=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},en===null?he.memoizedState=en=e:en=en.next=e}return en}function Tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qs(e){var n=Ws;return Ws+=1,Nr===null&&(Nr=[]),e=op(Nr,e,n),n=he,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Kp:jp),e}function ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qs(e);if(e.$$typeof===N)return En(e)}throw Error(r(438,String(e)))}function bc(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tc(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=w;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=nn();return Ac(n,Ne,e)}function Ac(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=x=null,O=null,$=n,dt=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(xe&vt)===vt:(pa&vt)===vt){var et=$.revertLane;if(et===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===wr&&(dt=!0);else if((pa&et)===et){$=$.next,et===wr&&(dt=!0);continue}else vt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=vt,x=f):O=O.next=vt,he.lanes|=et,Ma|=et;vt=$.action,Ja&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else et={lane:vt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=et,x=f):O=O.next=et,he.lanes|=vt,Ma|=vt;$=$.next}while($!==null&&$!==n);if(O===null?x=f:O.next=T,!kn(f,e.memoizedState)&&(dn=!0,dt&&(a=Dr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=O,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Rc(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);kn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function mp(e,n,a){var s=he,u=nn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!kn((Ne||u).memoizedState,a);x&&(u.memoizedState=a,dn=!0),u=u.queue;var T=vp.bind(null,s,u,e);if(Ys(2048,8,T,[e]),u.getSnapshot!==n||x||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Pr(9,cl(),_p.bind(null,s,u,a,n),null),He===null)throw Error(r(349));f||(pa&124)!==0||gp(s,n,a)}return a}function gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Tc(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _p(e,n,a,s){n.value=a,n.getSnapshot=s,Sp(n)&&xp(e)}function vp(e,n,a){return a(function(){Sp(n)&&xp(e)})}function Sp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function xp(e){var n=br(e,2);n!==null&&Kn(n,e,2)}function Cc(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),Ja){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Mp(e,n,a,s){return e.baseState=a,Ac(e,Ne,typeof s=="function"?s:Ii)}function z0(e,n,a,s,u){if(hl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function yp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(u,s),O=P.S;O!==null&&O(x,T),Ep(e,n,T)}catch($){wc(e,n,$)}finally{P.T=f}}else try{f=a(u,s),Ep(e,n,f)}catch($){wc(e,n,$)}}function Ep(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Tp(e,n,s)},function(s){return wc(e,n,s)}):Tp(e,n,a)}function Tp(e,n,a){n.status="fulfilled",n.value=a,bp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,yp(e,a)))}function wc(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==s)}e.action=null}function bp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ap(e,n){return n}function Rp(e,n){if(Re){var a=He.formState;if(a!==null){t:{var s=he;if(Re){if(Ke){e:{for(var u=Ke,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=di(u.nextSibling),s=u.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ap,lastRenderedState:n},a.queue=s,a=qp.bind(null,he,s),s.dispatch=a,s=Cc(!1),f=Pc.bind(null,he,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=z0.bind(null,he,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Cp(e){var n=nn();return wp(n,Ne,e)}function wp(e,n,a){if(n=Ac(e,n,Ap)[0],e=ul(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=qs(n)}catch(x){throw x===Hs?il:x}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Pr(9,cl(),F0.bind(null,u,a),null)),[s,f,e]}function F0(e,n){e.action=n}function Dp(e){var n=nn(),a=Ne;if(a!==null)return wp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Pr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Tc(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function cl(){return{destroy:void 0,resource:void 0}}function Up(){return nn().memoizedState}function fl(e,n,a,s){var u=zn();s=s===void 0?null:s,he.flags|=e,u.memoizedState=Pr(1|n,cl(),a,s)}function Ys(e,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;Ne!==null&&s!==null&&Sc(s,Ne.memoizedState.deps)?u.memoizedState=Pr(n,f,a,s):(he.flags|=e,u.memoizedState=Pr(1|n,f,a,s))}function Lp(e,n){fl(8390656,8,e,n)}function Np(e,n){Ys(2048,8,e,n)}function Pp(e,n){return Ys(4,2,e,n)}function Op(e,n){return Ys(4,4,e,n)}function Bp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zp(e,n,a){a=a!=null?a.concat([e]):null,Ys(4,4,Bp.bind(null,n,e),a)}function Dc(){}function Fp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Sc(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Ip(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Sc(n,s[1]))return s[0];if(s=e(),Ja){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[s,n],s}function Uc(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Vm(),he.lanes|=e,Ma|=e,a)}function Hp(e,n,a,s){return kn(a,n)?a:Ur.current!==null?(e=Uc(e,a,s),kn(e,n)||(dn=!0),e):(pa&42)===0?(dn=!0,e.memoizedState=a):(e=Vm(),he.lanes|=e,Ma|=e,n)}function Gp(e,n,a,s,u){var f=j.p;j.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,Pc(e,!1,n,a);try{var O=u(),$=P.S;if($!==null&&$(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var dt=P0(O,s);Zs(e,n,dt,Zn(e))}else Zs(e,n,s,Zn(e))}catch(vt){Zs(e,n,{then:function(){},status:"rejected",reason:vt},Zn())}finally{j.p=f,P.T=x}}function I0(){}function Lc(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=Vp(e).queue;Gp(e,u,n,Y,a===null?I0:function(){return kp(e),a(s)})}function Vp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function kp(e){var n=Vp(e).next.queue;Zs(e,n,{},Zn())}function Nc(){return En(ho)}function Xp(){return nn().memoizedState}function Wp(){return nn().memoizedState}function H0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ha(a);var s=da(n,e,a);s!==null&&(Kn(s,n,a),Vs(s,n,a)),n={cache:uc()},e.payload=n;return}n=n.return}}function G0(e,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?Yp(n,a):(a=$u(e,n,a,s),a!==null&&(Kn(a,e,s),Zp(a,n,s)))}function qp(e,n,a){var s=Zn();Zs(e,n,a,s)}function Zs(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))Yp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,kn(T,x))return Ko(e,n,u,0),He===null&&Zo(),!1}catch{}finally{}if(a=$u(e,n,u,s),a!==null)return Kn(a,e,s),Zp(a,n,s),!0}return!1}function Pc(e,n,a,s){if(s={lane:2,revertLane:df(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(n)throw Error(r(479))}else n=$u(e,a,s,2),n!==null&&Kn(n,e,2)}function hl(e){var n=e.alternate;return e===he||n!==null&&n===he}function Yp(e,n){Lr=sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Vt(e,a)}}var dl={readContext:En,use:ll,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Kp={readContext:En,use:ll,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Lp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,fl(4194308,4,Bp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var s=e();if(Ja){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=zn();if(a!==void 0){var u=a(n);if(Ja){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=G0.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Cc(e);var n=e.queue,a=qp.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Dc,useDeferredValue:function(e,n){var a=zn();return Uc(a,e,n)},useTransition:function(){var e=Cc(!1);return e=Gp.bind(null,he,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=he,u=zn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(xe&124)!==0||gp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Lp(vp.bind(null,s,f,e),[e]),s.flags|=2048,Pr(9,cl(),_p.bind(null,s,f,a,n),null),a},useId:function(){var e=zn(),n=He.identifierPrefix;if(Re){var a=Bi,s=Oi;a=(s&~(1<<32-Bt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=O0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Nc,useFormState:Rp,useActionState:Rp,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pc.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:bc,useCacheRefresh:function(){return zn().memoizedState=H0.bind(null,he)}},jp={readContext:En,use:ll,useCallback:Fp,useContext:En,useEffect:Np,useImperativeHandle:zp,useInsertionEffect:Pp,useLayoutEffect:Op,useMemo:Ip,useReducer:ul,useRef:Up,useState:function(){return ul(Ii)},useDebugValue:Dc,useDeferredValue:function(e,n){var a=nn();return Hp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=ul(Ii)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:qs(e),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:Nc,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,n){var a=nn();return Mp(a,Ne,e,n)},useMemoCache:bc,useCacheRefresh:Wp},V0={readContext:En,use:ll,useCallback:Fp,useContext:En,useEffect:Np,useImperativeHandle:zp,useInsertionEffect:Pp,useLayoutEffect:Op,useMemo:Ip,useReducer:Rc,useRef:Up,useState:function(){return Rc(Ii)},useDebugValue:Dc,useDeferredValue:function(e,n){var a=nn();return Ne===null?Uc(a,e,n):Hp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Rc(Ii)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:qs(e),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:Nc,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,n){var a=nn();return Ne!==null?Mp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bc,useCacheRefresh:Wp},Or=null,Ks=0;function pl(e){var n=Ks;return Ks+=1,Or===null&&(Or=[]),op(Or,e,n)}function js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qp(e){var n=e._init;return n(e._payload)}function Jp(e){function n(Z,G){if(e){var J=Z.deletions;J===null?(Z.deletions=[G],Z.flags|=16):J.push(G)}}function a(Z,G){if(!e)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function s(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function u(Z,G){return Z=Pi(Z,G),Z.index=0,Z.sibling=null,Z}function f(Z,G,J){return Z.index=J,e?(J=Z.alternate,J!==null?(J=J.index,J<G?(Z.flags|=67108866,G):J):(Z.flags|=67108866,G)):(Z.flags|=1048576,G)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,G,J,gt){return G===null||G.tag!==6?(G=ec(J,Z.mode,gt),G.return=Z,G):(G=u(G,J),G.return=Z,G)}function O(Z,G,J,gt){var Gt=J.type;return Gt===b?dt(Z,G,J.props.children,gt,J.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Q&&Qp(Gt)===G.type)?(G=u(G,J.props),js(G,J),G.return=Z,G):(G=Qo(J.type,J.key,J.props,null,Z.mode,gt),js(G,J),G.return=Z,G)}function $(Z,G,J,gt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=nc(J,Z.mode,gt),G.return=Z,G):(G=u(G,J.children||[]),G.return=Z,G)}function dt(Z,G,J,gt,Gt){return G===null||G.tag!==7?(G=Xa(J,Z.mode,gt,Gt),G.return=Z,G):(G=u(G,J),G.return=Z,G)}function vt(Z,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ec(""+G,Z.mode,J),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return J=Qo(G.type,G.key,G.props,null,Z.mode,J),js(J,G),J.return=Z,J;case y:return G=nc(G,Z.mode,J),G.return=Z,G;case Q:var gt=G._init;return G=gt(G._payload),vt(Z,G,J)}if(mt(G)||ct(G))return G=Xa(G,Z.mode,J,null),G.return=Z,G;if(typeof G.then=="function")return vt(Z,pl(G),J);if(G.$$typeof===N)return vt(Z,el(Z,G),J);ml(Z,G)}return null}function et(Z,G,J,gt){var Gt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:T(Z,G,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===Gt?O(Z,G,J,gt):null;case y:return J.key===Gt?$(Z,G,J,gt):null;case Q:return Gt=J._init,J=Gt(J._payload),et(Z,G,J,gt)}if(mt(J)||ct(J))return Gt!==null?null:dt(Z,G,J,gt,null);if(typeof J.then=="function")return et(Z,G,pl(J),gt);if(J.$$typeof===N)return et(Z,G,el(Z,J),gt);ml(Z,J)}return null}function nt(Z,G,J,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(J)||null,T(G,Z,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case S:return Z=Z.get(gt.key===null?J:gt.key)||null,O(G,Z,gt,Gt);case y:return Z=Z.get(gt.key===null?J:gt.key)||null,$(G,Z,gt,Gt);case Q:var pe=gt._init;return gt=pe(gt._payload),nt(Z,G,J,gt,Gt)}if(mt(gt)||ct(gt))return Z=Z.get(J)||null,dt(G,Z,gt,Gt,null);if(typeof gt.then=="function")return nt(Z,G,J,pl(gt),Gt);if(gt.$$typeof===N)return nt(Z,G,J,el(G,gt),Gt);ml(G,gt)}return null}function ne(Z,G,J,gt){for(var Gt=null,pe=null,Yt=G,ee=G=0,mn=null;Yt!==null&&ee<J.length;ee++){Yt.index>ee?(mn=Yt,Yt=null):mn=Yt.sibling;var be=et(Z,Yt,J[ee],gt);if(be===null){Yt===null&&(Yt=mn);break}e&&Yt&&be.alternate===null&&n(Z,Yt),G=f(be,G,ee),pe===null?Gt=be:pe.sibling=be,pe=be,Yt=mn}if(ee===J.length)return a(Z,Yt),Re&&qa(Z,ee),Gt;if(Yt===null){for(;ee<J.length;ee++)Yt=vt(Z,J[ee],gt),Yt!==null&&(G=f(Yt,G,ee),pe===null?Gt=Yt:pe.sibling=Yt,pe=Yt);return Re&&qa(Z,ee),Gt}for(Yt=s(Yt);ee<J.length;ee++)mn=nt(Yt,Z,ee,J[ee],gt),mn!==null&&(e&&mn.alternate!==null&&Yt.delete(mn.key===null?ee:mn.key),G=f(mn,G,ee),pe===null?Gt=mn:pe.sibling=mn,pe=mn);return e&&Yt.forEach(function(Da){return n(Z,Da)}),Re&&qa(Z,ee),Gt}function $t(Z,G,J,gt){if(J==null)throw Error(r(151));for(var Gt=null,pe=null,Yt=G,ee=G=0,mn=null,be=J.next();Yt!==null&&!be.done;ee++,be=J.next()){Yt.index>ee?(mn=Yt,Yt=null):mn=Yt.sibling;var Da=et(Z,Yt,be.value,gt);if(Da===null){Yt===null&&(Yt=mn);break}e&&Yt&&Da.alternate===null&&n(Z,Yt),G=f(Da,G,ee),pe===null?Gt=Da:pe.sibling=Da,pe=Da,Yt=mn}if(be.done)return a(Z,Yt),Re&&qa(Z,ee),Gt;if(Yt===null){for(;!be.done;ee++,be=J.next())be=vt(Z,be.value,gt),be!==null&&(G=f(be,G,ee),pe===null?Gt=be:pe.sibling=be,pe=be);return Re&&qa(Z,ee),Gt}for(Yt=s(Yt);!be.done;ee++,be=J.next())be=nt(Yt,Z,ee,be.value,gt),be!==null&&(e&&be.alternate!==null&&Yt.delete(be.key===null?ee:be.key),G=f(be,G,ee),pe===null?Gt=be:pe.sibling=be,pe=be);return e&&Yt.forEach(function(kS){return n(Z,kS)}),Re&&qa(Z,ee),Gt}function Oe(Z,G,J,gt){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var Gt=J.key;G!==null;){if(G.key===Gt){if(Gt=J.type,Gt===b){if(G.tag===7){a(Z,G.sibling),gt=u(G,J.props.children),gt.return=Z,Z=gt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Q&&Qp(Gt)===G.type){a(Z,G.sibling),gt=u(G,J.props),js(gt,J),gt.return=Z,Z=gt;break t}a(Z,G);break}else n(Z,G);G=G.sibling}J.type===b?(gt=Xa(J.props.children,Z.mode,gt,J.key),gt.return=Z,Z=gt):(gt=Qo(J.type,J.key,J.props,null,Z.mode,gt),js(gt,J),gt.return=Z,Z=gt)}return x(Z);case y:t:{for(Gt=J.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(Z,G.sibling),gt=u(G,J.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,G);break}else n(Z,G);G=G.sibling}gt=nc(J,Z.mode,gt),gt.return=Z,Z=gt}return x(Z);case Q:return Gt=J._init,J=Gt(J._payload),Oe(Z,G,J,gt)}if(mt(J))return ne(Z,G,J,gt);if(ct(J)){if(Gt=ct(J),typeof Gt!="function")throw Error(r(150));return J=Gt.call(J),$t(Z,G,J,gt)}if(typeof J.then=="function")return Oe(Z,G,pl(J),gt);if(J.$$typeof===N)return Oe(Z,G,el(Z,J),gt);ml(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(Z,G.sibling),gt=u(G,J),gt.return=Z,Z=gt):(a(Z,G),gt=ec(J,Z.mode,gt),gt.return=Z,Z=gt),x(Z)):a(Z,G)}return function(Z,G,J,gt){try{Ks=0;var Gt=Oe(Z,G,J,gt);return Or=null,Gt}catch(Yt){if(Yt===Hs||Yt===il)throw Yt;var pe=Xn(29,Yt,null,Z.mode);return pe.lanes=gt,pe.return=Z,pe}finally{}}}var Br=Jp(!0),$p=Jp(!1),ni=X(null),yi=null;function ma(e){var n=e.alternate;_t(un,un.current&1),_t(ni,e),yi===null&&(n===null||Ur.current!==null||n.memoizedState!==null)&&(yi=e)}function tm(e){if(e.tag===22){if(_t(un,un.current),_t(ni,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else ga()}function ga(){_t(un,un.current),_t(ni,ni.current)}function Hi(e){ot(ni),yi===e&&(yi=null),ot(un)}var un=X(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||bf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Oc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bc={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),u=ha(s);u.payload=n,a!=null&&(u.callback=a),n=da(e,u,s),n!==null&&(Kn(n,e,s),Vs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),u=ha(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(e,u,s),n!==null&&(Kn(n,e,s),Vs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(e,s,a),n!==null&&(Kn(n,e,a),Vs(n,e,a))}};function em(e,n,a,s,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(u,f):!0}function nm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Bc.enqueueReplaceState(n,n.state,null)}function $a(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function im(e){_l(e)}function am(e){console.error(e)}function rm(e){_l(e)}function vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function sm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function zc(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(e,n)},a}function om(e){return e=ha(e),e.tag=3,e}function lm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){sm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){sm(n,a,s),typeof u!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function k0(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 13:return yi===null?lf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===hc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),cf(e,s,u)),!1;case 22:return a.flags|=65536,s===hc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),cf(e,s,u)),!1}throw Error(r(435,a.tag))}return cf(e,s,u),lf(),!1}if(Re)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==rc&&(e=Error(r(422),{cause:s}),Bs(Jn(e,a)))):(s!==rc&&(n=Error(r(423),{cause:s}),Bs(Jn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=Jn(s,a),u=zc(e.stateNode,s,u),mc(e,u),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),io===null?io=[f]:io.push(f),je!==4&&(je=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=zc(a.stateNode,s,e),mc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=om(u),lm(u,e,a,s),mc(a,u),!1}a=a.return}while(a!==null);return!1}var um=Error(r(461)),dn=!1;function vn(e,n,a,s){n.child=e===null?$p(n,null,a,s):Br(n,e.child,a,s)}function cm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return ja(n),s=xc(e,n,a,x,f,u),T=Mc(),e!==null&&!dn?(yc(e,n,u),Gi(e,n,u)):(Re&&T&&ic(n),n.flags|=1,vn(e,n,s,u),n.child)}function fm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!tc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,hm(e,n,f,s,u)):(e=Qo(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Wc(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(x,s)&&e.ref===n.ref)return Gi(e,n,u)}return n.flags|=1,e=Pi(f,s),e.ref=n.ref,e.return=n,n.child=e}function hm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Ls(f,s)&&e.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Wc(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Gi(e,n,u)}return Fc(e,n,a,s,u)}function dm(e,n,a){var s=n.pendingProps,u=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return pm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nl(n,f!==null?f.cachePool:null),f!==null?hp(n,f):_c(),tm(n);else return n.lanes=n.childLanes=536870912,pm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(nl(n,f.cachePool),hp(n,f),ga(),n.memoizedState=null):(e!==null&&nl(n,null),_c(),ga());return vn(e,n,u,a),n.child}function pm(e,n,a,s){var u=fc();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&nl(n,null),_c(),tm(n),e!==null&&zs(e,n,s,!0),null}function Sl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Fc(e,n,a,s,u){return ja(n),a=xc(e,n,a,s,void 0,u),s=Mc(),e!==null&&!dn?(yc(e,n,u),Gi(e,n,u)):(Re&&s&&ic(n),n.flags|=1,vn(e,n,a,u),n.child)}function mm(e,n,a,s,u,f){return ja(n),n.updateQueue=null,a=pp(n,s,a,u),dp(e),s=Mc(),e!==null&&!dn?(yc(e,n,f),Gi(e,n,f)):(Re&&s&&ic(n),n.flags|=1,vn(e,n,a,f),n.child)}function gm(e,n,a,s,u){if(ja(n),n.stateNode===null){var f=Ar,x=a.contextType;typeof x=="object"&&x!==null&&(f=En(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},dc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?En(x):Ar,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Oc(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Bc.enqueueReplaceState(f,f.state,null),Xs(n,s,f,u),ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,O=$a(a,T);f.props=O;var $=f.context,dt=a.contextType;x=Ar,typeof dt=="object"&&dt!==null&&(x=En(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&nm(n,f,s,x),fa=!1;var et=n.memoizedState;f.state=et,Xs(n,s,f,u),ks(),$=n.memoizedState,T||et!==$||fa?(typeof vt=="function"&&(Oc(n,a,vt,s),$=n.memoizedState),(O=fa||em(n,a,O,s,et,$,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,pc(e,n),x=n.memoizedProps,dt=$a(a,x),f.props=dt,vt=n.pendingProps,et=f.context,$=a.contextType,O=Ar,typeof $=="object"&&$!==null&&(O=En($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||et!==O)&&nm(n,f,s,O),fa=!1,et=n.memoizedState,f.state=et,Xs(n,s,f,u),ks();var nt=n.memoizedState;x!==vt||et!==nt||fa||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof T=="function"&&(Oc(n,a,T,s),nt=n.memoizedState),(dt=fa||em(n,a,dt,s,et,nt,O)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,nt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,nt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=O,s=dt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Sl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Br(n,e.child,null,u),n.child=Br(n,null,a,u)):vn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Gi(e,n,u),e}function _m(e,n,a,s){return Os(),n.flags|=256,vn(e,n,a,s),n.child}var Ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:ap()}}function Gc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function vm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?ma(n):ga(),Re){var T=Ke,O;if(O=T){t:{for(O=T,T=Mi;O.nodeType!==8;){if(!T){T=null;break t}if(O=di(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:Wa!==null?{id:Oi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},O=Xn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,wn=n,Ke=null,O=!0):O=!1}O||Za(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return bf(T)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return T=s.children,s=s.fallback,u?(ga(),u=n.mode,T=xl({mode:"hidden",children:T},u),s=Xa(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=Hc(a),u.childLanes=Gc(e,x,a),n.memoizedState=Ic,s):(ma(n),Vc(n,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=kc(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),u=s.fallback,T=n.mode,s=xl({mode:"visible",children:s.children},T),u=Xa(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Br(n,e.child,null,a),s=n.child,s.memoizedState=Hc(a),s.childLanes=Gc(e,x,a),n.memoizedState=Ic,n=u);else if(ma(n),bf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,Bs({value:s,source:null,stack:null}),n=kc(e,n,a)}else if(dn||zs(e,n,a,!1),x=(a&e.childLanes)!==0,dn||x){if(x=He,x!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,br(e,s),Kn(x,e,s),um;T.data==="$?"||lf(),n=kc(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,Ke=di(T.nextSibling),wn=n,Re=!0,Ya=null,Mi=!1,e!==null&&(ti[ei++]=Oi,ti[ei++]=Bi,ti[ei++]=Wa,Oi=e.id,Bi=e.overflow,Wa=n),n=Vc(n,s.children),n.flags|=4096);return n}return u?(ga(),u=s.fallback,T=n.mode,O=e.child,$=O.sibling,s=Pi(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,$!==null?u=Pi($,u):(u=Xa(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=e.child.memoizedState,T===null?T=Hc(a):(O=T.cachePool,O!==null?($=ln._currentValue,O=O.parent!==$?{parent:$,pool:$}:O):O=ap(),T={baseLanes:T.baseLanes|a,cachePool:O}),u.memoizedState=T,u.childLanes=Gc(e,x,a),n.memoizedState=Ic,s):(ma(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Vc(e,n){return n=xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function kc(e,n,a){return Br(n,e.child,null,a),e=Vc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),oc(e.return,n,a)}function Xc(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function xm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(vn(e,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sm(e,a,n);else if(e.tag===19)Sm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(_t(un,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Xc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&gl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Xc(n,!0,a,null,f);break;case"together":Xc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Wc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function X0(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ca(n,ln,e.memoizedState.cache),Os();break;case 27:case 5:Kt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vm(e,n,a):(ma(n),e=Gi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zs(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return xm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,dm(e,n,a);case 24:ca(n,ln,e.memoizedState.cache)}return Gi(e,n,a)}function Mm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Wc(e,a)&&(n.flags&128)===0)return dn=!1,X0(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Re&&(n.flags&1048576)!==0&&Qd(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")tc(s)?(e=$a(s,e),n.tag=1,n=gm(null,n,s,e,a)):(n.tag=0,n=Fc(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===U){n.tag=11,n=cm(null,n,s,e,a);break t}else if(u===I){n.tag=14,n=fm(null,n,s,e,a);break t}}throw n=pt(s)||s,Error(r(306,n,""))}}return n;case 0:return Fc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=$a(s,n.pendingProps),gm(e,n,s,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,pc(e,n),Xs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,ca(n,ln,s),s!==f.cache&&lc(n,[ln],a,!0),ks(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=_m(e,n,s,a);break t}else if(s!==u){u=Jn(Error(r(424)),n),Bs(u),n=_m(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=di(e.firstChild),wn=n,Re=!0,Ya=null,Mi=!0,a=$p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),s===u){n=Gi(e,n,a);break t}vn(e,n,s,a)}n=n.child}return n;case 26:return Sl(e,n),e===null?(a=bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,s=Pl(st.current).createElement(a),s[on]=n,s[Ye]=e,xn(s,a,e),tn(s),n.stateNode=s):n.memoizedState=bg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Re&&(s=n.stateNode=yg(n.type,n.pendingProps,st.current),wn=n,Mi=!0,u=Ke,ba(n.type)?(Af=u,Ke=di(s.firstChild)):Ke=u),vn(e,n,n.pendingProps.children,a),Sl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=s=Ke)&&(s=vS(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,wn=n,Ke=di(s.firstChild),Mi=!1,u=!0):u=!1),u||Za(n)),Kt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,yf(u,f)?s=null:x!==null&&yf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=xc(e,n,B0,null,null,a),ho._currentValue=u),Sl(e,n),vn(e,n,s,a),n.child;case 6:return e===null&&Re&&((e=a=Ke)&&(a=SS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,wn=n,Ke=null,e=!0):e=!1),e||Za(n)),null;case 13:return vm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Br(n,null,s,a):vn(e,n,s,a),n.child;case 11:return cm(e,n,n.type,n.pendingProps,a);case 7:return vn(e,n,n.pendingProps,a),n.child;case 8:return vn(e,n,n.pendingProps.children,a),n.child;case 12:return vn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),vn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ja(n),u=En(u),s=s(u),n.flags|=1,vn(e,n,s,a),n.child;case 14:return fm(e,n,n.type,n.pendingProps,a);case 15:return hm(e,n,n.type,n.pendingProps,a);case 19:return xm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=xl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return dm(e,n,a);case 24:return ja(n),s=En(ln),e===null?(u=fc(),u===null&&(u=He,f=uc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},dc(n),ca(n,ln,u)):((e.lanes&a)!==0&&(pc(e,n),Xs(n,null,null,a),ks()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,ln,s)):(s=f.cache,ca(n,ln,s),s!==u.cache&&lc(n,[ln],a,!0))),vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(e){e.flags|=4}function ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dg(n)){if(n=ni.current,n!==null&&((xe&4194048)===xe?yi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==yi))throw Gs=hc,rp;e.flags|=8192}}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,Hr|=n)}function Qs(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function W0(e,n,a){var s=n.pendingProps;switch(ac(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(ln),Ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ps(n)?Vi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Vi(n),a!==null?(qe(n),ym(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Vi(n),qe(n),ym(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==s&&Vi(n),qe(n),n.flags&=-16777217),null;case 27:Ee(n),a=st.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Mt.current,Ps(n)?Jd(n):(e=yg(u,s,a),n.stateNode=e,Vi(n))}return qe(n),null;case 5:if(Ee(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Mt.current,Ps(n))Jd(n);else{switch(u=Pl(st.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[on]=n,e[Ye]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(xn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Vi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=st.current,Ps(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=wn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||mg(e.nodeValue,a)),e||Za(n)}else e=Pl(e).createTextNode(s),e[on]=n,n.stateNode=e}return qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ps(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),qe(n),null;case 4:return Ot(),e===null&&_f(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(ot(un),u=n.memoizedState,u===null)return qe(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Qs(u,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,Qs(u,!1),e=f.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jd(a,e),a=a.sibling;return _t(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&It()>Tl&&(n.flags|=128,s=!0,Qs(u,!1),n.lanes=4194304)}else{if(!s)if(e=gl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),Qs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Re)return qe(n),null}else 2*It()-u.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,s=!0,Qs(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=It(),n.sibling=null,e=un.current,_t(un,s?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Hi(n),vc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ot(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function q0(e,n){switch(ac(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(ln),Ot(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ee(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ot(un),null;case 4:return Ot(),null;case 10:return Fi(n.type),null;case 22:case 23:return Hi(n),vc(),e!==null&&ot(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(ln),null;case 25:return null;default:return null}}function Em(e,n){switch(ac(n),n.tag){case 3:Fi(ln),Ot();break;case 26:case 27:case 5:Ee(n);break;case 4:Ot();break;case 13:Hi(n);break;case 19:ot(un);break;case 10:Fi(n.type);break;case 22:case 23:Hi(n),vc(),e!==null&&ot(Qa);break;case 24:Fi(ln)}}function Js(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function _a(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var O=a,$=T;try{$()}catch(dt){Fe(u,O,dt)}}}s=s.next}while(s!==f)}}catch(dt){Fe(n,n.return,dt)}}function Tm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fp(n,a)}catch(s){Fe(e,e.return,s)}}}function bm(e,n,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(e,n,s)}}function $s(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Fe(e,n,u)}}function Ei(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Am(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function qc(e,n,a){try{var s=e.stateNode;dS(s,e.type,a,n),s[Ye]=n}catch(u){Fe(e,e.return,u)}}function Rm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Yc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Nl));else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Zc(e,n,a),e=e.sibling;e!==null;)Zc(e,n,a),e=e.sibling}function yl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(yl(e,n,a),e=e.sibling;e!==null;)yl(e,n,a),e=e.sibling}function Cm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);xn(n,s,a),n[on]=e,n[Ye]=a}catch(f){Fe(e,e.return,f)}}var ki=!1,Je=!1,Kc=!1,wm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function Y0(e,n){if(e=e.containerInfo,xf=Hl,e=Hd(e),Yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,O=-1,$=0,dt=0,vt=e,et=null;e:for(;;){for(var nt;vt!==a||u!==0&&vt.nodeType!==3||(T=x+u),vt!==f||s!==0&&vt.nodeType!==3||(O=x+s),vt.nodeType===3&&(x+=vt.nodeValue.length),(nt=vt.firstChild)!==null;)et=vt,vt=nt;for(;;){if(vt===e)break e;if(et===a&&++$===u&&(T=x),et===f&&++dt===s&&(O=x),(nt=vt.nextSibling)!==null)break;vt=et,et=vt.parentNode}vt=nt}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:e,selectionRange:a},Hl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=$a(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=e}catch($t){Fe(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Tf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function Dm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),s&4&&Js(5,a);break;case 1:if(va(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Fe(a,a.return,x)}else{var u=$a(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Fe(a,a.return,x)}}s&64&&Tm(a),s&512&&$s(a,a.return);break;case 3:if(va(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fp(e,n)}catch(x){Fe(a,a.return,x)}}break;case 27:n===null&&s&4&&Cm(a);case 26:case 5:va(e,a),n===null&&s&4&&Am(a),s&512&&$s(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),s&4&&Nm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nS.bind(null,a),xS(e,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||Je,u=ki;var f=Je;ki=s,(Je=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):va(e,a),ki=u,Je=f}break;case 30:break;default:va(e,a)}}function Um(e){var n=e.alternate;n!==null&&(e.alternate=null,Um(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&_r(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Fn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Lm(e,n,a),a=a.sibling}function Lm(e,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Je||Ei(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Ei(a,n);var s=ke,u=Fn;ba(a.type)&&(ke=a.stateNode,Fn=!1),Xi(e,n,a),lo(a.stateNode),ke=s,Fn=u;break;case 5:Je||Ei(a,n);case 6:if(s=ke,u=Fn,ke=null,Xi(e,n,a),ke=s,Fn=u,ke!==null)if(Fn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:ke!==null&&(Fn?(e=ke,xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_o(e)):xg(ke,a.stateNode));break;case 4:s=ke,u=Fn,ke=a.stateNode.containerInfo,Fn=!0,Xi(e,n,a),ke=s,Fn=u;break;case 0:case 11:case 14:case 15:Je||_a(2,a,n),Je||_a(4,a,n),Xi(e,n,a);break;case 1:Je||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&bm(a,n,s)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Xi(e,n,a),Je=s;break;default:Xi(e,n,a)}}function Nm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(a){Fe(n,n.return,a)}}function Z0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new wm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new wm),n;default:throw Error(r(435,e.tag))}}function jc(e,n){var a=Z0(e);n.forEach(function(s){var u=iS.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(ba(T.type)){ke=T.stateNode,Fn=!1;break t}break;case 5:ke=T.stateNode,Fn=!1;break t;case 3:case 4:ke=T.stateNode.containerInfo,Fn=!0;break t}T=T.return}if(ke===null)throw Error(r(160));Lm(f,x,u),ke=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Pm(n,e),n=n.sibling}var hi=null;function Pm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),s&4&&(_a(3,e,e.return),Js(3,e),_a(5,e,e.return));break;case 1:Wn(n,e),qn(e),s&512&&(Je||a===null||Ei(a,a.return)),s&64&&ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=hi;if(Wn(n,e),qn(e),s&512&&(Je||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[xi]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),xn(f,s,a),f[on]=e,tn(f),s=f;break t;case"link":var x=Cg("link","href",u).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;case"meta":if(x=Cg("meta","content",u).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=e,tn(f),s=f}e.stateNode=s}else wg(u,e.type,e.stateNode);else e.stateNode=Rg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?wg(u,e.type,e.stateNode):Rg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&qc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),s&512&&(Je||a===null||Ei(a,a.return)),a!==null&&s&4&&qc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),s&512&&(Je||a===null||Ei(a,a.return)),e.flags&32){u=e.stateNode;try{On(u,"")}catch(nt){Fe(e,e.return,nt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,qc(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Kc=!0);break;case 6:if(Wn(n,e),qn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(nt){Fe(e,e.return,nt)}}break;case 3:if(zl=null,u=hi,hi=Ol(n.containerInfo),Wn(n,e),hi=u,qn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch(nt){Fe(e,e.return,nt)}Kc&&(Kc=!1,Om(e));break;case 4:s=hi,hi=Ol(e.stateNode.containerInfo),Wn(n,e),qn(e),hi=s;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nf=It()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jc(e,s)));break;case 22:u=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,$=ki,dt=Je;if(ki=$||u,Je=dt||O,Wn(n,e),Je=dt,ki=$,qn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||ki||Je||tr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=O.stateNode;var vt=O.memoizedProps.style,et=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Fe(O,O.return,nt)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(nt){Fe(O,O.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,jc(e,a))));break;case 19:Wn(n,e),qn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jc(e,s)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Rm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Yc(e);yl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(On(x,""),a.flags&=-33);var T=Yc(e);yl(e,T,x);break;case 3:case 4:var O=a.stateNode.containerInfo,$=Yc(e);Zc(e,$,O);break;default:throw Error(r(161))}}catch(dt){Fe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dm(e,n.alternate,n),n=n.sibling}function tr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),tr(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bm(n,n.return,a),tr(n);break;case 27:lo(n.stateNode);case 26:case 5:Ei(n,n.return),tr(n);break;case 22:n.memoizedState===null&&tr(n);break;case 30:tr(n);break;default:tr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),Js(4,f);break;case 1:if(Sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Fe(s,s.return,$)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)cp(O[u],T)}catch($){Fe(s,s.return,$)}}a&&x&64&&Tm(f),$s(f,f.return);break;case 27:Cm(f);case 26:case 5:Sa(u,f,a),a&&s===null&&x&4&&Am(f),$s(f,f.return);break;case 12:Sa(u,f,a);break;case 13:Sa(u,f,a),a&&x&4&&Nm(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),$s(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function Qc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fs(a))}function Jc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fs(e))}function Ti(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bm(e,n,a,s),n=n.sibling}function Bm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,s),u&2048&&Js(9,n);break;case 1:Ti(e,n,a,s);break;case 3:Ti(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fs(e)));break;case 12:if(u&2048){Ti(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Fe(n,n.return,O)}}else Ti(e,n,a,s);break;case 13:Ti(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,s):to(e,n):f._visibility&2?Ti(e,n,a,s):(f._visibility|=2,zr(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Qc(x,n);break;case 24:Ti(e,n,a,s),u&2048&&Jc(n.alternate,n);break;default:Ti(e,n,a,s)}}function zr(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,T=a,O=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:zr(f,x,T,O,u),Js(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?zr(f,x,T,O,u):to(f,x):(dt._visibility|=2,zr(f,x,T,O,u)),u&&$&2048&&Qc(x.alternate,x);break;case 24:zr(f,x,T,O,u),u&&$&2048&&Jc(x.alternate,x);break;default:zr(f,x,T,O,u)}n=n.sibling}}function to(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:to(a,s),u&2048&&Qc(s.alternate,s);break;case 24:to(a,s),u&2048&&Jc(s.alternate,s);break;default:to(a,s)}n=n.sibling}}var eo=8192;function Fr(e){if(e.subtreeFlags&eo)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 26:Fr(e),e.flags&eo&&e.memoizedState!==null&&NS(hi,e.memoizedState,e.memoizedProps);break;case 5:Fr(e);break;case 3:case 4:var n=hi;hi=Ol(e.stateNode.containerInfo),Fr(e),hi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=eo,eo=16777216,Fr(e),eo=n):Fr(e));break;default:Fr(e)}}function Fm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function no(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Hm(s,e)}Fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 0:case 11:case 15:no(e),e.flags&2048&&_a(9,e,e.return);break;case 3:no(e);break;case 12:no(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,El(e)):no(e);break;default:no(e)}}function El(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Hm(s,e)}Fm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_a(8,n,n.return),El(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,El(n));break;default:El(n)}e=e.sibling}}function Hm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=e;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Um(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var K0={getCacheForType:function(e){var n=En(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},j0=typeof WeakMap=="function"?WeakMap:Map,De=0,He=null,ge=null,xe=0,Ue=0,Yn=null,xa=!1,Ir=!1,$c=!1,Wi=0,je=0,Ma=0,er=0,tf=0,ii=0,Hr=0,io=null,In=null,ef=!1,nf=0,Tl=1/0,bl=null,ya=null,Sn=0,Ea=null,Gr=null,Vr=0,af=0,rf=null,Gm=null,ao=0,sf=null;function Zn(){if((De&2)!==0&&xe!==0)return xe&-xe;if(P.T!==null){var e=wr;return e!==0?e:df()}return ye()}function Vm(){ii===0&&(ii=(xe&536870912)===0||Re?V():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function Kn(e,n,a){(e===He&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(kr(e,0),Ta(e,xe,ii,!1)),zt(e,a),((De&2)===0||e!==He)&&(e===He&&((De&2)===0&&(er|=a),je===4&&Ta(e,xe,ii,!1)),bi(e))}function km(e,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=s?$0(e,n):uf(e,n,!0),f=s;do{if(u===0){Ir&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Q0(a)){u=uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=e;u=io;var O=T.current.memoizedState.isDehydrated;if(O&&(kr(T,x).flags|=256),x=uf(T,x,!1),x!==2){if($c&&!O){T.errorRecoveryDisabledLanes|=f,er|=f,u=4;break t}f=In,In=u,f!==null&&(In===null?In=f:In.push.apply(In,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){kr(e,0),Ta(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ii,!xa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=nf+300-It(),10<u)){if(Ta(s,n,ii,!xa),kt(s,0,!0)!==0)break t;s.timeoutHandle=vg(Xm.bind(null,s,a,In,bl,ef,n,ii,er,Hr,xa,f,2,-0,0),u);break t}Xm(s,a,In,bl,ef,n,ii,er,Hr,xa,f,0,-0,0)}}break}while(!0);bi(e)}function Xm(e,n,a,s,u,f,x,T,O,$,dt,vt,et,nt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(fo={stylesheets:null,count:0,unsuspend:LS},zm(n),vt=PS(),vt!==null)){e.cancelPendingCommit=vt(Qm.bind(null,e,n,f,a,s,u,x,T,O,dt,1,et,nt)),Ta(e,f,x,!$);return}Qm(e,n,f,a,s,u,x,T,O)}function Q0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~tf,n&=~er,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),x=1<<f;s[f]=-1,u&=~x}a!==0&&St(e,a,n)}function Al(){return(De&6)===0?(ro(0),!1):!0}function of(){if(ge!==null){if(Ue===0)var e=ge.return;else e=ge,zi=Ka=null,Ec(e),Or=null,Ks=0,e=ge;for(;e!==null;)Em(e.alternate,e),e=e.return;ge=null}}function kr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,mS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),of(),He=e,ge=a=Pi(e.current,null),xe=n,Ue=0,Yn=null,xa=!1,Ir=Dt(e,n),$c=!1,Hr=ii=tf=er=Ma=je=0,In=io=null,ef=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Bt(s),f=1<<u;n|=e[u],s&=~f}return Wi=n,Zo(),a}function Wm(e,n){he=null,P.H=dl,n===Hs||n===il?(n=lp(),Ue=3):n===rp?(n=lp(),Ue=4):Ue=n===um?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ge===null&&(je=1,vl(e,Jn(n,e.current)))}function qm(){var e=P.H;return P.H=dl,e===null?dl:e}function Ym(){var e=P.A;return P.A=K0,e}function lf(){je=4,xa||(xe&4194048)!==xe&&ni.current!==null||(Ir=!0),(Ma&134217727)===0&&(er&134217727)===0||He===null||Ta(He,xe,ii,!1)}function uf(e,n,a){var s=De;De|=2;var u=qm(),f=Ym();(He!==e||xe!==n)&&(bl=null,kr(e,n)),n=!1;var x=je;t:do try{if(Ue!==0&&ge!==null){var T=ge,O=Yn;switch(Ue){case 8:of(),x=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=Ue;if(Ue=0,Yn=null,Xr(e,T,O,$),a&&Ir){x=0;break t}break;default:$=Ue,Ue=0,Yn=null,Xr(e,T,O,$)}}J0(),x=je;break}catch(dt){Wm(e,dt)}while(!0);return n&&e.shellSuspendCounter++,zi=Ka=null,De=s,P.H=u,P.A=f,ge===null&&(He=null,xe=0,Zo()),x}function J0(){for(;ge!==null;)Zm(ge)}function $0(e,n){var a=De;De|=2;var s=qm(),u=Ym();He!==e||xe!==n?(bl=null,Tl=It()+500,kr(e,n)):Ir=Dt(e,n);t:do try{if(Ue!==0&&ge!==null){n=ge;var f=Yn;e:switch(Ue){case 1:Ue=0,Yn=null,Xr(e,n,f,1);break;case 2:case 9:if(sp(f)){Ue=0,Yn=null,Km(n);break}n=function(){Ue!==2&&Ue!==9||He!==e||(Ue=7),bi(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:sp(f)?(Ue=0,Yn=null,Km(n)):(Ue=0,Yn=null,Xr(e,n,f,7));break;case 5:var x=null;switch(ge.tag){case 26:x=ge.memoizedState;case 5:case 27:var T=ge;if(!x||Dg(x)){Ue=0,Yn=null;var O=T.sibling;if(O!==null)ge=O;else{var $=T.return;$!==null?(ge=$,Rl($)):ge=null}break e}}Ue=0,Yn=null,Xr(e,n,f,5);break;case 6:Ue=0,Yn=null,Xr(e,n,f,6);break;case 8:of(),je=6;break t;default:throw Error(r(462))}}tS();break}catch(dt){Wm(e,dt)}while(!0);return zi=Ka=null,P.H=s,P.A=u,De=a,ge!==null?0:(He=null,xe=0,Zo(),je)}function tS(){for(;ge!==null&&!Qt();)Zm(ge)}function Zm(e){var n=Mm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Rl(e):ge=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=mm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=mm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Ec(n);default:Em(a,n),n=ge=jd(n,Wi),n=Mm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Rl(e):ge=n}function Xr(e,n,a,s){zi=Ka=null,Ec(n),Or=null,Ks=0;var u=n.return;try{if(k0(e,u,n,a,xe)){je=1,vl(e,Jn(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;je=1,vl(e,Jn(a,e.current)),ge=null;return}n.flags&32768?(Re||s===1?e=!0:Ir||(xe&536870912)!==0?e=!1:(xa=e=!0,(s===2||s===9||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),jm(n,e)):Rl(n)}function Rl(e){var n=e;do{if((n.flags&32768)!==0){jm(n,xa);return}e=n.return;var a=W0(n.alternate,n,Wi);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);je===0&&(je=5)}function jm(e,n){do{var a=q0(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);je=6,ge=null}function Qm(e,n,a,s,u,f,x,T,O){e.cancelPendingCommit=null;do Cl();while(Sn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Ju,Tt(e,a,f,x,T,O),e===He&&(ge=He=null,xe=0),Gr=n,Ea=e,Vr=a,af=f,rf=u,Gm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(Xe,function(){return ng(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=j.p,j.p=2,x=De,De|=4;try{Y0(e,n,a)}finally{De=x,j.p=u,P.T=s}}Sn=1,Jm(),$m(),tg()}}function Jm(){if(Sn===1){Sn=0;var e=Ea,n=Gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=De;De|=4;try{Pm(n,e);var f=Mf,x=Hd(e.containerInfo),T=f.focusedElem,O=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Id(T.ownerDocument.documentElement,T)){if(O!==null&&Yu(T)){var $=O.start,dt=O.end;if(dt===void 0&&(dt=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(dt,T.value.length);else{var vt=T.ownerDocument||document,et=vt&&vt.defaultView||window;if(et.getSelection){var nt=et.getSelection(),ne=T.textContent.length,$t=Math.min(O.start,ne),Oe=O.end===void 0?$t:Math.min(O.end,ne);!nt.extend&&$t>Oe&&(x=Oe,Oe=$t,$t=x);var Z=Fd(T,$t),G=Fd(T,Oe);if(Z&&G&&(nt.rangeCount!==1||nt.anchorNode!==Z.node||nt.anchorOffset!==Z.offset||nt.focusNode!==G.node||nt.focusOffset!==G.offset)){var J=vt.createRange();J.setStart(Z.node,Z.offset),nt.removeAllRanges(),$t>Oe?(nt.addRange(J),nt.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),nt.addRange(J))}}}}for(vt=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&vt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var gt=vt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Hl=!!xf,Mf=xf=null}finally{De=u,j.p=s,P.T=a}}e.current=n,Sn=2}}function $m(){if(Sn===2){Sn=0;var e=Ea,n=Gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=De;De|=4;try{Dm(e,n.alternate,n)}finally{De=u,j.p=s,P.T=a}}Sn=3}}function tg(){if(Sn===4||Sn===3){Sn=0,Me();var e=Ea,n=Gr,a=Vr,s=Gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Gr=Ea=null,eg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ya=null),we(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=j.p,j.p=2,P.T=null;try{for(var f=e.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,j.p=u}}(Vr&3)!==0&&Cl(),bi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===sf?ao++:(ao=0,sf=e):ao=0,ro(0)}}function eg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Fs(n)))}function Cl(e){return Jm(),$m(),tg(),ng()}function ng(){if(Sn!==5)return!1;var e=Ea,n=af;af=0;var a=we(Vr),s=P.T,u=j.p;try{j.p=32>a?32:a,P.T=null,a=rf,rf=null;var f=Ea,x=Vr;if(Sn=0,Gr=Ea=null,Vr=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,Im(f.current),Bm(f,f.current,x,a),De=T,ro(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{j.p=u,P.T=s,eg(e,n)}}function ig(e,n,a){n=Jn(a,n),n=zc(e.stateNode,n,2),e=da(e,n,2),e!==null&&(zt(e,2),bi(e))}function Fe(e,n,a){if(e.tag===3)ig(e,e,a);else for(;n!==null;){if(n.tag===3){ig(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){e=Jn(a,e),a=om(2),s=da(n,a,2),s!==null&&(lm(a,s,n,e),zt(s,2),bi(s));break}}n=n.return}}function cf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new j0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||($c=!0,u.add(a),e=eS.bind(null,e,n,a),n.then(e,e))}function eS(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(xe&a)===a&&(je===4||je===3&&(xe&62914560)===xe&&300>It()-nf?(De&2)===0&&kr(e,0):tf|=a,Hr===xe&&(Hr=0)),bi(e)}function ag(e,n){n===0&&(n=At()),e=br(e,n),e!==null&&(zt(e,n),bi(e))}function nS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ag(e,a)}function iS(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ag(e,a)}function aS(e,n){return F(e,n)}var wl=null,Wr=null,ff=!1,Dl=!1,hf=!1,nr=0;function bi(e){e!==Wr&&e.next===null&&(Wr===null?wl=Wr=e:Wr=Wr.next=e),Dl=!0,ff||(ff=!0,sS())}function ro(e,n){if(!hf&&Dl){hf=!0;do for(var a=!1,s=wl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,lg(s,f))}else f=xe,f=kt(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Dt(s,f)||(a=!0,lg(s,f));s=s.next}while(a);hf=!1}}function rS(){rg()}function rg(){Dl=ff=!1;var e=0;nr!==0&&(pS()&&(e=nr),nr=0);for(var n=It(),a=null,s=wl;s!==null;){var u=s.next,f=sg(s,n);f===0?(s.next=null,a===null?wl=u:a.next=u,u===null&&(Wr=a)):(a=s,(e!==0||(f&3)!==0)&&(Dl=!0)),s=u}ro(e)}function sg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Bt(f),T=1<<x,O=u[x];O===-1?((T&a)===0||(T&s)!==0)&&(u[x]=ae(T,n)):O<=n&&(e.expiredLanes|=T),f&=~T}if(n=He,a=xe,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ce(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ce(s),we(a)){case 2:case 8:a=re;break;case 32:a=Xe;break;case 268435456:a=L;break;default:a=Xe}return s=og.bind(null,e),a=F(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ce(s),e.callbackPriority=2,e.callbackNode=null,2}function og(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Cl()&&e.callbackNode!==a)return null;var s=xe;return s=kt(e,e===He?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(km(e,s,n),sg(e,It()),e.callbackNode!=null&&e.callbackNode===a?og.bind(null,e):null)}function lg(e,n){if(Cl())return null;km(e,n,!0)}function sS(){gS(function(){(De&6)!==0?F(Ht,rS):rg()})}function df(){return nr===0&&(nr=V()),nr}function ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oS(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=ug((u[Ye]||null).action),x=s.submitter;x&&(n=(n=x[Ye]||null)?ug(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Wo("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(nr!==0){var O=x?cg(u,x):new FormData(u);Lc(a,{pending:!0,data:O,method:u.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=x?cg(u,x):new FormData(u),Lc(a,{pending:!0,data:O,method:u.method,action:f},f,O))},currentTarget:u}]})}}for(var pf=0;pf<Qu.length;pf++){var mf=Qu[pf],lS=mf.toLowerCase(),uS=mf[0].toUpperCase()+mf.slice(1);fi(lS,"on"+uS)}fi(kd,"onAnimationEnd"),fi(Xd,"onAnimationIteration"),fi(Wd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(A0,"onTransitionRun"),fi(R0,"onTransitionStart"),fi(C0,"onTransitionCancel"),fi(qd,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(so));function fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],O=T.instance,$=T.currentTarget;if(T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(dt){_l(dt)}u.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(T=s[x],O=T.instance,$=T.currentTarget,T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(dt){_l(dt)}u.currentTarget=null,f=O}}}}function _e(e,n){var a=n[mr];a===void 0&&(a=n[mr]=new Set);var s=e+"__bubble";a.has(s)||(hg(n,e,2,!1),a.add(s))}function gf(e,n,a){var s=0;n&&(s|=4),hg(a,e,s,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[Ul]){e[Ul]=!0,Io.forEach(function(a){a!=="selectionchange"&&(cS.has(a)||gf(a,!1,e),gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,gf("selectionchange",!1,n))}}function hg(e,n,a,s){switch(Bg(n)){case 2:var u=zS;break;case 8:u=FS;break;default:u=Uf}a=u.bind(null,n,a,e),u=void 0,!Fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function vf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Li(T),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue t}T=T.parentNode}}s=s.return}Sd(function(){var $=f,dt=Bu(a),vt=[];t:{var et=Yd.get(e);if(et!==void 0){var nt=Wo,ne=e;switch(e){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":nt=a0;break;case"focusin":ne="focus",nt=Vu;break;case"focusout":ne="blur",nt=Vu;break;case"beforeblur":case"afterblur":nt=Vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=o0;break;case kd:case Xd:case Wd:nt=Kv;break;case qd:nt=u0;break;case"scroll":case"scrollend":nt=Xv;break;case"wheel":nt=f0;break;case"copy":case"cut":case"paste":nt=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Td;break;case"toggle":case"beforetoggle":nt=d0}var $t=(n&4)!==0,Oe=!$t&&(e==="scroll"||e==="scrollend"),Z=$t?et!==null?et+"Capture":null:et;$t=[];for(var G=$,J;G!==null;){var gt=G;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||Z===null||(gt=bs(G,Z),gt!=null&&$t.push(oo(G,gt,J))),Oe)break;G=G.return}0<$t.length&&(et=new nt(et,ne,null,a,dt),vt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",nt=e==="mouseout"||e==="pointerout",et&&a!==Ou&&(ne=a.relatedTarget||a.fromElement)&&(Li(ne)||ne[Si]))break t;if((nt||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,nt?(ne=a.relatedTarget||a.toElement,nt=$,ne=ne?Li(ne):null,ne!==null&&(Oe=c(ne),$t=ne.tag,ne!==Oe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(nt=null,ne=$),nt!==ne)){if($t=yd,gt="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=Td,gt="onPointerLeave",Z="onPointerEnter",G="pointer"),Oe=nt==null?et:Ha(nt),J=ne==null?et:Ha(ne),et=new $t(gt,G+"leave",nt,a,dt),et.target=Oe,et.relatedTarget=J,gt=null,Li(dt)===$&&($t=new $t(Z,G+"enter",ne,a,dt),$t.target=J,$t.relatedTarget=Oe,gt=$t),Oe=gt,nt&&ne)e:{for($t=nt,Z=ne,G=0,J=$t;J;J=qr(J))G++;for(J=0,gt=Z;gt;gt=qr(gt))J++;for(;0<G-J;)$t=qr($t),G--;for(;0<J-G;)Z=qr(Z),J--;for(;G--;){if($t===Z||Z!==null&&$t===Z.alternate)break e;$t=qr($t),Z=qr(Z)}$t=null}else $t=null;nt!==null&&dg(vt,et,nt,$t,!1),ne!==null&&Oe!==null&&dg(vt,Oe,ne,$t,!0)}}t:{if(et=$?Ha($):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Gt=Ld;else if(Dd(et))if(Nd)Gt=E0;else{Gt=M0;var pe=x0}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Pu($.elementType)&&(Gt=Ld):Gt=y0;if(Gt&&(Gt=Gt(e,$))){Ud(vt,Gt,a,dt);break t}pe&&pe(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&yn(et,"number",et.value)}switch(pe=$?Ha($):window,e){case"focusin":(Dd(pe)||pe.contentEditable==="true")&&(yr=pe,Zu=$,Ns=null);break;case"focusout":Ns=Zu=yr=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Gd(vt,a,dt);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Gd(vt,a,dt)}var Yt;if(Xu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Mr?Cd(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(bd&&a.locale!=="ko"&&(Mr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Mr&&(Yt=xd()):(ua=dt,Iu="value"in ua?ua.value:ua.textContent,Mr=!0)),pe=Ll($,ee),0<pe.length&&(ee=new Ed(ee,e,null,a,dt),vt.push({event:ee,listeners:pe}),Yt?ee.data=Yt:(Yt=wd(a),Yt!==null&&(ee.data=Yt)))),(Yt=m0?g0(e,a):_0(e,a))&&(ee=Ll($,"onBeforeInput"),0<ee.length&&(pe=new Ed("onBeforeInput","beforeinput",null,a,dt),vt.push({event:pe,listeners:ee}),pe.data=Yt)),oS(vt,e,$,a,dt)}fg(vt,n)})}function oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ll(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=bs(e,a),u!=null&&s.unshift(oo(e,u,f)),u=bs(e,n),u!=null&&s.push(oo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dg(e,n,a,s,u){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,O=T.alternate,$=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||$===null||(O=$,u?($=bs(a,f),$!=null&&x.unshift(oo(a,$,O))):u||($=bs(a,f),$!=null&&x.push(oo(a,$,O)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var fS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function pg(e){return(typeof e=="string"?e:""+e).replace(fS,`
`).replace(hS,"")}function mg(e,n){return n=pg(n),pg(e)===n}function Nl(){}function Pe(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||On(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&On(e,""+s);break;case"className":Ft(e,"class",s);break;case"tabIndex":Ft(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,a,s);break;case"style":_d(e,s,f);break;case"data":if(n!=="object"){Ft(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Go(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Go(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Nl);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Go(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Ut(e,"popover",s);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ut(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vv.get(a)||a,Ut(e,a,s))}}function Sf(e,n,a,s,u,f){switch(a){case"style":_d(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?On(e,s):(typeof s=="number"||typeof s=="bigint")&&On(e,""+s);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Nl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ho.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Ye]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ut(e,a,s)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,f,x,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),s&&Pe(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var T=f=x=u=null,O=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":x=dt;break;case"checked":O=dt;break;case"defaultChecked":$=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Pe(e,n,s,dt,a,null)}}Cn(e,f,T,O,$,x,u,!1),me(e);return;case"select":_e("invalid",e),s=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Pe(e,n,u,T,a,null)}n=f,a=x,e.multiple=!!s,n!=null?Ze(e,!!s,n,!1):a!=null&&Ze(e,!!s,a,!0);return;case"textarea":_e("invalid",e),f=u=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Pe(e,n,x,T,a,null)}vr(e,s,u,f),me(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(e,n,O,s,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(s=0;s<so.length;s++)_e(so[s],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,$,s,a,null)}return;default:if(Pu(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Sf(e,n,dt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Pe(e,n,T,s,a,null))}function dS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,O=null,$=null,dt=null;for(nt in a){var vt=a[nt];if(a.hasOwnProperty(nt)&&vt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":O=vt;default:s.hasOwnProperty(nt)||Pe(e,n,nt,null,s,vt)}}for(var et in s){var nt=s[et];if(vt=a[et],s.hasOwnProperty(et)&&(nt!=null||vt!=null))switch(et){case"type":f=nt;break;case"name":u=nt;break;case"checked":$=nt;break;case"defaultChecked":dt=nt;break;case"value":x=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==vt&&Pe(e,n,et,nt,s,vt)}}ze(e,x,T,O,$,dt,f,u);return;case"select":nt=x=T=et=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":nt=O;default:s.hasOwnProperty(f)||Pe(e,n,f,null,s,O)}for(u in s)if(f=s[u],O=a[u],s.hasOwnProperty(u)&&(f!=null||O!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==O&&Pe(e,n,u,f,s,O)}n=T,a=x,s=nt,et!=null?Ze(e,!!a,et,!1):!!s!=!!a&&(n!=null?Ze(e,!!a,n,!0):Ze(e,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(e,n,T,null,s,u)}for(x in s)if(u=s[x],f=a[x],s.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":et=u;break;case"defaultValue":nt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(e,n,x,u,s,f)}_n(e,et,nt);return;case"option":for(var ne in a)if(et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Pe(e,n,ne,null,s,et)}for(O in s)if(et=s[O],nt=a[O],s.hasOwnProperty(O)&&et!==nt&&(et!=null||nt!=null))switch(O){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Pe(e,n,O,et,s,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!s.hasOwnProperty($t)&&Pe(e,n,$t,null,s,et);for($ in s)if(et=s[$],nt=a[$],s.hasOwnProperty($)&&et!==nt&&(et!=null||nt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Pe(e,n,$,et,s,nt)}return;default:if(Pu(n)){for(var Oe in a)et=a[Oe],a.hasOwnProperty(Oe)&&et!==void 0&&!s.hasOwnProperty(Oe)&&Sf(e,n,Oe,void 0,s,et);for(dt in s)et=s[dt],nt=a[dt],!s.hasOwnProperty(dt)||et===nt||et===void 0&&nt===void 0||Sf(e,n,dt,et,s,nt);return}}for(var Z in a)et=a[Z],a.hasOwnProperty(Z)&&et!=null&&!s.hasOwnProperty(Z)&&Pe(e,n,Z,null,s,et);for(vt in s)et=s[vt],nt=a[vt],!s.hasOwnProperty(vt)||et===nt||et==null&&nt==null||Pe(e,n,vt,et,s,nt)}var xf=null,Mf=null;function Pl(e){return e.nodeType===9?e:e.ownerDocument}function gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _g(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function pS(){var e=window.event;return e&&e.type==="popstate"?e===Ef?!1:(Ef=e,!0):(Ef=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(_S)}:vg;function _S(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function xg(e,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=e.ownerDocument;if(a&1&&lo(x.documentElement),a&2&&lo(x.body),a&4)for(a=x.head,lo(a),x=a.firstChild;x;){var T=x.nextSibling,O=x.nodeName;x[xi]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(u===0){e.removeChild(f),_o(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);_o(n)}function Tf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),_r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[xi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function SS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function xS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Af=null;function Mg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function yg(e,n,a){switch(n=Pl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);_r(e)}var ai=new Map,Eg=new Set;function Ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=j.d;j.d={f:MS,r:yS,D:ES,C:TS,L:bS,m:AS,X:CS,S:RS,M:wS};function MS(){var e=qi.f(),n=Al();return e||n}function yS(e){var n=oa(e);n!==null&&n.tag===5&&n.type==="form"?kp(n):qi.r(e)}var Yr=typeof document>"u"?null:document;function Tg(e,n,a){var s=Yr;if(s&&typeof n=="string"&&n){var u=hn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Eg.has(u)||(Eg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),xn(n,"link",e),tn(n),s.head.appendChild(n)))}}function ES(e){qi.D(e),Tg("dns-prefetch",e,null)}function TS(e,n){qi.C(e,n),Tg("preconnect",e,n)}function bS(e,n,a){qi.L(e,n,a);var s=Yr;if(s&&e&&n){var u='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hn(a.imageSizes)+'"]')):u+='[href="'+hn(e)+'"]';var f=u;switch(n){case"style":f=Zr(e);break;case"script":f=Kr(e)}ai.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),xn(n,"link",e),tn(n),s.head.appendChild(n)))}}function AS(e,n){qi.m(e,n);var a=Yr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hn(s)+'"][href="'+hn(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(e)}if(!ai.has(f)&&(e=g({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),xn(s,"link",e),tn(s),a.head.appendChild(s)}}}function RS(e,n,a){qi.S(e,n,a);var s=Yr;if(s&&e){var u=la(s).hoistableStyles,f=Zr(e);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(uo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&Rf(e,a);var O=x=s.createElement("link");tn(O),xn(O,"link",e),O._p=new Promise(function($,dt){O.onload=$,O.onerror=dt}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Bl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function CS(e,n){qi.X(e,n);var a=Yr;if(a&&e){var s=la(a).hoistableScripts,u=Kr(e),f=s.get(u);f||(f=a.querySelector(co(u)),f||(e=g({src:e,async:!0},n),(n=ai.get(u))&&Cf(e,n),f=a.createElement("script"),tn(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function wS(e,n){qi.M(e,n);var a=Yr;if(a&&e){var s=la(a).hoistableScripts,u=Kr(e),f=s.get(u);f||(f=a.querySelector(co(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ai.get(u))&&Cf(e,n),f=a.createElement("script"),tn(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function bg(e,n,a,s){var u=(u=st.current)?Ol(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zr(a.href),a=la(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zr(a.href);var f=la(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(uo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||DS(u,e,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=la(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Zr(e){return'href="'+hn(e)+'"'}function uo(e){return'link[rel="stylesheet"]['+e+"]"}function Ag(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function DS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),tn(n),e.head.appendChild(n))}function Kr(e){return'[src="'+hn(e)+'"]'}function co(e){return"script[async]"+e}function Rg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),tn(s),xn(s,"style",u),Bl(s,a.precedence,e),n.instance=s;case"stylesheet":u=Zr(a.href);var f=e.querySelector(uo(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=Ag(a),(u=ai.get(u))&&Rf(s,u),f=(e.ownerDocument||e).createElement("link"),tn(f);var x=f;return x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),xn(f,"link",s),n.state.loading|=4,Bl(f,a.precedence,e),n.instance=f;case"script":return f=Kr(a.src),(u=e.querySelector(co(f)))?(n.instance=u,tn(u),u):(s=a,(u=ai.get(f))&&(s=g({},a),Cf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),tn(u),xn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bl(s,a.precedence,e));return n.instance}function Bl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var zl=null;function Cg(e,n,a){if(zl===null){var s=new Map,u=zl=new Map;u.set(a,s)}else u=zl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[xi]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function wg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function US(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fo=null;function LS(){}function NS(e,n,a){if(fo===null)throw Error(r(475));var s=fo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Zr(a.href),f=e.querySelector(uo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Fl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=Ag(a),(u=ai.get(u))&&Rf(a,u),f=f.createElement("link"),tn(f);var x=f;x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Fl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function PS(){if(fo===null)throw Error(r(475));var e=fo;return e.stylesheets&&e.count===0&&wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&wf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,n.forEach(OS,e),Il=null,Fl.call(e))}function OS(e,n){if(!(n.state.loading&4)){var a=Il.get(e);if(a)var s=a.get(null);else{a=new Map,Il.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,u),a.set(x,u),this.count++,s=Fl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ho={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function BS(e,n,a,s,u,f,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ug(e,n,a,s,u,f,x,T,O,$,dt,vt){return e=new BS(e,n,a,x,T,O,$,vt),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=uc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},dc(f),e}function Lg(e){return e?(e=Ar,e):Ar}function Ng(e,n,a,s,u,f){u=Lg(u),s.context===null?s.context=u:s.pendingContext=u,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(e,s,n),a!==null&&(Kn(a,e,n),Vs(a,e,n))}function Pg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Df(e,n){Pg(e,n),(e=e.alternate)&&Pg(e,n)}function Og(e){if(e.tag===13){var n=br(e,67108864);n!==null&&Kn(n,e,67108864),Df(e,67108864)}}var Hl=!0;function zS(e,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=2,Uf(e,n,a,s)}finally{j.p=f,P.T=u}}function FS(e,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=8,Uf(e,n,a,s)}finally{j.p=f,P.T=u}}function Uf(e,n,a,s){if(Hl){var u=Lf(s);if(u===null)vf(e,n,s,Gl,a),zg(e,s);else if(HS(u,e,n,a,s))s.stopPropagation();else if(zg(e,s),n&4&&-1<IS.indexOf(e)){for(;u!==null;){var f=oa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Zt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var O=1<<31-Bt(x);T.entanglements[1]|=O,x&=~O}bi(f),(De&6)===0&&(Tl=It()+500,ro(0))}}break;case 13:T=br(f,2),T!==null&&Kn(T,f,2),Al(),Df(f,2)}if(f=Lf(s),f===null&&vf(e,n,s,Gl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else vf(e,n,s,null,a)}}function Lf(e){return e=Bu(e),Nf(e)}var Gl=null;function Nf(e){if(Gl=null,e=Li(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gl=e,null}function Bg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case Ht:return 2;case re:return 8;case Xe:case We:return 32;case L:return 268435456;default:return 32}default:return 32}}var Pf=!1,Aa=null,Ra=null,Ca=null,po=new Map,mo=new Map,wa=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zg(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function go(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&Og(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function HS(e,n,a,s,u){switch(n){case"focusin":return Aa=go(Aa,e,n,a,s,u),!0;case"dragenter":return Ra=go(Ra,e,n,a,s,u),!0;case"mouseover":return Ca=go(Ca,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return po.set(f,go(po.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,mo.set(f,go(mo.get(f)||null,e,n,a,s,u)),!0}return!1}function Fg(e){var n=Li(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ui(e.priority,function(){if(a.tag===13){var s=Zn();s=ie(s);var u=br(a,s);u!==null&&Kn(u,a,s),Df(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Lf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Ou=s,a.target.dispatchEvent(s),Ou=null}else return n=oa(a),n!==null&&Og(n),e.blockedOn=a,!1;n.shift()}return!0}function Ig(e,n,a){Vl(e)&&a.delete(n)}function GS(){Pf=!1,Aa!==null&&Vl(Aa)&&(Aa=null),Ra!==null&&Vl(Ra)&&(Ra=null),Ca!==null&&Vl(Ca)&&(Ca=null),po.forEach(Ig),mo.forEach(Ig)}function kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,GS)))}var Xl=null;function Hg(e){Xl!==e&&(Xl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===e&&(Xl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Nf(s||a)===null)continue;break}var f=oa(a);f!==null&&(e.splice(n,3),n-=3,Lc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function _o(e){function n(O){return kl(O,e)}Aa!==null&&kl(Aa,e),Ra!==null&&kl(Ra,e),Ca!==null&&kl(Ca,e),po.forEach(n),mo.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],x=u[Ye]||null;if(typeof f=="function")x||Hg(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Ye]||null)T=x.formAction;else if(Nf(u)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Hg(a)}}}function Of(e){this._internalRoot=e}Wl.prototype.render=Of.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Ng(a,s,e,n,null,null)},Wl.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ng(e.current,2,null,e,null,null),Al(),n[Si]=null}};function Wl(e){this._internalRoot=e}Wl.prototype.unstable_scheduleHydration=function(e){if(e){var n=ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&Fg(e)}};var Gg=t.version;if(Gg!=="19.1.1")throw Error(r(527,Gg,"19.1.1"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{ht=ql.inject(VS),xt=ql}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=im,f=am,x=rm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Ug(e,1,!1,null,null,a,s,u,f,x,T,null),e[Si]=n.current,_f(e),new Of(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=im,x=am,T=rm,O=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Ug(e,1,!0,n,a??null,s,u,f,x,T,O,$),n.context=Lg(null),a=n.current,s=Zn(),s=ie(s),u=ha(s),u.callback=null,da(a,u,s),a=s,n.current.lanes=a,zt(n,a),bi(n),e[Si]=n.current,_f(e),new Wl(n)},So.version="19.1.1",So}var Qg;function $S(){if(Qg)return Ff.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ff.exports=JS(),Ff.exports}var tx=$S();const ex=lv(tx);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="179",nx=0,Jg=1,ix=2,uv=1,ax=2,Ji=3,Ia=0,Gn=1,$i=2,ea=0,hs=1,bu=2,$g=3,t_=4,rx=5,fr=100,sx=101,ox=102,lx=103,ux=104,cx=200,fx=201,hx=202,dx=203,_h=204,vh=205,px=206,mx=207,gx=208,_x=209,vx=210,Sx=211,xx=212,Mx=213,yx=214,Sh=0,xh=1,Mh=2,ms=3,yh=4,Eh=5,Th=6,bh=7,cv=0,Ex=1,Tx=2,Fa=0,bx=1,Ax=2,Rx=3,Cx=4,wx=5,Dx=6,Ux=7,fv=300,gs=301,_s=302,Ah=303,Rh=304,Du=306,Ch=1e3,ta=1001,wh=1002,Nn=1003,Lx=1004,Yl=1005,Ri=1006,Vf=1007,dr=1008,ra=1009,hv=1010,dv=1011,Co=1012,sd=1013,pr=1014,Ci=1015,na=1016,od=1017,ld=1018,wo=1020,pv=35902,mv=1021,gv=1022,li=1023,Do=1026,Uo=1027,_v=1028,ud=1029,vv=1030,cd=1031,fd=1033,vu=33776,Su=33777,xu=33778,Mu=33779,Dh=35840,Uh=35841,Lh=35842,Nh=35843,Ph=36196,Oh=37492,Bh=37496,zh=37808,Fh=37809,Ih=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,Zh=37819,Kh=37820,jh=37821,yu=36492,Qh=36494,Jh=36495,Sv=36283,$h=36284,td=36285,ed=36286,Nx=3200,Px=3201,Ox=0,Bx=1,za="",si="srgb",vs="srgb-linear",Au="linear",Be="srgb",jr=7680,e_=519,zx=512,Fx=513,Ix=514,xv=515,Hx=516,Gx=517,Vx=518,kx=519,n_=35044,i_="300 es",wi=2e3,Ru=2001;class Ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a_=1234567;const bo=Math.PI/180,Lo=180/Math.PI;function ys(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function hd(o,t){return(o%t+t)%t}function Xx(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function Wx(o,t,i){return o!==t?(i-o)/(t-o):0}function Ao(o,t,i){return(1-i)*o+i*t}function qx(o,t,i,r){return Ao(o,t,1-Math.exp(-i*r))}function Yx(o,t=1){return t-Math.abs(hd(o,t*2)-t)}function Zx(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Kx(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function jx(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Qx(o,t){return o+Math.random()*(t-o)}function Jx(o){return o*(.5-Math.random())}function $x(o){o!==void 0&&(a_=o);let t=a_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tM(o){return o*bo}function eM(o){return o*Lo}function nM(o){return(o&o-1)===0&&o!==0}function iM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function aM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function rM(o,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),g=h((t+r)/2),v=c((t-r)/2),S=h((t-r)/2),y=c((r-t)/2),b=h((r-t)/2);switch(l){case"XYX":o.set(d*g,m*v,m*S,d*p);break;case"YZY":o.set(m*S,d*g,m*v,d*p);break;case"ZXZ":o.set(m*v,m*S,d*g,d*p);break;case"XZX":o.set(d*g,m*b,m*y,d*p);break;case"YXY":o.set(m*y,d*g,m*b,d*p);break;case"ZYZ":o.set(m*b,m*y,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function cs(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Dn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const r_={DEG2RAD:bo,RAD2DEG:Lo,generateUUID:ys,clamp:Se,euclideanModulo:hd,mapLinear:Xx,inverseLerp:Wx,lerp:Ao,damp:qx,pingpong:Yx,smoothstep:Zx,smootherstep:Kx,randInt:jx,randFloat:Qx,randFloatSpread:Jx,seededRandom:$x,degToRad:tM,radToDeg:eM,isPowerOfTwo:nM,ceilPowerOfTwo:iM,floorPowerOfTwo:aM,setQuaternionFromProperEuler:rM,normalize:Dn,denormalize:cs};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class No{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const S=c[h+0],y=c[h+1],b=c[h+2],C=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=y,t[i+2]=b,t[i+3]=C;return}if(v!==C||m!==S||p!==y||g!==b){let M=1-d;const _=m*S+p*y+g*b+v*C,H=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const z=Math.sqrt(N),k=Math.atan2(z,_*H);M=Math.sin(M*k)/z,d=Math.sin(d*k)/z}const U=d*H;if(m=m*M+S*U,p=p*M+y*U,g=g*M+b*U,v=v*M+C*U,M===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=z,p*=z,g*=z,v*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],S=c[h+1],y=c[h+2],b=c[h+3];return t[i]=d*b+g*v+m*y-p*S,t[i+1]=m*b+g*S+p*v-d*y,t[i+2]=p*b+g*y+d*S-m*v,t[i+3]=g*b-d*v-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),S=m(r/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"YXZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"ZXY":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"ZYX":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"YZX":this._x=S*g*v+p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v-S*y*b;break;case"XZY":this._x=S*g*v-p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(s_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(s_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return kf.copy(this).projectOnVector(t),this.sub(kf)}reflect(t){return this.sub(kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new it,s_=new No;class oe{constructor(t,i,r,l,c,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],y=r[5],b=r[8],C=l[0],M=l[3],_=l[6],H=l[1],N=l[4],U=l[7],z=l[2],k=l[5],I=l[8];return c[0]=h*C+d*H+m*z,c[3]=h*M+d*N+m*k,c[6]=h*_+d*U+m*I,c[1]=p*C+g*H+v*z,c[4]=p*M+g*N+v*k,c[7]=p*_+g*U+v*I,c[2]=S*C+y*H+b*z,c[5]=S*M+y*N+b*k,c[8]=S*_+y*U+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,S=d*m-g*c,y=p*c-h*m,b=i*v+r*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=v*C,t[1]=(l*p-g*r)*C,t[2]=(d*r-l*h)*C,t[3]=S*C,t[4]=(g*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=y*C,t[7]=(r*m-p*i)*C,t[8]=(h*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Xf.makeScale(t,i)),this}rotate(t){return this.premultiply(Xf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new oe;function Mv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Cu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function sM(){const o=Cu("canvas");return o.style.display="block",o}const o_={};function ds(o){o in o_||(o_[o]=!0,console.warn(o))}function oM(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const l_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lM(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Au:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:t,whitePoint:r,transfer:Au,toXYZ:l_,fromXYZ:u_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:l_,fromXYZ:u_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Ae=lM();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class uM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Qr===void 0&&(Qr=Cu("canvas")),Qr.width=t.width,Qr.height=t.height;const l=Qr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Qr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Cu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ia(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cM=0;class dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Wf(l[h].image)):c.push(Wf(l[h]))}else c=Wf(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?uM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fM=0;const qf=new it;class Pn extends Ms{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ta,l=ta,c=Ri,h=dr,d=li,m=ra,p=Pn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=ys(),this.name="",this.source=new dd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qf).x}get height(){return this.source.getSize(qf).y}get depth(){return this.source.getSize(qf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ch:t.x=t.x-Math.floor(t.x);break;case ta:t.x=t.x<0?0:1;break;case wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ch:t.y=t.y-Math.floor(t.y);break;case ta:t.y=t.y<0?0:1;break;case wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=fv;Pn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],S=m[1],y=m[5],b=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(y+1)/2,z=(_+1)/2,k=(g+S)/4,I=(v+C)/4,Q=(b+M)/4;return N>U&&N>z?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=k/r,c=I/r):U>z?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=k/l,c=Q/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=I/c,l=Q/c),this.set(r,l,c,i),this}let H=Math.sqrt((M-b)*(M-b)+(v-C)*(v-C)+(S-g)*(S-g));return Math.abs(H)<.001&&(H=1),this.x=(M-b)/H,this.y=(v-C)/H,this.z=(S-g)/H,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hM extends Ms{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new dd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends hM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class yv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dM extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,pi):pi.fromBufferAttribute(c,h),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zl.copy(r.boundingBox)),Zl.applyMatrix4(t.matrixWorld),this.union(Zl)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xo),Kl.subVectors(this.max,xo),Jr.subVectors(t.a,xo),$r.subVectors(t.b,xo),ts.subVectors(t.c,xo),Ua.subVectors($r,Jr),La.subVectors(ts,$r),ir.subVectors(Jr,ts);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-ir.z,ir.y,Ua.z,0,-Ua.x,La.z,0,-La.x,ir.z,0,-ir.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-ir.y,ir.x,0];return!Yf(i,Jr,$r,ts,Kl)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,Jr,$r,ts,Kl))?!1:(jl.crossVectors(Ua,La),i=[jl.x,jl.y,jl.z],Yf(i,Jr,$r,ts,Kl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new it,new it,new it,new it,new it,new it,new it,new it],pi=new it,Zl=new Po,Jr=new it,$r=new it,ts=new it,Ua=new it,La=new it,ir=new it,xo=new it,Kl=new it,jl=new it,ar=new it;function Yf(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){ar.fromArray(o,c);const d=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),m=t.dot(ar),p=i.dot(ar),g=r.dot(ar);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const pM=new Po,Mo=new it,Zf=new it;class Uu{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):pM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(Zf)),this.expandByPoint(Mo.copy(t.center).sub(Zf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zi=new it,Kf=new it,Ql=new it,Na=new it,jf=new it,Jl=new it,Qf=new it;class Ev{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Kf.copy(t).add(i).multiplyScalar(.5),Ql.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(Kf);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=Na.dot(this.direction),m=-Na.dot(Ql),p=Na.lengthSq(),g=Math.abs(1-h*h);let v,S,y,b;if(g>0)if(v=h*m-d,S=h*d-m,b=c*g,v>=0)if(S>=-b)if(S<=b){const C=1/g;v*=C,S*=C,y=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S=-c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Kf).addScaledVector(Ql,S),y}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,c){jf.subVectors(i,t),Jl.subVectors(r,t),Qf.crossVectors(jf,Jl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,t);const m=d*this.direction.dot(Jl.crossVectors(Na,Jl));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(Qf);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,r,l,c,h,d,m,p,g,v,S,y,b,C,M){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,v,S,y,b,C,M)}set(t,i,r,l,c,h,d,m,p,g,v,S,y,b,C,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=b,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/es.setFromMatrixColumn(t,0).length(),c=1/es.setFromMatrixColumn(t,1).length(),h=1/es.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const S=h*g,y=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+y*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,y=m*v,b=p*g,C=p*v;i[0]=S+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,y=m*v,b=p*g,C=p*v;i[0]=S-C*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,y=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=b*p-y,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-S*v,i[8]=b*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+b,i[10]=S-C*v}else if(t.order==="XZY"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+C,i[5]=h*g,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*g,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mM,t,gM)}lookAt(t,i,r){const l=this.elements;return jn.subVectors(t,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Pa.crossVectors(r,jn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Pa.crossVectors(r,jn)),Pa.normalize(),$l.crossVectors(jn,Pa),l[0]=Pa.x,l[4]=$l.x,l[8]=jn.x,l[1]=Pa.y,l[5]=$l.y,l[9]=jn.y,l[2]=Pa.z,l[6]=$l.z,l[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],y=r[13],b=r[2],C=r[6],M=r[10],_=r[14],H=r[3],N=r[7],U=r[11],z=r[15],k=l[0],I=l[4],Q=l[8],D=l[12],w=l[1],B=l[5],ct=l[9],ft=l[13],pt=l[2],mt=l[6],P=l[10],j=l[14],Y=l[3],lt=l[7],R=l[11],X=l[15];return c[0]=h*k+d*w+m*pt+p*Y,c[4]=h*I+d*B+m*mt+p*lt,c[8]=h*Q+d*ct+m*P+p*R,c[12]=h*D+d*ft+m*j+p*X,c[1]=g*k+v*w+S*pt+y*Y,c[5]=g*I+v*B+S*mt+y*lt,c[9]=g*Q+v*ct+S*P+y*R,c[13]=g*D+v*ft+S*j+y*X,c[2]=b*k+C*w+M*pt+_*Y,c[6]=b*I+C*B+M*mt+_*lt,c[10]=b*Q+C*ct+M*P+_*R,c[14]=b*D+C*ft+M*j+_*X,c[3]=H*k+N*w+U*pt+z*Y,c[7]=H*I+N*B+U*mt+z*lt,c[11]=H*Q+N*ct+U*P+z*R,c[15]=H*D+N*ft+U*j+z*X,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],S=t[10],y=t[14],b=t[3],C=t[7],M=t[11],_=t[15];return b*(+c*m*v-l*p*v-c*d*S+r*p*S+l*d*y-r*m*y)+C*(+i*m*y-i*p*S+c*h*S-l*h*y+l*p*g-c*m*g)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*S+l*h*v-r*h*S+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],S=t[10],y=t[11],b=t[12],C=t[13],M=t[14],_=t[15],H=v*M*p-C*S*p+C*m*y-d*M*y-v*m*_+d*S*_,N=b*S*p-g*M*p-b*m*y+h*M*y+g*m*_-h*S*_,U=g*C*p-b*v*p+b*d*y-h*C*y-g*d*_+h*v*_,z=b*v*m-g*C*m-b*d*S+h*C*S+g*d*M-h*v*M,k=i*H+r*N+l*U+c*z;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=H*I,t[1]=(C*S*c-v*M*c-C*l*y+r*M*y+v*l*_-r*S*_)*I,t[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*_+r*m*_)*I,t[3]=(v*m*c-d*S*c-v*l*p+r*S*p+d*l*y-r*m*y)*I,t[4]=N*I,t[5]=(g*M*c-b*S*c+b*l*y-i*M*y-g*l*_+i*S*_)*I,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*_-i*m*_)*I,t[7]=(h*S*c-g*m*c+g*l*p-i*S*p-h*l*y+i*m*y)*I,t[8]=U*I,t[9]=(b*v*c-g*C*c-b*r*y+i*C*y+g*r*_-i*v*_)*I,t[10]=(h*C*c-b*d*c+b*r*p-i*C*p-h*r*_+i*d*_)*I,t[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*y-i*d*y)*I,t[12]=z*I,t[13]=(g*C*l-b*v*l+b*r*S-i*C*S-g*r*M+i*v*M)*I,t[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*M-i*d*M)*I,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*S+i*d*S)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,S=c*p,y=c*g,b=c*v,C=h*g,M=h*v,_=d*v,H=m*p,N=m*g,U=m*v,z=r.x,k=r.y,I=r.z;return l[0]=(1-(C+_))*z,l[1]=(y+U)*z,l[2]=(b-N)*z,l[3]=0,l[4]=(y-U)*k,l[5]=(1-(S+_))*k,l[6]=(M+H)*k,l[7]=0,l[8]=(b+N)*I,l[9]=(M-H)*I,l[10]=(1-(S+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=es.set(l[0],l[1],l[2]).length();const h=es.set(l[4],l[5],l[6]).length(),d=es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const p=1/c,g=1/h,v=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,i.setFromRotationMatrix(mi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=wi,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(r-l),S=(i+t)/(i-t),y=(r+l)/(r-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===wi)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Ru)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=wi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),S=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===wi)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===Ru)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const es=new it,mi=new rn,mM=new it(0,0,0),gM=new it(1,1,1),Pa=new it,$l=new it,jn=new it,c_=new rn,f_=new No;class sa{constructor(t=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return c_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return f_.setFromEuler(this),this.setFromQuaternion(f_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class Tv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _M=0;const h_=new it,ns=new No,Ki=new rn,tu=new it,yo=new it,vM=new it,SM=new No,d_=new it(1,0,0),p_=new it(0,1,0),m_=new it(0,0,1),g_={type:"added"},xM={type:"removed"},is={type:"childadded",child:null},Jf={type:"childremoved",child:null};class Vn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const t=new it,i=new sa,r=new No,l=new it(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new oe}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ns.setFromAxisAngle(t,i),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,i){return ns.setFromAxisAngle(t,i),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(d_,t)}rotateY(t){return this.rotateOnAxis(p_,t)}rotateZ(t){return this.rotateOnAxis(m_,t)}translateOnAxis(t,i){return h_.copy(t).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(d_,t)}translateY(t){return this.translateOnAxis(p_,t)}translateZ(t){return this.translateOnAxis(m_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?tu.copy(t):tu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(yo,tu,this.up):Ki.lookAt(tu,yo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),ns.setFromRotationMatrix(Ki),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g_),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xM),Jf.child=t,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g_),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,vM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,SM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),S=h(t.skeletons),y=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new it(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new it,ji=new it,$f=new it,Qi=new it,as=new it,rs=new it,__=new it,th=new it,eh=new it,nh=new it,ih=new $e,ah=new $e,rh=new $e;class _i{constructor(t=new it,i=new it,r=new it){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),gi.subVectors(t,i),l.cross(gi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){gi.subVectors(l,i),ji.subVectors(r,i),$f.subVectors(t,i);const h=gi.dot(gi),d=gi.dot(ji),m=gi.dot($f),p=ji.dot(ji),g=ji.dot($f),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(p*m-d*g)*S,b=(h*g-d*m)*S;return c.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return ih.setScalar(0),ah.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,r),rh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ih,c.x),h.addScaledVector(ah,c.y),h.addScaledVector(rh,c.z),h}static isFrontFacing(t,i,r,l){return gi.subVectors(r,i),ji.subVectors(t,i),gi.cross(ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),gi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;as.subVectors(l,r),rs.subVectors(c,r),th.subVectors(t,r);const m=as.dot(th),p=rs.dot(th);if(m<=0&&p<=0)return i.copy(r);eh.subVectors(t,l);const g=as.dot(eh),v=rs.dot(eh);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(as,h);nh.subVectors(t,c);const y=as.dot(nh),b=rs.dot(nh);if(b>=0&&y<=b)return i.copy(c);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(rs,d);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return __.subVectors(c,l),d=(v-g)/(v-g+(y-b)),i.copy(l).addScaledVector(__,d);const _=1/(M+C+S);return h=C*_,d=S*_,i.copy(r).addScaledVector(as,h).addScaledVector(rs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},eu={h:0,s:0,l:0};function sh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ve{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=hd(t,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=sh(h,c,t+1/3),this.g=sh(h,c,t),this.b=sh(h,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=bv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Ae.workingToColorSpace(An.copy(this),t),Math.round(Se(An.r*255,0,255))*65536+Math.round(Se(An.g*255,0,255))*256+Math.round(Se(An.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,c=An.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(An.copy(this),i),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=si){Ae.workingToColorSpace(An.copy(this),t);const i=An.r,r=An.g,l=An.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+i,Oa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Oa),t.getHSL(eu);const r=Ao(Oa.h,eu.h,i),l=Ao(Oa.s,eu.s,i),c=Ao(Oa.l,eu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new ve;ve.NAMES=bv;let MM=0;class Oo extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=hs,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==Ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pd extends Oo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new it,nu=new de;let yM=0;class Hn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=n_,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(t),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=cs(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Dn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=cs(i,this.array)),i}setX(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=cs(i,this.array)),i}setY(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=cs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=cs(i,this.array)),i}setW(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array),c=Dn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==n_&&(t.usage=this.usage),t}}class Av extends Hn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Rv extends Hn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class aa extends Hn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let EM=0;const ri=new rn,oh=new Vn,ss=new it,Qn=new Po,Eo=new Po,gn=new it;class Ui extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mv(t)?Rv:Av)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new aa(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Qn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Eo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Qn.min,Eo.min),Qn.expandByPoint(gn),gn.addVectors(Qn.max,Eo.max),Qn.expandByPoint(gn)):(Qn.expandByPoint(Eo.min),Qn.expandByPoint(Eo.max))}Qn.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(ss.fromBufferAttribute(t,p),gn.add(ss)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new it,m[Q]=new it;const p=new it,g=new it,v=new it,S=new de,y=new de,b=new de,C=new it,M=new it;function _(Q,D,w){p.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,w),S.fromBufferAttribute(c,Q),y.fromBufferAttribute(c,D),b.fromBufferAttribute(c,w),g.sub(p),v.sub(p),y.sub(S),b.sub(S);const B=1/(y.x*b.y-b.x*y.y);isFinite(B)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(B),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(B),d[Q].add(C),d[D].add(C),d[w].add(C),m[Q].add(M),m[D].add(M),m[w].add(M))}let H=this.groups;H.length===0&&(H=[{start:0,count:t.count}]);for(let Q=0,D=H.length;Q<D;++Q){const w=H[Q],B=w.start,ct=w.count;for(let ft=B,pt=B+ct;ft<pt;ft+=3)_(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const N=new it,U=new it,z=new it,k=new it;function I(Q){z.fromBufferAttribute(l,Q),k.copy(z);const D=d[Q];N.copy(D),N.sub(z.multiplyScalar(z.dot(D))).normalize(),U.crossVectors(k,D);const B=U.dot(m[Q])<0?-1:1;h.setXYZW(Q,N.x,N.y,N.z,B)}for(let Q=0,D=H.length;Q<D;++Q){const w=H[Q],B=w.start,ct=w.count;for(let ft=B,pt=B+ct;ft<pt;ft+=3)I(t.getX(ft+0)),I(t.getX(ft+1)),I(t.getX(ft+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new it,c=new it,h=new it,d=new it,m=new it,p=new it,g=new it,v=new it;if(t)for(let S=0,y=t.count;S<y;S+=3){const b=t.getX(S+0),C=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,S=new p.constructor(m.length*g);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)S[b++]=p[y++]}return new Hn(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const S=p[g],y=t(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new rn,rr=new Ev,iu=new Uu,S_=new it,au=new it,ru=new it,su=new it,lh=new it,ou=new it,x_=new it,lu=new it;class Di extends Vn{constructor(t=new Ui,i=new pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(lh.fromBufferAttribute(v,t),h?ou.addScaledVector(lh,g):ou.addScaledVector(lh.sub(i),g))}i.add(ou)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(c),rr.copy(t.ray).recast(t.near),!(iu.containsPoint(rr.origin)===!1&&(rr.intersectSphere(iu,S_)===null||rr.origin.distanceToSquared(S_)>(t.far-t.near)**2))&&(v_.copy(c).invert(),rr.copy(t.ray).applyMatrix4(v_),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,rr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],H=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=H,z=N;U<z;U+=3){const k=d.getX(U),I=d.getX(U+1),Q=d.getX(U+2);l=uu(this,_,t,r,p,g,v,k,I,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const H=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=uu(this,h,t,r,p,g,v,H,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],H=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=H,z=N;U<z;U+=3){const k=U,I=U+1,Q=U+2;l=uu(this,_,t,r,p,g,v,k,I,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const H=M,N=M+1,U=M+2;l=uu(this,h,t,r,p,g,v,H,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function TM(o,t,i,r,l,c,h,d){let m;if(t.side===Gn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Ia,d),m===null)return null;lu.copy(d),lu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lu);return p<i.near||p>i.far?null:{distance:p,point:lu.clone(),object:o}}function uu(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,au),o.getVertexPosition(m,ru),o.getVertexPosition(p,su);const g=TM(o,t,i,r,au,ru,su,x_);if(g){const v=new it;_i.getBarycoord(x_,au,ru,su,v),l&&(g.uv=_i.getInterpolatedAttribute(l,d,m,p,v,new de)),c&&(g.uv1=_i.getInterpolatedAttribute(c,d,m,p,v,new de)),h&&(g.normal=_i.getInterpolatedAttribute(h,d,m,p,v,new it),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new it,materialIndex:0};_i.getNormal(au,ru,su,S.normal),g.face=S,g.barycoord=v}return g}class Bo extends Ui{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let S=0,y=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new aa(p,3)),this.setAttribute("normal",new aa(g,3)),this.setAttribute("uv",new aa(v,2));function b(C,M,_,H,N,U,z,k,I,Q,D){const w=U/I,B=z/Q,ct=U/2,ft=z/2,pt=k/2,mt=I+1,P=Q+1;let j=0,Y=0;const lt=new it;for(let R=0;R<P;R++){const X=R*B-ft;for(let ot=0;ot<mt;ot++){const _t=ot*w-ct;lt[C]=_t*H,lt[M]=X*N,lt[_]=pt,p.push(lt.x,lt.y,lt.z),lt[C]=0,lt[M]=0,lt[_]=k>0?1:-1,g.push(lt.x,lt.y,lt.z),v.push(ot/I),v.push(1-R/Q),j+=1}}for(let R=0;R<Q;R++)for(let X=0;X<I;X++){const ot=S+X+mt*R,_t=S+X+mt*(R+1),Mt=S+(X+1)+mt*(R+1),q=S+(X+1)+mt*R;m.push(ot,_t,q),m.push(_t,Mt,q),Y+=6}d.addGroup(y,Y,D),y+=Y,S+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)t[l]=r[l]}return t}function bM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Cv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const wu={clone:Ss,merge:Un};var AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Oo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=bM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wv extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new it,M_=new de,y_=new de;class oi extends wv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Lo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,M_,y_),i.subVectors(y_,M_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const os=-90,ls=1;class CM extends Vn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(os,ls,t,i);l.layers=this.layers,this.add(l);const c=new oi(os,ls,t,i);c.layers=this.layers,this.add(c);const h=new oi(os,ls,t,i);h.layers=this.layers,this.add(h);const d=new oi(os,ls,t,i);d.layers=this.layers,this.add(d);const m=new oi(os,ls,t,i);m.layers=this.layers,this.add(m);const p=new oi(os,ls,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ru)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,S,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Dv extends Pn{constructor(t=[],i=gs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wM extends vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),c=new Ln({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:ea});c.uniforms.tEquirect.value=i;const h=new Di(l,c),d=i.minFilter;return i.minFilter===dr&&(i.minFilter=Ri),new CM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class cu extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new cu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class UM extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class LM extends Pn{constructor(t=null,i=1,r=1,l,c,h,d,m,p=Nn,g=Nn,v,S){super(null,h,d,m,p,g,l,c,v,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=new it,NM=new it,PM=new oe;class ur{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=ch.subVectors(r,i).cross(NM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||PM.getNormalMatrix(t),l=this.coplanarPoint(ch).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Uu,OM=new de(.5,.5),fu=new it;class Uv{constructor(t=new ur,i=new ur,r=new ur,l=new ur,c=new ur,h=new ur){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=wi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],S=c[6],y=c[7],b=c[8],C=c[9],M=c[10],_=c[11],H=c[12],N=c[13],U=c[14],z=c[15];if(l[0].setComponents(p-h,y-g,_-b,z-H).normalize(),l[1].setComponents(p+h,y+g,_+b,z+H).normalize(),l[2].setComponents(p+d,y+v,_+C,z+N).normalize(),l[3].setComponents(p-d,y-v,_-C,z-N).normalize(),r)l[4].setComponents(m,S,M,U).normalize(),l[5].setComponents(p-m,y-S,_-M,z-U).normalize();else if(l[4].setComponents(p-m,y-S,_-M,z-U).normalize(),i===wi)l[5].setComponents(p+m,y+S,_+M,z+U).normalize();else if(i===Ru)l[5].setComponents(m,S,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);const i=OM.distanceTo(t.center);return sr.radius=.7071067811865476+i,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(fu.x=l.normal.x>0?t.max.x:t.min.x,fu.y=l.normal.y>0?t.max.y:t.min.y,fu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(fu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BM extends Oo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const E_=new rn,nd=new Ev,hu=new Uu,du=new it;class zM extends Vn{constructor(t=new Ui,i=new BM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hu.copy(r.boundingSphere),hu.applyMatrix4(l),hu.radius+=c,t.ray.intersectsSphere(hu)===!1)return;E_.copy(l).invert(),nd.copy(t.ray).applyMatrix4(E_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const S=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=S,C=y;b<C;b++){const M=p.getX(b);du.fromBufferAttribute(v,M),T_(du,M,m,l,t,i,this)}}else{const S=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let b=S,C=y;b<C;b++)du.fromBufferAttribute(v,b),T_(du,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T_(o,t,i,r,l,c,h){const d=nd.distanceSqToPoint(o);if(d<i){const m=new it;nd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Lv extends Pn{constructor(t,i,r=pr,l,c,h,d=Nn,m=Nn,p,g=Do,v=1){if(g!==Do&&g!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lu extends Ui{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,S=i/m,y=[],b=[],C=[],M=[];for(let _=0;_<g;_++){const H=_*S-h;for(let N=0;N<p;N++){const U=N*v-c;b.push(U,-H,0),C.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let H=0;H<d;H++){const N=H+p*_,U=H+p*(_+1),z=H+1+p*(_+1),k=H+1+p*_;y.push(N,U,k),y.push(U,z,k)}this.setIndex(y),this.setAttribute("position",new aa(b,3)),this.setAttribute("normal",new aa(C,3)),this.setAttribute("uv",new aa(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class FM extends Oo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IM extends Oo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nv extends wv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class HM extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class GM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function b_(o,t,i,r){const l=VM(r);switch(i){case mv:return o*t;case _v:return o*t/l.components*l.byteLength;case ud:return o*t/l.components*l.byteLength;case vv:return o*t*2/l.components*l.byteLength;case cd:return o*t*2/l.components*l.byteLength;case gv:return o*t*3/l.components*l.byteLength;case li:return o*t*4/l.components*l.byteLength;case fd:return o*t*4/l.components*l.byteLength;case vu:case Su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xu:case Mu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Uh:case Nh:return Math.max(o,16)*Math.max(t,8)/4;case Dh:case Lh:return Math.max(o,8)*Math.max(t,8)/2;case Ph:case Oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case jh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case yu:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Sv:case $h:return Math.ceil(o/4)*Math.ceil(t/4)*8;case td:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VM(o){switch(o){case ra:case hv:return{byteLength:1,components:1};case Co:case dv:case na:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case pr:case sd:case Ci:return{byteLength:4,components:1};case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function kM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<v.length;y++){const b=v[S],C=v[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,v[S]=C)}v.length=S+1;for(let y=0,b=v.length;y<b;y++){const C=v[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,my=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,By=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ky=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$y=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:XM,alphahash_pars_fragment:WM,alphamap_fragment:qM,alphamap_pars_fragment:YM,alphatest_fragment:ZM,alphatest_pars_fragment:KM,aomap_fragment:jM,aomap_pars_fragment:QM,batching_pars_vertex:JM,batching_vertex:$M,begin_vertex:ty,beginnormal_vertex:ey,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ay,clipping_planes_fragment:ry,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:uy,color_pars_fragment:cy,color_pars_vertex:fy,color_vertex:hy,common:dy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:Sy,colorspace_fragment:xy,colorspace_pars_fragment:My,envmap_fragment:yy,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Ty,envmap_pars_vertex:by,envmap_physical_pars_fragment:By,envmap_vertex:Ay,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:wy,fog_pars_fragment:Dy,gradientmap_pars_fragment:Uy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Py,lights_pars_begin:Oy,lights_toon_fragment:zy,lights_toon_pars_fragment:Fy,lights_phong_fragment:Iy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Vy,lights_fragment_begin:ky,lights_fragment_maps:Xy,lights_fragment_end:Wy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:Ky,map_fragment:jy,map_pars_fragment:Qy,map_particle_fragment:Jy,map_particle_pars_fragment:$y,metalnessmap_fragment:tE,metalnessmap_pars_fragment:eE,morphinstance_vertex:nE,morphcolor_vertex:iE,morphnormal_vertex:aE,morphtarget_pars_vertex:rE,morphtarget_vertex:sE,normal_fragment_begin:oE,normal_fragment_maps:lE,normal_pars_fragment:uE,normal_pars_vertex:cE,normal_vertex:fE,normalmap_pars_fragment:hE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:pE,clearcoat_pars_fragment:mE,iridescence_pars_fragment:gE,opaque_fragment:_E,packing:vE,premultiplied_alpha_fragment:SE,project_vertex:xE,dithering_fragment:ME,dithering_pars_fragment:yE,roughnessmap_fragment:EE,roughnessmap_pars_fragment:TE,shadowmap_pars_fragment:bE,shadowmap_pars_vertex:AE,shadowmap_vertex:RE,shadowmask_pars_fragment:CE,skinbase_vertex:wE,skinning_pars_vertex:DE,skinning_vertex:UE,skinnormal_vertex:LE,specularmap_fragment:NE,specularmap_pars_fragment:PE,tonemapping_fragment:OE,tonemapping_pars_fragment:BE,transmission_fragment:zE,transmission_pars_fragment:FE,uv_pars_fragment:IE,uv_pars_vertex:HE,uv_vertex:GE,worldpos_vertex:VE,background_vert:kE,background_frag:XE,backgroundCube_vert:WE,backgroundCube_frag:qE,cube_vert:YE,cube_frag:ZE,depth_vert:KE,depth_frag:jE,distanceRGBA_vert:QE,distanceRGBA_frag:JE,equirect_vert:$E,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:rT,meshlambert_frag:sT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:uT,meshnormal_frag:cT,meshphong_vert:fT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:ST,shadow_frag:xT,sprite_vert:MT,sprite_frag:yT},Pt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ai={basic:{uniforms:Un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Un([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Un([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Un([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Un([Pt.points,Pt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Un([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Un([Pt.common,Pt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Un([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Un([Pt.sprite,Pt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Un([Pt.common,Pt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Un([Pt.lights,Pt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ai.physical={uniforms:Un([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const pu={r:0,b:0,g:0},or=new sa,ET=new rn;function TT(o,t,i,r,l,c,h){const d=new ve(0);let m=c===!0?0:1,p,g,v=null,S=0,y=null;function b(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function C(N){let U=!1;const z=b(N);z===null?_(d,m):z&&z.isColor&&(_(z,1),U=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===Du)?(g===void 0&&(g=new Di(new Bo(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Ss(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),or.copy(U.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(or)),g.material.toneMapped=Ae.getTransfer(z.colorSpace)!==Be,(v!==z||S!==z.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=z,S=z.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Di(new Lu(2,2),new Ln({name:"BackgroundMaterial",uniforms:Ss(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(z.colorSpace)!==Be,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||S!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,S=z.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(pu,Cv(o)),r.buffers.color.setClear(pu.r,pu.g,pu.b,U,h)}function H(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:M,dispose:H}}function bT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(w,B,ct,ft,pt){let mt=!1;const P=v(ft,ct,B);c!==P&&(c=P,p(c.object)),mt=y(w,ft,ct,pt),mt&&b(w,ft,ct,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,U(w,B,ct,ft),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function v(w,B,ct){const ft=ct.wireframe===!0;let pt=r[w.id];pt===void 0&&(pt={},r[w.id]=pt);let mt=pt[B.id];mt===void 0&&(mt={},pt[B.id]=mt);let P=mt[ft];return P===void 0&&(P=S(m()),mt[ft]=P),P}function S(w){const B=[],ct=[],ft=[];for(let pt=0;pt<i;pt++)B[pt]=0,ct[pt]=0,ft[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ct,attributeDivisors:ft,object:w,attributes:{},index:null}}function y(w,B,ct,ft){const pt=c.attributes,mt=B.attributes;let P=0;const j=ct.getAttributes();for(const Y in j)if(j[Y].location>=0){const R=pt[Y];let X=mt[Y];if(X===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),R===void 0||R.attribute!==X||X&&R.data!==X.data)return!0;P++}return c.attributesNum!==P||c.index!==ft}function b(w,B,ct,ft){const pt={},mt=B.attributes;let P=0;const j=ct.getAttributes();for(const Y in j)if(j[Y].location>=0){let R=mt[Y];R===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(R=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(R=w.instanceColor));const X={};X.attribute=R,R&&R.data&&(X.data=R.data),pt[Y]=X,P++}c.attributes=pt,c.attributesNum=P,c.index=ft}function C(){const w=c.newAttributes;for(let B=0,ct=w.length;B<ct;B++)w[B]=0}function M(w){_(w,0)}function _(w,B){const ct=c.newAttributes,ft=c.enabledAttributes,pt=c.attributeDivisors;ct[w]=1,ft[w]===0&&(o.enableVertexAttribArray(w),ft[w]=1),pt[w]!==B&&(o.vertexAttribDivisor(w,B),pt[w]=B)}function H(){const w=c.newAttributes,B=c.enabledAttributes;for(let ct=0,ft=B.length;ct<ft;ct++)B[ct]!==w[ct]&&(o.disableVertexAttribArray(ct),B[ct]=0)}function N(w,B,ct,ft,pt,mt,P){P===!0?o.vertexAttribIPointer(w,B,ct,pt,mt):o.vertexAttribPointer(w,B,ct,ft,pt,mt)}function U(w,B,ct,ft){C();const pt=ft.attributes,mt=ct.getAttributes(),P=B.defaultAttributeValues;for(const j in mt){const Y=mt[j];if(Y.location>=0){let lt=pt[j];if(lt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor)),lt!==void 0){const R=lt.normalized,X=lt.itemSize,ot=t.get(lt);if(ot===void 0)continue;const _t=ot.buffer,Mt=ot.type,q=ot.bytesPerElement,st=Mt===o.INT||Mt===o.UNSIGNED_INT||lt.gpuType===sd;if(lt.isInterleavedBufferAttribute){const yt=lt.data,wt=yt.stride,Ot=lt.offset;if(yt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Y.locationSize;Kt++)_(Y.location+Kt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Kt=0;Kt<Y.locationSize;Kt++)M(Y.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let Kt=0;Kt<Y.locationSize;Kt++)N(Y.location+Kt,X/Y.locationSize,Mt,R,wt*q,(Ot+X/Y.locationSize*Kt)*q,st)}else{if(lt.isInstancedBufferAttribute){for(let yt=0;yt<Y.locationSize;yt++)_(Y.location+yt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let yt=0;yt<Y.locationSize;yt++)M(Y.location+yt);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let yt=0;yt<Y.locationSize;yt++)N(Y.location+yt,X/Y.locationSize,Mt,R,X*q,X/Y.locationSize*yt*q,st)}}else if(P!==void 0){const R=P[j];if(R!==void 0)switch(R.length){case 2:o.vertexAttrib2fv(Y.location,R);break;case 3:o.vertexAttrib3fv(Y.location,R);break;case 4:o.vertexAttrib4fv(Y.location,R);break;default:o.vertexAttrib1fv(Y.location,R)}}}}H()}function z(){Q();for(const w in r){const B=r[w];for(const ct in B){const ft=B[ct];for(const pt in ft)g(ft[pt].object),delete ft[pt];delete B[ct]}delete r[w]}}function k(w){if(r[w.id]===void 0)return;const B=r[w.id];for(const ct in B){const ft=B[ct];for(const pt in ft)g(ft[pt].object),delete ft[pt];delete B[ct]}delete r[w.id]}function I(w){for(const B in r){const ct=r[B];if(ct[w.id]===void 0)continue;const ft=ct[w.id];for(const pt in ft)g(ft[pt].object),delete ft[pt];delete ct[w.id]}}function Q(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:H}}function AT(o,t,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];i.update(y,r,1)}function m(p,g,v,S){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let b=0;for(let C=0;C<v;C++)b+=g[C]*S[C];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function RT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==li&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Q=I===na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ra&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ci&&!Q)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),H=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:H,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:z,maxSamples:k}}function CT(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new ur,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const b=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const H=c?0:r,N=H*4;let U=_.clippingState||null;m.value=U,U=g(b,S,N,y);for(let z=0;z!==N;++z)U[z]=i[z];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=H}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,S,y,b){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const _=y+C*4,H=S.matrixWorldInverse;d.getNormalMatrix(H),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,U=y;N!==C;++N,U+=4)h.copy(v[N]).applyMatrix4(H,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function wT(o){let t=new WeakMap;function i(h,d){return d===Ah?h.mapping=gs:d===Rh&&(h.mapping=_s),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ah||d===Rh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new wM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const fs=4,A_=[.125,.215,.35,.446,.526,.582],hr=20,fh=new Nv,R_=new ve;let hh=null,dh=0,ph=0,mh=!1;const cr=(1+Math.sqrt(5))/2,us=1/cr,C_=[new it(-cr,us,0),new it(cr,us,0),new it(-us,0,cr),new it(us,0,cr),new it(0,cr,-us),new it(0,cr,us),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],DT=new it;class w_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=DT}=c;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,mu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:na,format:li,colorSpace:vs,depthBuffer:!1},l=D_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(c)),this._blurMaterial=LT(c,t,i)}return l}_compileMaterial(t){const i=new Di(this._lodPlanes[0],t);this._renderer.compile(i,fh)}_sceneToCubeUV(t,i,r,l,c){const m=new oi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(R_),v.toneMapping=Fa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const C=new pd({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new Di(new Bo,C);let _=!1;const H=t.background;H?H.isColor&&(C.color.copy(H),t.background=null,_=!0):(C.color.copy(R_),_=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const z=this._cubeSize;mu(l,U*z,N>2?z:0,z,z),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=S,t.background=H}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===gs||t.mapping===_s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Di(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;mu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,fh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=C_[(l-c-1)%C_.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Di(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*hr-1),C=c/b,M=isFinite(c)?1+Math.floor(g*C):hr;M>hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${hr}`);const _=[];let H=0;for(let I=0;I<hr;++I){const Q=I/C,D=Math.exp(-Q*Q/2);_.push(D),I===0?H+=D:I<M&&(H+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/H;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-r;const U=this._sizeLods[l],z=3*U*(l>N-fs?l-N+fs:0),k=4*(this._cubeSize-U);mu(i,z,k,3*U,2*U),m.setRenderTarget(i),m.render(v,fh)}}function UT(o){const t=[],i=[],r=[];let l=o;const c=o-fs+1+A_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-fs?m=A_[h-o+fs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,C=3,M=2,_=1,H=new Float32Array(C*b*y),N=new Float32Array(M*b*y),U=new Float32Array(_*b*y);for(let k=0;k<y;k++){const I=k%3*2/3-1,Q=k>2?0:-1,D=[I,Q,0,I+2/3,Q,0,I+2/3,Q+1,0,I,Q,0,I+2/3,Q+1,0,I,Q+1,0];H.set(D,C*b*k),N.set(S,M*b*k);const w=[k,k,k,k,k,k];U.set(w,_*b*k)}const z=new Ui;z.setAttribute("position",new Hn(H,C)),z.setAttribute("uv",new Hn(N,M)),z.setAttribute("faceIndex",new Hn(U,_)),t.push(z),l>fs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function D_(o,t,i){const r=new vi(o,t,i);return r.texture.mapping=Du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mu(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function LT(o,t,i){const r=new Float32Array(hr),l=new it(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function U_(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function L_(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ah||m===Rh,g=m===gs||m===_s;if(p||g){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new w_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new w_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function PT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ds("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function OT(o,t,i,r){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(v){const S=[],y=v.index,b=v.attributes.position;let C=0;if(y!==null){const H=y.array;C=y.version;for(let N=0,U=H.length;N<U;N+=3){const z=H[N+0],k=H[N+1],I=H[N+2];S.push(z,k,k,I,I,z)}}else if(b!==void 0){const H=b.array;C=b.version;for(let N=0,U=H.length/3-1;N<U;N+=3){const z=N+0,k=N+1,I=N+2;S.push(z,k,k,I,I,z)}}else return;const M=new(Mv(S)?Rv:Av)(S,1);M.version=C;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function BT(o,t,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,c,S*h),i.update(y,r,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,S*h,b),i.update(y,r,b))}function g(S,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function v(S,y,b,C){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,C,0,b);let _=0;for(let H=0;H<b;H++)_+=y[H]*C[H];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function zT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function FT(o,t,i){const r=new WeakMap,l=new $e;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let w=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],H=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let z=d.attributes.position.count*U,k=1;z>t.maxTextureSize&&(k=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const I=new Float32Array(z*k*4*v),Q=new yv(I,z,k,v);Q.type=Ci,Q.needsUpdate=!0;const D=U*4;for(let B=0;B<v;B++){const ct=_[B],ft=H[B],pt=N[B],mt=z*k*4*B;for(let P=0;P<ct.count;P++){const j=P*D;b===!0&&(l.fromBufferAttribute(ct,P),I[mt+j+0]=l.x,I[mt+j+1]=l.y,I[mt+j+2]=l.z,I[mt+j+3]=0),C===!0&&(l.fromBufferAttribute(ft,P),I[mt+j+4]=l.x,I[mt+j+5]=l.y,I[mt+j+6]=l.z,I[mt+j+7]=0),M===!0&&(l.fromBufferAttribute(pt,P),I[mt+j+8]=l.x,I[mt+j+9]=l.y,I[mt+j+10]=l.z,I[mt+j+11]=pt.itemSize===4?l.w:1)}}S={count:v,texture:Q,size:new de(z,k)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function IT(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Ov=new Pn,N_=new Lv(1,1),Bv=new yv,zv=new dM,Fv=new Dv,P_=[],O_=[],B_=new Float32Array(16),z_=new Float32Array(9),F_=new Float32Array(4);function Es(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=P_[l];if(c===void 0&&(c=new Float32Array(l),P_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function fn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Nu(o,t){let i=O_[t];i===void 0&&(i=new Int32Array(t),O_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function HT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2fv(this.addr,t),fn(i,t)}}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;o.uniform3fv(this.addr,t),fn(i,t)}}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4fv(this.addr,t),fn(i,t)}}function XT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;F_.set(r),o.uniformMatrix2fv(this.addr,!1,F_),fn(i,r)}}function WT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;z_.set(r),o.uniformMatrix3fv(this.addr,!1,z_),fn(i,r)}}function qT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;B_.set(r),o.uniformMatrix4fv(this.addr,!1,B_),fn(i,r)}}function YT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ZT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2iv(this.addr,t),fn(i,t)}}function KT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3iv(this.addr,t),fn(i,t)}}function jT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4iv(this.addr,t),fn(i,t)}}function QT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function JT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2uiv(this.addr,t),fn(i,t)}}function $T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3uiv(this.addr,t),fn(i,t)}}function tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4uiv(this.addr,t),fn(i,t)}}function eb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(N_.compareFunction=xv,c=N_):c=Ov,i.setTexture2D(t||c,l)}function nb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||zv,l)}function ib(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Fv,l)}function ab(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Bv,l)}function rb(o){switch(o){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return jT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return ab}}function sb(o,t){o.uniform1fv(this.addr,t)}function ob(o,t){const i=Es(t,this.size,2);o.uniform2fv(this.addr,i)}function lb(o,t){const i=Es(t,this.size,3);o.uniform3fv(this.addr,i)}function ub(o,t){const i=Es(t,this.size,4);o.uniform4fv(this.addr,i)}function cb(o,t){const i=Es(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function fb(o,t){const i=Es(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function hb(o,t){const i=Es(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function db(o,t){o.uniform1iv(this.addr,t)}function pb(o,t){o.uniform2iv(this.addr,t)}function mb(o,t){o.uniform3iv(this.addr,t)}function gb(o,t){o.uniform4iv(this.addr,t)}function _b(o,t){o.uniform1uiv(this.addr,t)}function vb(o,t){o.uniform2uiv(this.addr,t)}function Sb(o,t){o.uniform3uiv(this.addr,t)}function xb(o,t){o.uniform4uiv(this.addr,t)}function Mb(o,t,i){const r=this.cache,l=t.length,c=Nu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Ov,c[h])}function yb(o,t,i){const r=this.cache,l=t.length,c=Nu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||zv,c[h])}function Eb(o,t,i){const r=this.cache,l=t.length,c=Nu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Fv,c[h])}function Tb(o,t,i){const r=this.cache,l=t.length,c=Nu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Bv,c[h])}function bb(o){switch(o){case 5126:return sb;case 35664:return ob;case 35665:return lb;case 35666:return ub;case 35674:return cb;case 35675:return fb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return vb;case 36295:return Sb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Ab{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=rb(i.type)}}class Rb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bb(i.type)}}class Cb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function I_(o,t){o.seq.push(t),o.map[t.id]=t}function wb(o,t,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const c=gh.exec(r),h=gh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){I_(i,p===void 0?new Ab(d,o,t):new Rb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Cb(d),I_(i,v)),i=v}}}class Eu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);wb(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function H_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const Db=37297;let Ub=0;function Lb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const G_=new oe;function Nb(o){Ae._getMatrix(G_,Ae.workingColorSpace,o);const t=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Au:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function V_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Lb(o.getShaderSource(t),d)}else return c}function Pb(o,t){const i=Nb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ob(o,t){let i;switch(t){case bx:i="Linear";break;case Ax:i="Reinhard";break;case Rx:i="Cineon";break;case Cx:i="ACESFilmic";break;case Dx:i="AgX";break;case Ux:i="Neutral";break;case wx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gu=new it;function Bb(){Ae.getLuminanceCoefficients(gu);const o=gu.x.toFixed(4),t=gu.y.toFixed(4),i=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Fb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Ib(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function To(o){return o!==""}function k_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(o){return o.replace(Hb,Vb)}const Gb=new Map;function Vb(o,t){let i=ce[t];if(i===void 0){const r=Gb.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return id(i)}const kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(o){return o.replace(kb,Xb)}function Xb(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===uv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ax?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function qb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case Du:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Zb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case cv:t="ENVMAP_BLENDING_MULTIPLY";break;case Ex:t="ENVMAP_BLENDING_MIX";break;case Tx:t="ENVMAP_BLENDING_ADD";break}return t}function Kb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function jb(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Wb(i),p=qb(i),g=Yb(i),v=Zb(i),S=Kb(i),y=zb(i),b=Fb(c),C=l.createProgram();let M,_,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(To).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(To).join(`
`),_.length>0&&(_+=`
`)):(M=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),_=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?ce.tonemapping_pars_fragment:"",i.toneMapping!==Fa?Ob("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Pb("linearToOutputTexel",i.outputColorSpace),Bb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(To).join(`
`)),h=id(h),h=k_(h,i),h=X_(h,i),d=id(d),d=k_(d,i),d=X_(d,i),h=W_(h),d=W_(d),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=H+M+h,U=H+_+d,z=H_(l,l.VERTEX_SHADER,N),k=H_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,z),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(B){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(C)||"",ft=l.getShaderInfoLog(z)||"",pt=l.getShaderInfoLog(k)||"",mt=ct.trim(),P=ft.trim(),j=pt.trim();let Y=!0,lt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,k);else{const R=V_(l,z,"vertex"),X=V_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+mt+`
`+R+`
`+X)}else mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",mt):(P===""||j==="")&&(lt=!1);lt&&(B.diagnostics={runnable:Y,programLog:mt,vertexShader:{log:P,prefix:M},fragmentShader:{log:j,prefix:_}})}l.deleteShader(z),l.deleteShader(k),Q=new Eu(l,C),D=Ib(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&I(this),Q};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,Db)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ub++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=k,this}let Qb=0;class Jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new $b(t),i.set(t,r)),r}}class $b{constructor(t){this.id=Qb++,this.code=t,this.usedTimes=0}}function tA(o,t,i,r,l,c,h){const d=new Tv,m=new Jb,p=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,B,ct,ft){const pt=ct.fog,mt=ft.geometry,P=D.isMeshStandardMaterial?ct.environment:null,j=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),Y=j&&j.mapping===Du?j.image.height:null,lt=b[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const R=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,X=R!==void 0?R.length:0;let ot=0;mt.morphAttributes.position!==void 0&&(ot=1),mt.morphAttributes.normal!==void 0&&(ot=2),mt.morphAttributes.color!==void 0&&(ot=3);let _t,Mt,q,st;if(lt){const ye=Ai[lt];_t=ye.vertexShader,Mt=ye.fragmentShader}else _t=D.vertexShader,Mt=D.fragmentShader,m.update(D),q=m.getVertexShaderID(D),st=m.getFragmentShaderID(D);const yt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Ot=ft.isInstancedMesh===!0,Kt=ft.isBatchedMesh===!0,Ee=!!D.map,fe=!!D.matcap,F=!!j,Ce=!!D.aoMap,Qt=!!D.lightMap,Me=!!D.bumpMap,It=!!D.normalMap,Ie=!!D.displacementMap,Ht=!!D.emissiveMap,re=!!D.metalnessMap,Xe=!!D.roughnessMap,We=D.anisotropy>0,L=D.clearcoat>0,E=D.dispersion>0,tt=D.iridescence>0,ht=D.sheen>0,xt=D.transmission>0,ut=We&&!!D.anisotropyMap,Bt=L&&!!D.clearcoatMap,Rt=L&&!!D.clearcoatNormalMap,Xt=L&&!!D.clearcoatRoughnessMap,qt=tt&&!!D.iridescenceMap,Et=tt&&!!D.iridescenceThicknessMap,Lt=ht&&!!D.sheenColorMap,Zt=ht&&!!D.sheenRoughnessMap,kt=!!D.specularMap,Dt=!!D.specularColorMap,ae=!!D.specularIntensityMap,V=xt&&!!D.transmissionMap,At=xt&&!!D.thicknessMap,Ct=!!D.gradientMap,zt=!!D.alphaMap,Tt=D.alphaTest>0,St=!!D.alphaHash,Vt=!!D.extensions;let ie=Fa;D.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const we={shaderID:lt,shaderType:D.type,shaderName:D.name,vertexShader:_t,fragmentShader:Mt,defines:D.defines,customVertexShaderID:q,customFragmentShaderID:st,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Kt,batchingColor:Kt&&ft._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&ft.instanceColor!==null,instancingMorph:Ot&&ft.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:vs,alphaToCoverage:!!D.alphaToCoverage,map:Ee,matcap:fe,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:Y,aoMap:Ce,lightMap:Qt,bumpMap:Me,normalMap:It,displacementMap:S&&Ie,emissiveMap:Ht,normalMapObjectSpace:It&&D.normalMapType===Bx,normalMapTangentSpace:It&&D.normalMapType===Ox,metalnessMap:re,roughnessMap:Xe,anisotropy:We,anisotropyMap:ut,clearcoat:L,clearcoatMap:Bt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:ae,transmission:xt,transmissionMap:V,thicknessMap:At,gradientMap:Ct,opaque:D.transparent===!1&&D.blending===hs&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:Tt,alphaHash:St,combine:D.combine,mapUv:Ee&&C(D.map.channel),aoMapUv:Ce&&C(D.aoMap.channel),lightMapUv:Qt&&C(D.lightMap.channel),bumpMapUv:Me&&C(D.bumpMap.channel),normalMapUv:It&&C(D.normalMap.channel),displacementMapUv:Ie&&C(D.displacementMap.channel),emissiveMapUv:Ht&&C(D.emissiveMap.channel),metalnessMapUv:re&&C(D.metalnessMap.channel),roughnessMapUv:Xe&&C(D.roughnessMap.channel),anisotropyMapUv:ut&&C(D.anisotropyMap.channel),clearcoatMapUv:Bt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&C(D.sheenRoughnessMap.channel),specularMapUv:kt&&C(D.specularMap.channel),specularColorMapUv:Dt&&C(D.specularColorMap.channel),specularIntensityMapUv:ae&&C(D.specularIntensityMap.channel),transmissionMapUv:V&&C(D.transmissionMap.channel),thicknessMapUv:At&&C(D.thicknessMap.channel),alphaMapUv:zt&&C(D.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(It||We),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!mt.attributes.uv&&(Ee||zt),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:ft.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ee&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===$i,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Vt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&D.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)w.push(B),w.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(H(w,D),N(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function H(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function N(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const w=b[D.type];let B;if(w){const ct=Ai[w];B=wu.clone(ct.uniforms)}else B=D.uniforms;return B}function z(D,w){let B;for(let ct=0,ft=g.length;ct<ft;ct++){const pt=g[ct];if(pt.cacheKey===w){B=pt,++B.usedTimes;break}}return B===void 0&&(B=new jb(o,w,D,c),g.push(B)),B}function k(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:z,releaseProgram:k,releaseShaderCache:I,programs:g,dispose:Q}}function eA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function nA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Y_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Z_(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,b,C,M){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:b,renderOrder:v.renderOrder,z:C,group:M},o[t]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=C,_.group=M),t++,_}function d(v,S,y,b,C,M){const _=h(v,S,y,b,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,S,y,b,C,M){const _=h(v,S,y,b,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||nA),r.length>1&&r.sort(S||Y_),l.length>1&&l.sort(S||Y_)}function g(){for(let v=t,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function iA(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new Z_,o.set(r,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function aA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new ve};break;case"SpotLight":i={position:new it,direction:new it,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=i,i}}}function rA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let sA=0;function oA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function lA(o){const t=new aA,i=rA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,c=new rn,h=new rn;function d(p){let g=0,v=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,b=0,C=0,M=0,_=0,H=0,N=0,U=0,z=0,k=0,I=0;p.sort(oA);for(let D=0,w=p.length;D<w;D++){const B=p[D],ct=B.color,ft=B.intensity,pt=B.distance,mt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ct.r*ft,v+=ct.g*ft,S+=ct.b*ft;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],ft);I++}else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,Y=i.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=mt,r.directionalShadowMatrix[y]=B.shadow.matrix,H++}r.directional[y]=P,y++}else if(B.isSpotLight){const P=t.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(ct).multiplyScalar(ft),P.distance=pt,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[C]=P;const j=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,j.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[C]=j.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=mt,U++}C++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(ct).multiplyScalar(ft),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=P,M++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const j=B.shadow,Y=i.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=mt,r.pointShadowMatrix[b]=B.shadow.matrix,N++}r.point[b]=P,b++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(ft),P.groundColor.copy(B.groundColor).multiplyScalar(ft),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const Q=r.hash;(Q.directionalLength!==y||Q.pointLength!==b||Q.spotLength!==C||Q.rectAreaLength!==M||Q.hemiLength!==_||Q.numDirectionalShadows!==H||Q.numPointShadows!==N||Q.numSpotShadows!==U||Q.numSpotMaps!==z||Q.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=H,r.directionalShadowMap.length=H,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=H,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+z-k,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=I,Q.directionalLength=y,Q.pointLength=b,Q.spotLength=C,Q.rectAreaLength=M,Q.hemiLength=_,Q.numDirectionalShadows=H,Q.numPointShadows=N,Q.numSpotShadows=U,Q.numSpotMaps=z,Q.numLightProbes=I,r.version=sA++)}function m(p,g){let v=0,S=0,y=0,b=0,C=0;const M=g.matrixWorldInverse;for(let _=0,H=p.length;_<H;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function K_(o){const t=new lA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function uA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new K_(o),t.set(l,[d])):c>=h.length?(d=new K_(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hA(o,t,i){let r=new Uv;const l=new de,c=new de,h=new $e,d=new FM({depthPacking:Px}),m=new IM,p={},g=i.maxTextureSize,v={[Ia]:Gn,[Gn]:Ia,[$i]:$i},S=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:cA,fragmentShader:fA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ui;b.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Di(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let _=this.type;this.render=function(k,I,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(ea),ct.buffers.depth.getReversed()?ct.buffers.color.setClear(0,0,0,0):ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const ft=_!==Ji&&this.type===Ji,pt=_===Ji&&this.type!==Ji;for(let mt=0,P=k.length;mt<P;mt++){const j=k[mt],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const lt=Y.getFrameExtents();if(l.multiply(lt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/lt.x),l.x=c.x*lt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/lt.y),l.y=c.y*lt.y,Y.mapSize.y=c.y)),Y.map===null||ft===!0||pt===!0){const X=this.type!==Ji?{minFilter:Nn,magFilter:Nn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new vi(l.x,l.y,X),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const R=Y.getViewportCount();for(let X=0;X<R;X++){const ot=Y.getViewport(X);h.set(c.x*ot.x,c.y*ot.y,c.x*ot.z,c.y*ot.w),ct.viewport(h),Y.updateMatrices(j,X),r=Y.getFrustum(),U(I,Q,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===Ji&&H(Y,Q),Y.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,w,B)};function H(k,I){const Q=t.update(C);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new vi(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,Q,S,C,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,Q,y,C,null)}function N(k,I,Q,D){let w=null;const B=Q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)w=B;else if(w=Q.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ct=w.uuid,ft=I.uuid;let pt=p[ct];pt===void 0&&(pt={},p[ct]=pt);let mt=pt[ft];mt===void 0&&(mt=w.clone(),pt[ft]=mt,I.addEventListener("dispose",z)),w=mt}if(w.visible=I.visible,w.wireframe=I.wireframe,D===Ji?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:v[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,Q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ct=o.properties.get(w);ct.light=Q}return w}function U(k,I,Q,D,w){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===Ji)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,k.matrixWorld);const ft=t.update(k),pt=k.material;if(Array.isArray(pt)){const mt=ft.groups;for(let P=0,j=mt.length;P<j;P++){const Y=mt[P],lt=pt[Y.materialIndex];if(lt&&lt.visible){const R=N(k,lt,D,w);k.onBeforeShadow(o,k,I,Q,ft,R,Y),o.renderBufferDirect(Q,null,ft,R,k,Y),k.onAfterShadow(o,k,I,Q,ft,R,Y)}}}else if(pt.visible){const mt=N(k,pt,D,w);k.onBeforeShadow(o,k,I,Q,ft,mt,null),o.renderBufferDirect(Q,null,ft,mt,k,null),k.onAfterShadow(o,k,I,Q,ft,mt,null)}}const ct=k.children;for(let ft=0,pt=ct.length;ft<pt;ft++)U(ct[ft],I,Q,D,w)}function z(k){k.target.removeEventListener("dispose",z);for(const Q in p){const D=p[Q],w=k.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const dA={[Sh]:xh,[Mh]:Th,[yh]:bh,[ms]:Eh,[xh]:Sh,[Th]:Mh,[bh]:yh,[Eh]:ms};function pA(o,t){function i(){let V=!1;const At=new $e;let Ct=null;const zt=new $e(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!V&&(o.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){V=Tt},setClear:function(Tt,St,Vt,ie,we){we===!0&&(Tt*=ie,St*=ie,Vt*=ie),At.set(Tt,St,Vt,ie),zt.equals(At)===!1&&(o.clearColor(Tt,St,Vt,ie),zt.copy(At))},reset:function(){V=!1,Ct=null,zt.set(-1,0,0,0)}}}function r(){let V=!1,At=!1,Ct=null,zt=null,Tt=null;return{setReversed:function(St){if(At!==St){const Vt=t.get("EXT_clip_control");St?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),At=St;const ie=Tt;Tt=null,this.setClear(ie)}},getReversed:function(){return At},setTest:function(St){St?yt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(St){Ct!==St&&!V&&(o.depthMask(St),Ct=St)},setFunc:function(St){if(At&&(St=dA[St]),zt!==St){switch(St){case Sh:o.depthFunc(o.NEVER);break;case xh:o.depthFunc(o.ALWAYS);break;case Mh:o.depthFunc(o.LESS);break;case ms:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Eh:o.depthFunc(o.GEQUAL);break;case Th:o.depthFunc(o.GREATER);break;case bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=St}},setLocked:function(St){V=St},setClear:function(St){Tt!==St&&(At&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){V=!1,Ct=null,zt=null,Tt=null,At=!1}}}function l(){let V=!1,At=null,Ct=null,zt=null,Tt=null,St=null,Vt=null,ie=null,we=null;return{setTest:function(ye){V||(ye?yt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(ye){At!==ye&&!V&&(o.stencilMask(ye),At=ye)},setFunc:function(ye,ui,sn){(Ct!==ye||zt!==ui||Tt!==sn)&&(o.stencilFunc(ye,ui,sn),Ct=ye,zt=ui,Tt=sn)},setOp:function(ye,ui,sn){(St!==ye||Vt!==ui||ie!==sn)&&(o.stencilOp(ye,ui,sn),St=ye,Vt=ui,ie=sn)},setLocked:function(ye){V=ye},setClear:function(ye){we!==ye&&(o.clearStencil(ye),we=ye)},reset:function(){V=!1,At=null,Ct=null,zt=null,Tt=null,St=null,Vt=null,ie=null,we=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,H=null,N=null,U=null,z=null,k=null,I=new ve(0,0,0),Q=0,D=!1,w=null,B=null,ct=null,ft=null,pt=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=j>=2);let lt=null,R={};const X=o.getParameter(o.SCISSOR_BOX),ot=o.getParameter(o.VIEWPORT),_t=new $e().fromArray(X),Mt=new $e().fromArray(ot);function q(V,At,Ct,zt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(V,St),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<Ct;Vt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(At+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const st={};st[o.TEXTURE_2D]=q(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),yt(o.DEPTH_TEST),h.setFunc(ms),Me(!1),It(Jg),yt(o.CULL_FACE),Ce(ea);function yt(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function wt(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function Ot(V,At){return v[V]!==At?(o.bindFramebuffer(V,At),v[V]=At,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Kt(V,At){let Ct=y,zt=!1;if(V){Ct=S.get(At),Ct===void 0&&(Ct=[],S.set(At,Ct));const Tt=V.textures;if(Ct.length!==Tt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Vt=Tt.length;St<Vt;St++)Ct[St]=o.COLOR_ATTACHMENT0+St;Ct.length=Tt.length,zt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Ct)}function Ee(V){return b!==V?(o.useProgram(V),b=V,!0):!1}const fe={[fr]:o.FUNC_ADD,[sx]:o.FUNC_SUBTRACT,[ox]:o.FUNC_REVERSE_SUBTRACT};fe[lx]=o.MIN,fe[ux]=o.MAX;const F={[cx]:o.ZERO,[fx]:o.ONE,[hx]:o.SRC_COLOR,[_h]:o.SRC_ALPHA,[vx]:o.SRC_ALPHA_SATURATE,[gx]:o.DST_COLOR,[px]:o.DST_ALPHA,[dx]:o.ONE_MINUS_SRC_COLOR,[vh]:o.ONE_MINUS_SRC_ALPHA,[_x]:o.ONE_MINUS_DST_COLOR,[mx]:o.ONE_MINUS_DST_ALPHA,[Sx]:o.CONSTANT_COLOR,[xx]:o.ONE_MINUS_CONSTANT_COLOR,[Mx]:o.CONSTANT_ALPHA,[yx]:o.ONE_MINUS_CONSTANT_ALPHA};function Ce(V,At,Ct,zt,Tt,St,Vt,ie,we,ye){if(V===ea){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(yt(o.BLEND),C=!0),V!==rx){if(V!==M||ye!==D){if((_!==fr||U!==fr)&&(o.blendEquation(o.FUNC_ADD),_=fr,U=fr),ye)switch(V){case hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bu:o.blendFunc(o.ONE,o.ONE);break;case $g:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case t_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bu:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $g:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}H=null,N=null,z=null,k=null,I.set(0,0,0),Q=0,M=V,D=ye}return}Tt=Tt||At,St=St||Ct,Vt=Vt||zt,(At!==_||Tt!==U)&&(o.blendEquationSeparate(fe[At],fe[Tt]),_=At,U=Tt),(Ct!==H||zt!==N||St!==z||Vt!==k)&&(o.blendFuncSeparate(F[Ct],F[zt],F[St],F[Vt]),H=Ct,N=zt,z=St,k=Vt),(ie.equals(I)===!1||we!==Q)&&(o.blendColor(ie.r,ie.g,ie.b,we),I.copy(ie),Q=we),M=V,D=!1}function Qt(V,At){V.side===$i?wt(o.CULL_FACE):yt(o.CULL_FACE);let Ct=V.side===Gn;At&&(Ct=!Ct),Me(Ct),V.blending===hs&&V.transparent===!1?Ce(ea):Ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const zt=V.stencilWrite;d.setTest(zt),zt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Me(V){w!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),w=V)}function It(V){V!==nx?(yt(o.CULL_FACE),V!==B&&(V===Jg?o.cullFace(o.BACK):V===ix?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),B=V}function Ie(V){V!==ct&&(P&&o.lineWidth(V),ct=V)}function Ht(V,At,Ct){V?(yt(o.POLYGON_OFFSET_FILL),(ft!==At||pt!==Ct)&&(o.polygonOffset(At,Ct),ft=At,pt=Ct)):wt(o.POLYGON_OFFSET_FILL)}function re(V){V?yt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Xe(V){V===void 0&&(V=o.TEXTURE0+mt-1),lt!==V&&(o.activeTexture(V),lt=V)}function We(V,At,Ct){Ct===void 0&&(lt===null?Ct=o.TEXTURE0+mt-1:Ct=lt);let zt=R[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},R[Ct]=zt),(zt.type!==V||zt.texture!==At)&&(lt!==Ct&&(o.activeTexture(Ct),lt=Ct),o.bindTexture(V,At||st[V]),zt.type=V,zt.texture=At)}function L(){const V=R[lt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(V){_t.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),_t.copy(V))}function Zt(V){Mt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Mt.copy(V))}function kt(V,At){let Ct=p.get(At);Ct===void 0&&(Ct=new WeakMap,p.set(At,Ct));let zt=Ct.get(V);zt===void 0&&(zt=o.getUniformBlockIndex(At,V.name),Ct.set(V,zt))}function Dt(V,At){const zt=p.get(At).get(V);m.get(At)!==zt&&(o.uniformBlockBinding(At,zt,V.__bindingPointIndex),m.set(At,zt))}function ae(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},lt=null,R={},v={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,H=null,N=null,U=null,z=null,k=null,I=new ve(0,0,0),Q=0,D=!1,w=null,B=null,ct=null,ft=null,pt=null,_t.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:yt,disable:wt,bindFramebuffer:Ot,drawBuffers:Kt,useProgram:Ee,setBlending:Ce,setMaterial:Qt,setFlipSided:Me,setCullFace:It,setLineWidth:Ie,setPolygonOffset:Ht,setScissorTest:re,activeTexture:Xe,bindTexture:We,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:qt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Bt,scissor:Lt,viewport:Zt,reset:ae}}function mA(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new de,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):Cu("canvas")}function C(L,E,tt){let ht=1;const xt=We(L);if((xt.width>tt||xt.height>tt)&&(ht=tt/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(ht*xt.width),Bt=Math.floor(ht*xt.height);v===void 0&&(v=b(ut,Bt));const Rt=E?b(ut,Bt):v;return Rt.width=ut,Rt.height=Bt,Rt.getContext("2d").drawImage(L,0,0,ut,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Bt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function H(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,E,tt,ht,xt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===o.RED&&(tt===o.FLOAT&&(ut=o.R32F),tt===o.HALF_FLOAT&&(ut=o.R16F),tt===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.R8UI),tt===o.UNSIGNED_SHORT&&(ut=o.R16UI),tt===o.UNSIGNED_INT&&(ut=o.R32UI),tt===o.BYTE&&(ut=o.R8I),tt===o.SHORT&&(ut=o.R16I),tt===o.INT&&(ut=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ut=o.RG32F),tt===o.HALF_FLOAT&&(ut=o.RG16F),tt===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),tt===o.UNSIGNED_INT&&(ut=o.RG32UI),tt===o.BYTE&&(ut=o.RG8I),tt===o.SHORT&&(ut=o.RG16I),tt===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),tt===o.UNSIGNED_INT&&(ut=o.RGB32UI),tt===o.BYTE&&(ut=o.RGB8I),tt===o.SHORT&&(ut=o.RGB16I),tt===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),tt===o.BYTE&&(ut=o.RGBA8I),tt===o.SHORT&&(ut=o.RGBA16I),tt===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),E===o.RGBA){const Bt=xt?Au:Ae.getTransfer(ht);tt===o.FLOAT&&(ut=o.RGBA32F),tt===o.HALF_FLOAT&&(ut=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ut=Bt===Be?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(L,E){let tt;return L?E===null||E===pr||E===wo?tt=o.DEPTH24_STENCIL8:E===Ci?tt=o.DEPTH32F_STENCIL8:E===Co&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===wo?tt=o.DEPTH_COMPONENT24:E===Ci?tt=o.DEPTH_COMPONENT32F:E===Co&&(tt=o.DEPTH_COMPONENT16),tt}function z(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Nn&&L.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function k(L){const E=L.target;E.removeEventListener("dispose",k),Q(E),E.isVideoTexture&&g.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),w(E)}function Q(L){const E=r.get(L);if(E.__webglInit===void 0)return;const tt=L.source,ht=S.get(tt);if(ht){const xt=ht[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(L),Object.keys(ht).length===0&&S.delete(tt)}r.remove(L)}function D(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const tt=L.source,ht=S.get(tt);delete ht[E.__cacheKey],h.memory.textures--}function w(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let xt=0;xt<E.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=L.textures;for(let ht=0,xt=tt.length;ht<xt;ht++){const ut=r.get(tt[ht]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(tt[ht])}r.remove(L)}let B=0;function ct(){B=0}function ft(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function pt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function mt(L,E){const tt=r.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&tt.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(tt,L,E);return}}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function P(L,E){const tt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){st(tt,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function j(L,E){const tt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){st(tt,L,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(L,E){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){yt(tt,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const lt={[Ch]:o.REPEAT,[ta]:o.CLAMP_TO_EDGE,[wh]:o.MIRRORED_REPEAT},R={[Nn]:o.NEAREST,[Lx]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[Vf]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},X={[zx]:o.NEVER,[kx]:o.ALWAYS,[Fx]:o.LESS,[xv]:o.LEQUAL,[Ix]:o.EQUAL,[Vx]:o.GEQUAL,[Hx]:o.GREATER,[Gx]:o.NOTEQUAL};function ot(L,E){if(E.type===Ci&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Vf||E.magFilter===Yl||E.magFilter===dr||E.minFilter===Ri||E.minFilter===Vf||E.minFilter===Yl||E.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,lt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,lt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,lt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,R[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,R[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,X[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Yl&&E.minFilter!==dr||E.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _t(L,E){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",k));const ht=E.source;let xt=S.get(ht);xt===void 0&&(xt={},S.set(ht,xt));const ut=pt(E);if(ut!==L.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),xt[ut].usedTimes++;const Bt=xt[L.__cacheKey];Bt!==void 0&&(xt[L.__cacheKey].usedTimes--,Bt.usedTimes===0&&D(E)),L.__cacheKey=ut,L.__webglTexture=xt[ut].texture}return tt}function Mt(L,E,tt){return Math.floor(Math.floor(L/tt)/E)}function q(L,E,tt,ht){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ht,E.data);else{ut.sort((Et,Lt)=>Et.start-Lt.start);let Bt=0;for(let Et=1;Et<ut.length;Et++){const Lt=ut[Bt],Zt=ut[Et],kt=Lt.start+Lt.count,Dt=Mt(Zt.start,E.width,4),ae=Mt(Lt.start,E.width,4);Zt.start<=kt+1&&Dt===ae&&Mt(Zt.start+Zt.count-1,E.width,4)===Dt?Lt.count=Math.max(Lt.count,Zt.start+Zt.count-Lt.start):(++Bt,ut[Bt]=Zt)}ut.length=Bt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Lt=ut.length;Et<Lt;Et++){const Zt=ut[Et],kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),ae=kt%E.width,V=Math.floor(kt/E.width),At=Dt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ae),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ae,V,At,Ct,tt,ht,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function st(L,E,tt){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=_t(L,E),ut=E.source;i.bindTexture(ht,L.__webglTexture,o.TEXTURE0+tt);const Bt=r.get(ut);if(ut.version!==Bt.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Xt=E.colorSpace===za?null:Ae.getPrimaries(E.colorSpace),qt=E.colorSpace===za||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Et=C(E.image,!1,l.maxTextureSize);Et=Xe(E,Et);const Lt=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let kt=N(E.internalFormat,Lt,Zt,E.colorSpace,E.isVideoTexture);ot(ht,E);let Dt;const ae=E.mipmaps,V=E.isVideoTexture!==!0,At=Bt.__version===void 0||xt===!0,Ct=ut.dataReady,zt=z(E,Et);if(E.isDepthTexture)kt=U(E.format===Uo,E.type),At&&(V?i.texStorage2D(o.TEXTURE_2D,1,kt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,kt,Et.width,Et.height,0,Lt,Zt,null));else if(E.isDataTexture)if(ae.length>0){V&&At&&i.texStorage2D(o.TEXTURE_2D,zt,kt,ae[0].width,ae[0].height);for(let Tt=0,St=ae.length;Tt<St;Tt++)Dt=ae[Tt],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Lt,Zt,Dt.data);E.generateMipmaps=!1}else V?(At&&i.texStorage2D(o.TEXTURE_2D,zt,kt,Et.width,Et.height),Ct&&q(E,Et,Lt,Zt)):i.texImage2D(o.TEXTURE_2D,0,kt,Et.width,Et.height,0,Lt,Zt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,kt,ae[0].width,ae[0].height,Et.depth);for(let Tt=0,St=ae.length;Tt<St;Tt++)if(Dt=ae[Tt],E.format!==li)if(Lt!==null)if(V){if(Ct)if(E.layerUpdates.size>0){const Vt=b_(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const we=Dt.data.subarray(ie*Vt/Dt.data.BYTES_PER_ELEMENT,(ie+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ie,Dt.width,Dt.height,1,Lt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,kt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Zt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,kt,Dt.width,Dt.height,Et.depth,0,Lt,Zt,Dt.data)}else{V&&At&&i.texStorage2D(o.TEXTURE_2D,zt,kt,ae[0].width,ae[0].height);for(let Tt=0,St=ae.length;Tt<St;Tt++)Dt=ae[Tt],E.format!==li?Lt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Lt,Zt,Dt.data)}else if(E.isDataArrayTexture)if(V){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,kt,Et.width,Et.height,Et.depth),Ct)if(E.layerUpdates.size>0){const Tt=b_(Et.width,Et.height,E.format,E.type);for(const St of E.layerUpdates){const Vt=Et.data.subarray(St*Tt/Et.data.BYTES_PER_ELEMENT,(St+1)*Tt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,Lt,Zt,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Zt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Et.width,Et.height,Et.depth,0,Lt,Zt,Et.data);else if(E.isData3DTexture)V?(At&&i.texStorage3D(o.TEXTURE_3D,zt,kt,Et.width,Et.height,Et.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Zt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,kt,Et.width,Et.height,Et.depth,0,Lt,Zt,Et.data);else if(E.isFramebufferTexture){if(At)if(V)i.texStorage2D(o.TEXTURE_2D,zt,kt,Et.width,Et.height);else{let Tt=Et.width,St=Et.height;for(let Vt=0;Vt<zt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,kt,Tt,St,0,Lt,Zt,null),Tt>>=1,St>>=1}}else if(ae.length>0){if(V&&At){const Tt=We(ae[0]);i.texStorage2D(o.TEXTURE_2D,zt,kt,Tt.width,Tt.height)}for(let Tt=0,St=ae.length;Tt<St;Tt++)Dt=ae[Tt],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt,Zt,Dt):i.texImage2D(o.TEXTURE_2D,Tt,kt,Lt,Zt,Dt);E.generateMipmaps=!1}else if(V){if(At){const Tt=We(Et);i.texStorage2D(o.TEXTURE_2D,zt,kt,Tt.width,Tt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,Zt,Et)}else i.texImage2D(o.TEXTURE_2D,0,kt,Lt,Zt,Et);M(E)&&_(ht),Bt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function yt(L,E,tt){if(E.image.length!==6)return;const ht=_t(L,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+tt);const ut=r.get(xt);if(xt.version!==ut.__version||ht===!0){i.activeTexture(o.TEXTURE0+tt);const Bt=Ae.getPrimaries(Ae.workingColorSpace),Rt=E.colorSpace===za?null:Ae.getPrimaries(E.colorSpace),Xt=E.colorSpace===za||Bt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let St=0;St<6;St++)!qt&&!Et?Lt[St]=C(E.image[St],!0,l.maxCubemapSize):Lt[St]=Et?E.image[St].image:E.image[St],Lt[St]=Xe(E,Lt[St]);const Zt=Lt[0],kt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),ae=N(E.internalFormat,kt,Dt,E.colorSpace),V=E.isVideoTexture!==!0,At=ut.__version===void 0||ht===!0,Ct=xt.dataReady;let zt=z(E,Zt);ot(o.TEXTURE_CUBE_MAP,E);let Tt;if(qt){V&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ae,Zt.width,Zt.height);for(let St=0;St<6;St++){Tt=Lt[St].mipmaps;for(let Vt=0;Vt<Tt.length;Vt++){const ie=Tt[Vt];E.format!==li?kt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ie.width,ie.height,kt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ie.width,ie.height,kt,Dt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ae,ie.width,ie.height,0,kt,Dt,ie.data)}}}else{if(Tt=E.mipmaps,V&&At){Tt.length>0&&zt++;const St=We(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ae,St.width,St.height)}for(let St=0;St<6;St++)if(Et){V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Lt[St].width,Lt[St].height,kt,Dt,Lt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ae,Lt[St].width,Lt[St].height,0,kt,Dt,Lt[St].data);for(let Vt=0;Vt<Tt.length;Vt++){const we=Tt[Vt].image[St].image;V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,we.width,we.height,kt,Dt,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ae,we.width,we.height,0,kt,Dt,we.data)}}else{V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,kt,Dt,Lt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ae,kt,Dt,Lt[St]);for(let Vt=0;Vt<Tt.length;Vt++){const ie=Tt[Vt];V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,kt,Dt,ie.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ae,kt,Dt,ie.image[St])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function wt(L,E,tt,ht,xt,ut){const Bt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),Xt=N(tt.internalFormat,Bt,Rt,tt.colorSpace),qt=r.get(E),Et=r.get(tt);if(Et.__renderTarget=E,!qt.__hasExternalTextures){const Lt=Math.max(1,E.width>>ut),Zt=Math.max(1,E.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Xt,Lt,Zt,E.depth,0,Bt,Rt,null):i.texImage2D(xt,ut,Xt,Lt,Zt,0,Bt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,Et.__webglTexture,0,Ie(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,Et.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(L,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ht=E.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,ut=U(E.stencilBuffer,xt),Bt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ie(E);Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Bt,o.RENDERBUFFER,L)}else{const ht=E.textures;for(let xt=0;xt<ht.length;xt++){const ut=ht[xt],Bt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),Xt=N(ut.internalFormat,Bt,Rt,ut.colorSpace),qt=Ie(E);tt&&Ht(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Xt,E.width,E.height):Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt(E.depthTexture,0);const xt=ht.__webglTexture,ut=Ie(E);if(E.depthTexture.format===Do)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Uo)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Ee(L){const E=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ht}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=L.texture.mipmaps;ht&&ht.length>0?Kt(E.__webglFramebuffer[0],L):Kt(E.__webglFramebuffer,L)}else if(tt){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Ot(E.__webglDepthbuffer[ht],L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const ht=L.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ot(E.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function fe(L,E,tt){const ht=r.get(L);E!==void 0&&wt(ht.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Ee(L)}function F(L){const E=L.texture,tt=r.get(L),ht=r.get(E);L.addEventListener("dispose",I);const xt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Bt=xt.length>1;if(Bt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)tt.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Bt)for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const qt=r.get(xt[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Ht(L)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Xt=xt[Rt];tt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const qt=c.convert(Xt.format,Xt.colorSpace),Et=c.convert(Xt.type),Lt=N(Xt.internalFormat,qt,Et,Xt.colorSpace,L.isXRRenderTarget===!0),Zt=Ie(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Lt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),ot(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(tt.__webglFramebuffer[Rt][Xt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(tt.__webglFramebuffer[Rt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Bt){for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const qt=xt[Rt],Et=r.get(qt);let Lt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Et.__webglTexture),ot(Lt,qt),wt(tt.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+Rt,Lt,0),M(qt)&&_(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),ot(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(tt.__webglFramebuffer[Xt],L,E,o.COLOR_ATTACHMENT0,Rt,Xt);else wt(tt.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Rt,0);M(E)&&_(Rt),i.unbindTexture()}L.depthBuffer&&Ee(L)}function Ce(L){const E=L.textures;for(let tt=0,ht=E.length;tt<ht;tt++){const xt=E[tt];if(M(xt)){const ut=H(L),Bt=r.get(xt).__webglTexture;i.bindTexture(ut,Bt),_(ut),i.unbindTexture()}}}const Qt=[],Me=[];function It(L){if(L.samples>0){if(Ht(L)===!1){const E=L.textures,tt=L.width,ht=L.height;let xt=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=r.get(L),Rt=E.length>1;if(Rt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[qt]);const Et=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,xt,o.NEAREST),m===!0&&(Qt.length=0,Me.length=0,Qt.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qt.push(ut),Me.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[qt]);const Et=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(L){return Math.min(l.maxSamples,L.samples)}function Ht(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Xe(L,E){const tt=L.colorSpace,ht=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==vs&&tt!==za&&(Ae.getTransfer(tt)===Be?(ht!==li||xt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ft,this.resetTextureUnits=ct,this.setTexture2D=mt,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=fe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ht}function gA(o,t){function i(r,l=za){let c;const h=Ae.getTransfer(l);if(r===ra)return o.UNSIGNED_BYTE;if(r===od)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return o.UNSIGNED_SHORT_5_5_5_1;if(r===pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===hv)return o.BYTE;if(r===dv)return o.SHORT;if(r===Co)return o.UNSIGNED_SHORT;if(r===sd)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===Ci)return o.FLOAT;if(r===na)return o.HALF_FLOAT;if(r===mv)return o.ALPHA;if(r===gv)return o.RGB;if(r===li)return o.RGBA;if(r===Do)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===_v)return o.RED;if(r===ud)return o.RED_INTEGER;if(r===vv)return o.RG;if(r===cd)return o.RG_INTEGER;if(r===fd)return o.RGBA_INTEGER;if(r===vu||r===Su||r===xu||r===Mu)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===vu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===vu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Dh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ph||r===Oh||r===Bh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ph||r===Oh)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Bh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zh||r===Fh||r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===Kh||r===jh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===zh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yu||r===Qh||r===Jh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===yu)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sv||r===$h||r===td||r===ed)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===yu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class Iv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Iv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ln({vertexShader:_A,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Lu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xA extends Ms{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,S=null,y=null,b=null;const C=new SA,M={},_=i.getContextAttributes();let H=null,N=null;const U=[],z=[],k=new de;let I=null;const Q=new oi;Q.viewport=new $e;const D=new oi;D.viewport=new $e;const w=[Q,D],B=new HM;let ct=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=U[q];return st===void 0&&(st=new uh,U[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=U[q];return st===void 0&&(st=new uh,U[q]=st),st.getGripSpace()},this.getHand=function(q){let st=U[q];return st===void 0&&(st=new uh,U[q]=st),st.getHandSpace()};function pt(q){const st=z.indexOf(q.inputSource);if(st===-1)return;const yt=U[st];yt!==void 0&&(yt.update(q.inputSource,q.frame,p||h),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",pt),l.removeEventListener("selectstart",pt),l.removeEventListener("selectend",pt),l.removeEventListener("squeeze",pt),l.removeEventListener("squeezestart",pt),l.removeEventListener("squeezeend",pt),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",P);for(let q=0;q<U.length;q++){const st=z[q];st!==null&&(z[q]=null,U[q].disconnect(st))}ct=null,ft=null,C.reset();for(const q in M)delete M[q];t.setRenderTarget(H),y=null,S=null,v=null,l=null,N=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(H=t.getRenderTarget(),l.addEventListener("select",pt),l.addEventListener("selectstart",pt),l.addEventListener("selectend",pt),l.addEventListener("squeeze",pt),l.addEventListener("squeezestart",pt),l.addEventListener("squeezeend",pt),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,wt=null,Ot=null;_.depth&&(Ot=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=_.stencil?Uo:Do,wt=_.stencil?wo:pr);const Kt={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:c};S=v.createProjectionLayer(Kt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),N=new vi(S.textureWidth,S.textureHeight,{format:li,type:ra,depthTexture:new Lv(S.textureWidth,S.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const yt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new vi(y.framebufferWidth,y.framebufferHeight,{format:li,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function P(q){for(let st=0;st<q.removed.length;st++){const yt=q.removed[st],wt=z.indexOf(yt);wt>=0&&(z[wt]=null,U[wt].disconnect(yt))}for(let st=0;st<q.added.length;st++){const yt=q.added[st];let wt=z.indexOf(yt);if(wt===-1){for(let Kt=0;Kt<U.length;Kt++)if(Kt>=z.length){z.push(yt),wt=Kt;break}else if(z[Kt]===null){z[Kt]=yt,wt=Kt;break}if(wt===-1)break}const Ot=U[wt];Ot&&Ot.connect(yt)}}const j=new it,Y=new it;function lt(q,st,yt){j.setFromMatrixPosition(st.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const wt=j.distanceTo(Y),Ot=st.projectionMatrix.elements,Kt=yt.projectionMatrix.elements,Ee=Ot[14]/(Ot[10]-1),fe=Ot[14]/(Ot[10]+1),F=(Ot[9]+1)/Ot[5],Ce=(Ot[9]-1)/Ot[5],Qt=(Ot[8]-1)/Ot[0],Me=(Kt[8]+1)/Kt[0],It=Ee*Qt,Ie=Ee*Me,Ht=wt/(-Qt+Me),re=Ht*-Qt;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(Ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ot[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Xe=Ee+Ht,We=fe+Ht,L=It-re,E=Ie+(wt-re),tt=F*fe/We*Xe,ht=Ce*fe/We*Xe;q.projectionMatrix.makePerspective(L,E,tt,ht,Xe,We),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function R(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let st=q.near,yt=q.far;C.texture!==null&&(C.depthNear>0&&(st=C.depthNear),C.depthFar>0&&(yt=C.depthFar)),B.near=D.near=Q.near=st,B.far=D.far=Q.far=yt,(ct!==B.near||ft!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),ct=B.near,ft=B.far),B.layers.mask=q.layers.mask|6,Q.layers.mask=B.layers.mask&3,D.layers.mask=B.layers.mask&5;const wt=q.parent,Ot=B.cameras;R(B,wt);for(let Kt=0;Kt<Ot.length;Kt++)R(Ot[Kt],wt);Ot.length===2?lt(B,Q,D):B.projectionMatrix.copy(Q.projectionMatrix),X(q,B,wt)};function X(q,st,yt){yt===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Lo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(q){m=q,S!==null&&(S.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(B)},this.getCameraTexture=function(q){return M[q]};let ot=null;function _t(q,st){if(g=st.getViewerPose(p||h),b=st,g!==null){const yt=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let wt=!1;yt.length!==B.cameras.length&&(B.cameras.length=0,wt=!0);for(let fe=0;fe<yt.length;fe++){const F=yt[fe];let Ce=null;if(y!==null)Ce=y.getViewport(F);else{const Me=v.getViewSubImage(S,F);Ce=Me.viewport,fe===0&&(t.setRenderTargetTextures(N,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(N))}let Qt=w[fe];Qt===void 0&&(Qt=new oi,Qt.layers.enable(fe),Qt.viewport=new $e,w[fe]=Qt),Qt.matrix.fromArray(F.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(F.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),fe===0&&(B.matrix.copy(Qt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),wt===!0&&B.cameras.push(Qt)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const fe=v.getDepthInformation(yt[0]);fe&&fe.isValid&&fe.texture&&C.init(fe,l.renderState)}if(Ot&&Ot.includes("camera-access")&&(t.state.unbindTexture(),v))for(let fe=0;fe<yt.length;fe++){const F=yt[fe].camera;if(F){let Ce=M[F];Ce||(Ce=new Iv,M[F]=Ce);const Qt=v.getCameraImage(F);Ce.sourceTexture=Qt}}}for(let yt=0;yt<U.length;yt++){const wt=z[yt],Ot=U[yt];wt!==null&&Ot!==void 0&&Ot.update(wt,st,p||h)}ot&&ot(q,st),st.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:st}),b=null}const Mt=new Pv;Mt.setAnimationLoop(_t),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}}const lr=new sa,MA=new rn;function yA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Cv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,H,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),C(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,H,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Gn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Gn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const H=t.get(_),N=H.envMap,U=H.envMapRotation;N&&(M.envMap.value=N,lr.copy(U),lr.x*=-1,lr.y*=-1,lr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),M.envMapRotation.value.setFromMatrix4(MA.makeRotationFromEuler(lr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,H,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*H,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,H){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=H.texture,M.transmissionSamplerSize.value.set(H.width,H.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const H=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(H.matrixWorld),M.nearDistance.value=H.shadow.camera.near,M.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function EA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(H,N){const U=N.program;r.uniformBlockBinding(H,U)}function p(H,N){let U=l[H.id];U===void 0&&(b(H),U=g(H),l[H.id]=U,H.addEventListener("dispose",M));const z=N.program;r.updateUBOMapping(H,z);const k=t.render.frame;c[H.id]!==k&&(S(H),c[H.id]=k)}function g(H){const N=v();H.__bindingPointIndex=N;const U=o.createBuffer(),z=H.__size,k=H.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function v(){for(let H=0;H<d;H++)if(h.indexOf(H)===-1)return h.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(H){const N=l[H.id],U=H.uniforms,z=H.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let k=0,I=U.length;k<I;k++){const Q=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,w=Q.length;D<w;D++){const B=Q[D];if(y(B,k,D,z)===!0){const ct=B.__offset,ft=Array.isArray(B.value)?B.value:[B.value];let pt=0;for(let mt=0;mt<ft.length;mt++){const P=ft[mt],j=C(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ct+pt,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,pt),pt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(H,N,U,z){const k=H.value,I=N+"_"+U;if(z[I]===void 0)return typeof k=="number"||typeof k=="boolean"?z[I]=k:z[I]=k.clone(),!0;{const Q=z[I];if(typeof k=="number"||typeof k=="boolean"){if(Q!==k)return z[I]=k,!0}else if(Q.equals(k)===!1)return Q.copy(k),!0}return!1}function b(H){const N=H.uniforms;let U=0;const z=16;for(let I=0,Q=N.length;I<Q;I++){const D=Array.isArray(N[I])?N[I]:[N[I]];for(let w=0,B=D.length;w<B;w++){const ct=D[w],ft=Array.isArray(ct.value)?ct.value:[ct.value];for(let pt=0,mt=ft.length;pt<mt;pt++){const P=ft[pt],j=C(P),Y=U%z,lt=Y%j.boundary,R=Y+lt;U+=lt,R!==0&&z-R<j.storage&&(U+=z-R),ct.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=U,U+=j.storage}}}const k=U%z;return k>0&&(U+=z-k),H.__size=U,H.__cache={},this}function C(H){const N={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(N.boundary=4,N.storage=4):H.isVector2?(N.boundary=8,N.storage=8):H.isVector3||H.isColor?(N.boundary=16,N.storage=12):H.isVector4?(N.boundary=16,N.storage=16):H.isMatrix3?(N.boundary=48,N.storage=48):H.isMatrix4?(N.boundary=64,N.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),N}function M(H){const N=H.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const H in l)o.deleteBuffer(l[H]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class TA{constructor(t={}){const{canvas:i=sM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const H=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1;this._outputColorSpace=si;let k=0,I=0,Q=null,D=-1,w=null;const B=new $e,ct=new $e;let ft=null;const pt=new ve(0);let mt=0,P=i.width,j=i.height,Y=1,lt=null,R=null;const X=new $e(0,0,P,j),ot=new $e(0,0,P,j);let _t=!1;const Mt=new Uv;let q=!1,st=!1;const yt=new rn,wt=new it,Ot=new $e,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function fe(){return Q===null?Y:1}let F=r;function Ce(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rd}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),F===null){const W="webgl2";if(F=Ce(W,A),F===null)throw Ce(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Me,It,Ie,Ht,re,Xe,We,L,E,tt,ht,xt,ut,Bt,Rt,Xt,qt,Et,Lt,Zt,kt,Dt,ae;function V(){Qt=new PT(F),Qt.init(),kt=new gA(F,Qt),Me=new RT(F,Qt,t,kt),It=new pA(F,Qt),Me.reversedDepthBuffer&&S&&It.buffers.depth.setReversed(!0),Ie=new zT(F),Ht=new eA,re=new mA(F,Qt,It,Ht,Me,kt,Ie),Xe=new wT(U),We=new NT(U),L=new kM(F),Dt=new bT(F,L),E=new OT(F,L,Ie,Dt),tt=new IT(F,E,L,Ie),Et=new FT(F,Me,re),Rt=new CT(Ht),ht=new tA(U,Xe,We,Qt,Me,Dt,Rt),xt=new yA(U,Ht),ut=new iA,Bt=new uA(Qt),qt=new TT(U,Xe,We,It,tt,y,m),Xt=new hA(U,tt,Me),ae=new EA(F,Ie,Me,It),Lt=new AT(F,Qt,Ie),Zt=new BT(F,Qt,Ie),Ie.programs=ht.programs,U.capabilities=Me,U.extensions=Qt,U.properties=Ht,U.renderLists=ut,U.shadowMap=Xt,U.state=It,U.info=Ie}V();const At=new xA(U,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(P,j,!1))},this.getSize=function(A){return A.set(P,j)},this.setSize=function(A,W,at=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,j=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(P*Y,j*Y).floor()},this.setDrawingBufferSize=function(A,W,at){P=A,j=W,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,W,at,rt){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,W,at,rt),It.viewport(B.copy(X).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(ot)},this.setScissor=function(A,W,at,rt){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,W,at,rt),It.scissor(ct.copy(ot).multiplyScalar(Y).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){It.setScissorTest(_t=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){R=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let rt=0;if(A){let K=!1;if(Q!==null){const bt=Q.texture.format;K=bt===fd||bt===cd||bt===ud}if(K){const bt=Q.texture.type,Ut=bt===ra||bt===pr||bt===Co||bt===wo||bt===od||bt===ld,Ft=qt.getClearColor(),Nt=qt.getClearAlpha(),Jt=Ft.r,te=Ft.g,Wt=Ft.b;Ut?(b[0]=Jt,b[1]=te,b[2]=Wt,b[3]=Nt,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=Jt,C[1]=te,C[2]=Wt,C[3]=Nt,F.clearBufferiv(F.COLOR,0,C))}else rt|=F.COLOR_BUFFER_BIT}W&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),qt.dispose(),ut.dispose(),Bt.dispose(),Ht.dispose(),Xe.dispose(),We.dispose(),tt.dispose(),Dt.dispose(),ae.dispose(),ht.dispose(),At.dispose(),At.removeEventListener("sessionstart",sn),At.removeEventListener("sessionend",on),Ye.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Ie.autoReset,W=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,K=Xt.type;V(),Ie.autoReset=A,Xt.enabled=W,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=K}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const W=A.target;W.removeEventListener("dispose",St),Vt(W)}function Vt(A){ie(A),Ht.remove(A)}function ie(A){const W=Ht.get(A).programs;W!==void 0&&(W.forEach(function(at){ht.releaseProgram(at)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,rt,K,bt){W===null&&(W=Kt);const Ut=K.isMesh&&K.matrixWorld.determinant()<0,Ft=oa(A,W,at,rt,K);It.setMaterial(rt,Ut);let Nt=at.index,Jt=1;if(rt.wireframe===!0){if(Nt=E.getWireframeAttribute(at),Nt===void 0)return;Jt=2}const te=at.drawRange,Wt=at.attributes.position;let le=te.start*Jt,Te=(te.start+te.count)*Jt;bt!==null&&(le=Math.max(le,bt.start*Jt),Te=Math.min(Te,(bt.start+bt.count)*Jt)),Nt!==null?(le=Math.max(le,0),Te=Math.min(Te,Nt.count)):Wt!=null&&(le=Math.max(le,0),Te=Math.min(Te,Wt.count));const Ve=Te-le;if(Ve<0||Ve===1/0)return;Dt.setup(K,rt,Ft,at,Nt);let Le,ue=Lt;if(Nt!==null&&(Le=L.get(Nt),ue=Zt,ue.setIndex(Le)),K.isMesh)rt.wireframe===!0?(It.setLineWidth(rt.wireframeLinewidth*fe()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(K.isLine){let jt=rt.linewidth;jt===void 0&&(jt=1),It.setLineWidth(jt*fe()),K.isLineSegments?ue.setMode(F.LINES):K.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else K.isPoints?ue.setMode(F.POINTS):K.isSprite&&ue.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ue.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const jt=K._multiDrawStarts,Ge=K._multiDrawCounts,me=K._multiDrawCount,Mn=Nt?L.get(Nt).bytesPerElement:1,ci=Ht.get(rt).currentProgram.getUniforms();for(let Rn=0;Rn<me;Rn++)ci.setValue(F,"_gl_DrawID",Rn),ue.render(jt[Rn]/Mn,Ge[Rn])}else if(K.isInstancedMesh)ue.renderInstances(le,Ve,K.count);else if(at.isInstancedBufferGeometry){const jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ge=Math.min(at.instanceCount,jt);ue.renderInstances(le,Ve,Ge)}else ue.render(le,Ve)};function we(A,W,at){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,xi(A,W,at),A.side=Ia,A.needsUpdate=!0,xi(A,W,at),A.side=$i):xi(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),_=Bt.get(at),_.init(W),N.push(_),at.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),A!==at&&A.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const rt=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const bt=K.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Ft=bt[Ut];we(Ft,at,K),rt.add(Ft)}else we(bt,at,K),rt.add(bt)}),_=N.pop(),rt},this.compileAsync=function(A,W,at=null){const rt=this.compile(A,W,at);return new Promise(K=>{function bt(){if(rt.forEach(function(Ut){Ht.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){K(A);return}setTimeout(bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ye=null;function ui(A){ye&&ye(A)}function sn(){Ye.stop()}function on(){Ye.start()}const Ye=new Pv;Ye.setAnimationLoop(ui),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){ye=A,At.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},At.addEventListener("sessionstart",sn),At.addEventListener("sessionend",on),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(W),W=At.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,W,Q),_=Bt.get(A,N.length),_.init(W),N.push(_),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Mt.setFromProjectionMatrix(yt,wi,W.reversedDepth),st=this.localClippingEnabled,q=Rt.init(this.clippingPlanes,st),M=ut.get(A,H.length),M.init(),H.push(M),At.enabled===!0&&At.isPresenting===!0){const bt=U.xr.getDepthSensingMesh();bt!==null&&Si(bt,W,-1/0,U.sortObjects)}Si(A,W,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(lt,R),Ee=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ee&&qt.addToRenderList(M,A),this.info.render.frame++,q===!0&&Rt.beginShadows();const at=_.state.shadowsArray;Xt.render(at,A,W),q===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,K=M.transmissive;if(_.setupLights(),W.isArrayCamera){const bt=W.cameras;if(K.length>0)for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++){const Nt=bt[Ut];Fo(rt,K,A,Nt)}Ee&&qt.render(A);for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++){const Nt=bt[Ut];mr(M,A,Nt,Nt.viewport)}}else K.length>0&&Fo(rt,K,A,W),Ee&&qt.render(A),mr(M,A,W);Q!==null&&I===0&&(re.updateMultisampleRenderTarget(Q),re.updateRenderTargetMipmap(Q)),A.isScene===!0&&A.onAfterRender(U,A,W),Dt.resetDefaultState(),D=-1,w=null,N.pop(),N.length>0?(_=N[N.length-1],q===!0&&Rt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,H.pop(),H.length>0?M=H[H.length-1]:M=null};function Si(A,W,at,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Mt.intersectsSprite(A)){rt&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const Ut=tt.update(A),Ft=A.material;Ft.visible&&M.push(A,Ut,Ft,at,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Mt.intersectsObject(A))){const Ut=tt.update(A),Ft=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ot.copy(Ut.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(Ft)){const Nt=Ut.groups;for(let Jt=0,te=Nt.length;Jt<te;Jt++){const Wt=Nt[Jt],le=Ft[Wt.materialIndex];le&&le.visible&&M.push(A,Ut,le,at,Ot.z,Wt)}}else Ft.visible&&M.push(A,Ut,Ft,at,Ot.z,null)}}const bt=A.children;for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++)Si(bt[Ut],W,at,rt)}function mr(A,W,at,rt){const K=A.opaque,bt=A.transmissive,Ut=A.transparent;_.setupLightsView(at),q===!0&&Rt.setGlobalState(U.clippingPlanes,at),rt&&It.viewport(B.copy(rt)),K.length>0&&gr(K,W,at),bt.length>0&&gr(bt,W,at),Ut.length>0&&gr(Ut,W,at),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Fo(A,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new vi(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?na:ra,minFilter:dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=_.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||B;bt.setSize(Ut.z*U.transmissionResolutionScale,Ut.w*U.transmissionResolutionScale);const Ft=U.getRenderTarget(),Nt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(bt),U.getClearColor(pt),mt=U.getClearAlpha(),mt<1&&U.setClearColor(16777215,.5),U.clear(),Ee&&qt.render(at);const te=U.toneMapping;U.toneMapping=Fa;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),q===!0&&Rt.setGlobalState(U.clippingPlanes,rt),gr(A,at,rt),re.updateMultisampleRenderTarget(bt),re.updateRenderTargetMipmap(bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Te=0,Ve=W.length;Te<Ve;Te++){const Le=W[Te],ue=Le.object,jt=Le.geometry,Ge=Le.material,me=Le.group;if(Ge.side===$i&&ue.layers.test(rt.layers)){const Mn=Ge.side;Ge.side=Gn,Ge.needsUpdate=!0,Ts(ue,at,rt,jt,Ge,me),Ge.side=Mn,Ge.needsUpdate=!0,le=!0}}le===!0&&(re.updateMultisampleRenderTarget(bt),re.updateRenderTargetMipmap(bt))}U.setRenderTarget(Ft,Nt,Jt),U.setClearColor(pt,mt),Wt!==void 0&&(rt.viewport=Wt),U.toneMapping=te}function gr(A,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let K=0,bt=A.length;K<bt;K++){const Ut=A[K],Ft=Ut.object,Nt=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&rt!==null&&(te=rt),Ft.layers.test(at.layers)&&Ts(Ft,W,at,Nt,te,Jt)}}function Ts(A,W,at,rt,K,bt){A.onBeforeRender(U,W,at,rt,K,bt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(U,W,at,rt,A,bt),K.transparent===!0&&K.side===$i&&K.forceSinglePass===!1?(K.side=Gn,K.needsUpdate=!0,U.renderBufferDirect(at,W,rt,K,A,bt),K.side=Ia,K.needsUpdate=!0,U.renderBufferDirect(at,W,rt,K,A,bt),K.side=$i):U.renderBufferDirect(at,W,rt,K,A,bt),A.onAfterRender(U,W,at,rt,K,bt)}function xi(A,W,at){W.isScene!==!0&&(W=Kt);const rt=Ht.get(A),K=_.state.lights,bt=_.state.shadowsArray,Ut=K.state.version,Ft=ht.getParameters(A,K.state,bt,W,at),Nt=ht.getProgramCacheKey(Ft);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?We:Xe).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",St),Jt=new Map,rt.programs=Jt);let te=Jt.get(Nt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return Li(A,Ft),te}else Ft.uniforms=ht.getUniforms(A),A.onBeforeCompile(Ft,U),te=ht.acquireProgram(Ft,Nt),Jt.set(Nt,te),rt.uniforms=Ft.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),Li(A,Ft),rt.needsLights=la(A),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=K.state.ambient,Wt.lightProbe.value=K.state.probe,Wt.directionalLights.value=K.state.directional,Wt.directionalLightShadows.value=K.state.directionalShadow,Wt.spotLights.value=K.state.spot,Wt.spotLightShadows.value=K.state.spotShadow,Wt.rectAreaLights.value=K.state.rectArea,Wt.ltc_1.value=K.state.rectAreaLTC1,Wt.ltc_2.value=K.state.rectAreaLTC2,Wt.pointLights.value=K.state.point,Wt.pointLightShadows.value=K.state.pointShadow,Wt.hemisphereLights.value=K.state.hemi,Wt.directionalShadowMap.value=K.state.directionalShadowMap,Wt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Wt.spotShadowMap.value=K.state.spotShadowMap,Wt.spotLightMatrix.value=K.state.spotLightMatrix,Wt.spotLightMap.value=K.state.spotLightMap,Wt.pointShadowMap.value=K.state.pointShadowMap,Wt.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function _r(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Eu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Li(A,W){const at=Ht.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function oa(A,W,at,rt,K){W.isScene!==!0&&(W=Kt),re.resetTextureUnits();const bt=W.fog,Ut=rt.isMeshStandardMaterial?W.environment:null,Ft=Q===null?U.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:vs,Nt=(rt.isMeshStandardMaterial?We:Xe).get(rt.envMap||Ut),Jt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,Te=!!at.morphAttributes.color;let Ve=Fa;rt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ve=U.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ue=Le!==void 0?Le.length:0,jt=Ht.get(rt),Ge=_.state.lights;if(q===!0&&(st===!0||A!==w)){const Ze=A===w&&rt.id===D;Rt.setState(rt,A,Ze)}let me=!1;rt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ge.state.version||jt.outputColorSpace!==Ft||K.isBatchedMesh&&jt.batching===!1||!K.isBatchedMesh&&jt.batching===!0||K.isBatchedMesh&&jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&jt.instancing===!1||!K.isInstancedMesh&&jt.instancing===!0||K.isSkinnedMesh&&jt.skinning===!1||!K.isSkinnedMesh&&jt.skinning===!0||K.isInstancedMesh&&jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&jt.instancingMorph===!1&&K.morphTexture!==null||jt.envMap!==Nt||rt.fog===!0&&jt.fog!==bt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Rt.numPlanes||jt.numIntersection!==Rt.numIntersection)||jt.vertexAlphas!==Jt||jt.vertexTangents!==te||jt.morphTargets!==Wt||jt.morphNormals!==le||jt.morphColors!==Te||jt.toneMapping!==Ve||jt.morphTargetsCount!==ue)&&(me=!0):(me=!0,jt.__version=rt.version);let Mn=jt.currentProgram;me===!0&&(Mn=xi(rt,W,K));let ci=!1,Rn=!1,hn=!1;const ze=Mn.getUniforms(),Cn=jt.uniforms;if(It.useProgram(Mn.program)&&(ci=!0,Rn=!0,hn=!0),rt.id!==D&&(D=rt.id,Rn=!0),ci||w!==A){It.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(F,"projectionMatrix",A.projectionMatrix),ze.setValue(F,"viewMatrix",A.matrixWorldInverse);const _n=ze.map.cameraPosition;_n!==void 0&&_n.setValue(F,wt.setFromMatrixPosition(A.matrixWorld)),Me.logarithmicDepthBuffer&&ze.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ze.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Rn=!0,hn=!0)}if(K.isSkinnedMesh){ze.setOptional(F,K,"bindMatrix"),ze.setOptional(F,K,"bindMatrixInverse");const Ze=K.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ze.setValue(F,"boneTexture",Ze.boneTexture,re))}K.isBatchedMesh&&(ze.setOptional(F,K,"batchingTexture"),ze.setValue(F,"batchingTexture",K._matricesTexture,re),ze.setOptional(F,K,"batchingIdTexture"),ze.setValue(F,"batchingIdTexture",K._indirectTexture,re),ze.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&ze.setValue(F,"batchingColorTexture",K._colorsTexture,re));const yn=at.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Et.update(K,at,Mn),(Rn||jt.receiveShadow!==K.receiveShadow)&&(jt.receiveShadow=K.receiveShadow,ze.setValue(F,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Cn.envMap.value=Nt,Cn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),Rn&&(ze.setValue(F,"toneMappingExposure",U.toneMappingExposure),jt.needsLights&&Ha(Cn,hn),bt&&rt.fog===!0&&xt.refreshFogUniforms(Cn,bt),xt.refreshMaterialUniforms(Cn,rt,Y,j,_.state.transmissionRenderTarget[A.id]),Eu.upload(F,_r(jt),Cn,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Eu.upload(F,_r(jt),Cn,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ze.setValue(F,"center",K.center),ze.setValue(F,"modelViewMatrix",K.modelViewMatrix),ze.setValue(F,"normalMatrix",K.normalMatrix),ze.setValue(F,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ze=rt.uniformsGroups;for(let _n=0,vr=Ze.length;_n<vr;_n++){const On=Ze[_n];ae.update(On,Mn),ae.bind(On,Mn)}}return Mn}function Ha(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function la(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,W,at){const rt=Ht.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=W,Ht.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Ht.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const tn=F.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){Q=A,k=W,I=at;let rt=!0,K=null,bt=!1,Ut=!1;if(A){const Nt=Ht.get(A);if(Nt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Nt.__hasExternalTextures)re.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&Ht.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?K=te[W][at]:K=te[W],bt=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?K=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?K=te[at]:K=te,B.copy(A.viewport),ct.copy(A.scissor),ft=A.scissorTest}else B.copy(X).multiplyScalar(Y).floor(),ct.copy(ot).multiplyScalar(Y).floor(),ft=_t;if(at!==0&&(K=tn),It.bindFramebuffer(F.FRAMEBUFFER,K)&&rt&&It.drawBuffers(A,K),It.viewport(B),It.scissor(ct),It.setScissorTest(ft),bt){const Nt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,at)}else if(Ut){const Nt=W;for(let Jt=0;Jt<A.textures.length;Jt++){const te=Ht.get(A.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,te.__webglTexture,at,Nt)}}else if(A!==null&&at!==0){const Nt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,W,at,rt,K,bt,Ut,Ft=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){It.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const Jt=A.textures[Ft],te=Jt.format,Wt=Jt.type;if(!Me.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-K&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(W,at,rt,K,kt.convert(te),kt.convert(Wt),bt))}finally{const Jt=Q!==null?Ht.get(Q).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,rt,K,bt,Ut,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-K){It.bindFramebuffer(F.FRAMEBUFFER,Nt);const Jt=A.textures[Ft],te=Jt.format,Wt=Jt.type;if(!Me.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(W,at,rt,K,kt.convert(te),kt.convert(Wt),0);const Te=Q!==null?Ht.get(Q).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Te);const Ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await oM(F,Ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(le),F.deleteSync(Ve),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const rt=Math.pow(2,-at),K=Math.floor(A.image.width*rt),bt=Math.floor(A.image.height*rt),Ut=W!==null?W.x:0,Ft=W!==null?W.y:0;re.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ut,Ft,K,bt),It.unbindTexture()};const Io=F.createFramebuffer(),Ho=F.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,rt=null,K=0,bt=null){bt===null&&(K!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=K,K=0):bt=0);let Ut,Ft,Nt,Jt,te,Wt,le,Te,Ve;const Le=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(at!==null)Ut=at.max.x-at.min.x,Ft=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,te=at.min.y,Wt=at.isBox3?at.min.z:0;else{const yn=Math.pow(2,-K);Ut=Math.floor(Le.width*yn),Ft=Math.floor(Le.height*yn),A.isDataArrayTexture?Nt=Le.depth:A.isData3DTexture?Nt=Math.floor(Le.depth*yn):Nt=1,Jt=0,te=0,Wt=0}rt!==null?(le=rt.x,Te=rt.y,Ve=rt.z):(le=0,Te=0,Ve=0);const ue=kt.convert(W.format),jt=kt.convert(W.type);let Ge;W.isData3DTexture?(re.setTexture3D(W,0),Ge=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),Ge=F.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),Ge=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const me=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ci=F.getParameter(F.UNPACK_SKIP_PIXELS),Rn=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const ze=A.isDataArrayTexture||A.isData3DTexture,Cn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const yn=Ht.get(A),Ze=Ht.get(W),_n=Ht.get(yn.__renderTarget),vr=Ht.get(Ze.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,_n.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let On=0;On<Nt;On++)ze&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,K,Wt+On),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,bt,Ve+On)),F.blitFramebuffer(Jt,te,Ut,Ft,le,Te,Ut,Ft,F.DEPTH_BUFFER_BIT,F.NEAREST);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Ht.has(A)){const yn=Ht.get(A),Ze=Ht.get(W);It.bindFramebuffer(F.READ_FRAMEBUFFER,Io),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ho);for(let _n=0;_n<Nt;_n++)ze?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yn.__webglTexture,K,Wt+_n):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yn.__webglTexture,K),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.__webglTexture,bt,Ve+_n):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ze.__webglTexture,bt),K!==0?F.blitFramebuffer(Jt,te,Ut,Ft,le,Te,Ut,Ft,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(Ge,bt,le,Te,Ve+_n,Jt,te,Ut,Ft):F.copyTexSubImage2D(Ge,bt,le,Te,Jt,te,Ut,Ft);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ge,bt,le,Te,Ve,Ut,Ft,Nt,ue,jt,Le.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Ge,bt,le,Te,Ve,Ut,Ft,Nt,ue,Le.data):F.texSubImage3D(Ge,bt,le,Te,Ve,Ut,Ft,Nt,ue,jt,Le):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,bt,le,Te,Ut,Ft,ue,jt,Le.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,bt,le,Te,Le.width,Le.height,ue,Le.data):F.texSubImage2D(F.TEXTURE_2D,bt,le,Te,Ut,Ft,ue,jt,Le);F.pixelStorei(F.UNPACK_ROW_LENGTH,me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ci),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),bt===0&&W.generateMipmaps&&F.generateMipmap(Ge),It.unbindTexture()},this.copyTextureToTexture3D=function(A,W,at=null,rt=null,K=0){return ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,at,rt,K)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){k=0,I=0,Q=null,It.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const bA=`
precision highp float;

attribute float aU;
attribute float aY0;
attribute float aSeed;

uniform float uTime;
uniform float uPointBase;
uniform float uAmplitude;
uniform float uBandThickness;
uniform float uCohesion;
uniform float uJitter;
uniform float uJitterSpeed;
uniform float uLiftSign;

uniform sampler2D uWaveTex;
uniform float uWaveTexSize;

uniform float uColorFlowPhase;

uniform float uPulseEnabled;
uniform float uPulseWidth;
uniform float uPulseFeather;
uniform float uPulseStrength;
uniform float uPulseRadiusMax;
uniform float uPulsePeriodSec;
uniform float uPulseActiveFrac;
uniform float uPulseIntroFrac;
uniform float uPulsePhaseSec;
uniform float uPulseSpeed;

varying float vU;
varying float vPulseMask;
varying float vWaveAmp;
varying float vColorPhase;

float hash(float n){ return fract(sin(n)*43758.5453); }

void main() {
  vU = aU;
  vColorPhase = uColorFlowPhase;

  float x = mix(-0.5, 0.5, aU) * 2.0;

  float texU = aU * (uWaveTexSize - 1.0) / uWaveTexSize + 0.5 / uWaveTexSize;
  float wave = texture2D(uWaveTex, vec2(texU, 0.5)).r;

  float jitter = (hash(aSeed + 13.1) - 0.5) * 2.0;
  float j = jitter * uJitter * sin(uTime * uJitterSpeed + aSeed * 0.314);

  float lift = uLiftSign * uAmplitude * wave
             + aY0 * uBandThickness * (1.0 - uCohesion)
             + j * 0.02;

  // Pulse ring moving along U
  float tPulse = (uTime + uPulsePhaseSec) / max(uPulsePeriodSec, 1e-3);
  tPulse = fract(tPulse);
  float isActive = step(tPulse, uPulseActiveFrac);
  float intro = smoothstep(0.0, uPulseIntroFrac, tPulse);
  float radius = uPulseRadiusMax * tPulse;

  float pCenter = fract(tPulse * uPulseSpeed);
  float d = abs(aU - pCenter);

  float w = max(uPulseWidth, 1e-4);
  float inner = smoothstep(radius - w - uPulseFeather, radius - w, d);
  float outer = 1.0 - smoothstep(radius + w, radius + w + uPulseFeather, d);
  float band = clamp(inner * outer, 0.0, 1.0);

  vPulseMask = (uPulseEnabled > 0.5) ? band * isActive * intro : 0.0;
  vWaveAmp = wave;

  vec3 pos = vec3(x, lift, 0.0);
  float baseSize = uPointBase * 2.0;
  float sizeBoost = 1.0 + vPulseMask * uPulseStrength * 2.0;
  gl_PointSize = baseSize * sizeBoost;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,AA=`
precision highp float;

varying float vU;
varying float vPulseMask;
varying float vWaveAmp;
varying float vColorPhase;

uniform vec3 uColorDark;
uniform vec3 uColorMid;
uniform vec3 uColorBright;

uniform float uPulseEnabled;
uniform vec3 uPulseColor;
uniform float uPulseStrength;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float r = length(p);
  float alpha = smoothstep(0.5, 0.0, r);

  // flowing gradient along the band
  float g = fract(vU + vColorPhase);
  vec3 base = mix(uColorDark, uColorMid, g);
  base = mix(base, uColorBright, clamp(vWaveAmp * 1.5, 0.0, 1.0));

  vec3 color = base;

  if (uPulseEnabled > 0.5) {
    float k = vPulseMask * uPulseStrength * smoothstep(0.5, 0.0, r);
    color += uPulseColor * k;
    alpha = clamp(alpha + k * 0.5, 0.0, 1.0);
  }

  gl_FragColor = vec4(color, alpha);
}
`,RA="#3700c4",CA="#B01EA6",wA="#f995ff",DA={dark:RA,mid:CA,bright:wA},UA="ACTIVE",LA=!1,NA=!1,PA=1024,OA=.88,BA=2048,zA=1.51,FA=.161,IA=4,HA=.04,GA=.6,VA=.82,kA=2.234,XA=2.37,WA=2.3,qA=2.23,YA=.7,ZA=.451,KA=.03,jA=1,QA={x:0,y:0,z:-5},JA={x:0,y:.0209999999999999,z:-3.15},$A=!0,t1={x:.0499999999999998,y:.0300000000000002,z:-4},e1={x:0,y:-2.6,z:0},n1={enabled:!0,color:"#9ffdf9",speed:2.189,width:.583,feather:.73,strength:.268,radiusMax:.924,periodSec:15.826,activeFrac:.355,introFrac:.607,phaseSec:-18.172},i1=.2,a1=.7,r1=2,s1=.5,o1={state:UA,mic:LA,freeze:NA,fftSize:PA,smoothing:OA,particles:BA,pointBase:zA,amplitude:FA,lineLength:IA,bandThickness:HA,cohesion:GA,jitter:VA,jitterSpeed:kA,bassBoost:XA,midBoost:WA,trebleBoost:qA,bloomStrength:YA,bloomRadius:ZA,bloomThreshold:KA,liftSign:jA,line1Pos:QA,line1Rot:JA,line2Enabled:$A,line2Pos:t1,line2Rot:e1,pulse:n1,colorFlowSpeed:i1,procAmp:a1,procFreq:r1,procSpeed:s1},Tu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const l1=new Nv(-1,1,1,-1,0,1);class u1 extends Ui{constructor(){super(),this.setAttribute("position",new aa([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new aa([0,2,0,0,2,0],2))}}const c1=new u1;class Hv{constructor(t){this._mesh=new Di(c1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,l1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class f1 extends zo{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Ln?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wu.clone(t.uniforms),this.material=new Ln({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Hv(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class j_ extends zo{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class h1 extends zo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class d1{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const r=t.getSize(new de);this._width=r.width,this._height=r.height,i=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:na}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new f1(Tu),this.copyPass.material.blending=ea,this.clock=new GM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),h.needsSwap){if(r){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}j_!==void 0&&(h instanceof j_?r=!0:h instanceof h1&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(r,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p1 extends zo{constructor(t,i,r=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(t,i,r){const l=t.autoClear;t.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const m1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends zo{constructor(t,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=t!==void 0?new de(t.x,t.y):new de(256,256),this.clearColor=new ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new vi(c,h,{type:na}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new vi(c,h,{type:na});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const S=new vi(c,h,{type:na});S.texture.name="UnrealBloomPass.v"+g,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),c=Math.round(c/2),h=Math.round(h/2)}const d=m1;this.highPassUniforms=wu.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ln({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new de(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new it(1,1,1),new it(1,1,1),new it(1,1,1),new it(1,1,1),new it(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wu.clone(Tu.uniforms),this.blendMaterial=new Ln({uniforms:this.copyUniforms,vertexShader:Tu.vertexShader,fragmentShader:Tu.fragmentShader,blending:bu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ve,this._oldClearAlpha=1,this._basic=new pd,this._fsQuad=new Hv(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(r,l),this.renderTargetsVertical[c].setSize(r,l),this.separableBlurMaterials[c].uniforms.invSize.value=new de(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(t,i,r,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[];for(let r=0;r<t;r++)i.push(.39894*Math.exp(-.5*r*r/(t*t))/t);return new Ln({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ln({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xs.BlurDirectionX=new de(1,0);xs.BlurDirectionY=new de(0,1);function g1(o,t,i){const r=new d1(o);r.addPass(new p1(t,i));const l=new xs(new de(window.innerWidth,window.innerHeight),1.2,.6,.9);return r.addPass(l),{composer:r,bloomPass:l}}const _1={state:"ACTIVE",mic:!0,freeze:!1,fftSize:512,smoothing:.75,particles:2500,pointBase:1.1,amplitude:.8,lineLength:4,bandThickness:.04,cohesion:.6,jitter:.3,jitterSpeed:1.2,bassBoost:1.2,midBoost:1,trebleBoost:1,bloomStrength:2,bloomRadius:.6,bloomThreshold:.03,liftSign:-1,line1Pos:{x:0,y:0,z:0},line1Rot:{x:0,y:0,z:0},line2Enabled:!0,line2Pos:{x:0,y:-.25,z:0},line2Rot:{x:0,y:0,z:0},pulse:{enabled:!0,color:"#9ffdf9",speed:.3,width:.137,feather:.2,strength:1,radiusMax:1,periodSec:11.3,activeFrac:.966,introFrac:.388,phaseSec:-5.88},colorFlowSpeed:.2,procAmp:.7,procFreq:2,procSpeed:.5},Q_="wave:setState",J_="wave:setConfig",$_="wave:setPulse",tv="wave:idle",ev="wave:active",nv="wave:processing",v1="wave:unlockAudio",iv="wave:attachMedia",av="wave:detachMedia",rv="wave:mediaPlay",sv="wave:mediaPause",ov="wave:mediaVolume";function S1(){const o=_u.useRef(null),t=_u.useRef(0);return _u.useEffect(()=>{const i={..._1,...o1},r=DA,l=o.current,c=new UM;c.background=null;const h=new oi(60,window.innerWidth/window.innerHeight,.01,100);h.position.set(0,0,3);const d=new TA({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(window.innerWidth,window.innerHeight),d.setClearAlpha(0),l.appendChild(d.domElement);const m=2048,p=new Float32Array(m*4),g=new LM(p,m,1,li,Ci);g.generateMipmaps=!1,g.magFilter=Nn,g.minFilter=Nn,g.wrapS=ta,g.wrapT=ta,g.needsUpdate=!0;const v=()=>{const lt=Math.max(256,Math.floor(i.particles)),R=new Float32Array(lt*3),X=new Float32Array(lt),ot=new Float32Array(lt),_t=new Float32Array(lt),Mt=()=>{const Ot=Math.random()||1e-6,Kt=Math.random();return Math.sqrt(-2*Math.log(Ot))*Math.cos(2*Math.PI*Kt)};for(let Ot=0;Ot<lt;Ot++){const Kt=(Ot+.5)/lt,Ee=r_.lerp(-i.lineLength*.5,i.lineLength*.5,Kt),fe=Mt()*i.bandThickness*.5;R[Ot*3+0]=Ee,R[Ot*3+1]=0,R[Ot*3+2]=0,X[Ot]=Kt,ot[Ot]=fe,_t[Ot]=Math.random()*1e3}const q=new Ui;q.setAttribute("position",new Hn(R,3)),q.setAttribute("aU",new Hn(X,1)),q.setAttribute("aY0",new Hn(ot,1)),q.setAttribute("aSeed",new Hn(_t,1));const st={uTime:{value:0},uPointBase:{value:i.pointBase},uAmplitude:{value:i.amplitude},uBandThickness:{value:i.bandThickness},uCohesion:{value:i.cohesion},uJitter:{value:i.jitter},uJitterSpeed:{value:i.jitterSpeed},uLiftSign:{value:i.liftSign},uWaveTex:{value:g},uWaveTexSize:{value:m},uColorDark:{value:new ve(r.dark)},uColorMid:{value:new ve(r.mid)},uColorBright:{value:new ve(r.bright)},uColorFlowPhase:{value:0},uPulseEnabled:{value:i.pulse.enabled?1:0},uPulseColor:{value:new ve(i.pulse.color)},uPulseWidth:{value:i.pulse.width},uPulseFeather:{value:i.pulse.feather},uPulseStrength:{value:i.pulse.strength},uPulseRadiusMax:{value:i.pulse.radiusMax},uPulsePeriodSec:{value:i.pulse.periodSec},uPulseActiveFrac:{value:i.pulse.activeFrac},uPulseIntroFrac:{value:i.pulse.introFrac},uPulsePhaseSec:{value:i.pulse.phaseSec},uPulseSpeed:{value:i.pulse.speed}},yt=new Ln({uniforms:st,vertexShader:bA,fragmentShader:AA,blending:bu,transparent:!0,depthWrite:!1});return{points:new zM(q,yt),uniforms:st}},S=v();c.add(S.points),S.points.position.set(i.line1Pos.x,i.line1Pos.y,i.line1Pos.z),S.points.rotation.set(i.line1Rot.x,i.line1Rot.y,i.line1Rot.z);let y=null;i.line2Enabled&&(y=v(),c.add(y.points),y.points.position.set(i.line2Pos.x,i.line2Pos.y,i.line2Pos.z),y.points.rotation.set(i.line2Rot.x,i.line2Rot.y,i.line2Rot.z));const b=g1(d,c,h);b.bloomPass.strength=i.bloomStrength,b.bloomPass.radius=i.bloomRadius,b.bloomPass.threshold=i.bloomThreshold;const C=new(window.AudioContext||window.webkitAudioContext);C.state==="suspended"&&C.resume(),window.addEventListener("pointerdown",()=>C.resume(),{once:!0});const M=C.createAnalyser();M.fftSize=i.fftSize,M.smoothingTimeConstant=r_.clamp(i.smoothing,0,.99);let _=!1;const H=async()=>{try{await C.resume(),_=C.state==="running"}catch{}},N=()=>{H()};window.addEventListener("pointerdown",N,{once:!0}),window.addEventListener("touchstart",N,{once:!0}),window.addEventListener("keydown",N,{once:!0}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&H()}),window.addEventListener(v1,H);let U=null,z=null,k=null;const I=()=>{try{z?.disconnect()}catch{}z=null;try{U?.pause()}catch{}U&&U.parentElement&&U.parentElement.removeChild(U),U=null},Q=lt=>{C.createMediaStreamSource(lt).connect(M)};{window.__externalStreams??={},window.WavesAPI??={registerStream:(Mt,q)=>{window.__externalStreams[Mt]=q}};const lt=Mt=>{const q=Mt.detail||{};if(I(),q.streamId&&window.__externalStreams[q.streamId]){const yt=window.__externalStreams[q.streamId];Q(yt);return}if(!q.url){console.warn("[Wave] attachMedia missing url or streamId");return}const st=document.createElement("audio");st.src=q.url,st.crossOrigin=q.crossOrigin||"anonymous",st.loop=!!q.loop,st.autoplay=!!q.autoplay,st.volume=typeof q.volume=="number"?Math.max(0,Math.min(1,q.volume)):1,st.playsInline=!0,z=C.createMediaElementSource(st),z.connect(M),U=st,st.autoplay&&st.play().catch(()=>{})},R=()=>I(),X=()=>U?.play().catch(()=>{}),ot=()=>U?.pause(),_t=Mt=>{const q=Mt.detail||{};U&&typeof q.volume=="number"&&(U.volume=Math.max(0,Math.min(1,q.volume)))};window.addEventListener(iv,lt),window.addEventListener(av,R),window.addEventListener(rv,X),window.addEventListener(sv,ot),window.addEventListener(ov,_t),window.__wave_cleanup=()=>{window.removeEventListener(iv,lt),window.removeEventListener(av,R),window.removeEventListener(rv,X),window.removeEventListener(sv,ot),window.removeEventListener(ov,_t),I()}}const D=lt=>{const R=lt.detail,X=typeof R=="string"?R:R?.state;if(!X)return;const ot=String(X).toUpperCase();(ot==="IDLE"||ot==="ACTIVE"||ot==="PROCESSING")&&(i.state=ot)},w=lt=>{const R=lt.detail||{};Object.assign(i,R)},B=lt=>{const R=lt.detail||{};Object.assign(i.pulse,R),[S,y].forEach(X=>{X&&(R.enabled!==void 0&&(X.uniforms.uPulseEnabled.value=i.pulse.enabled?1:0),R.color&&X.uniforms.uPulseColor.value.set(i.pulse.color),R.width!==void 0&&(X.uniforms.uPulseWidth.value=i.pulse.width),R.feather!==void 0&&(X.uniforms.uPulseFeather.value=i.pulse.feather),R.strength!==void 0&&(X.uniforms.uPulseStrength.value=i.pulse.strength),R.radiusMax!==void 0&&(X.uniforms.uPulseRadiusMax.value=i.pulse.radiusMax),R.periodSec!==void 0&&(X.uniforms.uPulsePeriodSec.value=i.pulse.periodSec),R.activeFrac!==void 0&&(X.uniforms.uPulseActiveFrac.value=i.pulse.activeFrac),R.introFrac!==void 0&&(X.uniforms.uPulseIntroFrac.value=i.pulse.introFrac),R.phaseSec!==void 0&&(X.uniforms.uPulsePhaseSec.value=i.pulse.phaseSec),R.speed!==void 0&&(X.uniforms.uPulseSpeed.value=i.pulse.speed))})},ct=()=>{i.state="IDLE"},ft=()=>{i.state="ACTIVE"},pt=()=>{i.state="PROCESSING"};window.addEventListener(Q_,D),window.addEventListener(J_,w),window.addEventListener($_,B),window.addEventListener(tv,ct),window.addEventListener(ev,ft),window.addEventListener(nv,pt);let mt=performance.now(),P=0;const j=()=>{const lt=performance.now(),R=(lt-mt)*.001;if(mt=lt,S.uniforms.uTime.value+=R,y&&(y.uniforms.uTime.value+=R),P=(P+i.colorFlowSpeed*R)%1,S.uniforms.uColorFlowPhase.value=P,y&&(y.uniforms.uColorFlowPhase.value=P),!i.freeze){const X=m;if(i.state==="ACTIVE")if(_&&C.state==="running"){const _t=new Uint8Array(M.frequencyBinCount);M.getByteFrequencyData(_t);for(let Mt=0;Mt<X;Mt++){const q=Math.min(_t.length-1,Math.floor(Mt*(_t.length-1)/(X-1))),st=(_t[q]||0)/255,yt=1-Math.min(1,q/(_t.length*.15)),wt=Math.max(0,(q-_t.length*.6)/(_t.length*.4)),Ot=Math.max(0,1-yt-wt),Kt=st*(yt*i.bassBoost+Ot*i.midBoost+wt*i.trebleBoost)/(yt+Ot+wt+1e-6),Ee=isFinite(Kt)?Kt:0;p[Mt*4+0]=Ee,p[Mt*4+1]=Ee,p[Mt*4+2]=Ee,p[Mt*4+3]=1}}else{const _t=S.uniforms.uTime.value;for(let Mt=0;Mt<X;Mt++){const q=Mt/(X-1),st=.02*(.5+.5*Math.sin(2*Math.PI*(1.5*q-.5*_t)));p[Mt*4+0]=st,p[Mt*4+1]=st,p[Mt*4+2]=st,p[Mt*4+3]=1}}else if(i.state==="PROCESSING")for(let ot=0;ot<X;ot++){const _t=ot/(X-1),Mt=2*Math.PI*(i.procFreq*_t-i.procSpeed*S.uniforms.uTime.value),q=.5+.5*Math.sin(Mt),st=i.procAmp*q;p[ot*4+0]=st,p[ot*4+1]=st,p[ot*4+2]=st,p[ot*4+3]=1}else for(let ot=0;ot<X;ot++)p[ot*4+0]=0,p[ot*4+1]=0,p[ot*4+2]=0,p[ot*4+3]=1;g.needsUpdate=!0}b.composer.render(),t.current=requestAnimationFrame(j)};j();const Y=()=>{const{innerWidth:lt,innerHeight:R}=window;h.aspect=lt/R,h.updateProjectionMatrix(),d.setSize(lt,R),b.composer.setSize(lt,R)};return window.addEventListener("resize",Y),()=>{cancelAnimationFrame(t.current),window.removeEventListener("resize",Y),window.removeEventListener(Q_,D),window.removeEventListener(J_,w),window.removeEventListener($_,B),window.removeEventListener(tv,ct),window.removeEventListener(ev,ft),window.removeEventListener(nv,pt);try{k?.getTracks()?.forEach(lt=>lt.stop())}catch{}if(window.__wave_cleanup)try{window.__wave_cleanup()}catch{}b.composer?.passes?.forEach(lt=>lt?.dispose&&lt.dispose()),d.dispose(),l.removeChild(d.domElement)}},[]),Ro.jsx("div",{ref:o,style:{width:"100%",height:"100%",background:"transparent"}})}function x1(){return Ro.jsx("div",{style:{width:"100vw",height:"100vh",background:"black"},children:Ro.jsx(S1,{})})}ex.createRoot(document.getElementById("root")).render(Ro.jsx(YS.StrictMode,{children:Ro.jsx(x1,{})}));
