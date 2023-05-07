
const autos = ['BMW','Mercedes Benz','Volvo']; 
autos[1]='CuaquiMovil';
autos.push('Audi'); // método/funcion push

console.log(typeof autos);

// Usando la función isArray de la clase Array
console.log(Array.isArray(autos));

// Si la variable autos es una instancia de tipo arreglo
console.log( autos instanceof Array);