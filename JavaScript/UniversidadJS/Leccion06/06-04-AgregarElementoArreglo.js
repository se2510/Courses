
const autos = ['BMW','Mercedes Benz','Volvo']; 
autos[1]='CuaquiMovil';
autos.push('Audi'); // método/funcion push

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

// Lo siguiente no es recomendable por dejar elementos vacíos
autos[6] = 'Porshe';
console.log(autos);