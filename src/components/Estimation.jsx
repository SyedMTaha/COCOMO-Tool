import React, { useState } from "react";
import { Link } from "react-router-dom";

const Estimation = () => {
  const [sloc, setSloc] = useState("");
  const [kloc, setKloc] = useState("");
  const [mf, setMf] = useState("");
  const [effort, setEffort] = useState("");
  const [time, setTime] = useState("");
  const [cost, setCost] = useState("");
  const [laborRate, setLaborRate] = useState("");
  const [classType, setClassType] = useState("1");

  const softwareAttributes = [
    { id: "reliability", label: "Requirement Software Reliability", options: [0.75, 0.88, 1, 1.15, 1.4, 1.5] },
    { id: "database", label: "Size of Application Database", options: [0.75, 0.94, 1, 1.08, 1.16, 1.3] },
    { id: "complexity", label: "Complexity of the Product", options: [0.75, 0.85, 1, 1.15, 1.3, 1.65] },
    { id: "runtime", label: "Run-Time Performance Constraints", options: [0.75, 0.88, 1, 1.15, 1.4, 1.5] },
    { id: "memory", label: "Memory Constraints", options: [0.75, 0.88, 1, 1.15, 1.4, 1.5] },
    { id: "volatility", label: "Volatility of Virtual Machines", options: [0.75, 0.88, 1, 1.15, 1.4, 1.5] },
    { id: "turnaround", label: "Required Turnaround Time", options: [0.75, 0.88, 1, 1.15, 1.4, 1.5] },
    { id: "analyst", label: "Analyst Capability", options: [1.46, 1.19, 1, 0.86, 0.71, 0.5] },
    { id: "experience", label: "Application Experience", options: [1.29, 1.13, 1, 0.91, 0.82, 0.5] },
    { id: "tools", label: "Use of Software Tools", options: [1.24, 1.1, 1, 0.91, 0.82, 0.5] },
  ];

  const [factors, setFactors] = useState(
    softwareAttributes.reduce((acc, attr) => {
      acc[attr.id] = attr.options[2]; // Default to 'Nominal'
      return acc;
    }, {})
  );

  const calculateKloc = () => {
    if (sloc) {
      setKloc((sloc / 1000).toFixed(2));
    }
  };

  const calculateMf = () => {
    const multiplier = Object.values(factors).reduce((acc, value) => acc * value, 1);
    setMf(multiplier.toFixed(2));
  };

  const calculateEffortTimeCost = () => {
    if (!kloc || !mf || !laborRate) {
      alert("Please calculate KLOC, MF, and enter a labor rate first.");
      return;
    }

    const klocValue = parseFloat(kloc);
    const mfValue = parseFloat(mf);
    const laborRateValue = parseFloat(laborRate);

    let effortCalculation, timeCalculation;

    switch (classType) {
      case "1":
        effortCalculation = 2.4 * Math.pow(klocValue, 1.05) * mfValue;
        timeCalculation = 2.5 * Math.pow(effortCalculation, 0.38);
        break;
      case "2":
        effortCalculation = 3.0 * Math.pow(klocValue, 1.12) * mfValue;
        timeCalculation = 2.5 * Math.pow(effortCalculation, 0.35);
        break;
      case "3":
        effortCalculation = 3.6 * Math.pow(klocValue, 1.20) * mfValue;
        timeCalculation = 2.5 * Math.pow(effortCalculation, 0.32);
        break;
      default:
        return;
    }

    setEffort(effortCalculation.toFixed(2));
    setTime(timeCalculation.toFixed(2));
    setCost((effortCalculation * laborRateValue).toFixed(2));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Estimation of Cost, Effort, and Time</h1>
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Write SLOC:</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={sloc}
              onChange={(e) => setSloc(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={calculateKloc}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Get KLOC
            </button>
          </div>
          <p className="mt-2">KLOC: <span className="font-bold">{kloc}</span></p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Software Cost Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softwareAttributes.map((attr) => (
              <div key={attr.id}>
                <label className="block font-medium mb-1">{attr.label}:</label>
                <select
                  value={factors[attr.id]}
                  onChange={(e) =>
                    setFactors({ ...factors, [attr.id]: parseFloat(e.target.value) })
                  }
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                >
                  {attr.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <button
            onClick={calculateMf}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Calculate MF
          </button>
          <p className="mt-2">MF: <span className="font-bold">{mf}</span></p>
        </div>

        <div>
          <label className="block text-lg font-medium">Select the class type:</label>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Organic</option>
            <option value="2">Semi-Detached</option>
            <option value="3">Embedded</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium">Labor Rate ($):</label>
          <input
            type="number"
            value={laborRate}
            onChange={(e) => setLaborRate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={calculateEffortTimeCost}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Calculate Effort, Time, and Cost
        </button>

        <div className="mt-4">
          <p>Effort: <span className="font-bold">{effort}</span> Person-Months</p>
          <p>Time: <span className="font-bold">{time}</span> Months</p>
          <p>Cost: <span className="font-bold">${cost}</span></p>
        </div>
        <Link to="/" className="block mt-8 text-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white">
          Go to Home Page
        </Link>

      </div>
    </div>
  );
};

export default Estimation;
