# Modyo Memory

Solución al reto técnico de Modyo hecho con:

* [Vue 3](https://github.com/vuejs/core)
* [Tailwind 3](https://github.com/tailwindlabs/tailwindcss)
* [Pinia] (https://github.com/vuejs/pinia)

Me apoye de [vue-axe](https://github.com/vue-a11y/vue-axe-next) para el tema de accesibilidad

## Problema

El juego consiste en: 

La primera vez que un usuario ingrese al juego se le debe solicitar el nombre.

Mostrar un tablero con un grupo de cartas boca abajo y un marcador con un espacio para mostrar: Errores y aciertos.

* El jugador debe ir volteando las cartas intentando adivinar las cartas que se repiten.

* Todas las cartas se encuentran repetidas 1 vez en el tablero.

* Por cada turno el jugador debe voltear 2 cartas:

    * Si las cartas no coinciden, se debe sumar 1 punto de error en el marcador.

    * Si las cartas coinciden, se debe sumar 1 punto de acierto en el marcador.

* Las cartas que el usuario acierte deben quedar boca arriba mientras que las cartas de error deben volver a quedar boca abajo.

* Una vez que el usuario logre adivinar todas las cartas, se debe mostrar un mensaje de felicitación con el nombre del usuario.

## Requerimientos tecnológicos del proyecto

Codigo entendible hecho en javascript

* Vue/angular/react
* Bootstrap 5/tailwindcss

## Notas de desarrollo

Durante el desarrollo tuve que tomar decisiones basado en mi experiencia, es por eso que me tomaré parte del documento para explicar mis ideas.

Inicie construyendo la lógica del problema, a partir de ahora negocio. Es decir me centre en construir componentes que estuvieran relacionados al juego de memoria. Estos componentes son `GameBoard`, `GameCard` y `GameScore`.

`Gameboard`

Este componente es el encargado de renderizar la parte accionable del juego. Es decir mostrar cartas, call to action para iniciar/reiniciar juego y mostrar el usuario que su partida ha terminado. Este mismo utiliza logica de un composable llamado `useCardGame`, este último contiene toda la logica necesaria para un juego de memoria. Y gracias a esto puede ser implementada de diferentes formas. Ya que esta totalmente desconectado de la parte que se renderiza y es totalmente indepediente.

`GameCard`

Este permite renderizar la carta del juego, esta ligada a un objeto para poder mostrar la imagen. Reacciona por medio de sus props y hasta cierto punto es agnostica al juego mismo. Ya que podria ser implementada para otro tipo juego de cartas.

`GameScore`

En este lugar se mostrarán estadisticas del juego, es decir intentos, aciertos y errores del jugador. De igual manera constuir un cronometro para que visualice el tiempo transcurrido.

Una vez que tenia construido el juego, podia voltear la imagen al clic y saber cuando el juego habia finalizado. Procedi a construir todo lo relacionado con el jugador. Construi un Modal, Textbox y Button para que el usuario pudiera ingresar su nombre y me encargue de persistir dicha información.

### Performance

El gran problema a resolver en el juego era la asincronia de las imagenes. El simple hecho de evitar multiples llamados al API cada que se inicia una partida. Para esto hice un composable llamado `useModyoApi` almacena las respuestas del API para evitar ir a buscarlas si no es necesario.

## Accesibilidad

Como mencione al principio, me guie de [vue-axe](https://github.com/vue-a11y/vue-axe-next) para ir validando temas de accesibilidad mientras voy desarrollando e ir cubriendo lo que necesite.