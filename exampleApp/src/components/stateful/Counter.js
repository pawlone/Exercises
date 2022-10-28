import { useState, useEffect } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() =>  {
        document.title = "Cliccato " + count + " volte";
    },[count]);

    return (
        <>
            <h1>Cliccato {count} volte</h1>
            <button className="btn btn-success" onClick={() => {setCount(count + 1)} }>Incrementa</button>
        </>
    );
}

export default Counter;
