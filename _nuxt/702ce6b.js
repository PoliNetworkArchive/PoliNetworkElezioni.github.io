(window.webpackJsonp=window.webpackJsonp||[]).push([[38,5,6,10,11,12,13],{125:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{organiConfronto:[{id:1,name:"CNSU",desc:"Il Consiglio nazionale degli studenti universitari (CNSU) è un organo consultivo del Ministero dell'università e della ricerca italiano. Previsto dalla legge 15 marzo 1997, n. 59 venne però di fatto istituito con il D.P.R. 2 dicembre 1997, n. 491. "}],liste:[{id:1,name:"Svoltastudenti",imageUrlHorizontal:"/img/logo-svolta_hor.png",linkLista:"https://www.svoltastudenti.it/",organi:[{name:"CSNU",desc:"Descrizione di quello che vuole fare la lista...",candidati:[{id:1,imgUrl:"/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",name:"Di Ceglie Davide",detto:"REFLASH"}]}]},{id:2,name:"Lista aperta",imageUrlHorizontal:"/img/logo-listaaperta_hor.png",linkLista:"/2021/lista/listaaperta/",organi:[{name:"CSNU",desc:"Descrizione di quello che vuole fare la lista...",candidati:[]}]},{id:3,name:"Terna sinistrorsa",imageUrlHorizontal:"/img/logo-terna_hor.png",linkLista:"/2021/lista/ternasinistrorsa/",organi:[{name:"CSNU",desc:"Descrizione di quello che vuole fare la lista...",candidati:[]}]},{id:4,name:"Studenti indipendenti",imageUrlHorizontal:"/img/logo-sip_hor.png",linkLista:"/2021/lista/studentiindipendenti/",organi:[{name:"CSNU",desc:"Descrizione di quello che vuole fare la lista...",candidati:[]}]}]}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PagesSenatoCda",{attrs:{language:t.$i18n.locale,"organi-confronto":t.organiConfronto,liste:t.liste}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PagesSenatoCda:n(92).default})},70:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("\n        Copyright ©\n        "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v(" Contatti ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" Contacts ")]):t._e()]),t._v("\n         - \n        "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v(" Curiosità ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" Curiosity ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},71:function(t,e,n){"use strict";n.r(e);var l={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},72:function(t,e,n){var content=n(75);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("894dc536",content,!0,{sourceMap:!1})},73:function(t,e,n){var content=n(78);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("ad7dac6e",content,!0,{sourceMap:!1})},74:function(t,e,n){"use strict";n(72)},75:function(t,e,n){var l=n(12)(!1);l.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=l},76:function(t,e,n){"use strict";n.r(e);var l={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(n(74),n(8)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n              "+t._s(t.cand.detto)+"\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},77:function(t,e,n){"use strict";n(73)},78:function(t,e,n){var l=n(12)(!1);l.push([t.i,".descrizioneFrameSenatoCdA{margin:auto;width:100%;max-width:calc(70px + 15rem + 40vw);padding-left:calc(1vw + 1px + .07rem);padding-right:calc(1vw + 1px + .07rem);padding-bottom:calc(.3rem + 6px)}",""]),t.exports=l},79:function(t,e,n){"use strict";n.r(e);var l={props:{item:{type:Object,default:null}}},r=(n(77),n(8)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"100%"}},[n("h2",[t._v(t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"descrizioneFrameSenatoCdA"},[n("span",{staticStyle:{"font-size":"calc(1px + 1rem)",color:"black",padding:"calc(1px + 1vw)"}},[t._v("\n      "+t._s(t.item.desc)+"\n    ")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.item.candidati,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-6","style-param":"margin:auto;"}},[n("div",[n("ListeCandidato",{attrs:{cand:e,"url-lista":t.item.linkLista}})],1)])})),1),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[t._v(" ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeCandidato:n(76).default,LayoutFrame:n(71).default})},80:function(t,e,n){"use strict";n.r(e);var l={props:{liste:{type:Array,default:null},organiConfronto:{type:Array,default:null},language:{type:String,default:"it",required:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.test2()}))},methods:{test2:function(){for(var t=0;t<5;t++){var ul=document.getElementById("listeContainer2");if(null!=ul){for(var i=ul.children.length;i>=0;i--)ul.appendChild(ul.children[Math.random()*i|0]);ul.style.opacity="1"}}}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container2",staticStyle:{width:"100%","max-width":"100%",margin:"0px"}},[n("div",{staticClass:"container7"},[n("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[n("div",{staticStyle:{margin:"auto"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",["it"==t.language?n("span",[t._v("Elezioni rappresentanti degli studenti")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Election of student representatives")]):t._e()]),t._v(" "),n("br"),t._v(" "),t._l(t.organiConfronto,(function(e){return n("LayoutFrame",{key:e.id},[n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"lead"}),n("blockquote",[t._v("\n                                        "+t._s(e.desc)+"\n                                    ")]),t._v(" "),n("p")])])}))],2)])])]),t._v(" "),n("div",{staticClass:"row text-center",staticStyle:{display:"flex","flex-wrap":"wrap",opacity:"0.5"},attrs:{id:"listeContainer2"},on:{load:t.test2}},t._l(t.liste,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-3","style-param":"max-width: 100%;flex: 1 4 25%;min-width:calc(150px + 9rem + 3vw)"}},[n("a",{attrs:{href:e.linkLista.startsWith("https://")?e.linkLista:"/"+t.language+e.linkLista}},[n("div",{staticClass:"card"},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"cap-left",staticStyle:{width:"100%",display:"block",padding:"0px"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"imageList",staticStyle:{width:"100%","max-width":"100%"},attrs:{src:e.imageUrlHorizontal}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"candidateTable",staticStyle:{"list-style":"none","padding-left":"0px"}},t._l(e.organi,(function(t){return n("LayoutFrame",{key:t.name},[n("ListeFrameSenatoCdA",{attrs:{item:t}})],1)})),1)])])])])])])})),1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(42).default,LayoutFrame:n(71).default,ListeFrameSenatoCdA:n(79).default,LayoutFooter:n(70).default})},92:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,default:"it",required:!0},organiConfronto:{type:Array,required:!0},liste:{type:Array,required:!0}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListeConfrontoListe",{attrs:{liste:t.liste,"organi-confronto":t.organiConfronto,language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeConfrontoListe:n(80).default})}}]);