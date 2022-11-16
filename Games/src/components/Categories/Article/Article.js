import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDelete, CATEGORY_URL } from "../../Hooks/Custom";

const Article = ({ data: { id = 0, name = "", alias = "", games = [] }, mutateFn = () => {}}) => {

  const performDelete = useDelete(CATEGORY_URL ,id);

  const onDeleteComplete = () => {
      mutateFn();
  }

  const handleClick = () => {
      if(window.confirm("Sei sicuro di voler eliminare: " + name + "?")){
          return performDelete(onDeleteComplete);
      } 
  }

  return (
    <>
      <tr>
        <td>
          <Link to={"/editcategories/" + id} className="btn me-3">
            <FontAwesomeIcon icon={faPen} />
          </Link>
          <button className="btn">
            <FontAwesomeIcon icon={faTrash} onClick={handleClick}/>
          </button>
        </td>
        <td>{name}</td>
        <td>{alias}</td>
        <td>{games.length}</td>
      </tr>
    </>
  )
};

export default Article;
