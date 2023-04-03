//* Pregunta si los valores son iguales o no, devolviendo TRUE o  FALSE

let a=3,b=2,c="3";

// "==" ---> se revisa el valor sin importar el tipo
let z = a == b; // ¿a es igual a b?
console.log(z);
z = a == c;
console.log(z);

// "===" ---> revisa si los valores son iguales pero también los tipos
z = a === b;
console.log(z);
