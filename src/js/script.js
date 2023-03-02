// Our-Story-Slider //
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// More Text in section OUR-STORY!!! //
// One Story //
function ourStory() {
  let dotsStart = document.getElementById("dotsStart");
  let moreTextStart = document.getElementById("more-story");
  let btnTextStart = document.getElementById("myBtnStory");

  if (dotsStart.style.display === "none") {
    dotsStart.style.display = "inline";
    btnTextStart.innerHTML = "More";
    moreTextStart.style.display = "none";
  } else {
    dotsStart.style.display = "none";
    btnTextStart.innerHTML = "Less";
    moreTextStart.style.display = "inline";
  }
}
// Two Story //
function ourStoryFirst() {
  let dotsFirst = document.getElementById("dotsFirst");
  let moreTextFirst = document.getElementById("more-storyFirst");
  let btnTextFirst = document.getElementById("myBtnStoryFirst");

  if (dotsFirst.style.display === "none") {
    dotsFirst.style.display = "inline";
    btnTextFirst.innerHTML = "More";
    moreTextFirst.style.display = "none";
  } else {
    dotsFirst.style.display = "none";
    btnTextFirst.innerHTML = "Less";
    moreTextFirst.style.display = "inline";
  }
}
// Three Story //
function ourStorySecond() {
  let dotsSecond = document.getElementById("dotsSecond");
  let moreTextSecond = document.getElementById("more-storySecond");
  let btnTextSecond = document.getElementById("myBtnStorySecond");

  if (dotsSecond.style.display === "none") {
    dotsSecond.style.display = "inline";
    btnTextSecond.innerHTML = "More";
    moreTextSecond.style.display = "none";
  } else {
    dotsSecond.style.display = "none";
    btnTextSecond.innerHTML = "Less";
    moreTextSecond.style.display = "inline";
  }
}
// ================================================================= //
// Table JS Code //



// ================================================================= //
// Slider Recomended //
var swiper = new Swiper(".recommended__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ================================================================= //
/**Our Blog slider */
var swiper = new Swiper(".container__blog-slider", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: false,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});

// One Blog //
function moreText() {
  let dots = document.getElementById("less");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("btnBlog");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    moreText.style.display = "inline";
  }
}

// Two Blog //
function moreText1() {
  let dots1 = document.getElementById("less1");
  let moreText1 = document.getElementById("more1");
  let btnText1 = document.getElementById("btnBlog1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "More";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Less";
    moreText1.style.display = "inline";
  }
}

// Three Blog //
function moreText2() {
  let dots2 = document.getElementById("less2");
  let moreText2 = document.getElementById("more2");
  let btnText2 = document.getElementById("btnBlog2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "More";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Less";
    moreText2.style.display = "inline";
  }
}
// ================================================================= //
/**Popular Menu section our menu btn */
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  btn.style.display = "none";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
  btn.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    btn.style.display = "block";
  }
}
// ================================================================= //
// Customer Review SLIDER //
var swiper = new Swiper(".review__slider-container", {
  slidesPerView: 3,
  spaceBetween: 84,
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 25,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

});
// ================================================================= //