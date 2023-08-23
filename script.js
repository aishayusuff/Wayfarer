//Element selections
const nav = document.querySelector(".nav");
const btnScroll = document.querySelector(".btn-scroll");
const section1 = document.getElementById("section-1");

//MENU FADE
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

//BUTTON SCROLL-TO
btnScroll.addEventListener("click", (e) =>
  section1.scrollIntoView({ behavior: "smooth" })
);

//TABBED COMPONENTS

const tabs = document.querySelectorAll(".services-tab");
const tabContainer = document.querySelector(".services-btn-container");
const contents = document.querySelectorAll(".services-content");

//add active to clicked tab in tab container - event listener
tabContainer.addEventListener("click", function (e) {
  let clicked = e.target.closest(".services-tab");

  if (clicked) {
    //removes active class from tabs
    tabs.forEach((tab) => tab.classList.remove("services-tab-active"));
    clicked.classList.add("services-tab-active");

    // remove active class from all service content
    console.log(clicked.dataset.tab);

    contents.forEach((cont) =>
      cont.classList.remove("services-content-active")
    );
    document
      .querySelector(`.services-content-${clicked.dataset.tab}`)
      .classList.add("services-content-active");
  }
});
