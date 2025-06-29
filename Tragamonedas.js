"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
const Juegos_1 = require("./Juegos"); // Importo la clase base Juego.
class Tragamonedas extends Juegos_1.Juego {
    constructor(pRodillo1, pRodillo2, pRodillo3, nombre, pCreditoActual, pRodillos, pElemento1, pElemento2, pElemento3, pApuesta, pNuevoSaldo, pPremio) {
        super(nombre, pCreditoActual);
        this.rodillos = [];
        this.rodillo1 = [];
        this.rodillo2 = [];
        this.rodillo3 = [];
        this.elemento1 = "Cebra";
        this.elemento2 = "Leon";
        this.elemento3 = "Elefante";
        this.apuesta = 0;
        this.apuesta = pApuesta;
        this.nuevoSaldo = 0;
        this.rodillos = pRodillos;
        this.rodillo1 = pRodillo1;
        this.rodillo2 = pRodillo2;
        this.rodillo3 = pRodillo3;
        this.elemento1 = pElemento1;
        this.elemento2 = pElemento2;
        this.elemento3 = pElemento3;
        this.premio = false;
    }
    //funcion de herencia Juego.Jugar() - incia el juego
    jugar(apuesta) {
    }
    //SET Y GET
    setRodillos(pRodillo1, pRodillo2, pRodillo3) {
        this.rodillos = [pRodillo1, pRodillo2, pRodillo3];
    }
    getRodillos() {
        return this.rodillos;
    }
    //SET Y GET
    setRodillo1(pRodillo1) {
        this.rodillo1 = pRodillo1;
    }
    getRodillo1() {
        return this.rodillo1;
    }
    //SET Y GET
    setRodillo2(pRodillo2) {
        this.rodillo2 = pRodillo2;
    }
    getRodillo2() {
        return this.rodillo2;
    }
    //SET Y GET
    setRodillo3(pRodillo3) {
        this.rodillo3 = pRodillo3;
    }
    getRodillo3() {
        return this.rodillo3;
    }
    //SET Y GET
    setElemento1(pElemento1) {
        this.elemento1 = pElemento1;
    }
    getElemento1() {
        return this.elemento1;
    }
    //SET Y GET
    setElemento2(pElemento2) {
        this.elemento2 = pElemento2;
    }
    getElemento2() {
        return this.elemento2;
    }
    //SET Y GET
    setElemento3(pElemento3) {
        this.elemento3 = pElemento3;
    }
    getElemento3() {
        return this.elemento3;
    }
    // Setter y getter de apuesta
    setApuesta(pApuesta) {
        this.apuesta = pApuesta;
    }
    getApuesta() {
        return this.apuesta;
    }
    // Setter de crédito
    setCreditoActual(pCreditoActual) {
        this.nuevoSaldo = pCreditoActual;
    }
    // Getter de crédito
    getCreditoActual() {
        return this.nuevoSaldo;
    }
    //SET Y GET
    setPremio(pPremio) {
        this.premio = pPremio;
    }
    getPremio() {
        return this.premio;
    }
}
exports.Tragamonedas = Tragamonedas;
