let numero;

do
{
    numero = prompt("Ingrese un numero del 1 al 50:");
}while(isNaN(parseInt(numero)) || parseInt(numero)<1 || parseInt(numero)>50)

for(let i = numero; i > 0; i--)
{
    for(let j = 0; j < i; j++)
    {
        document.write(i);
    }
    document.write("</br>");
}