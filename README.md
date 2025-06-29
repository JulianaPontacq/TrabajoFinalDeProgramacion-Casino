# TrabajoFinalDeProgramacion-Casino
Trabajo Final de Programación de Casino - Juliana Pontacq - Juan Ignacio Bayugar

Descripción del Proyecto: Código de la Suerte es una aplicación de apuestas
desarrollada íntegramente en TypeScript. Ofrece al usuario una experiencia
interactiva con múltiples juegos de azar, permitiéndole realizar apuestas, alternar
entre juegos y consultar un historial detallado de sus partidas guardado en un
archivo de texto externo.
Estructura del Casino Virtual:  El sistema incorpora tres modalidades de juego:
Dados, Ruleta y Tragamonedas. Cada una presenta sus propias reglas de apuesta, mecánicas de
juego y recompensas. El usuario puede acceder en cualquier momento a ver su ganancia final.
Juego de Dados:   La dinámica se basa en el lanzamiento de dos dados.
Dependiendo del resultado,  el jugador  podrá multiplicar su apuesta de la
siguiente manera:
Si obtiene un 7, gana el doble de lo apostado.
Si obtiene un 11, gana el triple.
Si obtiene un 2, gana cinco veces su apuesta.
Cualquier otro número no otorga ganancia.
Juego de Ruleta:  La ruleta incluye un paño numérico del 0 al 11, distribuido en
tres colores:  celeste,  blanco  y  rojo. El jugador puede apostar a un número
específico, a un color o a la paridad del número (par/impar). Las recompensas
son:
Coincidencia exacta del número: gana el 800 % del valor apostado.
Coincidencia del color: gana el 200 %.
Coincidencia con par o impar: gana el 100 %.
Juego de Tragamonedas: La dinamica es girar los rodillos en una sola tirada,
pudiendo sacar escalera de determinado orden y podra ganar entre 9 y 
12 veces de su apuesta, y sacando la igualdad de los tres elementos podra sacar 7 veces
mas de su apuesta.
el jugador puede optar por retirarse o seguir jugando.
En caso de que su saldo llegue a $0, queda automáticamente inhabilitado para
continuar. (falto desarrollar tragamonedas1, el while de apuestas entra en bucle al no llegar
con el saldo a la apuesta minima)
Lógica y Comportamiento General del Juego:
El usuario puede alternar entre los juegos sin necesidad de reiniciar la
aplicación.
La validación y actualización del saldo se realiza de forma automática tras
cada partida.
Si el saldo se agota, se bloquean las apuestas hasta que se reinicie la
sesión o se recargue crédito. (falta desarrollar)
Sistema de Historial de Jugadas: por cada recorrido que el jugador realiza por
los juegos, se registra el saldo inicial y el saldo final, demostrando la ganancia o
la perdida.