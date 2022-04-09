const figlet = require('figlet');
const inquirer = require('inquirer');
const gradient = require('gradient-string');

let userName;

const greet = async () => {

    figlet('NightBrain CLI', function(err, data ) {
        console.log(data);
    })

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Ask the user's name
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter your name?'
    })

    userName = name;

    const msg = `Hello ${userName}!`
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    })

}

greet();