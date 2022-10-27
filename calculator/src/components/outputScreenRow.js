import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './outputScreenRow.scss'



const OutputScreenRow = () => {
    return (
            <Col lg="12">
                <Form.Control className='text bg-dark' size="lg" type="text" plaintext readOnly />
            </Col>
        
    )
}

export default OutputScreenRow;