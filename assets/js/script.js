const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((link) => {
      link.classList.remove("ativo");
    });
    link.classList.add("ativo");
  });
});
