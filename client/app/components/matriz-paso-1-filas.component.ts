import { Component, Input, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core'

import { MatrizService } from '../models/matriz.service'
import { Paso1ComponentColumnas } from './matriz-paso-1-columnas.component'

@Component({
    selector: 'paso-1-filas',
    templateUrl: 'app/views/paso-1-filas.component.html',
    providers: [MatrizService],
    directives: [Paso1ComponentColumnas]
})

export class Paso1ComponentFilas implements OnInit, AfterContentInit{

    constructor(
        private matrizService: MatrizService
    ) {}

    @Input() matrizOriginal
    @Input() size
    @Input() letra_filas
    @Input() letra_columnas
    
    keys = []
    u_i = []
    activate = false
    matrizPaso1_f: number[][]   
    errorMessage: string
    loaded = false
    
    ngOnInit() {    
        this.numbers()         
        this.matrizPaso1_f = this.matrizService.minimizarFilas(this.matrizOriginal, this.size)
        this.u_i = this.matrizService.getMinFilas(this.matrizOriginal, this.size)         
        //this.getMatrizPaso1_f()
   }

   ngAfterContentInit() {       
        this.loaded = true
        this.activate = true       
    }

    numbers(){
        let i
        for(i = 1; i <= this.size; i++){
            this.keys.push(i)            
        }        
    }
  
    getMatrizPaso1_f() {
        this.matrizService
            .getMatrizPaso1_f(this.matrizOriginal, this.size)
                .subscribe(
                    new_matriz => { 
                        this.matrizPaso1_f = new_matriz
                        this.getMinimosPorFilas(new_matriz, this.size)
                    },
                    error => this.errorMessage = <any>error
                )
    }

    getMinimosPorFilas(matriz: number[][], size: number) {
        this.matrizService
            .getMinimosPorFilas(matriz, size)
                .subscribe(
                    array => this.u_i = array, 
                    error => this.errorMessage = <any>error
                )
    }

   
}
    