document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".js-header");
  const headerMenu = document.querySelector(".js-navbar-menu");
  const headerMenuBtn = document.querySelector(".js-hamburger");
  const headerMenuTogglers = document.querySelectorAll(".js-menu-toggler");
  const loader = document.querySelector(".js-loader");

  // Remover loader when page finish loading
  if (loader) {
    loader.classList.remove("loader--active");
  }

  // Header Animation Classes
  const HEADER_SLIDE_DOWN_CLASS = "header--slideDown";
  const HEADER_SLIDE_UP_CLASS = "header--slideUp";

  // Reset scroll position to top on page load
  (function resetScrollPos() {
    window.scroll(0, 0);
  })();

  // Adding events to elements
  function addEventToElem(evt, target, cb) {
    target.addEventListener(evt, cb);
  }

  // Window scroll event
  addEventToElem("scroll", window, handleHeaderScroll);

  // Main header / Navbar slide-in-out handler
  let lastScrolled = 0;

  function handleHeaderScroll() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition === 0) {
      header.classList.remove(HEADER_SLIDE_DOWN_CLASS);
      header.classList.remove(HEADER_SLIDE_UP_CLASS);
      /* <|-------------|> */
    } else if (currentScrollPosition > lastScrolled) {
      header.classList.remove(HEADER_SLIDE_DOWN_CLASS);
      header.classList.add(HEADER_SLIDE_UP_CLASS);
      /* <|-------------|> */
    } else {
      header.classList.add(HEADER_SLIDE_DOWN_CLASS);
      header.classList.remove(HEADER_SLIDE_UP_CLASS);
    }

    lastScrolled = currentScrollPosition;
  }

  // Header menu state handler
  Array.from(headerMenuTogglers, (elem) => {
    addEventToElem("click", elem, handleHeaderMenuState);
  });

  function handleHeaderMenuState() {
    headerMenu.classList.toggle("header__menu--open");
    headerMenuBtn.classList.toggle("header__toggle--on");
  }

  // Owl-carousel options
  $(".js-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoHeight: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    autoPlayTimeout: 1000,
    autoplaySpeed: 1800,
    smartSpeed: 800,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      1300: {
        items: 5,
      },
      1140: {
        items: 4,
      },
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
    },
  });
});
