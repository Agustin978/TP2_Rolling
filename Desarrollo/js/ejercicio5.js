let dni;
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

while(true)
{
    do
    {
        dni = prompt("Ingrese su DNI:");
        if(isNaN(parseInt(dni)))
        {
            alert("Usted claramente no posee un IQ suficiente para realizar esta tarea.\n Por favor pidale a alguien con un poco mas de inteligencia que ingrese su dni :).");
        }else if(dni.length != 8)
        {
            alert("Usted ingreso incorrectamente su dni.El mismo debe tener un total de 8 caracteres");
        }
    }while(isNaN(parseInt(dni)) || dni.length != 8)

    let resto = parseInt(dni) % 23;

    alert("La letra correspondiente a su DNI es "+letras[resto]+". Y su DNI queda de la forma "+letras[resto]+dni);
    if(confirm("Desea ingresar un nuevo DNI") == false)
    {
        break;
    }
}

