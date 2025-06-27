"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
class Juego {
    constructor(nombre, creditoActual) {
        this.nombreDeJuego = nombre;
        this.creditoActual = creditoActual;
    }
    getNombre() {
        return this.nombreDeJuego;
    }
    setNombre(nombre) {
        this.nombreDeJuego = nombre;
    }
    getCreditoActual() {
        return this.creditoActual;
    }
    setCreditoActual(ganancia) {
        this.creditoActual += ganancia;
    }
    jugar(apuesta) {
    }
}
exports.Juego = Juego;
