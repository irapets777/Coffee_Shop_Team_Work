const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
const contentLabel = document.getElementById("contentLabel");

let rating = 0;

decreaseBtn.onclick = function () {
   rating--;
   contentLabel.innerHTML = rating;
}

increaseBtn.onclick = function () {
   rating++;
   contentLabel.innerHTML = rating;
}

resetBtn.onclick = function () {
   rating = 0;
   contentLabel.innerHTML = rating;
}

submitBtn.onclick = function () {
   alert(`Your rating is: ${rating}`);
}