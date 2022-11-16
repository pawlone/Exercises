import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./Home.scss"

const Home = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-7 col-md-4 text-center my-4">
                    <Link className="nav-link" to="games">
                        <Card bg="light">
                            <Card.Body>
                                <h2>Games</h2>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-7 col-md-4  my-4 text-center">
                    <Link className="nav-link" to="categories">
                        <Card bg="light">
                            <Card.Body>
                                <h2>Categories</h2>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;