import { Juego } from "./Juegos"; // Importo la clase base Juego.
import { CalculadorDeGanancia } from "./CalculadorDeGanancia"; // Importo la interfaz CalculadorDeGanancia.

export class Dados extends Juego implements CalculadorDeGanancia {
    private cantidadDados: number; // Atributo privado que almacena la cantidad de dados.
    private apuesta: number = 0;
    private nuevoSaldo: number;

    constructor(
        pApuesta: number,
        pCreditoInicial: number,
        pCantidadDados: number,
        pNombreDeJuego: string,
        pCreditoActual: number
    ) {
        super(pNombreDeJuego, pCreditoActual);
        this.cantidadDados = 2; // Se fija en 2 por defecto.
        this.apuesta = pApuesta;
        this.nuevoSaldo = 0;
    }

    // Setter de crédito
    setCreditoActual(pCreditoActual: number) {
        this.nuevoSaldo = pCreditoActual;
    }

    // Getter de crédito
    getCreditoActual(): number {
        return this.nuevoSaldo;
    }

    // Setter y getter de apuesta
    setApuesta(pApuesta: number) {
        this.apuesta = pApuesta;
    }

    getApuesta(): number {
        return this.apuesta;
    }

    // Setter y getter de cantidad de dados
    setCantidadDados(pCantidadDados: number) {
        this.cantidadDados = pCantidadDados;
    }

    getCantidadDados() {
        return this.cantidadDados;
    }

    // Cálculo de ganancia según resultado del dado
    calcularGanancia(pSuma: number, pApuesta: number): number {
        if (pSuma === 7) {
            console.log("\x1b[1m\x1b[32m¡Sacaste 7! Ganaste el doble de tu apuesta.\x1b[0m"); 
            // ⬆️ Mensaje en verde negrita
            this.setCreditoActual(this.getCreditoActual() + Math.floor(pApuesta * 2));
        } else if (pSuma === 11) {
            console.log("\x1b[1m\x1b[36m¡Sacaste 11! Ganaste el triple de tu apuesta.\x1b[0m"); 
            // ⬆️ Mensaje en celeste negrita
            this.setCreditoActual(this.getCreditoActual() + Math.floor(pApuesta * 3));
        } else if (pSuma === 2) {
            console.log("\x1b[1m\x1b[35m¡Sacaste 2! Ganaste cinco veces tu apuesta.\x1b[0m"); 
            // ⬆️ Mensaje en violeta negrita
            this.setCreditoActual(this.getCreditoActual() + Math.floor(pApuesta * 5));
        } else if ([3, 4, 5, 6, 8, 9, 10, 12].includes(pSuma)) {
            console.log(`\x1b[1m\x1b[31mSacaste ${pSuma}. Perdiste toda tu apuesta.\x1b[0m`); 
            // ⬆️ Mensaje en rojo negrita
        }

        return this.getCreditoActual();
    }

    // Ejecución de una ronda del juego
    jugar(pApuesta: number): void {
        console.log(`\x1b[1m\x1b[36mJuego creado con crédito inicial: ${this.getCreditoActual()}\x1b[0m`); 
        // ⬆️ Cian negrita

        pApuesta = Math.floor(pApuesta);
        this.setApuesta(pApuesta);

        console.log(`\x1b[1m\x1b[33mApuesta inicial: ${pApuesta}\x1b[0m`); 
        // ⬆️ Amarillo negrita

        if (pApuesta > this.getCreditoActual() || this.getCreditoActual() <= 0) {
            console.log("\x1b[1m\x1b[31mNo tienes suficiente crédito para apostar.\x1b[0m"); 
            // ⬆️ Rojo negrita
            return;
        }

        this.setCreditoActual(this.getCreditoActual() - pApuesta);

        console.log(`\x1b[1m\x1b[35mCrédito después de apostar: ${this.getCreditoActual()}\x1b[0m`); 
        // ⬆️ Violeta negrita

        let resultados: number[] = [];
        let suma = 0;

        for (let i = 0; i < this.getCantidadDados(); i++) {
            const dado = Math.floor(Math.random() * 6) + 1;
            resultados.push(dado);
            suma += dado;
        }

        console.log(`\x1b[1m\x1b[34mResultados de los dados: ${resultados} (Suma: ${suma})\x1b[0m`); 
        // ⬆️ Azul negrita

        this.calcularGanancia(suma, this.getApuesta());

        console.log(`\x1b[1m\x1b[32mCrédito final después de la partida: ${this.getCreditoActual()}\x1b[0m`); 
        // ⬆️ Verde negrita
    }
}
