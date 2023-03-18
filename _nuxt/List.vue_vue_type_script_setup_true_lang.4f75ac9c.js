import{_ as F}from"./DateTime.vue_vue_type_script_setup_true_lang.e1a1954f.js";import{a as f,o as s,c as x,J as B,f as c,t as u,M as N,b as a,u as l,F as o,h as g,G as p,e as t,j as E,m as _}from"./entry.137835c4.js";import{_ as K}from"./Name.vue_vue_type_script_setup_true_lang.703d0fab.js";import{_ as A}from"./Name.vue_vue_type_script_setup_true_lang.bada6330.js";import{c as D}from"./helpers.6511ea47.js";const T=f({__name:"Name",props:{groupKey:null,name:null},setup(i){return(r,n)=>{const m=N;return s(),x(m,{to:{name:"tournament-group",query:{g:i.groupKey}},"no-prefetch":""},{default:B(()=>[c(u(i.name),1)]),_:1},8,["to"])}}}),V=t("div",{style:{margin:"4px"}},[t("span",{class:"muted"},"\u2714 \u516C\u5F0F \u{1F4C8} ratings\u8A08\u7B97\u5BFE\u8C61 \u{1F47E} \u8907\u6570\u30B0\u30EB\u30FC\u30D7\u3042\u308A")],-1),$={key:0},L={class:"ti",style:{width:"6em","padding-left":"4px"}},G=t("div",{class:"ti tac",style:{width:"2em"}},[t("span",{class:"muted"},"\u{1F47E}")],-1),b={class:"ti",style:{width:"29em"}},j={class:"ti tar",style:{width:"6em"}},q=t("span",{class:"muted"},"\u30B0\u30EB\u30FC\u30D7",-1),z={class:"ti",style:{width:"6em","padding-left":"4px"}},J={class:"ti tac",style:{width:"1em"}},M={key:0,class:"muted"},S={class:"ti tac",style:{width:"1em","padding-left":"0"}},H={key:0,class:"muted"},I={class:"ti",style:{width:"36em"}},O={class:"ti tar",style:{width:"5em"}},P=t("span",{class:"muted"},"\u30C1\u30FC\u30E0",-1),Q={class:"ti tar",style:{width:"4em"}},R=t("span",{class:"muted"},"\u4EBA",-1),U={class:"ti tar",style:{width:"4em"}},W=t("span",{class:"muted"},"\u8A66\u5408",-1),X={class:"ti",style:{width:"48em"}},Y={class:"muted"},at=f({__name:"List",props:{group:null},setup(i){const{group:r}=i;let n=[];return n=n.concat(r.tournaments),r.groups&&(n=n.concat(r.groups)),n=n.sort((m,h)=>h.date-m.date),(m,h)=>{const y=F,k=T,v=K,w=A;return s(),a(o,null,[V,l(n)&&l(n).length>0?(s(),a("div",$,[(s(!0),a(o,null,g(l(n),(e,C)=>(s(),a("div",{class:E(["tc",l(D)(C)]),key:e.key},[e.group_key?(s(),a(o,{key:0},[t("div",L,[_(y,{date:e.date,spacing:!0},null,8,["date"])]),G,t("div",b,[_(k,{groupKey:e.group_key,name:e.name},null,8,["groupKey","name"])]),t("div",j,[c(u(e.tournament_count)+" ",1),q])],64)):(s(),a(o,{key:1},[t("div",z,[_(y,{date:e.date,spacing:!0},null,8,["date"])]),t("div",J,[e.info.official?(s(),a("span",M,"\u2714")):p("",!0)]),t("div",S,[e.rating?(s(),a("span",H,"\u{1F4C8}")):p("",!0)]),t("div",I,[_(v,{tournamentKey:e.key,name:e.name},null,8,["tournamentKey","name"])])],64)),t("div",O,[c(u(e.team_count)+" ",1),P]),t("div",Q,[c(u(e.player_count)+" ",1),R]),t("div",U,[c(u(e.match_count)+" ",1),W]),t("div",X,[(s(!0),a(o,null,g(i.group.tournament_winners[e.key],d=>(s(),a(o,{key:d.name},[t("span",Y,u(d.rank)+". ",1),_(w,{name:d.name,currentName:d.current_name},null,8,["name","currentName"]),c(" \xA0 ")],64))),128))])],2))),128))])):p("",!0)],64)}}});export{at as _};
