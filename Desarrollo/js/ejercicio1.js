let edad;

do
{
    edad = prompt("Ingrese su edad:");
}while(edad < 0 || edad > 110);

if(edad < 18)
{
    let falta = 18 - edad;
    document.write("<p>Usted no tiene la edad requerida para manejar.</br>A usted le falta/n "+falta+" año/s para tener la edad requerida.</p>");
}else if(edad >= 18 && edad < 65)
{
    document.write("<p>Usted tiene la edad requerida para que se le otorgue el permiso de conducir.</p>");
}else
{
    document.write("<p>Usted debe realizar el examen de conducir cada año.</p>");
}