import {subirImagen} from './http-provider'


const body = document.body;
let inputfile, imgFoto;

const crearInputFileHtml = () => {

    const html = `
    <h1 class="mt-5">Subir archivos</h1>
    <hr>

    <label>Selecciona una fotografia</label>
    <input type="file" accept="image/png, image/jpeg">

    <br>
    <img id="foto" class='img-thubnial" src="">
    
    `

    const div = document.createElement('div')
    div.innerHTML = html;
    body.append(div)

    inputfile = document.querySelector('input')
    imgFoto = document.querySelector("#foto")

}

const eventos = () => {
    inputfile.addEventListener('change', (event) => {

        const file = event.target.files[0];
        // console.log(file);
        subirImagen(file).then( url => {
            imgFoto.src = url;
        })

    })
}




export const init = () => {
    crearInputFileHtml(),
    eventos()
    
}
