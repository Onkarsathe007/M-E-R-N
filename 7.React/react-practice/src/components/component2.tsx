//Use state.
import { useState } from "react";
import type Component1 from "./component1";

function Component2() {
  const [count, setCount] = useState(0);
  //count - variable.
  //setcount - function.
  function handleClick() {
    setCount(count + 1);
    console.log(count);
    //incremets value each time when an function is called
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default Component2;
