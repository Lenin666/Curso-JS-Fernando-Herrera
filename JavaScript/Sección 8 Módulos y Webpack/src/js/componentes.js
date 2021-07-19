
export const saludar = (nombre) => {

    console.log("Creando etiqueta h1")

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} alv que chido esta el webpackc`;

    document.body.append(h1);
}
