// --- Create new date ---
let date = new Date();

// --- Add 10 seconds ---
date.setSeconds(date.getSeconds() + 10);
console.log("After 10 seconds:", date);

// --- Add 23 milliseconds ---
date.setMilliseconds(date.getMilliseconds() + 23);
console.log("After 23 ms:", date);

// --- Print parts ---
console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1);
console.log("Day:", date.getDate());
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());

// --- Milliseconds since epoch ---
const ms = date.getTime();
console.log("Milliseconds since 1970:", ms);

// --- Multiply by 1.2 and convert back ---
const newDate = new Date(ms * 1.2);
console.log("New date:", newDate);

// --- Show in 3 time zones ---
console.log(
  "New York:",
  new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", timeStyle: "full" }).format(date)
);
console.log(
  "Tokyo:",
  new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", timeStyle: "full" }).format(date)
);
console.log(
  "Madrid:",
  new Intl.DateTimeFormat("es-ES", { timeZone: "Europe/Madrid", timeStyle: "full" }).format(date)
);

// --- Show in 3 formats ---
console.log(
  "Full format:",
  new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long" }).format(date)
);
console.log(
  "Medium format:",
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "medium" }).format(date)
);
console.log(
  "Short format:",
  new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "short" }).format(date)
);