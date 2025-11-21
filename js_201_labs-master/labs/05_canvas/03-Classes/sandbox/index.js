// Person class
class Person {
  constructor(first, last, age){
    if (!first || !last || age === undefined){
      throw new Error("Missing required fields");
    }
    if (age >= 18){
      throw new Error("Age must be below 18");
    }
    this.first = first;
    this.last = last;
    this.age = age;
  }

  introduceSelf(){
    console.log(`Hi, I am ${this.first} ${this.last}, and I am ${this.age}.`);
  }
}

// Comment: import users.json according to your sandbox setup
import users from "./users.json" assert { type:"json" };

function randomAge(){
  // Comment: sometimes returns invalid ages
  return Math.random() < 0.8
    ? Math.floor(Math.random()*18)
    : Math.floor(Math.random()*80)+18;
}

const people = [];

while (people.length < 100){
  for (const u of users){
    if (people.length >= 100) break;

    try {
      const p = new Person(u.first, u.last, randomAge());
      people.push(p);
    } catch (err){
      // Comment: skip invalid ones and continue
    }
  }
}

console.log("Sample:");
people.slice(0,5).forEach(p => p.introduceSelf());
