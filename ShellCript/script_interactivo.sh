#!/bin/bash
# David Elias Gonzalez Garcia
# Script interactivo.
# El objetivo es que el programa pregunte la edad (no paremetrizarlo ni declararlo)
# y que esos valores ingresados se almacenen en las variables name y age.

name=""
age=0

read -p "Ingresa tu nombre: " name
read -p "Ingresa tu edad: " age

echo "Jelou, tu nombre es $name y tienes $age anios."