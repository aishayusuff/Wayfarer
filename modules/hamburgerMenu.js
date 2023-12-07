export const opensHamburger = function (containerSelector) {
  const menuLinks = document.querySelector(".hamburger-nav-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  containerSelector.addEventListener("click", function () {
    menuLinks.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
  });

  if(menuLinks.classList.contains(".open")){
    smoothScrollToTop();
  }

  const smoothScrollToTop = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }
};
