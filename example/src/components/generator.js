import LoremJson from "./lorem.json"
import { useState } from "react";
import Viewer from "./Viewer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Generator = () => {
    const [stateInputValue,setInputValue] = useState(0);



    return (
        <Container>
            <Row>
                <Col xs="3">
                    <input type="number" min={1} onChange={(e) => {setInputValue(e.target.value)}} />
                </Col>
                <Col xs="3">
                    <div>
                        <input id="radioWords" type={"radio"} />
                        <label htmlFor="radioWords">Words</label>
                    </div>
                    <div>
                        <input id="radioList" type={"radio"} />
                        <label htmlFor="radioList">List</label>
                    </div>
                </Col>
                <Col xs="6">
                <button className="btn btn-outline-primary">Genera</button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Viewer text="Hello world"/>

                </Col>
            </Row>
        </Container>
    );

}

export default Generator;