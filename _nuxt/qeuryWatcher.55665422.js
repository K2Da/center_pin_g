import{a as _,o as l,e as u,y as r,t as h,F as y,f as e,h as f,D as d,l as $,m as w,N as k,u as p,p as b,j as x,K as v}from"./entry.a01039ba.js";const B=e("span",{class:"muted"},"出場:",-1),V=e("span",{class:"muted"},"大会",-1),C=e("span",{class:"muted"},"優勝:",-1),N=e("span",{class:"muted"},"回",-1),R=e("span",{class:"muted"},"Top 4:",-1),T=e("span",{class:"muted"},"回",-1),M=_({__name:"Sum",props:{result:null},setup(t){return(a,c)=>(l(),u(y,null,[B,r(" "+h(t.result.entry),1),V,r("  "),C,r(" "+h(t.result.top1),1),N,r("  "),R,r(" "+h(t.result.top4),1),T,r("  ")],64))}}),j=e("span",{class:"muted"},"勝",-1),D=e("span",{class:"muted"},"敗",-1),F=_({__name:"MatchSum",props:{result:null},setup(t){return(a,c)=>(l(),u(y,null,[r(h(t.result.win),1),j,r("  "+h(t.result.lose),1),D,r("  ")],64))}}),O={key:0},q={key:0},E=e("span",{class:"muted"},"公式",-1),K={key:1},L=e("span",{class:"muted"},"非公式",-1),Q={key:1},U=e("span",{class:"muted"},"通算: ",-1),W={key:0},z=e("span",{class:"muted"},"公式大会: ",-1),A={key:1},G=e("span",{class:"muted"},"非公式大会: ",-1),I=_({__name:"ResultsSum",props:{resultsSum:null},setup(t){return(a,c)=>{const o=M,n=F;return l(),u(y,null,[t.resultsSum.tournaments.total.entry>0?(l(),u("li",O,[f(o,{result:t.resultsSum.tournaments.total},null,8,["result"]),e("ul",null,[t.resultsSum.tournaments.official.entry>0?(l(),u("li",q,[E,f(o,{result:t.resultsSum.tournaments.official},null,8,["result"])])):d("",!0),t.resultsSum.tournaments.unofficial.entry>0?(l(),u("li",K,[L,f(o,{result:t.resultsSum.tournaments.unofficial},null,8,["result"])])):d("",!0)])])):d("",!0),t.resultsSum.matches.total.win+t.resultsSum.matches.total.lose>0?(l(),u("li",Q,[U,f(n,{result:t.resultsSum.matches.total},null,8,["result"]),e("ul",null,[t.resultsSum.matches.official.win+t.resultsSum.matches.official.lose>0?(l(),u("li",W,[z,f(n,{result:t.resultsSum.matches.official},null,8,["result"])])):d("",!0),t.resultsSum.matches.unofficial.win+t.resultsSum.matches.unofficial.lose>0?(l(),u("li",A,[G,f(n,{result:t.resultsSum.matches.unofficial},null,8,["result"])])):d("",!0)])])):d("",!0)],64)}}}),H={class:"toggle"},J=["id"],P=["for"],tt=_({__name:"ToggleButton",props:{id:null,value:{type:Boolean}},emits:["toggle"],setup(t,{emit:a}){const{id:c,value:o}=t,n=$(o),s=()=>{a("toggle",n.value)};return(m,i)=>(l(),u("div",H,[w(e("input",{id:t.id,"onUpdate:modelValue":i[0]||(i[0]=g=>b(n)?n.value=g:null),type:"checkbox",onChange:s},null,40,J),[[k,p(n)]]),e("label",{for:t.id},null,8,P)]))}}),X={key:0,style:{"font-weight":"bold",color:"red"}},Y={key:1,style:{"font-weight":"bold",color:"dodgerblue"}},et=_({__name:"MatchResult",props:{win:{type:Boolean}},setup(t){return(a,c)=>t.win?(l(),u("span",X,"W")):(l(),u("span",Y,"L"))}}),S=(t,a)=>{var c,o;return((o=(c=a.tournaments.find(n=>{var s;return((s=n.info)==null?void 0:s.key)===t}))==null?void 0:c.info)==null?void 0:o.official)===!0},st=(t,a,c)=>{const o=()=>({win:0,lose:0}),n=()=>({entry:0,top1:0,top4:0}),s={matches:{official:o(),unofficial:o(),total:o()},tournaments:{official:n(),unofficial:n(),total:n()}};for(const m of t){const i=S(m.key,c)?s.matches.official:s.matches.unofficial;m.wl?(s.matches.total.win+=1,i.win+=1):(s.matches.total.lose+=1,i.lose+=1)}for(const m of a){const i=S(m.key,c)?s.tournaments.official:s.tournaments.unofficial;s.tournaments.total.entry+=1,i.entry+=1,m.result===1&&(s.tournaments.total.top1+=1,i.top1+=1),m.result<=4&&(s.tournaments.total.top4+=1,i.top4+=1)}return s},nt=t=>{const a=x();v(()=>a.query,async()=>{await t()})};export{I as _,et as a,tt as b,st as c,nt as l};