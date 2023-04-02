// Tipo de dato STRING
var nombre = "Carlos"; // Las cadenas van con comillas
console.log(nombre);
// Para las cadenas, comilla doble o simple es lo mismo en JS

nombre = 10;
console.log(typeof nombre);
//operador typeof nos regresa el tipo de dato que almacena la variable

//Tipo de dato numérico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: "Juan",
    apellido: "Gonzalez",
    telefono: "5511223344"
}
console.log(typeof objeto);

/*
En JS las variables se conocen como variables dinámicas, a lo que se refiere
que el tipo de dato de una variable ya definida puede cambiarse en tiempo de ejecucion
al modificarla
*/

//Tipo de dato Boolean (true, false)
// A estas variables se les conoce como bandera
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato Function
//Permite realizar cierta tarea, y se puede reutilizar lineas de código.
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
//Se utiliza para crear un valor unico de una variable.
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function
class persona{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido=apellido;
    }
}
console.log(persona);
console.log(typeof persona);

//Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);
//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

// Arreglos ---> Son de tipo object
var autos= ["BMW","Audi","Volvo"];
console.log(autos);
console.log(typeof autos);

// Tipos de datos vacíos
var z = "";
console.log(z);
console.log(typeof z);
