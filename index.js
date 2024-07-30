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

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  splice => 
//<p>The splice() method adds new elements to an array:</p>

fruits.splice(2, 0, "Lemon", "Kiwi"); 
console.log("fruits", fruits);

const fruitsSlice = fruits.slice(1,3)
console.log("fruits slice", fruitsSlice);

 // json
const objects = {name: "srushti", age:"50", city: "dubai"}
const replacer = (key,value) => key === "name" ?"polara" : value;
const jsonObjects = JSON.stringify(objects, replacer, 4);
console.log("jsonObjects", jsonObjects);

