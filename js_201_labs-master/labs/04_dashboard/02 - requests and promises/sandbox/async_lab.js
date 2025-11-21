// Use same randomNumber() from previous lab

// --- Async: get 5 numbers sequentially ---
async function getFiveRandoms() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    const num = await randomNumber();
    total += num;
  }
  console.log("Sum of 5 random numbers:", total);
}

// --- Async: get 5 numbers in parallel ---
async function getFiveParallel() {
  const promises = Array.from({ length: 5 }, randomNumber);
  const results = await Promise.all(promises);
  console.log("Parallel sum:", results.reduce((a, b) => a + b, 0));
}

// --- Async API fetch and show in DOM ---
async function fetchJoke() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  const p = document.createElement("p");
  p.textContent = data.value;
  document.body.appendChild(p);
}

// --- Async 50/50 API call ---
async function randomAPI() {
  const num = await randomNumber();
  const api = num % 2 === 0
    ? "https://api.agify.io?name=john"
    : "https://api.genderize.io?name=john";

  const res = await fetch(api);
  const data = await res.json();
  console.log("API Result:", data);
}

// --- Async button press counter ---
function waitForPress(button) {
  return new Promise((resolve) => {
    button.addEventListener("click", resolve);
  });
}

async function counter(button) {
  let count = 0;
  while (true) {
    await waitForPress(button);
    count++;
    console.log(`Button pressed ${count} times`);
  }
}

// --- Async function in Promise chain ---
async function asyncRandom() {
  return Math.floor(Math.random() * 100);
}

asyncRandom()
  .then((n1) => {
    console.log("Random 1:", n1);
    return asyncRandom();
  })
  .then((n2) => {
    console.log("Random 2:", n2);
    return asyncRandom();
  })
  .then((n3) => console.log("Random 3:", n3))
  .catch(console.error);
