import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import DisciplinaService from '../services/DisciplinaService'

export default class GenerateTableRow extends Component {

    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
    }

    delete(id, nome) {
        let res = window.confirm(`Deseja apagar ${nome}?`)
        if(res) {
            DisciplinaService.delete(
                this.props.firebase.getFirestore(),
                (msg) => {
                    if(msg === 'OK') {
                        console.log(`${nome} apagado!`)
                    }
                }, 
                id
            )
        }
    }


    render() {
        return (
            <tr style={{ textAlign: "center" }}>
                <td>{this.props.disciplinas._id.substring(0,5)}...</td>
                <td>{this.props.disciplinas.nome}</td>
                <td>{this.props.disciplinas.curso}</td>
                <td>{this.props.disciplinas.capacidade}</td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplinas._id} className="btn btn-primary">Editar</Link>
                    <button className="btn btn-danger" onClick={ 
                        () => this.delete(this.props.disciplinas._id, this.props.disciplinas.nome)
                    }>Apagar</button>
                </td>

            </tr>
        )
    }



}