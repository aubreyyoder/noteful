import React from "react";
import "./Note.css";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <h1>
          <a href="/Note">{this.props.title}</a>
        </h1>
        <p>Date Modified:{this.props.dateModified}</p>
        <button name="delete" className="delete-button">
          Delete Note
        </button>
      </div>
    );
  }
}

export default Note;
