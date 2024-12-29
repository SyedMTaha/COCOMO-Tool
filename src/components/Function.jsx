import React, { useState } from "react";
import { Link } from "react-router-dom";

const FunctionPointsCalculator = () => {
  const [ufp, setUfp] = useState("");
  const [di, setDi] = useState("");
  const [fp, setFp] = useState("");

  const calculateUFP = () => {
    const x = Number(document.getElementById("wf").value);
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

    const p = Number(document.getElementById("in").value);
    const q = Number(document.getElementById("out").value);
    const r = Number(document.getElementById("inq").value);
    const s = Number(document.getElementById("files").value);
    const t = Number(document.getElementById("ext_int").value);

    const calculatedUFP = temp1 * p + temp2 * q + temp3 * r + temp4 * s + temp5 * t;
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
                <td className="px-4 py-2">Number of User Inputs</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">6</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Number of User Outputs</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">7</td>
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
          <h2 className="text-xl font-semibold mb-4">Step 2: Calculate DI</h2>
          <p className="mb-4 text-sm">
            Answer the questions in the prompt (0-5 for each question).
          </p>
          <button
            onClick={calculateDI}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
          >
            Answer Questions
          </button>
          <p className="mt-4">DI: {di}</p>
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
