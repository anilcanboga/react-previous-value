import { useEffect, useRef } from "react";

const Sayi = ({ amount }) => {
  const oldAmount = useRef(amount);
  const ref = useRef();

  useEffect(() => {
    if (oldAmount.current !== amount) {
      if (amount > oldAmount.current) {
        ref.current.classList.remove("down");
        ref.current.classList.add("up");
      } else if (amount < oldAmount.current) {
        ref.current.classList.remove("up");
        ref.current.classList.add("down");
      }
    }

    const timeout = setTimeout(() => {
      ref.current.classList.remove("up");
      ref.current.classList.remove("down");
    }, 1000);

    oldAmount.current = amount;

    return () => {
      clearTimeout(timeout);
    };
  }, [amount]);
  return (
    <div ref={ref}>
      <h2>Sayi</h2>
      <h3>{amount.toFixed(2)} </h3>
      {oldAmount.current.toFixed(2)}
    </div>
  );
};

export default Sayi;
