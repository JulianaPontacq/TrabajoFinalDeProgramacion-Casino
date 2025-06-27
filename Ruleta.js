"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
const rls = __importStar(require("readline-sync"));
const Juegos_1 = require("./Juegos");
class Ruleta extends Juegos_1.Juego {
    constructor(pGanoPerdio, pApuestaEsPar, pApuestaColor, pApuestaNumero, pColorGanador, pNumeroGanador, pElegirEsPar, pPolorElegido, pNumeroElegido, pNombreDeJuego, pApuesta, pCreditoActual, pNumeros, pColor, pEsPar, pArrayDeApuestas) {
        super(pNombreDeJuego, pCreditoActual);
        this.numeroElegido = 0; //numero al que se apostara
        this.apuestaNumero = 0; //apuesta de Numero
        this.numeroGanador = 0; //numero Ganador
        this.apuestaColor = 0; //apuesta de Color
        this.apuestaEsPar = 0; //apuesta de EsPar
        this.ganoPerdio = 0; //elimnar atributo
        this.apuesta = 0;
        this.nuevoSaldo = 0; //nuevo saldo, para equiparar el credito Actual -CreditoActual
        //----------------------------------------------------------------------------------------------------
        //NUMEROS DE LA RULETA
        //FUNCION crea un arreglo de 12 items
        this.funcionNumeroRuleta = () => {
            let ruletaNumeros = new Array(12);
            //completa los items del 0 al 11
            for (let i = 0; i < ruletaNumeros.length; i++) {
                ruletaNumeros[i] = i;
            }
            ;
            //le da el valor al arreglo original
            this.setNumeros(ruletaNumeros);
            //Retorna el array
            return this.getNumeros();
        };
        //FUNCION ENTREGA NUMERO RANDOM (NUMERO GANADOR)
        this.funcionNumeroGanador = () => {
            this.setNumeroGanador(this.funcionNumeroRuleta()[Math.floor(Math.random() * this.getNumeros().length)]);
            //entrega un numero random ganador
            return this.getNumeroGanador();
        };
        //----------------------------------------------------------------------------------------------------
        //COLORES DE LA RULETA
        //CREA LOS COLORES DE LA RULETA
        this.funcionColorRuleta = () => {
            let ruletaColores = new Array(12);
            //crea un arreglo de nombres de colores
            let nombreDeColores = ["celeste", "blanco", "rojo"];
            //Le asigna un nombre color a cada elemento del arreglo principal (aplica operacion resto, para repetir 4 hasta para completarlo)
            for (let i = 0; i < ruletaColores.length; i++) {
                ruletaColores[i] = nombreDeColores[i % nombreDeColores.length];
            }
            //le asignamos el arreglo al atributo Color
            this.setColor(ruletaColores);
            return this.getColor();
        };
        this.funcionColorGanador = () => {
            //Asignamos el color segun el numero ganador
            this.setColorGanador(this.funcionColorRuleta()[this.getNumeroGanador()]);
            return this.getColorGanador();
        };
        //----------------------------------------------------------------------------------------------------
        //PAR O IMPAR
        //Asignamos par o impar segun corresponda
        this.funcionParoImpar = () => {
            if (this.getNumeroGanador() % 2 === 0) {
                this.setEsPar(true);
            }
            else {
                this.setEsPar(false);
            }
            //damos la informacion
            if (this.getEsPar() === true) {
                return this.getEsPar();
            }
            else {
                return this.getEsPar();
            }
        };
        //----------------------------------------------------------------------------------------------------
        //PAR O IMPAR PARA LA RULETA
        //Asignamos par o impar segun corresponda
        this.funcionRuletaParoImpar = (pNumeros) => {
            if (pNumeros % 2 === 0) {
                let Par = `Par`;
                return Par;
            }
            else {
                let imPar = `Impar`;
                return imPar;
            }
            ;
        };
        //----------------------------------------------------------------------------------------------------
        //APUESTAS (Crear ARRAY)
        //Iniciar Array de posibles apuestas
        this.funcionPosiblesApuestas = () => {
            //ejemplo - inicio credito en 10000
            //creamos el arreglo con la cantidad de posibles apuestas
            let arregloPrototipoApuestas = new Array(6);
            //asignamos el valor de cada elemento de 1000 en 1000, incluyendo el ultimo lugar para all-in
            for (let j = 0; j < (arregloPrototipoApuestas.length - 1); j++) {
                arregloPrototipoApuestas[j] = (j + 1) * 1000;
            }
            //all-in
            //agrega Credito Actual al ultimo lugar, desde el penultimo lugar, modifica un lugar, y le da el valor de creditoActual
            arregloPrototipoApuestas.splice(arregloPrototipoApuestas.length - 1, 1, this.getCreditoActual());
            //el valor al arreglo correspondiente de apuestas
            this.setArrayDeApuestas(arregloPrototipoApuestas);
            return this.getArrayDeApuestas();
        };
        //----------------------------------------------------------------------------------------------------
        //FUNCION ELEGIR NUMERO
        this.funcionElegirNumero = () => {
            //INGRESA LA OPCION DEL NUMERO QUE DESEA APOSTAR POR QUESTION.INT
            this.setNumeroElegido(rls.questionInt(`Por favor ingrese el numero al que quiere jugar su apuesta\n ${this.getNumeros().join(", ")}\n`));
            //HACEMOS UN BUCLE QUE SI EL NUMERO INGRESADO, NO CUMPLE CON LA CONDICION, TE LO VUELVE A PEDIR HASTA QUE SE CUMPLA
            //EL NUMERO DEBE ESTAR DENTRO DEL ARRAY DE NUMEROS, DEBE SER MAYOR/IGUAL A 0 Y MENOS/IGUAL A 11
            while (!(this.getNumeros()[this.getNumeroElegido()] >= 0 && this.getNumeros()[this.getNumeroElegido()] <= 11)) {
                console.log(`\nNo es posible\n`);
                this.setNumeroElegido(rls.questionInt(`****Por favor ingrese el numero al que quiere jugar su apuesta\n\n------------------------------------- ${this.getNumeros().join(", ")}\n\n\n-------------------------------------\n`));
            }
            //RETORNA EL VALOR APOSTADO DE TIPO NUMBER
            console.log(`A elegido el numero ${this.getNumeros()[this.getNumeroElegido()]} para jugar`);
            return this.getNumeros()[this.getNumeroElegido()];
        };
        //----------------------------------------------------------------------------------------------------
        //FUNCION ELEGIR COLOR
        this.funcionElegirColor = () => {
            //INGRESA LA OPCION DEL COLOR QUE DESEA APOSTAR POR QUESTION.INT
            this.setColorElegido(rls.questionInt(`-------------------------------------\nPor favor ingrese el Color al que quiere jugar su apuesta\n-------------------------------------\n\n1 para elegir el color ${this.getColor()[0]}\n---------------\n2 para elegir el color ${this.getColor()[1]}\n---------------\n3 para elegir el color ${this.getColor()[2]} \n---------------\n`) - 1);
            //HACEMOS UN BUCLE QUE SI EL NUMERO INGRESADO, NO CUMPLE CON LA CONDICION, TE LO VUELVE A PEDIR HASTA QUE SE CUMPLA
            //EL NUMERO DEBE ESTAR DENTRO DEL ARRAY DE NUMEROS, DEBE SER MAYOR/IGUAL A 0 Y MENOS/IGUAL A 11
            while (!(this.getColorElegido() >= 0) ||
                !(this.getColorElegido() <= 2)) {
                console.log(`\nNo es posible\n`);
                this.setColorElegido(rls.questionInt(`-------------------------------------\nPor favor ingrese el Color al que quiere jugar su apuesta\n-------------------------------------\n1 ${this.getColor()[0]}\n---------------\n2 ${this.getColor()[1]},\n---------------\n3 ${this.getColor()[2]} ---------------\n\n`) - 1);
            }
            //RETORNA EL VALOR APOSTADO DE TIPO STRING
            console.log(`A elegido el color ${this.getColor()[this.getColorElegido()]} para jugar`);
            return this.getColor()[this.getColorElegido()];
        };
        //----------------------------------------------------------------------------------------------------
        //FUNCION ELEGIR ES PAR
        this.funcionElegirEsPar = () => {
            //INGRESA LA OPCION DE PAR O IMPAR SEGUN QUIERA APOSTAR POR QUESTION.INT
            this.setElegirEsPar(rls.questionInt(`-------------------------------------\nPor favor elige si desea apostar a par o impar\n---------------\n1 para elegir Par \n---------------\n2 para elegir Impar\n---------------\n`) - 1);
            //INICIAMOS UN BUCLE, SINO ES OPCION 1 O 2, NO DEJARA AVANZAR
            while ((this.getElegirEsPar()) < 0 || (this.getElegirEsPar()) >= 2) {
                this.setElegirEsPar(rls.questionInt(`-------------------------------------\nPor favor elige si desea apostar a par o impar\n---------------\n1 para elegir Par\n---------------\n2 para elegir Impar\n---------------\n`) - 1);
            }
            //COMPROBAMOS NUMERO LA ELECCION Y DEVUELVE TRUE O FALSE SEGUN CORRESPONDA
            if ((this.getElegirEsPar() == 0)) {
                console.log(`---------------\nA elegido jugar a Par\n---------------\n`);
                return true;
            }
            else {
                console.log(`---------------\nA elegido jugar a Impar\n---------------\n`);
                return false;
            }
        };
        //----------------------------------------------------------------------------------------------------
        //FUNCION APOSTAR
        this.funcionApostar = () => {
            //INGRESA LA OPCION QUE DESEA APOSTAR POR QUESTION.INT
            this.setApuesta(rls.questionInt(`ingrese la cantidad que desea apostar \n1 para apostar ${this.getArrayDeApuestas()[0]}\n2 para apostar ${this.getArrayDeApuestas()[1]}\n3 para apostar ${this.getArrayDeApuestas()[2]}\n4 para apostar ${this.getArrayDeApuestas()[3]}\n5 para apostar ${this.getArrayDeApuestas()[4]}\n6 para apostar ${this.getArrayDeApuestas()[5]}\n`) - 1);
            //HACEMOS UN BUCLE QUE SI EL NUMERO INGRESADO, NO CUMPLE CON LA CONDICION, TE LO VUELVE A PEDIR HASTA QUE SE CUMPLA
            //SI ES MENOR QUE 0, O MAYOR QUE 5 O LA OPCION INGRESADA ES MENOR AL CREIDTO DISPONIBLE
            while ((this.getApuesta()) < 0
                || (this.getApuesta()) > 5
                || (this.getArrayDeApuestas()[this.getApuesta()]) > this.getCreditoActual()) {
                this.setApuesta(rls.questionInt(`ingrese la cantidad que desea apostar \n1 para apostar ${this.getArrayDeApuestas()[0]}\n2 para apostar ${this.getArrayDeApuestas()[1]}\n3 para apostar ${this.getArrayDeApuestas()[2]}\n4 para apostar ${this.getArrayDeApuestas()[3]}\n5 para apostar ${this.getArrayDeApuestas()[4]}\n6 para apostar ${this.getArrayDeApuestas()[5]}\n`) - 1);
            }
            //INFORMA QUE LA APUESTA ES CORRECTA
            console.log(`su apuesta de ${this.getArrayDeApuestas()[this.getApuesta()]} se registro correctamente, mucha suerte`);
            //RETORNA EL VALOR APOSTADO DE TIPO NUMBER, DESDE EL ARRAY DE APUESTA
            return this.getArrayDeApuestas()[this.getApuesta()];
        };
        //----------------------------------------------------------------------------------------------------
        //CALCULAR RESULTADO NUMERO
        this.calcularGananciaNumero = (apuesta) => {
            this.setApuestaNumero(apuesta); //(this.getArrayDeApuestas()[this.getApuesta()]));
            this.setCreditoActual((this.getCreditoActual()) - (this.getApuestaNumero()));
            console.log(`el saldo es ${this.getCreditoActual()} `);
        };
        //CALCULAR RESULTADO COLOR
        this.calcularGananciaColor = (apuesta) => {
            this.setApuestaColor(apuesta);
            this.setCreditoActual((this.getCreditoActual()) - (this.getApuestaColor()));
            console.log(`el saldo es ${this.getCreditoActual()} `);
        };
        //CALCULAR RESULTADO PARIDAD
        this.calcularGananciaEsPar = (apuesta) => {
            this.setApuestaEsPar(apuesta);
            this.setCreditoActual((this.getCreditoActual()) - (this.getApuestaEsPar()));
            console.log(`el saldo es ${this.getCreditoActual()} `);
        };
        //----------------------------------------------------------------------------------------------------
        //FUNCION CALCULAR GANANCIA
        this.calcularGanancia = () => {
            if (this.getApuestaNumero() !== 0) {
                //comprobamos si saca el numero, la apuesta se multiplica * 8 y se suma al credito
                if ((this.getNumeroElegido()) === (this.getNumeroGanador())) {
                    this.setCreditoActual(this.getApuestaNumero() * 9 + this.getCreditoActual());
                    console.log(`ah ganado 8 veces mas de su apuesta de ${this.getApuestaNumero()} por sacar pleno en ${this.getNumeroGanador()}, ahora su saldo es de ${this.getCreditoActual()}`);
                }
                //Sino restamos la apuesta al credito
                else {
                    console.log(`ah perdido su apuesta de ${this.getApuestaNumero()} al numero ${this.getNumeroElegido()}, su saldo esta en ${this.getCreditoActual()}`);
                }
            }
            //color
            if (!(this.getApuestaColor() === 0)) {
                if ((this.getColor()[this.getColorElegido()]) === (this.getColorGanador())) {
                    this.setCreditoActual(((this.getApuestaColor()) * 3) + this.getCreditoActual());
                    console.log(`ah ganado 2 veces mas de su apuesta de ${this.getApuestaColor()} por pegar en ${this.getColorGanador()}, ahora su saldo es de ${this.getCreditoActual()}`);
                }
                //Sino restamos la apuesta al credito
                else {
                    console.log(`ah perdido su apuesta de ${this.getApuestaColor()} al Color ${this.getColor()[this.getColorElegido()]}, su saldo esta en ${this.getCreditoActual()}`);
                }
            }
            //color
            if (!(this.getApuestaEsPar() === 0)) {
                if ((((this.getElegirEsPar()) === 0) && ((this.getEsPar()) === true)) || (((this.getElegirEsPar()) === 1) && ((this.getEsPar()) === false))) {
                    this.setCreditoActual(((this.getApuestaEsPar()) * 2) + this.getCreditoActual());
                    console.log(`ah ganado 2 veces mas de su apuesta de ${this.getApuestaEsPar()} por sacar pleno en paridad mixta, ahora su saldo es de ${this.getCreditoActual()}`);
                }
                //Sino restamos la apuesta al credito
                else {
                    console.log(`ah perdido su apuesta de ${this.getApuestaEsPar()} al numero ${this.getNumeroElegido()}, su saldo esta en ${this.getCreditoActual()}`);
                }
            }
            this.setApuestaNumero(0);
            this.setApuestaColor(0);
            this.setApuestaEsPar(0);
            return this.getCreditoActual();
        };
        //----------------------------------------------------------------------------------------------------
        //PRESENTACION DE LA RULETA
        this.funcionRuletaCompleta = () => {
            return console.log(`-------RULETA DE LA SUERTE------- \n
Número ${this.funcionNumeroRuleta()[0]}||${this.funcionColorRuleta()[0]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[0])}     ******     Número ${this.funcionNumeroRuleta()[1]}||${this.funcionColorRuleta()[1]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[1])}     ******     Número ${this.funcionNumeroRuleta()[2]}||${this.funcionColorRuleta()[2]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[2])}\n
Número ${this.funcionNumeroRuleta()[3]}||${this.funcionColorRuleta()[3]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[3])}     ******     Número ${this.funcionNumeroRuleta()[4]}||${this.funcionColorRuleta()[4]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[4])}     ******     Número ${this.funcionNumeroRuleta()[5]}||${this.funcionColorRuleta()[5]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[5])}\n
Número ${this.funcionNumeroRuleta()[6]}||${this.funcionColorRuleta()[6]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[6])}     ******     Número ${this.funcionNumeroRuleta()[7]}||${this.funcionColorRuleta()[7]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[7])}     ******     Número ${this.funcionNumeroRuleta()[8]}||${this.funcionColorRuleta()[8]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[8])}\n
Número ${this.funcionNumeroRuleta()[9]}||${this.funcionColorRuleta()[9]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[9])}     ******     Número ${this.funcionNumeroRuleta()[10]}||${this.funcionColorRuleta()[10]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[10])}     ******     Número ${this.funcionNumeroRuleta()[11]}||${this.funcionColorRuleta()[11]}||${this.funcionRuletaParoImpar(this.funcionNumeroRuleta()[11])}\n`);
        };
        //----------------------------------------------------------------------------------------------------
        //METODO PRINCIPAL DE JUEGO
        //INICIAMOS LA FUNCION JUGAR () DEVUELVE NUMBER
        this.jugar = () => {
            //asignamos el credito
            //CREAMOS LOS NUMEROS DE LA RULETA
            this.funcionNumeroRuleta();
            //CREAMOS LOS COLORES DE LA RULETA
            this.funcionColorRuleta();
            //CREAMOS EL RANGO DE APUESTAS
            this.funcionPosiblesApuestas();
            //PRESENTAMOS EL JUEGO
            console.log("\n================================");
            console.log(`\x1b[32mBienvenido al juego de la ${super.getNombre()}\x1b[0m`);
            console.log("================================");
            console.log(`\x1b[31m *Le recomendamos ser conciente de su apuesta*\x1b[0m \n\n`);
            console.log(`\x1b[34m -Recuerde: \x1b[0m \n`);
            console.log(`\x1b[34m 1) Podrá elegir un numero del\x1b[0m (0) al (11) \x1b[34m - Si saca pleno... ¡¡¡Se lleva **8** veces más de lo que aposto.!!!\x1b[0m`);
            console.log("================================");
            console.log(`\x1b[34m 2) También podrá elegir el color entre:\x1b[0m *(Celeste)* | *(Blanco)* | *(Rojo)*\x1b[34m  - Si acierta... ¡¡¡Se lleva **2** veces más de lo que aposto!!!\x1b[0m`);
            console.log("================================");
            console.log(`\x1b[34m 3) Podrá elegir por último la Paridad:\x1b[0m *(par)* | *(impar)* \x1b[34m - ¡¡¡Pudiendo sacar **1** vez más de lo que aposto!!!\x1b[0m`);
            console.log("================================");
            console.log(`\n\n\x1b[33m ****Mucha Suerte****\x1b[0m\n\n`);
            console.log("================================");
            //ponemos en 0 todas las apuestas
            this.setApuestaNumero(0);
            this.setApuestaColor(0);
            this.setApuestaEsPar(0);
            //-----------------------------------------------------------------------------------------------
            console.log(`Comencemos...en primer lugar...`);
            console.log("================================");
            this.funcionRuletaCompleta();
            this.funcionElegirNumero();
            if (this.getCreditoActual() >= 1000) {
                console.log(`Por favor ahora ingrese la cantidad que desea apostar a numero.`);
                //-------------------------------------------------------
                this.calcularGananciaNumero(this.funcionApostar());
                console.log(`${this.getCreditoActual()}`);
            }
            else {
                console.log(`Espere la proxima ronda para seguir apostando, su saldo no es suficiente`);
            }
            //VOLVEMOS A IMPRIMIR EL RANGO DE APUESTAS PARA ACTUALIZAR ALL-IN
            this.funcionPosiblesApuestas();
            console.log(`Muy bien sigamos...\n`);
            this.funcionRuletaCompleta();
            this.funcionElegirColor();
            if (this.getCreditoActual() >= 1000) {
                console.log(`Por favor ahora ingrese la cantidad que desea apostar a color.`);
                //-------------------------------------------------------
                this.calcularGananciaColor(this.funcionApostar());
                console.log(`${this.getCreditoActual()}`);
            }
            else {
                console.log(`Espere la proxima ronda para seguir apostando, su saldo no es suficiente`);
            }
            //VOLVEMOS A IMPRIMIR EL RANGO DE APUESTAS PARA ACTUALIZAR ALL-IN
            this.funcionPosiblesApuestas();
            console.log(`Ahora si para terminar...`);
            this.funcionRuletaCompleta();
            this.funcionElegirEsPar();
            if (this.getCreditoActual() >= 1000) {
                console.log(`Por favor ahora ingrese la cantidad que desea apostar a par o impar.`);
                //-------------------------------------------------------
                this.calcularGananciaEsPar(this.funcionApostar());
                console.log(`${this.getCreditoActual()}`);
            }
            else {
                console.log(`Espere la proxima ronda para seguir apostando, su saldo no es suficiente`);
            }
            console.log(`Muy bien, sacando numero ganador.\n\n 1...\n\n 2...\n\n 3...\n\n El numero ganador es ${this.funcionNumeroGanador()}`);
            console.log(`Ah salido el color ${this.funcionColorGanador()} y el numero es ${this.funcionRuletaParoImpar(this.getNumeroGanador())}`);
            this.calcularGanancia();
            console.log(this.apuestaColor);
            console.log(this.getCreditoActual());
            return this.getCreditoActual();
        };
        this.numeros = pNumeros; //array de numeros posibles
        this.numeroElegido = pNumeroElegido; //numero al que se apostara
        this.numeroGanador = pNumeroGanador;
        this.apuestaNumero = pApuestaNumero;
        this.color = pColor; // color al que se apostara
        this.colorElegido = pPolorElegido; // la opcion del color al que se apostara
        this.colorGanador = pColorGanador;
        this.apuestaColor = pApuestaColor;
        this.esPar = pEsPar; //array de par/impar para posibles apuestas
        this.elegirEsPar = pElegirEsPar; //la opcion de elegir es par o impar a la cual se apostara
        this.arrayDeApuestas = pArrayDeApuestas; //posibles apuestas disponibles
        this.apuestaEsPar = pApuestaEsPar;
        this.ganoPerdio = pGanoPerdio;
        this.nuevoSaldo = 0; //nuevo saldo, para equiparar el credito Actual -CreditoActual
    }
    //----------------------------------------------------------------------------------------------------
    //REESCRIBO SET DE CREDITO ACUTAL
    setCreditoActual(pCreditoActual) {
        this.nuevoSaldo = pCreditoActual;
    }
    ;
    getCreditoActual() {
        return this.nuevoSaldo;
    }
    ;
    //metodo get de Numero Elegido
    setApuesta(pApuesta) {
        this.apuesta = pApuesta;
    }
    //metodo set de Numeros
    getApuesta() {
        return this.apuesta;
    }
    //metodo get de Numero Elegido
    setNumeroElegido(pNumerosElegido) {
        this.numeroElegido = pNumerosElegido;
    }
    //metodo set de Numeros
    getNumeroElegido() {
        return this.numeroElegido;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo get de Numeros
    setNumeros(pNumeros) {
        this.numeros = pNumeros;
    }
    //metodo set de Numeros
    getNumeros() {
        return this.numeros;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo get de Numero Ganador
    setNumeroGanador(pNumeroGanador) {
        this.numeroGanador = pNumeroGanador;
    }
    //metodo set de Numero Ganador
    getNumeroGanador() {
        return this.numeroGanador;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo set apuesta de numero
    setApuestaNumero(pApuestaNumero) {
        this.apuestaNumero = pApuestaNumero;
    }
    //metodo get apuesta de numero
    getApuestaNumero() {
        return this.apuestaNumero;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo get de Color
    setColor(pColor) {
        this.color = pColor;
    }
    //metodo set de Color
    getColor() {
        return this.color;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo get de Color Elegido
    setColorElegido(pColorElegido) {
        this.colorElegido = pColorElegido;
    }
    //metodo set de Color Elegido
    getColorElegido() {
        return this.colorElegido;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo get de Color Ganador
    setColorGanador(pColorGanador) {
        this.colorGanador = pColorGanador;
    }
    //metodo set de Color Ganador
    getColorGanador() {
        return this.colorGanador;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo set apuesta de Color
    setApuestaColor(pApuestaColor) {
        this.apuestaColor = pApuestaColor;
    }
    //metodo get apuesta de Color
    getApuestaColor() {
        return this.apuestaColor;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo get de Es Par
    setEsPar(pEsPar) {
        this.esPar = pEsPar;
    }
    //metodo set de Es Par
    getEsPar() {
        return this.esPar;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo get de Color Elegido
    setElegirEsPar(pElegirEsPar) {
        this.elegirEsPar = pElegirEsPar;
    }
    //metodo set de Color Elegido
    getElegirEsPar() {
        return this.elegirEsPar;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo set apuesta de EsPar
    setApuestaEsPar(pApuestaEsPar) {
        this.apuestaEsPar = pApuestaEsPar;
    }
    //metodo get apuesta de EsPar
    getApuestaEsPar() {
        return this.apuestaEsPar;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo set arreglo de prototipo de apuestas
    setArrayDeApuestas(pArrayDeApuestas) {
        this.arrayDeApuestas = pArrayDeApuestas;
    }
    //metodo get arreglo de prototipo de apuestas
    getArrayDeApuestas() {
        return this.arrayDeApuestas;
    }
    //----------------------------------------------------------------------------------------------------
    //metodo set gano o perdio
    setGanoPerdio(pGanoPerdio) {
        this.ganoPerdio = pGanoPerdio;
    }
    //metodo get gano o perdio
    getGanoPerdio() {
        return this.ganoPerdio;
    }
}
exports.Ruleta = Ruleta;
