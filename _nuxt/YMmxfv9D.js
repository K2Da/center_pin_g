import{g as l,o as r,c as p,a as o,d as g,t as n}from"./B5n8RSh2.js";const _={style:{"text-align":"center"}},f=["disabled"],b=o("i",{class:"fas fa-fast-backward"},null,-1),m=[b],c=["disabled"],u=o("i",{class:"fas fa-step-backward"},null,-1),N=[u],h=["disabled"],k=o("i",{class:"fas fa-step-forward"},null,-1),P=[k],v=["disabled"],C=o("i",{class:"fas fa-fast-forward"},null,-1),w=[C],y=l({__name:"ListPager",props:{pageNo:{},maxPage:{}},emits:["change"],setup($,{emit:i}){const d=i,a=s=>{d("change",s)};return(s,e)=>(r(),p("div",_,[o("button",{disabled:s.pageNo<=1,onClick:e[0]||(e[0]=t=>a(1))},m,8,f),o("button",{disabled:s.pageNo<=1,onClick:e[1]||(e[1]=t=>a(s.pageNo-1))},N,8,c),g(" "+n(s.pageNo)+" / "+n(s.maxPage)+" ",1),o("button",{disabled:s.pageNo>=s.maxPage,onClick:e[2]||(e[2]=t=>a(s.pageNo+1))},P,8,h),o("button",{disabled:s.pageNo>=s.maxPage,onClick:e[3]||(e[3]=t=>a(s.maxPage))},w,8,v)]))}});export{y as _};