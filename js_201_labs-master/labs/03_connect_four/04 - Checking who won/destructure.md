# Practice Destructuring

**Note**: Using semi-colons to try and fit different expressions onto one line is considered cheating!

1. Assign three variables with different values on one line, that is, using only one `let` or `const` keyword.

    ```js
    // Write answer here
    ```

2. Take this object:

    ```js
    const user = {
      id: 29,
      GUID: "a03166a2-fb96-4fd9-bb2b-42c282932af4",
      SHA256: "936231e822019a9069a2fcf7cfd5de70e2db302987f5e9c57f6aa4c9f0c9aaff",
      username: "ngains",
      first_name: "Northrop",
      last_name: "Gain",
      email: "ngains@ted.com",
      ip_address: "98.30.16.67",
      time_zone: "Asia/Chongqing",
      department: "Engineering",
      previous_job: "Plumber",
      fav_buzzwords: [
        "analyzer",
        "Cross-platform",
        "maximized",
        "homogeneous",
        "software",
      ],
    };
    ```

    Use destructuring to create variables `username`, `time_zone` and `department`, on one line

    ```js
    // Write answer here
    ```

3. Using the same object, create the variables `id`, `email` and `previous_job`, and on the same line, assign the _rest_ of the key, value pairs in the object to a new object called `additionalInfo`.
  
    ```js
    // Write answer here
    ```
  
4. With the `additionalInfo` object from the last excercise, assign the first two `fav_buzzwords` to variables called `mostFavBuzzword` and `secondFaveBuzzword`, and assign the _rest_ of buzzwords to one other variable called `otherBuzzwords`. Do this, as with all the previous labs in this file, one one line.

    ```js
    // Write answer here
    ```
