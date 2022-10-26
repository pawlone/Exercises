import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './outputScreenRow.scss'



const OutputScreenRow = () => {
    return (
            <Col lg="4" className='bg-dark'>
                <Form.Control className='text' size="lg" type="text" plaintext readOnly />
            </Col>
        
    )
}

export default OutputScreenRow;