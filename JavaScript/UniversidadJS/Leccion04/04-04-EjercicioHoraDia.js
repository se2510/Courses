/*  Ejercicio que imprima el mensaje dependiendo de la hora:
    6am-11am - Buenos dias
    12pm-18pm - Buenas Tardes
    19pm-24pm - Buenas Noches
    0am-6am - Mimiendo
*/

let hora = 5;
let saludo;

if ( 6<= hora && hora <=11 ){
    saludo = "Gud mornin mai friendo";
    console.log(saludo);
}
else if ( 12<=hora && hora <=18 ){
    saludo = "Gud afternun mai friendo";
    console.log(saludo);
}
else if ( 19<=hora && hora<=24 ){
    saludo = "Guto naito mai friendo";
    console.log(saludo);
}
else if ( 0<= hora && hora<=6 ){
    saludo = "Ya vayase a mimir";
    console.log(saludo);
}
else{
    estacion="Que andas haciendo a estas... horas???";
    console.log(saludo);
}