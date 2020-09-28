export default class DisciplinaService {

    static create = (firestore, callback, disciplina) => {

        firestore.collection('Disciplinas').add({
            nome: disciplina.nome,
            curso: disciplina.curso,
            capacidade: disciplina.capacidade,


        })
        .then(
            () => {
                callback('OK')
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
            () => {
                callback('error')
                var x = document.querySelector(".alert-danger");
                if (x.style.display === "none") {
                     x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
                //console.log(error)
            }
        )
        
    }

    static list = (firestore, callback ) => {

        let ref = firestore.collection('Disciplinas')
        ref.onSnapshot(
            (query) => {
                let disciplinas = []
                query.forEach(
                    (doc) => {
                        const {nome, curso, capacidade} = doc.data()
                        disciplinas.push(
                            {
                                _id: doc.id,
                                nome,
                                curso,
                                capacidade,
                            }
                        )
                    }
                )
        
                callback(disciplinas)
            }
            
        )

    }

    static delete = (firestore, callback, id) => {

        firestore.collection('Disciplinas').doc(id).delete()
        .then( () => callback('OK') )
        .catch(error => callback('Error'))

    }

    static retrieve = (firestore, callback, id) => {

        firestore.collection('Disciplinas').doc(id).get()
        .then(
            (doc) => {
                callback(
                    {
                        nome: doc.data().nome,
                        curso: doc.data().curso,
                        capacidade: doc.data().capacidade
                    }
                )
            }
        )
        .catch( error => callback(null) )

        
    }

    static edit = (firestore, callback, disciplina, id) => {

        firestore.collection('Disciplinas').doc(id).set({
            nome: disciplina.nome,
            curso: disciplina.curso,
            capacidade: disciplina.capacidade,

        })
        .then( () => callback('OK'))
        .catch( error => callback('error'))
        
    }
}