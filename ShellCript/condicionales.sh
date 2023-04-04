#!/bin/bash
# David Elias Gonzalez Garcia
# Condicionales

name=""
fname=""
age=0
year=0

read -p "Ingresa tu nombre: " name
read -p "Ingresa tu edad: " age
read -p "Ingresa el anio actual: " year

echo "Jelou, tu nombre es $name y tienes $age anios."
echo "========================================================="
#La sintaxis de las condiciones es MUY importante
if (( $age >= 18 )); then #Es importante los espacios entre parentesis
    echo "Ya estas grandot@ :0"
else
    echo "Tas chaneke, querid@ $name :("
fi

echo "========================================================="
# Esta vez, se utilizaran los operadores relacionales de letras
# -eq: is equal to // igual a 
# -ne" is not equal to // No es igual a
# -gt: is greater than // Mayor a 
# -ge: is greater than or equal to // Mayor o igual a 
# -lt: is less than // Menor a
# -le: is less than or equal to // Menor o igual a

if [ $age -ge 18 ] && [ $year -eq 2023 ]; then # Deben cumplir las dos
    echo "Mi estimad@ $name, ya puedes votar :D"
else
    echo "Ijole $name, andas muy verde todavia"
fi

echo "========================================================="
# Ejercicio: Comparar dos cadenas de texto.
read -p "Ingresa el nombre de tu amig@: " fname
if [ "$fname" == "$name" ]; then
    echo "Alv, son tocayos :0 (prueba corchetes)"
else
    echo "No son tocayos :C (prueba corchetes)"
fi
if (( "$fname" == "$name" )); then # No me funk'o esto :p
    echo "Alv, son tocayos :0 (prueba parentesis)"
else
    echo "No son tocayos :C (prueba parentesis)"
fi