const DisciplinasModel = require('../models/DisciplinasModel')

let disciplinas = [
    {_id:0, nome:'FUP1', curso:'SI', capacidade:100},
    {_id:1, nome:'FUP2', curso:'SI', capacidade:100},
    {_id:2, nome:'FUP3', curso:'SI', capacidade:100},
]
let _id = 3

class DisciplinasServices{
    static register(data) {
        let disciplina = new DisciplinasModel(
            _id++,
            data.nome,
            data.curso,
            data.capacidade
        );
        disciplinas.push(disciplina)
        return disciplina
    }

    static list() {
        return disciplinas
    }

    static update(_id, data) {
        for(let e of disciplinas) {
            if(e._id == _id) {
                e.nome = data.nome
                e.curso = data.curso
                e.IRA = data.IRA
                return e
            }
        }
        return null
    }

    static delete(_id) {
        for(let i = 0; i < disciplinas.length; i++) {
            if(disciplinas[i]._id == _id) {
                disciplinas.slice(i,1)
                return true
            }
        }
        return false
    }

    static retrieve(_id) {
        for(let i = 0; i < disciplinas.length; i++) {
            if(disciplinas[i]._id == _id) {
                return disciplinas[i]
            }
        }
        return {}
    }
}

module.exports = DisciplinasServices