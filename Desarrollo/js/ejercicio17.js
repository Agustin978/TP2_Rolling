let texto;
let primeraVocal;

do
{
    texto = prompt("Ingrese una palabra o frase: ");
}while(!isNaN(texto) || texto.length < 4)

for(let i = 0; i < texto.length; i++)
{
    if(texto[i] === "a" || texto[i] === "A" || texto[i] === "e" || texto[i] === "E" || texto[i] === "i" || texto[i] === "I" || texto[i] === "o" || texto[i] === "O" || texto[i] === "u" || texto[i] === "U" )
    {
        primeraVocal = texto[i];
        break;
    }
}

document.write("La primera vocal hallada en '"+texto+"' fue: "+primeraVocal);