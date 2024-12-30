import React, { useState } from "react";
import { Link } from "react-router-dom";

const SlocCalculator = () => {
  const [functionPoint, setFunctionPoint] = useState("");
  const [languageFactor, setLanguageFactor] = useState("null");
  const [sloc, setSloc] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    const fp = Number(functionPoint);
    const lf = Number(languageFactor);

    if (!fp || !lf || languageFactor === "null") {
      alert("Please enter a valid function point and select a language factor.");
      return;
    }

    const calculatedSloc = fp * lf;
    setSloc(calculatedSloc);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Source Lines of Code (SLOC) Calculator</h1>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <p className="text-gray-300 leading-relaxed">
            Source lines of code (SLOC), also known as lines of code (LOC), is a software metric used to measure the size
            of a computer program by counting the number of lines in the text of the program's source code. SLOC is
            typically used to predict the amount of effort required to develop a program and to estimate programming
            productivity or maintainability once the software is produced.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Uses Of Function Points</h2>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed">
            <li>Calculation of function points (F.P.)</li>
            <li>Estimation of cost for software development</li>
            <li>Estimation of effort (in person-months, i.e., P-M)</li>
            <li>Number of pages for documentation of function points</li>
          </ul>
          <p className="text-sm text-gray-400 mt-4">
            *** These estimates vary based on the language chosen for software development. Language factors are constant for each language.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculate the Source Lines of Code</h2>
          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Function Point:</label>
              <input
                type="number"
                value={functionPoint}
                onChange={(e) => setFunctionPoint(e.target.value)}
                placeholder="Enter Function Point"
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Language Used:</label>
              <select
                value={languageFactor}
                onChange={(e) => setLanguageFactor(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="null">Select Language</option>
                <option value="97">C</option>
                <option value="53">Java</option>
                <option value="50">C++</option>
                <option value="46">J2EE</option>
                <option value="61">COBOL</option>
                <option value="54">C#</option>
                <option value="34">HTML</option>
                <option value="57">.NET</option>
                <option value="37">Oracle</option>
                <option value="21">SQL</option>
              </select>
              <p className="text-sm text-gray-400 mt-2">
                ** The language factors used for the calculation are based on average values.
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold"
              >
                Calculate SLOC
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">The SLOC is:</label>
              <input
                type="text"
                value={sloc}
                readOnly
                placeholder="Calculated SLOC"
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:outline-none"
              />
            </div>
          </form>
        </div>

        <div className="text-center">
          
            <Link to="/estimation"  className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded text-white font-semibold">
            Estimate Effort, Cost, Time
            </Link>
          
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <Link to="/" className="block mt-8 text-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlocCalculator;
