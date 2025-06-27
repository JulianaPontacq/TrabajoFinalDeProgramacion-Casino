"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombreJugador, saldo) {
        this.nombreJugador = nombreJugador;
        this.saldo = saldo;
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
