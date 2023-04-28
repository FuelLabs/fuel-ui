import"./Grid-6e47ed83.js";import{g as L,c as q,h as M,j as k,a as B}from"./system-5118686d.js";import{r as c}from"./index-8db94870.js";import"./index-1fd431dc.js";import{I as G}from"./IconButton-15e5222d.js";try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"ThemeUtilsCSS"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},autoColumns:{defaultValue:null,description:"Shorthand prop for `gridAutoColumns`",name:"autoColumns",required:!1,type:{name:'ThemeUtilsCSS["gridAutoColumns"] ;'}},autoRows:{defaultValue:null,description:"Shorthand prop for `gridAutoRows`",name:"autoRows",required:!1,type:{name:'ThemeUtilsCSS["gridAutoRows"] ;'}},column:{defaultValue:null,description:"Shorthand prop for `gridColumn`",name:"column",required:!1,type:{name:'ThemeUtilsCSS["gridColumn"] ;'}},direction:{defaultValue:null,description:"Shorthand prop for `gridAutoFlow`",name:"direction",required:!1,type:{name:'ThemeUtilsCSS["gridAutoFlow"] ;'}},gap:{defaultValue:null,description:"Shorthand prop for `gap`",name:"gap",required:!1,type:{name:'ThemeUtilsCSS["gap"] ;'}},row:{defaultValue:null,description:"Shorthand prop for `gridRow`",name:"row",required:!1,type:{name:'ThemeUtilsCSS["gridRow"] ;'}},templateAreas:{defaultValue:null,description:"Shorthand prop for `gridTemplateAreas`",name:"templateAreas",required:!1,type:{name:'ThemeUtilsCSS["gridTemplateAreas"] ;'}},templateColumns:{defaultValue:null,description:"Shorthand prop for `gridTemplateColumns`",name:"templateColumns",required:!1,type:{name:'ThemeUtilsCSS["gridTemplateColumns"] ;'}},templateRows:{defaultValue:null,description:"Shorthand prop for `gridTemplateRows`",name:"templateRows",required:!1,type:{name:'ThemeUtilsCSS["gridTemplateRows"] ;'}}}}}catch{}let H={data:""},W=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||H,X=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Y=/\/\*[^]*?\*\/|  +/g,V=/\n+/g,y=(e,t)=>{let a="",i="",o="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":i+=r[1]=="f"?y(n,r):r+"{"+y(n,r[1]=="k"?"":t)+"}":typeof n=="object"?i+=y(n,t?t.replace(/([^,])+/g,s=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=y.p?y.p(r,n):r+":"+n+";")}return a+(t&&o?t+"{"+o+"}":o)+i},x={},R=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+R(e[a]);return t}return e},Z=(e,t,a,i,o)=>{let r=R(e),n=x[r]||(x[r]=(s=>{let l=0,d=11;for(;l<s.length;)d=101*d+s.charCodeAt(l++)>>>0;return"go"+d})(r));if(!x[n]){let s=r!==e?e:(l=>{let d,u,m=[{}];for(;d=X.exec(l.replace(Y,""));)d[4]?m.shift():d[3]?(u=d[3].replace(V," ").trim(),m.unshift(m[0][u]=m[0][u]||{})):m[0][d[1]]=d[2].replace(V," ").trim();return m[0]})(e);x[n]=y(o?{["@keyframes "+n]:s}:s,a?"":"."+n)}return((s,l,d)=>{l.data.indexOf(s)==-1&&(l.data=d?s+l.data:l.data+s)})(x[n],t,i),n},J=(e,t,a)=>e.reduce((i,o,r)=>{let n=t[r];if(n&&n.call){let s=n(a),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;n=l?"."+l:s&&typeof s=="object"?s.props?"":y(s,""):s===!1?"":s}return i+o+(n??"")},"");function _(e){let t=this||{},a=e.call?e(t.p):e;return Z(a.unshift?a.raw?J(a,[].slice.call(arguments,1),t.p):a.reduce((i,o)=>Object.assign(i,o&&o.call?o(t.p):o),{}):a,W(t.target),t.g,t.o,t.k)}let z,N,I;_.bind({g:1});let g=_.bind({k:1});function Q(e,t,a,i){y.p=t,z=e,N=a,I=i}function h(e,t){let a=this||{};return function(){let i=arguments;function o(r,n){let s=Object.assign({},r),l=s.className||o.className;a.p=Object.assign({theme:N&&N()},s),a.o=/ *go\d+/.test(l),s.className=_.apply(a,i)+(l?" "+l:""),t&&(s.ref=n);let d=e;return e[0]&&(d=s.as||e,delete s.as),I&&d[0]&&I(s),z(d,s)}return t?t(o):o}}var K=e=>typeof e=="function",$=(e,t)=>K(e)?e(t):e,ee=(()=>{let e=0;return()=>(++e).toString()})(),D=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),te=20,C=new Map,ae=1e3,O=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),b({type:4,toastId:e})},ae);C.set(e,t)},re=e=>{let t=C.get(e);t&&clearTimeout(t)},j=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,te)};case 1:return t.toast.id&&re(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?j(e,{type:1,toast:a}):j(e,{type:0,toast:a});case 3:let{toastId:i}=t;return i?O(i):e.toasts.forEach(r=>{O(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},T=[],E={toasts:[],pausedAt:void 0},b=e=>{E=j(E,e),T.forEach(t=>{t(E)})},oe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},se=(e={})=>{let[t,a]=c.useState(E);c.useEffect(()=>(T.push(a),()=>{let o=T.indexOf(a);o>-1&&T.splice(o,1)}),[t]);let i=t.toasts.map(o=>{var r,n;return{...e,...e[o.type],...o,duration:o.duration||((r=e[o.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||oe[o.type],style:{...e.style,...(n=e[o.type])==null?void 0:n.style,...o.style}}});return{...t,toasts:i}},ie=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||ee()}),v=e=>(t,a)=>{let i=ie(t,e,a);return b({type:2,toast:i}),i.id},p=(e,t)=>v("blank")(e,t);p.error=v("error");p.success=v("success");p.loading=v("loading");p.custom=v("custom");p.dismiss=e=>{b({type:3,toastId:e})};p.remove=e=>b({type:4,toastId:e});p.promise=(e,t,a)=>{let i=p.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(o=>(p.success($(t.success,o),{id:i,...a,...a==null?void 0:a.success}),o)).catch(o=>{p.error($(t.error,o),{id:i,...a,...a==null?void 0:a.error})}),e};var ne=(e,t)=>{b({type:1,toast:{id:e,height:t}})},le=()=>{b({type:5,time:Date.now()})},de=e=>{let{toasts:t,pausedAt:a}=se(e);c.useEffect(()=>{if(a)return;let r=Date.now(),n=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(r-s.createdAt);if(l<0){s.visible&&p.dismiss(s.id);return}return setTimeout(()=>p.dismiss(s.id),l)});return()=>{n.forEach(s=>s&&clearTimeout(s))}},[t,a]);let i=c.useCallback(()=>{a&&b({type:6,time:Date.now()})},[a]),o=c.useCallback((r,n)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:d}=n||{},u=t.filter(f=>(f.position||d)===(r.position||d)&&f.height),m=u.findIndex(f=>f.id===r.id),w=u.filter((f,A)=>A<m&&f.visible).length;return u.filter(f=>f.visible).slice(...s?[w+1]:[0,w]).reduce((f,A)=>f+(A.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:ne,startPause:le,endPause:i,calculateOffset:o}}},ce=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,pe=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ue=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,me=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${pe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ue} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,fe=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ge=h("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${fe} 1s linear infinite;
`,ye=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,be=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ye} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,xe=h("div")`
  position: absolute;
`,ve=h("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,we=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Se=h("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${we} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ce=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?c.createElement(Se,null,t):t:a==="blank"?null:c.createElement(ve,null,c.createElement(ge,{...i}),a!=="loading"&&c.createElement(xe,null,a==="error"?c.createElement(me,{...i}):c.createElement(be,{...i})))},Te=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,$e="0%{opacity:0;} 100%{opacity:1;}",_e="0%{opacity:1;} 100%{opacity:0;}",Ae=h("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ke=h("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ne=(e,t)=>{let a=e.includes("top")?1:-1,[i,o]=D()?[$e,_e]:[Te(a),Ee(a)];return{animation:t?`${g(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F=c.memo(({toast:e,position:t,style:a,children:i})=>{let o=e.height?Ne(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(Ce,{toast:e}),n=c.createElement(ke,{...e.ariaProps},$(e.message,e));return c.createElement(Ae,{className:e.className,style:{...o,...a,...e.style}},typeof i=="function"?i({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});Q(c.createElement);var Ie=({id:e,className:t,style:a,onHeightUpdate:i,children:o})=>{let r=c.useCallback(n=>{if(n){let s=()=>{let l=n.getBoundingClientRect().height;i(e,l)};s(),new MutationObserver(s).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return c.createElement("div",{ref:r,className:t,style:a},o)},je=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...o}},qe=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,S=16,Ve=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:o,containerStyle:r,containerClassName:n})=>{let{toasts:s,handlers:l}=de(a);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:S,left:S,right:S,bottom:S,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(d=>{let u=d.position||t,m=l.calculateOffset(d,{reverseOrder:e,gutter:i,defaultPosition:t}),w=je(u,m);return c.createElement(Ie,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?qe:"",style:w},d.type==="custom"?$(d.message,d):o?o(d):c.createElement(F,{toast:d,position:u}))}))},Oe=p;const U=L(({className:e,position:t="bottom-right",...a})=>{const i=M("fuel_Toast",e,P.root());return k(Ve,{...a,position:t,children:o=>k(F,{toast:o,style:{...Ue,...o.style},children:({icon:r,message:n})=>B("div",{className:i,"data-state":o.visible?"opened":"closed",children:[r,n,o.type!=="loading"&&k(G,{autoFocus:!0,size:"xs","aria-label":"Close",iconSize:22,icon:"XCircle",intent:"base",variant:"link",className:P.closeButton(),onPress:()=>Oe.dismiss(o.id)})]})})})}),Ue={padding:0,boxShadow:"none",borderRadius:"0",background:"transparent"},P={root:q({layer:"layer-overlay",px:"$4",py:"$3",display:"flex",alignItems:"center",gap:"$4",color:"$overlayText",'& div[role="status"]':{m:"0",display:"-webkit-box",maxWidth:200,lineClamp:6,WebkitLineClamp:6,WebkitBoxOrient:"vertical",overflow:"hidden"},'.fuel_Icon[aria-label="Icon XCircle"]':{color:"$overlayText"}}),closeButton:q({alignSelf:"flex-start"})};try{U.displayName="ToastProvider",U.__docgenInfo={description:"",displayName:"ToastProvider",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"ThemeUtilsCSS"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{U as T,Oe as _};
//# sourceMappingURL=Toast-1931ee7f.js.map
