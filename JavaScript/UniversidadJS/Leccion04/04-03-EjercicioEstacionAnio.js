
let mes = 9;
let estacion;

if ( mes==1 || mes == 2 || mes == 12){
    estacion = "Invierno";
    console.log(estacion);
}
else if( mes==3 || mes==4 || mes==5){
    estacion= "Primavera";
    console.log(estacion);
}
else if( mes==6 || mes==7 || mes==8){
    estacion= "Verano";
    console.log(estacion);
}
else if( mes==9 || mes==10 || mes==11){
    estacion= "Otoño";
    console.log(estacion);
}
else{
    estacion="Quien sabe D: . Valor incorrecto";
    console.log(estacion);
}