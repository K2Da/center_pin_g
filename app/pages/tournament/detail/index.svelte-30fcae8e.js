import{C as te,S as pe,i as $e,s as ge,k as W,f as M,n as P,o as J,p as R,d as h,K as X,Q as be,m as V,v as I,w as Y,x as q,M as ve,A as F,e as T,t as B,c as w,a as y,g as U,F as c,h as z,j as A,l as S,b as C,P as le,O as re}from"../../../chunks/vendor-f8dde2ec.js";import{s as ke}from"../../../chunks/global_store-13807a0e.js";import{D as Ee}from"../../../chunks/Date-c916f5f8.js";import De from"../../Header.svelte-6fae65fa.js";import Te from"../../PlaceHolder.svelte-f74872d6.js";import{T as Z}from"../../../chunks/T-04ba0fac.js";import{P as ne}from"../../../chunks/PlayersLine-3495e4b1.js";import{T as ae}from"../../../chunks/TournamentResult-e13e1bea.js";import"../../../chunks/paths-28a87002.js";import"../../../chunks/util-f29b5fc7.js";const se=te(""),x=te(null),oe=te("");function fe(i,t,r){const l=i.slice();return l[5]=t[r],l}function ue(i,t,r){const l=i.slice();return l[5]=t[r],l}function ie(i,t,r){const l=i.slice();return l[10]=t[r],l}function we(i){let t,r;return t=new Te({}),{c(){I(t.$$.fragment)},l(l){Y(t.$$.fragment,l)},m(l,d){q(t,l,d),r=!0},p:ve,i(l){r||(R(t.$$.fragment,l),r=!0)},o(l){P(t.$$.fragment,l),r=!1},d(l){F(t,l)}}}function ye(i){let t,r,l,d=i[0].tournament.name+"",s,_,f,n,a,$,E,D,L,H;t=new De({props:{title:i[0].tournament.name,type:"article",url:"tournament",description:""+(i[0].tournament.name+"\u306E\u6982\u8981")}});let v=i[0].data&&ce(i);const g=[He,je],j=[];function b(e,m){return e[1]?0:1}return E=b(i),D=j[E]=g[E](i),{c(){I(t.$$.fragment),r=A(),l=T("h2"),s=B(d),_=A(),v&&v.c(),f=A(),n=T("h3"),a=B("\u53C2\u52A0\u30C1\u30FC\u30E0"),$=A(),D.c(),L=W()},l(e){Y(t.$$.fragment,e),r=S(e),l=w(e,"H2",{});var m=y(l);s=U(m,d),m.forEach(h),_=S(e),v&&v.l(e),f=S(e),n=w(e,"H3",{});var p=y(n);a=U(p,"\u53C2\u52A0\u30C1\u30FC\u30E0"),p.forEach(h),$=S(e),D.l(e),L=W()},m(e,m){q(t,e,m),M(e,r,m),M(e,l,m),c(l,s),M(e,_,m),v&&v.m(e,m),M(e,f,m),M(e,n,m),c(n,a),M(e,$,m),j[E].m(e,m),M(e,L,m),H=!0},p(e,m){const p={};m&1&&(p.title=e[0].tournament.name),m&1&&(p.description=""+(e[0].tournament.name+"\u306E\u6982\u8981")),t.$set(p),(!H||m&1)&&d!==(d=e[0].tournament.name+"")&&z(s,d),e[0].data?v?(v.p(e,m),m&1&&R(v,1)):(v=ce(e),v.c(),R(v,1),v.m(f.parentNode,f)):v&&(V(),P(v,1,1,()=>{v=null}),J());let u=E;E=b(e),E===u?j[E].p(e,m):(V(),P(j[u],1,1,()=>{j[u]=null}),J(),D=j[E],D?D.p(e,m):(D=j[E]=g[E](e),D.c()),R(D,1),D.m(L.parentNode,L))},i(e){H||(R(t.$$.fragment,e),R(v),R(D),H=!0)},o(e){P(t.$$.fragment,e),P(v),P(D),H=!1},d(e){F(t,e),e&&h(r),e&&h(l),e&&h(_),v&&v.d(e),e&&h(f),e&&h(n),e&&h($),j[E].d(e),e&&h(L)}}}function ce(i){let t,r,l,d,s,_,f,n,a=i[0].data.type+"",$,E,D,L,H,v;s=new Ee({props:{date:i[0].tournament.date}});let g=i[0].data.note&&_e(i),j=i[0].data.urls,b=[];for(let e=0;e<j.length;e+=1)b[e]=me(ie(i,j,e));return{c(){t=T("dl"),r=T("dt"),l=B("\u958B\u50AC\u65E5"),d=T("dd"),I(s.$$.fragment),_=T("dt"),f=B("\u5F62\u5F0F"),n=T("dd"),$=B(a),g&&g.c(),E=T("dt"),D=B("\u95A2\u9023URL"),L=T("dd"),H=T("ul");for(let e=0;e<b.length;e+=1)b[e].c()},l(e){t=w(e,"DL",{});var m=y(t);r=w(m,"DT",{});var p=y(r);l=U(p,"\u958B\u50AC\u65E5"),p.forEach(h),d=w(m,"DD",{});var u=y(d);Y(s.$$.fragment,u),u.forEach(h),_=w(m,"DT",{});var o=y(_);f=U(o,"\u5F62\u5F0F"),o.forEach(h),n=w(m,"DD",{});var k=y(n);$=U(k,a),k.forEach(h),g&&g.l(m),E=w(m,"DT",{});var N=y(E);D=U(N,"\u95A2\u9023URL"),N.forEach(h),L=w(m,"DD",{});var K=y(L);H=w(K,"UL",{});var O=y(H);for(let Q=0;Q<b.length;Q+=1)b[Q].l(O);O.forEach(h),K.forEach(h),m.forEach(h)},m(e,m){M(e,t,m),c(t,r),c(r,l),c(t,d),q(s,d,null),c(t,_),c(_,f),c(t,n),c(n,$),g&&g.m(t,null),c(t,E),c(E,D),c(t,L),c(L,H);for(let p=0;p<b.length;p+=1)b[p].m(H,null);v=!0},p(e,m){const p={};if(m&1&&(p.date=e[0].tournament.date),s.$set(p),(!v||m&1)&&a!==(a=e[0].data.type+"")&&z($,a),e[0].data.note?g?g.p(e,m):(g=_e(e),g.c(),g.m(t,E)):g&&(g.d(1),g=null),m&1){j=e[0].data.urls;let u;for(u=0;u<j.length;u+=1){const o=ie(e,j,u);b[u]?b[u].p(o,m):(b[u]=me(o),b[u].c(),b[u].m(H,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=j.length}},i(e){v||(R(s.$$.fragment,e),v=!0)},o(e){P(s.$$.fragment,e),v=!1},d(e){e&&h(t),F(s),g&&g.d(),le(b,e)}}}function _e(i){let t,r,l,d=i[0].data.note+"",s;return{c(){t=T("dt"),r=B("\u5099\u8003"),l=T("dd"),s=B(d)},l(_){t=w(_,"DT",{});var f=y(t);r=U(f,"\u5099\u8003"),f.forEach(h),l=w(_,"DD",{});var n=y(l);s=U(n,d),n.forEach(h)},m(_,f){M(_,t,f),c(t,r),M(_,l,f),c(l,s)},p(_,f){f&1&&d!==(d=_[0].data.note+"")&&z(s,d)},d(_){_&&h(t),_&&h(l)}}}function me(i){let t,r,l,d,s,_=i[10].title+"",f,n;return{c(){t=T("li"),r=T("i"),d=A(),s=T("a"),f=B(_),this.h()},l(a){t=w(a,"LI",{});var $=y(t);r=w($,"I",{class:!0}),y(r).forEach(h),d=S($),s=w($,"A",{href:!0});var E=y(s);f=U(E,_),E.forEach(h),$.forEach(h),this.h()},h(){C(r,"class",l=i[10].icon),C(s,"href",n=i[10].url)},m(a,$){M(a,t,$),c(t,r),c(t,d),c(t,s),c(s,f)},p(a,$){$&1&&l!==(l=a[10].icon)&&C(r,"class",l),$&1&&_!==(_=a[10].title+"")&&z(f,_),$&1&&n!==(n=a[10].url)&&C(s,"href",n)},d(a){a&&h(t)}}}function je(i){let t,r,l,d,s,_,f,n,a,$,E,D,L,H,v,g,j,b=i[0].teams,e=[];for(let p=0;p<b.length;p+=1)e[p]=he(fe(i,b,p));const m=p=>P(e[p],1,1,()=>{e[p]=null});return{c(){t=T("table"),r=T("thead"),l=T("tr"),d=T("th"),s=B("\u7D50\u679C"),_=A(),f=T("th"),n=B("\u30C1\u30FC\u30E0\u540D"),a=A(),$=T("th"),E=B("\u6226\u7E3E"),D=A(),L=T("th"),H=B("\u30E1\u30F3\u30D0\u30FC"),v=A(),g=T("tbody");for(let p=0;p<e.length;p+=1)e[p].c();this.h()},l(p){t=w(p,"TABLE",{});var u=y(t);r=w(u,"THEAD",{});var o=y(r);l=w(o,"TR",{});var k=y(l);d=w(k,"TH",{});var N=y(d);s=U(N,"\u7D50\u679C"),N.forEach(h),_=S(k),f=w(k,"TH",{class:!0});var K=y(f);n=U(K,"\u30C1\u30FC\u30E0\u540D"),K.forEach(h),a=S(k),$=w(k,"TH",{});var O=y($);E=U(O,"\u6226\u7E3E"),O.forEach(h),D=S(k),L=w(k,"TH",{class:!0});var Q=y(L);H=U(Q,"\u30E1\u30F3\u30D0\u30FC"),Q.forEach(h),k.forEach(h),o.forEach(h),v=S(u),g=w(u,"TBODY",{});var G=y(g);for(let ee=0;ee<e.length;ee+=1)e[ee].l(G);G.forEach(h),u.forEach(h),this.h()},h(){C(f,"class","tal"),C(L,"class","tal")},m(p,u){M(p,t,u),c(t,r),c(r,l),c(l,d),c(d,s),c(l,_),c(l,f),c(f,n),c(l,a),c(l,$),c($,E),c(l,D),c(l,L),c(L,H),c(t,v),c(t,g);for(let o=0;o<e.length;o+=1)e[o].m(g,null);j=!0},p(p,u){if(u&1){b=p[0].teams;let o;for(o=0;o<b.length;o+=1){const k=fe(p,b,o);e[o]?(e[o].p(k,u),R(e[o],1)):(e[o]=he(k),e[o].c(),R(e[o],1),e[o].m(g,null))}for(V(),o=b.length;o<e.length;o+=1)m(o);J()}},i(p){if(!j){for(let u=0;u<b.length;u+=1)R(e[u]);j=!0}},o(p){e=e.filter(Boolean);for(let u=0;u<e.length;u+=1)P(e[u]);j=!1},d(p){p&&h(t),le(e,p)}}}function He(i){let t,r,l,d=i[0].teams,s=[];for(let f=0;f<d.length;f+=1)s[f]=de(ue(i,d,f));const _=f=>P(s[f],1,1,()=>{s[f]=null});return{c(){t=T("table"),r=T("tbody");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){t=w(f,"TABLE",{});var n=y(t);r=w(n,"TBODY",{class:!0});var a=y(r);for(let $=0;$<s.length;$+=1)s[$].l(a);a.forEach(h),n.forEach(h),this.h()},h(){C(r,"class","double")},m(f,n){M(f,t,n),c(t,r);for(let a=0;a<s.length;a+=1)s[a].m(r,null);l=!0},p(f,n){if(n&1){d=f[0].teams;let a;for(a=0;a<d.length;a+=1){const $=ue(f,d,a);s[a]?(s[a].p($,n),R(s[a],1)):(s[a]=de($),s[a].c(),R(s[a],1),s[a].m(r,null))}for(V(),a=d.length;a<s.length;a+=1)_(a);J()}},i(f){if(!l){for(let n=0;n<d.length;n+=1)R(s[n]);l=!0}},o(f){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)P(s[n]);l=!1},d(f){f&&h(t),le(s,f)}}}function he(i){let t,r,l,d,s,_=i[5].team_name+"",f,n,a,$=i[5].win+"",E,D,L,H=i[5].lose+"",v,g,j,b,e,m,p;return l=new ae({props:{rank:i[5].team_rank}}),D=new Z({props:{t:" \u52DD "}}),g=new Z({props:{t:" \u6557"}}),e=new ne({props:{players:i[5].members}}),{c(){t=T("tr"),r=T("td"),I(l.$$.fragment),d=A(),s=T("td"),f=B(_),n=A(),a=T("td"),E=B($),I(D.$$.fragment),L=A(),v=B(H),I(g.$$.fragment),j=A(),b=T("td"),I(e.$$.fragment),m=A(),this.h()},l(u){t=w(u,"TR",{});var o=y(t);r=w(o,"TD",{});var k=y(r);Y(l.$$.fragment,k),k.forEach(h),d=S(o),s=w(o,"TD",{class:!0});var N=y(s);f=U(N,_),N.forEach(h),n=S(o),a=w(o,"TD",{style:!0});var K=y(a);E=U(K,$),Y(D.$$.fragment,K),L=S(K),v=U(K,H),Y(g.$$.fragment,K),K.forEach(h),j=S(o),b=w(o,"TD",{class:!0});var O=y(b);Y(e.$$.fragment,O),O.forEach(h),m=S(o),o.forEach(h),this.h()},h(){C(s,"class","tal"),re(a,"text-align","center"),C(b,"class","tal")},m(u,o){M(u,t,o),c(t,r),q(l,r,null),c(t,d),c(t,s),c(s,f),c(t,n),c(t,a),c(a,E),q(D,a,null),c(a,L),c(a,v),q(g,a,null),c(t,j),c(t,b),q(e,b,null),c(t,m),p=!0},p(u,o){const k={};o&1&&(k.rank=u[5].team_rank),l.$set(k),(!p||o&1)&&_!==(_=u[5].team_name+"")&&z(f,_),(!p||o&1)&&$!==($=u[5].win+"")&&z(E,$),(!p||o&1)&&H!==(H=u[5].lose+"")&&z(v,H);const N={};o&1&&(N.players=u[5].members),e.$set(N)},i(u){p||(R(l.$$.fragment,u),R(D.$$.fragment,u),R(g.$$.fragment,u),R(e.$$.fragment,u),p=!0)},o(u){P(l.$$.fragment,u),P(D.$$.fragment,u),P(g.$$.fragment,u),P(e.$$.fragment,u),p=!1},d(u){u&&h(t),F(l),F(D),F(g),F(e)}}}function de(i){let t,r,l,d,s,_=i[5].team_name+"",f,n,a,$=i[5].win+"",E,D,L,H=i[5].lose+"",v,g,j,b,e,m,p,u;return l=new ae({props:{rank:i[5].team_rank}}),D=new Z({props:{t:"\u52DD"}}),g=new Z({props:{t:"\u6557"}}),m=new ne({props:{players:i[5].members}}),{c(){t=T("tr"),r=T("td"),I(l.$$.fragment),d=A(),s=T("td"),f=B(_),n=A(),a=T("td"),E=B($),I(D.$$.fragment),L=A(),v=B(H),I(g.$$.fragment),j=A(),b=T("tr"),e=T("td"),I(m.$$.fragment),p=A(),this.h()},l(o){t=w(o,"TR",{});var k=y(t);r=w(k,"TD",{class:!0});var N=y(r);Y(l.$$.fragment,N),N.forEach(h),d=S(k),s=w(k,"TD",{class:!0});var K=y(s);f=U(K,_),K.forEach(h),n=S(k),a=w(k,"TD",{class:!0,style:!0});var O=y(a);E=U(O,$),Y(D.$$.fragment,O),L=S(O),v=U(O,H),Y(g.$$.fragment,O),O.forEach(h),k.forEach(h),j=S(o),b=w(o,"TR",{});var Q=y(b);e=w(Q,"TD",{colspan:!0,class:!0,style:!0});var G=y(e);Y(m.$$.fragment,G),G.forEach(h),p=S(Q),Q.forEach(h),this.h()},h(){C(r,"class","nw"),C(s,"class","tal"),C(a,"class","nw"),re(a,"text-align","center"),C(e,"colspan","3"),C(e,"class","tal"),re(e,"padding-left","2em")},m(o,k){M(o,t,k),c(t,r),q(l,r,null),c(t,d),c(t,s),c(s,f),c(t,n),c(t,a),c(a,E),q(D,a,null),c(a,L),c(a,v),q(g,a,null),M(o,j,k),M(o,b,k),c(b,e),q(m,e,null),c(b,p),u=!0},p(o,k){const N={};k&1&&(N.rank=o[5].team_rank),l.$set(N),(!u||k&1)&&_!==(_=o[5].team_name+"")&&z(f,_),(!u||k&1)&&$!==($=o[5].win+"")&&z(E,$),(!u||k&1)&&H!==(H=o[5].lose+"")&&z(v,H);const K={};k&1&&(K.players=o[5].members),m.$set(K)},i(o){u||(R(l.$$.fragment,o),R(D.$$.fragment,o),R(g.$$.fragment,o),R(m.$$.fragment,o),u=!0)},o(o){P(l.$$.fragment,o),P(D.$$.fragment,o),P(g.$$.fragment,o),P(m.$$.fragment,o),u=!1},d(o){o&&h(t),F(l),F(D),F(g),o&&h(j),o&&h(b),F(m)}}}function Le(i){let t,r,l,d;const s=[ye,we],_=[];function f(n,a){return n[0]?0:1}return t=f(i),r=_[t]=s[t](i),{c(){r.c(),l=W()},l(n){r.l(n),l=W()},m(n,a){_[t].m(n,a),M(n,l,a),d=!0},p(n,[a]){let $=t;t=f(n),t===$?_[t].p(n,a):(V(),P(_[$],1,1,()=>{_[$]=null}),J(),r=_[t],r?r.p(n,a):(r=_[t]=s[t](n),r.c()),R(r,1),r.m(l.parentNode,l))},i(n){d||(R(r),d=!0)},o(n){P(r),d=!1},d(n){_[t].d(n),n&&h(l)}}}async function Ie(i){return oe.set(i.url.toString()),{status:200}}function Re(i,t,r){let l,d,s,_;X(i,oe,n=>r(2,l=n)),X(i,se,n=>r(3,d=n)),X(i,x,n=>r(0,s=n)),X(i,ke,n=>r(1,_=n)),be(()=>x.set(null));async function f(){x.set(null),se.set(new URLSearchParams(window.location.search).get("t")),fetch(`/center_pin_g/tournament/${d}.json`).then(n=>n.json()).then(n=>{x.set(n)}).catch(()=>[])}return i.$$.update=()=>{i.$$.dirty&4&&f()},[s,_,l]}class Ye extends pe{constructor(t){super();$e(this,t,Re,Le,ge,{})}}export{Ye as default,Ie as load};
