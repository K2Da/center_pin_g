import{_ as C}from"./DolexuPa.js";import{g as f,o as s,C as K,w as x,d as i,t as _,e as B,c as a,u as l,F as r,B as g,E as u,a as e,J as T,b as d}from"./U1RcPqzo.js";import{_ as V}from"./DuEOXC78.js";import{_ as $}from"./CC02_q3p.js";import{c as L}from"./B7wNX0LU.js";const D=f({__name:"Name",props:{groupKey:{},name:{}},setup(p){return(c,n)=>{const o=B;return s(),K(o,{to:{name:"tournament-group",query:{g:c.groupKey}},"no-prefetch":""},{default:x(()=>[i(_(c.name),1)]),_:1},8,["to"])}}}),E=e("div",{style:{margin:"4px"}},[e("span",{class:"muted"},"✔ 公式 📈 ratings計算対象 👾 複数グループあり")],-1),F={key:0},b={style:{width:"6em","padding-left":"4px"}},q=e("div",{class:"tac",style:{width:"2em"}},[e("span",{class:"muted"},"👾")],-1),z={style:{width:"29em"}},G={class:"tar",style:{width:"6em"}},J=e("span",{class:"muted"},"グループ",-1),S={style:{width:"6em","padding-left":"4px"}},j={class:"tac",style:{width:"1em"}},A={key:0,class:"muted"},H={class:"tac",style:{width:"1em","padding-left":"0"}},I={key:0,class:"muted"},M={style:{width:"36em"}},O={class:"tar",style:{width:"5em"}},P=e("span",{class:"muted"},"チーム",-1),Q={class:"tar",style:{width:"4em"}},R=e("span",{class:"muted"},"人",-1),U={class:"tar",style:{width:"4em"}},W=e("span",{class:"muted"},"試合",-1),X={style:{width:"48em"}},Y={class:"muted"},ae=f({__name:"List",props:{group:{}},setup(p){const{group:c}=p;let n=[];return n=n.concat(c.tournaments),c.groups&&(n=n.concat(c.groups)),n=n.sort((o,h)=>h.date-o.date),(o,h)=>{const y=C,k=D,v=V,w=$;return s(),a(r,null,[E,l(n)&&l(n).length>0?(s(),a("div",F,[(s(!0),a(r,null,g(l(n),(t,N)=>(s(),a("div",{class:T(["tc",("containerClass"in o?o.containerClass:l(L))(N)]),key:t.key},[t.group_key?(s(),a(r,{key:0},[e("div",b,[d(y,{date:t.date,spacing:!0},null,8,["date"])]),q,e("div",z,[d(k,{groupKey:t.group_key,name:t.name},null,8,["groupKey","name"])]),e("div",G,[i(_(t.tournament_count)+" ",1),J])],64)):(s(),a(r,{key:1},[e("div",S,[d(y,{date:t.date,spacing:!0},null,8,["date"])]),e("div",j,[t.info.official?(s(),a("span",A,"✔")):u("",!0)]),e("div",H,[t.rating?(s(),a("span",I,"📈")):u("",!0)]),e("div",M,[d(v,{tournamentKey:t.key,name:t.name},null,8,["tournamentKey","name"])])],64)),e("div",O,[i(_(t.team_count)+" ",1),P]),e("div",Q,[i(_(t.player_count)+" ",1),R]),e("div",U,[i(_(t.match_count)+" ",1),W]),e("div",X,[(s(!0),a(r,null,g(o.group.tournament_winners[t.key],m=>(s(),a(r,{key:m.name},[e("span",Y,_(m.rank)+". ",1),d(w,{name:m.name,currentName:m.current_name},null,8,["name","currentName"]),i("   ")],64))),128))])],2))),128))])):u("",!0)],64)}}});export{ae as _};
