import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import notes from './notes.js';

const yarg = yargs(hideBin(process.argv));

// customize yargs version
yarg.version('1.1.0');

// Create add command
yarg.command(
  'add',
  'Add a new Note',
  function () {
    console.log('Adding the new note!');
  }
);

// Remove a note
yarg.command(
  'remove',
  'Removing a note',
  function () {
    console.log('Remove the note');
  }
);

// List the notes
yarg.command(
  'list',
  'List the notes',
  function () {
    console.log('List all the notes!');
  }
);

// read the notes
yarg.command(
  'read',
  'Read a note',
  function () {
    console.log('Read the notes');
  }
);

console.log(yarg.argv);