import{L as I,S as J,i as M,s as N,e as $,t as x,j as k,v as A,c as g,a as v,g as B,l as E,w as S,d as _,b as R,f as L,F as h,x as q,h as K,p as D,n as H,A as C,O as Q,o as U,P as V,K as W,m as X}from"../../../chunks/vendor-183b23ac.js";import{a as Z}from"../../../chunks/index_store-234d538c.js";import{T as Y}from"../../../chunks/T-f1f1b14a.js";import{P as tt}from"../../../chunks/PlayersLine-a592b65f.js";import"../../../chunks/paths-28a87002.js";const et=I(Z,m=>{if(m==null)return[];const l={};for(const n of m.matches)for(const o of n.opponents_list){const i=n.opponent_team_key===n.loser_key,c=`${n.tnmt_key}/${n.bracket}/${n.round}`;l[o]===void 0?l[o]={name:o,win:i?1:0,lose:i?0:1,matches:[c]}:(l[o].matches.push(c),i?l[o].win+=1:l[o].lose+=1)}const r=Object.values(l);return[...new Set(Object.values(l).map(n=>n.matches.join("	")))].map(n=>n.split("	")).sort((n,o)=>o.length-n.length).filter(n=>n.length>1).map(n=>{const o=r.filter(i=>i.matches.join("	")===n.join("	"));return{names:o.map(i=>i.name),win:o[0].win,lose:o[0].lose}}).sort((n,o)=>o.win-n.win)});function z(m,l,r){const n=m.slice();return n[1]=l[r],n}function G(m){let l,r,n=m[1].win+"",o,i,c,d,b=m[1].lose+"",w,j,p,y,u,a,O,t;return c=new Y({props:{t:"\u52DD"}}),p=new Y({props:{t:"\u6557"}}),a=new tt({props:{players:m[1].names}}),{c(){l=$("tr"),r=$("td"),o=x(n),i=k(),A(c.$$.fragment),d=k(),w=x(b),j=k(),A(p.$$.fragment),y=k(),u=$("td"),A(a.$$.fragment),O=k(),this.h()},l(s){l=g(s,"TR",{});var e=v(l);r=g(e,"TD",{class:!0});var f=v(r);o=B(f,n),i=E(f),S(c.$$.fragment,f),d=E(f),w=B(f,b),j=E(f),S(p.$$.fragment,f),f.forEach(_),y=E(e),u=g(e,"TD",{class:!0});var T=v(u);S(a.$$.fragment,T),T.forEach(_),O=E(e),e.forEach(_),this.h()},h(){R(r,"class","nw"),R(u,"class","tal")},m(s,e){L(s,l,e),h(l,r),h(r,o),h(r,i),q(c,r,null),h(r,d),h(r,w),h(r,j),q(p,r,null),h(l,y),h(l,u),q(a,u,null),h(l,O),t=!0},p(s,e){(!t||e&1)&&n!==(n=s[1].win+"")&&K(o,n),(!t||e&1)&&b!==(b=s[1].lose+"")&&K(w,b);const f={};e&1&&(f.players=s[1].names),a.$set(f)},i(s){t||(D(c.$$.fragment,s),D(p.$$.fragment,s),D(a.$$.fragment,s),t=!0)},o(s){H(c.$$.fragment,s),H(p.$$.fragment,s),H(a.$$.fragment,s),t=!1},d(s){s&&_(l),C(c),C(p),C(a)}}}function nt(m){let l,r,n,o,i,c,d,b,w,j,p,y,u=m[0],a=[];for(let t=0;t<u.length;t+=1)a[t]=G(z(m,u,t));const O=t=>H(a[t],1,1,()=>{a[t]=null});return{c(){l=$("h4"),r=x("\u8A66\u5408\u306E\u591A\u3044\u30D7\u30EC\u30A4\u30E4\u30FC(2\u6226\u4EE5\u4E0A)"),n=k(),o=$("table"),i=$("thead"),c=$("tr"),d=$("th"),b=k(),w=$("th"),j=k(),p=$("tbody");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){l=g(t,"H4",{});var s=v(l);r=B(s,"\u8A66\u5408\u306E\u591A\u3044\u30D7\u30EC\u30A4\u30E4\u30FC(2\u6226\u4EE5\u4E0A)"),s.forEach(_),n=E(t),o=g(t,"TABLE",{});var e=v(o);i=g(e,"THEAD",{});var f=v(i);c=g(f,"TR",{});var T=v(c);d=g(T,"TH",{class:!0,style:!0}),v(d).forEach(_),b=E(T),w=g(T,"TH",{}),v(w).forEach(_),T.forEach(_),f.forEach(_),j=E(e),p=g(e,"TBODY",{});var F=v(p);for(let P=0;P<a.length;P+=1)a[P].l(F);F.forEach(_),e.forEach(_),this.h()},h(){R(d,"class","nw"),Q(d,"width","7em")},m(t,s){L(t,l,s),h(l,r),L(t,n,s),L(t,o,s),h(o,i),h(i,c),h(c,d),h(c,b),h(c,w),h(o,j),h(o,p);for(let e=0;e<a.length;e+=1)a[e].m(p,null);y=!0},p(t,[s]){if(s&1){u=t[0];let e;for(e=0;e<u.length;e+=1){const f=z(t,u,e);a[e]?(a[e].p(f,s),D(a[e],1)):(a[e]=G(f),a[e].c(),D(a[e],1),a[e].m(p,null))}for(X(),e=u.length;e<a.length;e+=1)O(e);U()}},i(t){if(!y){for(let s=0;s<u.length;s+=1)D(a[s]);y=!0}},o(t){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)H(a[s]);y=!1},d(t){t&&_(l),t&&_(n),t&&_(o),V(a,t)}}}function st(m,l,r){let n;return W(m,et,o=>r(0,n=o)),[n]}class it extends J{constructor(l){super();M(this,l,st,nt,N,{})}}export{it as default};
