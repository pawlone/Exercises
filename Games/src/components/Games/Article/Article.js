import "./Article.scss";
import { Link } from "react-router-dom";
import { GAMES_URL, useDelete } from "../../Hooks/Custom";

const Article = ({ data: { id = 0, name = "", publisher = "", imageUrl = "", category = { id: 0, name: "", alias: "" } }, mutateFn = () => {}}) => {

  const performDelete = useDelete(GAMES_URL, id);

  const onDeleteComplete = () => {
      mutateFn();
  }

  const handleClick = () => {
      if(window.confirm("Sei sicuro di voler eliminare: " + name + "?")){
          return performDelete(onDeleteComplete);
      } 
  }

  return (
    <div className='col-12'>
      <div className='card m-3 text-center' bg='light'>
        <Link to={"/editgame/" + id}>
        <img src={imageUrl} className="card-img-top" alt='game cover' />
        </Link>
        <div className='card-body bg-light'>
          <h2 className='card-title'>{name}</h2>
          <p className='card-text'>{publisher}</p>
          <button className="btn btn-outline-danger btn-sm" onClick={handleClick}>Cancella</button>
        </div>
      </div>
    </div>
  )
};

export default Article;
