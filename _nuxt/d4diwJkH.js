import{g as f,J as k,o,c,F as r,d as n,t as a,u as s,E as p,a as d}from"./Dad8qJzO.js";const B=d("span",{class:"muted"},"年",-1),D=d("span",{class:"muted"},"月",-1),$=d("span",{class:"muted"},"日",-1),F=f({__name:"CalendarDate",props:{date:{},year:{type:Boolean}},setup(_){const{date:i}=_,e=k(()=>{const t=new Date(i),m=t.getFullYear(),g=t.getMonth()+1,y=t.getDate(),u=t.getHours(),l=t.getMinutes(),h=` ${u<10?"0":""}${u}:${l<10?"0":""}${l}`;return{y:m,m:g,d:y,t:h}});return(t,m)=>(o(),c(r,null,[t.year?(o(),c(r,{key:0},[n(a(s(e).y),1),B],64)):p("",!0),n(a(s(e).m<10?" ":"")+a(s(e).m),1),D,n(a(s(e).d<10?" ":"")+a(s(e).d),1),$,s(e).t!=" 00:00"?(o(),c(r,{key:1},[n(a(s(e).t),1)],64)):p("",!0)],64))}});export{F as _};