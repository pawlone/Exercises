import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup"
import SingleUser from '../SingleUser/SingleUser';
import { useRest } from '../Hooks/Hooks';
import { useState } from 'react';

const urls = "https://reqres.in/api/users?page="

const UserList = () => {
    const [url, setUrl] = useState(urls + 1);

    const handleClick = event => {
        setUrl(urls + event.currentTarget.id)
    }

    const { resultData: user, isLoading, error } = useRest(url);

    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (isLoading) {
        return <div>is loading...</div>
    } else {
        return (
            <Container>
                <Row className='justify-content-center' xs={1} md={4} >
                    {user.map(p => {
                        return <SingleUser key={p.id} data={p} />
                    })}
                </Row>
                <Row className='justify-content-center my-5'>
                    <Col className='text-center'>
                        <ButtonGroup>
                            <Button id="1" onClick={handleClick} variant="primary">1</Button>
                            <Button id="2" onClick={handleClick} variant="primary">2</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserList