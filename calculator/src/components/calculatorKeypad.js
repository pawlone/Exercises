import CalculatorButton from "./calculatorButton";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CalculatorKeypad = () => {
    return (
        <Col lg="12">
            <Row className="my-2">
                <CalculatorButton value="9" />
                <CalculatorButton value="8" />
                <CalculatorButton value="7" />
                <CalculatorButton value="+" />
            </Row>
            <Row className="mb-2">
                <CalculatorButton value="6" />
                <CalculatorButton value="5" />
                <CalculatorButton value="4" />
                <CalculatorButton value="-" />
            </Row>
            <Row className="mb-2">
                <CalculatorButton value="3" />
                <CalculatorButton value="2" />
                <CalculatorButton value="1" />
                <CalculatorButton value="*" />
            </Row>
            <Row className="">
                <CalculatorButton value="=" />
                <CalculatorButton value="0" />
                <CalculatorButton value="." />
                <CalculatorButton value="/" />
            </Row>
            

        </Col>



    );
}


export default CalculatorKeypad;