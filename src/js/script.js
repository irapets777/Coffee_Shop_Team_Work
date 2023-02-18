// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });

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
// ================================================================= //

/**Our story slider */

let slider = $(document).ready(function () {
  $('.our__blog_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    prevArrow: '<img class="arrow left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow right" src="img/our_blog/arrow-right.svg" alt="">',
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 2,
    //       variableWidth: false,
    //     }
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //       variableWidth: false,
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       variableWidth: false,
    //     }
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       variableWidth: false,
    //     }
    //   }
    // ]
  });
});