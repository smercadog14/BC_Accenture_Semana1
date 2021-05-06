/* Functions */

// function tryFunct() {
//   console.log("this is a function");
// }

// const tryFunct2 = () => {
//   console.log("this is a second function");
// };

const miniCalculadora = () => {
  let op = prompt(
    "Enter the operation to be performed \n A - addition \n S - subtraction \n M - multiplication \n D - divition"
  );
  if (op == null) {
    op = op.toLowerCase();
  }
  {
  }

  if ((op != "a" && op != "s" && op != "m" && op != "d") || op == null) {
    console.log("select an option");
  } else {
    let num1 = parseInt(prompt("Enter First Number"));
    let num2 = parseInt(prompt("Enter Second Number"));
    let result = 0;
    if (op == "a") result = num1 + num2;
    if (op == "s") result = num1 - num2;
    if (op == "m") result = num1 * num2;
    if (op == "d") {
      if (num2 === 0) {
        alert("No se puede dividir por 0");
      } else {
        result = num1 / num2;
      }
    }
  }
};
// if (op == null) {
//   op = DEFAULT_VALUE;
// }

// switch (op) {
//   case "a":
//     result = addition();
//     break;
//   case "s":
//     result = subtraction();
//     break;
//   case "m":
//     result = multiplication();
//     break;
//   case "d":
//     result = divition();
//     break;
//   default:
//     alert("Enter an operation!");
// }

// function addition() {
//   return num1 + num2;
// }
// function subtraction() {
//   return num1 - num2;
// }
// function multiplication() {
//   return num1 * num2;
// }
// function divition() {
//   if (num2 == 0) {
//     console.log("No se puede dividir por 0");
//   } else {
//     return num1 / num2;
//   }
// }

// function resultMe(op) {
//   console.log(
//     "The result of the " + op + num1 + " with : " + num2 + " is :" + result
//   );
// }

//   let res = num2 == 0 ? console.log(""): console.log(num1/num2);
