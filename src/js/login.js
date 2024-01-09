// Change text

var defaultText = 0;
var texts = [
   'make registration.',
   'login to your account.',
   'have a good day.'
];
var speed = 70;
var currentTextIndex = 0;

function typeWriter() {
   var existingTextElement = document.getElementById("changeText");
   var existingText = existingTextElement.innerHTML;

   if (defaultText < texts[currentTextIndex].length) {
      if (existingText.endsWith(texts[currentTextIndex].charAt(defaultText))) {
         // Delete repetable words
         defaultText++;
      } else {
         existingTextElement.innerHTML = existingText + texts[currentTextIndex].charAt(defaultText);
         defaultText++;
      }
      setTimeout(typeWriter, speed);
   } else {
      // Wait 2 seconds to show next text
      setTimeout(function () {
         // Increment index to show nexr text
         currentTextIndex = (currentTextIndex + 1) % texts.length;
         // 
         defaultText = 0;
         // Keep "Hello"
         existingTextElement.innerHTML = 'Hello ' + texts[currentTextIndex].charAt(defaultText);
         // Call typeWriter() again
         setTimeout(typeWriter, speed);
      }, 2000);
   }
}

// Call typeWriter() to start show text
typeWriter();

// =========================================================================================== //

// Get elements to show password
let passwordInput = document.getElementById("passwordInput");
let showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

// Add event listener to the checkbox
showPasswordCheckbox.addEventListener("change", function () {
   // Change the type of the password input based on the checkbox state
   passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
});

// =========================================================================================== //

// Get user popup form
let popupForm = document.getElementById("popupRegistration");

// Get the button that opens popup form
let btnPopup = document.getElementById("openLogin");

// When user clicks the button, open popup form
btnPopup.onclick = function () {
   if (popupForm.style.animationName !== "animatebottom") {
      popupForm.style.display = "block";
   }
}

// Get span element that closes popup form
let span = document.getElementsByClassName("close-form-registration")[0];

// When user clicks on span (x), close popup form
span.onclick = function () {
   closePopupForm();
}

// Get button element that cancels popup form
let btnCancel = document.getElementById("btnCancel");

// When user clicks on Cancel button, close popup form
btnCancel.onclick = function () {
   closePopupForm();
}

// Function to close the popup form
function closePopupForm() {
   popupForm.style.animationName = "animatebottom";
   popupForm.style.animationDuration = "0.4s";
   setTimeout(function () {
      popupForm.style.display = "none";
      popupForm.style.animationName = "";
   }, 400);
}