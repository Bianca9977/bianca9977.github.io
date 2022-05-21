(()=>{var e={29:()=>{},350:()=>{},619:()=>{},682:(e,t,n)=>{"use strict";n.d(t,{$:()=>ge});var o=n(144),s=n(345),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"web_container",attrs:{id:"webContainer"}},[n("VideoTrailer"),n("NavBar"),n("GameStory"),n("Features"),n("Screenshots"),n("Contact"),n("Transition"),e.showTopBtn?n("div",{staticClass:"backToTopBtn",on:{click:e.goToTop}},[n("button",[e._v("TOP")])]):e._e()],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.skippedVideo?e._e():n("section",{staticClass:"videotrailer",attrs:{id:"video"}},[n("div",{attrs:{id:"player"}}),n("div",{staticClass:"skip-button"},[n("button",{attrs:{id:"skipButton"},on:{click:e.skipVideo}},[e._v(" SKIP VIDEO ")])])])},l=[];const c={name:"VideoTrailer",data(){return{player:null,skippedVideo:!1}},created:function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)},mounted:function(){window.onYouTubeIframeAPIReady=()=>{console.log("onYouTubeIframeAPIReady"),this.initYoutube()},ge.$on("skipVideo",(function(){this.skippedVideo=!0}))},methods:{initYoutube(){const e=this;console.log("initYoutube"),this.player=new YT.Player("player",{videoId:"dQw4w9WgXcQ",events:{onReady:e.onPlayerReady,onStateChange:e.onPlayerStateChange}})},onPlayerReady(e){document.getElementById("skipButton").addEventListener("click",(function(){e.target.pauseVideo()}))},skipVideo:function(){ge.$emit("skipVideo"),this.skippedVideo=!0}}},u=c;var d=n(736),m=(0,d.Z)(u,i,l,!1,null,"57fdb057",null);const v=m.exports;var p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"gamestory",attrs:{id:"gamestory"}},[n("div",{staticClass:"container mx-auto p-5"},[n("h3",[e._v(" Game Story ")]),n("p",[e._v(" The player awakens from inside a temple of primordial evil, where the cold, stone floor itself seems to vibrate erringly. Dark wines cover the temple’s walls, growing rampantly and uncontrolled as no man has before entered the temple to tend them. No living man that is. A maleficent blue-green smoke erupts from the cracks of the temple floor, here rests a curse that cannot be escaped, not even upon one’s death. For when the player dies he finds himself again waking up within the ruined walls of the island’s evil temple. The player must gather resources, engage in pitiless combat with the soulless victims of the island, explore in the island’s four directions, and ultimately defeat the evil entity inside, the evil deity known as Möbius. Only then can the curse of Hau be surely lifted. ")]),n("h2",[e._v(" include how to play section ")])])])}],h=n(350),g=n.n(h);const b=g();var x=(0,d.Z)(b,p,f,!1,null,"ceef8086",null);const y=x.exports;var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"features",attrs:{id:"features"}},[n("div",{staticClass:"container mx-auto p-5 h-full flex flex-col justify-center"},[n("h3",{staticClass:"xl:text-6xl text-center"},[e._v(" Features ")]),n("div",{staticClass:"grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-16"},e._l(e.features,(function(t,o){return n("div",{key:o,staticClass:"feature",class:e.currentElement==o?"feature-hover":"",on:{mouseover:function(t){e.currentElement=o},mouseleave:function(t){e.currentElement=null}}},[e.currentElement==o?n("span",[e._v(e._s(t.textHover))]):n("span",[e._v(e._s(t.text))])])})),0)])])},w=[];const T={data(){return{currentElement:null,features:[{text:"Feature 1",textHover:"Feature 1 Hover"},{text:"Feature 2",textHover:"Feature 2 Hover"},{text:"Feature 3",textHover:"Feature 3 Hover"},{text:"Feature 4",textHover:"Feature 4 Hover"},{text:"Feature 5",textHover:"Feature 5 Hover"},{text:"Feature 6",textHover:"Feature 6 Hover"},{text:"Feature 7",textHover:"Feature 7 Hover"},{text:"Feature 8",textHover:"Feature 8 Hover"}]}},created:function(){},methods:{}},C=T;var k=(0,d.Z)(C,_,w,!1,null,"c3505398",null);const E=k.exports;var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"features",attrs:{id:"features"}},[n("div",{staticClass:"container mx-auto p-5 h-full flex flex-col justify-center"},[n("h3",{staticClass:"xl:text-6xl text-center"},[e._v(" Screenshots ")]),n("div",{staticClass:"grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16"},e._l(e.screenshots,(function(e,t){return n("div",{key:t},[n("img",{attrs:{src:e.photo,alt:e.name}})])})),0)])])},S=[];const B={data(){return{currentElement:null,screenshots:[{photo:n(571)},{photo:n(571)},{photo:n(571)},{photo:n(571)},{photo:n(571)},{photo:n(571)}]}},created:function(){},methods:{}},j=B;var H=(0,d.Z)(j,F,S,!1,null,"1098681f",null);const V=H.exports;var $=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"easter-eggs",attrs:{id:"easter-eggs"}},[n("div",{staticClass:"container mx-auto p-5"},[n("h3",[e._v(" Easter Eggs ")]),n("p",[e._v(" Feature 1 Feature 2 Feature 3 Feature 4 Feature 5 Feature 6 ")])])])}],M=n(29),O=n.n(M);const L=O();var Z=(0,d.Z)(L,$,I,!1,null,"582fe6cf",null);Z.exports;var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"contact",attrs:{id:"contact"}},[n("div",{staticClass:"container mx-auto p-5 h-full flex flex-col justify-center"},[n("h3",{staticClass:"xl:text-6xl text-center"},[e._v(" The Team Test ")]),n("div",{staticClass:"grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mt-16"},e._l(e.team,(function(t,o){return n("div",{key:o},[n("img",{attrs:{src:t.photo,alt:t.name}}),e._v(" "),n("br"),e._v(" "+e._s(t.name)+" "),n("br"),e._v(" "+e._s(t.role)+" ")])})),0)])])},A=[];n(188),n(571),n(303),n(526),n(190);const N={data(){return{currentElement:null,team:[{name:"Bianca Budulacu",role:"Graphics Lead",photo:"img/bianca.jpg",photoname:"bianca.jpg",photopath:"../assets/bianca.jpg"},{name:"August Danell",role:"Business Reporter Lead",photo:n(571),photoname:"august2.png",photopath:"../assets/august2.png"},{name:"Max Wippich",role:"Game Development Lead",photo:n(303),photoname:"max.jpg",photopath:"../assets/max.jpg"},{name:"Andreas Wrife",role:"Project Management Lead",photo:n(526),photoname:"andreas.jpg",photopath:"../assets/andreas.jpg"},{name:"Laura Yang",role:"Jack of All Trades",photo:n(190),photoname:"laura.jpg",photopath:"../assets/laura.jpg"}]}},created:function(){},methods:{}},Y=N;var G=(0,d.Z)(Y,P,A,!1,null,"1c4c71f0",null);const R=G.exports;var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"bg-white fixed mt-0 z-10 h-10",class:e.navbarHover?"increaseOpacity":"opacity-50",attrs:{id:"navbar"},on:{mouseover:function(t){e.navbarHover=!0},mouseleave:function(t){e.navbarHover=!1}}},[n("div",{staticClass:"container flex flex-wrap justify-between items-center mx-auto h-full"},[n("div",{staticClass:"hidden w-full md:block md:w-auto"},[n("ul",{staticClass:"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"},[n("li",[n("button",{attrs:{id:"nav-gamestory"},on:{click:function(t){return e.scrollToSection("gamestory")}}},[e._v("Game Story")])]),n("li",[n("button",{attrs:{id:"nav-features"},on:{click:function(t){return e.scrollToSection("features")}}},[e._v("Features")])]),n("li",[n("button",{attrs:{id:"nav-easter-eggs"},on:{click:function(t){return e.scrollToSection("easter-eggs")}}},[e._v("Easter eggs")])]),n("li",[n("button",{attrs:{id:"nav-contact"},on:{click:function(t){return e.scrollToSection("contact")}}},[e._v("Contact")])])])]),n("div",{staticClass:"md:hidden"},[n("button",{staticClass:"ml-4",on:{click:function(t){e.isMobileMenuVisible=!0}}},[e._v(" Navbar ")])]),e.isMobileMenuVisible?n("div",{staticClass:"mobile-menu"},[n("button",{staticClass:"btnClose",on:{click:e.closeMenu}},[e._v("×")]),n("ul",{staticClass:"flex flex-col mt-16 md:hidden"},[n("li",{staticClass:"text-4xl mb-6"},[n("button",{attrs:{id:"nav-gamestory"},on:{click:function(t){e.scrollToSection("gamestory"),e.closeMenu()}}},[e._v("Game Story")])]),n("li",{staticClass:"text-4xl mb-6"},[n("button",{attrs:{id:"nav-features"},on:{click:function(t){e.scrollToSection("features"),e.closeMenu()}}},[e._v("Features")])]),n("li",{staticClass:"text-4xl mb-6"},[n("button",{attrs:{id:"nav-easter-eggs"},on:{click:function(t){e.scrollToSection("easter-eggs"),e.closeMenu()}}},[e._v("Easter eggs")])]),n("li",{staticClass:"text-4xl mb-6"},[n("button",{attrs:{id:"nav-contact"},on:{click:function(t){e.scrollToSection("contact"),e.closeMenu()}}},[e._v("Contact")])])])]):e._e()])])},W=[];const Q={name:"NavBar",data(){return{navbarHover:!1,scroll:!1,currentSection:"",isMobileMenuVisible:!1}},mounted:function(){var e=this,t=document.querySelectorAll("#gamestory, #features, #easter-eggs, #contact, #transition");document.addEventListener("scroll",(function(n){document.body.scrollTop>30||document.documentElement.scrollTop>30?e.scroll=!0:e.scroll=!1;let o=window.pageYOffset;t.forEach((t=>{const n=t.offsetHeight,s=t.offsetTop-50;var a=t.getAttribute("id");o>s&&o<=s+n?(e.currentSection=a,"transition"!=a&&document.getElementById("nav-"+a).classList.add("nav-active")):"transition"!=a&&document.getElementById("nav-"+a).classList.remove("nav-active")})),"transition"==e.currentSection&&ge.$emit("transitionSections")}))},methods:{scrollToSection(e){var t=this;t.currentSection=e,document.getElementsByTagName("section")[e].scrollIntoView({behavior:"smooth"})},closeMenu:function(){var e=this;e.isMobileMenuVisible=!1}}},q=Q;var z=(0,d.Z)(q,D,W,!1,null,"5a43ef5b",null);const J=z.exports;var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"transition",attrs:{id:"transition"}})},X=[],U=n(619),ee=n.n(U);const te=ee();var ne=(0,d.Z)(te,K,X,!1,null,"a3edfed6",null);const oe=ne.exports,se={name:"Homepage",components:{VideoTrailer:v,GameStory:y,Features:E,Screenshots:V,Contact:R,NavBar:J,Transition:oe},data(){return{skippedVideo:!1,showTopBtn:!1}},mounted:function(){var e=this;ge.$on("skipVideo",(function(){this.skippedVideo=!0,document.getElementById("webContainer").classList.add("show-content")})),ge.$on("transitionSections",(function(){e.loopToTop()})),document.addEventListener("scroll",(function(t){document.body.scrollTop>100||document.documentElement.scrollTop>100?e.showTopBtn=!0:e.showTopBtn=!1}))},methods:{goToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},loopToTop:function(){window.scrollTo({top:0,behavior:"auto"}),document.getElementById("gamestory").classList.add("slide-in-animation"),document.getElementById("navbar").style.visibility="hidden",setTimeout((()=>{document.getElementById("navbar").style.visibility="visible",document.getElementById("navbar").classList.add("increaseOpacity-transition")}),1500),setTimeout((()=>{document.getElementById("gamestory").classList.remove("slide-in-animation"),document.getElementById("navbar").classList.remove("increaseOpacity-transition")}),2e3)}}},ae=se;var re=(0,d.Z)(ae,a,r,!1,null,"2457fed0",null);const ie=re.exports;o.Z.use(s.Z);const le=[{path:"/",name:"home",component:ie}],ce=new s.Z({routes:le}),ue=ce;var de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},me=[];const ve={name:"App",components:{},methods:{},mounted(){},beforeDestroy(){}},pe=ve;var fe=(0,d.Z)(pe,de,me,!1,null,null,null);const he=fe.exports,ge=new o.Z;new o.Z({router:ue,render:function(e){return e(he)}}).$mount("#app")},526:(e,t,n)=>{"use strict";e.exports=n.p+"img/andreas.jpg"},571:(e,t,n)=>{"use strict";e.exports=n.p+"img/august2.png"},188:(e,t,n)=>{"use strict";e.exports=n.p+"img/bianca.jpg"},190:(e,t,n)=>{"use strict";e.exports=n.p+"img/laura.jpg"},303:(e,t,n)=>{"use strict";e.exports=n.p+"img/max.jpg"}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,s,a)=>{if(!o){var r=1/0;for(u=0;u<e.length;u++){for(var[o,s,a]=e[u],i=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(i=!1,a<r&&(r=a));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,s,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.p=""})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var s,a,[r,i,l]=o,c=0;if(r.some((t=>0!==e[t]))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var u=l(n)}for(t&&t(o);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkdh2650_website"]=self["webpackChunkdh2650_website"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[998],(()=>n(682)));o=n.O(o)})();
//# sourceMappingURL=app.js.map