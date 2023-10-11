/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Draggable from "react-draggable";

function Note(props) {
  const [isEditing, setEditing] = useState(false);

  const onContentChange = (event) => {
    props.onEdit(props.id, { content: event.target.value });
  };

  const onTitleChange = (event) => {
    props.onEdit(props.id, { title: event.target.value });
  };

  function editContent() {
    if (isEditing) {
      return (
        <div>
          <textarea
            onChange={onTitleChange}
            placeholder="Add your note..."
            value={props.note.title}
            rows="1"
          />
          <textarea
            onChange={onContentChange}
            placeholder="Add your note..."
            value={props.note.content}
            rows="3"
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>{props.note.title}</h1>
          <ReactMarkdown>{props.note.content}</ReactMarkdown>
        </div>
      );
    }
  }

  function editNote() {
    if (isEditing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
    console.log(isEditing);
  }

  function deleteNote() {
    props.onDelete(props.id);
  }

  const dragNote = (event, data) => {
    if (!data) return;
    props.onEdit(props.id, { x: data.x, y: data.y });
  };

  return (
    <Draggable
      handle="#move"
      onDrag={dragNote}
      defaultPosition={{ x: props.note.x, y: props.note.y }}
      position={{ x: props.note.x, y: props.note.y }}
    >
      <div className="note">
        {editContent()}
        <button type="button" id="delete" onClick={deleteNote}>
          -
        </button>
        <button type="button" id="edit" onClick={editNote}>
          edit
        </button>
        <button type="button" id="move" onClick={dragNote}>
          move
        </button>
      </div>
    </Draggable>
  );
}

export default Note;
