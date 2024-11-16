import React, { useMemo, useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(165);

  const bmi = useMemo(()=>{
    const h = height/100;
    return (weight/(h*h)).toFixed(1)
  }, [weight, height])
  return (
    <>
      <div className="w-full h-screen bg-gray-700 flex justify-center items-center">
        <div className="p-5 w-96 rounded bg-gray-50">
          <h1 className="font-bold text-lg text-center mb-5">BMI Calculator</h1>
          <p>Your Weight: {weight} kgs</p>
          <input
            className="w-full"
            type="range"
            max={200}
            min={40}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />

          <p>Your Height: {height} cms</p>
          <input
            className="w-full"
            type="range"
            max={250}
            min={80}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />

          <p className="text-center mt-5">
            Your BMI is:{" "}
            <span className="px-3 py-1 rounded bg-red-500 text-white ml-3 ">
              {bmi}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
