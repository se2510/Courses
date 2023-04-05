// NaN ---> Not a Number
// Cuando a miNumero se le ingresa un caracter, ya no se puede hacaer numero
// se convirtió en un valor NaN

let miNumero = "18x";

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if( isNaN(edad)){
    console.log("No es un número");
}else{
    if( edad >= 18 ){
        console.log("Es mayor, puede votar");
    }else{
        console.log("Muy chaneke para votar :c");
    }
}

if( isNaN(edad)){
    console.log("No es un número");
}else{
    let votar = (edad>=18) ? "Grandote para votar":"Chaneke para votar";
    console.log(votar);
}