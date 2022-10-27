import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const CalculatorButton = ({id ,value = 0, action = () =>{}}) => {
    return (
        <Col>
            <Button id={value} className='w-100' variant="primary" onClick={() => {action(id) }}>{value}</Button>
        </Col>
    );
}

export default CalculatorButton