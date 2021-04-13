const showSearchField = function () {
  const searchControls = document.querySelectorAll(".search__item");
  const searchTabs = document.querySelectorAll(".search__form");
  let dataNumer = "";

  if (searchControls && searchTabs) {
    searchControls.forEach((el) => {
      el.onclick = function (e) {
        e.preventDefault();
        selectConltol();
        dataNumer = e.target.getAttribute("data-control");
        this.classList.add("search__item--active");
        showtab(dataNumer);
      };
    });

    function selectConltol() {
      searchControls.forEach((el) => {
        el.classList.remove("search__item--active");
      });
    }

    function showtab(number) {
      searchTabs.forEach((el) => {
        el.classList.remove("search__form--active");
        let tabDataNumber = el.getAttribute("data-tab");
        if (tabDataNumber === number) {
          el.classList.add("search__form--active");
        }
      });
    }
  }
};

export { showSearchField };
