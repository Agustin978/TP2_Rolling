function aleatorioEntreDosNumeros(max, min)
{
    return Math.floor(Math.random() * (max-min+1)+min);
}

document.write("Numero aleatorio entre 1 y 99: "+aleatorioEntreDosNumeros(1,99));