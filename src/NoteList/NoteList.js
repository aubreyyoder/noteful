import React from "react";
import { Link } from "react-router-dom";
import Note from "../Note/Note";

class NoteList extends React.Component {
  staticDefaultProps = {
    notes: []
  };
  render() {
    const { notes } = this.props;
    return (
      <div className="notelist">
        <ul id="note-list">
          {notes.map(note => (
            <Note key={note.id} {...note} />
          ))}
        </ul>
        <Link to="/note" name="add-note" className="add-note-button">
          Add Note
        </Link>
      </div>
    );
  }
}

export default NoteList;
