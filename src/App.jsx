/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
// import { produce } from 'immer';
import Header from "./Header";
import NoteAdder from "./NoteAdder";
import Note from "./Note";
import {
  onNotesValueChange,
  writeNewNotes,
  deleteNote,
  updateNote,
} from "../../src/services/datastore";

function App() {
  const [notes, setNotes] = useState({});

  useEffect(() => {
    onNotesValueChange(setNotes);
  }, []);

  return (
    <div>
      <Header />
      <NoteAdder onAdd={writeNewNotes} />
      {notes &&
        Object.entries(notes).map(([id, note]) => {
          return (
            <Note
              // eslint-disable-next-line react/no-array-index-key
              key={id}
              id={id}
              note={note}
              // eslint-disable-next-line react/jsx-no-bind
              onDelete={deleteNote}
              onEdit={updateNote}
            />
          );
        })}
    </div>
  );
}

export default App;
