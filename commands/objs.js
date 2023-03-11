import Conf from 'conf';
import chalk from 'chalk';

const store = new Conf({projectName: 'obj'});

function edu(name) {
    const fname = store.get('obj')
    if(fname && fname[name]){
        console.log(
            chalk.green.bold(`${fname[name]}`)
        )
    } else {
        console.log(
            chalk.red.bold(`"${name}" Indha peyar illai`)
        )
    }
}

function getAll() {
    const fname = store.get('obj')
    store.delete('unicorn');
    console.log(chalk.green.bold(`${JSON.stringify(fname)}`))
}

function deleteName(sname) {
    store.delete(`obj.${sname}`);
    console.log(
        chalk.green.bold(`Peyar neekapatadhu "${sname}"`)
    )
}

function add(name, value) {
    const storeName = store.get('obj');

    if(storeName && storeName[name] && storeName[name] !== undefined){
        console.log(
            chalk.red.bold(`Erkanavey indha "${name}" peyar irukiradhu matrum adhan madhipu "${storeName[name]}"`)
        )
    } else {
        console.log(
            chalk.green.bold(`Peyar serkapatadhu "${name}" = "${value}"`)
        )
        store.set(`obj.${name}`, value);
    }
}

function update(name, value) {
    store.set(`obj.${name}`, value);
    console.log(
        chalk.green.bold(`Peyar Maatrapatadhu "${name}" = "${value}"`)
    )
}

export {deleteName, getAll, edu, add, update};
