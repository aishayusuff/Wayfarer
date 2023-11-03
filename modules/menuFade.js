/**
 * Handles the hover effect for menu items
 * @param {number} opacityValue - the opacity value to be set
 * @param {string} nav - the container selector
 * @param {string} link - the target link class 
 * @param {string} linkClass - the target link class selector
 * @param {MouseEvent} e - the mouse event object
 */
const handlesHover = function (opacityValue, nav, link, linkClass, e) {
  if (e.target.classList.contains(link)) {
    const linksiblings = e.target.closest(nav).querySelectorAll(linkClass);
    const logo = e.target.closest(nav).querySelector(".nav-logo");
    const brandName = e.target.closest(nav).querySelector(".name");

    linksiblings.forEach(function (el) {
      if (el !== e.target) {
        el.style.opacity = opacityValue;
      }
    });

    //Ensures fade occurs only when nav links are hovered, not logo or name
    if (nav === ".nav") {
      logo.style.opacity = opacityValue;
      brandName.style.opacity = opacityValue;
    }
  }
};

/**
 * Initialises the hover effect for a navigation container.
 * @param {string} containerSelector 
 * @param {string} link 
 * @param {string} linkClass 
 */
export const initialisesMenuFade = function (containerSelector, link, linkClass) {
  const nav = document.querySelector(containerSelector);
  //Adds fade to Header
  if (nav) {
    nav.addEventListener(
      "mouseover",
      handlesHover.bind(null, 0.5, containerSelector, link, linkClass)
    );
  }

  //removes fade from Header
  nav.addEventListener(
    "mouseout",
    handlesHover.bind(null, 1, containerSelector, link, linkClass)
  );
};
