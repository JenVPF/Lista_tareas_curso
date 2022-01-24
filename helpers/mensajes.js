require('colors'); //Colores para la consola, de esta forma se aplica a todos los string

const mostrarMenu = () => {

    return new Promise(resolve => { //Retornamos una promesa para esperar la respuesta
        console.clear();
        console.log('====================='.rainbow);
        console.log('         Menu'.rainbow);
        console.log('=====================\n'.rainbow);

        console.log(`${'1.'.blue} Crear tarea`);
        console.log(`${'2.'.blue} Listar tareas`);
        console.log(`${'3.'.blue} Listar tareas completadas`);
        console.log(`${'4.'.blue} Listar tareas pendientes`);
        console.log(`${'5.'.blue} Completar tareas`);
        console.log(`${'6.'.blue} Borrar tarea`);
        console.log(`${'0.'.blue} Salir`);
        
        /** 
         * ? Recibir informacion del usuario desde consola */
        // * El readline es un paquete queviene por defecto en node
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //Aqui estamos recibiendo el dato por consola
        readline.question('\nSeleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    });

}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        //Aqui estamos recibiendo el dato por consola
        readline.question(`\nPresione ${'ENTER'.green} para continuar `, (opt) => {
            readline.close();
            resolve();
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}