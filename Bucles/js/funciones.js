/* FUNCION DONDE SOLO SE MANDA A IMPRIMIR*/
function imprimirmsj(){
    console.log('Hola soy una función xd');
}
imprimirmsj();

/*FUNCION PARA CALCULAR UNA SUMA*/

function suma(num1,num2){
    let sum=(num1+num2);
    return sum;
}

console.log(suma(5,2));

/*FUNCION COMO PARAMETRO*/
const avisar =(fun, x) =>{
    alert(fun(x));
}

const saludo = (nombre='Mundo') =>{
    return `Hola ${nombre}`;
}

avisar(saludo);