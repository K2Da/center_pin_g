import{S as f,i as l,s as d,e as u,t as _,c as p,a as g,h as S,d as i,b as h,g as b,H as v,j as w,O as m}from"./vendor-489defcd.js";import{b as o}from"./paths-4b3c6e7e.js";function c(t){return SHA1.createHash().update(t).digest("hex")}function j(t,a){return t||new URLSearchParams(window.location.search).get(a)}function H(t){let a,r,s;return{c(){a=u("a"),r=_(t[0]),this.h()},l(e){a=p(e,"A",{href:!0});var n=g(a);r=S(n,t[0]),n.forEach(i),this.h()},h(){h(a,"href",s=o+"/team/detail/?m="+c(t[0]))},m(e,n){b(e,a,n),v(a,r)},p(e,[n]){n&1&&w(r,e[0]),n&1&&s!==(s=o+"/team/detail/?m="+c(e[0]))&&h(a,"href",s)},i:m,o:m,d(e){e&&i(a)}}}function x(t,a,r){let{name:s}=a;return t.$$set=e=>{"name"in e&&r(0,s=e.name)},[s]}class q extends f{constructor(a){super();l(this,a,x,H,d,{name:0})}}export{q as T,j as g,c as s};
