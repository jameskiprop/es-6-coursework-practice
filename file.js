//Arrow function js

/*class Employee {
  constructor(name) {
    this.name = name;
  }

  getEmployeeName() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }

  getEmployeeNameArrow() {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  }
}

let firstEmployee = new Employee("John Doe");
firstEmployee.getEmployeeName();
firstEmployee.getEmployeeNameArrow();

argument;

let sayHello = () => alert`hello `;
let saybye = () => alert`Bye`;

//creating a function that takes an argument and calling it as if it was a function

let doSomething = (somethingToDo) => {
  somethingToDo();
};

//any function that will be sent to dosomething() will be  called right away
doSomething(sayHello);
doSomething(saybye);

//Array;
const people = [{ name: "Max" }, { name: "Jack" }, { name: "Mary" }];

let i = 0;

while (i < people.length && people[i].name != "Jack") {
  i++;
}

if (i !== people.length) {
  alert("Jack is in" + i);
} else {
  ("cannot find Jack");
}

//Array function find in Javascript

const people = [{ name: "Max" }, { name: "Max" }, { name: "Max" }];

function findPerson(name) {
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person.name == name) {
      return person;
    }
  }
}

//Es6
function findPerson(name) {
  return people.find((person) => person.name == name);
}

//Array function forEach
const civillians = [{ name: "Lucy" }, { name: "Jane" }, { name: "James" }];

//js

function showEachPerson(name) {
  for (let i = 0; i < people.length; i++) {
    alert(people[i].name);
  }
}
//ES6
const showEachPerson = (name) => people.forEach((person) => alert(person.name));

//filter method
const products = [
  { name: "milk", price: "14" },
  { name: "Bread", price: "55" },
  { name: "cheese", price: "25" },
];

//javascript
function filterProducts() {
  let cheapProducts = []; //where cheap products will be stored
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < 10) cheapProducts.push(products[i]);
  }
  return cheapProducts;
}

//es6
const filterProducts = () => products.filter((product) => product.price < 10);

const numbers = [1, 5, 6, -5, -7, 9, 3, 2];

const filterNumbers = () => numbers.filter((number) => number > 0);

console.log(filterNumbers());

//USING MAP METHOD (executes the same instruction on every element in a given array, done on a copy of the array)
const products = [
  { name: "milk", price: "15" },
  { name: "water", price: "9" },
  { name: "shoe", price: "26" },
];

//js
function changeProducts() {
  for (let i = 0; i < products.length; i++) {
    products[i].price += 2;
  }
  return products;
}

//es6
const changeProducts = () =>
  products.map((product) => ({ ...product, price: product.price + 2 }));

console.log(changeProducts());

console.log(products);*/

// lib.js

// export function square(x) {
//   return x * x;
// }

// export const sum = (x) => {
//   return x + x;
// };

// //main.js

// import { square, sum } from "lib";

// import * as library from "lib"; //every exported module in the lib and uses the alias Library

//ES6 destructuring

// let { address } = { address: { city: " New York", country: "USA" } };

// let { city, country } = address;

// console.log(city);
// console.log(country);

let object1 = { firstName: "John", lastName: "Brown" };
let object2 = { age: 25 };

let newObject1 = { ...object1, ...object2 };
console.log(newObject1);
