import{g as p,o as n,c as l,d as c,t as d,F as h,a as e,b as _,E as f,r as $,h as k,O as w,u as b,i as v,k as B,M as V}from"./Dad8qJzO.js";const C=e("span",{class:"muted"},"出場:",-1),M=e("span",{class:"muted"},"大会",-1),R=e("span",{class:"muted"},"優勝:",-1),T=e("span",{class:"muted"},"回",-1),N=e("span",{class:"muted"},"Top 4:",-1),O=e("span",{class:"muted"},"回",-1),j=p({__name:"Sum",props:{result:{}},setup(u){return(t,r)=>(n(),l(h,null,[C,c(" "+d(t.result.entry),1),M,c("  "),R,c(" "+d(t.result.top1),1),T,c("  "),N,c(" "+d(t.result.top4),1),O,c("  ")],64))}}),D=e("span",{class:"muted"},"勝",-1),E=e("span",{class:"muted"},"敗",-1),F=p({__name:"MatchSum",props:{result:{}},setup(u){return(t,r)=>(n(),l(h,null,[c(d(t.result.win),1),D,c("  "+d(t.result.lose),1),E,c("  ")],64))}}),q={key:0},L={key:0},Q=e("span",{class:"muted"},"公式",-1),U={key:1},W=e("span",{class:"muted"},"非公式",-1),z={key:1},A=e("span",{class:"muted"},"通算: ",-1),G={key:0},H=e("span",{class:"muted"},"公式大会: ",-1),J={key:1},K=e("span",{class:"muted"},"非公式大会: ",-1),tt=p({__name:"ResultsSum",props:{resultsSum:{}},setup(u){return(t,r)=>{const o=j,a=F;return n(),l(h,null,[t.resultsSum.tournaments.total.entry>0?(n(),l("li",q,[_(o,{result:t.resultsSum.tournaments.total},null,8,["result"]),e("ul",null,[t.resultsSum.tournaments.official.entry>0?(n(),l("li",L,[Q,_(o,{result:t.resultsSum.tournaments.official},null,8,["result"])])):f("",!0),t.resultsSum.tournaments.unofficial.entry>0?(n(),l("li",U,[W,_(o,{result:t.resultsSum.tournaments.unofficial},null,8,["result"])])):f("",!0)])])):f("",!0),t.resultsSum.matches.total.win+t.resultsSum.matches.total.lose>0?(n(),l("li",z,[A,_(a,{result:t.resultsSum.matches.total},null,8,["result"]),e("ul",null,[t.resultsSum.matches.official.win+t.resultsSum.matches.official.lose>0?(n(),l("li",G,[H,_(a,{result:t.resultsSum.matches.official},null,8,["result"])])):f("",!0),t.resultsSum.matches.unofficial.win+t.resultsSum.matches.unofficial.lose>0?(n(),l("li",J,[K,_(a,{result:t.resultsSum.matches.unofficial},null,8,["result"])])):f("",!0)])])):f("",!0)],64)}}}),P={class:"toggle"},X=["id"],Y=["for"],st=p({__name:"ToggleButton",props:{id:{},value:{type:Boolean}},emits:["toggle"],setup(u,{emit:t}){const{id:r,value:o}=u,a=t,s=$(o),m=()=>{a("toggle",s.value)};return(i,y)=>(n(),l("div",P,[k(e("input",{id:i.id,"onUpdate:modelValue":y[0]||(y[0]=g=>v(s)?s.value=g:null),type:"checkbox",onChange:m},null,40,X),[[w,b(s)]]),e("label",{for:i.id},null,8,Y)]))}}),Z={key:0,style:{"font-weight":"bold",color:"red"}},I={key:1,style:{"font-weight":"bold",color:"dodgerblue"}},et=p({__name:"MatchResult",props:{win:{type:Boolean}},setup(u){return(t,r)=>t.win?(n(),l("span",Z,"W")):(n(),l("span",I,"L"))}}),S=(u,t)=>{var r,o;return((o=(r=t.tournaments.find(a=>{var s;return((s=a.info)==null?void 0:s.key)===u}))==null?void 0:r.info)==null?void 0:o.official)===!0},ot=(u,t,r)=>{const o=()=>({win:0,lose:0}),a=()=>({entry:0,top1:0,top4:0}),s={matches:{official:o(),unofficial:o(),total:o()},tournaments:{official:a(),unofficial:a(),total:a()}};for(const m of u){const i=S(m.key,r)?s.matches.official:s.matches.unofficial;m.wl?(s.matches.total.win+=1,i.win+=1):(s.matches.total.lose+=1,i.lose+=1)}for(const m of t){const i=S(m.key,r)?s.tournaments.official:s.tournaments.unofficial;s.tournaments.total.entry+=1,i.entry+=1,m.result===1&&(s.tournaments.total.top1+=1,i.top1+=1),m.result<=4&&(s.tournaments.total.top4+=1,i.top4+=1)}return s},nt=u=>{const t=B();V(()=>t.query,async()=>{await u()})};export{tt as _,et as a,st as b,ot as c,nt as l};