import{_ as y}from"./d4diwJkH.js";import g from"./HWBndCJa.js";import C from"./DULmYVG-.js";import{g as x,k as v,u as B,C as N,w as V,E as o,o as e,a as n,t as u,c as a,F as _,b as i,A as d,d as D}from"./Dad8qJzO.js";import{s as R}from"./fs1Hpm0k.js";import"./Bwwhw7SK.js";import"./BsYmvPZw.js";import"./Bc18giav.js";import"./BO7R4pd-.js";import"./BMzHghEx.js";import"./DYEkULYP.js";const b={key:0,class:"attr"},q=n("span",{class:"muted"},"更新",-1),w={key:1},E=n("h3",null,"日程",-1),F={key:2},L=n("h3",null,"関連URL",-1),$=["href"],Q=x({__name:"detail",setup(A){const s=v(),h="/topic/"+s.query.t;return R(s.path),(P,S)=>{const c=y,f=g,k=C;return B(s).query.t?(e(),N(k,{key:0,path:h,head:!0},{default:V(({doc:t})=>{var p,m;return[n("article",null,[n("h2",null,u(t.title),1),t.updated?(e(),a("p",b,[t.updated?(e(),a(_,{key:0},[i(c,{date:t.updated,year:!0},null,8,["date"]),q],64)):o("",!0)])):o("",!0),((p=t.dates)==null?void 0:p.length)??0?(e(),a("div",w,[E,n("ul",null,[(e(!0),a(_,null,d(t.dates,(r,l)=>(e(),a("li",{key:l},[D(u(r.title)+":",1),i(c,{date:r.date},null,8,["date"])]))),128))])])):o("",!0),((m=t.urls)==null?void 0:m.length)??0?(e(),a("div",F,[L,n("ul",null,[(e(!0),a(_,null,d(t.urls,(r,l)=>(e(),a("li",{key:l},[n("a",{href:r.url,target:"_blank"},u(r.title),9,$)]))),128))])])):o("",!0),i(f,{value:t},null,8,["value"])])]}),_:1})):o("",!0)}}});export{Q as default};
