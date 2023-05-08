/*
Una funcion es un código reutilizable que se puede mandar a llamar varias veces
*/
miFuncion(5,6);
// dentro de los parentesis se agregan los argumentos de la función
// Los argumentos son opcionales, y si hay mas de uno, se separan con una coma
// Declarando una función:
function miFuncion(a, b){
    console.log("Suma: "+(a+b));
}

// Mandando a llamar la función
// Hoisting: La funcion se puede mandar a llamar antes de definir la funcion o después
miFuncion(2,4);
