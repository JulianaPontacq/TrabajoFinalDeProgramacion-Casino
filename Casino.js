"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
class Casino {
    constructor(pGananciaTotal, pControlDeGanancia, nombre, pSaldoInicial, persona) {
        this.nombre = nombre;
        this.saldoInicial = pSaldoInicial;
        this.juegos = [];
        this.persona = persona;
        this.controlGanancia = pControlDeGanancia;
        this.gananciaTotal = 0;
    }
    setGananciaTotal(pResultado) {
        this.gananciaTotal = pResultado;
    }
    getGananciaTotal() {
        return this.gananciaTotal;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setJuegos(juego) {
        this.juegos.push(juego);
    }
    getJuegos() {
        return this.juegos;
    }
    getSaldoInicial() {
        return this.saldoInicial;
    }
    setSaldoInicial(pSaldoInicial) {
        this.saldoInicial = pSaldoInicial;
    }
    getPersona() {
        return this.persona;
    }
    setPersona(persona) {
        this.persona = persona;
    }
}
exports.Casino = Casino;
