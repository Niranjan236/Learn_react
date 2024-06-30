import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);

  //let counter = 0

  const Addvalue = () => {
    if (counter != 21) {
      counter = counter + 1;
      setcounter(counter);
      // setcounter(counter+1)
      // console.log("Clicked", counter)
    } else {
      alert("Already at 20");
    }
  };

  const Remvalue = () => {
    if (counter != 0) {
      counter = counter - 1;
      setcounter(counter);
      // console.log("Clicked", counter)
    } else {
      alert("Already at 0");
    }
  };
  return (
    <>
      <h1>Niranjan First react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={Addvalue}>Add value</button>
      <br />
      <button onClick={Remvalue}>Remove value</button>
    </>
  );
}

export default App;
