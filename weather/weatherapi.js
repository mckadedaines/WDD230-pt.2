const url =
  "https://api.openweathermap.org/data/2.5/weather?q=fairbanks&appid=22569e3a1a6455138bbd985b0660d5fa";
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  const tempInKelvin = weatherData.main.temp;
  const tempInFahrenheit = ((tempInKelvin - 273.15) * 9) / 5 + 32;

  currentTemp.innerHTML = `<strong>${tempInFahrenheit.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
