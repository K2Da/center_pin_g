import{_ as L,a as q}from"./ResultRank.vue.00a45a78.js";import{_ as E}from"./NaviLink.vue.757a5259.js";import{_ as F,a as H,b as O,l as K,c as z}from"./qeuryWatcher.55665422.js";import{_ as G}from"./SocialAccounts.vue.826f8e16.js";import{_ as I}from"./DateTime.vue.7be479e0.js";import{_ as M,s as Q,c as J,r as U}from"./Name.vue.dd7df92e.js";import{a as T,l as A,o as r,e as _,y as f,t as h,D as w,h as a,f as e,F as k,r as P,u as t,m as W,E as X,G as R,H as V,s as Y,x as Z,j as tt,c as et,k as B,I as nt}from"./entry.a01039ba.js";import{_ as at}from"./Name.vue.f9d2f822.js";import{_ as j}from"./PlayersLine.vue.5287a87e.js";import{_ as st}from"./client-only.e7c67537.js";import{s as lt}from"./ga.6a566649.js";import"./Name.vue.26465448.js";const ot={key:0},ct=e("span",{class:"muted"},"大会出場名: ",-1),it={key:1},rt=e("span",{class:"muted"},"ratings: ",-1),ut={key:2},mt=e("span",{class:"muted"},"url: ",-1),_t=e("span",{class:"muted"},"チーム",-1),dt={class:"muted"},pt=T({__name:"Info",props:{detail:null,resultsSum:null},setup(s){const{detail:y,resultsSum:g}=s,n=o=>{const c={};for(const i of o.tournaments){const p=i.team_current_name;c[p]?(c[p].count+=1,c[p].lastMatchAt=Math.max(i.tournament_date,c[p].lastMatchAt)):c[p]={name:p,count:1,lastMatchAt:i.tournament_date}}return Object.values(c).sort(i=>-i.lastMatchAt)},l=()=>{d.value=!0},d=A(!1),u=n(y);return(o,c)=>{var $,S,N,b,x;const i=F,p=G,v=I,m=M;return r(),_("ul",null,[((S=($=s.detail.player.data)==null?void 0:$.aliases)==null?void 0:S.length)>0?(r(),_("li",ot,[ct,f(" "+h(s.detail.player.data.aliases.join(", ")),1)])):w("",!0),a(i,{resultsSum:s.resultsSum},null,8,["resultsSum"]),s.detail.player.rating?(r(),_("li",it,[rt,f(" "+h(s.detail.player.rating.toLocaleString()),1)])):w("",!0),s.detail.player.data?(r(),_("li",ut,[mt,a(p,{twitter:(N=s.detail.player.data)==null?void 0:N.twitter,youtube:(b=s.detail.player.data)==null?void 0:b.youtube,twitch:(x=s.detail.player.data)==null?void 0:x.twitch},null,8,["twitter","youtube","twitch"])])):w("",!0),e("li",null,[_t,e("ul",null,[(r(!0),_(k,null,P(t(u),(C,D)=>(r(),_("li",{key:C.name},[t(u).length<=3||D===0||D===t(u).length-1||t(d)?(r(),_(k,{key:0},[e("span",dt,[a(v,{date:C.lastMatchAt,spacing:!0},null,8,["date"])]),f("  "),a(m,{name:C.name,currentName:C.name},null,8,["name","currentName"]),f(" ("+h(C.count)+") ",1)],64)):w("",!0),!t(d)&&t(u).length>=3&&D===1?(r(),_("button",{key:1,class:"muted",onClick:l}," /* 他"+h(t(u).length-2)+"チーム */ ",1)):w("",!0)]))),128))])])])}}});const ht={class:"ti",style:{width:"8em","padding-left":"0.5em"}},yt=e("span",{class:"muted"},"r: ",-1),ft={class:"ti tac",style:{width:"2em"}},gt={class:"ti tac",style:{width:"4em"}},$t={class:"ti",style:{width:"24em"}},vt={class:"ti",style:{width:"4em"}},wt={class:"ti",style:{width:"48em"}},kt=T({__name:"Matches",props:{detail:null,tournament:null,index:null,show:{type:Boolean}},setup(s){const{detail:y,tournament:g,index:n,show:l}=s,d=y.matches.filter(u=>u.tnmt_key===g.tournament_key);return(u,o)=>{const c=H,i=M,p=L,v=j;return r(!0),_(k,null,P(t(d),(m,$)=>W((r(),_("div",{class:R(["stc",("subContainerClass"in u?u.subContainerClass:t(Q))($,s.index,t(d).length)]),key:`${m.bracket}_${m.round}`,style:{"margin-left":"0.5em",width:"calc(100% - 0.5em)"}},[e("div",ht,[f(h(m.bracket)+" ",1),yt,f(h(m.round),1)]),e("div",ft,[a(c,{win:m.wl},null,8,["win"])]),e("div",gt,h(m.score_text),1),e("div",$t,[a(i,{name:m.opponent_team_name,currentName:m.opponent_team_current_name},null,8,["name","currentName"])]),e("div",vt,[a(p,{rank:m.opponent_team_rank},null,8,["rank"])]),e("div",wt,[a(v,{names:m.opponents_list},null,8,["names"])])],2)),[[X,s.show]])),128)}}}),Ct={class:"ti",style:{width:"2em","padding-left":"0.5em"}},Tt={class:"ti tal",style:{width:"7em"}},St={class:"ti tar",style:{width:"3em","padding-right":"4px"}},Nt={class:"ti",style:{width:"32em"}},bt={class:"ti",style:{width:"18em"}},xt={class:"ti",style:{width:"36em"}},At={class:"ti",style:{width:"12em"}},Dt=e("span",{class:"muted"},"📈",-1),Mt={class:"muted"},Pt=T({__name:"Tournament",props:{detail:null,tournament:null,i:null,openAll:{type:Boolean}},setup(s){const y=s,{detail:g,tournament:n,i:l}=y,d=A(!1),u=i=>{d.value=i},o=V(()=>d.value||y.openAll),c=i=>i==null?"-":i.toLocaleString();return(i,p)=>{const v=O,m=I,$=L,S=at,N=M,b=j,x=kt;return r(),_(k,null,[e("div",Ct,[a(v,{id:`tournaments-toggle-${t(l)}`,value:!1,onToggle:u},null,8,["id"])]),e("div",Tt,[a(m,{date:t(n).tournament_date,spacing:!0},null,8,["date"])]),e("div",St,[a($,{rank:t(n).team_result},null,8,["rank"])]),e("div",Nt,[a(S,{name:t(n).tournament_name,tournamentKey:t(n).tournament_key},null,8,["name","tournamentKey"])]),e("div",bt,[a(N,{name:t(n).team_name,currentName:t(n).team_current_name},null,8,["name","currentName"])]),e("div",xt,[f(h(t(n).member_name)+", ",1),a(b,{names:t(n).mate_list},null,8,["names"])]),e("div",At,[Dt,f(" "+h(c(t(n).rating))+" ",1),e("span",Mt,"("+h(c(t(n).rank))+"位 / "+h(c(t(n).total))+"人)",1)]),a(x,{detail:t(g),tournament:t(n),index:t(l),show:t(o)},null,8,["detail","tournament","index","show"])],64)}}}),Rt={style:{padding:"0 0 0.2em 0.5em"}},Bt=e("span",null,"All",-1),Lt=T({__name:"Tournaments",props:{detail:null},setup(s){const y=A(!1),g=n=>{y.value=n};return(n,l)=>{const d=O,u=Pt;return r(),_(k,null,[e("div",Rt,[a(d,{id:"tournaments-all-toggle",value:!1,onToggle:g}),f(),Bt]),(r(!0),_(k,null,P(s.detail.tournaments,(o,c)=>(r(),_("div",{class:R(["tc",("containerClass"in n?n.containerClass:t(J))(c)]),key:o.tournament_key},[a(u,{tournament:o,detail:s.detail,i:c,openAll:t(y)},null,8,["tournament","detail","i","openAll"])],2))),128))],64)}}}),Ot={key:0},It=e("h2",null,"大会結果",-1),Wt=T({__name:"detail",setup(s){const y=Y(),{tournaments:g}=Z(y),n=tt(),l=A(null),d=async()=>{l.value=null,l.value=await nt((n.query.p||"").toString())},u=V(()=>{if(l.value)return z(l.value.matches.map(o=>({key:o.tnmt_key,wl:o.wl===!0})),l.value.tournaments.map(o=>({key:o.tournament_key,result:o.team_result})),g.value)});return lt(n.path),d(),K(d),(o,c)=>{const i=q,p=E,v=pt,m=Lt,$=st;return r(),_("div",null,[t(l)?(r(),et($,{key:0},{fallback:B(()=>[]),default:B(()=>[a(i,{title:`${t(l).player.collated_name}: 戦績`},null,8,["title"]),e("h1",{class:R(("ratingClass"in o?o.ratingClass:t(U))(t(l).player.collated_name))},h(t(l).player.collated_name),3),a(p,{current:"detail",p:t(n).query.p},null,8,["p"]),a(v,{detail:t(l),resultsSum:t(u)},null,8,["detail","resultsSum"]),t(l).tournaments.length>0?(r(),_("div",Ot,[It,a(m,{detail:t(l)},null,8,["detail"])])):w("",!0)]),_:1})):w("",!0)])}}});export{Wt as default};