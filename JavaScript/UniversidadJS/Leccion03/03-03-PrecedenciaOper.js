let a=3,b=2,c=1,d=4;

let z=a*b+c/d; // Primero hace la mult, luego la div y luego la suma
console.log(z);

z=c+a*b/d; // Primero hace la mult, luego la div, luego la suma
console.log(z);

z=(c+a)*b/d; // Primero hace lo de dentro del parentesis, luego la mult y luego la div
console.log(z);