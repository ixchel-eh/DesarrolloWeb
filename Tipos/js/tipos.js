//Tipos de datos y variables
//var: cualquier variable
//const: constante como pi
//let: valor ingresado por el usuario

//Numerico
var edad=25;
const promedio= 3.1416;

console.log('Esto es un entero:'+edad);
console.log('Esto es un flotante:'+promedio);


//String
var saludo ="HOLI";
let saludo1="MUNDO";

document.writeln(saludo+" "+saludo1);

//Array

var dias =["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"];
document.writeln(dias[0]);
document.writeln(dias[1]);
document.writeln(dias[2]);
document.writeln(dias[3]);
document.writeln(dias[4]);
document.writeln(dias[5]);
document.writeln(dias[6]);

//Object
var objetito ={
    name: "mar",
    color:"Aqua",
    size: 25
}

console.log (objetito);

//Boolean
let v= false;
let f =true;

console.log(v,f);


//Undefined
var ixchel;
document.writeln(ixchel);

//Null
var num =10;
var num= null;
//dejamos el valor en nulo o inexistente

//NaN
var salu ="HOLI";
document.writeln(salu*2);
