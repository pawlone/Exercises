import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




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

        <div className="container" >
            <div className="row mt-5 justify-content-center">
                <div className="col-8">
                    <InputGroup className="mb-3">
                        <Form.Control
                            onChange={handleChange}
                            value={input}
                        />
                        <Button variant="outline-secondary"  onClick={handleClick}>
                            Salva
                        </Button>
                    </InputGroup>

                </div>
                <div className="col-8">
                    <Card body>
                    <Card.Title>Lista della Spesa</Card.Title>
                    <Card.Text>
                    <ol className="">{items.map(item => <li>{item}</li>)}</ol>
                    </Card.Text>
                    </Card>
                </div>
            </div>
        </div>

    );
}

export default AddListItem

