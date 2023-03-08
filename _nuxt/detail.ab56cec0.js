import{_ as w,a as B,b as v}from"./client-only.5f5a81ec.js";import{_ as E}from"./DateTime.vue_vue_type_script_setup_true_lang.1cc64c42.js";import{a as k,o as n,b as o,m as _,G as f,f as r,t as m,e as s,F as y,h as C,j as F,u as h,l as N,r as g,N as x,c as D,J as R,S as T}from"./entry.2a0e6c98.js";import{_ as V}from"./Name.vue_vue_type_script_setup_true_lang.54b3fb8e.js";import{_ as A}from"./PlayersLine.vue_vue_type_script_setup_true_lang.1a4830af.js";import{c as P}from"./helpers.00b23f4d.js";import{s as S}from"./ga.140c80dd.js";import"./composables.d1ba93c3.js";import"./Name.vue_vue_type_script_setup_true_lang.d1569a4a.js";const q={key:0},I=s("span",{class:"muted"},"\u958B\u50AC\u65E5: ",-1),L={key:1},j=s("span",{class:"muted"},"\u5F62\u5F0F: ",-1),z={key:2},G=s("span",{class:"muted"},"\u5099\u8003: ",-1),H={key:3},J=["href"],O=k({__name:"Info",props:{detail:null},setup(e){return(d,l)=>{var t;const a=E;return n(),o("ul",null,[e.detail.tournament.date?(n(),o("li",q,[I,_(a,{date:e.detail.tournament.date},null,8,["date"])])):f("",!0),e.detail.data.type?(n(),o("li",L,[j,r(" "+m(e.detail.data.type)+" / "+m(e.detail.data.official?"\u516C\u5F0F":"\u975E\u516C\u5F0F")+" / "+m(e.detail.tournament.rating?"\u30EC\u30FC\u30C8\u8A08\u7B97\u5BFE\u8C61":"\u30EC\u30FC\u30C8\u8A08\u7B97\u975E\u5BFE\u8C61"),1)])):f("",!0),e.detail.data.note?(n(),o("li",z,[G,r(" "+m(e.detail.data.note),1)])):f("",!0),((t=e.detail.data.urls)==null?void 0:t.length)>0?(n(),o("li",H,[s("ul",null,[(n(!0),o(y,null,C(e.detail.data.urls,(u,c)=>(n(),o("li",{key:c},[s("i",{class:F(u.icon)},null,2),r(),s("a",{href:u.url},m(u.title),9,J)]))),128))])])):f("",!0)])}}}),K={class:"ti tar",style:{width:"3em"}},M={class:"ti",style:{width:"24em"}},Q={class:"ti",style:{width:"5em"}},U=s("span",{class:"muted"},"\u52DD",-1),W=s("span",{class:"muted"},"\u6557",-1),X={class:"ti",style:{width:"48em"}},Y=k({__name:"Result",props:{detail:null},setup(e){const d=l=>l.sort((a,t)=>{let u=a.team_rank-t.team_rank;if(u!==0)return u;let c=((a==null?void 0:a.lose)||0)-((t==null?void 0:t.lose)||0);return c!==0?c:((a==null?void 0:a.win)||0)-((t==null?void 0:t.win)||0)});return(l,a)=>{const t=w,u=V,c=A;return n(!0),o(y,null,C(d(e.detail.teams),(i,p)=>(n(),o("div",{class:F(["tc",h(P)(p)]),key:i.team_key},[s("div",K,[_(t,{rank:i.team_rank},null,8,["rank"]),r(". ")]),s("div",M,[_(u,{name:i.team_name,currentName:i.team_current_name},null,8,["name","currentName"])]),s("div",Q,[i.win!==0||i.lose!==0?(n(),o(y,{key:0},[r(m(i.win)+" ",1),U,r(" "+m(i.lose)+" ",1),W],64)):(n(),o(y,{key:1},[r("-")],64))]),s("div",X,[_(c,{names:i.members},null,8,["names"])])],2))),128)}}}),it=k({__name:"detail",setup(e){const d=N(),l=g(null),a=()=>{T((d.query.t||"").toString()).then(t=>{l.value=t})};return S(d.path),x(()=>d.query,async()=>{l.value=null,await a()}),a(),(t,u)=>{const c=v,i=O,p=Y,$=B;return n(),o("div",null,[h(l)?(n(),D($,{key:0},{default:R(()=>[_(c,{title:h(l).tournament.name},null,8,["title"]),s("h1",null,m(h(l).tournament.name),1),_(i,{detail:h(l)},null,8,["detail"]),_(p,{detail:h(l)},null,8,["detail"])]),_:1})):f("",!0)])}}});export{it as default};
