import{_ as M}from"./D2Tpn6t9.js";import{t as V,_ as L}from"./DJcnhTB4.js";import{_ as I}from"./D4sikeZf.js";import{c as O,_ as q,a as E,b as D,l as F}from"./Bb24Jn4c.js";import{_ as K}from"./DmMA0EZp.js";import{g as T,l as j,s as x,G as R,o as m,c as _,d as v,t as y,E as C,a as n,b as a,u as t,F as k,B as S,h as z,I as G,J as b,r as B,k as H,C as J,w as Q,N as U}from"./U1RcPqzo.js";import{_ as W}from"./DolexuPa.js";import{_ as A}from"./BAvapxKz.js";import{_ as X}from"./DuEOXC78.js";import{_ as P}from"./28dwIQUT.js";import{_ as Y}from"./CC02_q3p.js";import{s as Z,c as ee}from"./B7wNX0LU.js";import{_ as te}from"./BqHp9QE_.js";import{s as ne}from"./XcVnuA8r.js";import"./nSkn4H8N.js";const se={key:0},ae=n("span",{class:"muted"},"大会登録チーム名: ",-1),oe=n("span",{class:"muted"},"活動期間: ",-1),le=n("span",{class:"muted"},"メンバー(出場回数): ",-1),ie={class:"muted"},me=T({__name:"Info",props:{detail:{}},setup(p){const{detail:l}=p,o=j(),{tournaments:s}=x(o),h=R(()=>{if(l)return O(l.matches.map(e=>({key:e.tnmt_key,wl:e.wl===!0})),l.tournaments.map(e=>({key:e.tournament_key,result:e.result})),s.value)}),u=(e,c)=>e.slice().sort((r,d)=>c[d].count-c[r].count);return(e,c)=>{var $,i,g;const r=I,d=q,f=K;return m(),_("ul",null,[((i=($=e.detail.info)==null?void 0:$.aliases)==null?void 0:i.length)>0?(m(),_("li",se,[ae,v(" "+y((g=e.detail.info)==null?void 0:g.aliases.join(", ")),1)])):C("",!0),n("li",null,[oe,a(r,{date1:e.detail.team.first_tournament_date,date2:e.detail.team.latest_tournament_date},null,8,["date1","date2"])]),a(d,{resultsSum:t(h)},null,8,["resultsSum"]),n("li",null,[le,(m(!0),_(k,null,S(u(e.detail.players,e.detail.playerStats),(w,N)=>(m(),_("span",{key:w},[N!==0?(m(),_(k,{key:0},[v(", ")],64)):C("",!0),a(f,{name:w},null,8,["name"]),n("span",ie,"("+y(e.detail.playerStats[w].count)+")",1)]))),128))])])}}}),re={style:{width:"8em"}},_e=n("span",{class:"muted"},"r: ",-1),ce={class:"tac",style:{width:"2em"}},ue={class:"tac",style:{width:"4em"}},de={style:{width:"24em"}},pe={style:{width:"4em"}},he={style:{width:"48em"}},fe=T({__name:"Matches",props:{detail:{},tournament:{},index:{},show:{type:Boolean}},setup(p){const{detail:l,tournament:o,index:s,show:h}=p,u=l.matches.filter(e=>e.tnmt_key===o.tournament_key);return(e,c)=>{const r=E,d=Y,f=A,$=P;return m(!0),_(k,null,S(t(u),(i,g)=>z((m(),_("div",{class:b(["stc",("subContainerClass"in e?e.subContainerClass:t(Z))(g,e.index,t(u).length)]),key:`${i.bracket}_${i.round}`,style:{"margin-left":"0.5em",width:"calc(100% - 0.5em)"}},[n("div",re,[v(y(i.bracket)+" ",1),_e,v(y(i.round),1)]),n("div",ce,[a(r,{win:i.wl},null,8,["win"])]),n("div",ue,y(i.score_text),1),n("div",de,[a(d,{name:i.opponent_team_name,currentName:i.opponent_team_current_name},null,8,["name","currentName"])]),n("div",pe,[a(f,{rank:i.opponent_team_rank},null,8,["rank"])]),n("div",he,[a($,{names:i.opponents_list},null,8,["names"])])],2)),[[G,e.show]])),128)}}}),ye={style:{width:"2em","padding-left":"0.5em"}},$e={class:"tal",style:{width:"7em"}},ge={class:"tar",style:{width:"3em","padding-right":"4px"}},ke={style:{width:"32em"}},we={style:{width:"24em"}},ve={style:{width:"36em"}},Te=T({__name:"Tournament",props:{detail:{},tournament:{},i:{},openAll:{type:Boolean}},setup(p){const l=p,{detail:o,tournament:s,i:h}=l,u=B(!1),e=r=>{u.value=r},c=R(()=>u.value||l.openAll);return(r,d)=>{const f=D,$=W,i=A,g=X,w=P,N=fe;return m(),_(k,null,[n("div",ye,[a(f,{id:`tournaments-toggle-${t(h)}`,value:!1,onToggle:e},null,8,["id"])]),n("div",$e,[a($,{date:t(s).tournament_date,spacing:!0},null,8,["date"])]),n("div",ge,[a(i,{rank:t(s).result},null,8,["rank"])]),n("div",ke,[a(g,{name:t(s).tournament_name,tournamentKey:t(s).tournament_key},null,8,["name","tournamentKey"])]),n("div",we,y(t(s).name),1),n("div",ve,[a(w,{names:t(s).player_list},null,8,["names"])]),a(N,{detail:t(o),tournament:t(s),index:t(h),show:t(c)},null,8,["detail","tournament","index","show"])],64)}}}),Ce={style:{padding:"0 0 0.2em 0.5em"}},Ne=n("span",null,"All",-1),Se=T({__name:"Tournaments",props:{detail:{}},setup(p){const l=B(!1),o=s=>{l.value=s};return(s,h)=>{const u=D,e=Te;return m(),_(k,null,[n("div",Ce,[a(u,{id:"tournaments-all-toggle",value:!1,onToggle:o}),v(),Ne]),(m(!0),_(k,null,S(s.detail.tournaments,(c,r)=>(m(),_("div",{class:b(["tc",("containerClass"in s?s.containerClass:t(ee))(r)]),key:c.tournament_key},[a(e,{tournament:c,detail:s.detail,i:r,openAll:t(l)},null,8,["tournament","detail","i","openAll"])],2))),128))],64)}}}),Be={key:0},De=n("h2",null,"大会結果",-1),ze=T({__name:"detail",setup(p){const l=H(),o=B(null),s=async()=>{o.value=null,o.value=V(await U(l.query.m))};return ne(l.path),s(),F(s),(h,u)=>{const e=M,c=L,r=me,d=Se,f=te;return m(),_("div",null,[t(o)?(m(),J(f,{key:0},{default:Q(()=>[a(e,{title:`${t(o).team.name}: 戦績`},null,8,["title"]),n("h1",null,y(t(o).team.name),1),a(c,{current:"detail",m:t(l).query.m},null,8,["m"]),a(r,{detail:t(o)},null,8,["detail"]),t(o).tournaments.length>0?(m(),_("div",Be,[De,a(d,{detail:t(o)},null,8,["detail"])])):C("",!0)]),_:1})):C("",!0)])}}});export{ze as default};
