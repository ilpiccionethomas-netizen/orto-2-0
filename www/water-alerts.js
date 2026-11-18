/* ORTO 2.0 · pannello rischi meteo 72 ore, indicatori orientativi per hobbisti */
(()=>{'use strict';
 const $=id=>document.getElementById(id);
 const comune=()=>{try{return JSON.parse(localStorage.getItem('orto20_weather_comune'))||{name:'Cicagna',province:'GE'}}catch{return {name:'Cicagna',province:'GE'}}};
 const date=t=>new Date(t).toLocaleString('it-IT',{weekday:'long',day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'});
 const weatherDescription=code=>({95:'Temporale previsto',96:'Temporale con possibile grandine',99:'Temporale intenso con possibile grandine'}[code]||'Fenomeno temporalesco');
 const make=(level,title,time,detail,action)=>({level,title,time,detail,action});
 function addPanel(){const w=$('weather');if(!w||$('rainNowcast'))return;const c=document.createElement('div');c.className='card';c.id='smartWeatherAlerts';c.innerHTML=`<h2>🌦️ Allerte meteo intelligenti</h2><p class="muted" id="rainLocation">Comune di riferimento: Cicagna (GE)</p><div id="rainNowcast" class="notice">Caricamento dei rischi meteo…</div><h3 style="margin-top:15px">⚠️ Rischi nelle prossime 72 ore</h3><div id="weatherRisks"></div><div class="row" style="gap:8px;flex-wrap:wrap"><button type="button" id="refreshRain" class="secondary">Aggiorna allerte</button><a class="button secondary" href="https://www.meteoalarm.org/" target="_blank" rel="noopener">Allerte ufficiali ↗</a></div><p class="tip">Sono indicatori calcolati da previsioni modellistiche, non allerte ufficiali. Grandine e fenomeni locali improvvisi possono non essere previsti: consulta sempre Protezione Civile e MeteoAlarm.</p>`;w.querySelector('.card')?.after(c);$('refreshRain').onclick=load;}
 function mergeRisks(items){
   const map=new Map();
   for(const x of items){
     const old=map.get(x.title);
     if(!old){map.set(x.title,{...x,_details:[x.detail]});continue;}
     if(x.level==='alta')old.level='alta';
     if(x.time<old.time)old.time=x.time;
     if(x.detail)old._details.push(x.detail);
   }
   return [...map.values()].map(x=>{
     if(x.title.includes('malattie fungine')){
       const hum=[],temp=[];
       x._details.forEach(d=>{
         const hm=d.match(/Umidità\s+(\d+(?:\.\d+)?)%/i);
         const tm=d.match(/temperatura\s+(-?\d+(?:\.\d+)?)\s*°C/i);
         if(hm)hum.push(Number(hm[1]));if(tm)temp.push(Number(tm[1]));
       });
       const range=(a,unit,dec=0)=>a.length>1?`${Math.min(...a).toFixed(dec).replace('.',',')}–${Math.max(...a).toFixed(dec).replace('.',',')}${unit}`:a.length?`${a[0].toFixed(dec).replace('.',',')}${unit}`:'';
       x.detail=`Umidità ${range(hum,'%')} · temperatura ${range(temp,' °C',1)}`;
     } else if(x.title.includes('Pioggia intensa')){
       // Conserva il primo evento e non concatena le 72 letture orarie.
       x.detail=x._details[0];
     } else if(x.title.includes('Caldo intenso')){
       x.detail=x._details[0];
     } else {
       x.detail=x._details[0];
     }
     delete x._details;
     return x;
   }).sort((a,b)=>(a.level==='alta'?0:1)-(b.level==='alta'?0:1)||a.time.localeCompare(b.time));
 }
 async function load(){const c=comune();$('rainLocation').textContent='Comune di riferimento: '+c.name+(c.province?' ('+c.province+')':'');$('rainNowcast').textContent='Aggiornamento previsioni e rischi…';$('weatherRisks').textContent='Analisi delle prossime 72 ore…';try{
   const p=await window.resolveWeatherComune(c.name,c.province);const u=new URL('https://api.open-meteo.com/v1/forecast');
   const params={latitude:p.latitude,longitude:p.longitude,hourly:'temperature_2m,apparent_temperature,precipitation_probability,precipitation,wind_gusts_10m,relative_humidity_2m,weather_code',forecast_days:7,timezone:'auto'};Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,v));
   const r=await fetch(u,{cache:'no-store'});if(!r.ok)throw Error('Servizio meteo non disponibile');const j=await r.json(),h=j.hourly||{},n=Math.min(72,h.time?.length||0),items=[];
   let rain72=0,maxTemp=-99,maxGust=0;
   for(let i=0;i<n;i++){
     const val=x=>x==null?NaN:Number(x);const t=val(h.temperature_2m?.[i]),ap=val(h.apparent_temperature?.[i]),pr=val(h.precipitation_probability?.[i]),mm=val(h.precipitation?.[i]),gust=val(h.wind_gusts_10m?.[i]),hum=val(h.relative_humidity_2m?.[i]),code=val(h.weather_code?.[i]),time=h.time[i];
     if(Number.isFinite(mm))rain72+=mm;if(Number.isFinite(t))maxTemp=Math.max(maxTemp,t);if(Number.isFinite(gust))maxGust=Math.max(maxGust,gust);
     if(Number.isFinite(t)&&t<=1)items.push(make(t<=-2?'alta':'attenzione','🥶 Rischio gelata',time,`${t.toFixed(1)} °C previsti`,'Proteggi le colture sensibili con tessuto non tessuto; porta al riparo vasi e semenzai. Evita di bagnare il fogliame prima della notte fredda.'));
     if((Number.isFinite(t)&&t>=32)||(Number.isFinite(ap)&&ap>=38))items.push(make(t>=35||ap>=42?'alta':'attenzione','🥵 Caldo intenso',time,`${Number.isFinite(t)?t.toFixed(1):'–'} °C · percepita ${Number.isFinite(ap)?ap.toFixed(1):'–'} °C`,'Controlla l’umidità del terreno, irriga al mattino presto solo se serve, pacciama e ombreggia temporaneamente le piantine giovani.'));
     if(Number.isFinite(mm)&&Number.isFinite(pr)&&(mm>=10||(pr>=70&&mm>=5)))items.push(make(mm>=20?'alta':'attenzione','🌧️ Pioggia intensa',time,`${mm.toFixed(1)} mm in un’ora · probabilità ${pr}%`,'Verifica scarichi e drenaggio, libera i canali, sospendi irrigazione e rinvia trattamenti che potrebbero essere dilavati.'));
     if(Number.isFinite(gust)&&gust>=55)items.push(make(gust>=75?'alta':'attenzione','💨 Raffiche di vento',time,`Raffiche fino a ${Math.round(gust)} km/h`,'Rinforza tutori e legacci, chiudi o fissa serre e coperture; metti al riparo vasi e semenzai leggeri.'));
     if([95,96,99].includes(code))items.push(make('alta',[96,99].includes(code)?'🌩️ Temporale · possibile grandine':'⛈️ Temporale',time,weatherDescription(code),'Metti al riparo i vasi, proteggi le colture con coperture ben fissate e controlla subito le allerte ufficiali locali. Il modello non garantisce la previsione della grandine.'));
     if(Number.isFinite(hum)&&Number.isFinite(t)&&Number.isFinite(pr)&&hum>=90&&t>=12&&t<=26&&pr>=40)items.push(make('attenzione','🍃 Condizioni favorevoli a malattie fungine',time,`Umidità ${Math.round(hum)}% · temperatura ${t.toFixed(1)} °C`,'Favorisci aerazione e distanze corrette, evita bagnature fogliari serali e controlla soprattutto pomodoro, zucchina e vite per eventuali sintomi.'));
   }
   if(rain72<1&&maxTemp>=28)items.push(make('attenzione','🌤️ Periodo asciutto e caldo',h.time?.[0]||new Date().toISOString(),`Pioggia cumulata prevista in 72 ore: ${rain72.toFixed(1)} mm · massima ${Math.round(maxTemp)} °C`,'Non è una misura di siccità: controlla il terreno a 5–10 cm, usa pacciamatura e irriga in modo mirato se il suolo è asciutto.'));
   if(maxGust<55&&rain72<1&&maxTemp<28&&items.length===0){/* nessun rischio soglia rilevato */}
   const list=mergeRisks(items);const high=list.filter(x=>x.level==='alta').length;
   $('rainNowcast').innerHTML=`<div class="risk-summary"><div class="risk-summary-status">${high?'🔴 Rischi elevati da gestire':list.length?'🟡 Condizioni da monitorare':'🟢 Situazione tranquilla'}</div><p>Previsione per <strong>${p.name}</strong> · prossime 72 ore</p><div class="risk-metrics"><div><strong>${rain72.toFixed(1)} <small>mm</small></strong><span>Pioggia prevista</span></div><div><strong>${Number.isFinite(maxGust)?Math.round(maxGust):'–'} <small>km/h</small></strong><span>Raffica massima</span></div><div><strong>${Number.isFinite(maxTemp)?Math.round(maxTemp):'–'} <small>°C</small></strong><span>Temperatura max</span></div></div><small class="risk-updated">Aggiornato alle ${new Date().toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'})}</small></div>`;
   $('weatherRisks').innerHTML=list.length?list.map(x=>`<article class="risk-card ${x.level==='alta'?'risk-high':'risk-attention'}"><div class="risk-card-heading"><strong>${x.title}</strong><span class="risk-badge ${x.level==='alta'?'high':''}">${x.level==='alta'?'Rischio alto':'Attenzione'}</span></div><div class="risk-time">🕒 ${date(x.time)}</div><div class="risk-detail">${x.detail}</div><p>${x.action}</p></article>`).join(''):'<p class="notice">Nessun indicatore di rischio rilevato nelle prossime 72 ore. Questo non esclude fenomeni locali o allerte ufficiali.</p>';
 }catch(e){$('rainNowcast').textContent='Allerte non disponibili: '+e.message+'. Controlla il Comune e la connessione.';$('weatherRisks').textContent='Dati di rischio non disponibili.';}}
 document.addEventListener('DOMContentLoaded',()=>{addPanel();setTimeout(load,350);document.querySelectorAll('[data-tab="weather"]').forEach(b=>b.addEventListener('click',()=>load()));});
})();
