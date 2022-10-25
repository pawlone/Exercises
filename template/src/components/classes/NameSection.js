import React from 'react';

class NameSection extends React.Component {
    
    //Costruttore del componente (che verrà chioamato per primo)
    constructor(props) {
        super(props);
        this.state = { name: props.name };
    }

    //Metodo che cambia il nome chiamando "setState" (che cambierà il valore della varibile state)
    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    //Metodo che fa scattare l'evento dopo che il componente viene renderizzato (viene chiamato per terzo)
    componentDidMount() {
        setTimeout(() => {
            this.changeName("Claudio Bianchi");
        }, 3000)
    }

    //Metodo che effettua il renderinf del componente (viene chiamato per secondo)
    render() {
        return (
            <div className='text-center'>
                <h1>Benvenuto nel mio sito</h1>
                <p>Sono {this.state.name}</p>
                <button className="btn btn-primary" onClick={() => { this.changeName("Mario Rossi") }}>Cambia nome</button>
            </div>
        )
    }

}

export default NameSection;

