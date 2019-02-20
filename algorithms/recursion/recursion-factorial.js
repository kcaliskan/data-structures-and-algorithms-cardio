// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //When the computer tries to calculate F(number) here, it seet that it actually is calling F(3) recursively. So what it says that "Hey, I will pause the execution of this particular function F(4) and I will go and calculate F(3) first and then I'll come back". It saves the current state of F(number) into memory, and goes on to calculate F(number-1). This saving into memory and goes on to calculate F(Number-1) continues until it hits the if condition
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

// Helper Articles & Videos

// Recursion basics - using factorial -> https://www.youtube.com/watch?v=_OmRGjbyzno
