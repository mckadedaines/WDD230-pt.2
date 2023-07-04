const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5304391&appid=22569e3a1a6455138bbd985b0660d5fa";

const getWeather = async () => {
  const response = await fetch(apiURL);
  const jsObject = await response.json();
  console.log(jsObject);

  const temperature = jsObject.main.temp - 273.15;
  const windSpeed = jsObject.wind.speed;

  const fahrenheit = temperature * 1.8 + 32;
  document.querySelector("#current-temp").textContent = fahrenheit.toFixed(2);

  const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  const desc = jsObject.weather[0].description;
  const speed = windSpeed;
  document.querySelector("#weathericon").setAttribute("src", iconsrc);
  document.querySelector("#weathericon").setAttribute("alt", desc);
  document.querySelector("figcaption").textContent = desc;
  document.querySelector("#speed").textContent = speed;

  buildWC(speed, fahrenheit);
};

function buildWC(speed, temperature) {
  let feelTemp = document.getElementById("feelTemp");

  if (temperature > 50) {
    feelTemp.innerHTML = "N/A";
    return;
  }

  // Compute the windchill
  let wc =
    35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temperature * Math.pow(speed, 0.16);
  console.log(wc);

  // Round the answer down to integer
  let roundedWC = Math.floor(wc);

  // If windchill is greater than temperature, return the temperature
  wc = roundedWC > temperature ? temperature : roundedWC;

  feelTemp.innerHTML = wc.toFixed(2);

  // Display the windchill
  console.log(wc);
}

getWeather();
