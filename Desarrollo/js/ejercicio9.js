for(let i = 1; i <= 500; i++)
{
    if(i % 5 == 0)
    {
        document.write(i);
        document.write("</br>------------------------------------------------");
    }else if(i % 4 == 0)
    {
        document.write(i+" (multiplo de 4)");
    }else if(i % 9 == 0)
    {
        document.write(i+" (multiplo de 9)");
    }else
    {
        document.write(i);
    }
    document.write("</br>");
}