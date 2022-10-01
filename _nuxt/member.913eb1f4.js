import{_ as A,a as D}from"./ResultRank.vue_vue_type_script_setup_true_lang.aa4c8b6c.js";import{_ as M}from"./PlayerNaviLink.vue_vue_type_script_setup_true_lang.3f2f9819.js";import{_ as q}from"./PlayerName.vue_vue_type_script_setup_true_lang.969cb985.js";import{_ as O}from"./TeamName.vue_vue_type_script_setup_true_lang.92cc8d22.js";import{_ as V}from"./DateTime.vue_vue_type_script_setup_true_lang.b45cd31c.js";import{_ as z}from"./TournamentName.vue_vue_type_script_setup_true_lang.3e8b7890.js";import{a as F,z as $,K as C,o as l,e as o,f as r,N as E,u as c,F as y,r as N,t as x,q as p,p as b,c as P,h as g,v as K,b as R,y as S,A as j,s as L,B,C as H,w as G}from"./entry.9c6c5379.js";const I=r("h2",null,"\u51FA\u5834\u30E1\u30F3\u30D0\u30FC",-1),J={style:{"overflow-y":"scroll"}},Q=r("th",null,null,-1),U=r("th",{class:"tal nw",style:{width:"12em"}},"\u6700\u65B0\u30C1\u30FC\u30E0",-1),W={class:"tal"},X=["src"],Y={class:"tal"},Z={key:0},ee=g(" \xA0 "),te=g(" / "),ne=g(" \xA0 ("),ae=g(") "),se=F({__name:"PlayerDetailMember",props:{detail:null},setup(w){const{detail:v}=w,d=$(()=>v.tournaments.slice().reverse()),i=$(()=>{var s;const e={};if(C.value)for(const n of h.value)e[n]=((s=C.value.filter(t=>t.name===n)[0])==null?void 0:s.latest.team_current)||"";return e}),f=$(()=>{const e={};for(const n of h.value){e[n]=[];for(const[t,m]of d.value.entries())m.mate_list.indexOf(n)!==-1&&e[n].push(t)}const s={};for(const n of h.value){s[n]=[];for(let t=0;t<d.value.length;t++){const m=e[n];let _="";const k=Math.min(...m),a=Math.max(...m),u=t===d.value.length-1;m.includes(t)?m.length===1?_=u?"one":"spot":k===t?_="start":a===t?_=u?"current":"end":_="on":k<t&&t<a&&(_="off"),s[n].push(_)}}return s}),h=$(()=>{const e={};for(const[s,n]of v.tournaments.entries())for(const t of n.mate_list)e[t]?e[t]=[Math.min(e[t][0],s),e[t][1]+1]:e[t]=[s,1];return Object.keys(e).sort((s,n)=>e[s][0]===e[n][0]?e[n][1]-e[s][1]:e[s][0]-e[n][0])});return console.log(h.value),(e,s)=>{const n=q,t=O,m=V,_=z,k=A;return l(),o(y,null,[I,r("div",J,[r("table",{style:E({width:`${14+3*c(d).length+12}em`})},[r("thead",null,[r("tr",null,[Q,(l(!0),o(y,null,N(c(d),(a,u)=>(l(),o("th",{class:"tac",style:{width:"3em","padding-left":"0","padding-right":"0","margin-left":"0","margin-right":"0"},key:u},x(u+1),1))),128)),U])]),r("tbody",null,[(l(!0),o(y,null,N(c(h),a=>(l(),o("tr",{key:a},[r("td",W,[p(n,{name:a,page:"member"},null,8,["name"])]),(l(!0),o(y,null,N(c(f)[a],(u,T)=>(l(),o("td",{key:T,class:"tight"},[u!==""?(l(),o("img",{key:0,src:`/parts/${u}.svg`,style:{width:"3em",height:"2em"}},null,8,X)):b("",!0)]))),128)),r("td",Y,[c(i)[a]?(l(),o("span",Z,[c(i)[a]?(l(),P(t,{key:0,name:c(i)[a],currentName:c(i)[a],page:"member"},null,8,["name","currentName"])):b("",!0)])):b("",!0)])]))),128))])],4),r("ul",null,[(l(!0),o(y,null,N(c(d),(a,u)=>(l(),o("li",{key:u},[g(x(u+1)+". ",1),p(m,{date:a.tournament_date,spacing:!0},null,8,["date"]),ee,p(_,{name:a.tournament_name,tournamentKey:a.tournament_key},null,8,["name","tournamentKey"]),te,p(t,{name:a.team_name,currentName:a.team_current_name},null,8,["name","currentName"]),ne,p(k,{rank:a.team_result},null,8,["rank"]),ae]))),128))])])],64)}}}),ie=F({__name:"member",setup(w){const{$host:v,$ratingClass:d}=K(),i=R(),f=S(null),h=()=>{$fetch(`${v()}/player/${i.query.p}.json`).then(e=>{f.value=e})};return j(()=>i.query,async()=>{f.value=null,await h()}),L(i.path),h(),(e,s)=>{const n=D,t=M,m=se,_=H;return l(),o("div",null,[f.value?(l(),P(_,{key:0},{fallback:B(()=>[]),default:B(()=>[p(n,{title:f.value.player.collated_name},null,8,["title"]),r("h1",{class:G(c(d)(f.value.player.rating))},x(f.value.player.collated_name),3),p(t,{current:"member",p:c(i).query.p},null,8,["p"]),p(m,{detail:f.value},null,8,["detail"])]),_:1})):b("",!0)])}}});export{ie as default};
