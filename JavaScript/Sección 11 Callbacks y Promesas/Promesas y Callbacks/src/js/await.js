import {buscarHeoresAsync, buscarHeroe, buscarHeroeAsync} from './promesas'

const heroesIds = [
    'capi',
    'iron',
    'spider'
]

const heroesPromesas = heroesIds.map(id => buscarHeroe(id));

export const obtenerHeroesArr = async () => {

    return await Promise.all( heroesIds.map( buscarHeroe ));
    // const heroesArr = [];

    // for( const id of heroesIds) {
    //    heroesArr.push(buscarHeroe(id))
       
    // }

    // return await Promise.all(heroesArr)
}

export const obtenerHerosAwait = async () => {   
    
    try {
        
        const heroe = await buscarHeroeAsync();
        
        return heroe;


    } catch( err ) {

        console.log('catch!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }

    }

}

export const heroesCiclo = async() => {

    console.time('heroesCiclo');

    for await (const heroe of heroesPromesas){
        console.log(heroe)
    }

    // const heroes = await Promise.all(heroesPromesas);

    // console.log(heroes)

    console.timeEnd('heroesCiclo');
}

export const heroeIfAwait = async () => {
    
    if ( (await buscarHeoresAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos')
    } else {
        console.log('Naa')
    }

}