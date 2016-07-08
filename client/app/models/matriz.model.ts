export class MatrizModel {
    constructor(
        public indice_i: number,
        public indice_j: number,
        public valor: number,
        public referencia: {
            fila: string,
            columna: number
        }
    ){}
}