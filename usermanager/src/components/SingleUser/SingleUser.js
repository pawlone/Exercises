import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./SingleUser.scss"

const SingleUser = ({ data: { id = 0, email = "", first_name = "", last_name = "", avatar = "" } }) => {
    return (
        <>
            <Col className='m-3'>
                <Card >
                    <Card.Header className='user-avatar text-center'>
                    <img src={avatar} alt="" className="rounded-circle" />
                    </Card.Header>
                    <Card.Body className='text-center'>
                        <Card.Title>{first_name} {last_name}</Card.Title>
                        <Card.Text>
                            {email}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
        </>
    );
}

export default SingleUser