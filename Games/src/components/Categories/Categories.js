import Table from 'react-bootstrap/Table';
import Article from './Article/Article';
import { useCategory } from '../Hooks/Custom';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { result: categories, isLoading, error, mutate } = useCategory({ includeGames: true });

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
                        <h1>Categorie</h1>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col text-center">
                        <Link to={"/newcategories/"}>
                            <button className="btn btn-primary">Aggiungi Categoria</button>
                        </Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col text-center">
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nome</th>
                                    <th>Alias</th>
                                    <th>Nr. Giochi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(e => {
                                    return <Article key={e.id} data={e} mutateFn={mutate} />
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>

            </>
        );
    }
}

export default Categories