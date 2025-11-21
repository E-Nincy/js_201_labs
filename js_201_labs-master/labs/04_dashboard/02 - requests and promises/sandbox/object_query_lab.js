// --- Convert object to query string ---
function objectToQuery(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") throw new Error("Nested objects not allowed");
  }
  return Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

// --- Convert query string to object ---
function queryToObject(query) {
  return Object.fromEntries(new URLSearchParams(query));
}

// --- Example ---
const query = objectToQuery({ name: "Nincy", city: "Madrid" });
console.log(query);
console.log(queryToObject(query));

// --- Extract query from current URL ---
const params = new URLSearchParams(window.location.search);
const result = Object.fromEntries(params.entries());
console.log("Query from URL:", result);