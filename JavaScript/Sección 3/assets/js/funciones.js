

function saludar (nombre) {
    console.log('Hola ' + nombre);
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
saludar('Lenin',40,true,'Costa rica');
saludar2('Lenin');

saludarFlecha()
saludarFlecha2('Lenin')
