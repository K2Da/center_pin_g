import{_ as P}from"./PageHead.vue_vue_type_script_setup_true_lang.87be36da.js";import{_ as T}from"./PlayerNaviLink.vue_vue_type_script_setup_true_lang.fad511c7.js";import{_ as A}from"./PlayerName.vue_vue_type_script_setup_true_lang.844e2bea.js";import{_ as M}from"./TeamName.vue_vue_type_script_setup_true_lang.806cde21.js";import{_ as q}from"./DateTime.vue_vue_type_script_setup_true_lang.2a75c6de.js";import{_ as O}from"./TournamentName.vue_vue_type_script_setup_true_lang.95053e47.js";import{a as B,z as k,K as C,o as l,e as o,f as r,N as V,u as c,F as y,r as N,t as $,q as p,p as b,c as D,h as x,v as z,b as E,y as K,A as S,s as j,B as F,C as L,w as H}from"./entry.a2997cac.js";const R=r("h2",null,"\u51FA\u5834\u30E1\u30F3\u30D0\u30FC",-1),G={style:{"overflow-y":"scroll"}},I=r("th",null,null,-1),J=r("th",{class:"tal nw",style:{width:"12em"}},"\u6700\u65B0\u30C1\u30FC\u30E0",-1),Q={class:"tal"},U=["src"],W={class:"tal"},X={key:0},Y=x(" \xA0 "),Z=x(" / "),ee=B({__name:"PlayerDetailMember",props:{detail:null},setup(w){const{detail:g}=w,d=k(()=>g.tournaments.slice().reverse()),_=k(()=>{var s;const e={};if(C.value)for(const n of h.value)e[n]=((s=C.value.filter(t=>t.name===n)[0])==null?void 0:s.latest.team_current)||"";return e}),f=k(()=>{const e={};for(const n of h.value){e[n]=[];for(const[t,m]of d.value.entries())m.mate_list.indexOf(n)!==-1&&e[n].push(t)}const s={};for(const n of h.value){s[n]=[];for(let t=0;t<d.value.length;t++){const m=e[n];let i="";const a=Math.min(...m),u=Math.max(...m),v=t===d.value.length-1;m.includes(t)?m.length===1?i=v?"one":"spot":a===t?i="start":u===t?i=v?"current":"end":i="on":a<t&&t<u&&(i="off"),s[n].push(i)}}return s}),h=k(()=>{const e={};for(const[s,n]of g.tournaments.entries())for(const t of n.mate_list)e[t]?e[t]=[Math.min(e[t][0],s),e[t][1]+1]:e[t]=[s,1];return Object.keys(e).sort((s,n)=>e[s][0]===e[n][0]?e[n][1]-e[s][1]:e[s][0]-e[n][0])});return console.log(h.value),(e,s)=>{const n=A,t=M,m=q,i=O;return l(),o(y,null,[R,r("div",G,[r("table",{style:V({width:`${14+3*c(d).length+12}em`})},[r("thead",null,[r("tr",null,[I,(l(!0),o(y,null,N(c(d),(a,u)=>(l(),o("th",{class:"tac",style:{width:"3em","padding-left":"0","padding-right":"0","margin-left":"0","margin-right":"0"},key:u},$(u+1),1))),128)),J])]),r("tbody",null,[(l(!0),o(y,null,N(c(h),a=>(l(),o("tr",{key:a},[r("td",Q,[p(n,{name:a,page:"member"},null,8,["name"])]),(l(!0),o(y,null,N(c(f)[a],(u,v)=>(l(),o("td",{key:v,class:"tight"},[u!==""?(l(),o("img",{key:0,src:`/parts/${u}.svg`,style:{width:"3em",height:"2em"}},null,8,U)):b("",!0)]))),128)),r("td",W,[c(_)[a]?(l(),o("span",X,[c(_)[a]?(l(),D(t,{key:0,name:c(_)[a],currentName:c(_)[a],page:"member"},null,8,["name","currentName"])):b("",!0)])):b("",!0)])]))),128))])],4),r("ul",null,[(l(!0),o(y,null,N(c(d),(a,u)=>(l(),o("li",{key:u},[x($(u+1)+". ",1),p(m,{date:a.tournament_date,spacing:!0},null,8,["date"]),Y,p(i,{name:a.tournament_name,tournamentKey:a.tournament_key},null,8,["name","tournamentKey"]),Z,p(t,{name:a.team_name,currentName:a.team_current_name},null,8,["name","currentName"]),x(" \xA0 ("+$(a.team_result)+"\u4F4D) ",1)]))),128))])])],64)}}}),ue=B({__name:"member",setup(w){const{$host:g,$ratingClass:d}=z(),_=E(),f=K(null),h=()=>{$fetch(`${g()}/player/${_.query.p}.json`).then(e=>{f.value=e})};return S(()=>_.query,async()=>{f.value=null,await h()}),j(_.path),h(),(e,s)=>{const n=P,t=T,m=ee,i=L;return l(),o("div",null,[f.value?(l(),D(i,{key:0},{fallback:F(()=>[]),default:F(()=>[p(n,{title:f.value.player.collated_name},null,8,["title"]),r("h1",{class:H(c(d)(f.value.player.rating))},$(f.value.player.collated_name),3),p(t,{current:"member",p:c(_).query.p},null,8,["p"]),p(m,{detail:f.value},null,8,["detail"])]),_:1})):b("",!0)])}}});export{ue as default};
