export class Juego {
    protected nombreDeJuego: string;
    private creditoActual: number;

    public constructor(nombre: string, creditoActual: number) {
        this.nombreDeJuego = nombre;
        this.creditoActual = creditoActual;
    }

    public getNombre(): string {
        return this.nombreDeJuego;
    }

    public setNombre(nombre: string): void {
        this.nombreDeJuego = nombre;
    }
    
    public getCreditoActual(): number {
        return this.creditoActual;
    }

    public setCreditoActual(ganancia: number): void {
        this.creditoActual += ganancia;
    }


    public jugar (apuesta: number): void { 
     
    }
}
