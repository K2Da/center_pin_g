import{a as l,I as r,o as m,b as u,f as a,t,u as e,e as n}from"./entry.b92543de.js";const h={key:0,class:"m"},y=n("span",{class:"muted"},"\u5E74",-1),g=n("span",{class:"muted"},"\u6708",-1),f=n("span",{class:"muted"},"\u65E5",-1),x={key:1,class:"m"},E=n("span",{class:"muted"},"\u5E74",-1),k=n("span",{class:"muted"},"\u6708",-1),B=n("span",{class:"muted"},"\u65E5",-1),N=l({__name:"DateTime",props:{date:null,spacing:{type:Boolean}},setup(c){const{date:_,spacing:D}=c,s=r(()=>{const o=new Date(_),d=o.getFullYear()%100,p=o.getMonth()+1,i=o.getDate();return{y:d,m:p,d:i}});return(o,d)=>c.spacing?(m(),u("span",h,[a(" '"+t(e(s).y),1),y,a(t(e(s).m<10?"\xA0":"")+t(e(s).m),1),g,a(t(e(s).d<10?"\xA0":"")+t(e(s).d),1),f])):(m(),u("span",x,[a(" '"+t(e(s).y),1),E,a(t(e(s).m),1),k,a(t(e(s).d),1),B]))}});export{N as _};