'use strict'

var express = require('express');
var router = express.Router();

const middleware = require('../matriz.middleware')

/* GET users listing. */
router.post('/paso-1/filas/:size', (req, res, next) => {
    let matriz = req.body
    let size = req.params.size
    matriz = middleware.calcularMinimoPorFilas(matriz, size)
    //console.log(matriz)
    res.send(matriz)
});

router.post('/paso-1/columnas/:size', (req, res, next) => {
    let matriz = req.body
    let size = req.params.size
    matriz = middleware.calcularMinimoPorColumnas(matriz, size)
    //console.log(matriz)
    res.send(matrix)
});

router.get('/master/:size', (req, res, next) => {
    let i,j
    let size = req.params.size
    let matriz = []
    let x = []
    for(i = 0; i < size; i++) {
        x.push(0)
    }
    for(j = 0; j < size; j++) {
        matriz.push(x)
    }
    
    res.send(matriz)
})

router.post('/paso-1/minimos-f/:size', (req, res, next) => {
    let matriz = req.body
    let size = req.params.size
    let u_i = []
    u_i = middleware.getMinimosPorFilas(matriz,size)
    //console.log(u_i)
    res.send(u_i)
})

router.post('/paso-1/minimos-c/:size', (req, res, next) => {
    let matriz = req.body
    let size = req.params.size
    let v_j = []
    v_j = middleware.getMinimosPorColumnas(matriz,size)
    //console.log(v_j)
    res.send(v_j)
})

module.exports = router;
