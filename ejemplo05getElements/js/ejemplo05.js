function inicializar()
{
var parrafo1 = document.getElementById('parrafo1')
console.log(parrafo1)

var parrafo2 = document.querySelector("body p")
console.log(parrafo2)

var titulos = document.getElementsByClassName()
console.log(titulos)

var listItems = document.getElementsByTagName("li")
console.log(listItems)

var inputs = document.getElementsByName("input")
console.log(inputs)

var parrafos = document.querySelectorAll("body p")
console.log("primero: ",parrafos.item(0))
console.log("segundo: ",parrafos.item(1))
for(var i=0;i<parrafos.length;i++)
{
    console.log(parrafos[i].firstChild.textContent)
}

}