// Gets the current year and places it in the #year
// let date = new Date();
// let year = date.getFullYear();
// document.querySelector("#day").textContent = year;

const datefield = document.querySelector("#date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

datefield.innerHTML = `<p class="date-time">${fulldate}</p>`;

// Gets the last date modified and places it in #update
let currentdate = document.lastModified;
document.querySelector("#update").textContent = currentdate;

function myFunction() {
  var x = document.querySelector(".page-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



// Handles picture size changing for W06 Responsive Design
window.addEventListener('DOMContentLoaded', function() {
  var pictureElement = document.querySelector('picture');
  var imgElement = pictureElement.querySelector('img');
  var textOverlayElement = document.querySelector('.text-overlay');

  function updateTextOverlay() {
    var screenWidth = window.innerWidth;
    var text = '';

    if (screenWidth > 900) {
      text = "Large Picture";
    } else if (screenWidth > 550) {
      text = "Medium Picture";
    } else {
      text = "Small Picture";
    }

    textOverlayElement.textContent = text;
  }

  window.addEventListener('resize', updateTextOverlay);

  updateTextOverlay();
});