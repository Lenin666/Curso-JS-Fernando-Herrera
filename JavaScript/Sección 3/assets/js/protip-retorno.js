// function crearPersona (nombre, apellido ) {
//     return {
//         nombre,
//         apellido,
//     }
// }
const  crearPersona = (nombre,apellido) => ({nombre,apellido})

const persona = crearPersona('Lenin', 'Garcia');
console.log(persona)

function imprimeArgumentos() {
    console.log(arguments)
}