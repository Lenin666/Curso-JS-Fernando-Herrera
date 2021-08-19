import { obtenerHeroesArr, obtenerHerosAwait} from "./js/await";

obtenerHerosAwait().then(heroes => {
    console.table(heroes);
    
    console.timeEnd('Await');
}).catch(err => console.log(err))

