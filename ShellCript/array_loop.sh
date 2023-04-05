#!/bin/bash
# David Elias Gonzalez Garcia
# Ensenianza sobre arreglos e iteracion

# Un arreglo es una lista de valores.

numeros=(1 2 3 4 5) # con espacios se diferencia un valor con otro
nombres=(deivi "cyn bere" sam john alan)
rangos=({A..Z} {20..30})
echo "======= Imprimir todos los valores ======="

echo "Arreglo de numeros: ${numeros[*]}"
echo "Arreglo de nombres: ${nombres[*]}"
echo "Arreglo de Rangos: ${rangos[*]}"

echo "======= Tamanio de los arreglos ========"

# Con el numeral cuenta los elementos del arreglo.
# De igual forma, puede hacerlo con una cadena de texto.
echo "Tamanio de arreglo numeros: ${#numeros[*]}"
echo "Tamanio de arreglo nombres: ${#nombres[*]}"
echo "Tamanio de arreglo rangos: ${#rangos[*]}"

echo "======= Imprimir un elemento del arreglo ========"

# En bash, el arreglo empieza en 0.
echo "Elemento numero 3 del arreglo numeros: ${numeros[3]}" 
echo "Elemento numero 3 del arreglo nombres: ${nombres[3]}" 
echo "Elemento numero 3 del arreglo rangos: ${rangos[3]}" 

echo "======= Manipular arreglos ========"

unset numeros[0]
echo "Arreglo de numeros: ${numeros[*]}"
numeros[0]=1
echo "Arreglo de numeros: ${numeros[*]}"

echo "========== Iteracion FOR =========="

for num in ${numeros[*]}
do
    echo "Numero: $num"
done

echo "============================================================"

for ((i=0; i<${#numeros[*]}; i++))
do
    echo "Numero del arreglo ${numeros[i]}"
done

echo "******************************RETO********************************"
# Reto que le pida al usuario un numero del 1 al 10, y con el hace
# las tablas de multiplicar del 1 al 10.
nom=1
read -p "Ingresa el numero del cual quieres imprimir su tabla: " nom

for ((i=0; i<10; i++))
do
    echo " $nom * ($i+1) =  " $(((nom*i)+nom))
done
