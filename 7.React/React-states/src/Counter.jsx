import { useState,useEffect} from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function incCount() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  useEffect(()=>{
    console.log("Hello This is Onkar");
  })

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button type="button" onClick={incCount}>Click</button>
    </div>
  );
}

export default Counter;
 
