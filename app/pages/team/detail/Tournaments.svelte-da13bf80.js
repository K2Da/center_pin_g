import{S as bt,i as kt,s as vt,k as at,f as J,n as A,o as nt,p as y,d as i,K as st,m as rt,e as g,t as z,j as w,v as Q,c as b,a as k,g as G,l as j,w as U,b as L,F as r,x as V,h as ot,A as W,P as ft,O as Tt}from"../../../chunks/vendor-183b23ac.js";import{a as Et}from"../../../chunks/index_store-bc6b09eb.js";import{s as yt}from"../../../chunks/global_store-bb706853.js";import{T as ut}from"../../../chunks/T-f1f1b14a.js";import{T as ct}from"../../../chunks/TournamentResult-5f3cc637.js";import{D as mt}from"../../../chunks/Date-c4b5d8a5.js";import{P as it}from"../../../chunks/PlayersLine-a41c5c62.js";import{T as _t}from"../../../chunks/TournamentName-01e83cb8.js";import"../../../chunks/paths-28a87002.js";import"../../../chunks/util-f29b5fc7.js";function ht($,t,n){const e=$.slice();return e[2]=t[n],e[4]=n,e}function $t($,t,n){const e=$.slice();return e[2]=t[n],e[4]=n,e}function dt($){let t,n,e,u;const o=[wt,Dt],T=[];function l(s,f){return s[1]?0:1}return t=l($),n=T[t]=o[t]($),{c(){n.c(),e=at()},l(s){n.l(s),e=at()},m(s,f){T[t].m(s,f),J(s,e,f),u=!0},p(s,f){let c=t;t=l(s),t===c?T[t].p(s,f):(rt(),A(T[c],1,1,()=>{T[c]=null}),nt(),n=T[t],n?n.p(s,f):(n=T[t]=o[t](s),n.c()),y(n,1),n.m(e.parentNode,e))},i(s){u||(y(n),u=!0)},o(s){A(n),u=!1},d(s){T[t].d(s),s&&i(e)}}}function Dt($){let t,n,e,u,o,T,l,s,f,c,q,H,R,P,B,O,C,F,N,E,Y,M,h,d=$[0].tournaments,_=[];for(let m=0;m<d.length;m+=1)_[m]=pt(ht($,d,m));const S=m=>A(_[m],1,1,()=>{_[m]=null});return{c(){t=g("table"),n=g("thead"),e=g("tr"),u=g("th"),o=z("#"),T=w(),l=g("th"),s=z("\u958B\u50AC\u65E5"),f=w(),c=g("th"),q=z("\u5927\u4F1A\u540D"),H=w(),R=g("th"),P=z("\u7D50\u679C"),B=w(),O=g("th"),C=z("\u767B\u9332\u30C1\u30FC\u30E0\u540D"),F=w(),N=g("th"),E=z("\u30E1\u30F3\u30D0\u30FC"),Y=w(),M=g("tbody");for(let m=0;m<_.length;m+=1)_[m].c();this.h()},l(m){t=b(m,"TABLE",{});var v=k(t);n=b(v,"THEAD",{});var p=k(n);e=b(p,"TR",{});var a=k(e);u=b(a,"TH",{class:!0});var D=k(u);o=G(D,"#"),D.forEach(i),T=j(a),l=b(a,"TH",{});var I=k(l);s=G(I,"\u958B\u50AC\u65E5"),I.forEach(i),f=j(a),c=b(a,"TH",{class:!0});var X=k(c);q=G(X,"\u5927\u4F1A\u540D"),X.forEach(i),H=j(a),R=b(a,"TH",{});var K=k(R);P=G(K,"\u7D50\u679C"),K.forEach(i),B=j(a),O=b(a,"TH",{class:!0});var Z=k(O);C=G(Z,"\u767B\u9332\u30C1\u30FC\u30E0\u540D"),Z.forEach(i),F=j(a),N=b(a,"TH",{class:!0});var x=k(N);E=G(x,"\u30E1\u30F3\u30D0\u30FC"),x.forEach(i),a.forEach(i),p.forEach(i),Y=j(v),M=b(v,"TBODY",{});var tt=k(M);for(let et=0;et<_.length;et+=1)_[et].l(tt);tt.forEach(i),v.forEach(i),this.h()},h(){L(u,"class","tar"),L(c,"class","tal"),L(O,"class","tal"),L(N,"class","tal")},m(m,v){J(m,t,v),r(t,n),r(n,e),r(e,u),r(u,o),r(e,T),r(e,l),r(l,s),r(e,f),r(e,c),r(c,q),r(e,H),r(e,R),r(R,P),r(e,B),r(e,O),r(O,C),r(e,F),r(e,N),r(N,E),r(t,Y),r(t,M);for(let p=0;p<_.length;p+=1)_[p].m(M,null);h=!0},p(m,v){if(v&1){d=m[0].tournaments;let p;for(p=0;p<d.length;p+=1){const a=ht(m,d,p);_[p]?(_[p].p(a,v),y(_[p],1)):(_[p]=pt(a),_[p].c(),y(_[p],1),_[p].m(M,null))}for(rt(),p=d.length;p<_.length;p+=1)S(p);nt()}},i(m){if(!h){for(let v=0;v<d.length;v+=1)y(_[v]);h=!0}},o(m){_=_.filter(Boolean);for(let v=0;v<_.length;v+=1)A(_[v]);h=!1},d(m){m&&i(t),ft(_,m)}}}function wt($){let t,n,e,u=$[0].tournaments,o=[];for(let l=0;l<u.length;l+=1)o[l]=gt($t($,u,l));const T=l=>A(o[l],1,1,()=>{o[l]=null});return{c(){t=g("table"),n=g("tbody");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){t=b(l,"TABLE",{});var s=k(t);n=b(s,"TBODY",{class:!0});var f=k(n);for(let c=0;c<o.length;c+=1)o[c].l(f);f.forEach(i),s.forEach(i),this.h()},h(){L(n,"class","triple")},m(l,s){J(l,t,s),r(t,n);for(let f=0;f<o.length;f+=1)o[f].m(n,null);e=!0},p(l,s){if(s&1){u=l[0].tournaments;let f;for(f=0;f<u.length;f+=1){const c=$t(l,u,f);o[f]?(o[f].p(c,s),y(o[f],1)):(o[f]=gt(c),o[f].c(),y(o[f],1),o[f].m(n,null))}for(rt(),f=u.length;f<o.length;f+=1)T(f);nt()}},i(l){if(!e){for(let s=0;s<u.length;s+=1)y(o[s]);e=!0}},o(l){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)A(o[s]);e=!1},d(l){l&&i(t),ft(o,l)}}}function pt($){let t,n,e=$[4]+1+"",u,o,T,l,s,f,c,q,H,R,P,B,O=$[2].name+"",C,F,N,E,Y,M;return l=new mt({props:{date:$[2].tournament_date}}),c=new _t({props:{name:$[2].tournament_name,key:$[2].tournament_key}}),R=new ct({props:{rank:$[2].result}}),E=new it({props:{players:$[2].player_list}}),{c(){t=g("tr"),n=g("td"),u=z(e),o=w(),T=g("td"),Q(l.$$.fragment),s=w(),f=g("td"),Q(c.$$.fragment),q=w(),H=g("td"),Q(R.$$.fragment),P=w(),B=g("td"),C=z(O),F=w(),N=g("td"),Q(E.$$.fragment),Y=w(),this.h()},l(h){t=b(h,"TR",{});var d=k(t);n=b(d,"TD",{class:!0});var _=k(n);u=G(_,e),_.forEach(i),o=j(d),T=b(d,"TD",{});var S=k(T);U(l.$$.fragment,S),S.forEach(i),s=j(d),f=b(d,"TD",{class:!0});var m=k(f);U(c.$$.fragment,m),m.forEach(i),q=j(d),H=b(d,"TD",{});var v=k(H);U(R.$$.fragment,v),v.forEach(i),P=j(d),B=b(d,"TD",{class:!0});var p=k(B);C=G(p,O),p.forEach(i),F=j(d),N=b(d,"TD",{class:!0});var a=k(N);U(E.$$.fragment,a),a.forEach(i),Y=j(d),d.forEach(i),this.h()},h(){L(n,"class","tar"),L(f,"class","tal"),L(B,"class","tal"),L(N,"class","tal")},m(h,d){J(h,t,d),r(t,n),r(n,u),r(t,o),r(t,T),V(l,T,null),r(t,s),r(t,f),V(c,f,null),r(t,q),r(t,H),V(R,H,null),r(t,P),r(t,B),r(B,C),r(t,F),r(t,N),V(E,N,null),r(t,Y),M=!0},p(h,d){const _={};d&1&&(_.date=h[2].tournament_date),l.$set(_);const S={};d&1&&(S.name=h[2].tournament_name),d&1&&(S.key=h[2].tournament_key),c.$set(S);const m={};d&1&&(m.rank=h[2].result),R.$set(m),(!M||d&1)&&O!==(O=h[2].name+"")&&ot(C,O);const v={};d&1&&(v.players=h[2].player_list),E.$set(v)},i(h){M||(y(l.$$.fragment,h),y(c.$$.fragment,h),y(R.$$.fragment,h),y(E.$$.fragment,h),M=!0)},o(h){A(l.$$.fragment,h),A(c.$$.fragment,h),A(R.$$.fragment,h),A(E.$$.fragment,h),M=!1},d(h){h&&i(t),W(l),W(c),W(R),W(E)}}}function gt($){let t,n,e,u=$[4]+1+"",o,T,l,s,f,c,q,H,R,P,B,O,C=$[2].name+"",F,N,E,Y,M,h,d,_,S,m,v,p;return s=new _t({props:{name:$[2].tournament_name,key:$[2].tournament_key}}),H=new mt({props:{date:$[2].tournament_date}}),B=new ut({props:{t:"\u767B\u9332\u30C1\u30FC\u30E0\u540D"}}),Y=new ut({props:{t:"\u7D50\u679C"}}),h=new ct({props:{rank:$[2].result}}),m=new it({props:{players:$[2].player_list}}),{c(){t=g("tr"),n=g("th"),e=z("#"),o=z(u),T=w(),l=g("th"),Q(s.$$.fragment),f=w(),c=g("tr"),q=g("td"),Q(H.$$.fragment),R=w(),P=g("td"),Q(B.$$.fragment),O=w(),F=z(C),N=w(),E=g("td"),Q(Y.$$.fragment),M=w(),Q(h.$$.fragment),d=w(),_=g("tr"),S=g("td"),Q(m.$$.fragment),v=w(),this.h()},l(a){t=b(a,"TR",{});var D=k(t);n=b(D,"TH",{rowspan:!0,style:!0});var I=k(n);e=G(I,"#"),o=G(I,u),I.forEach(i),T=j(D),l=b(D,"TH",{class:!0,colspan:!0});var X=k(l);U(s.$$.fragment,X),X.forEach(i),D.forEach(i),f=j(a),c=b(a,"TR",{class:!0});var K=k(c);q=b(K,"TD",{class:!0});var Z=k(q);U(H.$$.fragment,Z),Z.forEach(i),R=j(K),P=b(K,"TD",{class:!0});var x=k(P);U(B.$$.fragment,x),O=j(x),F=G(x,C),x.forEach(i),N=j(K),E=b(K,"TD",{class:!0});var tt=k(E);U(Y.$$.fragment,tt),M=j(tt),U(h.$$.fragment,tt),tt.forEach(i),K.forEach(i),d=j(a),_=b(a,"TR",{});var et=k(_);S=b(et,"TD",{class:!0,colspan:!0});var lt=k(S);U(m.$$.fragment,lt),lt.forEach(i),v=j(et),et.forEach(i),this.h()},h(){L(n,"rowspan","3"),Tt(n,"vertical-align","middle"),L(l,"class","tal"),L(l,"colspan","3"),L(q,"class","tal"),L(P,"class","tal"),L(E,"class","nw"),L(c,"class","tal"),L(S,"class","tal"),L(S,"colspan","3")},m(a,D){J(a,t,D),r(t,n),r(n,e),r(n,o),r(t,T),r(t,l),V(s,l,null),J(a,f,D),J(a,c,D),r(c,q),V(H,q,null),r(c,R),r(c,P),V(B,P,null),r(P,O),r(P,F),r(c,N),r(c,E),V(Y,E,null),r(E,M),V(h,E,null),J(a,d,D),J(a,_,D),r(_,S),V(m,S,null),r(_,v),p=!0},p(a,D){const I={};D&1&&(I.name=a[2].tournament_name),D&1&&(I.key=a[2].tournament_key),s.$set(I);const X={};D&1&&(X.date=a[2].tournament_date),H.$set(X),(!p||D&1)&&C!==(C=a[2].name+"")&&ot(F,C);const K={};D&1&&(K.rank=a[2].result),h.$set(K);const Z={};D&1&&(Z.players=a[2].player_list),m.$set(Z)},i(a){p||(y(s.$$.fragment,a),y(H.$$.fragment,a),y(B.$$.fragment,a),y(Y.$$.fragment,a),y(h.$$.fragment,a),y(m.$$.fragment,a),p=!0)},o(a){A(s.$$.fragment,a),A(H.$$.fragment,a),A(B.$$.fragment,a),A(Y.$$.fragment,a),A(h.$$.fragment,a),A(m.$$.fragment,a),p=!1},d(a){a&&i(t),W(s),a&&i(f),a&&i(c),W(H),W(B),W(Y),W(h),a&&i(d),a&&i(_),W(m)}}}function jt($){let t,n,e=$[0]&&dt($);return{c(){e&&e.c(),t=at()},l(u){e&&e.l(u),t=at()},m(u,o){e&&e.m(u,o),J(u,t,o),n=!0},p(u,[o]){u[0]?e?(e.p(u,o),o&1&&y(e,1)):(e=dt(u),e.c(),y(e,1),e.m(t.parentNode,t)):e&&(rt(),A(e,1,1,()=>{e=null}),nt())},i(u){n||(y(e),n=!0)},o(u){A(e),n=!1},d(u){e&&e.d(u),u&&i(t)}}}function Ht($,t,n){let e,u;return st($,Et,o=>n(0,e=o)),st($,yt,o=>n(1,u=o)),[e,u]}class qt extends bt{constructor(t){super();kt(this,t,Ht,jt,vt,{})}}export{qt as default};