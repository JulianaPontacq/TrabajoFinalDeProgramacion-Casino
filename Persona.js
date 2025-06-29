"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombreJugador, saldo, edad) {
        if (edad < 18) {
            throw new Error("Debes tener al menos 18 años para ingresar al casino."); // Valida que tenga al menos 18 años
        }
        this.nombreJugador = nombreJugador;
        this.saldo = saldo;
        this.edad = edad;
        console.log(`¡Bienvenido/a al Casino Fortuna, ${nombreJugador}! Mucha suerte `);
        // Mensaje de bienvenida si supera la validación
    }
    getNombreJugador() {
        return this.nombreJugador;
    }
    setNombreJugador(nombre) {
        this.nombreJugador = nombre;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo += saldo;
    }
}
exports.Persona = Persona;
