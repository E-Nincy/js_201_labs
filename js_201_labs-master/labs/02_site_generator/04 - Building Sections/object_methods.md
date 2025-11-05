# Practicing `Object` Methods

Include these exercises in a solutions sandbox for this section.

1. Use `Object.assign()` to create a button element, and assign it's inner text to "Press me!".

2. Take this object:

   ```js
   {
     "id":2,
     "GUID":"f23ffc6c-f44f-496f-8542-217faa06fe2d",
     "SHA256":"e8c940e6d966e4ee85591413fafeb6512107d209f63d5b1fa67d5165bda45bff",
     "username":"lolman1",
     "first_name":"Leigh",
     "last_name":"Olman",
     "email":"lolman1@ifeng.com",
     "gender":"Genderqueer",
     "ip_address":"30.203.64.10",
     "status":"̡͓̞ͅI̗̘̦͝n͇͇͙v̮̫ok̲̫̙͈i̖͙̭̹̠̞n̡̻̮̣̺g̲͈͙̭͙̬͎ ̰t͔̦h̞̲e̢̤ ͍̬̲͖f̴̘͕̣è͖ẹ̥̩l͖͔͚i͓͚̦͠n͖͍̗͓̳̮g͍ ̨o͚̪͡f̘̣̬ ̖̘͖̟͙̮c҉͔̫͖͓͇͖ͅh̵̤̣͚͔á̗̼͕ͅo̼̣̥s̱͈̺̖̦̻͢.̛̖̞̠̫̰",
     "avatar":"https://robohash.org/temporedictaquisquam.png?size=50x50&set=set1",
     "bio":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
     "time_zone":"Asia/Shanghai",
     "profile_pic":"http://dummyimage.com/132x100.png/dddddd/000000",
     "department":"Research and Development",
     "previous_job":"Cement Mason",
     "preferences":{
         "fav_buzzwords":[
           "infrastructure",
           "systemic",
           "multimedia",
           "User-friendly",
           "tertiary"
         ],
         "fav_phrases":{
           "in_meetings":"benchmark real-time e-tailers",
           "with_colleagues":"Function-based actuating installation",
           "at_bar":"Cloned multimedia website"
         },
         "fav_material":"Granite",
         "hobbies":[
           "Bhangra",
           "Biodiversity",
           "DSLAM"
         ],
         "fav_genre":"Action|Drama|Thriller",
         "fav_plant":"Swaying Bulrush",
         "fav_products":[
           "Ice Cream Bar - Oreo Sandwich",
           "Remy Red",
           "Venison - Ground",
           "Compound - Rum",
           "Yeast Dry - Fermipan"
         ],
         "trades_in":[
           "Miscellaneous",
           "Health Care"
         ]
     }
   }
   ```

   Write three functions that will take this object as an argument and log its keys and values with:

   - `for ... in`
   - `Object.entries()`
   - `Object.keys()`

3. Modify the functions to check if the value of the key is an array, if it is an array, then log each value of the array separately too.
