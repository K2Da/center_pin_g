import{N as r,C as e}from"./vendor-eda31402.js";const _=e(""),o=e(null),c=e(""),u=r(o,s=>{if(s==null)return[];const t={};for(const n of s.tournaments){const a=n.team_name;t[a]===void 0?t[a]={name:a,tournament_count:1,last_match_at:n.tournament_date,first_match_at:n.tournament_date}:(t[a].tournament_count+=1,t[a].last_match_at=Math.max(n.tournament_date,t[a].last_match_at),t[a].first_match_at=Math.min(n.tournament_date,t[a].first_match_at))}return Object.values(t).sort(n=>-n.last_match_at)});export{o as a,c,_ as p,u as t};