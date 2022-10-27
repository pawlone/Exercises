import CalculatorButton from "./calculatorButton";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CalculatorKeypad = () => {
    return (
        <Col lg="12">
            <Row className="my-2">
                <CalculatorButton id="9" value="9" />
                <CalculatorButton id="8" value="8" />
                <CalculatorButton id="7" value="7" />
                <CalculatorButton id="add" value="+" />
            </Row>
            <Row className="mb-2">
                <CalculatorButton id="6" value="6" />
                <CalculatorButton id="5" value="5" />
                <CalculatorButton id="4" value="4" />
                <CalculatorButton id="min" value="-" />
            </Row>
            <Row className="mb-2">
                <CalculatorButton id="3" value="3" />
                <CalculatorButton id="2" value="2" />
                <CalculatorButton id="1" value="1" />
                <CalculatorButton id="multiply" value="*" />
            </Row>
            <Row className="">
                <CalculatorButton id="equals" value="=" />
                <CalculatorButton id="0" value="0" />
                <CalculatorButton id="point" value="." />
                <CalculatorButton id="divide" value="/" />
            </Row>
            

        </Col>



    );
}


export default CalculatorKeypad;