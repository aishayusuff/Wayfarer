//Element selections
const nav = document.querySelector(".nav");

//Menu Fade
const handlesHover = function (e) {
  let opacityValue = this;
  if (e.target.classList.contains("nav-link")) {
    const siblings = e.target.closest(".nav").querySelectorAll(".nav-link");
    const logo = e.target.closest(".nav").querySelector(".nav-logo");
    const brandName = e.target.closest(".nav").querySelector(".name");

    siblings.forEach(function (el) {
      if (el !== e.target) {
        el.style.opacity = opacityValue;
      }
    });
    logo.style.opacity = opacityValue;
    brandName.style.opacity = opacityValue;
  }
};

//Adds fade
nav.addEventListener("mouseover", handlesHover.bind(0.5));

//removes fade
nav.addEventListener("mouseout", handlesHover.bind(1));
