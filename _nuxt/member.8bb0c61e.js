import{_ as D,a as E,b as M}from"./client-only.39d340cc.js";import{t as S,_ as V}from"./team.5a946b5b.js";import{_ as q}from"./Name.vue_vue_type_script_setup_true_lang.0c9d049e.js";import{_ as A}from"./Name.vue_vue_type_script_setup_true_lang.49167d18.js";import{_ as R}from"./DateTime.vue_vue_type_script_setup_true_lang.8241312a.js";import{_ as O}from"./Name.vue_vue_type_script_setup_true_lang.2c46edac.js";import{a as F,e as P,s as K,A as x,o as a,f as l,h as s,M as L,u as o,F as v,w,t as T,v as h,c as C,q as k,i as N,b as j,r as z,I as H,B as I,N as G}from"./entry.aaf6cfe9.js";import{s as J}from"./ga.2f119fb9.js";import"./composables.4cbe8788.js";const Q=s("h2",null,"\u51FA\u5834\u30E1\u30F3\u30D0\u30FC",-1),U={style:{"overflow-y":"scroll"}},W=s("th",{style:{width:"12em"}},null,-1),X=s("th",{class:"tal",style:{width:"12em"}},"\u524D\u30C1\u30FC\u30E0",-1),Y=s("th",{class:"tal nw",style:{width:"12em"}},"\u6700\u65B0\u30C1\u30FC\u30E0",-1),Z={class:"tal"},ee={class:"tal"},te=["src"],ne={class:"tal"},ae={key:0},se=F({__name:"Member",props:{detail:null},setup(p){const{detail:u}=p,_=P(),{players:y}=K(_),c=x(()=>u.tournaments.slice().reverse()),g=x(()=>{var i;const r={};if(y.value)for(const t of u.players)r[t]=((i=y.value.filter(n=>n.name===t)[0])==null?void 0:i.latest.team_current)||"",r[t]===u.team.name&&(r[t]="");return r}),b=x(()=>{const r={};for(const t of u.players){r[t]=[];for(const[n,d]of c.value.entries())d.player_list.indexOf(t)!==-1&&r[t].push(n)}const i={};for(const t of u.players){i[t]=[];for(let n=0;n<c.value.length;n++){const d=r[t];let f="";const $=Math.min(...d),e=Math.max(...d),m=n===c.value.length-1;d.includes(n)?d.length===1?f=m?"one":"spot":$===n?f="start":e===n?f=m?"current":"end":f="on":$<n&&n<e&&(f="off"),i[t].push(f)}}return i});return(r,i)=>{const t=q,n=A,d=R,f=O,$=D;return a(),l(v,null,[Q,s("div",U,[s("table",{style:L({width:`${12+12+3*o(c).length+12+2}em`})},[s("thead",null,[s("tr",null,[W,X,(a(!0),l(v,null,w(o(c),(e,m)=>(a(),l("th",{class:"tac",style:{width:"3em","padding-left":"0","padding-right":"0","margin-left":"0","margin-right":"0"},key:m},T(m+1),1))),128)),Y])]),s("tbody",null,[(a(!0),l(v,null,w(p.detail.players,e=>(a(),l("tr",{key:e},[s("td",Z,[h(t,{name:e,page:"member"},null,8,["name"])]),s("td",ee,[p.detail.previous_teams[e]?(a(),C(n,{key:0,name:p.detail.previous_teams[e],currentName:p.detail.previous_teams[e],page:"member"},null,8,["name","currentName"])):k("",!0)]),(a(!0),l(v,null,w(o(b)[e],(m,B)=>(a(),l("td",{key:B,class:"tight"},[m!==""?(a(),l("img",{key:0,src:`/parts/${m}.svg`,style:{width:"3em",height:"2em"}},null,8,te)):k("",!0)]))),128)),s("td",ne,[o(g)[e]?(a(),l("span",ae,[o(g)[e]?(a(),C(n,{key:0,name:o(g)[e],currentName:o(g)[e],page:"member"},null,8,["name","currentName"])):k("",!0)])):k("",!0)])]))),128))])],4),s("ul",null,[(a(!0),l(v,null,w(o(c),(e,m)=>(a(),l("li",{key:m},[N(T(m+1)+". ",1),h(d,{date:e.tournament_date,spacing:!0},null,8,["date"]),N(" \xA0 "),h(f,{name:e.tournament_name,tournamentKey:e.tournament_key},null,8,["name","tournamentKey"]),N(" \xA0 ("),h($,{rank:e.result},null,8,["rank"]),N(") ")]))),128))])])],64)}}}),fe=F({__name:"member",setup(p){const u=j(),_=z(null),y=()=>{$fetch(`${G()}/team/${u.query.m}.json`).then(c=>{_.value=S(c)})};return H(()=>u.query,async()=>{_.value=null,await y()}),J(u.path),y(),(c,g)=>{const b=M,r=V,i=se,t=E;return a(),l("div",null,[o(_)?(a(),C(t,{key:0},{default:I(()=>[h(b,{title:`${o(_).team.name}: \u7DE8\u6210`},null,8,["title"]),s("h1",null,T(o(_).team.name),1),h(r,{current:"member",m:o(u).query.m},null,8,["m"]),h(i,{detail:o(_)},null,8,["detail"])]),_:1})):k("",!0)])}}});export{fe as default};
