// En JS se pueden definir funciones que se mandan a llamar a si mismas
// se conocen como funciones de tipo: Self-Invoking

//se define entre parentesis
(function (a, b){
    console.log("Ejecutando la funcion: "+(a+b));
})(3, 4);
