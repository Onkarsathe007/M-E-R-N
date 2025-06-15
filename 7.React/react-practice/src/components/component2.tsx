//Use state.
import { useState } from "react";

function MyComponent() {
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

export default MyComponent;
