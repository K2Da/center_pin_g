import{_ as L}from"./CH6F1-vU.js";import{_ as T}from"./ynLYX721.js";import{_ as G}from"./CXdP9Xt9.js";import{_ as S}from"./B9JgZoqs.js";import{g as k,l as D,s as $,r as w,J as N,P as p,o as n,c as o,h as x,v as V,u as a,a as t,i as B,b as c,F as P,A as z,I as F,d as m,t as l,E as _,k as I}from"./Dad8qJzO.js";import{c as M,d as U}from"./CBTTjzau.js";import{s as J}from"./fs1Hpm0k.js";import"./CPZ2_LKk.js";import"./BO7R4pd-.js";const j={key:0},q={key:0},H={class:"ti",style:{width:"24em","padding-left":"4px"}},K={class:"ti",style:{width:"4em"}},O={key:0,class:"muted"},Q={class:"ti",style:{width:"15em"}},W=t("span",{class:"muted"},"出場: ",-1),X=t("span",{class:"muted"},"回 ",-1),Y=t("span",{class:"muted"},"優勝: ",-1),Z=t("span",{class:"muted"},"回 ",-1),ee=t("span",{class:"muted"},"Top4: ",-1),se=t("span",{class:"muted"},"回 ",-1),te={class:"ti",style:{width:"6em"}},ae=t("span",{class:"muted"},"勝 ",-1),ne=t("span",{class:"muted"},"敗 ",-1),oe={class:"ti",style:{width:"18em"}},ie={class:"ti",style:{width:"4em"}},le=t("span",{class:"muted"},"日 ",-1),me={class:"ti",style:{width:"38em"}},re={key:0,class:"muted"},_e=k({__name:"List",setup(R){const h=D(),{teams:f}=$(h),i=w(1),r=N(()=>d.value.trim().length>0?f.value.filter(s=>[s.name,...s.names,...s.members].filter(u=>u.toLowerCase().includes(d.value.toLowerCase())).length>0):f.value),v=N(()=>{const s=Math.ceil(r.value.length/p);return s<i.value&&(i.value=1),s}),d=w(""),y=s=>{i.value=s,window.scroll({top:0,left:0})};return(s,g)=>{const u=L,C=T,b=G,A=S;return n(),o("div",null,[x(t("input",{"onUpdate:modelValue":g[0]||(g[0]=e=>B(d)?d.value=e:null),placeholder:"チーム名 / メンバー名",style:{"box-sizing":"border-box",width:"100%"}},null,512),[[V,a(d)]]),c(u,{pageNo:a(i),maxPage:a(v),onChange:y},null,8,["pageNo","maxPage"]),a(r)?(n(),o("div",j,[a(r).length>0?(n(),o("div",q,[(n(!0),o(P,null,z(a(r).slice((a(i)-1)*("PER_PAGE"in s?s.PER_PAGE:a(p)),a(i)*("PER_PAGE"in s?s.PER_PAGE:a(p))),(e,E)=>(n(),o("div",{class:F(["tc",("containerClass"in s?s.containerClass:a(M))(E)]),key:e.name},[t("div",H,[m(l(((a(i)-1)*("PER_PAGE"in s?s.PER_PAGE:a(p))+E+1).toLocaleString())+".  ",1),c(C,{name:e.name,currentName:e.name},null,8,["name","currentName"])]),t("div",K,[e.names.length>0?(n(),o("span",O,"(別名"+l(e.names.length)+"件)",1)):_("",!0)]),t("div",Q,[W,m(" "+l(e.tournament_count)+" ",1),X,e.top_1?(n(),o(P,{key:0},[Y,m(" "+l(e.top_1)+" ",1),Z],64)):_("",!0),e.top_4?(n(),o(P,{key:1},[ee,m(" "+l(e.top_4)+" ",1),se],64)):_("",!0)]),t("div",te,[m(l(e.win)+" ",1),ae,m(" "+l(e.lose)+" ",1),ne]),t("div",oe,[c(b,{date1:e.first_tournament_date,date2:e.latest_tournament_date},null,8,["date1","date2"])]),t("div",ie,[m(l(("diffDays"in s?s.diffDays:a(U))(e.latest_tournament_date,e.first_tournament_date)+1)+" ",1),le]),t("div",me,[c(A,{names:e.members.slice(0,5)},null,8,["names"]),e.members.length>5?(n(),o("span",re,"(他"+l(e.members.length-5)+"人)",1)):_("",!0)])],2))),128))])):_("",!0)])):_("",!0),c(u,{pageNo:a(i),maxPage:a(v),onChange:y},null,8,["pageNo","maxPage"])])}}}),ce=t("h1",null,"チーム",-1),Ee=k({__name:"index",setup(R){const h=I();return J(h.path,"チーム","Pokémon UNITE大会チーム一覧"),(f,i)=>{const r=_e;return n(),o("div",null,[ce,c(r)])}}});export{Ee as default};
