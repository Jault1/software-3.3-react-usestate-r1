import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount(count + 1);
  };
  const handlerMinus = () => {
    if ((count-1) < 0) {
      alert("Nope. Less than one. Try again");
      return;
    }
    setCount(count - 1);
  };
  const handlerReset = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={handlerMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlerPlus}>+</button><br></br><br></br>
      <button class="reset" onClick={handlerReset}>Reset</button>

    </>
  );
}
export default Counter;
