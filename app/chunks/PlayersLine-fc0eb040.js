import{S as C,i as G,s as J,k as h,w as y,l as g,m as d,x as w,g as m,y as L,q as _,o as c,B as N,d as p,n as b,p as k,Q as K,M as Q,t as T,h as j,G as z,J as A,K as D,L as E}from"./vendor-51c80f4f.js";import{P as F}from"./PlayerName-1d3b8cf2.js";import{T as B}from"./PopUpA-e811d878.js";import{p as H}from"./global-f2ffd441.js";function P(a,l,n){const f=a.slice();return f[6]=l[n],f[8]=n,f}function I(a){let l;return{c(){l=T(",")},l(n){l=j(n,",")},m(n,f){m(n,l,f)},d(n){n&&p(l)}}}function O(a){let l,n;const f=a[4].default,e=z(f,a,a[5],null);return{c(){e&&e.c(),l=h()},l(o){e&&e.l(o),l=d(o)},m(o,s){e&&e.m(o,s),m(o,l,s),n=!0},p(o,s){e&&e.p&&(!n||s&32)&&A(e,f,o,o[5],n?E(f,o[5],s,null):D(o[5]),null)},i(o){n||(_(e,o),n=!0)},o(o){c(e,o),n=!1},d(o){e&&e.d(o),o&&p(l)}}}function S(a){let l,n,f;return l=new B({props:{t:"("+a[3].dic[a[6]].rating.toLocaleString()+")"}}),{c(){y(l.$$.fragment),n=h()},l(e){w(l.$$.fragment,e),n=d(e)},m(e,o){L(l,e,o),m(e,n,o),f=!0},p(e,o){const s={};o&9&&(s.t="("+e[3].dic[e[6]].rating.toLocaleString()+")"),l.$set(s)},i(e){f||(_(l.$$.fragment,e),f=!0)},o(e){c(l.$$.fragment,e),f=!1},d(e){N(l,e),e&&p(n)}}}function M(a){let l,n;return l=new B({props:{t:"("+a[2][a[6]]+")"}}),{c(){y(l.$$.fragment)},l(f){w(l.$$.fragment,f)},m(f,e){L(l,f,e),n=!0},p(f,e){const o={};e&5&&(o.t="("+f[2][f[6]]+")"),l.$set(o)},i(f){n||(_(l.$$.fragment,f),n=!0)},o(f){c(l.$$.fragment,f),n=!1},d(f){N(l,f)}}}function q(a){let l,n,f,e,o,s=a[8]!==0&&I();n=new F({props:{name:a[6],$$slots:{default:[O]},$$scope:{ctx:a}}});let r=a[1]&&a[3].dic[a[6]]&&a[3].dic[a[6]].rating>1500&&S(a),i=a[2]&&M(a);return{c(){s&&s.c(),l=h(),y(n.$$.fragment),r&&r.c(),f=g(),i&&i.c(),e=g()},l(t){s&&s.l(t),l=d(t),w(n.$$.fragment,t),r&&r.l(t),f=g(),i&&i.l(t),e=g()},m(t,u){s&&s.m(t,u),m(t,l,u),L(n,t,u),r&&r.m(t,u),m(t,f,u),i&&i.m(t,u),m(t,e,u),o=!0},p(t,u){const $={};u&1&&($.name=t[6]),u&32&&($.$$scope={dirty:u,ctx:t}),n.$set($),t[1]&&t[3].dic[t[6]]&&t[3].dic[t[6]].rating>1500?r?(r.p(t,u),u&11&&_(r,1)):(r=S(t),r.c(),_(r,1),r.m(f.parentNode,f)):r&&(b(),c(r,1,1,()=>{r=null}),k()),t[2]?i?(i.p(t,u),u&4&&_(i,1)):(i=M(t),i.c(),_(i,1),i.m(e.parentNode,e)):i&&(b(),c(i,1,1,()=>{i=null}),k())},i(t){o||(_(n.$$.fragment,t),_(r),_(i),o=!0)},o(t){c(n.$$.fragment,t),c(r),c(i),o=!1},d(t){s&&s.d(t),t&&p(l),N(n,t),r&&r.d(t),t&&p(f),i&&i.d(t),t&&p(e)}}}function R(a){let l,n,f=a[0],e=[];for(let s=0;s<f.length;s+=1)e[s]=q(P(a,f,s));const o=s=>c(e[s],1,1,()=>{e[s]=null});return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=g()},l(s){for(let r=0;r<e.length;r+=1)e[r].l(s);l=g()},m(s,r){for(let i=0;i<e.length;i+=1)e[i].m(s,r);m(s,l,r),n=!0},p(s,[r]){if(r&47){f=s[0];let i;for(i=0;i<f.length;i+=1){const t=P(s,f,i);e[i]?(e[i].p(t,r),_(e[i],1)):(e[i]=q(t),e[i].c(),_(e[i],1),e[i].m(l.parentNode,l))}for(b(),i=f.length;i<e.length;i+=1)o(i);k()}},i(s){if(!n){for(let r=0;r<f.length;r+=1)_(e[r]);n=!0}},o(s){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)c(e[r]);n=!1},d(s){K(e,s),s&&p(l)}}}function U(a,l,n){let f;Q(a,H,t=>n(3,f=t));let{$$slots:e={},$$scope:o}=l,{players:s}=l,{ratings:r=!1}=l,{notes:i=null}=l;return a.$$set=t=>{"players"in t&&n(0,s=t.players),"ratings"in t&&n(1,r=t.ratings),"notes"in t&&n(2,i=t.notes),"$$scope"in t&&n(5,o=t.$$scope)},[s,r,i,f,e,o]}class Z extends C{constructor(l){super();G(this,l,U,R,J,{players:0,ratings:1,notes:2})}}export{Z as P};
