import{g as k,G as B,o,c,F as r,d as n,t as a,u as s,E as p,a as d}from"./B5n8RSh2.js";const D=d("span",{class:"muted"},"年",-1),$=d("span",{class:"muted"},"月",-1),C=d("span",{class:"muted"},"日",-1),N=k({__name:"CalendarDate",props:{date:{},year:{type:Boolean}},setup(_){const{date:g}=_,t=B(()=>{const e=new Date(g),m=e.getFullYear(),i=e.getMonth()+1,y=e.getDate(),u=e.getHours(),l=e.getMinutes(),h=e.getSeconds(),f=` ${u<10?"0":""}${u}:${l<10?"0":""}${l}`;return{y:m,m:i,d:y,t:f,ss:h}});return(e,m)=>(o(),c(r,null,[e.year?(o(),c(r,{key:0},[n(a(s(t).y),1),D],64)):p("",!0),n(a(s(t).m<10?" ":"")+a(s(t).m),1),$,n(a(s(t).d<10?" ":"")+a(s(t).d),1),C,s(t).ss!=1?(o(),c(r,{key:1},[n(a(s(t).t),1)],64)):p("",!0)],64))}});export{N as _};