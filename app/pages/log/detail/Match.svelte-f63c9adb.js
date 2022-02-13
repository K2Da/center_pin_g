import{S as Ge,i as Ie,s as Je,e as fe,w as c,k as p,t as O,c as se,a as le,x as k,m as g,h as P,d as E,b as ue,g as q,H as f,y as b,q as u,j as V,o as _,B as v,p as Ae,l as je,n as Fe}from"../../../chunks/vendor-96e95496.js";import{D as Ke}from"../../../chunks/Date-9d434d83.js";import{T as Le}from"../../../chunks/TournamentName-d9d098a2.js";import{T as ie}from"../../../chunks/T-afcbe7b3.js";import{S,T as Be}from"../../../chunks/Team-006ed4fd.js";import{M as Ce}from"../../../chunks/MatchResult-a87074d0.js";import"../../../chunks/paths-4b3c6e7e.js";import"../../../chunks/PlayersLine-628c0c55.js";import"../../../chunks/util-4543d778.js";import"../../../chunks/TeamName-33c9c422.js";import"../../../chunks/TournamentResult-3ddb2bdb.js";function He(o){let $,n,t,s,i,M,D,a,T,pe,y,H,ge,z,_e,W=o[0].match_round+"",x,ee,Q,m,A,oe,F,we,G,he,X=o[1].team1.current_name+"",te,ce,I,ke,N,be,J,ve,Y=o[1].team1.score+"",ne,Te,Z=o[1].team2.score+"",me,De,K,Ee,j,Me,L,Re,d=o[1].team2.current_name+"",ae,re,B,$e,C,R;t=new Ke({props:{date:o[0].tournament_date}}),i=new S({props:{s:2}}),D=new ie({props:{t:"\u5927\u4F1A"}}),T=new Le({props:{name:o[0].tournament_name,key:o[0].tournament_key,official:!1}});let w=o[0].match_bracket&&ze(o);return H=new S({props:{s:2}}),z=new ie({props:{t:"\u30E9\u30A6\u30F3\u30C9"}}),A=new S({props:{s:2}}),F=new ie({props:{t:"\u7D50\u679C"}}),G=new S({props:{s:1}}),I=new S({props:{s:2}}),N=new Ce({props:{win:o[1].team1.result==="w"}}),J=new S({props:{s:1}}),K=new S({props:{s:1}}),j=new Ce({props:{win:o[1].team2.result==="w"}}),L=new S({props:{s:2}}),B=new Be({props:{team_match:o[1].team1}}),C=new Be({props:{team_match:o[1].team2}}),{c(){$=fe("tr"),n=fe("td"),c(t.$$.fragment),s=p(),c(i.$$.fragment),M=p(),c(D.$$.fragment),a=p(),c(T.$$.fragment),pe=p(),w&&w.c(),y=p(),c(H.$$.fragment),ge=p(),c(z.$$.fragment),_e=p(),x=O(W),ee=p(),Q=fe("tr"),m=fe("td"),c(A.$$.fragment),oe=p(),c(F.$$.fragment),we=p(),c(G.$$.fragment),he=p(),te=O(X),ce=p(),c(I.$$.fragment),ke=p(),c(N.$$.fragment),be=p(),c(J.$$.fragment),ve=p(),ne=O(Y),Te=O(" - "),me=O(Z),De=p(),c(K.$$.fragment),Ee=p(),c(j.$$.fragment),Me=p(),c(L.$$.fragment),Re=p(),ae=O(d),re=p(),c(B.$$.fragment),$e=p(),c(C.$$.fragment),this.h()},l(e){$=se(e,"TR",{});var l=le($);n=se(l,"TD",{class:!0,colspan:!0});var h=le(n);k(t.$$.fragment,h),s=g(h),k(i.$$.fragment,h),M=g(h),k(D.$$.fragment,h),a=g(h),k(T.$$.fragment,h),pe=g(h),w&&w.l(h),y=g(h),k(H.$$.fragment,h),ge=g(h),k(z.$$.fragment,h),_e=g(h),x=P(h,W),h.forEach(E),l.forEach(E),ee=g(e),Q=se(e,"TR",{});var U=le(Q);m=se(U,"TD",{class:!0,colspan:!0});var r=le(m);k(A.$$.fragment,r),oe=g(r),k(F.$$.fragment,r),we=g(r),k(G.$$.fragment,r),he=g(r),te=P(r,X),ce=g(r),k(I.$$.fragment,r),ke=g(r),k(N.$$.fragment,r),be=g(r),k(J.$$.fragment,r),ve=g(r),ne=P(r,Y),Te=P(r," - "),me=P(r,Z),De=g(r),k(K.$$.fragment,r),Ee=g(r),k(j.$$.fragment,r),Me=g(r),k(L.$$.fragment,r),Re=g(r),ae=P(r,d),r.forEach(E),U.forEach(E),re=g(e),k(B.$$.fragment,e),$e=g(e),k(C.$$.fragment,e),this.h()},h(){ue(n,"class","tal"),ue(n,"colspan","3"),ue(m,"class","tal"),ue(m,"colspan","3")},m(e,l){q(e,$,l),f($,n),b(t,n,null),f(n,s),b(i,n,null),f(n,M),b(D,n,null),f(n,a),b(T,n,null),f(n,pe),w&&w.m(n,null),f(n,y),b(H,n,null),f(n,ge),b(z,n,null),f(n,_e),f(n,x),q(e,ee,l),q(e,Q,l),f(Q,m),b(A,m,null),f(m,oe),b(F,m,null),f(m,we),b(G,m,null),f(m,he),f(m,te),f(m,ce),b(I,m,null),f(m,ke),b(N,m,null),f(m,be),b(J,m,null),f(m,ve),f(m,ne),f(m,Te),f(m,me),f(m,De),b(K,m,null),f(m,Ee),b(j,m,null),f(m,Me),b(L,m,null),f(m,Re),f(m,ae),q(e,re,l),b(B,e,l),q(e,$e,l),b(C,e,l),R=!0},p(e,l){const h={};l&1&&(h.date=e[0].tournament_date),t.$set(h);const U={};l&1&&(U.name=e[0].tournament_name),l&1&&(U.key=e[0].tournament_key),T.$set(U),e[0].match_bracket?w?(w.p(e,l),l&1&&u(w,1)):(w=ze(e),w.c(),u(w,1),w.m(n,y)):w&&(Fe(),_(w,1,1,()=>{w=null}),Ae()),(!R||l&1)&&W!==(W=e[0].match_round+"")&&V(x,W),(!R||l&2)&&X!==(X=e[1].team1.current_name+"")&&V(te,X);const r={};l&2&&(r.win=e[1].team1.result==="w"),N.$set(r),(!R||l&2)&&Y!==(Y=e[1].team1.score+"")&&V(ne,Y),(!R||l&2)&&Z!==(Z=e[1].team2.score+"")&&V(me,Z);const Se={};l&2&&(Se.win=e[1].team2.result==="w"),j.$set(Se),(!R||l&2)&&d!==(d=e[1].team2.current_name+"")&&V(ae,d);const qe={};l&2&&(qe.team_match=e[1].team1),B.$set(qe);const Ne={};l&2&&(Ne.team_match=e[1].team2),C.$set(Ne)},i(e){R||(u(t.$$.fragment,e),u(i.$$.fragment,e),u(D.$$.fragment,e),u(T.$$.fragment,e),u(w),u(H.$$.fragment,e),u(z.$$.fragment,e),u(A.$$.fragment,e),u(F.$$.fragment,e),u(G.$$.fragment,e),u(I.$$.fragment,e),u(N.$$.fragment,e),u(J.$$.fragment,e),u(K.$$.fragment,e),u(j.$$.fragment,e),u(L.$$.fragment,e),u(B.$$.fragment,e),u(C.$$.fragment,e),R=!0)},o(e){_(t.$$.fragment,e),_(i.$$.fragment,e),_(D.$$.fragment,e),_(T.$$.fragment,e),_(w),_(H.$$.fragment,e),_(z.$$.fragment,e),_(A.$$.fragment,e),_(F.$$.fragment,e),_(G.$$.fragment,e),_(I.$$.fragment,e),_(N.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(j.$$.fragment,e),_(L.$$.fragment,e),_(B.$$.fragment,e),_(C.$$.fragment,e),R=!1},d(e){e&&E($),v(t),v(i),v(D),v(T),w&&w.d(),v(H),v(z),e&&E(ee),e&&E(Q),v(A),v(F),v(G),v(I),v(N),v(J),v(K),v(j),v(L),e&&E(re),v(B,e),e&&E($e),v(C,e)}}}function ze(o){let $,n,t,s,i=o[0].match_bracket+"",M,D;return $=new S({props:{s:2}}),t=new ie({props:{t:"\u30D6\u30E9\u30B1\u30C3\u30C8"}}),{c(){c($.$$.fragment),n=p(),c(t.$$.fragment),s=p(),M=O(i)},l(a){k($.$$.fragment,a),n=g(a),k(t.$$.fragment,a),s=g(a),M=P(a,i)},m(a,T){b($,a,T),q(a,n,T),b(t,a,T),q(a,s,T),q(a,M,T),D=!0},p(a,T){(!D||T&1)&&i!==(i=a[0].match_bracket+"")&&V(M,i)},i(a){D||(u($.$$.fragment,a),u(t.$$.fragment,a),D=!0)},o(a){_($.$$.fragment,a),_(t.$$.fragment,a),D=!1},d(a){v($,a),a&&E(n),v(t,a),a&&E(s),a&&E(M)}}}function Oe(o){let $,n,t=o[0]&&He(o);return{c(){t&&t.c(),$=je()},l(s){t&&t.l(s),$=je()},m(s,i){t&&t.m(s,i),q(s,$,i),n=!0},p(s,[i]){s[0]?t?(t.p(s,i),i&1&&u(t,1)):(t=He(s),t.c(),u(t,1),t.m($.parentNode,$)):t&&(Fe(),_(t,1,1,()=>{t=null}),Ae())},i(s){n||(u(t),n=!0)},o(s){_(t),n=!1},d(s){t&&t.d(s),s&&E($)}}}function Pe(o,$,n){let{match:t}=$,{teams:s}=$;return o.$$set=i=>{"match"in i&&n(0,t=i.match),"teams"in i&&n(1,s=i.teams)},[t,s]}class tt extends Ge{constructor($){super();Ie(this,$,Pe,Oe,Je,{match:0,teams:1})}}export{tt as default};
