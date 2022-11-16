import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home" onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} className="bg-dark text-white">
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title>Games Database</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Link className="nav-link text-white" onClick={handleClose} to="/">Home</Link>
                        <Link className="nav-link text-white" onClick={handleClose} to="games">Games</Link>
                        <Link className="nav-link text-white" onClick={handleClose} to="categories">Categories</Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );
}

export default Header