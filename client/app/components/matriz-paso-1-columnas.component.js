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
var Paso1ComponentColumnas = (function () {
    function Paso1ComponentColumnas(matrizService) {
        this.matrizService = matrizService;
        this.keys = [];
        this.v_j = [];
        this.loaded = true;
        this.activate = true;
    }
    Paso1ComponentColumnas.prototype.ngOnInit = function () {
        this.numbers();
        this.matrizPaso1_c = this.matrizService.minimizarColumnas(this.matrizFilas, this.size);
        console.log(this.matrizPaso1_c);
        this.v_j = this.matrizService.getMinColumnas(this.matrizFilas, this.size);
    };
    Paso1ComponentColumnas.prototype.ngAfterContentInit = function () {
        this.loaded = true;
        this.activate = true;
    };
    Paso1ComponentColumnas.prototype.numbers = function () {
        var i;
        for (i = 1; i <= this.size; i++) {
            this.keys.push(i);
        }
    };
    Paso1ComponentColumnas.prototype.getMatrizPaso1_c = function () {
        var _this = this;
        this.matrizService
            .getMatrizPaso1_c(this.matrizFilas, this.size)
            .subscribe(function (new_matriz) {
            _this.matrizPaso1_c = new_matriz;
            _this.getMinimosPorColumnas(new_matriz);
        }, function (error) { return _this.errorMessage = error; });
    };
    Paso1ComponentColumnas.prototype.getMinimosPorColumnas = function (matriz) {
        var _this = this;
        this.matrizService
            .getMinimosPorColumnas(matriz, this.size)
            .subscribe(function (array) { return _this.v_j = array; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentColumnas.prototype, "matrizFilas", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentColumnas.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentColumnas.prototype, "letra_filas", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1ComponentColumnas.prototype, "letra_columnas", void 0);
    Paso1ComponentColumnas = __decorate([
        core_1.Component({
            selector: 'paso-1-columnas',
            templateUrl: 'app/views/paso-1-columnas.component.html',
            providers: [matriz_service_1.MatrizService]
        }), 
        __metadata('design:paramtypes', [matriz_service_1.MatrizService])
    ], Paso1ComponentColumnas);
    return Paso1ComponentColumnas;
}());
exports.Paso1ComponentColumnas = Paso1ComponentColumnas;
//# sourceMappingURL=matriz-paso-1-columnas.component.js.map