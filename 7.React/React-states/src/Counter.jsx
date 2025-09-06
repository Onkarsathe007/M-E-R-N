import { useState,useEffect} from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);



  function incCount() {
    setCounter((prevCounter) => prevCounter + 1); 
  }

  function decCount() {
    setCounter2((prevCounter) => prevCounter - 1);
  }



  useEffect(()=>{
    console.log("Hello This is Onkar");
  },[counter])

  return (
    <div>
      <h1>Count: {counter}</h1>
      <h1>Count: {counter2}</h1>
      <button type="button" onClick={incCount}>inc</button>
      <button type="button" onClick={decCount}>dec</button>
    </div>
  );
}

export default Counter;
 
