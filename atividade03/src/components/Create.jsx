import React, { Component } from 'react'
import axios from 'axios'

import './styles.css'

export default class Create extends Component {

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
        e.preventDefault() //impedir de fazer reload da pagina
        // console.log('Nome: ' + this.state.nome)
        // console.log('Curso: ' + this.state.curso)
        // console.log('Capacidade: ' + this.state.capacidade)

        const novaDisciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }

        axios.post('http://localhost:3001/disciplinas', novaDisciplina)
            .then(
                (response) => {
                    var x = document.querySelector(".alert-primary");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }

                    //alert("Disciplina " + response.data.nome + " criada com sucesso!")
                }
            )
            .catch(
                (error) => {
                    var x = document.querySelector(".alert-danger");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                    //console.log(error)
                }
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