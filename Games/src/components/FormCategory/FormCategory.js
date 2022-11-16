import { useSubmit, CATEGORY_URL } from "../Hooks/Custom";
import { Link, useNavigate } from "react-router-dom";
import { FloatingLabel, Form } from "react-bootstrap";
import { useState, useEffect } from "react";



const FormCategory = ({ data: { id = 0, name = "", alias = "" } = {} }) => {
    
    const [inputValues, setInputValues] = useState({
        name: name,
        alias: alias
    })

    const onSubmit = useSubmit(CATEGORY_URL, id);
    const navigate = useNavigate();

    useEffect(() => {
        setInputValues({
            name: name,
            alias: alias
        })
    }, [name, alias]);

    const onSubmitSuccess = () => {
        navigate("/categories", { replace: true });
    }

    const handleChange = (e) => {
        setInputValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        if (id > 0) {
            onSubmit(e, inputValues, onSubmitSuccess)
        }
        else {
            const newCategory = {
                name: inputValues.name,
                alias: inputValues.alias
            }
            onSubmit(e, newCategory, onSubmitSuccess);
        }
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
                    <Form.Group controlId="txtAlias">
                        <FloatingLabel controlId="txtAlias" label="Alias" className="mb-3">
                            <Form.Control name="alias" value={inputValues.alias} onChange={handleChange} placeholder="Alias" required />
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className="col-12 text-center">
                    <button type={"submit"} className="btn btn-primary me-3 mb-3 px-3">Salva</button>
                    <Link to="/categories" className="btn btn-outline-secondary mb-3">Annulla</Link>
                </div>
            </div>

        </form>
    )
};

export default FormCategory;
