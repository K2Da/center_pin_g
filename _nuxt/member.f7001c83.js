import{_ as C,a as D}from"./ResultRank.vue.1ed89791.js";import{t as M,_ as R}from"./team.14454ca0.js";import{_ as q}from"./Name.vue.fcce3d52.js";import{_ as K}from"./Name.vue.0d3c86ea.js";import{_ as O}from"./DateTime.vue.f4b35e49.js";import{_ as P}from"./Name.vue.a0e84955.js";import{a as V,s as F,x as H,H as T,o as a,e as l,f as s,J as L,u as o,F as k,r as w,t as b,h,c as S,D as v,y as N,j,l as z,K as E,k as J,i as A}from"./entry.e08aeb02.js";import{_ as G}from"./client-only.8cf1c00f.js";import{s as I}from"./ga.83aa9966.js";const Q=s("h2",null,"出場メンバー",-1),U={style:{"overflow-y":"scroll"}},W=s("th",{style:{width:"12em"}},null,-1),X=s("th",{class:"tal",style:{width:"12em"}},"前チーム",-1),Y=s("th",{class:"tal nw",style:{width:"12em"}},"最新チーム",-1),Z={class:"tal"},ee={class:"tal"},te=["src"],ne={class:"tal"},ae={key:0},se=V({__name:"Member",props:{detail:null},setup(p){const{detail:c}=p,_=F(),{players:y}=H(_),i=T(()=>c.tournaments.slice().reverse()),g=T(()=>{var u;const r={};if(y.value)for(const t of c.players)r[t]=((u=y.value.filter(n=>n.name===t)[0])==null?void 0:u.latest.team_current)||"",r[t]===c.team.name&&(r[t]="");return r}),x=T(()=>{const r={};for(const t of c.players){r[t]=[];for(const[n,d]of i.value.entries())d.player_list.indexOf(t)!==-1&&r[t].push(n)}const u={};for(const t of c.players){u[t]=[];for(let n=0;n<i.value.length;n++){const d=r[t];let f="";const $=Math.min(...d),e=Math.max(...d),m=n===i.value.length-1;d.includes(n)?d.length===1?f=m?"one":"spot":$===n?f="start":e===n?f=m?"current":"end":f="on":$<n&&n<e&&(f="off"),u[t].push(f)}}return u});return(r,u)=>{const t=q,n=K,d=O,f=P,$=C;return a(),l(k,null,[Q,s("div",U,[s("table",{style:L({width:`${12+12+3*o(i).length+12+2}em`})},[s("thead",null,[s("tr",null,[W,X,(a(!0),l(k,null,w(o(i),(e,m)=>(a(),l("th",{class:"tac",style:{width:"3em","padding-left":"0","padding-right":"0","margin-left":"0","margin-right":"0"},key:m},b(m+1),1))),128)),Y])]),s("tbody",null,[(a(!0),l(k,null,w(p.detail.players,e=>(a(),l("tr",{key:e},[s("td",Z,[h(t,{name:e,page:"member"},null,8,["name"])]),s("td",ee,[p.detail.previous_teams[e]?(a(),S(n,{key:0,name:p.detail.previous_teams[e],currentName:p.detail.previous_teams[e],page:"member"},null,8,["name","currentName"])):v("",!0)]),(a(!0),l(k,null,w(o(x)[e],(m,B)=>(a(),l("td",{key:B,class:"tight"},[m!==""?(a(),l("img",{key:0,src:`/parts/${m}.svg`,style:{width:"3em",height:"2em"}},null,8,te)):v("",!0)]))),128)),s("td",ne,[o(g)[e]?(a(),l("span",ae,[o(g)[e]?(a(),S(n,{key:0,name:o(g)[e],currentName:o(g)[e],page:"member"},null,8,["name","currentName"])):v("",!0)])):v("",!0)])]))),128))])],4),s("ul",null,[(a(!0),l(k,null,w(o(i),(e,m)=>(a(),l("li",{key:m},[N(b(m+1)+". ",1),h(d,{date:e.tournament_date,spacing:!0},null,8,["date"]),N("   "),h(f,{name:e.tournament_name,tournamentKey:e.tournament_key},null,8,["name","tournamentKey"]),N("   ("),h($,{rank:e.result},null,8,["rank"]),N(") ")]))),128))])])],64)}}}),fe=V({__name:"member",setup(p){const c=j(),_=z(null),y=()=>{$fetch(`${A()}/team/${c.query.m}`).then(i=>{_.value=M(i)})};return E(()=>c.query,async()=>{_.value=null,await y()}),I(c.path),y(),(i,g)=>{const x=D,r=R,u=se,t=G;return a(),l("div",null,[o(_)?(a(),S(t,{key:0},{default:J(()=>[h(x,{title:`${o(_).team.name}: 編成`},null,8,["title"]),s("h1",null,b(o(_).team.name),1),h(r,{current:"member",m:o(c).query.m},null,8,["m"]),h(u,{detail:o(_)},null,8,["detail"])]),_:1})):v("",!0)])}}});export{fe as default};
