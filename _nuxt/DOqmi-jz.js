import{_ as C}from"./d4diwJkH.js";import $ from"./HWBndCJa.js";import w from"./DULmYVG-.js";import{g as y,y as D,D as N,o as t,c as e,A as p,b as r,w as v,a as o,t as c,E as f,F as _,d as T,u as V,k as A}from"./Dad8qJzO.js";import{q as B}from"./DYEkULYP.js";import{s as E}from"./fs1Hpm0k.js";import"./Bwwhw7SK.js";import"./BsYmvPZw.js";import"./Bc18giav.js";import"./BO7R4pd-.js";import"./BMzHghEx.js";const F={class:"attr"},b=o("span",{class:"muted"},"更新",-1),q={key:0},L={key:0},P=["href"],R=y({__name:"list",async setup(x){let s,u;const{data:l}=([s,u]=D(()=>N(()=>B("/topic").where({updated:{$exists:!0}}).sort({updated:-1}).find(),"$fFzQy4xJl0")),s=await s,u(),s);return(i,J)=>{const d=C,g=$,k=w;return t(!0),e(_,null,p(V(l),n=>(t(),e("div",{key:n._path},[r(k,{path:n._path,head:!1},{default:v(({doc:Q})=>{var m;return[o("article",null,[o("h3",null,c(n.title),1),o("p",F,[r(d,{date:n.updated},null,8,["date"]),b,((m=n.dates)==null?void 0:m.length)??0?(t(),e("strong",q," | ")):f("",!0),(t(!0),e(_,null,p(n.dates,(a,h)=>(t(),e("span",{key:h},[h>0?(t(),e("strong",L," | ")):f("",!0),T(" "+c(a.title)+":",1),r(d,{date:a.date},null,8,["date"])]))),128))]),o("ul",null,[(t(!0),e(_,null,p(n.urls,a=>(t(),e("li",{key:a.url,style:{margin:"0 0 0 16px"}},[o("a",{href:a.url,target:"_blank"},c(a.title),9,P)]))),128))]),r(g,{value:n},null,8,["value"])])]}),_:2},1032,["path"])]))),128)}}}),z=o("h1",null,"トピック",-1),I={style:{margin:"8px"}},Z=y({__name:"index",setup(x){const s=A();return E(s.path,"Topic","Pokémon UNITE大会結果収集サイト","site"),(u,l)=>{const i=R;return t(),e(_,null,[z,o("div",I,[r(i)])],64)}}});export{Z as default};