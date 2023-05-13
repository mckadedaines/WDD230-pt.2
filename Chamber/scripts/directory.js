const requestURL =
  "https://mckadedaines.github.io/WDD230/Chamber/json/data.json";

async function getCards(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const jsonObject = await response.json();
    console.log(jsonObject);
    const cards = jsonObject["directory"];
    cards.forEach(displayBusiness);
    // prophets.forEach(displayTable);
  }
}

getCards(requestURL);

function displayBusiness(cards) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let add = document.createElement("p");
  let web = document.createElement("p");
  let img = document.createElement("img");

  h2.textContent = cards.name;
  // Stopped right here
  add.textContent = cards.address;
  web.textContent = cards.website;
  img.setAttribute("src", cards.imageurl);
  img.setAttribute("alt", `${cards.name}`);
  card.appendChild(h2);
  card.appendChild(add);
  card.appendChild(web);
  card.appendChild(img);
  document.querySelector(".cards").appendChild(card);
}
