import{_ as R,a as V,b as j}from"./client-only.730e02ed.js";import{_ as q}from"./NaviLink.vue_vue_type_script_setup_true_lang.2516c52d.js";import{_ as z,a as H,l as K,c as G}from"./qeuryWatcher.d362a447.js";import{_ as Q}from"./SocialAccounts.vue_vue_type_script_setup_true_lang.380fca8e.js";import{_ as E}from"./DateTime.vue_vue_type_script_setup_true_lang.6636f931.js";import{_ as M}from"./Name.vue_vue_type_script_setup_true_lang.9c756b1a.js";import{a as T,r as D,o as c,b as r,f as $,t as y,D as v,m as a,e,F as k,h as P,u as t,w as J,E as U,j as B,G as L,y as W,z as X,l as Y,c as Z,H as F,I as tt}from"./entry.c14f5ebc.js";import{_ as O}from"./ToggleButton.vue_vue_type_script_setup_true_lang.b1561a59.js";import{_ as et}from"./Name.vue_vue_type_script_setup_true_lang.454fab61.js";import{_ as I}from"./PlayersLine.vue_vue_type_script_setup_true_lang.3a409c79.js";import{s as nt,c as at,r as st}from"./helpers.be1e473b.js";import{s as lt}from"./ga.87d72440.js";import"./composables.281940ba.js";import"./Name.vue_vue_type_script_setup_true_lang.dc620888.js";const ot={key:0},ut=e("span",{class:"muted"},"\u5927\u4F1A\u51FA\u5834\u540D: ",-1),ct={key:1},it=e("span",{class:"muted"},"ratings: ",-1),rt={key:2},mt=e("span",{class:"muted"},"url: ",-1),_t=e("span",{class:"muted"},"\u30C1\u30FC\u30E0",-1),dt={class:"muted"},pt=T({__name:"Info",props:{detail:null,resultsSum:null},setup(s){const{detail:h,resultsSum:f}=s,n=m=>{const o={};for(const u of m.tournaments){const p=u.team_current_name;o[p]?(o[p].count+=1,o[p].lastMatchAt=Math.max(u.tournament_date,o[p].lastMatchAt)):o[p]={name:p,count:1,lastMatchAt:u.tournament_date}}return Object.values(o).sort(u=>-u.lastMatchAt)},l=()=>{_.value=!0},_=D(!1),d=n(h);return(m,o)=>{var g,S,A,C,N;const u=z,p=Q,w=E,i=M;return c(),r("ul",null,[((S=(g=s.detail.player.data)==null?void 0:g.aliases)==null?void 0:S.length)>0?(c(),r("li",ot,[ut,$(" "+y(s.detail.player.data.aliases.join(", ")),1)])):v("",!0),a(u,{resultsSum:s.resultsSum},null,8,["resultsSum"]),s.detail.player.rating?(c(),r("li",ct,[it,$(" "+y(s.detail.player.rating.toLocaleString()),1)])):v("",!0),s.detail.player.data?(c(),r("li",rt,[mt,a(p,{twitter:(A=s.detail.player.data)==null?void 0:A.twitter,youtube:(C=s.detail.player.data)==null?void 0:C.youtube,twitch:(N=s.detail.player.data)==null?void 0:N.twitch},null,8,["twitter","youtube","twitch"])])):v("",!0),e("li",null,[_t,e("ul",null,[(c(!0),r(k,null,P(t(d),(x,b)=>(c(),r("li",{key:x.name},[t(d).length<=3||b===0||b===t(d).length-1||t(_)?(c(),r(k,{key:0},[e("span",dt,[a(w,{date:x.lastMatchAt,spacing:!0},null,8,["date"])]),$("\xA0 "),a(i,{name:x.name,currentName:x.name},null,8,["name","currentName"]),$(" ("+y(x.count)+") ",1)],64)):v("",!0),!t(_)&&t(d).length>=3&&b===1?(c(),r("button",{key:1,class:"muted",onClick:l}," /* \u4ED6"+y(t(d).length-2)+"\u30C1\u30FC\u30E0 */ ",1)):v("",!0)]))),128))])])])}}});const ht={class:"ti",style:{width:"8em","padding-left":"0.5em"}},yt=e("span",{class:"muted"},"r: ",-1),ft={class:"ti tac",style:{width:"2em"}},gt={class:"ti tac",style:{width:"4em"}},$t={class:"ti",style:{width:"24em"}},wt={class:"ti",style:{width:"4em"}},vt={class:"ti",style:{width:"48em"}},kt=T({__name:"Matches",props:{detail:null,tournament:null,index:null,show:{type:Boolean}},setup(s){const{detail:h,tournament:f,index:n,show:l}=s,_=h.matches.filter(d=>d.tnmt_key===f.tournament_key);return(d,m)=>{const o=H,u=M,p=R,w=I;return c(!0),r(k,null,P(t(_),(i,g)=>J((c(),r("div",{class:B(["stc",t(nt)(g,s.index,t(_).length)]),key:`${i.bracket}_${i.round}`,style:{"margin-left":"0.5em",width:"calc(100% - 0.5em)"}},[e("div",ht,[$(y(i.bracket)+" ",1),yt,$(y(i.round),1)]),e("div",ft,[a(o,{win:i.wl},null,8,["win"])]),e("div",gt,y(i.score_text),1),e("div",$t,[a(u,{name:i.opponent_team_name,currentName:i.opponent_team_current_name},null,8,["name","currentName"])]),e("div",wt,[a(p,{rank:i.opponent_team_rank},null,8,["rank"])]),e("div",vt,[a(w,{names:i.opponents_list},null,8,["names"])])],2)),[[U,s.show]])),128)}}}),xt={class:"ti",style:{width:"2em","padding-left":"0.5em"}},Tt={class:"ti tal",style:{width:"7em"}},St={class:"ti tar",style:{width:"3em","padding-right":"4px"}},At={class:"ti",style:{width:"32em"}},Ct={class:"ti",style:{width:"18em"}},Nt={class:"ti",style:{width:"36em"}},Dt={class:"ti",style:{width:"12em"}},bt=e("span",{class:"muted"},"\u{1F4C8}",-1),Mt={class:"muted"},Pt=T({__name:"Tournament",props:{detail:null,tournament:null,i:null,openAll:{type:Boolean}},setup(s){const h=s,{detail:f,tournament:n,i:l}=h,_=D(!1),d=u=>{_.value=u},m=L(()=>_.value||h.openAll),o=u=>u==null?"-":u.toLocaleString();return(u,p)=>{const w=O,i=E,g=R,S=et,A=M,C=I,N=kt;return c(),r(k,null,[e("div",xt,[a(w,{id:`tournaments-toggle-${t(l)}`,value:!1,onToggle:d},null,8,["id"])]),e("div",Tt,[a(i,{date:t(n).tournament_date,spacing:!0},null,8,["date"])]),e("div",St,[a(g,{rank:t(n).team_result},null,8,["rank"])]),e("div",At,[a(S,{name:t(n).tournament_name,tournamentKey:t(n).tournament_key},null,8,["name","tournamentKey"])]),e("div",Ct,[a(A,{name:t(n).team_name,currentName:t(n).team_current_name},null,8,["name","currentName"])]),e("div",Nt,[a(C,{names:t(n).mate_list},null,8,["names"])]),e("div",Dt,[bt,$(" "+y(o(t(n).rating))+" ",1),e("span",Mt,"("+y(o(t(n).rank))+"\u4F4D / "+y(o(t(n).total))+"\u4EBA)",1)]),a(N,{detail:t(f),tournament:t(n),index:t(l),show:t(m)},null,8,["detail","tournament","index","show"])],64)}}}),Bt={style:{padding:"0 0 0.2em 0.5em"}},Ft=e("span",null,"All",-1),Rt=T({__name:"Tournaments",props:{detail:null},setup(s){const h=D(!1),f=n=>{h.value=n};return(n,l)=>{const _=O,d=Pt;return c(),r(k,null,[e("div",Bt,[a(_,{id:"tournaments-all-toggle",value:!1,onToggle:f}),$(),Ft]),(c(!0),r(k,null,P(s.detail.tournaments,(m,o)=>(c(),r("div",{class:B(["tc",t(at)(o)]),key:m.tournament_key},[a(d,{tournament:m,detail:s.detail,i:o,openAll:t(h)},null,8,["tournament","detail","i","openAll"])],2))),128))],64)}}}),Et={key:0},Lt=e("h2",null,"\u5927\u4F1A\u7D50\u679C",-1),Yt=T({__name:"detail",setup(s){const h=W(),{tournaments:f}=X(h),n=Y(),l=D(null),_=async()=>{l.value=null,l.value=await tt((n.query.p||"").toString())},d=L(()=>{if(l.value)return G(l.value.matches.map(m=>({key:m.tnmt_key,wl:m.wl===!0})),l.value.tournaments.map(m=>({key:m.tournament_key,result:m.team_result})),f.value)});return lt(n.path),_(),K(_),(m,o)=>{const u=j,p=q,w=pt,i=Rt,g=V;return c(),r("div",null,[t(l)?(c(),Z(g,{key:0},{fallback:F(()=>[]),default:F(()=>[a(u,{title:`${t(l).player.collated_name}: \u6226\u7E3E`},null,8,["title"]),e("h1",{class:B(t(st)(t(l).player.collated_name))},y(t(l).player.collated_name),3),a(p,{current:"detail",p:t(n).query.p},null,8,["p"]),a(w,{detail:t(l),resultsSum:t(d)},null,8,["detail","resultsSum"]),t(l).tournaments.length>0?(c(),r("div",Et,[Lt,a(i,{detail:t(l)},null,8,["detail"])])):v("",!0)]),_:1})):v("",!0)])}}});export{Yt as default};
