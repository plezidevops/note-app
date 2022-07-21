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
  {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  function (argv) {
    notes.addNote(argv.title, argv.body);
  }
);

// Remove a note
yarg.command(
  'remove',
  'Removing a note',
  function (yarg) {
    return yarg.option(
      'title',
      {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    );
  },
  function (argv) {
    notes.removeNote(argv.title);
  }
);

// List the notes
yarg.command(
  'list',
  'List the notes',
  function () {
    notes.listNotes();
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

yarg.parse();