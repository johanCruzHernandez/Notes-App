import React, { useState } from "react";

function NoteAdder(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    x: 20,
    y: 20,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      x: Math.floor(Math.random() * 200),
      y: Math.floor(Math.random() * 200),
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Create your note. . ."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button type="button" onClick={submitNote}>
          +
        </button>
      </form>
    </div>
  );
}

export default NoteAdder;
