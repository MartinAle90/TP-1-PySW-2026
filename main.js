(function () {
  const menuToggle = document.getElementById("menu-toggle");

  if (menuToggle) {
    const burger = document.querySelector('label[for="menu-toggle"]');
    menuToggle.addEventListener("change", () => {
      const open = menuToggle.checked;
      if (burger) {
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      }
      document.body.style.overflow = open ? "hidden" : "";
    });
  }
})();
