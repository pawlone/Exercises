import { useEffect, useState } from "react";

const Counter = () => {
    const[counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = "Cliccato " + counter + " volte"; 
        });

    return (
        <>
        <h1>Cliccato {counter} volte</h1>
        <button className="btn btn-success" onClick={() => {setCounter(counter + 1)}}>Cliccami</button>
        </>
    );
}

export default Counter;