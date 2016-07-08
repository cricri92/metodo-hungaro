import { Injectable }                               from '@angular/core'
import { Response, Http, Headers, RequestOptions }  from '@angular/http'

import { Observable }                               from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'


@Injectable()
export class MatrizService {

    constructor( private http: Http) {}
    _matrizPaso1 = 'matriz/paso-1'
    _matrizMaster = 'matriz/master'
    
    getMatrizPaso1_f(matriz: number[][], size: number): Observable<number[][]> {
        let body = JSON.stringify(matriz)
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })
        return this.http.post(`${this._matrizPaso1}/filas/${size}`, body, options)
                    .map(this.extractData)
                    .catch(this.handleError)  
    }

    getMatrizPaso1_c(matriz: number[][], size: number): Observable<number[][]> {
        let body = JSON.stringify(matriz)
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })
        return this.http.post(`${this._matrizPaso1}/columnas/${size}`, body, options)
                    .map(this.extractData)
                    .catch(this.handleError)  
    }
    
    getChangedMatriz(size: number): Observable<number[][]> {
        return this.http.get(`${this._matrizMaster}/${size}`)
                 .map(this.extractData)
                 .catch(this.handleError)      
    }
    
    /** Helper for data extraction from response */     
    private extractData(res: Response) {        
        let body = res.json()  
        
        return <number[][]>body || []
    }
    
    /** Helper for error handling */
    private handleError(error: any){
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error'
            console.error(errMsg) // log to console instead
        return Observable.throw(errMsg)
     }
}