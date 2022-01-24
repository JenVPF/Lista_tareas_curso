
require('colors');
const { inquireMenu, pausa } = require('./helpers/inquirer');

console.clear(); 

const main = async() => {
    console.log('Hola Mundo');
    let opt = '';

    do{
        opt = await inquireMenu();
        console.log('\n');
        console.log({opt});
        if (opt !== '0') await pausa();

    }while(opt !== '0');

}

main(); 