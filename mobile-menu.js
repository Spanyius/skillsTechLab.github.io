(function () {
  const toggle = document.querySelector('.demo-menu-toggle');
  const nav = document.getElementById('demo-primary-nav');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.dataset.open = open ? 'true' : 'false';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    document.body.classList.toggle('demo-menu-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (!event.target.closest('.demo-nav')) setOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) setOpen(false);
  });
})();
