const S=[["🧽","Soins préventifs","Nettoyages, examens, radiographies, scellements"],["✨","Dentisterie esthétique","Blanchiment, facettes, bonding"],["🛠️","Dentisterie restauratrice","Plombages, couronnes, bridges, implants"],["🧒","Services pédiatriques","Pour des enfants à partir de 6 ans"],["🚑","Traitements d’urgence","Une prise en charge rapide en cas de douleur"],["🔬","Dentisterie spécialisée","Endodontie, parodontologie, extraction"]];
document.getElementById('svc').innerHTML=S.map((s,i)=>`<div class="col-md-6 col-lg-4 rv" style="--d:${i*.08}s"><div class="card-s"><div class="ico">${s[0]}</div><h3 class="h5">${s[1]}</h3><p class="muted mb-0">${s[2]}</p></div></div>`).join('');
document.getElementById('sv').innerHTML='<option value="">Type de soin</option>'+S.map(s=>`<option>${s[1]}</option>`).join('');
const H=[["Lundi","9:00 – 18:30"],["Mardi","9:00 – 18:30"],["Mercredi","9:00 – 18:30"],["Jeudi","9:00 – 18:30"],["Vendredi","9:00 – 18:30"],["Samedi","9:30 – 12:30"],["Dimanche","Fermé"]];
const td=(new Date().getDay()+6)%7;
document.getElementById('hours').innerHTML=H.map((h,i)=>`<div class="${i===td?'today':''}"><span>${h[0]}</span><span>${h[1]}</span></div>`).join('');
// Fancybox lightbox (the photos are written directly in index.html, folder images/)
Fancybox.bind('[data-fancybox="clinic"]',{Thumbs:{type:'classic'},Hash:false,Toolbar:{display:{left:['infobar'],middle:[],right:['slideshow','fullscreen','thumbs','close']}}});
// theme
const r=document.documentElement;let m=matchMedia('(prefers-color-scheme:dark)');
const set=t=>{r.dataset.theme=t;r.dataset.bsTheme=t};set(m.matches?'dark':'light');
document.getElementById('theme').onclick=()=>set(r.dataset.theme==='dark'?'light':'dark');
// reveal + counters
const co=n=>{const e=+n.dataset.count,d=n.dataset.dec?1:0,t=performance.now();(function f(x){const p=Math.min((x-t)/1400,1);n.textContent=(e*(1-Math.pow(1-p,3))).toFixed(d).replace('.',',');if(p<1)requestAnimationFrame(f)})(t)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(co);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
// nav shadow
const nv=document.querySelector('.nav');addEventListener('scroll',()=>nv.classList.toggle('scrolled',scrollY>10),{passive:true});
// WhatsApp form (replace with the clinic's WhatsApp number, international format, no + or spaces)
const WA='212535624287';
document.getElementById('d').min=new Date().toISOString().slice(0,10);
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();const ok=document.getElementById('ok');
 const v=id=>document.getElementById(id).value.trim();
 if(!v('n')||!v('t')){ok.textContent='Merci de renseigner nom et téléphone.';return}
 const msg=['Bonjour Dr Benslimane, je souhaite prendre rendez-vous.','👤 Nom : '+v('n'),'📞 Téléphone : '+v('t'),v('sv')?'🦷 Soin : '+v('sv'):'',v('d')?'📅 Date souhaitée : '+v('d'):'',v('m')?'💬 Message : '+v('m'):''].filter(Boolean).join('\n');
 window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank','noopener');
 ok.textContent='✅ Merci '+v('n')+', WhatsApp s’ouvre pour envoyer votre demande.';e.target.reset()});
// scroll to top + progress + tab bar spy
const tt=document.getElementById('totop'),tabs=[...document.querySelectorAll('.tab')],secs=tabs.map(a=>document.querySelector(a.getAttribute('href')));
tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const spy=()=>{const h=document.documentElement,max=h.scrollHeight-innerHeight;tt.style.setProperty('--p',max>0?scrollY/max*100:0);tt.classList.toggle('show',scrollY>400);
 let k=0;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<innerHeight*.4)k=i});if(scrollY+innerHeight>=h.scrollHeight-4)k=secs.length-1;
 tabs.forEach((t,i)=>t.classList.toggle('active',i===k))};
addEventListener('scroll',spy,{passive:true});spy();
