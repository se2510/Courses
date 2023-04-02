//Concatenar cadenas

var nombre = "Juan";
var apellido="Perez";

var nombreCompleto=nombre+" "+apellido;

console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Lara";
console.log(nombreCompleto2);

/*se toma de izquierda a derecha, entonces como primero se encuentra el nombre,
tomará el número como cadena también
*/
var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4); // Ahora se le dió prioridad primero a la suma, y luego al nombre
console.log(x);

x = 2+4 + nombre; // Primero los toma como numeros, luego al encontrar la cadena, lo toma como cadena
console.log(x); 
