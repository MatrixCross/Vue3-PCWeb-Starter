import{b as C,x as b,f as P,d as R,g as w,j as k,h as H,k as j,G as f,m as p,H as A,J as E}from"./index.e1148c28.js";import{u as L}from"./use-houdini.8402e48f.js";const N=e=>{const{heightSmall:r,heightMedium:s,heightLarge:t,borderRadius:n}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:n,heightSmall:r,heightMedium:s,heightLarge:t}},O={name:"Skeleton",common:C,self:N};var T=b([P("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),b("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]);const $=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}});var I=R({name:"Skeleton",inheritAttrs:!1,props:$,setup(e){L();const{mergedClsPrefixRef:r}=w(e),s=k("Skeleton","-skeleton",T,O,e,r);return{mergedClsPrefix:r,style:H(()=>{var t,n;const a=s.value,{common:{cubicBezierEaseInOut:v}}=a,m=a.self,{color:y,colorEnd:z,borderRadius:x}=m;let i;const{circle:l,sharp:_,round:B,width:o,height:c,size:g,text:h,animated:S}=e;g!==void 0&&(i=m[j("height",g)]);const d=l?(t=o!=null?o:c)!==null&&t!==void 0?t:i:o,u=(n=l&&o!=null?o:c)!==null&&n!==void 0?n:i;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":B?"4096px":_?"":x,width:typeof d=="number"?f(d):d,height:typeof u=="number"?f(u):u,animation:S?"":"none","--n-bezier":v,"--n-color-start":y,"--n-color-end":z}})}},render(){const{repeat:e,style:r,mergedClsPrefix:s,$attrs:t}=this,n=p("div",A({class:`${s}-skeleton`,style:r},t));return e>1?p(E,null,Array.apply(null,{length:e}).map(a=>[n,`
`])):n}});export{I as _};
