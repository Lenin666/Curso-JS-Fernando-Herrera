

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
export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {

        if(heroe) {
            setTimeout(() => {
                resolve(heroe);
            }, 1000);
        } else {
            
            reject(`No existe un héroe con el id ${id}`);
        }
    }); 
}

export const buscarHeroeAsync = async (id) => {

    const heroe = heroes[id];

        if(heroe) {
            return heroe;
        } else {
            throw Error `No existe un héroe con el id ${id}`;
        }
     
}


const promesaLenta = new Promise((resolve, reject) => {
        setTimeout(() => {resolve('Promesa Lenta')}, 2000);
})

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Promesa Lenta')}, 1500);
})

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Promesa Lenta')}, 1000);
})

export {

    promesaLenta,
    promesaMedia,
    promesaRapida
}