import React from "react";
import NoteList from "../NoteList/NoteList";
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
        <section className="note-section">
          <NoteList notes={notes} />
        </section>
      </div>
    );
  }
}
export default Main;
