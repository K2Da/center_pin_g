import{_ as g}from"./BX4KVnJ5.js";import{_ as v}from"./BitRGKqf.js";import{g as y,o,c as r,b as d,E as f,d as c,t as _,a as l,F as h,B as $,J as w,u as p,k as N,r as B,M as R,C as T,w as D,Q as V}from"./B5n8RSh2.js";import{_ as P}from"./wrHZ_Rk1.js";import{_ as q}from"./C7Bg6YGv.js";import{_ as E}from"./CUnpn4pZ.js";import{c as F}from"./Dobhlv_l.js";import{_ as I}from"./CQFzBKkj.js";import{s as L}from"./Dv0AqNOf.js";import"./D-7kcmbN.js";import"./DvbG3mse.js";const S={key:0},z=l("span",{class:"muted"},"開催日: ",-1),H={key:1},J=l("span",{class:"muted"},"形式: ",-1),M={key:2},O=l("span",{class:"muted"},"備考: ",-1),Q={key:3},j=["href"],A=y({__name:"Info",props:{detail:{}},setup(k){return(e,n)=>{var t;const s=v;return o(),r("ul",null,[e.detail.tournament.date?(o(),r("li",S,[z,d(s,{date:e.detail.tournament.date},null,8,["date"])])):f("",!0),e.detail.data.type?(o(),r("li",H,[J,c(" "+_(e.detail.data.type)+" / "+_(e.detail.data.official?"公式":"非公式")+" / "+_(e.detail.tournament.rating?"レート計算対象":"レート計算非対象"),1)])):f("",!0),e.detail.data.note?(o(),r("li",M,[O,c(" "+_(e.detail.data.note),1)])):f("",!0),((t=e.detail.data.urls)==null?void 0:t.length)>0?(o(),r("li",Q,[l("ul",null,[(o(!0),r(h,null,$(e.detail.data.urls,(i,m)=>(o(),r("li",{key:m},[l("i",{class:w(i.icon)},null,2),c(),l("a",{href:i.url},_(i.title),9,j)]))),128))])])):f("",!0)])}}}),G={class:"tar",style:{width:"4em"}},K={style:{width:"24em"}},U={style:{width:"5em"}},W=l("span",{class:"muted"},"勝",-1),X=l("span",{class:"muted"},"敗",-1),Y={style:{width:"48em"}},Z=y({__name:"Result",props:{detail:{}},setup(k){const e=n=>n.sort((s,t)=>{let i=s.team_rank,m=t.team_rank;i===0&&(i=99999),m===0&&(m=99999);let a=i-m;if(a!==0)return a;let u=((s==null?void 0:s.lose)||0)-((t==null?void 0:t.lose)||0);return u!==0?u:((s==null?void 0:s.win)||0)-((t==null?void 0:t.win)||0)});return(n,s)=>{const t=P,i=q,m=E;return o(!0),r(h,null,$(e(n.detail.teams),(a,u)=>(o(),r("div",{class:w(["tc",("containerClass"in n?n.containerClass:p(F))(u)]),key:a.team_key},[l("div",G,[d(t,{rank:a.team_rank},null,8,["rank"]),c(". ")]),l("div",K,[d(i,{name:a.team_name,currentName:a.team_current_name},null,8,["name","currentName"])]),l("div",U,[a.win!==0||a.lose!==0?(o(),r(h,{key:0},[c(_(a.win)+" ",1),W,c(" "+_(a.lose)+" ",1),X],64)):(o(),r(h,{key:1},[c("-")],64))]),l("div",Y,[d(m,{names:a.members},null,8,["names"])])],2))),128)}}}),me=y({__name:"detail",setup(k){const e=N(),n=B(null),s=()=>{V((e.query.t||"").toString()).then(t=>{n.value=t})};return L(e.path),R(()=>e.query,async()=>{n.value=null,await s()}),s(),(t,i)=>{const m=g,a=A,u=Z,C=I;return o(),r("div",null,[p(n)?(o(),T(C,{key:0},{default:D(()=>[d(m,{title:p(n).tournament.name},null,8,["title"]),l("h1",null,_(p(n).tournament.name),1),d(a,{detail:p(n)},null,8,["detail"]),d(u,{detail:p(n)},null,8,["detail"])]),_:1})):f("",!0)])}}});export{me as default};