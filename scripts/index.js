let currentdate = document.lastModified;
document.querySelector("#update").textContent = currentdate;
console.log(currentdate);

let year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;
console.log(year);
