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

  // Last Modified
  let currentdate = document.lastModified;
  document.querySelector("#update").textContent = currentdate;

  // JSON Form functions for the FRESH page
  const fruitDataUrl =
    "https://brotherblazzard.github.io/canvas-content/fruit.json";
  const fruit1Select = document.getElementById("fruit1");
  const fruit2Select = document.getElementById("fruit2");
  const fruit3Select = document.getElementById("fruit3");

  let fruitData = []; // Create an empty array to store the fetched data

  // Fetch fruit data from JSON file
  fetch(fruitDataUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      fruitData = data; // Assign fetched data to the fruitData array

      // Populate select elements with fruit options
      fruitData.forEach((fruit) => {
        const option1 = document.createElement("option");
        option1.text = fruit.name;
        option1.value = fruit.id;
        fruit1Select.add(option1);

        const option2 = document.createElement("option");
        option2.text = fruit.name;
        option2.value = fruit.id;
        fruit2Select.add(option2);

        const option3 = document.createElement("option");
        option3.text = fruit.name;
        option3.value = fruit.id;
        fruit3Select.add(option3);
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation: ",
        error
      );
    });

  // Users Submission card using Local Storage
  const form = document.getElementById("drinkForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const fruit1 = parseInt(fruit1Select.value, 10); // Convert value to int
    const fruit2 = parseInt(fruit2Select.value, 10); // Convert value to int
    const fruit3 = parseInt(fruit3Select.value, 10); // Convert value to int
    const specialInstructions = document.getElementById(
      "specialInstructions"
    ).value;

    // Calculate total nutritional values based on fruit choices
    const totalCarbohydrates = calculateTotalNutrition(
      [fruit1, fruit2, fruit3],
      fruitData,
      "carbohydrates"
    );
    const totalProtein = calculateTotalNutrition(
      [fruit1, fruit2, fruit3],
      fruitData,
      "protein"
    );
    const totalFat = calculateTotalNutrition(
      [fruit1, fruit2, fruit3],
      fruitData,
      "fat"
    );
    const totalSugar = calculateTotalNutrition(
      [fruit1, fruit2, fruit3],
      fruitData,
      "sugar"
    );
    const totalCalories = calculateTotalNutrition(
      [fruit1, fruit2, fruit3],
      fruitData,
      "calories"
    );

    // Display form values and nutritional information on the page
    const outputArea = document.getElementById("outputArea");
    outputArea.innerHTML = `
            <h2>Order Details</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Fruit 1:</strong> ${getFruitName(fruit1, fruitData)}</p>
            <p><strong>Fruit 2:</strong> ${getFruitName(fruit2, fruitData)}</p>
            <p><strong>Fruit 3:</strong> ${getFruitName(fruit3, fruitData)}</p>
            <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
            <h2>Nutritional Information</h2>
            <p><strong>Total Carbohydrates:</strong> ${totalCarbohydrates.toFixed(
              2
            )}g</p>
            <p><strong>Total Protein:</strong> ${totalProtein.toFixed(2)}g</p>
            <p><strong>Total Fat:</strong> ${totalFat.toFixed(2)}g</p>
            <p><strong>Total Sugar:</strong> ${totalSugar.toFixed(2)}g</p>
            <p><strong>Total Calories:</strong> ${totalCalories.toFixed(
              2
            )}kcal</p>
          `;
  });
});

// Helper function to calculate the total nutritional value based on fruit choices
function calculateTotalNutrition(fruitIds, fruitData, nutritionType) {
  let total = 0;
  fruitIds.forEach((id) => {
    const fruit = fruitData.find((item) => item.id === id);
    if (fruit) {
      total += fruit.nutritions[nutritionType]; // Access the nutritionType property inside the nutritions object
    }
  });
  return total;
}

// Helper function to get the name of a fruit based on its ID
function getFruitName(fruitId, fruitData) {
  const fruit = fruitData.find((item) => item.id === fruitId);
  return fruit ? fruit.name : "Unknown";
}

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
