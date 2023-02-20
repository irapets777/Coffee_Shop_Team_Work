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



/**Our story slider */

let slider = $(document).ready(function () {
  $('.our__blog_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    
    // variableWidth: true,
    prevArrow: '<img class="arrow left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow right" src="img/our_blog/arrow-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      }
    ]
  });
});


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
