(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-162d8c40"],{"0d03":function(e,t,n){var c=n("6eeb"),a=Date.prototype,r="Invalid Date",o="toString",s=a[o],i=a.getTime;new Date(NaN)+""!=r&&c(a,o,(function(){var e=i.call(this);return e===e?s.call(this):r}))},4795:function(e,t,n){var c=n("23e7"),a=n("da84"),r=n("342f"),o=[].slice,s=/MSIE .\./.test(r),i=function(e){return function(t,n){var c=arguments.length>2,a=c?o.call(arguments,2):void 0;return e(c?function(){("function"==typeof t?t:Function(t)).apply(this,a)}:t,n)}};c({global:!0,bind:!0,forced:s},{setTimeout:i(a.setTimeout),setInterval:i(a.setInterval)})},5007:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),a={key:0},r={key:0,class:"row center"},o={class:"col m6 offset-m3"},s=Object(c["h"])("h4",null,"Вы успешно подтвердили трек-номер!",-1),i=Object(c["g"])(" Отследить заказ можно "),l=Object(c["g"])("здесь"),u={key:1,class:"row center"},b={class:"col m6 offset-m3"},p=Object(c["h"])("h1",null,"Поздравляю!",-1),j={class:"section"},d=Object(c["h"])("p",null,[Object(c["g"])(" У вас есть "),Object(c["h"])("strong",null,"30 дней"),Object(c["g"])(", для того чтобы отправить подарок ")],-1),O={class:"section"},h={class:"section"},f={key:2,class:"row center"},v={class:"col m6 offset-m3"},g=Object(c["g"])(" , для того, чтобы получить подарок, вам необходимо сначала выбрать человека и отправить подарок "),m={class:"row center"},w=Object(c["h"])("p",null,"Пол:",-1),k={class:"row center"},P=Object(c["h"])("option",{value:"0",disabled:"",selected:""},"Выберите пол",-1),y=Object(c["h"])("option",{value:"Муж"},"Мужской",-1),x=Object(c["h"])("option",{value:"Жен"},"Женский",-1),I=Object(c["h"])("option",{value:"Неопределенный"},"Неопределенный",-1),U={class:"row center"},R=Object(c["h"])("p",null,"Страна:",-1),H={class:"row center"},N=Object(c["h"])("option",{value:"none",disabled:"",selected:""},"Выберите страну",-1),q=Object(c["h"])("option",{value:"RU"},"Россия",-1),z=Object(c["h"])("option",{value:"UK"},"Украина",-1),D={class:"row center"},A=Object(c["h"])("p",null,"Возраст:",-1),C={class:"row center"},T=Object(c["f"])('<option value="0" disabled selected>Выберите возраст</option><option value="1">Младше 14</option><option value="2">15-18 лет</option><option value="3">19-25</option><option value="4">26-35</option><option value="5">36-45</option><option value="6">46-55</option><option value="7">56-65</option><option value="8">66 и старше</option>',9),V=Object(c["h"])("button",{class:"btn waves-effect waves-light orange accent-4",type:"submit"},[Object(c["g"])(" Выбрать человека "),Object(c["h"])("i",{class:"material-icons right"},"send")],-1),$={key:3,class:"row center"},E={class:"col m6 offset-m3"},S=Object(c["h"])("p",null,[Object(c["g"])(" С нами уже "),Object(c["h"])("strong",null,"1320"),Object(c["g"])(" человек из "),Object(c["h"])("strong",null,"13"),Object(c["g"])(" стран ")],-1),G=Object(c["h"])("div",{class:"section"}," Стать участником проекта Получи подарок и получить свой подарок очень легко. Пройди регистрацию – это займёт 5 минут, получи адрес для отправки подарка другому пользователю, отправь подарок и напиши администрации сайта трек посылки, в ответ тебе вышлют трек посылки для тебя и… ВУАЛЯ... ты получаешь подарок! ",-1),J=Object(c["g"])("С правилами "),K=Object(c["g"])("согласен"),_=Object(c["g"])(" Участвовать в проекте "),B=Object(c["h"])("i",{class:"material-icons right"},"send",-1),F={key:4,class:"row center"},M={class:"col m6 offset-m3"},L=Object(c["g"])(" Перейти на страницу отправки "),Q=Object(c["h"])("i",{class:"material-icons right"},"send",-1);function W(e,t,n,W,X,Y){var Z=Object(c["v"])("router-link");return X.loading?(Object(c["q"])(),Object(c["d"])("div",a,[X.tracking?(Object(c["q"])(),Object(c["d"])("div",r,[Object(c["h"])("div",o,[s,i,Object(c["h"])(Z,{to:"/profile#otpr"},{default:Object(c["G"])((function(){return[l]})),_:1})])])):X.sendPage?(Object(c["q"])(),Object(c["d"])("div",u,[Object(c["h"])("div",b,[p,Object(c["h"])("div",j,[Object(c["h"])("p",null,Object(c["z"])(e.info.persona.info.name)+" уже ждет ваш подарок. Отправляйтесь на почту и отправьте подарок по этому адресу "+Object(c["z"])(e.info.persona.info.pochtindex),1),d]),Object(c["h"])("div",O,[Object(c["H"])(Object(c["h"])("input",{type:"text",placeholder:"Ввести трек-номер","onUpdate:modelValue":t[1]||(t[1]=function(e){return X.trackNumber=e})},null,512),[[c["D"],X.trackNumber]])]),Object(c["h"])("div",h,[Object(c["h"])("button",{class:"btn waves-effect waves-light orange accent-4",onClick:t[2]||(t[2]=Object(c["I"])((function(){return Y.trackingActive&&Y.trackingActive.apply(Y,arguments)}),["prevent"]))}," Подтвердить трек-номер ")])])])):X.activeProject?(Object(c["q"])(),Object(c["d"])("div",f,[Object(c["h"])("div",v,[Object(c["h"])("h5",null,[Object(c["h"])("strong",null,Object(c["z"])(X.name),1),g]),Object(c["h"])("form",{onSubmit:t[6]||(t[6]=Object(c["I"])((function(){return Y.selectPeople&&Y.selectPeople.apply(Y,arguments)}),["prevent"]))},[Object(c["h"])("div",m,[w,Object(c["h"])("div",k,[Object(c["H"])(Object(c["h"])("select",{class:"browser-default","onUpdate:modelValue":t[3]||(t[3]=function(e){return X.gender=e})},[P,y,x,I],512),[[c["C"],X.gender]])])]),Object(c["H"])(Object(c["h"])("div",U,[R,Object(c["h"])("div",H,[Object(c["H"])(Object(c["h"])("select",{class:"browser-default","onUpdate:modelValue":t[4]||(t[4]=function(e){return X.selected=e})},[N,q,z],512),[[c["C"],X.selected]])])],512),[[c["E"],X.step2]]),Object(c["H"])(Object(c["h"])("div",D,[A,Object(c["h"])("div",C,[Object(c["H"])(Object(c["h"])("select",{class:"browser-default","onUpdate:modelValue":t[5]||(t[5]=function(e){return X.age=e})},[T],512),[[c["C"],X.age]])]),V],512),[[c["E"],X.step3]])],32)])])):(Object(c["q"])(),Object(c["d"])("div",$,[Object(c["h"])("div",E,[Object(c["h"])("h5",null,"Добро пожаловать, "+Object(c["z"])(X.name)+"!",1),S,G,Object(c["h"])("p",null,[Object(c["h"])("label",null,[Object(c["H"])(Object(c["h"])("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=function(e){return X.agree=e})},null,512),[[c["B"],X.agree]]),Object(c["h"])("span",null,[J,Object(c["h"])(Z,{to:"/rules"},{default:Object(c["G"])((function(){return[K]})),_:1})])])]),Object(c["h"])("button",{class:"btn waves-effect waves-light orange accent-4",type:"submit",onClick:t[8]||(t[8]=Object(c["I"])((function(){return Y.stepUno&&Y.stepUno.apply(Y,arguments)}),["prevent"]))},[_,B])])])),X.selectedPeople?(Object(c["q"])(),Object(c["d"])("div",F,[Object(c["h"])("div",M,[Object(c["h"])("img",{class:"circle",src:X.persona.info.avatarImg,alt:"",width:"180"},null,8,["src"]),Object(c["h"])("h3",null,Object(c["z"])(X.persona.info.name),1),Object(c["h"])("p",null,"Почтовый адрес: "+Object(c["z"])(X.persona.info.pochtindex),1),Object(c["h"])("p",null,"Страна: "+Object(c["z"])(X.persona.info.country),1),Object(c["h"])("p",null,"Предпочтения: "+Object(c["z"])(X.persona.info.myfavorites),1),Object(c["h"])("button",{class:"btn waves-effect waves-light orange accent-4",onClick:t[9]||(t[9]=Object(c["I"])((function(){return Y.sendPageActive&&Y.sendPageActive.apply(Y,arguments)}),["prevent"]))},[L,Q])])])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)}var X=n("5530"),Y=n("1da1"),Z=(n("96cf"),n("4795"),n("0d03"),n("b444")),ee=n("5502"),te=n("260b"),ne={data:function(){return{name:"",activeProject:!1,gender:null,step2:!1,step3:!1,selected:"0",selectedPeople:!1,sendPage:!1,backTime:null,tracking:!1,agree:!1,age:null,trackNumber:null,users:{},loading:!1,persona:{info:{avatarImg:"noavatar.png",name:"no name",pochtindex:"000000",country:"Russia",myfavorites:"no"},id:"000000"}}},mounted:function(){var e=this;return Object(Y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchUsers");case 2:return e.users=t.sent,setInterval((function(){e.loading=!0}),10),t.next=6,e.info.persona;case 6:return e.persona=t.sent,t.next=9,e.info.tracking;case 9:return e.tracking=t.sent,t.next=12,e.info.sendPage;case 12:return e.sendPage=t.sent,t.next=15,e.info.name;case 15:return e.name=t.sent,t.next=18,e.info.activeProject;case 18:e.activeProject=t.sent,Z["a"][e.$route.query.message]&&e.$message(Z["a"][e.$route.query.message]);case 20:case"end":return t.stop()}}),t)})))()},methods:Object(X["a"])(Object(X["a"])({},Object(ee["b"])(["updateInfo"])),{},{selectPeople:function(){for(var e in this.users)this.users[e].info.reggender==this.gender&&this.users[e].info.country==this.selected&&(this.persona=this.users[e]);"no name"==this.persona.info.name&&this.$message("Такой человек еще не зарегистрирован в системе. Попробуйте другие параметры"),this.selectedPeople=!0},trackingActive:function(){var e=this;return Object(Y["a"])(regeneratorRuntime.mark((function t(){var n,c,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.tracking=!0,t.next=4,e.updateInfo({tracking:e.tracking,trackNumber:e.trackNumber,dateOtpr:(new Date).setHours(23,59,59,999),OtpravilPodarok:!0});case 4:return t.next=6,te["a"].database().ref("/users/".concat(e.persona.id,"/info")).once("value");case 6:return n=t.sent.val(),c=te["a"].auth().currentUser,a={sending:!0,sendingTrackNumber:e.trackNumber,sendingDateOtpr:(new Date).setHours(23,59,59,999),otKogo:c.uid},r=Object(X["a"])(Object(X["a"])({},n),a),t.next=12,te["a"].database().ref("/users/".concat(e.persona.id,"/info")).update(r);case 12:t.next=17;break;case 14:throw t.prev=14,t.t0=t["catch"](0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},stepUno:function(){var e=this;return Object(Y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.activeProject=!0,t.next=4,e.updateInfo({activeProject:e.activeProject});case 4:t.next=9;break;case 6:throw t.prev=6,t.t0=t["catch"](0),t.t0;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},sendPageActive:function(){var e=this;return Object(Y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.selectedPeople=!1,e.sendPage=!0,t.next=5,e.updateInfo({sendPage:e.sendPage,persona:e.persona});case 5:t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}),watch:{gender:function(e){null!==e&&(this.step2=!0)},selected:function(e){"none"!==e&&(this.step3=!0)}},computed:Object(X["a"])({},Object(ee["c"])(["info"]))};ne.render=W;t["default"]=ne}}]);
//# sourceMappingURL=chunk-162d8c40.c6800d5c.js.map