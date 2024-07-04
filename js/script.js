const aucSwiper = new Swiper("#auc-swiper", {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    prevEl: "#btnPrev",
    nextEl: "#btnNext",
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});

const colSwiper = new Swiper("#col-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 35,
  navigation: {
    nextEl: "#col-btnNext",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      // centeredSlides: true,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});

const catSwiper = new Swiper("#cat-swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 35,
  navigation: {
    prevEl: "#col-btnPrev",
    nextEl: "#col-btnNext",
  },
  breakpoints: {
    300: {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 25,
    },
    450: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});

// Burger Menu

const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".header__nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
  document.body.classList.toggle("no-scroll");
};

// Form

formBtn = document.querySelector(".form__btn");
formInput = document.querySelector(".form__mail");

formBtn.addEventListener("click", function () {
  if (formInput.value == "") {
    alert("You should write your email ");
  } else {
    formInput.value = "";
    alert("You have successfully subscribed");
  }
});

// Loader

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
});
