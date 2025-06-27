import * as readlineSync from 'readline-sync';

import { Persona } from './Persona';
import { Casino } from './Casino';
import { Dados } from './Dados';
import { Ruleta } from './Ruleta';
import { UnicoTxt } from './PatronSingletonTxt';

//---------------------------------------------------------------------------------------------------------------
//saldo inicial
let saldoPersona:number= readlineSync.questionInt ( `Ingrese saldo inicial: `);
//---------------------------------------------------------------------------------------------------------------
//inicio ganancia
let gananciatotal=0
//---------------------------------------------------------------------------------------------------------------
//Creamos objetos
let jugador1 = new Persona("Juan", saldoPersona);//inicio Clase Persona con nombre y Saldo Inicial
let controlDeGanancia1= UnicoTxt.getInstance(); //inicio patron singleton
let casino = new Casino(gananciatotal,controlDeGanancia1,"codigo de la suerte", saldoPersona,jugador1);//Inicio de Casino

const dados = new Dados(10000, 2, 1,"Dados",saldoPersona);//inicio de Dados
const ruleta = new Ruleta (1,1,1,1,"",1,1, 1, 1,"Ruleta", 20000, 60000, [], ["rojo"], false, []);//Inicio de Ruleta
//---------------------------------------------------------------------------------------------------------------
//Hacemos Push en la clase casino de los juegos: Dados, Ruleta
casino.setJuegos(dados);
casino.setJuegos(ruleta);


casino.controlGanancia.inicioTxt (casino.getSaldoInicial());
//---------------------------------------------------------------------------------------------------------------
//funcion de Elegir juego 
function elegirJuego(casino: Casino): number {//recibe por parametro a Casino
let juego: string; //se Crea String que luego se le 
let juegoSeleccionado: number;//se crea la opcion del juego (seleccionado)
console.log("Bienvenidos a " + casino.getNombre() + ".");
console.log("Juegos disponibles:");
let juegos = casino.getJuegos(); //se crea un arreglo con la cantidad la longitud [], de Juegos.
for (let i = 0; i < juegos.length; i++) {
console.log((i + 1) + ") " + juegos[i].getNombre()); //hace numero en [i] + nombre de Juego [i].getNombre()
}
//comprovacion While, con true. hace una pregunta, con las opciones del juego. y mete el readlinSync
//a juego (que es un string)
while (true) {
        juego = readlineSync.question("Elegir un juego (1/2/...): "); //elejimos que juego queremos
        juegoSeleccionado = parseInt(juego) - 1;//convierte la opcion Juego a numero y le resta 1

        if (juegoSeleccionado >= 0 && juegoSeleccionado < juegos.length) {//si el juego esta dentro del rango de juegos devuelve el valor del elemento del juego [x]
            return juegoSeleccionado;//si se comprueba se corta el bucle
        } else {
            console.log("Opción no válida. Por favor, eliga un número válido.");
        }
    }
}
//----------------------------------------------------------------------------------
//funcion iniciar juego (recibe tipo Casino, index de Juego tipo number, y Persona) de tipo void
function iniciarJuego(casino: Casino, juegoIndex: number, jugador1: Persona): void {

let juegos = casino.getJuegos(); //crea constancia de juegos = al arreglo del juego vacio
let juegoSeleccionado = juegos[juegoIndex];//le pasa el index a Juegos
let seguirJugando = true;//iguala variable a true :boolean como comenzar el while

while (seguirJugando) {

    let juegoIndex = elegirJuego(casino); //Elige juego y devuelve numero (1,2,3...)
    juegoSeleccionado = juegos[juegoIndex];
    let seguirJugandoEste = true;
//----------------------------------------------------------------------------------------------
    while (seguirJugandoEste) {//inicia un while con true
    
        switch (juegoSeleccionado.getNombre()) {//inicia un switch comprobando, mientras el Juego[i].NombreDeJuego es igual a:
            //----------------------------------------------------------------------------------
            case "Dados": //comprueba si Juego.getNombre es "Dados"
                console.log("El juego de " + juegoSeleccionado.getNombre() + " ha sido iniciado.");
                dados.setCreditoActual(jugador1.getSaldo());//le damos el saldo que tiene el jugador
                //casino.controlGanancia.inicioTxt(dados.getCreditoActual());
                dados.jugar (2000); //Iniciamos la funcion principal .jugar(Apuesta)
                //   casino.setGananciaTotal (jugador1.getSaldo()-dados.getCreditoActual());
                jugador1.setSaldo(dados.getCreditoActual()-jugador1.getSaldo()); //acutalizamos Saldo de jugador
                //  casino.controlGanancia.cierreTxt(dados.getCreditoActual());
                casino.setGananciaTotal(jugador1.getSaldo())//acutalizamos la ganancia
                break;
            //----------------------------------------------------------------------------------
            case "Ruleta"://comprueba si Juego.getNombre es "Ruleta"
                console.log("El juego de " + juegoSeleccionado.getNombre() + " ha sido iniciado.");
                ruleta.setCreditoActual(jugador1.getSaldo());//le damos el saldo que tiene el jugador
                ruleta.jugar ();//Iniciamos la funcion principal .jugar
                jugador1.setSaldo(ruleta.getCreditoActual()-jugador1.getSaldo()); //acutalizamos Saldo de jugador
                casino.setGananciaTotal(jugador1.getSaldo())//acutalizamos la ganancia
                break;
        }
//----------------------------------------------------------------------------------
        const respuesta:number = readlineSync.questionInt("¿Desea seguir jugando? (1 para continuar, 2 para elegir otro juego o 0 para salir): ");
        
      if (respuesta === 1) {//si sale uno continua en el while
        
      } else if (respuesta === 2) {
        seguirJugandoEste = false; // sale al menú de juegos nuevamente
      } else if (respuesta === 0) { 
        seguirJugandoEste = false;//si es cero se corta la validacion porque se convierten en flase
        seguirJugando = false;//si es cero se corta la validacion porque se convierten en flase
        console.log("Gracias por jugar. ¡Vuelva pronto!");
      } else {
        console.log("Opción inválida. Eligiendo el mismo juego por defecto.");
      }
    }
    } 
}
//-----------------------------------------------------------------------------------------------------------------
//iniciamos funcion de Inicar el juego.
iniciarJuego(casino, 0, jugador1); //inicializamos funcion, le damos el valor al indice, de entrada en 0 (es numero solo para que inicie);
//imprimir txt
casino.controlGanancia.cierreTxt(casino.getGananciaTotal()-casino.getSaldoInicial());