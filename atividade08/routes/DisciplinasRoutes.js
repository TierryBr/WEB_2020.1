var express = require('express')
var router = express.Router()
var DisciplinasServices = require('../services/DisciplinasServices')

router.get('/list', function(req,res,next){
    DisciplinasServices.list(req,res)
})


router.post('/register', function(req,res,next){
    DisciplinasServices.register(req,res)
})


router.put('/update/:id', function(req,res,next){
    DisciplinasServices.update(req,res)
})


router.delete('/delete/:id', function(req,res,next){
    DisciplinasServices.delete(req,res)
})


router.get('/retrieve/:id', function(req,res,next){
    DisciplinasServices.retrieve(req,res)
})


module.exports = router





