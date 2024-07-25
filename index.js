// index.js

console.log("hello");

let arrayElement = ["😎", "😁"];

// === // Adding and Removing Elements // === //

// push() => add element in last
arrayElement.push("push")
console.log("arrayPush", arrayElement);

// pop => remove element in last
arrayElement.pop()
console.log("arrayPop", arrayElement);

// unshift => add element in first
arrayElement.unshift("unshift")
console.log("arrayUnshift", arrayElement);

// shift => remove element in first
arrayElement.shift()
console.log("arrayShift", arrayElement);


// === // Modifying Elements // === //

//  splice => 
const object = {name: "srushti"};
  const stringify=  JSON.stringify(object)
  console.log("stringify",stringify);

  const parse = JSON.parse(stringify);
  console.log("parse", parse);

//<p>The splice() method adds new elements to an array:</p>

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;


fruits.splice(2, 0, "Lemon", "Kiwi"); 
console.log("fruits", fruits);

const fruitsSlice = fruits.slice(1,3)
console.log("fruits slice", fruitsSlice);

const sum = fruits.lastIndexOf()

console.log("-1 ::", sum)

