/*
Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre.
 Antes de ES6, para crear un objeto a partir de variables consistía en la siguiente manera:

const nombre = "Jorge"
const edad = 23

const objeto = {
    nombre: nombre, 
    edad: edad
}

objeto // { nombre: 'Jorge', edad: 23 }
Cómo utilizar objetos literales
Con los parámetros de objeto puedes obviar la repetición de nombres, JavaScript creará la propiedad a 
partir del nombre de la variable con su respectivo valor.

const nombre = "Jorge"
const edad = 23

const objeto = {nombre, edad}

objeto // { nombre: 'Jorge', edad: 23 }
El resultado es el mismo, pero sin la necesidad de repetir palabras. Puedes combinarlo con variables 
que su propiedad tiene un nombre diferente.

const nombre = "Jorge"
const edad = 23
const esteEsUnID = 1

const objeto = {
    nombre, 
    edad,
    id: esteEsUnID
}

objeto // { nombre: 'Jorge', edad: 23, id: 1 }*/