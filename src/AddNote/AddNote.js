import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import "./AddNote.css";
import NotefulContext from "../NotefulContext";
import config from "../config";
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
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(newNote => {
        this.context.addNote(newNote);
        this.props.history.push(`folder/${newNote.folderId}`);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    const { folders } = this.context;
    return (
      <section className="AddNote">
        <h2>Create a note</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="note-name-input">Name</label>
            <input type="text" id="note-name-input" name="note-name" />
            <ValidationError
              hasError={!this.state.noteNameValid}
              message={this.state.validationMessages.noteName}
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
              {folders.map(folder => (
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
