import{L as N,S as Q,i as U,s as V,e as g,t as R,v as q,j as L,c as y,a as v,g as x,w as C,d as _,l as O,b as S,f as F,F as m,x as K,h as Y,p as P,n as B,A as M,O as G,o as W,P as X,K as Z,m as tt}from"../../../chunks/vendor-183b23ac.js";import{a as et}from"../../../chunks/index_store-234d538c.js";import{P as nt}from"../../../chunks/PlayersLine-a592b65f.js";import{T as z}from"../../../chunks/T-f1f1b14a.js";import"../../../chunks/paths-28a87002.js";const st=N(et,i=>{if(i==null)return[];const a={},f=[];for(const r of i.tournaments){const l={key:r.tournament_key,win:0,lose:0};for(const e of i.matches)e.tnmt_key===r.tournament_key&&(e.opponent_team_key===e.loser_key?l.win+=1:l.lose+=1);for(const e of r.mate_list)a[e]===void 0?a[e]={name:e,tournaments:[r.tournament_key]}:a[e].tournaments.push(r.tournament_key);f.push(l)}const u=Object.values(a);return[...new Set(Object.values(a).map(r=>r.tournaments.join("	")))].map(r=>r.split("	")).sort((r,l)=>l.length-r.length).map(r=>{const l=f.filter(e=>r.includes(e.key));return{names:u.filter(e=>e.tournaments.sort().join("	")===r.sort().join("	")).map(e=>e.name),entry:r.length,win:l.reduce((e,p)=>e+p.win,0),lose:l.reduce((e,p)=>e+p.lose,0)}})});function I(i,a,f){const u=i.slice();return u[1]=a[f],u}function J(i){let a,f,u=i[1].entry+"",h,r,l,e,p=i[1].win+"",w,k,H,j=i[1].lose+"",b,$,E,s,T,n,o;return r=new z({props:{t:" \u5927\u4F1A"}}),k=new z({props:{t:" \u52DD"}}),$=new z({props:{t:" \u6557"}}),T=new nt({props:{players:i[1].names}}),{c(){a=g("tr"),f=g("td"),h=R(u),q(r.$$.fragment),l=L(),e=g("td"),w=R(p),q(k.$$.fragment),H=L(),b=R(j),q($.$$.fragment),E=L(),s=g("td"),q(T.$$.fragment),n=L(),this.h()},l(t){a=y(t,"TR",{});var c=v(a);f=y(c,"TD",{class:!0});var d=v(f);h=x(d,u),C(r.$$.fragment,d),d.forEach(_),l=O(c),e=y(c,"TD",{class:!0});var D=v(e);w=x(D,p),C(k.$$.fragment,D),H=O(D),b=x(D,j),C($.$$.fragment,D),D.forEach(_),E=O(c),s=y(c,"TD",{class:!0});var A=v(s);C(T.$$.fragment,A),A.forEach(_),n=O(c),c.forEach(_),this.h()},h(){S(f,"class","nw"),S(e,"class","nw"),S(s,"class","tal")},m(t,c){F(t,a,c),m(a,f),m(f,h),K(r,f,null),m(a,l),m(a,e),m(e,w),K(k,e,null),m(e,H),m(e,b),K($,e,null),m(a,E),m(a,s),K(T,s,null),m(a,n),o=!0},p(t,c){(!o||c&1)&&u!==(u=t[1].entry+"")&&Y(h,u),(!o||c&1)&&p!==(p=t[1].win+"")&&Y(w,p),(!o||c&1)&&j!==(j=t[1].lose+"")&&Y(b,j);const d={};c&1&&(d.players=t[1].names),T.$set(d)},i(t){o||(P(r.$$.fragment,t),P(k.$$.fragment,t),P($.$$.fragment,t),P(T.$$.fragment,t),o=!0)},o(t){B(r.$$.fragment,t),B(k.$$.fragment,t),B($.$$.fragment,t),B(T.$$.fragment,t),o=!1},d(t){t&&_(a),M(r),M(k),M($),M(T)}}}function at(i){let a,f,u,h,r,l,e,p,w,k,H,j,b,$,E=i[0],s=[];for(let n=0;n<E.length;n+=1)s[n]=J(I(i,E,n));const T=n=>B(s[n],1,1,()=>{s[n]=null});return{c(){a=g("h4"),f=R("\u30C1\u30FC\u30E0\u30E1\u30A4\u30C8"),u=L(),h=g("table"),r=g("thead"),l=g("tr"),e=g("th"),p=L(),w=g("th"),k=L(),H=g("th"),j=L(),b=g("tbody");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){a=y(n,"H4",{});var o=v(a);f=x(o,"\u30C1\u30FC\u30E0\u30E1\u30A4\u30C8"),o.forEach(_),u=O(n),h=y(n,"TABLE",{});var t=v(h);r=y(t,"THEAD",{});var c=v(r);l=y(c,"TR",{});var d=v(l);e=y(d,"TH",{class:!0,style:!0}),v(e).forEach(_),p=O(d),w=y(d,"TH",{class:!0,style:!0}),v(w).forEach(_),k=O(d),H=y(d,"TH",{}),v(H).forEach(_),d.forEach(_),c.forEach(_),j=O(t),b=y(t,"TBODY",{});var D=v(b);for(let A=0;A<s.length;A+=1)s[A].l(D);D.forEach(_),t.forEach(_),this.h()},h(){S(e,"class","nw"),G(e,"width","5em"),S(w,"class","nw"),G(w,"width","7em")},m(n,o){F(n,a,o),m(a,f),F(n,u,o),F(n,h,o),m(h,r),m(r,l),m(l,e),m(l,p),m(l,w),m(l,k),m(l,H),m(h,j),m(h,b);for(let t=0;t<s.length;t+=1)s[t].m(b,null);$=!0},p(n,[o]){if(o&1){E=n[0];let t;for(t=0;t<E.length;t+=1){const c=I(n,E,t);s[t]?(s[t].p(c,o),P(s[t],1)):(s[t]=J(c),s[t].c(),P(s[t],1),s[t].m(b,null))}for(tt(),t=E.length;t<s.length;t+=1)T(t);W()}},i(n){if(!$){for(let o=0;o<E.length;o+=1)P(s[o]);$=!0}},o(n){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)B(s[o]);$=!1},d(n){n&&_(a),n&&_(u),n&&_(h),X(s,n)}}}function rt(i,a,f){let u;return Z(i,st,h=>f(0,u=h)),[u]}class ut extends Q{constructor(a){super();U(this,a,rt,at,V,{})}}export{ut as default};
