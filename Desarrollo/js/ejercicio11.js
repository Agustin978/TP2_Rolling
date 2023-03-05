class Persona{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre()
    {
        return this.nombre;
    }

    getEdad()
    {
        return this.edad;
    }
}

let personas = [];

function cargaPersona(nombre, edad)
{
    let persona = new Persona(nombre, edad);
    personas.push(persona);
}

function determinaMayor()
{
    let mayor = 0;
    let masGrande;
    for(let i = 0; i < personas.length; i++)
    {
        if(personas[i].getEdad() > mayor)
        {
            mayor = personas[i].getEdad();
            masGrande = personas[i];
        }
    }
    return masGrande;
}
let cantidad, nombre, edad;

do
{
    cantidad = prompt("Indique la cantidad de personas a ingresar (mayor a 1 y menor a 10): ");
}while(isNaN(cantidad) || parseInt(cantidad) < 2 || parseInt(cantidad) > 10)

for(let i = 0; i < cantidad; i++)
{
    do
    {
        nombre = prompt("Ingrese el nombre de la persona "+(i+1)+":");
        edad = prompt("Ingrese la edad de la persona "+(i+1)+":");
        if(nombre.length < 4 || nombre.length > 50)
        {
            alert("Usted ingreso un nombre demasiado largo o demasiado corto. Intente nuevamente.");
        }
        if(isNaN(parseInt(edad)) || parseInt(edad) < 0 || parseInt(edad) > 110)
        {
            alert("Usted ingreso una edad invalida. Intentelo nuevamente.");
        }
    }while(nombre.length < 4 || nombre.length > 50 || isNaN(parseInt(edad)) || parseInt(edad) < 0 || parseInt(edad) > 110)
    cargaPersona(nombre,edad);
}

let elMayor = determinaMayor();

document.write("La persona mas grande ingresada es: "+elMayor.getNombre()+"</br>Su edad es "+elMayor.getEdad()+" años.");
