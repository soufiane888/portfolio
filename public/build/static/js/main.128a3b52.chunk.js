(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(e,t,o){"use strict";o.r(t);var a=o(148),n=o(0),i=o.n(n),r=o(7),l=o.n(r),s=o(29),c=o(6),p=(o(93),o(66)),u=o(130),m=Object(u.a)({root:{minHeight:"calc(100vh - 80px)"}}),d=function(){var e=m();return i.a.createElement("div",{className:e.root},i.a.createElement(p.a,{visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}))},g=o(67),h=o(149),v=o(144),f=o(145),b=o(146),w=o(47),y=o(151),E=o(147),k=o(31),j=o(74),S=o.n(j),A=Object(u.a)({root:{maxWidth:250,height:"30px",display:"flex",alignItems:"center",justifyContent:"center",color:"tomato",background:"#222"}}),x=function(){var e=A();return i.a.createElement(w.a,{className:e.root},"Fait avec ",i.a.createElement("span",null," "),i.a.createElement(S.a,{"data-testid":"favorite-icon"}),"par ",k.b.name)},I=o(152),T=o(139),C=o(140),D=o(141),N=o(142),P=o(143),z=Object(u.a)((function(e){return{menuSlide:{width:250,background:"linear-gradient(90deg,rgba(2, 0, 36, 1) 26%,rgba(79, 4, 27, 1) 100%,rgba(2, 0, 36, 1) 100%)",height:"100%"},myImage:{display:"block",margin:"0.5rem auto",width:e.spacing(14),height:e.spacing(14)},listText:{color:"#EAECEE"},listIcon:{color:"tan"}}})),J=o(133),W=o(134),R=o(135),B=o(136),F=o(137),M=o(138),L=[{listIcon:i.a.createElement(J.a,null),listText:"Home",listPath:"/"},{listIcon:i.a.createElement(W.a,null),listText:"Resume",listPath:"/resume"},{listIcon:i.a.createElement(R.a,null),listText:"Portfolio",listPath:"/portfolio"},{listIcon:i.a.createElement(B.a,null),listText:"Skills",listPath:"/skills"},{listIcon:i.a.createElement(F.a,null),listText:"Education",listPath:"/education"},{listIcon:i.a.createElement(M.a,null),listText:"Contacts",listPath:"/contacts"}],O=function(e){var t=e.toggleSlide,o=z();return i.a.createElement(h.a,{component:"div",className:o.menuSlide,onClick:t},i.a.createElement(I.a,{className:o.myImage,src:"/images/myImage.jpeg",alt:k.b.name}),i.a.createElement(T.a,null),i.a.createElement(C.a,null,L.map((function(e){return i.a.createElement(D.a,{button:!0,key:e.listPath,component:s.b,to:e.listPath},i.a.createElement(N.a,{className:o.listIcon},e.listIcon),i.a.createElement(P.a,{className:o.listText},e.listText))}))))},U=Object(u.a)((function(e){return{appBar:{background:"#222"},clearAll:{background:"tomato"},title:{color:"white",fontSize:"1.2rem",textDecoration:"none"}}})),q=function(){var e=U(),t=Object(n.useState)(!1),o=Object(g.a)(t,2),a=o[0],r=o[1],l=Object(n.useCallback)((function(){r((function(e){return!e}))}),[]);return i.a.createElement(h.a,{component:"nav"},i.a.createElement(v.a,{position:"static",className:e.appBar},i.a.createElement(f.a,null,i.a.createElement(b.a,{onClick:l,"aria-label":"Menu"},i.a.createElement(E.a,{className:e.clearAll})),i.a.createElement(w.a,{variant:"h5"},i.a.createElement(s.b,{to:"/",className:e.title},k.b.name)),i.a.createElement(y.a,{anchor:"left",open:a,onClose:l},i.a.createElement(O,{toggleSlide:l}),i.a.createElement(x,null)))))},H=i.a.lazy((function(){return Promise.all([o.e(4),o.e(7)]).then(o.bind(null,506))})),_=i.a.lazy((function(){return o.e(8).then(o.bind(null,507))})),G=i.a.lazy((function(){return Promise.all([o.e(2),o.e(9)]).then(o.bind(null,504))})),V=i.a.lazy((function(){return Promise.all([o.e(5),o.e(10)]).then(o.bind(null,508))})),K=i.a.lazy((function(){return o.e(11).then(o.bind(null,509))})),Q=i.a.lazy((function(){return o.e(6).then(o.bind(null,505))})),Y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,null),i.a.createElement(i.a.Suspense,{fallback:i.a.createElement(d,null)},i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:G}),i.a.createElement(c.a,{path:"/resume",component:K}),i.a.createElement(c.a,{path:"/portfolio",component:V}),i.a.createElement(c.a,{path:"/skills",component:Q}),i.a.createElement(c.a,{path:"/education",component:_}),i.a.createElement(c.a,{path:"/contacts",component:H}))))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Z=o(64),ee=function(){return i.a.createElement(Z.Toaster,null)};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,null,i.a.createElement(ee,null),i.a.createElement(a.a,null),i.a.createElement(Y,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var a=o.headers.get("content-type");404===o.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()},31:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"d",(function(){return r})),o.d(t,"a",(function(){return l})),o.d(t,"c",(function(){return s})),o.d(t,"e",(function(){return c}));var a=o(112),n=o(113),i={name:"Soufiane SADDIK",image:"/images/myImage.jpeg",title:["D\xe9veloppeur Fullstack","Ingenieur DevOps","D\xe9veloppeur Java/Angular","D\xe9veloppeur React/NodeJS"],contacts:[{id:1,name:"GitHub",icon:a.a,username:"soufiane888",link:"https://github.com/soufiane888"},{id:2,name:"LinkedIn",icon:n.a,username:"soufiane-saddik-a28b981b9",link:"https://www.linkedin.com/in/soufiane-saddik-a28b981b9/"}]},r=[{id:1,year:"Avril 2023 - Pr\xe9sent",role:"D\xe9veloppeur Java/DevOps",companyName:"Capgemini",companyUrl:"https://www.capgemini.com/",description:"J'ai int\xe9gr\xe9 capgimini apr\xe8s une formation Java/DevOps o\xf9 j'ai pu consolid\xe9 mes connaissances sur les diff\xe9rent techno du cloud (AWS, Ansible, kubernetes...), mont\xe9 en comp\xe9tences en Java et j'ai obtenu la certification Devops foundation et je me suis form\xe9 et certifier AWS cloud practioner."},{id:2,year:"Janvier 2022 - Novembre 2022",role:"D\xe9veloppeur Fullstack React",companyName:"La Capsule",companyUrl:"https://www.lacapsule.fr/",description:"Bootcamp durant lequel j'ai appris le d\xe9veloppement web en construisant des produits tech avec React/NodeJs. C'est apprendre \xe0 coder avec l'approche par projet ou Project-Based Learning. \xc0 travers une dizaine de projets, j'ai appris \xe0 coder en immersion compl\xe8te dans un environement Agile/Scrum. Chaque jour, les nouvelles notions sont imm\xe9diatement mises en pratique au sein d\u2019un projet que je d\xe9veloppe."},{id:3,year:"janvier 2021 - Decembre 2021",role:"D\xe9veloppeur Web",companyName:"Hexagone Digitale",companyUrl:"https://hexagonedigitale.com/",description:"Stage de 2 mois pour la validation du Titre de D\xe9veloppeur web et web mobile + premi\xe8re exp\xe9rience d'un CDD de 9 mois en poste de  d\xe9veloppeur Java/Angular qui ma permi d'approfondir plus mes connaissance en d\xe9veloppement et monter en comp\xe9tences en Java et angular dans un contexte agile/scrum."},{id:4,year:"Septembre 2010 - Aout 2020",role:"T\xe9chnicien T\xe9l\xe9com",companyName:"RT.T\xe9l\xe9com",companyUrl:"https://rttelecom.com/",description:"Technicien t\xe9l\xe9com itin\xe9rant sur le r\xe9seau cuivre d'orange. Je m'occup\xe9 des installations et d\xe9pannages des lignes t\xe9l\xe9phoniques et ADSL chez les particuliers et professionnelles, la v\xe9rification de la conformit\xe9 des installations chez les abonn\xe9s par rapport \xe0 la demande,renseignement des supports de suivi des interventions et la transmission des informations et rapport au service concern\xe9"}],l=[{id:1,year:"Janvier 2022 - Avril 2022",universityName:"La Capsule",department:"D\xe9veloppeur fullstack JS Chef de projet",description:"Titre RNCP de BAC+4"},{id:2,year:"Aout 2020 - Mars 2021",universityName:"NextFormation",department:"D\xe9veloppeur Web et web Mobile",description:"Titre RNCP de BAC+2"},{id:3,year:"Septembre 2008 - Juin 2009",universityName:"Universit\xe9 Libre de Li\xe8ge",department:"Master en Biotechnologies et Biologie appliqu\xe9e",description:"Master II"}],s=[{id:1,image:"/images/todoAppReactWithFirebase.png",name:"Todo App",description:"This is a simple Todo app. You can store your todo list. Also you can Add, Edit,     Delete and View. As front end I used JavaScript library called 'React'. For designing I used     'Material-UI'. And Realtime Database or Cloud Firestore I used 'Firebase'. That's why the app is      so faster and robust.",tools:["javascript","react","firebase"],live:"https://react-firebase-todo-app-d37d1.web.app/",source:"https://github.com/sakilk130/react-firebase-todo-app"},{id:2,image:"/images/reactWeatherApp.png",name:"Weather App",description:"This is a Weather app. Where you can search a city and see current weather temperature,     wind speed etc. As front end I used JavaScript library called 'React'. I used 'OpenWeather' APIs For request     data and  display data.",tools:["javascript","react"],live:"https://react-weather-app-v1.netlify.app/",source:"https://github.com/sakilk130/react-weather-app"},{id:3,image:"/images/portfolioUsingReact.png",name:"My Portfolio Website",description:"This is my Portfolio Website. Also this is a part of projects. Where people can see some information     about me. There are 6 pages like Home, Resume, Portfolio, Contacts, Skills and Educations. For this project i     used 'React' for front end and 'Material-UI'.",tools:["javascript","react"],live:"https://sakilkhan.netlify.app/",source:"https://github.com/sakilk130/react-portfolio-website"}],c=[{title:"HTML",logo:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"},{title:"JavaScript",logo:"https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"},{title:"MongoDB",logo:"https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"},{title:"CSS",logo:"https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png"},{title:"TypeScript",logo:"https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"},{title:"Firebase",logo:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"},{title:"Bootstrap",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"},{title:"ReactJS",logo:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"},{title:"MySQL",logo:"https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png"},{title:"Material-UI",logo:"https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667"},{title:"NodeJS",logo:"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"},{title:"PHP",logo:"https://www.vectorlogo.zone/logos/php/php-icon.svg"},{title:"VS Code",logo:"https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg"},{title:"ExpressJS",logo:"https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"},{title:"Git",logo:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"},{title:"Linux",logo:"https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png"},{title:"npm",logo:"https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg"},{title:"GitHub",logo:"https://www.vectorlogo.zone/logos/github/github-icon.svg"}]},88:function(e,t,o){e.exports=o(110)},93:function(e,t,o){}},[[88,1,3]]]);
//# sourceMappingURL=main.128a3b52.chunk.js.map