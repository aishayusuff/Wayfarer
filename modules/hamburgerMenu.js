export const opensHamburger = function (containerSelector) {
  const menuLinks = document.querySelector(".hamburger-nav-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const hamburgerOverlay = document.querySelector(".hamburger-overlay");

  containerSelector.addEventListener("click", function () {
    menuLinks.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
    hamburgerOverlay.classList.toggle("blur");
  });

  if (menuLinks.classList.contains(".open")) {
    smoothScrollToTop();
  }

  const smoothScrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};
