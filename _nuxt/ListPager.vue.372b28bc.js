import{a as l,o as c,e as g,f as a,y as f,t as i}from"./entry.e08aeb02.js";const u={style:{"text-align":"center"}},b=["disabled"],m=a("i",{class:"fas fa-fast-backward"},null,-1),_=[m],r=["disabled"],x=a("i",{class:"fas fa-step-backward"},null,-1),N=[x],h=["disabled"],k=a("i",{class:"fas fa-step-forward"},null,-1),P=[k],v=["disabled"],y=a("i",{class:"fas fa-fast-forward"},null,-1),C=[y],$=l({__name:"ListPager",props:{pageNo:null,maxPage:null},emits:["change"],setup(e,{emit:d}){const s=o=>{d("change",o)};return(o,t)=>(c(),g("div",u,[a("button",{disabled:e.pageNo<=1,onClick:t[0]||(t[0]=n=>s(1))},_,8,b),a("button",{disabled:e.pageNo<=1,onClick:t[1]||(t[1]=n=>s(e.pageNo-1))},N,8,r),f(" "+i(e.pageNo)+" / "+i(e.maxPage)+" ",1),a("button",{disabled:e.pageNo>=e.maxPage,onClick:t[2]||(t[2]=n=>s(e.pageNo+1))},P,8,h),a("button",{disabled:e.pageNo>=e.maxPage,onClick:t[3]||(t[3]=n=>s(e.maxPage))},C,8,v)]))}});export{$ as _};
