import React from "react";
import NotefulContext from "../NotefulContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Note from "../Note/Note";
import { getNotesForFolder } from "../notes-helper";
import "./NoteListMain.css";

class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = NotefulContext;

  render() {
    const { folderId } = this.props.match.params;
    const { notes = [] } = this.context;
    const notesForFolder = getNotesForFolder(notes, folderId);
    return (
      <section className="NoteListMain">
        <ul>
          {notesForFolder.map(note => (
            <li key={note.id}>
              <Note id={note.id} name={note.name} modified={note.modified} />
            </li>
          ))}
        </ul>
        <div className="NoteListMain__button-container">
          <Link
            to="/add-note"
            type="button"
            className="NoteListMain__add-note-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Add Note
          </Link>
        </div>
      </section>
    );
  }
}

export default NoteListMain;
