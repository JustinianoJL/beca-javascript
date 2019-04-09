var valor =0
var display =0

function sumar9(campo)
{
    valor =  valor + campo
    return valor
}

function restar9(campo)
{
    valor =  valor - campo
    return valor
}

function multiplicar9(campo)
{
    valor =  valor * campo
    return valor
}
function dividir9(campo)
{
    valor =  valor + campo
    return valor
}

function sumar(campo1,campo2)
{
    if(arguments.callee.length == arguments.length)
    {
        return campo1+campo2
    } else if(arguments.callee.length < arguments.length)
    {
        var resultado =sumar(arguments[0],arguments[1])
        for(let i=2; i<arguments.length;i++)
        {
            resultado = sumar(resultado, arguments[i])
        }
        return resultado
    }else if (arguments.length == 1)
    display = sumar(display,campo1)
    return display
}

function restar(campo1,campo2)
{
    if(arguments.callee.length == arguments.length)
    {
        return campo1-campo2
    } else if(arguments.callee.length < arguments.length)
    {
        var resultado =restar(arguments[0],arguments[1])
        for(let i=2; i<arguments.length;i++)
        {
            resultado = restar(resultado, arguments[i])
        }
        return resultado
    }else if (arguments.length == 1)
    display = restar(display,campo1)
    return display
}

function multiplicar(campo1,campo2)
{
    if(arguments.callee.length == arguments.length)
    {
        return campo1*campo2
    } else if(arguments.callee.length < arguments.length)
    {
        var resultado =multiplicar(arguments[0],arguments[1])
        for(let i=2; i<arguments.length;i++)
        {
            resultado = multiplicar(resultado, arguments[i])
        }
        return resultado
    }else if (arguments.length == 1)
    display = multiplicar(display,campo1)
    return display
}

function dividir2(campo1,campo2)
{
    for (let i=0;i<arguments.length;i++)
    return campo1/campo2
}
console.log(sumar(1))
console.log(sumar(2))
console.log(sumar(3))
console.log(sumar(4))

console.log(restar(4))
console.log(restar(3))
console.log(restar(2))
console.log(restar(1))

display = 1

console.log(multiplicar(1))
console.log(multiplicar(2))
console.log(multiplicar(3))
console.log(multiplicar(4))