import{_ as B}from"./Dex_BGvp.js";import{g as C,y as D,D as L,o as e,c as n,B as m,b as a,w as i,a as s,d as o,t as l,F as c,E as u,u as P,e as $,k as b}from"./DOrGe8Fs.js";import{_ as q}from"./CGYfdVf5.js";import V from"./DVXq4QdX.js";import E from"./B-gYh91A.js";import{q as T}from"./Cn6VK3Y4.js";import{s as A}from"./D9K2PisV.js";import"./BD16y60x.js";import"./1vGBjYrh.js";import"./BsYmvPZw.js";import"./BG50tLiw.js";import"./PfhwU4ko.js";import"./BhzsHbCy.js";const F={class:"attr"},R=s("span",{class:"muted"},"更新",-1),G={key:0},I={key:0},S=["href"],U={key:0,class:"more"},X=C({__name:"latest",async setup(N){let r,d;const{data:h}=([r,d]=D(()=>L(()=>T("/topic").where({updated:{$exists:!0}}).sort({updated:-1}).limit(5).find(),"$ePX3keoNGB")),r=await r,d(),r);return(f,x)=>{const p=$,y=q,v=V,w=E;return e(!0),n(c,null,m(P(h),t=>(e(),n("div",{key:t._path},[a(w,{path:t._path,head:!1},{default:i(({doc:M})=>{var g;return[s("article",null,[s("h3",null,[o(l(t.title),1),t.excerpt?(e(),n(c,{key:0},[o(" ["),a(p,{to:{name:"topic-detail",query:{t:t._path.substring(7)}},"no-prefetch":""},{default:i(()=>[o("+")]),_:2},1032,["to"]),o("]")],64)):u("",!0)]),s("p",F,[a(y,{date:t.updated},null,8,["date"]),R,((g=t.dates)==null?void 0:g.length)??0?(e(),n("strong",G," | ")):u("",!0),(e(!0),n(c,null,m(t.dates,(_,k)=>(e(),n("span",{key:k},[k>0?(e(),n("strong",I," | ")):u("",!0),o(" "+l(_.title)+":",1),a(y,{date:_.date},null,8,["date"])]))),128))]),s("ul",null,[(e(!0),n(c,null,m(t.urls,_=>(e(),n("li",{key:_.url,style:{margin:"0 0 0 16px"}},[s("a",{href:_.url,target:"_blank"},l(_.title),9,S)]))),128))]),a(v,{value:t,excerpt:!!t.excerpt},null,8,["value","excerpt"]),t.excerpt?(e(),n("p",U,[o(" 要約表示中 ["),a(p,{to:{name:"topic-detail",query:{t:t._path.substring(7)}},"no-prefetch":""},{default:i(()=>[o("全文")]),_:2},1032,["to"]),o("] ")])):u("",!0)])]}),_:2},1032,["path"])]))),128)}}}),j=s("h1",null,"Center Pin(g)",-1),z={class:"container"},H={class:"calendar"},J={style:{"flex-grow":"1",padding:"4px"}},K={class:"more"},ct=C({__name:"index",setup(N){const r=b();return A(r.path,"Center Pin(g)","Pokémon UNITE大会結果収集サイト","site"),(d,h)=>{const f=B,x=X,p=$;return e(),n(c,null,[j,s("div",z,[s("div",H,[a(f,{prev:3,next:7})]),s("div",J,[a(x),s("p",K,[o(" トピック最新更新5件表示中 ["),a(p,{to:{name:"topic"}},{default:i(()=>[o("+ more")]),_:1}),o("] ")])])])],64)}}});export{ct as default};
