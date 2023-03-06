let calificacion;

do
{
    calificacion = prompt("Ingrese la calificacion:");
}while(calificacion < 0 || calificacion > 10);

if(parseInt(calificacion)>=0 && parseInt(calificacion)<=2)
{
    alert("Su calificacion "+calificacion+" fue muy deficiente.");
}else if(parseInt(calificacion)>=3&&parseInt(calificacion)<=4)
{
    alert("Su calificacion "+calificacion+" fue insuficiente.");
}else if(parseInt(calificacion)>=5&&parseInt(calificacion)<=6)
{
    alert("Su calificacion "+calificacion+" fue suficiente.");
}else if(parseInt(calificacion)==7)
{
    alert("Su calificacion "+calificacion+" estuvo bien.");
}else if(parseInt(calificacion)>=8&&parseInt(calificacion)<=9)
{
    alert("Su nota "+calificacion+" fue notable."); 
}else
{
    alert("Su nota "+calificacion+" fue sobresaliente.");
}

/*
switch(calificacion)
{
    case calificacion>=0&&calificacion<=2:
        alert("Su calificacion "+calificacion+" fue muy deficiente.");
        break;
    case calificacion>=3&&calificacion<=4:
        alert("Su calificacion "+calificacion+" fue insuficiente.");
        break;
    case calificacion>=5&&calificacion<=6:
        alert("Su calificacion "+calificacion+" fue suficiente.");
        break;
    case calificacion==7:
        alert("Su calificacion "+calificacion+" estuvo bien.");
        break;
    case calificacion>=8&&calificacion<=9:
        alert("Su nota "+calificacion+" fue notable.");
        break;
    case calificacion==10:
        alert("Su nota "+calificacion+" fue sobresaliente.");
}*/