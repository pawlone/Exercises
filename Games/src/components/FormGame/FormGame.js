import { FloatingLabel, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSubmit, GAMES_URL } from "../Hooks/Custom";
import FetchSelect from "../FetchSelect/FetchSelect";

const FormGame = ({ data: { id = 0, name = "", publisher = "", imageUrl = "", categoryId = 0 } = {} }) => {

    const navigate = useNavigate();
    const onSubmit = useSubmit(GAMES_URL ,id);

    const [inputValues, setInputValues] = useState({
        id: id,
        name: name,
        publisher: publisher,
        imageUrl: imageUrl,
        categoryId: categoryId
    });

    useEffect(() => {
        setInputValues({
            name: name,
            publisher: publisher,
            imageUrl: imageUrl,
            categoryId: categoryId
        })
    }, [name, publisher, imageUrl, categoryId]);

    const handleChange = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: (e.target.name === "categoryId") ? Number(e.target.value) : e.target.value
        }));
    }


    const handleSubmit = (e) => {
        if (id > 0) {
            onSubmit(e, inputValues, onSubmitSuccess)
        } 
        else {
            const newGame = {
                name: inputValues.name,
                publisher: inputValues.publisher,
                imageUrl: inputValues.imageUrl,
                categoryId: inputValues.categoryId
            }
            onSubmit ( e, newGame, onSubmitSuccess);
        }
    }

    const onSubmitSuccess = () => {
        navigate("/games", { replace: true });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <Form.Group controlId="txtName">
                        <FloatingLabel controlId="txtName" label="Nome" className="mb-3">
                            <Form.Control name="name" value={inputValues.name} onChange={handleChange} placeholder="Nome" required />
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group controlId="txtPublisher">
                        <FloatingLabel controlId="txtPublisher" label="Editore" className="mb-3">
                            <Form.Control name="publisher" value={inputValues.publisher} onChange={handleChange} placeholder="Editore"  />
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className="col-md-9">
                    <Form.Group controlId="txtImageUrl">
                        <FloatingLabel controlId="txtImageUrl" label="Url cover" className="mb-3">
                            <Form.Control name="imageUrl" value={inputValues.imageUrl} onChange={handleChange} placeholder="Url cover"  />
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className="col-md-3">
                    <FloatingLabel controlId="txtCategory" label="Categoria" className="mb-3">
                        <FetchSelect name="categoryId" value={inputValues.categoryId} onChange={handleChange} />
                    </FloatingLabel>
                </div>
                <div className="col-12 text-center">
                    <button type={"submit"} className="btn btn-primary me-3 mb-3 px-3">Salva</button>
                    <Link to="/games" className="btn btn-outline-secondary mb-3">Annulla</Link>
                </div>
            </div>
        </form>
    );
}

export default FormGame;