import{S as gt,i as vt,s as kt,e as v,t as z,k as w,c as k,a as T,h as F,d as u,m as D,b as q,g as Y,H as r,w as I,x as J,f as ot,y as K,o as N,p as ft,q as B,B as U,M as ut,n as it,O as Tt,l as rt,Q as bt,j as x}from"../../chunks/vendor-20059ba1.js";import{s as Et,t as yt}from"../../chunks/global-c05843a2.js";import{H as wt}from"../../chunks/Header-58e9438f.js";import{P as Dt,D as $t,T as st}from"../../chunks/PopUpA-1a7edee8.js";import{T as dt,a as pt}from"../../chunks/TournamentName-1813512d.js";import"../../chunks/paths-396f020f.js";import"../../chunks/TeamName-1d655c1c.js";function mt(_,t,n){const l=_.slice();return l[2]=t[n],l}function _t(_){let t,n,l,s,m,e,f,a,h,H,b,E,L,S,p,R,y,P,o;return{c(){t=v("tr"),n=v("th"),l=z("\u958B\u50AC\u65E5"),s=w(),m=v("th"),e=z("\u5927\u4F1A\u540D"),f=w(),a=v("th"),h=z("\u53C2\u52A0\u30C1\u30FC\u30E0"),H=w(),b=v("th"),E=z("\u53C2\u52A0\u4EBA\u6570"),L=w(),S=v("th"),p=z("\u8A66\u5408\u6570"),R=w(),y=v("th"),P=w(),o=v("th"),this.h()},l(d){t=k(d,"TR",{});var c=T(t);n=k(c,"TH",{});var j=T(n);l=F(j,"\u958B\u50AC\u65E5"),j.forEach(u),s=D(c),m=k(c,"TH",{class:!0});var C=T(m);e=F(C,"\u5927\u4F1A\u540D"),C.forEach(u),f=D(c),a=k(c,"TH",{class:!0});var V=T(a);h=F(V,"\u53C2\u52A0\u30C1\u30FC\u30E0"),V.forEach(u),H=D(c),b=k(c,"TH",{class:!0});var A=T(b);E=F(A,"\u53C2\u52A0\u4EBA\u6570"),A.forEach(u),L=D(c),S=k(c,"TH",{class:!0});var g=T(S);p=F(g,"\u8A66\u5408\u6570"),g.forEach(u),R=D(c),y=k(c,"TH",{class:!0});var $=T(y);$.forEach(u),P=D(c),o=k(c,"TH",{}),T(o).forEach(u),c.forEach(u),this.h()},h(){q(m,"class","tal"),q(a,"class","tar"),q(b,"class","tar"),q(S,"class","tar"),q(y,"class","tar")},m(d,c){Y(d,t,c),r(t,n),r(n,l),r(t,s),r(t,m),r(m,e),r(t,f),r(t,a),r(a,h),r(t,H),r(t,b),r(b,E),r(t,L),r(t,S),r(S,p),r(t,R),r(t,y),r(t,P),r(t,o)},d(d){d&&u(t)}}}function Ht(_){let t,n;return t=new Dt({}),{c(){I(t.$$.fragment)},l(l){J(t.$$.fragment,l)},m(l,s){K(t,l,s),n=!0},p:Tt,i(l){n||(B(t.$$.fragment,l),n=!0)},o(l){N(t.$$.fragment,l),n=!1},d(l){U(t,l)}}}function Lt(_){let t,n,l=_[1].list,s=[];for(let e=0;e<l.length;e+=1)s[e]=ht(mt(_,l,e));const m=e=>N(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=rt()},l(e){for(let f=0;f<s.length;f+=1)s[f].l(e);t=rt()},m(e,f){for(let a=0;a<s.length;a+=1)s[a].m(e,f);Y(e,t,f),n=!0},p(e,f){if(f&3){l=e[1].list;let a;for(a=0;a<l.length;a+=1){const h=mt(e,l,a);s[a]?(s[a].p(h,f),B(s[a],1)):(s[a]=ht(h),s[a].c(),B(s[a],1),s[a].m(t.parentNode,t))}for(it(),a=l.length;a<s.length;a+=1)m(a);ft()}},i(e){if(!n){for(let f=0;f<l.length;f+=1)B(s[f]);n=!0}},o(e){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)N(s[f]);n=!1},d(e){bt(s,e),e&&u(t)}}}function St(_){let t,n,l,s,m,e,f,a,h=_[2].team_count.toLocaleString()+"",H,b,E,L=_[2].player_count.toLocaleString()+"",S,p,R,y=_[2].match_count.toLocaleString()+"",P,o,d,c,j,C,V,A;return l=new $t({props:{date:_[2].date}}),e=new dt({props:{name:_[2].name,key:_[2].key,official:_[2].info.official}}),c=new pt({props:{teams:_[1].winners[_[2].key]}}),{c(){t=v("tr"),n=v("td"),I(l.$$.fragment),s=w(),m=v("td"),I(e.$$.fragment),f=w(),a=v("td"),H=z(h),b=w(),E=v("td"),S=z(L),p=w(),R=v("td"),P=z(y),o=w(),d=v("td"),I(c.$$.fragment),j=w(),C=v("td"),V=w(),this.h()},l(g){t=k(g,"TR",{});var $=T(t);n=k($,"TD",{});var Q=T(n);J(l.$$.fragment,Q),Q.forEach(u),s=D($),m=k($,"TD",{class:!0});var O=T(m);J(e.$$.fragment,O),O.forEach(u),f=D($),a=k($,"TD",{class:!0});var X=T(a);H=F(X,h),X.forEach(u),b=D($),E=k($,"TD",{class:!0});var W=T(E);S=F(W,L),W.forEach(u),p=D($),R=k($,"TD",{class:!0});var i=T(R);P=F(i,y),i.forEach(u),o=D($),d=k($,"TD",{class:!0});var M=T(d);J(c.$$.fragment,M),M.forEach(u),j=D($),C=k($,"TD",{}),T(C).forEach(u),V=D($),$.forEach(u),this.h()},h(){q(m,"class","tal"),q(a,"class","tar"),q(E,"class","tar"),q(R,"class","tar"),q(d,"class","tal")},m(g,$){Y(g,t,$),r(t,n),K(l,n,null),r(t,s),r(t,m),K(e,m,null),r(t,f),r(t,a),r(a,H),r(t,b),r(t,E),r(E,S),r(t,p),r(t,R),r(R,P),r(t,o),r(t,d),K(c,d,null),r(t,j),r(t,C),r(t,V),A=!0},p(g,$){const Q={};$&2&&(Q.date=g[2].date),l.$set(Q);const O={};$&2&&(O.name=g[2].name),$&2&&(O.key=g[2].key),$&2&&(O.official=g[2].info.official),e.$set(O),(!A||$&2)&&h!==(h=g[2].team_count.toLocaleString()+"")&&x(H,h),(!A||$&2)&&L!==(L=g[2].player_count.toLocaleString()+"")&&x(S,L),(!A||$&2)&&y!==(y=g[2].match_count.toLocaleString()+"")&&x(P,y);const X={};$&2&&(X.teams=g[1].winners[g[2].key]),c.$set(X)},i(g){A||(B(l.$$.fragment,g),B(e.$$.fragment,g),B(c.$$.fragment,g),A=!0)},o(g){N(l.$$.fragment,g),N(e.$$.fragment,g),N(c.$$.fragment,g),A=!1},d(g){g&&u(t),U(l),U(e),U(c)}}}function Mt(_){let t,n,l,s,m,e,f,a,h,H=_[2].team_count.toLocaleString()+"",b,E,L,S,p,R=_[2].player_count.toLocaleString()+"",y,P,o,d,c,j=_[2].match_count.toLocaleString()+"",C,V,A,g,$,Q,O,X,W;return l=new dt({props:{name:_[2].name,key:_[2].key,official:_[2].info.official}}),f=new $t({props:{date:_[2].date}}),L=new st({props:{t:"\u30C1\u30FC\u30E0"}}),o=new st({props:{t:"\u4EBA"}}),A=new st({props:{t:"\u8A66\u5408"}}),O=new pt({props:{teams:_[1].winners[_[2].key]}}),{c(){t=v("tr"),n=v("th"),I(l.$$.fragment),s=w(),m=v("tr"),e=v("td"),I(f.$$.fragment),a=w(),h=v("td"),b=z(H),E=w(),I(L.$$.fragment),S=w(),p=v("td"),y=z(R),P=w(),I(o.$$.fragment),d=w(),c=v("td"),C=z(j),V=w(),I(A.$$.fragment),g=w(),$=v("tr"),Q=v("td"),I(O.$$.fragment),X=w(),this.h()},l(i){t=k(i,"TR",{});var M=T(t);n=k(M,"TH",{class:!0,colspan:!0});var Z=T(n);J(l.$$.fragment,Z),Z.forEach(u),M.forEach(u),s=D(i),m=k(i,"TR",{});var G=T(m);e=k(G,"TD",{class:!0,style:!0});var tt=T(e);J(f.$$.fragment,tt),tt.forEach(u),a=D(G),h=k(G,"TD",{});var et=T(h);b=F(et,H),E=D(et),J(L.$$.fragment,et),et.forEach(u),S=D(G),p=k(G,"TD",{});var lt=T(p);y=F(lt,R),P=D(lt),J(o.$$.fragment,lt),lt.forEach(u),d=D(G),c=k(G,"TD",{});var at=T(c);C=F(at,j),V=D(at),J(A.$$.fragment,at),at.forEach(u),G.forEach(u),g=D(i),$=k(i,"TR",{});var nt=T($);Q=k(nt,"TD",{class:!0,style:!0,colspan:!0});var ct=T(Q);J(O.$$.fragment,ct),ct.forEach(u),X=D(nt),nt.forEach(u),this.h()},h(){q(n,"class","tal"),q(n,"colspan","4"),q(e,"class","tal"),ot(e,"padding-left","2em"),q(Q,"class","tal"),ot(Q,"padding-left","2em"),q(Q,"colspan","4")},m(i,M){Y(i,t,M),r(t,n),K(l,n,null),Y(i,s,M),Y(i,m,M),r(m,e),K(f,e,null),r(m,a),r(m,h),r(h,b),r(h,E),K(L,h,null),r(m,S),r(m,p),r(p,y),r(p,P),K(o,p,null),r(m,d),r(m,c),r(c,C),r(c,V),K(A,c,null),Y(i,g,M),Y(i,$,M),r($,Q),K(O,Q,null),r($,X),W=!0},p(i,M){const Z={};M&2&&(Z.name=i[2].name),M&2&&(Z.key=i[2].key),M&2&&(Z.official=i[2].info.official),l.$set(Z);const G={};M&2&&(G.date=i[2].date),f.$set(G),(!W||M&2)&&H!==(H=i[2].team_count.toLocaleString()+"")&&x(b,H),(!W||M&2)&&R!==(R=i[2].player_count.toLocaleString()+"")&&x(y,R),(!W||M&2)&&j!==(j=i[2].match_count.toLocaleString()+"")&&x(C,j);const tt={};M&2&&(tt.teams=i[1].winners[i[2].key]),O.$set(tt)},i(i){W||(B(l.$$.fragment,i),B(f.$$.fragment,i),B(L.$$.fragment,i),B(o.$$.fragment,i),B(A.$$.fragment,i),B(O.$$.fragment,i),W=!0)},o(i){N(l.$$.fragment,i),N(f.$$.fragment,i),N(L.$$.fragment,i),N(o.$$.fragment,i),N(A.$$.fragment,i),N(O.$$.fragment,i),W=!1},d(i){i&&u(t),U(l),i&&u(s),i&&u(m),U(f),U(L),U(o),U(A),i&&u(g),i&&u($),U(O)}}}function ht(_){let t,n,l,s;const m=[Mt,St],e=[];function f(a,h){return a[0]?0:1}return t=f(_),n=e[t]=m[t](_),{c(){n.c(),l=rt()},l(a){n.l(a),l=rt()},m(a,h){e[t].m(a,h),Y(a,l,h),s=!0},p(a,h){let H=t;t=f(a),t===H?e[t].p(a,h):(it(),N(e[H],1,1,()=>{e[H]=null}),ft(),n=e[t],n?n.p(a,h):(n=e[t]=m[t](a),n.c()),B(n,1),n.m(l.parentNode,l))},i(a){s||(B(n),s=!0)},o(a){N(n),s=!1},d(a){e[t].d(a),a&&u(l)}}}function Rt(_){let t,n,l,s,m,e,f,a,h,H,b,E,L,S;t=new wt({props:{title:"\u5927\u4F1A\u4E00\u89A7",type:"article",url:"tournament",description:"\u30DD\u30B1\u30E2\u30F3\u30E6\u30CA\u30A4\u30C8\u306E\u5927\u4F1A\u306E\u4E00\u89A7"}});let p=!_[0]&&_t();const R=[Lt,Ht],y=[];function P(o,d){return d&2&&(H=null),H==null&&(H=!!Array.isArray(o[1].list)),H?0:1}return b=P(_,-1),E=y[b]=R[b](_),{c(){I(t.$$.fragment),n=w(),l=v("h2"),s=z("\u5927\u4F1A"),m=w(),e=v("table"),f=v("thead"),p&&p.c(),a=w(),h=v("tbody"),E.c(),this.h()},l(o){J(t.$$.fragment,o),n=D(o),l=k(o,"H2",{});var d=T(l);s=F(d,"\u5927\u4F1A"),d.forEach(u),m=D(o),e=k(o,"TABLE",{style:!0});var c=T(e);f=k(c,"THEAD",{});var j=T(f);p&&p.l(j),j.forEach(u),a=D(c),h=k(c,"TBODY",{class:!0});var C=T(h);E.l(C),C.forEach(u),c.forEach(u),this.h()},h(){q(h,"class",L=_[0]?"triple":""),ot(e,"table-layout","auto")},m(o,d){K(t,o,d),Y(o,n,d),Y(o,l,d),r(l,s),Y(o,m,d),Y(o,e,d),r(e,f),p&&p.m(f,null),r(e,a),r(e,h),y[b].m(h,null),S=!0},p(o,[d]){o[0]?p&&(p.d(1),p=null):p||(p=_t(),p.c(),p.m(f,null));let c=b;b=P(o,d),b===c?y[b].p(o,d):(it(),N(y[c],1,1,()=>{y[c]=null}),ft(),E=y[b],E?E.p(o,d):(E=y[b]=R[b](o),E.c()),B(E,1),E.m(h,null)),(!S||d&1&&L!==(L=o[0]?"triple":""))&&q(h,"class",L)},i(o){S||(B(t.$$.fragment,o),B(E),S=!0)},o(o){N(t.$$.fragment,o),N(E),S=!1},d(o){U(t,o),o&&u(n),o&&u(l),o&&u(m),o&&u(e),p&&p.d(),y[b].d()}}}function At(_,t,n){let l,s;return ut(_,Et,m=>n(0,l=m)),ut(_,yt,m=>n(1,s=m)),[l,s]}class Qt extends gt{constructor(t){super();vt(this,t,At,Rt,kt,{})}}export{Qt as default};