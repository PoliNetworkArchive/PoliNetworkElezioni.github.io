(window.webpackJsonp=window.webpackJsonp||[]).push([[35,5,6,10,11,12],{276:function(t,e,n){"use strict";n.r(e);var r={props:{language:{type:String,required:!0}}},l=n(33),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("Copyright © "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v("\n                        Contatti\n                    ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                        Contacts\n                    ")]):t._e()]),t._v("\n                 - \n                "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v("\n                        Curiosità\n                    ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                        Curiosity\n                    ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var r={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},l=n(33),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("894dc536",content,!0,{sourceMap:!1})},279:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("ad7dac6e",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(278)},281:function(t,e,n){var r=n(64)(!1);r.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=r},282:function(t,e,n){"use strict";n.r(e);var r={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},l=(n(280),n(33)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n(279)},284:function(t,e,n){var r=n(64)(!1);r.push([t.i,".descrizioneFrameSenatoCdA{margin:auto;width:100%;max-width:calc(70px + 15rem + 40vw);padding-left:calc(1vw + 1px + .07rem);padding-right:calc(1vw + 1px + .07rem);padding-bottom:calc(.3rem + 6px)}",""]),t.exports=r},285:function(t,e,n){"use strict";n.r(e);var r={props:{item:{type:Object,default:null}}},l=(n(283),n(33)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"100%"}},[n("h2",[t._v(t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"descrizioneFrameSenatoCdA"},[n("span",{staticStyle:{"font-size":"calc(1px + 1rem)",color:"black",padding:"calc(1px + 1vw)"}},[t._v("\n            "+t._s(t.item.desc)+"\n        ")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.item.candidati,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-6","style-param":"margin:auto;"}},[n("div",[n("ListeCandidato",{attrs:{cand:e,"url-lista":t.item.linkLista}})],1)])})),1),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[t._v("\n         \n    ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeCandidato:n(282).default,LayoutFrame:n(277).default})},286:function(t,e,n){"use strict";n.r(e);var r={props:{liste:{type:Array,default:null},organiConfronto:{type:Array,default:null},language:{type:String,default:"it",required:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.test2()}))},methods:{test2:function(){for(var t=0;t<5;t++){var ul=document.getElementById("listeContainer2");if(null!=ul){for(var i=ul.children.length;i>=0;i--)ul.appendChild(ul.children[Math.random()*i|0]);ul.style.opacity="1"}}}}},l=n(33),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container2",staticStyle:{width:"100%","max-width":"100%",margin:"0px"}},[n("div",{staticClass:"container7"},[n("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[n("div",{staticStyle:{margin:"auto"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",["it"==t.language?n("span",[t._v("Elezioni rappresentanti degli studenti")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Election of student representatives")]):t._e()]),t._v(" "),n("br"),t._v(" "),t._l(t.organiConfronto,(function(e){return n("LayoutFrame",{key:e.id},[n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"lead"}),n("blockquote",[t._v("\n                                        "+t._s(e.desc)+"\n                                    ")]),t._v(" "),n("p")])])}))],2)])])]),t._v(" "),n("div",{staticClass:"row text-center",staticStyle:{display:"flex","flex-wrap":"wrap",opacity:"0.5"},attrs:{id:"listeContainer2"},on:{load:t.test2}},t._l(t.liste,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-3","style-param":"max-width: 100%;flex: 1 4 25%;min-width:calc(150px + 9rem + 3vw)"}},[n("a",{attrs:{href:"/"+t.language+e.linkLista}},[n("div",{staticClass:"card"},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"cap-left",staticStyle:{width:"100%",display:"block",padding:"0px"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"imageList",staticStyle:{width:"100%","max-width":"100%"},attrs:{src:e.imageUrlHorizontal}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"candidateTable",staticStyle:{"list-style":"none","padding-left":"0px"}},t._l(e.organi,(function(t){return n("LayoutFrame",{key:t.name},[n("ListeFrameSenatoCdA",{attrs:{item:t}})],1)})),1)])])])])])])})),1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(194).default,LayoutFrame:n(277).default,ListeFrameSenatoCdA:n(285).default,LayoutFooter:n(276).default})},341:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{organiConfronto:[{id:1,name:"3I",desc:"La scuola coordina le attività didattiche per la maggior parte delle lauree e delle lauree magistrali in Ingegneria del Politecnico di Milano. La Scuola di Ingegneria Industriale e dell’Informazione è di gran lunga la più grande delle quattro presenti al Politecnico, con circa il 60 percento degli studenti iscritti nei propri corsi di Laurea e Laurea Magistrale. La Commissione Paritetica ha il compito di monitorare l’offerta formativa, la qualità della didattica e i servizi erogati agli studenti e di esprimere pareri sull'istituzione e la soppressione dei Corsi di studio. É composta da 5 studenti e 5 professori."}],liste:[{id:1,name:"Svoltastudenti",imageUrlHorizontal:"/img/logo-svolta_hor.png",linkLista:"/2021/lista/svoltastudenti/",organi:[{name:"3I",desc:"Creare di rete di Ambassadors con lo scopo di avvicinare le ragazze al mondo ingegneristico. Aumentare l’attività laboratoriale nei corsi a scelta in magistrale: questi corsi sono già interdipartimentali e la contaminazione sarebbe facilmente implementabile. Inserire l’bbligo di caricare una versione corretta del tema d’esame e garantire la possibilità di accedere ai temi d’esami degli anni precedenti e simulazioni, attraverso un archivio centralizzato. Introdurre un nuovo appello d’esame: introdurre un appello totale in concomitanza della seconda prova parziale.",candidati:[{id:1,imgUrl:"/img/2021/candidati/svoltastudenti/marsona_panci.jpg",name:"Panci Marsona",detto:"MARS"},{id:2,imgUrl:"/img/2021/candidati/svoltastudenti/raif_muhammad.jpg",name:"Muhammad Raif",detto:"RAIF"},{id:3,imgUrl:"/img/2021/candidati/svoltastudenti/mercedes_alazraki.jpg",name:"Alazraki Mercedes",detto:"MERCY AMG"},{id:4,imgUrl:"/img/2021/candidati/svoltastudenti/eric_diluca.jpg",name:"Di Luca Eric Alexandro",detto:"CARLO CRACCO"},{id:5,imgUrl:"/img/2021/candidati/svoltastudenti/yousef_elgohary.jpg",name:"Elgohary Yousef",detto:"YOUS"},{id:6,imgUrl:"/img/2021/candidati/svoltastudenti/lorenzo_lione.jpg",name:"Lione Lorenzo",detto:"LYON"},{id:7,imgUrl:"/img/2021/candidati/svoltastudenti/filiberto_canino.jpg",name:"Canino Filiberto",detto:"FIL"},{id:8,imgUrl:"/img/2021/candidati/svoltastudenti/martina_legnani.jpg",name:"Legnani Martina",detto:"LEGNA"},{id:9,imgUrl:"/img/2021/candidati/svoltastudenti/simone_rapella.jpg",name:"Rapella Simone",detto:"MOMO"},{id:10,imgUrl:"/img/2021/candidati/svoltastudenti/mattia_marinoni.jpg",name:"Marinoni Mattia",detto:"TIA"},{id:11,imgUrl:"/img/2021/candidati/svoltastudenti/anuar_mancini.jpg",name:"Mancini Anuar",detto:"DOPPIO MALTO"},{id:12,imgUrl:"/img/2021/candidati/svoltastudenti/alessandro_baserga.jpg",name:"Baserga Alessandro",detto:"BASE"},{id:13,imgUrl:"/img/2021/candidati/svoltastudenti/alessio_rocca.jpg",name:"Rocca Alessio",detto:"IL PRESIDENTE"}]}]},{id:2,name:"Lista aperta",imageUrlHorizontal:"/img/logo-listaaperta_hor.png",linkLista:"/2021/lista/listaaperta/",organi:[{name:"3I",desc:"Il nostro lavoro nella scuola 3I si concentrerà principalmente su 3 aspetti: valorizzare la laurea triennali, aumentare la qualità dell’esperienza didattica e costruire una didattica che tiene conto dell’esperienza digitale dell’emergenza Covid. Non si può pensare di rendere ancora più difficile l’ingresso in magistrale senza politiche di valorizzazione del percorso della laurea triennale, che sempre di più sta perdendo qualità nella didattica. Per aumentare la qualità della didattica crediamo che sia fondamentale aumentare la possibilità di personalizzare il proprio percorso di studi, a partire dalle lauree in discontinuità. Infine, ci teniamo a cogliere gli aspetti positivi del digitale, come le registrazioni, per migliorare la didattica innovativa.",candidati:[{id:1,imgUrl:"/img/2021/candidati/listaaperta/alessandro_alladio.jpg",name:"Alladio Alessandro",detto:"LALO"},{id:2,imgUrl:"/img/2021/candidati/listaaperta/emanuela_dotti.jpg",name:"Dotti Emanuela",detto:"MANU"},{id:3,imgUrl:"/img/2021/candidati/listaaperta/giovanni_cavassi.jpg",name:"Cavassi Giovanni",detto:"CAVA"},{id:4,imgUrl:"/img/2021/candidati/listaaperta/letizia_maria_perri.jpg",name:"Perri Letizia Maria",detto:"LETI"},{id:5,imgUrl:"/img/2021/candidati/listaaperta/john_powell.jpg",name:"Powell John Edgar",detto:"JOHN.JE"},{id:6,imgUrl:"/img/2021/candidati/listaaperta/lorenzo_petullicchio.jpg",name:"Petullicchio Lorenzo",detto:"PETU"},{id:7,imgUrl:"/img/2021/candidati/listaaperta/francesca_castellotti.jpg",name:"Castellotti Francesca",detto:"FRANCI"},{id:8,imgUrl:"/img/2021/candidati/listaaperta/matteo_crivellari.jpg",name:"Crivellari Matteo",detto:"CRIVE"},{id:9,imgUrl:"/img/2021/candidati/listaaperta/gloria_lopiano.jpg",name:"Lopiano Gloria",detto:""},{id:10,imgUrl:"/img/2021/candidati/listaaperta/luca_mandelli.jpg",name:"Mandelli Luca",detto:"MANDO"},{id:11,imgUrl:"/img/2021/candidati/listaaperta/stefano_garavaglia.jpg",name:"Garavaglia Stefano",detto:"IZ"},{id:12,imgUrl:"/img/2021/candidati/listaaperta/giuliano_gemmani.jpg",name:"Gemmnani Giuliano",detto:"GEMMA"},{id:13,imgUrl:"/img/2021/candidati/listaaperta/marco_gandolla.jpg",name:"Gandolla Marco",detto:"QUAGLIA"},{id:14,imgUrl:"/img/2021/candidati/listaaperta/francesco_boldrini.jpg",name:"Boldrini Francesco",detto:"BOLD"},{id:15,imgUrl:"/img/2021/candidati/listaaperta/marco_guerini.jpg",name:"Guerini Marco",detto:"GUERO"}]}]},{id:3,name:"Terna sinistrorsa",imageUrlHorizontal:"/img/logo-terna_hor.png",linkLista:"/2021/lista/ternasinistrorsa/",organi:[{name:"3I",desc:"I calendari d’esame ci fanno spesso storcere il naso: date troppo vicine o lontane tra loro, sovrapposizioni… Esiste qualcosa che ci tuteli? Per ora solo delle “linee guida”, per questo vogliamo un regolamento che ci garantisca i nostri diritti! Vogliamo migliorare la didattica valorizzando laboratori, realizzando nuovi spazi per permettere agli studenti di realizzare i loro progetti e aggiungere la possibilità di esprimere un giudizio anche dopo un esame.",candidati:[{id:1,imgUrl:"/img/2021/candidati/ternasinistrorsa/clarissa_pasculli.png",name:"Pasculli Clarissa",detto:""},{id:2,imgUrl:"/img/2021/candidati/ternasinistrorsa/pedro_bossi.png",name:"Bossi Pedro",detto:""}]}]},{id:4,name:"Studenti indipendenti",imageUrlHorizontal:"/img/logo-sip_hor.png",linkLista:"/2021/lista/studentiindipendenti/",organi:[{name:"3I",desc:"Piano di studi personalizzabile: crediamo che ognuno debba decidere con meno vincoli possibile il proprio percorso di studi in modo che si creino figure professionali nuove e multidisciplinari. Crediamo che l'abolizione delle medie di accesso alla magistrale sia  un ulteriore incentivo a far proseguire gli studi e a combattere l'abbandono degli studi, un problema caratteristico e grave del nostro ateneo. Le differenze tra scaglioni devono essere abolite promuovendo gli esempi virtuosi. Sempre nell'ottica di aumentare la scelta tra i corsi vogliamo incrementare il numero di laboratori a scelta.",candidati:[{id:1,imgUrl:"/img/2021/candidati/studentiindipendenti/edoardo_marcucci.PNG",name:"Marcucci Edoardo",detto:""},{id:2,imgUrl:"/img/2021/candidati/studentiindipendenti/alice_portentoso.PNG",name:"Portentoso Alice",detto:""},{id:3,imgUrl:"/img/2021/candidati/studentiindipendenti/elena_fiorani.PNG",name:"Fiorani Elena",detto:""},{id:4,imgUrl:"/img/2021/candidati/studentiindipendenti/marco_zamboni.PNG",name:"Zamboni Marco",detto:"ZAMBO"},{id:5,imgUrl:"/img/2021/candidati/studentiindipendenti/jonathan_wolff.PNG",name:"Wolff Jonathan",detto:"JONNY"},{id:6,imgUrl:"/img/2021/candidati/studentiindipendenti/francesca_benatti.PNG",name:"Benatti Francesca",detto:""},{id:7,imgUrl:"/img/2021/candidati/studentiindipendenti/mario_spiniello.PNG",name:"Spiniello Mario",detto:""},{id:8,imgUrl:"/img/2021/candidati/studentiindipendenti/gaia_carbone.PNG",name:"Carbone Gaia",detto:""},{id:9,imgUrl:"/img/2021/candidati/studentiindipendenti/davide_stramare.PNG",name:"Stramare Davide",detto:"DADO"},{id:10,imgUrl:"/img/2021/sip.png",name:"Truvolo Federica",detto:""},{id:11,imgUrl:"/img/2021/candidati/studentiindipendenti/sara_ehetagegnehu_finardi.PNG",name:"Finardi Sara Ehetagegnehu",detto:"FES"},{id:12,imgUrl:"/img/2021/candidati/studentiindipendenti/francesco_puddu.PNG",name:"Puddu Francesco",detto:""},{id:13,imgUrl:"/img/2021/candidati/studentiindipendenti/pietro_contardi.PNG",name:"Contardi Pietro",detto:""},{id:14,imgUrl:"/img/2021/candidati/studentiindipendenti/roberto_serino.PNG",name:"Serino Roberto",detto:""},{id:15,imgUrl:"/img/2021/candidati/studentiindipendenti/alice_oppizzii.PNG",name:"Oppizzii Alice",detto:""}]}]}]}}},l=n(33),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListeConfrontoListe",{attrs:{liste:t.liste,"organi-confronto":t.organiConfronto,language:t.$i18n.locale}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeConfrontoListe:n(286).default})}}]);