/*Cómo transformar un array de arrays en un objeto
El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries().

const arrayEntries = [
  [ 'name', 'Jorge' ],
  [ 'email', 'Jorge@correo.com' ],
  [ 'age', 23 ]
] 

const usuario = Object.fromEntries(arrayEntries) 

console.log(usuario)
/* {
  name: 'Jorge',
  email: 'Jorge@correo.com',
  age: 23
}
*/

const arrayEntries = [
    [ 'name', 'Jorge' ],
    [ 'email', 'Jorge@correo.com' ],
    [ 'age', 23 ]
  ] 
  const usuario = Object.fromEntries(arrayEntries);
  console.log("Impresión del array: " + arrayEntries);
  console.log(usuario);