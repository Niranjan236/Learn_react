import { useState } from "react";

function App() {
  const [color, setcolor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div  className="border w-100 p-5 pl-20 pr-20 rounded-lg bg-black">
          <button
            onClick={() => setcolor("red")}
            className="w-16 h-10 border border-white rounded-md text-black text-sm hover:bg-white hover:text-red bg-white"
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="ml-4 w-16 h-10 border border-white rounded-md text-black text-sm hover:bg-white hover:text-blue bg-white"
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("green")}
            className="ml-4 w-16 h-10 border border-white rounded-md text-black text-sm hover:bg-white hover:text-green bg-white"
          >
            Green
          </button>

          <button
            onClick={() => setcolor("Grey")}
            className=" ml-4 w-16 h-10 border border-white rounded-lg text-black text-sm   hover:bg-white hover:text-Grey bg-white "
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
