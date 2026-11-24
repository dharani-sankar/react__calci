
import React, { useState } from "react";
import "./calci.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function calculate(operator) {
    let a = Number(num1);
    let b = Number(num2);
    let answer;

    switch (operator) {
      case "+":
        answer = a + b;
        break;
      case "-":
        answer = a - b;
        break;
      case "*":
        answer = a * b;
        break;
      case "/":
        answer = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        answer = "";
    }

    setResult(answer);
  }

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>×</button>
        <button onClick={() => calculate("/")}>÷</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;