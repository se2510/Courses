/* El uso de etiquetas/labels nos permite ir a alguna
*  parte del programa que deseemos
*/

inicio: // el label
for(let contador = 0; contador <= 10 ; contador ++){
    if(contador%2!==0){ // Comparacion estricta que verifica los tipos
        continue inicio; // ir a la etiqueta de inicio, ejecutando la siguiente iteracion
        // no recomendada esta forma de programar, conocida como "go-to"
    }
    console.log(contador);
}