(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88f58282"],{"0d03":function(t,e,c){var n=c("6eeb"),i=Date.prototype,o="Invalid Date",a="toString",l=i[a],s=i.getTime;new Date(NaN)+""!=o&&n(i,a,(function(){var t=s.call(this);return t===t?l.call(this):o}))},"79cb":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),i={class:"row"},o={class:"col s12 m6 offset-m3"},a={class:"col s12"},l={class:"card white"},s={class:"card-content left-align"},r={class:"card-title"},b=Object(n["h"])("small",null,"отправлено",-1),d={class:"section"},u=Object(n["g"])(" История отправления: "),O=Object(n["h"])("br",null,null,-1),j=Object(n["g"])(" Отправлен "),h=Object(n["g"])(),p=Object(n["h"])("br",null,null,-1),f={key:0},v=Object(n["g"])(" Получен "),g={key:1},w=Object(n["h"])("p",null,"Подарок еще не получен",-1),m=Object(n["h"])("div",{class:"section"},"Карта трек-номера",-1);function k(t,e,c,k,y,D){return Object(n["q"])(),Object(n["d"])("div",i,[Object(n["h"])("div",o,[Object(n["h"])("button",{class:"btn orange accent-4",onClick:e[1]||(e[1]=Object(n["I"])((function(e){return t.$router.push("/profile#otpr")}),["prevent"]))}," Назад "),Object(n["h"])("div",a,[Object(n["h"])("div",l,[Object(n["h"])("div",s,[Object(n["h"])("span",r,"Отправление №: "+Object(n["z"])(c.id),1),b,Object(n["h"])("div",d,[u,O,j,Object(n["h"])("strong",null,Object(n["z"])(y.date),1),h,p,this.info.podarokDostavlen?(Object(n["q"])(),Object(n["d"])("div",f,[v,Object(n["h"])("strong",null,Object(n["z"])(this.info.datePolychenia),1)])):(Object(n["q"])(),Object(n["d"])("div",g,[w]))])])]),m])])])}var y=c("5530"),D=(c("0d03"),c("5502")),q={props:["id"],data:function(){return{date:null,options:{year:"numeric",month:"long",day:"numeric"}}},mounted:function(){this.date=new Date(this.info.dateOtpr).toLocaleString("ru",this.options)},computed:Object(y["a"])({},Object(D["c"])(["info"]))};q.render=k;e["default"]=q}}]);
//# sourceMappingURL=chunk-88f58282.8527d818.js.map