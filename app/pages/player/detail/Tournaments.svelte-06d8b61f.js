import{S as Dt,i as yt,s as Ht,e as m,t as k,j as g,k as at,c as p,a as v,g as E,d as h,l as D,b as F,f as w,E as n,h as M,L as nt,J as Z,I as ft,K as wt}from"../../../chunks/vendor-eda31402.js";import{a as At}from"../../../chunks/index_store-b5403d1f.js";import{b as ot}from"../../../chunks/paths-28a87002.js";function it(s,t,e){const l=s.slice();return l[1]=t[e],l}function ct(s,t,e){const l=s.slice();return l[4]=t[e],l}function ut(s,t,e){const l=s.slice();return l[7]=t[e],l[9]=e,l}function dt(s,t,e){const l=s.slice();return l[1]=t[e],l}function mt(s,t,e){const l=s.slice();return l[7]=t[e],l[9]=e,l}function pt(s){let t,e,l,f,b,_,i,u,Y,j,Q,A,J,K,q,B,G,R,C,z,O,L,U,I,P,S,W,$=s[0].tournaments,T=[];for(let a=0;a<$.length;a+=1)T[a]=bt(dt(s,$,a));let H=s[0].tournaments,c=[];for(let a=0;a<H.length;a+=1)c[a]=gt(it(s,H,a));return{c(){t=m("table"),e=m("thead"),l=m("tr"),f=m("th"),b=k("\u5927\u4F1A\u540D"),_=g(),i=m("th"),u=k("\u958B\u50AC\u65E5"),Y=g(),j=m("th"),Q=k("\u7D50\u679C"),A=g(),J=m("th"),K=k("rating"),q=g(),B=m("th"),G=k("\u30C1\u30FC\u30E0\u540D"),R=g(),C=m("th"),z=k("\u30A8\u30F3\u30C8\u30EA\u30FC\u540D"),O=g(),L=m("th"),U=k("\u30E1\u30F3\u30D0\u30FC"),I=g(),P=m("tbody");for(let a=0;a<T.length;a+=1)T[a].c();S=g();for(let a=0;a<c.length;a+=1)c[a].c();W=at(),this.h()},l(a){t=p(a,"TABLE",{});var o=v(t);e=p(o,"THEAD",{});var r=v(e);l=p(r,"TR",{});var d=v(l);f=p(d,"TH",{class:!0});var y=v(f);b=E(y,"\u5927\u4F1A\u540D"),y.forEach(h),_=D(d),i=p(d,"TH",{});var V=v(i);u=E(V,"\u958B\u50AC\u65E5"),V.forEach(h),Y=D(d),j=p(d,"TH",{});var N=v(j);Q=E(N,"\u7D50\u679C"),N.forEach(h),A=D(d),J=p(d,"TH",{});var x=v(J);K=E(x,"rating"),x.forEach(h),q=D(d),B=p(d,"TH",{class:!0});var tt=v(B);G=E(tt,"\u30C1\u30FC\u30E0\u540D"),tt.forEach(h),R=D(d),C=p(d,"TH",{class:!0});var X=v(C);z=E(X,"\u30A8\u30F3\u30C8\u30EA\u30FC\u540D"),X.forEach(h),O=D(d),L=p(d,"TH",{class:!0});var lt=v(L);U=E(lt,"\u30E1\u30F3\u30D0\u30FC"),lt.forEach(h),d.forEach(h),r.forEach(h),I=D(o),P=p(o,"TBODY",{});var rt=v(P);for(let et=0;et<T.length;et+=1)T[et].l(rt);rt.forEach(h),o.forEach(h),S=D(a);for(let et=0;et<c.length;et+=1)c[et].l(a);W=at(),this.h()},h(){F(f,"class","tal"),F(B,"class","tal"),F(C,"class","tal"),F(L,"class","tal")},m(a,o){w(a,t,o),n(t,e),n(e,l),n(l,f),n(f,b),n(l,_),n(l,i),n(i,u),n(l,Y),n(l,j),n(j,Q),n(l,A),n(l,J),n(J,K),n(l,q),n(l,B),n(B,G),n(l,R),n(l,C),n(C,z),n(l,O),n(l,L),n(L,U),n(t,I),n(t,P);for(let r=0;r<T.length;r+=1)T[r].m(P,null);w(a,S,o);for(let r=0;r<c.length;r+=1)c[r].m(a,o);w(a,W,o)},p(a,o){if(o&1){$=a[0].tournaments;let r;for(r=0;r<$.length;r+=1){const d=dt(a,$,r);T[r]?T[r].p(d,o):(T[r]=bt(d),T[r].c(),T[r].m(P,null))}for(;r<T.length;r+=1)T[r].d(1);T.length=$.length}if(o&1){H=a[0].tournaments;let r;for(r=0;r<H.length;r+=1){const d=it(a,H,r);c[r]?c[r].p(d,o):(c[r]=gt(d),c[r].c(),c[r].m(W.parentNode,W))}for(;r<c.length;r+=1)c[r].d(1);c.length=H.length}},d(a){a&&h(t),nt(T,a),a&&h(S),nt(c,a),a&&h(W)}}}function Lt(s){let t;return{c(){t=k(",")},l(e){t=E(e,",")},m(e,l){w(e,t,l)},d(e){e&&h(t)}}}function vt(s){let t,e,l=s[7][0]+"",f,b,_=s[9]!==0&&Lt();return{c(){_&&_.c(),t=g(),e=m("a"),f=k(l),this.h()},l(i){_&&_.l(i),t=D(i),e=p(i,"A",{href:!0});var u=v(e);f=E(u,l),u.forEach(h),this.h()},h(){F(e,"href",b=""+(ot+"/player/detail/?p="+s[7][1]))},m(i,u){_&&_.m(i,u),w(i,t,u),w(i,e,u),n(e,f)},p(i,u){u&1&&l!==(l=i[7][0]+"")&&M(f,l),u&1&&b!==(b=""+(ot+"/player/detail/?p="+i[7][1]))&&F(e,"href",b)},d(i){_&&_.d(i),i&&h(t),i&&h(e)}}}function bt(s){let t,e,l,f=s[1].tournament_name+"",b,_,i,u,Y=new Date(s[1].tournament_date).toLocaleDateString()+"",j,Q,A,J=(s[1].team_result===0?"-":`${s[1].team_result}\u4F4D`)+"",K,q,B,G=s[1].rating.toLocaleString()+"",R,C,z,O=s[1].team_name+"",L,U,I,P=s[1].member_name+"",S,W,$,T,H=s[1].mates_hash,c=[];for(let a=0;a<H.length;a+=1)c[a]=vt(mt(s,H,a));return{c(){t=m("tr"),e=m("td"),l=m("a"),b=k(f),i=g(),u=m("td"),j=k(Y),Q=g(),A=m("td"),K=k(J),q=g(),B=m("td"),R=k(G),C=g(),z=m("td"),L=k(O),U=g(),I=m("td"),S=k(P),W=g(),$=m("td");for(let a=0;a<c.length;a+=1)c[a].c();T=g(),this.h()},l(a){t=p(a,"TR",{});var o=v(t);e=p(o,"TD",{class:!0});var r=v(e);l=p(r,"A",{href:!0});var d=v(l);b=E(d,f),d.forEach(h),r.forEach(h),i=D(o),u=p(o,"TD",{});var y=v(u);j=E(y,Y),y.forEach(h),Q=D(o),A=p(o,"TD",{});var V=v(A);K=E(V,J),V.forEach(h),q=D(o),B=p(o,"TD",{});var N=v(B);R=E(N,G),N.forEach(h),C=D(o),z=p(o,"TD",{class:!0});var x=v(z);L=E(x,O),x.forEach(h),U=D(o),I=p(o,"TD",{class:!0});var tt=v(I);S=E(tt,P),tt.forEach(h),W=D(o),$=p(o,"TD",{class:!0});var X=v($);for(let lt=0;lt<c.length;lt+=1)c[lt].l(X);X.forEach(h),T=D(o),o.forEach(h),this.h()},h(){F(l,"href",_="#"+s[1].tournament_key),F(e,"class","tal"),F(z,"class","tal"),F(I,"class","tal"),F($,"class","tal")},m(a,o){w(a,t,o),n(t,e),n(e,l),n(l,b),n(t,i),n(t,u),n(u,j),n(t,Q),n(t,A),n(A,K),n(t,q),n(t,B),n(B,R),n(t,C),n(t,z),n(z,L),n(t,U),n(t,I),n(I,S),n(t,W),n(t,$);for(let r=0;r<c.length;r+=1)c[r].m($,null);n(t,T)},p(a,o){if(o&1&&f!==(f=a[1].tournament_name+"")&&M(b,f),o&1&&_!==(_="#"+a[1].tournament_key)&&F(l,"href",_),o&1&&Y!==(Y=new Date(a[1].tournament_date).toLocaleDateString()+"")&&M(j,Y),o&1&&J!==(J=(a[1].team_result===0?"-":`${a[1].team_result}\u4F4D`)+"")&&M(K,J),o&1&&G!==(G=a[1].rating.toLocaleString()+"")&&M(R,G),o&1&&O!==(O=a[1].team_name+"")&&M(L,O),o&1&&P!==(P=a[1].member_name+"")&&M(S,P),o&1){H=a[1].mates_hash;let r;for(r=0;r<H.length;r+=1){const d=mt(a,H,r);c[r]?c[r].p(d,o):(c[r]=vt(d),c[r].c(),c[r].m($,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=H.length}},d(a){a&&h(t),nt(c,a)}}}function kt(s){let t,e,l=s[4].bracket+"",f,b,_,i=s[4].round+"",u,Y,j,Q,A,J,K,q=s[4].opponent_team_name+"",B,G,R,C=(s[4].opponent_team_rank===0?"-":`${s[4].opponent_team_rank}\u4F4D`)+"",z,O,L,U;function I(a,o){return a[4].opponent_team_key===a[4].loser_key?$t:St}let P=I(s),S=P(s);function W(a,o){return a[4].opponent_team_key===a[4].loser_key?jt:Nt}let $=W(s),T=$(s),H=s[4].opponents_hash,c=[];for(let a=0;a<H.length;a+=1)c[a]=Et(ut(s,H,a));return{c(){t=m("tr"),e=m("td"),f=k(l),b=g(),_=m("td"),u=k(i),Y=g(),j=m("td"),S.c(),Q=g(),A=m("td"),T.c(),J=g(),K=m("td"),B=k(q),G=g(),R=m("td"),z=k(C),O=g(),L=m("td");for(let a=0;a<c.length;a+=1)c[a].c();U=g(),this.h()},l(a){t=p(a,"TR",{});var o=v(t);e=p(o,"TD",{});var r=v(e);f=E(r,l),r.forEach(h),b=D(o),_=p(o,"TD",{});var d=v(_);u=E(d,i),d.forEach(h),Y=D(o),j=p(o,"TD",{style:!0});var y=v(j);S.l(y),y.forEach(h),Q=D(o),A=p(o,"TD",{});var V=v(A);T.l(V),V.forEach(h),J=D(o),K=p(o,"TD",{class:!0});var N=v(K);B=E(N,q),N.forEach(h),G=D(o),R=p(o,"TD",{});var x=v(R);z=E(x,C),x.forEach(h),O=D(o),L=p(o,"TD",{class:!0});var tt=v(L);for(let X=0;X<c.length;X+=1)c[X].l(tt);tt.forEach(h),U=D(o),o.forEach(h),this.h()},h(){Z(j,"font-weight","bold"),F(K,"class","tal"),F(L,"class","tal")},m(a,o){w(a,t,o),n(t,e),n(e,f),n(t,b),n(t,_),n(_,u),n(t,Y),n(t,j),S.m(j,null),n(t,Q),n(t,A),T.m(A,null),n(t,J),n(t,K),n(K,B),n(t,G),n(t,R),n(R,z),n(t,O),n(t,L);for(let r=0;r<c.length;r+=1)c[r].m(L,null);n(t,U)},p(a,o){if(o&1&&l!==(l=a[4].bracket+"")&&M(f,l),o&1&&i!==(i=a[4].round+"")&&M(u,i),P!==(P=I(a))&&(S.d(1),S=P(a),S&&(S.c(),S.m(j,null))),$===($=W(a))&&T?T.p(a,o):(T.d(1),T=$(a),T&&(T.c(),T.m(A,null))),o&1&&q!==(q=a[4].opponent_team_name+"")&&M(B,q),o&1&&C!==(C=(a[4].opponent_team_rank===0?"-":`${a[4].opponent_team_rank}\u4F4D`)+"")&&M(z,C),o&1){H=a[4].opponents_hash;let r;for(r=0;r<H.length;r+=1){const d=ut(a,H,r);c[r]?c[r].p(d,o):(c[r]=Et(d),c[r].c(),c[r].m(L,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=H.length}},d(a){a&&h(t),S.d(),T.d(),nt(c,a)}}}function St(s){let t,e;return{c(){t=m("span"),e=k("L"),this.h()},l(l){t=p(l,"SPAN",{style:!0});var f=v(t);e=E(f,"L"),f.forEach(h),this.h()},h(){Z(t,"color","dodgerblue")},m(l,f){w(l,t,f),n(t,e)},d(l){l&&h(t)}}}function $t(s){let t,e;return{c(){t=m("span"),e=k("W"),this.h()},l(l){t=p(l,"SPAN",{style:!0});var f=v(t);e=E(f,"W"),f.forEach(h),this.h()},h(){Z(t,"color","red")},m(l,f){w(l,t,f),n(t,e)},d(l){l&&h(t)}}}function Nt(s){let t=s[4].loser_score+"",e,l,f=s[4].winner_score+"",b;return{c(){e=k(t),l=k(" - "),b=k(f)},l(_){e=E(_,t),l=E(_," - "),b=E(_,f)},m(_,i){w(_,e,i),w(_,l,i),w(_,b,i)},p(_,i){i&1&&t!==(t=_[4].loser_score+"")&&M(e,t),i&1&&f!==(f=_[4].winner_score+"")&&M(b,f)},d(_){_&&h(e),_&&h(l),_&&h(b)}}}function jt(s){let t=s[4].winner_score+"",e,l,f=s[4].loser_score+"",b;return{c(){e=k(t),l=k(" - "),b=k(f)},l(_){e=E(_,t),l=E(_," - "),b=E(_,f)},m(_,i){w(_,e,i),w(_,l,i),w(_,b,i)},p(_,i){i&1&&t!==(t=_[4].winner_score+"")&&M(e,t),i&1&&f!==(f=_[4].loser_score+"")&&M(b,f)},d(_){_&&h(e),_&&h(l),_&&h(b)}}}function Bt(s){let t;return{c(){t=k(",")},l(e){t=E(e,",")},m(e,l){w(e,t,l)},d(e){e&&h(t)}}}function Et(s){let t,e,l=s[7][0]+"",f,b,_=s[9]!==0&&Bt();return{c(){_&&_.c(),t=g(),e=m("a"),f=k(l),this.h()},l(i){_&&_.l(i),t=D(i),e=p(i,"A",{href:!0});var u=v(e);f=E(u,l),u.forEach(h),this.h()},h(){F(e,"href",b=""+(ot+"/player/detail/?p="+s[7][1]))},m(i,u){_&&_.m(i,u),w(i,t,u),w(i,e,u),n(e,f)},p(i,u){u&1&&l!==(l=i[7][0]+"")&&M(f,l),u&1&&b!==(b=""+(ot+"/player/detail/?p="+i[7][1]))&&F(e,"href",b)},d(i){_&&_.d(i),i&&h(t),i&&h(e)}}}function Tt(s){let t,e=s[4].tnmt_key===s[1].tournament_key&&kt(s);return{c(){e&&e.c(),t=at()},l(l){e&&e.l(l),t=at()},m(l,f){e&&e.m(l,f),w(l,t,f)},p(l,f){l[4].tnmt_key===l[1].tournament_key?e?e.p(l,f):(e=kt(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&h(t)}}}function gt(s){let t,e=s[1].tournament_name+"",l,f,b,_,i,u,Y,j,Q,A,J,K,q,B,G,R,C,z,O,L,U,I,P,S,W,$,T,H,c,a=s[0].matches,o=[];for(let r=0;r<a.length;r+=1)o[r]=Tt(ct(s,a,r));return{c(){t=m("h4"),l=k(e),b=g(),_=m("table"),i=m("thead"),u=m("tr"),Y=m("th"),j=k("\u30D6\u30E9\u30B1\u30C3\u30C8"),Q=g(),A=m("th"),J=k("\u30E9\u30A6\u30F3\u30C9"),K=g(),q=m("th"),B=k("\u52DD\u6557"),G=g(),R=m("th"),C=k("\u30B9\u30B3\u30A2"),z=g(),O=m("th"),L=k("\u5BFE\u6226\u76F8\u624B"),U=g(),I=m("th"),P=k("\u9806\u4F4D"),S=g(),W=m("th"),$=k("\u30E1\u30F3\u30D0\u30FC"),T=g(),H=m("tbody");for(let r=0;r<o.length;r+=1)o[r].c();c=g(),this.h()},l(r){t=p(r,"H4",{id:!0});var d=v(t);l=E(d,e),d.forEach(h),b=D(r),_=p(r,"TABLE",{});var y=v(_);i=p(y,"THEAD",{});var V=v(i);u=p(V,"TR",{});var N=v(u);Y=p(N,"TH",{style:!0});var x=v(Y);j=E(x,"\u30D6\u30E9\u30B1\u30C3\u30C8"),x.forEach(h),Q=D(N),A=p(N,"TH",{style:!0});var tt=v(A);J=E(tt,"\u30E9\u30A6\u30F3\u30C9"),tt.forEach(h),K=D(N),q=p(N,"TH",{style:!0});var X=v(q);B=E(X,"\u52DD\u6557"),X.forEach(h),G=D(N),R=p(N,"TH",{style:!0});var lt=v(R);C=E(lt,"\u30B9\u30B3\u30A2"),lt.forEach(h),z=D(N),O=p(N,"TH",{style:!0});var rt=v(O);L=E(rt,"\u5BFE\u6226\u76F8\u624B"),rt.forEach(h),U=D(N),I=p(N,"TH",{style:!0});var et=v(I);P=E(et,"\u9806\u4F4D"),et.forEach(h),S=D(N),W=p(N,"TH",{style:!0});var st=v(W);$=E(st,"\u30E1\u30F3\u30D0\u30FC"),st.forEach(h),N.forEach(h),V.forEach(h),T=D(y),H=p(y,"TBODY",{});var ht=v(H);for(let _t=0;_t<o.length;_t+=1)o[_t].l(ht);ht.forEach(h),c=D(y),y.forEach(h),this.h()},h(){F(t,"id",f=s[1].tournament_key),Z(Y,"width","6%"),Z(A,"width","6%"),Z(q,"width","6%"),Z(R,"width","6%"),Z(O,"width","23%"),Z(O,"text-align","left"),Z(I,"width","6%"),Z(W,"width","47%"),Z(W,"text-align","left")},m(r,d){w(r,t,d),n(t,l),w(r,b,d),w(r,_,d),n(_,i),n(i,u),n(u,Y),n(Y,j),n(u,Q),n(u,A),n(A,J),n(u,K),n(u,q),n(q,B),n(u,G),n(u,R),n(R,C),n(u,z),n(u,O),n(O,L),n(u,U),n(u,I),n(I,P),n(u,S),n(u,W),n(W,$),n(_,T),n(_,H);for(let y=0;y<o.length;y+=1)o[y].m(H,null);n(_,c)},p(r,d){if(d&1&&e!==(e=r[1].tournament_name+"")&&M(l,e),d&1&&f!==(f=r[1].tournament_key)&&F(t,"id",f),d&1){a=r[0].matches;let y;for(y=0;y<a.length;y+=1){const V=ct(r,a,y);o[y]?o[y].p(V,d):(o[y]=Tt(V),o[y].c(),o[y].m(H,null))}for(;y<o.length;y+=1)o[y].d(1);o.length=a.length}},d(r){r&&h(t),r&&h(b),r&&h(_),nt(o,r)}}}function Rt(s){let t,e=s[0]&&pt(s);return{c(){e&&e.c(),t=at()},l(l){e&&e.l(l),t=at()},m(l,f){e&&e.m(l,f),w(l,t,f)},p(l,[f]){l[0]?e?e.p(l,f):(e=pt(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:ft,o:ft,d(l){e&&e.d(l),l&&h(t)}}}function Ot(s,t,e){let l;return wt(s,At,f=>e(0,l=f)),[l]}class qt extends Dt{constructor(t){super();yt(this,t,Ot,Rt,Ht,{})}}export{qt as default};
