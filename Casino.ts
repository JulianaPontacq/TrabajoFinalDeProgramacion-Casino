import { Juego } from './Juegos';
import { Persona } from './Persona';
import { UnicoTxt } from './PatronSingletonTxt';
export class Casino {

    
    public controlGanancia: UnicoTxt;
    private gananciaTotal: number //creo una ganancia para que me sume el total ganado de cada vuelta de ronda.
    private nombre;
    private juegos: Juego[];
    private persona: Persona
    private saldoInicial: number
    
    constructor(pGananciaTotal:number,pControlDeGanancia:UnicoTxt,nombre: string, pSaldoInicial: number, persona: Persona) {
        this.nombre = nombre;
        this.saldoInicial = pSaldoInicial
        this.juegos = [];
        this.persona = persona
        this.controlGanancia = pControlDeGanancia;
        this.gananciaTotal =0
    }
    setGananciaTotal (pResultado:number):void{
    this.gananciaTotal = pResultado
    }

    getGananciaTotal (): number {
     return this.gananciaTotal
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setJuegos(juego: Juego): void {
        this.juegos.push (juego);
    }

    public getJuegos(): Juego[] {
        return this.juegos;
    }

    public getSaldoInicial(): number {
        return this.saldoInicial;
    }

    public setSaldoInicial(pSaldoInicial: number): void {
        this.saldoInicial = pSaldoInicial;
    }

    public getPersona(): Persona {
        return this.persona;
    }

    public setPersona(persona: Persona): void {
        this.persona = persona;
    }
}
