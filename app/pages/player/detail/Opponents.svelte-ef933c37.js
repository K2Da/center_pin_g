import{N as Y,S as z,i as F,s as G,e as g,j as D,t as w,c as k,a as E,d as m,l as $,g as T,b as A,f as O,E as u,h as S,L,I as R,K as J}from"../../../chunks/vendor-eda31402.js";import{a as M}from"../../../chunks/index_store-b5403d1f.js";import{b as q}from"../../../chunks/paths-28a87002.js";import{s as x}from"../../../chunks/util-f29b5fc7.js";const P=Y(M,f=>{if(f==null)return[];const e={};for(const t of f.matches)for(const a of t.opponents_hash){const h=a[0],_=t.opponent_team_key===t.loser_key,r=`${t.tnmt_key}/${t.bracket}/${t.round}`;e[h]===void 0?e[h]={name:h,win:_?1:0,lose:_?0:1,matches:[r]}:(e[h].matches.push(r),_?e[h].win+=1:e[h].lose+=1)}const l=Object.values(e);return[...new Set(Object.values(e).map(t=>t.matches.join("	")))].map(t=>t.split("	")).sort((t,a)=>a.length-t.length).filter(t=>t.length>1).map(t=>{const a=l.filter(h=>h.matches.join("	")===t.join("	"));return{names:a.map(h=>h.name),win:a[0].win,lose:a[0].lose}}).sort((t,a)=>a.win-t.win)});function C(f,e,l){const t=f.slice();return t[1]=e[l],t}function I(f,e,l){const t=f.slice();return t[4]=e[l],t[6]=l,t}function Q(f){let e;return{c(){e=w(",")},l(l){e=T(l,",")},m(l,t){O(l,e,t)},d(l){l&&m(e)}}}function K(f){let e,l,t=f[4]+"",a,h,_=f[6]>0&&Q();return{c(){_&&_.c(),e=D(),l=g("a"),a=w(t),this.h()},l(r){_&&_.l(r),e=$(r),l=k(r,"A",{href:!0});var p=E(l);a=T(p,t),p.forEach(m),this.h()},h(){A(l,"href",h=""+(q+"/player/detail/?p="+x(f[4])))},m(r,p){_&&_.m(r,p),O(r,e,p),O(r,l,p),u(l,a)},p(r,p){p&1&&t!==(t=r[4]+"")&&S(a,t),p&1&&h!==(h=""+(q+"/player/detail/?p="+x(r[4])))&&A(l,"href",h)},d(r){_&&_.d(r),r&&m(e),r&&m(l)}}}function N(f){let e,l,t,a,h=f[1].win+"",_,r,p=f[1].lose+"",j,b,v,i=f[1].names,n=[];for(let o=0;o<i.length;o+=1)n[o]=K(I(f,i,o));return{c(){e=g("tr"),l=g("td");for(let o=0;o<n.length;o+=1)n[o].c();t=D(),a=g("td"),_=w(h),r=w("\u52DD"),j=w(p),b=w("\u6557"),v=D(),this.h()},l(o){e=k(o,"TR",{});var s=E(e);l=k(s,"TD",{class:!0});var c=E(l);for(let y=0;y<n.length;y+=1)n[y].l(c);c.forEach(m),t=$(s),a=k(s,"TD",{});var d=E(a);_=T(d,h),r=T(d,"\u52DD"),j=T(d,p),b=T(d,"\u6557"),d.forEach(m),v=$(s),s.forEach(m),this.h()},h(){A(l,"class","tal")},m(o,s){O(o,e,s),u(e,l);for(let c=0;c<n.length;c+=1)n[c].m(l,null);u(e,t),u(e,a),u(a,_),u(a,r),u(a,j),u(a,b),u(e,v)},p(o,s){if(s&1){i=o[1].names;let c;for(c=0;c<i.length;c+=1){const d=I(o,i,c);n[c]?n[c].p(d,s):(n[c]=K(d),n[c].c(),n[c].m(l,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=i.length}s&1&&h!==(h=o[1].win+"")&&S(_,h),s&1&&p!==(p=o[1].lose+"")&&S(j,p)},d(o){o&&m(e),L(n,o)}}}function U(f){let e,l,t,a,h,_,r,p,j,b,v=f[0],i=[];for(let n=0;n<v.length;n+=1)i[n]=N(C(f,v,n));return{c(){e=g("table"),l=g("thead"),t=g("tr"),a=g("th"),h=w("\u5BFE\u6226\u901A\u7B97(\u8A082\u6226\u4EE5\u4E0A)"),_=D(),r=g("th"),p=w("\u6226\u7E3E"),j=D(),b=g("tbody");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=k(n,"TABLE",{});var o=E(e);l=k(o,"THEAD",{});var s=E(l);t=k(s,"TR",{});var c=E(t);a=k(c,"TH",{class:!0});var d=E(a);h=T(d,"\u5BFE\u6226\u901A\u7B97(\u8A082\u6226\u4EE5\u4E0A)"),d.forEach(m),_=$(c),r=k(c,"TH",{});var y=E(r);p=T(y,"\u6226\u7E3E"),y.forEach(m),c.forEach(m),s.forEach(m),j=$(o),b=k(o,"TBODY",{});var B=E(b);for(let H=0;H<i.length;H+=1)i[H].l(B);B.forEach(m),o.forEach(m),this.h()},h(){A(a,"class","tal")},m(n,o){O(n,e,o),u(e,l),u(l,t),u(t,a),u(a,h),u(t,_),u(t,r),u(r,p),u(e,j),u(e,b);for(let s=0;s<i.length;s+=1)i[s].m(b,null)},p(n,[o]){if(o&1){v=n[0];let s;for(s=0;s<v.length;s+=1){const c=C(n,v,s);i[s]?i[s].p(c,o):(i[s]=N(c),i[s].c(),i[s].m(b,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=v.length}},i:R,o:R,d(n){n&&m(e),L(i,n)}}}function V(f,e,l){let t;return J(f,P,a=>l(0,t=a)),[t]}class et extends z{constructor(e){super();F(this,e,V,U,G,{})}}export{et as default};
