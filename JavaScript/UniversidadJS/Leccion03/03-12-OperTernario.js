
// Con los operadores ternarios podemos comparar o hacer una condicion, si da TRUE
// regresa un dato, si da FALSE regresa otro.
// Sintaxis:
// let x = (CONDICION) ? VALORTRUE : VALORFALSE
// El "?" es el que indica el fin de la condición
// El ":" separa el valor que da si es verdadero o falso

let resultado = (3>2) ? "Verdadero " : "Falso";
console.log(resultado);

// Ahora, con el siguiente ejemplo, nos ahorraremos el uso de un IF
let numero = 10;
resultado = (numero % 2 == 0 ) ? "Numero par" : "Numero impar";
console.log(resultado);