const stairCase = (number) => {
  for (let i = 1; i <= number; i++) {
    const char = "#";

    console.log(char.repeat(i));
  }
};

stairCase(6);
