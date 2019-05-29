import React from "react";
import { Link } from "react-router-dom";
import "./Note.css";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <h1>
          <Link to="/Note">{this.props.title}</Link>
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
