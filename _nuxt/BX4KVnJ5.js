import{u as c}from"./D-7kcmbN.js";import{g as s,o as u,C as d,w as l,b as f,d as p,t as _}from"./B5n8RSh2.js";import{g as m}from"./Dv0AqNOf.js";const g=a=>{const e=Object.create(null);for(const n in a){const t=a[n];t!==void 0&&(e[n]=t)}return e},h=(a,e)=>(n,t)=>(c(()=>a({...g(n),...t.attrs},t)),()=>{var o,r;return e?(r=(o=t.slots).default)==null?void 0:r.call(o):null}),H=s({name:"Title",inheritAttrs:!1,setup:h((a,{slots:e})=>{var n,t,o;return{title:((o=(t=(n=e.default)==null?void 0:n.call(e))==null?void 0:t[0])==null?void 0:o.children)||null}})}),T=s({name:"Head",inheritAttrs:!1,setup:(a,e)=>()=>{var n,t;return(t=(n=e.slots).default)==null?void 0:t.call(n)}}),v=s({__name:"PageHead",props:{title:{}},setup(a){const{title:e}=a,n=`CP(g): ${e}`;return m(e),(t,o)=>{const r=H,i=T;return u(),d(i,null,{default:l(()=>[f(r,null,{default:l(()=>[p(_(n))]),_:1})]),_:1})}}});export{v as _};