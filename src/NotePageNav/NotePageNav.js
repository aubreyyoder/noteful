import React from "react";
import { Link } from "react-router-dom";
import "./NotePageNav.css";
import NotefulContext from "../NotefulContext";

export default class NotePageNav extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = NotefulContext;

  render() {
    return (
      <div className="NotePageNav">
        <Link
          tag="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="NotePageNav__back-button"
        >
          <br />
          Back
        </Link>
        {this.context.folder && (
          <h3 className="NotePageNav__folder-name">
            {this.context.folder.name}
          </h3>
        )}
      </div>
    );
  }
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
};
