/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0;
  }

  add(num) {
      this.result += num;
  }

  subtract(num) {
      this.result -= num;
  }

  multiply(num) {
      this.result *= num;
  }

  divide(num) {
      if (num === 0) {
          throw new Error("Division by zero is not allowed.");
      }
      this.result /= num;
  }

  clear() {
      this.result = 0;
  }

  getResult() {
      return this.result;
  }

  calculate(expression) {
      // Remove continuous spaces and trim the expression
      const trimmedExpression = expression.replace(/\s+/g, ' ').trim();

      // Validate expression for non-numerical characters
      if (!/^[\d\s+\-*/().]+$/.test(trimmedExpression)) {
          throw new Error("Invalid expression. Please enter a valid arithmetic expression.");
      }

      try {
          // Evaluate the expression using eval()
          this.result = eval(trimmedExpression);
      } catch (error) {
          throw new Error("Invalid expression. Please enter a valid arithmetic expression.");
      }

      if (!isFinite(this.result)) {
          throw new Error("Error in calculation. The result is not finite.");
      }
  }
}

// Test the Calculator class
// const calculator = new Calculator();

// try {
//   calculator.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
//   console.log("Result:", calculator.getResult()); // Output: 23

//   // Test division by zero
//   calculator.calculate('10 / 0');
//   console.log("Result:", calculator.getResult()); // This won't be executed

//   // Other operations can be tested similarly
// } catch (error) {
//   console.error("Error:", error.message);
// }

module.exports = Calculator;
  