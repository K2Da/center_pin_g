import{_ as F}from"./PageHead.vue_vue_type_script_setup_true_lang.385bd708.js";import{_ as B}from"./TeamNaviLink.vue_vue_type_script_setup_true_lang.cc7f059d.js";import{_ as A}from"./PlayerName.vue_vue_type_script_setup_true_lang.85344b47.js";import{_ as D}from"./TeamName.vue_vue_type_script_setup_true_lang.064986e2.js";import{_ as V}from"./TournamentName.vue_vue_type_script_setup_true_lang.6a3db060.js";import{_ as q}from"./ResultRank.vue_vue_type_script_setup_true_lang.dcf836f2.js";import{_ as E}from"./DateTime.vue_vue_type_script_setup_true_lang.4cb7bf4c.js";import{a as T,z as w,K as C,o as a,e as o,f as s,N as M,u as _,F as y,r as N,t as x,q as h,c as b,p as g,h as $,v as O,b as K,y as P,A as R,s as S,B as z,O as L,C as j}from"./entry.48111f46.js";const H=s("h2",null,"\u51FA\u5834\u30E1\u30F3\u30D0\u30FC",-1),G={style:{"overflow-y":"scroll"}},I=s("th",{style:{width:"12em"}},null,-1),J=s("th",{class:"tal",style:{width:"12em"}},"\u524D\u30C1\u30FC\u30E0",-1),Q=s("th",{class:"tal nw",style:{width:"12em"}},"\u6700\u65B0\u30C1\u30FC\u30E0",-1),U={class:"tal"},W={class:"tal"},X=["src"],Y={class:"tal"},Z={key:0},ee=$(" \xA0 "),te=$(" \xA0 ("),ne=$(") "),ae=T({__name:"TeamDetailMember",props:{detail:null},setup(p){const{detail:f}=p,r=w(()=>f.tournaments.slice().reverse()),m=w(()=>{var d;const l={};if(C.value)for(const n of f.players)l[n]=((d=C.value.filter(t=>t.name===n)[0])==null?void 0:d.latest.team_current)||"",l[n]===f.team.name&&(l[n]="");return l}),v=w(()=>{const l={};for(const n of f.players){l[n]=[];for(const[t,c]of r.value.entries())c.player_list.indexOf(n)!==-1&&l[n].push(t)}const d={};for(const n of f.players){d[n]=[];for(let t=0;t<r.value.length;t++){const c=l[n];let i="";const e=Math.min(...c),u=Math.max(...c),k=t===r.value.length-1;c.includes(t)?c.length===1?i=k?"one":"spot":e===t?i="start":u===t?i=k?"current":"end":i="on":e<t&&t<u&&(i="off"),d[n].push(i)}}return d});return(l,d)=>{const n=A,t=D,c=V,i=q;return a(),o(y,null,[H,s("div",G,[s("table",{style:M({width:`${12+12+3*_(r).length+12+2}em`})},[s("thead",null,[s("tr",null,[I,J,(a(!0),o(y,null,N(_(r),(e,u)=>(a(),o("th",{class:"tac",style:{width:"3em","padding-left":"0","padding-right":"0","margin-left":"0","margin-right":"0"},key:u},x(u+1),1))),128)),Q])]),s("tbody",null,[(a(!0),o(y,null,N(p.detail.players,e=>(a(),o("tr",{key:e},[s("td",U,[h(n,{name:e,page:"member"},null,8,["name"])]),s("td",W,[p.detail.previous_teams[e]?(a(),b(t,{key:0,name:p.detail.previous_teams[e],currentName:p.detail.previous_teams[e],page:"member"},null,8,["name","currentName"])):g("",!0)]),(a(!0),o(y,null,N(_(v)[e],(u,k)=>(a(),o("td",{key:k,class:"tight"},[u!==""?(a(),o("img",{key:0,src:`/parts/${u}.svg`,style:{width:"3em",height:"2em"}},null,8,X)):g("",!0)]))),128)),s("td",Y,[_(m)[e]?(a(),o("span",Z,[_(m)[e]?(a(),b(t,{key:0,name:_(m)[e],currentName:_(m)[e],page:"member"},null,8,["name","currentName"])):g("",!0)])):g("",!0)])]))),128))])],4),s("ul",null,[(a(!0),o(y,null,N(_(r),(e,u)=>(a(),o("li",{key:u},[$(x(u+1)+". ",1),h(E,{date:e.tournament_date,spacing:!0},null,8,["date"]),ee,h(c,{name:e.tournament_name,tournamentKey:e.tournament_key},null,8,["name","tournamentKey"]),te,h(i,{rank:e.result},null,8,["rank"]),ne]))),128))])])],64)}}}),_e=T({__name:"member",setup(p){const{$host:f}=O(),r=K(),m=P(null),v=()=>{$fetch(`${f()}/team/${r.query.m}.json`).then(l=>{m.value=L(l)})};return R(()=>r.query,async()=>{m.value=null,await v()}),S(r.path),v(),(l,d)=>{const n=F,t=B,c=ae,i=j;return a(),o("div",null,[m.value?(a(),b(i,{key:0},{default:z(()=>[h(n,{title:m.value.team.name},null,8,["title"]),s("h1",null,x(m.value.team.name),1),h(t,{current:"member",m:_(r).query.m},null,8,["m"]),h(c,{detail:m.value},null,8,["detail"])]),_:1})):g("",!0)])}}});export{_e as default};
