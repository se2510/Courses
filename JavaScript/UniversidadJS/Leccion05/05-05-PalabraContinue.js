
for(let contador = 0; contador <= 10 ; contador ++){
    if(contador%2!==0){ // Comparacion estricta que verifica los tipos
        continue; // ir a la siguiente iteracion
    }
    console.log(contador);
}