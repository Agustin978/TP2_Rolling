let filas, columnas, continua = 0;

do
{
    filas = prompt("Ingrese un numero de filas:");
}while(isNaN(parseInt(filas)) || parseInt(filas)<1 || parseInt(filas)>50)

do
{
    columnas = prompt("Ingrese un numero de filas:");
}while(isNaN(parseInt(columnas)) || parseInt(columnas)<1 || parseInt(columnas)>50)

for(let i = 0; i < filas; i++)
{
    for(let j = 0; j <columnas; j++)
    {
        continua++;
        document.write("|"+continua+"|");
    }
    document.write("</br>");
}