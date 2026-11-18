/* ORTO 2.0 - guida fitosanitaria pratica. Indicazioni generali, non prescrizioni di trattamento. */
(()=>{
'use strict';
const groups={
 solanacee:{
  label:'Solanacee',
  problems:[
   {name:'Peronospora',kind:'Fungo / oomicete',symptoms:'Macchie irregolari bruno-scure sulle foglie; con umidità elevata può comparire una muffetta chiara sotto le macchie. Sui frutti possono apparire aree brune, dure e depresse.',prevention:'Distanza adeguata tra le piante, buona aerazione, irrigazione al piede al mattino, pacciamatura e rotazione. Evita di bagnare la chioma e non lavorare le piante bagnate.',action:'Rimuovi le parti colpite e allontanale dall’orto; disinfetta gli attrezzi. Se la malattia avanza, chiedi una diagnosi e verifica solo prodotti autorizzati per coltura e avversità.',risk:'Alta con piogge, rugiada persistente e chioma bagnata.'},
   {name:'Alternariosi e maculature fogliari',kind:'Fungo',symptoms:'Macchie brune o nere, spesso rotonde e con anelli concentrici; le foglie più vecchie possono ingiallire e seccare.',prevention:'Rotazione di almeno 3 anni, semi e piantine sani, irrigazione al suolo, rimozione dei residui infetti e concimazione equilibrata.',action:'Elimina le foglie molto colpite senza diffondere le spore; migliora ventilazione e asciugatura della chioma. Evita trattamenti generici senza diagnosi.',risk:'Favorita da alternanza di umidità, caldo e residui infetti.'},
   {name:'Afidi e virosi',kind:'Insetti / virus',symptoms:'Colonie di piccoli insetti sui germogli, foglie accartocciate e melata appiccicosa. Mosaici, deformazioni o ingiallimenti possono indicare una virosi, ma non sono diagnostici da soli.',prevention:'Controlla spesso la pagina inferiore delle foglie, limita eccessi di azoto, usa reti quando adatte e favorisci insetti utili.',action:'Rimuovi piccoli focolai con getto d’acqua moderato o asportazione delle parti infestate. Se sospetti un virus, isola e rimuovi la pianta sintomatica; disinfetta le mani e gli attrezzi.'}
  ]},
 cucurbitacee:{
  label:'Cucurbitacee',
  problems:[
   {name:'Oidio (mal bianco)',kind:'Fungo',symptoms:'Chiazze bianche farinose sulla superficie delle foglie, che si allargano e possono far ingiallire e seccare la lamina.',prevention:'Scegli varietà tolleranti, rispetta le distanze, arieggia la vegetazione, evita eccessi di azoto e stress idrici.',action:'Elimina le foglie molto compromesse e non compostarle se fortemente infette. Controlla le piante vicine. Eventuali prodotti solo se autorizzati per la coltura e l’avversità.',risk:'Più frequente con giornate calde, notti umide e chiome fitte.'},
   {name:'Peronospora delle cucurbitacee',kind:'Oomicete',symptoms:'Macchie gialle angolari delimitate dalle nervature; sul retro della foglia può comparire una sporulazione grigio-violacea con elevata umidità.',prevention:'Irriga al piede, preferibilmente al mattino; evita ristagni, chiome troppo fitte e bagnature prolungate.',action:'Rimuovi le foglie colpite, riduci l’umidità sulla chioma e controlla rapidamente le piante vicine. Chiedi conferma prima di qualsiasi trattamento.',risk:'Rischio elevato con piogge, rugiada e temperature miti.'},
   {name:'Virus del mosaico',kind:'Virus trasmesso spesso da insetti',symptoms:'Mosaico verde-giallo, foglie deformate o bollose, crescita stentata e frutti irregolari. Sintomi simili possono dipendere anche da carenze o fitotossicità.',prevention:'Usa sementi e piantine sane, controlla gli afidi, elimina le infestanti ospiti e disinfetta gli attrezzi.',action:'Non esiste una cura che risani la pianta infetta: rimuovi gli esemplari confermati e limita la diffusione degli insetti vettori.'}
  ]},
 brassicacee:{
  label:'Cavoli e brassicacee',
  problems:[
   {name:'Peronospora delle brassicacee',kind:'Oomicete',symptoms:'Macchie giallastre sulla pagina superiore e crescita biancastra o grigiastra sotto le foglie, soprattutto sulle giovani piantine.',prevention:'Rotazione, seme sano, semina non troppo fitta, irrigazione al mattino e rimozione dei residui colturali.',action:'Elimina le foglie e le piantine gravemente colpite; migliora l’arieggiamento e limita la bagnatura fogliare.'},
   {name:'Ernia del cavolo',kind:'Patogeno del terreno',symptoms:'Piante poco sviluppate e appassite nelle ore calde; radici ingrossate, deformate e a forma di clava.',prevention:'Non spostare terra da zone infette, migliora il drenaggio, allunga la rotazione (anche oltre 4 anni) e controlla il pH con analisi del terreno.',action:'Estirpa le piante colpite con le radici e non compostarle. Non esiste un rimedio curativo semplice: prevenzione e gestione del terreno sono essenziali.'},
   {name:'Cavolaia e altiche',kind:'Insetti',symptoms:'Fori nelle foglie, erosioni e piccoli escrementi; le altiche lasciano numerosi forellini “a pallini”, soprattutto sulle giovani foglie.',prevention:'Reti anti-insetto ben chiuse, rotazione e controllo frequente delle uova sulla pagina inferiore.',action:'Raccogli a mano uova e larve quando possibile; proteggi le piantine con rete. Evita insetticidi indiscriminati che colpiscono gli insetti utili.'}
  ]},
 leguminose:{
  label:'Leguminose',
  problems:[
   {name:'Antracnosi',kind:'Fungo',symptoms:'Macchie scure su foglie, fusti e baccelli; sui baccelli possono apparire lesioni infossate con bordo scuro.',prevention:'Seme certificato e sano, rotazione, sostegni per aerare le piante e irrigazione al piede.',action:'Rimuovi i residui infetti, evita di lavorare la coltura bagnata e non conservare seme da piante malate.'},
   {name:'Oidio',kind:'Fungo',symptoms:'Patina bianca polverosa su foglie e talvolta baccelli; nei casi gravi le foglie ingialliscono e disseccano.',prevention:'Distanze corrette, varietà tolleranti, aerazione e concimazione azotata moderata.',action:'Asporta le parti più colpite e controlla l’evoluzione. Usa prodotti solo se specificamente autorizzati per specie e avversità.'},
   {name:'Afidi e virosi',kind:'Insetti / virus',symptoms:'Colonie sugli apici, foglie arricciate, melata; mosaici e deformazioni possono essere sintomi di virosi.',prevention:'Controllo regolare, reti dove appropriate e tutela di coccinelle e sirfidi.',action:'Contieni i piccoli focolai con metodi meccanici; elimina piante con virosi sospetta e disinfetta gli attrezzi.'}
  ]},
 alliacee:{
  label:'Aglio, cipolla e affini',
  problems:[
   {name:'Peronospora della cipolla',kind:'Oomicete',symptoms:'Foglie pallide, piegate e con aree allungate; in condizioni umide può comparire una muffa grigio-violacea.',prevention:'Rotazione, buona circolazione d’aria, irrigazione controllata e bulbi o bulbilli sani.',action:'Rimuovi le foglie colpite, riduci l’umidità sulla vegetazione e non lasciare residui infetti nel campo.'},
   {name:'Ruggine',kind:'Fungo',symptoms:'Piccole pustole arancioni o bruno-ruggine sulle foglie, che possono ingiallire e disseccare.',prevention:'Distanze adeguate, rotazione, irrigazione al piede e rimozione dei residui a fine coltura.',action:'Asporta le foglie molto colpite e limita la diffusione lavorando le piante asciutte.'},
   {name:'Mosca della cipolla',kind:'Insetto',symptoms:'Piantine che ingialliscono e appassiscono; larve biancastre possono danneggiare colletto e bulbo.',prevention:'Reti anti-insetto, rotazione e rimozione tempestiva delle piante compromesse.',action:'Estirpa e allontana le piante infestate; non lasciare bulbi danneggiati nel terreno.'}
  ]},
 foglia:{
  label:'Ortaggi da foglia',
  problems:[
   {name:'Peronospora',kind:'Oomicete',symptoms:'Macchie gialle o traslucide, spesso delimitate dalle nervature; sotto la foglia può comparire una muffetta chiara o grigiastra.',prevention:'Irriga al mattino al piede, rispetta le distanze, usa varietà resistenti quando disponibili e rimuovi i residui colturali.',action:'Elimina le foglie colpite e migliora l’aerazione. Per lattuga e spinacio verifica le varietà resistenti ai ceppi locali.'},
   {name:'Marciumi del colletto e muffa grigia',kind:'Fungo / complesso di patogeni',symptoms:'Colletto molle o brunito, foglie esterne che collassano; talvolta muffa grigia su tessuti invecchiati o feriti.',prevention:'Drenaggio, irrigazione senza ristagni, rotazione, densità corretta e raccolta delle foglie senescenti.',action:'Rimuovi le piante marce, riduci l’acqua e migliora il ricambio d’aria. Non consumare parti marce.'},
   {name:'Afidi e minatori fogliari',kind:'Insetti',symptoms:'Foglie arricciate e appiccicose oppure gallerie chiare sinuose all’interno della lamina.',prevention:'Reti anti-insetto, controllo della pagina inferiore, eliminazione delle foglie con gallerie e tutela degli insetti utili.',action:'Rimuovi le foglie molto infestate e controlla le piante vicine; evita trattamenti generalisti.'}
  ]},
 radici:{
  label:'Ortaggi da radice e tubero',
  problems:[
   {name:'Mosca della carota',kind:'Insetto',symptoms:'Gallerie rossastre o brune nelle radici, foglie che possono assumere tonalità violacee e crescita stentata.',prevention:'Reti anti-insetto, rotazione, semine non troppo fitte e rimozione delle radici lasciate nel terreno.',action:'Estrai e allontana le radici danneggiate; mantieni la protezione con rete durante il periodo di rischio.'},
   {name:'Alternariosi e macchie fogliari',kind:'Fungo',symptoms:'Macchie scure sulle foglie, spesso con alone giallo; il disseccamento anticipato può ridurre lo sviluppo della radice.',prevention:'Seme sano, rotazione, irrigazione al piede e rimozione dei residui infetti.',action:'Elimina le foglie colpite e limita la bagnatura della chioma.'},
   {name:'Marciumi radicali',kind:'Patogeni del terreno / ristagno',symptoms:'Radici molli, scure, fessurate o maleodoranti; le piante possono appassire anche con terreno umido.',prevention:'Terreno ben drenato e soffice, aiuole rialzate dove serve, rotazione e irrigazione moderata.',action:'Estrai le radici marce, correggi il drenaggio e non riutilizzare materiale vegetale malato.'}
  ]},
 aromatiche:{
  label:'Aromatiche',
  problems:[
   {name:'Oidio',kind:'Fungo',symptoms:'Patina bianca polverosa su foglie e giovani fusti; la crescita rallenta e le foglie possono deformarsi.',prevention:'Posizione ariosa e soleggiata secondo la specie, irrigazione al piede e niente eccessi di azoto.',action:'Rimuovi le parti molto colpite e aumenta l’aerazione. Evita rimedi casalinghi sulle foglie destinate al consumo.'},
   {name:'Marciumi radicali',kind:'Ristagno / patogeni del terreno',symptoms:'Ingiallimento, appassimento nonostante il terreno bagnato e radici scure o molli.',prevention:'Substrato drenante, vaso con fori, irrigazione solo quando serve e scelta di esposizione adatta alla specie.',action:'Riduci le irrigazioni, elimina radici marce e rinvasa in substrato pulito se la pianta è recuperabile.'},
   {name:'Afidi e cocciniglie',kind:'Insetti',symptoms:'Insetti raggruppati sui germogli o lungo i fusti; melata appiccicosa e crescita deformata.',prevention:'Ispezioni frequenti, buona ventilazione e niente concimazioni eccessive.',action:'Asporta i focolai e usa un getto d’acqua moderato; su piante da consumo rispetta sempre le indicazioni dei prodotti autorizzati.'}
  ]},
 fragola:{
  label:'Fragola',
  problems:[
   {name:'Muffa grigia (Botrite)',kind:'Fungo',symptoms:'Macchie molli sui frutti e muffa grigia polverosa; spesso parte dai fiori o da frutti a contatto con terreno umido.',prevention:'Pacciamatura pulita, distanze e aerazione, rimozione dei frutti marci e irrigazione al mattino al piede.',action:'Raccogli e allontana subito i frutti colpiti; non lasciarli sulla pianta o nel filare.'},
   {name:'Oidio della fragola',kind:'Fungo',symptoms:'Patina biancastra, foglie che si arrotolano verso l’alto e frutti che possono deformarsi.',prevention:'Varietà tolleranti, arieggiamento e irrigazione al piede.',action:'Elimina foglie molto colpite e controlla il focolaio. Interventi fitosanitari solo con prodotti autorizzati.'},
   {name:'Maculatura fogliare',kind:'Fungo',symptoms:'Piccole macchie rosse o bruno-violacee sulle foglie, talvolta con centro più chiaro.',prevention:'Rimuovi foglie vecchie, evita eccessi di umidità e usa piantine sane.',action:'Asporta le foglie molto colpite e smaltiscile; rinnova la vegetazione solo secondo le esigenze della varietà.'}
  ]},
 mais:{
  label:'Mais dolce',
  problems:[
   {name:'Ruggine del mais',kind:'Fungo',symptoms:'Pustole arancio-brune sulla superficie delle foglie, che possono aumentare e far seccare i tessuti.',prevention:'Varietà adatte, rotazione e gestione dei residui; evita stress idrici e nutrizionali.',action:'Rimuovi le foglie gravemente colpite quando possibile e chiedi una diagnosi se l’attacco è esteso.'},
   {name:'Piralide',kind:'Insetto',symptoms:'Fori nelle foglie e gallerie nei fusti o nelle spighe; rosure e presenza di rosume.',prevention:'Distruggi o trincia correttamente i residui infestati, controlla le spighe e rispetta le rotazioni.',action:'Rimuovi le spighe e i fusti fortemente infestati; eventuali interventi devono seguire i bollettini locali e le autorizzazioni.'}
  ]},
 carciofo:{
  label:'Carciofo',
  problems:[
   {name:'Oidio',kind:'Fungo',symptoms:'Patina biancastra sulle foglie, soprattutto in condizioni favorevoli e su vegetazione fitta.',prevention:'Distanze adeguate, eliminazione delle foglie vecchie e irrigazione al piede.',action:'Asporta le foglie molto colpite e migliora l’aerazione.'},
   {name:'Afidi',kind:'Insetto',symptoms:'Colonie sui capolini e sui germogli, melata e deformazioni.',prevention:'Controlla i capolini e favorisci coccinelle e altri predatori naturali.',action:'Rimuovi i focolai localizzati e usa solo prodotti ammessi sulla coltura, rispettando i tempi di carenza.'}
  ]}
};
const cropGroups={
 solanacee:['Melanzana','Patata','Peperone','Peperoncino','Pomodoro'],
 cucurbitacee:['Cetriolo','Melone','Zucca','Zucchina','Anguria'],
 brassicacee:['Broccolo','Cavolfiore','Cavolo cappuccio','Cavolo nero','Cavolo rapa','Cime di rapa','Cavolo di Bruxelles','Cavolo verza','Cavolo cinese','Cavolo rosso','Cavolo romanesco','Pak choi','Mizuna','Senape da foglia','Cavolo cappuccio primaverile'],
 leguminose:['Fagiolino','Fagiolo rampicante','Fagiolo nano','Fava','Pisello','Lenticchia','Ceci','Cicerchia','Taccola','Fagiolo borlotto','Edamame (soia da orto)','Arachide'],
 alliacee:['Aglio','Cipolla','Porro','Scalogno','Erba cipollina','Cipollotto'],
 foglia:['Asparago','Barbabietola','Bietola da coste','Cicoria','Indivia riccia','Lattuga','Prezzemolo','Rucola','Sedano','Spinacio','Catalogna','Crescione','Valeriana / songino','Radicchio','Scarola','Lattughino da taglio'],
 radici:['Carota','Rapa','Ravanello','Finocchio','Pastinaca','Scorzonera','Topinambur','Patata dolce'],
 aromatiche:['Basilico','Origano','Rosmarino','Salvia','Aneto','Coriandolo','Timo','Maggiorana','Melissa','Santoreggia','Finocchietto selvatico','Zafferano','Rabarbaro'],
 fragola:['Fragola'],
 mais:['Mais dolce'],
 carciofo:['Carciofo']
};


// Schede aggiuntive specifiche per singola coltura. Sintomi e interventi sono orientativi:
// la stessa coltura può presentare problemi diversi in base a varietà, stagione e microclima.
const S=(name,kind,symptoms,prevention,action,risk='')=>({name,kind,symptoms,prevention,action,risk});
const cropSpecific={
 'Pomodoro':[
  S('Marciume apicale','Squilibrio idrico e fisiologico','Area scura, coriacea e infossata all’estremità opposta al picciolo; non è normalmente una malattia contagiosa.','Mantieni umidità del terreno regolare, pacciamatura e radici sane; evita alternanza tra siccità e abbondanti irrigazioni.','Regolarizza l’acqua e controlla drenaggio e salinità. Il calcio nel terreno può essere presente ma non assorbito: non aggiungere calcio senza verificare la causa.','Caldo, crescita rapida e irrigazioni irregolari.'),
  S('Cladosporiosi (cladosporiosi del pomodoro)','Fungo','Macchie giallastre sulla pagina superiore; sotto può apparire una muffetta olivastra, soprattutto sulle foglie basse.','Arieggia la serra, distanzia le piante, irriga al piede e scegli varietà tolleranti.','Rimuovi le foglie colpite e riduci l’umidità persistente. Verifica la diagnosi prima di valutare prodotti.','Serra umida e chioma fitta.'),
  S('Tuta absoluta (tignola del pomodoro)','Insetto','Gallerie irregolari e traslucide nelle foglie, rosure su fusti e fori nei frutti; possibili escrementi scuri.','Usa piantine sane, reti ben chiuse, trappole a feromone per monitoraggio e rimozione dei residui.','Elimina foglie e frutti con larve attive; controlla anche i frutti e chiedi prodotti PFnPE solo se autorizzati per pomodoro e tignola.')
 ],
 'Patata':[
  S('Dorifora della patata','Insetto','Adulti giallo-arancio con strisce nere e larve rossastre che divorano le foglie; possono restare solo le nervature.','Controlla regolarmente pagina inferiore delle foglie, uova e larve; pratica rotazione e proteggi i predatori naturali.','Raccogli manualmente adulti, larve e ovature nei piccoli orti. Se necessario verifica un prodotto PFnPE autorizzato per patata e dorifora.'),
  S('Rizottoniosi e cancro dello stelo','Fungo del terreno','Macchie brune e croste nere sui tuberi; germogli irregolari e lesioni brune alla base dei fusti.','Usa tuberi-seme sani, terreno drenante, rotazione e non interrare troppo presto in suolo freddo.','Seleziona tuberi sani e rimuovi quelli molto colpiti; evita di conservare tuberi danneggiati.'),
  S('Scabbia comune','Batteri del suolo','Lesioni ruvide, suberose o crateriformi sulla buccia; la polpa spesso resta commestibile se integra, ma va valutata.','Mantieni umidità regolare durante l’ingrossamento dei tuberi, usa rotazioni e materiale di propagazione sano.','Non esiste un trattamento curativo semplice sul tubero: seleziona varietà meno sensibili e correggi la gestione del terreno.')
 ],
 'Peperone':[
  S('Marciume apicale del peperone','Squilibrio idrico e fisiologico','Macchia scura e infossata sulla punta del frutto, talvolta coriacea.','Evita stress idrici, ristagni e concimazioni squilibrate; mantieni costante l’umidità del suolo.','Regolarizza l’irrigazione e verifica pH, salinità e stato delle radici prima di aggiungere calcio.'),
  S('Ragnetto rosso bimaculato','Acari','Punteggiature gialle diffuse, foglie opache e sottili ragnatele sulla pagina inferiore nei casi avanzati.','Riduci polvere e stress idrico, controlla il retro delle foglie e favorisci gli acari predatori.','Asporta le foglie molto infestate e lava la pagina inferiore con acqua quando praticabile; evita insetticidi ad ampio spettro.'),
  S('Tripidi e argentatura dei frutti','Insetti','Striature argentate, cicatrici e deformazioni su foglie, fiori e frutti; piccoli insetti sottili nei fiori.','Usa trappole cromotropiche per monitoraggio e reti, elimina infestanti ospiti e controlla i fiori.','Rimuovi le parti molto danneggiate; verifica l’identificazione e l’autorizzazione di eventuali prodotti per peperone e tripidi.')
 ],
 'Melanzana':[
  S('Verticilliosi','Fungo del terreno','Ingiallimento e appassimento spesso inizialmente su un lato; imbrunimento dei vasi nel fusto tagliato longitudinalmente.','Rotazione lunga, piantine sane, drenaggio e varietà o portinnesti tolleranti.','Estirpa le piante gravemente colpite con le radici; non compostare i residui e non riutilizzare il terreno in vaso senza gestione adeguata.'),
  S('Ragnetto rosso','Acari','Punteggiature chiare, bronzatura e ragnatele fini sotto le foglie.','Controlla spesso la pagina inferiore e limita polvere e stress idrico.','Riduci i focolai, rimuovi foglie compromesse e tutela gli organismi utili; prodotti acaricidi solo se autorizzati sulla coltura.'),
  S('Dorifora su melanzana','Insetto','Larve e adulti possono erodere foglie e germogli, lasciando scheletrizzazione.','Ispeziona le foglie, rimuovi ovature e pratica rotazione lontano da altre solanacee.','Raccolta manuale nei piccoli orti; non confondere con altri coleotteri e verifica l’etichetta prima di trattare.')
 ],
 'Zucchina':[
  S('Virosi del mosaico delle cucurbitacee','Virus','Mosaico giallo-verde, foglie bollose o deformate e frutti bitorzoluti; sintomi variabili.','Usa sementi e piantine sane, elimina infestanti ospiti e controlla gli afidi vettori.','Non esiste cura della pianta infetta: rimuovila se la virosi è confermata e disinfetta gli attrezzi.'),
  S('Marciume apicale o dei giovani frutti','Problema fisiologico / ferite','Estremità del frutto che ingiallisce, imbrunisce o marcisce; può seguire impollinazione incompleta o stress.','Irrigazione regolare, impollinazione favorita dagli insetti e raccolta frequente.','Rimuovi i frutti compromessi e controlla acqua, temperature e presenza di insetti che feriscono i frutti.'),
  S('Mosca bianca delle serre','Insetto','Piccoli adulti bianchi volano se si scuote la pianta; ninfe sotto le foglie, melata e fumaggine.','Reti, controllo della pagina inferiore e rimozione delle foglie molto infestate.','Lava le foglie quando possibile e favorisci ausiliari; usa solo prodotti autorizzati per zucchina e mosca bianca.')
 ],
 'Cetriolo':[
  S('Cladosporiosi del cetriolo','Fungo','Macchie fogliari angolari che possono diventare necrotiche; sui frutti compaiono piccole lesioni infossate con essudato.','Seme sano, rotazione, aerazione e irrigazione al piede.','Elimina i frutti colpiti e le foglie molto infette; evita di lavorare la coltura bagnata.'),
  S('Afide del melone e del cotone','Insetto','Colonie spesso scure sui germogli e sotto le foglie, arricciamento e melata; può trasmettere virosi.','Controlla gli apici, limita eccessi di azoto e favorisci coccinelle e sirfidi.','Rimuovi focolai piccoli o usa acqua moderata; in caso di trattamento verifica l’autorizzazione specifica.'),
  S('Carenza di magnesio','Carenza nutrizionale','Ingiallimento tra le nervature soprattutto sulle foglie più vecchie, che restano inizialmente verdi lungo le nervature.','Concima in modo equilibrato e controlla pH, salinità e disponibilità di potassio.','Conferma con analisi o confronto dei sintomi; usa un correttivo con magnesio solo se necessario e secondo etichetta.')
 ],
 'Melone':[
  S('Fusariosi del melone','Fungo del terreno','Ingiallimento, appassimento di tralci o intera pianta; imbrunimento dei vasi nel fusto.','Varietà resistenti o innestate, rotazioni, drenaggio e piantine sane.','Estirpa le piante compromesse e rimuovi le radici; non esiste una cura domestica affidabile della pianta colpita.'),
  S('Afide del melone','Insetto','Colonie su germogli e pagina inferiore, foglie arricciate e melata; possibile trasmissione di virus.','Controlla i germogli, elimina infestanti ospiti e tutela gli insetti utili.','Contieni i primi focolai con metodi meccanici; verifica sempre l’avversità prima di scegliere un prodotto.'),
  S('Carenza di potassio','Carenza nutrizionale','Ingiallimento e successiva necrosi dei margini delle foglie più vecchie; frutti con qualità e maturazione irregolari.','Evita squilibri tra potassio, calcio e magnesio e controlla la salinità del terreno.','Non concimare alla cieca: verifica terreno e irrigazione, poi usa un fertilizzante appropriato alla coltura.')
 ],
 'Zucca':[
  S('Oidio della zucca','Fungo','Macchie bianche farinose che si estendono sulle foglie, poi ingiallimento e disseccamento.','Distanze ampie, varietà tolleranti, aerazione e irrigazione regolare al piede.','Rimuovi le foglie molto compromesse e controlla l’intera coltura; prodotti solo se autorizzati su zucca e oidio.'),
  S('Marciume dei frutti a contatto col terreno','Complesso di funghi e batteri favorito da umidità','Area molle o scura sul lato appoggiato al terreno, talvolta con muffa.','Pacciama con materiale pulito, evita ristagni e solleva delicatamente i frutti quando possibile.','Rimuovi i frutti marci e migliora drenaggio e aerazione; non consumare parti alterate.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie più vecchie uniformemente pallide e crescita ridotta; sintomi simili possono dipendere da radici asfittiche.','Aggiungi sostanza organica matura e pianifica concimazioni equilibrate.','Controlla prima umidità e radici; integra azoto solo se la carenza è plausibile e con dosi da etichetta.')
 ],
 'Anguria':[
  S('Antracnosi dell’anguria','Fungo','Macchie brune sulle foglie e lesioni infossate sui frutti, talvolta con piccoli punti scuri.','Sementi sane, rotazione, irrigazione al piede e rimozione dei residui infetti.','Elimina frutti e foglie colpiti; evita di conservare seme da piante sintomatiche.'),
  S('Marciume apicale','Squilibrio idrico e fisiologico','Area scura e infossata all’estremità del frutto; spesso associata a disponibilità irregolare di acqua e calcio non assorbito.','Mantieni umidità costante e limita danni alle radici e salinità.','Regolarizza l’irrigazione e verifica il terreno; non applicare calcio automaticamente.'),
  S('Carenza di magnesio','Carenza nutrizionale','Clorosi internervale sulle foglie più vecchie, con nervature relativamente verdi.','Evita eccessi di potassio e controlla pH e salinità.','Conferma la carenza prima di usare concimi al magnesio.')
 ],
 'Broccolo':[
  S('Mosca del cavolo','Insetto','Piantine che appassiscono, radici con gallerie e larve biancastre vicino al colletto.','Reti anti-insetto posate prima dell’ovideposizione, rotazione e rimozione dei residui.','Estirpa le piante gravemente danneggiate e proteggi le nuove con rete ben chiusa.'),
  S('Alternariosi delle brassicacee','Fungo','Macchie scure rotonde con anelli concentrici su foglie e talvolta sulle infiorescenze.','Seme sano, rotazione, aerazione e gestione dei residui.','Rimuovi le parti infette e non bagnare la chioma; controlla che le macchie non siano danni da gelo.'),
  S('Carenza di boro','Carenza di microelemento','Crescita deformata, tessuti interni del fusto o del corimbo alterati e talvolta cavità; sintomi non esclusivi.','Mantieni pH e disponibilità idrica equilibrati; evita eccessi di calcare.','Conferma con analisi: il boro ha margine ristretto tra carenza e tossicità, non distribuirlo senza indicazione tecnica.')
 ],
 'Cavolfiore':[
  S('Carenza di boro','Carenza di microelemento','Alterazioni interne del fusto e del corimbo, cavità o imbrunimenti; può compromettere la qualità della testa.','Controlla pH, sostanza organica e disponibilità idrica; evita terreni troppo calcarei senza analisi.','Richiedi analisi del terreno o consulenza: non applicare boro empiricamente perché l’eccesso è fitotossico.'),
  S('Ernia del cavolo','Patogeno del terreno','Appassimento nelle ore calde e radici deformate con ingrossamenti a clava.','Rotazione molto lunga, drenaggio e pulizia degli attrezzi; evita di spostare terreno contaminato.','Estirpa le piante con radici e non compostarle; non esiste cura semplice delle piante infette.'),
  S('Cimice e altri insetti sulle infiorescenze','Insetti','Punture, deformazioni e presenza di insetti o larve tra le ramificazioni del corimbo.','Ispeziona le infiorescenze, usa reti quando possibile e rimuovi infestanti ospiti.','Raccogli manualmente gli insetti; evita trattamenti indiscriminati vicino alla raccolta.')
 ],
 'Cavolo cappuccio':[
  S('Nottua del cavolo','Insetto','Larve verdi o brune, rosure e rosume tra le foglie che formano la testa.','Reti anti-insetto, controllo delle uova sulla pagina inferiore e rimozione manuale delle larve.','Apri con cautela le foglie esterne per individuare le larve; valuta prodotti solo se autorizzati per cavolo e avversità.'),
  S('Marciume nero delle brassicacee','Batterio','Lesioni gialle a V dal margine fogliare e nervature che possono annerire.','Seme e piantine sane, rotazione, evitare irrigazioni soprachioma e lavorazioni su piante bagnate.','Rimuovi le piante colpite e disinfetta gli attrezzi; non conservare seme da piante malate.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie esterne più vecchie uniformemente verde pallido o gialle e sviluppo ridotto della testa.','Ammenda organica matura e concimazione frazionata equilibrata.','Escludi ristagno e danni radicali prima di integrare azoto.')
 ],
 'Cavolo nero':[
  S('Altiche delle brassicacee','Insetto','Numerosi forellini rotondi sulle foglie, soprattutto sulle giovani piantine.','Reti anti-insetto, irrigazione regolare e rimozione delle infestanti brassicacee.','Proteggi le giovani piante con rete; evita insetticidi generici che danneggiano gli ausiliari.'),
  S('Ruggine bianca','Oomicete','Pustole bianche rialzate sulla pagina inferiore e deformazioni o rigonfiamenti dei tessuti.','Rotazione, buona aerazione e rimozione dei residui colturali.','Elimina le foglie colpite e chiedi conferma: non confondere le pustole con uova o residui.'),
  S('Carenza di zolfo','Carenza nutrizionale','Foglie giovani uniformemente pallide, talvolta con crescita ridotta; può somigliare a carenza di azoto.','Mantieni sostanza organica e nutrizione equilibrata.','Verifica con analisi e non usare zolfo fungicida come sostituto di un concime senza necessità.')
 ],
 'Fagiolino':[
  S('Ruggine del fagiolo','Fungo','Pustole bruno-ruggine in rilievo sulle foglie, più evidenti nella pagina inferiore.','Rotazione, seme sano, distanze adeguate e irrigazione al piede.','Rimuovi foglie molto colpite e residui a fine coltura; verifica che siano pustole e non macchie piatte.'),
  S('Mosca del fagiolo','Insetto','Germinazione irregolare, semi svuotati o plantule che appassiscono per danni alle parti sotterranee.','Semina in terreno ben preparato e non troppo freddo, evita residui organici freschi a contatto col seme.','Risemia solo dopo aver verificato il danno; proteggi le nuove semine e ruota la coltura.'),
  S('Carenza di molibdeno','Carenza di microelemento','Crescita stentata e ingiallimenti; nelle leguminose può ridurre la nodulazione e l’utilizzo dell’azoto.','Controlla il pH: terreni molto acidi possono ridurre la disponibilità del molibdeno.','Conferma con analisi o consulenza prima di apportare microelementi.')
 ],
 'Fagiolo rampicante':[
  S('Antracnosi del fagiolo','Fungo','Lesioni scure infossate su baccelli e nervature; macchie brune su foglie e fusti.','Seme sano, rotazione, sostegni arieggiati e irrigazione al piede.','Rimuovi baccelli e residui colpiti; non conservare seme da piante sintomatiche.'),
  S('Ragnetto rosso','Acari','Punteggiature chiare e bronzatura delle foglie, con sottili ragnatele in caso di forte infestazione.','Riduci stress idrico e polvere; controlla spesso la pagina inferiore.','Lava delicatamente le foglie e rimuovi i focolai; tutela gli acari predatori.'),
  S('Carenza di ferro','Carenza nutrizionale','Foglie giovani gialle tra nervature che restano verdi, spesso in terreni calcarei o con ristagno.','Drenaggio e controllo del pH; evita compattamento del terreno.','Prima di usare ferro chelato verifica pH e radici: ristagno e asfissia possono imitare la carenza.')
 ],
 'Fagiolo nano':[
  S('Batteriosi comune del fagiolo','Batterio','Macchie acquose che diventano brune, spesso con alone giallo; lesioni anche su baccelli.','Seme certificato, rotazione e lavorazioni solo su vegetazione asciutta.','Rimuovi piante molto colpite e residui; non esistono rimedi curativi domestici affidabili.'),
  S('Mosca bianca','Insetto','Adulti bianchi sotto le foglie, ninfe aderenti, melata e possibile fumaggine.','Reti, monitoraggio e rimozione delle foglie molto infestate.','Favorisci gli ausiliari e verifica ogni prodotto sulla specifica coltura e avversità.'),
  S('Carenza di potassio','Carenza nutrizionale','Ingiallimento marginale e necrosi sulle foglie più vecchie, con crescita e produzione ridotte.','Analisi del terreno e concimazione equilibrata; attenzione a salinità ed eccesso di magnesio.','Conferma la carenza prima di integrare potassio.')
 ],
 'Pisello':[
  S('Oidio del pisello','Fungo','Patina bianca farinosa su foglie, stipole e baccelli; può anticipare il disseccamento.','Semina in epoca adatta, distanze corrette e varietà tolleranti.','Rimuovi residui molto colpiti e limita la diffusione; prodotti solo se autorizzati per pisello e oidio.'),
  S('Tonchio del pisello','Insetto','Fori circolari nei semi conservati e presenza di larve all’interno del seme.','Raccogli e conserva bene i semi, separa quelli danneggiati e pulisci i contenitori.','Elimina i semi infestati; non usare insetticidi non autorizzati su derrate alimentari.'),
  S('Carenza di fosforo','Carenza nutrizionale','Crescita lenta, foglie verde scuro talvolta con sfumature violacee e fioritura ritardata.','Evita suolo freddo e compattato; mantieni pH adeguato.','Controlla temperatura, pH e radici prima di integrare fosforo.')
 ],
 'Fava':[
  S('Ruggine della fava','Fungo','Pustole arancio-brune sulle foglie e successivo disseccamento dei tessuti.','Distanze e aerazione, rotazione e rimozione dei residui.','Elimina le foglie gravemente colpite e controlla l’evoluzione.'),
  S('Afide nero della fava','Insetto','Colonie nere e dense su apici e fiori; germogli deformati e melata.','Semine in epoca adatta, controllo dei germogli e tutela di coccinelle e sirfidi.','Cima gli apici molto infestati quando opportuno e rimuovi i focolai; evita trattamenti durante la fioritura.'),
  S('Carenza di molibdeno','Carenza di microelemento','Piante poco vigorose e noduli radicali poco sviluppati; sintomi non specifici.','Controlla pH e struttura del terreno.','Non apportare microelementi senza analisi: una nodulazione scarsa può dipendere anche da seme o inoculo.')
 ],
 'Carota':[
  S('Alternariosi della carota','Fungo','Macchie brune con alone giallo e disseccamento delle foglie, spesso sulle foglie più vecchie.','Seme sano, rotazione, irrigazione al piede e rimozione dei residui.','Elimina le foglie colpite e controlla che il problema non sia Cercospora o stress.'),
  S('Oidio della carota','Fungo','Patina biancastra sulle foglie e ingiallimento progressivo nei casi intensi.','Distanze corrette, aerazione e gestione delle infestanti.','Rimuovi foglie molto compromesse e verifica autorizzazioni prima di trattare.'),
  S('Carenza di boro','Carenza di microelemento','Radici con spaccature, suberificazioni o alterazioni interne; sintomi simili possono dipendere da siccità e terreno compatto.','Terreno soffice, umidità regolare e pH equilibrato.','Il boro può diventare tossico con poco eccesso: fai analizzare il terreno prima di ogni apporto.')
 ],
 'Ravanello':[
  S('Ernia delle crucifere','Patogeno del terreno','Radici ingrossate e deformi, piantine che appassiscono nelle ore calde.','Rotazione, drenaggio e pulizia degli attrezzi; non spostare terra infetta.','Estirpa le piante con radici e non compostarle; non esiste cura della radice colpita.'),
  S('Altiche','Insetto','Forellini numerosi sulle foglie giovani, che possono rallentare la crescita della radice.','Reti anti-insetto e irrigazione regolare; elimina infestanti ospiti.','Proteggi le giovani colture con rete e raccogli tempestivamente.'),
  S('Spaccature della radice','Problema fisiologico','Radici fessurate o deformi dopo crescita irregolare, spesso in seguito a siccità e piogge o irrigazioni abbondanti.','Semina scalare, terreno soffice e umidità costante.','Raccogli prima che le radici diventino troppo grandi e regolarizza l’acqua.')
 ],
 'Barbabietola':[
  S('Cercosporiosi della barbabietola','Fungo','Numerose piccole macchie rotonde con centro grigio e bordo bruno-rossastro, talvolta con puntini neri.','Rotazione, varietà tolleranti, aerazione e rimozione dei residui.','Elimina foglie molto colpite e limita la bagnatura fogliare; verifica la diagnosi.'),
  S('Altica della barbabietola','Insetto','Piccoli fori e rosure sulle foglie, soprattutto nelle prime fasi.','Reti e controllo delle infestanti ospiti.','Proteggi le plantule e rimuovi gli insetti quando possibile.'),
  S('Carenza di boro (cuore nero)','Carenza di microelemento','Imbrunimento e necrosi dei tessuti interni della radice o del colletto; crescita irregolare.','Mantieni umidità e nutrizione equilibrate e controlla pH e sostanza organica.','Conferma con analisi prima di usare boro: dosi eccessive danneggiano la coltura.')
 ],
 'Lattuga':[
  S('Botrite (muffa grigia)','Fungo','Tessuti acquosi e marcescenti, soprattutto sulle foglie esterne e alla base; muffa grigia in condizioni umide.','Evita ristagni e densità eccessiva, irriga al mattino e rimuovi foglie senescenti.','Rimuovi le piante marce e riduci umidità; non consumare parti alterate.'),
  S('Afide della lattuga','Insetto','Colonie nascoste nel cuore o sulla pagina inferiore, foglie arricciate e melata.','Controlla il cuore prima della chiusura, usa reti e favorisci gli insetti utili.','Rimuovi le foglie esterne infestate; evita trattamenti vicino alla raccolta se non previsti dall’etichetta.'),
  S('Tip burn (necrosi marginale)','Problema fisiologico legato al calcio','Margini delle foglie giovani interni al cespo che diventano bruni e secchi, senza necessariamente carenza di calcio nel terreno.','Crescita regolare, ventilazione, irrigazione uniforme e varietà meno sensibili.','Riduci gli sbalzi di crescita e controlla salinità e radici; il calcio fogliare non risolve sempre il problema.')
 ],
 'Spinacio':[
  S('Peronospora dello spinacio','Oomicete','Macchie gialle sulla pagina superiore e sporulazione grigio-violacea sotto, soprattutto con umidità.','Varietà resistenti alle razze locali, semine arieggiate e irrigazione al piede.','Rimuovi foglie e piante colpite; controlla le piante vicine e non lavorare bagnato.'),
  S('Minatrice dello spinacio','Insetto','Gallerie chiare o bolle nella lamina, con larve all’interno della foglia.','Reti anti-insetto e rimozione tempestiva delle foglie minate.','Elimina le foglie con larve attive e proteggi i nuovi ricacci.'),
  S('Carenza di magnesio','Carenza nutrizionale','Clorosi internervale sulle foglie più vecchie, talvolta con margini che seccano.','Analisi del terreno e bilanciamento di potassio, calcio e magnesio.','Conferma la carenza e correggi solo se necessario.')
 ],
 'Bietola da coste':[
  S('Cercosporiosi della bietola','Fungo','Macchie rotonde con centro chiaro e bordo scuro, che possono confluire e disseccare la foglia.','Rotazione, distanze e rimozione dei residui infetti.','Asporta le foglie molto colpite e irriga al piede.'),
  S('Minatrice della bietola','Insetto','Gallerie ampie e traslucide nella foglia, con larva chiara all’interno.','Reti e rimozione precoce delle foglie minate.','Elimina le foglie infestate senza lasciarle nell’aiuola.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie vecchie pallide e crescita ridotta; piccioli meno sviluppati.','Sostanza organica matura e concimazione equilibrata.','Escludi ristagno e danni alle radici prima di concimare.')
 ],
 'Sedano':[
  S('Septoriosi del sedano','Fungo','Piccole macchie brune sulle foglie e sui piccioli, talvolta con puntini neri.','Seme sano, rotazione, irrigazione al piede e rimozione dei residui.','Elimina le foglie colpite e non lavorare le piante bagnate.'),
  S('Alternariosi del sedano','Fungo','Macchie brune che possono allargarsi e disseccare la lamina fogliare.','Distanze adeguate, aerazione e gestione dell’umidità.','Rimuovi le parti infette e verifica che non si tratti di septoriosi.'),
  S('Carenza di boro (cuore nero)','Carenza di microelemento','Imbrunimenti e necrosi dei tessuti giovani interni al cuore e piccioli fessurati.','Umidità costante, pH adeguato e nutrizione equilibrata.','Analisi prima di ogni apporto di boro, perché l’eccesso è tossico.')
 ],
 'Finocchio':[
  S('Maculatura fogliare del finocchio','Fungo','Macchie brune allungate su foglie e guaine, con disseccamento nei casi intensi.','Rotazione, seme sano, distanze e irrigazione al piede.','Elimina le parti colpite e riduci la bagnatura della vegetazione.'),
  S('Afide del finocchio','Insetto','Colonie sui germogli e sulle ombrelle, melata e deformazioni.','Controlla gli apici e favorisci gli insetti utili; evita eccesso di azoto.','Rimuovi piccoli focolai e monitora gli insetti utili.'),
  S('Carenza di boro','Carenza di microelemento','Imbrunimenti e spaccature delle guaine o del grumolo; crescita irregolare.','Terreno uniforme e umidità costante.','Conferma con analisi: non distribuire boro senza indicazione tecnica.')
 ],
 'Aglio':[
  S('Fusariosi basale dell’aglio','Fungo del terreno','Ingiallimento delle foglie, marciume secco del disco basale e radici imbrunite; bulbo può marcire in conservazione.','Bulbilli sani, rotazione, drenaggio e raccolta in condizioni asciutte.','Elimina bulbi marci e non conservarli; disinfetta attrezzi e contenitori.'),
  S('Ruggine dell’aglio','Fungo','Pustole arancioni sulle foglie che possono unirsi e causare disseccamento.','Distanze e aerazione, rotazione e rimozione dei residui.','Asporta foglie gravemente colpite e controlla l’evoluzione.'),
  S('Nematode dello stelo e del bulbo','Nematode','Piante deformate e ingrossate alla base, bulbi spugnosi o fessurati e crescita disomogenea.','Bulbilli certificati, rotazioni lunghe e attenzione a non trasferire terra o materiale infetto.','Estirpa le piante sospette e non riutilizzare i bulbilli; chiedi conferma specialistica.')
 ],
 'Cipolla':[
  S('Tripide della cipolla','Insetto','Piccoli insetti sottili tra le foglie, argentature, puntini neri di escrementi e punte secche.','Controlla il cuore delle foglie, riduci stress idrico e gestisci infestanti.','Lava le foglie quando possibile e monitora; eventuali prodotti devono essere autorizzati per cipolla e tripidi.'),
  S('Marciume bianco della cipolla','Fungo del terreno','Ingiallimento e collasso delle foglie; marciume bianco cotonoso alla base con piccoli sclerozi neri.','Bulbi sani, rotazioni molto lunghe e pulizia rigorosa degli attrezzi.','Estirpa e allontana le piante con terra aderente; non spostare terreno contaminato.'),
  S('Carenza di zolfo','Carenza nutrizionale','Foglie giovani pallide e crescita rallentata; sintomi simili a carenza di azoto.','Terreno con sostanza organica e nutrizione bilanciata.','Verifica pH e analisi prima di integrare zolfo.')
 ],
 'Porro':[
  S('Tignola del porro','Insetto','Gallerie e rosure nelle foglie, talvolta danni al cuore e marciumi secondari.','Reti anti-insetto, rotazione e rimozione delle foglie con larve.','Elimina le foglie infestate e controlla il cuore delle piante.'),
  S('Ruggine del porro','Fungo','Pustole arancioni o brune allungate sulle foglie, che ingialliscono e si seccano.','Distanze, rotazione e rimozione dei residui.','Taglia le foglie molto colpite e non lasciare residui infetti.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie vecchie pallide e fusti meno sviluppati.','Concimazione equilibrata e sostanza organica matura.','Controlla ristagno e radici prima di integrare azoto.')
 ],
 'Fragola':[
  S('Oidio della fragola','Fungo','Foglie con margini arrotolati verso l’alto e patina biancastra; frutti possono diventare opachi o deformi.','Arieggiamento, rimozione delle foglie vecchie e varietà tolleranti.','Elimina le parti colpite e verifica prodotti autorizzati per fragola e oidio.'),
  S('Antracnosi del colletto e dei frutti','Fungo','Lesioni scure e infossate su stoloni, colletto o frutti; possibile collasso rapido delle piantine.','Piantine certificate, rotazione, drenaggio e irrigazione al piede.','Rimuovi le piante e i frutti colpiti; non propagare stoloni da piante sintomatiche.'),
  S('Carenza di ferro','Carenza nutrizionale','Foglie giovani gialle con nervature verdi, spesso in suoli calcarei o con ristagno.','Controlla pH, drenaggio e qualità dell’acqua.','Prima di usare ferro chelato escludi asfissia radicale e pH elevato.')
 ],
 'Basilico':[
  S('Peronospora del basilico','Oomicete','Ingiallimenti delimitati dalle nervature sulla pagina superiore e muffetta grigio-violacea sotto; foglie che collassano.','Seme sano, ventilazione, irrigazione al piede e varietà tolleranti.','Rimuovi rapidamente le piante colpite e non consumare foglie alterate; evita bagnature fogliari.'),
  S('Fusariosi del basilico','Fungo del terreno','Appassimento, imbrunimento dei vasi e crescita stentata, spesso su piante giovani.','Substrato pulito, vasi drenanti e materiale di propagazione sano.','Elimina le piante colpite e non riutilizzare il substrato contaminato.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie vecchie uniformemente pallide e crescita lenta.','Substrato fertile ma drenante e concimazione moderata.','Controlla prima irrigazione e radici; concima solo con prodotto adatto alle aromatiche edibili.')
 ],
 'Prezzemolo':[
  S('Septoriosi del prezzemolo','Fungo','Macchie piccole brune o grigiastre con puntini neri, soprattutto sulle foglie più vecchie.','Seme sano, rotazione, irrigazione al piede e raccolta delle foglie infette.','Elimina le foglie colpite e non bagnare la chioma.'),
  S('Psilla e afidi','Insetti','Foglie arricciate, germogli deformati e presenza di piccoli insetti sulla vegetazione.','Reti, controllo degli apici e tutela degli insetti utili.','Rimuovi i focolai e lava delicatamente la vegetazione; rispetta sempre le indicazioni per colture da consumo fresco.'),
  S('Carenza di magnesio','Carenza nutrizionale','Clorosi internervale sulle foglie più vecchie.','Nutrizione equilibrata e substrato non salino.','Conferma la carenza prima di usare un concime con magnesio.')
 ],
 'Rucola':[
  S('Peronospora della rucola','Oomicete','Macchie gialle e angolari, con crescita grigiastra sotto le foglie in condizioni umide.','Rotazione, semina non fitta e irrigazione al piede.','Rimuovi foglie e piante colpite; non consumare tessuti marci.'),
  S('Altiche della rucola','Insetto','Numerosi piccoli fori rotondi che rendono la foglia “bucherellata”.','Reti anti-insetto e gestione delle infestanti brassicacee.','Proteggi la coltura con rete e raccogli precocemente.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie piccole e pallide, crescita lenta e raccolta ridotta.','Terreno fertile e concimazione moderata e frazionata.','Escludi ristagno e competizione delle infestanti prima di integrare azoto.')
 ],
 'Asparago':[
  S('Ruggine dell’asparago','Fungo','Pustole arancio-brune sui fusti e cladodi, seguite da ingiallimento e disseccamento.','Aerazione, eliminazione dei residui a fine stagione e varietà tolleranti.','Taglia e allontana la vegetazione secca infetta a fine ciclo.'),
  S('Criocera dell’asparago','Insetto','Coleotteri colorati e larve scure che erodono turioni e vegetazione; presenza di escrementi.','Controlla turioni e fronde, raccogli adulti e larve e rimuovi residui.','Raccolta manuale nei piccoli impianti; proteggi gli insetti utili.'),
  S('Carenza di potassio','Carenza nutrizionale','Ingiallimento marginale e disseccamento dei cladodi, con vigoria ridotta.','Analisi del terreno e concimazione equilibrata dopo la raccolta.','Verifica salinità e disponibilità idrica prima di integrare potassio.')
 ],
 'Mais dolce':[
  S('Carbone del mais','Fungo','Grosse galle biancastre che diventano scure e liberano una polvere nera di spore su pannocchie o altri organi.','Varietà adatte, rotazione e attenzione a ferite e stress delle piante.','Rimuovi le galle prima che liberino spore e non lasciarle sul terreno.'),
  S('Piralide del mais','Insetto','Fori nei fusti e nelle brattee, rosume e gallerie interne; pannocchie danneggiate.','Trinciatura corretta dei residui, monitoraggio e rotazione.','Rimuovi stocchi e pannocchie fortemente infestati; segui eventuali bollettini locali.'),
  S('Carenza di zinco','Carenza di microelemento','Bande chiare o strisce gialle parallele alla nervatura centrale sulle foglie giovani; crescita ridotta.','Controlla pH, sostanza organica e compattamento del terreno.','Conferma con analisi prima di apportare zinco, evitando dosi empiriche.')
 ],
 'Carciofo':[
  S('Nottua del carciofo','Insetto','Larve e rosure su foglie e capolini; gallerie o escrementi possono comparire tra le brattee.','Controlla regolarmente i capolini e rimuovi residui e infestanti ospiti.','Raccogli manualmente le larve e scarta capolini gravemente danneggiati.'),
  S('Ascochitosi e maculature del carciofo','Fungo','Macchie brune o grigiastre sulle foglie, talvolta con margini scuri e disseccamento.','Distanze, aerazione, rimozione delle foglie vecchie e irrigazione al piede.','Elimina foglie colpite e verifica la diagnosi prima di valutare prodotti.'),
  S('Carenza di potassio','Carenza nutrizionale','Margini delle foglie più vecchie ingialliti o necrotici e sviluppo ridotto dei capolini.','Concimazione equilibrata e controllo della salinità.','Conferma con analisi del terreno e correggi solo se necessario.')
 ],
 'Rosmarino':[
  S('Cercospora del rosmarino','Fungo','Macchie fogliari brune e disseccamento localizzato, più frequente in chiome dense e umide.','Pieno sole, drenaggio e potatura leggera per arieggiare.','Asporta i rametti colpiti e riduci le bagnature della chioma.'),
  S('Cocciniglia','Insetto','Scudetti o masse cotonose sui fusti, ingiallimento e melata.','Controlla i rami interni e limita eccessi di azoto.','Rimuovi manualmente i focolai e pota i rami molto infestati; evita oli nelle ore calde.'),
  S('Marciume radicale da ristagno','Complesso fungino favorito dall’acqua','Ingiallimento e appassimento nonostante il terreno umido; radici brune e molli.','Substrato molto drenante e irrigazioni distanziate.','Sospendi l’acqua in eccesso, migliora il drenaggio e rimuovi le radici marce.')
 ],
 'Salvia':[
  S('Marciume del colletto','Complesso di patogeni e ristagno','Base dei fusti scura e molle, foglie che appassiscono e pianta che si separa facilmente dal terreno.','Terreno drenante, sole e irrigazioni moderate.','Elimina le piante marce e correggi il drenaggio; non riutilizzare substrato contaminato.'),
  S('Cicaline e tingidi','Insetti','Punteggiature chiare, aspetto argentato e piccoli insetti sulla pagina inferiore.','Controlla il retro delle foglie e limita stress idrici.','Lava la vegetazione e favorisci gli ausiliari; prodotti solo se autorizzati per salvia edibile.'),
  S('Carenza di ferro','Carenza nutrizionale','Foglie giovani clorotiche con nervature verdi, soprattutto in suoli calcarei o compatti.','Drenaggio e controllo del pH.','Escludi ristagno e radici danneggiate prima di integrare ferro.')
 ],
 'Origano':[
  S('Ruggine dell’origano','Fungo','Pustole arancio-brune sulle foglie e disseccamento dei germogli.','Distanze, sole, aerazione e rimozione dei residui.','Elimina le parti colpite e irriga al piede.'),
  S('Cicaline','Insetti','Punteggiature chiare diffuse, foglie scolorite e piccoli insetti mobili.','Controlla regolarmente le foglie e limita le infestanti ospiti.','Rimuovi i germogli più infestati e tutela gli insetti utili.'),
  S('Marciume radicale','Patogeni del terreno e ristagno','Pianta poco vigorosa, foglie ingiallite e radici scure o molli.','Terreno leggero e drenante, irrigazioni moderate.','Riduci l’acqua e rinvasa in substrato drenante se coltivato in vaso.')
 ],
 'Timo':[
  S('Marciume radicale del timo','Complesso di patogeni favorito dal ristagno','Ingiallimento, disseccamento dei rametti e radici brune e molli.','Terreno povero ma drenante, sole e irrigazioni parsimoniose.','Riduci l’acqua e rimuovi le parti marce; evita sottovasi pieni.'),
  S('Cocciniglia','Insetto','Piccoli scudetti sui fusti, melata e ingiallimento.','Controlla la base dei rametti e mantieni chioma arieggiata.','Rimuovi manualmente gli individui e pota i focolai.'),
  S('Carenza di ferro','Carenza nutrizionale','Foglie giovani pallide con nervature verdi; spesso legata a pH alto o radici asfittiche.','Substrato drenante e pH adatto alla specie.','Verifica pH e radici prima di usare correttivi al ferro.')
 ],
 'Cicoria':[
  S('Sclerotinia e marciume del colletto','Fungo del terreno','Marciume molle alla base, muffa bianca cotonosa e piccoli corpi neri sul colletto.','Rotazione, drenaggio, densità corretta e rimozione dei residui.','Estirpa le piante con il colletto marcio e non compostarle.'),
  S('Afide della cicoria','Insetto','Colonie alla base delle foglie e nel cuore, foglie arricciate e melata.','Controlla il cuore e limita eccessi di azoto.','Rimuovi le foglie infestate e favorisci gli insetti utili.'),
  S('Carenza di magnesio','Carenza nutrizionale','Clorosi internervale sulle foglie vecchie, con nervature verdi.','Analisi del terreno e bilanciamento dei nutrienti.','Conferma prima di integrare magnesio.')
 ],
 'Indivia riccia':[
  S('Marciume del cuore','Fisiopatia e patogeni secondari','Foglie interne acquose, brune e maleodoranti; spesso dopo ristagno o lesioni.','Evita bagnature prolungate nel cuore e densità eccessiva.','Rimuovi cespi marci e migliora aerazione; non consumare parti alterate.'),
  S('Afidi','Insetti','Colonie nascoste tra le foglie interne e deformazioni.','Controlla il cuore e usa reti quando opportuno.','Rimuovi foglie infestate e tutela gli ausiliari.'),
  S('Tip burn','Problema fisiologico legato al calcio','Margini delle foglie giovani interni al cespo necrotici e secchi.','Crescita regolare, irrigazione uniforme e aerazione.','Riduci gli sbalzi idrici e verifica salinità e radici; non concimare automaticamente con calcio.')
 ],
 'Radicchio':[
  S('Sclerotinia del radicchio','Fungo del terreno','Marciume acquoso alla base del cespo, micelio bianco e sclerozi neri.','Rotazione, drenaggio, distanze e rimozione dei residui.','Estirpa i cespi colpiti con radici e non compostarli.'),
  S('Afide della radice e del cespo','Insetto','Crescita stentata, foglie che ingialliscono e colonie alla base o nel cuore.','Controlla colletto e radici, limita infestanti ospiti e stress.','Rimuovi le piante fortemente infestate e verifica l’identificazione.'),
  S('Carenza di fosforo','Carenza nutrizionale','Crescita lenta e foglie scure, talvolta con sfumature violacee, soprattutto in suolo freddo.','Semina in terreno non freddo e ben strutturato.','Controlla temperatura e pH prima di integrare fosforo.')
 ],
 'Rabarbaro':[
  S('Maculatura fogliare','Fungo','Macchie brune o rossastre che possono confluire e disseccare la lamina.','Rimuovi foglie vecchie, arieggia e irriga al piede.','Elimina le foglie colpite e non lasciare residui infetti.'),
  S('Marciume del rizoma','Patogeni del terreno e ristagno','Germogli che collassano, base molle e rizoma scuro.','Terreno profondo e drenante, divisioni sane e irrigazione moderata.','Rimuovi le parti marce con attrezzo pulito e correggi il drenaggio.'),
  S('Carenza di potassio','Carenza nutrizionale','Margini fogliari ingialliti o necrotici e crescita meno vigorosa.','Analisi del terreno e nutrizione equilibrata.','Conferma la carenza prima di integrare potassio.')
 ],
 'Patata dolce':[
  S('Marciume nero delle radici','Fungo','Lesioni scure e secche sulle radici di riserva, talvolta con germogli deboli.','Usa talee sane, substrato pulito e rotazione; cura le ferite in raccolta e conservazione.','Scarta radici marce e non usare materiale di propagazione proveniente da piante malate.'),
  S('Aleurodidi (mosche bianche)','Insetti','Adulti bianchi sotto le foglie, melata e ingiallimento; possibili fumaggini.','Reti e monitoraggio della pagina inferiore.','Rimuovi focolai e favorisci gli ausiliari; prodotti solo se autorizzati per patata dolce.'),
  S('Carenza di potassio','Carenza nutrizionale','Ingiallimento marginale e necrosi delle foglie più vecchie, con sviluppo ridotto delle radici.','Terreno soffice e concimazione equilibrata.','Controlla salinità e pH prima di correggere.')
 ],
 'Finocchietto selvatico':[
  S('Afidi delle ombrellifere','Insetti','Colonie sui germogli e sulle infiorescenze, melata e deformazioni.','Controlla apici e ombrelle e favorisci gli insetti utili.','Rimuovi focolai localizzati e limita trattamenti durante la fioritura.'),
  S('Oidio delle ombrellifere','Fungo','Patina bianca farinosa su foglie e steli.','Sole, aerazione e irrigazione al piede.','Asporta parti molto colpite e verifica l’identificazione.'),
  S('Carenza di azoto','Carenza nutrizionale','Vegetazione pallida e crescita lenta.','Terreno con sostanza organica matura e nutrizione moderata.','Escludi ristagno e competizione delle infestanti prima di concimare.')
 ],
 'Aneto':[
  S('Maculatura fogliare dell’aneto','Fungo','Macchie brune o nere sulle foglie finemente divise, con disseccamento dei rametti.','Seme sano, aerazione e irrigazione al piede.','Elimina la vegetazione colpita e non lavorare sulle piante bagnate.'),
  S('Afidi delle ombrellifere','Insetti','Colonie sui germogli e sulle ombrelle, foglie arricciate e melata.','Controlla i germogli e favorisci coccinelle e sirfidi.','Rimuovi piccoli focolai e limita interventi durante la fioritura.'),
  S('Carenza di fosforo','Carenza nutrizionale','Crescita lenta e foglie scure, talvolta con tonalità violacee.','Terreno non freddo e ben drenato.','Verifica pH e temperatura prima di integrare fosforo.')
 ],
 'Coriandolo':[
  S('Alternariosi del coriandolo','Fungo','Macchie brune su foglie e steli, con possibile disseccamento.','Seme sano, rotazione e aerazione.','Rimuovi residui e piante colpite; evita irrigazione soprachioma.'),
  S('Afidi delle ombrellifere','Insetti','Colonie sugli apici e sulle infiorescenze, melata e deformazioni.','Controlla le ombrelle e tutela gli insetti utili.','Rimuovi focolai localizzati e non trattare durante la fioritura con prodotti pericolosi per gli impollinatori.'),
  S('Carenza di potassio','Carenza nutrizionale','Margini delle foglie vecchie ingialliti e crescita ridotta.','Nutrizione equilibrata e controllo della salinità.','Conferma con analisi prima di correggere.')
 ],
 'Zafferano':[
  S('Fusariosi del cormo','Fungo del terreno','Cormo con marciume bruno, tuniche alterate e germogli deboli o assenti.','Cormi sani, terreno drenante, rotazione e selezione del materiale di propagazione.','Scarta i cormi marci e non reimpiantarli; disinfetta gli attrezzi.'),
  S('Ruggine dello zafferano','Fungo','Pustole arancioni o brune sulle foglie sottili, con disseccamento anticipato.','Aerazione, rimozione dei residui e cormi sani.','Elimina foglie colpite e monitora i cormi.'),
  S('Marciume da ristagno','Problema del terreno','Cormo molle e scuro, germogli che ingialliscono e scompaiono.','Aiuole rialzate e drenaggio eccellente; evitare irrigazioni estive non necessarie.','Estrai i cormi compromessi e correggi il drenaggio prima del reimpianto.')
 ],
 'Mizuna':[
  S('Altiche delle brassicacee','Insetto','Piccoli fori rotondi e numerosi sulle foglie giovani.','Reti anti-insetto e controllo delle infestanti ospiti.','Proteggi con rete e raccogli le foglie integre.'),
  S('Peronospora delle brassicacee','Oomicete','Macchie giallastre e sporulazione chiara sotto le foglie in condizioni umide.','Semina non fitta, irrigazione al piede e rimozione dei residui.','Elimina le foglie colpite e riduci l’umidità sulla chioma.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie pallide e crescita lenta, con raccolta ridotta.','Terreno fertile e concimazione frazionata moderata.','Escludi ristagno e competizione prima di integrare azoto.')
 ],
 'Pak choi':[
  S('Ernia del cavolo','Patogeno del terreno','Radici deformate a clava, crescita stentata e appassimento nelle ore calde.','Rotazione lunga, drenaggio e igiene degli attrezzi.','Estirpa le piante colpite e non spostare il terreno.'),
  S('Altiche','Insetto','Forellini numerosi sulle foglie, soprattutto su piantine giovani.','Reti anti-insetto e controllo delle brassicacee spontanee.','Proteggi le piantine con rete e rimuovi le infestanti ospiti.'),
  S('Tip burn','Problema fisiologico legato al calcio','Margini delle foglie interne giovani secchi o bruni, spesso in crescita rapida.','Irrigazione uniforme, ventilazione e crescita non eccessivamente spinta.','Controlla salinità e radici; il calcio nel terreno può non essere il fattore limitante.')
 ],
 'Cavolo verza':[
  S('Marciume nero delle brassicacee','Batterio','Lesioni gialle a V dal margine della foglia e nervature scure.','Seme sano, rotazione e irrigazione al piede.','Rimuovi le piante molto colpite e disinfetta gli attrezzi.'),
  S('Nottua del cavolo','Insetto','Larve e rosure tra le foglie arricciate, con escrementi nel cuore.','Reti, controllo delle uova e raccolta manuale delle larve.','Apri le foglie esterne e rimuovi larve; evita trattamenti indiscriminati.'),
  S('Carenza di calcio / tip burn','Problema fisiologico','Necrosi dei margini delle foglie interne, spesso durante crescita veloce.','Umidità costante e aerazione.','Valuta il microclima e l’apparato radicale prima di aggiungere calcio.')
 ],
 'Cavolo di Bruxelles':[
  S('Afide ceroso del cavolo','Insetto','Colonie grigio-verdi ricoperte da cera su foglie e germogli; crescita deformata.','Controllo frequente e tutela dei predatori naturali.','Rimuovi focolai localizzati e controlla anche l’interno dei germogli.'),
  S('Alternariosi','Fungo','Macchie brune concentriche su foglie esterne e talvolta sui piccoli cavoli.','Rotazione, aerazione e residui sani.','Elimina le foglie colpite e non bagnare la chioma.'),
  S('Carenza di boro','Carenza di microelemento','Alterazioni e cavità nei tessuti del fusto o dei germogli, sintomi non esclusivi.','Controlla pH e disponibilità idrica.','Analisi prima di ogni apporto di boro, per evitare tossicità.')
 ],
 'Cavolo cinese':[
  S('Marciume nero','Batterio','Lesioni gialle a V dai margini e nervature che anneriscono; può colpire il cespo.','Seme sano, rotazione e irrigazione al piede.','Rimuovi piante colpite e disinfetta gli attrezzi.'),
  S('Altiche','Insetto','Fori piccoli e numerosi sulle foglie tenere.','Reti anti-insetto e rimozione delle infestanti brassicacee.','Proteggi le piante giovani con rete.'),
  S('Carenza di calcio / tip burn','Problema fisiologico','Margini interni del cespo imbruniscono durante crescita rapida.','Irrigazione regolare e crescita equilibrata.','Controlla radici e salinità prima di integrare calcio.')
 ],
 'Cavolo rapa':[
  S('Spaccatura del fusto ingrossato','Problema fisiologico','Il fusto globoso si fessura dopo alternanza di siccità e abbondante acqua o raccolta tardiva.','Umidità regolare e raccolta alla dimensione corretta.','Raccogli tempestivamente e regolarizza l’irrigazione.'),
  S('Altiche','Insetto','Piccoli fori sulle foglie e rallentamento della crescita delle giovani piante.','Reti e controllo delle infestanti ospiti.','Proteggi le giovani piante con rete.'),
  S('Ernia del cavolo','Patogeno del terreno','Radici deformate e appassimento nelle ore calde.','Rotazione lunga, drenaggio e igiene degli attrezzi.','Estirpa le piante colpite e non spostare il terreno.')
 ],
 'Cavolo rosso':[
  S('Marciume nero delle brassicacee','Batterio','Macchie gialle a V e nervature scure sulle foglie.','Seme sano, rotazione e lavorazioni su piante asciutte.','Rimuovi piante colpite e residui.'),
  S('Afide ceroso','Insetto','Colonie cerose su foglie e cuore, deformazioni e crescita ridotta.','Controllo frequente e tutela dei predatori.','Rimuovi focolai localizzati e verifica la presenza di ausiliari.'),
  S('Carenza di fosforo','Carenza nutrizionale','Crescita lenta e foglie scure con sfumature violacee, soprattutto a basse temperature.','Terreno ben strutturato e semina in condizioni termiche adatte.','Verifica temperatura e pH prima di concimare.')
 ],
 'Cavolo romanesco':[
  S('Carenza di boro','Carenza di microelemento','Corimbo deformato o con imbrunimenti interni; sintomi possono essere confusi con stress termici.','Irrigazione uniforme e controllo del pH.','Richiedi analisi prima di apportare boro: l’eccesso danneggia la coltura.'),
  S('Nottua del cavolo','Insetto','Larve tra le ramificazioni del corimbo, rosure e piccoli escrementi.','Reti, controllo delle uova e ispezione del corimbo.','Rimuovi manualmente le larve e scarta le parti danneggiate.'),
  S('Alternariosi','Fungo','Macchie scure concentriche sulle foglie esterne.','Rotazione, aerazione e rimozione dei residui.','Elimina foglie colpite e riduci bagnature.')
 ],
 'Cime di rapa':[
  S('Altiche','Insetto','Numerosi forellini sulle foglie e danni ai giovani germogli.','Reti anti-insetto e controllo delle infestanti ospiti.','Proteggi la coltura con rete e raccogli tempestivamente.'),
  S('Peronospora delle brassicacee','Oomicete','Macchie gialle e crescita grigiastra sotto le foglie in condizioni umide.','Distanze, irrigazione al piede e rotazione.','Rimuovi foglie colpite e limita umidità.'),
  S('Afide ceroso','Insetto','Colonie grigie cerose sui germogli e sulle infiorescenze.','Controlla gli apici e favorisci i predatori.','Rimuovi i focolai prima che invadano le infiorescenze.')
 ],
 'Cavolo cappuccio primaverile':[
  S('Salita a seme precoce','Fisiopatia da freddo e stress','La pianta forma uno stelo fiorale prima di produrre una testa compatta.','Scegli varietà adatte alla stagione e trapianta piantine non troppo sviluppate in periodi freddi.','Non è una malattia: raccogli le parti utilizzabili e correggi epoca e varietà per il ciclo successivo.'),
  S('Altiche','Insetto','Fori piccoli e numerosi sulle foglie giovani.','Reti anti-insetto e controllo delle infestanti brassicacee.','Proteggi le piantine con rete.'),
  S('Ernia del cavolo','Patogeno del terreno','Radici ingrossate e deformi, appassimento nelle ore calde.','Rotazione lunga, drenaggio e igiene.','Estirpa le piante colpite e non spostare terreno infetto.')
 ],
 'Ceci':[
  S('Ascochitosi del cece','Fungo','Macchie rotonde brune con puntini neri su foglie, fusti e baccelli.','Seme sano, rotazione e semine non troppo fitte.','Rimuovi residui infetti e non conservare seme da piante malate.'),
  S('Sitona del cece','Insetto','Intaccature semicircolari sui margini delle foglie; larve possono danneggiare noduli e radici.','Rotazione e monitoraggio precoce delle plantule.','Raccogli gli adulti nei piccoli appezzamenti e controlla vigoria e nodulazione.'),
  S('Carenza di ferro','Carenza nutrizionale','Foglie giovani gialle con nervature verdi, più probabile in suoli calcarei.','Drenaggio e controllo del pH.','Verifica che non vi sia ristagno prima di integrare ferro.')
 ],
 'Lenticchia':[
  S('Antracnosi della lenticchia','Fungo','Lesioni scure su foglie e fusti e macchie sui baccelli.','Seme sano, rotazione e aerazione della coltura.','Elimina residui colpiti e non conservare seme da piante sintomatiche.'),
  S('Afide della lenticchia','Insetto','Colonie sui germogli e sui fiori, deformazioni e melata.','Monitoraggio degli apici e tutela degli insetti utili.','Rimuovi piccoli focolai e limita interventi durante la fioritura.'),
  S('Carenza di fosforo','Carenza nutrizionale','Piante poco vigorose, foglie scure e fioritura ritardata.','Terreno non freddo e ben strutturato.','Controlla pH e temperatura prima di correggere.')
 ],
 'Cicerchia':[
  S('Antracnosi delle leguminose','Fungo','Macchie scure su foglie e baccelli, talvolta infossate.','Seme sano, rotazione e aerazione.','Rimuovi residui infetti e non conservare seme sintomatico.'),
  S('Afidi','Insetti','Colonie sugli apici e sui fiori, con melata e deformazioni.','Controllo regolare e tutela degli ausiliari.','Contieni i focolai localizzati con metodi meccanici.'),
  S('Carenza di molibdeno','Carenza di microelemento','Vigoria ridotta e nodulazione debole, sintomi non specifici.','Controlla il pH e la struttura del terreno.','Conferma con analisi prima di integrare microelementi.')
 ],
 'Taccola':[
  S('Oidio della taccola','Fungo','Patina bianca sulle foglie e talvolta sui baccelli.','Distanze corrette e aerazione.','Rimuovi foglie molto colpite e verifica autorizzazioni specifiche.'),
  S('Tonchio dei legumi','Insetto','Fori nei semi conservati e larve all’interno dei semi.','Raccolta e conservazione asciutta, pulizia dei contenitori.','Elimina semi infestati e conserva il raccolto in contenitori idonei.'),
  S('Carenza di potassio','Carenza nutrizionale','Margini delle foglie vecchie ingialliti o necrotici.','Concimazione equilibrata e controllo della salinità.','Conferma la carenza prima di integrare.')
 ],
 'Arachide':[
  S('Maculatura fogliare precoce e tardiva','Funghi','Macchie brune o nere sulle foglie, con possibile caduta anticipata della vegetazione.','Rotazione, residui gestiti correttamente e irrigazione al piede.','Rimuovi residui e monitora la defogliazione.'),
  S('Marciume dei baccelli','Funghi del terreno','Baccelli con lesioni, muffe o semi alterati, spesso in suolo troppo umido.','Terreno drenante, rotazione e raccolta al momento corretto.','Scarta baccelli marci e non conservare semi alterati.'),
  S('Carenza di calcio','Carenza nutrizionale','Sviluppo irregolare dei baccelli e semi poco riempiti; il calcio deve essere disponibile nella zona dei baccelli.','Controlla pH, struttura e disponibilità idrica del terreno.','Analisi del suolo prima di ogni correzione; non aggiungere calcare senza conoscere il pH.')
 ],
 'Edamame (soia da orto)':[
  S('Ragnetto rosso','Acari','Punteggiature gialle e bronzatura delle foglie, con ragnatele fini nei casi intensi.','Controlla la pagina inferiore e limita stress idrico.','Riduci i focolai e tutela gli acari predatori.'),
  S('Ruggine asiatica della soia','Fungo','Piccole pustole brune soprattutto sotto le foglie, con ingiallimento e caduta fogliare.','Varietà adatte, monitoraggio e gestione dei residui.','Richiedi identificazione affidabile: la diagnosi può essere confusa con altre maculature.'),
  S('Carenza di ferro','Carenza nutrizionale','Foglie giovani gialle con nervature verdi, frequente in terreni calcarei.','Drenaggio e controllo del pH.','Verifica pH e radici prima di usare ferro chelato.')
 ],
 'Scalogno':[
  S('Fusariosi basale','Fungo del terreno','Ingiallimento e disseccamento delle foglie, marciume bruno del disco basale.','Bulbilli sani, rotazione e terreno drenante.','Scarta i bulbi marci e non conservarli.'),
  S('Tripide della cipolla','Insetto','Striature argentate sulle foglie e piccoli puntini neri di escrementi.','Monitoraggio del cuore delle foglie e gestione delle infestanti.','Lava la vegetazione e verifica eventuali prodotti autorizzati per scalogno e tripidi.'),
  S('Marciume bianco','Fungo del terreno','Marciume basale con micelio bianco e piccoli sclerozi neri.','Rotazioni molto lunghe e igiene degli attrezzi.','Estirpa le piante e non spostare terreno contaminato.')
 ],
 'Cipollotto':[
  S('Tripide della cipolla','Insetto','Foglie argentate e deformate, insetti sottili tra le guaine.','Controlla il cuore delle foglie e irriga senza creare ristagni.','Rimuovi le foglie molto danneggiate e monitora la presenza di tripidi.'),
  S('Peronospora della cipolla','Oomicete','Foglie pallide e piegate, con sporulazione grigio-violacea in condizioni umide.','Distanze, irrigazione al piede e rotazione.','Rimuovi le parti colpite e riduci la bagnatura della vegetazione.'),
  S('Carenza di azoto','Carenza nutrizionale','Foglie sottili e pallide e sviluppo ridotto del bulbo.','Nutrizione moderata e regolare.','Escludi ristagno e problemi radicali prima di concimare.')
 ],
 'Erba cipollina':[
  S('Ruggine dell’Allium','Fungo','Pustole arancioni sulle foglie cilindriche e disseccamento delle punte.','Raccogli e rinnova i ciuffi, arieggia e rimuovi residui infetti.','Taglia le foglie colpite e smaltiscile; evita di bagnare il fogliame.'),
  S('Tripidi','Insetti','Striature argentate e piccoli insetti tra le foglie.','Controllo regolare e gestione delle infestanti.','Taglia le foglie molto infestate e controlla i ricacci.'),
  S('Marciume del cespo','Patogeni e ristagno','Base delle foglie molle e scura, ciuffo che ingiallisce e collassa.','Substrato drenante e irrigazione moderata.','Dividi solo porzioni sane e rimuovi quelle marce.')
 ],

};


// Colture minori del catalogo: schede dedicate anche per queste voci.
cropSpecific['Peperoncino']=[
 S('Marciume apicale del peperoncino','Squilibrio idrico e fisiologico','Lesione scura e infossata sulla punta del frutto, favorita da stress idrici e difficoltà di assorbimento del calcio.','Irrigazione regolare, drenaggio e nutrizione equilibrata.','Regolarizza l’acqua e verifica pH e radici prima di aggiungere calcio.'),
 S('Afidi e virosi del peperoncino','Insetti / virus','Afidi sugli apici, foglie arricciate; mosaici e deformazioni possono indicare virosi ma non sono una conferma.','Reti, controllo degli apici e rimozione delle infestanti ospiti.','Rimuovi i focolai e, se la virosi è confermata, elimina la pianta; non esiste cura antivirale.'),
 S('Tripidi del peperoncino','Insetti','Fiori danneggiati, foglie argentate e frutti con cicatrici o deformazioni.','Controlla fiori e germogli e usa trappole per monitoraggio.','Rimuovi le parti danneggiate e proteggi gli insetti utili.')
];
cropSpecific['Senape da foglia']=[
 S('Altiche della senape','Insetti','Numerosi forellini rotondi sulle foglie giovani, che possono diventare inutilizzabili.','Reti anti-insetto e rimozione delle brassicacee spontanee.','Proteggi le giovani piante con rete e raccogli le foglie integre.'),
 S('Peronospora della senape','Oomicete','Macchie giallastre e crescita grigiastra sotto le foglie in condizioni umide.','Semina non fitta, irrigazione al piede e rotazione.','Elimina foglie colpite e riduci l’umidità della chioma.'),
 S('Afide ceroso','Insetto','Colonie grigie ricoperte da cera sui germogli e sotto le foglie.','Controlla gli apici e favorisci coccinelle e sirfidi.','Rimuovi i focolai localizzati e limita trattamenti indiscriminati.')
];
cropSpecific['Fagiolo borlotto']=[
 S('Antracnosi del borlotto','Fungo','Lesioni scure infossate su baccelli e nervature, con macchie brune su foglie e fusti.','Seme sano, rotazione e irrigazione al piede.','Elimina baccelli colpiti e non conservare seme da piante sintomatiche.'),
 S('Ruggine del borlotto','Fungo','Pustole bruno-ruggine in rilievo soprattutto sotto le foglie.','Distanze corrette, aerazione e rimozione dei residui.','Rimuovi foglie molto colpite e controlla l’evoluzione.'),
 S('Carenza di potassio','Carenza nutrizionale','Margini delle foglie vecchie ingialliti e necrotici.','Nutrizione equilibrata e controllo della salinità.','Conferma con analisi prima di integrare potassio.')
];
cropSpecific['Catalogna']=[
 S('Sclerotinia della catalogna','Fungo del terreno','Marciume molle alla base, micelio bianco e talvolta piccoli sclerozi neri.','Rotazione, drenaggio e densità corretta.','Estirpa le piante colpite e non compostarle.'),
 S('Afidi della catalogna','Insetti','Colonie alla base delle foglie e nel cuore, con melata e arricciamenti.','Controlla il cuore e limita eccessi di azoto.','Rimuovi foglie infestate e tutela gli ausiliari.'),
 S('Carenza di magnesio','Carenza nutrizionale','Clorosi internervale sulle foglie vecchie.','Nutrizione equilibrata e controllo del pH.','Conferma la carenza prima di usare correttivi.')
];
cropSpecific['Crescione']=[
 S('Marciume del colletto','Patogeni favoriti da ristagno','Base dei fusti scura e molle, foglie che collassano.','Acqua pulita e ricambio costante; evita ristagni stagnanti e materiale vegetale marcio.','Rimuovi le piante compromesse e rinnova l’acqua o il substrato; usa solo acqua idonea alla coltura alimentare.'),
 S('Afidi del crescione','Insetti','Piccole colonie sui germogli, deformazioni e melata.','Controlla frequentemente gli apici e rimuovi infestanti ospiti.','Asporta i focolai; evita prodotti non espressamente autorizzati per crescione.'),
 S('Carenza di azoto','Carenza nutrizionale','Foglie piccole e pallide e crescita lenta.','Substrato fertile e disponibilità nutritiva costante.','Escludi problemi di acqua e radici prima di integrare nutrienti.')
];
cropSpecific['Valeriana / songino']=[
 S('Oidio del songino','Fungo','Patina bianca farinosa su foglie, con ingiallimento nei casi avanzati.','Distanze adeguate e ventilazione; evita eccessi di umidità sulla chioma.','Rimuovi foglie molto colpite e verifica l’identificazione.'),
 S('Marciume del colletto','Fungo / ristagno','Foglie esterne che collassano e base molle o brunita.','Terreno drenante, semina non fitta e irrigazione moderata.','Rimuovi le piante marce e correggi il drenaggio.'),
 S('Afidi','Insetti','Piccole colonie sui germogli e foglie deformate.','Controllo frequente e tutela degli insetti utili.','Rimuovi i focolai; attenzione a eventuali trattamenti su foglia consumata fresca.')
];
cropSpecific['Scarola']=[
 S('Marciume del cuore della scarola','Fisiopatia e patogeni secondari','Foglie interne acquose e brune, talvolta con odore sgradevole.','Evita ristagni e bagnature prolungate nel cuore.','Rimuovi cespi marci e non consumare tessuti alterati.'),
 S('Afidi della scarola','Insetti','Colonie nascoste tra le foglie interne, melata e arricciamenti.','Controlla il cuore prima della raccolta e favorisci i predatori.','Elimina le foglie infestate e lava accuratamente il prodotto raccolto.'),
 S('Tip burn','Problema fisiologico legato al calcio','Margini delle foglie interne giovani bruni e secchi.','Crescita regolare, irrigazione uniforme e aerazione.','Controlla salinità e radici prima di aggiungere calcio.')
];
cropSpecific['Lattughino da taglio']=[
 S('Peronospora della lattuga','Oomicete','Macchie gialle delimitate dalle nervature e sporulazione chiara sotto le foglie.','Semina arieggiata, varietà resistenti e irrigazione al piede.','Elimina foglie colpite e controlla il resto dell’aiuola.'),
 S('Afidi del lattughino','Insetti','Colonie sui germogli e sulle foglie giovani, arricciamenti e melata.','Reti e controllo regolare degli apici.','Rimuovi le foglie infestate e tutela gli insetti utili.'),
 S('Carenza di azoto','Carenza nutrizionale','Ricacci piccoli, foglie pallide e crescita lenta dopo il taglio.','Concimazione moderata e frazionata, con substrato fertile.','Escludi taglio troppo basso, siccità e ristagno prima di concimare.')
];
cropSpecific['Rapa']=[
 S('Ernia della rapa','Patogeno del terreno','Radici deformate e ingrossate, pianta che appassisce nelle ore calde.','Rotazione lunga, drenaggio e igiene degli attrezzi.','Estirpa le piante colpite e non spostare terra contaminata.'),
 S('Altiche della rapa','Insetti','Forellini numerosi sulle foglie giovani e crescita rallentata della radice.','Reti anti-insetto e controllo delle infestanti brassicacee.','Proteggi le giovani piante con rete.'),
 S('Spaccatura della radice','Problema fisiologico','Radice fessurata dopo alternanza di siccità e abbondante acqua.','Terreno soffice e umidità costante.','Regolarizza irrigazione e raccogli alla dimensione corretta.')
];
cropSpecific['Pastinaca']=[
 S('Maculatura fogliare della pastinaca','Fungo','Macchie brune sulle foglie e disseccamento anticipato della vegetazione.','Rotazione, seme sano e irrigazione al piede.','Rimuovi foglie colpite e residui a fine coltura.'),
 S('Mosca della carota e delle ombrellifere','Insetto','Gallerie brune nelle radici e foglie che possono ingiallire o assumere tonalità violacee.','Reti anti-insetto e rotazione; rimuovi residui di radici.','Estrai e allontana le radici danneggiate e mantieni la rete durante il rischio.'),
 S('Spaccatura delle radici','Problema fisiologico','Radici biforcate o fessurate in terreno compatto o dopo crescita irregolare.','Terreno profondo, soffice e privo di sassi; evita letame fresco.','Prepara bene il letto di semina e mantieni umidità uniforme.')
];
cropSpecific['Scorzonera']=[
 S('Ruggine della scorzonera','Fungo','Pustole arancioni o brune sulle foglie, con disseccamento nei casi intensi.','Rotazione, aerazione e rimozione dei residui.','Elimina le foglie molto colpite e controlla l’evoluzione.'),
 S('Marciume radicale','Patogeni del terreno e ristagno','Radici scure, molli o maleodoranti e foglie che appassiscono.','Terreno profondo e drenante, aiuole rialzate dove necessario.','Estrai le radici marce e correggi drenaggio e irrigazione.'),
 S('Carenza di boro','Carenza di microelemento','Radici con spaccature o alterazioni interne; sintomi non esclusivi.','Umidità regolare e pH equilibrato.','Analisi del terreno prima di apportare boro, per evitare tossicità.')
];
cropSpecific['Topinambur']=[
 S('Sclerotinia del topinambur','Fungo','Marciume del colletto o dei fusti con micelio bianco e corpi neri in condizioni umide.','Distanze, rotazione e rimozione dei residui infetti.','Estirpa le piante gravemente colpite e non compostare i residui.'),
 S('Afidi del topinambur','Insetti','Colonie sui germogli e sotto le foglie, melata e arricciamenti.','Controlla gli apici e tutela coccinelle e sirfidi.','Rimuovi focolai localizzati con metodi meccanici.'),
 S('Marciume dei tuberi','Patogeni e conservazione umida','Tuberi molli, macchiati o maleodoranti dopo raccolta o in terreno saturo.','Terreno drenante e raccolta in condizioni asciutte; conserva in luogo idoneo.','Scarta i tuberi marci e non conservarli insieme a quelli sani.')
];
cropSpecific['Maggiorana']=[
 S('Ruggine della maggiorana','Fungo','Pustole arancio-brune sulle foglie e disseccamento dei rametti.','Sole, aerazione e irrigazione al piede.','Elimina le parti colpite e riduci l’umidità sulla chioma.'),
 S('Cocciniglia','Insetto','Piccoli scudetti sui fusti, melata e ingiallimento.','Controlla i rami interni e mantieni la pianta arieggiata.','Rimuovi manualmente i focolai e pota i rametti infestati.'),
 S('Marciume radicale','Patogeni e ristagno','Foglie ingiallite e radici brune e molli.','Substrato drenante e irrigazioni moderate.','Riduci l’acqua e rinnova il substrato se necessario.')
];
cropSpecific['Melissa']=[
 S('Septoriosi della melissa','Fungo','Macchie brune o grigiastre sulle foglie, talvolta con puntini scuri.','Raccogli foglie infette, arieggia e irriga al piede.','Elimina le foglie colpite e rinnova la vegetazione se l’attacco è forte.'),
 S('Afidi della melissa','Insetti','Colonie sui germogli teneri, foglie arricciate e melata.','Controlla gli apici e favorisci gli insetti utili.','Rimuovi i germogli infestati e lava delicatamente la vegetazione.'),
 S('Oidio della melissa','Fungo','Patina bianca farinosa sulle foglie, più evidente in chiome fitte.','Distanze, potatura di alleggerimento e irrigazione al piede.','Asporta foglie molto colpite e controlla la ventilazione.')
];
cropSpecific['Santoreggia']=[
 S('Marciume radicale della santoreggia','Patogeni e ristagno','Ingiallimento e disseccamento dei rametti con radici scure e molli.','Terreno leggero e drenante, sole e irrigazioni moderate.','Riduci l’acqua e rimuovi le radici marce.'),
 S('Cicaline','Insetti','Punteggiature chiare sulle foglie e piccoli insetti mobili sul retro.','Controlla la pagina inferiore e limita infestanti ospiti.','Rimuovi i germogli molto infestati e tutela gli ausiliari.'),
 S('Oidio','Fungo','Patina bianca farinosa sulle foglie e disseccamento nei casi avanzati.','Aerazione, sole e irrigazione al piede.','Elimina le parti colpite e verifica la diagnosi prima di trattare.')
];

// Esempi di formulati e impieghi riportati da repertori aggiornati a ottobre 2026,
// derivati dalle etichette autorizzate del Ministero. Non sostituiscono l'etichetta vigente.
// Nessun marchio o dosaggio preimpostato: le autorizzazioni cambiano e vanno verificate sull'etichetta vigente.
const officialFitoDb='https://www.salute.gov.it/new/it/banche-dati/banca-dati-dei-prodotti-fitosanitari/';

const allCrops=Object.values(cropGroups).flat().sort((a,b)=>a.localeCompare(b,'it'));
const cropCount=allCrops.length;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function groupFor(crop){return Object.keys(cropGroups).find(k=>cropGroups[k].includes(crop))||'foglia';}
function photoFor(problem){
 const n=(problem.name+' '+problem.kind+' '+problem.symptoms).toLocaleLowerCase('it');
 if(/oidio|mal bianco/.test(n)) return ['oidio.jpg','Foglia con patina bianca tipica dell’oidio'];
 if(/afid|mosca bianca|acari|ragnetto|cimic|insett|altiche|cavolaia|bruco|larv|mosca della/.test(n)) return ['afidi.jpg','Colonia di afidi su un germoglio'];
 if(/carenz|clorosi|ingiall|magnesio|ferro|azoto/.test(n)) return ['carenze.jpg','Foglia con ingiallimento tra le nervature'];
 if(/virus|mosaico/.test(n)) return ['mosaico-peronospora.jpg','Foglia con alterazione cromatica a mosaico'];
 if(/rosur|fori|lumach|chiocciol/.test(n)) return ['bruchi-rosure.jpg','Foglia con rosure da insetti'];
 return ['macchie-fogliari.jpg','Foglia con macchie e necrosi esemplificative'];
}
function diagnosisHint(problem){
 const n=(problem.name+' '+problem.kind).toLocaleLowerCase('it');
 if(/oidio|mal bianco/.test(n)) return 'La patina bianca è superficiale e farinosa. Verifica che non sia polvere, residuo di trattamento o lanugine di altri patogeni; osserva più foglie e l’evoluzione nei giorni successivi.';
 if(/peronospora/.test(n)) return 'Cerca macchie che avanzano rapidamente dopo periodi umidi e, quando presente, una sporulazione sul retro della foglia. Macchie con anelli concentrici fanno pensare anche ad alternariosi.';
 if(/alternar|maculatur/.test(n)) return 'Gli anelli concentrici nelle macchie sono un indizio utile. Danni da sole, spruzzi di terra e altre maculature possono però somigliare: controlla forma, bordo e distribuzione delle lesioni.';
 if(/afid/.test(n)) return 'Controlla gli apici e la pagina inferiore delle foglie: cerca insetti raggruppati, esuvie e melata appiccicosa. L’arricciamento senza insetti può dipendere anche da caldo, acqua o virus.';
 if(/virus|mosaico/.test(n)) return 'Mosaico irregolare, deformazioni e crescita stentata possono far sospettare un virus, ma non lo confermano: carenze, fitotossicità e stress possono produrre sintomi simili. Non esiste un prodotto che risani una pianta virosata.';
 if(/cavolaia|altiche|bruco|larv|rosur|fori/.test(n)) return 'Osserva il tipo di foro, la presenza di larve, uova ed escrementi. Fori piccoli e numerosi possono essere da altiche; rosure ampie e irregolari spesso indicano bruchi o molluschi.';
 if(/marci|botrite|muffa grigia|colletto/.test(n)) return 'Controlla se il tessuto è molle, umido e brunito e se il problema parte dal colletto o da ferite. Ristagno idrico e danni meccanici possono favorire marciumi diversi.';
 if(/mosca|minator/.test(n)) return 'Cerca larve, gallerie o punture di ovideposizione. Prima di intervenire verifica che il danno sia attivo e identifica la coltura e l’organo colpito.';
 if(/ruggine/.test(n)) return 'Le pustole arancioni o brune in rilievo sono un indizio caratteristico. Sfregando delicatamente può restare una polvere colorata; non confonderle con macchie piatte.';
 if(/ernia/.test(n)) return 'Estrai con cautela una pianta molto compromessa e osserva le radici: ingrossamenti deformi a clava sono un indizio importante. Appassimento da siccità o ristagno non produce queste deformazioni.';
 return 'Confronta più piante e più foglie: annota se il sintomo inizia sulle foglie giovani o vecchie, se è localizzato o diffuso e se peggiora dopo pioggia, caldo o irrigazione. Un singolo sintomo non basta per una diagnosi certa.';
}
function hobbyProducts(problem,crop){
 const n=(problem.name+' '+problem.kind+' '+problem.symptoms).toLocaleLowerCase('it');
 let title='Intervento mirato',detail='',active='',first='';
 if(/virus|mosaico|virosi/.test(n)){
  title='Nessun prodotto curativo';
  detail='Non esiste un trattamento che guarisca una pianta infetta da virus. Fungicidi, rame e concimi non eliminano il virus. Se la diagnosi è attendibile, estirpa la pianta intera, mettila in un sacco e non usarla per compost o talee.';
  first='Per prevenire nuove infezioni: piantine certificate, eliminazione delle infestanti ospiti e controllo degli afidi con reti e monitoraggio. Un insetticida non impedisce sempre la trasmissione del virus.';
 }else if(/carenz|nutriz|clorosi|ferro|magnesio|azoto|potassio|boro|calcio|fosforo|molibdeno|zolfo/.test(n)){
  title='Correttivo nutrizionale, solo dopo verifica';
  detail='Non usare un fitosanitario: serve eventualmente un fertilizzante. Prima controlla drenaggio, pH, irrigazione e radici; i sintomi possono imitare una carenza. Se confermata, scegli un concime con l’elemento indicato (per esempio ferro chelato per carenza di ferro confermata, magnesio per carenza di magnesio), ammesso per la coltura e applicato secondo etichetta.';
  first='Non distribuire boro o microelementi “per prova”: tra dose utile e dose tossica il margine può essere ridotto. Per marciume apicale non aggiungere automaticamente calcio: regolarizza prima l’acqua.';
 }else if(/lumach|chiocciol|limac/.test(n)){
  title='Esca lumachicida e barriere';
  detail='Prima scelta: raccolta serale, tavole-rifugio da controllare al mattino, protezione delle giovani piantine e irrigazione al mattino. Se il danno continua, cerca un’esca a base di fosfato ferrico solo se l’etichetta PFnPE autorizza espressamente la coltura e le limacce/chiocciole. Distribuiscila come da etichetta, mai a mucchietti vicino ai raccolti.';
  first='Non usare sale, candeggina o birra come trattamento: possono danneggiare suolo e organismi utili e non sono una difesa affidabile.';
 }else if(/bruco|larv|cavolaia|nottua|piralide|tignola/.test(n)){
  title='Trattamento specifico contro larve';
  detail='Raccogli uova e larve a mano e proteggi la coltura con rete anti-insetto a maglia adeguata. Se le larve sono piccole e l’attacco è confermato, chiedi se esiste un formulato PFnPE a base di Bacillus thuringiensis subsp. kurstaki autorizzato proprio su '+esc(crop)+' contro quella larva. È selettivo soprattutto sulle larve giovani: non è un prodotto generico contro tutti gli insetti.';
  first='Non trattare se trovi solo fori vecchi e nessuna larva attiva. Evita applicazioni sui fiori frequentati dagli impollinatori.';
 }else if(/afid|mosca bianca|cicalin|tripid|cimic|insett|altiche|mosca della/.test(n)){
  title='Trattamento contro insetti succhiatori o masticatori';
  detail='Per piccoli focolai: elimina gli apici molto infestati o lava la pagina inferiore con acqua, se la coltura lo tollera. Per afidi o aleurodidi puoi chiedere un prodotto PFnPE a base di sali potassici di acidi grassi (sapone molle/insetticida), ma solo se etichetta e autorizzazione comprendono '+esc(crop)+' e l’insetto identificato. Bagnare bene la colonia è essenziale; non improvvisare dosi o miscele.';
  first='Per altiche e mosche delle radici la protezione preventiva con rete è spesso più utile di un trattamento dopo che il danno è avvenuto. Trappole cromotropiche servono soprattutto per monitorare, non risolvono da sole l’infestazione.';
 }else if(/ragnetto|acaro/.test(n)){
  title='Gestione degli acari';
  detail='Con infestazione iniziale, lava delicatamente la pagina inferiore e rimuovi le foglie più compromesse; riduci polvere e stress idrico. Se serve un acaricida, deve essere PFnPE e riportare in etichetta '+esc(crop)+' e l’acaro indicato. Non usare un comune insetticida: può non funzionare sugli acari e danneggiare i predatori.';
  first='Controlla con lente il retro delle foglie e verifica la presenza di acari vivi o ragnatele prima di trattare.';
 }else if(/oidio|mal bianco/.test(n)){
  title='Fungicida specifico per oidio';
  detail='Riduci la vegetazione troppo fitta e asporta le foglie molto colpite. Se l’infezione progredisce, chiedi un fungicida PFnPE a base di zolfo soltanto se l’etichetta vigente autorizza '+esc(crop)+' contro oidio. Lo zolfo può causare fitotossicità con temperature elevate e non va associato ad oli: rispetta gli intervalli riportati in etichetta.';
  first='Non usare zolfo “a prescindere”: verifica che la patina sia davvero oidio e controlla temperature e avvertenze in etichetta.';
 }else if(/peronospora|alternar|antracn|ruggine|botrite|muffa|fung|cladospor|cercospor/.test(n)){
  title='Fungicida: serve identificare bene il patogeno';
  detail='Rimuovi le parti infette, evita di bagnare le foglie e migliora l’aerazione. Per alcune malattie fungine/oomicetiche possono esistere prodotti rameici o altri fungicidi, ma non sono intercambiabili: chiedi un PFnPE la cui etichetta riporti insieme '+esc(crop)+', la malattia precisa e l’impiego ammesso. Il rame è soprattutto preventivo, non risana i tessuti già infetti e può essere fitotossico.';
  first='Non spruzzare rame su qualunque macchia: alternariosi, botrite, ruggine e peronospora richiedono valutazioni diverse. Se il problema è già esteso, chiedi conferma a un tecnico o al servizio fitosanitario regionale.';
 }else{
  title='Prima confermare la causa';
  detail='Non c’è un prodotto universale per questa avversità. Fotografa la pianta, controlla il retro delle foglie e verifica se il danno è ancora attivo. Se serve un trattamento, chiedi un PFnPE che riporti espressamente '+esc(crop)+' e il nome dell’avversità in etichetta.';
  first='Se non esiste un prodotto autorizzato per quella combinazione coltura/avversità, non sostituirlo con un prodotto per un’altra coltura.';
 }
 return `<section class="health-products"><p class="health-section-label">🧴 Cosa usare nell’orto hobbistico</p><p><strong>${title}</strong></p><p>${detail}</p><p><strong>Prima di trattare:</strong> ${first}</p><p class="tip">Usa soltanto prodotti destinati all’orto domestico e attieniti alle istruzioni della confezione. Evita miscele improvvisate e trattamenti inutili.</p></section>`;
}

function treatmentStoreKey(crop,problem){return 'orto20_treatments_'+crop+'_'+problem;}
function readTreatments(crop,problem){
 try{const v=JSON.parse(localStorage.getItem(treatmentStoreKey(crop,problem))||'[]');return Array.isArray(v)?v:[];}catch(e){return [];}
}
function treatmentManager(problem,crop){
 const items=readTreatments(crop,problem.name);
 const rows=items.map((t,i)=>`<div class="health-treatment-item"><div class="health-treatment-title">${esc(t.name||'Fitofarmaco senza nome')}</div>
 ${t.active?`<p><strong>Principio attivo:</strong> ${esc(t.active)}</p>`:''}
 ${t.dose?`<p><strong>Dose:</strong> ${esc(t.dose)}</p>`:''}
 ${t.phi?`<p><strong>Tempo di carenza:</strong> ${esc(t.phi)} giorni</p>`:''}
 ${t.max?`<p><strong>Massimo trattamenti:</strong> ${esc(t.max)}</p>`:''}
 ${t.interval?`<p><strong>Intervallo:</strong> ${esc(t.interval)}</p>`:''}
 ${t.notes?`<p><strong>Note:</strong> ${esc(t.notes)}</p>`:''}
 <div class="health-treatment-actions"><button type="button" data-treatment-edit="${i}">Modifica</button><button type="button" data-treatment-delete="${i}">Elimina</button></div></div>`).join('');
 return `<section class="health-user-treatments" data-crop="${esc(crop)}" data-problem="${esc(problem.name)}">
 <p class="health-section-label">📝 I miei fitofarmaci</p>
 ${rows||'<p class="tip">Non hai ancora inserito fitofarmaci per questa malattia.</p>'}
 <button type="button" class="health-add-treatment" data-treatment-add>＋ Aggiungi fitofarmaco</button>
 <div class="health-treatment-form" hidden>
 <label>Nome commerciale<input data-field="name" type="text" placeholder="Nome del prodotto"></label>
 <label>Principio attivo<input data-field="active" type="text" placeholder="Principio attivo"></label>
 <label>Dose precisa e unità<input data-field="dose" type="text" placeholder="Es. ml/L o g/10 L"></label>
 <label>Tempo di carenza (giorni)<input data-field="phi" type="number" min="0" step="1" placeholder="Giorni"></label>
 <label>Numero massimo di trattamenti<input data-field="max" type="text" placeholder="Numero massimo"></label>
 <label>Intervallo tra trattamenti<input data-field="interval" type="text" placeholder="Es. 7–10 giorni"></label>
 <label>Note personali<textarea data-field="notes" rows="2" placeholder="Annotazioni, limitazioni, data di verifica..."></textarea></label>
 <div class="health-treatment-actions"><button type="button" data-treatment-save>Salva</button><button type="button" data-treatment-cancel>Annulla</button></div>
 </div></section>`;
}
function handleTreatmentClick(event){
 const btn=event.target.closest('button');if(!btn)return;
 const panel=btn.closest('.health-user-treatments');if(!panel)return;
 const crop=panel.dataset.crop,problem=panel.dataset.problem,key=treatmentStoreKey(crop,problem);
 let items=readTreatments(crop,problem);
 const form=panel.querySelector('.health-treatment-form');
 if(btn.hasAttribute('data-treatment-add')){form.hidden=false;form.dataset.editIndex='';form.querySelectorAll('[data-field]').forEach(el=>el.value='');form.querySelector('[data-field="name"]').focus();return;}
 if(btn.hasAttribute('data-treatment-cancel')){form.hidden=true;return;}
 if(btn.hasAttribute('data-treatment-edit')){
  const i=Number(btn.dataset.treatmentEdit),t=items[i];if(!t)return;
  form.hidden=false;form.dataset.editIndex=String(i);
  form.querySelectorAll('[data-field]').forEach(el=>el.value=t[el.dataset.field]||'');
  form.scrollIntoView({behavior:'smooth',block:'nearest'});return;
 }
 if(btn.hasAttribute('data-treatment-delete')){
  const i=Number(btn.dataset.treatmentDelete);if(!Number.isInteger(i)||!items[i])return;
  if(!confirm('Vuoi eliminare questo fitofarmaco?'))return;
  items.splice(i,1);localStorage.setItem(key,JSON.stringify(items));render(crop);return;
 }
 if(btn.hasAttribute('data-treatment-save')){
  const t={};form.querySelectorAll('[data-field]').forEach(el=>t[el.dataset.field]=el.value.trim());
  if(!t.name){alert('Inserisci il nome commerciale del fitofarmaco.');return;}
  const idx=form.dataset.editIndex;
  if(idx!==''&&Number.isInteger(Number(idx))&&items[Number(idx)])items[Number(idx)]=t;else items.push(t);
  try{localStorage.setItem(key,JSON.stringify(items));}catch(e){alert('Impossibile salvare i dati sul dispositivo.');return;}
  render(crop);
 }
}

function makeDiseaseCard(problem,i,crop){
 const [photo,alt]=photoFor(problem);
 const productHtml=hobbyProducts(problem,crop)+treatmentManager(problem,crop);
 return `<article class="health-disease"><div class="health-disease-grid"><img class="health-photo-static" src="${photo}" alt="${esc(alt)}" loading="lazy"><div><h3>${esc(problem.name)}</h3><span class="health-tag">${esc(problem.kind)}</span>${problem.risk?`<span class="health-tag">${esc(problem.risk)}</span>`:''}</div></div><p class="health-section-label">🔎 Diagnosi: come riconoscerla</p><p>${esc(problem.symptoms)}</p><div class="health-diagnosis-hint"><strong>Controllo pratico:</strong> ${esc(diagnosisHint(problem))}</div><p class="health-section-label">🛡️ Prevenzione</p><p>${esc(problem.prevention)}</p><p class="health-section-label">🧤 Cosa fare subito</p><p>${esc(problem.action)}</p>${productHtml}<p class="tip">Foto statica esemplificativa: mostra un sintomo simile, non è una conferma diagnostica della singola malattia.</p></article>`;
}
function render(crop){
 const box=document.getElementById('healthDetails');if(!box)return;
 const key=groupFor(crop),g=groups[key];
 const specific=cropSpecific[crop]||[];
 const combined=[...specific,...g.problems];
 const cropSlug={"Aglio": "aglio", "Asparago": "asparago", "Anguria": "anguria", "Cetriolo": "cetriolo", "Cipolla": "cipolla", "Fragola": "fragola", "Lattuga": "lattuga", "Patata": "patata", "Peperone": "peperone", "Pisello": "pisello", "Pomodoro": "pomodoro", "Melone": "melone", "Zucca": "zucca", "Zucchina": "zucchino"}[crop];
 const cropProductsUrl=cropSlug?`https://agrogps.eu/it/tempi-di-carenza/coltura/${cropSlug}/`:'https://agrogps.eu/it/tempi-di-carenza/coltura/';
 box.innerHTML=`<div class="card"><h2>${esc(crop)} · malattie e avversità</h2><p class="tip">Schede pratiche per riconoscere i sintomi e scegliere interventi adatti all’orto familiare. Le immagini sono fotografie statiche esemplificative: confronta sempre più sintomi e non considerarle una diagnosi certa.</p></div>`+`<div class=\"health-catalog-count\">${combined.length} schede disponibili · ${specific.length} specifiche per ${esc(crop)} e ${g.problems.length} problemi comuni della famiglia</div>`+combined.map((p,i)=>makeDiseaseCard(p,i,crop)).join('');
}
function init(){
 const style=document.createElement('style');style.textContent="\n.health-catalog-count{margin:10px 2px;padding:9px 12px;border-radius:10px;background:#edf5e9;color:#355b3c;font-weight:700;font-size:.9rem}\n.health-products{margin-top:14px;padding:12px;border:1px solid #b8c9a8;border-radius:12px;background:#f6f9f2}\n.health-products a{font-weight:700;text-decoration:underline}\n.health-photo-static{width:88px;height:88px;object-fit:cover;border-radius:13px;border:1px solid #d7e2d2;box-shadow:0 2px 7px rgba(0,0,0,.08)}\n.health-disease-grid{display:grid;grid-template-columns:88px 1fr;gap:12px;align-items:center}\n.health-diagnosis-hint{padding:10px 12px;margin:8px 0;border-left:3px solid #78a66b;background:#f3f8f0;border-radius:7px;line-height:1.5;font-size:.94rem}\n.health-user-treatments{margin-top:12px;padding:12px;border:1px solid #b8c9a8;border-radius:12px;background:#fff}\n.health-treatment-item{padding:10px;margin:8px 0;border-radius:9px;background:#f4f7f1;border:1px solid #dce6d5}\n.health-treatment-title{font-weight:800;font-size:1rem;margin-bottom:6px}\n.health-treatment-item p{margin:4px 0}\n.health-treatment-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:9px}\n.health-treatment-actions button,.health-add-treatment{border:0;border-radius:9px;padding:10px 13px;background:#e3eddd;color:#294b2c;font-weight:700;min-height:40px}\n.health-treatment-actions button[data-treatment-delete]{background:#f7e8e5;color:#853d32}\n.health-treatment-form{display:grid;gap:9px;margin-top:12px;padding:12px;border-radius:10px;background:#f5f8f2}\n.health-treatment-form[hidden]{display:none}\n.health-treatment-form label{display:grid;gap:4px;font-size:.9rem;font-weight:700}\n.health-treatment-form input,.health-treatment-form textarea{width:100%;box-sizing:border-box;padding:11px;border:1px solid #c8d3c1;border-radius:8px;background:white;color:#243126;font:inherit;font-weight:400}\n@media(max-width:520px){.health-photo-static{width:76px;height:76px}.health-disease-grid{grid-template-columns:76px 1fr}}\n";document.head.append(style);
 const select=document.getElementById('healthCrop'),search=document.getElementById('healthSearch'),chips=document.getElementById('healthCropList');
 if(!select||!search||!chips)return;
 const healthBox=document.getElementById('healthDetails');if(healthBox&&!healthBox.dataset.treatmentBound){healthBox.addEventListener('click',handleTreatmentClick);healthBox.dataset.treatmentBound='1';}
 select.innerHTML=allCrops.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
 const drawChips=(q='')=>{
  chips.innerHTML='';
  allCrops.filter(c=>c.toLocaleLowerCase('it').includes(q)).slice(0,18).forEach(c=>{
   const b=document.createElement('button');b.type='button';b.className='health-chip';b.textContent=c;b.addEventListener('click',()=>{select.value=c;render(c);});chips.append(b);
  });
 };
 select.addEventListener('change',()=>render(select.value));
 search.addEventListener('input',()=>{const q=search.value.trim().toLocaleLowerCase('it');drawChips(q);const match=allCrops.find(c=>c.toLocaleLowerCase('it')===q);if(match){select.value=match;render(match);}else if(q){const specificCrop=Object.keys(cropSpecific).find(c=>(cropSpecific[c]||[]).some(p=>p.name.toLocaleLowerCase('it').includes(q)));if(specificCrop){select.value=specificCrop;render(specificCrop);}else{const gmatch=Object.values(groups).some(g=>g.problems.some(p=>p.name.toLocaleLowerCase('it').includes(q)));if(gmatch){const pgroup=Object.keys(groups).find(k=>groups[k].problems.some(p=>p.name.toLocaleLowerCase('it').includes(q)));const c=cropGroups[pgroup][0];select.value=c;render(c);}}}});
 drawChips();render(allCrops[0]);
 const count=document.createElement('p');count.className='tip';count.textContent=`Guida disponibile per ${cropCount} colture del catalogo ORTO 2.0.`;chips.parentNode.insertBefore(count,chips);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
