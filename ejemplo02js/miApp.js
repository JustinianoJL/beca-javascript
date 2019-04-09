console.log("Hola Mundo")
variablesGlobales = "variableGlobal";
var irAlBarEstoTambienEsUnaVariableGlobal = "otra Varialbe Global";

miFuncionConVar()
miFuncionConLet()


function miFuncionConVar()
{
    var otraVariable = "Esto es una variable Local";
    for (var i=0;i<10;i++)
    {
        console.log("mostrar el contenido de i " + i)
    }
    console.log("El Valor de i al final " + i)
}

function miFuncionConLet()
{
    var otraVariable = "Esto es una variable Local";
    for (let i=0;i<10;i++)
    {
        console.log("mostrar el contenido de i " + i)
    }//esto no funciona porque i no existe a esta altura
    //console.log("El Valor de i al final " + i)
}

console.log("EValuando tipos de datos")
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "Cadena";
var fechaDeEstreno = new Date();
var otraFechaDeEstreno = fechaDeEstreno;
otraFechaDeEstreno.setFullYear(1999);
cambiaFecha(fechaDeEstreno);
//console.log("Fecha final: " + );
console.log("fecha Final " + fechaDeEstreno.getFullYear())

function cambiaFecha (fecha)
{
    fecha.setFullYear(1990);
    console.log("fecha definida " + fecha.getFullYear());
}

console.log("Resultado de typeof numerico: " + typeof tipoDeDatoNumerico);
console.log("Resultado de typeof cadena: " + typeof tipoDeDatoCadena);
console.log("Resultado de typeof Fecha: " + typeof fechaDeEstreno);

function pruebaNumerico()
{
    let numero = new Number(3.74121);
    console.log("Valor almacenado: " + numero.valueOf());
    console.log("Valor almacenado: " + numero.toFixed());
    console.log("Valor almacenado: " + numero.toFixed(4));
}

vamosALosMetodos(1,2);
vamosALosMetodos(1);
vamosALosMetodos(1,2,3,4,5,6,7,8,9);

function vamosALosMetodos(campo1,campo2)
{
    console.log("Cantidad de args recibidos: " + arguments.length);
    console.log("Argumentos Esperados: " + arguments.callee.length);
}

misMierdasConArrays()

function misMierdasConArrays()
{
    let mi_array = new Array(); // []
    mi_array[0] = 7;
    mi_array[1] = "otra cosa";
    mi_array[mi_array.length-1];
    let otroArrayDeMierda = [1,2, "otro",new Date()];
    let mi_Array_Asociativo = new Array();
    mi_Array_Asociativo['unaClave'] = "Un valor";
    let persona = new Array();
    persona.nombre = "Ruben";
    persona.apellido1 = "Gomez";
    persona.argumentos = vamosALosMetodos;
    persona.argumentos(1,231,123,12,3,1);
    console.log("Datos personales : Nombre " + persona.nombre + "Primer Apellido " + persona.apellido1);
}

function hazAlgo(algo)
{
    return "Esto es " + algo;
}

console.log(hazAlgo("Una Mieeeerrrdaaaa!!"));

function MiClase(campo1,campo2)
{
    this.clave1 = campo1;
    this.clave2 = campo2;
// Esto crea tantas funciones como new MiClase tengamos
//    this.concatena = function(){
//        return this.clave1 + this.clave2;
//    }
}

MiClase.prototype.concatena = function()
{
    return this.clave1 + " " + this.clave2;
}

var miObjeto = new MiClase ("primero","segundo");
console.log(miObjeto.concatena());

Array.prototype.dejaQueTeCuenteUnCuento = function()
{
    console.log("Solo voy a insultarlos un poquito...");
}

let mi_Array_Chuli = [];
mi_Array_Chuli.dejaQueTeCuenteUnCuento();

let tomaEstructura = [
    {
        uno:1,
        dos:2,
        tres:3
    },
    {
        cuatro:4,
        cinco:5,
        seis:6
    }
]

console.log("Devuelveme del segundo el valor cinco: " + tomaEstructura)