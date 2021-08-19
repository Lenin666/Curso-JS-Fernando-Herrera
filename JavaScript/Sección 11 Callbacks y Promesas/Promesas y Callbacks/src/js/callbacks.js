import { call } from "file-loader";

const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Super fuerza',
    },
     iron: {
         nombre: 'Iron Man',
         poder: 'Tener un super traje.... y dinero',
     },
     spider: {
         nombre: 'Spiderman',
         poder: 'Tiene a black cat',
     }

}

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        callback( null, heroe );
    } else {
        // Un error
        callback(`No existe un héroe con el id ${ id }`);
    }

    // callback( heroe );


}
 