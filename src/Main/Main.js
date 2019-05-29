import React from "react";
import { Route, Link } from "react-router-dom";
import Note from "../Note/Note";

class Main extends React.Component {
  staticDefaultProps = {
    notes: []
  };
  render() {
    const { notes } = this.props;
    return (
      <div className="main">
        <ul id="main-list">
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
export default Main;
