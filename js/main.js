// Inicialização geral, menu e relógios
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => setTimeout(() => preloader.classList.add('hide'), 350));
  setTimeout(() => preloader.classList.add('hide'), 1800);
  if (window.lucide) lucide.createIcons();

  const menu = document.getElementById('menu');
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('menuClose');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('lock', open);
  };
  toggle.addEventListener('click', () => setMenu(true));
  close.addEventListener('click', () => setMenu(false));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); document.querySelectorAll('.lightbox.open,.info-modal.open').forEach(el => el.classList.remove('open')); document.body.classList.remove('lock'); } });

  const updateClock = () => {
    const now = new Date();
    const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    document.getElementById('digitalTime').textContent = time.map(n => String(n).padStart(2, '0')).join(':');
    const [h,m,s] = time;
    document.querySelector('.mini-hour').style.transform = `rotate(${h * 30 + m / 2}deg)`;
    document.querySelector('.mini-minute').style.transform = `rotate(${m * 6}deg)`;
    document.querySelector('.mini-second').style.transform = `rotate(${s * 6}deg)`;
    document.querySelector('.hand.hour').style.transform = `rotate(${h * 30 + m / 2}deg)`;
    document.querySelector('.hand.minute').style.transform = `rotate(${m * 6}deg)`;
    document.querySelector('.hand.second').style.transform = `rotate(${s * 6}deg)`;
  };
  updateClock(); setInterval(updateClock, 1000);

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: .12});
  document.querySelectorAll('.section-no,.two-col>div,.wide-image,.section-heading,.exhibit-card,.manifesto-text,.collection-item,.visit-copy,.contact-form').forEach(el => { el.classList.add('reveal'); observer.observe(el); });

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.wide-image img,.exhibit-card img').forEach(img => gsap.fromTo(img,{y:25},{y:-25,ease:'none',scrollTrigger:{trigger:img,parent:null,start:'top bottom',end:'bottom top',scrub:true}}));
  }
});