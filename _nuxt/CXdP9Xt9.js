import{g as k,J as F,o as d,c as m,d as s,t as a,u as e,F as r,E as _,a as n}from"./Dad8qJzO.js";const x=n("span",{class:"muted"},"年",-1),B=n("span",{class:"muted"},"月",-1),N=n("span",{class:"muted"},"日",-1),V=n("span",{class:"muted"},"年",-1),w=n("span",{class:"muted"},"月",-1),C=n("span",{class:"muted"},"日",-1),M=k({__name:"DateSpan",props:{date1:{},date2:{}},setup(u){const{date1:l,date2:p}=u,t=F(()=>{const o=new Date(l),c=new Date(p),y=o.getFullYear()%100,i=o.getMonth()+1,g=o.getDate(),h=c.getFullYear()%100,D=c.getMonth()+1,f=c.getDate();return{y1:y,m1:i,d1:g,y2:h,m2:D,d2:f}});return(o,c)=>(d(),m(r,null,[s(" '"+a(e(t).y1)+" ",1),x,s(" "+a(e(t).m1)+" ",1),B,s(" "+a(e(t).d1)+" ",1),N,e(t).y1!==e(t).y2||e(t).m1!==e(t).m2||e(t).d1!==e(t).d2?(d(),m(r,{key:0},[s(" 〜 "),e(t).y1!==e(t).y2?(d(),m(r,{key:0},[s(" '"+a(e(t).y2)+" ",1),V],64)):_("",!0),s(" "+a(e(t).m2)+" ",1),w,s(" "+a(e(t).d2)+" ",1),C],64)):_("",!0)],64))}});export{M as _};