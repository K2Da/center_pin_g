import{S as X,i as Y,s as Z,e as G,t as k,c as J,a as g,h as v,d as a,b as d,g as $,H as y,I as h,j as E,O as M,w as S,k as z,x as j,m as C,y as q,q as p,o as c,B as O,n as K,p as L,l as P}from"./vendor-30de17eb.js";import{T as R}from"./PopUpA-2729ff34.js";function x(u){let e,s,f,n,m;return{c(){e=G("button"),s=k(u[2]),this.h()},l(l){e=J(l,"BUTTON",{class:!0});var i=g(e);s=v(i,u[2]),i.forEach(a),this.h()},h(){e.disabled=f=u[1]===u[0],d(e,"class","svelte-1yzmvj6")},m(l,i){$(l,e,i),y(e,s),n||(m=h(e,"click",u[3]),n=!0)},p(l,[i]){i&4&&E(s,l[2]),i&3&&f!==(f=l[1]===l[0])&&(e.disabled=f)},i:M,o:M,d(l){l&&a(e),n=!1,m()}}}function ee(u,e,s){let{current_mode:f}=e,{mode:n}=e,{name:m}=e;const l=()=>{s(0,f=n)};return u.$$set=i=>{"current_mode"in i&&s(0,f=i.current_mode),"mode"in i&&s(1,n=i.mode),"name"in i&&s(2,m=i.name)},[f,n,m,l]}class re extends X{constructor(e){super();Y(this,e,ee,x,Z,{current_mode:0,mode:1,name:2})}}function Q(u){let e=u[0].tournament_count+"",s,f,n,m,l,i,b,w,D,H=u[0].win+"",I,T,F,U=u[0].lose+"",A,B,N;f=new R({props:{t:" \u5927\u4F1A\u51FA\u5834"}});let _=u[0].top_1>0&&V(u),o=u[0].top_4>0&&W(u);return T=new R({props:{t:"\u52DD"}}),B=new R({props:{t:"\u6557"}}),{c(){s=k(e),S(f.$$.fragment),n=z(),m=G("br"),l=z(),_&&_.c(),i=z(),o&&o.c(),b=z(),w=G("br"),D=z(),I=k(H),S(T.$$.fragment),F=z(),A=k(U),S(B.$$.fragment)},l(t){s=v(t,e),j(f.$$.fragment,t),n=C(t),m=J(t,"BR",{}),l=C(t),_&&_.l(t),i=C(t),o&&o.l(t),b=C(t),w=J(t,"BR",{}),D=C(t),I=v(t,H),j(T.$$.fragment,t),F=C(t),A=v(t,U),j(B.$$.fragment,t)},m(t,r){$(t,s,r),q(f,t,r),$(t,n,r),$(t,m,r),$(t,l,r),_&&_.m(t,r),$(t,i,r),o&&o.m(t,r),$(t,b,r),$(t,w,r),$(t,D,r),$(t,I,r),q(T,t,r),$(t,F,r),$(t,A,r),q(B,t,r),N=!0},p(t,r){(!N||r&1)&&e!==(e=t[0].tournament_count+"")&&E(s,e),t[0].top_1>0?_?(_.p(t,r),r&1&&p(_,1)):(_=V(t),_.c(),p(_,1),_.m(i.parentNode,i)):_&&(K(),c(_,1,1,()=>{_=null}),L()),t[0].top_4>0?o?(o.p(t,r),r&1&&p(o,1)):(o=W(t),o.c(),p(o,1),o.m(b.parentNode,b)):o&&(K(),c(o,1,1,()=>{o=null}),L()),(!N||r&1)&&H!==(H=t[0].win+"")&&E(I,H),(!N||r&1)&&U!==(U=t[0].lose+"")&&E(A,U)},i(t){N||(p(f.$$.fragment,t),p(_),p(o),p(T.$$.fragment,t),p(B.$$.fragment,t),N=!0)},o(t){c(f.$$.fragment,t),c(_),c(o),c(T.$$.fragment,t),c(B.$$.fragment,t),N=!1},d(t){t&&a(s),O(f,t),t&&a(n),t&&a(m),t&&a(l),_&&_.d(t),t&&a(i),o&&o.d(t),t&&a(b),t&&a(w),t&&a(D),t&&a(I),O(T,t),t&&a(F),t&&a(A),O(B,t)}}}function V(u){let e,s=u[0].top_1+"",f,n,m;return e=new R({props:{$$slots:{default:[te]},$$scope:{ctx:u}}}),n=new R({props:{$$slots:{default:[fe]},$$scope:{ctx:u}}}),{c(){S(e.$$.fragment),f=k(s),S(n.$$.fragment)},l(l){j(e.$$.fragment,l),f=v(l,s),j(n.$$.fragment,l)},m(l,i){q(e,l,i),$(l,f,i),q(n,l,i),m=!0},p(l,i){const b={};i&2&&(b.$$scope={dirty:i,ctx:l}),e.$set(b),(!m||i&1)&&s!==(s=l[0].top_1+"")&&E(f,s);const w={};i&2&&(w.$$scope={dirty:i,ctx:l}),n.$set(w)},i(l){m||(p(e.$$.fragment,l),p(n.$$.fragment,l),m=!0)},o(l){c(e.$$.fragment,l),c(n.$$.fragment,l),m=!1},d(l){O(e,l),l&&a(f),O(n,l)}}}function te(u){let e;return{c(){e=k("\u{1F947} ")},l(s){e=v(s,"\u{1F947} ")},m(s,f){$(s,e,f)},d(s){s&&a(e)}}}function fe(u){let e;return{c(){e=k("\u56DE")},l(s){e=v(s,"\u56DE")},m(s,f){$(s,e,f)},d(s){s&&a(e)}}}function W(u){let e,s=u[0].top_4+"",f,n,m;return e=new R({props:{$$slots:{default:[le]},$$scope:{ctx:u}}}),n=new R({props:{$$slots:{default:[se]},$$scope:{ctx:u}}}),{c(){S(e.$$.fragment),f=k(s),S(n.$$.fragment)},l(l){j(e.$$.fragment,l),f=v(l,s),j(n.$$.fragment,l)},m(l,i){q(e,l,i),$(l,f,i),q(n,l,i),m=!0},p(l,i){const b={};i&2&&(b.$$scope={dirty:i,ctx:l}),e.$set(b),(!m||i&1)&&s!==(s=l[0].top_4+"")&&E(f,s);const w={};i&2&&(w.$$scope={dirty:i,ctx:l}),n.$set(w)},i(l){m||(p(e.$$.fragment,l),p(n.$$.fragment,l),m=!0)},o(l){c(e.$$.fragment,l),c(n.$$.fragment,l),m=!1},d(l){O(e,l),l&&a(f),O(n,l)}}}function le(u){let e;return{c(){e=k("Top4 ")},l(s){e=v(s,"Top4 ")},m(s,f){$(s,e,f)},d(s){s&&a(e)}}}function se(u){let e;return{c(){e=k("\u56DE")},l(s){e=v(s,"\u56DE")},m(s,f){$(s,e,f)},d(s){s&&a(e)}}}function ne(u){let e,s,f=(u[0].win!==0||u[0].lose!==0)&&Q(u);return{c(){f&&f.c(),e=P()},l(n){f&&f.l(n),e=P()},m(n,m){f&&f.m(n,m),$(n,e,m),s=!0},p(n,[m]){n[0].win!==0||n[0].lose!==0?f?(f.p(n,m),m&1&&p(f,1)):(f=Q(n),f.c(),p(f,1),f.m(e.parentNode,e)):f&&(K(),c(f,1,1,()=>{f=null}),L())},i(n){s||(p(f),s=!0)},o(n){c(f),s=!1},d(n){f&&f.d(n),n&&a(e)}}}function ie(u,e,s){let{stats:f}=e;return u.$$set=n=>{"stats"in n&&s(0,f=n.stats)},[f]}class _e extends X{constructor(e){super();Y(this,e,ie,ne,Z,{stats:0})}}export{_e as T,re as a};
