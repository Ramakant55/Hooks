import React, { useState, useMemo } from "react";

const FactorialCalculator = () => {
  const [number, setNumber] = useState("");


  const factorial = (n) => {
    if (n < 0) return "Undefined";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  
  const computedFactorial = useMemo(() => {
    return factorial(Number(number));
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Factorial Calculator</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="px-4 py-2 w-64 text-lg border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="text-xl font-semibold">
          Factorial:{" "}
          <span className="text-blue-600">
            {number === "" ? "N/A" : computedFactorial}
          </span>
        </div>
      </form>
    </div>
  );
};

export default FactorialCalculator;
