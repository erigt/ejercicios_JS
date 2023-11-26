/* Escribe un programa que escriba en la pantalla un texto de
 tipo <h1> que diga “Hello Javascript”. */

 // crear una variable que contenga el valor Hello Javascript.
 
const title = "Hello Javascript"
const titleSection = document.getElementById("title")
//crear una función para insertar el title en la etiqueta h1.
function printTitle() {
	titleSection.innerHTML = /* html */ `
	<h1>${title}</h1>
	`
}
// imprimir el dato en etiqueta h1 en el DOM
printTitle()