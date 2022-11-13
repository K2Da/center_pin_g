import{_ as D,a as M}from"./ResultRank.vue_vue_type_script_setup_true_lang.8721436d.js";import{_ as B}from"./PlayerNaviLink.vue_vue_type_script_setup_true_lang.5d429744.js";import{_ as E,a as L}from"./MatchResult.vue_vue_type_script_setup_true_lang.1a967f5f.js";import{_ as R}from"./SocialAccounts.vue_vue_type_script_setup_true_lang.6f438593.js";import{_ as A}from"./DateTime.vue_vue_type_script_setup_true_lang.fd1de381.js";import{_ as x}from"./TeamName.vue_vue_type_script_setup_true_lang.d5715093.js";import{a as N,o as _,e as r,h as p,t as m,p as v,q as a,f as t,F as C,r as g,v as S,w as T,u as w,x as V,b as q,y as I,z as j,A as z,s as K,c as O,B as F,C as H,D as G,E as J}from"./entry.ebc96556.js";import{_ as P}from"./PlayersLine.vue_vue_type_script_setup_true_lang.40c0c087.js";import{_ as Q}from"./TournamentName.vue_vue_type_script_setup_true_lang.79d5ed00.js";import"./PlayerName.vue_vue_type_script_setup_true_lang.ea70c9e0.js";const U={key:0},W=t("span",{class:"muted"},"\u5927\u4F1A\u51FA\u5834\u540D: ",-1),X={key:1},Y=t("span",{class:"muted"},"ratings: ",-1),Z={key:2},tt=t("span",{class:"muted"},"url: ",-1),et=t("span",{class:"muted"},"\u30C1\u30FC\u30E0",-1),nt={class:"muted"},at=p("\xA0 "),st=N({__name:"PlayerDetailInfo",props:{detail:null,resultsSum:null},setup(c){const y=$=>{const o={};for(const e of $.tournaments){const s=e.team_current_name;o[s]?(o[s].count+=1,o[s].lastMatchAt=Math.max(e.tournament_date,o[s].lastMatchAt)):o[s]={name:s,count:1,lastMatchAt:e.tournament_date}}return Object.values(o).sort(e=>-e.lastMatchAt)};return($,o)=>{var u,l,n,h,k;const e=E,s=R,d=A,i=x;return _(),r("ul",null,[((l=(u=c.detail.data)==null?void 0:u.aliases)==null?void 0:l.length)>0?(_(),r("li",U,[W,p(" "+m(c.detail.data.aliases.join(", ")),1)])):v("",!0),a(e,{resultsSum:c.resultsSum},null,8,["resultsSum"]),c.detail.player.rating?(_(),r("li",X,[Y,p(" "+m(c.detail.player.rating.toLocaleString()),1)])):v("",!0),c.detail.data?(_(),r("li",Z,[tt,a(s,{twitter:(n=c.detail.data)==null?void 0:n.twitter,youtube:(h=c.detail.data)==null?void 0:h.youtube,twitch:(k=c.detail.data)==null?void 0:k.twitch},null,8,["twitter","youtube","twitch"])])):v("",!0),t("li",null,[et,t("ul",null,[(_(!0),r(C,null,g(y(c.detail),f=>(_(),r("li",{key:f.name},[t("span",nt,[a(d,{date:f.lastMatchAt,spacing:!0},null,8,["date"])]),at,a(i,{name:f.name,currentName:f.name},null,8,["name","currentName"]),p(" ("+m(f.count)+") ",1)]))),128))])])])}}}),lt={class:"ti tal",style:{width:"7em"}},ot={class:"ti tar",style:{width:"3em","padding-right":"4px"}},ut={class:"ti",style:{width:"32em"}},ct=["href","onClick"],it={class:"ti",style:{width:"18em"}},_t={class:"ti",style:{width:"36em"}},rt={class:"ti",style:{width:"12em"}},mt=t("span",{class:"muted"},"\u{1F4C8}",-1),dt={class:"muted"},ht=N({__name:"PlayerDetailTournaments",props:{detail:null},setup(c){const{$containerClass:y}=S(),$=e=>{var s;(s=document.getElementById(e))==null||s.scrollIntoView()},o=e=>e==null?"-":e.toLocaleString();return(e,s)=>{const d=A,i=D,u=x,l=P;return _(!0),r(C,null,g(c.detail.tournaments,(n,h)=>(_(),r("div",{class:T(["tc",w(y)(h)]),key:n.tournament_key},[t("div",lt,[a(d,{date:n.tournament_date,spacing:!0},null,8,["date"])]),t("div",ot,[a(i,{rank:n.team_result},null,8,["rank"])]),t("div",ut,[t("a",{href:`#${n.tournament_key}`,onClick:[s[0]||(s[0]=V((...k)=>e.linkClick&&e.linkClick(...k),["prevent","stop"])),k=>$(n.tournament_key)]},m(n.tournament_name),9,ct)]),t("div",it,[a(u,{name:n.team_name,currentName:n.team_current_name},null,8,["name","currentName"])]),t("div",_t,[a(l,{names:n.mate_list},null,8,["names"])]),t("div",rt,[mt,p(" "+m(o(n.rating))+" ",1),t("span",dt,"("+m(o(n.rank))+"\u4F4D / "+m(o(n.total))+"\u4EBA)",1)])],2))),128)}}}),pt=["id"],yt=t("span",{class:"muted"},"\u958B\u50AC\u65E5: ",-1),$t=t("span",{class:"muted"},"\u30C1\u30FC\u30E0: ",-1),kt=t("span",{class:"muted"},"\u30E1\u30F3\u30D0\u30FC: ",-1),ft=t("span",{class:"muted"},"\u7D50\u679C: ",-1),vt={class:"ti",style:{width:"8em"}},wt=t("span",{class:"muted"},"r: ",-1),Ct={class:"ti tac",style:{width:"2em"}},gt={class:"ti tac",style:{width:"4em"}},Nt={class:"ti",style:{width:"24em"}},Dt={class:"ti",style:{width:"4em"}},At={class:"ti",style:{width:"48em"}},xt=N({__name:"PlayerDetailMatches",props:{detail:null},setup(c){const{$containerClass:y}=S();return($,o)=>{const e=Q,s=A,d=x,i=P,u=L;return _(!0),r(C,null,g(c.detail.tournaments,l=>(_(),r("div",{key:l.tournament_key},[t("h3",{id:l.tournament_key},[a(e,{tournamentKey:l.tournament_key,name:l.tournament_name},null,8,["tournamentKey","name"])],8,pt),t("ul",null,[t("li",null,[yt,a(s,{date:l.tournament_date,spacing:!1},null,8,["date"])]),t("li",null,[$t,a(d,{name:l.team_name,currentName:l.team_current_name},null,8,["name","currentName"])]),t("li",null,[kt,p(" "+m(l.member_name)+", ",1),a(i,{names:l.mate_list},null,8,["names"])]),t("li",null,[ft,a(D,{rank:l.team_result},null,8,["rank"])])]),(_(!0),r(C,null,g(c.detail.matches.filter(n=>n.tnmt_key===l.tournament_key),(n,h)=>(_(),r("div",{class:T(["tc",w(y)(h)]),key:`${n.bracket}_${n.round}`},[t("div",vt,[p(m(n.bracket)+" ",1),wt,p(m(n.round),1)]),t("div",Ct,[a(u,{win:n.wl},null,8,["win"])]),t("div",gt,m(n.score_text),1),t("div",Nt,[a(d,{name:n.opponent_team_name,currentName:n.opponent_team_current_name},null,8,["name","currentName"])]),t("div",Dt,[a(D,{rank:n.opponent_team_rank},null,8,["rank"])]),t("div",At,[a(i,{names:n.opponents_list},null,8,["names"])])],2))),128))]))),128)}}}),St={key:0},Tt=t("h2",null,"\u5927\u4F1A\u7D50\u679C",-1),Ft={key:1},Pt=t("h2",null,"\u8A66\u5408\u7D50\u679C",-1),zt=N({__name:"detail",setup(c){const{$host:y,$ratingClass:$}=S(),o=q(),e=I(null),s=()=>{$fetch(`${y()}/player/${o.query.p}.json`).then(i=>{for(const u of i.matches)u.wl=u.opponent_team_key===u.loser_key,u.score_text=u.wl?`${u.winner_score} - ${u.loser_score}`:`${u.loser_score} - ${u.winner_score}`;e.value=i})},d=j(()=>{if(e.value)return G(e.value.matches.map(i=>({key:i.tnmt_key,wl:i.wl===!0})),e.value.tournaments.map(i=>({key:i.tournament_key,result:i.team_result})),J.value)});return z(()=>o.query,async()=>{e.value=null,await s()}),K(o.path),s(),(i,u)=>{const l=M,n=B,h=st,k=ht,f=xt,b=H;return _(),r("div",null,[e.value?(_(),O(b,{key:0},{fallback:F(()=>[]),default:F(()=>[a(l,{title:e.value.player.collated_name},null,8,["title"]),t("h1",{class:T(w($)(e.value.player.rating))},m(e.value.player.collated_name),3),a(n,{current:"detail",p:w(o).query.p},null,8,["p"]),a(h,{detail:e.value,resultsSum:w(d)},null,8,["detail","resultsSum"]),e.value.tournaments.length>0?(_(),r("div",St,[Tt,a(k,{detail:e.value},null,8,["detail"])])):v("",!0),e.value.tournaments.length>0?(_(),r("div",Ft,[Pt,a(f,{detail:e.value},null,8,["detail"])])):v("",!0)]),_:1})):v("",!0)])}}});export{zt as default};