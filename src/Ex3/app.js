/* Escribe un programa que pida el nombre del usuario con un input 
y escriba un texto que diga “Hola <nombre-de-usuario>”*/

//Creo una función saludar.
//Dentro de la función creo una variable local.
//Imprimo mensaje en el DOM conectado con HTML a través de: innerHTML.

function saludar() {
	let nombre = document.getElementById("nombre").value;
	document.getElementById("saludo").innerHTML = "Hola " + nombre;
}

//imprimir el dato en el DOM
