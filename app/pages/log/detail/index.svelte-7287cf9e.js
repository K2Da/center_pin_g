import{D as Le,S as Pe,i as ze,s as Ae,e as z,w as q,k as j,c as A,a as L,x as S,m as N,d as c,b as V,f as ge,g as O,H as _,y as F,q as b,o as B,B as C,t as W,h as G,j as fe,n as me,p as oe,R as ye,l as De,M as Ee,O as he,I as gt,W as Et}from"../../../chunks/vendor-aa1ac626.js";import{a as yt,g as Dt}from"../../../chunks/navigation-c0b2019f.js";import{b as Bt}from"../../../chunks/paths-4b3c6e7e.js";import{d as Rt,f as jt}from"../../../chunks/global-7f6d1fbb.js";import{T as Oe,D as bt,P as Nt}from"../../../chunks/PopUpA-5ccde3a3.js";import{T as Se,a as kt}from"../../../chunks/TeamName-61f63bec.js";import{T as dt}from"../../../chunks/TournamentName-4bdb95da.js";import{S as ke,P as wt}from"../../../chunks/PlayerName-bb46b055.js";import{P as vt}from"../../../chunks/PlayersLine-381dd53c.js";import{M as Je}from"../../../chunks/MatchResult-a07c19bf.js";import"../../../chunks/singletons-a6a7384f.js";const Ke=Le(""),Ue=Le(null),Fe=Le({}),Ce=Le(null),qe=Le(null);function Ht(r){Ue.set(r);const e={};for(const l of r.teams)for(const t of r.teams)e[`${l.team_name}	${t.team_name}`]={matches:[],wl:[0,0]};for(const l of r.team_matches){const t=`${l.winner_current_name}	${l.loser_current_name}`,a=`${l.loser_current_name}	${l.winner_current_name}`;e[t].wl[0]+=1,e[t].matches.push(l),e[a].wl[1]+=1,e[a].matches.push(l)}Fe.set(e)}function Mt(r,e,l){const t=r.teams.filter(m=>m.team_name==e).flatMap(m=>m.members),a=r.teams.filter(m=>m.team_name==l).flatMap(m=>m.members),n=Pt(r,t,a);Ce.set({left:{name:e,members:t},right:{name:l,members:a},column_width:Math.floor(100/(a.length+1)),member_relation:n}),qe.set(null)}function Ot(r,e,l){qe.set({left:e,right:l,relation:r.member_relation[`${e}	${l}`]})}function Pt(r,e,l){const t={};for(const a of e)for(const n of l){const m=`${a}	${n}`;t[m]={matches:[],wl:[0,0],mix_teams:[]}}for(const a of r.member_matches)for(const n of e)for(const m of l){const f=`${n}	${m}`;a.winner_players.includes(n)&&a.loser_players.includes(m)&&(t[f].wl[0]+=1,t[f].matches.push(a)),a.winner_players.includes(m)&&a.loser_players.includes(n)&&(t[f].wl[1]+=1,t[f].matches.push(a))}for(const a of r.mix_teams)for(const n of e)for(const m of l)if(a.team_players.includes(n)&&a.team_players.includes(m)){const f=`${n}	${m}`;t[f].mix_teams.push(a)}return t}function Ye(r,e){return`${r}	${e}`}function zt(r,e){const l={name:r.winner_name,current_name:r.winner_current_name,score:r.winner_score,rank:r.winner_rank,players:r.winner_players,result:"w"},t={name:r.loser_name,current_name:r.loser_current_name,score:r.loser_score,rank:r.loser_rank,players:r.loser_players,result:"l"};return r.winner_current_name===e||r.winner_players.includes(e)?{team1:l,team2:t}:{team1:t,team2:l}}function At(r){let e,l,t,a,n,m,f,s,o,i,d,k,v,R;return t=new ke({props:{s:2}}),n=new Oe({props:{t:"\u767B\u9332\u540D "}}),f=new Se({props:{name:r[0].name,current_name:r[0].current_name}}),i=new kt({props:{rank:r[0].rank}}),v=new vt({props:{players:r[0].players}}),{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=j(),q(n.$$.fragment),m=j(),q(f.$$.fragment),s=j(),o=z("td"),q(i.$$.fragment),d=j(),k=z("td"),q(v.$$.fragment),this.h()},l(p){e=A(p,"TR",{});var H=L(e);l=A(H,"TD",{class:!0,style:!0});var T=L(l);S(t.$$.fragment,T),a=N(T),S(n.$$.fragment,T),m=N(T),S(f.$$.fragment,T),T.forEach(c),s=N(H),o=A(H,"TD",{class:!0,style:!0});var g=L(o);S(i.$$.fragment,g),g.forEach(c),d=N(H),k=A(H,"TD",{class:!0});var h=L(k);S(v.$$.fragment,h),h.forEach(c),H.forEach(c),this.h()},h(){V(l,"class","tal"),ge(l,"width","20em"),V(o,"class","tal"),ge(o,"width","4em"),V(k,"class","tal")},m(p,H){O(p,e,H),_(e,l),F(t,l,null),_(l,a),F(n,l,null),_(l,m),F(f,l,null),_(e,s),_(e,o),F(i,o,null),_(e,d),_(e,k),F(v,k,null),R=!0},p(p,[H]){const T={};H&1&&(T.name=p[0].name),H&1&&(T.current_name=p[0].current_name),f.$set(T);const g={};H&1&&(g.rank=p[0].rank),i.$set(g);const h={};H&1&&(h.players=p[0].players),v.$set(h)},i(p){R||(b(t.$$.fragment,p),b(n.$$.fragment,p),b(f.$$.fragment,p),b(i.$$.fragment,p),b(v.$$.fragment,p),R=!0)},o(p){B(t.$$.fragment,p),B(n.$$.fragment,p),B(f.$$.fragment,p),B(i.$$.fragment,p),B(v.$$.fragment,p),R=!1},d(p){p&&c(e),C(t),C(n),C(f),C(i),C(v)}}}function Lt(r,e,l){let{team_match:t}=e;return r.$$set=a=>{"team_match"in a&&l(0,t=a.team_match)},[t]}class Qe extends Pe{constructor(e){super();ze(this,e,Lt,At,Ae,{team_match:0})}}function Ve(r){let e,l,t,a,n=r[0].match_bracket+"",m,f;return e=new ke({props:{s:2}}),t=new Oe({props:{t:"\u30D6\u30E9\u30B1\u30C3\u30C8"}}),{c(){q(e.$$.fragment),l=j(),q(t.$$.fragment),a=j(),m=W(n)},l(s){S(e.$$.fragment,s),l=N(s),S(t.$$.fragment,s),a=N(s),m=G(s,n)},m(s,o){F(e,s,o),O(s,l,o),F(t,s,o),O(s,a,o),O(s,m,o),f=!0},p(s,o){(!f||o&1)&&n!==(n=s[0].match_bracket+"")&&fe(m,n)},i(s){f||(b(e.$$.fragment,s),b(t.$$.fragment,s),f=!0)},o(s){B(e.$$.fragment,s),B(t.$$.fragment,s),f=!1},d(s){C(e,s),s&&c(l),C(t,s),s&&c(a),s&&c(m)}}}function Ut(r){let e,l,t,a,n,m,f,s,o,i,d,k,v,R,p,H=r[0].match_round+"",T,g,h,P,U,u,y,D,E,I,ee=r[1].team1.current_name+"",x,ie,ae,je,re,Ne,se,K,Be=r[1].team1.score+"",_e,Q,Re=r[1].team2.score+"",Z,He,be,$,M,ne,ce,de,Y=r[1].team2.current_name+"",ue,we,pe,$e,Te,ve;t=new bt({props:{date:r[0].tournament_date}}),n=new ke({props:{s:2}}),f=new Oe({props:{t:"\u5927\u4F1A"}}),o=new dt({props:{name:r[0].tournament_name,key:r[0].tournament_key,official:!1}});let te=r[0].match_bracket&&Ve(r);return k=new ke({props:{s:2}}),R=new Oe({props:{t:"\u30E9\u30A6\u30F3\u30C9"}}),U=new ke({props:{s:2}}),y=new Oe({props:{t:"\u7D50\u679C"}}),E=new ke({props:{s:1}}),ae=new ke({props:{s:2}}),re=new Je({props:{win:r[1].team1.result==="w"}}),se=new ke({props:{s:1}}),be=new ke({props:{s:1}}),M=new Je({props:{win:r[1].team2.result==="w"}}),ce=new ke({props:{s:2}}),pe=new Qe({props:{team_match:r[1].team1}}),Te=new Qe({props:{team_match:r[1].team2}}),{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=j(),q(n.$$.fragment),m=j(),q(f.$$.fragment),s=j(),q(o.$$.fragment),i=j(),te&&te.c(),d=j(),q(k.$$.fragment),v=j(),q(R.$$.fragment),p=j(),T=W(H),g=j(),h=z("tr"),P=z("td"),q(U.$$.fragment),u=j(),q(y.$$.fragment),D=j(),q(E.$$.fragment),I=j(),x=W(ee),ie=j(),q(ae.$$.fragment),je=j(),q(re.$$.fragment),Ne=j(),q(se.$$.fragment),K=j(),_e=W(Be),Q=W(" - "),Z=W(Re),He=j(),q(be.$$.fragment),$=j(),q(M.$$.fragment),ne=j(),q(ce.$$.fragment),de=j(),ue=W(Y),we=j(),q(pe.$$.fragment),$e=j(),q(Te.$$.fragment),this.h()},l(w){e=A(w,"TR",{});var X=L(e);l=A(X,"TD",{class:!0,colspan:!0});var le=L(l);S(t.$$.fragment,le),a=N(le),S(n.$$.fragment,le),m=N(le),S(f.$$.fragment,le),s=N(le),S(o.$$.fragment,le),i=N(le),te&&te.l(le),d=N(le),S(k.$$.fragment,le),v=N(le),S(R.$$.fragment,le),p=N(le),T=G(le,H),le.forEach(c),X.forEach(c),g=N(w),h=A(w,"TR",{});var Me=L(h);P=A(Me,"TD",{class:!0,colspan:!0});var J=L(P);S(U.$$.fragment,J),u=N(J),S(y.$$.fragment,J),D=N(J),S(E.$$.fragment,J),I=N(J),x=G(J,ee),ie=N(J),S(ae.$$.fragment,J),je=N(J),S(re.$$.fragment,J),Ne=N(J),S(se.$$.fragment,J),K=N(J),_e=G(J,Be),Q=G(J," - "),Z=G(J,Re),He=N(J),S(be.$$.fragment,J),$=N(J),S(M.$$.fragment,J),ne=N(J),S(ce.$$.fragment,J),de=N(J),ue=G(J,Y),J.forEach(c),Me.forEach(c),we=N(w),S(pe.$$.fragment,w),$e=N(w),S(Te.$$.fragment,w),this.h()},h(){V(l,"class","tal"),V(l,"colspan","3"),V(P,"class","tal"),V(P,"colspan","3")},m(w,X){O(w,e,X),_(e,l),F(t,l,null),_(l,a),F(n,l,null),_(l,m),F(f,l,null),_(l,s),F(o,l,null),_(l,i),te&&te.m(l,null),_(l,d),F(k,l,null),_(l,v),F(R,l,null),_(l,p),_(l,T),O(w,g,X),O(w,h,X),_(h,P),F(U,P,null),_(P,u),F(y,P,null),_(P,D),F(E,P,null),_(P,I),_(P,x),_(P,ie),F(ae,P,null),_(P,je),F(re,P,null),_(P,Ne),F(se,P,null),_(P,K),_(P,_e),_(P,Q),_(P,Z),_(P,He),F(be,P,null),_(P,$),F(M,P,null),_(P,ne),F(ce,P,null),_(P,de),_(P,ue),O(w,we,X),F(pe,w,X),O(w,$e,X),F(Te,w,X),ve=!0},p(w,[X]){const le={};X&1&&(le.date=w[0].tournament_date),t.$set(le);const Me={};X&1&&(Me.name=w[0].tournament_name),X&1&&(Me.key=w[0].tournament_key),o.$set(Me),w[0].match_bracket?te?(te.p(w,X),X&1&&b(te,1)):(te=Ve(w),te.c(),b(te,1),te.m(l,d)):te&&(me(),B(te,1,1,()=>{te=null}),oe()),(!ve||X&1)&&H!==(H=w[0].match_round+"")&&fe(T,H),(!ve||X&2)&&ee!==(ee=w[1].team1.current_name+"")&&fe(x,ee);const J={};X&2&&(J.win=w[1].team1.result==="w"),re.$set(J),(!ve||X&2)&&Be!==(Be=w[1].team1.score+"")&&fe(_e,Be),(!ve||X&2)&&Re!==(Re=w[1].team2.score+"")&&fe(Z,Re);const Ie={};X&2&&(Ie.win=w[1].team2.result==="w"),M.$set(Ie),(!ve||X&2)&&Y!==(Y=w[1].team2.current_name+"")&&fe(ue,Y);const We={};X&2&&(We.team_match=w[1].team1),pe.$set(We);const Ge={};X&2&&(Ge.team_match=w[1].team2),Te.$set(Ge)},i(w){ve||(b(t.$$.fragment,w),b(n.$$.fragment,w),b(f.$$.fragment,w),b(o.$$.fragment,w),b(te),b(k.$$.fragment,w),b(R.$$.fragment,w),b(U.$$.fragment,w),b(y.$$.fragment,w),b(E.$$.fragment,w),b(ae.$$.fragment,w),b(re.$$.fragment,w),b(se.$$.fragment,w),b(be.$$.fragment,w),b(M.$$.fragment,w),b(ce.$$.fragment,w),b(pe.$$.fragment,w),b(Te.$$.fragment,w),ve=!0)},o(w){B(t.$$.fragment,w),B(n.$$.fragment,w),B(f.$$.fragment,w),B(o.$$.fragment,w),B(te),B(k.$$.fragment,w),B(R.$$.fragment,w),B(U.$$.fragment,w),B(y.$$.fragment,w),B(E.$$.fragment,w),B(ae.$$.fragment,w),B(re.$$.fragment,w),B(se.$$.fragment,w),B(be.$$.fragment,w),B(M.$$.fragment,w),B(ce.$$.fragment,w),B(pe.$$.fragment,w),B(Te.$$.fragment,w),ve=!1},d(w){w&&c(e),C(t),C(n),C(f),C(o),te&&te.d(),C(k),C(R),w&&c(g),w&&c(h),C(U),C(y),C(E),C(ae),C(re),C(se),C(be),C(M),C(ce),w&&c(we),C(pe,w),w&&c($e),C(Te,w)}}}function Yt(r,e,l){let{match:t}=e,{teams:a}=e;return r.$$set=n=>{"match"in n&&l(0,t=n.match),"teams"in n&&l(1,a=n.teams)},[t,a]}class qt extends Pe{constructor(e){super();ze(this,e,Yt,Ut,Ae,{match:0,teams:1})}}function Xe(r,e,l){const t=r.slice();t[2]=e[l];const a=zt(t[2],t[1]);return t[3]=a,t}function Ze(r){let e,l;return e=new qt({props:{match:r[2],teams:r[3]}}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p(t,a){const n={};a&1&&(n.match=t[2]),a&3&&(n.teams=t[3]),e.$set(n)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function St(r){let e,l,t,a=r[0],n=[];for(let f=0;f<a.length;f+=1)n[f]=Ze(Xe(r,a,f));const m=f=>B(n[f],1,1,()=>{n[f]=null});return{c(){e=z("table"),l=z("tbody");for(let f=0;f<n.length;f+=1)n[f].c();this.h()},l(f){e=A(f,"TABLE",{});var s=L(e);l=A(s,"TBODY",{class:!0});var o=L(l);for(let i=0;i<n.length;i+=1)n[i].l(o);o.forEach(c),s.forEach(c),this.h()},h(){V(l,"class","quad")},m(f,s){O(f,e,s),_(e,l);for(let o=0;o<n.length;o+=1)n[o].m(l,null);t=!0},p(f,[s]){if(s&3){a=f[0];let o;for(o=0;o<a.length;o+=1){const i=Xe(f,a,o);n[o]?(n[o].p(i,s),b(n[o],1)):(n[o]=Ze(i),n[o].c(),b(n[o],1),n[o].m(l,null))}for(me(),o=a.length;o<n.length;o+=1)m(o);oe()}},i(f){if(!t){for(let s=0;s<a.length;s+=1)b(n[s]);t=!0}},o(f){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)B(n[s]);t=!1},d(f){f&&c(e),ye(n,f)}}}function Ft(r,e,l){let{matches:t}=e,{left:a}=e;return r.$$set=n=>{"matches"in n&&l(0,t=n.matches),"left"in n&&l(1,a=n.left)},[t,a]}class Tt extends Pe{constructor(e){super();ze(this,e,Ft,St,Ae,{matches:0,left:1})}}function xe(r,e,l){const t=r.slice();return t[1]=e[l],t}function Ct(r){let e,l;return{c(){e=z("p"),l=W("-")},l(t){e=A(t,"P",{});var a=L(e);l=G(a,"-"),a.forEach(c)},m(t,a){O(t,e,a),_(e,l)},p:he,i:he,o:he,d(t){t&&c(e)}}}function It(r){let e,l;return e=new Tt({props:{matches:r[0].relation.matches,left:r[0].left}}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p(t,a){const n={};a&1&&(n.matches=t[0].relation.matches),a&1&&(n.left=t[0].left),e.$set(n)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function et(r){let e,l,t,a=r[0].relation.mix_teams,n=[];for(let f=0;f<a.length;f+=1)n[f]=tt(xe(r,a,f));const m=f=>B(n[f],1,1,()=>{n[f]=null});return{c(){e=z("table"),l=z("tbody");for(let f=0;f<n.length;f+=1)n[f].c()},l(f){e=A(f,"TABLE",{});var s=L(e);l=A(s,"TBODY",{});var o=L(l);for(let i=0;i<n.length;i+=1)n[i].l(o);o.forEach(c),s.forEach(c)},m(f,s){O(f,e,s),_(e,l);for(let o=0;o<n.length;o+=1)n[o].m(l,null);t=!0},p(f,s){if(s&1){a=f[0].relation.mix_teams;let o;for(o=0;o<a.length;o+=1){const i=xe(f,a,o);n[o]?(n[o].p(i,s),b(n[o],1)):(n[o]=tt(i),n[o].c(),b(n[o],1),n[o].m(l,null))}for(me(),o=a.length;o<n.length;o+=1)m(o);oe()}},i(f){if(!t){for(let s=0;s<a.length;s+=1)b(n[s]);t=!0}},o(f){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)B(n[s]);t=!1},d(f){f&&c(e),ye(n,f)}}}function tt(r){let e,l,t,a,n,m,f,s,o,i,d,k,v,R,p,H,T;return t=new bt({props:{date:r[1].tournament_date}}),m=new dt({props:{name:r[1].tournament_name,key:r[1].tournament_key,official:!1}}),o=new Se({props:{name:r[1].team_name,current_name:r[1].team_current_name}}),k=new kt({props:{rank:r[1].team_rank}}),p=new vt({props:{players:r[1].team_players}}),{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=j(),n=z("td"),q(m.$$.fragment),f=j(),s=z("td"),q(o.$$.fragment),i=j(),d=z("td"),q(k.$$.fragment),v=j(),R=z("td"),q(p.$$.fragment),H=j(),this.h()},l(g){e=A(g,"TR",{});var h=L(e);l=A(h,"TD",{});var P=L(l);S(t.$$.fragment,P),P.forEach(c),a=N(h),n=A(h,"TD",{class:!0});var U=L(n);S(m.$$.fragment,U),U.forEach(c),f=N(h),s=A(h,"TD",{class:!0});var u=L(s);S(o.$$.fragment,u),u.forEach(c),i=N(h),d=A(h,"TD",{});var y=L(d);S(k.$$.fragment,y),y.forEach(c),v=N(h),R=A(h,"TD",{class:!0});var D=L(R);S(p.$$.fragment,D),D.forEach(c),H=N(h),h.forEach(c),this.h()},h(){V(n,"class","tal"),V(s,"class","tal"),V(R,"class","tal")},m(g,h){O(g,e,h),_(e,l),F(t,l,null),_(e,a),_(e,n),F(m,n,null),_(e,f),_(e,s),F(o,s,null),_(e,i),_(e,d),F(k,d,null),_(e,v),_(e,R),F(p,R,null),_(e,H),T=!0},p(g,h){const P={};h&1&&(P.date=g[1].tournament_date),t.$set(P);const U={};h&1&&(U.name=g[1].tournament_name),h&1&&(U.key=g[1].tournament_key),m.$set(U);const u={};h&1&&(u.name=g[1].team_name),h&1&&(u.current_name=g[1].team_current_name),o.$set(u);const y={};h&1&&(y.rank=g[1].team_rank),k.$set(y);const D={};h&1&&(D.players=g[1].team_players),p.$set(D)},i(g){T||(b(t.$$.fragment,g),b(m.$$.fragment,g),b(o.$$.fragment,g),b(k.$$.fragment,g),b(p.$$.fragment,g),T=!0)},o(g){B(t.$$.fragment,g),B(m.$$.fragment,g),B(o.$$.fragment,g),B(k.$$.fragment,g),B(p.$$.fragment,g),T=!1},d(g){g&&c(e),C(t),C(m),C(o),C(k),C(p)}}}function Wt(r){var y,D;let e,l=((y=r[0])==null?void 0:y.left)+"",t,a,n=((D=r[0])==null?void 0:D.right)+"",m,f,s,o,i,d,k,v,R,p,H,T,g;const h=[It,Ct],P=[];function U(E,I){return E[0].relation.matches.length>0?0:1}d=U(r),k=P[d]=h[d](r);let u=r[0].relation.mix_teams.length>0&&et(r);return{c(){e=z("h2"),t=W(l),a=W(" \u{1F19A} "),m=W(n),f=j(),s=z("h3"),o=W("\u5BFE\u6226"),i=j(),k.c(),v=j(),R=z("h3"),p=W("\u540C\u4E00\u30C1\u30FC\u30E0\u51FA\u5834"),H=j(),u&&u.c(),T=De()},l(E){e=A(E,"H2",{});var I=L(e);t=G(I,l),a=G(I," \u{1F19A} "),m=G(I,n),I.forEach(c),f=N(E),s=A(E,"H3",{});var ee=L(s);o=G(ee,"\u5BFE\u6226"),ee.forEach(c),i=N(E),k.l(E),v=N(E),R=A(E,"H3",{});var x=L(R);p=G(x,"\u540C\u4E00\u30C1\u30FC\u30E0\u51FA\u5834"),x.forEach(c),H=N(E),u&&u.l(E),T=De()},m(E,I){O(E,e,I),_(e,t),_(e,a),_(e,m),O(E,f,I),O(E,s,I),_(s,o),O(E,i,I),P[d].m(E,I),O(E,v,I),O(E,R,I),_(R,p),O(E,H,I),u&&u.m(E,I),O(E,T,I),g=!0},p(E,[I]){var x,ie;(!g||I&1)&&l!==(l=((x=E[0])==null?void 0:x.left)+"")&&fe(t,l),(!g||I&1)&&n!==(n=((ie=E[0])==null?void 0:ie.right)+"")&&fe(m,n);let ee=d;d=U(E),d===ee?P[d].p(E,I):(me(),B(P[ee],1,1,()=>{P[ee]=null}),oe(),k=P[d],k?k.p(E,I):(k=P[d]=h[d](E),k.c()),b(k,1),k.m(v.parentNode,v)),E[0].relation.mix_teams.length>0?u?(u.p(E,I),I&1&&b(u,1)):(u=et(E),u.c(),b(u,1),u.m(T.parentNode,T)):u&&(me(),B(u,1,1,()=>{u=null}),oe())},i(E){g||(b(k),b(u),g=!0)},o(E){B(k),B(u),g=!1},d(E){E&&c(e),E&&c(f),E&&c(s),E&&c(i),P[d].d(E),E&&c(v),E&&c(R),E&&c(H),u&&u.d(E),E&&c(T)}}}function Gt(r,e,l){let t;return Ee(r,qe,a=>l(0,t=a)),[t]}class Jt extends Pe{constructor(e){super();ze(this,e,Gt,Wt,Ae,{})}}function lt(r,e,l){const t=r.slice();return t[4]=e[l],t}function nt(r,e,l){const t=r.slice();t[7]=e[l];const a=t[0].member_relation[`${t[4]}	${t[7]}`];return t[8]=a,t}function rt(r,e,l){const t=r.slice();return t[7]=e[l],t}function Kt(r){let e,l;return{c(){e=z("p"),l=W("-")},l(t){e=A(t,"P",{});var a=L(e);l=G(a,"-"),a.forEach(c)},m(t,a){O(t,e,a),_(e,l)},p:he,i:he,o:he,d(t){t&&c(e)}}}function Qt(r){let e,l;return e=new Tt({props:{matches:r[1][Ye(r[0].left.name,r[0].right.name)].matches,left:r[0].left.name}}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p(t,a){const n={};a&3&&(n.matches=t[1][Ye(t[0].left.name,t[0].right.name)].matches),a&1&&(n.left=t[0].left.name),e.$set(n)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function at(r){let e,l,t,a;return l=new wt({props:{name:r[7]}}),{c(){e=z("td"),q(l.$$.fragment),t=j(),this.h()},l(n){e=A(n,"TD",{style:!0,class:!0});var m=L(e);S(l.$$.fragment,m),t=N(m),m.forEach(c),this.h()},h(){ge(e,"width",r[0].column_width+"%"),V(e,"class","svelte-ncaz9j")},m(n,m){O(n,e,m),F(l,e,null),_(e,t),a=!0},p(n,m){const f={};m&1&&(f.name=n[7]),l.$set(f),(!a||m&1)&&ge(e,"width",n[0].column_width+"%")},i(n){a||(b(l.$$.fragment,n),a=!0)},o(n){B(l.$$.fragment,n),a=!1},d(n){n&&c(e),C(l)}}}function Vt(r){let e;return{c(){e=W("-")},l(l){e=G(l,"-")},m(l,t){O(l,e,t)},p:he,d(l){l&&c(e)}}}function Xt(r){let e=r[8].wl[0]+"",l,t,a=r[8].wl[1]+"",n;return{c(){l=W(e),t=W(" - "),n=W(a)},l(m){l=G(m,e),t=G(m," - "),n=G(m,a)},m(m,f){O(m,l,f),O(m,t,f),O(m,n,f)},p(m,f){f&1&&e!==(e=m[8].wl[0]+"")&&fe(l,e),f&1&&a!==(a=m[8].wl[1]+"")&&fe(n,a)},d(m){m&&c(l),m&&c(t),m&&c(n)}}}function Zt(r){let e;return{c(){e=W("-")},l(l){e=G(l,"-")},m(l,t){O(l,e,t)},p:he,i:he,o:he,d(l){l&&c(e)}}}function xt(r){let e=r[8].mix_teams.length+"",l,t,a;return t=new Oe({props:{t:" \u5927\u4F1A"}}),{c(){l=W(e),q(t.$$.fragment)},l(n){l=G(n,e),S(t.$$.fragment,n)},m(n,m){O(n,l,m),F(t,n,m),a=!0},p(n,m){(!a||m&1)&&e!==(e=n[8].mix_teams.length+"")&&fe(l,e)},i(n){a||(b(t.$$.fragment,n),a=!0)},o(n){B(t.$$.fragment,n),a=!1},d(n){n&&c(l),C(t,n)}}}function st(r){let e,l,t,a,n,m,f,s,o,i,d,k,v,R;function p(u,y){return u[8].wl[0]!==0||u[8].wl[1]!==0?Xt:Vt}let H=p(r),T=H(r);const g=[xt,Zt],h=[];function P(u,y){return u[8].mix_teams.length!==0?0:1}n=P(r),m=h[n]=g[n](r);function U(){return r[3](r[4],r[7])}return{c(){e=z("td"),T.c(),l=j(),t=z("br"),a=j(),m.c(),f=j(),s=z("br"),o=j(),i=z("button"),d=W("\u{1F53B}"),this.h()},l(u){e=A(u,"TD",{class:!0});var y=L(e);T.l(y),l=N(y),t=A(y,"BR",{}),a=N(y),m.l(y),f=N(y),s=A(y,"BR",{}),o=N(y),i=A(y,"BUTTON",{class:!0});var D=L(i);d=G(D,"\u{1F53B}"),D.forEach(c),y.forEach(c),this.h()},h(){V(i,"class","svelte-ncaz9j"),V(e,"class","svelte-ncaz9j")},m(u,y){O(u,e,y),T.m(e,null),_(e,l),_(e,t),_(e,a),h[n].m(e,null),_(e,f),_(e,s),_(e,o),_(e,i),_(i,d),k=!0,v||(R=gt(i,"click",U),v=!0)},p(u,y){r=u,H===(H=p(r))&&T?T.p(r,y):(T.d(1),T=H(r),T&&(T.c(),T.m(e,l)));let D=n;n=P(r),n===D?h[n].p(r,y):(me(),B(h[D],1,1,()=>{h[D]=null}),oe(),m=h[n],m?m.p(r,y):(m=h[n]=g[n](r),m.c()),b(m,1),m.m(e,f))},i(u){k||(b(m),k=!0)},o(u){B(m),k=!1},d(u){u&&c(e),T.d(),h[n].d(),v=!1,R()}}}function ft(r){let e,l,t,a,n,m;t=new wt({props:{name:r[4]}});let f=r[0].right.members,s=[];for(let i=0;i<f.length;i+=1)s[i]=st(nt(r,f,i));const o=i=>B(s[i],1,1,()=>{s[i]=null});return{c(){e=z("tr"),l=z("td"),q(t.$$.fragment),a=j();for(let i=0;i<s.length;i+=1)s[i].c();n=j(),this.h()},l(i){e=A(i,"TR",{});var d=L(e);l=A(d,"TD",{class:!0});var k=L(l);S(t.$$.fragment,k),k.forEach(c),a=N(d);for(let v=0;v<s.length;v+=1)s[v].l(d);n=N(d),d.forEach(c),this.h()},h(){V(l,"class","tar svelte-ncaz9j")},m(i,d){O(i,e,d),_(e,l),F(t,l,null),_(e,a);for(let k=0;k<s.length;k+=1)s[k].m(e,null);_(e,n),m=!0},p(i,d){const k={};if(d&1&&(k.name=i[4]),t.$set(k),d&1){f=i[0].right.members;let v;for(v=0;v<f.length;v+=1){const R=nt(i,f,v);s[v]?(s[v].p(R,d),b(s[v],1)):(s[v]=st(R),s[v].c(),b(s[v],1),s[v].m(e,n))}for(me(),v=f.length;v<s.length;v+=1)o(v);oe()}},i(i){if(!m){b(t.$$.fragment,i);for(let d=0;d<f.length;d+=1)b(s[d]);m=!0}},o(i){B(t.$$.fragment,i),s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)B(s[d]);m=!1},d(i){i&&c(e),C(t),ye(s,i)}}}function mt(r){let e,l;return e=new Jt({}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function el(r){var He,be;let e,l=((He=r[0])==null?void 0:He.left.name)+"",t,a,n=((be=r[0])==null?void 0:be.right.name)+"",m,f,s,o,i,d,k,v,R,p,H,T,g,h,P,U,u,y,D,E,I,ee,x,ie,ae;const je=[Qt,Kt],re=[];function Ne($,M){return M&3&&(d=null),d==null&&(d=$[1][Ye($[0].left.name,$[0].right.name)].matches.length>0),d?0:1}k=Ne(r,-1),v=re[k]=je[k](r);let se=r[0].right.members,K=[];for(let $=0;$<se.length;$+=1)K[$]=at(rt(r,se,$));const Be=$=>B(K[$],1,1,()=>{K[$]=null});let _e=r[0].left.members,Q=[];for(let $=0;$<_e.length;$+=1)Q[$]=ft(lt(r,_e,$));const Re=$=>B(Q[$],1,1,()=>{Q[$]=null});let Z=r[2]&&mt();return{c(){e=z("h2"),t=W(l),a=W(" \u{1F19A} "),m=W(n),f=j(),s=z("h3"),o=W("\u5BFE\u6226"),i=j(),v.c(),R=j(),p=z("h3"),H=W("\u30E1\u30F3\u30D0\u30FC"),T=j(),g=z("p"),h=W("\u4E0A\u6BB5: \u5BFE\u6226\u6210\u7E3E  \u4E2D\u6BB5: \u540C\u4E00\u30C1\u30FC\u30E0\u3067\u306E\u5927\u4F1A\u51FA\u5834\u56DE\u6570 \u4E0B\u6BB5: \u8A73\u7D30\u8868\u793A"),P=j(),U=z("table"),u=z("thead"),y=z("tr"),D=z("td"),E=j();for(let $=0;$<K.length;$+=1)K[$].c();I=j(),ee=z("tbody");for(let $=0;$<Q.length;$+=1)Q[$].c();x=j(),Z&&Z.c(),ie=De(),this.h()},l($){e=A($,"H2",{});var M=L(e);t=G(M,l),a=G(M," \u{1F19A} "),m=G(M,n),M.forEach(c),f=N($),s=A($,"H3",{});var ne=L(s);o=G(ne,"\u5BFE\u6226"),ne.forEach(c),i=N($),v.l($),R=N($),p=A($,"H3",{});var ce=L(p);H=G(ce,"\u30E1\u30F3\u30D0\u30FC"),ce.forEach(c),T=N($),g=A($,"P",{});var de=L(g);h=G(de,"\u4E0A\u6BB5: \u5BFE\u6226\u6210\u7E3E  \u4E2D\u6BB5: \u540C\u4E00\u30C1\u30FC\u30E0\u3067\u306E\u5927\u4F1A\u51FA\u5834\u56DE\u6570 \u4E0B\u6BB5: \u8A73\u7D30\u8868\u793A"),de.forEach(c),P=N($),U=A($,"TABLE",{style:!0,class:!0});var Y=L(U);u=A(Y,"THEAD",{});var ue=L(u);y=A(ue,"TR",{});var we=L(y);D=A(we,"TD",{style:!0,class:!0}),L(D).forEach(c),E=N(we);for(let $e=0;$e<K.length;$e+=1)K[$e].l(we);we.forEach(c),ue.forEach(c),I=N(Y),ee=A(Y,"TBODY",{});var pe=L(ee);for(let $e=0;$e<Q.length;$e+=1)Q[$e].l(pe);pe.forEach(c),Y.forEach(c),x=N($),Z&&Z.l($),ie=De(),this.h()},h(){ge(D,"width",r[0].column_width+"%"),V(D,"class","svelte-ncaz9j"),ge(U,"margin-top","10px"),V(U,"class","svelte-ncaz9j")},m($,M){O($,e,M),_(e,t),_(e,a),_(e,m),O($,f,M),O($,s,M),_(s,o),O($,i,M),re[k].m($,M),O($,R,M),O($,p,M),_(p,H),O($,T,M),O($,g,M),_(g,h),O($,P,M),O($,U,M),_(U,u),_(u,y),_(y,D),_(y,E);for(let ne=0;ne<K.length;ne+=1)K[ne].m(y,null);_(U,I),_(U,ee);for(let ne=0;ne<Q.length;ne+=1)Q[ne].m(ee,null);O($,x,M),Z&&Z.m($,M),O($,ie,M),ae=!0},p($,[M]){var ce,de;(!ae||M&1)&&l!==(l=((ce=$[0])==null?void 0:ce.left.name)+"")&&fe(t,l),(!ae||M&1)&&n!==(n=((de=$[0])==null?void 0:de.right.name)+"")&&fe(m,n);let ne=k;if(k=Ne($,M),k===ne?re[k].p($,M):(me(),B(re[ne],1,1,()=>{re[ne]=null}),oe(),v=re[k],v?v.p($,M):(v=re[k]=je[k]($),v.c()),b(v,1),v.m(R.parentNode,R)),(!ae||M&1)&&ge(D,"width",$[0].column_width+"%"),M&1){se=$[0].right.members;let Y;for(Y=0;Y<se.length;Y+=1){const ue=rt($,se,Y);K[Y]?(K[Y].p(ue,M),b(K[Y],1)):(K[Y]=at(ue),K[Y].c(),b(K[Y],1),K[Y].m(y,null))}for(me(),Y=se.length;Y<K.length;Y+=1)Be(Y);oe()}if(M&1){_e=$[0].left.members;let Y;for(Y=0;Y<_e.length;Y+=1){const ue=lt($,_e,Y);Q[Y]?(Q[Y].p(ue,M),b(Q[Y],1)):(Q[Y]=ft(ue),Q[Y].c(),b(Q[Y],1),Q[Y].m(ee,null))}for(me(),Y=_e.length;Y<Q.length;Y+=1)Re(Y);oe()}$[2]?Z?M&4&&b(Z,1):(Z=mt(),Z.c(),b(Z,1),Z.m(ie.parentNode,ie)):Z&&(me(),B(Z,1,1,()=>{Z=null}),oe())},i($){if(!ae){b(v);for(let M=0;M<se.length;M+=1)b(K[M]);for(let M=0;M<_e.length;M+=1)b(Q[M]);b(Z),ae=!0}},o($){B(v),K=K.filter(Boolean);for(let M=0;M<K.length;M+=1)B(K[M]);Q=Q.filter(Boolean);for(let M=0;M<Q.length;M+=1)B(Q[M]);B(Z),ae=!1},d($){$&&c(e),$&&c(f),$&&c(s),$&&c(i),re[k].d($),$&&c(R),$&&c(p),$&&c(T),$&&c(g),$&&c(P),$&&c(U),ye(K,$),ye(Q,$),$&&c(x),Z&&Z.d($),$&&c(ie)}}}function tl(r,e,l){let t,a,n;return Ee(r,Ce,f=>l(0,t=f)),Ee(r,Fe,f=>l(1,a=f)),Ee(r,qe,f=>l(2,n=f)),[t,a,n,(f,s)=>Ot(t,f,s)]}class ll extends Pe{constructor(e){super();ze(this,e,tl,el,Ae,{})}}function ot(r,e,l){const t=r.slice();return t[6]=e[l],t[8]=l,t}function it(r,e,l){const t=r.slice();t[9]=e[l],t[12]=l;const a=t[1][Ye(t[6].team_name,t[9].team_name)];return t[10]=a,t}function ct(r,e,l){const t=r.slice();return t[13]=e[l],t[8]=l,t}function nl(r){let e,l;return e=new Nt({}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},p:he,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function rl(r){let e,l,t,a,n,m,f,s,o,i,d,k,v,R,p,H=r[0].teams,T=[];for(let u=0;u<H.length;u+=1)T[u]=ut(ct(r,H,u));let g=r[0].teams,h=[];for(let u=0;u<g.length;u+=1)h[u]=ht(ot(r,g,u));const P=u=>B(h[u],1,1,()=>{h[u]=null});let U=r[2]&&pt();return{c(){e=z("table"),l=z("thead"),t=z("tr"),a=z("th"),n=W("No."),m=j(),f=z("th"),s=j();for(let u=0;u<T.length;u+=1)T[u].c();o=j(),i=z("th"),d=j(),k=z("tbody");for(let u=0;u<h.length;u+=1)h[u].c();v=j(),U&&U.c(),R=De(),this.h()},l(u){e=A(u,"TABLE",{style:!0,class:!0});var y=L(e);l=A(y,"THEAD",{});var D=L(l);t=A(D,"TR",{});var E=L(t);a=A(E,"TH",{class:!0,style:!0});var I=L(a);n=G(I,"No."),I.forEach(c),m=N(E),f=A(E,"TH",{class:!0,style:!0}),L(f).forEach(c),s=N(E);for(let x=0;x<T.length;x+=1)T[x].l(E);o=N(E),i=A(E,"TH",{class:!0}),L(i).forEach(c),E.forEach(c),D.forEach(c),d=N(y),k=A(y,"TBODY",{});var ee=L(k);for(let x=0;x<h.length;x+=1)h[x].l(ee);ee.forEach(c),y.forEach(c),v=N(u),U&&U.l(u),R=De(),this.h()},h(){V(a,"class","nw svelte-a2jgif"),ge(a,"width","2.5em"),V(f,"class","nw tal svelte-a2jgif"),ge(f,"width","10em"),V(i,"class","svelte-a2jgif"),ge(e,"margin-top","10px"),V(e,"class","svelte-a2jgif")},m(u,y){O(u,e,y),_(e,l),_(l,t),_(t,a),_(a,n),_(t,m),_(t,f),_(t,s);for(let D=0;D<T.length;D+=1)T[D].m(t,null);_(t,o),_(t,i),_(e,d),_(e,k);for(let D=0;D<h.length;D+=1)h[D].m(k,null);O(u,v,y),U&&U.m(u,y),O(u,R,y),p=!0},p(u,y){if(y&1){H=u[0].teams;let D;for(D=0;D<H.length;D+=1){const E=ct(u,H,D);T[D]?T[D].p(E,y):(T[D]=ut(E),T[D].c(),T[D].m(t,o))}for(;D<T.length;D+=1)T[D].d(1);T.length=H.length}if(y&3){g=u[0].teams;let D;for(D=0;D<g.length;D+=1){const E=ot(u,g,D);h[D]?(h[D].p(E,y),b(h[D],1)):(h[D]=ht(E),h[D].c(),b(h[D],1),h[D].m(k,null))}for(me(),D=g.length;D<h.length;D+=1)P(D);oe()}u[2]?U?y&4&&b(U,1):(U=pt(),U.c(),b(U,1),U.m(R.parentNode,R)):U&&(me(),B(U,1,1,()=>{U=null}),oe())},i(u){if(!p){for(let y=0;y<g.length;y+=1)b(h[y]);b(U),p=!0}},o(u){h=h.filter(Boolean);for(let y=0;y<h.length;y+=1)B(h[y]);B(U),p=!1},d(u){u&&c(e),ye(T,u),ye(h,u),u&&c(v),U&&U.d(u),u&&c(R)}}}function ut(r){let e,l=r[8]+1+"",t;return{c(){e=z("th"),t=W(l),this.h()},l(a){e=A(a,"TH",{class:!0,style:!0});var n=L(e);t=G(n,l),n.forEach(c),this.h()},h(){V(e,"class","nw svelte-a2jgif"),ge(e,"width","4em")},m(a,n){O(a,e,n),_(e,t)},p:he,d(a){a&&c(e)}}}function al(r){let e,l,t,a,n,m,f,s=r[10].matches.length>0&&_t(r);function o(){return r[3](r[6],r[9])}return{c(){s&&s.c(),e=j(),l=z("br"),t=j(),a=z("button"),n=W("\u{1F53B}"),this.h()},l(i){s&&s.l(i),e=N(i),l=A(i,"BR",{}),t=N(i),a=A(i,"BUTTON",{class:!0});var d=L(a);n=G(d,"\u{1F53B}"),d.forEach(c),this.h()},h(){V(a,"class","svelte-a2jgif")},m(i,d){s&&s.m(i,d),O(i,e,d),O(i,l,d),O(i,t,d),O(i,a,d),_(a,n),m||(f=gt(a,"click",o),m=!0)},p(i,d){r=i,r[10].matches.length>0?s?s.p(r,d):(s=_t(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&c(e),i&&c(l),i&&c(t),i&&c(a),m=!1,f()}}}function _t(r){let e=r[10].wl[0]+"",l,t,a=r[10].wl[1]+"",n;return{c(){l=W(e),t=W(" - "),n=W(a)},l(m){l=G(m,e),t=G(m," - "),n=G(m,a)},m(m,f){O(m,l,f),O(m,t,f),O(m,n,f)},p(m,f){f&3&&e!==(e=m[10].wl[0]+"")&&fe(l,e),f&3&&a!==(a=m[10].wl[1]+"")&&fe(n,a)},d(m){m&&c(l),m&&c(t),m&&c(n)}}}function $t(r){let e,l=r[8]!==r[12]&&al(r);return{c(){e=z("td"),l&&l.c(),this.h()},l(t){e=A(t,"TD",{class:!0});var a=L(e);l&&l.l(a),a.forEach(c),this.h()},h(){V(e,"class","svelte-a2jgif")},m(t,a){O(t,e,a),l&&l.m(e,null)},p(t,a){t[8]!==t[12]&&l.p(t,a)},d(t){t&&c(e),l&&l.d()}}}function ht(r){let e,l,t=r[8]+1+"",a,n,m,f,s,o,i,d,k;f=new Se({props:{name:r[6].team_name,current_name:r[6].team_current_name}});let v=r[0].teams,R=[];for(let p=0;p<v.length;p+=1)R[p]=$t(it(r,v,p));return{c(){e=z("tr"),l=z("th"),a=W(t),n=j(),m=z("td"),q(f.$$.fragment),s=j();for(let p=0;p<R.length;p+=1)R[p].c();o=j(),i=z("td"),d=j(),this.h()},l(p){e=A(p,"TR",{});var H=L(e);l=A(H,"TH",{class:!0});var T=L(l);a=G(T,t),T.forEach(c),n=N(H),m=A(H,"TD",{class:!0});var g=L(m);S(f.$$.fragment,g),g.forEach(c),s=N(H);for(let h=0;h<R.length;h+=1)R[h].l(H);o=N(H),i=A(H,"TD",{class:!0}),L(i).forEach(c),d=N(H),H.forEach(c),this.h()},h(){V(l,"class","nw svelte-a2jgif"),V(m,"class","nw tal svelte-a2jgif"),V(i,"class","svelte-a2jgif")},m(p,H){O(p,e,H),_(e,l),_(l,a),_(e,n),_(e,m),F(f,m,null),_(e,s);for(let T=0;T<R.length;T+=1)R[T].m(e,null);_(e,o),_(e,i),_(e,d),k=!0},p(p,H){const T={};if(H&1&&(T.name=p[6].team_name),H&1&&(T.current_name=p[6].team_current_name),f.$set(T),H&3){v=p[0].teams;let g;for(g=0;g<v.length;g+=1){const h=it(p,v,g);R[g]?R[g].p(h,H):(R[g]=$t(h),R[g].c(),R[g].m(e,o))}for(;g<R.length;g+=1)R[g].d(1);R.length=v.length}},i(p){k||(b(f.$$.fragment,p),k=!0)},o(p){B(f.$$.fragment,p),k=!1},d(p){p&&c(e),C(f),ye(R,p)}}}function pt(r){let e,l;return e=new ll({}),{c(){q(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){F(e,t,a),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function sl(r){let e,l,t,a;const n=[rl,nl],m=[];function f(s,o){return s[0]?0:1}return e=f(r),l=m[e]=n[e](r),{c(){l.c(),t=De()},l(s){l.l(s),t=De()},m(s,o){m[e].m(s,o),O(s,t,o),a=!0},p(s,[o]){let i=e;e=f(s),e===i?m[e].p(s,o):(me(),B(m[i],1,1,()=>{m[i]=null}),oe(),l=m[e],l?l.p(s,o):(l=m[e]=n[e](s),l.c()),b(l,1),l.m(t.parentNode,t))},i(s){a||(b(l),a=!0)},o(s){B(l),a=!1},d(s){m[e].d(s),s&&c(t)}}}function fl(r,e,l){let t,a,n,m;Ee(r,Ke,o=>l(4,t=o)),Ee(r,Ue,o=>l(0,a=o)),Ee(r,Fe,o=>l(1,n=o)),Ee(r,Ce,o=>l(2,m=o)),yt(()=>{f(null)}),Et(()=>Ue.set(null));async function f(o){Ue.set(null),Ke.set(Rt(o,"l")),t!==null&&jt(`log/${t}.json`).then(i=>{if(i.status===404)throw new Error("NOT FOUND");return i.json()}).then(i=>{Ht(i)}).catch(i=>{i.message==="NOT FOUND"&&Dt(`${Bt}/`,{})})}return[a,n,m,(o,i)=>Mt(a,o.team_name,i.team_name)]}class kl extends Pe{constructor(e){super();ze(this,e,fl,sl,Ae,{})}}export{kl as default};
