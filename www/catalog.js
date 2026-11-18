/* ORTO 2.0 - schede orticole di riferimento.
   Calendari indicativi per Nord Italia; adattare a quota, microclima e varietà. */
'use strict';
const gardenCrops = [
['Aglio','bulbo','ott-nov;feb-mar','2-3 cm','10 x 25 cm','Terreno sciolto e drenato; spicchi con punta in alto.','Moderata; riduci quando le foglie ingialliscono.','giu-lug'],
['Asparago','perenne','mar-apr (zampe)','15-20 cm (zampe)','30-40 x 120-150 cm','Impianto con zampe in trincea; coltura pluriennale.','Regolare nel primo anno, poi durante siccità.','apr-giu'],
['Basilico','aromatica','mar-mag protetta; mag-set trapianto','0,5 cm','25-30 cm','Semina superficiale al caldo; trapianta senza freddo.','Frequente ma senza ristagno; terreno appena umido.','mag-ott'],
['Barbabietola','radice','mar-lug','2 cm','8-12 x 25-30 cm','Semina diretta; dirada le piantine.','Regolare e uniforme per radici tenere.','giu-ott'],
['Bietola da coste','foglia','mar-ago','2-3 cm','25-35 x 35-40 cm','Semina diretta a postarelle o in file.','Regolare, soprattutto dopo i tagli.','mag-nov'],
['Broccolo','cavolo','giu-ago in semenzaio','0,5-1 cm','45-60 x 60-70 cm','Trapianta piantine robuste in terreno fertile.','Costante durante formazione delle teste.','ott-mar'],
['Cavolfiore','cavolo','giu-ago in semenzaio','0,5-1 cm','50-60 x 60-70 cm','Trapianta con 4-5 foglie vere; terreno ricco.','Regolare; gli sbalzi idrici penalizzano la testa.','ott-mar'],
['Cavolo cappuccio','cavolo','feb-apr; giu-lug','0,5-1 cm','40-50 x 50-60 cm','Semenzaio e successivo trapianto.','Regolare, senza alternare secco e ristagno.','mag-dic'],
['Cavolo nero','cavolo','mag-lug','0,5-1 cm','50 x 60 cm','Semenzaio, poi trapianto in terreno fertile.','Regolare durante crescita; pacciamatura utile.','ott-mar'],
['Cavolo rapa','cavolo','mar-giu; ago','1 cm','25-30 x 30 cm','Semina in file o trapianta giovane; raccogli tenero.','Uniforme per evitare fusti fibrosi.','mag-nov'],
['Cetriolo','cucurbitacea','apr-mag protetta; mag-giu diretta','2-3 cm','80-100 x 100-150 cm','Semina a postarelle in terreno caldo; sostegno possibile.','Elevata e regolare in produzione; foglie asciutte.','giu-set'],
['Cicoria','foglia','giu-set (varietà da radice anche primavera)','1 cm','20-30 x 30 cm','Semina diretta e dirada.','Moderata e costante per foglie tenere.','ago-inverno'],
['Cipolla','bulbo','feb-mar; ago-set (varietà)','1-2 cm','8-12 x 25-30 cm','Seme in file o bulbilli; scegli varietà adatte al fotoperiodo.','Moderata; sospendi/riduci a maturazione.','giu-ago'],
['Cime di rapa','foglia','lug-ott','1-2 cm','15-25 x 30 cm','Semina diretta scalare.','Regolare, specialmente dopo emergenza.','set-feb'],
['Fagiolino','legume','mag-lug','3-4 cm','10-15 x 40-50 cm','Semina diretta solo con terreno caldo.','Regolare in fioritura e formazione dei baccelli.','lug-ott'],
['Fagiolo rampicante','legume','mag-giu','3-4 cm','20-30 cm sulla fila; tutori','Semina diretta vicino ai sostegni.','Regolare in fioritura e ingrossamento baccelli.','lug-ott'],
['Fagiolo nano','legume','mag-lug','3-4 cm','10-15 x 40 cm','Semina diretta a file.','Regolare in fioritura; evita ristagno.','lug-ott'],
['Fava','legume','ott-nov; feb-mar','4-6 cm','20-25 x 50-60 cm','Semina diretta; in zone fredde preferisci fine inverno.','Di solito contenuta; irriga se siccità in fioritura.','apr-giu'],
['Finocchio','ortaggio da costa','giu-ago','1 cm','20-25 x 40-50 cm','Semenzaio o semina diretta; rincalza con cautela.','Costante: il secco favorisce montata a seme.','set-dic'],
['Indivia riccia','foglia','giu-ago','0,5-1 cm','30 x 35 cm','Semenzaio e trapianto; imbianchimento solo se desiderato.','Regolare, senza bagnare eccessivamente il cuore.','set-dic'],
['Lattuga','foglia','feb-apr; ago-ott','0,5 cm','25-30 x 30 cm','Semenzaio o semina diretta; scegli varietà stagionali.','Frequente e leggera in estate, senza ristagni.','apr-nov'],
['Melanzana','solanacea','feb-mar protetta','0,5 cm','50-60 x 70-80 cm','Semenzaio caldo; trapianta dopo freddo e terreno caldo.','Regolare e abbondante in fioritura/fruttificazione.','lug-ott'],
['Melone','cucurbitacea','apr-mag','2-3 cm','80-100 x 150-200 cm','Semina a postarelle o trapianta zolletta in caldo.','Regolare all’inizio; modera vicino alla maturazione.','lug-set'],
['Patata','tubero','mar-apr','10-15 cm (tubero)','30-40 x 60-75 cm','Pianta tuberi-seme germogliati; rincalza.','Costante durante tuberizzazione; evita ristagno.','giu-set'],
['Peperone','solanacea','feb-mar protetta','0,5 cm','40-50 x 60-70 cm','Semenzaio caldo; trapianta dopo rischio gelate.','Regolare; sbalzi favoriscono problemi ai frutti.','lug-ott'],
['Peperoncino','solanacea','feb-mar protetta','0,5 cm','35-50 x 50-60 cm','Semenzaio caldo; trapianto in posizione soleggiata.','Regolare ma lascia asciugare leggermente la superficie.','ago-ott'],
['Pisello','legume','feb-apr; ott-nov','3-5 cm','5-8 x 30-40 cm','Semina diretta in terreno lavorabile; rete per varietà alte.','Moderata; importante in fioritura e riempimento.','mag-giu'],
['Pomodoro','solanacea','feb-mar protetta','0,5 cm','40-60 x 70-100 cm','Semenzaio caldo; trapianta dopo gelate con suolo tiepido.','Profonda e regolare alla base; evita bagnature fogliari.','giu-ott'],
['Porro','allium','feb-apr; giu-lug','0,5-1 cm','10-15 x 30-40 cm','Semenzaio e trapianto in solchi; rincalza gradualmente.','Regolare durante ingrossamento del fusto.','set-mar'],
['Prezzemolo','aromatica','feb-ott','0,5-1 cm','15-20 x 25 cm','Semina diretta; germinazione lenta, mantieni umido.','Costante in estate, senza ristagni.','tutto l’anno'],
['Rapa','radice','mar-mag; ago-set','1-2 cm','10-15 x 25-30 cm','Semina diretta e dirada presto.','Regolare per radici dolci e non fibrose.','mag-nov'],
['Ravanello','radice','feb-mag; set-ott','1 cm','3-5 x 15-20 cm','Semina diretta scalare; non seminare troppo fitto.','Regolare: alternanza secco-umido causa spaccature.','mar-giu; set-nov'],
['Rucola','foglia','mar-ott','0,5-1 cm','5-10 x 15-20 cm','Semina diretta scalare; mezz’ombra nei mesi caldi.','Moderata e frequente per foglie meno piccanti.','apr-nov'],
['Scalogno','bulbo','feb-mar; ott-nov','2-3 cm','15 x 25-30 cm','Pianta bulbilli con apice appena visibile.','Moderata; riduci quando le foglie seccano.','giu-lug'],
['Sedano','costa','feb-apr in semenzaio','superficiale','25-30 x 40-50 cm','Semenzaio lungo; trapianta con clima mite.','Elevata e costante: non tollera siccità prolungata.','ago-nov'],
['Spinacio','foglia','feb-apr; set-nov','2-3 cm','8-10 x 20-25 cm','Semina diretta; preferisce clima fresco.','Regolare, senza ristagno; caldo e secco inducono montata.','apr-mag; ott-mar'],
['Zucca','cucurbitacea','apr-mag','2-3 cm','100-150 x 150-200 cm','Semina a postarelle in terreno caldo e ricco.','Regolare durante sviluppo frutti; modera a maturazione.','set-ott'],
['Zucchina','cucurbitacea','apr-lug','2-3 cm','80-100 x 100-120 cm','Semina a postarelle o trapianta in terreno caldo.','Abbastanza elevata e regolare durante raccolta.','giu-ott'],
['Anguria','cucurbitacea','apr-mag','2-3 cm','100-150 x 180-250 cm','Semina o trapianto solo con terreno ben caldo.','Regolare in accrescimento; modera a maturazione.','lug-set'],
['Carciofo','perenne','mar-apr (carducci/ovuli)','10-15 cm (ovuli)','80-100 x 100-120 cm','Impianto con carducci o ovuli; spazio e terreno profondo.','Regolare in estate asciutta, senza ristagno in inverno.','ott-mag'],
['Carota','radice','mar-giu; ago-set','0,5-1 cm','3-5 x 25-30 cm','Semina diretta in letto fine; dirada senza danneggiare radici.','Umidità uniforme in germinazione e ingrossamento.','giu-dic'],
['Cavolo di Bruxelles','cavolo','mag-giu','0,5-1 cm','60 x 70 cm','Semenzaio e trapianto; richiede stagione lunga e fresca.','Regolare durante formazione dei germogli.','nov-mar'],
['Cavolo verza','cavolo','giu-ago','0,5-1 cm','50-60 x 60 cm','Semenzaio e trapianto in terreno fertile.','Costante durante formazione del cespo.','ott-mar'],
['Cavolo cinese','cavolo','lug-set','0,5-1 cm','30-40 x 40-50 cm','Meglio semina di fine estate per ridurre prefioritura.','Regolare e uniforme.','ott-dic'],
['Catalogna','foglia','giu-ago','1 cm','25 x 30 cm','Semina diretta; dirada.','Moderata e regolare.','set-inverno'],
['Crescione','foglia','mar-ott','0,5 cm','10 x 15 cm','Terreno sempre fresco; in vaso con sottovaso gestito.','Molto costante: non lasciare asciugare.','apr-nov'],
['Erba cipollina','aromatica','mar-mag','0,5 cm','20 x 25 cm','Semina o divisione dei cespi.','Moderata; più frequente in vaso e caldo.','apr-ott'],
['Lenticchia','legume','feb-mar; ott-nov mite','2-3 cm','4-6 x 20-25 cm','Semina diretta; adatta a suoli drenanti.','Limitata; evita eccessi, utile acqua in fioritura se siccità.','giu-lug'],
['Mais dolce','graminacea','apr-giu','3-4 cm','25-30 x 60-70 cm','Semina a blocchi per favorire impollinazione.','Regolare in fioritura e riempimento pannocchie.','ago-set'],
['Origano','aromatica','mar-mag','superficiale','25-30 x 30 cm','Semina superficiale o trapianto; pieno sole e drenaggio.','Bassa dopo attecchimento; teme ristagno.','giu-set'],
['Rabarbaro','perenne','mar-apr (divisione)','rizoma 3-5 cm','80-100 x 100 cm','Meglio divisione di cespi; terreno ricco e fresco.','Regolare in estate, soprattutto in suoli leggeri.','apr-giu'],
['Rosmarino','aromatica','apr-giu (talea/trapianto)','talea 5-8 cm','60-100 cm','Preferibile talea o piantina; terreno molto drenante.','Scarsa dopo attecchimento; lascia asciugare.','tutto l’anno'],
['Salvia','aromatica','mar-mag (seme/talea)','0,5 cm','40-50 cm','Semina o talea; sole e terreno drenante.','Moderata-bassa; evitare ristagni.','tutto l’anno'],
['Valeriana / songino','foglia','ago-ott','0,5-1 cm','5-10 x 15 cm','Semina diretta di fine estate; copri poco il seme.','Regolare durante germinazione e crescita.','ott-mar'],
['Radicchio','foglia','mag-ago','0,5-1 cm','25-30 x 30 cm','Semina in semenzaio o direttamente; scegli varietà precoci o tardive in base alla stagione.','Regolare, senza ristagni; il fresco favorisce la qualità.','set-feb'],
['Scarola','foglia','giu-ago','0,5-1 cm','30 x 35 cm','Semina in semenzaio o diretta; trapianta quando le piantine sono robuste.','Regolare e uniforme.','set-dic'],
['Lattughino da taglio','foglia','feb-mag; set-ott','0,5 cm','seminare fitto a file','Semina diretta scalare; raccogli le foglie esterne o taglia sopra il colletto.','Leggera e frequente, soprattutto in vaso.','mar-giu; ott-dic'],
['Cavolo rosso','cavolo','feb-apr; giu-lug in semenzaio','0,5-1 cm','40-50 x 50-60 cm','Semenzaio e trapianto con 4-5 foglie vere.','Costante durante la formazione del cespo.','set-mar'],
['Cavolo romanesco','cavolo','giu-lug in semenzaio','0,5-1 cm','50-60 x 60-70 cm','Semenzaio estivo e trapianto in terreno fertile; proteggi dal caldo intenso.','Regolare, evitando stress idrici.','nov-feb'],
['Pak choi','cavolo','mar-mag; ago-ott','0,5-1 cm','25-30 x 30 cm','Semina diretta o in alveolo; preferisce temperature fresche.','Regolare; raccogli prima della montata a seme.','apr-giu; set-dic'],
['Mizuna','foglia','mar-mag; ago-ott','0,5 cm','15-20 x 20 cm','Semina diretta scalare; adatta anche a coltivazione in vaso.','Regolare, senza ristagni.','apr-giu; set-dic'],
['Senape da foglia','foglia','mar-mag; ago-ott','0,5-1 cm','15-25 x 25 cm','Semina diretta; scegli varietà adatte al consumo fresco.','Regolare per foglie tenere.','apr-giu; set-dic'],
['Ceci','legume','feb-apr','3-5 cm','10-15 x 40-50 cm','Semina diretta in terreno drenante; evita ristagni e terreni troppo fertili.','Contenuta; irriga in fioritura solo se necessario.','giu-ago'],
['Cicerchia','legume','feb-mar; ott-nov mite','3-5 cm','10-15 x 40 cm','Semina diretta; coltura rustica, preferisce terreni ben drenati.','Bassa dopo attecchimento; evita ristagni.','giu-lug'],
['Taccola','legume','feb-apr; ott-nov mite','3-5 cm','5-8 x 30-40 cm','Semina diretta e predisponi una rete o un sostegno.','Moderata, soprattutto in fioritura e formazione dei baccelli.','mag-giu'],
['Fagiolo borlotto','legume','mag-lug','3-4 cm','10-15 x 40-50 cm','Semina diretta con terreno caldo; disponibile nano o rampicante.','Regolare in fioritura e ingrossamento dei baccelli.','lug-ott'],
['Edamame (soia da orto)','legume','mag-giu','2-3 cm','10-15 x 40 cm','Semina diretta in terreno caldo e posizione soleggiata.','Regolare durante fioritura e riempimento dei baccelli.','ago-set'],
['Pastinaca','radice','mar-mag','1-2 cm','8-10 x 30 cm','Semina diretta in terreno profondo, fine e senza sassi; germinazione lenta.','Regolare nelle prime fasi e durante l’ingrossamento.','ott-feb'],
['Scorzonera','radice','mar-apr; set-ott','2 cm','8-10 x 30 cm','Semina diretta in terreno profondo e sciolto.','Regolare, evitando alternanza secco-umido.','ott-mar'],
['Topinambur','tubero','mar-apr','10-15 cm (tubero)','40-50 x 70-80 cm','Pianta tuberi sani in piena terra; può diventare invadente.','Moderata; più regolare durante siccità prolungata.','ott-mar'],
['Patata dolce','tubero','apr-giu (trapianto di talee radicate)','talea radicata','30-40 x 80-100 cm','Trapianta piantine radicate solo con terreno caldo e senza rischio di freddo.','Regolare all’attecchimento e durante ingrossamento dei tuberi.','set-ott'],
['Fragola','frutto','feb-mar; ago-ott (piantine)','corona a livello del suolo','25-35 x 40-50 cm','Impianto con piantine o stoloni certificati; non interrare il colletto.','Regolare, evitando di bagnare il cuore.','apr-giu'],
['Zafferano','bulbo','ago-set (cormi)','10-15 cm (cormi)','10-15 x 20 cm','Pianta i cormi in terreno molto drenante; evita ristagni.','Scarsa; irriga solo se il terreno resta asciutto a lungo.','ott-nov'],
['Aneto','aromatica','mar-giu; set','superficiale','20-25 x 25 cm','Semina diretta; non ama il trapianto eccessivo.','Moderata; evita ristagni.','giu-set'],
['Coriandolo','aromatica','mar-mag; set-ott','1-2 cm','15-20 x 25 cm','Semina diretta scalare; il caldo accelera la fioritura.','Moderata e regolare.','mag-lug; set-nov'],
['Timo','aromatica','mar-mag (seme/talea)','superficiale','25-30 x 30 cm','Semina superficiale o trapianto di piantine; terreno drenante.','Bassa dopo attecchimento.','mag-set'],
['Maggiorana','aromatica','mar-mag protetta; mag-giu trapianto','superficiale','20-30 x 30 cm','Semenzaio al caldo o piantina; trapianta con temperature miti.','Moderata, senza ristagno.','giu-set'],
['Melissa','aromatica','mar-mag protetta; mag-giu trapianto','superficiale','30-40 x 40 cm','Semenzaio o divisione dei cespi; gradisce mezz’ombra nei climi caldi.','Regolare, soprattutto in estate.','mag-ott'],
['Santoreggia','aromatica','mar-mag','superficiale','20-25 x 25 cm','Semina superficiale o trapianto; predilige sole e drenaggio.','Moderata-bassa.','giu-set'],
['Finocchietto selvatico','aromatica','mar-apr; set-ott','1 cm','30-40 x 40 cm','Semina diretta o trapianto di giovani piantine; lascia spazio ai cespi.','Moderata; evita ristagni.','giu-ott'],
['Cavolo cappuccio primaverile','cavolo','ago-ott in semenzaio','0,5-1 cm','40-50 x 50-60 cm','Semina in semenzaio a fine estate e trapianta in autunno per raccolta primaverile.','Regolare durante attecchimento e formazione del cespo.','mar-mag'],
['Cipollotto','allium','feb-apr; ago-ott','1 cm','3-5 x 20 cm','Semina diretta a file fitte oppure trapianta piantine giovani.','Regolare nelle prime fasi; riduci a maturazione.','apr-lug; ott-dic'],
['Arachide','legume','apr-mag','3-5 cm','20-25 x 50-60 cm','Semina diretta con terreno caldo; richiede stagione lunga e posizione soleggiata.','Regolare durante fioritura e formazione dei baccelli sotterranei.','set-ott']
];

// Finestre orientative di trapianto/impianto per il calendario della Home.
const transplantMonths = {
'Aglio':'ott-nov; feb-mar','Asparago':'mar-apr','Basilico':'mag-giu','Barbabietola':'apr-lug','Bietola da coste':'apr-ago','Broccolo':'lug-set','Cavolfiore':'lug-set','Cavolo cappuccio':'mar-mag; lug-set','Cavolo nero':'giu-ago','Cavolo rapa':'apr-giu; set','Cetriolo':'mag-giu','Cicoria':'ago-ott','Cipolla':'mar-apr; set-ott','Cime di rapa':'ago-ott','Fagiolino':'non necessario','Fagiolo rampicante':'non necessario','Fagiolo nano':'non necessario','Fava':'ott-nov; feb-mar','Finocchio':'lug-set','Indivia riccia':'lug-set','Lattuga':'mar-mag; set-nov','Melanzana':'mag-giu','Melone':'mag-giu','Patata':'mar-apr','Peperone':'mag-giu','Peperoncino':'mag-giu','Pisello':'non necessario','Pomodoro':'apr-giu','Porro':'mag-ago','Prezzemolo':'apr-giu; set-ott','Rapa':'non necessario','Ravanello':'non necessario','Rucola':'non necessario','Scalogno':'feb-mar; ott-nov','Sedano':'mag-lug','Spinacio':'non necessario','Zucca':'mag-giu','Zucchina':'mag-lug','Anguria':'mag-giu','Carciofo':'mar-apr; set-ott','Carota':'non necessario','Cavolo di Bruxelles':'giu-ago','Cavolo verza':'lug-set','Cavolo cinese':'ago-ott','Catalogna':'lug-set','Crescione':'non necessario','Erba cipollina':'mar-mag','Lenticchia':'non necessario','Mais dolce':'apr-giu','Origano':'apr-giu','Rabarbaro':'mar-apr','Rosmarino':'apr-giu','Salvia':'apr-giu','Valeriana / songino':'non necessario',
'Radicchio':'giu-set','Scarola':'lug-set','Lattughino da taglio':'non necessario','Cavolo rosso':'mar-mag; lug-set','Cavolo romanesco':'lug-ago','Pak choi':'apr-mag; set-ott','Mizuna':'non necessario','Senape da foglia':'non necessario','Ceci':'non necessario','Cicerchia':'non necessario','Taccola':'non necessario','Fagiolo borlotto':'non necessario','Edamame (soia da orto)':'non necessario','Pastinaca':'non necessario','Scorzonera':'non necessario','Topinambur':'mar-apr','Patata dolce':'mag-giu','Fragola':'feb-mar; ago-ott','Zafferano':'ago-set','Aneto':'non necessario','Coriandolo':'non necessario','Timo':'apr-giu','Maggiorana':'mag-giu','Melissa':'mag-giu','Santoreggia':'apr-mag','Finocchietto selvatico':'apr-mag; ott-nov','Cavolo cappuccio primaverile':'set-nov','Cipollotto':'mar-apr; set-ott','Arachide':'non necessario'
};
for (const crop of gardenCrops) crop[8] = transplantMonths[crop[0]] || 'non necessario';
const folklore = [
['“Aprile, ogni goccia un barile”','Proverbio meteorologico diffuso in varie aree italiane: richiama il valore delle piogge primaverili. Non è una previsione affidabile del tempo.','Tradizione popolare; non specifico del Varesotto.'],
['“San Martino, estate di un mattino”','Richiama il periodo mite che talvolta si presenta attorno a metà novembre. È un riferimento culturale, non una regola climatica.','Tradizione popolare italiana.'],
['“Per Santa Lucia, il freddo si avvia”','Detto legato al calendario invernale e alla percezione dell’arrivo del freddo. Le date delle gelate variano molto da anno ad anno.','Tradizione popolare; verificare il meteo locale.'],
['Luna crescente e ortaggi da foglia/frutto','Secondo una tradizione lunare diffusa, si favoriscono le colture che producono sopra terra; in luna calante radici e bulbi.','Credenza agricola tradizionale: le prove scientifiche di un effetto affidabile sono insufficienti.'],
['“Chi zappa in primavera, raccoglie in estate”','Ricorda il valore della preparazione del terreno e del controllo delle infestanti al momento opportuno.','Massima didattica di tradizione contadina, qui riportata senza attribuzione storica locale.']
];
const $g=id=>document.getElementById(id);

// Schede varietali e ambiente di coltivazione: indicazioni orientative per orto familiare del Nord Italia.
const cropGrowingGuide = {
  "Aglio": {
    "variety": "Bianco Piacentino, Rosso di Sulmona; scegliere ecotipo locale",
    "environment": "Prevalentemente pieno campo; tunnel non necessario salvo protezione da piogge/freddo.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Asparago": {
    "variety": "Verde (tipo Mary Washington), violetto; scegliere cultivar adatte al clima",
    "environment": "Pieno campo; proteggere dal gelo intenso se necessario.",
    "method": "Impianto con materiale vegetativo (bulbilli, tuberi, zampe o divisioni), non con normale semina da seme."
  },
  "Basilico": {
    "variety": "Genovese, Napoletano a foglia larga, Greco",
    "environment": "Pieno campo in estate; serra fredda o tunnel per anticipare e proteggere dal freddo.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Barbabietola": {
    "variety": "Detroit, tonda rossa, cilindrica",
    "environment": "Pieno campo; tunnel non necessario, ma utile per proteggere le semine precoci.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Bietola da coste": {
    "variety": "Verde a costa bianca, Bionda di Lione, costa colorata",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Broccolo": {
    "variety": "Calabrese, ramoso, cima grossa",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Cavolfiore": {
    "variety": "Precoce estivo, autunnale, invernale; romanesco come tipologia distinta",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Cavolo cappuccio": {
    "variety": "Cuore di bue, tondo verde, cappuccio rosso",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Cavolo nero": {
    "variety": "Toscano riccio, palmizio",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Cavolo rapa": {
    "variety": "Bianco precoce, viola",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Cetriolo": {
    "variety": "Lungo da serra, mezzo lungo, piccolo da sottaceto",
    "environment": "Entrambi: serra/tunnel per anticipare e proteggere; pieno campo con caldo stabile e varietà adatte.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Cicoria": {
    "variety": "Catalogna, a grumolo, da taglio",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Cipolla": {
    "variety": "Dorata, rossa, bianca; scegliere giorno corto/intermedio/lungo secondo zona",
    "environment": "Prevalentemente pieno campo; tunnel non necessario salvo protezione da piogge/freddo.",
    "method": "Impianto con materiale vegetativo (bulbilli, tuberi, zampe o divisioni), non con normale semina da seme."
  },
  "Cime di rapa": {
    "variety": "Quarantina, sessantina, novantina",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Fagiolino": {
    "variety": "Nano mangiatutto, rampicante, filetto",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Fagiolo rampicante": {
    "variety": "Borlotti rampicanti, cannellini rampicanti, mangiatutto",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Fagiolo nano": {
    "variety": "Borlotto nano, cannellino nano, mangiatutto",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Fava": {
    "variety": "Aguadulce, Supersimonia",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Finocchio": {
    "variety": "Precoce estivo, autunnale, resistente alla salita a seme",
    "environment": "Pieno campo; tunnel utile nelle stagioni fredde.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Indivia riccia": {
    "variety": "Riccia fine, riccia scarola",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Lattuga": {
    "variety": "Cappuccina, romana, gentile, iceberg; estiva o invernale secondo stagione",
    "environment": "Entrambi: pieno campo nelle stagioni miti; tunnel/serra fredda in inverno e inizio primavera.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Melanzana": {
    "variety": "Tonda violetta, lunga nera, ovale striata",
    "environment": "Entrambi: pieno campo solo con caldo stabile; serra/tunnel per anticipare e prolungare la produzione.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Melone": {
    "variety": "Retato, liscio giallo, cantalupo",
    "environment": "Pieno campo; tunnel per anticipare, con aerazione e impollinazione gestita.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Patata": {
    "variety": "A pasta gialla, bianca o rossa; precoce, semi-precoce o tardiva",
    "environment": "Pieno campo; protezione in tunnel possibile solo per anticipare o proteggere dal freddo.",
    "method": "Impianto con materiale vegetativo (bulbilli, tuberi, zampe o divisioni), non con normale semina da seme."
  },
  "Peperone": {
    "variety": "Quadrato, corno, allungato; dolce o piccante",
    "environment": "Entrambi: serra/tunnel spesso più affidabile; pieno campo in posizione calda e riparata.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Peperoncino": {
    "variety": "Cayenna, Jalapeño, Habanero; scegliere piccantezza desiderata",
    "environment": "Entrambi: pieno campo estivo; serra o vaso riparato per prolungare la stagione.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Pisello": {
    "variety": "Nano, mezza rama, rampicante; liscio o rugoso",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Pomodoro": {
    "variety": "Cuore di bue, costoluto, ciliegino, datterino, San Marzano",
    "environment": "Entrambi: pieno campo con varietà resistenti; serra/tunnel ben arieggiati per anticipare, evitando umidità persistente.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Porro": {
    "variety": "Precoce estivo, autunnale, invernale",
    "environment": "Pieno campo; serra non necessaria.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Prezzemolo": {
    "variety": "Comune a foglia liscia, riccio",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Rapa": {
    "variety": "Tonda bianca, viola, piatta",
    "environment": "Pieno campo; tunnel non necessario, ma utile per proteggere le semine precoci.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Ravanello": {
    "variety": "Tondo rosso, rosso-bianco, lungo",
    "environment": "Pieno campo; tunnel non necessario, ma utile per proteggere le semine precoci.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Rucola": {
    "variety": "Coltivata (Eruca), selvatica (Diplotaxis)",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Scalogno": {
    "variety": "Griselle, dorato; bulbo allungato o tondo",
    "environment": "Prevalentemente pieno campo; tunnel non necessario salvo protezione da piogge/freddo.",
    "method": "Impianto con materiale vegetativo (bulbilli, tuberi, zampe o divisioni), non con normale semina da seme."
  },
  "Sedano": {
    "variety": "Verde, bianco da imbianchire, da coste",
    "environment": "Entrambi: pieno campo; tunnel utile per proteggere nelle stagioni fredde.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Spinacio": {
    "variety": "Primaverile, autunnale, invernale; lento a montare a seme",
    "environment": "Pieno campo; tunnel/serra fredda per raccolta invernale.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Zucca": {
    "variety": "Butternut, Delica, Marina di Chioggia, Moscata",
    "environment": "Pieno campo in stagione calda; tunnel possibile per anticipare, con aerazione.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Zucchina": {
    "variety": "Verde scuro, chiara, striata; tonda o lunga",
    "environment": "Entrambi: pieno campo in stagione; tunnel per anticipare ma serve aerazione e attenzione all’impollinazione.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Anguria": {
    "variety": "Mini, tonda, ovale; polpa rossa o gialla",
    "environment": "Pieno campo; tunnel per anticipare in zone fresche, poi arieggiare.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Carciofo": {
    "variety": "Romanesco, Spinoso, Violetto",
    "environment": "Pieno campo; protezione invernale nelle zone con gelate forti.",
    "method": "Impianto con materiale vegetativo (bulbilli, tuberi, zampe o divisioni), non con normale semina da seme."
  },
  "Carota": {
    "variety": "Nantes, Chantenay, Berlicum, violetta",
    "environment": "Pieno campo; tunnel non necessario, ma utile per proteggere le semine precoci.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Cavolo di Bruxelles": {
    "variety": "Precoce, medio-tardivo",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Cavolo verza": {
    "variety": "Precoce, invernale, tardiva",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Cavolo cinese": {
    "variety": "Pe-tsai (a cespo), pak choi (a coste)",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Catalogna": {
    "variety": "Puntarelle, catalogna a foglia frastagliata",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Crescione": {
    "variety": "Crescione d’acqua, crescione da terra",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Erba cipollina": {
    "variety": "Comune a foglia fine",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Impianto con materiale vegetativo (bulbilli, tuberi, zampe o divisioni), non con normale semina da seme."
  },
  "Lenticchia": {
    "variety": "Piccola verde, marrone, rossa",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Mais dolce": {
    "variety": "Zuccherino standard, superdolce; varietà precoci per climi freschi",
    "environment": "Pieno campo; serra non conveniente per la coltura comune.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Origano": {
    "variety": "Comune, meridionale",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Rabarbaro": {
    "variety": "A coste verdi, a coste rosse",
    "environment": "Pieno campo; proteggere dal gelo intenso se necessario.",
    "method": "Impianto con materiale vegetativo (bulbilli, tuberi, zampe o divisioni), non con normale semina da seme."
  },
  "Rosmarino": {
    "variety": "Eretto, prostrato",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Salvia": {
    "variety": "Comune, a foglia larga",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Valeriana / songino": {
    "variety": "A seme grosso, a seme piccolo; rosetta compatta",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Radicchio": {
    "variety": "Precoce, tardivo, rosso tondo, variegato",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Scarola": {
    "variety": "A foglia larga, bionda, cornetto",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Lattughino da taglio": {
    "variety": "Misticanza, foglia liscia, riccia, rossa",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Cavolo rosso": {
    "variety": "Precoce, medio, tardivo",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Cavolo romanesco": {
    "variety": "Precoce, medio-tardivo",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Pak choi": {
    "variety": "Baby, a costa bianca, a costa verde",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Mizuna": {
    "variety": "Verde, rossa",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Senape da foglia": {
    "variety": "Verde, rossa, foglia liscia o frastagliata",
    "environment": "Pieno campo nelle stagioni miti; tunnel/serra fredda utile in autunno-inverno.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Ceci": {
    "variety": "Kabuli (seme grande), Desi (seme piccolo)",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Cicerchia": {
    "variety": "Ecotipi locali a seme chiaro",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Taccola": {
    "variety": "Piatta mangiatutto, nana o rampicante",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Fagiolo borlotto": {
    "variety": "Borlotto nano, borlotto rampicante",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Edamame (soia da orto)": {
    "variety": "Precoce, medio-precoce; varietà specifiche da edamame",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Pastinaca": {
    "variety": "Lunga, mezza-lunga, tonda",
    "environment": "Pieno campo; tunnel non necessario, ma utile per proteggere le semine precoci.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Scorzonera": {
    "variety": "Nera lunga",
    "environment": "Pieno campo; tunnel non necessario, ma utile per proteggere le semine precoci.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Topinambur": {
    "variety": "Bianco, rosso; tubero allungato o tondeggiante",
    "environment": "Pieno campo; protezione in tunnel possibile solo per anticipare o proteggere dal freddo.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Patata dolce": {
    "variety": "Polpa arancione, bianca o viola",
    "environment": "Pieno campo molto caldo; tunnel o serra per avvio e zone con estate breve.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Fragola": {
    "variety": "Unifera (una produzione) o rifiorente (più raccolte)",
    "environment": "Entrambi: pieno campo o tunnel; tunnel anticipa e protegge i frutti dalla pioggia.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Zafferano": {
    "variety": "Ecotipi locali; bulbi certificati di Crocus sativus",
    "environment": "Prevalentemente pieno campo; tunnel non necessario salvo protezione da piogge/freddo.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Aneto": {
    "variety": "Comune da foglia e seme",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Coriandolo": {
    "variety": "Da foglia, da seme; varietà a lenta montata",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  },
  "Timo": {
    "variety": "Comune, limonato",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Maggiorana": {
    "variety": "Comune a foglia dolce",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Melissa": {
    "variety": "Comune a foglia grande",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Santoreggia": {
    "variety": "Estiva, montana",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Finocchietto selvatico": {
    "variety": "Comune; selezioni da foglia o da seme",
    "environment": "Pieno campo e vaso; tunnel/serra fredda solo per anticipare o proteggere dal gelo.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Cavolo cappuccio primaverile": {
    "variety": "Precoce primaverile, appuntito o tondo",
    "environment": "Pieno campo; tunnel utile per proteggere le giovani piantine e anticipare, non indispensabile.",
    "method": "Avvio in semenzaio protetto; trapianto all’aperto quando le temperature sono adatte e le piantine sono robuste."
  },
  "Cipollotto": {
    "variety": "Bianco, rosso; da mazzetto",
    "environment": "Pieno campo; serra non necessaria.",
    "method": "Possibile semenzaio e successivo trapianto; segui la finestra indicata e la descrizione della scheda."
  },
  "Arachide": {
    "variety": "Precoce a ciclo breve; varietà da clima caldo",
    "environment": "Pieno campo; generalmente non serve serra.",
    "method": "Semina diretta in aiuola o vaso; dirada quando necessario. Per anticipare, puoi avviare in contenitore solo se la specie tollera il trapianto."
  }
};
function initGarden(){
 const sel=$g('catalogCrop'),search=$g('catalogSearch');
 if(!sel)return;
 const fill=(filter='')=>{const old=sel.value;sel.innerHTML='';gardenCrops.filter(c=>c[0].toLocaleLowerCase('it').includes(filter.toLocaleLowerCase('it'))).forEach(c=>{const o=document.createElement('option');o.value=c[0];o.textContent=c[0];sel.append(o)});if([...sel.options].some(o=>o.value===old))sel.value=old;renderCropCard();};
 function renderCropCard(){const c=gardenCrops.find(x=>x[0]===sel.value);if(!c){$g('catalogDetails').textContent='Nessuna coltura trovata.';return}
 $g('catalogDetails').innerHTML=`<h3>${c[0]}</h3><div class="catalog-meta"><span>${c[1]}</span><span>Semina: ${c[2]}</span><span>Raccolta: ${c[7]}</span></div><div class="catalog-block"><strong>Come seminare / impiantare</strong><p>${c[5]}</p><p><b>Profondità:</b> ${c[3]} · <b>Distanza:</b> ${c[4]}</p><p><b>Modalità:</b> ${cropGrowingGuide[c[0]]?.method||'Segui le indicazioni della bustina e adatta il trapianto alla stagione.'}</p></div><div class="catalog-block"><strong>Varietà da valutare</strong><p>${cropGrowingGuide[c[0]]?.variety||'Scegli una varietà adatta alla stagione e al clima locale.'}</p><p class="tip">Le tipologie indicate sono esempi: verifica ciclo, resistenze e adattamento sulla confezione del seme.</p></div><div class="catalog-block"><strong>Dove coltivarla</strong><p>${cropGrowingGuide[c[0]]?.environment||'Pieno campo; usa tunnel solo se utile per anticipare o proteggere la coltura.'}</p></div><div class="catalog-block"><strong>Acqua</strong><p>${c[6]}</p></div><div class="catalog-block"><strong>Nota pratica</strong><p>Prepara un letto di semina fine e senza ristagni; ruota le famiglie botaniche negli anni. Adatta calendario e distanze alle indicazioni della bustina e alla varietà.</p></div>`;}
 sel.onchange=renderCropCard;search.oninput=()=>fill(search.value);fill();
 const folkloreBox=$g('folkloreList');folkloreBox.innerHTML=folklore.map(f=>`<div class="say"><strong>${f[0]}</strong><p>${f[1]}</p><small>${f[2]}</small></div>`).join('');
 ['soilType','growthStage'].forEach(id=>$g(id).addEventListener('change',renderWater));
 $g('refreshWater').onclick=async()=>{if(typeof loadWeather==='function')await loadWeather();renderWater()};
 renderWater();
}
function renderWater(){
 const out=$g('waterAdvice');if(!out)return;
 const crop=gardenCrops.find(c=>c[0]===($g('catalogCrop')?.value));if(!crop)return;
 const soil=$g('soilType').value,stage=$g('growthStage').value;
 const next=(window.gardenForecast?.()||[]).slice(0,3),maxT=next.length?Math.max(...next.map(x=>x.max||0)):null,rain=next.length?next.reduce((s,x)=>s+(x.rain||0),0):null;
 let advice=`${crop[0]}: ${crop[6]} `;
 if(maxT!==null){advice+=`Nei prossimi 3 giorni la massima prevista arriva a ${Math.round(maxT)} °C e la pioggia cumulata prevista è circa ${rain.toFixed(1)} mm. `;if(maxT>=32)advice+='Caldo intenso: controlla il terreno ogni giorno, irriga al mattino presto se asciutto e valuta ombreggio temporaneo per le specie sensibili. ';else if(maxT>=27)advice+='Con questo caldo aumenta la frequenza dei controlli; non significa necessariamente aumentare l’acqua se il suolo è umido. ';else advice+='Controlla il suolo prima di irrigare; la temperatura prevista da sola non determina il fabbisogno. ';if(rain>=8)advice+='La pioggia prevista può ridurre o annullare l’irrigazione, ma verifica quanto ne è caduta davvero.';}else advice+='Non ci sono previsioni caricate: verifica il Comune nelle Impostazioni e aggiorna il meteo.';
 if(soil==='sandy')advice+=' Il terreno sabbioso drena rapidamente: apporti più frazionati possono essere utili.';if(soil==='clay')advice+=' Il terreno argilloso trattiene più acqua: controlla in profondità e lascia drenare, evitando ristagni.';
 if(stage==='young')advice+=' In semina e attecchimento mantieni umido lo strato superficiale senza saturarlo.';if(stage==='fruit')advice+=' In fioritura e produzione evita stress idrici e forti alternanze tra secco e bagnato.';
 out.textContent=advice;
}
document.addEventListener('DOMContentLoaded',initGarden);


// Calendario annuale completo: semine, trapianti e raccolte per ogni mese.
(function(){
 const dateInput=document.getElementById('calendarDate'), box=document.getElementById('annualCalendar');
 if(!dateInput||!box)return;
 const names=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
 const codes=['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];
 const escCal=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 const monthSet=value=>{
   const t=String(value||'').toLowerCase().replace(/tutto l'anno|tutto l’anno/g,'gen-dic');
   const found=[...t.matchAll(/(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)(?:\s*[-–]\s*(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic|inverno))?/g)];
   const out=new Set();
   for(const m of found){
     const a=codes.indexOf(m[1])+1;out.add(a);
     if(m[2]==='inverno'){[10,11,12,1,2].forEach(x=>out.add(x));continue;}
     if(m[2]){const b=codes.indexOf(m[2])+1;let x=a;for(let guard=0;guard<12;guard++){out.add(x);if(x===b)break;x=x%12+1;}}
   }
   if(/inverno/.test(t)&&!found.length)[10,11,12,1,2].forEach(x=>out.add(x));
   return [...out];
 };
 const search=document.getElementById('annualSearch');
 const draw=()=>{
   const selected=dateInput.value?new Date(dateInput.value+'T12:00:00'):new Date();
   const active=selected.getMonth()+1, query=(search?.value||'').trim().toLocaleLowerCase('it');
   const filtered=gardenCrops.filter(c=>!query||c[0].toLocaleLowerCase('it').includes(query));
   const sowCount=filtered.filter(c=>monthSet(c[2]).includes(active)).length;
   const transCount=filtered.filter(c=>c[8]&&c[8]!=='non necessario'&&monthSet(c[8]).includes(active)).length;
   const harvestCount=filtered.filter(c=>monthSet(c[7]).includes(active)).length;
   let summary=document.getElementById('annualSummary');
   if(!summary){summary=document.createElement('div');summary.id='annualSummary';summary.className='annual-summary';box.before(summary);}
   summary.innerHTML=`<strong>📍 ${names[active-1]}: ${sowCount} semine/impianti · ${transCount} trapianti · ${harvestCount} raccolte</strong><small>Panoramica delle ${filtered.length} colture${query?' filtrate':''} presenti nell'enciclopedia.</small>`;
   box.innerHTML=names.map((name,i)=>{
     const month=i+1;
     const sow=filtered.filter(c=>monthSet(c[2]).includes(month));
     const harvest=filtered.filter(c=>monthSet(c[7]).includes(month));
     const trans=filtered.filter(c=>c[8]&&c[8]!=='non necessario'&&monthSet(c[8]).includes(month));
     const chips=(items,cls)=>items.length?items.map(c=>`<span class="crop-chip ${cls||''}">${escCal(c[0])}</span>`).join(''):'<span class="empty-month">Nessuna coltura indicata</span>';
     return `<article class="month-card ${active===month?'current-month':''}">
       <h3>${name}${active===month?' · mese selezionato':''}</h3>
       <div class="month-label">🌱 Semina / impianto · ${sow.length}</div><div>${chips(sow,'')}</div>
       <div class="month-label">🪴 Trapianto · ${trans.length}</div><div>${chips(trans,'transplant-chip')}</div>
       <div class="month-label">🧺 Raccolta · ${harvest.length}</div><div>${chips(harvest,'harvest-chip')}</div>
     </article>`;
   }).join('');
 };
 dateInput.value=[new Date().getFullYear(),String(new Date().getMonth()+1).padStart(2,'0'),String(new Date().getDate()).padStart(2,'0')].join('-');
 dateInput.addEventListener('change',draw);search?.addEventListener('input',draw);draw();
})();
