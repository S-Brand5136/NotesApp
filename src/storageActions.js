export const getNotes = () => {
  const notesArray = JSON.parse(localStorage.getItem("notesArray"));

  return notesArray;
};

export const getNotesByName = (title) => {
  const notesArray = getNotes();

  return notesArray.filter((note) => note.title.includes(title));
};

export const saveNote = (title, note) => {
  let notesArray = JSON.parse(localStorage.getItem("notesArray")) || [];

  const date = new Date().toLocaleDateString("en-US");
  const time = new Date().toLocaleTimeString("en-US");

  let dateAdded = `${date} : ${time}`;

  notesArray.push({ title, note, date: { dateAdded } });

  localStorage.setItem("notesArray", JSON.stringify(notesArray));
};

export const deleteNote = (title) => {
  let notesArray = getNotes();

  const noteIndex = notesArray.findIndex((note) => note.title === title);

  const noteToRemove = notesArray[noteIndex];

  notesArray = notesArray.filter((note) => note !== noteToRemove);

  localStorage.setItem("notesArray", JSON.stringify(notesArray));
};
