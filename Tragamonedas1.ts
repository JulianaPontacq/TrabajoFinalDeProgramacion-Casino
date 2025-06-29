import { Tragamonedas } from "./Tragamonedas";
import { CalculadorDeGanancia } from "./CalculadorDeGanancia";
import*as rls from "readline-sync"

export class Tragamonedas1 extends Tragamonedas implements CalculadorDeGanancia {
    private premio1=false
    private premio2=false
    private premio3=false
    private premio4=false
    private premio5=false

    constructor(pPremio5:boolean,pPremio4:boolean,pPremio3:boolean,pPremio2:boolean,pPremio1:boolean,pRodillo1:string[],pRodillo2:string[],pRodillo3:string[], nombre: string, pCreditoActual: number, pRodillos:string [][], pElemento1:string,pElemento2:string,pElemento3:string, pApuesta:number, pNuevoSaldo:number,pPremio:boolean) {
    super(pRodillo1,pRodillo2,pRodillo3,nombre, pCreditoActual,pRodillos,pElemento1,pElemento2,pElemento3,pApuesta,pNuevoSaldo,pPremio);
    this.premio1=pPremio1
    this.premio2=pPremio2
    this.premio3=pPremio3
    this.premio4=pPremio4
    this.premio5=pPremio5
}

//set y get premio
setPremio1(pPremio1:boolean) {
    this.premio1=pPremio1
}
getPremio1 (): boolean {
    return this.premio1
}
//set y get premio
setPremio2(pPremio2:boolean) {
    this.premio1=pPremio2
}

getPremio2(): boolean {
    return this.premio2
}
//set y get premio
setPremio3(pPremio3:boolean) {
    this.premio3=pPremio3
}

getPremio3 (): boolean {
    return this.premio3
}
//set y get premio
setPremio4(pPremio4:boolean) {
    this.premio1=pPremio4
}

getPremio4 (): boolean {
    return this.premio4
}
//set y get premio
setPremio5(pPremio5:boolean) {
    this.premio1=pPremio5
}

getPremio5 (): boolean {
    return this.premio5
}

    elegirApuesta ():number {
        console.log(`\x1b[34m===================================================\x1b[0m`)
        console.log("Opcion permitida para apostar desde \x1b[33m$1000\x1b[0m")
        console.log(`===================================================`)
        this.setApuesta(rls.questionInt("\x1b[38;5;117mElige la opcion que quisiere:\x1b[0m "))
        console.log(`\x1b[34m===================================================\x1b[0m`)
        try {
            if (this.getApuesta() <= 1000) throw new Error("\nOpcion permitida para apostar desde \x1b[33m$1000\x1b[0m\n\x1b[34m===================================================\x1b[0m"); //valido que la apuesta no sea cero ni negativa
            else if (this.getApuesta() > this.getCreditoActual()) throw new Error("\x1b[31mSu saldo es insuficiente\x1b[0m\n\x1b[34m===================================================\x1b[0m");//verifico que el jugador tenga credito suficiente para apostar
            this.setApuesta(this.getApuesta()); //si pasan ambas validaciones guardo la apuesta
            console.log(`Su apuesta de \x1b[33m$${this.getApuesta()}\x1b[0m se registro con exito.`)
            } catch (error: any) { //si ocurre cualquier error lo mostramos por consola
            console.error("\x1b[31mError al jugar:\x1b[0m \n", error.message);


        while ((this.getApuesta())<1000 || this.getApuesta() > this.getCreditoActual()) {
            try {
            this.setApuesta(rls.questionInt("\x1b[38;5;117mElige la opcion que quisiere:\x1b[0m "))
            console.log(`\x1b[34m===================================================\x1b[0m`)
            if (this.getApuesta() <= 1000) throw new Error("\nOpcion permitida para apostar desde \x1b[33m$1000\x1b[0m\n\x1b[34m===================================================\x1b[0m"); 
            //valido que la apuesta no sea cero ni negativa
            else if (this.getApuesta() > this.getCreditoActual()) throw new Error("\x1b[31mSu saldo es insuficiente\x1b[0m\n\x1b[34m===================================================\x1b[0m");//verifico que el jugador tenga credito suficiente para apostar
            this.setApuesta(this.getApuesta());
            console.log(`Su apuesta de \x1b[33m$${this.getApuesta()}\x1b[0m se registro con exito.`)
            } //si pasan ambas validaciones guardo la apuesta
            catch (error: any) { //si ocurre cualquier error lo mostramos por consola
            console.error("\x1b[31mError al jugar:\x1b[0m \n", error.message);
            }
            }
         }
        return this.getApuesta()
        }

    calcularGanancia(pApuesta: number): number {
        if(this.getPremio1()===true){
                    this.setCreditoActual(this.getCreditoActual()+(pApuesta*7))
        console.log ("\n\x1b[32m***************************************************\x1b[0m\n\x1b[33m===================================================\x1b[0m\n     \x1b[32m******\x1b[0m  ¡Gano 7 veces mas que su apuesta!  \x1b[32m******\x1b[0m\n\x1b[33m***************************************************\x1b[0m\n===================================================\n")
        }
            else if(this.getPremio2()===true){
                    this.setCreditoActual(this.getCreditoActual()+(pApuesta*7))
        console.log ("\n\x1b[32m***************************************************\x1b[0m\n\x1b[33m===================================================\x1b[0m\n     \x1b[32m******\x1b[0m  ¡Gano 7 veces mas que su apuesta!  \x1b[32m******\x1b[0m\n\x1b[33m***************************************************\x1b[0m\n===================================================\n")
            }
        else if (this.getPremio3()===true){
                    this.setCreditoActual(this.getCreditoActual()+(pApuesta*7))
        console.log ("\n\x1b[32m***************************************************\x1b[0m\n\x1b[33m===================================================\x1b[0m\n     \x1b[32m******\x1b[0m  ¡Gano 7 veces mas que su apuesta!  \x1b[32m******\x1b[0m\n\x1b[33m***************************************************\x1b[0m\n===================================================\n")
            }
    else if(this.getPremio4()===true){
                    this.setCreditoActual(this.getCreditoActual()+(pApuesta*12))
        console.log ("\n\x1b[32m***************************************************\x1b[0m\n\x1b[33m===================================================\x1b[0m\n     \x1b[32m******\x1b[0m  ¡Gano 12 veces mas que su apuesta!  \x1b[32m******\x1b[0m\n\x1b[33m***************************************************\x1b[0m\n===================================================\n")
            }
else if(this.getPremio5()===true){
                    this.setCreditoActual(this.getCreditoActual()+(pApuesta*9))
        console.log ("\n\x1b[32m***************************************************\x1b[0m\n\x1b[33m===================================================\x1b[0m\n     \x1b[32m******\x1b[0m  ¡Gano 9 veces mas que su apuesta!  \x1b[32m******\x1b[0m\n\x1b[33m***************************************************\x1b[0m\n===================================================\n")
            }
            else {this.setCreditoActual(this.getCreditoActual()-(pApuesta))
        console.log ("\x1b[34m===================================================\x1b[0m\n\x1b[31m*\x1b[0mHa perdido su apuesta, vuelvalo a intentar\x1b[31m*\x1b[0m\n\x1b[34m===================================================\x1b[0m");
            }

        return this.getCreditoActual();
    }

    crearRodillos () {
        
        //creamos cada elemento con el string correspondiente a la unidad
        this.setElemento1 ("Prehistoria"); 
        this.setElemento2 ("Edad Media");
        this.setElemento3 ("Futuro Cibernético");

        //creamos cada rodillo con su arreglo de string
        this.setRodillo1([this.getElemento1(),this.getElemento2(),this.getElemento3()]);
        this.setRodillo2([this.getElemento1(),this.getElemento2(),this.getElemento3()]);
        this.setRodillo3([this.getElemento1(),this.getElemento2(),this.getElemento3()]);
        
        this.getRodillo1()[0];
        //creamos la maquina contenedora de los tres rodillos
        this.setRodillos(this.getRodillo1(),this.getRodillo2(),this.getRodillo3());
    }
    
    girar():string[][]{

        let numeroLanzado1:number = Math.floor(Math.random() * 3);
        let numeroLanzado2:number = Math.floor(Math.random() * 3);
        let numeroLanzado3:number = Math.floor(Math.random() * 3);

        this.setRodillos([this.getRodillo1()[numeroLanzado1]],[this.getRodillo2()[`${numeroLanzado2}`]],[this.getRodillo3()[`${numeroLanzado3}`]])


        return this.getRodillos()
    }

    calcularPremio ()//(pRodillos:string [])
    : void{
        //creamos los premios posibles
        let premio1= [[this.getRodillo1()[0]],[this.getRodillo1()[0]],[this.getRodillo1()[0]]];
        let premio2= [[this.getRodillo1()[1]],[this.getRodillo1()[1]],[this.getRodillo1()[1]]];
        let premio3= [[this.getRodillo1()[2]],[this.getRodillo1()[2]],[this.getRodillo1()[2]]];
        let premio4= [[this.getRodillo1()[0]],[this.getRodillo1()[1]],[this.getRodillo1()[2]]];
        let premio5= [[this.getRodillo1()[2]],[this.getRodillo1()[1]],[this.getRodillo1()[0]]];

        //inicializamos premios en false
        this.setPremio1(false);
        this.setPremio2(false);
        this.setPremio3(false);
        this.setPremio4(false);
        this.setPremio5(false);
        //convertimos a rodillos en una variable
        const rodillos = this.getRodillos()
        
    console.log(`\n\n\x1b[32m***************************************************\x1b[0m\n\x1b[33m===================================================\x1b[0m\n     \x1b[32m******\x1b[0m  Combinacion Ganadora  \x1b[32m******\x1b[0m\n\x1b[33m***************************************************\x1b[0m\n===================================================\n\x1b[34m===================================================\x1b[0m\n| \x1b[33m*\x1b[0m\x1b[38;5;117m${rodillos[0][0]}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${rodillos[1][0]}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${rodillos[2][0]} \x1b[33m*\x1b[0m\ |\n===================================================\n\x1b[32m***************************************************\x1b[0m`)

        //PREMIO PREHISTORIA
    if (rodillos[0][0]===premio1[0][0] &&
        rodillos[1][0]===premio1[1][0] &&
        rodillos[2][0]===premio1[2][0])
         {
            this.setPremio1 (true)

    }//PREMIO EDAD MEDIA
      else if (rodillos[0][0]===premio2[0][0] &&
             rodillos[1][0]===premio2[1][0] &&
             rodillos[2][0]===premio2[2][0])
             {
                this.setPremio2 (true)
     //PREMIO FUTURO CIBERNETICO
    } else if ((rodillos[0][0]===premio3[0][0] &&
             rodillos[1][0]===premio3[1][0] &&
             rodillos[2][0]===premio3[2][0]) )   
             {
                this.setPremio3 (true)
        //PREMIO ESCALERA
    } else if ((rodillos[0][0]===premio4[0][0] &&
             rodillos[1][0]===premio4[1][0] &&
             rodillos[2][0]===premio4[2][0]) )
             {
                this.setPremio4 (true)
        //PREMIO ESCALERA INVERTIDA
    } else if ((rodillos[2][0]===premio5[2][0] &&
             rodillos[1][0]===premio5[1][0] &&
             rodillos[0][0]===premio5[0][0])) 
             {
                this.setPremio5 (true)
    } else {
        console.log ("\x1b[31m*\x1b[0mLastima...\x1b[31m*\x1b[0m")
    }
    }

    jugar (): void { 
        //creamos el nombre del juego
        this.setNombre ("La Maquina Del Tiempo");
        this.crearRodillos()
        console.log (`\x1b[35m\n===================================\x1b[0m\n\x1b[38;5;117mBienvenidos a ${this.getNombre()}\x1b[0m\n\x1b[35m===================================\x1b[0m`);

        console.log (`\nSumerjase en esta aventura del paso del tiempo`)

        console.log (`\x1b[32mA continucion presentamos los premios\x1b[0m\n\n\x1b[33m===================================\x1b[0m`)

        console.log (`Si saca \x1b[35mescalera invertida\x1b[0m ganará *\x1b[33m9\x1b[0m* veces mas de su apuesta`)
        console.log(`\x1b[34m===================================================\x1b[0m`)
        console.log (`| \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento3}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento2}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento1}\x1b[0m\x1b[33m*\x1b[0m |`)
        console.log(`===================================================`)
        console.log (`\n\x1b[33m===================================\x1b[0m\nSi saca \x1b[35mescalera\x1b[0m ganara *\x1b[33m12\x1b[0m* veces mas de su apuesta`)
        console.log(`\x1b[34m===================================================\x1b[0m`)
        console.log (`| \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento1}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento2}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento3}\x1b[0m\x1b[33m*\x1b[0m |`)
        console.log(`===================================================`)
        console.log (`\n\x1b[33m===================================\x1b[0m\nSi saca la \x1b[35mcombinacion de tres\x1b[0m del mismo elemento ganara *\x1b[33m7\x1b[0m* veces de su apuesta`)
        console.log(`\x1b[34m===================================================\x1b[0m`)
        console.log (`| \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento1}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento1}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento1}\x1b[0m\x1b[33m*\x1b[0m | `)
        console.log(`===================================================`)
        console.log (`| \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento2}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento2}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento2}\x1b[0m\x1b[33m*\x1b[0m | `)
        console.log(`\x1b[34m===================================================\x1b[0m`)
        console.log (`| \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento3}\x1b[0m\x1b[33m*\x1b[0m | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento3}\x1b[0m\x1b[33m*\x1b[0m  | \x1b[33m*\x1b[0m\x1b[38;5;117m${this.elemento3}\x1b[0m\x1b[33m*\x1b[0m |`)
        console.log(`===================================================`)
        console.log(`\n\nMuy bien comencemos, \x1b[35mcargando rodillos....\x1b[0m\n\n...\n\n...\n\n...\n\n`);
        console.log(`\x1b[31m Le recomendamos ser consciente de su apuesta\x1b[0m \n\n`);
        this.elegirApuesta()
        this.crearRodillos()
        console.log("\n\x1b[33m===================================================\x1b[0m\n\nJuguemos, \x1b[35mlanzando perilla...\x1b[0m")
        console.log("\n...")
        console.log("\n...")
        console.log("\n...")
        this.girar()
        this.calcularPremio();
        console.log(`\nSu credito actual es de \x1b[33m$${this.calcularGanancia(this.getApuesta())}\x1b[0m`);
    }
}

//creamos el objeto tragamonedas con su instancia
//let tragamonedas22= new Tragamonedas1 (false,false,false,false,false,["ho11la"],["h1111111la"],["ho22la"],"ho33la",1,[["string"]],"ho4545la","ho999la","ho888la",1,1,false);

//ejecutamos la funcion .CrearRodillos();

//console.log(tragamonedas22.getRodillos().map((r, i) => `Rodillo ${i + 1}: ${r.join(' | ')}`).join('\n'));
//tragamonedas22.setCreditoActual(20000);
//tragamonedas22.jugar();












