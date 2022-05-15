# Marvel Movie App

## Link-uri:
Link către aplicație: [https://marvel-movie-app.herokuapp.com/](https://marvel-movie-app.herokuapp.com/)

Frontend link: [https://github.com/wannawdo/marvel-movie-app](https://github.com/wannawdo/marvel-movie-app)

Backend link: [https://github.com/wannawdo/marvel-movie-api](https://github.com/wannawdo/marvel-movie-api)

## Introducere
Astăzi, Marvel Studios este, fără îndoială, cea mai de succes franciză de film din istorie. Cu câte filme Marvel sunt în lista de blockbuster certificate, este aproape imposibil să găsești pe cineva care să nu-i cunoască pe Avengers, Spider-Man sau Doctor Stange.

Cu toate acestea, Marvel nu a obținut succes la nivel mondial peste noapte.

Deși Iron Man (2008) a fost bine primit de public, nu a fost primul film Marvel și nici primul film care a prezentat un personaj Marvel. Universul cinematografic Marvel (MCU) de care ne bucurăm astăzi, împreună cu milioane de fani, este produsul a 80 de ani de idei, eșecuri și succese. În anul 1944, adică acum 78 de ani, primul film Marvel și-a făcut apariția, acesta fiind ,,Capitan America Serial".

Pot mărturisi faptul că inițial, filmele Marvel nu mi-au captat atenția, însă, în timp, am început să mă familiarizez cu ele și am reușit să observ de ce sunt atât de bine primite de către public. 

## Descriere problemă
Conform unui raport Eurostat, chiar dacă principala limbă străină vorbită în țara noastră este engleza, doar 17% dintre români afirmă că vorbesc această limbă bine. De accea, am dorit să creez o aplicație care să poată fi utilizată de 100% dintre români. 
Marvel Movie App oferă utilizatorului posibilitatea de a vedea într-o listă, cele mai populare filme Marvel alături de o descriere scurtă, data lansării și popularitatea, iar printr-un simplu click pe butonul de ,,VIEW MORE" îi sunt afișate informații legate de gen, durata, rating, descriere și actorii care joacă în film. 

Un alt aspect pe care am dorit să îl acopăr prin această aplicație este legat de împărtășirea informațiilor. Deși conform Mediafax, 80% dintre români folosesc internetul zilnic, nu toată lumea are acces la acesta, iar acest lucru nu ar trebui să aibă vreun efect asupra lor.  În plus, după cum am menționat și anterior, Marvel Movie App se adresează în special vorbitorilor de limba română. Așadar, beneficiază de o funcționalitate prin care în momentul în care utilizatorul alege să printeze sau să salveze ca PDF pagina, îi este tradusă automat în română. Astfel, va avea toate informațiile dorite la îndemână, fără a fi nevoie să aibă acces continuu la internet.

De asemenea, prin intermediul acestei opțiuni de traducere și printare, un utilizator poate împărtăși informația cu oricine dorește, indiferent dacă persoana respectivă are sau nu acces la internet.

## Descriere API
În cadrul aplicației au fost folosite următoarele API-uri:

- [The Movie Database](https://developers.themoviedb.org/), prin care am accesat informații despre filmele Marvel;

- [Translate API](https://cloud.google.com/translate), pe care l-am folosit pentru a traduce pagina corespunzătoare filmului dorit de utilizator. API-ul a fost integrat în aplicație sub forma unui pachet de npm. Pentru a ne putea folosi de acest serviciu, am creat un nou endpoint in backend, care accepta request-uri de tip POST pe ruta /utils/translate. Aici, datele primite sunt transmise pentru a fi traduse, alături de limba în care dorim sa realizam aceasta traducere, iar Google returnează textul tradus. Mai apoi, acesta este transmis ca și răspuns către client și afișat în traducerea pentru PDF.

## Tehnologii folosite
Lumea nu poate trăi fără aplicații mobile și web în zilele noastre. Totul este digitizat, de la rezervarea de taxiuri până la comandarea alimentelor pentru a face tranzacții bancare. Datorită cadrelor eficiente care oferă o experiență perfectă pentru utilizator. O astfel de bibliotecă frontend robustă este React.

**Frontend**-ul este realizat în **React.js**, prin modalitatea de a scrie componente (functional components), hooks. Pentru design am folosit **Material UI**, iar stilizarea este făcută folosind **CSS(Cascading Style Sheets)**, care permite crearea de pagini web atrăgătoare.

MUI sau Material UI oferă o suită cuprinzătoare de instrumente UI pentru a ajuta la livrarea de funcții noi mai rapid. Se va începe cu această bibliotecă  care permite ulterior adăugarea propriului sistem de design la componentele sale pregătite pentru producție.

Partea de **backend** a aplicației este realizată în **Node.js** pentru a expune endpoint-uri **REST**. 

Node.js este un mediu de rulare JavaScript open-source, multiplatformă, care rulează pe motorul V8 și execută cod JavaScript în afara unui browser web. Node.js le permite dezvoltatorilor să folosească JavaScript pentru a scrie instrumente de linie de comandă și pentru script-uri pe partea serverului - rulând scripturi pe partea serverului pentru a produce conținut dinamic al paginii web înainte ca pagina să fie trimisă la browserul web al utilizatorului. 

Pentru versionarea și stocarea codului sursă am folosit gitHub, iar deploy-ul aplicației este realizat prin intermediul platformei Heroku. Prin aceasta, am putut seta environmentul pe care să ruleze aplicația, atât pe partea de backend, cât și pe partea de frontend, aplicație care poate fi accesată prin acest link: [https://marvel-movie-app.herokuapp.com/](https://marvel-movie-app.herokuapp.com/)

## 4. Flux de date

⦁	Exemple de request / response

Exemplu de request de tip GET care afișează cele mai populare filme Marvel:
![filme](https://user-images.githubusercontent.com/70256031/168481054-2bd80858-9f77-4004-84a0-1d5b7b01d3a1.jpeg)

[https://api.themoviedb.org/3/discover/movie?api_key=51b3258aa0f7c5db9e22bb77f666162f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=180547](https://api.themoviedb.org/3/discover/movie?api_key=51b3258aa0f7c5db9e22bb77f666162f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=180547)

Exemplu de request de tip GET care ia actorii dintr-un film:
![actori](https://user-images.githubusercontent.com/70256031/168481009-e6d1c883-511d-4cd2-91d5-5eed6659065c.jpeg)

[https://api.themoviedb.org/3/movie/661791/credits?api_key=51b3258aa0f7c5db9e22bb77f666162f&language=en-US
](https://api.themoviedb.org/3/movie/661791/credits?api_key=51b3258aa0f7c5db9e22bb77f666162f&language=en-US
)

Exemplu de request de tip POST pentru Translate API care traduce o descriere a unui film:
![3](https://user-images.githubusercontent.com/70256031/168480749-378425c5-5731-47f4-a687-d62338296659.jpeg)

⦁	Metode HTTP
Metodele HTTP folosite au fost:

- POST pentru a realiza traducerea titlului, subtitlului și al descrierii filmului dorit
- GET pentru a prelua cele mai populare filme Marvel
- GET pentru a afișa detaliile unui film selectat
- GET pentru a selecta actorii unui anumit film
- GET pentru a prelua posterul de la un film

⦁	Authentificare si servicii utilizate

Cele trei API-uri care au fost integrate în cadrul aplicației Marvel Movie App necesită autentificare cu ajutorul unor API key-uri furnizate de serviciile respective, care se pot obține doar după ce utilizatorul își creează un cont pentru fiecare. În cadrul API-ului de traducere și a SQL din cadrul Google Cloud Platform, resursele sunt limitate. Odată ce ne creem un cont, vom primi un credit de 300 de dolari. Orice utilizare ce depășește această sumă, va fi taxată adițional.

Utilizarea API-ului The Movie DB nu costă, nu are limite pentru request-uri, însă pentru a primit api key-ul este nevoie de un cont, iar acest lucru este subliniat de către autori chiar în secțiunea de FAQ de pe site-ul oficial.

![Capture](https://user-images.githubusercontent.com/70256031/168480800-68d6f7ed-6494-4fcd-850e-0c656003f401.PNG)

## 5. Capturi ecran aplicație 
Mai jos, este prezentată o poză cu pagina de început a aplicației: lista cu cele mai populare filme Marvel. Acestea sunt afișate într-un Grid cu ajutorul unor carduri și prezintă informații referitoare la: titlul filmului, data aparitiei, rating, o descriere, un buton pentru a vedea mai multe informații și poză cu poster-ul filmului.

![1-Homepage](https://user-images.githubusercontent.com/70256031/168480821-9f940f6f-a017-4705-921b-a09f847b19fb.PNG)


Odată ce dăm click pe ,,VIEW MORE" suntem redirecționați pe următoarea pagină:

![2-MovieInfo](https://user-images.githubusercontent.com/70256031/168480826-bf89769b-4198-4300-8cb0-dda554b76033.PNG)


Această pagină este destinată filmului selectat și, prin metodele de tip GET menționate mai sus, ne sunt prezentate detalii referitoare la titlu, subtitlu, genul filmului, durata, actorii care joacă și o descriere.

În partea de sus avem un buton, intitulat ,,PRINT THIS OUT!", care, odată apăsat, declanșează metoda POST, care folosește API-ul de translate și ne afișează un Print Preview cu pagina tradusă. Aici există două opțiuni: fie printăm pagina, fie o putem salva ca PDF.

![3-SaveAsPDFTranslated](https://user-images.githubusercontent.com/70256031/168480838-407a6c3e-31fd-4764-b743-466a11950577.PNG)

## 6. Referințe
- [https://ziare.com/scoala/educatie/english-please-72-la-suta-dintre-romani-vorbesc-cel-putin-o-limba-straina-eurostat-1260398](https://ziare.com/scoala/educatie/english-please-72-la-suta-dintre-romani-vorbesc-cel-putin-o-limba-straina-eurostat-1260398)
- [https://www.diaryofanaspiringloser.com/whats-the-first-marvel-movie-clue-its-not-iron-man/](https://www.diaryofanaspiringloser.com/whats-the-first-marvel-movie-clue-its-not-iron-man/)
- [https://developers.themoviedb.org/3/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
- [https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)
- [https://mui.com/](https://mui.com/)
- [https://www.themoviedb.org/documentation/api#:~:text=Our%20API%20is%20free%20to,API%20key%20in%20the%20future.](https://www.themoviedb.org/documentation/api#:~:text=Our%20API%20is%20free%20to,API%20key%20in%20the%20future.)
- [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [https://www.mediafax.ro/social/cati-romani-folosesc-internetul-zilnic-date-publicate-de-ins-20389185](https://www.mediafax.ro/social/cati-romani-folosesc-internetul-zilnic-date-publicate-de-ins-20389185)
