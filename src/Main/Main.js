import React from "react";
import { Link } from "react-router-dom";
import Note from "../Note/Note";
import Sidebar from "../Sidebar/Sidebar";

class Main extends React.Component {
  staticDefaultProps = {
    folders: [],
    notes: []
  };
  render() {
    const { notes } = this.props;
    const { folders } = this.props;
    return (
      <div className="main">
        <section className="sidebar">
          <Sidebar folders={folders} />
        </section>
        <section className="note-list">
          <ul id="note-list">
            {notes.map(note => (
              <Note key={note.id} {...note} />
            ))}
          </ul>
          <Link to="/note" name="add-note" className="add-note-button">
            Add Note
          </Link>
        </section>
      </div>
    );
  }
}
export default Main;
