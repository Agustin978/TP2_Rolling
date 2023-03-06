let numero;
let suma = 0;

while(true)
{
    numero = prompt("Ingrese un numero:");
    document.write(parseInt(numero)+"</br>");
    if(!isNaN(parseInt(numero)))
    {
        suma = suma + parseInt(numero);
    }
    if(confirm("Cancelar") == true)
    {
        break;
    }
}

document.write("La suma de los numeros ingresados es igual a "+suma);