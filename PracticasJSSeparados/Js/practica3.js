let marca,modelo,descuento=0;

marca=prompt("marca?","0")
modelo=prompt("modelo?","0")

if((marca=="ford")&&(modelo=="fiesta"))
{
    descuento=5;
}
else
{
    descuento=10;
}

document.write(`<h3>su descuento es: ${descuento}</h3>`);