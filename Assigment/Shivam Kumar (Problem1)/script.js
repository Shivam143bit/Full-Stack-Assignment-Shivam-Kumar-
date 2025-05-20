class Calculator {
    constructor(a, b, operation) {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.operation = operation;
    }
  
    calculate() {
      switch (this.operation) {
        case 'add':
          return this.a + this.b;
        case 'subtract':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide':
          if (this.b === 0) {
            return 'Error: Division by zero';
          }
          return this.a / this.b;
        default:
          return 'Invalid operation';
      }
    }
  }
  
  document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const a = document.getElementById('inputA').value;
    const b = document.getElementById('inputB').value;
    const operation = document.getElementById('operation').value;
  
    const calculator = new Calculator(a, b, operation);
    const result = calculator.calculate();
  
    const resultBox = document.getElementById('result');
    resultBox.classList.remove('d-none');
    resultBox.textContent = `Result: ${result}`;
  });
  