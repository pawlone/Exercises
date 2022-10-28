import LoremJson from "./lorem.json";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Viewer from "./Viewer";


const Generator = () => {
    const [stateInputValue, setInputValue] = useState(0);
    const [stateType, setType] = useState("");
    const [stateText, setText] = useState("");

    const changeType = (e, type) => {
        if(e.target.checked) {
            setType(type);
        }
    }

    const generateText = () => {
        if(stateType === "words") {
            let splitText = LoremJson.text.split(" ");
            let value = "";
            for(let i = 0; i < stateInputValue; i++) {
                value += (splitText[i] + " ");
            }
            setText(value);
        }
    }


    return (
        <Container className="mt-3">
            <Row>
                <Col xs={3}>
                    <input type={"number"} min="1" onChange={(e) => {setInputValue(e.target.value)}}></input>
                </Col>
                <Col xs={3}>
                    <div>
                        <input id="radioWords" name="radio" type={"radio"} onClick={(e) => {changeType(e, "words")}}></input>
                        <label htmlFor="radioWords">Words</label>
                    </div>
                    <div>
                        <input id="radioLists" name="radio" type={"radio"} onClick={(e) => {changeType(e, "lists")}}></input>
                        <label htmlFor="radioLists">Lists</label>
                    </div>
                </Col>
                <Col xs={6}>
                    <button className="btn btn-outline-primary" onClick={generateText}>Genera</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Viewer text={stateText}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Generator;