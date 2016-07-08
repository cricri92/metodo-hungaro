import { Component, Input, OnInit } from '@angular/core'
import { NgForm }    from '@angular/common'

import { Paso1Component } from './matriz-paso-1.component'
import { MatrizService } from '../models/matriz.service'

@Component({
    selector: 'matriz',
    templateUrl: 'app/views/matriz.component.html',
    styles: [
        `.table-input {
            width: 75px;
        }
        .ng-valid[required] {
            border-left: 5px solid #42A948; /* green */
        }

        .ng-invalid {
            border-left: 5px solid #a94442; /* red */
        }`
    ],
    directives: [Paso1Component],
    providers: [MatrizService]
})
export class MatrizComponent implements OnInit {
    
    constructor(
       private matrizService: MatrizService
    ) { }

    size = 3    
    letra_filas = 'A'
    letra_columnas = 'B'
    clicked = false
    keys = []
    matrizOriginal: number[][] = [[0,0,0], [0,0,0], [0,0,0]]
    u_i = []
    v_j = []
    recursos = { filas: [], columnas: [] }  
    errorMessage: string 
    
    ngOnInit() {
        this.inicializarMatriz()         
        console.log(this.matrizOriginal)      
        this.numbers() 
    }

    inicializarMatriz()
    {
        let i,j
        for(i = 1;i <= this.size;i++)
        {
            this.recursos.filas.push(`${this.letra_filas}${i}`)
            this.recursos.columnas.push(`${this.letra_columnas}${i}`)           
        }
    }

    numbers(){
        let i
        for(i = 1; i <= this.size; i++){
            this.keys.push(i)
        }        
    }

    llenar_matriz() {
        let i,j
        let x: number[] = []
        let matriz = []
        
        for(i = 0; i < this.size; i++){
            matriz[i] = []
            for(j = 0; j < this.size; j++){
                matriz[i][j] = 0   
            }
        }
        return matriz   
    }

    onChangeSize() {
        this.keys = []
        this.numbers()
        this.inicializarMatriz()
        this.matrizOriginal = this.llenar_matriz()
                
        if(this.clicked) { this.clicked = false }
    }

   
    onChangeValues(){
        this.clicked = false 
    }

    onClick() {
        if(!this.clicked) this.clicked = true
           
    }


}