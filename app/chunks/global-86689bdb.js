import{N as a,D as o}from"./vendor-5fd0e214.js";const c=o(0),h=o(0),m=a(c,t=>t<=1280),r=o({players:[],dic:{}}),i=o({list:[],dic:{}}),l=o({list:[],dic:{}});function u(){fetch("/center_pin_g/data/player/players.json").then(t=>t.json()).then(t=>r.set({players:t,dic:g(t)})).catch(t=>console.log(t)),fetch("/center_pin_g/data/tournament/tournaments.json").then(t=>t.json()).then(t=>i.set({list:t.tournaments,dic:d(t.tournaments)})).catch(t=>console.log(t)),fetch("/center_pin_g/data/team/teams.json").then(t=>t.json()).then(t=>l.set({list:t,dic:p(t)})).catch(t=>console.log(t))}function g(t){const e={};for(const n of t)e[n.name]=n;return e}function p(t){const e={};for(const n of t)for(const s of n.names)e[s]=n;return e}function d(t){const e={};for(const n of t)e[n.key]=n;return e}function _(t){gtag("set","page_path",window.location.pathname),gtag("set","page_title",t),gtag("event","page_view")}export{h as a,l as b,_ as g,u as l,r as p,m as s,i as t,c as w};
