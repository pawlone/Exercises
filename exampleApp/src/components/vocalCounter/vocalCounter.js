import { useState } from "react"

const VocalCounter = () => {
    const [count, setCount] = useState("")
    const [inputValue, setInputValue] = useState("")

    const COUNT_ALL = str => Array.from(str).filter(letter => "aAeEiIoOuU".includes(letter)).length;

    return (
        <div>
            <input type="text" onChange={(e) => {setInputValue(e.target.value)}} />
            <button className="btn btn-primary" onClick={() => {setCount(COUNT_ALL(inputValue))}}>Conta Vocali</button>
            <div>{count}</div>

        </div>

    )
}

export default VocalCounter