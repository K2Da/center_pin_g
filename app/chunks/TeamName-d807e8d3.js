import{S as be,i as Ee,s as we,l as de,g as u,O as ke,d as l,t as o,k as c,e as k,h as _,m as h,c as b,a as E,b as le,H as p,j as P,w as A,x as H,y as T,q as M,o as q,B as D,M as He}from"./vendor-5fd0e214.js";import{b as je}from"./paths-4b3c6e7e.js";import{c as Ae,d as Te}from"./global-c1951385.js";import{T as fe,D as Me,a as qe}from"./PopUpA-050d81de.js";function De(f){let a,s,r,e;return{c(){a=o(f[0]),s=c(),r=k("span"),e=o("\u4F4D"),this.h()},l(t){a=_(t,f[0]),s=h(t),r=b(t,"SPAN",{class:!0});var m=E(r);e=_(m,"\u4F4D"),m.forEach(l),this.h()},h(){le(r,"class","muted")},m(t,m){u(t,a,m),u(t,s,m),u(t,r,m),p(r,e)},p(t,m){m&1&&P(a,t[0])},d(t){t&&l(a),t&&l(s),t&&l(r)}}}function Ue(f){let a,s,r;return{c(){a=o("\u{1F949} "),s=k("span"),r=o(f[0]),this.h()},l(e){a=_(e,"\u{1F949} "),s=b(e,"SPAN",{class:!0});var t=E(s);r=_(t,f[0]),t.forEach(l),this.h()},h(){le(s,"class","muted")},m(e,t){u(e,a,t),u(e,s,t),p(s,r)},p(e,t){t&1&&P(r,e[0])},d(e){e&&l(a),e&&l(s)}}}function ge(f){let a,s,r;return{c(){a=o("\u{1F948} "),s=k("span"),r=o(f[0]),this.h()},l(e){a=_(e,"\u{1F948} "),s=b(e,"SPAN",{class:!0});var t=E(s);r=_(t,f[0]),t.forEach(l),this.h()},h(){le(s,"class","muted")},m(e,t){u(e,a,t),u(e,s,t),p(s,r)},p(e,t){t&1&&P(r,e[0])},d(e){e&&l(a),e&&l(s)}}}function Be(f){let a,s,r;return{c(){a=o("\u{1F947} "),s=k("span"),r=o(f[0]),this.h()},l(e){a=_(e,"\u{1F947} "),s=b(e,"SPAN",{class:!0});var t=E(s);r=_(t,f[0]),t.forEach(l),this.h()},h(){le(s,"class","muted")},m(e,t){u(e,a,t),u(e,s,t),p(s,r)},p(e,t){t&1&&P(r,e[0])},d(e){e&&l(a),e&&l(s)}}}function Ce(f){let a;return{c(){a=o("-")},l(s){a=_(s,"-")},m(s,r){u(s,a,r)},p:ke,d(s){s&&l(a)}}}function Oe(f){let a;function s(t,m){return t[0]===0?Ce:t[0]===1?Be:t[0]===2?ge:t[0]===3?Ue:De}let r=s(f),e=r(f);return{c(){e.c(),a=de()},l(t){e.l(t),a=de()},m(t,m){e.m(t,m),u(t,a,m)},p(t,[m]){r===(r=s(t))&&e?e.p(t,m):(e.d(1),e=r(t),e&&(e.c(),e.m(a.parentNode,a)))},i:ke,o:ke,d(t){e.d(t),t&&l(a)}}}function Re(f,a,s){let{rank:r}=a;return f.$$set=e=>{"rank"in e&&s(0,r=e.rank)},[r]}class ze extends be{constructor(a){super();Ee(this,a,Re,Oe,we,{rank:0})}}function Fe(f){let a,s=f[0].name+"",r,e,t,m,S=f[0].names.join(", ")+"",W,X,C,me,Y,$,I=f[0].tournament_count+"",Z,ie,U,ue,J=f[0].win+"",y,pe,g,oe,K=f[0].lose+"",x,_e,B,ee,O,$e,te,N,d,ce,L=f[0].latest_tournament_name+"",ne,he,j,ae,R,ve,se,z,Q=f[0].members.join(", ")+"",re,w;return m=new fe({props:{t:"\u5927\u4F1A\u767B\u9332\u540D "}}),U=new fe({props:{t:"\u5927\u4F1A"}}),g=new fe({props:{t:"\u52DD"}}),B=new fe({props:{t:"\u6557"}}),d=new Me({props:{date:f[0].latest_tournament_date,spacing:!1}}),j=new ze({props:{rank:f[0].latest_tournament_rank}}),{c(){a=k("h3"),r=o(s),e=c(),t=k("p"),A(m.$$.fragment),W=o(S),X=c(),C=k("h4"),me=o("\u6226\u7E3E"),Y=c(),$=k("p"),Z=o(I),ie=c(),A(U.$$.fragment),ue=c(),y=o(J),pe=c(),A(g.$$.fragment),oe=c(),x=o(K),_e=c(),A(B.$$.fragment),ee=c(),O=k("h4"),$e=o("\u6700\u65B0\u5927\u4F1A"),te=c(),N=k("p"),A(d.$$.fragment),ce=c(),ne=o(L),he=c(),A(j.$$.fragment),ae=c(),R=k("h4"),ve=o("\u30E1\u30F3\u30D0\u30FC"),se=c(),z=k("p"),re=o(Q)},l(n){a=b(n,"H3",{});var i=E(a);r=_(i,s),i.forEach(l),e=h(n),t=b(n,"P",{});var F=E(t);H(m.$$.fragment,F),W=_(F,S),F.forEach(l),X=h(n),C=b(n,"H4",{});var V=E(C);me=_(V,"\u6226\u7E3E"),V.forEach(l),Y=h(n),$=b(n,"P",{});var v=E($);Z=_(v,I),ie=h(v),H(U.$$.fragment,v),ue=h(v),y=_(v,J),pe=h(v),H(g.$$.fragment,v),oe=h(v),x=_(v,K),_e=h(v),H(B.$$.fragment,v),v.forEach(l),ee=h(n),O=b(n,"H4",{});var Pe=E(O);$e=_(Pe,"\u6700\u65B0\u5927\u4F1A"),Pe.forEach(l),te=h(n),N=b(n,"P",{});var G=E(N);H(d.$$.fragment,G),ce=h(G),ne=_(G,L),he=h(G),H(j.$$.fragment,G),G.forEach(l),ae=h(n),R=b(n,"H4",{});var Ne=E(R);ve=_(Ne,"\u30E1\u30F3\u30D0\u30FC"),Ne.forEach(l),se=h(n),z=b(n,"P",{});var Se=E(z);re=_(Se,Q),Se.forEach(l)},m(n,i){u(n,a,i),p(a,r),u(n,e,i),u(n,t,i),T(m,t,null),p(t,W),u(n,X,i),u(n,C,i),p(C,me),u(n,Y,i),u(n,$,i),p($,Z),p($,ie),T(U,$,null),p($,ue),p($,y),p($,pe),T(g,$,null),p($,oe),p($,x),p($,_e),T(B,$,null),u(n,ee,i),u(n,O,i),p(O,$e),u(n,te,i),u(n,N,i),T(d,N,null),p(N,ce),p(N,ne),p(N,he),T(j,N,null),u(n,ae,i),u(n,R,i),p(R,ve),u(n,se,i),u(n,z,i),p(z,re),w=!0},p(n,[i]){(!w||i&1)&&s!==(s=n[0].name+"")&&P(r,s),(!w||i&1)&&S!==(S=n[0].names.join(", ")+"")&&P(W,S),(!w||i&1)&&I!==(I=n[0].tournament_count+"")&&P(Z,I),(!w||i&1)&&J!==(J=n[0].win+"")&&P(y,J),(!w||i&1)&&K!==(K=n[0].lose+"")&&P(x,K);const F={};i&1&&(F.date=n[0].latest_tournament_date),d.$set(F),(!w||i&1)&&L!==(L=n[0].latest_tournament_name+"")&&P(ne,L);const V={};i&1&&(V.rank=n[0].latest_tournament_rank),j.$set(V),(!w||i&1)&&Q!==(Q=n[0].members.join(", ")+"")&&P(re,Q)},i(n){w||(M(m.$$.fragment,n),M(U.$$.fragment,n),M(g.$$.fragment,n),M(B.$$.fragment,n),M(d.$$.fragment,n),M(j.$$.fragment,n),w=!0)},o(n){q(m.$$.fragment,n),q(U.$$.fragment,n),q(g.$$.fragment,n),q(B.$$.fragment,n),q(d.$$.fragment,n),q(j.$$.fragment,n),w=!1},d(n){n&&l(a),n&&l(e),n&&l(t),D(m),n&&l(X),n&&l(C),n&&l(Y),n&&l($),D(U),D(g),D(B),n&&l(ee),n&&l(O),n&&l(te),n&&l(N),D(d),D(j),n&&l(ae),n&&l(R),n&&l(se),n&&l(z)}}}function Ge(f,a,s){let{team:r}=a;return f.$$set=e=>{"team"in e&&s(0,r=e.team)},[r]}class Ie extends be{constructor(a){super();Ee(this,a,Ge,Fe,we,{team:0})}}function Je(f){let a,s;return a=new Ie({props:{team:f[1].dic[f[0]]}}),{c(){A(a.$$.fragment)},l(r){H(a.$$.fragment,r)},m(r,e){T(a,r,e),s=!0},p(r,e){const t={};e&3&&(t.team=r[1].dic[r[0]]),a.$set(t)},i(r){s||(M(a.$$.fragment,r),s=!0)},o(r){q(a.$$.fragment,r),s=!1},d(r){D(a,r)}}}function Ke(f){var r;let a,s;return a=new qe({props:{href:je+"/team/detail/?m="+Ae(f[0]),text:f[0],condition:!!((r=f[1])==null?void 0:r.dic[f[0]]),$$slots:{default:[Je]},$$scope:{ctx:f}}}),{c(){A(a.$$.fragment)},l(e){H(a.$$.fragment,e)},m(e,t){T(a,e,t),s=!0},p(e,[t]){var S;const m={};t&1&&(m.href=je+"/team/detail/?m="+Ae(e[0])),t&1&&(m.text=e[0]),t&3&&(m.condition=!!((S=e[1])==null?void 0:S.dic[e[0]])),t&7&&(m.$$scope={dirty:t,ctx:e}),a.$set(m)},i(e){s||(M(a.$$.fragment,e),s=!0)},o(e){q(a.$$.fragment,e),s=!1},d(e){D(a,e)}}}function Le(f,a,s){let r;He(f,Te,t=>s(1,r=t));let{name:e}=a;return f.$$set=t=>{"name"in t&&s(0,e=t.name)},[e,r]}class Ye extends be{constructor(a){super();Ee(this,a,Le,Ke,we,{name:0})}}export{ze as T,Ye as a};
