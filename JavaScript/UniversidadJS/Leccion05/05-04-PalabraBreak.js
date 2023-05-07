// Imprimiendo los numeros pares de 0 a 10

for(let contador = 0; contador < 10 ; contador ++){
    if(contador%2 == 0){
        console.log("Numero par: ",contador);
        break; // Rompe totalmente el ciclo FOR
    }else if(contador%2==1){
        console.log("Numero Impar: ",contador);
    }
}