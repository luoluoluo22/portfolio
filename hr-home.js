// Homepage-only interactions. Keep all meaningful content usable without JavaScript.
(() => {
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.getElementById('mobileNav');
  if (menuButton && mobileNav) {
    function setMenu(open) {
      mobileNav.hidden = !open;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
    }
    menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 780 && !mobileNav.hidden) setMenu(false);
    });
  }

  const navLinks = [...document.querySelectorAll('.desktop-nav .nav-link')];
  const targets = [
    { selector: '#top', hash: '#top' },
    { selector: '#projects', hash: '#projects' },
    { selector: '#experience', hash: '#experience' },
    { selector: '#contact', hash: '#contact' }
  ];
  function updateActiveNav() {
    const threshold = window.scrollY + 130;
    let active = '#top';
    for (const target of targets.slice(1)) {
      const element = document.querySelector(target.selector);
      if (element && element.offsetTop <= threshold) active = target.hash;
    }
    navLinks.forEach(link => {
      const selected = link.getAttribute('href') === active;
      link.classList.toggle('is-active', selected);
      if (selected) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
})();