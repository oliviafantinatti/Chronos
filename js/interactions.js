// Filtros do acervo, lightbox, modais e formulário demonstrativo
document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter');
  const items = document.querySelectorAll('.collection-item');
  filters.forEach(filter => filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active')); filter.classList.add('active');
    items.forEach(item => { item.hidden = filter.dataset.filter !== 'todos' && item.dataset.category !== filter.dataset.filter; });
  }));

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');
  const closeLightbox = () => { lightbox.classList.remove('open'); document.body.classList.remove('lock'); };
  items.forEach(item => item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.full; lightboxImage.alt = item.dataset.title;
    caption.textContent = item.dataset.title; lightbox.classList.add('open'); document.body.classList.add('lock');
  }));
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  const descriptions = {
    civilizacoes:['O nascimento das civilizações','Descubra como os primeiros centros urbanos surgiram às margens de grandes rios, criando novas formas de organização, escrita, arquitetura e convivência.'],
    imperios:['Os impérios da Antiguidade','Uma jornada por sociedades que expandiram fronteiras, construíram monumentos e influenciaram leis, línguas, artes e tradições.'],
    ciencia:['A revolução científica','Conheça ideias, instrumentos e descobertas que transformaram a observação da natureza e mudaram nossa compreensão do universo.'],
    guerras:['As grandes guerras','Uma reflexão sobre os conflitos que marcaram o mundo contemporâneo, suas consequências humanas e os esforços pela memória e pela paz.'],
    tecnologia:['O mundo tecnológico','Explore a evolução das invenções e das redes que conectaram o planeta, alterando o cotidiano e abrindo novas possibilidades.']
  };
  const modal = document.getElementById('infoModal');
  document.querySelectorAll('[data-exhibit]').forEach(button => button.addEventListener('click', () => {
    const [title, text] = descriptions[button.dataset.exhibit];
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;
    modal.classList.add('open'); document.body.classList.add('lock');
  }));
  const closeModal = () => { modal.classList.remove('open'); document.body.classList.remove('lock'); };
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  modal.querySelector('a').addEventListener('click', closeModal);

  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    document.getElementById('formFeedback').textContent = `Obrigado, ${name}! Sua mensagem foi registrada nesta demonstração.`;
    e.target.reset();
  });
});