import{a as i,o,e as n,f as e,t as c,p as a,F as h,h as s}from"./entry.ebc96556.js";const u={key:0},l=e("i",{class:"fab fa-twitter"},null,-1),r=s(),_=["href"],d=s(" \xA0 "),w={key:1},f=e("i",{class:"fab fa-youtube"},null,-1),m=s(),b=["href"],y=s(" \xA0 "),k={key:2},x=e("i",{class:"fab fa-twitch"},null,-1),A=s(),g=["href"],B=s(" \xA0 "),C=i({__name:"SocialAccounts",props:{twitter:null,youtube:null,twitch:null},setup(t){return(N,V)=>(o(),n(h,null,[t.twitter?(o(),n("span",u,[l,r,e("a",{href:`https://twitter.com/${t.twitter}`,target:"_blank"},c(t.twitter),9,_),d])):a("",!0),t.youtube?(o(),n("span",w,[f,m,e("a",{href:`https://www.youtube.com/channel/${t.youtube[0]}`},c(t.youtube[1]),9,b),y])):a("",!0),t.twitch?(o(),n("span",k,[x,A,e("a",{href:`https://www.twitch.tv/${t.twitch}`},c(t.twitch),9,g),B])):a("",!0)],64))}});export{C as _};