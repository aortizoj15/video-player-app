(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(72)},47:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(47),a(21)),l=a.n(o),s=a(33),u=a(14),m=a(103),p=a(100),d=a(104),E=function(e){var t=e.onFormSubmit,a=Object(n.useState)(""),i=Object(u.a)(a,2),c=i[0],o=i[1];Object(n.useEffect)(function(){t("Super Mario Bros")},[]);return r.a.createElement(p.a,null,r.a.createElement(d.a,{fullWidth:!0,label:"Search...",value:c,onChange:function(e){o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}))},f=a(102),v=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(p.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(f.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(f.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(f.a,{variant:"subtitle2"},t.snippet.description)))},h=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(p.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(f.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},b=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e,t){return r.a.createElement(h,{onVideoSelect:a,key:t,video:e})});return r.a.createElement(m.a,{container:!0,spacing:2},n)},g=a(39),w=a.n(g).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyBIKDEpznsEtfFTO4ciWL1B10RTaOfPQ5k"}});a(69).config();var y=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),p=o[0],d=o[1],f=function(){var e=Object(s.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyBIKDEpznsEtfFTO4ciWL1B10RTaOfPQ5k",q:t}});case 2:a=e.sent,i(a.data.items),d(a.data.items[0]);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(m.a,{container:!0,spacing:2,style:{justifyContent:"center"}},r.a.createElement(m.a,{item:!0,xs:11},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(E,{onFormSubmit:f})),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(v,{video:p})),r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement(b,{videos:a,onVideoSelect:d})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.232e6f4c.chunk.js.map