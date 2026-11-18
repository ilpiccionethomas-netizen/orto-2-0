/* ORTO 2.0 v47 - guida alle consociazioni per tutte le colture dell'enciclopedia.
   Indicazioni agronomiche orientative: compatibilità dipende da clima, suolo, distanze e rotazioni. */
(function(){
'use strict';
const families={
 allium:['Aglio','Cipolla','Porro','Scalogno','Erba cipollina','Cipollotto'],
 brassica:['Broccolo','Cavolfiore','Cavolo cappuccio','Cavolo nero','Cavolo rapa','Cime di rapa','Cavolo di Bruxelles','Cavolo verza','Cavolo cinese','Cavolo rosso','Cavolo romanesco','Pak choi','Mizuna','Senape da foglia','Cavolo cappuccio primaverile'],
 legume:['Fagiolino','Fagiolo rampicante','Fagiolo nano','Fava','Pisello','Lenticchia','Ceci','Cicerchia','Taccola','Fagiolo borlotto','Edamame (soia da orto)','Arachide'],
 cucurbit:['Cetriolo','Melone','Zucca','Zucchina','Anguria'],
 solan:['Patata','Melanzana','Peperone','Peperoncino','Pomodoro','Patata dolce'],
 leafy:['Bietola da coste','Cicoria','Indivia riccia','Lattuga','Catalogna','Rucola','Sedano','Spinacio','Valeriana / songino','Radicchio','Scarola','Lattughino da taglio','Crescione'],
 root:['Barbabietola','Carota','Rapa','Ravanello','Pastinaca','Scorzonera','Topinambur'],
 aromatic:['Basilico','Prezzemolo','Origano','Rosmarino','Salvia','Aneto','Coriandolo','Timo','Maggiorana','Melissa','Santoreggia','Finocchietto selvatico'],
 perennial:['Asparago','Carciofo','Rabarbaro','Fragola','Zafferano']
};
const familyOf={}; Object.entries(families).forEach(([f,arr])=>arr.forEach(n=>familyOf[n]=f));
const groups={
 allium:{good:['Carota','Lattuga','Fragola','Barbabietola','Pomodoro'],avoid:['Fagiolo nano','Fagiolo rampicante','Pisello','Fava','Ceci']},
 brassica:{good:['Sedano','Cipolla','Aglio','Porro','Lattuga','Spinacio','Aneto'],avoid:['Fragola','Pomodoro','Altre brassicacee troppo ravvicinate']},
 legume:{good:['Mais dolce','Zucca','Cetriolo','Carota','Ravanello','Lattuga'],avoid:['Aglio','Cipolla','Porro','Scalogno']},
 cucurbit:{good:['Mais dolce','Fagiolo rampicante','Fagiolo nano','Lattuga','Ravanello','Aneto'],avoid:['Patata','Altre cucurbitacee troppo ravvicinate']},
 solan:{good:['Basilico','Carota','Cipolla','Aglio','Lattuga','Prezzemolo'],avoid:['Patata vicino a pomodoro e altre solanacee','Finocchio']},
 leafy:{good:['Carota','Ravanello','Cipolla','Aglio','Fragola','Fagiolo nano'],avoid:['Finocchio']},
 root:{good:['Cipolla','Aglio','Lattuga','Pisello','Fagiolo nano','Ravanello'],avoid:['Finocchio','Carote troppo fitte con altre radici']},
 aromatic:{good:['Pomodoro','Peperone','Carota','Cavolo cappuccio','Lattuga'],avoid:['Finocchio vicino a molte orticole']},
 perennial:{good:['Lattuga','Spinacio','Cipolla','Aglio','Fragola'],avoid:['Colture molto vigorose e ombreggianti a ridosso']}
};
const notes={
 allium:'Gli allium occupano poco spazio e possono essere alternati a file di ortaggi; evita di accostarli direttamente alle leguminose come regola prudenziale tradizionale.',
 brassica:'Le brassicacee hanno esigenze nutritive elevate: alterna con leguminose in rotazione e non ripetere cavoli nello stesso terreno. Sedano e aromatiche possono aiutare a diversificare le file.',
 legume:'Le leguminose possono contribuire all’apporto di azoto nel sistema, soprattutto tramite residui radicali; non significa che fertilizzino subito le piante vicine.',
 cucurbit:'Le cucurbitacee sono espansive: lascia spazio, evita ombreggiamenti eccessivi e non addensare specie della stessa famiglia.',
 solan:'Le solanacee condividono diverse avversità: non concentrarle nella stessa aiuola e rispetta la rotazione. Basilico e insalate possono occupare gli spazi liberi.',
 leafy:'Le insalate e le foglie hanno ciclo spesso breve: si prestano a consociazioni temporanee con colture lente, purché non competano per luce e acqua.',
 root:'Le radici possono alternarsi a colture a sviluppo fogliare, mantenendo distanze adeguate. Evita competizione eccessiva nel volume di terreno.',
 aromatic:'Le aromatiche possono attirare insetti utili e diversificare l’aiuola; alcune, come il finocchio, possono competere o risultare poco adatte vicino ad altre colture.',
 perennial:'Le perenni restano in aiuola più anni: abbinale a colture basse e poco competitive, senza disturbare le radici.'
};
const cropNames=()=>typeof gardenCrops!=='undefined'&&Array.isArray(gardenCrops)?gardenCrops.map(c=>c[0]):[];
function render(){
 const sel=document.getElementById('companionCrop'), out=document.getElementById('companionDetails');
 if(!sel||!out||typeof gardenCrops==='undefined')return;
 const names=cropNames(); const old=sel.value;
 sel.innerHTML=names.map(n=>`<option>${n}</option>`).join('');
 if(names.includes(old))sel.value=old;
 function draw(){
  const name=sel.value, family=familyOf[name]||'leafy', g=groups[family]||groups.leafy;
  const good=g.good.filter(n=>names.includes(n)&&n!==name);
  const avoid=g.avoid.filter(n=>names.includes(n)&&n!==name);
  const familyPeers=names.filter(n=>familyOf[n]===family&&n!==name);
  out.innerHTML=`<h3>🌱 ${name}</h3><p>${notes[family]||notes.leafy}</p>
  <div class="companion-panel good"><strong>🤝 Buone compagne</strong><p>${good.length?good.join(' · '):'Nessuna indicazione specifica: valuta le esigenze e lo spazio.'}</p></div>
  <div class="companion-panel caution"><strong>⚠️ Da evitare o gestire con cautela</strong><p>${avoid.length?avoid.join(' · '):'Non emergono incompatibilità specifiche consolidate.'}</p></div>
  <div class="companion-panel"><strong>🌿 Colture della stessa famiglia</strong><p>${familyPeers.length?familyPeers.join(' · '):'Nessuna altra coltura della stessa famiglia nell’elenco.'}</p><small>Meglio non addensarle: possono condividere parassiti, malattie ed esigenze nutritive.</small></div>
  <p class="tip">Le consociazioni sono indicazioni pratiche orientative, non garanzie di beneficio. Le prove scientifiche sono variabili: contano soprattutto rotazione, distanze, luce, acqua e fertilità. Non sostituiscono il calendario delle semine.</p>`;
 }
 sel.onchange=draw;draw();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();
