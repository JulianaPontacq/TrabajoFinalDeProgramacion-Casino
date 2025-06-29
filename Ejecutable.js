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
const readlineSync = __importStar(require("readline-sync"));
const Persona_1 = require("./Persona");
const Casino_1 = require("./Casino");
const Dados_1 = require("./Dados");
const Ruleta_1 = require("./Ruleta");
const Tragamonedas1_1 = require("./Tragamonedas1");
const PatronSingletonTxt_1 = require("./PatronSingletonTxt");
//---------------------------------------------------------------------------------------------------------------
//saldo inicial
let saldoPersona = readlineSync.questionInt(`Ingrese saldo inicial: `);
//---------------------------------------------------------------------------------------------------------------
// Solicitar edad del jugador
console.log("\x1b[94mIngrese edad:\x1b[0m"); //  Muestra el mensaje en consola
let edad = readlineSync.questionInt(); //  Captura la edad del jugador
//inicio ganancia
let gananciatotal = 0;
//---------------------------------------------------------------------------------------------------------------
//Creamos objetos
let jugador1; //mantuve esta linea y agregue el bloque try/catch abajo
try {
    jugador1 = new Persona_1.Persona("Juan", saldoPersona, edad); // inclui la edad
}
catch (error) {
    console.log(`\x1b[91m${error.message}\x1b[0m`); //  muestra el  mensaje si no cumple edad mínima
    process.exit(); // termina la ejecución si la edad es inválida
}
let controlDeGanancia1 = PatronSingletonTxt_1.UnicoTxt.getInstance(); //inicio patron singleton
let casino = new Casino_1.Casino(gananciatotal, controlDeGanancia1, "codigo de la suerte", saldoPersona, jugador1); //Inicio de Casino
const dados = new Dados_1.Dados(10000, 2, 1, "Dados", saldoPersona); //inicio de Dados
const ruleta = new Ruleta_1.Ruleta(1, 1, 1, 1, "", 1, 1, 1, 1, "Ruleta", 20000, 60000, [], ["rojo"], false, []); //Inicio de Ruleta
const tragamonedasMaquinaDelTiempo = new Tragamonedas1_1.Tragamonedas1(false, false, false, false, false, ["ho11la"], ["h1111111la"], ["ho22la"], "La Maquina Del Tiempo", 1, [["string"]], "ho4545la", "ho999la", "ho888la", 1, 1, false);
//---------------------------------------------------------------------------------------------------------------
//Hacemos Push en la clase casino de los juegos: Dados, Ruleta
casino.setJuegos(dados);
casino.setJuegos(ruleta);
casino.setJuegos(tragamonedasMaquinaDelTiempo);
casino.controlGanancia.inicioTxt(casino.getSaldoInicial());
//---------------------------------------------------------------------------------------------------------------
//funcion de Elegir juego 
function elegirJuego(casino) {
    let juego; //se Crea String que luego se lee
    let juegoSeleccionado; //se crea la opcion del juego (seleccionado)
    console.log("\x1b[92mBienvenidos a " + casino.getNombre() + ".\x1b[0m");
    console.log("\x1b[96mJuegos disponibles:\x1b[0m");
    let juegos = casino.getJuegos(); //se crea un arreglo con la cantidad la longitud [], de Juegos.
    for (let i = 0; i < juegos.length; i++) {
        console.log("\x1b[95m" + (i + 1) + ") " + juegos[i].getNombre() + "\x1b[0m"); //hace numero en [i] + nombre de Juego [i].getNombre()
    }
    //comprovacion While, con true. hace una pregunta, con las opciones del juego. y mete el readlinSync
    //a juego (que es un string)
    while (true) {
        juego = readlineSync.question("\x1b[93mElegir un juego (1/2/...): \x1b[0m"); //elejimos que juego queremos
        juegoSeleccionado = parseInt(juego) - 1; //convierte la opcion Juego a numero y le resta 1
        if (juegoSeleccionado >= 0 && juegoSeleccionado < juegos.length) { //si el juego esta dentro del rango de juegos devuelve el valor del elemento del juego [x]
            return juegoSeleccionado; //si se comprueba se corta el bucle
        }
        else {
            console.log("\x1b[91mOpción no válida. Por favor, eliga un número válido.\x1b[0m");
        }
    }
}
//----------------------------------------------------------------------------------
//funcion iniciar juego (recibe tipo Casino, index de Juego tipo number, y Persona) de tipo void
function iniciarJuego(casino, juegoIndex, jugador1) {
    let juegos = casino.getJuegos(); //crea constancia de juegos = al arreglo del juego vacio
    let juegoSeleccionado = juegos[juegoIndex]; //le pasa el index a Juegos
    let seguirJugando = true; //iguala variable a true :boolean como comenzar el while
    while (seguirJugando) {
        let juegoIndex = elegirJuego(casino); //Elige juego y devuelve numero (1,2,3...)
        juegoSeleccionado = juegos[juegoIndex];
        let seguirJugandoEste = true;
        //----------------------------------------------------------------------------------------------
        while (seguirJugandoEste) { //inicia un while con true
            switch (juegoSeleccionado.getNombre()) { //inicia un switch comprobando, mientras el Juego[i].NombreDeJuego es igual a:
                //----------------------------------------------------------------------------------
                case "Dados": //comprueba si Juego.getNombre es "Dados"
                    console.log("\x1b[93mEl juego de " + juegoSeleccionado.getNombre() + " ha sido iniciado.\x1b[0m");
                    dados.setCreditoActual(jugador1.getSaldo()); //le damos el saldo que tiene el jugador
                    //casino.controlGanancia.inicioTxt(dados.getCreditoActual());
                    dados.jugar(2000); //Iniciamos la funcion principal .jugar(Apuesta)
                    //   casino.setGananciaTotal (jugador1.getSaldo()-dados.getCreditoActual());
                    jugador1.setSaldo(dados.getCreditoActual() - jugador1.getSaldo()); //acutalizamos Saldo de jugador
                    //  casino.controlGanancia.cierreTxt(dados.getCreditoActual());
                    casino.setGananciaTotal(jugador1.getSaldo()); //acutalizamos la ganancia
                    break;
                //----------------------------------------------------------------------------------
                case "Ruleta": //comprueba si Juego.getNombre es "Ruleta"
                    console.log("\x1b[93mEl juego de " + juegoSeleccionado.getNombre() + " ha sido iniciado.\x1b[0m");
                    ruleta.setCreditoActual(jugador1.getSaldo()); //le damos el saldo que tiene el jugador
                    ruleta.jugar(); //Iniciamos la funcion principal .jugar
                    jugador1.setSaldo(ruleta.getCreditoActual() - jugador1.getSaldo()); //acutalizamos Saldo de jugador
                    casino.setGananciaTotal(jugador1.getSaldo()); //acutalizamos la ganancia
                    break;
                case tragamonedasMaquinaDelTiempo.getNombre(): //comprueba si Juego.getNombre es "Ruleta"
                    console.log("\x1b[93mEl juego de " + juegoSeleccionado.getNombre() + " ha sido iniciado.\x1b[0m");
                    tragamonedasMaquinaDelTiempo.setCreditoActual(jugador1.getSaldo()); //le damos el saldo que tiene el jugador
                    tragamonedasMaquinaDelTiempo.jugar(); //Iniciamos la funcion principal .jugar
                    jugador1.setSaldo(tragamonedasMaquinaDelTiempo.getCreditoActual() - jugador1.getSaldo()); //acutalizamos Saldo de jugador
                    casino.setGananciaTotal(jugador1.getSaldo()); //acutalizamos la ganancia
                    break;
            }
            //----------------------------------------------------------------------------------
            const respuesta = readlineSync.questionInt("\x1b[96m¿Desea seguir jugando? (1 para continuar, 2 para elegir otro juego o 0 para salir): \x1b[0m");
            if (respuesta === 1) { //si sale uno continua en el while
            }
            else if (respuesta === 2) {
                seguirJugandoEste = false; // sale al menú de juegos nuevamente
            }
            else if (respuesta === 0) {
                seguirJugandoEste = false; //si es cero se corta la validacion porque se convierten en flase
                seguirJugando = false; //si es cero se corta la validacion porque se convierten en flase
                console.log("\x1b[92mGracias por jugar. ¡Vuelva pronto!\x1b[0m");
            }
            else {
                console.log("\x1b[91mOpción inválida. Eligiendo el mismo juego por defecto.\x1b[0m");
            }
        }
    }
}
//-----------------------------------------------------------------------------------------------------------------
//iniciamos funcion de Inicar el juego.
iniciarJuego(casino, 0, jugador1); //inicializamos funcion, le damos el valor al indice, de entrada en 0 (es numero solo para que inicie);
//imprimir txt
casino.controlGanancia.cierreTxt(casino.getGananciaTotal() - casino.getSaldoInicial());
