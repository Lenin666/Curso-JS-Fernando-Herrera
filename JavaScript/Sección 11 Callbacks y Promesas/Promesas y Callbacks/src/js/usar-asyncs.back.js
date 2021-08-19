import {buscarHeroe, buscarHeroeAsync} from './js/promesas';


buscarHeroe('capi2')
                    .then(console.log)
                    .catch(console.warn);

buscarHeroe('iron2')
                    .then(console.log)
                    .catch(console.warn);
