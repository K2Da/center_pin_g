import{a as u,k as c,o as d,b as r,w as g,v as m,u as f,f as l,m as v}from"./entry.35114979.js";const p={class:"toggle"},_=["id"],h=["for"],x=u({__name:"ToggleButton",props:{id:null,value:{type:Boolean}},emits:["toggle"],setup(o,{emit:n}){const{id:b,value:s}=o,e=c(s),a=()=>{n("toggle",e.value)};return(k,t)=>(d(),r("div",p,[g(l("input",{id:o.id,"onUpdate:modelValue":t[0]||(t[0]=i=>v(e)?e.value=i:null),type:"checkbox",onChange:a},null,40,_),[[m,f(e)]]),l("label",{for:o.id},null,8,h)]))}});export{x as _};
