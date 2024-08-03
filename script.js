// // template literal
// const name = "Dom";

// console.log(`hello ${name} how are you doing today`);

// //multi line string

// console.log(`
//     Hello mate, how's it going?
//     I'm okay just running some errands here and there
//     `);

// //Putting variables inside a string

// document.write(`
//     <h1>Title</h1>
//     <p>yeah mate not bad</p>
//     `);

// //ternary oprator
// let marks = prompt("Enter your marks:");

// //checking and evaluating the condition
// let results = marks >= 40 ? "pass" : "failed";

// console.log(`you ${results} the test`);

// // //Age Elligibility to vote
// let age = 15;

// let result;

// if (age >= 18) {
//   result = "You're elligible to vote";
// } else {
//   result = "You are not elligible to vote";
// }

// console.log(result);

// //using the ternary operator

// let years = 14;
// let determinant =
//   years >= 18 ? "You are elligible to vote" : "You are inelligible to vote";

// console.log(determinant);

//chained ternary operators

let a = 0;
let Result = a === 0 ? "zero" : a > 0 ? "positive" : "negative";

console.log(` The number is ${Result}`);
