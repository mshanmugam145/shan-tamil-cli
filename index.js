#! /usr/bin/env node

import { program } from 'commander';
import { edu, add, update, getAll, deleteName } from './commands/objs.js';

program
    .command('persolunga <peyar>')
    .description('Neengal kodudha peyarku Mathipu eduthal')
    .action(edu);

program
    .command('solunga <peyar> <madhipu>')
    .description('Neengal Pudhiya peyar matrum adhan madhipu sergaiku')
    .action(add);

program
    .command('peyarmaatram <peyar> <madhipu>')
    .description('Oru peyarin mathipu maatram seivadharku')
    .action(update);

program
    .command('anaithumedu')
    .description('Anaithu peyar matrrum adhan madhipu eduka')
    .action(getAll);   
    
program
    .command('neeku <peyar>')
    .description('oru peyar neekam seivadharku')
    .action(deleteName);       

program.parse()    