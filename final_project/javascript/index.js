document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu
  document.querySelector(".hamburger").addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");
    if (navbar.style.display === "none") {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
  });

  // Last Data Modified
  let currentdate = document.lastModified;
  document.querySelector("#update").textContent = currentdate;

  document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    let currentIndex = 0;

    function showImage(index) {
      if (index < 0) {
        index = imageContainers.length - 1;
      } else if (index >= imageContainers.length) {
        index = 0;
      }

      imageContainers.forEach(function (container) {
        container.style.display = "none";
      });

      imageContainers[index].style.display = "block";
    }

    function rotateImages() {
      currentIndex++;
      showImage(currentIndex);

      if (currentIndex >= imageContainers.length) {
        currentIndex = 0; // Reset currentIndex to 0 to create an infinite loop
      }
    }

    // Initial image display
    showImage(currentIndex);

    // Automatic rotation every 4 seconds (adjust the delay as desired)
    setInterval(rotateImages, 3000);
  });

  // OpenWeatherMap API
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=22569e3a1a6455138bbd985b0660d5fa";

  const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);

    const temperature = jsObject.main.temp - 273.15;

    const fahrenheit = temperature * 1.8 + 32;
    document.querySelector("#current-temp").textContent = fahrenheit.toFixed(2);

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const humidity = jsObject.main.humidity;
    const forecast = jsObject.weather[0].main;

    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("#humidity").textContent = humidity + "%";
    document.querySelector("#forecast").textContent = forecast;
  };

  // Only run the getWeather function on the home page
  if (document.querySelector("#current-temp")) {
    getWeather();
  }
});

// Lazy Loading
document.addEventListener("DOMContentLoaded", () => {
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        imgObserver.unobserve(lazyImage);
      }
    });
  });
  const arr = document.querySelectorAll("img.lazy");
  arr.forEach((v) => {
    imageObserver.observe(v);
  });
});
