import Article from "./Article/Article";
import { Row } from "react-bootstrap";
import { useGames } from "../Hooks/Custom";
import { Link } from "react-router-dom";


const Games = () => {

    const { result: games, isLoading, error, mutate } = useGames({ includeCategory: true });

    if (error) {
        return (<div>Error: {error.message}</div>)
    }
    if (isLoading) {
        return (<div>Loading...</div>)
    } else {
    return (
        <>
        <div className="row my-3">
            <div className="col text-center">
                <h1>Games</h1>
            </div>
        </div>
        <div className="row my-3">
            <div className="col text-center">
                <Link to={"/newgame/"}>
                <button className="btn btn-primary">Aggiungi Gioco</button>
                </Link>
            </div>
        </div>
        <div className="row">
                <div className="col">

                </div>
            </div>
        <Row className="justify-content-center" md={2} lg={3}>
            {games.map(e => {
                return <Article key={e.id} data={e} mutateFn={mutate}/>
            })}
        </Row>
        </>
    );
    }

}

export default Games