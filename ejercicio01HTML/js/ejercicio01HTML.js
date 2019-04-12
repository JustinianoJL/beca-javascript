addEventListener('load',inicio,false)
function inicio()
{
  document.getElementById('valoracion').addEventListener('change',cambioTemperatura,false)
  document.getElementById('genero').addEventListener('change',cambioGenero,false)
}
function cambioTemperatura()
{
  document.getElementById('val').innerHTML=document.getElementById('valoracion').value
}
function cambioGenero()
{
  document.getElementById('gen').innerHTML=document.getElementById('genero').value
}




function guardarPelicula()
{
    var titulo = document.getElementById("titulo").value
    var director = document.getElementById("director").value
    var codigo = document.getElementById("codigo").value
    var genero = document.getElementById("genero").value
    var fechaEstreno = document.getElementById("fechaEstreno").value
    var valoracion = document.getElementById("valoracion").value
    document.getElementById("tablaPeliculas").insertRow(-1).innerHTML = '<td>' + titulo + '</td><td>' + director + '</td><td>' + codigo + '</td><td>' + genero + '</td><td>' + fechaEstreno + '</td><td>' + valoracion + '</td><td><button onclick="modificarPelicula()">Modificar</button><button onclick="eliminarPelicula(this)">Eliminar</button></td>';
    guardarPeliculasLocalStorage()
}

function eliminarPelicula(r)
{    
    var table = document.getElementById("tablaPeliculas");
    fila = r.parentNode.parentNode.rowIndex
    table.deleteRow(fila);
    guardarPeliculasLocalStorage()
}

function modificarPelicula(r)
{
  var tabla = document.getElementById("tablaPeliculas")
  document.getElementById("guardar").hidden = true
  fila = r.parentNode.parentNode.rowIndex
  document.getElementById("titulo").value = tabla.rows[fila].cells[0].innerHTML
  document.getElementById("director").value = tabla.rows[fila].cells[1].innerHTML
  document.getElementById("codigo").value = tabla.rows[fila].cells[2].innerHTML
  document.getElementById("codigo").disabled = true
  document.getElementById("genero").options.text = tabla.rows[fila].cells[3].innerHTML

  //document.getElementById('formularioPeliculas').getElementsByTagName('option')[document.getElementById("genero").options.text].value = document.getElementById("genero").options.text
  //document.getElementById('formularioPeliculas').getElementsByTagName('option')[document.getElementById("genero").options.value].selected = document.getElementById("genero").options.text

  //document.getElementById("genero").value = tabla.rows[fila].cells[3].innerHTML

  document.getElementById("fechaEstreno").value = tabla.rows[fila].cells[4].innerHTML
  document.getElementById("valoracion").value = tabla.rows[fila].cells[5].innerHTML
  document.getElementById("val").textContent = tabla.rows[fila].cells[5].innerHTML
  document.getElementById("genero").options.value = tabla.rows[fila].cells[3].innerHTML
  document.getElementById("gen").textContent = document.getElementById("genero").options.text

  //document.NombreFormulario.NombreObjeto.options[0].selected = true

  document.getElementById("actualizar").hidden = false
  document.getElementById("cancelar").hidden = false

  guardarPeliculasLocalStorage()
}

function cancelarActualizarPelicula()
{
  var formularioPeliculas = document.getElementById("formularioPeliculas")
  formularioPeliculas.reset()
  document.getElementById("val").textContent = document.getElementById("valoracion").value
  
  document.getElementById("codigo").disabled = false
  document.getElementById("actualizar").hidden = true
  document.getElementById("cancelar").hidden = true
  document.getElementById("guardar").hidden = false
}

function actualizarPelicula()
{
  document.getElementById("guardar").hidden = false
  document.getElementById("actualizar").hidden = true
  document.getElementById("cancelar").hidden = true
  var tabla = document.getElementById("tablaPeliculas")
  guardarPelicula()
  tabla.deleteRow(fila)
  var formularioPeliculas = document.getElementById("formularioPeliculas")
  formularioPeliculas.reset()

 document.getElementById("val").textContent = document.getElementById("valoracion").value
}
//r.parentNode.parentNode.rowIndex    indice de la fila

function guardarPeliculasLocalStorage()
{
  var tbody = document.getElementById("tablaPeliculas")
  arrayPeliculas = new Array()
 for(var i=1;i<tbody.rows.length;i++)
 {
  arrayFilas = new Array()
   for(var j=0;j<tbody.rows[i].cells.length-1;j++)
   {
     arrayFilas[j] = tbody.rows[i].cells[j].innerHTML
   }
  arrayPeliculas[i-1] = arrayFilas
  }
  //localStorage.setItem("peliculas",JSON.stringify(arrayPeliculas))
}