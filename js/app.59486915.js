(function(t){function e(e){for(var r,s,o=e[0],i=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},c=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1a41":function(t,e,a){"use strict";a("24cf")},"24cf":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=Object(r["q"])("data-v-adaf4618");Object(r["j"])("data-v-adaf4618");var c={class:"sort-wrapper"},s={key:0,class:"filterStatus"},o={key:1,class:"filterStatus"},i={key:2,class:"awards"},l={class:"awards__item awards__item--first"},u=Object(r["g"])("div",{class:"awards__logo"},"Состав",-1),d=Object(r["g"])("div",{class:"awards__game"},"Дисциплина",-1),p=Object(r["g"])("p",{class:"awards__tournament"},"Турнир",-1),b=Object(r["g"])("p",{class:"awards__place"},"Место проведения",-1),f=Object(r["e"])('<div class="pagination" data-v-adaf4618><button class="pagination__nav left" aria-label="Предыдущая страница" data-v-adaf4618></button><ul class="pagination__list" data-v-adaf4618><li class="pagination__item" data-v-adaf4618><a class="pagination__link" href="#" data-v-adaf4618>1</a></li><li class="pagination__item" data-v-adaf4618><a class="pagination__link" href="#" data-v-adaf4618>2</a></li><li class="pagination__item active" data-v-adaf4618><a class="pagination__link" href="#" data-v-adaf4618>3</a></li><li class="pagination__item" data-v-adaf4618><a class="pagination__link" href="#" data-v-adaf4618>4</a></li></ul><button class="pagination__nav right" aria-label="Следующая страница" data-v-adaf4618></button></div>',1);Object(r["i"])();var g=n((function(t,e,a,n,g,m){var j=Object(r["l"])("filter-post"),O=Object(r["l"])("sort-up"),h=Object(r["l"])("awards-item");return Object(r["h"])(),Object(r["c"])("div",null,[Object(r["g"])("div",c,[Object(r["g"])(j,{items:g.filterPost,onApplyPostFilter:m.applyPostFilter},null,8,["items","onApplyPostFilter"]),Object(r["g"])(O,{items:g.sortUpList,currentItem:g.sortPeriod,onApplySortUp:m.applySortUp},null,8,["items","currentItem","onApplySortUp"])]),g.isLoading?(Object(r["h"])(),Object(r["c"])("p",s,"Загрузка...")):g.isLoading||0!==g.awards.length?!g.isLoading&&g.awards.length>0?(Object(r["h"])(),Object(r["c"])("ul",i,[Object(r["g"])("li",l,[u,d,Object(r["g"])("p",{class:["awards__rate sort-arrow",{active:"rate"==g.currentSorting}],onClick:e[1]||(e[1]=function(t){return m.toggleCurrentSorting("rate")})}," Место ",2),p,b,Object(r["g"])("p",{class:["awards__date sort-arrow",{active:"dateEnd"==g.currentSorting}],onClick:e[2]||(e[2]=function(t){return m.toggleCurrentSorting("dateEnd")})}," Дата ",2),Object(r["g"])("p",{class:["awards__money sort-arrow",{active:"money"==g.currentSorting}],onClick:e[3]||(e[3]=function(t){return m.toggleCurrentSorting("money")})}," Призовые ",2)]),(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(m.sortAwards,(function(t){return Object(r["h"])(),Object(r["c"])(h,{key:t.id,logo:t.logo,game:t.game,rate:t.rate,tournament:t.tournament,place:t.place,date:t.date,dateEnd:t.dateEnd,money:t.money},null,8,["logo","game","rate","tournament","place","date","dateEnd","money"])})),128))])):Object(r["d"])("",!0):(Object(r["h"])(),Object(r["c"])("p",o," Награды не найдены ")),f])})),m=(a("4de4"),a("caad"),a("b0c0"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),{class:"awards__item"}),j={class:"awards__wrap awards__wrap--first"},O={class:"awards__logo"},h={class:"awards__game"},_={class:"label"},v={class:"awards__wrap awards__wrap--second"},w={class:"awards__rate"},y=Object(r["f"])(),k=Object(r["g"])("span",null,"место",-1),S={class:"awards__tournament"},P={class:"awards__place"},C={class:"awards__wrap awards__wrap--third"},L={class:"awards__date"},F={class:"awards__money"};function I(t,e,a,n,c,s){return Object(r["h"])(),Object(r["c"])("li",m,[Object(r["g"])("div",j,[Object(r["g"])("div",O,[Object(r["g"])("img",{src:a.logo,alt:""},null,8,["src"])]),Object(r["g"])("div",h,[Object(r["g"])("div",_,Object(r["m"])(a.game),1)])]),Object(r["g"])("div",v,[Object(r["g"])("p",w,[Object(r["g"])("b",null,Object(r["m"])(a.rate),1),y,k]),Object(r["g"])("p",S,Object(r["m"])(a.tournament),1),Object(r["g"])("p",P,Object(r["m"])(a.place),1)]),Object(r["g"])("div",C,[Object(r["g"])("p",L,[Object(r["f"])(Object(r["m"])(a.date)+" ",1),Object(r["g"])("small",null,Object(r["m"])(a.dateEnd),1)]),Object(r["g"])("p",F,"$"+Object(r["m"])(a.money),1)])])}a("a9e3");var x={props:{logo:String,game:String,rate:Number,tournament:String,place:String,date:String,dateEnd:[String,Number],money:Number}};x.render=I;var U=x,E=Object(r["q"])("data-v-7a5ee248");Object(r["j"])("data-v-7a5ee248");var A={class:"f"},T={key:1,class:"filter-count"},D=Object(r["g"])("button",{class:"f__button f__button--submit",type:"submit"},"Применить",-1);Object(r["i"])();var N=E((function(t,e,a,n,c,s){return Object(r["h"])(),Object(r["c"])("div",A,[Object(r["g"])("button",{class:"f__btn",type:"button",onClick:e[1]||(e[1]=function(t){return c.showForm=!c.showForm})},[s.logo?(Object(r["h"])(),Object(r["c"])("img",{key:0,src:s.logo,alt:""},null,8,["src"])):Object(r["d"])("",!0),Object(r["g"])("span",null,Object(r["m"])(s.buttonText),1),s.checkCounter>1?(Object(r["h"])(),Object(r["c"])("span",T,"+ "+Object(r["m"])(s.checkCounter-1),1)):Object(r["d"])("",!0)]),c.showForm?(Object(r["h"])(),Object(r["c"])("form",{key:0,class:"f__form",action:"#",onSubmit:e[4]||(e[4]=Object(r["p"])((function(){return s.applyFilter&&s.applyFilter.apply(s,arguments)}),["prevent"]))},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(a.items,(function(t){return Object(r["h"])(),Object(r["c"])("div",{class:"f__option",key:t.id},[t.img?(Object(r["h"])(),Object(r["c"])("img",{key:0,src:t.img,alt:""},null,8,["src"])):Object(r["d"])("",!0),Object(r["o"])(Object(r["g"])("input",{class:"f__input visually-hidden",value:t.url,type:"checkbox",id:t.url,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.checkedItems=t})},null,8,["value","id"]),[[r["n"],c.checkedItems]]),Object(r["g"])("label",{class:["f__label",t.img?"":"f__label--text"],for:t.url},Object(r["m"])(t.name),11,["for"])])})),128)),D,Object(r["g"])("button",{class:"f__button f__button--reset",type:"reset",onClick:e[3]||(e[3]=Object(r["p"])((function(){return s.reset&&s.reset.apply(s,arguments)}),["prevent"]))},"Сбросить")],32)):Object(r["d"])("",!0)])})),M=(a("7db0"),{props:{items:[Array,Object]},data:function(){return{defaultButtonText:"Все новости",checkedItems:[],showForm:!1}},computed:{buttonText:function(){return 0==this.checkCounter?this.defaultButtonText:this.firstCheckedItem().name},logo:function(){return 0==this.checkCounter?null:this.firstCheckedItem().img},checkCounter:function(){return this.checkedItems.length}},methods:{reset:function(){this.checkedItems=[],this.applyFilter()},firstCheckedItem:function(){var t=this;return this.items.find((function(e){return e.url==t.checkedItems[0]}))},applyFilter:function(){this.$emit("apply-post-filter",this.checkedItems),this.showForm=!1}}});a("1a41");M.render=N,M.__scopeId="data-v-7a5ee248";var $=M,q={class:"sort-up"};function B(t,e,a,n,c,s){return Object(r["h"])(),Object(r["c"])("div",q,[Object(r["g"])("button",{class:["sort-up__btn sort-arrow",{active:c.showList}],type:"btn","aria-label":"Сортировка",onClick:e[1]||(e[1]=function(t){return c.showList=!c.showList})},Object(r["m"])(s.getPeriodName),3),c.showList?(Object(r["h"])(),Object(r["c"])("div",{key:0,class:[{show:c.showList},"sort-up__list"]},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(a.items,(function(t){return Object(r["h"])(),Object(r["c"])("a",{key:t.id,onClick:function(e){return s.setPeriodSort(t.value)},class:"sort-up__link"},Object(r["m"])(t.name),9,["onClick"])})),128))],2)):Object(r["d"])("",!0)])}var J=a("53ca"),V={props:{items:[Array],currentItem:String},data:function(){return{showList:!1}},computed:{getPeriodName:function(){var t=this,e=this.items.find((function(e){return e.value==t.currentItem}));return"object"==Object(J["a"])(e)?e.name:""}},methods:{setPeriodSort:function(t){this.$emit("apply-sort-up",t),this.showList=!1}}};V.render=B;var z=V,G={mounted:function(){this.getData()},components:{AwardsItem:U,FilterPost:$,SortUp:z},data:function(){return{awards:[],filterPost:[],dropDownFilter:[],currentSorting:"-dateEnd",sortPeriod:"all",sortUpList:[],isLoading:!1}},computed:{sortAwards:function(){var t=this,e=this.awards,a=this.currentSorting.replace("-",""),r="-"==this.currentSorting[0]?"desc":"asc";function n(t,e){return"desc"==r?t[a]>e[a]?-1:1:t[a]<e[a]?-1:1}return e=e.sort(n),this.dropDownFilter.length>0&&(e=e.filter((function(e){return t.dropDownFilter.includes(e.team)}))),e}},methods:{getData:function(){var t=this;this.isLoading=!0,fetch("/products.json").then((function(t){if(t.ok)return t.json()})).then((function(e){t.isLoading=!1;var a=[],r=[],n=[];for(var c in e.awards)a.push({id:c,logo:e.awards[c].logo,game:e.awards[c].game,rate:e.awards[c].rate,tournament:e.awards[c].tournament,place:e.awards[c].place,date:e.awards[c].date,dateEnd:e.awards[c].dateEndTimeStamp,money:e.awards[c].money,team:e.awards[c].team});for(var s in t.awards=a,e.filterPost)r.push({id:s,name:e.filterPost[s].name,url:e.filterPost[s].url,img:e.filterPost[s].img?e.filterPost[s].img:null});for(var o in t.filterPost=r,e.sortUpList)n.push({id:o,name:e.sortUpList[o].name,value:e.sortUpList[o].value});t.sortUpList=n})).catch((function(t){console.log(t)}))},toggleCurrentSorting:function(t){this.currentSorting===t?this.currentSorting="-"+t:this.currentSorting=t},applyPostFilter:function(t){this.dropDownFilter=t},applySortUp:function(t){this.sortPeriod=t}}};a("fc03");G.render=g,G.__scopeId="data-v-adaf4618";var H=G,K=Object(r["b"])(H);K.mount("#app")},ef81:function(t,e,a){},fc03:function(t,e,a){"use strict";a("ef81")}});
//# sourceMappingURL=app.59486915.js.map