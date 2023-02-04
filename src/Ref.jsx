import {useEffect, useRef} from "react";

function WithRef() {
    const inputEl = useRef();
    const numRef = useRef(0);
    console.log(inputEl);

    const handleClick = () => {
        numRef.current = 1;
    }

    useEffect(() => {
       // console.log(inputEl);
        console.log(numRef.current);
    });

    return (
        <div>
            {/*<input placeholder='name' ref={inputEl}/>*/}
            <button onClick={handleClick}>{numRef.current}</button>
        </div>
    )
}

export default WithRef