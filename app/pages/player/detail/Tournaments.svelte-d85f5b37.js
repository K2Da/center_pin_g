import{S as vt,i as bt,s as kt,k as rt,f as V,n as N,o as nt,p as H,d as m,K as ft,m as st,e as g,v as Z,j as R,t as C,c as v,a as b,w as x,l as A,g as F,b as B,F as a,x as tt,h as at,A as et,P as ut}from"../../../chunks/vendor-183b23ac.js";import{a as Tt}from"../../../chunks/index_store-234d538c.js";import{s as Et}from"../../../chunks/global_store-bb706853.js";import{T as ct}from"../../../chunks/T-f1f1b14a.js";import{T as _t}from"../../../chunks/TournamentResult-5f3cc637.js";import{D as mt}from"../../../chunks/Date-c4b5d8a5.js";import{P as it}from"../../../chunks/PlayersLine-a592b65f.js";import"../../../chunks/paths-28a87002.js";function ht(i,e,r){const t=i.slice();return t[2]=e[r],t}function dt(i,e,r){const t=i.slice();return t[2]=e[r],t}function pt(i){let e,r,t,u;const n=[yt,Dt],k=[];function _(l,c){return l[1]?0:1}return e=_(i),r=k[e]=n[e](i),{c(){r.c(),t=rt()},l(l){r.l(l),t=rt()},m(l,c){k[e].m(l,c),V(l,t,c),u=!0},p(l,c){let $=e;e=_(l),e===$?k[e].p(l,c):(st(),N(k[$],1,1,()=>{k[$]=null}),nt(),r=k[e],r?r.p(l,c):(r=k[e]=n[e](l),r.c()),H(r,1),r.m(t.parentNode,t))},i(l){u||(H(r),u=!0)},o(l){N(r),u=!1},d(l){k[e].d(l),l&&m(t)}}}function Dt(i){let e,r,t,u,n,k,_,l,c,$,z,D,P,G,O,S,Q,j,y,I,M,w,L,E=i[0].tournaments,d=[];for(let p=0;p<E.length;p+=1)d[p]=$t(ht(i,E,p));const Y=p=>N(d[p],1,1,()=>{d[p]=null});return{c(){e=g("table"),r=g("thead"),t=g("tr"),u=g("th"),n=C("\u958B\u50AC\u65E5"),k=R(),_=g("th"),l=C("\u5927\u4F1A\u540D"),c=R(),$=g("th"),z=C("\u7D50\u679C"),D=R(),P=g("th"),G=C("rating"),O=R(),S=g("th"),Q=C("\u30C1\u30FC\u30E0\u540D"),j=R(),y=g("th"),I=C("\u30E1\u30F3\u30D0\u30FC"),M=R(),w=g("tbody");for(let p=0;p<d.length;p+=1)d[p].c();this.h()},l(p){e=v(p,"TABLE",{});var h=b(e);r=v(h,"THEAD",{});var s=b(r);t=v(s,"TR",{});var o=b(t);u=v(o,"TH",{});var f=b(u);n=F(f,"\u958B\u50AC\u65E5"),f.forEach(m),k=A(o),_=v(o,"TH",{class:!0});var T=b(_);l=F(T,"\u5927\u4F1A\u540D"),T.forEach(m),c=A(o),$=v(o,"TH",{});var K=b($);z=F(K,"\u7D50\u679C"),K.forEach(m),D=A(o),P=v(o,"TH",{});var U=b(P);G=F(U,"rating"),U.forEach(m),O=A(o),S=v(o,"TH",{class:!0});var q=b(S);Q=F(q,"\u30C1\u30FC\u30E0\u540D"),q.forEach(m),j=A(o),y=v(o,"TH",{class:!0});var W=b(y);I=F(W,"\u30E1\u30F3\u30D0\u30FC"),W.forEach(m),o.forEach(m),s.forEach(m),M=A(h),w=v(h,"TBODY",{});var J=b(w);for(let X=0;X<d.length;X+=1)d[X].l(J);J.forEach(m),h.forEach(m),this.h()},h(){B(_,"class","tal"),B(S,"class","tal"),B(y,"class","tal")},m(p,h){V(p,e,h),a(e,r),a(r,t),a(t,u),a(u,n),a(t,k),a(t,_),a(_,l),a(t,c),a(t,$),a($,z),a(t,D),a(t,P),a(P,G),a(t,O),a(t,S),a(S,Q),a(t,j),a(t,y),a(y,I),a(e,M),a(e,w);for(let s=0;s<d.length;s+=1)d[s].m(w,null);L=!0},p(p,h){if(h&1){E=p[0].tournaments;let s;for(s=0;s<E.length;s+=1){const o=ht(p,E,s);d[s]?(d[s].p(o,h),H(d[s],1)):(d[s]=$t(o),d[s].c(),H(d[s],1),d[s].m(w,null))}for(st(),s=E.length;s<d.length;s+=1)Y(s);nt()}},i(p){if(!L){for(let h=0;h<E.length;h+=1)H(d[h]);L=!0}},o(p){d=d.filter(Boolean);for(let h=0;h<d.length;h+=1)N(d[h]);L=!1},d(p){p&&m(e),ut(d,p)}}}function yt(i){let e,r,t,u=i[0].tournaments,n=[];for(let _=0;_<u.length;_+=1)n[_]=gt(dt(i,u,_));const k=_=>N(n[_],1,1,()=>{n[_]=null});return{c(){e=g("table"),r=g("tbody");for(let _=0;_<n.length;_+=1)n[_].c();this.h()},l(_){e=v(_,"TABLE",{});var l=b(e);r=v(l,"TBODY",{class:!0});var c=b(r);for(let $=0;$<n.length;$+=1)n[$].l(c);c.forEach(m),l.forEach(m),this.h()},h(){B(r,"class","triple")},m(_,l){V(_,e,l),a(e,r);for(let c=0;c<n.length;c+=1)n[c].m(r,null);t=!0},p(_,l){if(l&1){u=_[0].tournaments;let c;for(c=0;c<u.length;c+=1){const $=dt(_,u,c);n[c]?(n[c].p($,l),H(n[c],1)):(n[c]=gt($),n[c].c(),H(n[c],1),n[c].m(r,null))}for(st(),c=u.length;c<n.length;c+=1)k(c);nt()}},i(_){if(!t){for(let l=0;l<u.length;l+=1)H(n[l]);t=!0}},o(_){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)N(n[l]);t=!1},d(_){_&&m(e),ut(n,_)}}}function $t(i){let e,r,t,u,n,k,_=i[2].tournament_name+"",l,c,$,z,D,P,G,O=i[2].rating.toLocaleString()+"",S,Q,j,y=i[2].team_name+"",I,M,w,L=i[2].member_name+"",E,d,Y,p,h;return t=new mt({props:{date:i[2].tournament_date}}),D=new _t({props:{rank:i[2].team_result}}),Y=new it({props:{players:i[2].mate_list}}),{c(){e=g("tr"),r=g("td"),Z(t.$$.fragment),u=R(),n=g("td"),k=g("a"),l=C(_),$=R(),z=g("td"),Z(D.$$.fragment),P=R(),G=g("td"),S=C(O),Q=R(),j=g("td"),I=C(y),M=R(),w=g("td"),E=C(L),d=C(", "),Z(Y.$$.fragment),p=R(),this.h()},l(s){e=v(s,"TR",{});var o=b(e);r=v(o,"TD",{});var f=b(r);x(t.$$.fragment,f),f.forEach(m),u=A(o),n=v(o,"TD",{class:!0});var T=b(n);k=v(T,"A",{href:!0});var K=b(k);l=F(K,_),K.forEach(m),T.forEach(m),$=A(o),z=v(o,"TD",{});var U=b(z);x(D.$$.fragment,U),U.forEach(m),P=A(o),G=v(o,"TD",{});var q=b(G);S=F(q,O),q.forEach(m),Q=A(o),j=v(o,"TD",{class:!0});var W=b(j);I=F(W,y),W.forEach(m),M=A(o),w=v(o,"TD",{class:!0});var J=b(w);E=F(J,L),d=F(J,", "),x(Y.$$.fragment,J),J.forEach(m),p=A(o),o.forEach(m),this.h()},h(){B(k,"href",c="#"+i[2].tournament_key),B(n,"class","tal"),B(j,"class","tal"),B(w,"class","tal")},m(s,o){V(s,e,o),a(e,r),tt(t,r,null),a(e,u),a(e,n),a(n,k),a(k,l),a(e,$),a(e,z),tt(D,z,null),a(e,P),a(e,G),a(G,S),a(e,Q),a(e,j),a(j,I),a(e,M),a(e,w),a(w,E),a(w,d),tt(Y,w,null),a(e,p),h=!0},p(s,o){const f={};o&1&&(f.date=s[2].tournament_date),t.$set(f),(!h||o&1)&&_!==(_=s[2].tournament_name+"")&&at(l,_),(!h||o&1&&c!==(c="#"+s[2].tournament_key))&&B(k,"href",c);const T={};o&1&&(T.rank=s[2].team_result),D.$set(T),(!h||o&1)&&O!==(O=s[2].rating.toLocaleString()+"")&&at(S,O),(!h||o&1)&&y!==(y=s[2].team_name+"")&&at(I,y),(!h||o&1)&&L!==(L=s[2].member_name+"")&&at(E,L);const K={};o&1&&(K.players=s[2].mate_list),Y.$set(K)},i(s){h||(H(t.$$.fragment,s),H(D.$$.fragment,s),H(Y.$$.fragment,s),h=!0)},o(s){N(t.$$.fragment,s),N(D.$$.fragment,s),N(Y.$$.fragment,s),h=!1},d(s){s&&m(e),et(t),et(D),et(Y)}}}function gt(i){let e,r,t,u=i[2].tournament_name+"",n,k,_,l,c,$,z,D,P,G,O=i[2].team_name+"",S,Q,j,y,I,M,w,L,E,d=i[2].member_name+"",Y,p,h,s,o;return $=new mt({props:{date:i[2].tournament_date}}),P=new ct({props:{t:"\u30C1\u30FC\u30E0"}}),y=new ct({props:{t:"\u7D50\u679C"}}),M=new _t({props:{rank:i[2].team_result}}),h=new it({props:{players:i[2].mate_list}}),{c(){e=g("tr"),r=g("th"),t=g("a"),n=C(u),_=R(),l=g("tr"),c=g("td"),Z($.$$.fragment),z=R(),D=g("td"),Z(P.$$.fragment),G=R(),S=C(O),Q=R(),j=g("td"),Z(y.$$.fragment),I=R(),Z(M.$$.fragment),w=R(),L=g("tr"),E=g("td"),Y=C(d),p=C(", "),Z(h.$$.fragment),s=R(),this.h()},l(f){e=v(f,"TR",{});var T=b(e);r=v(T,"TH",{class:!0,colspan:!0});var K=b(r);t=v(K,"A",{href:!0});var U=b(t);n=F(U,u),U.forEach(m),K.forEach(m),T.forEach(m),_=A(f),l=v(f,"TR",{class:!0});var q=b(l);c=v(q,"TD",{class:!0});var W=b(c);x($.$$.fragment,W),W.forEach(m),z=A(q),D=v(q,"TD",{class:!0});var J=b(D);x(P.$$.fragment,J),G=A(J),S=F(J,O),J.forEach(m),Q=A(q),j=v(q,"TD",{class:!0});var X=b(j);x(y.$$.fragment,X),I=A(X),x(M.$$.fragment,X),X.forEach(m),q.forEach(m),w=A(f),L=v(f,"TR",{});var ot=b(L);E=v(ot,"TD",{class:!0,colspan:!0});var lt=b(E);Y=F(lt,d),p=F(lt,", "),x(h.$$.fragment,lt),lt.forEach(m),s=A(ot),ot.forEach(m),this.h()},h(){B(t,"href",k="#"+i[2].tournament_key),B(r,"class","tal"),B(r,"colspan","3"),B(c,"class","tal"),B(D,"class","tal"),B(j,"class","nw"),B(l,"class","tal"),B(E,"class","tal"),B(E,"colspan","3")},m(f,T){V(f,e,T),a(e,r),a(r,t),a(t,n),V(f,_,T),V(f,l,T),a(l,c),tt($,c,null),a(l,z),a(l,D),tt(P,D,null),a(D,G),a(D,S),a(l,Q),a(l,j),tt(y,j,null),a(j,I),tt(M,j,null),V(f,w,T),V(f,L,T),a(L,E),a(E,Y),a(E,p),tt(h,E,null),a(L,s),o=!0},p(f,T){(!o||T&1)&&u!==(u=f[2].tournament_name+"")&&at(n,u),(!o||T&1&&k!==(k="#"+f[2].tournament_key))&&B(t,"href",k);const K={};T&1&&(K.date=f[2].tournament_date),$.$set(K),(!o||T&1)&&O!==(O=f[2].team_name+"")&&at(S,O);const U={};T&1&&(U.rank=f[2].team_result),M.$set(U),(!o||T&1)&&d!==(d=f[2].member_name+"")&&at(Y,d);const q={};T&1&&(q.players=f[2].mate_list),h.$set(q)},i(f){o||(H($.$$.fragment,f),H(P.$$.fragment,f),H(y.$$.fragment,f),H(M.$$.fragment,f),H(h.$$.fragment,f),o=!0)},o(f){N($.$$.fragment,f),N(P.$$.fragment,f),N(y.$$.fragment,f),N(M.$$.fragment,f),N(h.$$.fragment,f),o=!1},d(f){f&&m(e),f&&m(_),f&&m(l),et($),et(P),et(y),et(M),f&&m(w),f&&m(L),et(h)}}}function wt(i){let e,r,t=i[0]&&pt(i);return{c(){t&&t.c(),e=rt()},l(u){t&&t.l(u),e=rt()},m(u,n){t&&t.m(u,n),V(u,e,n),r=!0},p(u,[n]){u[0]?t?(t.p(u,n),n&1&&H(t,1)):(t=pt(u),t.c(),H(t,1),t.m(e.parentNode,e)):t&&(st(),N(t,1,1,()=>{t=null}),nt())},i(u){r||(H(t),r=!0)},o(u){N(t),r=!1},d(u){t&&t.d(u),u&&m(e)}}}function jt(i,e,r){let t,u;return ft(i,Tt,n=>r(0,t=n)),ft(i,Et,n=>r(1,u=n)),[t,u]}class Nt extends vt{constructor(e){super();bt(this,e,jt,wt,kt,{})}}export{Nt as default};
