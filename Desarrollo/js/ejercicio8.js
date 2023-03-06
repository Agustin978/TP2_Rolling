let numero;
do
{
    numero = prompt("Ingrese un numero del 1 al 50:");
}while(isNaN(parseInt(numero)) || parseInt(numero)<1 || parseInt(numero)>50)

for(let i = 0; i <= numero; i++)
{
    for(let j = 1; j <= i; j++)
    {
        document.write(j);
    }
    document.write("</br>");
}