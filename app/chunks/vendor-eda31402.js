function _(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(q)}function z(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function B(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(B(n,e))}function at(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let s=0;s<o;s+=1)l[s]=n.dirty[s]|c[s];return l}return n.dirty|c}return n.dirty}function _t(t,n,e,i,c,l){if(c){const o=L(n,e,i,l);t.p(o,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t,n,e){return t.set(e),n}let w=!1;function J(){w=!0}function K(){w=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=u?c+1:Q(1,c,m=>n[e[m]].claim_order,u))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const l=[],o=[];let s=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);s>=r;s--)o.push(n[s]);s--}for(;s>=0;s--)o.push(n[s]);l.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<l.length&&o[r].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(o[r],f)}}function W(t,n){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){w&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function bt(){return j(" ")}function gt(){return j("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){Y(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const r=e(s);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const r=e(s);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Z(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const s=c.attributes[o];e[s.name]||l.push(s.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function wt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function At(t){return tt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function St(t,n=document.body){return Array.from(n.querySelectorAll(t))}let g;function x(t){g=t}function A(){if(!g)throw new Error("Function called outside component initialization");return g}function jt(t){A().$$.on_mount.push(t)}function Nt(t){A().$$.after_update.push(t)}function vt(t){A().$$.on_destroy.push(t)}function Ct(t,n){A().$$.context.set(t,n)}const $=[],T=[],E=[],D=[],nt=Promise.resolve();let N=!1;function et(){N||(N=!0,nt.then(P))}function v(t){E.push(t)}const C=new Set;let k=0;function P(){const t=g;do{for(;k<$.length;){const n=$[k];k++,x(n),it(n.$$)}for(x(null),$.length=0,k=0;T.length;)T.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];C.has(e)||(C.add(e),e())}E.length=0}while($.length);for(;D.length;)D.pop()();N=!1,C.clear(),x(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const S=new Set;let h;function qt(){h={r:0,c:[],p:h}}function Mt(){h.r||y(h.c),h=h.p}function rt(t,n){t&&t.i&&(S.delete(t),t.i(n))}function zt(t,n,e,i){if(t&&t.o){if(S.has(t))return;S.add(t),h.c.push(()=>{S.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=n[l];if(s){for(const r in o)r in s||(i[r]=1);for(const r in s)c[r]||(e[r]=s[r],c[r]=1);t[l]=s}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Lt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function Tt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:s}=t.$$;c&&c.m(n,e),i||v(()=>{const r=l.map(q).filter(z);o?o.push(...r):y(r),t.$$.on_mount=[]}),s.forEach(v)}function ot(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&($.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,c,l,o,s=[-1]){const r=g;x(t);const u=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,m,...d)=>{const p=d.length?d[0]:m;return u.ctx&&c(u.ctx[a],u.ctx[a]=p)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](p),f&&ut(t,a)),m}):[],u.update(),f=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const a=X(n.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),P()}x(r)}class Pt{$destroy(){ot(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const b=[];function st(t,n){return{subscribe:lt(t,n).subscribe}}function lt(t,n=_){let e;const i=new Set;function c(s){if(I(t,s)&&(t=s,e)){const r=!b.length;for(const u of i)u[1](),b.push(u,t);if(r){for(let u=0;u<b.length;u+=2)b[u][0](b[u+1]);b.length=0}}}function l(s){c(s(t))}function o(s,r=_){const u=[s,r];return i.add(u),i.size===1&&(e=n(c)||_),s(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}function Ft(t,n,e){const i=!Array.isArray(t),c=i?[t]:t,l=n.length<2;return st(e,o=>{let s=!1;const r=[];let u=0,f=_;const a=()=>{if(u)return;f();const d=n(i?r[0]:r,o);l?o(d):f=z(d)?d:_},m=c.map((d,p)=>B(d,F=>{r[p]=F,u&=~(1<<p),s&&a()},()=>{u|=1<<p}));return s=!0,a(),function(){y(m),f()}})}export{ot as A,H as B,lt as C,at as D,W as E,_t as F,ht as G,dt as H,_ as I,kt as J,ft as K,yt as L,St as M,Ft as N,vt as O,xt as P,y as Q,mt as R,Pt as S,X as a,$t as b,wt as c,U as d,V as e,pt as f,tt as g,Et as h,Dt as i,bt as j,gt as k,At as l,qt as m,zt as n,Mt as o,rt as p,Ct as q,Nt as r,I as s,j as t,jt as u,Ot as v,Tt as w,ct as x,Bt as y,Lt as z};