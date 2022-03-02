import{D as Le,S as Pe,i as ze,s as Ae,e as z,w as q,k as N,c as A,a as L,x as S,m as R,d as c,b as W,f as ge,g as O,H as u,y as F,q as g,o as B,B as C,t as Q,h as V,j as fe,n as me,p as oe,Q as ye,l as De,M as Ee,O as he,I as gt,V as Et}from"../../../chunks/vendor-5fd0e214.js";import{a as yt,g as Dt}from"../../../chunks/navigation-c0b2019f.js";import{b as Bt}from"../../../chunks/paths-4b3c6e7e.js";import{b as jt,f as Nt}from"../../../chunks/global-83292722.js";import{T as Oe,D as bt,P as Rt}from"../../../chunks/PopUpA-a362d15c.js";import{a as Se,T as dt}from"../../../chunks/TeamName-74907bd2.js";import{T as kt}from"../../../chunks/TournamentName-37c7a06a.js";import{S as de,P as wt,a as vt}from"../../../chunks/PlayersLine-9028d5fd.js";import{M as Ge}from"../../../chunks/MatchResult-012f8a3d.js";import"../../../chunks/singletons-a6a7384f.js";const Je=Le(""),Ue=Le(null),Fe=Le({}),Ce=Le(null),qe=Le(null);function Ht(r){Ue.set(r);const e={};for(const l of r.teams)for(const t of r.teams)e[`${l.team_name}	${t.team_name}`]={matches:[],wl:[0,0]};for(const l of r.team_matches){const t=`${l.winner_current_name}	${l.loser_current_name}`,a=`${l.loser_current_name}	${l.winner_current_name}`;e[t].wl[0]+=1,e[t].matches.push(l),e[a].wl[1]+=1,e[a].matches.push(l)}Fe.set(e)}function Mt(r,e,l){const t=r.teams.filter(m=>m.team_name==e).flatMap(m=>m.members),a=r.teams.filter(m=>m.team_name==l).flatMap(m=>m.members),n=Pt(r,t,a);Ce.set({left:{name:e,members:t},right:{name:l,members:a},column_width:Math.floor(100/(a.length+1)),member_relation:n}),qe.set(null)}function Ot(r,e,l){qe.set({left:e,right:l,relation:r.member_relation[`${e}	${l}`]})}function Pt(r,e,l){const t={};for(const a of e)for(const n of l){const m=`${a}	${n}`;t[m]={matches:[],wl:[0,0],mix_teams:[]}}for(const a of r.member_matches)for(const n of e)for(const m of l){const f=`${n}	${m}`;a.winner_players.includes(n)&&a.loser_players.includes(m)&&(t[f].wl[0]+=1,t[f].matches.push(a)),a.winner_players.includes(m)&&a.loser_players.includes(n)&&(t[f].wl[1]+=1,t[f].matches.push(a))}for(const a of r.mix_teams)for(const n of e)for(const m of l)if(a.team_players.includes(n)&&a.team_players.includes(m)){const f=`${n}	${m}`;t[f].mix_teams.push(a)}return t}function Ye(r,e){return`${r}	${e}`}function zt(r,e){const l={name:r.winner_name,current_name:r.winner_current_name,score:r.winner_score,rank:r.winner_rank,players:r.winner_players,result:"w"},t={name:r.loser_name,current_name:r.loser_current_name,score:r.loser_score,rank:r.loser_rank,players:r.loser_players,result:"l"};return r.winner_current_name===e||r.winner_players.includes(e)?{team1:l,team2:t}:{team1:t,team2:l}}function At(r){let e,l,t,a,n,m,f,s,o,i,k,b,v,j;return t=new de({props:{s:2}}),n=new Oe({props:{t:"\u767B\u9332\u540D "}}),f=new Se({props:{name:r[0].name}}),i=new dt({props:{rank:r[0].rank}}),v=new wt({props:{players:r[0].players}}),{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=N(),q(n.$$.fragment),m=N(),q(f.$$.fragment),s=N(),o=z("td"),q(i.$$.fragment),k=N(),b=z("td"),q(v.$$.fragment),this.h()},l(p){e=A(p,"TR",{});var H=L(e);l=A(H,"TD",{class:!0,style:!0});var E=L(l);S(t.$$.fragment,E),a=R(E),S(n.$$.fragment,E),m=R(E),S(f.$$.fragment,E),E.forEach(c),s=R(H),o=A(H,"TD",{class:!0,style:!0});var d=L(o);S(i.$$.fragment,d),d.forEach(c),k=R(H),b=A(H,"TD",{class:!0});var h=L(b);S(v.$$.fragment,h),h.forEach(c),H.forEach(c),this.h()},h(){W(l,"class","tal"),ge(l,"width","20em"),W(o,"class","tal"),ge(o,"width","4em"),W(b,"class","tal")},m(p,H){O(p,e,H),u(e,l),F(t,l,null),u(l,a),F(n,l,null),u(l,m),F(f,l,null),u(e,s),u(e,o),F(i,o,null),u(e,k),u(e,b),F(v,b,null),j=!0},p(p,[H]){const E={};H&1&&(E.name=p[0].name),f.$set(E);const d={};H&1&&(d.rank=p[0].rank),i.$set(d);const h={};H&1&&(h.players=p[0].players),v.$set(h)},i(p){j||(g(t.$$.fragment,p),g(n.$$.fragment,p),g(f.$$.fragment,p),g(i.$$.fragment,p),g(v.$$.fragment,p),j=!0)},o(p){B(t.$$.fragment,p),B(n.$$.fragment,p),B(f.$$.fragment,p),B(i.$$.fragment,p),B(v.$$.fragment,p),j=!1},d(p){p&&c(e),C(t),C(n),C(f),C(i),C(v)}}}function Lt(r,e,l){let{team_match:t}=e;return r.$$set=a=>{"team_match"in a&&l(0,t=a.team_match)},[t]}class Ke extends Pe{constructor(e){super();ze(this,e,Lt,At,Ae,{team_match:0})}}function We(r){let e,l,t,a,n=r[0].match_bracket+"",m,f;return e=new de({props:{s:2}}),t=new Oe({props:{t:"\u30D6\u30E9\u30B1\u30C3\u30C8"}}),{c(){q(e.$$.fragment),l=N(),q(t.$$.fragment),a=N(),m=Q(n)},l(s){S(e.$$.fragment,s),l=R(s),S(t.$$.fragment,s),a=R(s),m=V(s,n)},m(s,o){F(e,s,o),O(s,l,o),F(t,s,o),O(s,a,o),O(s,m,o),f=!0},p(s,o){(!f||o&1)&&n!==(n=s[0].match_bracket+"")&&fe(m,n)},i(s){f||(g(e.$$.fragment,s),g(t.$$.fragment,s),f=!0)},o(s){B(e.$$.fragment,s),B(t.$$.fragment,s),f=!1},d(s){C(e,s),s&&c(l),C(t,s),s&&c(a),s&&c(m)}}}function Ut(r){let e,l,t,a,n,m,f,s,o,i,k,b,v,j,p,H=r[0].match_round+"",E,d,h,P,U,_,y,D,T,I,ee=r[1].team1.current_name+"",x,ie,ae,Ne,re,Re,se,J,Be=r[1].team1.score+"",_e,K,je=r[1].team2.score+"",Z,He,be,$,M,ne,ce,ke,Y=r[1].team2.current_name+"",ue,we,pe,$e,Te,ve;t=new bt({props:{date:r[0].tournament_date}}),n=new de({props:{s:2}}),f=new Oe({props:{t:"\u5927\u4F1A"}}),o=new kt({props:{name:r[0].tournament_name,key:r[0].tournament_key,official:!1}});let te=r[0].match_bracket&&We(r);return b=new de({props:{s:2}}),j=new Oe({props:{t:"\u30E9\u30A6\u30F3\u30C9"}}),U=new de({props:{s:2}}),y=new Oe({props:{t:"\u7D50\u679C"}}),T=new de({props:{s:1}}),ae=new de({props:{s:2}}),re=new Ge({props:{win:r[1].team1.result==="w"}}),se=new de({props:{s:1}}),be=new de({props:{s:1}}),M=new Ge({props:{win:r[1].team2.result==="w"}}),ce=new de({props:{s:2}}),pe=new Ke({props:{team_match:r[1].team1}}),Te=new Ke({props:{team_match:r[1].team2}}),{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=N(),q(n.$$.fragment),m=N(),q(f.$$.fragment),s=N(),q(o.$$.fragment),i=N(),te&&te.c(),k=N(),q(b.$$.fragment),v=N(),q(j.$$.fragment),p=N(),E=Q(H),d=N(),h=z("tr"),P=z("td"),q(U.$$.fragment),_=N(),q(y.$$.fragment),D=N(),q(T.$$.fragment),I=N(),x=Q(ee),ie=N(),q(ae.$$.fragment),Ne=N(),q(re.$$.fragment),Re=N(),q(se.$$.fragment),J=N(),_e=Q(Be),K=Q(" - "),Z=Q(je),He=N(),q(be.$$.fragment),$=N(),q(M.$$.fragment),ne=N(),q(ce.$$.fragment),ke=N(),ue=Q(Y),we=N(),q(pe.$$.fragment),$e=N(),q(Te.$$.fragment),this.h()},l(w){e=A(w,"TR",{});var X=L(e);l=A(X,"TD",{class:!0,colspan:!0});var le=L(l);S(t.$$.fragment,le),a=R(le),S(n.$$.fragment,le),m=R(le),S(f.$$.fragment,le),s=R(le),S(o.$$.fragment,le),i=R(le),te&&te.l(le),k=R(le),S(b.$$.fragment,le),v=R(le),S(j.$$.fragment,le),p=R(le),E=V(le,H),le.forEach(c),X.forEach(c),d=R(w),h=A(w,"TR",{});var Me=L(h);P=A(Me,"TD",{class:!0,colspan:!0});var G=L(P);S(U.$$.fragment,G),_=R(G),S(y.$$.fragment,G),D=R(G),S(T.$$.fragment,G),I=R(G),x=V(G,ee),ie=R(G),S(ae.$$.fragment,G),Ne=R(G),S(re.$$.fragment,G),Re=R(G),S(se.$$.fragment,G),J=R(G),_e=V(G,Be),K=V(G," - "),Z=V(G,je),He=R(G),S(be.$$.fragment,G),$=R(G),S(M.$$.fragment,G),ne=R(G),S(ce.$$.fragment,G),ke=R(G),ue=V(G,Y),G.forEach(c),Me.forEach(c),we=R(w),S(pe.$$.fragment,w),$e=R(w),S(Te.$$.fragment,w),this.h()},h(){W(l,"class","tal"),W(l,"colspan","3"),W(P,"class","tal"),W(P,"colspan","3")},m(w,X){O(w,e,X),u(e,l),F(t,l,null),u(l,a),F(n,l,null),u(l,m),F(f,l,null),u(l,s),F(o,l,null),u(l,i),te&&te.m(l,null),u(l,k),F(b,l,null),u(l,v),F(j,l,null),u(l,p),u(l,E),O(w,d,X),O(w,h,X),u(h,P),F(U,P,null),u(P,_),F(y,P,null),u(P,D),F(T,P,null),u(P,I),u(P,x),u(P,ie),F(ae,P,null),u(P,Ne),F(re,P,null),u(P,Re),F(se,P,null),u(P,J),u(P,_e),u(P,K),u(P,Z),u(P,He),F(be,P,null),u(P,$),F(M,P,null),u(P,ne),F(ce,P,null),u(P,ke),u(P,ue),O(w,we,X),F(pe,w,X),O(w,$e,X),F(Te,w,X),ve=!0},p(w,[X]){const le={};X&1&&(le.date=w[0].tournament_date),t.$set(le);const Me={};X&1&&(Me.name=w[0].tournament_name),X&1&&(Me.key=w[0].tournament_key),o.$set(Me),w[0].match_bracket?te?(te.p(w,X),X&1&&g(te,1)):(te=We(w),te.c(),g(te,1),te.m(l,k)):te&&(me(),B(te,1,1,()=>{te=null}),oe()),(!ve||X&1)&&H!==(H=w[0].match_round+"")&&fe(E,H),(!ve||X&2)&&ee!==(ee=w[1].team1.current_name+"")&&fe(x,ee);const G={};X&2&&(G.win=w[1].team1.result==="w"),re.$set(G),(!ve||X&2)&&Be!==(Be=w[1].team1.score+"")&&fe(_e,Be),(!ve||X&2)&&je!==(je=w[1].team2.score+"")&&fe(Z,je);const Ie={};X&2&&(Ie.win=w[1].team2.result==="w"),M.$set(Ie),(!ve||X&2)&&Y!==(Y=w[1].team2.current_name+"")&&fe(ue,Y);const Qe={};X&2&&(Qe.team_match=w[1].team1),pe.$set(Qe);const Ve={};X&2&&(Ve.team_match=w[1].team2),Te.$set(Ve)},i(w){ve||(g(t.$$.fragment,w),g(n.$$.fragment,w),g(f.$$.fragment,w),g(o.$$.fragment,w),g(te),g(b.$$.fragment,w),g(j.$$.fragment,w),g(U.$$.fragment,w),g(y.$$.fragment,w),g(T.$$.fragment,w),g(ae.$$.fragment,w),g(re.$$.fragment,w),g(se.$$.fragment,w),g(be.$$.fragment,w),g(M.$$.fragment,w),g(ce.$$.fragment,w),g(pe.$$.fragment,w),g(Te.$$.fragment,w),ve=!0)},o(w){B(t.$$.fragment,w),B(n.$$.fragment,w),B(f.$$.fragment,w),B(o.$$.fragment,w),B(te),B(b.$$.fragment,w),B(j.$$.fragment,w),B(U.$$.fragment,w),B(y.$$.fragment,w),B(T.$$.fragment,w),B(ae.$$.fragment,w),B(re.$$.fragment,w),B(se.$$.fragment,w),B(be.$$.fragment,w),B(M.$$.fragment,w),B(ce.$$.fragment,w),B(pe.$$.fragment,w),B(Te.$$.fragment,w),ve=!1},d(w){w&&c(e),C(t),C(n),C(f),C(o),te&&te.d(),C(b),C(j),w&&c(d),w&&c(h),C(U),C(y),C(T),C(ae),C(re),C(se),C(be),C(M),C(ce),w&&c(we),C(pe,w),w&&c($e),C(Te,w)}}}function Yt(r,e,l){let{match:t}=e,{teams:a}=e;return r.$$set=n=>{"match"in n&&l(0,t=n.match),"teams"in n&&l(1,a=n.teams)},[t,a]}class qt extends Pe{constructor(e){super();ze(this,e,Yt,Ut,Ae,{match:0,teams:1})}}function Xe(r,e,l){const t=r.slice();t[2]=e[l];const a=zt(t[2],t[1]);return t[3]=a,t}function Ze(r){let e,l;return e=new qt({props:{match:r[2],teams:r[3]}}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p(t,a){const n={};a&1&&(n.match=t[2]),a&3&&(n.teams=t[3]),e.$set(n)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function St(r){let e,l,t,a=r[0],n=[];for(let f=0;f<a.length;f+=1)n[f]=Ze(Xe(r,a,f));const m=f=>B(n[f],1,1,()=>{n[f]=null});return{c(){e=z("table"),l=z("tbody");for(let f=0;f<n.length;f+=1)n[f].c();this.h()},l(f){e=A(f,"TABLE",{});var s=L(e);l=A(s,"TBODY",{class:!0});var o=L(l);for(let i=0;i<n.length;i+=1)n[i].l(o);o.forEach(c),s.forEach(c),this.h()},h(){W(l,"class","quad")},m(f,s){O(f,e,s),u(e,l);for(let o=0;o<n.length;o+=1)n[o].m(l,null);t=!0},p(f,[s]){if(s&3){a=f[0];let o;for(o=0;o<a.length;o+=1){const i=Xe(f,a,o);n[o]?(n[o].p(i,s),g(n[o],1)):(n[o]=Ze(i),n[o].c(),g(n[o],1),n[o].m(l,null))}for(me(),o=a.length;o<n.length;o+=1)m(o);oe()}},i(f){if(!t){for(let s=0;s<a.length;s+=1)g(n[s]);t=!0}},o(f){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)B(n[s]);t=!1},d(f){f&&c(e),ye(n,f)}}}function Ft(r,e,l){let{matches:t}=e,{left:a}=e;return r.$$set=n=>{"matches"in n&&l(0,t=n.matches),"left"in n&&l(1,a=n.left)},[t,a]}class Tt extends Pe{constructor(e){super();ze(this,e,Ft,St,Ae,{matches:0,left:1})}}function xe(r,e,l){const t=r.slice();return t[1]=e[l],t}function Ct(r){let e,l;return{c(){e=z("p"),l=Q("-")},l(t){e=A(t,"P",{});var a=L(e);l=V(a,"-"),a.forEach(c)},m(t,a){O(t,e,a),u(e,l)},p:he,i:he,o:he,d(t){t&&c(e)}}}function It(r){let e,l;return e=new Tt({props:{matches:r[0].relation.matches,left:r[0].left}}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p(t,a){const n={};a&1&&(n.matches=t[0].relation.matches),a&1&&(n.left=t[0].left),e.$set(n)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function et(r){let e,l,t,a=r[0].relation.mix_teams,n=[];for(let f=0;f<a.length;f+=1)n[f]=tt(xe(r,a,f));const m=f=>B(n[f],1,1,()=>{n[f]=null});return{c(){e=z("table"),l=z("tbody");for(let f=0;f<n.length;f+=1)n[f].c()},l(f){e=A(f,"TABLE",{});var s=L(e);l=A(s,"TBODY",{});var o=L(l);for(let i=0;i<n.length;i+=1)n[i].l(o);o.forEach(c),s.forEach(c)},m(f,s){O(f,e,s),u(e,l);for(let o=0;o<n.length;o+=1)n[o].m(l,null);t=!0},p(f,s){if(s&1){a=f[0].relation.mix_teams;let o;for(o=0;o<a.length;o+=1){const i=xe(f,a,o);n[o]?(n[o].p(i,s),g(n[o],1)):(n[o]=tt(i),n[o].c(),g(n[o],1),n[o].m(l,null))}for(me(),o=a.length;o<n.length;o+=1)m(o);oe()}},i(f){if(!t){for(let s=0;s<a.length;s+=1)g(n[s]);t=!0}},o(f){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)B(n[s]);t=!1},d(f){f&&c(e),ye(n,f)}}}function tt(r){let e,l,t,a,n,m,f,s,o,i,k,b,v,j,p,H,E;return t=new bt({props:{date:r[1].tournament_date}}),m=new kt({props:{name:r[1].tournament_name,key:r[1].tournament_key,official:!1}}),o=new Se({props:{name:r[1].team_name}}),b=new dt({props:{rank:r[1].team_rank}}),p=new wt({props:{players:r[1].team_players}}),{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=N(),n=z("td"),q(m.$$.fragment),f=N(),s=z("td"),q(o.$$.fragment),i=N(),k=z("td"),q(b.$$.fragment),v=N(),j=z("td"),q(p.$$.fragment),H=N(),this.h()},l(d){e=A(d,"TR",{});var h=L(e);l=A(h,"TD",{});var P=L(l);S(t.$$.fragment,P),P.forEach(c),a=R(h),n=A(h,"TD",{class:!0});var U=L(n);S(m.$$.fragment,U),U.forEach(c),f=R(h),s=A(h,"TD",{class:!0});var _=L(s);S(o.$$.fragment,_),_.forEach(c),i=R(h),k=A(h,"TD",{});var y=L(k);S(b.$$.fragment,y),y.forEach(c),v=R(h),j=A(h,"TD",{class:!0});var D=L(j);S(p.$$.fragment,D),D.forEach(c),H=R(h),h.forEach(c),this.h()},h(){W(n,"class","tal"),W(s,"class","tal"),W(j,"class","tal")},m(d,h){O(d,e,h),u(e,l),F(t,l,null),u(e,a),u(e,n),F(m,n,null),u(e,f),u(e,s),F(o,s,null),u(e,i),u(e,k),F(b,k,null),u(e,v),u(e,j),F(p,j,null),u(e,H),E=!0},p(d,h){const P={};h&1&&(P.date=d[1].tournament_date),t.$set(P);const U={};h&1&&(U.name=d[1].tournament_name),h&1&&(U.key=d[1].tournament_key),m.$set(U);const _={};h&1&&(_.name=d[1].team_name),o.$set(_);const y={};h&1&&(y.rank=d[1].team_rank),b.$set(y);const D={};h&1&&(D.players=d[1].team_players),p.$set(D)},i(d){E||(g(t.$$.fragment,d),g(m.$$.fragment,d),g(o.$$.fragment,d),g(b.$$.fragment,d),g(p.$$.fragment,d),E=!0)},o(d){B(t.$$.fragment,d),B(m.$$.fragment,d),B(o.$$.fragment,d),B(b.$$.fragment,d),B(p.$$.fragment,d),E=!1},d(d){d&&c(e),C(t),C(m),C(o),C(b),C(p)}}}function Qt(r){var y,D;let e,l=((y=r[0])==null?void 0:y.left)+"",t,a,n=((D=r[0])==null?void 0:D.right)+"",m,f,s,o,i,k,b,v,j,p,H,E,d;const h=[It,Ct],P=[];function U(T,I){return T[0].relation.matches.length>0?0:1}k=U(r),b=P[k]=h[k](r);let _=r[0].relation.mix_teams.length>0&&et(r);return{c(){e=z("h2"),t=Q(l),a=Q(" \u{1F19A} "),m=Q(n),f=N(),s=z("h3"),o=Q("\u5BFE\u6226"),i=N(),b.c(),v=N(),j=z("h3"),p=Q("\u540C\u4E00\u30C1\u30FC\u30E0\u51FA\u5834"),H=N(),_&&_.c(),E=De()},l(T){e=A(T,"H2",{});var I=L(e);t=V(I,l),a=V(I," \u{1F19A} "),m=V(I,n),I.forEach(c),f=R(T),s=A(T,"H3",{});var ee=L(s);o=V(ee,"\u5BFE\u6226"),ee.forEach(c),i=R(T),b.l(T),v=R(T),j=A(T,"H3",{});var x=L(j);p=V(x,"\u540C\u4E00\u30C1\u30FC\u30E0\u51FA\u5834"),x.forEach(c),H=R(T),_&&_.l(T),E=De()},m(T,I){O(T,e,I),u(e,t),u(e,a),u(e,m),O(T,f,I),O(T,s,I),u(s,o),O(T,i,I),P[k].m(T,I),O(T,v,I),O(T,j,I),u(j,p),O(T,H,I),_&&_.m(T,I),O(T,E,I),d=!0},p(T,[I]){var x,ie;(!d||I&1)&&l!==(l=((x=T[0])==null?void 0:x.left)+"")&&fe(t,l),(!d||I&1)&&n!==(n=((ie=T[0])==null?void 0:ie.right)+"")&&fe(m,n);let ee=k;k=U(T),k===ee?P[k].p(T,I):(me(),B(P[ee],1,1,()=>{P[ee]=null}),oe(),b=P[k],b?b.p(T,I):(b=P[k]=h[k](T),b.c()),g(b,1),b.m(v.parentNode,v)),T[0].relation.mix_teams.length>0?_?(_.p(T,I),I&1&&g(_,1)):(_=et(T),_.c(),g(_,1),_.m(E.parentNode,E)):_&&(me(),B(_,1,1,()=>{_=null}),oe())},i(T){d||(g(b),g(_),d=!0)},o(T){B(b),B(_),d=!1},d(T){T&&c(e),T&&c(f),T&&c(s),T&&c(i),P[k].d(T),T&&c(v),T&&c(j),T&&c(H),_&&_.d(T),T&&c(E)}}}function Vt(r,e,l){let t;return Ee(r,qe,a=>l(0,t=a)),[t]}class Gt extends Pe{constructor(e){super();ze(this,e,Vt,Qt,Ae,{})}}function lt(r,e,l){const t=r.slice();return t[4]=e[l],t}function nt(r,e,l){const t=r.slice();t[7]=e[l];const a=t[0].member_relation[`${t[4]}	${t[7]}`];return t[8]=a,t}function rt(r,e,l){const t=r.slice();return t[7]=e[l],t}function Jt(r){let e,l;return{c(){e=z("p"),l=Q("-")},l(t){e=A(t,"P",{});var a=L(e);l=V(a,"-"),a.forEach(c)},m(t,a){O(t,e,a),u(e,l)},p:he,i:he,o:he,d(t){t&&c(e)}}}function Kt(r){let e,l;return e=new Tt({props:{matches:r[1][Ye(r[0].left.name,r[0].right.name)].matches,left:r[0].left.name}}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p(t,a){const n={};a&3&&(n.matches=t[1][Ye(t[0].left.name,t[0].right.name)].matches),a&1&&(n.left=t[0].left.name),e.$set(n)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function at(r){let e,l,t,a;return l=new vt({props:{name:r[7]}}),{c(){e=z("td"),q(l.$$.fragment),t=N(),this.h()},l(n){e=A(n,"TD",{style:!0,class:!0});var m=L(e);S(l.$$.fragment,m),t=R(m),m.forEach(c),this.h()},h(){ge(e,"width",r[0].column_width+"%"),W(e,"class","svelte-ncaz9j")},m(n,m){O(n,e,m),F(l,e,null),u(e,t),a=!0},p(n,m){const f={};m&1&&(f.name=n[7]),l.$set(f),(!a||m&1)&&ge(e,"width",n[0].column_width+"%")},i(n){a||(g(l.$$.fragment,n),a=!0)},o(n){B(l.$$.fragment,n),a=!1},d(n){n&&c(e),C(l)}}}function Wt(r){let e;return{c(){e=Q("-")},l(l){e=V(l,"-")},m(l,t){O(l,e,t)},p:he,d(l){l&&c(e)}}}function Xt(r){let e=r[8].wl[0]+"",l,t,a=r[8].wl[1]+"",n;return{c(){l=Q(e),t=Q(" - "),n=Q(a)},l(m){l=V(m,e),t=V(m," - "),n=V(m,a)},m(m,f){O(m,l,f),O(m,t,f),O(m,n,f)},p(m,f){f&1&&e!==(e=m[8].wl[0]+"")&&fe(l,e),f&1&&a!==(a=m[8].wl[1]+"")&&fe(n,a)},d(m){m&&c(l),m&&c(t),m&&c(n)}}}function Zt(r){let e;return{c(){e=Q("-")},l(l){e=V(l,"-")},m(l,t){O(l,e,t)},p:he,i:he,o:he,d(l){l&&c(e)}}}function xt(r){let e=r[8].mix_teams.length+"",l,t,a;return t=new Oe({props:{t:" \u5927\u4F1A"}}),{c(){l=Q(e),q(t.$$.fragment)},l(n){l=V(n,e),S(t.$$.fragment,n)},m(n,m){O(n,l,m),F(t,n,m),a=!0},p(n,m){(!a||m&1)&&e!==(e=n[8].mix_teams.length+"")&&fe(l,e)},i(n){a||(g(t.$$.fragment,n),a=!0)},o(n){B(t.$$.fragment,n),a=!1},d(n){n&&c(l),C(t,n)}}}function st(r){let e,l,t,a,n,m,f,s,o,i,k,b,v,j;function p(_,y){return _[8].wl[0]!==0||_[8].wl[1]!==0?Xt:Wt}let H=p(r),E=H(r);const d=[xt,Zt],h=[];function P(_,y){return _[8].mix_teams.length!==0?0:1}n=P(r),m=h[n]=d[n](r);function U(){return r[3](r[4],r[7])}return{c(){e=z("td"),E.c(),l=N(),t=z("br"),a=N(),m.c(),f=N(),s=z("br"),o=N(),i=z("button"),k=Q("\u{1F53B}"),this.h()},l(_){e=A(_,"TD",{class:!0});var y=L(e);E.l(y),l=R(y),t=A(y,"BR",{}),a=R(y),m.l(y),f=R(y),s=A(y,"BR",{}),o=R(y),i=A(y,"BUTTON",{class:!0});var D=L(i);k=V(D,"\u{1F53B}"),D.forEach(c),y.forEach(c),this.h()},h(){W(i,"class","svelte-ncaz9j"),W(e,"class","svelte-ncaz9j")},m(_,y){O(_,e,y),E.m(e,null),u(e,l),u(e,t),u(e,a),h[n].m(e,null),u(e,f),u(e,s),u(e,o),u(e,i),u(i,k),b=!0,v||(j=gt(i,"click",U),v=!0)},p(_,y){r=_,H===(H=p(r))&&E?E.p(r,y):(E.d(1),E=H(r),E&&(E.c(),E.m(e,l)));let D=n;n=P(r),n===D?h[n].p(r,y):(me(),B(h[D],1,1,()=>{h[D]=null}),oe(),m=h[n],m?m.p(r,y):(m=h[n]=d[n](r),m.c()),g(m,1),m.m(e,f))},i(_){b||(g(m),b=!0)},o(_){B(m),b=!1},d(_){_&&c(e),E.d(),h[n].d(),v=!1,j()}}}function ft(r){let e,l,t,a,n,m;t=new vt({props:{name:r[4]}});let f=r[0].right.members,s=[];for(let i=0;i<f.length;i+=1)s[i]=st(nt(r,f,i));const o=i=>B(s[i],1,1,()=>{s[i]=null});return{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=N();for(let i=0;i<s.length;i+=1)s[i].c();n=N(),this.h()},l(i){e=A(i,"TR",{});var k=L(e);l=A(k,"TD",{class:!0});var b=L(l);S(t.$$.fragment,b),b.forEach(c),a=R(k);for(let v=0;v<s.length;v+=1)s[v].l(k);n=R(k),k.forEach(c),this.h()},h(){W(l,"class","tar svelte-ncaz9j")},m(i,k){O(i,e,k),u(e,l),F(t,l,null),u(e,a);for(let b=0;b<s.length;b+=1)s[b].m(e,null);u(e,n),m=!0},p(i,k){const b={};if(k&1&&(b.name=i[4]),t.$set(b),k&1){f=i[0].right.members;let v;for(v=0;v<f.length;v+=1){const j=nt(i,f,v);s[v]?(s[v].p(j,k),g(s[v],1)):(s[v]=st(j),s[v].c(),g(s[v],1),s[v].m(e,n))}for(me(),v=f.length;v<s.length;v+=1)o(v);oe()}},i(i){if(!m){g(t.$$.fragment,i);for(let k=0;k<f.length;k+=1)g(s[k]);m=!0}},o(i){B(t.$$.fragment,i),s=s.filter(Boolean);for(let k=0;k<s.length;k+=1)B(s[k]);m=!1},d(i){i&&c(e),C(t),ye(s,i)}}}function mt(r){let e,l;return e=new Gt({}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function el(r){var He,be;let e,l=((He=r[0])==null?void 0:He.left.name)+"",t,a,n=((be=r[0])==null?void 0:be.right.name)+"",m,f,s,o,i,k,b,v,j,p,H,E,d,h,P,U,_,y,D,T,I,ee,x,ie,ae;const Ne=[Kt,Jt],re=[];function Re($,M){return M&3&&(k=null),k==null&&(k=$[1][Ye($[0].left.name,$[0].right.name)].matches.length>0),k?0:1}b=Re(r,-1),v=re[b]=Ne[b](r);let se=r[0].right.members,J=[];for(let $=0;$<se.length;$+=1)J[$]=at(rt(r,se,$));const Be=$=>B(J[$],1,1,()=>{J[$]=null});let _e=r[0].left.members,K=[];for(let $=0;$<_e.length;$+=1)K[$]=ft(lt(r,_e,$));const je=$=>B(K[$],1,1,()=>{K[$]=null});let Z=r[2]&&mt();return{c(){e=z("h2"),t=Q(l),a=Q(" \u{1F19A} "),m=Q(n),f=N(),s=z("h3"),o=Q("\u5BFE\u6226"),i=N(),v.c(),j=N(),p=z("h3"),H=Q("\u30E1\u30F3\u30D0\u30FC"),E=N(),d=z("p"),h=Q("\u4E0A\u6BB5: \u5BFE\u6226\u6210\u7E3E  \u4E2D\u6BB5: \u540C\u4E00\u30C1\u30FC\u30E0\u3067\u306E\u5927\u4F1A\u51FA\u5834\u56DE\u6570 \u4E0B\u6BB5: \u8A73\u7D30\u8868\u793A"),P=N(),U=z("table"),_=z("thead"),y=z("tr"),D=z("td"),T=N();for(let $=0;$<J.length;$+=1)J[$].c();I=N(),ee=z("tbody");for(let $=0;$<K.length;$+=1)K[$].c();x=N(),Z&&Z.c(),ie=De(),this.h()},l($){e=A($,"H2",{});var M=L(e);t=V(M,l),a=V(M," \u{1F19A} "),m=V(M,n),M.forEach(c),f=R($),s=A($,"H3",{});var ne=L(s);o=V(ne,"\u5BFE\u6226"),ne.forEach(c),i=R($),v.l($),j=R($),p=A($,"H3",{});var ce=L(p);H=V(ce,"\u30E1\u30F3\u30D0\u30FC"),ce.forEach(c),E=R($),d=A($,"P",{});var ke=L(d);h=V(ke,"\u4E0A\u6BB5: \u5BFE\u6226\u6210\u7E3E  \u4E2D\u6BB5: \u540C\u4E00\u30C1\u30FC\u30E0\u3067\u306E\u5927\u4F1A\u51FA\u5834\u56DE\u6570 \u4E0B\u6BB5: \u8A73\u7D30\u8868\u793A"),ke.forEach(c),P=R($),U=A($,"TABLE",{style:!0,class:!0});var Y=L(U);_=A(Y,"THEAD",{});var ue=L(_);y=A(ue,"TR",{});var we=L(y);D=A(we,"TD",{style:!0,class:!0}),L(D).forEach(c),T=R(we);for(let $e=0;$e<J.length;$e+=1)J[$e].l(we);we.forEach(c),ue.forEach(c),I=R(Y),ee=A(Y,"TBODY",{});var pe=L(ee);for(let $e=0;$e<K.length;$e+=1)K[$e].l(pe);pe.forEach(c),Y.forEach(c),x=R($),Z&&Z.l($),ie=De(),this.h()},h(){ge(D,"width",r[0].column_width+"%"),W(D,"class","svelte-ncaz9j"),ge(U,"margin-top","10px"),W(U,"class","svelte-ncaz9j")},m($,M){O($,e,M),u(e,t),u(e,a),u(e,m),O($,f,M),O($,s,M),u(s,o),O($,i,M),re[b].m($,M),O($,j,M),O($,p,M),u(p,H),O($,E,M),O($,d,M),u(d,h),O($,P,M),O($,U,M),u(U,_),u(_,y),u(y,D),u(y,T);for(let ne=0;ne<J.length;ne+=1)J[ne].m(y,null);u(U,I),u(U,ee);for(let ne=0;ne<K.length;ne+=1)K[ne].m(ee,null);O($,x,M),Z&&Z.m($,M),O($,ie,M),ae=!0},p($,[M]){var ce,ke;(!ae||M&1)&&l!==(l=((ce=$[0])==null?void 0:ce.left.name)+"")&&fe(t,l),(!ae||M&1)&&n!==(n=((ke=$[0])==null?void 0:ke.right.name)+"")&&fe(m,n);let ne=b;if(b=Re($,M),b===ne?re[b].p($,M):(me(),B(re[ne],1,1,()=>{re[ne]=null}),oe(),v=re[b],v?v.p($,M):(v=re[b]=Ne[b]($),v.c()),g(v,1),v.m(j.parentNode,j)),(!ae||M&1)&&ge(D,"width",$[0].column_width+"%"),M&1){se=$[0].right.members;let Y;for(Y=0;Y<se.length;Y+=1){const ue=rt($,se,Y);J[Y]?(J[Y].p(ue,M),g(J[Y],1)):(J[Y]=at(ue),J[Y].c(),g(J[Y],1),J[Y].m(y,null))}for(me(),Y=se.length;Y<J.length;Y+=1)Be(Y);oe()}if(M&1){_e=$[0].left.members;let Y;for(Y=0;Y<_e.length;Y+=1){const ue=lt($,_e,Y);K[Y]?(K[Y].p(ue,M),g(K[Y],1)):(K[Y]=ft(ue),K[Y].c(),g(K[Y],1),K[Y].m(ee,null))}for(me(),Y=_e.length;Y<K.length;Y+=1)je(Y);oe()}$[2]?Z?M&4&&g(Z,1):(Z=mt(),Z.c(),g(Z,1),Z.m(ie.parentNode,ie)):Z&&(me(),B(Z,1,1,()=>{Z=null}),oe())},i($){if(!ae){g(v);for(let M=0;M<se.length;M+=1)g(J[M]);for(let M=0;M<_e.length;M+=1)g(K[M]);g(Z),ae=!0}},o($){B(v),J=J.filter(Boolean);for(let M=0;M<J.length;M+=1)B(J[M]);K=K.filter(Boolean);for(let M=0;M<K.length;M+=1)B(K[M]);B(Z),ae=!1},d($){$&&c(e),$&&c(f),$&&c(s),$&&c(i),re[b].d($),$&&c(j),$&&c(p),$&&c(E),$&&c(d),$&&c(P),$&&c(U),ye(J,$),ye(K,$),$&&c(x),Z&&Z.d($),$&&c(ie)}}}function tl(r,e,l){let t,a,n;return Ee(r,Ce,f=>l(0,t=f)),Ee(r,Fe,f=>l(1,a=f)),Ee(r,qe,f=>l(2,n=f)),[t,a,n,(f,s)=>Ot(t,f,s)]}class ll extends Pe{constructor(e){super();ze(this,e,tl,el,Ae,{})}}function ot(r,e,l){const t=r.slice();return t[6]=e[l],t[8]=l,t}function it(r,e,l){const t=r.slice();t[9]=e[l],t[12]=l;const a=t[1][Ye(t[6].team_name,t[9].team_name)];return t[10]=a,t}function ct(r,e,l){const t=r.slice();return t[13]=e[l],t[8]=l,t}function nl(r){let e,l;return e=new Rt({}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p:he,i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function rl(r){let e,l,t,a,n,m,f,s,o,i,k,b,v,j,p,H=r[0].teams,E=[];for(let _=0;_<H.length;_+=1)E[_]=ut(ct(r,H,_));let d=r[0].teams,h=[];for(let _=0;_<d.length;_+=1)h[_]=ht(ot(r,d,_));const P=_=>B(h[_],1,1,()=>{h[_]=null});let U=r[2]&&pt();return{c(){e=z("table"),l=z("thead"),t=z("tr"),a=z("th"),n=Q("No."),m=N(),f=z("th"),s=N();for(let _=0;_<E.length;_+=1)E[_].c();o=N(),i=z("th"),k=N(),b=z("tbody");for(let _=0;_<h.length;_+=1)h[_].c();v=N(),U&&U.c(),j=De(),this.h()},l(_){e=A(_,"TABLE",{style:!0,class:!0});var y=L(e);l=A(y,"THEAD",{});var D=L(l);t=A(D,"TR",{});var T=L(t);a=A(T,"TH",{class:!0,style:!0});var I=L(a);n=V(I,"No."),I.forEach(c),m=R(T),f=A(T,"TH",{class:!0,style:!0}),L(f).forEach(c),s=R(T);for(let x=0;x<E.length;x+=1)E[x].l(T);o=R(T),i=A(T,"TH",{class:!0}),L(i).forEach(c),T.forEach(c),D.forEach(c),k=R(y),b=A(y,"TBODY",{});var ee=L(b);for(let x=0;x<h.length;x+=1)h[x].l(ee);ee.forEach(c),y.forEach(c),v=R(_),U&&U.l(_),j=De(),this.h()},h(){W(a,"class","nw svelte-a2jgif"),ge(a,"width","2.5em"),W(f,"class","nw tal svelte-a2jgif"),ge(f,"width","10em"),W(i,"class","svelte-a2jgif"),ge(e,"margin-top","10px"),W(e,"class","svelte-a2jgif")},m(_,y){O(_,e,y),u(e,l),u(l,t),u(t,a),u(a,n),u(t,m),u(t,f),u(t,s);for(let D=0;D<E.length;D+=1)E[D].m(t,null);u(t,o),u(t,i),u(e,k),u(e,b);for(let D=0;D<h.length;D+=1)h[D].m(b,null);O(_,v,y),U&&U.m(_,y),O(_,j,y),p=!0},p(_,y){if(y&1){H=_[0].teams;let D;for(D=0;D<H.length;D+=1){const T=ct(_,H,D);E[D]?E[D].p(T,y):(E[D]=ut(T),E[D].c(),E[D].m(t,o))}for(;D<E.length;D+=1)E[D].d(1);E.length=H.length}if(y&3){d=_[0].teams;let D;for(D=0;D<d.length;D+=1){const T=ot(_,d,D);h[D]?(h[D].p(T,y),g(h[D],1)):(h[D]=ht(T),h[D].c(),g(h[D],1),h[D].m(b,null))}for(me(),D=d.length;D<h.length;D+=1)P(D);oe()}_[2]?U?y&4&&g(U,1):(U=pt(),U.c(),g(U,1),U.m(j.parentNode,j)):U&&(me(),B(U,1,1,()=>{U=null}),oe())},i(_){if(!p){for(let y=0;y<d.length;y+=1)g(h[y]);g(U),p=!0}},o(_){h=h.filter(Boolean);for(let y=0;y<h.length;y+=1)B(h[y]);B(U),p=!1},d(_){_&&c(e),ye(E,_),ye(h,_),_&&c(v),U&&U.d(_),_&&c(j)}}}function ut(r){let e,l=r[8]+1+"",t;return{c(){e=z("th"),t=Q(l),this.h()},l(a){e=A(a,"TH",{class:!0,style:!0});var n=L(e);t=V(n,l),n.forEach(c),this.h()},h(){W(e,"class","nw svelte-a2jgif"),ge(e,"width","4em")},m(a,n){O(a,e,n),u(e,t)},p:he,d(a){a&&c(e)}}}function al(r){let e,l,t,a,n,m,f,s=r[10].matches.length>0&&_t(r);function o(){return r[3](r[6],r[9])}return{c(){s&&s.c(),e=N(),l=z("br"),t=N(),a=z("button"),n=Q("\u{1F53B}"),this.h()},l(i){s&&s.l(i),e=R(i),l=A(i,"BR",{}),t=R(i),a=A(i,"BUTTON",{class:!0});var k=L(a);n=V(k,"\u{1F53B}"),k.forEach(c),this.h()},h(){W(a,"class","svelte-a2jgif")},m(i,k){s&&s.m(i,k),O(i,e,k),O(i,l,k),O(i,t,k),O(i,a,k),u(a,n),m||(f=gt(a,"click",o),m=!0)},p(i,k){r=i,r[10].matches.length>0?s?s.p(r,k):(s=_t(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&c(e),i&&c(l),i&&c(t),i&&c(a),m=!1,f()}}}function _t(r){let e=r[10].wl[0]+"",l,t,a=r[10].wl[1]+"",n;return{c(){l=Q(e),t=Q(" - "),n=Q(a)},l(m){l=V(m,e),t=V(m," - "),n=V(m,a)},m(m,f){O(m,l,f),O(m,t,f),O(m,n,f)},p(m,f){f&3&&e!==(e=m[10].wl[0]+"")&&fe(l,e),f&3&&a!==(a=m[10].wl[1]+"")&&fe(n,a)},d(m){m&&c(l),m&&c(t),m&&c(n)}}}function $t(r){let e,l=r[8]!==r[12]&&al(r);return{c(){e=z("td"),l&&l.c(),this.h()},l(t){e=A(t,"TD",{class:!0});var a=L(e);l&&l.l(a),a.forEach(c),this.h()},h(){W(e,"class","svelte-a2jgif")},m(t,a){O(t,e,a),l&&l.m(e,null)},p(t,a){t[8]!==t[12]&&l.p(t,a)},d(t){t&&c(e),l&&l.d()}}}function ht(r){let e,l,t=r[8]+1+"",a,n,m,f,s,o,i,k,b;f=new Se({props:{name:r[6].team_name}});let v=r[0].teams,j=[];for(let p=0;p<v.length;p+=1)j[p]=$t(it(r,v,p));return{c(){e=z("tr"),l=z("th"),a=Q(t),n=N(),m=z("td"),q(f.$$.fragment),s=N();for(let p=0;p<j.length;p+=1)j[p].c();o=N(),i=z("td"),k=N(),this.h()},l(p){e=A(p,"TR",{});var H=L(e);l=A(H,"TH",{class:!0});var E=L(l);a=V(E,t),E.forEach(c),n=R(H),m=A(H,"TD",{class:!0});var d=L(m);S(f.$$.fragment,d),d.forEach(c),s=R(H);for(let h=0;h<j.length;h+=1)j[h].l(H);o=R(H),i=A(H,"TD",{class:!0}),L(i).forEach(c),k=R(H),H.forEach(c),this.h()},h(){W(l,"class","nw svelte-a2jgif"),W(m,"class","nw tal svelte-a2jgif"),W(i,"class","svelte-a2jgif")},m(p,H){O(p,e,H),u(e,l),u(l,a),u(e,n),u(e,m),F(f,m,null),u(e,s);for(let E=0;E<j.length;E+=1)j[E].m(e,null);u(e,o),u(e,i),u(e,k),b=!0},p(p,H){const E={};if(H&1&&(E.name=p[6].team_name),f.$set(E),H&3){v=p[0].teams;let d;for(d=0;d<v.length;d+=1){const h=it(p,v,d);j[d]?j[d].p(h,H):(j[d]=$t(h),j[d].c(),j[d].m(e,o))}for(;d<j.length;d+=1)j[d].d(1);j.length=v.length}},i(p){b||(g(f.$$.fragment,p),b=!0)},o(p){B(f.$$.fragment,p),b=!1},d(p){p&&c(e),C(f),ye(j,p)}}}function pt(r){let e,l;return e=new ll({}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function sl(r){let e,l,t,a;const n=[rl,nl],m=[];function f(s,o){return s[0]?0:1}return e=f(r),l=m[e]=n[e](r),{c(){l.c(),t=De()},l(s){l.l(s),t=De()},m(s,o){m[e].m(s,o),O(s,t,o),a=!0},p(s,[o]){let i=e;e=f(s),e===i?m[e].p(s,o):(me(),B(m[i],1,1,()=>{m[i]=null}),oe(),l=m[e],l?l.p(s,o):(l=m[e]=n[e](s),l.c()),g(l,1),l.m(t.parentNode,t))},i(s){a||(g(l),a=!0)},o(s){B(l),a=!1},d(s){m[e].d(s),s&&c(t)}}}function fl(r,e,l){let t,a,n,m;Ee(r,Je,o=>l(4,t=o)),Ee(r,Ue,o=>l(0,a=o)),Ee(r,Fe,o=>l(1,n=o)),Ee(r,Ce,o=>l(2,m=o)),yt(()=>{f(null)}),Et(()=>Ue.set(null));async function f(o){Ue.set(null),Je.set(jt(o,"l")),t!==null&&Nt(`log/${t}.json`).then(i=>{if(i.status===404)throw new Error("NOT FOUND");return i.json()}).then(i=>{Ht(i)}).catch(i=>{i.message==="NOT FOUND"&&Dt(`${Bt}/`,{})})}return[a,n,m,(o,i)=>Mt(a,o.team_name,i.team_name)]}class bl extends Pe{constructor(e){super();ze(this,e,fl,sl,Ae,{})}}export{bl as default};