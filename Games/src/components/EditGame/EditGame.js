import { useParams } from "react-router-dom";
import { useGames } from "../Hooks/Custom";
import FormGame from "../FormGame/FormGame";

const EditGame = () => {

    const { id } = useParams();
    const { result: games, isLoading, error } = useGames({ id: id });


    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <h2 className="text-center">Modifica</h2>
            <FormGame data={games} />
        </>
    );
}


export default EditGame