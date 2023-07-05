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
// window.addEventListener("DOMContentLoaded", function () {
//   var pictureElement = document.querySelector("picture");
//   var imgElement = pictureElement.querySelector("img");
//   var textOverlayElement = document.querySelector(".text-overlay");

//   function updateTextOverlay() {
//     var screenWidth = window.innerWidth;
//     var text = "";

//     if (screenWidth > 900) {
//       text = "Large Picture";
//     } else if (screenWidth > 550) {
//       text = "Medium Picture";
//     } else {
//       text = "Small Picture";
//     }

//     textOverlayElement.textContent = text;
//   }

//   window.addEventListener("resize", updateTextOverlay);

//   updateTextOverlay();
// });

// USE FOR TESTING BANNER
// var testDay = 1;
var today = new Date().getDay();

// USE FOR TESTING BANNER
// if (testDay === 1 || testDay === 2) {
if (today === 1 || today === 2) {
  // Create the banner element
  var banner = document.createElement("div");
  banner.className = "banner";
  banner.innerText =
    "Come join us for the Chamber meet and greet Monday and Tuesday at 7:00pm!";

  // Append the banner to the body
  document.body.appendChild(banner);

  // Show the banner
  banner.style.display = "block";

  document.body.style.paddingTop = "40px";
}
