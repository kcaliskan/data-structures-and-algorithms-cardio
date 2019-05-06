//Create a function that reverses a string:
//'Hi My name is Kaan' should be:
//"naaK si eman yM iH"

let str = "Hi My name is Kaan";

// 1. for of
function reverse(str) {
  //check the input
  if (!str || typeof str != "string" || str.length < 2) {
    console.log("Please enter a valid input");
  }

  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// console.log(reverse(str));

// 2. built in reverse() method for arrays
function reverse2(str) {
  //check the input
  if (!str || typeof str != "string" || str.length < 2) {
    console.log("Please enter a valid input");
  }

  return str
    .split("")
    .reverse()
    .join("");
}

// reverse2(str);

// 3. spread operator and arrow function es6

const reverse3 = str => [...str].reverse().join("");

console.log(reverse3(str));
