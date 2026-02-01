document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (!btn || !menu) return;
  
  const openMenu = () => {
    menu.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
  };
  
  const closeMenu = () => {
    menu.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  };
  
  // toggle button
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // ⬅️ ВАЖЛИВО
    const isOpen = !menu.hasAttribute('hidden');
    isOpen ? closeMenu() : openMenu();
  });
  
  // click inside menu → НЕ закривати
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // click outside → закрити
  document.addEventListener('click', () => {
    closeMenu();
  });
  
  // ESC → закрити
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});

fetch('./partials/question-banner.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('question-banner').innerHTML = html;
  });

fetch('./partials/small-footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('small-footer').innerHTML = html;
  });

