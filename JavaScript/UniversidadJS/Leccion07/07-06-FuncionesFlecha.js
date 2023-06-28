// Funciones de tipo flecha, introducidas en la version de egmaScript 6 
// Funciones similares a la funcion de tipo expresion.

// Declaracion de una Función de tipo Expresión
let sumar = function (a, b){return a+b};

resultado = sumar(1, 2);
console.log(resultado);

// Declaracion de una Funcion flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;
/*  Ya no se necesita usar la palabra function. El simbolo de la
    funcion flecha es => , que define que es una función flecha
*/

resultado = sumarFuncionTipoFlecha(1,2);

console.log(sumarFuncionTipoFlecha(2,3));
console.log(resultado);