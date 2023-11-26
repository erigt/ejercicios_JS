/* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.*/

// crear variable de suma
// imprimir el dato en el DOM

const title = "La suma de 3 + 5 es igual a ";
let a = 3;
let b = 5;

function sumar() {
	document.write(title + (a+b));
	document.write(title + (a+b).toString());
}

sumar();
