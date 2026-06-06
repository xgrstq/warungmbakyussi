async function loadComponent(id, file) {
  const response = await fetch(file);

  if (!response.ok) {
    throw new Error(`Failed to load ${file}`);
  }

  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

async function initApp() {
  await loadComponent("navbar", "./components/navbar.html");
  await loadComponent("hero", "./components/hero.html");
  await loadComponent("menu", "./components/menu.html");
  await loadComponent("catering", "./components/catering.html");
  await loadComponent("contact", "./components/contact.html");
  await loadComponent("footer", "./components/footer.html");

  initNavbar();
  renderMenuCards();
}

initApp();