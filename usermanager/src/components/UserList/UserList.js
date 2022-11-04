import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SingleUser from '../SingleUser/SingleUser';
import { useRest } from '../Hooks/Hooks';
import { useState } from 'react';

const urls = "https://reqres.in/api/users?page="

const UserList = () => {
    const [url, setUrl] = useState(urls + 1)

    function handleClick() {
        setUrl(urls + 2)
    }

    const { resultData: user, isLoading, error } = useRest(url);

    if (error) {
        return <div>Error: {error.message}</div>
    }
    if(isLoading) {
        return <div>is loading...</div>
    } else {
        return (
            <Container>
                <Row className='justify-content-center' xs={1} md={4} >
                {user.map(p => {
                    return <SingleUser key={p.id} data = {p} />
                })}
                </Row>
                <Row className='justify-content-center'>
                    <Col className='text-center'>
                    <Button onClick={handleClick}>Page 2</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserList