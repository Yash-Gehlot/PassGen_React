import './index.css'
import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [passward, setpassward] = useState("");

  const passwardGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqustuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassward(pass);
  }, [length, numberAllowed, charAllowed, setpassward]);

  useEffect(() => {
    passwardGenerater();
  }, [length, numberAllowed, charAllowed,  ]);

  
  return (
    <>
      <div  id="main" className="w-full max-w-md max-auto shadow-md rounded-lg py-1 px-3 mx-30 my-5 text-black-500 bg-orange-100 text-black-800">
        <h1 id="newh1" className="text-black text-center mt-5">Password Generator </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passward}
            className="outline-name w-full  px-4 rounded-lg"
            placeholder="passward"
            readOnly
          />
          <button id="button"className="outline-none bg-blue-700 rounded-lg text-white px-3 py-0.5 shrink-0 mx-2">
            {" "}
            Copy
          </button>
        </div>

        <div id="downHeader"className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />

            <label>Length {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
            id='input'
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>

            
          </div>
          
        </div>
        <button onClick={passwardGenerater}>go</button>
      </div>
    </>
  );
}

export default App;
