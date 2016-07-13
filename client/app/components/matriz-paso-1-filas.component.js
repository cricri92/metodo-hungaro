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
var matriz_service_1 = require('../models/matriz.service');
var matriz_paso_1_columnas_component_1 = require('./matriz-paso-1-columnas.component');
var Paso1ComponentFilas = (function () {
    function Paso1ComponentFilas(matrizService) {
        this.matrizService = matrizService;
        this.keys = [];
        this.u_i = [];
        this.activate = false;
        this.loaded = false;
    }
    Paso1ComponentFilas.prototype.ngOnInit = function () {
        this.numbers();
        this.matrizPaso1_f = this.matrizService.minimizarFilas(this.matrizOriginal, this.size);
        this.u_i = this.matrizService.getMinFilas(this.matrizOriginal, this.size);
        //this.getMatrizPaso1_f()
    };
    Paso1ComponentFilas.prototype.ngAfterContentInit = function () {
        this.loaded = true;
        this.activate = true;
    };
    Paso1ComponentFilas.prototype.numbers = function () {
        var i;
        for (i = 1; i <= this.size; i++) {
            this.keys.push(i);
        }
    };
    Paso1ComponentFilas.prototype.getMatrizPaso1_f = function () {
        var _this = this;
        this.matrizService
            .getMatrizPaso1_f(this.matrizOriginal, this.size)
            .subscribe(function (new_matriz) {
            _this.matrizPaso1_f = new_matriz;
            _this.getMinimosPorFilas(new_matriz, _this.size);
        }, function (error) { return _this.errorMessage = error; });
    };
    Paso1ComponentFilas.prototype.getMinimosPorFilas = function (matriz, size) {
        var _this = this;
        this.matrizService
            .getMinimosPorFilas(matriz, size)
            .subscribe(function (array) { return _this.u_i = array; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentFilas.prototype, "matrizOriginal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentFilas.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentFilas.prototype, "letra_filas", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentFilas.prototype, "letra_columnas", void 0);
    Paso1ComponentFilas = __decorate([
        core_1.Component({
            selector: 'paso-1-filas',
            templateUrl: 'app/views/paso-1-filas.component.html',
            providers: [matriz_service_1.MatrizService],
            directives: [matriz_paso_1_columnas_component_1.Paso1ComponentColumnas]
        }), 
        __metadata('design:paramtypes', [matriz_service_1.MatrizService])
    ], Paso1ComponentFilas);
    return Paso1ComponentFilas;
}());
exports.Paso1ComponentFilas = Paso1ComponentFilas;
//# sourceMappingURL=matriz-paso-1-filas.component.js.map