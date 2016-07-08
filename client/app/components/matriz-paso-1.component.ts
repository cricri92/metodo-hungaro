import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

import { MatrizService } from '../models/matriz.service'

@Component({
    selector: 'paso-1',
    templateUrl: 'app/views/paso-1.component.html',
    providers: [MatrizService]
})

export class Paso1Component implements OnInit{

    constructor(
        private matrizService: MatrizService
    ) {}

    @Input() matrizOriginal
    @Input() size
    @Input() letra_filas
    @Input() letra_columnas
    //@Output() matrizPaso1 = new EventEmitter()
    keys = []
    u_i = []
    v_j = []
    matrizPaso1_f: number[][] = [[]]
    matrizPaso1_c: number[][] = [[]]
    errorMessage: string
    
    numbers(){
        let i
        for(i = 1; i <= this.size; i++){
            this.keys.push(i)            
        }        
    }

    getMatrizPaso1_c(matriz: number[][], size: number) {
        this.matrizService
            .getMatrizPaso1_c(matriz, size)
                .subscribe(
                    matriz => this.matrizPaso1_c,
                    error => this.errorMessage = <any>error
                )
    }

    ngOnInit() {    
        //this.matrizPaso1_f = this.matrizOriginal    
        this.matrizService
            .getMatrizPaso1_f(this.matrizOriginal, this.size)
                .subscribe(
                    matriz => { 
                        this.matrizPaso1_f = matriz 
                        this.getMatrizPaso1_c(matriz, this.size)
                    },
                    error => this.errorMessage = <any>error
                ) 
        this.numbers()
    }
}