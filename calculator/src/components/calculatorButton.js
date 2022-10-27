import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const CalculatorButton = (props) => {
    return (
        <Col>
            <Button className='w-100' variant="primary">{props.value}</Button>
        </Col>
    );
}

export default CalculatorButton