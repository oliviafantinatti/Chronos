// Conteúdo interativo dos cinco períodos históricos
const periods = {
  pre: {date:'2,5 MILHÕES A.C. — 3.500 A.C.',title:'Antes da<br><em>escrita.</em>',text:'Muito antes das primeiras cidades, nossos ancestrais aprenderam a dominar o fogo, criar ferramentas e registrar sua existência nas paredes das cavernas.',fact:'O INÍCIO DE TUDO',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85'},
  antiga: {date:'3.500 A.C. — 476 D.C.',title:'O berço das<br><em>civilizações.</em>',text:'Cidades, sistemas de escrita, comércio, filosofia e grandes impérios transformaram a organização humana e deixaram legados que atravessam milênios.',fact:'CIDADES E IMPÉRIOS',image:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85'},
  media: {date:'476 — 1453',title:'Entre fé e<br><em>poder.</em>',text:'Castelos, rotas comerciais, universidades e encontros entre culturas marcaram um período de profundas mudanças sociais, políticas e intelectuais.',fact:'UM MUNDO EM TRANSFORMAÇÃO',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85'},
  moderna: {date:'1453 — 1789',title:'Novos mundos,<br><em>novas ideias.</em>',text:'As grandes navegações, o Renascimento e a revolução científica ampliaram horizontes e mudaram a maneira como a humanidade compreendia o mundo.',fact:'A EXPANSÃO DO CONHECIMENTO',image:'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85'},
  contemp: {date:'1789 — PRESENTE',title:'O mundo em<br><em>movimento.</em>',text:'Revoluções, industrialização, conflitos globais e avanços tecnológicos redesenharam sociedades e aceleraram as conexões entre pessoas e culturas.',fact:'O TEMPO PRESENTE',image:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'}
};
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.period-tab');
  const image = document.getElementById('periodImage');
  function showPeriod(key, index) {
    const item = periods[key];
    document.getElementById('periodDate').textContent = item.date;
    document.getElementById('periodTitle').innerHTML = item.title;
    document.getElementById('periodText').textContent = item.text;
    document.getElementById('periodFact').textContent = item.fact;
    document.getElementById('periodCount').textContent = `0${index + 1} / 05`;
    image.style.opacity = 0;
    setTimeout(() => { image.style.backgroundImage = `url("${item.image}")`; image.style.opacity = 1; }, 180);
    tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.period === key));
  }
  image.style.backgroundImage = `url("${periods.pre.image}")`;
  tabs.forEach((tab, index) => tab.addEventListener('click', () => showPeriod(tab.dataset.period, index)));
});