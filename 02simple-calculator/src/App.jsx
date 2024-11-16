import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div className="h-screen flex justify-center items-center bg-amber-500">
      <div className="bg-gray-700 text-gray-50 p-3 rounded">
        <input
          className="w-full h-14 p-3 mb-3 outline-none text-2xl shadow-inner bg-gray-700 text-right"
          type="text"
          value={input}
          readOnly
        />
        <div>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput("")}
          >
            AC
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => {
              setInput(input.slice(0, -1));
            }}
          >
            DE
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "%")}
          >
            %
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md bg-amber-500"
            onClick={() => setInput((prev) => prev + "/")}
          >
            /
          </button>
        </div>
        <div>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "7")}
          >
            7
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "8")}
          >
            8
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "9")}
          >
            9
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md bg-amber-500"
            onClick={() => setInput((prev) => prev + "*")}
          >
            *
          </button>
        </div>
        <div>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "4")}
          >
            4
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "5")}
          >
            5
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "6")}
          >
            6
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md bg-amber-500"
            onClick={() => setInput((prev) => prev + "-")}
          >
            -
          </button>
        </div>
        <div>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "-")}
          >
            1
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "2")}
          >
            2
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "3")}
          >
            3
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md bg-amber-500"
            onClick={() => setInput((prev) => prev + "+")}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "00")}
          >
            00
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + "0")}
          >
            0
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md"
            onClick={() => setInput((prev) => prev + ".")}
          >
            .
          </button>
          <button
            className="m-2 text-2xl w-16 h-14 rounded shadow-md bg-amber-500"
            onClick={() => {
              try {
                setInput(eval(input).toString());
              } catch (error) {
                setInput("error");
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
