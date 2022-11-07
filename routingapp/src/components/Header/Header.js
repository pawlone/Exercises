import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/about" >About</Link>
                    <Link className='nav-link' to="/blog">Blog</Link>
                    <Link className="nav-link" to ="blog/article">Article</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header