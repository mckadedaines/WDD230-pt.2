// Gets the current year and places it in the #year
let date = new Date();
let year = date.getFullYear();
document.querySelector("#year").textContent = year;

// Gets the last date modified and places it in #update
let currentdate = document.lastModified;
document.querySelector("#update").textContent = currentdate;
