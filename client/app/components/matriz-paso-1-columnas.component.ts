import { Component, Input, OnInit, Output, EventEmitter, AfterContentInit} from '@angular/core'

import { MatrizService } from '../models/matriz.service'

@Component({
    selector: 'paso-1-columnas',
    templateUrl: 'app/views/paso-1-columnas.component.html',
    providers: [MatrizService]
})

export class Paso1ComponentColumnas implements OnInit, AfterContentInit{

    constructor(
        private matrizService: MatrizService
    ) {}

    @Input() matrizFilas
    @Input() size
    @Input() letra_filas
    @Input() letra_columnas
    
    keys = []    
    v_j = []    
    matrizPaso1_c: number[][]
    errorMessage: string
    loaded = true
    activate = true  
    
    ngOnInit() {              
        this.numbers()         
        this.matrizPaso1_c = this.matrizService.minimizarColumnas(this.matrizFilas, this.size)
        console.log(this.matrizPaso1_c)
        this.v_j = this.matrizService.getMinColumnas(this.matrizFilas, this.size) 
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

    getMatrizPaso1_c() {
        this.matrizService
            .getMatrizPaso1_c(this.matrizFilas, this.size)
                .subscribe(
                    new_matriz => {
                        this.matrizPaso1_c = new_matriz
                        this.getMinimosPorColumnas(new_matriz)
                    },
                    error => this.errorMessage = <any>error
                )
    }

    getMinimosPorColumnas(matriz: number[][]) {
        this.matrizService
            .getMinimosPorColumnas(matriz, this.size)
                .subscribe(
                    array => this.v_j = array, 
                    error => this.errorMessage = <any>error
                )
    }
}
    