//Element selections
const nav = document.querySelector(".nav");
const btnScroll = document.querySelector(".btn-scroll");
const section1 = document.getElementById("section-1");
const footerNav = document.querySelector(".footer-nav");
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
const btnRight = document.querySelector(".slider-btn--right");
const btnLeft = document.querySelector(".slider-btn--left");

//MENU FADE
const handlesHover = function (opacityValue, nav, link, linkClass, e) {
  if (e.target.classList.contains(link)) {
    const siblings = e.target.closest(nav).querySelectorAll(linkClass);
    const logo = e.target.closest(nav).querySelector(".nav-logo");
    const brandName = e.target.closest(nav).querySelector(".name");

    siblings.forEach(function (el) {
      if (el !== e.target) {
        el.style.opacity = opacityValue;
      }
    });
    if (nav === ".nav") {
      logo.style.opacity = opacityValue;
      brandName.style.opacity = opacityValue;
    }
  }
};

//Adds fade to Header
nav.addEventListener(
  "mouseover",
  handlesHover.bind(null, 0.5, ".nav", "nav-link", ".nav-link")
);
//removes fade from Header
nav.addEventListener(
  "mouseout",
  handlesHover.bind(null, 1, ".nav", "nav-link", ".nav-link")
);

//Adds fade to Footer
footerNav.addEventListener(
  "mouseover",
  handlesHover.bind(null, 0.5, ".footer-nav", "footer-link", ".footer-link")
);
//removes fade from Footer
footerNav.addEventListener(
  "mouseout",
  handlesHover.bind(null, 1, ".footer-nav", "footer-link", ".footer-link")
);

//BUTTON SCROLL-TO
btnScroll.addEventListener("click", (e) =>
  section1.scrollIntoView({ behavior: "smooth" })
);

//TABBED COMPONENTS

const tabs = document.querySelectorAll(".services-tab");
const tabContainer = document.querySelector(".services-btn-container");
const contents = document.querySelectorAll(".services-content");

//adds active to clicked tab in tab container - event listener
tabContainer.addEventListener("click", function (e) {
  let clicked = e.target.closest(".services-tab");

  if (clicked) {
    //removes active class from tabs
    tabs.forEach((tab) => tab.classList.remove("services-tab-active"));
    clicked.classList.add("services-tab-active");

    // remove active class from all service content
    contents.forEach((cont) =>
      cont.classList.remove("services-content-active")
    );

    //adds active to content corresponding tab clicked
    document
      .querySelector(`.services-content-${clicked.dataset.tab}`)
      .classList.add("services-content-active");
  }
});

//Slider

//Creates dots

const createsDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots-dot dots-dot--active" data-slide="${i}"></button>`
    );
  });
};

//Activate the slides on click event AND when slides show on arrow click and keyboard click

// Shows slides based on which slide on currently, and move to another slide

let currentSlide = 0;
const slideLength = slides.length;

const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === slideLength - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
    console.log(currentSlide);
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slideLength - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

//Initial condition
createsDots();
goToSlide(currentSlide);

//Event handlers
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});
