import { useParams } from "react-router-dom";
import { useCategory } from "../Hooks/Custom";
import FormCategory from "../FormCategory/FormCategory";

const EditCategory = () => {

    const { id } = useParams();
    const { result: categories, isLoading, error} = useCategory({id : id});

    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
  return (
    <>
    <h2 className="text-center">Modifica</h2>
      <FormCategory data={categories}/>
    </>
  )
};

export default EditCategory;
