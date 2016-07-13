"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var matriz_paso_1_filas_component_1 = require('./matriz-paso-1-filas.component');
var matriz_service_1 = require('../models/matriz.service');
var MatrizComponent = (function () {
    function MatrizComponent(matrizService) {
        this.matrizService = matrizService;
        this.size = 3;
        this.letra_filas = 'A';
        this.letra_columnas = 'B';
        this.clicked = false;
        this.keys = [];
        this.matrizOriginal = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.u_i = [];
        this.v_j = [];
        this.recursos = { filas: [], columnas: [] };
    }
    MatrizComponent.prototype.ngOnInit = function () {
        this.inicializarMatriz();
        //console.log(this.matrizOriginal)      
        this.numbers();
    };
    MatrizComponent.prototype.inicializarMatriz = function () {
        var i, j;
        for (i = 1; i <= this.size; i++) {
            this.recursos.filas.push("" + this.letra_filas + i);
            this.recursos.columnas.push("" + this.letra_columnas + i);
        }
    };
    MatrizComponent.prototype.numbers = function () {
        var i;
        for (i = 1; i <= this.size; i++) {
            this.keys.push(i);
        }
    };
    MatrizComponent.prototype.llenar_matriz = function () {
        var i, j;
        var x = [];
        var matriz = [];
        for (i = 0; i < this.size; i++) {
            matriz[i] = [];
            for (j = 0; j < this.size; j++) {
                matriz[i][j] = 0;
            }
        }
        return matriz;
    };
    MatrizComponent.prototype.onChangeSize = function () {
        this.keys = [];
        this.numbers();
        this.inicializarMatriz();
        this.matrizOriginal = this.llenar_matriz();
        if (this.clicked) {
            this.clicked = false;
        }
    };
    MatrizComponent.prototype.onChangeValues = function () {
        this.clicked = false;
    };
    MatrizComponent.prototype.onClick = function () {
        if (!this.clicked)
            this.clicked = true;
    };
    MatrizComponent = __decorate([
        core_1.Component({
            selector: 'matriz',
            templateUrl: 'app/views/matriz.component.html',
            styles: [
                ".table-input {\n            width: 75px;\n        }\n        .ng-valid[required] {\n            border-left: 5px solid #42A948; /* green */\n        }\n\n        .ng-invalid {\n            border-left: 5px solid #a94442; /* red */\n        }"
            ],
            directives: [matriz_paso_1_filas_component_1.Paso1ComponentFilas],
            providers: [matriz_service_1.MatrizService]
        }), 
        __metadata('design:paramtypes', [matriz_service_1.MatrizService])
    ], MatrizComponent);
    return MatrizComponent;
}());
exports.MatrizComponent = MatrizComponent;
//# sourceMappingURL=matriz.component.js.map