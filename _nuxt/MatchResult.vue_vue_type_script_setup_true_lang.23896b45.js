import{a as c,o as e,e as u,h as n,t as a,F as _,f as s,q as l,p as o}from"./entry.38f1a035.js";const h=s("span",{class:"muted"},"\u51FA\u5834:",-1),f=s("span",{class:"muted"},"\u5927\u4F1A",-1),S=n("\xA0 "),$=s("span",{class:"muted"},"\u512A\u52DD:",-1),y=s("span",{class:"muted"},"\u56DE",-1),F=n("\xA0 "),x=s("span",{class:"muted"},"Top 4:",-1),A=s("span",{class:"muted"},"\u56DE",-1),k=n("\xA0 "),w=c({__name:"TournamentSum",props:{result:null},setup(t){return(r,m)=>(e(),u(_,null,[h,n(" "+a(t.result.entry),1),f,S,$,n(" "+a(t.result.top1),1),y,F,x,n(" "+a(t.result.top4),1),A,k],64))}}),D=s("span",{class:"muted"},"\u52DD",-1),C=s("span",{class:"muted"},"\u6557",-1),g=n("\xA0 "),p=c({__name:"MatchSum",props:{result:null},setup(t){return(r,m)=>(e(),u(_,null,[n(a(t.result.win),1),D,n("\xA0 "+a(t.result.lose),1),C,g],64))}}),B={key:0},E={key:0},N=s("span",{class:"muted"},"\u516C\u5F0F",-1),T={key:1},V=s("span",{class:"muted"},"\u975E\u516C\u5F0F",-1),b={key:1},M=s("span",{class:"muted"},"\u901A\u7B97: ",-1),R={key:0},q=s("span",{class:"muted"},"\u516C\u5F0F\u5927\u4F1A: ",-1),L={key:1},W=s("span",{class:"muted"},"\u975E\u516C\u5F0F\u5927\u4F1A: ",-1),G=c({__name:"ResultsSum",props:{resultsSum:null},setup(t){return(r,m)=>{const i=w,d=p;return e(),u(_,null,[t.resultsSum.tournaments.total.entry>0?(e(),u("li",B,[l(i,{result:t.resultsSum.tournaments.total},null,8,["result"]),s("ul",null,[t.resultsSum.tournaments.official.entry>0?(e(),u("li",E,[N,l(i,{result:t.resultsSum.tournaments.official},null,8,["result"])])):o("",!0),t.resultsSum.tournaments.unofficial.entry>0?(e(),u("li",T,[V,l(i,{result:t.resultsSum.tournaments.unofficial},null,8,["result"])])):o("",!0)])])):o("",!0),t.resultsSum.matches.total.win+t.resultsSum.matches.total.lose>0?(e(),u("li",b,[M,l(d,{result:t.resultsSum.matches.total},null,8,["result"]),s("ul",null,[t.resultsSum.matches.official.win+t.resultsSum.matches.official.lose>0?(e(),u("li",R,[q,l(d,{result:t.resultsSum.matches.official},null,8,["result"])])):o("",!0),t.resultsSum.matches.unofficial.win+t.resultsSum.matches.unofficial.lose>0?(e(),u("li",L,[W,l(d,{result:t.resultsSum.matches.unofficial},null,8,["result"])])):o("",!0)])])):o("",!0)],64)}}}),j={key:0,style:{"font-weight":"bold",color:"red"}},v={key:1,style:{"font-weight":"bold",color:"dodgerblue"}},H=c({__name:"MatchResult",props:{win:{type:Boolean}},setup(t){return(r,m)=>t.win?(e(),u("span",j,"W")):(e(),u("span",v,"L"))}});export{G as _,H as a};