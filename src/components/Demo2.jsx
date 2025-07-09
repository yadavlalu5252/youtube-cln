import { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  // ref = {current:0}

  console.log("Rendering");

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div className="flex items-center">
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x: ",x);
          }}
        >
          Increase x
        </button>
        <h1 className="font-bold text-xl it">Let = {x}</h1>
      </div>
      
      <div className="flex items-center">
        <button
          className="bg-red-200 p-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log("useState y:", y);
          }}
        >
          Increase y 
        </button>
        <h1 className="font-bold text-xl">useState = {y}</h1>
      </div>

      <div className="flex items-center">
        <button
          className="bg-blue-200 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref:", ref.current);
          }}
        >
          Increase ref
        </button>
        <h1 className="font-bold text-xl" >Ref = {ref.current}</h1>
      </div>
    </div>
  );
};

export default Demo2;
