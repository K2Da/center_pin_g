import{D as ce,S as pe,i as ge,s as be,l as Z,g as M,o as A,p as V,q as L,d,M as te,U as ve,n as W,w as I,x as K,y as Y,O as ke,B as C,e as D,t as O,k as U,c as T,a as w,h as S,m as j,H as _,f as x,j as F,b as q,Q as le}from"../../../chunks/vendor-96e95496.js";import{a as Ee}from"../../../chunks/navigation-c0b2019f.js";import{g as De,T as he,a as de}from"../../../chunks/TeamName-59f9ad9d.js";import{s as Te}from"../../../chunks/global-b41d7bad.js";import{P as we,D as ye,T as ee}from"../../../chunks/Date-169c2039.js";import{H as He}from"../../../chunks/Header-3ccdea0f.js";import{P as $e}from"../../../chunks/PlayersLine-4f96f819.js";import"../../../chunks/singletons-a6a7384f.js";import"../../../chunks/paths-4b3c6e7e.js";const ae=ce(""),X=ce(null);function ne(c,e,s){const t=c.slice();return t[4]=e[s],t}function re(c,e,s){const t=c.slice();return t[4]=e[s],t}function se(c,e,s){const t=c.slice();return t[9]=e[s],t}function Le(c){let e,s;return e=new we({}),{c(){I(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,m){Y(e,t,m),s=!0},p:ke,i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Be(c){let e,s,t,m=c[0].tournament.name+"",f,u,o,r,i,p,k,y,H,B;e=new He({props:{title:c[0].tournament.name,type:"article",url:"tournament",description:c[0].tournament.name+"\u306E\u6982\u8981"}});let g=c[0].data&&oe(c);const N=[Ne,Re],v=[];function b(l,$){return l[1]?0:1}return k=b(c),y=v[k]=N[k](c),{c(){I(e.$$.fragment),s=U(),t=D("h2"),f=O(m),u=U(),g&&g.c(),o=U(),r=D("h3"),i=O("\u53C2\u52A0\u30C1\u30FC\u30E0"),p=U(),y.c(),H=Z()},l(l){K(e.$$.fragment,l),s=j(l),t=T(l,"H2",{});var $=w(t);f=S($,m),$.forEach(d),u=j(l),g&&g.l(l),o=j(l),r=T(l,"H3",{});var a=w(r);i=S(a,"\u53C2\u52A0\u30C1\u30FC\u30E0"),a.forEach(d),p=j(l),y.l(l),H=Z()},m(l,$){Y(e,l,$),M(l,s,$),M(l,t,$),_(t,f),M(l,u,$),g&&g.m(l,$),M(l,o,$),M(l,r,$),_(r,i),M(l,p,$),v[k].m(l,$),M(l,H,$),B=!0},p(l,$){const a={};$&1&&(a.title=l[0].tournament.name),$&1&&(a.description=l[0].tournament.name+"\u306E\u6982\u8981"),e.$set(a),(!B||$&1)&&m!==(m=l[0].tournament.name+"")&&F(f,m),l[0].data?g?(g.p(l,$),$&1&&L(g,1)):(g=oe(l),g.c(),L(g,1),g.m(o.parentNode,o)):g&&(W(),A(g,1,1,()=>{g=null}),V());let n=k;k=b(l),k===n?v[k].p(l,$):(W(),A(v[n],1,1,()=>{v[n]=null}),V(),y=v[k],y?y.p(l,$):(y=v[k]=N[k](l),y.c()),L(y,1),y.m(H.parentNode,H))},i(l){B||(L(e.$$.fragment,l),L(g),L(y),B=!0)},o(l){A(e.$$.fragment,l),A(g),A(y),B=!1},d(l){C(e,l),l&&d(s),l&&d(t),l&&d(u),g&&g.d(l),l&&d(o),l&&d(r),l&&d(p),v[k].d(l),l&&d(H)}}}function oe(c){let e,s,t,m,f,u,o,r,i,p=c[0].data.type+"",k,y,H,B,g,N;f=new ye({props:{date:c[0].tournament.date}});let v=c[0].data.official&&fe(),b=c[0].data.note&&ie(c),l=c[0].data.urls,$=[];for(let a=0;a<l.length;a+=1)$[a]=ue(se(c,l,a));return{c(){e=D("dl"),s=D("dt"),t=O("\u958B\u50AC\u65E5"),m=D("dd"),I(f.$$.fragment),u=D("dt"),o=O("\u5F62\u5F0F"),r=D("dd"),v&&v.c(),i=U(),k=O(p),b&&b.c(),y=D("dt"),H=O("\u95A2\u9023URL"),B=D("dd"),g=D("ul");for(let a=0;a<$.length;a+=1)$[a].c()},l(a){e=T(a,"DL",{});var n=w(e);s=T(n,"DT",{});var h=w(s);t=S(h,"\u958B\u50AC\u65E5"),h.forEach(d),m=T(n,"DD",{});var E=w(m);K(f.$$.fragment,E),E.forEach(d),u=T(n,"DT",{});var R=w(u);o=S(R,"\u5F62\u5F0F"),R.forEach(d),r=T(n,"DD",{});var P=w(r);v&&v.l(P),i=j(P),k=S(P,p),P.forEach(d),b&&b.l(n),y=T(n,"DT",{});var Q=w(y);H=S(Q,"\u95A2\u9023URL"),Q.forEach(d),B=T(n,"DD",{});var z=w(B);g=T(z,"UL",{});var J=w(g);for(let G=0;G<$.length;G+=1)$[G].l(J);J.forEach(d),z.forEach(d),n.forEach(d)},m(a,n){M(a,e,n),_(e,s),_(s,t),_(e,m),Y(f,m,null),_(e,u),_(u,o),_(e,r),v&&v.m(r,null),_(r,i),_(r,k),b&&b.m(e,null),_(e,y),_(y,H),_(e,B),_(B,g);for(let h=0;h<$.length;h+=1)$[h].m(g,null);N=!0},p(a,n){const h={};if(n&1&&(h.date=a[0].tournament.date),f.$set(h),a[0].data.official?v||(v=fe(),v.c(),v.m(r,i)):v&&(v.d(1),v=null),(!N||n&1)&&p!==(p=a[0].data.type+"")&&F(k,p),a[0].data.note?b?b.p(a,n):(b=ie(a),b.c(),b.m(e,y)):b&&(b.d(1),b=null),n&1){l=a[0].data.urls;let E;for(E=0;E<l.length;E+=1){const R=se(a,l,E);$[E]?$[E].p(R,n):($[E]=ue(R),$[E].c(),$[E].m(g,null))}for(;E<$.length;E+=1)$[E].d(1);$.length=l.length}},i(a){N||(L(f.$$.fragment,a),N=!0)},o(a){A(f.$$.fragment,a),N=!1},d(a){a&&d(e),C(f),v&&v.d(),b&&b.d(),le($,a)}}}function fe(c){let e,s;return{c(){e=D("span"),s=O("\u516C\u5F0F \u2714"),this.h()},l(t){e=T(t,"SPAN",{style:!0});var m=w(e);s=S(m,"\u516C\u5F0F \u2714"),m.forEach(d),this.h()},h(){x(e,"color","greenyellow")},m(t,m){M(t,e,m),_(e,s)},d(t){t&&d(e)}}}function ie(c){let e,s,t,m=c[0].data.note+"",f;return{c(){e=D("dt"),s=O("\u5099\u8003"),t=D("dd"),f=O(m)},l(u){e=T(u,"DT",{});var o=w(e);s=S(o,"\u5099\u8003"),o.forEach(d),t=T(u,"DD",{});var r=w(t);f=S(r,m),r.forEach(d)},m(u,o){M(u,e,o),_(e,s),M(u,t,o),_(t,f)},p(u,o){o&1&&m!==(m=u[0].data.note+"")&&F(f,m)},d(u){u&&d(e),u&&d(t)}}}function ue(c){let e,s,t,m,f,u=c[9].title+"",o,r;return{c(){e=D("li"),s=D("i"),m=U(),f=D("a"),o=O(u),this.h()},l(i){e=T(i,"LI",{});var p=w(e);s=T(p,"I",{class:!0}),w(s).forEach(d),m=j(p),f=T(p,"A",{href:!0});var k=w(f);o=S(k,u),k.forEach(d),p.forEach(d),this.h()},h(){q(s,"class",t=c[9].icon),q(f,"href",r=c[9].url)},m(i,p){M(i,e,p),_(e,s),_(e,m),_(e,f),_(f,o)},p(i,p){p&1&&t!==(t=i[9].icon)&&q(s,"class",t),p&1&&u!==(u=i[9].title+"")&&F(o,u),p&1&&r!==(r=i[9].url)&&q(f,"href",r)},d(i){i&&d(e)}}}function Re(c){let e,s,t,m,f,u,o,r,i,p,k,y,H,B,g,N,v,b=c[0].teams,l=[];for(let a=0;a<b.length;a+=1)l[a]=me(ne(c,b,a));const $=a=>A(l[a],1,1,()=>{l[a]=null});return{c(){e=D("table"),s=D("thead"),t=D("tr"),m=D("th"),f=O("\u7D50\u679C"),u=U(),o=D("th"),r=O("\u30C1\u30FC\u30E0\u540D"),i=U(),p=D("th"),k=O("\u6226\u7E3E"),y=U(),H=D("th"),B=O("\u30E1\u30F3\u30D0\u30FC"),g=U(),N=D("tbody");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=T(a,"TABLE",{});var n=w(e);s=T(n,"THEAD",{});var h=w(s);t=T(h,"TR",{});var E=w(t);m=T(E,"TH",{});var R=w(m);f=S(R,"\u7D50\u679C"),R.forEach(d),u=j(E),o=T(E,"TH",{class:!0});var P=w(o);r=S(P,"\u30C1\u30FC\u30E0\u540D"),P.forEach(d),i=j(E),p=T(E,"TH",{});var Q=w(p);k=S(Q,"\u6226\u7E3E"),Q.forEach(d),y=j(E),H=T(E,"TH",{class:!0});var z=w(H);B=S(z,"\u30E1\u30F3\u30D0\u30FC"),z.forEach(d),E.forEach(d),h.forEach(d),g=j(n),N=T(n,"TBODY",{});var J=w(N);for(let G=0;G<l.length;G+=1)l[G].l(J);J.forEach(d),n.forEach(d),this.h()},h(){q(o,"class","tal"),q(H,"class","tal")},m(a,n){M(a,e,n),_(e,s),_(s,t),_(t,m),_(m,f),_(t,u),_(t,o),_(o,r),_(t,i),_(t,p),_(p,k),_(t,y),_(t,H),_(H,B),_(e,g),_(e,N);for(let h=0;h<l.length;h+=1)l[h].m(N,null);v=!0},p(a,n){if(n&1){b=a[0].teams;let h;for(h=0;h<b.length;h+=1){const E=ne(a,b,h);l[h]?(l[h].p(E,n),L(l[h],1)):(l[h]=me(E),l[h].c(),L(l[h],1),l[h].m(N,null))}for(W(),h=b.length;h<l.length;h+=1)$(h);V()}},i(a){if(!v){for(let n=0;n<b.length;n+=1)L(l[n]);v=!0}},o(a){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)A(l[n]);v=!1},d(a){a&&d(e),le(l,a)}}}function Ne(c){let e,s,t,m=c[0].teams,f=[];for(let o=0;o<m.length;o+=1)f[o]=_e(re(c,m,o));const u=o=>A(f[o],1,1,()=>{f[o]=null});return{c(){e=D("table"),s=D("tbody");for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){e=T(o,"TABLE",{});var r=w(e);s=T(r,"TBODY",{class:!0});var i=w(s);for(let p=0;p<f.length;p+=1)f[p].l(i);i.forEach(d),r.forEach(d),this.h()},h(){q(s,"class","double")},m(o,r){M(o,e,r),_(e,s);for(let i=0;i<f.length;i+=1)f[i].m(s,null);t=!0},p(o,r){if(r&1){m=o[0].teams;let i;for(i=0;i<m.length;i+=1){const p=re(o,m,i);f[i]?(f[i].p(p,r),L(f[i],1)):(f[i]=_e(p),f[i].c(),L(f[i],1),f[i].m(s,null))}for(W(),i=m.length;i<f.length;i+=1)u(i);V()}},i(o){if(!t){for(let r=0;r<m.length;r+=1)L(f[r]);t=!0}},o(o){f=f.filter(Boolean);for(let r=0;r<f.length;r+=1)A(f[r]);t=!1},d(o){o&&d(e),le(f,o)}}}function me(c){let e,s,t,m,f,u,o,r,i=c[4].win+"",p,k,y,H=c[4].lose+"",B,g,N,v,b,l,$;return t=new he({props:{rank:c[4].team_rank}}),u=new de({props:{name:c[4].team_name}}),k=new ee({props:{t:" \u52DD "}}),g=new ee({props:{t:" \u6557"}}),b=new $e({props:{players:c[4].members,ratings:c[0].ratings}}),{c(){e=D("tr"),s=D("td"),I(t.$$.fragment),m=U(),f=D("td"),I(u.$$.fragment),o=U(),r=D("td"),p=O(i),I(k.$$.fragment),y=U(),B=O(H),I(g.$$.fragment),N=U(),v=D("td"),I(b.$$.fragment),l=U(),this.h()},l(a){e=T(a,"TR",{});var n=w(e);s=T(n,"TD",{});var h=w(s);K(t.$$.fragment,h),h.forEach(d),m=j(n),f=T(n,"TD",{class:!0});var E=w(f);K(u.$$.fragment,E),E.forEach(d),o=j(n),r=T(n,"TD",{style:!0});var R=w(r);p=S(R,i),K(k.$$.fragment,R),y=j(R),B=S(R,H),K(g.$$.fragment,R),R.forEach(d),N=j(n),v=T(n,"TD",{class:!0});var P=w(v);K(b.$$.fragment,P),P.forEach(d),l=j(n),n.forEach(d),this.h()},h(){q(f,"class","tal"),x(r,"text-align","center"),q(v,"class","tal")},m(a,n){M(a,e,n),_(e,s),Y(t,s,null),_(e,m),_(e,f),Y(u,f,null),_(e,o),_(e,r),_(r,p),Y(k,r,null),_(r,y),_(r,B),Y(g,r,null),_(e,N),_(e,v),Y(b,v,null),_(e,l),$=!0},p(a,n){const h={};n&1&&(h.rank=a[4].team_rank),t.$set(h);const E={};n&1&&(E.name=a[4].team_name),u.$set(E),(!$||n&1)&&i!==(i=a[4].win+"")&&F(p,i),(!$||n&1)&&H!==(H=a[4].lose+"")&&F(B,H);const R={};n&1&&(R.players=a[4].members),n&1&&(R.ratings=a[0].ratings),b.$set(R)},i(a){$||(L(t.$$.fragment,a),L(u.$$.fragment,a),L(k.$$.fragment,a),L(g.$$.fragment,a),L(b.$$.fragment,a),$=!0)},o(a){A(t.$$.fragment,a),A(u.$$.fragment,a),A(k.$$.fragment,a),A(g.$$.fragment,a),A(b.$$.fragment,a),$=!1},d(a){a&&d(e),C(t),C(u),C(k),C(g),C(b)}}}function _e(c){let e,s,t,m,f,u,o,r,i=c[4].win+"",p,k,y,H=c[4].lose+"",B,g,N,v,b,l,$,a;return t=new he({props:{rank:c[4].team_rank}}),u=new de({props:{name:c[4].team_name}}),k=new ee({props:{t:"\u52DD"}}),g=new ee({props:{t:"\u6557"}}),l=new $e({props:{players:c[4].members,ratings:c[0].ratings}}),{c(){e=D("tr"),s=D("td"),I(t.$$.fragment),m=U(),f=D("td"),I(u.$$.fragment),o=U(),r=D("td"),p=O(i),I(k.$$.fragment),y=U(),B=O(H),I(g.$$.fragment),N=U(),v=D("tr"),b=D("td"),I(l.$$.fragment),$=U(),this.h()},l(n){e=T(n,"TR",{});var h=w(e);s=T(h,"TD",{class:!0});var E=w(s);K(t.$$.fragment,E),E.forEach(d),m=j(h),f=T(h,"TD",{class:!0});var R=w(f);K(u.$$.fragment,R),R.forEach(d),o=j(h),r=T(h,"TD",{class:!0,style:!0});var P=w(r);p=S(P,i),K(k.$$.fragment,P),y=j(P),B=S(P,H),K(g.$$.fragment,P),P.forEach(d),h.forEach(d),N=j(n),v=T(n,"TR",{});var Q=w(v);b=T(Q,"TD",{colspan:!0,class:!0,style:!0});var z=w(b);K(l.$$.fragment,z),z.forEach(d),$=j(Q),Q.forEach(d),this.h()},h(){q(s,"class","nw"),q(f,"class","tal"),q(r,"class","nw"),x(r,"text-align","center"),q(b,"colspan","3"),q(b,"class","tal"),x(b,"padding-left","2em")},m(n,h){M(n,e,h),_(e,s),Y(t,s,null),_(e,m),_(e,f),Y(u,f,null),_(e,o),_(e,r),_(r,p),Y(k,r,null),_(r,y),_(r,B),Y(g,r,null),M(n,N,h),M(n,v,h),_(v,b),Y(l,b,null),_(v,$),a=!0},p(n,h){const E={};h&1&&(E.rank=n[4].team_rank),t.$set(E);const R={};h&1&&(R.name=n[4].team_name),u.$set(R),(!a||h&1)&&i!==(i=n[4].win+"")&&F(p,i),(!a||h&1)&&H!==(H=n[4].lose+"")&&F(B,H);const P={};h&1&&(P.players=n[4].members),h&1&&(P.ratings=n[0].ratings),l.$set(P)},i(n){a||(L(t.$$.fragment,n),L(u.$$.fragment,n),L(k.$$.fragment,n),L(g.$$.fragment,n),L(l.$$.fragment,n),a=!0)},o(n){A(t.$$.fragment,n),A(u.$$.fragment,n),A(k.$$.fragment,n),A(g.$$.fragment,n),A(l.$$.fragment,n),a=!1},d(n){n&&d(e),C(t),C(u),C(k),C(g),n&&d(N),n&&d(v),C(l)}}}function Ae(c){let e,s,t,m;const f=[Be,Le],u=[];function o(r,i){return r[0]?0:1}return e=o(c),s=u[e]=f[e](c),{c(){s.c(),t=Z()},l(r){s.l(r),t=Z()},m(r,i){u[e].m(r,i),M(r,t,i),m=!0},p(r,[i]){let p=e;e=o(r),e===p?u[e].p(r,i):(W(),A(u[p],1,1,()=>{u[p]=null}),V(),s=u[e],s?s.p(r,i):(s=u[e]=f[e](r),s.c()),L(s,1),s.m(t.parentNode,t))},i(r){m||(L(s),m=!0)},o(r){A(s),m=!1},d(r){u[e].d(r),r&&d(t)}}}function Pe(c,e,s){let t,m,f;te(c,ae,o=>s(2,t=o)),te(c,X,o=>s(0,m=o)),te(c,Te,o=>s(1,f=o)),Ee(()=>{u()}),ve(()=>X.set(null));async function u(){X.set(null),ae.set(De(null,"t")),t!==null&&fetch(`/center_pin_g/data/tournament/${t}.json`).then(o=>o.json()).then(o=>{X.set(o)}).catch(()=>[])}return[m,f]}class Ce extends pe{constructor(e){super();ge(this,e,Pe,Ae,be,{})}}export{Ce as default};
