let dia;
let mes;
let anio;
mes = prompt('Introduzca el numero del mes:', '0');
mes=parseInt(mes);

if(mes==1|| mes==3|| mes==5|| mes==7|| mes==8|| mes==10|| mes==12){
    document.write('este mes tiene 31 dias');
}
else
{
    if(mes==2){
        document.write('este mes tiene 28 dias');
    }else
    document.write('este mes tiene 30 dias');
}



