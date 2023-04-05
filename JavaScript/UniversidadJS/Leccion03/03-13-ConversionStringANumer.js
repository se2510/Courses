

let miNumero = "18";
console.log(miNumero);
console.log(typeof miNumero);

// La función "Number()" nos permite convertir un string a un tipo número
let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if(edad >= 18){
    console.log("Puede votar :D");
}else{
    console.log("Muy chaneke para votar :c");
}

let votar = (edad>=18) ? "Grandote para votar":"Chaneke para votar";
console.log(votar);