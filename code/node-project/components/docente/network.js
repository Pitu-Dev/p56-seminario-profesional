const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req, res) {
    const filtroDocente = req.query.docente || null
    controller.getDocente( filtroDocente )
        .then((data) => {
            response.success( req, res, data, 200 )
        })
        .catch((error) => {
            response.error( req, res, error, 500 )
        })
})
router.post('/', function(req, res) {
    controller.addDocente( req.body.nombre, req.body.apellido, req.body.correo_electronico)
    .then( (data) =>{
        response.success( req, res, data, 201 )        
    } )
    .catch((error) => {
        response.error( req, res, error, 500 )        
    })
})
router.patch('/', function(req, res) {
   
})
router.delete('/', function(req, res) {
    
})

module.exports = router