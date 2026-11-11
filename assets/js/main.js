// Menú móvil + año dinámico
(() => {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  burger?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.menu a').forEach(a =>
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
