import{S as it,i as ut,s as _t,e as v,t as C,k as H,c as k,a as T,h as Q,d as u,m as L,b as P,g as z,H as s,w as G,x as I,f as mt,y as J,o as q,p as et,q as N,B as K,M as rt,n as lt,O as ht,l as x,Q as dt,j as V}from"../../chunks/vendor-5fd0e214.js";import{s as $t,t as pt}from"../../chunks/global-86689bdb.js";import{H as gt}from"../../chunks/Header-822c9477.js";import{P as bt,D as ft,T as tt}from"../../chunks/PopUpA-25be72b7.js";import{T as ct}from"../../chunks/TournamentName-73c76487.js";import"../../chunks/navigation-c0b2019f.js";import"../../chunks/singletons-a6a7384f.js";import"../../chunks/paths-4b3c6e7e.js";function nt(_,t,n){const l=_.slice();return l[2]=t[n],l}function ot(_){let t,n,l,o,c,e,f,a,i,y,p,g,S,w,h,M,E;return{c(){t=v("tr"),n=v("th"),l=C("\u958B\u50AC\u65E5"),o=H(),c=v("th"),e=C("\u5927\u4F1A\u540D"),f=H(),a=v("th"),i=C("\u53C2\u52A0\u30C1\u30FC\u30E0"),y=H(),p=v("th"),g=C("\u53C2\u52A0\u4EBA\u6570"),S=H(),w=v("th"),h=C("\u8A66\u5408\u6570"),M=H(),E=v("th"),this.h()},l(B){t=k(B,"TR",{});var r=T(t);n=k(r,"TH",{});var b=T(n);l=Q(b,"\u958B\u50AC\u65E5"),b.forEach(u),o=L(r),c=k(r,"TH",{class:!0});var D=T(c);e=Q(D,"\u5927\u4F1A\u540D"),D.forEach(u),f=L(r),a=k(r,"TH",{class:!0});var A=T(a);i=Q(A,"\u53C2\u52A0\u30C1\u30FC\u30E0"),A.forEach(u),y=L(r),p=k(r,"TH",{class:!0});var d=T(p);g=Q(d,"\u53C2\u52A0\u4EBA\u6570"),d.forEach(u),S=L(r),w=k(r,"TH",{class:!0});var $=T(w);h=Q($,"\u8A66\u5408\u6570"),$.forEach(u),M=L(r),E=k(r,"TH",{}),T(E).forEach(u),r.forEach(u),this.h()},h(){P(c,"class","tal"),P(a,"class","tar"),P(p,"class","tar"),P(w,"class","tar")},m(B,r){z(B,t,r),s(t,n),s(n,l),s(t,o),s(t,c),s(c,e),s(t,f),s(t,a),s(a,i),s(t,y),s(t,p),s(p,g),s(t,S),s(t,w),s(w,h),s(t,M),s(t,E)},d(B){B&&u(t)}}}function vt(_){let t,n;return t=new bt({}),{c(){G(t.$$.fragment)},l(l){I(t.$$.fragment,l)},m(l,o){J(t,l,o),n=!0},p:ht,i(l){n||(N(t.$$.fragment,l),n=!0)},o(l){q(t.$$.fragment,l),n=!1},d(l){K(t,l)}}}function kt(_){let t,n,l=_[1].list,o=[];for(let e=0;e<l.length;e+=1)o[e]=st(nt(_,l,e));const c=e=>q(o[e],1,1,()=>{o[e]=null});return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=x()},l(e){for(let f=0;f<o.length;f+=1)o[f].l(e);t=x()},m(e,f){for(let a=0;a<o.length;a+=1)o[a].m(e,f);z(e,t,f),n=!0},p(e,f){if(f&3){l=e[1].list;let a;for(a=0;a<l.length;a+=1){const i=nt(e,l,a);o[a]?(o[a].p(i,f),N(o[a],1)):(o[a]=st(i),o[a].c(),N(o[a],1),o[a].m(t.parentNode,t))}for(lt(),a=l.length;a<o.length;a+=1)c(a);et()}},i(e){if(!n){for(let f=0;f<l.length;f+=1)N(o[f]);n=!0}},o(e){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)q(o[f]);n=!1},d(e){dt(o,e),e&&u(t)}}}function Tt(_){let t,n,l,o,c,e,f,a,i=_[2].team_count.toLocaleString()+"",y,p,g,S=_[2].player_count.toLocaleString()+"",w,h,M,E=_[2].match_count.toLocaleString()+"",B,r,b,D,A;return l=new ft({props:{date:_[2].date}}),e=new ct({props:{name:_[2].name,key:_[2].key,official:_[2].info.official}}),{c(){t=v("tr"),n=v("td"),G(l.$$.fragment),o=H(),c=v("td"),G(e.$$.fragment),f=H(),a=v("td"),y=C(i),p=H(),g=v("td"),w=C(S),h=H(),M=v("td"),B=C(E),r=H(),b=v("td"),D=H(),this.h()},l(d){t=k(d,"TR",{});var $=T(t);n=k($,"TD",{});var O=T(n);I(l.$$.fragment,O),O.forEach(u),o=L($),c=k($,"TD",{class:!0});var Y=T(c);I(e.$$.fragment,Y),Y.forEach(u),f=L($),a=k($,"TD",{class:!0});var F=T(a);y=Q(F,i),F.forEach(u),p=L($),g=k($,"TD",{class:!0});var m=T(g);w=Q(m,S),m.forEach(u),h=L($),M=k($,"TD",{class:!0});var R=T(M);B=Q(R,E),R.forEach(u),r=L($),b=k($,"TD",{}),T(b).forEach(u),D=L($),$.forEach(u),this.h()},h(){P(c,"class","tal"),P(a,"class","tar"),P(g,"class","tar"),P(M,"class","tar")},m(d,$){z(d,t,$),s(t,n),J(l,n,null),s(t,o),s(t,c),J(e,c,null),s(t,f),s(t,a),s(a,y),s(t,p),s(t,g),s(g,w),s(t,h),s(t,M),s(M,B),s(t,r),s(t,b),s(t,D),A=!0},p(d,$){const O={};$&2&&(O.date=d[2].date),l.$set(O);const Y={};$&2&&(Y.name=d[2].name),$&2&&(Y.key=d[2].key),$&2&&(Y.official=d[2].info.official),e.$set(Y),(!A||$&2)&&i!==(i=d[2].team_count.toLocaleString()+"")&&V(y,i),(!A||$&2)&&S!==(S=d[2].player_count.toLocaleString()+"")&&V(w,S),(!A||$&2)&&E!==(E=d[2].match_count.toLocaleString()+"")&&V(B,E)},i(d){A||(N(l.$$.fragment,d),N(e.$$.fragment,d),A=!0)},o(d){q(l.$$.fragment,d),q(e.$$.fragment,d),A=!1},d(d){d&&u(t),K(l),K(e)}}}function Et(_){let t,n,l,o,c,e,f,a,i,y=_[2].team_count.toLocaleString()+"",p,g,S,w,h,M=_[2].player_count.toLocaleString()+"",E,B,r,b,D,A=_[2].match_count.toLocaleString()+"",d,$,O,Y,F;return l=new ct({props:{name:_[2].name,key:_[2].key,official:_[2].info.official}}),f=new ft({props:{date:_[2].date}}),S=new tt({props:{t:"\u30C1\u30FC\u30E0"}}),r=new tt({props:{t:"\u4EBA"}}),O=new tt({props:{t:"\u8A66\u5408"}}),{c(){t=v("tr"),n=v("th"),G(l.$$.fragment),o=H(),c=v("tr"),e=v("td"),G(f.$$.fragment),a=H(),i=v("td"),p=C(y),g=H(),G(S.$$.fragment),w=H(),h=v("td"),E=C(M),B=H(),G(r.$$.fragment),b=H(),D=v("td"),d=C(A),$=H(),G(O.$$.fragment),Y=H(),this.h()},l(m){t=k(m,"TR",{});var R=T(t);n=k(R,"TH",{class:!0,colspan:!0});var U=T(n);I(l.$$.fragment,U),U.forEach(u),R.forEach(u),o=L(m),c=k(m,"TR",{});var j=T(c);e=k(j,"TD",{class:!0});var at=T(e);I(f.$$.fragment,at),at.forEach(u),a=L(j),i=k(j,"TD",{});var W=T(i);p=Q(W,y),g=L(W),I(S.$$.fragment,W),W.forEach(u),w=L(j),h=k(j,"TD",{});var X=T(h);E=Q(X,M),B=L(X),I(r.$$.fragment,X),X.forEach(u),b=L(j),D=k(j,"TD",{});var Z=T(D);d=Q(Z,A),$=L(Z),I(O.$$.fragment,Z),Z.forEach(u),Y=L(j),j.forEach(u),this.h()},h(){P(n,"class","tal"),P(n,"colspan","4"),P(e,"class","tal")},m(m,R){z(m,t,R),s(t,n),J(l,n,null),z(m,o,R),z(m,c,R),s(c,e),J(f,e,null),s(c,a),s(c,i),s(i,p),s(i,g),J(S,i,null),s(c,w),s(c,h),s(h,E),s(h,B),J(r,h,null),s(c,b),s(c,D),s(D,d),s(D,$),J(O,D,null),s(c,Y),F=!0},p(m,R){const U={};R&2&&(U.name=m[2].name),R&2&&(U.key=m[2].key),R&2&&(U.official=m[2].info.official),l.$set(U);const j={};R&2&&(j.date=m[2].date),f.$set(j),(!F||R&2)&&y!==(y=m[2].team_count.toLocaleString()+"")&&V(p,y),(!F||R&2)&&M!==(M=m[2].player_count.toLocaleString()+"")&&V(E,M),(!F||R&2)&&A!==(A=m[2].match_count.toLocaleString()+"")&&V(d,A)},i(m){F||(N(l.$$.fragment,m),N(f.$$.fragment,m),N(S.$$.fragment,m),N(r.$$.fragment,m),N(O.$$.fragment,m),F=!0)},o(m){q(l.$$.fragment,m),q(f.$$.fragment,m),q(S.$$.fragment,m),q(r.$$.fragment,m),q(O.$$.fragment,m),F=!1},d(m){m&&u(t),K(l),m&&u(o),m&&u(c),K(f),K(S),K(r),K(O)}}}function st(_){let t,n,l,o;const c=[Et,Tt],e=[];function f(a,i){return a[0]?0:1}return t=f(_),n=e[t]=c[t](_),{c(){n.c(),l=x()},l(a){n.l(a),l=x()},m(a,i){e[t].m(a,i),z(a,l,i),o=!0},p(a,i){let y=t;t=f(a),t===y?e[t].p(a,i):(lt(),q(e[y],1,1,()=>{e[y]=null}),et(),n=e[t],n?n.p(a,i):(n=e[t]=c[t](a),n.c()),N(n,1),n.m(l.parentNode,l))},i(a){o||(N(n),o=!0)},o(a){q(n),o=!1},d(a){e[t].d(a),a&&u(l)}}}function yt(_){let t,n,l,o,c,e,f,a,i,y,p,g,S,w;t=new gt({props:{title:"\u5927\u4F1A\u4E00\u89A7",type:"article",url:"tournament",description:"\u30DD\u30B1\u30E2\u30F3\u30E6\u30CA\u30A4\u30C8\u306E\u5927\u4F1A\u306E\u4E00\u89A7"}});let h=!_[0]&&ot();const M=[kt,vt],E=[];function B(r,b){return b&2&&(y=null),y==null&&(y=!!Array.isArray(r[1].list)),y?0:1}return p=B(_,-1),g=E[p]=M[p](_),{c(){G(t.$$.fragment),n=H(),l=v("h2"),o=C("\u5927\u4F1A"),c=H(),e=v("table"),f=v("thead"),h&&h.c(),a=H(),i=v("tbody"),g.c(),this.h()},l(r){I(t.$$.fragment,r),n=L(r),l=k(r,"H2",{});var b=T(l);o=Q(b,"\u5927\u4F1A"),b.forEach(u),c=L(r),e=k(r,"TABLE",{style:!0});var D=T(e);f=k(D,"THEAD",{});var A=T(f);h&&h.l(A),A.forEach(u),a=L(D),i=k(D,"TBODY",{class:!0});var d=T(i);g.l(d),d.forEach(u),D.forEach(u),this.h()},h(){P(i,"class",S=_[0]?"double":""),mt(e,"table-layout","auto")},m(r,b){J(t,r,b),z(r,n,b),z(r,l,b),s(l,o),z(r,c,b),z(r,e,b),s(e,f),h&&h.m(f,null),s(e,a),s(e,i),E[p].m(i,null),w=!0},p(r,[b]){r[0]?h&&(h.d(1),h=null):h||(h=ot(),h.c(),h.m(f,null));let D=p;p=B(r,b),p===D?E[p].p(r,b):(lt(),q(E[D],1,1,()=>{E[D]=null}),et(),g=E[p],g?g.p(r,b):(g=E[p]=M[p](r),g.c()),N(g,1),g.m(i,null)),(!w||b&1&&S!==(S=r[0]?"double":""))&&P(i,"class",S)},i(r){w||(N(t.$$.fragment,r),N(g),w=!0)},o(r){q(t.$$.fragment,r),q(g),w=!1},d(r){K(t,r),r&&u(n),r&&u(l),r&&u(c),r&&u(e),h&&h.d(),E[p].d()}}}function Dt(_,t,n){let l,o;return rt(_,$t,c=>n(0,l=c)),rt(_,pt,c=>n(1,o=c)),[l,o]}class Nt extends it{constructor(t){super();ut(this,t,Dt,yt,_t,{})}}export{Nt as default};
