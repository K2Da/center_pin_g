import{D as _t,S as Pe,i as Se,s as Ye,l as ye,g as q,n as ie,o as S,p as ue,q as B,d as u,M as pe,e as g,t as z,k as H,w as K,c as v,a as b,h as G,m as O,x as W,b as F,H as f,y as X,j as me,B as Z,Q as ve,f as de,V as vt,O as bt}from"../../../chunks/vendor-5fd0e214.js";import{T as $t,a as pt,g as Et}from"../../../chunks/TeamName-2bfdd63c.js";import{a as Tt}from"../../../chunks/navigation-c0b2019f.js";import{s as dt}from"../../../chunks/global-c7a9f53a.js";import{D as gt,T as De,P as kt}from"../../../chunks/PopUpA-144fc6c5.js";import{H as yt}from"../../../chunks/Header-507f5c28.js";import{P as Qe,a as wt}from"../../../chunks/PlayersLine-f3281a11.js";import{T as Ve}from"../../../chunks/TournamentName-a2d8f7ce.js";import"../../../chunks/paths-4b3c6e7e.js";import"../../../chunks/singletons-a6a7384f.js";const We=_t(""),ge=_t(null);function Dt(a){const e={};for(const[l,t]of a.tournaments.entries())for(const r of t.player_list)e[r]===void 0&&(e[r]={tournament:l,count:0}),e[r].count+=1;a.players=Object.keys(e),a.players.sort((l,t)=>e[l].tournament===e[t].tournament?e[l].count<e[t].count:e[l].tournament>e[t].tournament),a.reversed_tournaments=[...a.tournaments].reverse(),ge.set(a)}function Xe(a,e,l){const t=a.slice();return t[2]=e[l],t[4]=l,t}function Ze(a,e,l){const t=a.slice();return t[2]=e[l],t[4]=l,t}function Ht(a){let e,l,t,r,s,_,h,n,m,o,k,p,j,N,R,T,A,Q,L,P,U,V,E,y=a[1].tournaments,w=[];for(let D=0;D<y.length;D+=1)w[D]=xe(Xe(a,y,D));const M=D=>S(w[D],1,1,()=>{w[D]=null});return{c(){e=g("table"),l=g("thead"),t=g("tr"),r=g("th"),s=z("#"),_=H(),h=g("th"),n=z("\u958B\u50AC\u65E5"),m=H(),o=g("th"),k=z("\u5927\u4F1A\u540D"),p=H(),j=g("th"),N=z("\u7D50\u679C"),R=H(),T=g("th"),A=z("\u767B\u9332\u30C1\u30FC\u30E0\u540D"),Q=H(),L=g("th"),P=z("\u30E1\u30F3\u30D0\u30FC"),U=H(),V=g("tbody");for(let D=0;D<w.length;D+=1)w[D].c();this.h()},l(D){e=v(D,"TABLE",{});var $=b(e);l=v($,"THEAD",{});var d=b(l);t=v(d,"TR",{});var i=b(t);r=v(i,"TH",{class:!0});var Y=b(r);s=G(Y,"#"),Y.forEach(u),_=O(i),h=v(i,"TH",{});var te=b(h);n=G(te,"\u958B\u50AC\u65E5"),te.forEach(u),m=O(i),o=v(i,"TH",{class:!0});var I=b(o);k=G(I,"\u5927\u4F1A\u540D"),I.forEach(u),p=O(i),j=v(i,"TH",{});var x=b(j);N=G(x,"\u7D50\u679C"),x.forEach(u),R=O(i),T=v(i,"TH",{class:!0});var ee=b(T);A=G(ee,"\u767B\u9332\u30C1\u30FC\u30E0\u540D"),ee.forEach(u),Q=O(i),L=v(i,"TH",{class:!0});var ne=b(L);P=G(ne,"\u30E1\u30F3\u30D0\u30FC"),ne.forEach(u),i.forEach(u),d.forEach(u),U=O($),V=v($,"TBODY",{});var J=b(V);for(let ae=0;ae<w.length;ae+=1)w[ae].l(J);J.forEach(u),$.forEach(u),this.h()},h(){F(r,"class","tar"),F(o,"class","tal"),F(T,"class","tal"),F(L,"class","tal")},m(D,$){q(D,e,$),f(e,l),f(l,t),f(t,r),f(r,s),f(t,_),f(t,h),f(h,n),f(t,m),f(t,o),f(o,k),f(t,p),f(t,j),f(j,N),f(t,R),f(t,T),f(T,A),f(t,Q),f(t,L),f(L,P),f(e,U),f(e,V);for(let d=0;d<w.length;d+=1)w[d].m(V,null);E=!0},p(D,$){if($&2){y=D[1].tournaments;let d;for(d=0;d<y.length;d+=1){const i=Xe(D,y,d);w[d]?(w[d].p(i,$),B(w[d],1)):(w[d]=xe(i),w[d].c(),B(w[d],1),w[d].m(V,null))}for(ie(),d=y.length;d<w.length;d+=1)M(d);ue()}},i(D){if(!E){for(let $=0;$<y.length;$+=1)B(w[$]);E=!0}},o(D){w=w.filter(Boolean);for(let $=0;$<w.length;$+=1)S(w[$]);E=!1},d(D){D&&u(e),ve(w,D)}}}function Ot(a){let e,l,t,r=a[1].tournaments,s=[];for(let h=0;h<r.length;h+=1)s[h]=et(Ze(a,r,h));const _=h=>S(s[h],1,1,()=>{s[h]=null});return{c(){e=g("table"),l=g("tbody");for(let h=0;h<s.length;h+=1)s[h].c();this.h()},l(h){e=v(h,"TABLE",{});var n=b(e);l=v(n,"TBODY",{class:!0});var m=b(l);for(let o=0;o<s.length;o+=1)s[o].l(m);m.forEach(u),n.forEach(u),this.h()},h(){F(l,"class","triple")},m(h,n){q(h,e,n),f(e,l);for(let m=0;m<s.length;m+=1)s[m].m(l,null);t=!0},p(h,n){if(n&2){r=h[1].tournaments;let m;for(m=0;m<r.length;m+=1){const o=Ze(h,r,m);s[m]?(s[m].p(o,n),B(s[m],1)):(s[m]=et(o),s[m].c(),B(s[m],1),s[m].m(l,null))}for(ie(),m=r.length;m<s.length;m+=1)_(m);ue()}},i(h){if(!t){for(let n=0;n<r.length;n+=1)B(s[n]);t=!0}},o(h){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)S(s[n]);t=!1},d(h){h&&u(e),ve(s,h)}}}function xe(a){let e,l,t=a[4]+1+"",r,s,_,h,n,m,o,k,p,j,N,R,T=a[2].name+"",A,Q,L,P,U,V;return h=new gt({props:{date:a[2].tournament_date}}),o=new Ve({props:{name:a[2].tournament_name,key:a[2].tournament_key,official:!1}}),j=new $t({props:{rank:a[2].result}}),P=new Qe({props:{players:a[2].player_list}}),{c(){e=g("tr"),l=g("td"),r=z(t),s=H(),_=g("td"),K(h.$$.fragment),n=H(),m=g("td"),K(o.$$.fragment),k=H(),p=g("td"),K(j.$$.fragment),N=H(),R=g("td"),A=z(T),Q=H(),L=g("td"),K(P.$$.fragment),U=H(),this.h()},l(E){e=v(E,"TR",{});var y=b(e);l=v(y,"TD",{class:!0});var w=b(l);r=G(w,t),w.forEach(u),s=O(y),_=v(y,"TD",{});var M=b(_);W(h.$$.fragment,M),M.forEach(u),n=O(y),m=v(y,"TD",{class:!0});var D=b(m);W(o.$$.fragment,D),D.forEach(u),k=O(y),p=v(y,"TD",{});var $=b(p);W(j.$$.fragment,$),$.forEach(u),N=O(y),R=v(y,"TD",{class:!0});var d=b(R);A=G(d,T),d.forEach(u),Q=O(y),L=v(y,"TD",{class:!0});var i=b(L);W(P.$$.fragment,i),i.forEach(u),U=O(y),y.forEach(u),this.h()},h(){F(l,"class","tar"),F(m,"class","tal"),F(R,"class","tal"),F(L,"class","tal")},m(E,y){q(E,e,y),f(e,l),f(l,r),f(e,s),f(e,_),X(h,_,null),f(e,n),f(e,m),X(o,m,null),f(e,k),f(e,p),X(j,p,null),f(e,N),f(e,R),f(R,A),f(e,Q),f(e,L),X(P,L,null),f(e,U),V=!0},p(E,y){const w={};y&2&&(w.date=E[2].tournament_date),h.$set(w);const M={};y&2&&(M.name=E[2].tournament_name),y&2&&(M.key=E[2].tournament_key),o.$set(M);const D={};y&2&&(D.rank=E[2].result),j.$set(D),(!V||y&2)&&T!==(T=E[2].name+"")&&me(A,T);const $={};y&2&&($.players=E[2].player_list),P.$set($)},i(E){V||(B(h.$$.fragment,E),B(o.$$.fragment,E),B(j.$$.fragment,E),B(P.$$.fragment,E),V=!0)},o(E){S(h.$$.fragment,E),S(o.$$.fragment,E),S(j.$$.fragment,E),S(P.$$.fragment,E),V=!1},d(E){E&&u(e),Z(h),Z(o),Z(j),Z(P)}}}function et(a){let e,l,t,r=a[4]+1+"",s,_,h,n,m,o,k,p,j,N,R,T,A=a[2].name+"",Q,L,P,U,V,E,y,w,M,D,$,d;return n=new Ve({props:{name:a[2].tournament_name,key:a[2].tournament_key,official:!1}}),p=new gt({props:{date:a[2].tournament_date}}),R=new De({props:{t:"\u767B\u9332\u30C1\u30FC\u30E0\u540D"}}),U=new De({props:{t:"\u7D50\u679C"}}),E=new $t({props:{rank:a[2].result}}),D=new Qe({props:{players:a[2].player_list}}),{c(){e=g("tr"),l=g("th"),t=z("#"),s=z(r),_=H(),h=g("th"),K(n.$$.fragment),m=H(),o=g("tr"),k=g("td"),K(p.$$.fragment),j=H(),N=g("td"),K(R.$$.fragment),T=H(),Q=z(A),L=H(),P=g("td"),K(U.$$.fragment),V=H(),K(E.$$.fragment),y=H(),w=g("tr"),M=g("td"),K(D.$$.fragment),$=H(),this.h()},l(i){e=v(i,"TR",{});var Y=b(e);l=v(Y,"TH",{rowspan:!0,style:!0});var te=b(l);t=G(te,"#"),s=G(te,r),te.forEach(u),_=O(Y),h=v(Y,"TH",{class:!0,colspan:!0});var I=b(h);W(n.$$.fragment,I),I.forEach(u),Y.forEach(u),m=O(i),o=v(i,"TR",{class:!0});var x=b(o);k=v(x,"TD",{class:!0});var ee=b(k);W(p.$$.fragment,ee),ee.forEach(u),j=O(x),N=v(x,"TD",{class:!0});var ne=b(N);W(R.$$.fragment,ne),T=O(ne),Q=G(ne,A),ne.forEach(u),L=O(x),P=v(x,"TD",{class:!0});var J=b(P);W(U.$$.fragment,J),V=O(J),W(E.$$.fragment,J),J.forEach(u),x.forEach(u),y=O(i),w=v(i,"TR",{});var ae=b(w);M=v(ae,"TD",{class:!0,colspan:!0});var be=b(M);W(D.$$.fragment,be),be.forEach(u),$=O(ae),ae.forEach(u),this.h()},h(){F(l,"rowspan","3"),de(l,"vertical-align","middle"),F(h,"class","tal"),F(h,"colspan","3"),F(k,"class","tal"),F(N,"class","tal"),F(P,"class","nw"),F(o,"class","tal"),F(M,"class","tal"),F(M,"colspan","3")},m(i,Y){q(i,e,Y),f(e,l),f(l,t),f(l,s),f(e,_),f(e,h),X(n,h,null),q(i,m,Y),q(i,o,Y),f(o,k),X(p,k,null),f(o,j),f(o,N),X(R,N,null),f(N,T),f(N,Q),f(o,L),f(o,P),X(U,P,null),f(P,V),X(E,P,null),q(i,y,Y),q(i,w,Y),f(w,M),X(D,M,null),f(w,$),d=!0},p(i,Y){const te={};Y&2&&(te.name=i[2].tournament_name),Y&2&&(te.key=i[2].tournament_key),n.$set(te);const I={};Y&2&&(I.date=i[2].tournament_date),p.$set(I),(!d||Y&2)&&A!==(A=i[2].name+"")&&me(Q,A);const x={};Y&2&&(x.rank=i[2].result),E.$set(x);const ee={};Y&2&&(ee.players=i[2].player_list),D.$set(ee)},i(i){d||(B(n.$$.fragment,i),B(p.$$.fragment,i),B(R.$$.fragment,i),B(U.$$.fragment,i),B(E.$$.fragment,i),B(D.$$.fragment,i),d=!0)},o(i){S(n.$$.fragment,i),S(p.$$.fragment,i),S(R.$$.fragment,i),S(U.$$.fragment,i),S(E.$$.fragment,i),S(D.$$.fragment,i),d=!1},d(i){i&&u(e),Z(n),i&&u(m),i&&u(o),Z(p),Z(R),Z(U),Z(E),i&&u(y),i&&u(w),Z(D)}}}function Bt(a){let e,l,t,r;const s=[Ot,Ht],_=[];function h(n,m){return n[0]?0:1}return e=h(a),l=_[e]=s[e](a),{c(){l.c(),t=ye()},l(n){l.l(n),t=ye()},m(n,m){_[e].m(n,m),q(n,t,m),r=!0},p(n,[m]){let o=e;e=h(n),e===o?_[e].p(n,m):(ie(),S(_[o],1,1,()=>{_[o]=null}),ue(),l=_[e],l?l.p(n,m):(l=_[e]=s[e](n),l.c()),B(l,1),l.m(t.parentNode,t))},i(n){r||(B(l),r=!0)},o(n){S(l),r=!1},d(n){_[e].d(n),n&&u(t)}}}function Rt(a,e,l){let t,r;return pe(a,dt,s=>l(0,t=s)),pe(a,ge,s=>l(1,r=s)),[t,r]}class Nt extends Pe{constructor(e){super();Se(this,e,Rt,Bt,Ye,{})}}function tt(a,e,l){const t=a.slice();return t[1]=e[l],t}function lt(a,e,l){const t=a.slice();return t[4]=e[l],t}function rt(a,e,l){const t=a.slice();return t[4]=e[l],t[8]=l,t}function nt(a){let e,l,t;return l=new Ve({props:{name:a[0].reversed_tournaments.length-a[8],key:a[4].tournament_key,official:!1}}),{c(){e=g("th"),K(l.$$.fragment),this.h()},l(r){e=v(r,"TH",{style:!0});var s=b(e);W(l.$$.fragment,s),s.forEach(u),this.h()},h(){de(e,"width","2em")},m(r,s){q(r,e,s),X(l,e,null),t=!0},p(r,s){const _={};s&1&&(_.name=r[0].reversed_tournaments.length-r[8]),s&1&&(_.key=r[4].tournament_key),l.$set(_)},i(r){t||(B(l.$$.fragment,r),t=!0)},o(r){S(l.$$.fragment,r),t=!1},d(r){r&&u(e),Z(l)}}}function at(a){let e;return{c(){e=z("\u279C")},l(l){e=G(l,"\u279C")},m(l,t){q(l,e,t)},d(l){l&&u(e)}}}function st(a){let e,l=a[4].player_list.indexOf(a[1])!==-1,t=l&&at();return{c(){e=g("td"),t&&t.c()},l(r){e=v(r,"TD",{});var s=b(e);t&&t.l(s),s.forEach(u)},m(r,s){q(r,e,s),t&&t.m(e,null)},p(r,s){s&1&&(l=r[4].player_list.indexOf(r[1])!==-1),l?t||(t=at(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(r){r&&u(e),t&&t.d()}}}function ot(a){let e,l;return e=new pt({props:{name:a[0].player_info[a[1]].latest_team}}),{c(){K(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.name=t[0].player_info[t[1]].latest_team),e.$set(s)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function ft(a){let e,l,t,r,s,_=a[0].player_info[a[1]].rating.toLocaleString()+"",h,n,m,o,k,p;t=new wt({props:{name:a[1]}});let j=a[0].reversed_tournaments,N=[];for(let T=0;T<j.length;T+=1)N[T]=st(lt(a,j,T));let R=a[0].player_info[a[1]].latest_team!==a[0].team.name&&ot(a);return{c(){e=g("tr"),l=g("td"),K(t.$$.fragment),r=H(),s=g("td"),h=z(_),n=H();for(let T=0;T<N.length;T+=1)N[T].c();m=H(),o=g("td"),R&&R.c(),k=H(),this.h()},l(T){e=v(T,"TR",{});var A=b(e);l=v(A,"TD",{class:!0});var Q=b(l);W(t.$$.fragment,Q),Q.forEach(u),r=O(A),s=v(A,"TD",{});var L=b(s);h=G(L,_),L.forEach(u),n=O(A);for(let U=0;U<N.length;U+=1)N[U].l(A);m=O(A),o=v(A,"TD",{class:!0});var P=b(o);R&&R.l(P),P.forEach(u),k=O(A),A.forEach(u),this.h()},h(){F(l,"class","tal"),F(o,"class","tal nw")},m(T,A){q(T,e,A),f(e,l),X(t,l,null),f(e,r),f(e,s),f(s,h),f(e,n);for(let Q=0;Q<N.length;Q+=1)N[Q].m(e,null);f(e,m),f(e,o),R&&R.m(o,null),f(e,k),p=!0},p(T,A){const Q={};if(A&1&&(Q.name=T[1]),t.$set(Q),(!p||A&1)&&_!==(_=T[0].player_info[T[1]].rating.toLocaleString()+"")&&me(h,_),A&1){j=T[0].reversed_tournaments;let L;for(L=0;L<j.length;L+=1){const P=lt(T,j,L);N[L]?N[L].p(P,A):(N[L]=st(P),N[L].c(),N[L].m(e,m))}for(;L<N.length;L+=1)N[L].d(1);N.length=j.length}T[0].player_info[T[1]].latest_team!==T[0].team.name?R?(R.p(T,A),A&1&&B(R,1)):(R=ot(T),R.c(),B(R,1),R.m(o,null)):R&&(ie(),S(R,1,1,()=>{R=null}),ue())},i(T){p||(B(t.$$.fragment,T),B(R),p=!0)},o(T){S(t.$$.fragment,T),S(R),p=!1},d(T){T&&u(e),Z(t),ve(N,T),R&&R.d()}}}function jt(a){let e,l,t,r,s,_,h,n,m,o,k,p,j,N,R,T,A,Q,L,P,U,V=a[0].reversed_tournaments,E=[];for(let $=0;$<V.length;$+=1)E[$]=nt(rt(a,V,$));const y=$=>S(E[$],1,1,()=>{E[$]=null});let w=a[0].players,M=[];for(let $=0;$<w.length;$+=1)M[$]=ft(tt(a,w,$));const D=$=>S(M[$],1,1,()=>{M[$]=null});return{c(){e=g("table"),l=g("thead"),t=g("tr"),r=g("th"),s=H(),_=g("th"),h=z("\u53C2\u52A0\u5927\u4F1A#"),m=H(),o=g("tr"),k=g("th"),p=H(),j=g("th"),N=z("rating"),R=H();for(let $=0;$<E.length;$+=1)E[$].c();T=H(),A=g("th"),Q=z("\u6700\u65B0\u30C1\u30FC\u30E0"),L=H(),P=g("tbody");for(let $=0;$<M.length;$+=1)M[$].c();this.h()},l($){e=v($,"TABLE",{style:!0});var d=b(e);l=v(d,"THEAD",{});var i=b(l);t=v(i,"TR",{});var Y=b(t);r=v(Y,"TH",{colspan:!0}),b(r).forEach(u),s=O(Y),_=v(Y,"TH",{colspan:!0,class:!0});var te=b(_);h=G(te,"\u53C2\u52A0\u5927\u4F1A#"),te.forEach(u),Y.forEach(u),m=O(i),o=v(i,"TR",{});var I=b(o);k=v(I,"TH",{style:!0}),b(k).forEach(u),p=O(I),j=v(I,"TH",{style:!0});var x=b(j);N=G(x,"rating"),x.forEach(u),R=O(I);for(let J=0;J<E.length;J+=1)E[J].l(I);T=O(I),A=v(I,"TH",{class:!0});var ee=b(A);Q=G(ee,"\u6700\u65B0\u30C1\u30FC\u30E0"),ee.forEach(u),I.forEach(u),i.forEach(u),L=O(d),P=v(d,"TBODY",{});var ne=b(P);for(let J=0;J<M.length;J+=1)M[J].l(ne);ne.forEach(u),d.forEach(u),this.h()},h(){F(r,"colspan","2"),F(_,"colspan",n=a[0].reversed_tournaments.length+1),F(_,"class","tal"),de(k,"width","10em"),de(j,"width","5em"),F(A,"class","tal"),de(e,"width","100%")},m($,d){q($,e,d),f(e,l),f(l,t),f(t,r),f(t,s),f(t,_),f(_,h),f(l,m),f(l,o),f(o,k),f(o,p),f(o,j),f(j,N),f(o,R);for(let i=0;i<E.length;i+=1)E[i].m(o,null);f(o,T),f(o,A),f(A,Q),f(e,L),f(e,P);for(let i=0;i<M.length;i+=1)M[i].m(P,null);U=!0},p($,[d]){if((!U||d&1&&n!==(n=$[0].reversed_tournaments.length+1))&&F(_,"colspan",n),d&1){V=$[0].reversed_tournaments;let i;for(i=0;i<V.length;i+=1){const Y=rt($,V,i);E[i]?(E[i].p(Y,d),B(E[i],1)):(E[i]=nt(Y),E[i].c(),B(E[i],1),E[i].m(o,T))}for(ie(),i=V.length;i<E.length;i+=1)y(i);ue()}if(d&1){w=$[0].players;let i;for(i=0;i<w.length;i+=1){const Y=tt($,w,i);M[i]?(M[i].p(Y,d),B(M[i],1)):(M[i]=ft(Y),M[i].c(),B(M[i],1),M[i].m(P,null))}for(ie(),i=w.length;i<M.length;i+=1)D(i);ue()}},i($){if(!U){for(let d=0;d<V.length;d+=1)B(E[d]);for(let d=0;d<w.length;d+=1)B(M[d]);U=!0}},o($){E=E.filter(Boolean);for(let d=0;d<E.length;d+=1)S(E[d]);M=M.filter(Boolean);for(let d=0;d<M.length;d+=1)S(M[d]);U=!1},d($){$&&u(e),ve(E,$),ve(M,$)}}}function At(a,e,l){let t;return pe(a,ge,r=>l(0,t=r)),[t]}class Lt extends Pe{constructor(e){super();Se(this,e,At,jt,Ye,{})}}function it(a,e,l){const t=a.slice();return t[1]=e[l],t}function ut(a){let e,l,t,r,s,_,h=Object.keys(a[0].similar_team),n=[];for(let o=0;o<h.length;o+=1)n[o]=mt(it(a,h,o));const m=o=>S(n[o],1,1,()=>{n[o]=null});return{c(){e=g("h3"),l=z("3\u540D\u4EE5\u4E0A\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u5171\u901A\u3059\u308B\u30C1\u30FC\u30E0"),t=H(),r=g("table"),s=g("tbody");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=v(o,"H3",{});var k=b(e);l=G(k,"3\u540D\u4EE5\u4E0A\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u5171\u901A\u3059\u308B\u30C1\u30FC\u30E0"),k.forEach(u),t=O(o),r=v(o,"TABLE",{style:!0});var p=b(r);s=v(p,"TBODY",{});var j=b(s);for(let N=0;N<n.length;N+=1)n[N].l(j);j.forEach(u),p.forEach(u),this.h()},h(){de(r,"width","100%")},m(o,k){q(o,e,k),f(e,l),q(o,t,k),q(o,r,k),f(r,s);for(let p=0;p<n.length;p+=1)n[p].m(s,null);_=!0},p(o,k){if(k&1){h=Object.keys(o[0].similar_team);let p;for(p=0;p<h.length;p+=1){const j=it(o,h,p);n[p]?(n[p].p(j,k),B(n[p],1)):(n[p]=mt(j),n[p].c(),B(n[p],1),n[p].m(s,null))}for(ie(),p=h.length;p<n.length;p+=1)m(p);ue()}},i(o){if(!_){for(let k=0;k<h.length;k+=1)B(n[k]);_=!0}},o(o){n=n.filter(Boolean);for(let k=0;k<n.length;k+=1)S(n[k]);_=!1},d(o){o&&u(e),o&&u(t),o&&u(r),ve(n,o)}}}function mt(a){let e,l,t,r,s,_,h,n;return t=new pt({props:{name:a[1]}}),_=new Qe({props:{players:a[0].similar_team[a[1]]}}),{c(){e=g("tr"),l=g("td"),K(t.$$.fragment),r=H(),s=g("td"),K(_.$$.fragment),h=H(),this.h()},l(m){e=v(m,"TR",{});var o=b(e);l=v(o,"TD",{class:!0,style:!0});var k=b(l);W(t.$$.fragment,k),k.forEach(u),r=O(o),s=v(o,"TD",{class:!0});var p=b(s);W(_.$$.fragment,p),p.forEach(u),h=O(o),o.forEach(u),this.h()},h(){F(l,"class","tal"),de(l,"width","20em"),F(s,"class","tal")},m(m,o){q(m,e,o),f(e,l),X(t,l,null),f(e,r),f(e,s),X(_,s,null),f(e,h),n=!0},p(m,o){const k={};o&1&&(k.name=m[1]),t.$set(k);const p={};o&1&&(p.players=m[0].similar_team[m[1]]),_.$set(p)},i(m){n||(B(t.$$.fragment,m),B(_.$$.fragment,m),n=!0)},o(m){S(t.$$.fragment,m),S(_.$$.fragment,m),n=!1},d(m){m&&u(e),Z(t),Z(_)}}}function Mt(a){let e=a[0]&&Object.keys(a[0].similar_team).length>0,l,t,r=e&&ut(a);return{c(){r&&r.c(),l=ye()},l(s){r&&r.l(s),l=ye()},m(s,_){r&&r.m(s,_),q(s,l,_),t=!0},p(s,[_]){_&1&&(e=s[0]&&Object.keys(s[0].similar_team).length>0),e?r?(r.p(s,_),_&1&&B(r,1)):(r=ut(s),r.c(),B(r,1),r.m(l.parentNode,l)):r&&(ie(),S(r,1,1,()=>{r=null}),ue())},i(s){t||(B(r),t=!0)},o(s){S(r),t=!1},d(s){r&&r.d(s),s&&u(l)}}}function Pt(a,e,l){let t;return pe(a,ge,r=>l(0,t=r)),[t]}class St extends Pe{constructor(e){super();Se(this,e,Pt,Mt,Ye,{})}}function ct(a,e,l){const t=a.slice();return t[5]=e[l],t[7]=l,t}function Yt(a){let e,l;return e=new kt({}),{c(){K(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),l=!0},p:bt,i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function qt(a){let e,l,t,r=a[1].team.name+"",s,_,h,n,m,o,k,p,j,N,R,T,A,Q,L,P,U,V,E,y,w=a[1].team.tournament_count+"",M,D,$,d=a[1].team.win+"",i,Y,te,I=a[1].team.lose+"",x,ee,ne,J,ae,be,qe,ce,He,Ee,Fe,Oe,he,Be,Te,Ue,Re,_e,Ne,$e,se;e=new yt({props:{title:a[1].team.name,type:"article",url:"team/detail/?t="+a[0],description:""}}),D=new De({props:{t:" \u5927\u4F1A"}}),Y=new De({props:{t:" \u52DD"}}),ee=new De({props:{t:" \u6557"}});let ke=a[1].team.names,re=[];for(let c=0;c<ke.length;c+=1)re[c]=ht(ct(a,ke,c));return he=new Nt({}),_e=new Lt({}),$e=new St({}),{c(){K(e.$$.fragment),l=H(),t=g("h2"),s=z(r),_=H(),h=g("h4"),n=z("\u57FA\u672C\u60C5\u5831"),m=H(),o=g("table"),k=g("thead"),p=g("tr"),j=g("th"),R=H(),T=g("th"),Q=H(),L=g("tbody"),P=g("tr"),U=g("th"),V=z("\u6226\u7E3E"),E=H(),y=g("td"),M=z(w),K(D.$$.fragment),$=H(),i=z(d),K(Y.$$.fragment),te=H(),x=z(I),K(ee.$$.fragment),ne=H(),J=g("tr"),ae=g("th"),be=z("\u5927\u4F1A\u53C2\u52A0\u767B\u9332\u30C1\u30FC\u30E0\u540D"),qe=H(),ce=g("td");for(let c=0;c<re.length;c+=1)re[c].c();He=H(),Ee=g("h3"),Fe=z("\u53C2\u52A0\u5927\u4F1A"),Oe=H(),K(he.$$.fragment),Be=H(),Te=g("h3"),Ue=z("\u30E1\u30F3\u30D0\u30FC"),Re=H(),K(_e.$$.fragment),Ne=H(),K($e.$$.fragment),this.h()},l(c){W(e.$$.fragment,c),l=O(c),t=v(c,"H2",{});var C=b(t);s=G(C,r),C.forEach(u),_=O(c),h=v(c,"H4",{});var oe=b(h);n=G(oe,"\u57FA\u672C\u60C5\u5831"),oe.forEach(u),m=O(c),o=v(c,"TABLE",{});var le=b(o);k=v(le,"THEAD",{});var we=b(k);p=v(we,"TR",{style:!0});var je=b(p);j=v(je,"TH",{style:!0}),b(j).forEach(u),R=O(je),T=v(je,"TH",{style:!0}),b(T).forEach(u),je.forEach(u),we.forEach(u),Q=O(le),L=v(le,"TBODY",{});var Ae=b(L);P=v(Ae,"TR",{});var Le=b(P);U=v(Le,"TH",{});var ze=b(U);V=G(ze,"\u6226\u7E3E"),ze.forEach(u),E=O(Le),y=v(Le,"TD",{class:!0});var fe=b(y);M=G(fe,w),W(D.$$.fragment,fe),$=O(fe),i=G(fe,d),W(Y.$$.fragment,fe),te=O(fe),x=G(fe,I),W(ee.$$.fragment,fe),fe.forEach(u),Le.forEach(u),ne=O(Ae),J=v(Ae,"TR",{});var Me=b(J);ae=v(Me,"TH",{});var Ge=b(ae);be=G(Ge,"\u5927\u4F1A\u53C2\u52A0\u767B\u9332\u30C1\u30FC\u30E0\u540D"),Ge.forEach(u),qe=O(Me),ce=v(Me,"TD",{class:!0});var Ie=b(ce);for(let Ce=0;Ce<re.length;Ce+=1)re[Ce].l(Ie);Ie.forEach(u),Me.forEach(u),Ae.forEach(u),le.forEach(u),He=O(c),Ee=v(c,"H3",{});var Je=b(Ee);Fe=G(Je,"\u53C2\u52A0\u5927\u4F1A"),Je.forEach(u),Oe=O(c),W(he.$$.fragment,c),Be=O(c),Te=v(c,"H3",{});var Ke=b(Te);Ue=G(Ke,"\u30E1\u30F3\u30D0\u30FC"),Ke.forEach(u),Re=O(c),W(_e.$$.fragment,c),Ne=O(c),W($e.$$.fragment,c),this.h()},h(){F(j,"style",N=a[2]?"":"width: 20%"),F(T,"style",A=a[2]?"":"width: 80%"),F(p,"style",""),F(y,"class","tal"),F(ce,"class","tal")},m(c,C){X(e,c,C),q(c,l,C),q(c,t,C),f(t,s),q(c,_,C),q(c,h,C),f(h,n),q(c,m,C),q(c,o,C),f(o,k),f(k,p),f(p,j),f(p,R),f(p,T),f(o,Q),f(o,L),f(L,P),f(P,U),f(U,V),f(P,E),f(P,y),f(y,M),X(D,y,null),f(y,$),f(y,i),X(Y,y,null),f(y,te),f(y,x),X(ee,y,null),f(L,ne),f(L,J),f(J,ae),f(ae,be),f(J,qe),f(J,ce);for(let oe=0;oe<re.length;oe+=1)re[oe].m(ce,null);q(c,He,C),q(c,Ee,C),f(Ee,Fe),q(c,Oe,C),X(he,c,C),q(c,Be,C),q(c,Te,C),f(Te,Ue),q(c,Re,C),X(_e,c,C),q(c,Ne,C),X($e,c,C),se=!0},p(c,C){const oe={};if(C&2&&(oe.title=c[1].team.name),C&1&&(oe.url="team/detail/?t="+c[0]),e.$set(oe),(!se||C&2)&&r!==(r=c[1].team.name+"")&&me(s,r),(!se||C&4&&N!==(N=c[2]?"":"width: 20%"))&&F(j,"style",N),(!se||C&4&&A!==(A=c[2]?"":"width: 80%"))&&F(T,"style",A),(!se||C&2)&&w!==(w=c[1].team.tournament_count+"")&&me(M,w),(!se||C&2)&&d!==(d=c[1].team.win+"")&&me(i,d),(!se||C&2)&&I!==(I=c[1].team.lose+"")&&me(x,I),C&2){ke=c[1].team.names;let le;for(le=0;le<ke.length;le+=1){const we=ct(c,ke,le);re[le]?re[le].p(we,C):(re[le]=ht(we),re[le].c(),re[le].m(ce,null))}for(;le<re.length;le+=1)re[le].d(1);re.length=ke.length}},i(c){se||(B(e.$$.fragment,c),B(D.$$.fragment,c),B(Y.$$.fragment,c),B(ee.$$.fragment,c),B(he.$$.fragment,c),B(_e.$$.fragment,c),B($e.$$.fragment,c),se=!0)},o(c){S(e.$$.fragment,c),S(D.$$.fragment,c),S(Y.$$.fragment,c),S(ee.$$.fragment,c),S(he.$$.fragment,c),S(_e.$$.fragment,c),S($e.$$.fragment,c),se=!1},d(c){Z(e,c),c&&u(l),c&&u(t),c&&u(_),c&&u(h),c&&u(m),c&&u(o),Z(D),Z(Y),Z(ee),ve(re,c),c&&u(He),c&&u(Ee),c&&u(Oe),Z(he,c),c&&u(Be),c&&u(Te),c&&u(Re),Z(_e,c),c&&u(Ne),Z($e,c)}}}function Ft(a){let e;return{c(){e=z(", ")},l(l){e=G(l,", ")},m(l,t){q(l,e,t)},d(l){l&&u(e)}}}function ht(a){let e=a[5]+"",l,t=a[7]!==0&&Ft();return{c(){t&&t.c(),l=z(e)},l(r){t&&t.l(r),l=G(r,e)},m(r,s){t&&t.m(r,s),q(r,l,s)},p(r,s){s&2&&e!==(e=r[5]+"")&&me(l,e)},d(r){t&&t.d(r),r&&u(l)}}}function Ut(a){let e,l,t,r;const s=[qt,Yt],_=[];function h(n,m){return n[1]?0:1}return e=h(a),l=_[e]=s[e](a),{c(){l.c(),t=ye()},l(n){l.l(n),t=ye()},m(n,m){_[e].m(n,m),q(n,t,m),r=!0},p(n,[m]){let o=e;e=h(n),e===o?_[e].p(n,m):(ie(),S(_[o],1,1,()=>{_[o]=null}),ue(),l=_[e],l?l.p(n,m):(l=_[e]=s[e](n),l.c()),B(l,1),l.m(t.parentNode,t))},i(n){r||(B(l),r=!0)},o(n){S(l),r=!1},d(n){_[e].d(n),n&&u(t)}}}function Ct(a,e,l){let t,r,s;pe(a,We,n=>l(0,t=n)),pe(a,ge,n=>l(1,r=n)),pe(a,dt,n=>l(2,s=n)),Tt(()=>{h(null)}),vt(()=>ge.set(null));async function _(n){fetch("/data/team/team_aliases.json").then(m=>m.json()).then(m=>{h(m[n])}).catch(()=>[])}async function h(n){ge.set(null),We.set(Et(n,"m")),t!==null&&fetch(`/data/team/${t}.json`).then(m=>{if(m.status===404)throw new Error("NOT FOUND");return m.json()}).then(m=>{Dt(m)}).catch(m=>{m.message==="NOT FOUND"&&n===null&&_(t)})}return[t,r,s]}class xt extends Pe{constructor(e){super();Se(this,e,Ct,Ut,Ye,{})}}export{xt as default};
