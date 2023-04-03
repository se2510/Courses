/*

++ Increment
-- Decrement

*/

let a=3, b=2;
let z=a+b;

//Incremento
//Pre-incremento (el operador ++ antes de la variable)

z=++a; // Primero se aumenta en uno la variable a, y luego se incrementa en z
console.log(a);
console.log(z);

//Post-incremento (el operador ++ después de la variable)

z=b++;// Primero se le asignó la variable b, y luego le incrementó a b en 1
console.log(b);
console.log(z);

//Decremento

//Predecremento
z=--a; //Se decrementa primero a y luego ya se asigna
console.log(a);
console.log(z); 

//Post-decremento 
z=b--; // Primero se asigna b a z, y luego se decrementa para la siguiente vez que se utilice la variable b
console.log(b);
console.log(z);




