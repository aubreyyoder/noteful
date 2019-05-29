import React from "react";
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
        <button name="add-note">Add Note</button>
      </div>
    );
  }
}
export default Main;
