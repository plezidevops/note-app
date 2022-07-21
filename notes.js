import fs from 'fs';
import chalk from 'chalk';

const getNotes = () => {
  return 'Take the dog for a walk.';
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log('New note added');

  } else {
    console.log('Note title already taken!');
  }
};

const removeNote = title => {
  // Load the notes
  let found = false;
  const notes = loadNotes();

  // search and remove note
  notes.forEach(note => {
    if (note.title === title) {
      found = true;
      notes.splice(notes.indexOf(note.title), 1);
    }
  });

  // save note if found
  if (found) {
    console.log(chalk.bgGreen('Note removed!'));
    saveNotes(notes);
  } else {
    console.log(chalk.bgRed('No note removed!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(`${chalk.blueBright.bold(note.title)} => ${note.body}`);
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.filter(note => {
    return note.title === title;
  });

  if (note.length > 0) {
    console.log(`${chalk.blueBright.bold(note[0].title)} => ${note[0].body}`);
  } else {
    console.log(chalk.bgRed('No note found!'));
  }

};

export default {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};