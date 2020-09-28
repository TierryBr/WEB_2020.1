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
        axios.delete('http://localhost:3002/disciplinas/delete/' + this.props.disciplinas._id)
            .then(
                (response) => {
                    this.props.deleteElementId(this.props.disciplinas._id)
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
                <td>{this.props.disciplinas._id.substring(0,5)}...</td>
                <td>{this.props.disciplinas.nome}</td>
                <td>{this.props.disciplinas.curso}</td>
                <td>{this.props.disciplinas.capacidade}</td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplinas._id} className="btn btn-primary">Editar</Link>
                    <button className="btn btn-danger" onClick={this.delete}>Apagar</button>
                </td>

            </tr>
        )
    }



}