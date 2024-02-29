// Challenge: Create a function that takes a variable number of arguments and returns the sum of all of them. Use the rest parameter to receive the arguments and the spread operator to pass them to the function.

// 1° Create a function using the rest parameter

function sum(...args) {
  let total = 0;

  args.map((arg) => {
    return (total += arg);
  });

  // The total value = 15

  console.log(total);
}

// 2° Use the spread operator to pass them to the function

const arguments = [1, 2, 3, 4, 5];

sum(...arguments);
