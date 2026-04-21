
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  // otevření / zavření tlačítkem
  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // zabrání zavření hned po kliknutí
    nav.classList.toggle('open');
  });

  // kliknutí mimo menu → zavřít
  document.addEventListener('click', (e) => {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOnButton = toggle.contains(e.target);

    if (!isClickInsideNav && !isClickOnButton) {
      nav.classList.remove('open');
    }
  });

  // kliknutí na položku menu → zavřít
  document.querySelectorAll('.menu__option').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
