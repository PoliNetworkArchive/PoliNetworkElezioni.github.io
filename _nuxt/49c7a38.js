(window.webpackJsonp=window.webpackJsonp||[]).push([[27,5,6,9,17],{276:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("\n        Copyright ©\n        "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v(" Contatti ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" Contacts ")]):t._e()]),t._v("\n         - \n        "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v(" Curiosità ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" Curiosity ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var l={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var l={props:{imageUrl:{type:String,default:""},classParam:{type:String,default:""}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{class:t.classParam,attrs:{src:t.imageUrl}})])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,default:"it",required:!0}},data:function(){return{items:[{id:1,name:"Svoltastudenti",image:"/img/svolta.png",link:"/2021/lista/svoltastudenti/",style:"background-color: #ff6600de;"},{id:2,name:"Lista Aperta",image:"/img/listaaperta.png",link:"/2021/lista/listaaperta/",style:"background-color: #f5dd00;"},{id:3,name:"La Terna Sinistrorsa",image:"/img/terna.png",link:"/2021/lista/ternasinistrorsa/",style:"background-color: #bf2027;"},{id:4,name:"Studenti Indipendenti",image:"/img/sip.png",link:"/2021/lista/studentiindipendenti/",style:"background-color: #0084bc;"}]}},mounted:function(){var t=this;this.$nextTick((function(){t.test()}))},methods:{test:function(){for(var t=0;t<1;t++){var ul=document.getElementById("listeContainer");if(null!=ul){for(var i=ul.children.length;i>=0;i--){t=Math.random()*i|0;var e=ul.children[t];null!=e&&(ul.appendChild(e),console.log(e))}ul.style.opacity="1"}}}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row text-center",staticStyle:{display:"flex",opacity:"0.5"},attrs:{id:"listeContainer"},on:{load:t.test}},t._l(t.items,(function(e){return n("LayoutFrame",{key:e.name,attrs:{"class-param":"col-lg-3 col-md-6 mb-4"}},[n("div",[n("a",{attrs:{href:"/"+t.language+e.link}},[n("figure",{staticClass:"cap-left",staticStyle:{width:"100%"}},[n("LayoutFrame",{attrs:{"class-param":"card h-100","style-param":e.style}},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"containerImgList"},[n("LayoutXImage",{attrs:{"image-url":e.image,"class-param":"imageList"}})],1)])]),t._v(" "),n("figcaption",{staticClass:"h-100"},[n("br"),t._v(" "),n("h2",{staticClass:"titleListaFigcaption"},[t._v(t._s(e.name))])])],1)])])])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutXImage:n(289).default,LayoutFrame:n(277).default})},352:function(t,e,n){"use strict";n.r(e);var l=n(33),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.$i18n.locale}}),t._v(" "),n("div",{staticStyle:{padding:"4rem"}}),t._v(" "),n("div",{staticClass:"container2"},[n("SubpagesQuadratiListe")],1),t._v(" "),n("LayoutFooter",{attrs:{language:t.$i18n.locale}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(194).default,SubpagesQuadratiListe:n(290).default,LayoutFooter:n(276).default})}}]);