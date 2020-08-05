import React, { Component } from 'react'

import './styles.css'

export default class GenerateTableRow extends Component {
    render() {
        return (
            <tr style={{ textAlign: "center" }}>
                <td>{this.props.disciplinas.id}</td>
                <td>{this.props.disciplinas.nome}</td>
                <td>{this.props.disciplinas.curso}</td>
                <td>{this.props.disciplinas.capacidade}</td>
                <td style={{ textAlign: "center" }}>
                    <button className="btn btn-primary" >Editar</button>
                    <button className="btn btn-danger">Apagar</button>
                </td>

            </tr>
        )
    }



}