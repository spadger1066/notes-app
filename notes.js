const chalk = require('chalk');
const fs = require('fs');
const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
};

const readNote = (title) => {
    const foundNote = loadNotes().find((note) => note.title === title);
    if(foundNote){
        console.log(chalk.blue(foundNote.title) + ' ' + foundNote.body);
    } else {
        console.log(chalk.red('Note not found'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) => note.title !== title);

    if(notes.length === remainingNotes.length){
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(remainingNotes);
        console.log(chalk.green.inverse('Note removed!'))
    }
};

const listNotes = () => {
    console.log(chalk.yellow.inverse('Your Notes'));
    loadNotes().forEach((note) => console.log(note.title));
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e){
        return[];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};