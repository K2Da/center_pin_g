import{L as et,S as G,i as I,s as J,t as H,v as R,j as M,Q as K,k as U,g as F,w as S,l as Y,R as P,f as T,x as L,p as D,n as j,d as $,A as N,M as V,e as A,c as B,a as O,b as W,F as E,o as X,h as at,O as lt,P as rt,K as nt,m as Z}from"../../../chunks/vendor-183b23ac.js";import{a as ft}from"../../../chunks/index_store-234d538c.js";import{D as st}from"../../../chunks/Date-c4b5d8a5.js";import{T as C}from"../../../chunks/T-f1f1b14a.js";import{T as mt}from"../../../chunks/TeamName-ac843192.js";import"../../../chunks/paths-28a87002.js";import"../../../chunks/util-f29b5fc7.js";const _t=et(ft,n=>{if(n==null)return[];const e={};for(const s of n.tournaments){const t=s.team_name;e[t]===void 0?e[t]={name:t,tournament_count:1,last_match_at:s.tournament_date,first_match_at:s.tournament_date}:(e[t].tournament_count+=1,e[t].last_match_at=Math.max(s.tournament_date,e[t].last_match_at),e[t].first_match_at=Math.min(s.tournament_date,e[t].first_match_at))}return Object.values(e).sort(s=>-s.last_match_at)});function ut(n){let e,s,t,r,u,c=(n[6]<10?Q:"")+"",b,p,h,k,m=(n[7]<10?Q:"")+"",w,o,y;return t=new C({props:{t:"\u5E74"}}),p=new C({props:{t:"\u6708"}}),o=new C({props:{t:"\u65E5"}}),{c(){e=H("'"),s=H(n[5]),R(t.$$.fragment),r=M(),u=new K,b=H(n[6]),R(p.$$.fragment),h=M(),k=new K,w=H(n[7]),R(o.$$.fragment),this.h()},l(a){e=F(a,"'"),s=F(a,n[5]),S(t.$$.fragment,a),r=Y(a),u=P(a),b=F(a,n[6]),S(p.$$.fragment,a),h=Y(a),k=P(a),w=F(a,n[7]),S(o.$$.fragment,a),this.h()},h(){u.a=b,k.a=w},m(a,_){T(a,e,_),T(a,s,_),L(t,a,_),T(a,r,_),u.m(c,a,_),T(a,b,_),L(p,a,_),T(a,h,_),k.m(m,a,_),T(a,w,_),L(o,a,_),y=!0},p:V,i(a){y||(D(t.$$.fragment,a),D(p.$$.fragment,a),D(o.$$.fragment,a),y=!0)},o(a){j(t.$$.fragment,a),j(p.$$.fragment,a),j(o.$$.fragment,a),y=!1},d(a){a&&$(e),a&&$(s),N(t,a),a&&$(r),a&&u.d(),a&&$(b),N(p,a),a&&$(h),a&&k.d(),a&&$(w),N(o,a)}}}function it(n){let e,s=(n[6]<10?Q:"")+"",t,r,u,c,b=(n[7]<10?Q:"")+"",p,h,k;return r=new C({props:{t:"\u6708"}}),h=new C({props:{t:"\u65E5"}}),{c(){e=new K,t=H(n[6]),R(r.$$.fragment),u=M(),c=new K,p=H(n[7]),R(h.$$.fragment),this.h()},l(m){e=P(m),t=F(m,n[6]),S(r.$$.fragment,m),u=Y(m),c=P(m),p=F(m,n[7]),S(h.$$.fragment,m),this.h()},h(){e.a=t,c.a=p},m(m,w){e.m(s,m,w),T(m,t,w),L(r,m,w),T(m,u,w),c.m(b,m,w),T(m,p,w),L(h,m,w),k=!0},p:V,i(m){k||(D(r.$$.fragment,m),D(h.$$.fragment,m),k=!0)},o(m){j(r.$$.fragment,m),j(h.$$.fragment,m),k=!1},d(m){m&&e.d(),m&&$(t),N(r,m),m&&$(u),m&&c.d(),m&&$(p),N(h,m)}}}function ot(n){let e,s,t,r,u,c=(n[3]<10?Q:"")+"",b,p,h,k,m=(n[4]<10?Q:"")+"",w,o,y,a,_,d,f;t=new C({props:{t:"\u5E74"}}),p=new C({props:{t:"\u6708"}}),o=new C({props:{t:"\u65E5"}});const v=[it,ut],i=[];function q(l,g){return l[0].getFullYear()===l[1].getFullYear()?0:1}return a=q(n),_=i[a]=v[a](n),{c(){e=H("'"),s=H(n[2]),R(t.$$.fragment),r=M(),u=new K,b=H(n[3]),R(p.$$.fragment),h=M(),k=new K,w=H(n[4]),R(o.$$.fragment),y=H(`
\u301C
`),_.c(),d=U(),this.h()},l(l){e=F(l,"'"),s=F(l,n[2]),S(t.$$.fragment,l),r=Y(l),u=P(l),b=F(l,n[3]),S(p.$$.fragment,l),h=Y(l),k=P(l),w=F(l,n[4]),S(o.$$.fragment,l),y=F(l,`
\u301C
`),_.l(l),d=U(),this.h()},h(){u.a=b,k.a=w},m(l,g){T(l,e,g),T(l,s,g),L(t,l,g),T(l,r,g),u.m(c,l,g),T(l,b,g),L(p,l,g),T(l,h,g),k.m(m,l,g),T(l,w,g),L(o,l,g),T(l,y,g),i[a].m(l,g),T(l,d,g),f=!0},p(l,[g]){_.p(l,g)},i(l){f||(D(t.$$.fragment,l),D(p.$$.fragment,l),D(o.$$.fragment,l),D(_),f=!0)},o(l){j(t.$$.fragment,l),j(p.$$.fragment,l),j(o.$$.fragment,l),j(_),f=!1},d(l){l&&$(e),l&&$(s),N(t,l),l&&$(r),l&&u.d(),l&&$(b),N(p,l),l&&$(h),l&&k.d(),l&&$(w),N(o,l),l&&$(y),i[a].d(l),l&&$(d)}}}const Q="&nbsp;";function $t(n,e,s){let{date1:t}=e,{date2:r}=e;const u=new Date(t),c=new Date(r),b=u.getFullYear()%100,p=u.getMonth()+1,h=u.getDate(),k=c.getFullYear()%100,m=c.getMonth()+1,w=c.getDate();return n.$$set=o=>{"date1"in o&&s(8,t=o.date1),"date2"in o&&s(9,r=o.date2)},[u,c,b,p,h,k,m,w,t,r]}class ct extends G{constructor(e){super();I(this,e,$t,ot,J,{date1:8,date2:9})}}function x(n,e,s){const t=n.slice();return t[1]=e[s],t}function pt(n){let e,s;return e=new ct({props:{date1:n[1].first_match_at,date2:n[1].last_match_at}}),{c(){R(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){L(e,t,r),s=!0},p(t,r){const u={};r&1&&(u.date1=t[1].first_match_at),r&1&&(u.date2=t[1].last_match_at),e.$set(u)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function ht(n){let e,s;return e=new st({props:{date:n[1].first_match_at}}),{c(){R(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){L(e,t,r),s=!0},p(t,r){const u={};r&1&&(u.date=t[1].first_match_at),e.$set(u)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function tt(n){let e,s,t,r,u,c,b,p,h,k=n[1].tournament_count+"",m,w,o;const y=[ht,pt],a=[];function _(d,f){return d[1].first_match_at===d[1].last_match_at?0:1}return t=_(n),r=a[t]=y[t](n),b=new mt({props:{name:n[1].name}}),{c(){e=A("tr"),s=A("td"),r.c(),u=M(),c=A("td"),R(b.$$.fragment),p=M(),h=A("td"),m=H(k),w=M(),this.h()},l(d){e=B(d,"TR",{});var f=O(e);s=B(f,"TD",{});var v=O(s);r.l(v),v.forEach($),u=Y(f),c=B(f,"TD",{class:!0});var i=O(c);S(b.$$.fragment,i),i.forEach($),p=Y(f),h=B(f,"TD",{class:!0});var q=O(h);m=F(q,k),q.forEach($),w=Y(f),f.forEach($),this.h()},h(){W(c,"class","tal nw"),W(h,"class","nw")},m(d,f){T(d,e,f),E(e,s),a[t].m(s,null),E(e,u),E(e,c),L(b,c,null),E(e,p),E(e,h),E(h,m),E(e,w),o=!0},p(d,f){let v=t;t=_(d),t===v?a[t].p(d,f):(Z(),j(a[v],1,1,()=>{a[v]=null}),X(),r=a[t],r?r.p(d,f):(r=a[t]=y[t](d),r.c()),D(r,1),r.m(s,null));const i={};f&1&&(i.name=d[1].name),b.$set(i),(!o||f&1)&&k!==(k=d[1].tournament_count+"")&&at(m,k)},i(d){o||(D(r),D(b.$$.fragment,d),o=!0)},o(d){j(r),j(b.$$.fragment,d),o=!1},d(d){d&&$(e),a[t].d(),N(b)}}}function bt(n){let e,s,t,r,u,c,b,p,h,k,m,w,o,y,a=n[0],_=[];for(let f=0;f<a.length;f+=1)_[f]=tt(x(n,a,f));const d=f=>j(_[f],1,1,()=>{_[f]=null});return{c(){e=A("h4"),s=H("\u30C1\u30FC\u30E0\u5C65\u6B74"),t=M(),r=A("table"),u=A("thead"),c=A("tr"),b=A("th"),p=M(),h=A("th"),k=M(),m=A("th"),w=M(),o=A("tbody");for(let f=0;f<_.length;f+=1)_[f].c();this.h()},l(f){e=B(f,"H4",{});var v=O(e);s=F(v,"\u30C1\u30FC\u30E0\u5C65\u6B74"),v.forEach($),t=Y(f),r=B(f,"TABLE",{});var i=O(r);u=B(i,"THEAD",{});var q=O(u);c=B(q,"TR",{});var l=O(c);b=B(l,"TH",{style:!0}),O(b).forEach($),p=Y(l),h=B(l,"TH",{}),O(h).forEach($),k=Y(l),m=B(l,"TH",{}),O(m).forEach($),l.forEach($),q.forEach($),w=Y(i),o=B(i,"TBODY",{});var g=O(o);for(let z=0;z<_.length;z+=1)_[z].l(g);g.forEach($),i.forEach($),this.h()},h(){lt(b,"width","30%")},m(f,v){T(f,e,v),E(e,s),T(f,t,v),T(f,r,v),E(r,u),E(u,c),E(c,b),E(c,p),E(c,h),E(c,k),E(c,m),E(r,w),E(r,o);for(let i=0;i<_.length;i+=1)_[i].m(o,null);y=!0},p(f,[v]){if(v&1){a=f[0];let i;for(i=0;i<a.length;i+=1){const q=x(f,a,i);_[i]?(_[i].p(q,v),D(_[i],1)):(_[i]=tt(q),_[i].c(),D(_[i],1),_[i].m(o,null))}for(Z(),i=a.length;i<_.length;i+=1)d(i);X()}},i(f){if(!y){for(let v=0;v<a.length;v+=1)D(_[v]);y=!0}},o(f){_=_.filter(Boolean);for(let v=0;v<_.length;v+=1)j(_[v]);y=!1},d(f){f&&$(e),f&&$(t),f&&$(r),rt(_,f)}}}function wt(n,e,s){let t;return nt(n,_t,r=>s(0,t=r)),[t]}class Et extends G{constructor(e){super();I(this,e,wt,bt,J,{})}}export{Et as default};