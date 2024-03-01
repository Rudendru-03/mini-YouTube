import React, { useState, useRef } from "react";

const Demo = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0);
  console.log(ref);
  let x = 5;
  return (
    <div>
      <h1 className="m-4 p-4 font-bold text-lg">Demo of UseRef</h1>
      <div className="border border-black w-96 h-96 m-4 p-4">
        <div>
          <button
            className="p-1 m-2 bg-slate-400 rounded-lg"
            onClick={() => {
              x = x + 1;
              console.log("x = ", x);
            }}
          >
            Let =
          </button>
          <span className="px-4">{x}</span>
        </div>
        <div>
          <button
            onClick={() => setY(y + 1)}
            className="p-1 m-2 bg-slate-400 rounded-lg"
          >
            state
          </button>
          <span className="px-4">{y}</span>
        </div>
        <div>
          <button
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("ref = ", ref.current);
            }}
            className="p-1 m-2 bg-slate-400 rounded-lg"
          >
            Ref
          </button>
          <span className="px-4">{ref.current}</span>
        </div>
      </div>
    </div>
  );
};

export default Demo;
