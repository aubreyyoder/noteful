import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import "./AddNote.css";
import NotefulContext from "../NotefulContext";
import config from "../config";
import PropTypes from "prop-types";
import ValidationError from "../ErrorBoundaries/ValidationError";

export default class AddNote extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = NotefulContext;

  handleSubmit = e => {
    e.preventDefault();
    const newNote = {
      name: e.target["note-name-input"].value,
      content: e.target["note-content-input"].value,
      folderId: e.target["note-folder-select"].value,
      modified: new Date()
    };
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newNote)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error occurred!`);
        } else {
          this.context.addNote(newNote);
          this.props.history.push(`folder/${newNote.folderId}`);
        }
      })
      .catch(error => {
        console.error({ error });
      });
  };

  validateNoteName(fieldValue) {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    fieldValue = fieldValue.trim();
    if (fieldValue.length === 0) {
      fieldErrors.noteName = "Name is required";
      hasError = true;
    } else {
      if (fieldValue.length > 20) {
        fieldErrors.noteName = "Name must be less than 20 characters";
        hasError = true;
      } else {
        fieldErrors.noteName = "";
        hasError = false;
      }
    }
    this.setState(
      {
        validationMessages: fieldErrors,
        noteNameValid: !hasError
      },
      this.formValid
    );
  }

  updateNoteName(noteName) {
    this.setState({ noteName }, () => {
      this.validateNoteName(noteName);
    });
  }

  render() {
    return (
      <section className="AddNote">
        <h2>Create a note</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="note-name-input">Name</label>
            <input type="text" id="note-name-input" name="note-name" />
            <ValidationError
              hasError={!this.context.noteNameValid}
              message={this.context.validationMessages.noteName}
            />
          </div>
          <div className="field">
            <label htmlFor="note-content-input">Content</label>
            <textarea id="note-content-input" name="note-content" />
          </div>
          <div className="field">
            <label htmlFor="note-folder-select">Folder</label>
            <select id="note-folder-select" name="note-folder-id">
              <option value={null}>...</option>
              {this.context.folders.map(folder => (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <button type="submit">Add note</button>
          </div>
        </NotefulForm>
      </section>
    );
  }
}

AddNote.propTypes = {
  value: PropTypes.string.isRequired
};
