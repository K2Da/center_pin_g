import{_ as T}from"./ListPager.vue.372b28bc.js";import{c as b,a as A,_ as D}from"./Name.vue.0d3c86ea.js";import{_ as S}from"./DateSpan.vue.a84dd3f3.js";import{_ as x}from"./PlayersLine.vue.a721213b.js";import{a as R,s as $,x as V,l as w,H as N,P as p,o as n,e as o,m as B,v as z,u as a,f as t,p as F,h as c,F as v,r as M,G as U,y as m,t as l,D as _,j}from"./entry.e08aeb02.js";import{s as H}from"./ga.83aa9966.js";import"./Name.vue.fcce3d52.js";const I={key:0},q={key:0},J={class:"ti",style:{width:"24em","padding-left":"4px"}},K={class:"ti",style:{width:"4em"}},O={key:0,class:"muted"},Q={class:"ti",style:{width:"14em"}},W=t("span",{class:"muted"},"出場: ",-1),X=t("span",{class:"muted"},"回 ",-1),Y=t("span",{class:"muted"},"優勝: ",-1),Z=t("span",{class:"muted"},"回 ",-1),ee=t("span",{class:"muted"},"Top4: ",-1),se=t("span",{class:"muted"},"回 ",-1),te={class:"ti",style:{width:"6em"}},ae=t("span",{class:"muted"},"勝 ",-1),ne=t("span",{class:"muted"},"敗 ",-1),oe={class:"ti",style:{width:"18em"}},ie={class:"ti",style:{width:"3em"}},le=t("span",{class:"muted"},"日 ",-1),me={class:"ti",style:{width:"36em"}},re={key:0,class:"ti muted",style:{width:"4em"}},_e=R({__name:"List",setup(k){const h=$(),{teams:g}=V(h),i=w(1),r=N(()=>d.value.trim().length>0?g.value.filter(s=>[s.name,...s.names,...s.members].filter(u=>u.toLowerCase().includes(d.value.toLowerCase())).length>0):g.value),P=N(()=>{const s=Math.ceil(r.value.length/p);return s<i.value&&(i.value=1),s}),d=w(""),y=s=>{i.value=s,window.scroll({top:0,left:0})};return(s,f)=>{const u=T,C=D,G=S,L=x;return n(),o("div",null,[B(t("input",{"onUpdate:modelValue":f[0]||(f[0]=e=>F(d)?d.value=e:null),placeholder:"チーム名 / メンバー名",style:{"box-sizing":"border-box",width:"100%"}},null,512),[[z,a(d)]]),c(u,{pageNo:a(i),maxPage:a(P),onChange:y},null,8,["pageNo","maxPage"]),a(r)?(n(),o("div",I,[a(r).length>0?(n(),o("div",q,[(n(!0),o(v,null,M(a(r).slice((a(i)-1)*("PER_PAGE"in s?s.PER_PAGE:a(p)),a(i)*("PER_PAGE"in s?s.PER_PAGE:a(p))),(e,E)=>(n(),o("div",{class:U(["tc",("containerClass"in s?s.containerClass:a(b))(E)]),key:e.name},[t("div",J,[m(l(((a(i)-1)*("PER_PAGE"in s?s.PER_PAGE:a(p))+E+1).toLocaleString())+".  ",1),c(C,{name:e.name,currentName:e.name},null,8,["name","currentName"])]),t("div",K,[e.names.length>0?(n(),o("span",O,"(別名"+l(e.names.length)+"件)",1)):_("",!0)]),t("div",Q,[W,m(" "+l(e.tournament_count)+" ",1),X,e.top_1?(n(),o(v,{key:0},[Y,m(" "+l(e.top_1)+" ",1),Z],64)):_("",!0),e.top_4?(n(),o(v,{key:1},[ee,m(" "+l(e.top_4)+" ",1),se],64)):_("",!0)]),t("div",te,[m(l(e.win)+" ",1),ae,m(" "+l(e.lose)+" ",1),ne]),t("div",oe,[c(G,{date1:e.first_tournament_date,date2:e.latest_tournament_date},null,8,["date1","date2"])]),t("div",ie,[m(l(("countDays"in s?s.countDays:a(A))(e.first_tournament_date,e.latest_tournament_date))+" ",1),le]),t("div",me,[c(L,{names:e.members.slice(0,5)},null,8,["names"])]),e.members.length>5?(n(),o("div",re," (他"+l(e.members.length-5)+"人) ",1)):_("",!0)],2))),128))])):_("",!0)])):_("",!0),c(u,{pageNo:a(i),maxPage:a(P),onChange:y},null,8,["pageNo","maxPage"])])}}}),ce=t("h1",null,"チーム",-1),Pe=R({__name:"index",setup(k){const h=j();return H(h.path,"チーム","Pokémon UNITE大会チーム一覧"),(g,i)=>{const r=_e;return n(),o("div",null,[ce,c(r)])}}});export{Pe as default};
