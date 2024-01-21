import{_ as G}from"./ListPager.vue.31347b93.js";import{_ as V}from"./Name.vue.c361bffb.js";import{c as D,_ as B}from"./Name.vue.8abf80dd.js";import{_ as j}from"./DateTime.vue.846a8906.js";import{_ as z}from"./Name.vue.bb41d53e.js";import{_ as F}from"./SocialAccounts.vue.84339fe5.js";import{a as S,s as K,x as M,l as x,H as C,P as y,o as n,e as o,m as U,v as H,u as s,f as a,p as I,h as _,F as q,r as J,G as O,y as r,t as i,D as m,j as Q}from"./entry.e925a2fe.js";import{s as W}from"./ga.c42505fd.js";const X={key:0},Y={key:0},Z={class:"ti",style:{width:"24em","padding-left":"4px"}},tt={key:0,class:"muted"},et={key:0},at={class:"ti",style:{width:"3em"}},st={class:"ti",style:{width:"13em"}},nt=a("span",{class:"muted"},"大会",-1),ot={key:0},it=a("span",{class:"muted"}," 優勝",-1),lt=a("span",{class:"muted"},"回",-1),ct={key:1},rt=a("span",{class:"muted"}," Top4",-1),_t=a("span",{class:"muted"},"回",-1),mt={class:"ti",style:{width:"6em"}},dt=a("span",{class:"muted"},"勝",-1),ut=a("span",{class:"muted"},"敗",-1),ht={class:"ti",style:{width:"14em"}},gt={class:"ti",style:{width:"7em"}},pt={class:"ti",style:{width:"22em"}},ft={key:0,class:"ti",style:{width:"21em"}},yt=S({__name:"List",setup(R){const g=K(),{players:p}=M(g),l=x(1),d=C(()=>u.value.trim().length>0?p.value.filter(e=>{var h;let c=[e.name,e.latest.team];return e.data&&(e.data&&((h=e.data)!=null&&h.aliases)&&(c=c.concat(e.data.aliases)),e.data.twitter&&c.push(e.data.twitter),e.data.twitch&&c.push(e.data.twitch)),c.filter(f=>f.toLowerCase().includes(u.value.toLowerCase())).length>0}):p.value),v=C(()=>{const e=Math.ceil(d.value.length/y);return e<l.value&&(l.value=1),e}),u=x(""),w=e=>{l.value=e,window.scroll({top:0,left:0})};return(e,c)=>{const h=G,f=V,L=B,T=j,$=z,b=F;return n(),o("div",null,[U(a("input",{"onUpdate:modelValue":c[0]||(c[0]=t=>I(u)?u.value=t:null),placeholder:"プレイヤー名 / チーム名 / SNSアカウント",style:{"box-sizing":"border-box",width:"100%"}},null,512),[[H,s(u)]]),_(h,{pageNo:s(l),maxPage:s(v),onChange:w},null,8,["pageNo","maxPage"]),s(d)?(n(),o("div",X,[s(d).length>0?(n(),o("div",Y,[(n(!0),o(q,null,J(s(d).slice((s(l)-1)*("PER_PAGE"in e?e.PER_PAGE:s(y)),s(l)*("PER_PAGE"in e?e.PER_PAGE:s(y))),(t,A)=>{var P,N,k,E;return n(),o("div",{class:O(["tc",("containerClass"in e?e.containerClass:s(D))(A)]),key:t.name},[a("div",Z,[r(i(t.rank.toLocaleString())+". ",1),_(f,{name:t.name,rating:t.rating},null,8,["name","rating"]),((N=(P=t.data)==null?void 0:P.aliases)==null?void 0:N.length)>0?(n(),o("span",tt,[r(" ( "+i(t.data.aliases.slice(0,3).join(", "))+" ",1),((E=(k=t.data)==null?void 0:k.aliases)==null?void 0:E.length)>3?(n(),o("span",et," + 他"+i(t.data.aliases.length-3)+"件 ",1)):m("",!0),r(" ) ")])):m("",!0)]),a("div",at,i((t.rating??0).toLocaleString()),1),a("div",st,[r(i(t.entries)+" ",1),nt,t.top_1>0?(n(),o("span",ot,[it,r(" "+i(t.top_1)+" ",1),lt])):m("",!0),t.top_4>0?(n(),o("span",ct,[rt,r(" "+i(t.top_4)+" ",1),_t])):m("",!0)]),a("div",mt,[r(i(t.win)+" ",1),dt,r(" "+i(t.lose)+" ",1),ut]),a("div",ht,[_(L,{name:t.latest.team,currentName:t.latest.team_current},null,8,["name","currentName"])]),a("div",gt,[_(T,{date:t.latest.date,spacing:!1},null,8,["date"])]),a("div",pt,[_($,{tournamentKey:t.latest.tournament_key,name:t.latest.tournament_name},null,8,["tournamentKey","name"])]),t.data?(n(),o("div",ft,[_(b,{twitter:t.data.twitter,youtube:t.data.youtube,twitch:t.data.twitch},null,8,["twitter","youtube","twitch"])])):m("",!0)],2)}),128))])):m("",!0)])):m("",!0),_(h,{pageNo:s(l),maxPage:s(v),onChange:w},null,8,["pageNo","maxPage"])])}}}),vt=a("h1",null,"プレイヤー",-1),Rt=S({__name:"index",setup(R){const g=Q();return W(g.path,"プレイヤー","Pokémon UNITE大会プレイヤー一覧"),(p,l)=>{const d=yt;return n(),o("div",null,[vt,_(d)])}}});export{Rt as default};
