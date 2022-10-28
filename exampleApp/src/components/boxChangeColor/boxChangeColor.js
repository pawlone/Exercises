import { useState } from "react";
import "./style.css"


const BoxChangeColor = () => {
    const [color, setColor] = useState("black");

    const colors = ["blue", "red", "green", "orange"];


    const randomColor =  colors => colors[Math.floor(Math.random() * colors.length)];

    return (
        <div style= {{backgroundColor:color}} onClick={() => {setColor(randomColor(colors))}}></div>
    );
}

export default BoxChangeColor