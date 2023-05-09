function miFuncion(a, b){ // dos argumentos (propiedades)
    console.log(arguments.length);
    return a + b; 
}

let resultado = miFuncion(2,4);
console.log(resultado);

console.log(typeof miFuncion);
// Una funcion puede tener propiedades y métodos
// Entonces también se puede describir como un OBJETO

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);