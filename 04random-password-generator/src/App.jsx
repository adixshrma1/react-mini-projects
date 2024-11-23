import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "!@#$%^&*()_-+=";

    if (charAllowed) {
      str = str + char;
    }
    if (numberAllowed) {
      str = str + num;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, generatePassword]);

  return (
    <>
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        <div className="bg-gray-800 py-3 px-5 rounded-md ">
          <h1 className="text-xl text-center mb-3 text-white">
            Password Generator
          </h1>
          <input
            type="text"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-5 rounded-s-md outline-none w-96"
          />
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-e-md mb-3"
            onClick={copyToClipboard}
            >
            copy
          </button>
          <br />
          <label className="text-gray-100">
            Length: {String(length).padStart(2, "0")}
          </label>
          <input
            type="range"
            className="cursor-pointer ml-1"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <input
            type="checkbox"
            className="ml-3"
            defaultChecked={numberAllowed}
            onClick={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="ml-1 text-gray-100">Numbers</label>
          <input
            type="checkbox"
            className="ml-3"
            defaultChecked={charAllowed}
            onClick={() => setCharAllowed((prev) => !prev)}
          />
          <label className="ml-1 text-gray-100">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
