const DisciplinaModel = require('../models/DisciplinasModel');
const DisciplinasModel = require('../models/DisciplinasModel');

class DisciplinasServices {

    static register(request, response) {
        DisciplinaModel.create(request.body).then(
            (disciplina) => {
                response.status(201).json(disciplina)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }

    static list(request, response) {
        DisciplinaModel.find().then(
            (disciplinas) => {
                response.status(201).json(disciplinas)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }


    static update(request, response) {
        DisciplinaModel.findByIdAndUpdate(request.params.id, request.body, {'new': true}).then(
            (disciplina) => {
                response.status(201).json(disciplina)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }


    static delete(request, response) {
        DisciplinaModel.findByIdAndRemove(request.params.id).then(
            (disciplina) => {
                response.status(201).json(disciplina)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }


    static retrieve(request, response) {
        DisciplinaModel.findById(request.params.id).then(
            (disciplina) => {
                response.status(201).json(disciplina)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }


}


module.exports = DisciplinasServices


// const DisciplinasModel = require('../models/DisciplinasModel')

// let disciplinas = []
// let _id = 0

// class DisciplinasServices{
//     static register(data) {
//         let disciplina = new DisciplinasModel(
//             _id++,
//             data.nome,
//             data.curso,
//             data.capacidade
//         );
//         disciplinas.push(disciplina)
//         return disciplina
//     }

//     static list() {
//         return disciplinas
//     }

//     static update(_id, data) {
//         for(let e of disciplinas) {
//             if(e._id == _id) {
//                 e.nome = data.nome
//                 e.curso = data.curso
//                 e.capacidade = data.capacidade
//                 return e
//             }
//         }
//         return null
//     }

//     static delete(_id) {
//         for(let i = 0; i < disciplinas.length; i++) {
//             if(disciplinas[i]._id == _id) {
//                 disciplinas.splice(i,1)
//                 return true
//             }
//         }
//         return false
//     }

//     static retrieve(_id) {
//         for(let i = 0; i < disciplinas.length; i++) {
//             if(disciplinas[i]._id == _id) {
//                 return disciplinas[i]
//             }
//         }
//         return {}
//     }
// }

// module.exports = DisciplinasServices