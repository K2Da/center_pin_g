import{S as te,i as re,s as se,k as W,f as v,n as _,o as ae,p as $,d as m,K as z,O as ne,m as le,v as b,w,x as D,I as oe,A as E,j as H,e as I,t as X,l as P,c as V,a as S,g as Y,b as M,E as d,h as ie}from"../../../chunks/vendor-eda31402.js";import{c as Z,p as ee,a as K}from"../../../chunks/index_store-b5403d1f.js";import fe from"../../Header.svelte-798ea8cc.js";import me from"./Profile.svelte-16127a2c.js";import ce from"./Teams.svelte-cbd797e4.js";import pe from"./Tournaments.svelte-06d8b61f.js";import ue from"./Mates.svelte-cd9b77ab.js";import _e from"./Opponents.svelte-ef933c37.js";import $e from"../../PlaceHolder.svelte-4f69163f.js";import"../../../chunks/paths-28a87002.js";import"../../../chunks/util-f29b5fc7.js";function de(l){let t,r;return t=new $e({}),{c(){b(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,o){D(t,s,o),r=!0},p:oe,i(s){r||($(t.$$.fragment,s),r=!0)},o(s){_(t.$$.fragment,s),r=!1},d(s){E(t,s)}}}function ve(l){let t,r,s,o=l[1].player.collated_name+"",u,f,a,n,c,h,T,y,L,q,k,N,O,g,A,U,R,C,j,x;return t=new fe({props:{title:l[1].player.collated_name,type:"article",url:"player/detail/?q="+l[0],description:""}}),c=new me({}),y=new ce({}),k=new ue({}),g=new _e({}),j=new pe({}),{c(){b(t.$$.fragment),r=H(),s=I("h2"),u=X(o),f=H(),a=I("div"),n=I("div"),b(c.$$.fragment),h=H(),T=I("div"),b(y.$$.fragment),L=H(),q=I("div"),b(k.$$.fragment),N=H(),O=I("div"),b(g.$$.fragment),A=H(),U=I("h3"),R=X("\u53C2\u52A0\u5927\u4F1A"),C=H(),b(j.$$.fragment),this.h()},l(e){w(t.$$.fragment,e),r=P(e),s=V(e,"H2",{});var i=S(s);u=Y(i,o),i.forEach(m),f=P(e),a=V(e,"DIV",{class:!0});var p=S(a);n=V(p,"DIV",{class:!0});var B=S(n);w(c.$$.fragment,B),B.forEach(m),h=P(p),T=V(p,"DIV",{class:!0});var F=S(T);w(y.$$.fragment,F),F.forEach(m),L=P(p),q=V(p,"DIV",{class:!0});var G=S(q);w(k.$$.fragment,G),G.forEach(m),N=P(p),O=V(p,"DIV",{class:!0});var J=S(O);w(g.$$.fragment,J),J.forEach(m),p.forEach(m),A=P(e),U=V(e,"H3",{});var Q=S(U);R=Y(Q,"\u53C2\u52A0\u5927\u4F1A"),Q.forEach(m),C=P(e),w(j.$$.fragment,e),this.h()},h(){M(n,"class","l svelte-1t6j0nk"),M(T,"class","r svelte-1t6j0nk"),M(q,"class","l svelte-1t6j0nk"),M(O,"class","r svelte-1t6j0nk"),M(a,"class","grid svelte-1t6j0nk")},m(e,i){D(t,e,i),v(e,r,i),v(e,s,i),d(s,u),v(e,f,i),v(e,a,i),d(a,n),D(c,n,null),d(a,h),d(a,T),D(y,T,null),d(a,L),d(a,q),D(k,q,null),d(a,N),d(a,O),D(g,O,null),v(e,A,i),v(e,U,i),d(U,R),v(e,C,i),D(j,e,i),x=!0},p(e,i){const p={};i&2&&(p.title=e[1].player.collated_name),i&1&&(p.url="player/detail/?q="+e[0]),t.$set(p),(!x||i&2)&&o!==(o=e[1].player.collated_name+"")&&ie(u,o)},i(e){x||($(t.$$.fragment,e),$(c.$$.fragment,e),$(y.$$.fragment,e),$(k.$$.fragment,e),$(g.$$.fragment,e),$(j.$$.fragment,e),x=!0)},o(e){_(t.$$.fragment,e),_(c.$$.fragment,e),_(y.$$.fragment,e),_(k.$$.fragment,e),_(g.$$.fragment,e),_(j.$$.fragment,e),x=!1},d(e){E(t,e),e&&m(r),e&&m(s),e&&m(f),e&&m(a),E(c),E(y),E(k),E(g),e&&m(A),e&&m(U),e&&m(C),E(j,e)}}}function he(l){let t,r,s,o;const u=[ve,de],f=[];function a(n,c){return n[1]?0:1}return t=a(l),r=f[t]=u[t](l),{c(){r.c(),s=W()},l(n){r.l(n),s=W()},m(n,c){f[t].m(n,c),v(n,s,c),o=!0},p(n,[c]){let h=t;t=a(n),t===h?f[t].p(n,c):(le(),_(f[h],1,1,()=>{f[h]=null}),ae(),r=f[t],r?r.p(n,c):(r=f[t]=u[t](n),r.c()),$(r,1),r.m(s.parentNode,s))},i(n){o||($(r),o=!0)},o(n){_(r),o=!1},d(n){f[t].d(n),n&&m(s)}}}async function Se(l){return Z.set(l.url.toString()),{status:200}}function ye(l,t,r){let s,o,u;z(l,Z,a=>r(2,s=a)),z(l,ee,a=>r(0,o=a)),z(l,K,a=>r(1,u=a)),ne(()=>K.set(null));async function f(){K.set(null),ee.set(new URLSearchParams(window.location.search).get("p")),fetch(`/center_pin_g/player/${o}.json`).then(a=>a.json()).then(a=>{K.set(a)}).catch(()=>[])}return l.$$.update=()=>{l.$$.dirty&4&&f()},[o,u,s]}class Te extends te{constructor(t){super();re(this,t,ye,he,se,{})}}export{Te as default,Se as load};
