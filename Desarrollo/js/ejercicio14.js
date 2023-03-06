let texto;

do
{
    texto = prompt("Ingrese una palabra o frase: ");
}while(!isNaN(texto) || texto.length < 4)

for(let i = 0; i < texto.length; i++)
{
    document.write(texto[i]+"-");
}