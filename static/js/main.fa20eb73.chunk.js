(this["webpackJsonppoker-case-tracker"]=this["webpackJsonppoker-case-tracker"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=(t(78),t(14)),m=t(60),u=t.n(m),s=t(61),i=t.n(s);t(83);var p=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{alt:"monkey logo",src:u.a,className:"monkey_logo"}),r.a.createElement("span",null,"Poker Banker Monkey"),r.a.createElement("img",{alt:"monkey logo",src:i.a}))},d=t(11),E=t(12),y=t(149),f=t(150),b=t(146),v=t(106),h=t(39),g=t.n(h),A=t(141),C=t(145);t(93);var N=function(e){var a=e.line,t=e.icon,n=e.type,l=e.onChange,c=e.placeholder,o=e.name,m=e.value;return r.a.createElement("div",{className:"input_wrapper"},a&&r.a.createElement("span",{className:"input_line"},a),r.a.createElement(A.a,{type:n,name:o,value:m,placeholder:c,onChange:l,startAdornment:r.a.createElement(C.a,{position:"start"},t)}))};t(94);var O=function(e){var a=e.saveGameRatio,t=Object(n.useState)("amount"),l=Object(d.a)(t,2),c=l[0],o=l[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),s=u[0],i=u[1],p=Object(n.useState)(""),h=Object(d.a)(p,2),A=h[0],C=h[1],O=Object(n.useState)(""),_=Object(d.a)(O,2),j=_[0],S=_[1],I=Object(n.useState)(!1),k=Object(d.a)(I,2),w=k[0],B=k[1];function R(e){var a=e.target,t=a.name,n=a.value;switch(t){case"setBuyInAmount":i(n);break;case"setChipsAmount":C(n);break;case"setRatio":S(n)}}return Object(n.useEffect)((function(){(s&&A||s&&j)&&B(!0)}),[s,A,j]),r.a.createElement("div",{className:"game_ratio_wrapper"},r.a.createElement("p",null,"Set the player buy-in by the chips ratio"),r.a.createElement("p",null,"or by the chips amount"),r.a.createElement(f.a,{row:!0,className:"radio_head_line","aria-label":"gender",name:"gender1",value:c,onChange:function(e){o(e.target.value),i(""),C(""),S("")}},r.a.createElement(b.a,{value:"amount",control:r.a.createElement(y.a,{checked:"amount"===c}),label:"Chips Amount"}),r.a.createElement(b.a,{value:"ratio",control:r.a.createElement(y.a,{checked:"ratio"===c}),label:"Buy Ratio",labelPlacement:"end"})),"amount"===c?r.a.createElement(E.Fade,{left:!0},r.a.createElement("div",{className:"amount_wrapper"},r.a.createElement(N,{type:"text",placeholder:"set buy-in amount",name:"setBuyInAmount",value:s,line:"buy-in amount",icon:r.a.createElement("i",{className:"fas fa-dollar-sign"}),onChange:R}),r.a.createElement(N,{type:"text",placeholder:"set chips amount",name:"setChipsAmount",value:A,line:"chip amount",icon:r.a.createElement("img",{alt:"chip icon",style:{width:"20px"},src:g.a}),onChange:R}))):r.a.createElement("div",{className:"amount_wrapper"},r.a.createElement(N,{type:"text",placeholder:"set buy-in amount",name:"setBuyInAmount",value:s,line:"buy-in amount",icon:r.a.createElement("i",{className:"fas fa-dollar-sign"}),onChange:R}),r.a.createElement(N,{type:"text",placeholder:"set the chips ratio",name:"setRatio",value:j,line:'$1 = "chips"',icon:r.a.createElement("img",{alt:"chip icon",style:{width:"20px"},src:g.a}),onChange:R})),w&&r.a.createElement(E.Fade,null,r.a.createElement(v.a,{variant:"outlined",onClick:function(){a({gameRatio:"amount"===c?A/s:j,gameChipsAmount:"amount"===c?A:s*j,gameBuyInAmount:s})}},"All In")))},_=function(e){return localStorage.setItem("pokerGameData",JSON.stringify(e)),function(a){a({type:"SET_GAME_DATA",payload:e})}},j=function(e){return function(a){a({type:"GO_TO_SUMMARY_PAGE",payload:e})}};t(95);var S=function(e){var a=e.ratioData,t=Object(o.b)(),l=Object(n.useState)([]),c=Object(d.a)(l,2),m=c[0],u=(c[1],Object(n.useState)("")),s=Object(d.a)(u,2),i=s[0],p=s[1];return r.a.createElement("div",{className:"game_players_wrapper"},r.a.createElement("span",null,"Game Ratio: $1 = ",a.gameRatio," Chips"),r.a.createElement("span",null,"Game Buy-In Amount: $",a.gameBuyInAmount),r.a.createElement("span",null,"Game Chips Amount: ",a.gameChipsAmount),r.a.createElement("p",null,"Set the Players Names"),m.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement(E.Fade,{left:!0},r.a.createElement("span",null,"Players list")),r.a.createElement("div",{className:"players_list"},m.map((function(e,a){return r.a.createElement(E.Fade,{key:a},r.a.createElement("div",{className:"player_name"},r.a.createElement("span",null,a+1,"."),r.a.createElement("i",{className:"fas fa-user"}),r.a.createElement("span",null,e)))})))),r.a.createElement("div",{className:"add_player"},r.a.createElement(N,{type:"text",placeholder:"Add Player",name:"player",value:i,icon:r.a.createElement("i",{className:"fas fa-user"}),onChange:function(e){var a=e.target.value;p(a)}}),i&&r.a.createElement("i",{className:"far fa-plus-square",onClick:function(){return m.push(i),void p("")}})),m.length>1&&r.a.createElement(E.Fade,null,r.a.createElement(v.a,{className:"set_game",variant:"outlined",onClick:function(){return function(){var e=a.gameRatio,n=a.gameBuyInAmount,r=a.gameChipsAmount,l=m.map((function(e){return{name:e,playerBuyInAmount:n,playerChipsAmount:r,status:"ACTIVE"}}));t(_({playersStatusList:l,gameRatio:e,gameBuyInAmount:n,gameChipsAmount:r}))}()}},"All In")))};t(96);var I=function(){var e=Object(n.useState)(),a=Object(d.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"home"},t?r.a.createElement(S,{ratioData:t}):r.a.createElement(O,{saveGameRatio:function(e){l(e)}}))};t(97);var k=function(e){var a=e.gameData,t=a.gameRatio,n=a.playersStatusList;function l(){var e=0;return n.map((function(a){return e+=Number(a.playerBuyInAmount)})),e}function c(e,a){return"0"===a?-1*e:a/t}return r.a.createElement("div",{className:"summary_wrapper"},r.a.createElement("div",{className:"table"},r.a.createElement("span",null,"Name"),r.a.createElement("span",null,"Buy-In Amount"),r.a.createElement("span",null,"Chips Amount"),r.a.createElement("span",null,"Balance")),n.map((function(e,a){var t=e.name,n=e.playerBuyInAmount,l=e.playerChipsAmount,o=e.status,m="ACTIVE"===o,u=m?"---":c(n,l);return r.a.createElement("div",{key:a,className:"player_line"},r.a.createElement("span",{className:"".concat("CASH_OUT"===o&&"cash_out")},t),r.a.createElement("span",{className:"".concat("CASH_OUT"===o&&"cash_out")},"$",n),r.a.createElement("span",{className:"".concat("CASH_OUT"===o&&"cash_out")},l),r.a.createElement("span",{className:"balance ".concat(u<0&&"negative")},!m&&"$",u))})),r.a.createElement("div",{className:"table_total"},r.a.createElement("span",null,"Total"),r.a.createElement("span",null,"$",l()),r.a.createElement("span",null,function(){var e=0;return n.map((function(a){return e+=Number(a.playerChipsAmount)})),e}()),r.a.createElement("span",null,"$",function(){var e=n.filter((function(e){return"CASH_OUT"===e.status})).filter((function(e){return"0"!==e.playerChipsAmount})),a=l();return e.map((function(e){return a-=c(e.playerBuyInAmount,e.playerChipsAmount)})),a}())),r.a.createElement("p",null,"Game Data"),r.a.createElement("span",null,"Game Ratio: $1 = ",t," Chips"),r.a.createElement("span",null,"Game Buy-In Amount: $",a.gameBuyInAmount),r.a.createElement("span",null,"Game Chips Amount: ",a.gameChipsAmount))},w=t(147),B=t(29),R=t(5),x=t(151),D=t(148),T=t(108),F=(t(98),Object(R.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:"#282c34",border:"thin solid #bc9a36",fontSize:15,minWidth:120,display:"flax",padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#BB86FC",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(T.a));var P=function(e){var a=e.list,t=e.onChange,n=e.value,l=e.defaultItem;return r.a.createElement("div",{className:"input_wrapper"},r.a.createElement(D.a,{labelId:"demo-customized-select-label",id:"demo-customized-select",value:n,onChange:t,input:r.a.createElement(F,null)},l&&r.a.createElement(x.a,{value:l},l),a.map((function(e,a){return r.a.createElement(x.a,{key:a,value:e},e)}))))};t(99);var G=function(e){var a=e.gameData,t=Object(o.b)(),l=a.playersStatusList,c=Object(n.useState)(""),m=Object(d.a)(c,2),u=m[0],s=m[1],i=Object(n.useState)(""),p=Object(d.a)(i,2),y=p[0],f=p[1],b=l.filter((function(e){return"ACTIVE"===e.status})).map((function(e){return e.name}));return r.a.createElement("div",{className:"cash_out_wrapper"},r.a.createElement("p",null,"Hope you have some Chips to Cash Out"),r.a.createElement("p",null,"Select a Player"),r.a.createElement(P,{value:u,onChange:function(e){var a=e.target.value;s(a)},list:b}),u&&r.a.createElement("div",{className:"player_cash_out"},r.a.createElement("p",null,"how many chips ",u," have"),r.a.createElement(E.Fade,{bottom:!0},r.a.createElement(N,{type:"text",placeholder:"Chip Amount",value:y,icon:r.a.createElement("img",{alt:"chip icon",style:{width:"20px"},src:g.a}),onChange:function(e){var a=e.target.value;f(a)}})),r.a.createElement(E.Fade,{bottom:!0},y&&r.a.createElement(v.a,{onClick:function(){return function(){var e=l.map((function(e){return e.name!==u?e:{name:u,playerBuyInAmount:e.playerBuyInAmount,playerChipsAmount:y,status:"CASH_OUT"}})),n=Object(B.a)({},a,{playersStatusList:e});t(_(n)),t(j(!1))}()}},"cash out"))))},U=t(53),$=t(41);t(101);var L=function(e){var a=e.gameData,t=Object(o.b)(),l=a.playersStatusList,c=Object(n.useState)(""),m=Object(d.a)(c,2),u=m[0],s=m[1],i=Object(n.useState)(""),p=Object(d.a)(i,2),y=p[0],f=p[1],b=Object(n.useState)(""),h=Object(d.a)(b,2),g=h[0],A=h[1],C=l.filter((function(e){return"ACTIVE"===e.status})).map((function(e){return e.name}));function O(e){var a=e.target,t=a.name,n=a.value;"amount"===t?A(n):f(n)}function S(){return r.a.createElement(v.a,{onClick:function(){return function(){var e=y?{name:y,playerBuyInAmount:g,playerChipsAmount:Number(g)*Number(a.gameRatio),status:"ACTIVE"}:null,n=l.map((function(e){return e.name!==u?e:{name:u,playerBuyInAmount:Number(e.playerBuyInAmount)+Number(g),playerChipsAmount:Number(e.playerChipsAmount)+Number(g)*Number(a.gameRatio),status:"ACTIVE"}})),r=e?[].concat(Object(U.a)(n),[e]):Object(U.a)(n),c=Object(B.a)({},a,{playersStatusList:r});t(_(c)),t(j(!1))}()}},y?"Welcome ".concat(y):"".concat(Object($.capitalize)(u)," is Back"))}return r.a.createElement("div",{className:"update_player_wrapper"},r.a.createElement("p",null,"Choose a Player to Update or Add one"),r.a.createElement("p",null,"Select a Player"),r.a.createElement(P,{name:"update",value:u,onChange:function(e){var a=e.target.value,t="New Player"===a?Object($.toUpper)(a):a;s(t)},list:C,defaultItem:"New Player"}),u&&r.a.createElement("div",{className:"player_update"},"NEW PLAYER"===u&&r.a.createElement(E.Fade,{bottom:!0},r.a.createElement("p",null,"Add ",Object($.capitalize)(u)," Name"),r.a.createElement(N,{type:"text",name:"new player",placeholder:"Player Name",value:y,icon:r.a.createElement("i",{className:"fas fa-user"}),onChange:O})),r.a.createElement(E.Fade,{bottom:!0},r.a.createElement("p",null,"Add ",Object($.capitalize)(u)," Buy amount"),r.a.createElement(N,{type:"text",name:"amount",placeholder:"Buy Amount",value:g,icon:r.a.createElement("i",{className:"fas fa-dollar-sign"}),onChange:O})),r.a.createElement(E.Fade,{bottom:!0},"NEW PLAYER"===u?g&&y&&S():g&&S())))};t(102);var M=function(e){var a=e.gameData,t=Object(n.useState)(!1),l=Object(d.a)(t,2),c=l[0],o=l[1];return r.a.createElement("div",{className:"update_players_wrapper"},r.a.createElement("div",{className:"update_players_nav"},r.a.createElement(w.a,{disableElevation:!0,variant:"contained",color:"primary"},r.a.createElement(v.a,{className:"".concat(c?"not_selected":"selected"),onClick:function(){return o(!1)}},"update"),r.a.createElement(v.a,{className:"".concat(c?"selected":"not_selected"),onClick:function(){return o(!0)}},"cash out"))),c?r.a.createElement(E.Fade,{bottom:!0},r.a.createElement(G,{gameData:a})):r.a.createElement(E.Fade,{bottom:!0},r.a.createElement(L,{gameData:a})))};t(103);function H(e){var a=e.gameData,t=Object(o.b)(),n=a.playersStatusList,l=Object(o.c)((function(e){return e.mainReducer.summaryPage})),c=Boolean(n.find((function(e){return"ACTIVE"===e.status})));return r.a.createElement("div",{className:"game_page_wrapper"},r.a.createElement("div",{className:"game_page_nav"},r.a.createElement(w.a,{disableElevation:!0,variant:"contained",color:"primary"},r.a.createElement(v.a,{className:"".concat(l?"not_selected":"selected"),onClick:function(){return t(j(!1))}},"summary"),r.a.createElement(v.a,{className:"".concat(c?l?"selected":"not_selected":"disabled"),onClick:function(){return t(j(!0))},disabled:!c},"players update"))),l?r.a.createElement(M,{gameData:a}):r.a.createElement(E.Fade,{bottom:!0},r.a.createElement(k,{gameData:a})))}t(104);function V(){var e=Object(o.b)(),a=localStorage.getItem("pokerGameData"),t=JSON.parse(a);Object(n.useEffect)((function(){t&&e(_(t))}),[]);var l=Object(o.c)((function(e){return e.mainReducer.gameData}));return r.a.createElement("div",{className:"App"},r.a.createElement(p,{className:"App-header"}),r.a.createElement(n.Fragment,null,null===l?r.a.createElement(I,null):r.a.createElement(H,{gameData:l})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(20),z=t(65),J={gameData:null,summaryPage:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_GAME_DATA":var t=a.payload;return Object(B.a)({},e,{gameData:t});case"GO_TO_SUMMARY_PAGE":var n=a.payload;return Object(B.a)({},e,{summaryPage:n});default:return e}},q=Object(W.combineReducers)({mainReducer:Y}),K=t(66),Q=Object(W.createStore)(q,{},Object(K.composeWithDevTools)(Object(W.applyMiddleware)(z.a)));c.a.render(r.a.createElement(o.a,{store:Q},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,a,t){e.exports=t.p+"static/media/chip12.fd6df6c1.png"},60:function(e,a,t){e.exports=t.p+"static/media/gold monkey.c21354db.png"},61:function(e,a,t){e.exports=t.p+"static/media/gold monkey 2.efbf11f2.png"},73:function(e,a,t){e.exports=t(105)},78:function(e,a,t){},83:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.fa20eb73.chunk.js.map