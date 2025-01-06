import React, { useState } from "react";
import { Link } from "react-router-dom";

const FunctionPointsCalculator = () => {
  const [ufp, setUfp] = useState("");
  const [di, setDi] = useState("");
  const [fp, setFp] = useState("");
  const [weightingFactor, setWeightingFactor] = useState("");

  const calculateUFP = () => {
    console.log(weightingFactor);
    const x = Number(weightingFactor);
    let temp1, temp2, temp3, temp4, temp5;
    if (x === 1) {
      temp1 = 3;
      temp2 = 4;
      temp3 = 3;
      temp4 = 7;
      temp5 = 5;
    } else if (x === 2) {
      temp1 = 4;
      temp2 = 5;
      temp3 = 4;
      temp4 = 10;
      temp5 = 7;
    } else if (x === 3) {
      temp1 = 6;
      temp2 = 7;
      temp3 = 6;
      temp4 = 15;
      temp5 = 10;
    }
    else{
      alert("Enter 1-3")
    }

    //if()
    const calculatedUFP =
      temp1 * x + temp2 * x + temp3 * x + temp4 * x + temp5 * x;
    setUfp(calculatedUFP);
  };

  const calculateDI = () => {
    let sum = 0;
    const questions = [
      "Does the system require reliable backup and recovery?",
      "Are data communications required?",
      "Are there distributed processing functions?",
      "Is performance critical?",
      "Will the system run in an existing, heavily utilized operational environment?",
      "Does the system require online data entry?",
      "Does the online data entry require the input transaction to be built over multiple screens or operations?",
      "Are the inputs, outputs, files, or inquiries complex?",
      "Are the master files updated?",
      "Is the internal processing complex?",
      "Is the code designed to be reusable?",
      "Are conversion and installation included in the design?",
      "Is the system designed for multiple installations in different organizations?",
      "Is the application designed to facilitate change and ease of use by the user?",
    ];

    questions.forEach((question) => {
      const answer = Number(prompt(question));
      sum += answer;
    });

    setDi(sum);
  };

  const calculateFP = () => {
    const result = ufp * (0.65 + 0.01 * di);
    setFp(result);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100 font-sans p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Function Points Calculator
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Step 1: Calculate UFP</h2>
          <table className="table-auto w-full text-sm mb-4 border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2">S.NO</th>
                <th className="px-4 py-2">Function Types</th>
                <th className="px-4 py-2">Simple</th>
                <th className="px-4 py-2">Average</th>
                <th className="px-4 py-2">Complex</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">External Inputs (EI)</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">6</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">External Outputs (EO)</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">7</td>
              </tr>
              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">External Inquiries (EQ)</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">6</td>
              </tr>
              <tr>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">Internal Logical Files (ILF)</td>
                <td className="px-4 py-2">7</td>
                <td className="px-4 py-2">10</td>
                <td className="px-4 py-2">15</td>
              </tr>
              <tr>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">External Interface Files (EIF)</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">7</td>
                <td className="px-4 py-2">10</td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>
          <div className="mb-4">
            <label className="block mb-2">Weighting Factor</label>
            <input
              type="text"
              id="wf"
              className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter S.No"
              onChange={(e) => setWeightingFactor(e.target.value)}
            />
          </div>
          <button
            onClick={calculateUFP}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
          >
            Calculate UFP
          </button>
          <p className="mt-4">UFP: {ufp}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Step 2: Calculate VAF</h2>
          <p className="mb-4 text-sm">
            Answer the questions in the prompt (0-5 for each question).
          </p>
          <button
            onClick={calculateDI}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
          >
            Answer Questions
          </button>
          <p className="mt-4">VAF: {di}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Step 3: Calculate FP</h2>
          <button
            onClick={calculateFP}
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded text-white"
          >
            Calculate FP
          </button>
          <p className="mt-4">FP: {fp}</p>
        </div>

        <Link
          to="/"
          className="block mt-8 text-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default FunctionPointsCalculator;
