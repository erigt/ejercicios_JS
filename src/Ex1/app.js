/* Escribe un programa que escriba en la pantalla un texto de
 tipo <h1> que diga “Hello Javascript”. */

 // crear una variable Hello Javascript
 // imprimir el dato en etiqueta h1 en el DOM

const title = "Hello Javascript"
const titleSection = document.getElementById("title")

function printTitle() {
	titleSection.innerHTML = /* html */ `
	<h1>${title}</h1>
	`
}

printTitle()