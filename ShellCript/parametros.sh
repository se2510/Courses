#!/bin/bash
# David Elias Gonzalez Garcia
# Ejercicio de variables y parametros dinamicos.

# Se les pasa valores a la hora de ejecutar el programa
nombre=$1 #El dolar indica que esta variable es el primer variable que le estamos pasando al script
apellido=$2 
# Se encierran en parentesis los comandos a ejecutar
# y el resultado de ese comando se guardaran en la variable ubicacion
ubicacion=$(pwd)
echo "Hola, soy: $nombre $apellido :D"
echo "La cantidad de parametros enviados es $#"
echo "Los parametros enviados por el usuario son: $*"
echo $ubicacion
