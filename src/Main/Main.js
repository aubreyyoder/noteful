import React from "react";
import { Route } from "react-router-dom";
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
            <Route
              path="/note"
              render={() => <Note key={note.id} {...note} />}
            />
          ))}
        </ul>
        <button name="add-note" className="add-note-button">
          Add Note
        </button>
      </div>
    );
  }
}
export default Main;
