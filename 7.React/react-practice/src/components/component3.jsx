//Hooks in React.
import { useState } from "react";

function Component3() {
    const [count, setCount] = useState(0);
    //count - variable.
    //setcount - function.
    function handleClick() {
        setCount(count + 1);
        console.log(count);
        //incremets value each time when an function is called
    }

    return (
        //The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.
        <>
            <button count={count} onClick={handleClick}>Click Me </button>
            <p>Clicked {count} times </p>
        </>
    );
}

export default Component3;
