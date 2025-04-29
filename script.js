
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  function checkFade() {
    faders.forEach(fader => {
      const rect = fader.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        fader.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade();
});
