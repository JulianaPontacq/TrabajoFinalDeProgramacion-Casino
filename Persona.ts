export class Persona {
    private nombreJugador: string;
    private saldo: number;
    private edad: number; // Atributo para almacenar la edad del jugador



    constructor(nombreJugador: string, saldo: number, edad: number) {
        if (edad < 18) {
            throw new Error("Debes tener al menos 18 años para ingresar al casino."); // Valida que tenga al menos 18 años
        }
        this.nombreJugador = nombreJugador;
        this.saldo = saldo;
        this.edad = edad;
        console.log(`¡Bienvenido/a al Casino Fortuna, ${nombreJugador}! Mucha suerte `);
        // Mensaje de bienvenida si supera la validación
    }
    
    public getNombreJugador(): string {
        return this.nombreJugador;
    }

    public setNombreJugador(nombre: string): void {
        this.nombreJugador = nombre;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo += saldo;
    }
}
