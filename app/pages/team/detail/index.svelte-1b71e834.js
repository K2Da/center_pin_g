import{D as _t,S as Me,i as Se,s as Ye,l as ye,g as q,n as ie,o as S,p as ue,q as O,d as u,M as pe,e as g,t as G,k as H,w as Q,c as v,a as b,h as I,m as B,x as V,b as F,H as f,y as X,j as me,B as Z,R as ve,f as de,W as vt,P as bt}from"../../../chunks/vendor-5787ed64.js";import{T as $t,a as pt,g as Et}from"../../../chunks/TeamName-b07e86e2.js";import{a as Tt}from"../../../chunks/navigation-c0b2019f.js";import{s as dt}from"../../../chunks/global-05926f3f.js";import{D as gt,T as De,P as kt}from"../../../chunks/PopUpA-46557c1c.js";import{H as yt}from"../../../chunks/Header-e9e8528e.js";import{P as We}from"../../../chunks/PlayersLine-88da6897.js";import{T as ze}from"../../../chunks/TournamentName-ed59447c.js";import{P as wt}from"../../../chunks/PlayerName-f16038b1.js";import"../../../chunks/paths-4b3c6e7e.js";import"../../../chunks/singletons-a6a7384f.js";const Ve=_t(""),ge=_t(null);function Dt(a){const e={};for(const[l,t]of a.tournaments.entries())for(const r of t.player_list)e[r]===void 0&&(e[r]={tournament:l,count:0}),e[r].count+=1;a.players=Object.keys(e),a.players.sort((l,t)=>e[l].tournament===e[t].tournament?e[l].count<e[t].count:e[l].tournament>e[t].tournament),a.reversed_tournaments=[...a.tournaments].reverse(),ge.set(a)}function Xe(a,e,l){const t=a.slice();return t[2]=e[l],t[4]=l,t}function Ze(a,e,l){const t=a.slice();return t[2]=e[l],t[4]=l,t}function Ht(a){let e,l,t,r,s,_,h,n,m,o,k,p,j,N,R,T,A,W,L,M,U,z,E,y=a[1].tournaments,w=[];for(let D=0;D<y.length;D+=1)w[D]=xe(Xe(a,y,D));const P=D=>S(w[D],1,1,()=>{w[D]=null});return{c(){e=g("table"),l=g("thead"),t=g("tr"),r=g("th"),s=G("#"),_=H(),h=g("th"),n=G("\u958B\u50AC\u65E5"),m=H(),o=g("th"),k=G("\u5927\u4F1A\u540D"),p=H(),j=g("th"),N=G("\u7D50\u679C"),R=H(),T=g("th"),A=G("\u767B\u9332\u30C1\u30FC\u30E0\u540D"),W=H(),L=g("th"),M=G("\u30E1\u30F3\u30D0\u30FC"),U=H(),z=g("tbody");for(let D=0;D<w.length;D+=1)w[D].c();this.h()},l(D){e=v(D,"TABLE",{});var $=b(e);l=v($,"THEAD",{});var d=b(l);t=v(d,"TR",{});var i=b(t);r=v(i,"TH",{class:!0});var Y=b(r);s=I(Y,"#"),Y.forEach(u),_=B(i),h=v(i,"TH",{});var te=b(h);n=I(te,"\u958B\u50AC\u65E5"),te.forEach(u),m=B(i),o=v(i,"TH",{class:!0});var J=b(o);k=I(J,"\u5927\u4F1A\u540D"),J.forEach(u),p=B(i),j=v(i,"TH",{});var x=b(j);N=I(x,"\u7D50\u679C"),x.forEach(u),R=B(i),T=v(i,"TH",{class:!0});var ee=b(T);A=I(ee,"\u767B\u9332\u30C1\u30FC\u30E0\u540D"),ee.forEach(u),W=B(i),L=v(i,"TH",{class:!0});var ne=b(L);M=I(ne,"\u30E1\u30F3\u30D0\u30FC"),ne.forEach(u),i.forEach(u),d.forEach(u),U=B($),z=v($,"TBODY",{});var K=b(z);for(let ae=0;ae<w.length;ae+=1)w[ae].l(K);K.forEach(u),$.forEach(u),this.h()},h(){F(r,"class","tar"),F(o,"class","tal"),F(T,"class","tal"),F(L,"class","tal")},m(D,$){q(D,e,$),f(e,l),f(l,t),f(t,r),f(r,s),f(t,_),f(t,h),f(h,n),f(t,m),f(t,o),f(o,k),f(t,p),f(t,j),f(j,N),f(t,R),f(t,T),f(T,A),f(t,W),f(t,L),f(L,M),f(e,U),f(e,z);for(let d=0;d<w.length;d+=1)w[d].m(z,null);E=!0},p(D,$){if($&2){y=D[1].tournaments;let d;for(d=0;d<y.length;d+=1){const i=Xe(D,y,d);w[d]?(w[d].p(i,$),O(w[d],1)):(w[d]=xe(i),w[d].c(),O(w[d],1),w[d].m(z,null))}for(ie(),d=y.length;d<w.length;d+=1)P(d);ue()}},i(D){if(!E){for(let $=0;$<y.length;$+=1)O(w[$]);E=!0}},o(D){w=w.filter(Boolean);for(let $=0;$<w.length;$+=1)S(w[$]);E=!1},d(D){D&&u(e),ve(w,D)}}}function Bt(a){let e,l,t,r=a[1].tournaments,s=[];for(let h=0;h<r.length;h+=1)s[h]=et(Ze(a,r,h));const _=h=>S(s[h],1,1,()=>{s[h]=null});return{c(){e=g("table"),l=g("tbody");for(let h=0;h<s.length;h+=1)s[h].c();this.h()},l(h){e=v(h,"TABLE",{});var n=b(e);l=v(n,"TBODY",{class:!0});var m=b(l);for(let o=0;o<s.length;o+=1)s[o].l(m);m.forEach(u),n.forEach(u),this.h()},h(){F(l,"class","triple")},m(h,n){q(h,e,n),f(e,l);for(let m=0;m<s.length;m+=1)s[m].m(l,null);t=!0},p(h,n){if(n&2){r=h[1].tournaments;let m;for(m=0;m<r.length;m+=1){const o=Ze(h,r,m);s[m]?(s[m].p(o,n),O(s[m],1)):(s[m]=et(o),s[m].c(),O(s[m],1),s[m].m(l,null))}for(ie(),m=r.length;m<s.length;m+=1)_(m);ue()}},i(h){if(!t){for(let n=0;n<r.length;n+=1)O(s[n]);t=!0}},o(h){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)S(s[n]);t=!1},d(h){h&&u(e),ve(s,h)}}}function xe(a){let e,l,t=a[4]+1+"",r,s,_,h,n,m,o,k,p,j,N,R,T=a[2].name+"",A,W,L,M,U,z;return h=new gt({props:{date:a[2].tournament_date}}),o=new ze({props:{name:a[2].tournament_name,key:a[2].tournament_key,official:!1}}),j=new $t({props:{rank:a[2].result}}),M=new We({props:{players:a[2].player_list}}),{c(){e=g("tr"),l=g("td"),r=G(t),s=H(),_=g("td"),Q(h.$$.fragment),n=H(),m=g("td"),Q(o.$$.fragment),k=H(),p=g("td"),Q(j.$$.fragment),N=H(),R=g("td"),A=G(T),W=H(),L=g("td"),Q(M.$$.fragment),U=H(),this.h()},l(E){e=v(E,"TR",{});var y=b(e);l=v(y,"TD",{class:!0});var w=b(l);r=I(w,t),w.forEach(u),s=B(y),_=v(y,"TD",{});var P=b(_);V(h.$$.fragment,P),P.forEach(u),n=B(y),m=v(y,"TD",{class:!0});var D=b(m);V(o.$$.fragment,D),D.forEach(u),k=B(y),p=v(y,"TD",{});var $=b(p);V(j.$$.fragment,$),$.forEach(u),N=B(y),R=v(y,"TD",{class:!0});var d=b(R);A=I(d,T),d.forEach(u),W=B(y),L=v(y,"TD",{class:!0});var i=b(L);V(M.$$.fragment,i),i.forEach(u),U=B(y),y.forEach(u),this.h()},h(){F(l,"class","tar"),F(m,"class","tal"),F(R,"class","tal"),F(L,"class","tal")},m(E,y){q(E,e,y),f(e,l),f(l,r),f(e,s),f(e,_),X(h,_,null),f(e,n),f(e,m),X(o,m,null),f(e,k),f(e,p),X(j,p,null),f(e,N),f(e,R),f(R,A),f(e,W),f(e,L),X(M,L,null),f(e,U),z=!0},p(E,y){const w={};y&2&&(w.date=E[2].tournament_date),h.$set(w);const P={};y&2&&(P.name=E[2].tournament_name),y&2&&(P.key=E[2].tournament_key),o.$set(P);const D={};y&2&&(D.rank=E[2].result),j.$set(D),(!z||y&2)&&T!==(T=E[2].name+"")&&me(A,T);const $={};y&2&&($.players=E[2].player_list),M.$set($)},i(E){z||(O(h.$$.fragment,E),O(o.$$.fragment,E),O(j.$$.fragment,E),O(M.$$.fragment,E),z=!0)},o(E){S(h.$$.fragment,E),S(o.$$.fragment,E),S(j.$$.fragment,E),S(M.$$.fragment,E),z=!1},d(E){E&&u(e),Z(h),Z(o),Z(j),Z(M)}}}function et(a){let e,l,t,r=a[4]+1+"",s,_,h,n,m,o,k,p,j,N,R,T,A=a[2].name+"",W,L,M,U,z,E,y,w,P,D,$,d;return n=new ze({props:{name:a[2].tournament_name,key:a[2].tournament_key,official:!1}}),p=new gt({props:{date:a[2].tournament_date}}),R=new De({props:{t:"\u767B\u9332\u30C1\u30FC\u30E0\u540D"}}),U=new De({props:{t:"\u7D50\u679C"}}),E=new $t({props:{rank:a[2].result}}),D=new We({props:{players:a[2].player_list}}),{c(){e=g("tr"),l=g("th"),t=G("#"),s=G(r),_=H(),h=g("th"),Q(n.$$.fragment),m=H(),o=g("tr"),k=g("td"),Q(p.$$.fragment),j=H(),N=g("td"),Q(R.$$.fragment),T=H(),W=G(A),L=H(),M=g("td"),Q(U.$$.fragment),z=H(),Q(E.$$.fragment),y=H(),w=g("tr"),P=g("td"),Q(D.$$.fragment),$=H(),this.h()},l(i){e=v(i,"TR",{});var Y=b(e);l=v(Y,"TH",{rowspan:!0,style:!0});var te=b(l);t=I(te,"#"),s=I(te,r),te.forEach(u),_=B(Y),h=v(Y,"TH",{class:!0,colspan:!0});var J=b(h);V(n.$$.fragment,J),J.forEach(u),Y.forEach(u),m=B(i),o=v(i,"TR",{class:!0});var x=b(o);k=v(x,"TD",{class:!0});var ee=b(k);V(p.$$.fragment,ee),ee.forEach(u),j=B(x),N=v(x,"TD",{class:!0});var ne=b(N);V(R.$$.fragment,ne),T=B(ne),W=I(ne,A),ne.forEach(u),L=B(x),M=v(x,"TD",{class:!0});var K=b(M);V(U.$$.fragment,K),z=B(K),V(E.$$.fragment,K),K.forEach(u),x.forEach(u),y=B(i),w=v(i,"TR",{});var ae=b(w);P=v(ae,"TD",{class:!0,colspan:!0});var be=b(P);V(D.$$.fragment,be),be.forEach(u),$=B(ae),ae.forEach(u),this.h()},h(){F(l,"rowspan","3"),de(l,"vertical-align","middle"),F(h,"class","tal"),F(h,"colspan","3"),F(k,"class","tal"),F(N,"class","tal"),F(M,"class","nw"),F(o,"class","tal"),F(P,"class","tal"),F(P,"colspan","3")},m(i,Y){q(i,e,Y),f(e,l),f(l,t),f(l,s),f(e,_),f(e,h),X(n,h,null),q(i,m,Y),q(i,o,Y),f(o,k),X(p,k,null),f(o,j),f(o,N),X(R,N,null),f(N,T),f(N,W),f(o,L),f(o,M),X(U,M,null),f(M,z),X(E,M,null),q(i,y,Y),q(i,w,Y),f(w,P),X(D,P,null),f(w,$),d=!0},p(i,Y){const te={};Y&2&&(te.name=i[2].tournament_name),Y&2&&(te.key=i[2].tournament_key),n.$set(te);const J={};Y&2&&(J.date=i[2].tournament_date),p.$set(J),(!d||Y&2)&&A!==(A=i[2].name+"")&&me(W,A);const x={};Y&2&&(x.rank=i[2].result),E.$set(x);const ee={};Y&2&&(ee.players=i[2].player_list),D.$set(ee)},i(i){d||(O(n.$$.fragment,i),O(p.$$.fragment,i),O(R.$$.fragment,i),O(U.$$.fragment,i),O(E.$$.fragment,i),O(D.$$.fragment,i),d=!0)},o(i){S(n.$$.fragment,i),S(p.$$.fragment,i),S(R.$$.fragment,i),S(U.$$.fragment,i),S(E.$$.fragment,i),S(D.$$.fragment,i),d=!1},d(i){i&&u(e),Z(n),i&&u(m),i&&u(o),Z(p),Z(R),Z(U),Z(E),i&&u(y),i&&u(w),Z(D)}}}function Ot(a){let e,l,t,r;const s=[Bt,Ht],_=[];function h(n,m){return n[0]?0:1}return e=h(a),l=_[e]=s[e](a),{c(){l.c(),t=ye()},l(n){l.l(n),t=ye()},m(n,m){_[e].m(n,m),q(n,t,m),r=!0},p(n,[m]){let o=e;e=h(n),e===o?_[e].p(n,m):(ie(),S(_[o],1,1,()=>{_[o]=null}),ue(),l=_[e],l?l.p(n,m):(l=_[e]=s[e](n),l.c()),O(l,1),l.m(t.parentNode,t))},i(n){r||(O(l),r=!0)},o(n){S(l),r=!1},d(n){_[e].d(n),n&&u(t)}}}function Rt(a,e,l){let t,r;return pe(a,dt,s=>l(0,t=s)),pe(a,ge,s=>l(1,r=s)),[t,r]}class Nt extends Me{constructor(e){super();Se(this,e,Rt,Ot,Ye,{})}}function tt(a,e,l){const t=a.slice();return t[1]=e[l],t}function lt(a,e,l){const t=a.slice();return t[4]=e[l],t}function rt(a,e,l){const t=a.slice();return t[4]=e[l],t[8]=l,t}function nt(a){let e,l,t;return l=new ze({props:{name:a[0].reversed_tournaments.length-a[8],key:a[4].tournament_key,official:!1}}),{c(){e=g("th"),Q(l.$$.fragment),this.h()},l(r){e=v(r,"TH",{style:!0});var s=b(e);V(l.$$.fragment,s),s.forEach(u),this.h()},h(){de(e,"width","2em")},m(r,s){q(r,e,s),X(l,e,null),t=!0},p(r,s){const _={};s&1&&(_.name=r[0].reversed_tournaments.length-r[8]),s&1&&(_.key=r[4].tournament_key),l.$set(_)},i(r){t||(O(l.$$.fragment,r),t=!0)},o(r){S(l.$$.fragment,r),t=!1},d(r){r&&u(e),Z(l)}}}function at(a){let e;return{c(){e=G("\u279C")},l(l){e=I(l,"\u279C")},m(l,t){q(l,e,t)},d(l){l&&u(e)}}}function st(a){let e,l=a[4].player_list.indexOf(a[1])!==-1,t=l&&at();return{c(){e=g("td"),t&&t.c()},l(r){e=v(r,"TD",{});var s=b(e);t&&t.l(s),s.forEach(u)},m(r,s){q(r,e,s),t&&t.m(e,null)},p(r,s){s&1&&(l=r[4].player_list.indexOf(r[1])!==-1),l?t||(t=at(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(r){r&&u(e),t&&t.d()}}}function ot(a){let e,l;return e=new pt({props:{name:a[0].player_info[a[1]].latest_team}}),{c(){Q(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){X(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.name=t[0].player_info[t[1]].latest_team),e.$set(s)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function ft(a){let e,l,t,r,s,_=a[0].player_info[a[1]].rating.toLocaleString()+"",h,n,m,o,k,p;t=new wt({props:{name:a[1]}});let j=a[0].reversed_tournaments,N=[];for(let T=0;T<j.length;T+=1)N[T]=st(lt(a,j,T));let R=a[0].player_info[a[1]].latest_team!==a[0].team.name&&ot(a);return{c(){e=g("tr"),l=g("td"),Q(t.$$.fragment),r=H(),s=g("td"),h=G(_),n=H();for(let T=0;T<N.length;T+=1)N[T].c();m=H(),o=g("td"),R&&R.c(),k=H(),this.h()},l(T){e=v(T,"TR",{});var A=b(e);l=v(A,"TD",{class:!0});var W=b(l);V(t.$$.fragment,W),W.forEach(u),r=B(A),s=v(A,"TD",{});var L=b(s);h=I(L,_),L.forEach(u),n=B(A);for(let U=0;U<N.length;U+=1)N[U].l(A);m=B(A),o=v(A,"TD",{class:!0});var M=b(o);R&&R.l(M),M.forEach(u),k=B(A),A.forEach(u),this.h()},h(){F(l,"class","tal"),F(o,"class","tal nw")},m(T,A){q(T,e,A),f(e,l),X(t,l,null),f(e,r),f(e,s),f(s,h),f(e,n);for(let W=0;W<N.length;W+=1)N[W].m(e,null);f(e,m),f(e,o),R&&R.m(o,null),f(e,k),p=!0},p(T,A){const W={};if(A&1&&(W.name=T[1]),t.$set(W),(!p||A&1)&&_!==(_=T[0].player_info[T[1]].rating.toLocaleString()+"")&&me(h,_),A&1){j=T[0].reversed_tournaments;let L;for(L=0;L<j.length;L+=1){const M=lt(T,j,L);N[L]?N[L].p(M,A):(N[L]=st(M),N[L].c(),N[L].m(e,m))}for(;L<N.length;L+=1)N[L].d(1);N.length=j.length}T[0].player_info[T[1]].latest_team!==T[0].team.name?R?(R.p(T,A),A&1&&O(R,1)):(R=ot(T),R.c(),O(R,1),R.m(o,null)):R&&(ie(),S(R,1,1,()=>{R=null}),ue())},i(T){p||(O(t.$$.fragment,T),O(R),p=!0)},o(T){S(t.$$.fragment,T),S(R),p=!1},d(T){T&&u(e),Z(t),ve(N,T),R&&R.d()}}}function jt(a){let e,l,t,r,s,_,h,n,m,o,k,p,j,N,R,T,A,W,L,M,U,z=a[0].reversed_tournaments,E=[];for(let $=0;$<z.length;$+=1)E[$]=nt(rt(a,z,$));const y=$=>S(E[$],1,1,()=>{E[$]=null});let w=a[0].players,P=[];for(let $=0;$<w.length;$+=1)P[$]=ft(tt(a,w,$));const D=$=>S(P[$],1,1,()=>{P[$]=null});return{c(){e=g("table"),l=g("thead"),t=g("tr"),r=g("th"),s=H(),_=g("th"),h=G("\u53C2\u52A0\u5927\u4F1A#"),m=H(),o=g("tr"),k=g("th"),p=H(),j=g("th"),N=G("rating"),R=H();for(let $=0;$<E.length;$+=1)E[$].c();T=H(),A=g("th"),W=G("\u6700\u65B0\u30C1\u30FC\u30E0"),L=H(),M=g("tbody");for(let $=0;$<P.length;$+=1)P[$].c();this.h()},l($){e=v($,"TABLE",{style:!0});var d=b(e);l=v(d,"THEAD",{});var i=b(l);t=v(i,"TR",{});var Y=b(t);r=v(Y,"TH",{colspan:!0}),b(r).forEach(u),s=B(Y),_=v(Y,"TH",{colspan:!0,class:!0});var te=b(_);h=I(te,"\u53C2\u52A0\u5927\u4F1A#"),te.forEach(u),Y.forEach(u),m=B(i),o=v(i,"TR",{});var J=b(o);k=v(J,"TH",{style:!0}),b(k).forEach(u),p=B(J),j=v(J,"TH",{style:!0});var x=b(j);N=I(x,"rating"),x.forEach(u),R=B(J);for(let K=0;K<E.length;K+=1)E[K].l(J);T=B(J),A=v(J,"TH",{class:!0});var ee=b(A);W=I(ee,"\u6700\u65B0\u30C1\u30FC\u30E0"),ee.forEach(u),J.forEach(u),i.forEach(u),L=B(d),M=v(d,"TBODY",{});var ne=b(M);for(let K=0;K<P.length;K+=1)P[K].l(ne);ne.forEach(u),d.forEach(u),this.h()},h(){F(r,"colspan","2"),F(_,"colspan",n=a[0].reversed_tournaments.length+1),F(_,"class","tal"),de(k,"width","10em"),de(j,"width","5em"),F(A,"class","tal"),de(e,"width","100%")},m($,d){q($,e,d),f(e,l),f(l,t),f(t,r),f(t,s),f(t,_),f(_,h),f(l,m),f(l,o),f(o,k),f(o,p),f(o,j),f(j,N),f(o,R);for(let i=0;i<E.length;i+=1)E[i].m(o,null);f(o,T),f(o,A),f(A,W),f(e,L),f(e,M);for(let i=0;i<P.length;i+=1)P[i].m(M,null);U=!0},p($,[d]){if((!U||d&1&&n!==(n=$[0].reversed_tournaments.length+1))&&F(_,"colspan",n),d&1){z=$[0].reversed_tournaments;let i;for(i=0;i<z.length;i+=1){const Y=rt($,z,i);E[i]?(E[i].p(Y,d),O(E[i],1)):(E[i]=nt(Y),E[i].c(),O(E[i],1),E[i].m(o,T))}for(ie(),i=z.length;i<E.length;i+=1)y(i);ue()}if(d&1){w=$[0].players;let i;for(i=0;i<w.length;i+=1){const Y=tt($,w,i);P[i]?(P[i].p(Y,d),O(P[i],1)):(P[i]=ft(Y),P[i].c(),O(P[i],1),P[i].m(M,null))}for(ie(),i=w.length;i<P.length;i+=1)D(i);ue()}},i($){if(!U){for(let d=0;d<z.length;d+=1)O(E[d]);for(let d=0;d<w.length;d+=1)O(P[d]);U=!0}},o($){E=E.filter(Boolean);for(let d=0;d<E.length;d+=1)S(E[d]);P=P.filter(Boolean);for(let d=0;d<P.length;d+=1)S(P[d]);U=!1},d($){$&&u(e),ve(E,$),ve(P,$)}}}function At(a,e,l){let t;return pe(a,ge,r=>l(0,t=r)),[t]}class Lt extends Me{constructor(e){super();Se(this,e,At,jt,Ye,{})}}function it(a,e,l){const t=a.slice();return t[1]=e[l],t}function ut(a){let e,l,t,r,s,_,h=Object.keys(a[0].similar_team),n=[];for(let o=0;o<h.length;o+=1)n[o]=mt(it(a,h,o));const m=o=>S(n[o],1,1,()=>{n[o]=null});return{c(){e=g("h3"),l=G("3\u540D\u4EE5\u4E0A\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u5171\u901A\u3059\u308B\u30C1\u30FC\u30E0"),t=H(),r=g("table"),s=g("tbody");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=v(o,"H3",{});var k=b(e);l=I(k,"3\u540D\u4EE5\u4E0A\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u5171\u901A\u3059\u308B\u30C1\u30FC\u30E0"),k.forEach(u),t=B(o),r=v(o,"TABLE",{style:!0});var p=b(r);s=v(p,"TBODY",{});var j=b(s);for(let N=0;N<n.length;N+=1)n[N].l(j);j.forEach(u),p.forEach(u),this.h()},h(){de(r,"width","100%")},m(o,k){q(o,e,k),f(e,l),q(o,t,k),q(o,r,k),f(r,s);for(let p=0;p<n.length;p+=1)n[p].m(s,null);_=!0},p(o,k){if(k&1){h=Object.keys(o[0].similar_team);let p;for(p=0;p<h.length;p+=1){const j=it(o,h,p);n[p]?(n[p].p(j,k),O(n[p],1)):(n[p]=mt(j),n[p].c(),O(n[p],1),n[p].m(s,null))}for(ie(),p=h.length;p<n.length;p+=1)m(p);ue()}},i(o){if(!_){for(let k=0;k<h.length;k+=1)O(n[k]);_=!0}},o(o){n=n.filter(Boolean);for(let k=0;k<n.length;k+=1)S(n[k]);_=!1},d(o){o&&u(e),o&&u(t),o&&u(r),ve(n,o)}}}function mt(a){let e,l,t,r,s,_,h,n;return t=new pt({props:{name:a[1]}}),_=new We({props:{players:a[0].similar_team[a[1]]}}),{c(){e=g("tr"),l=g("td"),Q(t.$$.fragment),r=H(),s=g("td"),Q(_.$$.fragment),h=H(),this.h()},l(m){e=v(m,"TR",{});var o=b(e);l=v(o,"TD",{class:!0,style:!0});var k=b(l);V(t.$$.fragment,k),k.forEach(u),r=B(o),s=v(o,"TD",{class:!0});var p=b(s);V(_.$$.fragment,p),p.forEach(u),h=B(o),o.forEach(u),this.h()},h(){F(l,"class","tal"),de(l,"width","20em"),F(s,"class","tal")},m(m,o){q(m,e,o),f(e,l),X(t,l,null),f(e,r),f(e,s),X(_,s,null),f(e,h),n=!0},p(m,o){const k={};o&1&&(k.name=m[1]),t.$set(k);const p={};o&1&&(p.players=m[0].similar_team[m[1]]),_.$set(p)},i(m){n||(O(t.$$.fragment,m),O(_.$$.fragment,m),n=!0)},o(m){S(t.$$.fragment,m),S(_.$$.fragment,m),n=!1},d(m){m&&u(e),Z(t),Z(_)}}}function Pt(a){let e=a[0]&&Object.keys(a[0].similar_team).length>0,l,t,r=e&&ut(a);return{c(){r&&r.c(),l=ye()},l(s){r&&r.l(s),l=ye()},m(s,_){r&&r.m(s,_),q(s,l,_),t=!0},p(s,[_]){_&1&&(e=s[0]&&Object.keys(s[0].similar_team).length>0),e?r?(r.p(s,_),_&1&&O(r,1)):(r=ut(s),r.c(),O(r,1),r.m(l.parentNode,l)):r&&(ie(),S(r,1,1,()=>{r=null}),ue())},i(s){t||(O(r),t=!0)},o(s){S(r),t=!1},d(s){r&&r.d(s),s&&u(l)}}}function Mt(a,e,l){let t;return pe(a,ge,r=>l(0,t=r)),[t]}class St extends Me{constructor(e){super();Se(this,e,Mt,Pt,Ye,{})}}function ct(a,e,l){const t=a.slice();return t[5]=e[l],t[7]=l,t}function Yt(a){let e,l;return e=new kt({}),{c(){Q(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){X(e,t,r),l=!0},p:bt,i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function qt(a){let e,l,t,r=a[1].team.name+"",s,_,h,n,m,o,k,p,j,N,R,T,A,W,L,M,U,z,E,y,w=a[1].team.tournament_count+"",P,D,$,d=a[1].team.win+"",i,Y,te,J=a[1].team.lose+"",x,ee,ne,K,ae,be,qe,ce,He,Ee,Fe,Be,he,Oe,Te,Ue,Re,_e,Ne,$e,se;e=new yt({props:{title:a[1].team.name,type:"article",url:"team/detail/?t="+a[0],description:""}}),D=new De({props:{t:" \u5927\u4F1A"}}),Y=new De({props:{t:" \u52DD"}}),ee=new De({props:{t:" \u6557"}});let ke=a[1].team.names,re=[];for(let c=0;c<ke.length;c+=1)re[c]=ht(ct(a,ke,c));return he=new Nt({}),_e=new Lt({}),$e=new St({}),{c(){Q(e.$$.fragment),l=H(),t=g("h2"),s=G(r),_=H(),h=g("h4"),n=G("\u57FA\u672C\u60C5\u5831"),m=H(),o=g("table"),k=g("thead"),p=g("tr"),j=g("th"),R=H(),T=g("th"),W=H(),L=g("tbody"),M=g("tr"),U=g("th"),z=G("\u6226\u7E3E"),E=H(),y=g("td"),P=G(w),Q(D.$$.fragment),$=H(),i=G(d),Q(Y.$$.fragment),te=H(),x=G(J),Q(ee.$$.fragment),ne=H(),K=g("tr"),ae=g("th"),be=G("\u5927\u4F1A\u53C2\u52A0\u767B\u9332\u30C1\u30FC\u30E0\u540D"),qe=H(),ce=g("td");for(let c=0;c<re.length;c+=1)re[c].c();He=H(),Ee=g("h3"),Fe=G("\u53C2\u52A0\u5927\u4F1A"),Be=H(),Q(he.$$.fragment),Oe=H(),Te=g("h3"),Ue=G("\u30E1\u30F3\u30D0\u30FC"),Re=H(),Q(_e.$$.fragment),Ne=H(),Q($e.$$.fragment),this.h()},l(c){V(e.$$.fragment,c),l=B(c),t=v(c,"H2",{});var C=b(t);s=I(C,r),C.forEach(u),_=B(c),h=v(c,"H4",{});var oe=b(h);n=I(oe,"\u57FA\u672C\u60C5\u5831"),oe.forEach(u),m=B(c),o=v(c,"TABLE",{});var le=b(o);k=v(le,"THEAD",{});var we=b(k);p=v(we,"TR",{style:!0});var je=b(p);j=v(je,"TH",{style:!0}),b(j).forEach(u),R=B(je),T=v(je,"TH",{style:!0}),b(T).forEach(u),je.forEach(u),we.forEach(u),W=B(le),L=v(le,"TBODY",{});var Ae=b(L);M=v(Ae,"TR",{});var Le=b(M);U=v(Le,"TH",{});var Ge=b(U);z=I(Ge,"\u6226\u7E3E"),Ge.forEach(u),E=B(Le),y=v(Le,"TD",{class:!0});var fe=b(y);P=I(fe,w),V(D.$$.fragment,fe),$=B(fe),i=I(fe,d),V(Y.$$.fragment,fe),te=B(fe),x=I(fe,J),V(ee.$$.fragment,fe),fe.forEach(u),Le.forEach(u),ne=B(Ae),K=v(Ae,"TR",{});var Pe=b(K);ae=v(Pe,"TH",{});var Ie=b(ae);be=I(Ie,"\u5927\u4F1A\u53C2\u52A0\u767B\u9332\u30C1\u30FC\u30E0\u540D"),Ie.forEach(u),qe=B(Pe),ce=v(Pe,"TD",{class:!0});var Je=b(ce);for(let Ce=0;Ce<re.length;Ce+=1)re[Ce].l(Je);Je.forEach(u),Pe.forEach(u),Ae.forEach(u),le.forEach(u),He=B(c),Ee=v(c,"H3",{});var Ke=b(Ee);Fe=I(Ke,"\u53C2\u52A0\u5927\u4F1A"),Ke.forEach(u),Be=B(c),V(he.$$.fragment,c),Oe=B(c),Te=v(c,"H3",{});var Qe=b(Te);Ue=I(Qe,"\u30E1\u30F3\u30D0\u30FC"),Qe.forEach(u),Re=B(c),V(_e.$$.fragment,c),Ne=B(c),V($e.$$.fragment,c),this.h()},h(){F(j,"style",N=a[2]?"":"width: 20%"),F(T,"style",A=a[2]?"":"width: 80%"),F(p,"style",""),F(y,"class","tal"),F(ce,"class","tal")},m(c,C){X(e,c,C),q(c,l,C),q(c,t,C),f(t,s),q(c,_,C),q(c,h,C),f(h,n),q(c,m,C),q(c,o,C),f(o,k),f(k,p),f(p,j),f(p,R),f(p,T),f(o,W),f(o,L),f(L,M),f(M,U),f(U,z),f(M,E),f(M,y),f(y,P),X(D,y,null),f(y,$),f(y,i),X(Y,y,null),f(y,te),f(y,x),X(ee,y,null),f(L,ne),f(L,K),f(K,ae),f(ae,be),f(K,qe),f(K,ce);for(let oe=0;oe<re.length;oe+=1)re[oe].m(ce,null);q(c,He,C),q(c,Ee,C),f(Ee,Fe),q(c,Be,C),X(he,c,C),q(c,Oe,C),q(c,Te,C),f(Te,Ue),q(c,Re,C),X(_e,c,C),q(c,Ne,C),X($e,c,C),se=!0},p(c,C){const oe={};if(C&2&&(oe.title=c[1].team.name),C&1&&(oe.url="team/detail/?t="+c[0]),e.$set(oe),(!se||C&2)&&r!==(r=c[1].team.name+"")&&me(s,r),(!se||C&4&&N!==(N=c[2]?"":"width: 20%"))&&F(j,"style",N),(!se||C&4&&A!==(A=c[2]?"":"width: 80%"))&&F(T,"style",A),(!se||C&2)&&w!==(w=c[1].team.tournament_count+"")&&me(P,w),(!se||C&2)&&d!==(d=c[1].team.win+"")&&me(i,d),(!se||C&2)&&J!==(J=c[1].team.lose+"")&&me(x,J),C&2){ke=c[1].team.names;let le;for(le=0;le<ke.length;le+=1){const we=ct(c,ke,le);re[le]?re[le].p(we,C):(re[le]=ht(we),re[le].c(),re[le].m(ce,null))}for(;le<re.length;le+=1)re[le].d(1);re.length=ke.length}},i(c){se||(O(e.$$.fragment,c),O(D.$$.fragment,c),O(Y.$$.fragment,c),O(ee.$$.fragment,c),O(he.$$.fragment,c),O(_e.$$.fragment,c),O($e.$$.fragment,c),se=!0)},o(c){S(e.$$.fragment,c),S(D.$$.fragment,c),S(Y.$$.fragment,c),S(ee.$$.fragment,c),S(he.$$.fragment,c),S(_e.$$.fragment,c),S($e.$$.fragment,c),se=!1},d(c){Z(e,c),c&&u(l),c&&u(t),c&&u(_),c&&u(h),c&&u(m),c&&u(o),Z(D),Z(Y),Z(ee),ve(re,c),c&&u(He),c&&u(Ee),c&&u(Be),Z(he,c),c&&u(Oe),c&&u(Te),c&&u(Re),Z(_e,c),c&&u(Ne),Z($e,c)}}}function Ft(a){let e;return{c(){e=G(", ")},l(l){e=I(l,", ")},m(l,t){q(l,e,t)},d(l){l&&u(e)}}}function ht(a){let e=a[5]+"",l,t=a[7]!==0&&Ft();return{c(){t&&t.c(),l=G(e)},l(r){t&&t.l(r),l=I(r,e)},m(r,s){t&&t.m(r,s),q(r,l,s)},p(r,s){s&2&&e!==(e=r[5]+"")&&me(l,e)},d(r){t&&t.d(r),r&&u(l)}}}function Ut(a){let e,l,t,r;const s=[qt,Yt],_=[];function h(n,m){return n[1]?0:1}return e=h(a),l=_[e]=s[e](a),{c(){l.c(),t=ye()},l(n){l.l(n),t=ye()},m(n,m){_[e].m(n,m),q(n,t,m),r=!0},p(n,[m]){let o=e;e=h(n),e===o?_[e].p(n,m):(ie(),S(_[o],1,1,()=>{_[o]=null}),ue(),l=_[e],l?l.p(n,m):(l=_[e]=s[e](n),l.c()),O(l,1),l.m(t.parentNode,t))},i(n){r||(O(l),r=!0)},o(n){S(l),r=!1},d(n){_[e].d(n),n&&u(t)}}}function Ct(a,e,l){let t,r,s;pe(a,Ve,n=>l(0,t=n)),pe(a,ge,n=>l(1,r=n)),pe(a,dt,n=>l(2,s=n)),Tt(()=>{h(null)}),vt(()=>ge.set(null));async function _(n){fetch("/center_pin_g/data/team/team_aliases.json").then(m=>m.json()).then(m=>{h(m[n])}).catch(()=>[])}async function h(n){ge.set(null),Ve.set(Et(n,"m")),t!==null&&fetch(`/center_pin_g/data/team/${t}.json`).then(m=>{if(m.status===404)throw new Error("NOT FOUND");return m.json()}).then(m=>{Dt(m)}).catch(m=>{m.message==="NOT FOUND"&&n===null&&_(t)})}return[t,r,s]}class el extends Me{constructor(e){super();Se(this,e,Ct,Ut,Ye,{})}}export{el as default};
