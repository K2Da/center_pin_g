import{S as re,i as se,s as ie,t as U,h as Y,g as h,d as m,l as X,O as ne,Q as he,e as Q,w as D,c as z,a as F,x as H,y as L,H as E,j as G,q as p,o as g,B as M,k as j,m as A,b as ue,n as te,p as ae,M as we,G as ke,J as ve,K as ye,L as Pe}from"./vendor-19267f61.js";import{b as $e}from"./paths-396f020f.js";import{p as Ee,b as me}from"./global-5504b914.js";import{T as W,D as Ne,a as Se}from"./PopUpA-f4bb0785.js";import{T as Te,Y as je,a as Ae}from"./Twitch-7a6a071e.js";function pe(r,e,t){const n=r.slice();return n[1]=e[t],n}function _e(r){let e;return{c(){e=U("\xA0")},l(t){e=Y(t,"\xA0")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function De(r){let e,t=[...Array(r[0]).keys()],n=[];for(let l=0;l<t.length;l+=1)n[l]=_e(pe(r,t,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=X()},l(l){for(let s=0;s<n.length;s+=1)n[s].l(l);e=X()},m(l,s){for(let a=0;a<n.length;a+=1)n[a].m(l,s);h(l,e,s)},p(l,[s]){if(s&1){const a=t.length;t=[...Array(l[0]).keys()];let i;for(i=a;i<t.length;i+=1)pe(l,t,i),n[i]||(n[i]=_e(),n[i].c(),n[i].m(e.parentNode,e));for(i=t.length;i<a;i+=1)n[i].d(1);n.length=t.length}},i:ne,o:ne,d(l){he(n,l),l&&m(e)}}}function He(r,e,t){let{s:n}=e;return r.$$set=l=>{"s"in l&&t(0,n=l.s)},[n]}class fe extends re{constructor(e){super();se(this,e,He,De,ie,{s:0})}}function ce(r){let e,t,n=r[0].data.aliases.join(", ")+"",l,s;return t=new W({props:{$$slots:{default:[Le]},$$scope:{ctx:r}}}),{c(){e=Q("p"),D(t.$$.fragment),l=U(n)},l(a){e=z(a,"P",{});var i=F(e);H(t.$$.fragment,i),l=Y(i,n),i.forEach(m)},m(a,i){h(a,e,i),L(t,e,null),E(e,l),s=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),t.$set(u),(!s||i&1)&&n!==(n=a[0].data.aliases.join(", ")+"")&&G(l,n)},i(a){s||(p(t.$$.fragment,a),s=!0)},o(a){g(t.$$.fragment,a),s=!1},d(a){a&&m(e),M(t)}}}function Le(r){let e;return{c(){e=U("\u767B\u9332\u540D ")},l(t){e=Y(t,"\u767B\u9332\u540D ")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function ge(r){let e=r[0].rating.toLocaleString()+"",t;return{c(){t=U(e)},l(n){t=Y(n,e)},m(n,l){h(n,t,l)},p(n,l){l&1&&e!==(e=n[0].rating.toLocaleString()+"")&&G(t,e)},d(n){n&&m(t)}}}function de(r){let e,t,n,l,s,a,i=r[0].latest.tournament_name+"",u,d,P,N,$=r[0].latest.team+"",_,q;return s=new Ne({props:{date:r[0].latest.date,spacing:!1}}),N=new W({props:{t:"\u30C1\u30FC\u30E0 "}}),{c(){e=Q("h4"),t=U("\u6700\u65B0\u5927\u4F1A"),n=j(),l=Q("p"),D(s.$$.fragment),a=j(),u=U(i),d=j(),P=Q("p"),D(N.$$.fragment),_=U($)},l(o){e=z(o,"H4",{});var y=F(e);t=Y(y,"\u6700\u65B0\u5927\u4F1A"),y.forEach(m),n=A(o),l=z(o,"P",{});var S=F(l);H(s.$$.fragment,S),a=A(S),u=Y(S,i),S.forEach(m),d=A(o),P=z(o,"P",{});var B=F(P);H(N.$$.fragment,B),_=Y(B,$),B.forEach(m)},m(o,y){h(o,e,y),E(e,t),h(o,n,y),h(o,l,y),L(s,l,null),E(l,a),E(l,u),h(o,d,y),h(o,P,y),L(N,P,null),E(P,_),q=!0},p(o,y){const S={};y&1&&(S.date=o[0].latest.date),s.$set(S),(!q||y&1)&&i!==(i=o[0].latest.tournament_name+"")&&G(u,i),(!q||y&1)&&$!==($=o[0].latest.team+"")&&G(_,$)},i(o){q||(p(s.$$.fragment,o),p(N.$$.fragment,o),q=!0)},o(o){g(s.$$.fragment,o),g(N.$$.fragment,o),q=!1},d(o){o&&m(e),o&&m(n),o&&m(l),M(s),o&&m(d),o&&m(P),M(N)}}}function be(r){var u,d,P,N;let e,t,n,l,s,a,i;return t=new Te({props:{account:(u=r[0].data)==null?void 0:u.twitter}}),l=new je({props:{channel:((d=r[0].data)==null?void 0:d.youtube)&&r[0].data.youtube[0],name:((P=r[0].data)==null?void 0:P.youtube)&&r[0].data.youtube[1]}}),a=new Ae({props:{account:(N=r[0].data)==null?void 0:N.twitch}}),{c(){e=Q("td"),D(t.$$.fragment),n=j(),D(l.$$.fragment),s=j(),D(a.$$.fragment),this.h()},l($){e=z($,"TD",{class:!0,colspan:!0});var _=F(e);H(t.$$.fragment,_),n=A(_),H(l.$$.fragment,_),s=A(_),H(a.$$.fragment,_),_.forEach(m),this.h()},h(){ue(e,"class","tal"),ue(e,"colspan","2")},m($,_){h($,e,_),L(t,e,null),E(e,n),L(l,e,null),E(e,s),L(a,e,null),i=!0},p($,_){var S,B,C,I;const q={};_&1&&(q.account=(S=$[0].data)==null?void 0:S.twitter),t.$set(q);const o={};_&1&&(o.channel=((B=$[0].data)==null?void 0:B.youtube)&&$[0].data.youtube[0]),_&1&&(o.name=((C=$[0].data)==null?void 0:C.youtube)&&$[0].data.youtube[1]),l.$set(o);const y={};_&1&&(y.account=(I=$[0].data)==null?void 0:I.twitch),a.$set(y)},i($){i||(p(t.$$.fragment,$),p(l.$$.fragment,$),p(a.$$.fragment,$),i=!0)},o($){g(t.$$.fragment,$),g(l.$$.fragment,$),g(a.$$.fragment,$),i=!1},d($){$&&m(e),M(t),M(l),M(a)}}}function Me(r){var oe;let e,t=r[0].name+"",n,l,s,a,i,u,d,P,N=r[0].entries+"",$,_,q,o,y,S=r[0].win+"",B,C,I,K,le,Z=r[0].lose+"",x,O,ee,R,V,J,w=r[0].data&&((oe=r[0].data.aliases)==null?void 0:oe.length)>0&&ce(r);i=new W({props:{t:"rating "}});let T=r[0].rating&&ge(r);d=new fe({props:{s:2}}),_=new W({props:{t:" \u5927\u4F1A\u30A8\u30F3\u30C8\u30EA\u30FC"}}),o=new fe({props:{s:2}}),C=new W({props:{t:" \u52DD"}}),K=new fe({props:{s:2}}),O=new W({props:{t:" \u6557"}});let k=r[0].latest&&de(r),v=r[0].data&&be(r);return{c(){e=Q("h3"),n=U(t),l=j(),w&&w.c(),s=j(),a=Q("p"),D(i.$$.fragment),T&&T.c(),u=j(),D(d.$$.fragment),P=j(),$=U(N),D(_.$$.fragment),q=j(),D(o.$$.fragment),y=j(),B=U(S),D(C.$$.fragment),I=j(),D(K.$$.fragment),le=j(),x=U(Z),D(O.$$.fragment),ee=j(),k&&k.c(),R=j(),v&&v.c(),V=X()},l(f){e=z(f,"H3",{});var c=F(e);n=Y(c,t),c.forEach(m),l=A(f),w&&w.l(f),s=A(f),a=z(f,"P",{});var b=F(a);H(i.$$.fragment,b),T&&T.l(b),u=A(b),H(d.$$.fragment,b),P=A(b),$=Y(b,N),H(_.$$.fragment,b),q=A(b),H(o.$$.fragment,b),y=A(b),B=Y(b,S),H(C.$$.fragment,b),I=A(b),H(K.$$.fragment,b),le=A(b),x=Y(b,Z),H(O.$$.fragment,b),b.forEach(m),ee=A(f),k&&k.l(f),R=A(f),v&&v.l(f),V=X()},m(f,c){h(f,e,c),E(e,n),h(f,l,c),w&&w.m(f,c),h(f,s,c),h(f,a,c),L(i,a,null),T&&T.m(a,null),E(a,u),L(d,a,null),E(a,P),E(a,$),L(_,a,null),E(a,q),L(o,a,null),E(a,y),E(a,B),L(C,a,null),E(a,I),L(K,a,null),E(a,le),E(a,x),L(O,a,null),h(f,ee,c),k&&k.m(f,c),h(f,R,c),v&&v.m(f,c),h(f,V,c),J=!0},p(f,[c]){var b;(!J||c&1)&&t!==(t=f[0].name+"")&&G(n,t),f[0].data&&((b=f[0].data.aliases)==null?void 0:b.length)>0?w?(w.p(f,c),c&1&&p(w,1)):(w=ce(f),w.c(),p(w,1),w.m(s.parentNode,s)):w&&(te(),g(w,1,1,()=>{w=null}),ae()),f[0].rating?T?T.p(f,c):(T=ge(f),T.c(),T.m(a,u)):T&&(T.d(1),T=null),(!J||c&1)&&N!==(N=f[0].entries+"")&&G($,N),(!J||c&1)&&S!==(S=f[0].win+"")&&G(B,S),(!J||c&1)&&Z!==(Z=f[0].lose+"")&&G(x,Z),f[0].latest?k?(k.p(f,c),c&1&&p(k,1)):(k=de(f),k.c(),p(k,1),k.m(R.parentNode,R)):k&&(te(),g(k,1,1,()=>{k=null}),ae()),f[0].data?v?(v.p(f,c),c&1&&p(v,1)):(v=be(f),v.c(),p(v,1),v.m(V.parentNode,V)):v&&(te(),g(v,1,1,()=>{v=null}),ae())},i(f){J||(p(w),p(i.$$.fragment,f),p(d.$$.fragment,f),p(_.$$.fragment,f),p(o.$$.fragment,f),p(C.$$.fragment,f),p(K.$$.fragment,f),p(O.$$.fragment,f),p(k),p(v),J=!0)},o(f){g(w),g(i.$$.fragment,f),g(d.$$.fragment,f),g(_.$$.fragment,f),g(o.$$.fragment,f),g(C.$$.fragment,f),g(K.$$.fragment,f),g(O.$$.fragment,f),g(k),g(v),J=!1},d(f){f&&m(e),f&&m(l),w&&w.d(f),f&&m(s),f&&m(a),M(i),T&&T.d(),M(d),M(_),M(o),M(C),M(K),M(O),f&&m(ee),k&&k.d(f),f&&m(R),v&&v.d(f),f&&m(V)}}}function qe(r,e,t){let{player:n}=e;return r.$$set=l=>{"player"in l&&t(0,n=l.player)},[n]}class Ue extends re{constructor(e){super();se(this,e,qe,Me,ie,{player:0})}}function Ye(r){let e;return{c(){e=U(r[0])},l(t){e=Y(t,r[0])},m(t,n){h(t,e,n)},p(t,n){n&1&&G(e,t[0])},i:ne,o:ne,d(t){t&&m(e)}}}function Be(r){let e,t;return e=new Se({props:{href:$e+"/player/detail/?p="+me(r[0]),text:r[0],condition:!!r[1].dic[r[0]],$$slots:{default:[Ce]},$$scope:{ctx:r}}}),{c(){D(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,l){L(e,n,l),t=!0},p(n,l){const s={};l&1&&(s.href=$e+"/player/detail/?p="+me(n[0])),l&1&&(s.text=n[0]),l&3&&(s.condition=!!n[1].dic[n[0]]),l&11&&(s.$$scope={dirty:l,ctx:n}),e.$set(s)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Ce(r){let e,t,n;e=new Ue({props:{player:r[1].dic[r[0]]}});const l=r[2].default,s=ke(l,r,r[3],null);return{c(){D(e.$$.fragment),t=j(),s&&s.c()},l(a){H(e.$$.fragment,a),t=A(a),s&&s.l(a)},m(a,i){L(e,a,i),h(a,t,i),s&&s.m(a,i),n=!0},p(a,i){const u={};i&3&&(u.player=a[1].dic[a[0]]),e.$set(u),s&&s.p&&(!n||i&8)&&ve(s,l,a,a[3],n?Pe(l,a[3],i,null):ye(a[3]),null)},i(a){n||(p(e.$$.fragment,a),p(s,a),n=!0)},o(a){g(e.$$.fragment,a),g(s,a),n=!1},d(a){M(e,a),a&&m(t),s&&s.d(a)}}}function Ge(r){let e,t,n,l;const s=[Be,Ye],a=[];function i(u,d){return u[1].dic[u[0]]?0:1}return e=i(r),t=a[e]=s[e](r),{c(){t.c(),n=X()},l(u){t.l(u),n=X()},m(u,d){a[e].m(u,d),h(u,n,d),l=!0},p(u,[d]){let P=e;e=i(u),e===P?a[e].p(u,d):(te(),g(a[P],1,1,()=>{a[P]=null}),ae(),t=a[e],t?t.p(u,d):(t=a[e]=s[e](u),t.c()),p(t,1),t.m(n.parentNode,n))},i(u){l||(p(t),l=!0)},o(u){g(t),l=!1},d(u){a[e].d(u),u&&m(n)}}}function Je(r,e,t){let n;we(r,Ee,i=>t(1,n=i));let{$$slots:l={},$$scope:s}=e,{name:a}=e;return r.$$set=i=>{"name"in i&&t(0,a=i.name),"$$scope"in i&&t(3,s=i.$$scope)},[a,n,l,s]}class Ie extends re{constructor(e){super();se(this,e,Je,Ge,ie,{name:0})}}export{Ie as P,fe as S};
