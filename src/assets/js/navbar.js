function initNavbar() {
  const hamburger = document.querySelector('#hamburger');
  const mobileMenu = document.querySelector('#mobileMenu');
  const mobileLinks = document.querySelectorAll('#mobileMenu a');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}