import { useState } from "react";


const AddListItem = () => {
    // Dichiaro le variabili di stato item e input entrambe vuote
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleClick() {
        setItems([...items, input]);
        setInput('');
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={input} />
            <button
                className="btn btn-primary"
                onClick={handleClick}>Save</button>
            <ol>{items.map(item => <li>{item}</li>)}</ol>
        </div>

    );
}

export default AddListItem

