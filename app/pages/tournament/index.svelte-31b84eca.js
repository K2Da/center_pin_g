import{S as x,i as tt,s as et,k as P,f as K,e as d,t as S,j as T,c as m,a as p,g as j,d as i,l as D,b as Q,J as N,E as n,h as M,K as at,v as lt,w as nt,x as ot,p as rt,n as st,A as it,L as ct,u as ft}from"../../chunks/vendor-b0574c8c.js";import ht from"../Header.svelte-868c8319.js";import{b as U}from"../../chunks/paths-28a87002.js";import{a as V}from"../../chunks/index_store-71d543ca.js";function W(_,a,s){const t=_.slice();return t[1]=a[s],t}function X(_){let a,s=_[0].tournaments,t=[];for(let e=0;e<s.length;e+=1)t[e]=Z(W(_,s,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();a=P()},l(e){for(let c=0;c<t.length;c+=1)t[c].l(e);a=P()},m(e,c){for(let l=0;l<t.length;l+=1)t[l].m(e,c);K(e,a,c)},p(e,c){if(c&1){s=e[0].tournaments;let l;for(l=0;l<s.length;l+=1){const E=W(e,s,l);t[l]?t[l].p(E,c):(t[l]=Z(E),t[l].c(),t[l].m(a.parentNode,a))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(e){at(t,e),e&&i(a)}}}function Z(_){let a,s,t,e=_[1].name+"",c,l,E,h,b=new Date(_[1].date).toLocaleDateString()+"",w,R,g,$=_[1].team_count.toLocaleString()+"",A,k,H,L=_[1].player_count.toLocaleString()+"",y,q;return{c(){a=d("tr"),s=d("td"),t=d("a"),c=S(e),E=T(),h=d("td"),w=S(b),R=T(),g=d("td"),A=S($),k=T(),H=d("td"),y=S(L),q=T(),this.h()},l(u){a=m(u,"TR",{});var r=p(a);s=m(r,"TD",{style:!0});var C=p(s);t=m(C,"A",{href:!0});var f=p(t);c=j(f,e),f.forEach(i),C.forEach(i),E=D(r),h=m(r,"TD",{});var o=p(h);w=j(o,b),o.forEach(i),R=D(r),g=m(r,"TD",{});var v=p(g);A=j(v,$),v.forEach(i),k=D(r),H=m(r,"TD",{});var J=p(H);y=j(J,L),J.forEach(i),q=D(r),r.forEach(i),this.h()},h(){Q(t,"href",l=""+(U+"/tournament/detail?t="+_[1].key)),N(s,"text-align","left")},m(u,r){K(u,a,r),n(a,s),n(s,t),n(t,c),n(a,E),n(a,h),n(h,w),n(a,R),n(a,g),n(g,A),n(a,k),n(a,H),n(H,y),n(a,q)},p(u,r){r&1&&e!==(e=u[1].name+"")&&M(c,e),r&1&&l!==(l=""+(U+"/tournament/detail?t="+u[1].key))&&Q(t,"href",l),r&1&&b!==(b=new Date(u[1].date).toLocaleDateString()+"")&&M(w,b),r&1&&$!==($=u[1].team_count.toLocaleString()+"")&&M(A,$),r&1&&L!==(L=u[1].player_count.toLocaleString()+"")&&M(y,L)},d(u){u&&i(a)}}}function _t(_){let a,s,t,e,c,l,E,h,b,w,R,g,$,A,k,H,L,y,q,u,r,C;a=new ht({props:{title:"\u5927\u4F1A\u4E00\u89A7",type:"article",url:"tournament",description:"\u30DD\u30B1\u30E2\u30F3\u30E6\u30CA\u30A4\u30C8\u306E\u5927\u4F1A\u306E\u4E00\u89A7"}});let f=_[0].tournaments&&X(_);return{c(){lt(a.$$.fragment),s=T(),t=d("h2"),e=S("\u5927\u4F1A"),c=T(),l=d("table"),E=d("thead"),h=d("tr"),b=d("th"),w=S("\u5927\u4F1A\u540D"),R=T(),g=d("th"),$=S("\u958B\u50AC\u65E5"),A=T(),k=d("th"),H=S("\u53C2\u52A0\u30C1\u30FC\u30E0"),L=T(),y=d("th"),q=S("\u53C2\u52A0\u4EBA\u6570"),u=T(),r=d("tbody"),f&&f.c(),this.h()},l(o){nt(a.$$.fragment,o),s=D(o),t=m(o,"H2",{});var v=p(t);e=j(v,"\u5927\u4F1A"),v.forEach(i),c=D(o),l=m(o,"TABLE",{style:!0});var J=p(l);E=m(J,"THEAD",{});var O=p(E);h=m(O,"TR",{});var B=p(h);b=m(B,"TH",{style:!0});var Y=p(b);w=j(Y,"\u5927\u4F1A\u540D"),Y.forEach(i),R=D(B),g=m(B,"TH",{});var z=p(g);$=j(z,"\u958B\u50AC\u65E5"),z.forEach(i),A=D(B),k=m(B,"TH",{});var F=p(k);H=j(F,"\u53C2\u52A0\u30C1\u30FC\u30E0"),F.forEach(i),L=D(B),y=m(B,"TH",{});var G=p(y);q=j(G,"\u53C2\u52A0\u4EBA\u6570"),G.forEach(i),B.forEach(i),O.forEach(i),u=D(J),r=m(J,"TBODY",{});var I=p(r);f&&f.l(I),I.forEach(i),J.forEach(i),this.h()},h(){N(b,"text-align","left"),N(l,"table-layout","auto")},m(o,v){ot(a,o,v),K(o,s,v),K(o,t,v),n(t,e),K(o,c,v),K(o,l,v),n(l,E),n(E,h),n(h,b),n(b,w),n(h,R),n(h,g),n(g,$),n(h,A),n(h,k),n(k,H),n(h,L),n(h,y),n(y,q),n(l,u),n(l,r),f&&f.m(r,null),C=!0},p(o,[v]){o[0].tournaments?f?f.p(o,v):(f=X(o),f.c(),f.m(r,null)):f&&(f.d(1),f=null)},i(o){C||(rt(a.$$.fragment,o),C=!0)},o(o){st(a.$$.fragment,o),C=!1},d(o){it(a,o),o&&i(s),o&&i(t),o&&i(c),o&&i(l),f&&f.d()}}}function ut(_,a,s){let t;return ct(_,V,e=>s(0,t=e)),ft(async()=>{fetch("/center_pin_g/tournament/tournaments.json").then(e=>e.json()).then(e=>V.set(e)).catch(()=>[])}),[t]}class Et extends x{constructor(a){super();tt(this,a,ut,_t,et,{})}}export{Et as default};
