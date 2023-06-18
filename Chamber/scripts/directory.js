const requestURL =
  "https://mckadedaines.github.io/WDD230-pt.2/Chamber/json/data.json";

document.getElementById("cards").addEventListener("click", displayCards);
document.getElementById("list").addEventListener("click", displayList);

async function displayCards() {
  const response = await fetch(requestURL);
  if (response.ok) {
    const jsonObject = await response.json();
    console.log(jsonObject);
    const cards = jsonObject["directory"];
    clearDisplay();
    cards.forEach(displayBusinessAsCard);
  }
}

async function displayList() {
  const response = await fetch(requestURL);
  if (response.ok) {
    const jsonObject = await response.json();
    console.log(jsonObject);
    const cards = jsonObject["directory"];
    clearDisplay();
    cards.forEach(displayBusinessAsList);
  }
}

function displayBusinessAsCard(card) {
  let section = document.createElement("section");
  let h2 = document.createElement("h2");
  let address = document.createElement("p");
  let website = document.createElement("p");
  let img = document.createElement("img");

  h2.textContent = card.name;
  address.textContent = card.address;
  website.textContent = card.website;
  img.setAttribute("src", card.imageurl);
  img.setAttribute("alt", card.name);

  section.appendChild(h2);
  section.appendChild(address);
  section.appendChild(website);
  section.appendChild(img);

  document.querySelector(".cards.list-table").appendChild(section);
}

function displayBusinessAsList(card) {
  let tableRow = document.createElement("div");
  let nameCell = document.createElement("div");
  let addressCell = document.createElement("div");
  let websiteCell = document.createElement("div");

  nameCell.textContent = card.name;
  addressCell.textContent = card.address;
  websiteCell.textContent = card.website;

  tableRow.appendChild(nameCell);
  tableRow.appendChild(addressCell);
  tableRow.appendChild(websiteCell);

  document.querySelector(".cards.list-table").appendChild(tableRow);
}

function clearDisplay() {
  document.querySelector(".cards.list-table").innerHTML = "";
}

// Automatically display the cards when the page loads
displayCards();
