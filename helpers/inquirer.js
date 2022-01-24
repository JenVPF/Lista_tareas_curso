const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message:'¿Que desea hacer?',
    choices: [
        {
            value: '1',
            name: `${'1.'.blue} Crear tarea`
        },
        {
            value: '2',
            name: `${'2.'.blue} Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.blue} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.blue} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.blue} Completar tareas`
        },
        {
            value: '6',
            name: `${'6.'.blue} Borrar tarea`
        },
        {
            value: '0',
            name: `${'0.'.blue} Salir`
        }
    ]
}];

const inquireMenu = async() => {
    console.clear();
    console.log('====================='.rainbow);
    console.log('         Menu'.rainbow);
    console.log('=====================\n'.rainbow);

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion; 
}

const pausa = async() => {
    const pause = [{
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'ENTER'.green} para continuar `
    }];

    await inquirer.prompt(pause);
}

module.exports = {
    inquireMenu,
    pausa
}