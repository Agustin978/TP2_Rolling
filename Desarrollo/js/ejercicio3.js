let frases = [];
let indice = 0;
/*
switch(confirm("Cancelar"))
{
    case false:
        frases[i] = prompt("Ingrese una palabra o una frase:");
        i++;
        break;
    
}*/

while(true)
{
    frases[indice] = prompt("Ingrese una palabra o una frase:");
    indice++;
    if(confirm("Cancelar") == true)
    {
        break;
    }
}

for(let j = 0; j<indice; j++)
{
    document.write("- "+frases[j]+"</br>");
}
