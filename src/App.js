import React, {useState, useEffect} from "react";
import Clicker from "./Clicker";
import WithRef from "./Ref";

function App() {

    const [isClicker, setClicker] = useState(false);


    useEffect(() => {
        console.log('hello from clicker');
    }, []);

    return (
        <div>
            {/*<h2>Clicker App</h2>*/}
            {/*<button onClick={() => setClicker(!isClicker)}>*/}
            {/*    Toogle clicker*/}
            {/*</button>*/}
            {/*{isClicker && <Clicker/>}*/}

            <WithRef/>
        </div>
    )
}

export default App;
