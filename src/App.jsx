import Sayi from "./Sayi";
import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(29.08);
  return (
    <>
      <Sayi amount={amount} />
      <br />
      <button
        onClick={() => {
          setAmount((amount) => amount - 0.34);
        }}
      >
        Azalt
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setAmount((amount) => amount + 1.78);
        }}
      >
        Arttır
      </button>
    </>
  );
}

export default App;
