import{S as re,i as se,s as ie,t as L,h as U,g as h,d as m,l as X,E as ae,R as he,e as z,w as D,c as F,a as G,x as M,y as q,K as E,j as J,q as p,o as g,B as C,k as j,m as A,b as ue,n as te,p as ne,P as we,J as ke,M as ve,N as ye,O as Pe}from"./index-15dce5f7.js";import{b as $e}from"./paths-396f020f.js";import{p as Ee,s as me}from"./global-52dfa6c4.js";import{T as W,D as Ne,a as Se}from"./PopUpA-e12b6952.js";import{T as Te,Y as je,a as Ae}from"./Twitch-55dc744f.js";function pe(f,e,a){const t=f.slice();return t[1]=e[a],t}function _e(f){let e;return{c(){e=L("\xA0")},l(a){e=U(a,"\xA0")},m(a,t){h(a,e,t)},d(a){a&&m(e)}}}function De(f){let e,a=[...Array(f[0]).keys()],t=[];for(let l=0;l<a.length;l+=1)t[l]=_e(pe(f,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=X()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=X()},m(l,s){for(let n=0;n<t.length;n+=1)t[n].m(l,s);h(l,e,s)},p(l,[s]){if(s&1){const n=a.length;a=[...Array(l[0]).keys()];let i;for(i=n;i<a.length;i+=1)pe(l,a,i),t[i]||(t[i]=_e(),t[i].c(),t[i].m(e.parentNode,e));for(i=a.length;i<n;i+=1)t[i].d(1);t.length=a.length}},i:ae,o:ae,d(l){he(t,l),l&&m(e)}}}function Me(f,e,a){let{s:t}=e;return f.$$set=l=>{"s"in l&&a(0,t=l.s)},[t]}class fe extends re{constructor(e){super(),se(this,e,Me,De,ie,{s:0})}}function ce(f){let e,a,t=f[0].data.aliases.join(", ")+"",l,s;return a=new W({props:{$$slots:{default:[qe]},$$scope:{ctx:f}}}),{c(){e=z("p"),D(a.$$.fragment),l=L(t)},l(n){e=F(n,"P",{});var i=G(e);M(a.$$.fragment,i),l=U(i,t),i.forEach(m)},m(n,i){h(n,e,i),q(a,e,null),E(e,l),s=!0},p(n,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),a.$set(o),(!s||i&1)&&t!==(t=n[0].data.aliases.join(", ")+"")&&J(l,t)},i(n){s||(p(a.$$.fragment,n),s=!0)},o(n){g(a.$$.fragment,n),s=!1},d(n){n&&m(e),C(a)}}}function qe(f){let e;return{c(){e=L("\u767B\u9332\u540D ")},l(a){e=U(a,"\u767B\u9332\u540D ")},m(a,t){h(a,e,t)},d(a){a&&m(e)}}}function ge(f){let e=f[0].rating.toLocaleString()+"",a;return{c(){a=L(e)},l(t){a=U(t,e)},m(t,l){h(t,a,l)},p(t,l){l&1&&e!==(e=t[0].rating.toLocaleString()+"")&&J(a,e)},d(t){t&&m(a)}}}function de(f){let e,a,t,l,s,n,i=f[0].latest.tournament_name+"",o,d,P,N,$=f[0].latest.team+"",_,H;return s=new Ne({props:{date:f[0].latest.date,spacing:!1}}),N=new W({props:{t:"\u30C1\u30FC\u30E0 "}}),{c(){e=z("h4"),a=L("\u6700\u65B0\u5927\u4F1A"),t=j(),l=z("p"),D(s.$$.fragment),n=j(),o=L(i),d=j(),P=z("p"),D(N.$$.fragment),_=L($)},l(u){e=F(u,"H4",{});var y=G(e);a=U(y,"\u6700\u65B0\u5927\u4F1A"),y.forEach(m),t=A(u),l=F(u,"P",{});var S=G(l);M(s.$$.fragment,S),n=A(S),o=U(S,i),S.forEach(m),d=A(u),P=F(u,"P",{});var Y=G(P);M(N.$$.fragment,Y),_=U(Y,$),Y.forEach(m)},m(u,y){h(u,e,y),E(e,a),h(u,t,y),h(u,l,y),q(s,l,null),E(l,n),E(l,o),h(u,d,y),h(u,P,y),q(N,P,null),E(P,_),H=!0},p(u,y){const S={};y&1&&(S.date=u[0].latest.date),s.$set(S),(!H||y&1)&&i!==(i=u[0].latest.tournament_name+"")&&J(o,i),(!H||y&1)&&$!==($=u[0].latest.team+"")&&J(_,$)},i(u){H||(p(s.$$.fragment,u),p(N.$$.fragment,u),H=!0)},o(u){g(s.$$.fragment,u),g(N.$$.fragment,u),H=!1},d(u){u&&m(e),u&&m(t),u&&m(l),C(s),u&&m(d),u&&m(P),C(N)}}}function be(f){var o,d,P,N;let e,a,t,l,s,n,i;return a=new Te({props:{account:(o=f[0].data)==null?void 0:o.twitter}}),l=new je({props:{channel:((d=f[0].data)==null?void 0:d.youtube)&&f[0].data.youtube[0],name:((P=f[0].data)==null?void 0:P.youtube)&&f[0].data.youtube[1]}}),n=new Ae({props:{account:(N=f[0].data)==null?void 0:N.twitch}}),{c(){e=z("td"),D(a.$$.fragment),t=j(),D(l.$$.fragment),s=j(),D(n.$$.fragment),this.h()},l($){e=F($,"TD",{class:!0,colspan:!0});var _=G(e);M(a.$$.fragment,_),t=A(_),M(l.$$.fragment,_),s=A(_),M(n.$$.fragment,_),_.forEach(m),this.h()},h(){ue(e,"class","tal"),ue(e,"colspan","2")},m($,_){h($,e,_),q(a,e,null),E(e,t),q(l,e,null),E(e,s),q(n,e,null),i=!0},p($,_){var S,Y,B,I;const H={};_&1&&(H.account=(S=$[0].data)==null?void 0:S.twitter),a.$set(H);const u={};_&1&&(u.channel=((Y=$[0].data)==null?void 0:Y.youtube)&&$[0].data.youtube[0]),_&1&&(u.name=((B=$[0].data)==null?void 0:B.youtube)&&$[0].data.youtube[1]),l.$set(u);const y={};_&1&&(y.account=(I=$[0].data)==null?void 0:I.twitch),n.$set(y)},i($){i||(p(a.$$.fragment,$),p(l.$$.fragment,$),p(n.$$.fragment,$),i=!0)},o($){g(a.$$.fragment,$),g(l.$$.fragment,$),g(n.$$.fragment,$),i=!1},d($){$&&m(e),C(a),C(l),C(n)}}}function Ce(f){var oe;let e,a=f[0].name+"",t,l,s,n,i,o,d,P,N=f[0].entries+"",$,_,H,u,y,S=f[0].win+"",Y,B,I,O,le,Z=f[0].lose+"",x,R,ee,Q,V,K,w=f[0].data&&((oe=f[0].data.aliases)==null?void 0:oe.length)>0&&ce(f);i=new W({props:{t:"rating "}});let T=f[0].rating&&ge(f);d=new fe({props:{s:2}}),_=new W({props:{t:" \u5927\u4F1A\u30A8\u30F3\u30C8\u30EA\u30FC"}}),u=new fe({props:{s:2}}),B=new W({props:{t:" \u52DD"}}),O=new fe({props:{s:2}}),R=new W({props:{t:" \u6557"}});let k=f[0].latest&&de(f),v=f[0].data&&be(f);return{c(){e=z("h3"),t=L(a),l=j(),w&&w.c(),s=j(),n=z("p"),D(i.$$.fragment),T&&T.c(),o=j(),D(d.$$.fragment),P=j(),$=L(N),D(_.$$.fragment),H=j(),D(u.$$.fragment),y=j(),Y=L(S),D(B.$$.fragment),I=j(),D(O.$$.fragment),le=j(),x=L(Z),D(R.$$.fragment),ee=j(),k&&k.c(),Q=j(),v&&v.c(),V=X()},l(r){e=F(r,"H3",{});var c=G(e);t=U(c,a),c.forEach(m),l=A(r),w&&w.l(r),s=A(r),n=F(r,"P",{});var b=G(n);M(i.$$.fragment,b),T&&T.l(b),o=A(b),M(d.$$.fragment,b),P=A(b),$=U(b,N),M(_.$$.fragment,b),H=A(b),M(u.$$.fragment,b),y=A(b),Y=U(b,S),M(B.$$.fragment,b),I=A(b),M(O.$$.fragment,b),le=A(b),x=U(b,Z),M(R.$$.fragment,b),b.forEach(m),ee=A(r),k&&k.l(r),Q=A(r),v&&v.l(r),V=X()},m(r,c){h(r,e,c),E(e,t),h(r,l,c),w&&w.m(r,c),h(r,s,c),h(r,n,c),q(i,n,null),T&&T.m(n,null),E(n,o),q(d,n,null),E(n,P),E(n,$),q(_,n,null),E(n,H),q(u,n,null),E(n,y),E(n,Y),q(B,n,null),E(n,I),q(O,n,null),E(n,le),E(n,x),q(R,n,null),h(r,ee,c),k&&k.m(r,c),h(r,Q,c),v&&v.m(r,c),h(r,V,c),K=!0},p(r,[c]){var b;(!K||c&1)&&a!==(a=r[0].name+"")&&J(t,a),r[0].data&&((b=r[0].data.aliases)==null?void 0:b.length)>0?w?(w.p(r,c),c&1&&p(w,1)):(w=ce(r),w.c(),p(w,1),w.m(s.parentNode,s)):w&&(te(),g(w,1,1,()=>{w=null}),ne()),r[0].rating?T?T.p(r,c):(T=ge(r),T.c(),T.m(n,o)):T&&(T.d(1),T=null),(!K||c&1)&&N!==(N=r[0].entries+"")&&J($,N),(!K||c&1)&&S!==(S=r[0].win+"")&&J(Y,S),(!K||c&1)&&Z!==(Z=r[0].lose+"")&&J(x,Z),r[0].latest?k?(k.p(r,c),c&1&&p(k,1)):(k=de(r),k.c(),p(k,1),k.m(Q.parentNode,Q)):k&&(te(),g(k,1,1,()=>{k=null}),ne()),r[0].data?v?(v.p(r,c),c&1&&p(v,1)):(v=be(r),v.c(),p(v,1),v.m(V.parentNode,V)):v&&(te(),g(v,1,1,()=>{v=null}),ne())},i(r){K||(p(w),p(i.$$.fragment,r),p(d.$$.fragment,r),p(_.$$.fragment,r),p(u.$$.fragment,r),p(B.$$.fragment,r),p(O.$$.fragment,r),p(R.$$.fragment,r),p(k),p(v),K=!0)},o(r){g(w),g(i.$$.fragment,r),g(d.$$.fragment,r),g(_.$$.fragment,r),g(u.$$.fragment,r),g(B.$$.fragment,r),g(O.$$.fragment,r),g(R.$$.fragment,r),g(k),g(v),K=!1},d(r){r&&m(e),r&&m(l),w&&w.d(r),r&&m(s),r&&m(n),C(i),T&&T.d(),C(d),C(_),C(u),C(B),C(O),C(R),r&&m(ee),k&&k.d(r),r&&m(Q),v&&v.d(r),r&&m(V)}}}function He(f,e,a){let{player:t}=e;return f.$$set=l=>{"player"in l&&a(0,t=l.player)},[t]}class Le extends re{constructor(e){super(),se(this,e,He,Ce,ie,{player:0})}}function Ue(f){let e;return{c(){e=L(f[0])},l(a){e=U(a,f[0])},m(a,t){h(a,e,t)},p(a,t){t&1&&J(e,a[0])},i:ae,o:ae,d(a){a&&m(e)}}}function Ye(f){let e,a;return e=new Se({props:{href:$e+"/player/detail/?p="+me(f[0]),text:f[0],condition:!!f[1].dic[f[0]],css_class:f[2](),$$slots:{default:[Be]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){q(e,t,l),a=!0},p(t,l){const s={};l&1&&(s.href=$e+"/player/detail/?p="+me(t[0])),l&1&&(s.text=t[0]),l&3&&(s.condition=!!t[1].dic[t[0]]),l&19&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function Be(f){let e,a,t;e=new Le({props:{player:f[1].dic[f[0]]}});const l=f[3].default,s=ke(l,f,f[4],null);return{c(){D(e.$$.fragment),a=j(),s&&s.c()},l(n){M(e.$$.fragment,n),a=A(n),s&&s.l(n)},m(n,i){q(e,n,i),h(n,a,i),s&&s.m(n,i),t=!0},p(n,i){const o={};i&3&&(o.player=n[1].dic[n[0]]),e.$set(o),s&&s.p&&(!t||i&16)&&ve(s,l,n,n[4],t?Pe(l,n[4],i,null):ye(n[4]),null)},i(n){t||(p(e.$$.fragment,n),p(s,n),t=!0)},o(n){g(e.$$.fragment,n),g(s,n),t=!1},d(n){C(e,n),n&&m(a),s&&s.d(n)}}}function Je(f){let e,a,t,l;const s=[Ye,Ue],n=[];function i(o,d){return o[1].dic[o[0]]?0:1}return e=i(f),a=n[e]=s[e](f),{c(){a.c(),t=X()},l(o){a.l(o),t=X()},m(o,d){n[e].m(o,d),h(o,t,d),l=!0},p(o,[d]){let P=e;e=i(o),e===P?n[e].p(o,d):(te(),g(n[P],1,1,()=>{n[P]=null}),ne(),a=n[e],a?a.p(o,d):(a=n[e]=s[e](o),a.c()),p(a,1),a.m(t.parentNode,t))},i(o){l||(p(a),l=!0)},o(o){g(a),l=!1},d(o){n[e].d(o),o&&m(t)}}}function Ke(f,e,a){let t;we(f,Ee,o=>a(1,t=o));let{$$slots:l={},$$scope:s}=e,{name:n}=e;function i(){if(console.log(t.dic[n]),t.dic[n]){if(t.dic[n].rating>t.t1)return"t1";if(t.dic[n].rating>t.t2)return"t2"}return""}return f.$$set=o=>{"name"in o&&a(0,n=o.name),"$$scope"in o&&a(4,s=o.$$scope)},[n,t,i,l,s]}class Ie extends re{constructor(e){super(),se(this,e,Ke,Je,ie,{name:0})}}export{Ie as P,fe as S};
