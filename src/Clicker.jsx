import React, {useEffect, useState} from "react";
function Clicker() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log('hello from clicker ' + count);

        return () => console.log('end');
    }, [count]);

    return (
        <div className="App">
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Clicker