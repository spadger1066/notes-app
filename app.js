const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
          describe: 'Note Title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note Body',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv) {notes.addNote(argv.title, argv.body)}
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.removeNote(argv.title)}
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {console.log('List the notes')}
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.readNote(argv.title)}
});

// Create get command
yargs.command({
    command: 'get',
    describe: 'Get a notes',
    handler() {console.log(notes.getNotes())}
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {notes.listNotes()}
});

yargs.parse();

//console.log(yargs.argv);

