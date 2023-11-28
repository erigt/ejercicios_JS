/* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.*/

// creo dos variables (let) con los valores de 3 y 5.
let a = 3;
let b = 5;
// creo una función sumar.
function sumar() {
	return (a+b);
}
// imprimir el dato en el DOM
document.write("La suma de "+a+" + "+b+" es igual a " + sumar(a,b));
