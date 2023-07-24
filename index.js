const header = document.querySelector(".header");

window.onscroll = function () {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};
