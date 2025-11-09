//  my solution
var countOperations = function (num1, num2) {
  let count = 0;

  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
    count++;
  }

  return count;
};

//  fastest solution
var countOperations_two = function (num1, num2) {
  let res = 0; // total number of subtraction operations
  while (num1 && num2) {
    // each step of the Euclidean algorithm
    res += Math.floor(num1 / num2);
    num1 %= num2;
    // swap two numbers
    [num1, num2] = [num2, num1];
  }
  return res;
};
