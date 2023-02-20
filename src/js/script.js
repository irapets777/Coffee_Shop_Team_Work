// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });
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
function ourStory() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more-story");
  let btnText = document.getElementById("myBtnStory");

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
