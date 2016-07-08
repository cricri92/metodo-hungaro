'use strict'

/*
function getMinimosPorFilas(matriz, size) {
    let i, j
    let x, minimos_filas = []
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            x.push(matriz[i])
        }
        minimo_filas.push(Math.min.apply(Math, x))
    }
    return minimos_filas
}
*/
/*
function getMinimosPorColumnas(matriz, size) {
    let i,j 
    let x, minimo_columnas = []
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            x.push(matriz[j][i])
        }
        minimo_columnas.push(Math.min.apply(Math, x))
    }
    return(minimo_columnas)
}
*/

module.exports.getMinimosPorFilas = (matriz, size) => {
    let i, j
    let x = []
    let minimo_filas = []
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            x.push(matriz[i][j])
        }
        minimo_filas.push(Math.min.apply(Math, x))
    }
    return minimo_filas
}


module.exports.getMinimosPorColumnas = (matriz, size) => {
    let i,j 
    let x = []
    let minimo_columnas = []
    for(i = 0; i < size; i++) {
        x = []
        for(j = 0; j < size; j++) {
            x.push(matriz[j][i])
        }
        minimo_columnas.push(Math.min.apply(Math, x))
    }    
    
    return minimo_columnas

}

module.exports.calcularMinimoPorFilas = (matriz, size) => {
    let i, j
    let x = [], minimo_filas = []

    minimo_filas = this.getMinimosPorFilas(matriz, size)
    
    for(i = 0; i < size; i++) {
        x[i] = []
        for(j = 0; j < size; j++) {
            x[i][j] = matriz[i][j] - minimo_filas[i]
        }
    }
    
    return x
}

module.exports.calcularMinimoPorColumnas = (matriz, size) => {
    let i, j
    let x = []
    let minimo_columnas = []

    x = this.inicializarMatriz(size)
    minimo_columnas = this.getMinimosPorColumnas(matriz, size)
    
    for(i = 0; i < size; i++) {        
        for(j = 0; j < size; j++) {            
            x[j][i] = matriz[j][i] - minimo_columnas[i]
            console.log(x)            
        }
    }
    
    
    return x
}

module.exports.inicializarMatriz = (size) => {
    let i,j
    let x = []
    let matriz = []

    for(i = 0; i < size; i++) {
        x[i] = []
        for(j = 0; j < size; j++) {            
            x[i][j] = 0
        }
    }
    console.log(x)
    return x
}