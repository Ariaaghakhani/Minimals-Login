"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{57852:function(e,t,n){n.d(t,{Z:function(){return E}});var o=n(20791),r=n(13428),i=n(2265),l=n(57042),a=n(95600),s=n(35843),u=n(87927),c=n(81870),d=n(41101),p=n(4439),f=n(37663),m=n(57437);let v=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],h={entering:{opacity:1},entered:{opacity:1}},g=i.forwardRef(function(e,t){let n=(0,d.Z)(),l={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:a,appear:s=!0,children:u,easing:g,in:y,onEnter:b,onEntered:Z,onEntering:x,onExit:C,onExited:E,onExiting:P,style:k,timeout:T=l,TransitionComponent:M=c.ZP}=e,w=(0,o.Z)(e,v),R=i.useRef(null),z=(0,f.Z)(R,u.ref,t),normalizedTransitionCallback=e=>t=>{if(e){let n=R.current;void 0===t?e(n):e(n,t)}},S=normalizedTransitionCallback(x),F=normalizedTransitionCallback((e,t)=>{(0,p.n)(e);let o=(0,p.C)({style:k,timeout:T,easing:g},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",o),e.style.transition=n.transitions.create("opacity",o),b&&b(e,t)}),j=normalizedTransitionCallback(Z),D=normalizedTransitionCallback(P),I=normalizedTransitionCallback(e=>{let t=(0,p.C)({style:k,timeout:T,easing:g},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),C&&C(e)}),N=normalizedTransitionCallback(E);return(0,m.jsx)(M,(0,r.Z)({appear:s,in:y,nodeRef:R,onEnter:F,onEntered:j,onEntering:S,onExit:I,onExited:N,onExiting:D,addEndListener:e=>{a&&a(R.current,e)},timeout:T},w,{children:(e,t)=>i.cloneElement(u,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||y?void 0:"hidden"},h[e],k,u.props.style),ref:z},t))}))});var y=n(26520),b=n(25702);function getBackdropUtilityClass(e){return(0,b.Z)("MuiBackdrop",e)}(0,y.Z)("MuiBackdrop",["root","invisible"]);let Z=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],useUtilityClasses=e=>{let{classes:t,invisible:n}=e;return(0,a.Z)({root:["root",n&&"invisible"]},getBackdropUtilityClass,t)},x=(0,s.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),C=i.forwardRef(function(e,t){var n,i,a;let s=(0,u.Z)({props:e,name:"MuiBackdrop"}),{children:c,className:d,component:p="div",components:f={},componentsProps:v={},invisible:h=!1,open:y,slotProps:b={},slots:C={},TransitionComponent:E=g,transitionDuration:P}=s,k=(0,o.Z)(s,Z),T=(0,r.Z)({},s,{component:p,invisible:h}),M=useUtilityClasses(T),w=null!=(n=b.root)?n:v.root;return(0,m.jsx)(E,(0,r.Z)({in:y,timeout:P},k,{children:(0,m.jsx)(x,(0,r.Z)({"aria-hidden":!0},w,{as:null!=(i=null!=(a=C.root)?a:f.Root)?i:p,className:(0,l.Z)(M.root,d,null==w?void 0:w.className),ownerState:(0,r.Z)({},T,null==w?void 0:w.ownerState),classes:M,ref:t,children:c}))}))});var E=C},10280:function(e,t,n){n.d(t,{Z:function(){return ee}});var o=n(13428),r=n(20791),i=n(2265);n(9176);var l=n(57042),a=n(95600),s=n(85362),u=n(53931),c=n(35266),d=n(60878).Z,p=n(37663),f=n(57613),m=n(57437);let v=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function nextItem(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function previousItem(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function textCriteriaMatches(e,t){if(void 0===t)return!0;let n=e.innerText;return void 0===n&&(n=e.textContent),0!==(n=n.trim().toLowerCase()).length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function moveFocus(e,t,n,o,r,i){let l=!1,a=r(e,t,!!t&&n);for(;a;){if(a===e.firstChild){if(l)return!1;l=!0}let t=!o&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&textCriteriaMatches(a,i)&&!t)return a.focus(),!0;a=r(e,a,n)}return!1}let h=i.forwardRef(function(e,t){let{actions:n,autoFocus:l=!1,autoFocusItem:a=!1,children:s,className:h,disabledItemsFocusable:g=!1,disableListWrap:y=!1,onKeyDown:b,variant:Z="selectedMenu"}=e,x=(0,r.Z)(e,v),C=i.useRef(null),E=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,f.Z)(()=>{l&&C.current.focus()},[l]),i.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(e,t)=>{let n=!C.current.style.width;if(e.clientHeight<C.current.clientHeight&&n){let n=`${d((0,u.Z)(e))}px`;C.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,C.current.style.width=`calc(100% + ${n})`}return C.current}}),[]);let P=(0,p.Z)(C,t),k=-1;i.Children.forEach(s,(e,t)=>{if(!i.isValidElement(e)){k===t&&(k+=1)>=s.length&&(k=-1);return}e.props.disabled||("selectedMenu"===Z&&e.props.selected?k=t:-1!==k||(k=t)),k===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(k+=1)>=s.length&&(k=-1)});let T=i.Children.map(s,(e,t)=>{if(t===k){let t={};return a&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===Z&&(t.tabIndex=0),i.cloneElement(e,t)}return e});return(0,m.jsx)(c.Z,(0,o.Z)({role:"menu",ref:P,className:h,onKeyDown:e=>{let t=C.current,n=e.key,o=(0,u.Z)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),moveFocus(t,o,y,g,nextItem);else if("ArrowUp"===n)e.preventDefault(),moveFocus(t,o,y,g,previousItem);else if("Home"===n)e.preventDefault(),moveFocus(t,null,y,g,nextItem);else if("End"===n)e.preventDefault(),moveFocus(t,null,y,g,previousItem);else if(1===n.length){let r=E.current,i=n.toLowerCase(),l=performance.now();r.keys.length>0&&(l-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&i!==r.keys[0]&&(r.repeating=!1)),r.lastTime=l,r.keys.push(i);let a=o&&!r.repeating&&textCriteriaMatches(o,r);r.previousKeyMatched&&(a||moveFocus(t,o,!1,g,nextItem,r))?e.preventDefault():r.previousKeyMatched=!1}b&&b(e)},tabIndex:l?0:-1},x,{children:T}))});var g=n(85971),y=n(35843),b=n(87927),Z=n(80494),x=n(26649),C=n(81870),E=n(41101),P=n(4439);let k=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function getScale(e){return`scale(${e}, ${e**2})`}let T={entering:{opacity:1,transform:getScale(1)},entered:{opacity:1,transform:"none"}},M="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),w=i.forwardRef(function(e,t){let{addEndListener:n,appear:l=!0,children:a,easing:s,in:u,onEnter:c,onEntered:d,onEntering:f,onExit:v,onExited:h,onExiting:g,style:y,timeout:b="auto",TransitionComponent:Z=C.ZP}=e,x=(0,r.Z)(e,k),w=i.useRef(),R=i.useRef(),z=(0,E.Z)(),S=i.useRef(null),F=(0,p.Z)(S,a.ref,t),normalizedTransitionCallback=e=>t=>{if(e){let n=S.current;void 0===t?e(n):e(n,t)}},j=normalizedTransitionCallback(f),D=normalizedTransitionCallback((e,t)=>{let n;(0,P.n)(e);let{duration:o,delay:r,easing:i}=(0,P.C)({style:y,timeout:b,easing:s},{mode:"enter"});"auto"===b?(n=z.transitions.getAutoHeightDuration(e.clientHeight),R.current=n):n=o,e.style.transition=[z.transitions.create("opacity",{duration:n,delay:r}),z.transitions.create("transform",{duration:M?n:.666*n,delay:r,easing:i})].join(","),c&&c(e,t)}),I=normalizedTransitionCallback(d),N=normalizedTransitionCallback(g),L=normalizedTransitionCallback(e=>{let t;let{duration:n,delay:o,easing:r}=(0,P.C)({style:y,timeout:b,easing:s},{mode:"exit"});"auto"===b?(t=z.transitions.getAutoHeightDuration(e.clientHeight),R.current=t):t=n,e.style.transition=[z.transitions.create("opacity",{duration:t,delay:o}),z.transitions.create("transform",{duration:M?t:.666*t,delay:M?o:o||.333*t,easing:r})].join(","),e.style.opacity=0,e.style.transform=getScale(.75),v&&v(e)}),O=normalizedTransitionCallback(h);return i.useEffect(()=>()=>{clearTimeout(w.current)},[]),(0,m.jsx)(Z,(0,o.Z)({appear:l,in:u,nodeRef:S,onEnter:D,onEntered:I,onEntering:j,onExit:L,onExited:O,onExiting:N,addEndListener:e=>{"auto"===b&&(w.current=setTimeout(e,R.current||0)),n&&n(S.current,e)},timeout:"auto"===b?null:b},x,{children:(e,t)=>i.cloneElement(a,(0,o.Z)({style:(0,o.Z)({opacity:0,transform:getScale(.75),visibility:"exited"!==e||u?void 0:"hidden"},T[e],y,a.props.style),ref:F},t))}))});w.muiSupportAuto=!0;var R=n(66344),z=n(43423),S=n(4609),F=n(57852),j=n(26520),D=n(25702);function getModalUtilityClass(e){return(0,D.Z)("MuiModal",e)}(0,j.Z)("MuiModal",["root","hidden","backdrop"]);let I=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],useUtilityClasses=e=>{let{open:t,exited:n,classes:o}=e;return(0,a.Z)({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},getModalUtilityClass,o)},N=(0,y.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>(0,o.Z)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),L=(0,y.ZP)(F.Z,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),O=i.forwardRef(function(e,t){var n,a,u,c,d,p;let f=(0,b.Z)({name:"MuiModal",props:e}),{BackdropComponent:v=L,BackdropProps:h,className:g,closeAfterTransition:y=!1,children:Z,container:x,component:C,components:E={},componentsProps:P={},disableAutoFocus:k=!1,disableEnforceFocus:T=!1,disableEscapeKeyDown:M=!1,disablePortal:w=!1,disableRestoreFocus:F=!1,disableScrollLock:j=!1,hideBackdrop:D=!1,keepMounted:O=!1,onBackdropClick:A,open:H,slotProps:U,slots:B}=f,K=(0,r.Z)(f,I),_=(0,o.Z)({},f,{closeAfterTransition:y,disableAutoFocus:k,disableEnforceFocus:T,disableEscapeKeyDown:M,disablePortal:w,disableRestoreFocus:F,disableScrollLock:j,hideBackdrop:D,keepMounted:O}),{getRootProps:W,getBackdropProps:$,getTransitionProps:V,portalRef:X,isTopModal:Y,exited:q,hasTransition:G}=(0,R.d)((0,o.Z)({},_,{rootRef:t})),J=(0,o.Z)({},_,{exited:q}),Q=useUtilityClasses(J),ee={};if(void 0===Z.props.tabIndex&&(ee.tabIndex="-1"),G){let{onEnter:e,onExited:t}=V();ee.onEnter=e,ee.onExited=t}let et=null!=(n=null!=(a=null==B?void 0:B.root)?a:E.Root)?n:N,en=null!=(u=null!=(c=null==B?void 0:B.backdrop)?c:E.Backdrop)?u:v,eo=null!=(d=null==U?void 0:U.root)?d:P.root,er=null!=(p=null==U?void 0:U.backdrop)?p:P.backdrop,ei=(0,s.y)({elementType:et,externalSlotProps:eo,externalForwardedProps:K,getSlotProps:W,additionalProps:{ref:t,as:C},ownerState:J,className:(0,l.Z)(g,null==eo?void 0:eo.className,null==Q?void 0:Q.root,!J.open&&J.exited&&(null==Q?void 0:Q.hidden))}),el=(0,s.y)({elementType:en,externalSlotProps:er,additionalProps:h,getSlotProps:e=>$((0,o.Z)({},e,{onClick:t=>{A&&A(t),null!=e&&e.onClick&&e.onClick(t)}})),className:(0,l.Z)(null==er?void 0:er.className,null==h?void 0:h.className,null==Q?void 0:Q.backdrop),ownerState:J});return O||H||G&&!q?(0,m.jsx)(S.h,{ref:X,container:x,disablePortal:w,children:(0,m.jsxs)(et,(0,o.Z)({},ei,{children:[!D&&v?(0,m.jsx)(en,(0,o.Z)({},el)):null,(0,m.jsx)(z.i,{disableEnforceFocus:T,disableAutoFocus:k,disableRestoreFocus:F,isEnabled:Y,open:H,children:i.cloneElement(Z,ee)})]}))}):null});var A=n(29872);function getPopoverUtilityClass(e){return(0,D.Z)("MuiPopover",e)}(0,j.Z)("MuiPopover",["root","paper"]);let H=["onEntering"],U=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],B=["slotProps"];function getOffsetTop(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function getOffsetLeft(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function getTransformOriginValue(e){return[e.horizontal,e.vertical].map(e=>"number"==typeof e?`${e}px`:e).join(" ")}function resolveAnchorEl(e){return"function"==typeof e?e():e}let Popover_useUtilityClasses=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"]},getPopoverUtilityClass,t)},K=(0,y.ZP)(O,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),_=(0,y.ZP)(A.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),W=i.forwardRef(function(e,t){var n,a,c;let d=(0,b.Z)({props:e,name:"MuiPopover"}),{action:f,anchorEl:v,anchorOrigin:h={vertical:"top",horizontal:"left"},anchorPosition:y,anchorReference:C="anchorEl",children:E,className:P,container:k,elevation:T=8,marginThreshold:M=16,open:R,PaperProps:z={},slots:S,slotProps:F,transformOrigin:j={vertical:"top",horizontal:"left"},TransitionComponent:D=w,transitionDuration:I="auto",TransitionProps:{onEntering:N}={},disableScrollLock:L=!1}=d,O=(0,r.Z)(d.TransitionProps,H),A=(0,r.Z)(d,U),W=null!=(n=null==F?void 0:F.paper)?n:z,$=i.useRef(),V=(0,p.Z)($,W.ref),X=(0,o.Z)({},d,{anchorOrigin:h,anchorReference:C,elevation:T,marginThreshold:M,externalPaperSlotProps:W,transformOrigin:j,TransitionComponent:D,transitionDuration:I,TransitionProps:O}),Y=Popover_useUtilityClasses(X),q=i.useCallback(()=>{if("anchorPosition"===C)return y;let e=resolveAnchorEl(v),t=e&&1===e.nodeType?e:(0,u.Z)($.current).body,n=t.getBoundingClientRect();return{top:n.top+getOffsetTop(n,h.vertical),left:n.left+getOffsetLeft(n,h.horizontal)}},[v,h.horizontal,h.vertical,y,C]),G=i.useCallback(e=>({vertical:getOffsetTop(e,j.vertical),horizontal:getOffsetLeft(e,j.horizontal)}),[j.horizontal,j.vertical]),J=i.useCallback(e=>{let t={width:e.offsetWidth,height:e.offsetHeight},n=G(t);if("none"===C)return{top:null,left:null,transformOrigin:getTransformOriginValue(n)};let o=q(),r=o.top-n.vertical,i=o.left-n.horizontal,l=r+t.height,a=i+t.width,s=(0,x.Z)(resolveAnchorEl(v)),u=s.innerHeight-M,c=s.innerWidth-M;if(null!==M&&r<M){let e=r-M;r-=e,n.vertical+=e}else if(null!==M&&l>u){let e=l-u;r-=e,n.vertical+=e}if(null!==M&&i<M){let e=i-M;i-=e,n.horizontal+=e}else if(a>c){let e=a-c;i-=e,n.horizontal+=e}return{top:`${Math.round(r)}px`,left:`${Math.round(i)}px`,transformOrigin:getTransformOriginValue(n)}},[v,C,q,G,M]),[Q,ee]=i.useState(R),et=i.useCallback(()=>{let e=$.current;if(!e)return;let t=J(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,ee(!0)},[J]);i.useEffect(()=>(L&&window.addEventListener("scroll",et),()=>window.removeEventListener("scroll",et)),[v,L,et]),i.useEffect(()=>{R&&et()}),i.useImperativeHandle(f,()=>R?{updatePosition:()=>{et()}}:null,[R,et]),i.useEffect(()=>{if(!R)return;let e=(0,Z.Z)(()=>{et()}),t=(0,x.Z)(v);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}},[v,R,et]);let en=I;"auto"!==I||D.muiSupportAuto||(en=void 0);let eo=k||(v?(0,u.Z)(resolveAnchorEl(v)).body:void 0),er=null!=(a=null==S?void 0:S.root)?a:K,ei=null!=(c=null==S?void 0:S.paper)?c:_,el=(0,s.y)({elementType:ei,externalSlotProps:(0,o.Z)({},W,{style:Q?W.style:(0,o.Z)({},W.style,{opacity:0})}),additionalProps:{elevation:T,ref:V},ownerState:X,className:(0,l.Z)(Y.paper,null==W?void 0:W.className)}),ea=(0,s.y)({elementType:er,externalSlotProps:(null==F?void 0:F.root)||{},externalForwardedProps:A,additionalProps:{ref:t,slotProps:{backdrop:{invisible:!0}},container:eo,open:R},ownerState:X,className:(0,l.Z)(Y.root,P)}),{slotProps:es}=ea,eu=(0,r.Z)(ea,B);return(0,m.jsx)(er,(0,o.Z)({},eu,!(0,g.X)(er)&&{slotProps:es,disableScrollLock:L},{children:(0,m.jsx)(D,(0,o.Z)({appear:!0,in:R,onEntering:(e,t)=>{N&&N(e,t),et()},onExited:()=>{ee(!1)},timeout:en},O,{children:(0,m.jsx)(ei,(0,o.Z)({},el,{children:E}))}))}))});function getMenuUtilityClass(e){return(0,D.Z)("MuiMenu",e)}(0,j.Z)("MuiMenu",["root","paper","list"]);let $=["onEntering"],V=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],X={vertical:"top",horizontal:"right"},Y={vertical:"top",horizontal:"left"},Menu_useUtilityClasses=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"],list:["list"]},getMenuUtilityClass,t)},q=(0,y.ZP)(W,{shouldForwardProp:e=>(0,y.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),G=(0,y.ZP)(_,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),J=(0,y.ZP)(h,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Q=i.forwardRef(function(e,t){var n,a;let u=(0,b.Z)({props:e,name:"MuiMenu"}),{autoFocus:c=!0,children:d,className:p,disableAutoFocusItem:f=!1,MenuListProps:v={},onClose:h,open:g,PaperProps:y={},PopoverClasses:Z,transitionDuration:x="auto",TransitionProps:{onEntering:C}={},variant:P="selectedMenu",slots:k={},slotProps:T={}}=u,M=(0,r.Z)(u.TransitionProps,$),w=(0,r.Z)(u,V),R=(0,E.Z)(),z="rtl"===R.direction,S=(0,o.Z)({},u,{autoFocus:c,disableAutoFocusItem:f,MenuListProps:v,onEntering:C,PaperProps:y,transitionDuration:x,TransitionProps:M,variant:P}),F=Menu_useUtilityClasses(S),j=c&&!f&&g,D=i.useRef(null),I=-1;i.Children.map(d,(e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===P&&e.props.selected?I=t:-1!==I||(I=t)))});let N=null!=(n=k.paper)?n:G,L=null!=(a=T.paper)?a:y,O=(0,s.y)({elementType:k.root,externalSlotProps:T.root,ownerState:S,className:[F.root,p]}),A=(0,s.y)({elementType:N,externalSlotProps:L,ownerState:S,className:F.paper});return(0,m.jsx)(q,(0,o.Z)({onClose:h,anchorOrigin:{vertical:"bottom",horizontal:z?"right":"left"},transformOrigin:z?X:Y,slots:{paper:N,root:k.root},slotProps:{root:O,paper:A},open:g,ref:t,transitionDuration:x,TransitionProps:(0,o.Z)({onEntering:(e,t)=>{D.current&&D.current.adjustStyleForScrollbar(e,R),C&&C(e,t)}},M),ownerState:S},w,{classes:Z,children:(0,m.jsx)(J,(0,o.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),h&&h(e,"tabKeyDown"))},actions:D,autoFocus:c&&(-1===I||f),autoFocusItem:j,variant:P},v,{className:(0,l.Z)(F.list,v.className),children:d}))}))});var ee=Q},4439:function(e,t,n){n.d(t,{C:function(){return getTransitionProps},n:function(){return reflow}});let reflow=e=>e.scrollTop;function getTransitionProps(e,t){var n,o;let{timeout:r,easing:i,style:l={}}=e;return{duration:null!=(n=l.transitionDuration)?n:"number"==typeof r?r:r[t.mode]||0,easing:null!=(o=l.transitionTimingFunction)?o:"object"==typeof i?i[t.mode]:i,delay:l.transitionDelay}}}}]);