import{C as ut,S as mt,i as _t,s as ht,e as v,t as q,j as y,c as T,a as E,g as F,d as m,l as S,b as C,f as Y,F as o,v as G,w as I,O as dt,x as J,n as B,o as tt,p as A,A as Q,K as nt,u as $t,m as et,M as pt,k as x,P as gt,h as V}from"../../chunks/vendor-183b23ac.js";import{s as bt}from"../../chunks/global_store-bb706853.js";import kt from"../Header.svelte-3bf176e4.js";import vt from"../PlaceHolder.svelte-cef2a10b.js";import{T as at}from"../../chunks/T-f1f1b14a.js";import{D as rt}from"../../chunks/Date-c4b5d8a5.js";import{T as ot}from"../../chunks/TournamentName-2fd546dc.js";import"../../chunks/paths-28a87002.js";const st=ut({tournaments:[]});function ft(_,t,n){const a=_.slice();return a[2]=t[n],a}function ct(_){let t,n,a,r,s,e,c,l,u,d,g,L,D,$,w,k,M;return{c(){t=v("tr"),n=v("th"),a=q("\u958B\u50AC\u65E5"),r=y(),s=v("th"),e=q("\u5927\u4F1A\u540D"),c=y(),l=v("th"),u=q("\u53C2\u52A0\u30C1\u30FC\u30E0"),d=y(),g=v("th"),L=q("\u53C2\u52A0\u4EBA\u6570"),D=y(),$=v("th"),w=q("\u8A66\u5408\u6570"),k=y(),M=v("th"),this.h()},l(f){t=T(f,"TR",{});var i=E(t);n=T(i,"TH",{});var H=E(n);a=F(H,"\u958B\u50AC\u65E5"),H.forEach(m),r=S(i),s=T(i,"TH",{class:!0});var N=E(s);e=F(N,"\u5927\u4F1A\u540D"),N.forEach(m),c=S(i),l=T(i,"TH",{class:!0});var j=E(l);u=F(j,"\u53C2\u52A0\u30C1\u30FC\u30E0"),j.forEach(m),d=S(i),g=T(i,"TH",{class:!0});var b=E(g);L=F(b,"\u53C2\u52A0\u4EBA\u6570"),b.forEach(m),D=S(i),$=T(i,"TH",{class:!0});var p=E($);w=F(p,"\u8A66\u5408\u6570"),p.forEach(m),k=S(i),M=T(i,"TH",{}),E(M).forEach(m),i.forEach(m),this.h()},h(){C(s,"class","tal"),C(l,"class","tar"),C(g,"class","tar"),C($,"class","tar")},m(f,i){Y(f,t,i),o(t,n),o(n,a),o(t,r),o(t,s),o(s,e),o(t,c),o(t,l),o(l,u),o(t,d),o(t,g),o(g,L),o(t,D),o(t,$),o($,w),o(t,k),o(t,M)},d(f){f&&m(t)}}}function Tt(_){let t,n;return t=new vt({}),{c(){G(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,r){J(t,a,r),n=!0},p:pt,i(a){n||(A(t.$$.fragment,a),n=!0)},o(a){B(t.$$.fragment,a),n=!1},d(a){Q(t,a)}}}function Et(_){let t,n,a=_[1].tournaments,r=[];for(let e=0;e<a.length;e+=1)r[e]=it(ft(_,a,e));const s=e=>B(r[e],1,1,()=>{r[e]=null});return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let c=0;c<r.length;c+=1)r[c].l(e);t=x()},m(e,c){for(let l=0;l<r.length;l+=1)r[l].m(e,c);Y(e,t,c),n=!0},p(e,c){if(c&3){a=e[1].tournaments;let l;for(l=0;l<a.length;l+=1){const u=ft(e,a,l);r[l]?(r[l].p(u,c),A(r[l],1)):(r[l]=it(u),r[l].c(),A(r[l],1),r[l].m(t.parentNode,t))}for(et(),l=a.length;l<r.length;l+=1)s(l);tt()}},i(e){if(!n){for(let c=0;c<a.length;c+=1)A(r[c]);n=!0}},o(e){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)B(r[c]);n=!1},d(e){gt(r,e),e&&m(t)}}}function Dt(_){let t,n,a,r,s,e,c,l,u=_[2].team_count.toLocaleString()+"",d,g,L,D=_[2].player_count.toLocaleString()+"",$,w,k,M=_[2].match_count.toLocaleString()+"",f,i,H,N,j;return a=new rt({props:{date:_[2].date}}),e=new ot({props:{name:_[2].name,key:_[2].key,official:_[2].info.official}}),{c(){t=v("tr"),n=v("td"),G(a.$$.fragment),r=y(),s=v("td"),G(e.$$.fragment),c=y(),l=v("td"),d=q(u),g=y(),L=v("td"),$=q(D),w=y(),k=v("td"),f=q(M),i=y(),H=v("td"),N=y(),this.h()},l(b){t=T(b,"TR",{});var p=E(t);n=T(p,"TD",{});var P=E(n);I(a.$$.fragment,P),P.forEach(m),r=S(p),s=T(p,"TD",{class:!0});var K=E(s);I(e.$$.fragment,K),K.forEach(m),c=S(p),l=T(p,"TD",{class:!0});var z=E(l);d=F(z,u),z.forEach(m),g=S(p),L=T(p,"TD",{class:!0});var h=E(L);$=F(h,D),h.forEach(m),w=S(p),k=T(p,"TD",{class:!0});var R=E(k);f=F(R,M),R.forEach(m),i=S(p),H=T(p,"TD",{}),E(H).forEach(m),N=S(p),p.forEach(m),this.h()},h(){C(s,"class","tal"),C(l,"class","tar"),C(L,"class","tar"),C(k,"class","tar")},m(b,p){Y(b,t,p),o(t,n),J(a,n,null),o(t,r),o(t,s),J(e,s,null),o(t,c),o(t,l),o(l,d),o(t,g),o(t,L),o(L,$),o(t,w),o(t,k),o(k,f),o(t,i),o(t,H),o(t,N),j=!0},p(b,p){const P={};p&2&&(P.date=b[2].date),a.$set(P);const K={};p&2&&(K.name=b[2].name),p&2&&(K.key=b[2].key),p&2&&(K.official=b[2].info.official),e.$set(K),(!j||p&2)&&u!==(u=b[2].team_count.toLocaleString()+"")&&V(d,u),(!j||p&2)&&D!==(D=b[2].player_count.toLocaleString()+"")&&V($,D),(!j||p&2)&&M!==(M=b[2].match_count.toLocaleString()+"")&&V(f,M)},i(b){j||(A(a.$$.fragment,b),A(e.$$.fragment,b),j=!0)},o(b){B(a.$$.fragment,b),B(e.$$.fragment,b),j=!1},d(b){b&&m(t),Q(a),Q(e)}}}function yt(_){let t,n,a,r,s,e,c,l,u,d=_[2].team_count.toLocaleString()+"",g,L,D,$,w,k=_[2].player_count.toLocaleString()+"",M,f,i,H,N,j=_[2].match_count.toLocaleString()+"",b,p,P,K,z;return a=new ot({props:{name:_[2].name,key:_[2].key,official:_[2].info.official}}),c=new rt({props:{date:_[2].date}}),D=new at({props:{t:"\u30C1\u30FC\u30E0"}}),i=new at({props:{t:"\u4EBA"}}),P=new at({props:{t:"\u8A66\u5408"}}),{c(){t=v("tr"),n=v("th"),G(a.$$.fragment),r=y(),s=v("tr"),e=v("td"),G(c.$$.fragment),l=y(),u=v("td"),g=q(d),L=y(),G(D.$$.fragment),$=y(),w=v("td"),M=q(k),f=y(),G(i.$$.fragment),H=y(),N=v("td"),b=q(j),p=y(),G(P.$$.fragment),K=y(),this.h()},l(h){t=T(h,"TR",{});var R=E(t);n=T(R,"TH",{class:!0,colspan:!0});var U=E(n);I(a.$$.fragment,U),U.forEach(m),R.forEach(m),r=S(h),s=T(h,"TR",{});var O=E(s);e=T(O,"TD",{class:!0});var lt=E(e);I(c.$$.fragment,lt),lt.forEach(m),l=S(O),u=T(O,"TD",{});var W=E(u);g=F(W,d),L=S(W),I(D.$$.fragment,W),W.forEach(m),$=S(O),w=T(O,"TD",{});var X=E(w);M=F(X,k),f=S(X),I(i.$$.fragment,X),X.forEach(m),H=S(O),N=T(O,"TD",{});var Z=E(N);b=F(Z,j),p=S(Z),I(P.$$.fragment,Z),Z.forEach(m),K=S(O),O.forEach(m),this.h()},h(){C(n,"class","tal"),C(n,"colspan","4"),C(e,"class","tal")},m(h,R){Y(h,t,R),o(t,n),J(a,n,null),Y(h,r,R),Y(h,s,R),o(s,e),J(c,e,null),o(s,l),o(s,u),o(u,g),o(u,L),J(D,u,null),o(s,$),o(s,w),o(w,M),o(w,f),J(i,w,null),o(s,H),o(s,N),o(N,b),o(N,p),J(P,N,null),o(s,K),z=!0},p(h,R){const U={};R&2&&(U.name=h[2].name),R&2&&(U.key=h[2].key),R&2&&(U.official=h[2].info.official),a.$set(U);const O={};R&2&&(O.date=h[2].date),c.$set(O),(!z||R&2)&&d!==(d=h[2].team_count.toLocaleString()+"")&&V(g,d),(!z||R&2)&&k!==(k=h[2].player_count.toLocaleString()+"")&&V(M,k),(!z||R&2)&&j!==(j=h[2].match_count.toLocaleString()+"")&&V(b,j)},i(h){z||(A(a.$$.fragment,h),A(c.$$.fragment,h),A(D.$$.fragment,h),A(i.$$.fragment,h),A(P.$$.fragment,h),z=!0)},o(h){B(a.$$.fragment,h),B(c.$$.fragment,h),B(D.$$.fragment,h),B(i.$$.fragment,h),B(P.$$.fragment,h),z=!1},d(h){h&&m(t),Q(a),h&&m(r),h&&m(s),Q(c),Q(D),Q(i),Q(P)}}}function it(_){let t,n,a,r;const s=[yt,Dt],e=[];function c(l,u){return l[0]?0:1}return t=c(_),n=e[t]=s[t](_),{c(){n.c(),a=x()},l(l){n.l(l),a=x()},m(l,u){e[t].m(l,u),Y(l,a,u),r=!0},p(l,u){let d=t;t=c(l),t===d?e[t].p(l,u):(et(),B(e[d],1,1,()=>{e[d]=null}),tt(),n=e[t],n?n.p(l,u):(n=e[t]=s[t](l),n.c()),A(n,1),n.m(a.parentNode,a))},i(l){r||(A(n),r=!0)},o(l){B(n),r=!1},d(l){e[t].d(l),l&&m(a)}}}function St(_){let t,n,a,r,s,e,c,l,u,d,g,L,D;t=new kt({props:{title:"\u5927\u4F1A\u4E00\u89A7",type:"article",url:"tournament",description:"\u30DD\u30B1\u30E2\u30F3\u30E6\u30CA\u30A4\u30C8\u306E\u5927\u4F1A\u306E\u4E00\u89A7"}});let $=!_[0]&&ct();const w=[Et,Tt],k=[];function M(f,i){return f[1].tournaments?0:1}return d=M(_),g=k[d]=w[d](_),{c(){G(t.$$.fragment),n=y(),a=v("h2"),r=q("\u5927\u4F1A"),s=y(),e=v("table"),c=v("thead"),$&&$.c(),l=y(),u=v("tbody"),g.c(),this.h()},l(f){I(t.$$.fragment,f),n=S(f),a=T(f,"H2",{});var i=E(a);r=F(i,"\u5927\u4F1A"),i.forEach(m),s=S(f),e=T(f,"TABLE",{style:!0});var H=E(e);c=T(H,"THEAD",{});var N=E(c);$&&$.l(N),N.forEach(m),l=S(H),u=T(H,"TBODY",{class:!0});var j=E(u);g.l(j),j.forEach(m),H.forEach(m),this.h()},h(){C(u,"class",L=_[0]?"double":""),dt(e,"table-layout","auto")},m(f,i){J(t,f,i),Y(f,n,i),Y(f,a,i),o(a,r),Y(f,s,i),Y(f,e,i),o(e,c),$&&$.m(c,null),o(e,l),o(e,u),k[d].m(u,null),D=!0},p(f,[i]){f[0]?$&&($.d(1),$=null):$||($=ct(),$.c(),$.m(c,null));let H=d;d=M(f),d===H?k[d].p(f,i):(et(),B(k[H],1,1,()=>{k[H]=null}),tt(),g=k[d],g?g.p(f,i):(g=k[d]=w[d](f),g.c()),A(g,1),g.m(u,null)),(!D||i&1&&L!==(L=f[0]?"double":""))&&C(u,"class",L)},i(f){D||(A(t.$$.fragment,f),A(g),D=!0)},o(f){B(t.$$.fragment,f),B(g),D=!1},d(f){Q(t,f),f&&m(n),f&&m(a),f&&m(s),f&&m(e),$&&$.d(),k[d].d()}}}function Ht(_,t,n){let a,r;return nt(_,bt,s=>n(0,a=s)),nt(_,st,s=>n(1,r=s)),$t(async()=>{fetch("/center_pin_g/tournament/tournaments.json").then(s=>s.json()).then(s=>st.set(s)).catch(()=>[])}),[a,r]}class Pt extends mt{constructor(t){super();_t(this,t,Ht,St,ht,{})}}export{Pt as default};
