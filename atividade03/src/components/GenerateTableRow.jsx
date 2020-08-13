import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

export default class GenerateTableRow extends Component {

    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
    }

    delete() {
        axios.delete('http://localhost:3001/disciplinas/' + this.props.disciplinas.id)
            .then(
                (response) => {
                    this.props.deleteElementId(this.props.disciplinas.id)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }


    render() {
        return (
            <tr style={{ textAlign: "center" }}>
                <td>{this.props.disciplinas.id}</td>
                <td>{this.props.disciplinas.nome}</td>
                <td>{this.props.disciplinas.curso}</td>
                <td>{this.props.disciplinas.capacidade}</td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplinas.id} className="btn btn-primary">Editar</Link>
                    <button className="btn btn-danger" onClick={this.delete}>Apagar</button>
                </td>

            </tr>
        )
    }



}