let juegos = ['Zelda', 'Mario','Metroid','Chrono'];
console.log('largo:',juegos.length);

let primero = juegos[0]
let ultimo = juegos[juegos.length - 1];

console.log(primero);
console.log(ultimo);

juegos.forEach((elemento,indice, arr) => {
    console.log({elemento,indice,arr})
});

let nuevo = juegos.push(('F-Zero'))
console.log(nuevo,juegos)

juegos.unshift('Fire Emblem');
console.log({nuevo,juegos})

let juegoBorrado = juegos.pop();
console.log(juegoBorrado,juegos)


let pos = 1;

let juegosBorrados = juegos.splice(pos, 2)
console.log(juegosBorrados,juegos)

let metroIndex = juegos.indexOf('Metroid') //CaSeSeNsItIve
console.log(metroIndex)

