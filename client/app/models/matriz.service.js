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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var MatrizService = (function () {
    function MatrizService(http) {
        this.http = http;
        this._matrizPaso1 = 'matriz/paso-1';
        this._matrizMaster = 'matriz/master';
    }
    MatrizService.prototype.getMatrizPaso1_f = function (matriz, size) {
        var body = JSON.stringify(matriz);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._matrizPaso1 + "/filas/" + size, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatrizService.prototype.getMatrizPaso1_c = function (matriz, size) {
        var body = JSON.stringify(matriz);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._matrizPaso1 + "/columnas/" + size, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatrizService.prototype.getMinimosPorFilas = function (matriz, size) {
        var body = JSON.stringify(matriz);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._matrizPaso1 + "/minimos-f/" + size, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatrizService.prototype.getMinimosPorColumnas = function (matriz, size) {
        var body = JSON.stringify(matriz);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._matrizPaso1 + "/minimos-c/" + size, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatrizService.prototype.getChangedMatriz = function (size) {
        return this.http.get(this._matrizMaster + "/" + size)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MatrizService.prototype.getMinFilas = function (matriz, size) {
        var i, j, k;
        var x = [];
        for (i = 0; i < size; i++) {
            var menor = matriz[i][0];
            for (j = 0; j < size; j++) {
                if (matriz[i][j] < menor) {
                    menor = matriz[i][j];
                }
            }
            x.push(menor);
        }
        return x;
    };
    MatrizService.prototype.minimizarFilas = function (matriz, size) {
        var new_matriz = [];
        var min = this.getMinFilas(matriz, size);
        var i, j;
        for (i = 0; i < size; i++) {
            var menor = min[i];
            var x = [];
            for (j = 0; j < size; j++) {
                x.push(matriz[i][j] - menor);
            }
            new_matriz.push(x);
        }
        return new_matriz;
    };
    MatrizService.prototype.minimizarColumnas = function (matriz, size) {
        var new_matriz = [];
        var min = this.getMinColumnas(matriz, size);
        var i, j;
        for (i = 0; i < size; i++) {
            var menor = min[i];
            var x = [];
            for (j = 0; j < size; j++) {
                x.push(matriz[j][i] - menor);
            }
            new_matriz.push(x);
        }
        return new_matriz;
    };
    MatrizService.prototype.getMinColumnas = function (matriz, size) {
        var i, j, k;
        var x = [];
        for (i = 0; i < size; i++) {
            var menor = matriz[0][i];
            for (j = 0; j < size; j++) {
                if (matriz[j][i] < menor) {
                    menor = matriz[j][i];
                }
            }
            x.push(menor);
        }
        return x;
    };
    /** Helper for data extraction from response */
    MatrizService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    /** Helper for error handling */
    MatrizService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    MatrizService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MatrizService);
    return MatrizService;
}());
exports.MatrizService = MatrizService;
//# sourceMappingURL=matriz.service.js.map