import{D as pt,S as Me,i as Se,s as Ye,l as ye,g as q,n as ie,o as L,p as ue,q as N,d as u,M as pe,e as v,t as z,k as B,w as Q,c as b,a as E,h as G,m as R,x as V,b as U,H as f,y as X,j as me,B as Z,R as ve,f as de,W as Et,O as Tt}from"../../../chunks/vendor-aa1ac626.js";import{s as dt,d as kt,f as Ve}from"../../../chunks/global-7f6d1fbb.js";import{a as yt}from"../../../chunks/navigation-c0b2019f.js";import{D as gt,T as De,P as wt}from"../../../chunks/PopUpA-5ccde3a3.js";import{H as Dt}from"../../../chunks/Header-9fdeeeb9.js";import{a as vt,T as bt}from"../../../chunks/TeamName-61f63bec.js";import{P as We}from"../../../chunks/PlayersLine-381dd53c.js";import{T as ze}from"../../../chunks/TournamentName-4bdb95da.js";import{P as Ht}from"../../../chunks/PlayerName-bb46b055.js";import"../../../chunks/singletons-a6a7384f.js";import"../../../chunks/paths-4b3c6e7e.js";const Xe=pt(""),ge=pt(null);function Ot(a){const e={};for(const[l,t]of a.tournaments.entries())for(const r of t.player_list)e[r]===void 0&&(e[r]={tournament:l,count:0}),e[r].count+=1;a.players=Object.keys(e),a.players.sort((l,t)=>e[l].tournament===e[t].tournament?e[l].count<e[t].count:e[l].tournament>e[t].tournament),a.reversed_tournaments=[...a.tournaments].reverse(),ge.set(a)}function Ze(a,e,l){const t=a.slice();return t[2]=e[l],t[4]=l,t}function xe(a,e,l){const t=a.slice();return t[2]=e[l],t[4]=l,t}function Bt(a){let e,l,t,r,s,_,h,n,m,o,p,d,y,H,k,j,S,Y,F,P,I,W,T,w=a[1].tournaments,D=[];for(let O=0;O<w.length;O+=1)D[O]=et(Ze(a,w,O));const A=O=>L(D[O],1,1,()=>{D[O]=null});return{c(){e=v("table"),l=v("thead"),t=v("tr"),r=v("th"),s=z("#"),_=B(),h=v("th"),n=z("\u958B\u50AC\u65E5"),m=B(),o=v("th"),p=z("\u5927\u4F1A\u540D"),d=B(),y=v("th"),H=z("\u7D50\u679C"),k=B(),j=v("th"),S=z("\u767B\u9332\u30C1\u30FC\u30E0\u540D"),Y=B(),F=v("th"),P=z("\u30E1\u30F3\u30D0\u30FC"),I=B(),W=v("tbody");for(let O=0;O<D.length;O+=1)D[O].c();this.h()},l(O){e=b(O,"TABLE",{});var $=E(e);l=b($,"THEAD",{});var g=E(l);t=b(g,"TR",{});var i=E(t);r=b(i,"TH",{class:!0});var M=E(r);s=G(M,"#"),M.forEach(u),_=R(i),h=b(i,"TH",{});var te=E(h);n=G(te,"\u958B\u50AC\u65E5"),te.forEach(u),m=R(i),o=b(i,"TH",{class:!0});var J=E(o);p=G(J,"\u5927\u4F1A\u540D"),J.forEach(u),d=R(i),y=b(i,"TH",{});var x=E(y);H=G(x,"\u7D50\u679C"),x.forEach(u),k=R(i),j=b(i,"TH",{class:!0});var ee=E(j);S=G(ee,"\u767B\u9332\u30C1\u30FC\u30E0\u540D"),ee.forEach(u),Y=R(i),F=b(i,"TH",{class:!0});var ne=E(F);P=G(ne,"\u30E1\u30F3\u30D0\u30FC"),ne.forEach(u),i.forEach(u),g.forEach(u),I=R($),W=b($,"TBODY",{});var K=E(W);for(let ae=0;ae<D.length;ae+=1)D[ae].l(K);K.forEach(u),$.forEach(u),this.h()},h(){U(r,"class","tar"),U(o,"class","tal"),U(j,"class","tal"),U(F,"class","tal")},m(O,$){q(O,e,$),f(e,l),f(l,t),f(t,r),f(r,s),f(t,_),f(t,h),f(h,n),f(t,m),f(t,o),f(o,p),f(t,d),f(t,y),f(y,H),f(t,k),f(t,j),f(j,S),f(t,Y),f(t,F),f(F,P),f(e,I),f(e,W);for(let g=0;g<D.length;g+=1)D[g].m(W,null);T=!0},p(O,$){if($&2){w=O[1].tournaments;let g;for(g=0;g<w.length;g+=1){const i=Ze(O,w,g);D[g]?(D[g].p(i,$),N(D[g],1)):(D[g]=et(i),D[g].c(),N(D[g],1),D[g].m(W,null))}for(ie(),g=w.length;g<D.length;g+=1)A(g);ue()}},i(O){if(!T){for(let $=0;$<w.length;$+=1)N(D[$]);T=!0}},o(O){D=D.filter(Boolean);for(let $=0;$<D.length;$+=1)L(D[$]);T=!1},d(O){O&&u(e),ve(D,O)}}}function Rt(a){let e,l,t,r=a[1].tournaments,s=[];for(let h=0;h<r.length;h+=1)s[h]=tt(xe(a,r,h));const _=h=>L(s[h],1,1,()=>{s[h]=null});return{c(){e=v("table"),l=v("tbody");for(let h=0;h<s.length;h+=1)s[h].c();this.h()},l(h){e=b(h,"TABLE",{});var n=E(e);l=b(n,"TBODY",{class:!0});var m=E(l);for(let o=0;o<s.length;o+=1)s[o].l(m);m.forEach(u),n.forEach(u),this.h()},h(){U(l,"class","triple")},m(h,n){q(h,e,n),f(e,l);for(let m=0;m<s.length;m+=1)s[m].m(l,null);t=!0},p(h,n){if(n&2){r=h[1].tournaments;let m;for(m=0;m<r.length;m+=1){const o=xe(h,r,m);s[m]?(s[m].p(o,n),N(s[m],1)):(s[m]=tt(o),s[m].c(),N(s[m],1),s[m].m(l,null))}for(ie(),m=r.length;m<s.length;m+=1)_(m);ue()}},i(h){if(!t){for(let n=0;n<r.length;n+=1)N(s[n]);t=!0}},o(h){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)L(s[n]);t=!1},d(h){h&&u(e),ve(s,h)}}}function et(a){let e,l,t=a[4]+1+"",r,s,_,h,n,m,o,p,d,y,H,k,j=a[2].name+"",S,Y,F,P,I,W;return h=new gt({props:{date:a[2].tournament_date}}),o=new ze({props:{name:a[2].tournament_name,key:a[2].tournament_key,official:!1}}),y=new vt({props:{rank:a[2].result}}),P=new We({props:{players:a[2].player_list}}),{c(){e=v("tr"),l=v("td"),r=z(t),s=B(),_=v("td"),Q(h.$$.fragment),n=B(),m=v("td"),Q(o.$$.fragment),p=B(),d=v("td"),Q(y.$$.fragment),H=B(),k=v("td"),S=z(j),Y=B(),F=v("td"),Q(P.$$.fragment),I=B(),this.h()},l(T){e=b(T,"TR",{});var w=E(e);l=b(w,"TD",{class:!0});var D=E(l);r=G(D,t),D.forEach(u),s=R(w),_=b(w,"TD",{});var A=E(_);V(h.$$.fragment,A),A.forEach(u),n=R(w),m=b(w,"TD",{class:!0});var O=E(m);V(o.$$.fragment,O),O.forEach(u),p=R(w),d=b(w,"TD",{});var $=E(d);V(y.$$.fragment,$),$.forEach(u),H=R(w),k=b(w,"TD",{class:!0});var g=E(k);S=G(g,j),g.forEach(u),Y=R(w),F=b(w,"TD",{class:!0});var i=E(F);V(P.$$.fragment,i),i.forEach(u),I=R(w),w.forEach(u),this.h()},h(){U(l,"class","tar"),U(m,"class","tal"),U(k,"class","tal"),U(F,"class","tal")},m(T,w){q(T,e,w),f(e,l),f(l,r),f(e,s),f(e,_),X(h,_,null),f(e,n),f(e,m),X(o,m,null),f(e,p),f(e,d),X(y,d,null),f(e,H),f(e,k),f(k,S),f(e,Y),f(e,F),X(P,F,null),f(e,I),W=!0},p(T,w){const D={};w&2&&(D.date=T[2].tournament_date),h.$set(D);const A={};w&2&&(A.name=T[2].tournament_name),w&2&&(A.key=T[2].tournament_key),o.$set(A);const O={};w&2&&(O.rank=T[2].result),y.$set(O),(!W||w&2)&&j!==(j=T[2].name+"")&&me(S,j);const $={};w&2&&($.players=T[2].player_list),P.$set($)},i(T){W||(N(h.$$.fragment,T),N(o.$$.fragment,T),N(y.$$.fragment,T),N(P.$$.fragment,T),W=!0)},o(T){L(h.$$.fragment,T),L(o.$$.fragment,T),L(y.$$.fragment,T),L(P.$$.fragment,T),W=!1},d(T){T&&u(e),Z(h),Z(o),Z(y),Z(P)}}}function tt(a){let e,l,t,r=a[4]+1+"",s,_,h,n,m,o,p,d,y,H,k,j,S=a[2].name+"",Y,F,P,I,W,T,w,D,A,O,$,g;return n=new ze({props:{name:a[2].tournament_name,key:a[2].tournament_key,official:!1}}),d=new gt({props:{date:a[2].tournament_date}}),k=new De({props:{t:"\u767B\u9332\u30C1\u30FC\u30E0\u540D"}}),I=new De({props:{t:"\u7D50\u679C"}}),T=new vt({props:{rank:a[2].result}}),O=new We({props:{players:a[2].player_list}}),{c(){e=v("tr"),l=v("th"),t=z("#"),s=z(r),_=B(),h=v("th"),Q(n.$$.fragment),m=B(),o=v("tr"),p=v("td"),Q(d.$$.fragment),y=B(),H=v("td"),Q(k.$$.fragment),j=B(),Y=z(S),F=B(),P=v("td"),Q(I.$$.fragment),W=B(),Q(T.$$.fragment),w=B(),D=v("tr"),A=v("td"),Q(O.$$.fragment),$=B(),this.h()},l(i){e=b(i,"TR",{});var M=E(e);l=b(M,"TH",{rowspan:!0,style:!0});var te=E(l);t=G(te,"#"),s=G(te,r),te.forEach(u),_=R(M),h=b(M,"TH",{class:!0,colspan:!0});var J=E(h);V(n.$$.fragment,J),J.forEach(u),M.forEach(u),m=R(i),o=b(i,"TR",{class:!0});var x=E(o);p=b(x,"TD",{class:!0});var ee=E(p);V(d.$$.fragment,ee),ee.forEach(u),y=R(x),H=b(x,"TD",{class:!0});var ne=E(H);V(k.$$.fragment,ne),j=R(ne),Y=G(ne,S),ne.forEach(u),F=R(x),P=b(x,"TD",{class:!0});var K=E(P);V(I.$$.fragment,K),W=R(K),V(T.$$.fragment,K),K.forEach(u),x.forEach(u),w=R(i),D=b(i,"TR",{});var ae=E(D);A=b(ae,"TD",{class:!0,colspan:!0});var be=E(A);V(O.$$.fragment,be),be.forEach(u),$=R(ae),ae.forEach(u),this.h()},h(){U(l,"rowspan","3"),de(l,"vertical-align","middle"),U(h,"class","tal"),U(h,"colspan","3"),U(p,"class","tal"),U(H,"class","tal"),U(P,"class","nw"),U(o,"class","tal"),U(A,"class","tal"),U(A,"colspan","3")},m(i,M){q(i,e,M),f(e,l),f(l,t),f(l,s),f(e,_),f(e,h),X(n,h,null),q(i,m,M),q(i,o,M),f(o,p),X(d,p,null),f(o,y),f(o,H),X(k,H,null),f(H,j),f(H,Y),f(o,F),f(o,P),X(I,P,null),f(P,W),X(T,P,null),q(i,w,M),q(i,D,M),f(D,A),X(O,A,null),f(D,$),g=!0},p(i,M){const te={};M&2&&(te.name=i[2].tournament_name),M&2&&(te.key=i[2].tournament_key),n.$set(te);const J={};M&2&&(J.date=i[2].tournament_date),d.$set(J),(!g||M&2)&&S!==(S=i[2].name+"")&&me(Y,S);const x={};M&2&&(x.rank=i[2].result),T.$set(x);const ee={};M&2&&(ee.players=i[2].player_list),O.$set(ee)},i(i){g||(N(n.$$.fragment,i),N(d.$$.fragment,i),N(k.$$.fragment,i),N(I.$$.fragment,i),N(T.$$.fragment,i),N(O.$$.fragment,i),g=!0)},o(i){L(n.$$.fragment,i),L(d.$$.fragment,i),L(k.$$.fragment,i),L(I.$$.fragment,i),L(T.$$.fragment,i),L(O.$$.fragment,i),g=!1},d(i){i&&u(e),Z(n),i&&u(m),i&&u(o),Z(d),Z(k),Z(I),Z(T),i&&u(w),i&&u(D),Z(O)}}}function Nt(a){let e,l,t,r;const s=[Rt,Bt],_=[];function h(n,m){return n[0]?0:1}return e=h(a),l=_[e]=s[e](a),{c(){l.c(),t=ye()},l(n){l.l(n),t=ye()},m(n,m){_[e].m(n,m),q(n,t,m),r=!0},p(n,[m]){let o=e;e=h(n),e===o?_[e].p(n,m):(ie(),L(_[o],1,1,()=>{_[o]=null}),ue(),l=_[e],l?l.p(n,m):(l=_[e]=s[e](n),l.c()),N(l,1),l.m(t.parentNode,t))},i(n){r||(N(l),r=!0)},o(n){L(l),r=!1},d(n){_[e].d(n),n&&u(t)}}}function jt(a,e,l){let t,r;return pe(a,dt,s=>l(0,t=s)),pe(a,ge,s=>l(1,r=s)),[t,r]}class At extends Me{constructor(e){super();Se(this,e,jt,Nt,Ye,{})}}function lt(a,e,l){const t=a.slice();t[1]=e[l];const r=t[0].player_info[t[1]];return t[2]=r,t}function rt(a,e,l){const t=a.slice();return t[5]=e[l],t}function nt(a,e,l){const t=a.slice();return t[5]=e[l],t[9]=l,t}function at(a){let e,l,t;return l=new ze({props:{name:a[0].reversed_tournaments.length-a[9],key:a[5].tournament_key,official:!1}}),{c(){e=v("th"),Q(l.$$.fragment),this.h()},l(r){e=b(r,"TH",{style:!0});var s=E(e);V(l.$$.fragment,s),s.forEach(u),this.h()},h(){de(e,"width","2em")},m(r,s){q(r,e,s),X(l,e,null),t=!0},p(r,s){const _={};s&1&&(_.name=r[0].reversed_tournaments.length-r[9]),s&1&&(_.key=r[5].tournament_key),l.$set(_)},i(r){t||(N(l.$$.fragment,r),t=!0)},o(r){L(l.$$.fragment,r),t=!1},d(r){r&&u(e),Z(l)}}}function st(a){let e=a[2].rating.toLocaleString()+"",l;return{c(){l=z(e)},l(t){l=G(t,e)},m(t,r){q(t,l,r)},p(t,r){r&1&&e!==(e=t[2].rating.toLocaleString()+"")&&me(l,e)},d(t){t&&u(l)}}}function ot(a){let e;return{c(){e=z("\u279C")},l(l){e=G(l,"\u279C")},m(l,t){q(l,e,t)},d(l){l&&u(e)}}}function ft(a){let e,l=a[5].player_list.indexOf(a[1])!==-1,t=l&&ot();return{c(){e=v("td"),t&&t.c()},l(r){e=b(r,"TD",{});var s=E(e);t&&t.l(s),s.forEach(u)},m(r,s){q(r,e,s),t&&t.m(e,null)},p(r,s){s&1&&(l=r[5].player_list.indexOf(r[1])!==-1),l?t||(t=ot(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(r){r&&u(e),t&&t.d()}}}function it(a){let e,l;return e=new bt({props:{name:a[2].latest_team,current_name:a[2].latest_team}}),{c(){Q(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){X(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.name=t[2].latest_team),r&1&&(s.current_name=t[2].latest_team),e.$set(s)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function ut(a){let e,l,t,r,s,_,h,n,m,o;t=new Ht({props:{name:a[1]}});let p=a[2]&&st(a),d=a[0].reversed_tournaments,y=[];for(let k=0;k<d.length;k+=1)y[k]=ft(rt(a,d,k));let H=a[2]&&a[2].latest_team!==a[0].team.name&&it(a);return{c(){e=v("tr"),l=v("td"),Q(t.$$.fragment),r=B(),s=v("td"),p&&p.c(),_=B();for(let k=0;k<y.length;k+=1)y[k].c();h=B(),n=v("td"),H&&H.c(),m=B(),this.h()},l(k){e=b(k,"TR",{});var j=E(e);l=b(j,"TD",{class:!0});var S=E(l);V(t.$$.fragment,S),S.forEach(u),r=R(j),s=b(j,"TD",{});var Y=E(s);p&&p.l(Y),Y.forEach(u),_=R(j);for(let P=0;P<y.length;P+=1)y[P].l(j);h=R(j),n=b(j,"TD",{class:!0});var F=E(n);H&&H.l(F),F.forEach(u),m=R(j),j.forEach(u),this.h()},h(){U(l,"class","tal"),U(n,"class","tal nw")},m(k,j){q(k,e,j),f(e,l),X(t,l,null),f(e,r),f(e,s),p&&p.m(s,null),f(e,_);for(let S=0;S<y.length;S+=1)y[S].m(e,null);f(e,h),f(e,n),H&&H.m(n,null),f(e,m),o=!0},p(k,j){const S={};if(j&1&&(S.name=k[1]),t.$set(S),k[2]?p?p.p(k,j):(p=st(k),p.c(),p.m(s,null)):p&&(p.d(1),p=null),j&1){d=k[0].reversed_tournaments;let Y;for(Y=0;Y<d.length;Y+=1){const F=rt(k,d,Y);y[Y]?y[Y].p(F,j):(y[Y]=ft(F),y[Y].c(),y[Y].m(e,h))}for(;Y<y.length;Y+=1)y[Y].d(1);y.length=d.length}k[2]&&k[2].latest_team!==k[0].team.name?H?(H.p(k,j),j&1&&N(H,1)):(H=it(k),H.c(),N(H,1),H.m(n,null)):H&&(ie(),L(H,1,1,()=>{H=null}),ue())},i(k){o||(N(t.$$.fragment,k),N(H),o=!0)},o(k){L(t.$$.fragment,k),L(H),o=!1},d(k){k&&u(e),Z(t),p&&p.d(),ve(y,k),H&&H.d()}}}function Lt(a){let e,l,t,r,s,_,h,n,m,o,p,d,y,H,k,j,S,Y,F,P,I,W=a[0].reversed_tournaments,T=[];for(let $=0;$<W.length;$+=1)T[$]=at(nt(a,W,$));const w=$=>L(T[$],1,1,()=>{T[$]=null});let D=a[0].players,A=[];for(let $=0;$<D.length;$+=1)A[$]=ut(lt(a,D,$));const O=$=>L(A[$],1,1,()=>{A[$]=null});return{c(){e=v("table"),l=v("thead"),t=v("tr"),r=v("th"),s=B(),_=v("th"),h=z("\u53C2\u52A0\u5927\u4F1A#"),m=B(),o=v("tr"),p=v("th"),d=B(),y=v("th"),H=z("rating"),k=B();for(let $=0;$<T.length;$+=1)T[$].c();j=B(),S=v("th"),Y=z("\u6700\u65B0\u30C1\u30FC\u30E0"),F=B(),P=v("tbody");for(let $=0;$<A.length;$+=1)A[$].c();this.h()},l($){e=b($,"TABLE",{style:!0});var g=E(e);l=b(g,"THEAD",{});var i=E(l);t=b(i,"TR",{});var M=E(t);r=b(M,"TH",{colspan:!0}),E(r).forEach(u),s=R(M),_=b(M,"TH",{colspan:!0,class:!0});var te=E(_);h=G(te,"\u53C2\u52A0\u5927\u4F1A#"),te.forEach(u),M.forEach(u),m=R(i),o=b(i,"TR",{});var J=E(o);p=b(J,"TH",{style:!0}),E(p).forEach(u),d=R(J),y=b(J,"TH",{style:!0});var x=E(y);H=G(x,"rating"),x.forEach(u),k=R(J);for(let K=0;K<T.length;K+=1)T[K].l(J);j=R(J),S=b(J,"TH",{class:!0});var ee=E(S);Y=G(ee,"\u6700\u65B0\u30C1\u30FC\u30E0"),ee.forEach(u),J.forEach(u),i.forEach(u),F=R(g),P=b(g,"TBODY",{});var ne=E(P);for(let K=0;K<A.length;K+=1)A[K].l(ne);ne.forEach(u),g.forEach(u),this.h()},h(){U(r,"colspan","2"),U(_,"colspan",n=a[0].reversed_tournaments.length+1),U(_,"class","tal"),de(p,"width","10em"),de(y,"width","5em"),U(S,"class","tal"),de(e,"width","100%")},m($,g){q($,e,g),f(e,l),f(l,t),f(t,r),f(t,s),f(t,_),f(_,h),f(l,m),f(l,o),f(o,p),f(o,d),f(o,y),f(y,H),f(o,k);for(let i=0;i<T.length;i+=1)T[i].m(o,null);f(o,j),f(o,S),f(S,Y),f(e,F),f(e,P);for(let i=0;i<A.length;i+=1)A[i].m(P,null);I=!0},p($,[g]){if((!I||g&1&&n!==(n=$[0].reversed_tournaments.length+1))&&U(_,"colspan",n),g&1){W=$[0].reversed_tournaments;let i;for(i=0;i<W.length;i+=1){const M=nt($,W,i);T[i]?(T[i].p(M,g),N(T[i],1)):(T[i]=at(M),T[i].c(),N(T[i],1),T[i].m(o,j))}for(ie(),i=W.length;i<T.length;i+=1)w(i);ue()}if(g&1){D=$[0].players;let i;for(i=0;i<D.length;i+=1){const M=lt($,D,i);A[i]?(A[i].p(M,g),N(A[i],1)):(A[i]=ut(M),A[i].c(),N(A[i],1),A[i].m(P,null))}for(ie(),i=D.length;i<A.length;i+=1)O(i);ue()}},i($){if(!I){for(let g=0;g<W.length;g+=1)N(T[g]);for(let g=0;g<D.length;g+=1)N(A[g]);I=!0}},o($){T=T.filter(Boolean);for(let g=0;g<T.length;g+=1)L(T[g]);A=A.filter(Boolean);for(let g=0;g<A.length;g+=1)L(A[g]);I=!1},d($){$&&u(e),ve(T,$),ve(A,$)}}}function Pt(a,e,l){let t;return pe(a,ge,r=>l(0,t=r)),[t]}class Mt extends Me{constructor(e){super();Se(this,e,Pt,Lt,Ye,{})}}function mt(a,e,l){const t=a.slice();return t[1]=e[l],t}function ct(a){let e,l,t,r,s,_,h=Object.keys(a[0].similar_team),n=[];for(let o=0;o<h.length;o+=1)n[o]=ht(mt(a,h,o));const m=o=>L(n[o],1,1,()=>{n[o]=null});return{c(){e=v("h3"),l=z("3\u540D\u4EE5\u4E0A\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u5171\u901A\u3059\u308B\u30C1\u30FC\u30E0"),t=B(),r=v("table"),s=v("tbody");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=b(o,"H3",{});var p=E(e);l=G(p,"3\u540D\u4EE5\u4E0A\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u5171\u901A\u3059\u308B\u30C1\u30FC\u30E0"),p.forEach(u),t=R(o),r=b(o,"TABLE",{style:!0});var d=E(r);s=b(d,"TBODY",{});var y=E(s);for(let H=0;H<n.length;H+=1)n[H].l(y);y.forEach(u),d.forEach(u),this.h()},h(){de(r,"width","100%")},m(o,p){q(o,e,p),f(e,l),q(o,t,p),q(o,r,p),f(r,s);for(let d=0;d<n.length;d+=1)n[d].m(s,null);_=!0},p(o,p){if(p&1){h=Object.keys(o[0].similar_team);let d;for(d=0;d<h.length;d+=1){const y=mt(o,h,d);n[d]?(n[d].p(y,p),N(n[d],1)):(n[d]=ht(y),n[d].c(),N(n[d],1),n[d].m(s,null))}for(ie(),d=h.length;d<n.length;d+=1)m(d);ue()}},i(o){if(!_){for(let p=0;p<h.length;p+=1)N(n[p]);_=!0}},o(o){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)L(n[p]);_=!1},d(o){o&&u(e),o&&u(t),o&&u(r),ve(n,o)}}}function ht(a){let e,l,t,r,s,_,h,n;return t=new bt({props:{name:a[1],current_name:a[1]}}),_=new We({props:{players:a[0].similar_team[a[1]]}}),{c(){e=v("tr"),l=v("td"),Q(t.$$.fragment),r=B(),s=v("td"),Q(_.$$.fragment),h=B(),this.h()},l(m){e=b(m,"TR",{});var o=E(e);l=b(o,"TD",{class:!0,style:!0});var p=E(l);V(t.$$.fragment,p),p.forEach(u),r=R(o),s=b(o,"TD",{class:!0});var d=E(s);V(_.$$.fragment,d),d.forEach(u),h=R(o),o.forEach(u),this.h()},h(){U(l,"class","tal"),de(l,"width","20em"),U(s,"class","tal")},m(m,o){q(m,e,o),f(e,l),X(t,l,null),f(e,r),f(e,s),X(_,s,null),f(e,h),n=!0},p(m,o){const p={};o&1&&(p.name=m[1]),o&1&&(p.current_name=m[1]),t.$set(p);const d={};o&1&&(d.players=m[0].similar_team[m[1]]),_.$set(d)},i(m){n||(N(t.$$.fragment,m),N(_.$$.fragment,m),n=!0)},o(m){L(t.$$.fragment,m),L(_.$$.fragment,m),n=!1},d(m){m&&u(e),Z(t),Z(_)}}}function St(a){let e=a[0]&&Object.keys(a[0].similar_team).length>0,l,t,r=e&&ct(a);return{c(){r&&r.c(),l=ye()},l(s){r&&r.l(s),l=ye()},m(s,_){r&&r.m(s,_),q(s,l,_),t=!0},p(s,[_]){_&1&&(e=s[0]&&Object.keys(s[0].similar_team).length>0),e?r?(r.p(s,_),_&1&&N(r,1)):(r=ct(s),r.c(),N(r,1),r.m(l.parentNode,l)):r&&(ie(),L(r,1,1,()=>{r=null}),ue())},i(s){t||(N(r),t=!0)},o(s){L(r),t=!1},d(s){r&&r.d(s),s&&u(l)}}}function Yt(a,e,l){let t;return pe(a,ge,r=>l(0,t=r)),[t]}class qt extends Me{constructor(e){super();Se(this,e,Yt,St,Ye,{})}}function _t(a,e,l){const t=a.slice();return t[5]=e[l],t[7]=l,t}function Ft(a){let e,l;return e=new wt({}),{c(){Q(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){X(e,t,r),l=!0},p:Tt,i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Ut(a){let e,l,t,r=a[1].team.name+"",s,_,h,n,m,o,p,d,y,H,k,j,S,Y,F,P,I,W,T,w,D=a[1].team.tournament_count+"",A,O,$,g=a[1].team.win+"",i,M,te,J=a[1].team.lose+"",x,ee,ne,K,ae,be,qe,ce,He,Ee,Fe,Oe,he,Be,Te,Ue,Re,_e,Ne,$e,se;e=new Dt({props:{title:a[1].team.name,type:"article",url:"team/detail/?t="+a[0],description:""}}),O=new De({props:{t:" \u5927\u4F1A"}}),M=new De({props:{t:" \u52DD"}}),ee=new De({props:{t:" \u6557"}});let ke=a[1].team.names,re=[];for(let c=0;c<ke.length;c+=1)re[c]=$t(_t(a,ke,c));return he=new At({}),_e=new Mt({}),$e=new qt({}),{c(){Q(e.$$.fragment),l=B(),t=v("h2"),s=z(r),_=B(),h=v("h4"),n=z("\u57FA\u672C\u60C5\u5831"),m=B(),o=v("table"),p=v("thead"),d=v("tr"),y=v("th"),k=B(),j=v("th"),Y=B(),F=v("tbody"),P=v("tr"),I=v("th"),W=z("\u6226\u7E3E"),T=B(),w=v("td"),A=z(D),Q(O.$$.fragment),$=B(),i=z(g),Q(M.$$.fragment),te=B(),x=z(J),Q(ee.$$.fragment),ne=B(),K=v("tr"),ae=v("th"),be=z("\u5927\u4F1A\u53C2\u52A0\u767B\u9332\u30C1\u30FC\u30E0\u540D"),qe=B(),ce=v("td");for(let c=0;c<re.length;c+=1)re[c].c();He=B(),Ee=v("h3"),Fe=z("\u53C2\u52A0\u5927\u4F1A"),Oe=B(),Q(he.$$.fragment),Be=B(),Te=v("h3"),Ue=z("\u30E1\u30F3\u30D0\u30FC"),Re=B(),Q(_e.$$.fragment),Ne=B(),Q($e.$$.fragment),this.h()},l(c){V(e.$$.fragment,c),l=R(c),t=b(c,"H2",{});var C=E(t);s=G(C,r),C.forEach(u),_=R(c),h=b(c,"H4",{});var oe=E(h);n=G(oe,"\u57FA\u672C\u60C5\u5831"),oe.forEach(u),m=R(c),o=b(c,"TABLE",{});var le=E(o);p=b(le,"THEAD",{});var we=E(p);d=b(we,"TR",{style:!0});var je=E(d);y=b(je,"TH",{style:!0}),E(y).forEach(u),k=R(je),j=b(je,"TH",{style:!0}),E(j).forEach(u),je.forEach(u),we.forEach(u),Y=R(le),F=b(le,"TBODY",{});var Ae=E(F);P=b(Ae,"TR",{});var Le=E(P);I=b(Le,"TH",{});var Ge=E(I);W=G(Ge,"\u6226\u7E3E"),Ge.forEach(u),T=R(Le),w=b(Le,"TD",{class:!0});var fe=E(w);A=G(fe,D),V(O.$$.fragment,fe),$=R(fe),i=G(fe,g),V(M.$$.fragment,fe),te=R(fe),x=G(fe,J),V(ee.$$.fragment,fe),fe.forEach(u),Le.forEach(u),ne=R(Ae),K=b(Ae,"TR",{});var Pe=E(K);ae=b(Pe,"TH",{});var Ie=E(ae);be=G(Ie,"\u5927\u4F1A\u53C2\u52A0\u767B\u9332\u30C1\u30FC\u30E0\u540D"),Ie.forEach(u),qe=R(Pe),ce=b(Pe,"TD",{class:!0});var Je=E(ce);for(let Ce=0;Ce<re.length;Ce+=1)re[Ce].l(Je);Je.forEach(u),Pe.forEach(u),Ae.forEach(u),le.forEach(u),He=R(c),Ee=b(c,"H3",{});var Ke=E(Ee);Fe=G(Ke,"\u53C2\u52A0\u5927\u4F1A"),Ke.forEach(u),Oe=R(c),V(he.$$.fragment,c),Be=R(c),Te=b(c,"H3",{});var Qe=E(Te);Ue=G(Qe,"\u30E1\u30F3\u30D0\u30FC"),Qe.forEach(u),Re=R(c),V(_e.$$.fragment,c),Ne=R(c),V($e.$$.fragment,c),this.h()},h(){U(y,"style",H=a[2]?"":"width: 20%"),U(j,"style",S=a[2]?"":"width: 80%"),U(d,"style",""),U(w,"class","tal"),U(ce,"class","tal")},m(c,C){X(e,c,C),q(c,l,C),q(c,t,C),f(t,s),q(c,_,C),q(c,h,C),f(h,n),q(c,m,C),q(c,o,C),f(o,p),f(p,d),f(d,y),f(d,k),f(d,j),f(o,Y),f(o,F),f(F,P),f(P,I),f(I,W),f(P,T),f(P,w),f(w,A),X(O,w,null),f(w,$),f(w,i),X(M,w,null),f(w,te),f(w,x),X(ee,w,null),f(F,ne),f(F,K),f(K,ae),f(ae,be),f(K,qe),f(K,ce);for(let oe=0;oe<re.length;oe+=1)re[oe].m(ce,null);q(c,He,C),q(c,Ee,C),f(Ee,Fe),q(c,Oe,C),X(he,c,C),q(c,Be,C),q(c,Te,C),f(Te,Ue),q(c,Re,C),X(_e,c,C),q(c,Ne,C),X($e,c,C),se=!0},p(c,C){const oe={};if(C&2&&(oe.title=c[1].team.name),C&1&&(oe.url="team/detail/?t="+c[0]),e.$set(oe),(!se||C&2)&&r!==(r=c[1].team.name+"")&&me(s,r),(!se||C&4&&H!==(H=c[2]?"":"width: 20%"))&&U(y,"style",H),(!se||C&4&&S!==(S=c[2]?"":"width: 80%"))&&U(j,"style",S),(!se||C&2)&&D!==(D=c[1].team.tournament_count+"")&&me(A,D),(!se||C&2)&&g!==(g=c[1].team.win+"")&&me(i,g),(!se||C&2)&&J!==(J=c[1].team.lose+"")&&me(x,J),C&2){ke=c[1].team.names;let le;for(le=0;le<ke.length;le+=1){const we=_t(c,ke,le);re[le]?re[le].p(we,C):(re[le]=$t(we),re[le].c(),re[le].m(ce,null))}for(;le<re.length;le+=1)re[le].d(1);re.length=ke.length}},i(c){se||(N(e.$$.fragment,c),N(O.$$.fragment,c),N(M.$$.fragment,c),N(ee.$$.fragment,c),N(he.$$.fragment,c),N(_e.$$.fragment,c),N($e.$$.fragment,c),se=!0)},o(c){L(e.$$.fragment,c),L(O.$$.fragment,c),L(M.$$.fragment,c),L(ee.$$.fragment,c),L(he.$$.fragment,c),L(_e.$$.fragment,c),L($e.$$.fragment,c),se=!1},d(c){Z(e,c),c&&u(l),c&&u(t),c&&u(_),c&&u(h),c&&u(m),c&&u(o),Z(O),Z(M),Z(ee),ve(re,c),c&&u(He),c&&u(Ee),c&&u(Oe),Z(he,c),c&&u(Be),c&&u(Te),c&&u(Re),Z(_e,c),c&&u(Ne),Z($e,c)}}}function Ct(a){let e;return{c(){e=z(", ")},l(l){e=G(l,", ")},m(l,t){q(l,e,t)},d(l){l&&u(e)}}}function $t(a){let e=a[5]+"",l,t=a[7]!==0&&Ct();return{c(){t&&t.c(),l=z(e)},l(r){t&&t.l(r),l=G(r,e)},m(r,s){t&&t.m(r,s),q(r,l,s)},p(r,s){s&2&&e!==(e=r[5]+"")&&me(l,e)},d(r){t&&t.d(r),r&&u(l)}}}function Wt(a){let e,l,t,r;const s=[Ut,Ft],_=[];function h(n,m){return n[1]?0:1}return e=h(a),l=_[e]=s[e](a),{c(){l.c(),t=ye()},l(n){l.l(n),t=ye()},m(n,m){_[e].m(n,m),q(n,t,m),r=!0},p(n,[m]){let o=e;e=h(n),e===o?_[e].p(n,m):(ie(),L(_[o],1,1,()=>{_[o]=null}),ue(),l=_[e],l?l.p(n,m):(l=_[e]=s[e](n),l.c()),N(l,1),l.m(t.parentNode,t))},i(n){r||(N(l),r=!0)},o(n){L(l),r=!1},d(n){_[e].d(n),n&&u(t)}}}function zt(a,e,l){let t,r,s;pe(a,Xe,n=>l(0,t=n)),pe(a,ge,n=>l(1,r=n)),pe(a,dt,n=>l(2,s=n)),yt(()=>{h(null)}),Et(()=>ge.set(null));async function _(n){Ve("team/team_aliases.json").then(m=>m.json()).then(m=>{h(m[n])}).catch(()=>[])}async function h(n){ge.set(null),Xe.set(kt(n,"m")),t!==null&&Ve(`team/${t}.json`).then(m=>{if(m.status===404)throw new Error("NOT FOUND");return m.json()}).then(m=>{Ot(m)}).catch(m=>{m.message==="NOT FOUND"&&n===null&&_(t)})}return[t,r,s]}class ll extends Me{constructor(e){super();Se(this,e,zt,Wt,Ye,{})}}export{ll as default};
