let numero;

do
{
    numero = prompt("Ingrese un numero del 1 al 30:");
}while(isNaN(parseInt(numero)) || parseInt(numero)<1 || parseInt(numero)>30)

for(let i = 0; i<=numero;i++)
{
    for(let j = 0; j<i; j++)
    {
        document.write(i);
    }
    document.write("</br>");
}