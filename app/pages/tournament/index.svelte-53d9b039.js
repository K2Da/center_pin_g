import{S as dt,i as pt,s as $t,e as k,t as M,c as E,a as T,g as R,d as c,b as F,f as K,F as o,v as J,j as L,w as Q,l as H,O as vt,x as U,n as O,o as rt,p as B,A as V,K as ct,u as gt,m as nt,M as bt,k as lt,P as kt,h as I}from"../../chunks/vendor-f8dde2ec.js";import{s as Et}from"../../chunks/global_store-13807a0e.js";import{b as at}from"../../chunks/paths-28a87002.js";import{a as ut}from"../../chunks/index_store-630c0dfd.js";import Tt from"../Header.svelte-6fae65fa.js";import Dt from"../PlaceHolder.svelte-f74872d6.js";import{T as ot}from"../../chunks/T-04ba0fac.js";import{D as it}from"../../chunks/Date-c916f5f8.js";function _t(h,t,n){const a=h.slice();return a[2]=t[n],a}function ht(h){let t,n,a,r,_,l,f,e,i,u,p;return{c(){t=k("tr"),n=k("th"),a=M("\u958B\u50AC\u65E5"),r=k("th"),_=M("\u5927\u4F1A\u540D"),l=k("th"),f=M("\u53C2\u52A0\u30C1\u30FC\u30E0"),e=k("th"),i=M("\u53C2\u52A0\u4EBA\u6570"),u=k("th"),p=M("\u8A66\u5408\u6570"),this.h()},l(D){t=E(D,"TR",{});var v=T(t);n=E(v,"TH",{});var d=T(n);a=R(d,"\u958B\u50AC\u65E5"),d.forEach(c),r=E(v,"TH",{class:!0});var j=T(r);_=R(j,"\u5927\u4F1A\u540D"),j.forEach(c),l=E(v,"TH",{});var g=T(l);f=R(g,"\u53C2\u52A0\u30C1\u30FC\u30E0"),g.forEach(c),e=E(v,"TH",{});var w=T(e);i=R(w,"\u53C2\u52A0\u4EBA\u6570"),w.forEach(c),u=E(v,"TH",{});var s=T(u);p=R(s,"\u8A66\u5408\u6570"),s.forEach(c),v.forEach(c),this.h()},h(){F(r,"class","tal")},m(D,v){K(D,t,v),o(t,n),o(n,a),o(t,r),o(r,_),o(t,l),o(l,f),o(t,e),o(e,i),o(t,u),o(u,p)},d(D){D&&c(t)}}}function yt(h){let t,n;return t=new Dt({}),{c(){J(t.$$.fragment)},l(a){Q(t.$$.fragment,a)},m(a,r){U(t,a,r),n=!0},p:bt,i(a){n||(B(t.$$.fragment,a),n=!0)},o(a){O(t.$$.fragment,a),n=!1},d(a){V(t,a)}}}function St(h){let t,n,a=h[1].tournaments,r=[];for(let l=0;l<a.length;l+=1)r[l]=mt(_t(h,a,l));const _=l=>O(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();t=lt()},l(l){for(let f=0;f<r.length;f+=1)r[f].l(l);t=lt()},m(l,f){for(let e=0;e<r.length;e+=1)r[e].m(l,f);K(l,t,f),n=!0},p(l,f){if(f&3){a=l[1].tournaments;let e;for(e=0;e<a.length;e+=1){const i=_t(l,a,e);r[e]?(r[e].p(i,f),B(r[e],1)):(r[e]=mt(i),r[e].c(),B(r[e],1),r[e].m(t.parentNode,t))}for(nt(),e=a.length;e<r.length;e+=1)_(e);rt()}},i(l){if(!n){for(let f=0;f<a.length;f+=1)B(r[f]);n=!0}},o(l){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)O(r[f]);n=!1},d(l){kt(r,l),l&&c(t)}}}function Lt(h){let t,n,a,r,_,l,f=h[2].name+"",e,i,u,p,D=h[2].team_count.toLocaleString()+"",v,d,j,g=h[2].player_count.toLocaleString()+"",w,s,b,S=h[2].match_count.toLocaleString()+"",C,A,P;return a=new it({props:{date:h[2].date}}),{c(){t=k("tr"),n=k("td"),J(a.$$.fragment),r=L(),_=k("td"),l=k("a"),e=M(f),u=L(),p=k("td"),v=M(D),d=L(),j=k("td"),w=M(g),s=L(),b=k("td"),C=M(S),A=L(),this.h()},l(y){t=E(y,"TR",{});var $=T(t);n=E($,"TD",{});var Y=T(n);Q(a.$$.fragment,Y),Y.forEach(c),r=H($),_=E($,"TD",{class:!0});var W=T(_);l=E(W,"A",{href:!0});var z=T(l);e=R(z,f),z.forEach(c),W.forEach(c),u=H($),p=E($,"TD",{});var X=T(p);v=R(X,D),X.forEach(c),d=H($),j=E($,"TD",{});var q=T(j);w=R(q,g),q.forEach(c),s=H($),b=E($,"TD",{});var m=T(b);C=R(m,S),m.forEach(c),A=H($),$.forEach(c),this.h()},h(){F(l,"href",i=""+(at+"/tournament/detail/?t="+h[2].key)),F(_,"class","tal")},m(y,$){K(y,t,$),o(t,n),U(a,n,null),o(t,r),o(t,_),o(_,l),o(l,e),o(t,u),o(t,p),o(p,v),o(t,d),o(t,j),o(j,w),o(t,s),o(t,b),o(b,C),o(t,A),P=!0},p(y,$){const Y={};$&2&&(Y.date=y[2].date),a.$set(Y),(!P||$&2)&&f!==(f=y[2].name+"")&&I(e,f),(!P||$&2&&i!==(i=""+(at+"/tournament/detail/?t="+y[2].key)))&&F(l,"href",i),(!P||$&2)&&D!==(D=y[2].team_count.toLocaleString()+"")&&I(v,D),(!P||$&2)&&g!==(g=y[2].player_count.toLocaleString()+"")&&I(w,g),(!P||$&2)&&S!==(S=y[2].match_count.toLocaleString()+"")&&I(C,S)},i(y){P||(B(a.$$.fragment,y),P=!0)},o(y){O(a.$$.fragment,y),P=!1},d(y){y&&c(t),V(a)}}}function Ht(h){let t,n,a,r=h[2].name+"",_,l,f,e,i,u,p,D,v=h[2].team_count.toLocaleString()+"",d,j,g,w,s,b=h[2].player_count.toLocaleString()+"",S,C,A,P,y,$=h[2].match_count.toLocaleString()+"",Y,W,z,X,q;return u=new it({props:{date:h[2].date}}),g=new ot({props:{t:"\u30C1\u30FC\u30E0"}}),A=new ot({props:{t:"\u4EBA"}}),z=new ot({props:{t:"\u8A66\u5408"}}),{c(){t=k("tr"),n=k("th"),a=k("a"),_=M(r),f=L(),e=k("tr"),i=k("td"),J(u.$$.fragment),p=L(),D=k("td"),d=M(v),j=L(),J(g.$$.fragment),w=L(),s=k("td"),S=M(b),C=L(),J(A.$$.fragment),P=L(),y=k("td"),Y=M($),W=L(),J(z.$$.fragment),X=L(),this.h()},l(m){t=E(m,"TR",{});var N=T(t);n=E(N,"TH",{class:!0,colspan:!0});var Z=T(n);a=E(Z,"A",{href:!0});var st=T(a);_=R(st,r),st.forEach(c),Z.forEach(c),N.forEach(c),f=H(m),e=E(m,"TR",{});var G=T(e);i=E(G,"TD",{class:!0});var ft=T(i);Q(u.$$.fragment,ft),ft.forEach(c),p=H(G),D=E(G,"TD",{});var x=T(D);d=R(x,v),j=H(x),Q(g.$$.fragment,x),x.forEach(c),w=H(G),s=E(G,"TD",{});var tt=T(s);S=R(tt,b),C=H(tt),Q(A.$$.fragment,tt),tt.forEach(c),P=H(G),y=E(G,"TD",{});var et=T(y);Y=R(et,$),W=H(et),Q(z.$$.fragment,et),et.forEach(c),X=H(G),G.forEach(c),this.h()},h(){F(a,"href",l=""+(at+"/tournament/detail/?t="+h[2].key)),F(n,"class","tal"),F(n,"colspan","4"),F(i,"class","tal")},m(m,N){K(m,t,N),o(t,n),o(n,a),o(a,_),K(m,f,N),K(m,e,N),o(e,i),U(u,i,null),o(e,p),o(e,D),o(D,d),o(D,j),U(g,D,null),o(e,w),o(e,s),o(s,S),o(s,C),U(A,s,null),o(e,P),o(e,y),o(y,Y),o(y,W),U(z,y,null),o(e,X),q=!0},p(m,N){(!q||N&2)&&r!==(r=m[2].name+"")&&I(_,r),(!q||N&2&&l!==(l=""+(at+"/tournament/detail/?t="+m[2].key)))&&F(a,"href",l);const Z={};N&2&&(Z.date=m[2].date),u.$set(Z),(!q||N&2)&&v!==(v=m[2].team_count.toLocaleString()+"")&&I(d,v),(!q||N&2)&&b!==(b=m[2].player_count.toLocaleString()+"")&&I(S,b),(!q||N&2)&&$!==($=m[2].match_count.toLocaleString()+"")&&I(Y,$)},i(m){q||(B(u.$$.fragment,m),B(g.$$.fragment,m),B(A.$$.fragment,m),B(z.$$.fragment,m),q=!0)},o(m){O(u.$$.fragment,m),O(g.$$.fragment,m),O(A.$$.fragment,m),O(z.$$.fragment,m),q=!1},d(m){m&&c(t),m&&c(f),m&&c(e),V(u),V(g),V(A),V(z)}}}function mt(h){let t,n,a,r;const _=[Ht,Lt],l=[];function f(e,i){return e[0]?0:1}return t=f(h),n=l[t]=_[t](h),{c(){n.c(),a=lt()},l(e){n.l(e),a=lt()},m(e,i){l[t].m(e,i),K(e,a,i),r=!0},p(e,i){let u=t;t=f(e),t===u?l[t].p(e,i):(nt(),O(l[u],1,1,()=>{l[u]=null}),rt(),n=l[t],n?n.p(e,i):(n=l[t]=_[t](e),n.c()),B(n,1),n.m(a.parentNode,a))},i(e){r||(B(n),r=!0)},o(e){O(n),r=!1},d(e){l[t].d(e),e&&c(a)}}}function jt(h){let t,n,a,r,_,l,f,e,i,u,p,D,v;t=new Tt({props:{title:"\u5927\u4F1A\u4E00\u89A7",type:"article",url:"tournament",description:"\u30DD\u30B1\u30E2\u30F3\u30E6\u30CA\u30A4\u30C8\u306E\u5927\u4F1A\u306E\u4E00\u89A7"}});let d=!h[0]&&ht();const j=[St,yt],g=[];function w(s,b){return s[1].tournaments?0:1}return u=w(h),p=g[u]=j[u](h),{c(){J(t.$$.fragment),n=L(),a=k("h2"),r=M("\u5927\u4F1A"),_=L(),l=k("table"),f=k("thead"),d&&d.c(),e=L(),i=k("tbody"),p.c(),this.h()},l(s){Q(t.$$.fragment,s),n=H(s),a=E(s,"H2",{});var b=T(a);r=R(b,"\u5927\u4F1A"),b.forEach(c),_=H(s),l=E(s,"TABLE",{style:!0});var S=T(l);f=E(S,"THEAD",{});var C=T(f);d&&d.l(C),C.forEach(c),e=H(S),i=E(S,"TBODY",{class:!0});var A=T(i);p.l(A),A.forEach(c),S.forEach(c),this.h()},h(){F(i,"class",D=h[0]?"double":""),vt(l,"table-layout","auto")},m(s,b){U(t,s,b),K(s,n,b),K(s,a,b),o(a,r),K(s,_,b),K(s,l,b),o(l,f),d&&d.m(f,null),o(l,e),o(l,i),g[u].m(i,null),v=!0},p(s,[b]){s[0]?d&&(d.d(1),d=null):d||(d=ht(),d.c(),d.m(f,null));let S=u;u=w(s),u===S?g[u].p(s,b):(nt(),O(g[S],1,1,()=>{g[S]=null}),rt(),p=g[u],p?p.p(s,b):(p=g[u]=j[u](s),p.c()),B(p,1),p.m(i,null)),(!v||b&1&&D!==(D=s[0]?"double":""))&&F(i,"class",D)},i(s){v||(B(t.$$.fragment,s),B(p),v=!0)},o(s){O(t.$$.fragment,s),O(p),v=!1},d(s){V(t,s),s&&c(n),s&&c(a),s&&c(_),s&&c(l),d&&d.d(),g[u].d()}}}function wt(h,t,n){let a,r;return ct(h,Et,_=>n(0,a=_)),ct(h,ut,_=>n(1,r=_)),gt(async()=>{fetch("/center_pin_g/tournament/tournaments.json").then(_=>_.json()).then(_=>ut.set(_)).catch(()=>[])}),[a,r]}class Ct extends dt{constructor(t){super();pt(this,t,wt,jt,$t,{})}}export{Ct as default};
