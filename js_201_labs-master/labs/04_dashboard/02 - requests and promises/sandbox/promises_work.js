// --- Random number generator ---
function randomNumber() {
  return new Promise((resolve) => {
    const num = Math.floor(Math.random() * 100);
    resolve(num);
  });
}

// --- Get two random numbers and add them ---
randomNumber()
  .then((num1) => {
    return randomNumber().then((num2) => {
      console.log(`Sum of ${num1} + ${num2} =`, num1 + num2);
    });
  })
  .catch((err) => console.error(err));

// --- Fetch data using Promises ---
fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => res.json())
  .then((data) => {
    const img = document.createElement("img");
    img.src = data[0].url;
    document.body.appendChild(img);
  })
  .catch((err) => console.error(err));

// --- Use Promise.all() to make two requests ---
Promise.all([
  fetch("https://api.agify.io?name=michael").then((r) => r.json()),
  fetch("https://api.genderize.io?name=michael").then((r) => r.json()),
])
  .then(([ageData, genderData]) => {
    console.log("Age Data:", ageData);
    console.log("Gender Data:", genderData);
  })
  .catch((err) => console.error(err));

// --- Button promise functions ---
function waitForButtonPress(button) {
  return new Promise((resolve) => {
    button.addEventListener("click", () => {
      resolve("Button pressed!");
    });
  });
}

function onEveryPress(button) {
  button.addEventListener("click", () => {
    console.log("Button clicked again!");
  });
}
