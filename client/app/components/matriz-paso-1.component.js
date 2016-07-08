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
var Paso1Component = (function () {
    function Paso1Component(matrizService) {
        this.matrizService = matrizService;
        //@Output() matrizPaso1 = new EventEmitter()
        this.keys = [];
        this.u_i = [];
        this.v_j = [];
        this.matrizPaso1_f = [[]];
        this.matrizPaso1_c = [[]];
    }
    Paso1Component.prototype.numbers = function () {
        var i;
        for (i = 1; i <= this.size; i++) {
            this.keys.push(i);
        }
    };
    Paso1Component.prototype.getMatrizPaso1_c = function (matriz, size) {
        var _this = this;
        this.matrizService
            .getMatrizPaso1_c(matriz, size)
            .subscribe(function (matriz) { return _this.matrizPaso1_c; }, function (error) { return _this.errorMessage = error; });
    };
    Paso1Component.prototype.ngOnInit = function () {
        var _this = this;
        //this.matrizPaso1_f = this.matrizOriginal    
        this.matrizService
            .getMatrizPaso1_f(this.matrizOriginal, this.size)
            .subscribe(function (matriz) {
            _this.matrizPaso1_f = matriz;
            _this.getMatrizPaso1_c(matriz, _this.size);
        }, function (error) { return _this.errorMessage = error; });
        this.numbers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1Component.prototype, "matrizOriginal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1Component.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1Component.prototype, "letra_filas", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Paso1Component.prototype, "letra_columnas", void 0);
    Paso1Component = __decorate([
        core_1.Component({
            selector: 'paso-1',
            templateUrl: 'app/views/paso-1.component.html',
            providers: [matriz_service_1.MatrizService]
        }), 
        __metadata('design:paramtypes', [matriz_service_1.MatrizService])
    ], Paso1Component);
    return Paso1Component;
}());
exports.Paso1Component = Paso1Component;
//# sourceMappingURL=matriz-paso-1.component.js.map