import{C as le,S as ke,i as ge,s as Ee,k as Q,f as H,n as O,o as V,p as S,d as _,K as X,T as Te,m as W,v as q,w as F,x as z,M as De,A as G,e as E,t as A,c as T,a as D,g as B,F as h,h as Y,j as K,l as M,b as C,P as Z,O as re}from"../../../chunks/vendor-183b23ac.js";import{P as we,s as ne}from"../../../chunks/PlayersLine-63009225.js";import{b as ae}from"../../../chunks/paths-28a87002.js";import{s as ye}from"../../../chunks/global_store-bb706853.js";import{D as je}from"../../../chunks/Date-c4b5d8a5.js";import Le from"../../Header.svelte-3bf176e4.js";import He from"../../PlaceHolder.svelte-cef2a10b.js";import{T as x}from"../../../chunks/T-f1f1b14a.js";import{T as oe}from"../../../chunks/TournamentResult-5f3cc637.js";const se=le(""),ee=le(null),fe=le("");function ie(u,e,r){const t=u.slice();return t[5]=e[r],t}function ue(u,e,r){const t=u.slice();return t[10]=e[r],t[12]=r,t}function ce(u,e,r){const t=u.slice();return t[5]=e[r],t}function _e(u,e,r){const t=u.slice();return t[13]=e[r],t}function Re(u){let e,r;return e=new He({}),{c(){q(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,c){z(e,t,c),r=!0},p:De,i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function Pe(u){let e,r,t,c=u[0].tournament.name+"",o,i,n,a,s,b,w,y,R,L;e=new Le({props:{title:u[0].tournament.name,type:"article",url:"tournament",description:""+(u[0].tournament.name+"\u306E\u6982\u8981")}});let g=u[0].data&&me(u);const k=[Be,Ae],j=[];function v(l,d){return l[1]?0:1}return w=v(u),y=j[w]=k[w](u),{c(){q(e.$$.fragment),r=K(),t=E("h2"),o=A(c),i=K(),g&&g.c(),n=K(),a=E("h3"),s=A("\u53C2\u52A0\u30C1\u30FC\u30E0"),b=K(),y.c(),R=Q()},l(l){F(e.$$.fragment,l),r=M(l),t=T(l,"H2",{});var d=D(t);o=B(d,c),d.forEach(_),i=M(l),g&&g.l(l),n=M(l),a=T(l,"H3",{});var p=D(a);s=B(p,"\u53C2\u52A0\u30C1\u30FC\u30E0"),p.forEach(_),b=M(l),y.l(l),R=Q()},m(l,d){z(e,l,d),H(l,r,d),H(l,t,d),h(t,o),H(l,i,d),g&&g.m(l,d),H(l,n,d),H(l,a,d),h(a,s),H(l,b,d),j[w].m(l,d),H(l,R,d),L=!0},p(l,d){const p={};d&1&&(p.title=l[0].tournament.name),d&1&&(p.description=""+(l[0].tournament.name+"\u306E\u6982\u8981")),e.$set(p),(!L||d&1)&&c!==(c=l[0].tournament.name+"")&&Y(o,c),l[0].data?g?(g.p(l,d),d&1&&S(g,1)):(g=me(l),g.c(),S(g,1),g.m(n.parentNode,n)):g&&(W(),O(g,1,1,()=>{g=null}),V());let m=w;w=v(l),w===m?j[w].p(l,d):(W(),O(j[m],1,1,()=>{j[m]=null}),V(),y=j[w],y?y.p(l,d):(y=j[w]=k[w](l),y.c()),S(y,1),y.m(R.parentNode,R))},i(l){L||(S(e.$$.fragment,l),S(g),S(y),L=!0)},o(l){O(e.$$.fragment,l),O(g),O(y),L=!1},d(l){G(e,l),l&&_(r),l&&_(t),l&&_(i),g&&g.d(l),l&&_(n),l&&_(a),l&&_(b),j[w].d(l),l&&_(R)}}}function me(u){let e,r,t,c,o,i,n,a,s=u[0].data.type+"",b,w,y,R,L,g;o=new je({props:{date:u[0].tournament.date}});let k=u[0].data.note&&he(u),j=u[0].data.urls,v=[];for(let l=0;l<j.length;l+=1)v[l]=de(_e(u,j,l));return{c(){e=E("dl"),r=E("dt"),t=A("\u958B\u50AC\u65E5"),c=E("dd"),q(o.$$.fragment),i=E("dt"),n=A("\u5F62\u5F0F"),a=E("dd"),b=A(s),k&&k.c(),w=E("dt"),y=A("\u95A2\u9023URL"),R=E("dd"),L=E("ul");for(let l=0;l<v.length;l+=1)v[l].c()},l(l){e=T(l,"DL",{});var d=D(e);r=T(d,"DT",{});var p=D(r);t=B(p,"\u958B\u50AC\u65E5"),p.forEach(_),c=T(d,"DD",{});var m=D(c);F(o.$$.fragment,m),m.forEach(_),i=T(d,"DT",{});var f=D(i);n=B(f,"\u5F62\u5F0F"),f.forEach(_),a=T(d,"DD",{});var $=D(a);b=B($,s),$.forEach(_),k&&k.l(d),w=T(d,"DT",{});var N=D(w);y=B(N,"\u95A2\u9023URL"),N.forEach(_),R=T(d,"DD",{});var P=D(R);L=T(P,"UL",{});var U=D(L);for(let I=0;I<v.length;I+=1)v[I].l(U);U.forEach(_),P.forEach(_),d.forEach(_)},m(l,d){H(l,e,d),h(e,r),h(r,t),h(e,c),z(o,c,null),h(e,i),h(i,n),h(e,a),h(a,b),k&&k.m(e,null),h(e,w),h(w,y),h(e,R),h(R,L);for(let p=0;p<v.length;p+=1)v[p].m(L,null);g=!0},p(l,d){const p={};if(d&1&&(p.date=l[0].tournament.date),o.$set(p),(!g||d&1)&&s!==(s=l[0].data.type+"")&&Y(b,s),l[0].data.note?k?k.p(l,d):(k=he(l),k.c(),k.m(e,w)):k&&(k.d(1),k=null),d&1){j=l[0].data.urls;let m;for(m=0;m<j.length;m+=1){const f=_e(l,j,m);v[m]?v[m].p(f,d):(v[m]=de(f),v[m].c(),v[m].m(L,null))}for(;m<v.length;m+=1)v[m].d(1);v.length=j.length}},i(l){g||(S(o.$$.fragment,l),g=!0)},o(l){O(o.$$.fragment,l),g=!1},d(l){l&&_(e),G(o),k&&k.d(),Z(v,l)}}}function he(u){let e,r,t,c=u[0].data.note+"",o;return{c(){e=E("dt"),r=A("\u5099\u8003"),t=E("dd"),o=A(c)},l(i){e=T(i,"DT",{});var n=D(e);r=B(n,"\u5099\u8003"),n.forEach(_),t=T(i,"DD",{});var a=D(t);o=B(a,c),a.forEach(_)},m(i,n){H(i,e,n),h(e,r),H(i,t,n),h(t,o)},p(i,n){n&1&&c!==(c=i[0].data.note+"")&&Y(o,c)},d(i){i&&_(e),i&&_(t)}}}function de(u){let e,r,t,c,o,i=u[13].title+"",n,a;return{c(){e=E("li"),r=E("i"),c=K(),o=E("a"),n=A(i),this.h()},l(s){e=T(s,"LI",{});var b=D(e);r=T(b,"I",{class:!0}),D(r).forEach(_),c=M(b),o=T(b,"A",{href:!0});var w=D(o);n=B(w,i),w.forEach(_),b.forEach(_),this.h()},h(){C(r,"class",t=u[13].icon),C(o,"href",a=u[13].url)},m(s,b){H(s,e,b),h(e,r),h(e,c),h(e,o),h(o,n)},p(s,b){b&1&&t!==(t=s[13].icon)&&C(r,"class",t),b&1&&i!==(i=s[13].title+"")&&Y(n,i),b&1&&a!==(a=s[13].url)&&C(o,"href",a)},d(s){s&&_(e)}}}function Ae(u){let e,r,t,c,o,i,n,a,s,b,w,y,R,L,g,k,j,v=u[0].teams,l=[];for(let p=0;p<v.length;p+=1)l[p]=be(ie(u,v,p));const d=p=>O(l[p],1,1,()=>{l[p]=null});return{c(){e=E("table"),r=E("thead"),t=E("tr"),c=E("th"),o=A("\u7D50\u679C"),i=K(),n=E("th"),a=A("\u30C1\u30FC\u30E0\u540D"),s=K(),b=E("th"),w=A("\u6226\u7E3E"),y=K(),R=E("th"),L=A("\u30E1\u30F3\u30D0\u30FC"),g=K(),k=E("tbody");for(let p=0;p<l.length;p+=1)l[p].c();this.h()},l(p){e=T(p,"TABLE",{});var m=D(e);r=T(m,"THEAD",{});var f=D(r);t=T(f,"TR",{});var $=D(t);c=T($,"TH",{});var N=D(c);o=B(N,"\u7D50\u679C"),N.forEach(_),i=M($),n=T($,"TH",{class:!0});var P=D(n);a=B(P,"\u30C1\u30FC\u30E0\u540D"),P.forEach(_),s=M($),b=T($,"TH",{});var U=D(b);w=B(U,"\u6226\u7E3E"),U.forEach(_),y=M($),R=T($,"TH",{class:!0});var I=D(R);L=B(I,"\u30E1\u30F3\u30D0\u30FC"),I.forEach(_),$.forEach(_),f.forEach(_),g=M(m),k=T(m,"TBODY",{});var J=D(k);for(let te=0;te<l.length;te+=1)l[te].l(J);J.forEach(_),m.forEach(_),this.h()},h(){C(n,"class","tal"),C(R,"class","tal")},m(p,m){H(p,e,m),h(e,r),h(r,t),h(t,c),h(c,o),h(t,i),h(t,n),h(n,a),h(t,s),h(t,b),h(b,w),h(t,y),h(t,R),h(R,L),h(e,g),h(e,k);for(let f=0;f<l.length;f+=1)l[f].m(k,null);j=!0},p(p,m){if(m&1){v=p[0].teams;let f;for(f=0;f<v.length;f+=1){const $=ie(p,v,f);l[f]?(l[f].p($,m),S(l[f],1)):(l[f]=be($),l[f].c(),S(l[f],1),l[f].m(k,null))}for(W(),f=v.length;f<l.length;f+=1)d(f);V()}},i(p){if(!j){for(let m=0;m<v.length;m+=1)S(l[m]);j=!0}},o(p){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)O(l[m]);j=!1},d(p){p&&_(e),Z(l,p)}}}function Be(u){let e,r,t,c=u[0].teams,o=[];for(let n=0;n<c.length;n+=1)o[n]=ve(ce(u,c,n));const i=n=>O(o[n],1,1,()=>{o[n]=null});return{c(){e=E("table"),r=E("tbody");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=T(n,"TABLE",{});var a=D(e);r=T(a,"TBODY",{class:!0});var s=D(r);for(let b=0;b<o.length;b+=1)o[b].l(s);s.forEach(_),a.forEach(_),this.h()},h(){C(r,"class","double")},m(n,a){H(n,e,a),h(e,r);for(let s=0;s<o.length;s+=1)o[s].m(r,null);t=!0},p(n,a){if(a&1){c=n[0].teams;let s;for(s=0;s<c.length;s+=1){const b=ce(n,c,s);o[s]?(o[s].p(b,a),S(o[s],1)):(o[s]=ve(b),o[s].c(),S(o[s],1),o[s].m(r,null))}for(W(),s=c.length;s<o.length;s+=1)i(s);V()}},i(n){if(!t){for(let a=0;a<c.length;a+=1)S(o[a]);t=!0}},o(n){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)O(o[a]);t=!1},d(n){n&&_(e),Z(o,n)}}}function Se(u){let e;return{c(){e=A(",")},l(r){e=B(r,",")},m(r,t){H(r,e,t)},d(r){r&&_(e)}}}function Ue(u){let e=u[10]+"",r;return{c(){r=A(e)},l(t){r=B(t,e)},m(t,c){H(t,r,c)},p(t,c){c&1&&e!==(e=t[10]+"")&&Y(r,e)},d(t){t&&_(r)}}}function Ne(u){let e,r=u[10]+"",t,c,o,i,n=u[0].ratings[u[10]]>1500&&pe(u);return{c(){e=E("a"),t=A(r),o=K(),n&&n.c(),i=Q(),this.h()},l(a){e=T(a,"A",{href:!0});var s=D(e);t=B(s,r),s.forEach(_),o=M(a),n&&n.l(a),i=Q(),this.h()},h(){C(e,"href",c=""+(ae+"/player/detail/?p="+ne(u[10])))},m(a,s){H(a,e,s),h(e,t),H(a,o,s),n&&n.m(a,s),H(a,i,s)},p(a,s){s&1&&r!==(r=a[10]+"")&&Y(t,r),s&1&&c!==(c=""+(ae+"/player/detail/?p="+ne(a[10])))&&C(e,"href",c),a[0].ratings[a[10]]>1500?n?n.p(a,s):(n=pe(a),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},d(a){a&&_(e),a&&_(o),n&&n.d(a),a&&_(i)}}}function pe(u){let e,r=u[0].ratings[u[10]].toLocaleString()+"",t,c;return{c(){e=A("("),t=A(r),c=A(")")},l(o){e=B(o,"("),t=B(o,r),c=B(o,")")},m(o,i){H(o,e,i),H(o,t,i),H(o,c,i)},p(o,i){i&1&&r!==(r=o[0].ratings[o[10]].toLocaleString()+"")&&Y(t,r)},d(o){o&&_(e),o&&_(t),o&&_(c)}}}function $e(u){let e,r,t=u[12]!==0&&Se();function c(n,a){return n[10]in n[0].ratings?Ne:Ue}let o=c(u),i=o(u);return{c(){t&&t.c(),e=K(),i.c(),r=Q()},l(n){t&&t.l(n),e=M(n),i.l(n),r=Q()},m(n,a){t&&t.m(n,a),H(n,e,a),i.m(n,a),H(n,r,a)},p(n,a){o===(o=c(n))&&i?i.p(n,a):(i.d(1),i=o(n),i&&(i.c(),i.m(r.parentNode,r)))},d(n){t&&t.d(n),n&&_(e),i.d(n),n&&_(r)}}}function be(u){let e,r,t,c,o,i=u[5].team_name+"",n,a,s,b=u[5].win+"",w,y,R,L=u[5].lose+"",g,k,j,v,l,d;t=new oe({props:{rank:u[5].team_rank}}),y=new x({props:{t:" \u52DD "}}),k=new x({props:{t:" \u6557"}});let p=u[5].members,m=[];for(let f=0;f<p.length;f+=1)m[f]=$e(ue(u,p,f));return{c(){e=E("tr"),r=E("td"),q(t.$$.fragment),c=K(),o=E("td"),n=A(i),a=K(),s=E("td"),w=A(b),q(y.$$.fragment),R=K(),g=A(L),q(k.$$.fragment),j=K(),v=E("td");for(let f=0;f<m.length;f+=1)m[f].c();l=K(),this.h()},l(f){e=T(f,"TR",{});var $=D(e);r=T($,"TD",{});var N=D(r);F(t.$$.fragment,N),N.forEach(_),c=M($),o=T($,"TD",{class:!0});var P=D(o);n=B(P,i),P.forEach(_),a=M($),s=T($,"TD",{style:!0});var U=D(s);w=B(U,b),F(y.$$.fragment,U),R=M(U),g=B(U,L),F(k.$$.fragment,U),U.forEach(_),j=M($),v=T($,"TD",{class:!0});var I=D(v);for(let J=0;J<m.length;J+=1)m[J].l(I);I.forEach(_),l=M($),$.forEach(_),this.h()},h(){C(o,"class","tal"),re(s,"text-align","center"),C(v,"class","tal")},m(f,$){H(f,e,$),h(e,r),z(t,r,null),h(e,c),h(e,o),h(o,n),h(e,a),h(e,s),h(s,w),z(y,s,null),h(s,R),h(s,g),z(k,s,null),h(e,j),h(e,v);for(let N=0;N<m.length;N+=1)m[N].m(v,null);h(e,l),d=!0},p(f,$){const N={};if($&1&&(N.rank=f[5].team_rank),t.$set(N),(!d||$&1)&&i!==(i=f[5].team_name+"")&&Y(n,i),(!d||$&1)&&b!==(b=f[5].win+"")&&Y(w,b),(!d||$&1)&&L!==(L=f[5].lose+"")&&Y(g,L),$&1){p=f[5].members;let P;for(P=0;P<p.length;P+=1){const U=ue(f,p,P);m[P]?m[P].p(U,$):(m[P]=$e(U),m[P].c(),m[P].m(v,null))}for(;P<m.length;P+=1)m[P].d(1);m.length=p.length}},i(f){d||(S(t.$$.fragment,f),S(y.$$.fragment,f),S(k.$$.fragment,f),d=!0)},o(f){O(t.$$.fragment,f),O(y.$$.fragment,f),O(k.$$.fragment,f),d=!1},d(f){f&&_(e),G(t),G(y),G(k),Z(m,f)}}}function ve(u){let e,r,t,c,o,i=u[5].team_name+"",n,a,s,b=u[5].win+"",w,y,R,L=u[5].lose+"",g,k,j,v,l,d,p,m;return t=new oe({props:{rank:u[5].team_rank}}),y=new x({props:{t:"\u52DD"}}),k=new x({props:{t:"\u6557"}}),d=new we({props:{players:u[5].members}}),{c(){e=E("tr"),r=E("td"),q(t.$$.fragment),c=K(),o=E("td"),n=A(i),a=K(),s=E("td"),w=A(b),q(y.$$.fragment),R=K(),g=A(L),q(k.$$.fragment),j=K(),v=E("tr"),l=E("td"),q(d.$$.fragment),p=K(),this.h()},l(f){e=T(f,"TR",{});var $=D(e);r=T($,"TD",{class:!0});var N=D(r);F(t.$$.fragment,N),N.forEach(_),c=M($),o=T($,"TD",{class:!0});var P=D(o);n=B(P,i),P.forEach(_),a=M($),s=T($,"TD",{class:!0,style:!0});var U=D(s);w=B(U,b),F(y.$$.fragment,U),R=M(U),g=B(U,L),F(k.$$.fragment,U),U.forEach(_),$.forEach(_),j=M(f),v=T(f,"TR",{});var I=D(v);l=T(I,"TD",{colspan:!0,class:!0,style:!0});var J=D(l);F(d.$$.fragment,J),J.forEach(_),p=M(I),I.forEach(_),this.h()},h(){C(r,"class","nw"),C(o,"class","tal"),C(s,"class","nw"),re(s,"text-align","center"),C(l,"colspan","3"),C(l,"class","tal"),re(l,"padding-left","2em")},m(f,$){H(f,e,$),h(e,r),z(t,r,null),h(e,c),h(e,o),h(o,n),h(e,a),h(e,s),h(s,w),z(y,s,null),h(s,R),h(s,g),z(k,s,null),H(f,j,$),H(f,v,$),h(v,l),z(d,l,null),h(v,p),m=!0},p(f,$){const N={};$&1&&(N.rank=f[5].team_rank),t.$set(N),(!m||$&1)&&i!==(i=f[5].team_name+"")&&Y(n,i),(!m||$&1)&&b!==(b=f[5].win+"")&&Y(w,b),(!m||$&1)&&L!==(L=f[5].lose+"")&&Y(g,L);const P={};$&1&&(P.players=f[5].members),d.$set(P)},i(f){m||(S(t.$$.fragment,f),S(y.$$.fragment,f),S(k.$$.fragment,f),S(d.$$.fragment,f),m=!0)},o(f){O(t.$$.fragment,f),O(y.$$.fragment,f),O(k.$$.fragment,f),O(d.$$.fragment,f),m=!1},d(f){f&&_(e),G(t),G(y),G(k),f&&_(j),f&&_(v),G(d)}}}function Ke(u){let e,r,t,c;const o=[Pe,Re],i=[];function n(a,s){return a[0]?0:1}return e=n(u),r=i[e]=o[e](u),{c(){r.c(),t=Q()},l(a){r.l(a),t=Q()},m(a,s){i[e].m(a,s),H(a,t,s),c=!0},p(a,[s]){let b=e;e=n(a),e===b?i[e].p(a,s):(W(),O(i[b],1,1,()=>{i[b]=null}),V(),r=i[e],r?r.p(a,s):(r=i[e]=o[e](a),r.c()),S(r,1),r.m(t.parentNode,t))},i(a){c||(S(r),c=!0)},o(a){O(r),c=!1},d(a){i[e].d(a),a&&_(t)}}}async function Qe(u){return fe.set(u.url.toString()),{status:200}}function Me(u,e,r){let t,c,o,i;X(u,fe,a=>r(2,t=a)),X(u,se,a=>r(3,c=a)),X(u,ee,a=>r(0,o=a)),X(u,ye,a=>r(1,i=a)),Te(()=>ee.set(null));async function n(){ee.set(null),se.set(new URLSearchParams(window.location.search).get("t")),fetch(`/center_pin_g/tournament/${c}.json`).then(a=>a.json()).then(a=>{ee.set(a)}).catch(()=>[])}return u.$$.update=()=>{u.$$.dirty&4&&n()},[o,i,t]}class Ve extends ke{constructor(e){super();ge(this,e,Me,Ke,Ee,{})}}export{Ve as default,Qe as load};
