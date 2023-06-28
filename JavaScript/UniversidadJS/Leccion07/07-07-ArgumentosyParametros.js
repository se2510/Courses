// Arghumentos y parametros en las funciones

// Los parametros son la lista de valores que 
// va a recibir una función.
// Los argumentos son los valores que finalmente pasamos a 
// la función.

// Declaracion de una Función de tipo Expresión
let sumar = function (a = 0, b = 0){ // Pueden tener parametros default
    // imprimiendo los parametros
    console.log(arguments[0]); // argumentos es un array
    console.log(arguments[1]);
    // Los parametros no necesariamente deben de coincidir con el numero de argumentos
    // ya que se puede acceder del array de argumentos.
    console.log(arguments[2]);
    console.log(arguments[3]);
    return a+b + arguments[2];
};

resultado = sumar(1, 2, 3); // Los argumentos soobrescriben los valores por default
console.log(resultado);