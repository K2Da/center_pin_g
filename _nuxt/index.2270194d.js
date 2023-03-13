import{_ as b}from"./ListPager.vue_vue_type_style_index_0_lang.25d3e47b.js";import{_ as A}from"./Name.vue_vue_type_script_setup_true_lang.ec9f377e.js";import{_ as L}from"./DateSpan.vue_vue_type_script_setup_true_lang.31f56c76.js";import{_ as T}from"./PlayersLine.vue_vue_type_script_setup_true_lang.00aef3fe.js";import{a as D,A as S,B as $,r as C,I as w,P as p,o as a,b as n,w as B,y as R,u as s,e as t,i as V,m as r,F as v,h as z,j as G,f as l,t as i,G as c,l as I}from"./entry.b92543de.js";import{c as M,b as U}from"./helpers.4a5dedc9.js";import{s as j}from"./ga.cff682b2.js";import"./Name.vue_vue_type_script_setup_true_lang.95cad832.js";import"./composables.a0242be9.js";const q={key:0},H={key:0},J={class:"ti",style:{width:"24em","padding-left":"4px"}},K={class:"ti",style:{width:"4em"}},O={key:0,class:"muted"},Q={class:"ti",style:{width:"14em"}},W=t("span",{class:"muted"},"\u51FA\u5834: ",-1),X=t("span",{class:"muted"},"\u56DE ",-1),Y=t("span",{class:"muted"},"\u512A\u52DD: ",-1),Z=t("span",{class:"muted"},"\u56DE ",-1),ee=t("span",{class:"muted"},"Top4: ",-1),te=t("span",{class:"muted"},"\u56DE ",-1),se={class:"ti",style:{width:"6em"}},ae=t("span",{class:"muted"},"\u52DD ",-1),ne=t("span",{class:"muted"},"\u6557 ",-1),oe={class:"ti",style:{width:"18em"}},ue={class:"ti",style:{width:"3em"}},ie=t("span",{class:"muted"},"\u65E5 ",-1),le={class:"ti",style:{width:"36em"}},me={key:0,class:"ti muted",style:{width:"4em"}},ce=D({__name:"List",setup(N){const h=S(),{teams:g}=$(h),o=C(1),m=w(()=>_.value.trim().length>0?g.value.filter(u=>[u.name,...u.names,...u.members].filter(d=>d.toLowerCase().includes(_.value.toLowerCase())).length>0):g.value),y=w(()=>{const u=Math.ceil(m.value.length/p);return u<o.value&&(o.value=1),u}),_=C(""),E=u=>{o.value=u,window.scroll({top:0,left:0})};return(u,f)=>{const d=b,P=A,F=L,k=T;return a(),n("div",null,[B(t("input",{"onUpdate:modelValue":f[0]||(f[0]=e=>V(_)?_.value=e:null),placeholder:"\u30C1\u30FC\u30E0\u540D / \u30E1\u30F3\u30D0\u30FC\u540D",style:{"box-sizing":"border-box",width:"100%"}},null,512),[[R,s(_)]]),r(d,{pageNo:s(o),maxPage:s(y),onChange:E},null,8,["pageNo","maxPage"]),s(m)?(a(),n("div",q,[s(m).length>0?(a(),n("div",H,[(a(!0),n(v,null,z(s(m).slice((s(o)-1)*s(p),s(o)*s(p)),(e,x)=>(a(),n("div",{class:G(["tc",s(M)(x)]),key:e.name},[t("div",J,[l(i(((s(o)-1)*s(p)+x+1).toLocaleString())+".\xA0 ",1),r(P,{name:e.name,currentName:e.name},null,8,["name","currentName"])]),t("div",K,[e.names.length>0?(a(),n("span",O,"(\u5225\u540D"+i(e.names.length)+"\u4EF6)",1)):c("",!0)]),t("div",Q,[W,l(" "+i(e.tournament_count)+" ",1),X,e.top_1?(a(),n(v,{key:0},[Y,l(" "+i(e.top_1)+" ",1),Z],64)):c("",!0),e.top_4?(a(),n(v,{key:1},[ee,l(" "+i(e.top_4)+" ",1),te],64)):c("",!0)]),t("div",se,[l(i(e.win)+" ",1),ae,l(" "+i(e.lose)+" ",1),ne]),t("div",oe,[r(F,{date1:e.first_tournament_date,date2:e.latest_tournament_date},null,8,["date1","date2"])]),t("div",ue,[l(i(s(U)(e.first_tournament_date,e.latest_tournament_date))+" ",1),ie]),t("div",le,[r(k,{names:e.members.slice(0,5)},null,8,["names"])]),e.members.length>5?(a(),n("div",me," (\u4ED6"+i(e.members.length-5)+"\u4EBA) ",1)):c("",!0)],2))),128))])):c("",!0)])):c("",!0),r(d,{pageNo:s(o),maxPage:s(y),onChange:E},null,8,["pageNo","maxPage"])])}}}),re=t("h1",null,"\u30C1\u30FC\u30E0",-1),xe=D({__name:"index",setup(N){const h=I();return j(h.path,"\u30C1\u30FC\u30E0","Pok\xE9mon UNITE\u5927\u4F1A\u30C1\u30FC\u30E0\u4E00\u89A7"),(g,o)=>{const m=ce;return a(),n("div",null,[re,r(m)])}}});export{xe as default};