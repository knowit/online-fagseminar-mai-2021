(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(e,t,r){"use strict";r.r(t);r(213);var n=r(7),a=r(0),i=r(227),o=r(240),l=r(241),s=r(253),d=r(239),u=r(235);t.default=function(){var e=Object(a.useState)([]),t=e[0],r=e[1];Object(a.useEffect)(function(){var e=Object(s.a)("favorites",document.cookie);r(e?JSON.parse(e):[])},[]);var k=Object(u.a)().filter(function(e){var r,n=e.date,a=e.start,i=e.time,o=e.title;return r=n+"_"+(a||i)+"_"+o,!!t.find(function(e){return e===r})});return console.log(k),Object(n.d)(o.a,null,Object(n.d)(i.a,null,Object(n.d)(l.a,{minHeight:"100vh",withTopSeperator:!0,withBottomSeperator:!0},Object(n.d)(d.a,{slots:k,removeFavorite:r,isFavourites:!0}))))}},235:function(e,t,r){"use strict";r.d(t,"a",function(){return a});r(236);var n=r(238),a=function(){var e=n.data;return e&&e.allAirtable&&e.allAirtable.edges?e.allAirtable.edges.flatMap(function(e){return e.node.data}):[]}},236:function(e,t,r){"use strict";var n=r(1),a=r(237),i=r(30),o=r(38),l=r(31),s=r(143);n(n.P,"Array",{flatMap:function(e){var t,r,n=i(this);return l(e),t=o(n.length),r=s(n,0),a(r,n,n,t,0,1,e,arguments[1]),r}}),r(95)("flatMap")},237:function(e,t,r){"use strict";var n=r(74),a=r(5),i=r(38),o=r(20),l=r(3)("isConcatSpreadable");e.exports=function e(t,r,s,d,u,k,p,m){for(var g,v,f=u,h=0,c=!!p&&o(p,m,3);h<d;){if(h in s){if(g=c?c(s[h],h,r):s[h],v=!1,a(g)&&(v=void 0!==(v=g[l])?!!v:n(g)),v&&k>0)f=e(t,r,g,i(g.length),f,k-1)-1;else{if(f>=9007199254740991)throw TypeError();t[f]=g}f++}h++}return f}},238:function(e){e.exports={data:{allAirtable:{edges:[{node:{data:{title:"Frokost",userIds:null,description:"Frokost",type:"other",start:"07:00",end:"09:00",date:"21",duration:null,rom:null}}},{node:{data:{title:"How to write code worth reading",userIds:"Sten Christoffer Eliesen",description:"Regardless of skill level, some programmers write code that is performant, bug free and works great, but is very difficult to read and understand, and thus difficult to maintain. So in this talk I would like to share my experience and explain how you can write code that is easier to maintain",type:"talk",start:"13:45",end:"14:15",date:"19",duration:30,rom:null}}},{node:{data:{title:"Utviklingsmijlø i skyen",userIds:"Øyvind Marthinsen",description:"Kjøring av applikasjoner i skyen er nå blitt den nye normen, men fortsatt sitter vi å utvikler applikasjonene på personlige maskiner. I dette foredraget vil jeg gå igjennom min ferd i å sette opp og bruke et utviklingsmiljø i skyen.\n\nJeg kommer til å gå igjennom motivasjonen for dette, fortelle om noen mislykkede fremgangsmåter og gi en oversikt over oppsettet jeg endte på.",type:"talk",start:"14:30",end:"15:00",date:"19",duration:30,rom:null}}},{node:{data:{title:"How can statistics about Oslo municipality be more fun with D3.js",userIds:"Aulon Mujaj",description:"La meg vise deg historien hvordan vi greide å gi Oslo kommune sine faktaark og statistikksider om bydelene og delbydelene en makeover til noe fint og lettleselig statistikk ved bruk av grafbiblioteket D3 og javascript rammeverket VueJS! Ikke mer titalls timer arbeid om å manuelt lage grafer i excel, når d3 og vue kan gjøre dette automatisk for deg!",type:"talk",start:"13:00",end:"13:30",date:"19",duration:30,rom:null}}},{node:{data:{title:"My Life as a Cyborg",userIds:"Michael Johansen",description:"Are you doing well as an adult? All around you are scales that must not tip too much to one end or the other. This talk will take a deep dive into how one person tackles the balances of life, and indexes life to the point of becoming a cyborg.",type:"talk",start:"14:30",end:"15:00",date:"19",duration:30,rom:null}}},{node:{data:{title:"Solflekktelling med Java i baksetet",userIds:"Jan Alvestad",description:"Innføring i metode som benyttes for å forenkle telling og klassifisering av solflekker. Beskrivelse av hvordan en kan benytte Java for å lage et bilde med elementer fra flere andre bilder.",type:"talk",start:"14:30",end:"14:45",date:"19",duration:15,rom:null}}},{node:{data:{title:null,userIds:"Arne Løvold",description:null,type:"talk",start:"13:00",end:"13:30",date:"19",duration:30,rom:null}}},{node:{data:{title:"Fly til Oslo",userIds:null,description:"Fly fra Praha til OSL (charter)",type:"other",start:"17:00",end:null,date:"21",duration:null,rom:null}}},{node:{data:{title:"Hvordan redder Knowit verden? Om knowits bidrag til bærekraft og bistand",userIds:"Klaus Stafto",description:"Hva gjør vi i Knowit innen bærekraft og bistand?\nInnen klimavennlig transport bidrar vi både som utviklingsleverandør og investor til spennende startups. Dessuten hjelper vi Oslo kommune med innovative ideer til avfallshåndteringen. På kundelisten ellers finnes blant annet Norad og Miljødirektoratet. Dessuten skjer det ting internt i konsernet.\nKom og skaff deg snakkepunkter til neste gang du skal fortelle ukjente hva Knowit gjør (i/for verden). Eller dersom du vurderer en annen type mening enn det kanskje er i prosjektet/produktet på jobber med nå.",type:"keynote",start:"09:00",end:"09:30",date:"20",duration:30,rom:null}}},{node:{data:{title:"Hyperfluid Edge computing platform",userIds:"Per Buer",description:"Hailstorm er et prosjekt for å kombinerte smart bruk av Webassembly, WASI og service discovery til å tilby en slags liten ec2 i en liten eske. Målet er at et nettverk, f.eks. om bord i en buss, skal kunne konsumere compute-ressurser på en enkel og trygg måte.\n\nDu skal kunne pakke en backend inn i en klient, f.eks. i en app eller mikrokontroller-enhet. Når app'en så kommer seg på nett så vil den søke seg frem til lokale dataressurser og til kunne konsumere disse for å tilby nye og innovative tjenester.",type:"talk",start:"15:15",end:"15:45",date:"19",duration:30,rom:null}}},{node:{data:{title:"Fritid",userIds:null,description:"Fritid",type:"other",start:"16:30",end:"18:00",date:"19",duration:null,rom:null}}},{node:{data:{title:"Spring Boot og GraphQL",userIds:"John-Olav",description:null,type:"talk",start:"13:45",end:"14:15",date:"19",duration:30,rom:null}}},{node:{data:{title:"Middag for Maitrea",userIds:null,description:"Middag for de som skal spise på Maitrea",type:"other",start:"18:30",end:null,date:"20",duration:null,rom:null}}},{node:{data:{title:"Graph først!",userIds:"Audun Hallan",description:"\nEt lite dykk i hvordan et GraphQL-skjema kan fungere som et nyttig modelleringsverktøy tidlig i utviklingsfasen, hvordan det kan skaleres, og hvorfor backendutviklere også bør ha et forhold til det.",type:"talk",start:"13:00",end:"13:15",date:"19",duration:15,rom:"norge"}}},{node:{data:{title:"Presentasjon X",userIds:"Marit Hellestø",description:"Project X, et prosjekt som var både ambisiøst, brukte bleeding edge teknologier og var banebrytende innen sitt marked, så mye at man av konkurransehensyn ikke kunne kalle prosjektet noe mer beskrivende. \n\nDenne presentasjonen tar for seg de erfaringene man fikk i løpet av en 3årsperiode, fra oppstart av prosjektet til den største leveransen i prosjektet. Og det denne tiden inneholdt av oppturer og nedturer. ",type:"talk",start:"14:30",end:"15:00",date:"19",duration:30,rom:null}}},{node:{data:{title:"Dataplattform",userIds:"Sommerjobbere",description:null,type:"keynote",start:"10:45",end:"11:00",date:"19",duration:15,rom:null}}},{node:{data:{title:"Fingermat ",userIds:null,description:"Fingermat og 1-2 enheter øl inkl alkofritt",type:"other",start:"22:00",end:null,date:"18",duration:null,rom:null}}},{node:{data:{title:"Creating UX as a backender for developers",userIds:"Anders R. Dahlen",description:null,type:"talk",start:"13:00",end:"13:30",date:"19",duration:30,rom:null}}},{node:{data:{title:"Hvordan sikre REST-API med OpenID Connect/OAuth2",userIds:"Yngvar Kristiansen",description:"Presentasjon viser hvordan vi enkelt kan sikre et REST API med OpenID Connect (OIDC). OIDC er en industristandard for autorisering, og nyttig å kunne dersom man jobber med APIer eller arkitektur.\n\nVi gjennomgår hvordan man setter opp et sikret API, hvordan man aksesserer API-et med en token, samtidig som vi tar for oss ulike sikringsmetoder i Oauth2 (flows). Kode vil bli vist i Java og Spring Boot, mens Keyclok brukes som OIDC-provider. Hvis det blir tid ser vi hvordan vi kan konsumere API-et fra en frontend.",type:"talk",start:"14:45",end:"15:00",date:"19",duration:15,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"10:15",end:"10:30",date:"20",duration:null,rom:null}}},{node:{data:{title:"Autonome Team",userIds:"Nils",description:null,type:"keynote",start:"11:30",end:"12:00",date:"20",duration:30,rom:null}}},{node:{data:{title:"Hvorfor er alle server-operativsystemene vi bruker usikre og hva kan vi gjøre med det?",userIds:"Per Buer",description:"Dagens operativsystem er i all hovedsak like og de forsøker å alle å løse det jeg mener er irrellevante problemer.  Moderne operativsystemer er alle designet for en annen tid og en annen bruk. \nHovedproblemet er at dagens operativsystem setter få begrensninger på hva applikasjonene kan gjøre. De står fritt til å endre oppførsel på hele system.\n\nJeg forslår et alternativt operativsystem-design og et par andre løsninger som kan være med på å endre situasjonen.",type:"talk",start:"14:00",end:"14:15",date:"19",duration:15,rom:null}}},{node:{data:{title:"Folkeregisteret",userIds:"Rune Myrdal",description:null,type:"keynote",start:"10:30",end:"11:15",date:"20",duration:45,rom:null}}},{node:{data:{title:"Frokost",userIds:null,description:"Frokost",type:"other",start:"07:00",end:"09:00",date:"20",duration:null,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"13:30",end:"13:45",date:"19",duration:null,rom:null}}},{node:{data:{title:"A Paranoids Guide to Trusting Open Source",userIds:"Rickard",description:null,type:"keynote",start:"09:30",end:"10:00",date:"19",duration:30,rom:null}}},{node:{data:{title:"Etisk AI - EUs etiske retningslinjer",userIds:"Torbjørn Moen",description:"En gjennomgang av EUs etiske retningslinjer for de som lager og tar i bruk AI",type:"talk",start:"14:45",end:"15:00",date:"19",duration:15,rom:null}}},{node:{data:{title:"Første fly til Praha (SAS)",userIds:null,description:"Første fly til praha",type:"other",start:"19:00",end:"22:00",date:"18",duration:null,rom:null}}},{node:{data:{title:"Burde du utvikle apper med React Native",userIds:"Patrick Monslaup",description:"Å utvikle apper til iOS og Android har lenge vært en utfordring, da du enten kan utvikle det hver for seg til hvert av operativsystemene, eller bruke mer eller mindre dårlige hybrid-løsninger. React Native forsøker å løse problemet ved at koden transformeres til native - men fungerer dette godt nok, og hva er smertepunktene?\n\nI denne ikke-tekniske erfaringsbaserte talken vil vi gjennomgå hva som fungerer og komme med anbefalinger til når du bør bruke React Native vs. andre måter å utvikle apper.",type:"talk",start:"13:45",end:"15:00",date:"19",duration:15,rom:null}}},{node:{data:{title:"Fordeling til restauranter",userIds:null,description:"Opplegg for fordeling til restauranter",type:"other",start:"18:30",end:null,date:"19",duration:null,rom:null}}},{node:{data:{title:"Peer Reviews I've Loved before",userIds:"Tom Fagerland",description:'Hvordan takle PR kommentarer med eksempler, ikke alle virkelige. Forhåpentligvis vil dette også bidra til at folk skriver bedre kommentarer også. Morsomt, men med en seriøs kjerne. Ikke alle PR-kommentarer stammer fra Espen Klæboe. \nSlides på engelsk, siden jeg skriver bedre på engelsk og håper å utvide foredraget til en litt mer "how to work together without killing each other"-style foredrag som antageligvis blir litt lenger.',type:"talk",start:"15:15",end:"15:30",date:"19",duration:15,rom:null}}},{node:{data:{title:"Et halvt år i en Principal Engineers liv",userIds:"Rune Storløpa",description:"Jeg har vært ute på oppdrag det siste halve året, og forsøkt å fortelle en kunde hvorfor utviklerne virker å være så ineffektive og hva de kan gjøre med det... Det fungerte sånn passe, så det tenkte jeg å fortelle om...",type:"talk",start:"13:15",end:"13:30",date:"19",duration:15,rom:null}}},{node:{data:{title:"Objectnet 1999-2019",userIds:"Lars Ivar Næss",description:"Et historisk og forhåpentligvis underholdende tilbakeblikk på 20 års Objectnet-historie",type:"keynote",start:"18:00",end:"18:30",date:"19",duration:30,rom:null}}},{node:{data:{title:"Masteroppgave - Arkitektur for nye applikasjoner og tjenester i smarte byer, nabolag og hjem",userIds:"Petter Rostrup",description:'Presentasjon om nøkkelpunktene fra masteroppgaven med tittel: "A Distributed-to-Centralized Architectural Model for Smart City Applications and Services through Container Orchestration". Den går gjennom behovene for utviklingen av nye applikasjoner og tjenester til bruk i smarte byer, nabolag og hjem. Fokuset ligger på hvordan noen av de voksende utfordringene i smarte byer kan håndteres/reduseres fra et utviklingsperspektiv.',type:"talk",start:"15:15",end:"15:45",date:"19",duration:30,rom:null}}},{node:{data:{title:"Prosessering av industrielle IoT datastrømmer",userIds:"Christian Egeberg",description:"Om mellomlagring og bearbeiding av sensordata for å kunne beregne ytelsesindikatorer, og detektere uregelmessigheter i datastrømmer fra industrielt utstyr, som for eksempel pumper, aggregater og skipsmotorer.",type:"talk",start:"15:15",end:"15:45",date:"19",duration:30,rom:null}}},{node:{data:{title:"Borre hull i autonome siloer",userIds:"Steinar Hansen",description:"Etter å ha observert Origo på utsiden og hørt litt om erfaringer i fra andre prosjekter; Selv om en sitter i et autonomt team og i teorien kan gjøre som en selv vil, så er det fremdeles behov for samhandling og koordinering med resten av verden. En kan ikke stenge seg fullstendig inne i siloen sin og glemme det som har fungert bra tidligere. Hvilke samhandlingsmekanismer bør en ha når en kaller seg et autonomt team?",type:"talk",start:"13:00",end:"13:15",date:"19",duration:15,rom:null}}},{node:{data:{title:"Middag for alle",userIds:null,description:"Middag for alle andre 5 restaurantene",type:"other",start:"19:30",end:null,date:"20",duration:null,rom:null}}},{node:{data:{title:"Medisinsk simulering som et distribuert system",userIds:"Aleksander Pettersen",description:"Laerdal Medical har de siste femten årene basert mye av simuleringen sin på noen få applikasjoner. Disse monolittene skulle dekke hvert sitt domene men har over tid utviklet seg til å prøve å favne over alle simuleringsdomener - med overlapping av hverandre. LM ønsket en fleksibel arkitektur som tillater rask prototyping samt klinisk nøyaktighet - dette arbeidet er påbegynt.",type:"talk",start:"13:00",end:"13:15",date:"19",duration:30,rom:"test testesen"}}},{node:{data:{title:"Twenty Thousand Leagues Under The Sea",userIds:"Espen Tjønneland",description:"Hvordan behandle data tilsvarende 15.000 Netflix filmer i sekundet i sanntid.",type:"talk",start:"14:00",end:"14:15",date:"19",duration:15,rom:null}}},{node:{data:{title:"Andre fly til Praha (Norwegian)",userIds:null,description:"Andre fly til praha",type:"other",start:"19:00",end:"22:00",date:"18",duration:null,rom:null}}},{node:{data:{title:"Svelte: Det raske rammeverket uten VDOM ",userIds:"Eirik Vågeskar",description:"Én ting kan stoppe Svelte i å bli noe stort: At React og Vue lærer av det, og det litt kvikt. For hvilken Javascript-utvikler har ikke lyst på bittesmå bundles, rask ytelse og kort utviklingstid? Dette foredraget presenterer Svelte og hvordan det brukes hos Entur sammen med React. \n\nEirik Vågeskar har lekt med Svelte i noen måneder. På den tiden har han rukket å stifte Svelte-guild, å bidra til Svelte på Github og å ta i bruk Svelte på prosjekt i Entur. Til tross for åpenbar partiskhet, lover han å gi en nøktern fremstilling av fordeler og ulemper i foredraget. ",type:"talk",start:"14:30",end:"15:00",date:"19",duration:30,rom:null}}},{node:{data:{title:"Funksjonelle programmerings-konsepter forklart med dårlige metaforer og stygge tegninger.",userIds:"Tale Prestmo",description:'Synes du at ord som "monad", "functor", "side effects", "function composition" (I could go on forever), eller rett of slett bare "funksjonell programmering" er litt vanskelig å forstå? Ønsker du flere knagger å henge konseptene på? Kom til en litt utradisjonell presentasjon, der et utvalg av disse blir forklart med dårlige metaforer, akkompagnert av stygge tegninger som jeg har laga helt sjæl.',type:"talk",start:"13:45",end:"14:00",date:"19",duration:15,rom:null}}},{node:{data:{title:"Fritid",userIds:null,description:"Fritid",type:"other",start:"13:00",end:"18:30",date:"20",duration:null,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"14:15",end:"14:30",date:"19",duration:null,rom:null}}},{node:{data:{title:"Lunsj",userIds:null,description:"Lunsj",type:"other",start:"12:00",end:"13:00",date:"19",duration:null,rom:null}}},{node:{data:{title:"Transfer til flyplass",userIds:null,description:"Transfer til flyplass",type:"other",start:"14:30",end:null,date:"21",duration:null,rom:null}}},{node:{data:{title:"Genus",userIds:"René Raisanen",description:null,type:"talk",start:"13:45",end:"14:15",date:"19",duration:30,rom:null}}},{node:{data:{title:"Vue plugins! Hva, hvordan og hvorfor",userIds:"Henning Lund-Hanssen",description:"En erfaringsreise fra Oslo kommune med knockout, vue og vue plugins",type:"talk",start:"14:00",end:"14:15",date:"19",duration:15,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"09:30",end:"09:45",date:"20",duration:null,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"10:00",end:"10:15",date:"19",duration:null,rom:null}}},{node:{data:{title:"Brettspill",userIds:null,description:"Brettspill",type:"other",start:"22:00",end:null,date:"20",duration:null,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"11:15",end:"11:30",date:"20",duration:null,rom:null}}},{node:{data:{title:"Utvikler",userIds:"Erik Lund",description:"Enkel innføring i bruk av simulerte kvantemaskiner på JVM. Begreper rundt kvantemaskiner, hvorfor de kommer og hvordan kode ser ut for nybegynnere. ",type:"talk",start:"13:45",end:"14:00",date:"19",duration:15,rom:null}}},{node:{data:{title:"Middag",userIds:null,description:"Middag i mindre grupper",type:"other",start:"20:00",end:null,date:"19",duration:null,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"15:00",end:"15:15",date:"19",duration:null,rom:null}}},{node:{data:{title:"Lunsj",userIds:null,description:"Lunsj",type:"other",start:"12:00",end:"13:00",date:"20",duration:null,rom:null}}},{node:{data:{title:"Mobbing på arbeidsplassen",userIds:"Geir Nohre-Solvang",description:"Et foredrag som setter fokus på mobbing på arbeidsplassen",type:"keynote",start:"09:45",end:"10:15",date:"20",duration:30,rom:null}}},{node:{data:{title:"Aktiviteter",userIds:null,description:"Aktiviteter / Fritid m/egen lunsj",type:"other",start:"09:00",end:"14:30",date:"21",duration:null,rom:null}}},{node:{data:{title:"Brettspill",userIds:null,description:"Brettspill",type:"other",start:"22:00",end:null,date:"19",duration:null,rom:null}}},{node:{data:{title:"Frokost",userIds:null,description:"Frokost",type:"other",start:"07:00",end:"09:00",date:"19",duration:null,rom:null}}},{node:{data:{title:"Møtekultur",userIds:"Viktoria",description:null,type:"keynote",start:"10:15",end:"10:45",date:"19",duration:30,rom:null}}},{node:{data:{title:"Pause",userIds:null,description:"Pause",type:"other",start:"15:45",end:"16:00",date:"19",duration:null,rom:null}}},{node:{data:{title:"Hvordan virker en regnestav?",userIds:"Hans Christian Brodwall Nielsen",description:"Jeg har lyst til å holde et foredrag om regnestaver.  Matematikken som ligger bak, og praktisk bruk.",type:"talk",start:"15:15",end:"15:45",date:"19",duration:30,rom:null}}},{node:{data:{title:"Mikrotjeneste med Spring; fra Java til Kotlin",userIds:"Frode Ånonsen",description:"Eksempel på å migrere en enkel Spring Boot basert mikrotjeneste fra Java til Kotlin.\nPain points, lessons, etc.\n\n* Sette context, vise oversikt over tjeneste, kjøremiljø\n* Se gjennom kode, byggescript\n* Refaktorere til Kotlin, forenkle. Teste.\n* Refaktorere bygg til KotlinScript. Demonstrere Gradle/KTS med intellisense. Teste.\n* Bygge\n* Oppsummering",type:"talk",start:"13:15",end:"13:30",date:"19",duration:15,rom:null}}},{node:{data:{title:"Hvordan brukes AI i industri?",userIds:"Eirik Folkestad",description:"World Summit AI i Amsterdam 9-10 oktober 2019 er en ledende konferanse innen AI som samler akademia og industri under et tak. Konferansen har da et spesielt fokus på AI i industri og har et program bestående av talks fra bedrifter som Facebook, Google og Alibaba for å nevne noen. Denne talken vil være en videreformidling av lærdom/erfaringer/idéer tilegnet fra talkene holdt under denne konferansen.",type:"talk",start:"14:30",end:"14:45",date:"19",duration:15,rom:null}}},{node:{data:{title:"Internmøte",userIds:"Ledelsen",description:"Internmøte",type:"keynote",start:"09:00",end:"09:30",date:"19",duration:30,rom:null}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-favorites-js-5a5dfbedbf4c1f16846d.js.map