#!/bin/bash
# Author: David Elias Gonzalez Garcia
# Sentencia Case

opcion=""
read -p "Ingrese una opcion [A-B]: " opcion

if [ "$opcion" == "A" ]; then
    echo "Entro al condicional"
fi

case $opcion in
    "A") echo "Ingresaste a la opcion A";;
    "B") echo "Has ingresado a la opcion B";;
    [C-Z]) echo "Has ingresado un valor fuera del rango";;
    *) echo "Por favor solo caracteres dentro del rango [A-B]"
esac

echo "================================="
# Reto ejercicio.

if [ "$opcion" -eq "A" ]; then
    echo "Entro al condicional"
fi