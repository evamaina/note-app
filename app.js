const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'This is the body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: 'remove',
  describe: 'Removing a note ',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: String,
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },

  handler(argv) {
    notes.readNote(argv.title);
  },
});
// console.log(yargs.argv);
yargs.parse();
