import{a as i,o as r,e as m,c as l,k as _,y as c,F as u,L as f}from"./entry.25843a73.js";const y=i({__name:"NaviLink",props:{current:null,m:null},setup(n){return(t,a)=>{const e=f;return r(),m(u,null,[n.current!=="detail"?(r(),l(e,{key:0,to:{name:"team-detail",query:{m:n.m}},"no-prefetch":""},{default:_(()=>[c("戦績")]),_:1},8,["to"])):(r(),m(u,{key:1},[c("戦績")],64)),c(" | "),n.current!=="member"?(r(),l(e,{key:2,to:{name:"team-member",query:{m:n.m}},"no-prefetch":""},{default:_(()=>[c("編成")]),_:1},8,["to"])):(r(),m(u,{key:3},[c("編成")],64))],64)}}}),p=n=>{for(const e of n.matches)e.wl=e.opponent_team_key===e.loser_key,e.score_text=e.wl?`${e.winner_score} - ${e.loser_score}`:`${e.loser_score} - ${e.winner_score}`;const t={};for(const[e,o]of n.tournaments.entries())for(const s of o.player_list)t[s]?t[s].count++:t[s]={tournament:e,count:1};const a=Object.keys(t);return a.sort((e,o)=>t[e].tournament===t[o].tournament?t[o].count-t[e].count:t[e].tournament-t[o].tournament),{...n,players:a,playerStats:t}};export{y as _,p as t};