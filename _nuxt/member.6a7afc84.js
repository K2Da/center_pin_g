import{_ as D,a as O,b as R}from"./client-only.022e6b6b.js";import{_ as V}from"./NaviLink.vue.382715ec.js";import{_ as q}from"./Name.vue.73aac48c.js";import{_ as j}from"./Name.vue.5f287a74.js";import{_ as z}from"./DateTime.vue.81c75ed2.js";import{_ as E}from"./Name.vue.4d700b36.js";import{a as M,s as F,x as H,D as b,o,b as l,e as m,H as K,u as r,F as k,h as N,t as C,m as d,B as w,c as P,f as v,l as L,r as I,I as J,E as B,J as A,j as G}from"./entry.23762796.js";import{s as Q}from"./ga.9020f222.js";import{r as U}from"./helpers.a2347b6a.js";const W=m("h2",null,"出場メンバー",-1),X={style:{"overflow-y":"scroll"}},Y=m("th",null,null,-1),Z=m("th",{class:"tal nw",style:{width:"12em"}},"最新チーム",-1),ee={class:"tal"},te=["src"],ne={class:"tal"},ae={key:0},se=M({__name:"Member",props:{detail:null},setup(T){const{detail:p}=T,i=F(),{players:y}=H(i),c=b(()=>p.tournaments.slice().reverse()),g=b(()=>{var s;const e={};if(y.value)for(const n of h.value)e[n]=((s=y.value.filter(t=>t.name===n)[0])==null?void 0:s.latest.team_current)||"";return e}),x=b(()=>{const e={};for(const n of h.value){e[n]=[];for(const[t,_]of c.value.entries())_.mate_list.indexOf(n)!==-1&&e[n].push(t)}const s={};for(const n of h.value){s[n]=[];for(let t=0;t<c.value.length;t++){const _=e[n];let f="";const $=Math.min(..._),a=Math.max(..._),u=t===c.value.length-1;_.includes(t)?_.length===1?f=u?"one":"spot":$===t?f="start":a===t?f=u?"current":"end":f="on":$<t&&t<a&&(f="off"),s[n].push(f)}}return s}),h=b(()=>{const e={};for(const[s,n]of p.tournaments.entries())for(const t of n.mate_list)e[t]?e[t]=[Math.min(e[t][0],s),e[t][1]+1]:e[t]=[s,1];return Object.keys(e).sort((s,n)=>e[s][0]===e[n][0]?e[n][1]-e[s][1]:e[s][0]-e[n][0])});return(e,s)=>{const n=q,t=j,_=z,f=E,$=D;return o(),l(k,null,[W,m("div",X,[m("table",{style:K({width:`${14+3*r(c).length+12}em`})},[m("thead",null,[m("tr",null,[Y,(o(!0),l(k,null,N(r(c),(a,u)=>(o(),l("th",{class:"tac",style:{width:"3em","padding-left":"0","padding-right":"0","margin-left":"0","margin-right":"0"},key:u},C(u+1),1))),128)),Z])]),m("tbody",null,[(o(!0),l(k,null,N(r(h),a=>(o(),l("tr",{key:a},[m("td",ee,[d(n,{name:a,page:"member"},null,8,["name"])]),(o(!0),l(k,null,N(r(x)[a],(u,S)=>(o(),l("td",{key:S,class:"tight"},[u!==""?(o(),l("img",{key:0,src:`/parts/${u}.svg`,style:{width:"3em",height:"2em"}},null,8,te)):w("",!0)]))),128)),m("td",ne,[r(g)[a]?(o(),l("span",ae,[r(g)[a]?(o(),P(t,{key:0,name:r(g)[a],currentName:r(g)[a],page:"member"},null,8,["name","currentName"])):w("",!0)])):w("",!0)])]))),128))])],4),m("ul",null,[(o(!0),l(k,null,N(r(c),(a,u)=>(o(),l("li",{key:u},[v(C(u+1)+". ",1),d(_,{date:a.tournament_date,spacing:!0},null,8,["date"]),v("   "),d(f,{name:a.tournament_name,tournamentKey:a.tournament_key},null,8,["name","tournamentKey"]),v(" / "),d(t,{name:a.team_name,currentName:a.team_current_name},null,8,["name","currentName"]),v("   ("),d($,{rank:a.team_result},null,8,["rank"]),v(") ")]))),128))])])],64)}}}),de=M({__name:"member",setup(T){const p=L(),i=I(null),y=()=>{$fetch(`${A()}/player/${p.query.p}`).then(c=>{i.value=c})};return J(()=>p.query,async()=>{i.value=null,await y()}),Q(p.path),y(),(c,g)=>{const x=R,h=V,e=se,s=O;return o(),l("div",null,[r(i)?(o(),P(s,{key:0},{fallback:B(()=>[]),default:B(()=>[d(x,{title:`${r(i).player.collated_name}: 編成`},null,8,["title"]),m("h1",{class:G(("ratingClass"in c?c.ratingClass:r(U))(r(i).player.collated_name))},C(r(i).player.collated_name),3),d(h,{current:"member",p:r(p).query.p},null,8,["p"]),d(e,{detail:r(i)},null,8,["detail"])]),_:1})):w("",!0)])}}});export{de as default};
