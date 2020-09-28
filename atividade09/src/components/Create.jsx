import React, { Component } from 'react'

import './styles.css'

import FirebaseContext from '../utils/FirebaseContext'

import DisciplinaService from '../services/DisciplinaService'


const CreatePage = () => (
    <FirebaseContext.Consumer>
        { (contexto) => <Create firebase = {contexto} /> }
    </FirebaseContext.Consumer>
)


class Create extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            curso: '',
            capacidade: ''
        }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setCapacidade(e) {
        this.setState({ capacidade: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault() 

        const disciplina = {
            nome: this.state.nome, 
            curso: this.state.curso, 
            capacidade: this.state.capacidade
        }


        DisciplinaService.create(this.props.firebase.getFirestore(), 
        (msg) => {
            if(msg === 'OK') console.log(`Disciplina ${disciplina.nome} inserido !`)
        },
        disciplina
        )

       
        this.setState({
            nome: '',
            curso: '',
            capacidade: ''
        })

    }





    render() {
        return (
            <div className="containerCreate" style={{ marginTop: 20 }}>
                <h3 style={{ marginBottom: 20 }}><strong>Criar disciplina</strong></h3>


                <div className="alert alert-primary" role="alert"
                    style={{ display: "none" }}>Disciplina criada com sucesso!
                </div>

                <div className="alert alert-danger" role="alert"
                    style={{ display: "none" }}>Erro ao cadastrar disciplina.
                </div>


                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Nome (*)"
                            value={this.state.nome}
                            onChange={this.setNome}
                            required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Curso (*)"
                            value={this.state.curso}
                            onChange={this.setCurso}
                            required />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Capacidade (*)"
                            value={this.state.capacidade}
                            onChange={this.setCapacidade}
                            required />
                    </div>
                    <p style={{ color: "gray" }}>(*) Campos obrigatorios!</p>

                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}


export default CreatePage;