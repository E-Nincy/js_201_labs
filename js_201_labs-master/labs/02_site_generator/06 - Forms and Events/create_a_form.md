# Create a Form

In these labs you'll create a form that takes someone's details.

1. Create a sandbox and make a form element using JavaScript. That is, don't use HTML form markup, but create the form using `document.createElement()`, or your custom library.
2. Use JavaScript to populate that form with some made up data.
3. Experiment with different input types. Make sure everything has an appropriate label. Be sure to include:

    - Radio buttons
    - Multiple choice buttons
    - `select` elements
    - At least one date input

4. Make a submit button and a submit handler to log all the information input in the form to the console using the `FormData` object.

  ```js
  // Create the form
  const form = document.createElement("form");

  // === Name (input text) ===
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.value = "Nincy"; // example data
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);
  form.appendChild(document.createElement("br"));


  // === Date input ===
  const dateLabel = document.createElement("label");
  dateLabel.innerText = "Birth date: ";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "birthday";  // example date
  dateInput.value = "1999-05-17";
  dateLabel.appendChild(dateInput);
  form.appendChild(dateLabel);
  form.appendChild(document.createElement("br"));


  // === Radio buttons ===
  form.appendChild(document.createTextNode("Gender: "));
  ["Female","Male","Other"].forEach(option => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "gender";
    radio.value = option;
    label.appendChild(radio);
    label.append(" " + option + " ");
    form.appendChild(label);
  });
  form.appendChild(document.createElement("br"));


  // === Multiple choice (checkbox) ===
  form.appendChild(document.createTextNode("Interests: "));
  ["Music","Movies","Art","Coding"].forEach(item => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "interests";
    checkbox.value = item;
    label.appendChild(checkbox);
    label.append(" " + item + " ");
    form.appendChild(label);
  });
  form.appendChild(document.createElement("br"));


  // === Select ===
  const countryLabel = document.createElement("label");
  countryLabel.innerText = "Country: ";
  const select = document.createElement("select");
  select.name = "country";
  ["Argentina","Mexico","Spain","Chile","Uruguay"].forEach(country => {
    const opt = document.createElement("option");
    opt.value = country;
    opt.innerText = country;
    select.appendChild(opt);
  });
  countryLabel.appendChild(select);
  form.appendChild(countryLabel);
  form.appendChild(document.createElement("br"));


  // === Submit button ===
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Send";
  form.appendChild(submitButton);

  // === Submit handler ===
  // Prevents page reload and logs form data to console
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    console.log("Form Submitted:");
    for (let [key, value] of data.entries()) {
      console.log(key, ":", value);
    }
  });

  // Add form to the document
  document.body.appendChild(form);
  ```
