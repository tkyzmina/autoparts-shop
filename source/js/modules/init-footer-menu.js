const initFooterMenu = () => {
  let triggers = document.querySelectorAll(".footer__column-header");

  if (triggers) {
    triggers.forEach((item) =>
      item.addEventListener("click", () => {
        const parent = item.nextElementSibling;
        item.classList.toggle("trigger--active");
        if (parent.classList.contains("js-submenu--active")) {
          parent.classList.remove("js-submenu--active");
          parent.classList.remove("hide");
        } else {
          document
            .querySelectorAll(".js-submenu")
            .forEach((child) => child.classList.remove("js-submenu--active"));
          parent.classList.add("js-submenu--active");
          parent.classList.add("show");
        }
      })
    );
  }
};

export { initFooterMenu };
