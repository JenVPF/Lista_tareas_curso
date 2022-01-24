require('colors'); //Colores para la consola, de esta forma se aplica a todos los string


const mostrarMenu = () => {
    console.clear();
    console.log('====================='.rainbow);
    console.log('Seleccione una opcion'.rainbow);
    console.log('====================='.rainbow);
}

module.exports = {
    mostrarMenu
}