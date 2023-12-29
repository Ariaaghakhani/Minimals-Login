"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{43423:function(e,t,n){n.d(t,{i:function(){return FocusTrap}});var r=n(2265),o=n(95137),i=n(96278),l=n(57437);function defaultGetTabbable(e){let t=[],n=[];return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e,r)=>{let o=function(e){let t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1===o||e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!1;let getRadio=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`),t=getRadio(`[name="${e.name}"]:checked`);return t||(t=getRadio(`[name="${e.name}"]`)),t!==e}(e)||(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function defaultIsEnabled(){return!0}function FocusTrap(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:a=!1,disableRestoreFocus:s=!1,getTabbable:u=defaultGetTabbable,isEnabled:c=defaultIsEnabled,open:d}=e,f=r.useRef(!1),p=r.useRef(null),h=r.useRef(null),m=r.useRef(null),E=r.useRef(null),v=r.useRef(!1),g=r.useRef(null),x=(0,o.Z)(t.ref,g),b=r.useRef(null);r.useEffect(()=>{d&&g.current&&(v.current=!n)},[n,d]),r.useEffect(()=>{if(!d||!g.current)return;let e=(0,i.Z)(g.current);return!g.current.contains(e.activeElement)&&(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),v.current&&g.current.focus()),()=>{s||(m.current&&m.current.focus&&(f.current=!0,m.current.focus()),m.current=null)}},[d]),r.useEffect(()=>{if(!d||!g.current)return;let e=(0,i.Z)(g.current),loopFocus=t=>{b.current=t,!a&&c()&&"Tab"===t.key&&e.activeElement===g.current&&t.shiftKey&&(f.current=!0,h.current&&h.current.focus())},contain=()=>{let t=g.current;if(null===t)return;if(!e.hasFocus()||!c()||f.current){f.current=!1;return}if(t.contains(e.activeElement)||a&&e.activeElement!==p.current&&e.activeElement!==h.current)return;if(e.activeElement!==E.current)E.current=null;else if(null!==E.current)return;if(!v.current)return;let n=[];if((e.activeElement===p.current||e.activeElement===h.current)&&(n=u(g.current)),n.length>0){var r,o;let e=!!((null==(r=b.current)?void 0:r.shiftKey)&&(null==(o=b.current)?void 0:o.key)==="Tab"),t=n[0],i=n[n.length-1];"string"!=typeof t&&"string"!=typeof i&&(e?i.focus():t.focus())}else t.focus()};e.addEventListener("focusin",contain),e.addEventListener("keydown",loopFocus,!0);let t=setInterval(()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&contain()},50);return()=>{clearInterval(t),e.removeEventListener("focusin",contain),e.removeEventListener("keydown",loopFocus,!0)}},[n,a,s,c,d,u]);let handleFocusSentinel=e=>{null===m.current&&(m.current=e.relatedTarget),v.current=!0};return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)("div",{tabIndex:d?0:-1,onFocus:handleFocusSentinel,ref:p,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:x,onFocus:e=>{null===m.current&&(m.current=e.relatedTarget),v.current=!0,E.current=e.target;let n=t.props.onFocus;n&&n(e)}}),(0,l.jsx)("div",{tabIndex:d?0:-1,onFocus:handleFocusSentinel,ref:h,"data-testid":"sentinelEnd"})]})}},4609:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(2265),o=n(54887),i=n(95137),l=n(1091),a=n(13840),s=n(57437);let u=r.forwardRef(function(e,t){let{children:n,container:u,disablePortal:c=!1}=e,[d,f]=r.useState(null),p=(0,i.Z)(r.isValidElement(n)?n.ref:null,t);return((0,l.Z)(()=>{!c&&f(("function"==typeof u?u():u)||document.body)},[u,c]),(0,l.Z)(()=>{if(d&&!c)return(0,a.Z)(t,d),()=>{(0,a.Z)(t,null)}},[t,d,c]),c)?r.isValidElement(n)?r.cloneElement(n,{ref:p}):(0,s.jsx)(r.Fragment,{children:n}):(0,s.jsx)(r.Fragment,{children:d?o.createPortal(n,d):d})})},32484:function(e,t,n){n.d(t,{G:function(){return ariaHidden},g:function(){return ModalManager}});var r=n(96278),o=n(88221),i=n(60878);function ariaHidden(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function getPaddingRight(e){return parseInt((0,o.Z)(e).getComputedStyle(e).paddingRight,10)||0}function ariaHiddenSiblings(e,t,n,r,o){let i=[t,n,...r];[].forEach.call(e.children,e=>{let t=-1===i.indexOf(e),n=!function(e){let t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&ariaHidden(e,o)})}function findIndexOf(e,t){let n=-1;return e.some((e,r)=>!!t(e)&&(n=r,!0)),n}let ModalManager=class ModalManager{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&ariaHidden(e.modalRef,!1);let r=function(e){let t=[];return[].forEach.call(e.children,e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);ariaHiddenSiblings(t,e.mount,e.modalRef,r,!0);let o=findIndexOf(this.containers,e=>e.container===t);return -1!==o?this.containers[o].modals.push(e):this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n}mount(e,t){let n=findIndexOf(this.containers,t=>-1!==t.modals.indexOf(e)),l=this.containers[n];l.restore||(l.restore=function(e,t){let n=[],l=e.container;if(!t.disableScrollLock){let e;if(function(e){let t=(0,r.Z)(e);return t.body===e?(0,o.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(l)){let e=(0,i.Z)((0,r.Z)(l));n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${getPaddingRight(l)+e}px`;let t=(0,r.Z)(l).querySelectorAll(".mui-fixed");[].forEach.call(t,t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${getPaddingRight(t)+e}px`})}if(l.parentNode instanceof DocumentFragment)e=(0,r.Z)(l).body;else{let t=l.parentElement,n=(0,o.Z)(l);e=(null==t?void 0:t.nodeName)==="HTML"&&"scroll"===n.getComputedStyle(t).overflowY?t:l}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach(({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)})}}(l,t))}remove(e,t=!0){let n=this.modals.indexOf(e);if(-1===n)return n;let r=findIndexOf(this.containers,t=>-1!==t.modals.indexOf(e)),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&ariaHidden(e.modalRef,t),ariaHiddenSiblings(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=o.modals[o.modals.length-1];e.modalRef&&ariaHidden(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}},66344:function(e,t,n){n.d(t,{d:function(){return useModal}});var r=n(13428),o=n(2265),i=n(95137),l=n(96278),a=n(78136),s=n(62940),u=n(69125),c=n(32484);let d=new c.g;function useModal(e){let{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:f=!1,manager:p=d,closeAfterTransition:h=!1,onTransitionEnter:m,onTransitionExited:E,children:v,onClose:g,open:x,rootRef:b}=e,y=o.useRef({}),S=o.useRef(null),R=o.useRef(null),T=(0,i.Z)(R,b),[Z,O]=o.useState(!x),k=!!v&&v.props.hasOwnProperty("in"),N=!0;("false"===e["aria-hidden"]||!1===e["aria-hidden"])&&(N=!1);let getDoc=()=>(0,l.Z)(S.current),getModal=()=>(y.current.modalRef=R.current,y.current.mount=S.current,y.current),handleMounted=()=>{p.mount(getModal(),{disableScrollLock:f}),R.current&&(R.current.scrollTop=0)},C=(0,a.Z)(()=>{let e=("function"==typeof t?t():t)||getDoc().body;p.add(getModal(),e),R.current&&handleMounted()}),I=o.useCallback(()=>p.isTopModal(getModal()),[p]),P=(0,a.Z)(e=>{S.current=e,e&&(x&&I()?handleMounted():R.current&&(0,c.G)(R.current,N))}),w=o.useCallback(()=>{p.remove(getModal(),N)},[N,p]);o.useEffect(()=>()=>{w()},[w]),o.useEffect(()=>{x?C():k&&h||w()},[x,w,k,h,C]);let createHandleKeyDown=e=>t=>{var r;null==(r=e.onKeyDown)||r.call(e,t),"Escape"===t.key&&229!==t.which&&I()&&!n&&(t.stopPropagation(),g&&g(t,"escapeKeyDown"))},createHandleBackdropClick=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&g&&g(t,"backdropClick")};return{getRootProps:(t={})=>{let n=(0,u._)(e);delete n.onTransitionEnter,delete n.onTransitionExited;let o=(0,r.Z)({},n,t);return(0,r.Z)({role:"presentation"},o,{onKeyDown:createHandleKeyDown(o),ref:T})},getBackdropProps:(e={})=>(0,r.Z)({"aria-hidden":!0},e,{onClick:createHandleBackdropClick(e),open:x}),getTransitionProps:()=>({onEnter:(0,s.Z)(()=>{O(!1),m&&m()},null==v?void 0:v.props.onEnter),onExited:(0,s.Z)(()=>{O(!0),E&&E(),h&&w()},null==v?void 0:v.props.onExited)}),rootRef:T,portalRef:P,isTopModal:I,exited:Z,hasTransition:k}}},97406:function(e,t,n){n.d(t,{$:function(){return appendOwnerState}});var r=n(13428),o=n(85971);function appendOwnerState(e,t,n){return void 0===e||(0,o.X)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}},69125:function(e,t,n){n.d(t,{_:function(){return extractEventHandlers}});function extractEventHandlers(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}},9632:function(e,t,n){n.d(t,{L:function(){return mergeSlotProps}});var r=n(13428),o=n(57042),i=n(69125);function omitEventHandlers(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t}function mergeSlotProps(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:l,externalForwardedProps:a,className:s}=e;if(!t){let e=(0,o.Z)(null==n?void 0:n.className,s,null==a?void 0:a.className,null==l?void 0:l.className),t=(0,r.Z)({},null==n?void 0:n.style,null==a?void 0:a.style,null==l?void 0:l.style),i=(0,r.Z)({},n,a,l);return e.length>0&&(i.className=e),Object.keys(t).length>0&&(i.style=t),{props:i,internalRef:void 0}}let u=(0,i._)((0,r.Z)({},a,l)),c=omitEventHandlers(l),d=omitEventHandlers(a),f=t(u),p=(0,o.Z)(null==f?void 0:f.className,null==n?void 0:n.className,s,null==a?void 0:a.className,null==l?void 0:l.className),h=(0,r.Z)({},null==f?void 0:f.style,null==n?void 0:n.style,null==a?void 0:a.style,null==l?void 0:l.style),m=(0,r.Z)({},f,n,d,c);return p.length>0&&(m.className=p),Object.keys(h).length>0&&(m.style=h),{props:m,internalRef:f.ref}}},76390:function(e,t,n){n.d(t,{x:function(){return resolveComponentProps}});function resolveComponentProps(e,t,n){return"function"==typeof e?e(t,n):e}},85362:function(e,t,n){n.d(t,{y:function(){return useSlotProps}});var r=n(13428),o=n(20791),i=n(95137),l=n(97406),a=n(9632),s=n(76390);let u=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function useSlotProps(e){var t;let{elementType:n,externalSlotProps:c,ownerState:d,skipResolvingSlotProps:f=!1}=e,p=(0,o.Z)(e,u),h=f?{}:(0,s.x)(c,d),{props:m,internalRef:E}=(0,a.L)((0,r.Z)({},p,{externalSlotProps:h})),v=(0,i.Z)(E,null==h?void 0:h.ref,null==(t=e.additionalProps)?void 0:t.ref),g=(0,l.$)(n,(0,r.Z)({},m,{ref:v}),d);return g}},60878:function(e,t,n){n.d(t,{Z:function(){return getScrollbarSize}});function getScrollbarSize(e){let t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}},8236:function(e,t){Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context");/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.forward_ref"),r=(Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"));Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.ForwardRef=n,t.Memo=r},9176:function(e,t,n){e.exports=n(8236)},81870:function(e,t,n){n.d(t,{Ix:function(){return h},cn:function(){return p},d0:function(){return f}});var r=n(20791),o=n(63142),i=n(2265),l=n(54887),a=n(80478),s=n(54439),u=n(37295),c="unmounted",d="exited",f="entering",p="entered",h="exiting",m=function(e){function Transition(t,n){r=e.call(this,t,n)||this;var r,o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=d,r.appearStatus=f):o=p:o=t.unmountOnExit||t.mountOnEnter?c:d,r.state={status:o},r.nextCallback=null,r}(0,o.Z)(Transition,e),Transition.getDerivedStateFromProps=function(e,t){return e.in&&t.status===c?{status:d}:null};var t=Transition.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==p&&(t=f):(n===f||n===p)&&(t=h)}this.updateStatus(!1,t)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},t.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this);n&&(0,u.Q)(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},t.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[l.findDOMNode(this),r],i=o[0],s=o[1],u=this.getTimeouts(),c=r?u.appear:u.enter;if(!e&&!n||a.Z.disabled){this.safeSetState({status:p},function(){t.props.onEntered(i)});return}this.props.onEnter(i,s),this.safeSetState({status:f},function(){t.props.onEntering(i,s),t.onTransitionEnd(c,function(){t.safeSetState({status:p},function(){t.props.onEntered(i,s)})})})},t.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:l.findDOMNode(this);if(!t||a.Z.disabled){this.safeSetState({status:d},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:h},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:d},function(){e.props.onExited(r)})})})},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},t.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},t.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)},t.render=function(){var e=this.state.status;if(e===c)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,r.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(s.Z.Provider,{value:null},"function"==typeof n?n(e,o):i.cloneElement(i.Children.only(n),o))},Transition}(i.Component);function noop(){}m.contextType=s.Z,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},m.UNMOUNTED=c,m.EXITED=d,m.ENTERING=f,m.ENTERED=p,m.EXITING=h,t.ZP=m},80478:function(e,t){t.Z={disabled:!1}},37295:function(e,t,n){n.d(t,{Q:function(){return forceReflow}});var forceReflow=function(e){return e.scrollTop}}}]);