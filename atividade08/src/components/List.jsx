import React, { Component } from 'react'
import Axios from 'axios'

import GenerateTableRow from './GenerateTableRow'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }
        this.deleteElementId = this.deleteElementId.bind(this)
    }

    componentDidMount() {
        Axios.get('http://localhost:3002/disciplinas/list')
            .then(
                (response) => {
                    this.setState({ disciplinas: response.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    mountTable() {
        if (!this.state.disciplinas) {
            return
        }
        return this.state.disciplinas.map(
            (dis, indice) => {
                return <GenerateTableRow disciplinas={dis} key={indice} deleteElementId={this.deleteElementId} />
            }
        )
    }

    deleteElementId(id) {
        let disciplinasTemp = this.state.disciplinas
        for (let i = 0; i < disciplinasTemp.length; i++) {
            if (disciplinasTemp[i]._id === id) {
                disciplinasTemp.splice(i, 1)
            }
        }
        this.setState({ disciplinas: disciplinasTemp })
    }



    render() {
        return (
            <div style={{ marginTop: 20, marginLeft: 80, marginRight: 80, marginBottom: 80 }}>
                <h3 ><strong>Listar disciplinas</strong></h3>

                <table className="table table-striped" >
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mountTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}