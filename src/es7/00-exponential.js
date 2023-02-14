/*La siguiente versión de ECMAScript fue publicada en 2016. Las siguientes características de ES7 o ES2016 que aprenderás son: el método includes de arrays y el operador de potenciación.

Operador de potenciación
El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco (**).

base ** exponente

Por ejemplo, el cubo de 2 es igual a 8, matemáticamente expresado sería: $2^3=8$.

const potencia = 2**3

console.log(potencia) // 8
Método includes
El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:

El elemento a comparar.
El índice inicial desde donde comparar hasta el último elemento.
Índices positivos y negativos
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.

[0,1,2,3, ...., lenght-1]
Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

[-lenght, ...,  -3, -2, -1]
*/