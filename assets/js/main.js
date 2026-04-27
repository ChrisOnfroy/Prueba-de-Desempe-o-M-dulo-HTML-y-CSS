const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const trailerButton = document.querySelector('[data-trailer-button]');
const trailerMedia = document.querySelector('[data-trailer-media]');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

if (trailerButton && trailerMedia) {
  trailerButton.addEventListener('click', () => {
    if (trailerButton.classList.contains('is-playing')) {
      return;
    }

    const videoId = trailerButton.dataset.videoId;
    const iframe = document.createElement('iframe');

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = 'Toxiti -system of a down';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    trailerMedia.innerHTML = '';
    trailerMedia.appendChild(iframe);
    trailerButton.classList.add('is-playing');
  });
}