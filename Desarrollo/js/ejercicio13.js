let texto;

do
{
    texto = prompt("Ingrese una palabra o frase: ");
}while(!isNaN(texto) || texto.length < 4)

document.write("Frase en mayusculas: "+texto.toUpperCase());