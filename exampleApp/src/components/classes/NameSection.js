import React from "react";

class NameSection extends React.Component {
    //Costruttore del componente (Viene chiamato per 1°)
    constructor(props) {
        super(props);
        this.state = { name: props.name };
    }

    //Metodo che cambia il nome chiamando il metodo "setState" (che cambia il valore della variabile state)
    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    //Metodo che fa scattare l'evente dopo che il componente viene renderizzato (Viene chiamato per 3°)
    componentDidMount() {
        setTimeout(()=> {
            this.changeName("Claudio Bianchi");
        },3000)
    }

    //Metodo che effettua il rendering del componente (Viene chiamato per 2°)
    render() {
        return (
            <div className="text-center">
                <h1>Benvenuti nel mio sito</h1>
                <p>Sono {this.state.name}</p>
                <button className="btn btn-primary" onClick={() => {this.changeName("Mario Rossi")}}>Cambia Nome</button>
            </div>
        );
    }
}

export default NameSection;