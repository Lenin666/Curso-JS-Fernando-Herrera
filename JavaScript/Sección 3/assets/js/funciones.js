

function saludar (nombre) {
    console.log(arguments)
    console.log('Hola ' + nombre);
    return 1;
    console.log('Soy un código después de un return');
}

const saludar2 = function(nombre) {  //funcion anonima
    console.log('Hola ' + nombre);
}
const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = nombre => {
    console.log('Hola' + nombre);
}
// saludar('Lenin',40,true,'Costa rica');
// saludar2('Lenin');

// saludarFlecha()
// saludarFlecha2('Lenin')

function sumar (a,b) {
    return a + b;
}
// const sumar2 = (a,b) => {
//     return a + b
// }
const sumar2 = (a,b) => a + b;

// function getAleatorio () {
//     return Math.random();
// }

let getAleatorio2 = () => Math.random()  


// console.log(sumar(1,2))
// console.log(sumar2(2,2))
console.log(getAleatorio())
console.log(getAleatorio2());