import * as fs from "fs";
 
 export class UnicoTxt {
    private static instance: UnicoTxt
    private txt: string | null = null

    //constructor privado
    private constructor () {}

    //al ser static nos aseguramos que sea una sola (no puedo utilar new)

    public static getInstance(): UnicoTxt {
        if (!UnicoTxt.instance) {
            UnicoTxt.instance = new UnicoTxt ();
            }
        return UnicoTxt.instance;
    }

    inicioTxt (pSaldoInicial:number):void {
        const pTxt=pSaldoInicial.toString();
        this.txt= pTxt;
        fs.appendFileSync(`HistorialGanancia.txt`, `Registramos su saldo al comienzo de la partida con un valor de $${this.txt}.\n`)
    }

    cierreTxt (pSaldoFinal:number): void {
        let pTxt:string=pSaldoFinal.toString();
        this.txt= pTxt;
        fs.appendFileSync(`HistorialGanancia.txt`,  `Su ganancia total de la corrida en el casino "Codigo de la Suerte" es de $${this.txt}.\n`)
    }

    getPresnetarTxt (): string | null {
        return this.txt;
    }

 }
