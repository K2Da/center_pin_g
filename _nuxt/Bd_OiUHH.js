import{g as i,o,c as a,d as e,a as s,t as n,E as r,F as c}from"./B5n8RSh2.js";const h={key:0},u=s("i",{class:"fab fa-twitter"},null,-1),_=["href"],l={key:1},w=s("i",{class:"fab fa-youtube"},null,-1),p=["href"],f={key:2},d=s("i",{class:"fab fa-twitch"},null,-1),m=["href"],g=i({__name:"SocialAccounts",props:{twitter:{},youtube:{},twitch:{}},setup(b){return(t,y)=>(o(),a(c,null,[t.twitter?(o(),a("span",h,[u,e(),s("a",{href:`https://twitter.com/${t.twitter}`,target:"_blank"},n(t.twitter),9,_),e("   ")])):r("",!0),t.youtube?(o(),a("span",l,[w,e(),s("a",{href:`https://www.youtube.com/channel/${t.youtube[0]}`},n(t.youtube[1]),9,p),e("   ")])):r("",!0),t.twitch?(o(),a("span",f,[d,e(),s("a",{href:`https://www.twitch.tv/${t.twitch}`},n(t.twitch),9,m),e("   ")])):r("",!0)],64))}});export{g as _};