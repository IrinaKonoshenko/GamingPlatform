const header = document.querySelector(".header");

window.onscroll = function () {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

const swiper = new Swiper(".swiper", {
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".abouthero__block-next",
    prevEl: ".abouthero__block-prev",
  },
});
