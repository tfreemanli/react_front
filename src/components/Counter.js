import React, { useState } from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function textHandler(e){
        setText(e.target.value);
    }

    return(
        <div>
            <h1>Counter: {count} <br></br> Text: {text}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" onChange={textHandler} />
        </div>
    );
}
export default Counter;