import { useState } from "react";


function App() {
    const [name, setName] = [ 10, (n) => {} ];   // 비구조할당(구조분해)

    // const numberState = useState(10);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number, setNumber] = useState(10);
    
    const handleOnClick = () => {
        setNumber(number + 10);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleOnClick}>증가</button>
        </div>
    )
}

export default App
