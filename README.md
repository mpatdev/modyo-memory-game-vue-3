# Modyo Memory

Solución al reto técnico de Modyo hecho con:

* [Vue 3](https://github.com/vuejs/core)
* [Tailwind 3](https://github.com/tailwindlabs/tailwindcss)

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

Vue/angular/react

Bootstrap 5/tailwindcss
