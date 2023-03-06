let texto;
do
{
    texto = prompt("Ingrese una palabra o frase: ");
}while(!isNaN(texto) || texto.length < 4)

for(let i = texto.length - 1; i >= 0; i--)
{
    document.write(texto[i]);
}