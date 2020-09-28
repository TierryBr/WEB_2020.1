import React, { Component } from 'react'

import GenerateTableRow from './GenerateTableRow'

import FirebaseContext from '../utils/FirebaseContext'
import DisciplinaService from '../services/DisciplinaService'


const ListPage = () => (
    <FirebaseContext.Consumer>
        { (contexto) => <List firebase = {contexto} /> }
    </FirebaseContext.Consumer>
)


class List extends Component { 
    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = { disciplinas: [], loading: false }
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })

        DisciplinaService.list(this.props.firebase.getFirestore(), 
            (disciplinas) => {
                if(disciplinas) {
                    if(this._isMounted) {
                        this.setState({disciplinas:disciplinas, loading: false})
                    }
                }
        })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

  

    mountTable() {
        if (!this.state.disciplinas) {
            return
        }
        return this.state.disciplinas.map(
            (dis, indice) => {
                return <GenerateTableRow disciplinas={dis} 
                key={indice} 
               // deleteElementId={this.deleteElementId} 
                firebase={this.props.firebase}
                />
            }
        )
    }

    gerarConteudo() {
        if(this.state.loading) {
            return (
                <tr>
                    <td colSpan='6'>
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                        </div>  
                    </td>
                </tr>
            )
        }else return this.mountTable()
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
                        {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage;