import{_ as D}from"./BUunUwU5.js";import{g as $,y as L,D as b,o as n,c as s,A as l,b as a,w as p,a as o,d as t,t as h,F as c,E as d,u as q,e as C,k as B}from"./BBkzEklE.js";import{_ as P}from"./D5P21drR.js";import T from"./BqNKFDFr.js";import V from"./Crhy2s4M.js";import{q as A}from"./8tetxUNc.js";import{s as E}from"./BIjZ8_eU.js";import"./ClrTF2v6.js";import"./BsYmvPZw.js";import"./rvZZKCfl.js";import"./CnkAA0Ux.js";import"./xkhCjafl.js";const F={class:"attr"},R=o("span",{class:"muted"},"更新",-1),G={key:0},I={key:0},S=["href"],U={key:0,class:"more"},X=$({__name:"latest",async setup(N){let r,i;const{data:f}=([r,i]=L(()=>b(()=>A("/topic").where({updated:{$exists:!0}}).sort({updated:-1}).limit(5).find(),"$ePX3keoNGB")),r=await r,i(),r);return(x,m)=>{const u=C,y=P,v=T,w=V;return n(!0),s(c,null,l(q(f),e=>(n(),s("div",{key:e._path},[a(w,{path:e._path,head:!1},{default:p(({doc:O})=>{var k;return[o("article",null,[o("h3",null,[t(h(e.title),1),e.excerpt?(n(),s(c,{key:0},[t(" ["),a(u,{to:{name:"topic-detail",query:{t:e._path.substring(7)}},"no-prefetch":""},{default:p(()=>[t("+")]),_:2},1032,["to"]),t("]")],64)):d("",!0)]),o("p",F,[a(y,{date:e.updated},null,8,["date"]),R,((k=e.dates)==null?void 0:k.length)??0?(n(),s("strong",G," | ")):d("",!0),(n(!0),s(c,null,l(e.dates,(_,g)=>(n(),s("span",{key:g},[g>0?(n(),s("strong",I," | ")):d("",!0),t(" "+h(_.title)+":",1),a(y,{date:_.date},null,8,["date"])]))),128))]),o("ul",null,[(n(!0),s(c,null,l(e.urls,_=>(n(),s("li",{key:_.url,style:{margin:"0 0 0 16px"}},[o("a",{href:_.url,target:"_blank"},h(_.title),9,S)]))),128))]),a(v,{value:e,excerpt:e.excerpt},null,8,["value","excerpt"]),e.excerpt?(n(),s("p",U,[t(" 要約表示中 ["),a(u,{to:{name:"topic-detail",query:{t:e._path.substring(7)}},"no-prefetch":""},{default:p(()=>[t("全文")]),_:2},1032,["to"]),t("] ")])):d("",!0)])]}),_:2},1032,["path"])]))),128)}}}),j=o("h1",null,"Center Pin(g)",-1),z={class:"container"},H={class:"calendar"},J={class:"more"},K={style:{"flex-grow":"1",padding:"4px"}},M={class:"more"},ct=$({__name:"index",setup(N){const r=B();return E(r.path,"Topic","Pokémon UNITE大会結果収集サイト","site"),(i,f)=>{const x=D,m=C,u=X;return n(),s(c,null,[j,o("div",z,[o("div",H,[a(x,{day:7}),o("p",J,[t(" カレンダー前後一週間表示中 ["),a(m,{to:{name:"calendar"}},{default:p(()=>[t("+ more")]),_:1}),t("] ")])]),o("div",K,[a(u),o("p",M,[t(" トピック最新更新5件表示中 ["),a(m,{to:{name:"topic"}},{default:p(()=>[t("+ more")]),_:1}),t("] ")])])])],64)}}});export{ct as default};
