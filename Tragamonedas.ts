import { Juego } from "./Juegos"; // Importo la clase base Juego.

export abstract class Tragamonedas extends Juego {

    protected rodillos:string [][]= [];
    protected rodillo1:string [] = []
    protected rodillo2:string [] = []
    protected rodillo3:string [] = []
    protected elemento1:string = "Cebra"
    protected elemento2:string = "Leon"
    protected elemento3:string = "Elefante"
    protected apuesta: number = 0;
    protected nuevoSaldo: number;
    protected premio: boolean;
  


    constructor(pRodillo1:string[],pRodillo2:string[],pRodillo3:string[],nombre: string, pCreditoActual: number, pRodillos:string [][], pElemento1:string,pElemento2:string,pElemento3:string, pApuesta:number, pNuevoSaldo:number,pPremio:boolean) {
        super(nombre, pCreditoActual);
        this.apuesta = pApuesta;
        this.nuevoSaldo = 0;
        this.rodillos= pRodillos;
        this.rodillo1=pRodillo1
        this.rodillo2=pRodillo2
        this.rodillo3=pRodillo3
        this.elemento1=pElemento1;
        this.elemento2=pElemento2;
        this.elemento3=pElemento3;
        this.premio= false
    }


    //funcion abstracta Girar Rodillo
    abstract girar():string[] [];
    //funcion abastracta calcular Premio
    abstract calcularPremio (pRodillos:string []): void
    //funcion de herencia Juego.Jugar() - incia el juego
    public jugar (apuesta: number): void { 
    }


//SET Y GET
    setRodillos (pRodillo1:string [],pRodillo2:string[],pRodillo3:string[]) {
    this.rodillos=[pRodillo1,pRodillo2,pRodillo3];
    }

    getRodillos (): string [][] {
    return this.rodillos
    }

    //SET Y GET
    setRodillo1 (pRodillo1:string []) {
    this.rodillo1 = pRodillo1
    }

    getRodillo1 (): string [] {
    return this.rodillo1
    }


    //SET Y GET
    setRodillo2 (pRodillo2:string []) {
    this.rodillo2 = pRodillo2
    }

    getRodillo2 (): string [] {
    return this.rodillo2
    }


    //SET Y GET
    setRodillo3 (pRodillo3:string []) {
    this.rodillo3 = pRodillo3
    }


    getRodillo3 (): string [] {
    return this.rodillo3
    }

    //SET Y GET
    setElemento1 (pElemento1:string) {
    this.elemento1=pElemento1
    }
    getElemento1 ():string {
    return this.elemento1
    }

    //SET Y GET
    setElemento2 (pElemento2:string) {
    this.elemento2=pElemento2
    }
    getElemento2 ():string {
    return this.elemento2
    }

    //SET Y GET
    setElemento3 (pElemento3:string) {
    this.elemento3=pElemento3
    }
    getElemento3 ():string {
    return this.elemento3
    }
    // Setter y getter de apuesta
    setApuesta(pApuesta: number) {
    this.apuesta = pApuesta;
    }

    getApuesta(): number {
    return this.apuesta;
    }

    // Setter de crédito
    setCreditoActual(pCreditoActual: number) {
    this.nuevoSaldo = pCreditoActual;
    }

    // Getter de crédito
    getCreditoActual(): number {
    return this.nuevoSaldo;
    }

    //SET Y GET
    setPremio (pPremio:boolean) {
    this.premio=pPremio
    }
    getPremio ():boolean {
    return this.premio
    }
    
}