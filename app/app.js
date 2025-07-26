// Simple client-side router loading pages via fetch
const routes = {
  home: 'index.html',
  categories: 'categories.html',
  search: 'search.html',
  list: 'list.html'
};

const container = document.getElementById('app');
const homeHTML = container.innerHTML;
const homeStyleEl = document.querySelector('style[data-home]');
const homeStyle = homeStyleEl ? homeStyleEl.textContent : '';
if (homeStyleEl) homeStyleEl.remove();

function removeDynamicStyles() {
  document.querySelectorAll('style[data-dynamic]').forEach(el => el.remove());
}

function applyStyle(content) {
  const style = document.createElement('style');
  style.dataset.dynamic = '';
  style.textContent = content;
  document.head.appendChild(style);
}

async function loadView(view) {
  if (view === 'home') {
    removeDynamicStyles();
    applyStyle(homeStyle);
    container.innerHTML = homeHTML;
    return;
  }
  const path = routes[view];
  if (!path) return;
  const resp = await fetch(path);
  const html = await resp.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  removeDynamicStyles();
  doc.head.querySelectorAll('style').forEach(s => applyStyle(s.textContent));
  container.innerHTML = doc.body.innerHTML;
}

function router() {
  const view = location.hash.slice(1) || 'home';
  loadView(view);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (link && link.getAttribute('href').length > 1) {
      e.preventDefault();
      const hash = link.getAttribute('href');
      location.hash = hash;
    }
  });
  router();
});
