const initHeader = () => {
  const mobileMenu = document.querySelector(".header__mob-menu");
  const headerToggle = document.querySelector(".header__button");
  if (mobileMenu && headerToggle) {
    headerToggle.addEventListener("click", function () {
      headerToggle.classList.toggle("header__button--active");
      mobileMenu.classList.toggle("header__mob-menu--show");
      headerToggle.classList.toggle("header__button--mobile");
    });
  }
};

export { initHeader };
