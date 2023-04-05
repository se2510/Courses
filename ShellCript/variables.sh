#!/bin/bash
# David Elias Gonzalez Garcia
# Ejercicio de variables en bash.

deivi="Cuicuiri, soy Deivi"
numA=4
numB=2

# Variable de entorno, la cual esta alojada en .bashrc definiendola como 
# la variable anterior, y luego exportandola con el comando export
echo $DEIVI 
echo $deivi # Variable de usuario
echo "========================================="

echo "Operadores aritmeticos entre $numA y $numB"

echo "$numA + $numB = " $((numA+numB))
echo "$numA - $numB = " $((numA-numB))
echo "$numA * $numB = " $((numA*numB))
echo "$numA / $numB = " $((numA/numB))
echo "========================================="

echo "Operadores relacionales entre $numA y $numB"
#En operadores booleanos, 0 es igual a false, y 1 es igual a true
echo "0 = FALSE, 1 = TRUE"

echo "$numA > $numB = " $((numA>numB))
echo "$numA < $numB = " $((numA<numB))
echo "$numA >= $numB = " $((numA>=numB))
echo "$numA <= $numB = " $((numA<=numB))
echo "$numA == $numB = " $((numA==numB))
echo "$numA != $numB = " $((numA!=numB))
echo "========================================="

echo "Operadores de asignacion entre $numA y $numB"

echo "$numA += $numB = " $((numA+=numB))
echo "$numA -= $numB = " $((numA-=numB))
echo "$numA *= $numB = " $((numA*=numB))
echo "$numA /= $numB = " $((numA/=numB))


