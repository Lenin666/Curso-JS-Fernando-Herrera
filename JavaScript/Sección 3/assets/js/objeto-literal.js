let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coord: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, california'
    },
    'Última-pelicula': 'Infinty War',
};
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre',personaje['nombre'])
console.log('Edad', personaje.edad);
console.log('Coords',personaje.coord);
console.log('Lat', personaje.coord.lat)

console.log('No. Trajes',personaje.trajes.length)
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1])


const x = 'Vivo';

console.log('Vivo', personaje[x]);

console.log('Última pelicula', personaje['Última-pelicula'])

// Mas detalles

delete personaje.edad
console.log (personaje);

personaje.casado = true;

const entriesPares  = Object.entries(personaje)
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 1000000000;
console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log({personaje, valores})